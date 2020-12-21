# @datafire/vimeo

Client library for Vimeo

## Installation and Usage
```bash
npm install --save @datafire/vimeo
```
```js
let vimeo = require('@datafire/vimeo').create({
  bearer: "",
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
vimeo.oauthCallback({
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
vimeo.oauthRefresh(null, context)
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

### get_endpoints
Get an API specification


```js
vimeo.get_endpoints({}, context)
```

#### Input
* input `object`
  * openapi `boolean`: Return an OpenAPI specification.

#### Output
* output [endpoint](#endpoint)

### get_categories
This method gets all existing categories.


```js
vimeo.get_categories({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: last_video_featured_time, name): The way to sort the results.

#### Output
* output `array`
  * items [category](#category)

### get_category
Get a specific category


```js
vimeo.get_category({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.

#### Output
* output [category](#category)

### get_category_channels
Get all the channels in a category


```js
vimeo.get_category_channels({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, followers, videos): The way to sort the results.

#### Output
* output `array`
  * items [channel](#channel)

### get_category_groups
Get all the groups in a category


```js
vimeo.get_category_groups({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, members, videos): The way to sort the results.

#### Output
* output `array`
  * items [group](#group)

### get_category_videos
Get all the videos in a category


```js
vimeo.get_category_videos({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: conditional_featured, embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, featured, likes, plays, relevant): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### check_category_for_video
Check for a video in a category


```js
vimeo.check_category_for_video({
  "category": "",
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### get_channels
Get all channels


```js
vimeo.get_channels({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: featured): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, followers, relevant, videos): The way to sort the results.

#### Output
* output `array`
  * items [channel](#channel)

### create_channel
This method creates a new channel.


```js
vimeo.create_channel({
  "body": {
    "name": "",
    "privacy": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * description `string`: The description of the channel.
    * link `string`: The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`.
    * name **required** `string`: The name of the channel.
    * privacy **required** `string` (values: anybody, moderators, user): The privacy level of the channel.

#### Output
* output [channel](#channel)

### delete_channel
Delete a channel


```js
vimeo.delete_channel({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.

#### Output
*Output schema unknown*

### get_channel
Get a specific channel


```js
vimeo.get_channel({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.

#### Output
* output [channel](#channel)

### edit_channel
This method edits the specified channel.


```js
vimeo.edit_channel({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body `object`
    * description `string`: The description of the channel.
    * link `string`: The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`. Submitting `""` for this field removes the link alias.
    * name `string`: The name of the channel.
    * privacy `string` (values: anybody, moderators, users): The privacy level of the channel.

#### Output
* output [channel](#channel)

### get_channel_categories
This method gets all the categories in the specified channel.


```js
vimeo.get_channel_categories({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.

#### Output
* output `array`
  * items [category](#category)

### add_channel_categories
This method adds multiple categories to the specified channel.


```js
vimeo.add_channel_categories({
  "channel_id": 0,
  "body": {
    "channels": []
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * channels **required** `array`: The array of category URIs to add.
      * items `string`

#### Output
*Output schema unknown*

### delete_channel_category
This method removes a single category from the specified channel.


```js
vimeo.delete_channel_category({
  "category": "",
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * channel_id **required** `number`: The ID of the channel.

#### Output
*Output schema unknown*

### categorize_channel
This method adds a channel to a category.


```js
vimeo.categorize_channel({
  "category": "",
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * channel_id **required** `number`: The ID of the channel.

#### Output
*Output schema unknown*

### remove_channel_moderators
Remove a list of channel moderators


```js
vimeo.remove_channel_moderators({
  "channel_id": 0,
  "body": {
    "user_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * user_uri **required** `string`: The URI of a user to remove as a moderator.

#### Output
* output [user](#user)

### get_channel_moderators
Get all the moderators in a channel


```js
vimeo.get_channel_moderators({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### replace_channel_moderators
Replace the moderators of a channel


```js
vimeo.replace_channel_moderators({
  "channel_id": 0,
  "body": {
    "user_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * user_uri **required** `string`: The URI of the user to add as a moderator.

#### Output
* output `array`
  * items [user](#user)

### add_channel_moderators
Add a list of channel moderators


```js
vimeo.add_channel_moderators({
  "channel_id": 0,
  "body": {
    "user_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * user_uri **required** `string`: The URI of a user to add as a moderator.

#### Output
*Output schema unknown*

### remove_channel_moderator
Remove a specific channel moderator


```js
vimeo.remove_channel_moderator({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_channel_moderator
Get a specific channel moderator


```js
vimeo.get_channel_moderator({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [user](#user)

### add_channel_moderator
Add a specific channel moderator


```js
vimeo.add_channel_moderator({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [legacy-error](#legacy-error)

### get_channel_privacy_users
This method gets all the users who have access to the specified private channel.


```js
vimeo.get_channel_privacy_users({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [user](#user)

### set_channel_privacy_users
This method gives multiple users access to the specified private channel.


```js
vimeo.set_channel_privacy_users({
  "channel_id": 0,
  "body": {
    "users": []
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * users **required** `array`: The array of either the user URIs or the user IDs to permit to view the private channel.
      * items `string`

#### Output
* output `array`
  * items [user](#user)

### delete_channel_privacy_user
This method prevents a single user from being able to access the specified private channel.


```js
vimeo.delete_channel_privacy_user({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### set_channel_privacy_user
This method gives a single user access to the specified private channel.


```js
vimeo.set_channel_privacy_user({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_channel_tags
This method gets all the tags that have been added to the specified channel.


```js
vimeo.get_channel_tags({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.

#### Output
* output `array`
  * items [tag](#tag)

### add_tags_to_channel
This method adds multiple tags to the specified channel.


```js
vimeo.add_tags_to_channel({
  "channel_id": 0,
  "body": {
    "tag": []
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * tag **required** `array`: An array of tags to assign.
      * items `string`

#### Output
* output `array`
  * items [tag](#tag)

### delete_tag_from_channel
This method removes a single tag from the specified channel.


```js
vimeo.delete_tag_from_channel({
  "channel_id": 0,
  "word": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * word **required** `string`: The word to use as the tag.

#### Output
*Output schema unknown*

### check_if_channel_has_tag
This method determines whether a specific tag has been added to the channel in question.


```js
vimeo.check_if_channel_has_tag({
  "channel_id": 0,
  "word": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * word **required** `string`: The word to use as the tag.

#### Output
*Output schema unknown*

### add_channel_tag
This method adds a single tag to the specified channel.


```js
vimeo.add_channel_tag({
  "channel_id": 0,
  "word": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * word **required** `string`: The word to use as the tag.

#### Output
*Output schema unknown*

### get_channel_subscribers
Get all the followers of a channel


```js
vimeo.get_channel_subscribers({
  "channel_id": 0,
  "filter": ""
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter **required** `string` (values: moderators): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### remove_videos_from_channel
Remove a list of videos from a channel


```js
vimeo.remove_videos_from_channel({
  "channel_id": 0,
  "body": {
    "video_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * video_uri **required** `string`: The URI of a video to remove.

#### Output
* output [video](#video)

### get_channel_videos
Get all the videos in a channel


```js
vimeo.get_channel_videos({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * containing_uri `string`: The page that contains the video URI.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: added, alphabetical, comments, date, default, duration, likes, manual, modified_time, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### add_videos_to_channel
Add a list of videos to a channel


```js
vimeo.add_videos_to_channel({
  "channel_id": 0,
  "body": {
    "video_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * body **required** `object`
    * video_uri **required** `string`: The URI of a video to add.

#### Output
*Output schema unknown*

### delete_video_from_channel
Remove a specific video from a channel


```js
vimeo.delete_video_from_channel({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_channel_video
This method returns a specific video in a channel. You can use it to determine whether the video is in the channel.


```js
vimeo.get_channel_video({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### add_video_to_channel
Add a specific video to a channel


```js
vimeo.add_video_to_channel({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_comments_alt1
Get all the comments on a video


```js
vimeo.get_comments_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [comment](#comment)

### create_comment_alt1
Add a comment to a video


```js
vimeo.create_comment_alt1({
  "channel_id": 0,
  "video_id": 0,
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * text **required** `string`: The text of the comment.

#### Output
* output [comment](#comment)

### get_video_credits_alt1
Get all the credited users in a video


```js
vimeo.get_video_credits_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [credit](#credit)

### add_video_credit_alt1
Credit a user in a video


```js
vimeo.add_video_credit_alt1({
  "channel_id": 0,
  "video_id": 0,
  "body": {
    "email": "",
    "name": "",
    "role": "",
    "user_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * email **required** `string`: The email address of the credited person.
    * name **required** `string`: The name of the credited person.
    * role **required** `string`: The role of the credited person.
    * user_uri **required** `string`: The URI of the Vimeo user who should be given credit in this video.

#### Output
* output [credit](#credit)

### get_video_likes_alt1
Get all the users who have liked a video


```js
vimeo.get_video_likes_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### get_video_thumbnails_alt1
Get all the thumbnails of a video


```js
vimeo.get_video_thumbnails_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### create_video_thumbnail_alt1
Add a video thumbnail


```js
vimeo.create_video_thumbnail_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * body `object`
    * active `boolean`: Whether the image created by the `time` field should be the default thumbnail for the video.
    * time `number`: Creates an image of the video from the given time offset.

#### Output
* output [picture](#picture)

### get_video_privacy_users_alt1
Get all the users who can view a user's private videos by default


```js
vimeo.get_video_privacy_users_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [user](#user)

### add_video_privacy_users_alt1
The body of this request should follow our
[batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
a single `URI` field, and the value of this field must be the URI of the user who can view this video.


```js
vimeo.add_video_privacy_users_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.

#### Output
* output `array`
  * items [user](#user)

### get_text_tracks_alt1
Get all the text tracks of a video


```js
vimeo.get_text_tracks_alt1({
  "channel_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.

#### Output
* output `array`
  * items [text-track](#text-track)

### create_text_track_alt1
For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).


```js
vimeo.create_text_track_alt1({
  "channel_id": 0,
  "video_id": 0,
  "body": {
    "language": "",
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * active `boolean`: Active text tracks appear in the player and are visible to other users. Only one text track per language can be active.
    * language **required** `string`: The language of the text track. For a complete list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
    * name **required** `string`: The name of the text track.
    * type **required** `string` (values: captions, chapters, descriptions, metadata, subtitles): The type of the text track.

#### Output
* output [text-track](#text-track)

### get_content_ratings
Get all content ratings


```js
vimeo.get_content_ratings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [content-rating](#content-rating)

### get_cc_licenses
Get all Creative Commons licenses


```js
vimeo.get_cc_licenses(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [creative-commons](#creative-commons)

### get_groups
Get all groups


```js
vimeo.get_groups({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: featured): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, followers, relevant, videos): The way to sort the results.

#### Output
* output `array`
  * items [group](#group)

### create_group
Create a group


```js
vimeo.create_group({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * description `string`: The description of the new group.
    * name **required** `string`: The name of the new group.

#### Output
* output [group](#group)

### delete_group
Delete a group


```js
vimeo.delete_group({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.

#### Output
*Output schema unknown*

### get_group
Get a specific group


```js
vimeo.get_group({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.

#### Output
* output [group](#group)

### get_group_members
Get all the members of a group


```js
vimeo.get_group_members({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: moderators): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### get_group_videos
Get all the videos in a group


```js
vimeo.get_group_videos({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### delete_video_from_group
Remove a video from a group


```js
vimeo.delete_video_from_group({
  "group_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_group_video
Check if a group has a video.


```js
vimeo.get_group_video({
  "group_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### add_video_to_group
Add a video to a group


```js
vimeo.add_video_to_group({
  "group_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### get_languages
Get all languages


```js
vimeo.get_languages({}, context)
```

#### Input
* input `object`
  * filter `string` (values: texttracks): The attribute by which to filter the results.

#### Output
* output `array`
  * items [language](#language)

### get_user_alt1
Get a user


```js
vimeo.get_user_alt1(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [user](#user)

### edit_user_alt1
Edit a user


```js
vimeo.edit_user_alt1({}, context)
```

#### Input
* input `object`
  * body `object`
    * bio `string`: The user's bio.
    * content_filter `array`: A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint. You must provide a comma-separated list if you are using a query string or an array if you are using JSON.
      * items `string`
    * link `string`: The user's custom Vimeo URL slug.
    * location `string`: The user's location.
    * name `string`: The user's display name.
    * password `string`: The default password for all future videos that this user uploads. To use this field, the `videos.privacy.view` field must be `password`.
    * videos `object`
      * privacy `object`
        * add `boolean`: Whether a user can add the video to an album, channel, or group. This value becomes the default add setting for all future videos uploaded by the user.
        * comments `string` (values: anybody, contacts, nobody): Who can comment on the video. This value becomes the default comment setting for all future videos that this user uploads.
        * download `boolean`: Whether a user can download the video. This value becomes the default download setting for all future videos that this user uploads.
        * embed `string` (values: private, public, whitelist): The privacy for embed videos. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for adding and removing domains.
        * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): Who can view the video. This value becomes the default view setting for all future videos that this user uploads.

#### Output
* output [user](#user)

### get_albums_alt1
Get all the albums that belong to a user


```js
vimeo.get_albums_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, duration, videos): The way to sort the results.

#### Output
* output `array`
  * items [album](#album)

### create_album_alt1
Create an album


```js
vimeo.create_album_alt1({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * brand_color `string`: The hexadecimal code for the color of the player buttons.
    * description `string`: The description of the album.
    * hide_nav `boolean`: Whether to hide Vimeo navigation when displaying the album.
    * layout `string` (values: grid, player): The type of layout for presenting the album.
    * name **required** `string`: The name of the album.
    * password `string`: The album's password. Required only if **privacy** is `password`.
    * privacy `string` (values: anybody, embed_only, password): The privacy level of the album.
    * review_mode `boolean`: Whether album videos should use the review mode URL.
    * sort `string` (values: added_first, added_last, alphabetical, arranged, comments, likes, newest, oldest, plays): The default sort order of the album's videos.
    * theme `string` (values: dark, standard): The color theme of the album.

#### Output
* output [album](#album)

### delete_album_alt1
Delete an album


```js
vimeo.delete_album_alt1({
  "album_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.

#### Output
*Output schema unknown*

### get_album_alt1
Get a specific album


```js
vimeo.get_album_alt1({
  "album_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.

#### Output
* output [album](#album)

### edit_album_alt1
Edit an album


```js
vimeo.edit_album_alt1({
  "album_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * body `object`
    * brand_color `string`: The hexadecimal code for the color of the player buttons.
    * description `string`: The description of the album.
    * domain `string`: The custom domain a user has selected for their album.
    * hide_nav `boolean`: Whether to hide Vimeo navigation when displaying the album.
    * layout `string` (values: grid, player): The type of layout for presenting the album.
    * name `string`: The name of the album.
    * password `string`: The album's password. Required only if **privacy** is `password`.
    * privacy `string` (values: anybody, embed_only, password): The privacy level of the album.
    * review_mode `boolean`: Whether album videos should use the review mode URL.
    * sort `string` (values: added_first, added_last, alphabetical, arranged, comments, likes, newest, oldest, plays): The default sort order of the album's videos.
    * theme `string` (values: dark, standard): The color theme of the album.
    * url `string`: The custom Vimeo URL a user has selected for their album.
    * use_custom_domain `boolean`: Whether the user has opted in to use a custom domain for their album.

#### Output
* output [album](#album)

### get_album_videos_alt1
Get all the videos in an album


```js
vimeo.get_album_videos_alt1({
  "album_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * containing_uri `string`: The page containing the video URI.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * password `string`: The password of the album.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, default, duration, likes, manual, modified_time, plays): The way to sort the results.
  * weak_search `boolean`: Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.

#### Output
* output `array`
  * items [video](#video)

### replace_videos_in_album_alt1
This method replaces all the existing videos in an album with one or more videos.


```js
vimeo.replace_videos_in_album_alt1({
  "album_id": 0,
  "body": {
    "videos": ""
  }
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * body **required** `object`
    * videos **required** `string`: A comma-separated list of video URIs.

#### Output
*Output schema unknown*

### remove_video_from_album_alt1
Remove a video from an album


```js
vimeo.remove_video_from_album_alt1({
  "album_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_album_video_alt1
This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.


```js
vimeo.get_album_video_alt1({
  "album_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * video_id **required** `number`: The ID of the video.
  * password `string`: The password of the album.

#### Output
* output [video](#video)

### add_video_to_album_alt1
Add a specific video to an album


```js
vimeo.add_video_to_album_alt1({
  "album_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### set_video_as_album_thumbnail_alt1
Set a video as the album thumbnail


```js
vimeo.set_video_as_album_thumbnail_alt1({
  "album_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * video_id **required** `number`: The ID of the video.
  * body `object`
    * time_code `number`: The video frame time in seconds to use as the album thumbnail.

#### Output
* output [album](#album)

### get_appearances_alt1
Get all the videos in which a user appears


```js
vimeo.get_appearances_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### get_category_subscriptions_alt1
Get all the categories that a user follows


```js
vimeo.get_category_subscriptions_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, date, name): The way to sort the results.

#### Output
* output `array`
  * items [category](#category)

### unsubscribe_from_category_alt1
Unsubscribe a user from a category


```js
vimeo.unsubscribe_from_category_alt1({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.

#### Output
*Output schema unknown*

### check_if_user_subscribed_to_category_alt1
Check if a user follows a category


```js
vimeo.check_if_user_subscribed_to_category_alt1({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.

#### Output
*Output schema unknown*

### subscribe_to_category_alt1
Subscribe a user to a single category


```js
vimeo.subscribe_to_category_alt1({
  "category": 0
}, context)
```

#### Input
* input `object`
  * category **required** `number`: The name of the category.

#### Output
*Output schema unknown*

### get_channel_subscriptions_alt1
Get all the channels to which a user subscribes


```js
vimeo.get_channel_subscriptions_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: moderated): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, followers, videos): The way to sort the results.

#### Output
* output `array`
  * items [channel](#channel)

### unsubscribe_from_channel_alt1
Unsubscribe a user from a specific channel


```js
vimeo.unsubscribe_from_channel_alt1({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.

#### Output
*Output schema unknown*

### check_if_user_subscribed_to_channel_alt1
Check if a user follows a channel


```js
vimeo.check_if_user_subscribed_to_channel_alt1({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.

#### Output
*Output schema unknown*

### subscribe_to_channel_alt1
Subscribe a user to a specific channel


```js
vimeo.subscribe_to_channel_alt1({
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.

#### Output
*Output schema unknown*

### get_custom_logos_alt1
Get all the custom logos that belong to a user


```js
vimeo.get_custom_logos_alt1(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [picture](#picture)

### create_custom_logo_alt1
Add a custom logo


```js
vimeo.create_custom_logo_alt1(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [picture](#picture)

### get_custom_logo_alt1
Get a specific custom logo


```js
vimeo.get_custom_logo_alt1({
  "logo_id": 0
}, context)
```

#### Input
* input `object`
  * logo_id **required** `number`: The ID of the custom logo.

#### Output
* output [picture](#picture)

### get_feed_alt1
Get all videos in a user's feed


```js
vimeo.get_feed_alt1({}, context)
```

#### Input
* input `object`
  * offset `string`: Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * type `string` (values: appears, category_featured, channel, facebook_feed, following, group, likes, ondemand_publish, share, tagged_with, twitter_timeline, uploads): The feed type.

#### Output
* output `array`
  * items [activity-3-1](#activity-3-1)

### get_followers_alt1
Get all the followers of a user


```js
vimeo.get_followers_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### get_user_following_alt1
Get all the users that a user is following


```js
vimeo.get_user_following_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: online): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### follow_users_alt1
Follow a list of users


```js
vimeo.follow_users_alt1({
  "body": {
    "users": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * users **required** `array`: An array of user URIs for the list of users to follow.
      * items `string`

#### Output
*Output schema unknown*

### unfollow_user_alt1
Unfollow a user


```js
vimeo.unfollow_user_alt1({
  "follow_user_id": 0
}, context)
```

#### Input
* input `object`
  * follow_user_id **required** `number`: The ID of the following user.

#### Output
*Output schema unknown*

### check_if_user_is_following_alt1
Check if a user is following another user


```js
vimeo.check_if_user_is_following_alt1({
  "follow_user_id": 0
}, context)
```

#### Input
* input `object`
  * follow_user_id **required** `number`: The ID of the following user.

#### Output
*Output schema unknown*

### follow_user_alt1
Follow a specific user


```js
vimeo.follow_user_alt1({
  "follow_user_id": 0
}, context)
```

#### Input
* input `object`
  * follow_user_id **required** `number`: The ID of the following user.

#### Output
*Output schema unknown*

### get_user_groups_alt1
Get all the groups that a user has joined


```js
vimeo.get_user_groups_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: moderated): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, members, videos): The way to sort the results.

#### Output
* output `array`
  * items [group](#group)

### leave_group_alt1
Remove a user from a group


```js
vimeo.leave_group_alt1({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.

#### Output
*Output schema unknown*

### check_if_user_joined_group_alt1
Check if a user has joined a group


```js
vimeo.check_if_user_joined_group_alt1({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.

#### Output
*Output schema unknown*

### join_group_alt1
Add a user to a group


```js
vimeo.join_group_alt1({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.

#### Output
*Output schema unknown*

### get_likes_alt1
Get all the videos that a user has liked


```js
vimeo.get_likes_alt1({}, context)
```

#### Input
* input `object`
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### unlike_video_alt1
Cause a user to unlike a video


```js
vimeo.unlike_video_alt1({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### check_if_user_liked_video_alt1
Check if a user has liked a video


```js
vimeo.check_if_user_liked_video_alt1({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### like_video_alt1
Cause a user to like a video


```js
vimeo.like_video_alt1({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_user_vods_alt1
Get all the On Demand pages of a user


```js
vimeo.get_user_vods_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: film, series): The type of On Demand pages to return.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: added, alphabetical, date, modified_time, name, publish.time, rating): The way to sort the results.

#### Output
* output `array`
  * items [on-demand-page](#on-demand-page)

### create_vod_alt1
Create an On Demand page


```js
vimeo.create_vod_alt1({
  "body": {
    "content_rating": "",
    "description": "",
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * accepted_currencies `string` (values: AUD, CAD, CHF, DKK, EUR, GBP, JPY, KRW, NOK, PLN, SEK, USD): An array of accepted currencies.
    * buy `object`
      * active `boolean`: Whether the Buy action is active. *Required if `rent.active` is false.
      * download `boolean`: Whether people who buy the video can download it. To use this field, `type` must be `film`.
      * price `object`
        * AUD `number`: The purchase price of this video in AUD.
        * CAD `number`: The purchase price of this video in CAD.
        * CHF `number`: The purchase price of this video in CHF.
        * DKK `number`: The purchase price of this video in DKK.
        * EUR `number`: The purchase price of this video in EUR.
        * GBP `number`: The purchase price of this video in GBP.
        * JPY `number`: The purchase price of this video in JPY.
        * KRW `number`: The purchase price of this video in KRW.
        * NOK `number`: The purchase price of this video in NOK.
        * PLN `number`: The purchase price of this video in PLN.
        * SEK `number`: The purchase price of this video in SEK.
        * USD `number`: The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.
    * content_rating **required** `string` (values: drugs, language, nudity, safe, unrated, violence): One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
    * description **required** `string`: The description of the On Demand page.
    * domain_link `string`: The custom domain of the On Demand page.
    * episodes `object`
      * buy `object`
        * active `boolean`: Whether episodes can be bought.
        * download `boolean`: Whether people who buy the episode can download it. To use this field, `type` must be `series`.
        * price `object`
          * USD `number`: The purchase price per episode. *Required if `episodes.buy.active` is true.
      * rent `object`
        * active `boolean`: Whether episodes can be rented
        * period `string` (values: 1 week, 1 year, 24 hour, 3 month, 30 day, 48 hour, 6 month, 72 hour): The period in which this episode can be rented for.
        * price `object`
          * USD `number`: The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
    * link `string`: The custom string to use in this On Demand page's Vimeo URL.
    * name **required** `string`: The name of the On Demand page.
    * rent `object`
      * active `boolean`: Whether the video can be rented. *Required if `buy.active` is false.
      * period `string` (values: 1 week, 1 year, 24 hour, 3 month, 30 day, 48 hour, 6 month, 72 hour): The period in which this can be rented for.
      * price `object`
        * AUD `number`: The rental price of this video in AUD.
        * CAD `number`: The rental price of this video in CAD.
        * CHF `number`: The rental price of this video in CHF.
        * DKK `number`: The rental price of this video in DKK.
        * EUR `number`: The rental price of this video in EUR.
        * GBP `number`: The rental price of this video in GBP.
        * JPY `number`: The rental price of this video in JPY.
        * KRW `number`: The rental price of this video in KRW.
        * NOK `number`: The rental price of this video in NOK.
        * PLN `number`: The rental price of this video in PLN.
        * SEK `number`: The rental price of this video in SEK.
        * USD `number`: The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.
    * subscription `object`
      * monthly `object`
        * active `boolean`: Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false.
        * price `object`
          * USD `number`: The monthly subscription price in USD. *Required if `subscription.active` is true.
    * type **required** `string` (values: film, series): The type of On Demand page.

#### Output
* output [on-demand-page](#on-demand-page)

### get_vod_purchases
Get all the On Demand purchases and rentals that a user has made


```js
vimeo.get_vod_purchases({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: all, expiring_soon, film, important, purchased, rented, series, subscription, unwatched, watched): The type of On Demand videos to show.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: added, alphabetical, date, name, purchase_time, rating, release_date): The way to sort the results.

#### Output
* output `array`
  * items [on-demand-page](#on-demand-page)

### check_if_vod_was_purchased_alt1
Check if a user has made a purchase or rental from an On Demand page


```js
vimeo.check_if_vod_was_purchased_alt1({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [on-demand-page](#on-demand-page)

### get_pictures_alt1
Get all the pictures that belong to a user


```js
vimeo.get_pictures_alt1({}, context)
```

#### Input
* input `object`
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### create_picture_alt1
Add a user picture


```js
vimeo.create_picture_alt1(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [picture](#picture)

### delete_picture_alt1
Delete a user picture


```js
vimeo.delete_picture_alt1({
  "portraitset_id": 0
}, context)
```

#### Input
* input `object`
  * portraitset_id **required** `number`: The ID of the picture.

#### Output
*Output schema unknown*

### get_picture_alt1
Get a specific user picture


```js
vimeo.get_picture_alt1({
  "portraitset_id": 0
}, context)
```

#### Input
* input `object`
  * portraitset_id **required** `number`: The ID of the picture.

#### Output
* output [picture](#picture)

### edit_picture_alt1
Edit a user picture


```js
vimeo.edit_picture_alt1({
  "portraitset_id": 0
}, context)
```

#### Input
* input `object`
  * portraitset_id **required** `number`: The ID of the picture.
  * body `object`
    * active `boolean`: Whether the picture is the user's active portrait.

#### Output
* output [picture](#picture)

### get_portfolios_alt1
Get all the portfolios that belong to a user


```js
vimeo.get_portfolios_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [portfolio](#portfolio)

### get_portfolio_alt1
Get a specific portfolio


```js
vimeo.get_portfolio_alt1({
  "portfolio_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.

#### Output
* output [portfolio](#portfolio)

### get_portfolio_videos_alt1
Get all the videos in a portfolio


```js
vimeo.get_portfolio_videos_alt1({
  "portfolio_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * containing_uri `string`: The page that contains the video URI.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, comments, date, default, likes, manual, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### delete_video_from_portfolio_alt1
Remove a video from a portfolio


```js
vimeo.delete_video_from_portfolio_alt1({
  "portfolio_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_portfolio_video_alt1
Get a specific video in a portfolio


```js
vimeo.get_portfolio_video_alt1({
  "portfolio_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### add_video_to_portfolio_alt1
Add a video to a portfolio


```js
vimeo.add_video_to_portfolio_alt1({
  "portfolio_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_embed_presets_alt1
Get all the embed presets that a user has created


```js
vimeo.get_embed_presets_alt1({}, context)
```

#### Input
* input `object`
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [presets](#presets)

### get_embed_preset_alt1
Get a specific embed preset


```js
vimeo.get_embed_preset_alt1({
  "preset_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.

#### Output
* output [presets](#presets)

### edit_embed_preset_alt1
Edit an embed preset


```js
vimeo.edit_embed_preset_alt1({
  "preset_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * body `object`
    * outro `string` (values: nothing): Disable the outro.

#### Output
* output [presets](#presets)

### get_embed_preset_videos_alt1
Get all the videos that have been added to an embed preset


```js
vimeo.get_embed_preset_videos_alt1({
  "preset_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [video](#video)

### get_projects_alt1
This method gets all the projects that belong to the specified user.


```js
vimeo.get_projects_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: date, default, modified_time, name): The way to sort the results.

#### Output
* output `array`
  * items [project](#project)

### create_project_alt1
This method creates a new project for the specified user.


```js
vimeo.create_project_alt1({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * name **required** `string`: The name of the project.

#### Output
* output [project](#project)

### delete_project_alt1
This method deletes a project and optionally also the videos that it contains.


```js
vimeo.delete_project_alt1({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * should_delete_clips `boolean`: Whether to delete all the videos in the project along with the project itself.

#### Output
*Output schema unknown*

### get_project_alt1
This method gets a single project that belongs to the specified user.


```js
vimeo.get_project_alt1({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.

#### Output
* output [project](#project)

### edit_project_alt1
This method edits an existing project.


```js
vimeo.edit_project_alt1({
  "project_id": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * body **required** `object`
    * name **required** `string`: The name of the project.

#### Output
* output [project](#project)

### remove_videos_from_project_alt1
This method removed multiple videos from the specified project.


```js
vimeo.remove_videos_from_project_alt1({
  "project_id": 0,
  "uris": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * should_delete_clips `boolean`: Whether to delete the videos when removing them from the project.
  * uris **required** `string`: A comma-separated list of the video URIs to remove.

#### Output
*Output schema unknown*

### get_project_videos_alt1
This method gets all the videos that belong to the specified project.


```js
vimeo.get_project_videos_alt1({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, date, default, duration, last_user_action_event_date): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### add_videos_to_project_alt1
This method adds multiple videos to the specified project.


```js
vimeo.add_videos_to_project_alt1({
  "project_id": 0,
  "uris": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * uris **required** `string`: A comma-separated list of video URIs to add.

#### Output
*Output schema unknown*

### remove_video_from_project_alt1
This method removes a single video from the specified project.


```js
vimeo.remove_video_from_project_alt1({
  "project_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### add_video_to_project_alt1
This method adds a single video to the specified project.


```js
vimeo.add_video_to_project_alt1({
  "project_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_videos_alt1
Get all the videos that a user has uploaded


```js
vimeo.get_videos_alt1({}, context)
```

#### Input
* input `object`
  * containing_uri `string`: The page that contains the video URI. Only available when not paired with `query`.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: app_only, embeddable, featured, playable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * filter_playable `boolean`: Whether to filter by all playable videos or by all videos that are not  playable.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, default, duration, last_user_action_event_date, likes, modified_time, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### upload_video_alt1
Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).


```js
vimeo.upload_video_alt1({
  "body": {
    "upload": {
      "approach": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * content_rating `array`: A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.
      * items `string`
    * description `string`: The description of the video.
    * embed `object`
      * buttons `object`
        * embed `boolean`: Show or hide the Embed button.
        * fullscreen `boolean`: Show or hide the Fullscreen button.
        * hd `boolean`: Show or hide the HD button.
        * like `boolean`: Show or hide the Like button.
        * scaling `boolean`: Show or hide the Scaling button (shown only in Fullscreen mode).
        * share `boolean`: Show or hide the Share button.
        * watchlater `boolean`: Show or hide the Watch Later button.
      * color `string`: The main color of the embed player.
      * logos `object`
        * custom `object`
          * active `boolean`: Show or hide your custom logo.
          * link `string`: The URL that loads when the user clicks your custom logo.
          * sticky `boolean`: Whether always to show the custom logo or to hide it after time with the rest of the UI.
        * vimeo `boolean`: Show or hide the Vimeo logo.
      * playbar `boolean`: Show or hide the playbar.
      * title `object`
        * name `string` (values: hide, show, user): Show or hide the video title, or enable the user to determine whether the video title appears.
        * owner `string` (values: hide, show, user): Show or hide the owner information, or enable the user to determine whether the owner information appears.
        * portrait `string` (values: hide, show, user): Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
      * volume `boolean`: Show or hide the volume selector.
    * license `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The Creative Commons license.
    * locale `string`: The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
    * name `string`: The title of the video.
    * password `string`: The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.
    * privacy `object`
      * add `boolean`: Whether a user can add the video to an album, channel, or group.
      * comments `string` (values: anybody, contacts, nobody): The privacy level required to comment on the video.
      * download `boolean`: Whether a user can download the video. Not available to users with a Basic membership
      * embed `string` (values: private, public, whitelist): The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
      * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
    * ratings `object`
      * mpaa `object`
        * reason `string` (values: at, bn, n, sl, ss, v): The reason for the video's MPAA rating.
      * tv `object`
        * reason `string` (values: d, fv, l, ss, v): The reason for the video's TV rating.
    * review_page `object`
      * active `boolean`: Enable or disable video review.
    * spatial `object`
      * director_timeline `array`: The 360 director timeline.
        * items `object`
          * pitch **required** `number`: The timeline pitch. This value must be between -90 and 90.
          * roll `number`: The timeline roll.
          * time_code **required** `number`: The 360 director timeline time code.
          * yaw **required** `number`: The timeline yaw. This value must be between 0 and 360.
      * field_of_view `number`: The 360 field of view: default 50, minimum 30, maximum 90.
      * projection `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection.
      * stereo_format `string` (values: left-right, mono, top-bottom): The 360 spatial stereo format.
    * upload **required** `object`
      * approach **required** `string` (values: post, pull, streaming, tus): The upload approach.
      * link `string`: The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use this parameter when `approach` is `pull`.
      * redirect_url `string`: The app's redirect URL. Use this parameter when `approach` is `post`.
      * size `string`: The size in bytes of the video to upload.

#### Output
* output [video](#video)

### check_if_user_owns_video_alt1
Check if a user owns a video


```js
vimeo.check_if_user_owns_video_alt1({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### delete_watch_history
Delete a user's watch history


```js
vimeo.delete_watch_history(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### get_watch_history
Get all the videos that a user has watched


```js
vimeo.get_watch_history({}, context)
```

#### Input
* input `object`
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [video](#video)

### delete_from_watch_history
Delete a specific video from a user's watch history


```js
vimeo.delete_from_watch_history({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_watch_later_queue_alt1
Get all the videos in a user's Watch Later queue


```js
vimeo.get_watch_later_queue_alt1({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### delete_video_from_watch_later_alt1
Remove a video from a user's Watch Later queue


```js
vimeo.delete_video_from_watch_later_alt1({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### check_watch_later_queue_alt1
Check if a user has added a specific video to their Watch Later queue


```js
vimeo.check_watch_later_queue_alt1({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### add_video_to_watch_later_alt1
Add a video to a user's Watch Later queue


```js
vimeo.add_video_to_watch_later_alt1({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### exchange_auth_code
Exchange an authorization code for an access token


```js
vimeo.exchange_auth_code({
  "body": {
    "code": "",
    "grant_type": "",
    "redirect_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * code **required** `string`: The authorization code received from the authorization server.
    * grant_type **required** `string` (values: authorization_code): The grant type. Must be set to `authorization_code`.
    * redirect_uri **required** `string`: The redirect URI. Must match the URI from `/oauth/authorize`.

#### Output
* output [auth](#auth)

### client_auth
For information on utilizing OAuth client authorization, see our
[authentication](/api/authentication#generate-unauthenticated-tokens) documentation or the
[Client Credentials Grant](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4) section of the
[OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31.


```js
vimeo.client_auth({
  "body": {
    "grant_type": "",
    "scope": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * grant_type **required** `string` (values: client_credentials): The grant type. Must be set to `client_credentials`.
    * scope **required** `string`: A space-separated list of the authentication [scopes](https://developer.vimeo.com/api/authentication#supported-scopes) that you want to access. The default is `public`.

#### Output
* output [auth](#auth)

### convert_access_token
Convert OAuth 1 access tokens to OAuth 2 access tokens


```js
vimeo.convert_access_token({
  "body": {
    "grant_type": "",
    "token": "",
    "token_secret": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * grant_type **required** `string` (values: vimeo_oauth1): The grant type. Must be set to `vimeo_oauth1`.
    * token **required** `string`: The OAuth 1 token.
    * token_secret **required** `string`: The OAuth 1 token secret.

#### Output
* output [auth](#auth)

### verify_token
Verify an OAuth 2 token


```js
vimeo.verify_token(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [auth](#auth)

### get_vod_genres
Get all On Demand genres


```js
vimeo.get_vod_genres(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [on-demand-genre](#on-demand-genre)

### get_vod_genre
Get a specific On Demand genre


```js
vimeo.get_vod_genre({
  "genre_id": ""
}, context)
```

#### Input
* input `object`
  * genre_id **required** `string`: The ID of the genre.

#### Output
* output [on-demand-genre](#on-demand-genre)

### get_genre_vods
Get all the On Demand pages in a genre


```js
vimeo.get_genre_vods({
  "genre_id": ""
}, context)
```

#### Input
* input `object`
  * genre_id **required** `string`: The ID of the genre.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: country, my_region): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, name, publish.time, videos): The way to sort the results.

#### Output
* output `array`
  * items [on-demand-page](#on-demand-page)

### get_genre_vod
Check whether a genre contains an On Demand page.


```js
vimeo.get_genre_vod({
  "genre_id": "",
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * genre_id **required** `string`: The ID of the genre.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [on-demand-page](#on-demand-page)

### delete_vod_draft
Delete a draft of an On Demand page


```js
vimeo.delete_vod_draft({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
*Output schema unknown*

### get_vod
Get a specific On Demand page


```js
vimeo.get_vod({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [on-demand-page](#on-demand-page)

### edit_vod
Enable preorders or publish the page.


```js
vimeo.edit_vod({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * body `object`
    * link `string`: The custom string to use in this On Demand page's Vimeo URL.
    * preorder `object`
      * active `boolean`: If set to true, you will enable pre-orders on the On Demand page.
      * publish_time `string`: The time that the On Demand page will be published. *Required if `preorder.active` is `true`.
    * publish `object`
      * active `boolean`: Whether to publish the On Demand page.
    * publish_when_ready `boolean`: Whether to publish the On Demand page automatically after all videos are finished transcoding.

#### Output
* output [on-demand-page](#on-demand-page)

### get_vod_backgrounds
Get all the backgrounds of an On Demand page


```js
vimeo.get_vod_backgrounds({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### create_vod_background
Add a background to an On Demand page


```js
vimeo.create_vod_background({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [picture](#picture)

### delete_vod_background
Remove a background from an On Demand page


```js
vimeo.delete_vod_background({
  "background_id": 0,
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * background_id **required** `number`: The ID of the background.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [picture](#picture)

### get_vod_background
Get a specific background of an On Demand page


```js
vimeo.get_vod_background({
  "background_id": 0,
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * background_id **required** `number`: The ID of the background.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [picture](#picture)

### edit_vod_background
Edit a background of an On Demand page


```js
vimeo.edit_vod_background({
  "background_id": 0,
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * background_id **required** `number`: The ID of the background.
  * ondemand_id **required** `number`: The ID of the On Demand.
  * body `object`
    * active `boolean`: Whether to make this background the active background.

#### Output
* output [picture](#picture)

### get_vod_genres_by_ondemand_id
Get all the genres of an On Demand page


```js
vimeo.get_vod_genres_by_ondemand_id({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output `array`
  * items [on-demand-genre](#on-demand-genre)

### delete_vod_genre
Remove a genre from an On Demand page


```js
vimeo.delete_vod_genre({
  "genre_id": "",
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * genre_id **required** `string`: The ID of the genre.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
*Output schema unknown*

### get_vod_genre_by_ondemand_id
Check whether an On Demand page belongs to a genre


```js
vimeo.get_vod_genre_by_ondemand_id({
  "genre_id": "",
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * genre_id **required** `string`: The ID of the genre.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [on-demand-genre](#on-demand-genre)

### add_vod_genre
Add a genre to an On Demand page


```js
vimeo.add_vod_genre({
  "genre_id": "",
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * genre_id **required** `string`: The ID of the genre.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [on-demand-genre](#on-demand-genre)

### get_vod_likes
This method gets all the users who have liked a particular video on an On Demand page.


```js
vimeo.get_vod_likes({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand page.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: extra, main, trailer): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### get_vod_posters
Get all the posters of an On Demand page


```js
vimeo.get_vod_posters({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### add_vod_poster
Add a poster to an On Demand page


```js
vimeo.add_vod_poster({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [picture](#picture)

### get_vod_poster
Get a specific poster of an On Demand page


```js
vimeo.get_vod_poster({
  "ondemand_id": 0,
  "poster_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * poster_id **required** `number`: The ID of the picture.

#### Output
* output [picture](#picture)

### edit_vod_poster
Edit a poster of an On Demand page


```js
vimeo.edit_vod_poster({
  "ondemand_id": 0,
  "poster_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * poster_id **required** `number`: The ID of the picture.
  * body `object`
    * active `boolean`: Whether to make this picture the active picture.

#### Output
* output [picture](#picture)

### get_vod_promotions
Get all the promotions on an On Demand page


```js
vimeo.get_vod_promotions({
  "ondemand_id": 0,
  "filter": ""
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * filter **required** `string` (values: batch, default, single, vip): The filter to apply to the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output [on-demand-promotion](#on-demand-promotion)

### create_vod_promotion
Add a promotion to an On Demand page


```js
vimeo.create_vod_promotion({
  "ondemand_id": 0,
  "body": {
    "download": true,
    "stream_period": "",
    "total": 0,
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * body **required** `object`
    * access_type `string` (values: default, vip): The promotion access type, which is a purchase option that isn't available on the container. VIP promotions always make the content free of charge. If you use this type, you must further define the promotion with the `download` or `stream_period` fields.
    * code `string`: The promotion code. This field is ignored for batch promotions.
    * discount_type `string` (values: free, percent): The type of discount offered by the promo code. When `access_type` is `vip`, the value of this field must be `free`.
    * download **required** `boolean`: Whether the promotion grants download access to VOD content. This is necessary only when not previously defined in the On Demand container or when `access_type` is `vip` or `product_type` is `buy`.
    * end_time `string`: The end of the promotion period. If you don't specify a value, the promotion will never expire.
    * label `string`: The description of a batch promotion. This field is ignored for single promotions.
    * percent_off `number`: The percentage of the discount by using this promo code. This field is applicable only when `discount_type` is `percent`.
    * product_type `string` (values: any, buy, buy_episode, rent, rent_episode, subscribe): The type of transaction to which the promotion applies. When `access_type` is `default`, the default value is `any`, but the default value is `rent` when `access_type` is `vip`. Also, when `access_type` is `vip`, the only valid product types are `buy` and `rent`.
    * start_time `string`: The start of the promotion period. If you don't specify a value, the start time defaults to the time that the promotion was created.
    * stream_period **required** `string` (values: 1_week, 1_year, 24_hour, 30_day, 3_month, 48_hour, 6_month, 72_hour): The amount of time that a user has access to the VOD content upon redeeming a promo code. This field is necessary only when not defined in the On Demand container or when creating promotions when `access_type` is `vip` or `product_type` is `rent`.
    * total **required** `number`: The number of promotions to generate when `type` is `batch`, or the number of uses of the promotion when `type` is `single`.
    * type **required** `string` (values: batch, single): The type of promotion. When `access_type` is `vip`, the value for this field must be `batch`.

#### Output
* output [on-demand-promotion](#on-demand-promotion)

### delete_vod_promotion
Remove a promotion from an On Demand page


```js
vimeo.delete_vod_promotion({
  "ondemand_id": 0,
  "promotion_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * promotion_id **required** `number`: The ID of the promotion.

#### Output
*Output schema unknown*

### get_vod_promotion
Get a specific promotion on an On Demand page


```js
vimeo.get_vod_promotion({
  "ondemand_id": 0,
  "promotion_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * promotion_id **required** `number`: The ID of the promotion.

#### Output
* output [on-demand-promotion](#on-demand-promotion)

### get_vod_promotion_codes
Get all the codes of a promotion on an On Demand page


```js
vimeo.get_vod_promotion_codes({
  "ondemand_id": 0,
  "promotion_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * promotion_id **required** `number`: The ID of the promotion.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output [on-demand-promotion-code](#on-demand-promotion-code)

### delete_vod_regions
Remove a list of regions from an On Demand page


```js
vimeo.delete_vod_regions({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * body `object`
    * countries `array`: An array of country codes.
      * items `string`

#### Output
* output `array`
  * items [on-demand-region](#on-demand-region)

### get_vod_regions
Get all the regions of an On Demand page


```js
vimeo.get_vod_regions({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output `array`
  * items [on-demand-region](#on-demand-region)

### set_vod_regions
Add a list of regions to an On Demand page


```js
vimeo.set_vod_regions({
  "ondemand_id": 0,
  "body": {
    "countries": []
  }
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * body **required** `object`
    * countries **required** `array`: An array of country codes.
      * items `string`

#### Output
* output [on-demand-region](#on-demand-region)

### delete_vod_region
Remove a specific region from an On Demand page


```js
vimeo.delete_vod_region({
  "country": "",
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The country code.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
*Output schema unknown*

### get_vod_region
Checks whether an On Demand page belongs to a region.


```js
vimeo.get_vod_region({
  "country": "",
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The country code.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [on-demand-region](#on-demand-region)

### add_vod_region
Add a specific region to an On Demand page


```js
vimeo.add_vod_region({
  "country": "",
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The country code.
  * ondemand_id **required** `number`: The ID of the On Demand.

#### Output
* output [on-demand-region](#on-demand-region)

### get_vod_seasons
Get all the seasons on an On Demand page


```js
vimeo.get_vod_seasons({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: viewable): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: date, manual): The way to sort the results.

#### Output
* output `array`
  * items [on-demand-season](#on-demand-season)

### get_vod_season
Get a specific season on an On Demand page


```js
vimeo.get_vod_season({
  "ondemand_id": 0,
  "season_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * season_id **required** `number`: The ID of the season.

#### Output
* output [on-demand-season](#on-demand-season)

### get_vod_season_videos
Get all the videos in a season on an On Demand page


```js
vimeo.get_vod_season_videos({
  "ondemand_id": 0,
  "season_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * season_id **required** `number`: The ID of the season.
  * filter `string` (values: viewable): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: date, default, manual, name, purchase_time, release_date): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### get_vod_videos
Get all the videos on an On Demand page


```js
vimeo.get_vod_videos({
  "ondemand_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: all, buy, expiring_soon, extra, main, main.viewable, rent, trailer, unwatched, viewable, watched): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: date, default, episode, manual, name, purchase_time, release_date): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### delete_video_from_vod
Remove a video from an On Demand page


```js
vimeo.delete_video_from_vod({
  "ondemand_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_vod_video
Get a specific video on an On Demand page


```js
vimeo.get_vod_video({
  "ondemand_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### add_video_to_vod
Add a video to an On Demand page


```js
vimeo.add_video_to_vod({
  "ondemand_id": 0,
  "video_id": 0,
  "body": {
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * ondemand_id **required** `number`: The ID of the On Demand.
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * buy `object`
      * price `object`
        * AUD `number`: The purchase price of this video in AUD.
        * CAD `number`: The purchase price of this video in CAD.
        * CHF `number`: The purchase price of this video in CHF.
        * DKK `number`: The purchase price of this video in DKK.
        * EUR `number`: The purchase price of this video in EUR.
        * GBP `number`: The purchase price of this video in GBP.
        * JPY `number`: The purchase price of this video in JPY.
        * KRW `number`: The purchase price of this video in KRW.
        * NOK `number`: The purchase price of this video in NOK.
        * PLN `number`: The purchase price of this video in PLN.
        * SEK `number`: The purchase price of this video in SEK.
        * USD `number`: The purchase price of this video in USD. *Required if `buy.active` is true.
    * position `number`: The position of this video in the On Demand collection.
    * release_year `number`: The video release year.
    * rent `object`
      * price `object`
        * AUD `number`: The rental price of this video in AUD.
        * CAD `number`: The rental price of this video in CAD.
        * CHF `number`: The rental price of this video in CHF.
        * DKK `number`: The rental price of this video in DKK.
        * EUR `number`: The rental price of this video in EUR.
        * GBP `number`: The rental price of this video in GBP.
        * JPY `number`: The rental price of this video in JPY.
        * KRW `number`: The rental price of this video in KRW.
        * NOK `number`: The rental price of this video in NOK.
        * PLN `number`: The rental price of this video in PLN.
        * SEK `number`: The rental price of this video in SEK.
        * USD `number`: The rental price of this video in USD. *Required if `rent.active` is true.
    * type **required** `string` (values: extra, main, trailer): The type of video that you are adding to the On Demand page.

#### Output
* output [on-demand-video](#on-demand-video)

### get_regions
Get all the On Demand regions


```js
vimeo.get_regions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [on-demand-region](#on-demand-region)

### get_region
Get a specific On Demand region


```js
vimeo.get_region({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The country code.

#### Output
* output [on-demand-region](#on-demand-region)

### get_tag
Get a specific tag


```js
vimeo.get_tag({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: The tag to return.

#### Output
* output [tag](#tag)

### get_videos_with_tag
Get all the videos with a specific tag


```js
vimeo.get_videos_with_tag({
  "word": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: The tag word.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: created_time, duration, name): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### delete_token
This method enables an app to notify the API that it is done with a token and that the token can be discarded.


```js
vimeo.delete_token(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [auth](#auth)

### search_users
Search for users


```js
vimeo.search_users({}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, followers, relevant, videos): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### get_user
Get a user


```js
vimeo.get_user({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.

#### Output
* output [user](#user)

### edit_user
Edit a user


```js
vimeo.edit_user({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * body `object`
    * bio `string`: The user's bio.
    * content_filter `array`: A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint. You must provide a comma-separated list if you are using a query string or an array if you are using JSON.
      * items `string`
    * link `string`: The user's custom Vimeo URL slug.
    * location `string`: The user's location.
    * name `string`: The user's display name.
    * password `string`: The default password for all future videos that this user uploads. To use this field, the `videos.privacy.view` field must be `password`.
    * videos `object`
      * privacy `object`
        * add `boolean`: Whether a user can add the video to an album, channel, or group. This value becomes the default add setting for all future videos uploaded by the user.
        * comments `string` (values: anybody, contacts, nobody): Who can comment on the video. This value becomes the default comment setting for all future videos that this user uploads.
        * download `boolean`: Whether a user can download the video. This value becomes the default download setting for all future videos that this user uploads.
        * embed `string` (values: private, public, whitelist): The privacy for embed videos. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for adding and removing domains.
        * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): Who can view the video. This value becomes the default view setting for all future videos that this user uploads.

#### Output
* output [user](#user)

### get_albums
Get all the albums that belong to a user


```js
vimeo.get_albums({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, duration, videos): The way to sort the results.

#### Output
* output `array`
  * items [album](#album)

### create_album
Create an album


```js
vimeo.create_album({
  "user_id": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * body **required** `object`
    * brand_color `string`: The hexadecimal code for the color of the player buttons.
    * description `string`: The description of the album.
    * hide_nav `boolean`: Whether to hide Vimeo navigation when displaying the album.
    * layout `string` (values: grid, player): The type of layout for presenting the album.
    * name **required** `string`: The name of the album.
    * password `string`: The album's password. Required only if **privacy** is `password`.
    * privacy `string` (values: anybody, embed_only, password): The privacy level of the album.
    * review_mode `boolean`: Whether album videos should use the review mode URL.
    * sort `string` (values: added_first, added_last, alphabetical, arranged, comments, likes, newest, oldest, plays): The default sort order of the album's videos.
    * theme `string` (values: dark, standard): The color theme of the album.

#### Output
* output [album](#album)

### delete_album
Delete an album


```js
vimeo.delete_album({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_album
Get a specific album


```js
vimeo.get_album({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [album](#album)

### edit_album
Edit an album


```js
vimeo.edit_album({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * body `object`
    * brand_color `string`: The hexadecimal code for the color of the player buttons.
    * description `string`: The description of the album.
    * domain `string`: The custom domain a user has selected for their album.
    * hide_nav `boolean`: Whether to hide Vimeo navigation when displaying the album.
    * layout `string` (values: grid, player): The type of layout for presenting the album.
    * name `string`: The name of the album.
    * password `string`: The album's password. Required only if **privacy** is `password`.
    * privacy `string` (values: anybody, embed_only, password): The privacy level of the album.
    * review_mode `boolean`: Whether album videos should use the review mode URL.
    * sort `string` (values: added_first, added_last, alphabetical, arranged, comments, likes, newest, oldest, plays): The default sort order of the album's videos.
    * theme `string` (values: dark, standard): The color theme of the album.
    * url `string`: The custom Vimeo URL a user has selected for their album.
    * use_custom_domain `boolean`: Whether the user has opted in to use a custom domain for their album.

#### Output
* output [album](#album)

### get_album_custom_thumbs
Get all the custom upload thumbnails of an album


```js
vimeo.get_album_custom_thumbs({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### create_album_custom_thumb
Add a custom uploaded thumbnail


```js
vimeo.create_album_custom_thumb({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### delete_album_custom_thumbnail
This method removes a custom uploaded thumbnail from the specified album.


```js
vimeo.delete_album_custom_thumbnail({
  "album_id": 0,
  "thumbnail_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * thumbnail_id **required** `number`: The ID of the custom thumbnail.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_album_custom_thumbnail
Get a specific custom uploaded album thumbnail


```js
vimeo.get_album_custom_thumbnail({
  "album_id": 0,
  "thumbnail_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * thumbnail_id **required** `number`: The ID of the custom thumbnail.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### replace_album_custom_thumb
Replace a custom uploaded album thumbnail


```js
vimeo.replace_album_custom_thumb({
  "album_id": 0,
  "thumbnail_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * thumbnail_id **required** `number`: The ID of the custom thumbnail.
  * user_id **required** `number`: The ID of the user.
  * body `object`
    * active `boolean`: Whether to make this the active album thumbnail.

#### Output
* output [picture](#picture)

### get_album_logos
Get all the custom logos of an album


```js
vimeo.get_album_logos({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### create_album_logo
Add a custom album logo


```js
vimeo.create_album_logo({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### delete_album_logo
This method removes a custom logo from the specified album.


```js
vimeo.delete_album_logo({
  "album_id": 0,
  "logo_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * logo_id **required** `number`: The ID of the custom logo.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_album_logo
Get a specific custom album logo


```js
vimeo.get_album_logo({
  "album_id": 0,
  "logo_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * logo_id **required** `number`: The ID of the custom logo.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### replace_album_logo
Replace a custom album logo


```js
vimeo.replace_album_logo({
  "album_id": 0,
  "logo_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * logo_id **required** `number`: The ID of the custom logo.
  * user_id **required** `number`: The ID of the user.
  * body `object`
    * active `boolean`: Whether to make this the active album logo.

#### Output
* output [picture](#picture)

### get_album_videos
Get all the videos in an album


```js
vimeo.get_album_videos({
  "album_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * containing_uri `string`: The page containing the video URI.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * password `string`: The password of the album.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, default, duration, likes, manual, modified_time, plays): The way to sort the results.
  * weak_search `boolean`: Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.

#### Output
* output `array`
  * items [video](#video)

### replace_videos_in_album
This method replaces all the existing videos in an album with one or more videos.


```js
vimeo.replace_videos_in_album({
  "album_id": 0,
  "user_id": 0,
  "body": {
    "videos": ""
  }
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * body **required** `object`
    * videos **required** `string`: A comma-separated list of video URIs.

#### Output
*Output schema unknown*

### remove_video_from_album
Remove a video from an album


```js
vimeo.remove_video_from_album({
  "album_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_album_video
This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.


```js
vimeo.get_album_video({
  "album_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.
  * password `string`: The password of the album.

#### Output
* output [video](#video)

### add_video_to_album
Add a specific video to an album


```js
vimeo.add_video_to_album({
  "album_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### set_video_as_album_thumbnail
Set a video as the album thumbnail


```js
vimeo.set_video_as_album_thumbnail({
  "album_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * album_id **required** `number`: The ID of the album.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.
  * body `object`
    * time_code `number`: The video frame time in seconds to use as the album thumbnail.

#### Output
* output [album](#album)

### get_appearances
Get all the videos in which a user appears


```js
vimeo.get_appearances({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### get_category_subscriptions
Get all the categories that a user follows


```js
vimeo.get_category_subscriptions({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, date, name): The way to sort the results.

#### Output
* output `array`
  * items [category](#category)

### unsubscribe_from_category
Unsubscribe a user from a category


```js
vimeo.unsubscribe_from_category({
  "category": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### check_if_user_subscribed_to_category
Check if a user follows a category


```js
vimeo.check_if_user_subscribed_to_category({
  "category": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The name of the category.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### subscribe_to_category
Subscribe a user to a single category


```js
vimeo.subscribe_to_category({
  "category": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * category **required** `number`: The name of the category.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_channel_subscriptions
Get all the channels to which a user subscribes


```js
vimeo.get_channel_subscriptions({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: moderated): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, followers, videos): The way to sort the results.

#### Output
* output `array`
  * items [channel](#channel)

### unsubscribe_from_channel
Unsubscribe a user from a specific channel


```js
vimeo.unsubscribe_from_channel({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### check_if_user_subscribed_to_channel
Check if a user follows a channel


```js
vimeo.check_if_user_subscribed_to_channel({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### subscribe_to_channel
Subscribe a user to a specific channel


```js
vimeo.subscribe_to_channel({
  "channel_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * channel_id **required** `number`: The ID of the channel.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_custom_logos
Get all the custom logos that belong to a user


```js
vimeo.get_custom_logos({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.

#### Output
* output `array`
  * items [picture](#picture)

### create_custom_logo
Add a custom logo


```js
vimeo.create_custom_logo({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### get_custom_logo
Get a specific custom logo


```js
vimeo.get_custom_logo({
  "logo_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * logo_id **required** `number`: The ID of the custom logo.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### get_feed
Get all videos in a user's feed


```js
vimeo.get_feed({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * offset `string`: Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * type `string` (values: appears, category_featured, channel, facebook_feed, following, group, likes, ondemand_publish, share, tagged_with, twitter_timeline, uploads): The feed type.

#### Output
* output `array`
  * items [activity-3-1](#activity-3-1)

### get_followers
Get all the followers of a user


```js
vimeo.get_followers({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### get_user_following
Get all the users that a user is following


```js
vimeo.get_user_following({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: online): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### follow_users
Follow a list of users


```js
vimeo.follow_users({
  "user_id": 0,
  "body": {
    "users": []
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * body **required** `object`
    * users **required** `array`: An array of user URIs for the list of users to follow.
      * items `string`

#### Output
*Output schema unknown*

### unfollow_user
Unfollow a user


```js
vimeo.unfollow_user({
  "follow_user_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * follow_user_id **required** `number`: The ID of the following user.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### check_if_user_is_following
Check if a user is following another user


```js
vimeo.check_if_user_is_following({
  "follow_user_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * follow_user_id **required** `number`: The ID of the following user.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### follow_user
Follow a specific user


```js
vimeo.follow_user({
  "follow_user_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * follow_user_id **required** `number`: The ID of the following user.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_user_groups
Get all the groups that a user has joined


```js
vimeo.get_user_groups({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: moderated): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date, members, videos): The way to sort the results.

#### Output
* output `array`
  * items [group](#group)

### leave_group
Remove a user from a group


```js
vimeo.leave_group({
  "group_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### check_if_user_joined_group
Check if a user has joined a group


```js
vimeo.check_if_user_joined_group({
  "group_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### join_group
Add a user to a group


```js
vimeo.join_group({
  "group_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `number`: The ID of the group.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_likes
Get all the videos that a user has liked


```js
vimeo.get_likes({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### unlike_video
Cause a user to unlike a video


```js
vimeo.unlike_video({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### check_if_user_liked_video
Check if a user has liked a video


```js
vimeo.check_if_user_liked_video({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### like_video
Cause a user to like a video


```js
vimeo.like_video({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_user_vods
Get all the On Demand pages of a user


```js
vimeo.get_user_vods({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: film, series): The type of On Demand pages to return.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: added, alphabetical, date, modified_time, name, publish.time, rating): The way to sort the results.

#### Output
* output `array`
  * items [on-demand-page](#on-demand-page)

### create_vod
Create an On Demand page


```js
vimeo.create_vod({
  "user_id": 0,
  "body": {
    "content_rating": "",
    "description": "",
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * body **required** `object`
    * accepted_currencies `string` (values: AUD, CAD, CHF, DKK, EUR, GBP, JPY, KRW, NOK, PLN, SEK, USD): An array of accepted currencies.
    * buy `object`
      * active `boolean`: Whether the Buy action is active. *Required if `rent.active` is false.
      * download `boolean`: Whether people who buy the video can download it. To use this field, `type` must be `film`.
      * price `object`
        * AUD `number`: The purchase price of this video in AUD.
        * CAD `number`: The purchase price of this video in CAD.
        * CHF `number`: The purchase price of this video in CHF.
        * DKK `number`: The purchase price of this video in DKK.
        * EUR `number`: The purchase price of this video in EUR.
        * GBP `number`: The purchase price of this video in GBP.
        * JPY `number`: The purchase price of this video in JPY.
        * KRW `number`: The purchase price of this video in KRW.
        * NOK `number`: The purchase price of this video in NOK.
        * PLN `number`: The purchase price of this video in PLN.
        * SEK `number`: The purchase price of this video in SEK.
        * USD `number`: The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.
    * content_rating **required** `string` (values: drugs, language, nudity, safe, unrated, violence): One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
    * description **required** `string`: The description of the On Demand page.
    * domain_link `string`: The custom domain of the On Demand page.
    * episodes `object`
      * buy `object`
        * active `boolean`: Whether episodes can be bought.
        * download `boolean`: Whether people who buy the episode can download it. To use this field, `type` must be `series`.
        * price `object`
          * USD `number`: The purchase price per episode. *Required if `episodes.buy.active` is true.
      * rent `object`
        * active `boolean`: Whether episodes can be rented
        * period `string` (values: 1 week, 1 year, 24 hour, 3 month, 30 day, 48 hour, 6 month, 72 hour): The period in which this episode can be rented for.
        * price `object`
          * USD `number`: The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
    * link `string`: The custom string to use in this On Demand page's Vimeo URL.
    * name **required** `string`: The name of the On Demand page.
    * rent `object`
      * active `boolean`: Whether the video can be rented. *Required if `buy.active` is false.
      * period `string` (values: 1 week, 1 year, 24 hour, 3 month, 30 day, 48 hour, 6 month, 72 hour): The period in which this can be rented for.
      * price `object`
        * AUD `number`: The rental price of this video in AUD.
        * CAD `number`: The rental price of this video in CAD.
        * CHF `number`: The rental price of this video in CHF.
        * DKK `number`: The rental price of this video in DKK.
        * EUR `number`: The rental price of this video in EUR.
        * GBP `number`: The rental price of this video in GBP.
        * JPY `number`: The rental price of this video in JPY.
        * KRW `number`: The rental price of this video in KRW.
        * NOK `number`: The rental price of this video in NOK.
        * PLN `number`: The rental price of this video in PLN.
        * SEK `number`: The rental price of this video in SEK.
        * USD `number`: The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.
    * subscription `object`
      * monthly `object`
        * active `boolean`: Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false.
        * price `object`
          * USD `number`: The monthly subscription price in USD. *Required if `subscription.active` is true.
    * type **required** `string` (values: film, series): The type of On Demand page.

#### Output
* output [on-demand-page](#on-demand-page)

### check_if_vod_was_purchased
Check if a user has made a purchase or rental from an On Demand page


```js
vimeo.check_if_vod_was_purchased({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.

#### Output
* output [on-demand-page](#on-demand-page)

### get_pictures
Get all the pictures that belong to a user


```js
vimeo.get_pictures({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### create_picture
Add a user picture


```js
vimeo.create_picture({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### delete_picture
Delete a user picture


```js
vimeo.delete_picture({
  "portraitset_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * portraitset_id **required** `number`: The ID of the picture.
  * user_id **required** `number`: The ID of the user.

#### Output
*Output schema unknown*

### get_picture
Get a specific user picture


```js
vimeo.get_picture({
  "portraitset_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * portraitset_id **required** `number`: The ID of the picture.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [picture](#picture)

### edit_picture
Edit a user picture


```js
vimeo.edit_picture({
  "portraitset_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * portraitset_id **required** `number`: The ID of the picture.
  * user_id **required** `number`: The ID of the user.
  * body `object`
    * active `boolean`: Whether the picture is the user's active portrait.

#### Output
* output [picture](#picture)

### get_portfolios
Get all the portfolios that belong to a user


```js
vimeo.get_portfolios({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [portfolio](#portfolio)

### get_portfolio
Get a specific portfolio


```js
vimeo.get_portfolio({
  "portfolio_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [portfolio](#portfolio)

### get_portfolio_videos
Get all the videos in a portfolio


```js
vimeo.get_portfolio_videos({
  "portfolio_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * user_id **required** `number`: The ID of the user.
  * containing_uri `string`: The page that contains the video URI.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, comments, date, default, likes, manual, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### delete_video_from_portfolio
Remove a video from a portfolio


```js
vimeo.delete_video_from_portfolio({
  "portfolio_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_portfolio_video
Get a specific video in a portfolio


```js
vimeo.get_portfolio_video({
  "portfolio_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### add_video_to_portfolio
Add a video to a portfolio


```js
vimeo.add_video_to_portfolio({
  "portfolio_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * portfolio_id **required** `number`: The ID of the portfolio.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_embed_presets
Get all the embed presets that a user has created


```js
vimeo.get_embed_presets({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [presets](#presets)

### get_embed_preset
Get a specific embed preset


```js
vimeo.get_embed_preset({
  "preset_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [presets](#presets)

### edit_embed_preset
Edit an embed preset


```js
vimeo.edit_embed_preset({
  "preset_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * user_id **required** `number`: The ID of the user.
  * body `object`
    * outro `string` (values: nothing): Disable the outro.

#### Output
* output [presets](#presets)

### get_embed_preset_videos
Get all the videos that have been added to an embed preset


```js
vimeo.get_embed_preset_videos({
  "preset_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * user_id **required** `number`: The ID of the user.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [video](#video)

### get_projects
This method gets all the projects that belong to the specified user.


```js
vimeo.get_projects({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: date, default, modified_time, name): The way to sort the results.

#### Output
* output `array`
  * items [project](#project)

### create_project
This method creates a new project for the specified user.


```js
vimeo.create_project({
  "user_id": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * body **required** `object`
    * name **required** `string`: The name of the project.

#### Output
* output [project](#project)

### delete_project
This method deletes a project and optionally also the videos that it contains.


```js
vimeo.delete_project({
  "project_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.
  * should_delete_clips `boolean`: Whether to delete all the videos in the project along with the project itself.

#### Output
*Output schema unknown*

### get_project
This method gets a single project that belongs to the specified user.


```js
vimeo.get_project({
  "project_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [project](#project)

### edit_project
This method edits an existing project.


```js
vimeo.edit_project({
  "project_id": 0,
  "user_id": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.
  * body **required** `object`
    * name **required** `string`: The name of the project.

#### Output
* output [project](#project)

### remove_videos_from_project
This method removed multiple videos from the specified project.


```js
vimeo.remove_videos_from_project({
  "project_id": 0,
  "user_id": 0,
  "uris": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.
  * should_delete_clips `boolean`: Whether to delete the videos when removing them from the project.
  * uris **required** `string`: A comma-separated list of the video URIs to remove.

#### Output
*Output schema unknown*

### get_project_videos
This method gets all the videos that belong to the specified project.


```js
vimeo.get_project_videos({
  "project_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, date, default, duration, last_user_action_event_date): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### add_videos_to_project
This method adds multiple videos to the specified project.


```js
vimeo.add_videos_to_project({
  "project_id": 0,
  "user_id": 0,
  "uris": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.
  * uris **required** `string`: A comma-separated list of video URIs to add.

#### Output
*Output schema unknown*

### remove_video_from_project
This method removes a single video from the specified project.


```js
vimeo.remove_video_from_project({
  "project_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### add_video_to_project
This method adds a single video to the specified project.


```js
vimeo.add_video_to_project({
  "project_id": 0,
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `number`: The ID of the project.
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### complete_streaming_upload
Complete a user's streaming upload


```js
vimeo.complete_streaming_upload({
  "upload": 0,
  "user_id": 0,
  "signature": "",
  "video_file_id": 0
}, context)
```

#### Input
* input `object`
  * upload **required** `number`: The ID of the upload attempt.
  * user_id **required** `number`: The ID of the user.
  * signature **required** `string`: The crypto signature of the completed upload.
  * video_file_id **required** `number`: The ID of the uploaded file.

#### Output
*Output schema unknown*

### get_upload_attempt
Get a user's upload attempt


```js
vimeo.get_upload_attempt({
  "upload": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * upload **required** `number`: The ID of the upload attempt.
  * user_id **required** `number`: The ID of the user.

#### Output
* output [upload-attempt](#upload-attempt)

### get_videos
Get all the videos that a user has uploaded


```js
vimeo.get_videos({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * containing_uri `string`: The page that contains the video URI. Only available when not paired with `query`.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: app_only, embeddable, featured, playable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * filter_playable `boolean`: Whether to filter by all playable videos or by all videos that are not  playable.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, default, duration, last_user_action_event_date, likes, modified_time, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### upload_video
Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).


```js
vimeo.upload_video({
  "user_id": 0,
  "body": {
    "upload": {
      "approach": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * body **required** `object`
    * content_rating `array`: A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.
      * items `string`
    * description `string`: The description of the video.
    * embed `object`
      * buttons `object`
        * embed `boolean`: Show or hide the Embed button.
        * fullscreen `boolean`: Show or hide the Fullscreen button.
        * hd `boolean`: Show or hide the HD button.
        * like `boolean`: Show or hide the Like button.
        * scaling `boolean`: Show or hide the Scaling button (shown only in Fullscreen mode).
        * share `boolean`: Show or hide the Share button.
        * watchlater `boolean`: Show or hide the Watch Later button.
      * color `string`: The main color of the embed player.
      * logos `object`
        * custom `object`
          * active `boolean`: Show or hide your custom logo.
          * link `string`: The URL that loads when the user clicks your custom logo.
          * sticky `boolean`: Whether always to show the custom logo or to hide it after time with the rest of the UI.
        * vimeo `boolean`: Show or hide the Vimeo logo.
      * playbar `boolean`: Show or hide the playbar.
      * title `object`
        * name `string` (values: hide, show, user): Show or hide the video title, or enable the user to determine whether the video title appears.
        * owner `string` (values: hide, show, user): Show or hide the owner information, or enable the user to determine whether the owner information appears.
        * portrait `string` (values: hide, show, user): Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
      * volume `boolean`: Show or hide the volume selector.
    * license `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The Creative Commons license.
    * locale `string`: The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
    * name `string`: The title of the video.
    * password `string`: The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.
    * privacy `object`
      * add `boolean`: Whether a user can add the video to an album, channel, or group.
      * comments `string` (values: anybody, contacts, nobody): The privacy level required to comment on the video.
      * download `boolean`: Whether a user can download the video. Not available to users with a Basic membership
      * embed `string` (values: private, public, whitelist): The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
      * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
    * ratings `object`
      * mpaa `object`
        * reason `string` (values: at, bn, n, sl, ss, v): The reason for the video's MPAA rating.
      * tv `object`
        * reason `string` (values: d, fv, l, ss, v): The reason for the video's TV rating.
    * review_page `object`
      * active `boolean`: Enable or disable video review.
    * spatial `object`
      * director_timeline `array`: The 360 director timeline.
        * items `object`
          * pitch **required** `number`: The timeline pitch. This value must be between -90 and 90.
          * roll `number`: The timeline roll.
          * time_code **required** `number`: The 360 director timeline time code.
          * yaw **required** `number`: The timeline yaw. This value must be between 0 and 360.
      * field_of_view `number`: The 360 field of view: default 50, minimum 30, maximum 90.
      * projection `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection.
      * stereo_format `string` (values: left-right, mono, top-bottom): The 360 spatial stereo format.
    * upload **required** `object`
      * approach **required** `string` (values: post, pull, streaming, tus): The upload approach.
      * link `string`: The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use this parameter when `approach` is `pull`.
      * redirect_url `string`: The app's redirect URL. Use this parameter when `approach` is `post`.
      * size `string`: The size in bytes of the video to upload.

#### Output
* output [video](#video)

### check_if_user_owns_video
Check if a user owns a video


```js
vimeo.check_if_user_owns_video({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### get_watch_later_queue
Get all the videos in a user's Watch Later queue


```js
vimeo.get_watch_later_queue({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: embeddable): The attribute by which to filter the results.
  * filter_embeddable `boolean`: Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays): The way to sort the results.

#### Output
* output `array`
  * items [video](#video)

### delete_video_from_watch_later
Remove a video from a user's Watch Later queue


```js
vimeo.delete_video_from_watch_later({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### check_watch_later_queue
Check if a user has added a specific video to their Watch Later queue


```js
vimeo.check_watch_later_queue({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### add_video_to_watch_later
Add a video to a user's Watch Later queue


```js
vimeo.add_video_to_watch_later({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### search_videos
Search for videos


```js
vimeo.search_videos({
  "query": ""
}, context)
```

#### Input
* input `object`
  * direction `string` (values: asc, desc): The sort direction of the results.
  * filter `string` (values: CC, CC-BY, CC-BY-NC, CC-BY-NC-ND, CC-BY-NC-SA, CC-BY-ND, CC-BY-SA, CC0, categories, duration, in-progress, minimum_likes, trending, upload_date): The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.
  * links `string`: A comma-separated list of video URLs to find.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query **required** `string`: Search query.
  * sort `string` (values: alphabetical, comments, date, duration, likes, plays, relevant): The way to sort the results.
  * uris `string`: The comma-separated list of videos to find.

#### Output
* output `array`
  * items [video](#video)

### delete_video
Delete a video


```js
vimeo.delete_video({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_video
Get a specific video


```js
vimeo.get_video({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output [video](#video)

### edit_video
Edit a video


```js
vimeo.edit_video({
  "video_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * content_rating `array`: A list of values describing the content in this video. You can find the full list in the [`/contentratings`](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.
      * items `string`
    * description `string`: The new description of the video.
    * embed `object`
      * buttons `object`
        * embed `boolean`: Show or hide the Embed button.
        * fullscreen `boolean`: Show or hide the Fullscreen button.
        * hd `boolean`: Show or hide the HD button.
        * like `boolean`: Show or hide the Like button.
        * scaling `boolean`: Show or hide the Scaling button (shown only in Fullscreen mode).
        * share `boolean`: Show or hide the Share button.
        * watchlater `boolean`: Show or hide the Watch Later button.
      * color `string`: The main color of the embed player.
      * logos `object`
        * custom `object`
          * active `boolean`: Show or hide your custom logo.
          * link `string`: The URL that loads when the user clicks your custom logo.
          * sticky `boolean`: Whether always to show the custom logo or to hide it after time with the rest of the UI.
        * vimeo `boolean`: Show or hide the Vimeo logo.
      * playbar `boolean`: Show or hide the playbar.
      * title `object`
        * name `string` (values: hide, show, user): Show or hide the video title, or enable the user to determine whether the video title appears.
        * owner `string` (values: hide, show, user): Show or hide the owner information, or enable the user to determine whether the owner information appears.
        * portrait `string` (values: hide, show, user): Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
      * volume `boolean`: Show or hide the volume selector.
    * license `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The Creative Commons license.
    * locale `string`: The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
    * name `string`: The new title for the video.
    * password `string`: The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.
    * privacy `object`
      * add `boolean`: Whether a user can add the video to an album, channel, or group.
      * comments `string` (values: anybody, contacts, nobody): The privacy level required to comment on the video.
      * download `boolean`: Whether a user can download the video. Not available to users with a Basic membership.
      * embed `string` (values: private, public, whitelist): The video's new embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
      * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The video's new privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
    * ratings `object`
      * mpaa `object`
        * reason `string` (values: at, bn, n, sl, ss, v): The reason for the video's MPAA rating.
      * tv `object`
        * reason `string` (values: d, fv, l, ss, v): The reason for the video's TV rating.
    * review_page `object`
      * active `boolean`: Enable or disable video review.
    * spatial `object`
      * director_timeline `array`: The 360 director timeline.
        * items `object`
          * pitch **required** `number`: The timeline pitch. This value must be between -90 and 90.
          * roll `number`: The timeline roll.
          * time_code **required** `number`: The 360 director timeline time code.
          * yaw **required** `number`: The timeline yaw. This value must be between 0 and 360.
      * field_of_view `number`: The 360 field of view: default 50, minimum 30, maximum 90.
      * projection `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection.
      * stereo_format `string` (values: left-right, mono, top-bottom): The 360 spatial stereo format.

#### Output
* output [video](#video)

### get_available_video_channels
Get all the channels to which a user can add or remove a specific video


```js
vimeo.get_available_video_channels({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output `array`
  * items [channel](#channel)

### get_video_categories
Get all the categories to which a video belongs


```js
vimeo.get_video_categories({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output `array`
  * items [category](#category)

### suggest_video_category
With this method, you can suggest up to two categories and one subcategory for a video. Vimeo makes the final determination about whether the video
belongs in these categories.


```js
vimeo.suggest_video_category({
  "video_id": 0,
  "body": {
    "category": []
  }
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * category **required** `array`: The array of the names of the categories that you're suggesting.
      * items `string`

#### Output
* output [category](#category)

### get_comments
Get all the comments on a video


```js
vimeo.get_comments({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [comment](#comment)

### create_comment
Add a comment to a video


```js
vimeo.create_comment({
  "video_id": 0,
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * text **required** `string`: The text of the comment.

#### Output
* output [comment](#comment)

### delete_comment
Delete a video comment


```js
vimeo.delete_comment({
  "comment_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * comment_id **required** `number`: The ID of the comment.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_comment
Get a specific video comment


```js
vimeo.get_comment({
  "comment_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * comment_id **required** `number`: The ID of the comment.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [comment](#comment)

### edit_comment
Edit a video comment


```js
vimeo.edit_comment({
  "comment_id": 0,
  "video_id": 0,
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * comment_id **required** `number`: The ID of the comment.
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * text **required** `string`: The next text of the comment.

#### Output
* output [comment](#comment)

### get_comment_replies
Get all the replies to a video comment


```js
vimeo.get_comment_replies({
  "comment_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * comment_id **required** `number`: The ID of the comment.
  * video_id **required** `number`: The ID of the video.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [comment](#comment)

### create_comment_reply
Add a reply to a video comment


```js
vimeo.create_comment_reply({
  "comment_id": 0,
  "video_id": 0,
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * comment_id **required** `number`: The ID of the comment.
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * text **required** `string`: The reply to the comment.

#### Output
* output [comment](#comment)

### get_video_credits
Get all the credited users in a video


```js
vimeo.get_video_credits({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * query `string`: The search query to use to filter the results.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [credit](#credit)

### add_video_credit
Credit a user in a video


```js
vimeo.add_video_credit({
  "video_id": 0,
  "body": {
    "email": "",
    "name": "",
    "role": "",
    "user_uri": ""
  }
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * email **required** `string`: The email address of the credited person.
    * name **required** `string`: The name of the credited person.
    * role **required** `string`: The role of the credited person.
    * user_uri **required** `string`: The URI of the Vimeo user who should be given credit in this video.

#### Output
* output [credit](#credit)

### delete_video_credit
Delete a credit for a user in a video


```js
vimeo.delete_video_credit({
  "credit_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * credit_id **required** `number`: The ID of the credit.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_video_credit
Get a specific credited user in a video


```js
vimeo.get_video_credit({
  "credit_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * credit_id **required** `number`: The ID of the credit.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [credit](#credit)

### edit_video_credit
Edit a credit for a user in a video


```js
vimeo.edit_video_credit({
  "credit_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * credit_id **required** `number`: The ID of the credit.
  * video_id **required** `number`: The ID of the video.
  * body `object`
    * name `string`: The name of the person being credited.
    * role `string`: The role of the person being credited.

#### Output
* output [credit](#credit)

### get_video_likes
Get all the users who have liked a video


```js
vimeo.get_video_likes({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * direction `string` (values: asc, desc): The sort direction of the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.
  * sort `string` (values: alphabetical, date): The way to sort the results.

#### Output
* output `array`
  * items [user](#user)

### get_video_thumbnails
Get all the thumbnails of a video


```js
vimeo.get_video_thumbnails({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [picture](#picture)

### create_video_thumbnail
Add a video thumbnail


```js
vimeo.create_video_thumbnail({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body `object`
    * active `boolean`: Whether the image created by the `time` field should be the default thumbnail for the video.
    * time `number`: Creates an image of the video from the given time offset.

#### Output
* output [picture](#picture)

### delete_video_thumbnail
Delete a video thumbnail


```js
vimeo.delete_video_thumbnail({
  "picture_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * picture_id **required** `number`: The ID of the picture.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_video_thumbnail
Get a video thumbnail


```js
vimeo.get_video_thumbnail({
  "picture_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * picture_id **required** `number`: The ID of the picture.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [picture](#picture)

### edit_video_thumbnail
Edit a video thumbnail


```js
vimeo.edit_video_thumbnail({
  "picture_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * picture_id **required** `number`: The ID of the picture.
  * video_id **required** `number`: The ID of the video.
  * body `object`
    * active `boolean`: Whether this thumbnail is the default.

#### Output
* output [picture](#picture)

### delete_video_embed_preset
Remove an embed preset from a video


```js
vimeo.delete_video_embed_preset({
  "preset_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_video_embed_preset
Check if an embed preset has been added to a video


```js
vimeo.get_video_embed_preset({
  "preset_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### add_video_embed_preset
Add an embed preset to a video


```js
vimeo.add_video_embed_preset({
  "preset_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * preset_id **required** `number`: The ID of the preset.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_video_privacy_domains
Get all the domains on which a video can be embedded


```js
vimeo.get_video_privacy_domains({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [domain](#domain)

### delete_video_privacy_domain
Restrict a video from being embedded on a domain


```js
vimeo.delete_video_privacy_domain({
  "domain": "",
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: The domain name.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### add_video_privacy_domain
If domain privacy is enabled for this video, this method permits the video to be embedded on the specified domain.


```js
vimeo.add_video_privacy_domain({
  "domain": "",
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: The domain name.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_video_privacy_users
Get all the users who can view a user's private videos by default


```js
vimeo.get_video_privacy_users({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [user](#user)

### add_video_privacy_users
The body of this request should follow our
[batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
a single `URI` field, and the value of this field must be the URI of the user who can view this video.


```js
vimeo.add_video_privacy_users({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output `array`
  * items [user](#user)

### delete_video_privacy_user
Restrict a user from viewing a private video


```js
vimeo.delete_video_privacy_user({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### add_video_privacy_user
Permit a specific user to view a private video


```js
vimeo.add_video_privacy_user({
  "user_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `number`: The ID of the user.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [user](#user)

### get_video_tags
Get all the tags of a video


```js
vimeo.get_video_tags({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output `array`
  * items [tag](#tag)

### add_video_tags
Add a list of tags to a video


```js
vimeo.add_video_tags({
  "video_id": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * name **required** `string`: The name of the tag to apply. See our documentation on [batch requests](https://developer.vimeo.com/api/common-formats#batch-requests) for more information.
    * page `number`: The page number of the results to show.
    * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [tag](#tag)

### delete_video_tag
Remove a tag from a video


```js
vimeo.delete_video_tag({
  "video_id": 0,
  "word": ""
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * word **required** `string`: The tag word.

#### Output
*Output schema unknown*

### check_video_for_tag
Check if a tag has been added to a video


```js
vimeo.check_video_for_tag({
  "video_id": 0,
  "word": ""
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * word **required** `string`: The tag word.

#### Output
* output [tag](#tag)

### add_video_tag
Add a specific tag to a video


```js
vimeo.add_video_tag({
  "video_id": 0,
  "word": ""
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * word **required** `string`: The tag word.

#### Output
* output [tag](#tag)

### get_text_tracks
Get all the text tracks of a video


```js
vimeo.get_text_tracks({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output `array`
  * items [text-track](#text-track)

### create_text_track
For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).


```js
vimeo.create_text_track({
  "video_id": 0,
  "body": {
    "language": "",
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * active `boolean`: Active text tracks appear in the player and are visible to other users. Only one text track per language can be active.
    * language **required** `string`: The language of the text track. For a complete list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
    * name **required** `string`: The name of the text track.
    * type **required** `string` (values: captions, chapters, descriptions, metadata, subtitles): The type of the text track.

#### Output
* output [text-track](#text-track)

### delete_text_track
Delete a text track


```js
vimeo.delete_text_track({
  "texttrack_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * texttrack_id **required** `number`: The ID of the text track.
  * video_id **required** `number`: The ID of the video.

#### Output
*Output schema unknown*

### get_text_track
Get a specific text track


```js
vimeo.get_text_track({
  "texttrack_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * texttrack_id **required** `number`: The ID of the text track.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [text-track](#text-track)

### edit_text_track
Edit a text track


```js
vimeo.edit_text_track({
  "texttrack_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * texttrack_id **required** `number`: The ID of the text track.
  * video_id **required** `number`: The ID of the video.
  * body `object`
    * active `boolean`: Whether the text track is active, meaning that it appears in the player. Only one text track per language, and type, can be active.
    * language `string`: The language of the text track. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
    * name `string`: The name of the text track.
    * type `string` (values: captions, chapters, descriptions, metadata, subtitles): The text track type.

#### Output
* output [text-track](#text-track)

### create_video_custom_logo
Add a new custom logo to a video


```js
vimeo.create_video_custom_logo({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.

#### Output
* output [picture](#picture)

### get_video_custom_logo
Get a custom video logo


```js
vimeo.get_video_custom_logo({
  "thumbnail_id": 0,
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * thumbnail_id **required** `number`: The ID of the picture.
  * video_id **required** `number`: The ID of the video.

#### Output
* output [picture](#picture)

### create_video_version
Add a version to a video


```js
vimeo.create_video_version({
  "video_id": 0,
  "body": {
    "file_name": "",
    "upload": {
      "approach": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * body **required** `object`
    * file_name **required** `string`: The name of the version
    * upload **required** `object`
      * approach **required** `string` (values: post, pull, streaming, tus): Upload approach
      * link `string`: If your upload approach is pull, Vimeo will download the video hosted at this public URL. This URL must be valid for at least 24 hours.
      * redirect_url `string`: The app's redirect URL. Use this parameter when `approach` is `post`.
      * size `string`: Upload size

#### Output
* output [video-versions](#video-versions)

### get_related_videos
Get all the related videos of a video


```js
vimeo.get_related_videos({
  "video_id": 0
}, context)
```

#### Input
* input `object`
  * video_id **required** `number`: The ID of the video.
  * filter `string` (values: related): The attribute by which to filter the results.
  * page `number`: The page number of the results to show.
  * per_page `number`: The number of items to show on each page of results, up to a maximum of 100.

#### Output
* output `array`
  * items [video](#video)



## Definitions

### activity-3-1
* Activity 3.1 `object`
  * category: The category that this event occurred for. This will be preset for only "category" activity types.
    * icon: The active icon for the category.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * last_video_featured_time **required** `string`: The last time, in ISO 8601 format, that a video was featured.
    * link **required** `string`: The URL to access the category in a browser.
    * metadata **required** `object`: Metadata about the category.
      * connections **required** `object`: A collection of information that is connected to this resource.
        * channels **required** `object`: Information about the channels related to this category.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups related to this category.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * users **required** `object`: Information about the users related to this category.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos related to this category.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: The permissible actions related to the category.
        * follow **required** `object`: An action indicating if the authenticated user has followed this category.
          * added **required** `boolean`: Whether the authenticated user has followed this category.
          * added_time **required** `string`: The time in ISO 8601 format that the user followed this category, or the null value if the user hasn't followed this category.
          * uri **required** `string`: The URI for following or unfollowing this category: PUT to this URI to follow the category, or DELETE to this URI to unfollow the category.
    * name **required** `string`: The display name that identifies the category.
    * parent **required** `object`: The container of this category's parent category, if the current category is a subcategory.
      * link **required** `string`: The URL to access the parent category in a browser.
      * name **required** `string`: The display name that identifies the parent category.
      * uri **required** `string`: The unique identifier to access the parent of this category resource.
    * pictures **required**: The active picture for this category; defaults to vertical color bars.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * resource_key **required** `string`: The resource key of the category.
    * subcategories `array`: All the subcategories that belong to this category, if the current category is a top-level parent.
      * items `object`
        * link **required** `string`: The URL to access the subcategory in a browser.
        * name **required** `string`: The display name that identifies the subcategory.
        * uri **required** `string`: The unique identifier to access the subcategory resource.
    * top_level **required** `boolean`: Whether the category isn't a subcategory of another category.
    * uri **required** `string`: The unique identifier to access the category resource.
  * channel: The channel that this event occurred for. This will be present for only "channel" activity types.
    * tags **required** `array`: An array of all tags assigned to this channel.
      * items [tag](#tag)
    * categories **required** `array`: The categories to which this channel belongs as specified by the channel moderators.
      * items [category](#category)
    * created_time **required** `string`: The time in ISO 8601 format when the channel was created.
    * description **required** `string`: A brief explanation of the channel's content.
    * header **required**: The banner that appears by default at the top of the channel page.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * link **required** `string`: The URL to access the channel in a browser.
    * metadata **required** `object`: Metadata about the channel.
      * connections **required** `object`: A collection of information that is connected to this resource.
        * privacy_users **required** `object`: Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * users **required** `object`: Information about the users following or moderating this channel.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos that belong to this channel.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: A list of resource URIs related to the channel.
        * add_moderators **required** `object`: An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * add_to **required** `object`: When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * follow **required** `object`: An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
          * added **required** `boolean`: Whether the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
          * added_time **required** `string`: The time in ISO 8601 format that the user followed this channel, or the null value if the user hasn't followed the channel. This data requires a bearer token with the `private` scope.
          * type **required** `string` (values: moderator, subscriber): Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or DELETE to this URI to unfollow the channel. This data requires a bearer token with the `private` scope.
        * moderate_videos **required** `object`: An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
    * modified_time **required** `string`: The time in ISO 8601 format when the album was last modified.
    * name **required** `string`: The display name that identifies the channel.
    * pictures **required**: The active image for the channel; defaults to the thumbnail of the last video added to the channel.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * privacy **required** `object`: The privacy settings of the channel.
      * view **required** `string` (values: anybody, moderators, users): Who can view the channel:
    * resource_key **required** `string`: The channel resource key.
    * uri **required** `string`: The unique identifier to access the channel resource.
    * user **required**: The Vimeo user who owns the channel.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
  * clip **required**: Video associated with ths activity.
    * tags **required** `array`: An array of all tags assigned to this video.
      * items [tag](#tag)
    * categories **required** `array`: The categories to which this video belongs.
      * items [category](#category)
    * content_rating **required** `array`: The content ratings of this video.
      * items `string`
    * context **required** `object`: The context of the video's subscription, if this video is part of a subscription.
      * action **required** `string` (values: Added to, Appearance by, Liked by, Uploaded by): The contextual action:
      * resource **required** `object`: The contextual resource: a user, group, or channel representation, or an object of a tag.
      * resource_type **required** `string`: The contextual resource type.
    * created_time **required** `string`: The time in ISO 8601 format when the video was created.
    * description **required** `string`: A brief explanation of the video's content.
    * duration **required** `number`: The video's duration in seconds.
    * embed **required**: Information about embedding this video.
      * buttons **required** `object`: A collection of information about the buttons that appear on the interface of the embeddable player.
        * embed **required** `boolean`: Whether the Embed button appears in the embeddable player for this video.
        * fullscreen **required** `boolean`: Whether the Fullscreen button appears in the embeddable player for this video.
        * hd **required** `boolean`: Whether the HD button appears in the embeddable player for this video.
        * like **required** `boolean`: Whether the Like button appears in the embeddable player for this video.
        * scaling **required** `boolean`: Whether the Scaling button appears in the embeddable player for this video.
        * share **required** `boolean`: Whether the Share button appears in the embeddable player for this video.
        * watchlater **required** `boolean`: Whether the Watch Later button appears in the embeddable player for this video.
      * color **required** `string`: The primary player color, which controls the color of the progress bar, buttons, and more.
      * logos **required** `object`: A collection of information about the logo in the corner of the embeddable player.
        * custom **required** `object`: A collection of information relating to custom logos in the embeddable player.
          * active **required** `boolean`: Whether the custom logo appears in the embeddable player.
          * link **required** `string`: The URL that loads upon clicking the custom logo.
          * sticky **required** `boolean`: Whether the custom logo appears even when the player interface is hidden.
        * vimeo **required** `boolean`: Whether the Vimeo logo appears in the embeddable player for this video.
      * playbar **required** `boolean`: Whether the playbar appears in the embeddable player for this video.
      * speed **required** `boolean`: Whether the speed controls appear in the embeddable player for this video.
      * title **required** `object`: A collection of information relating to the embeddable player's title bar.
        * name **required** `string` (values: hide, show, user): How the embeddable player handles the video title:
        * owner **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's information:
        * portrait **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's portrait:
      * uri `string`: The URI of the embed preset.
      * volume **required** `boolean`: Whether the volume controls appear in the embeddable player for this video.
    * height **required** `number`: The video's height in pixels.
    * language **required** `string`: The video's primary language.
    * last_user_action_event_date `string`: The time in ISO 8601 format when the user last modified the video.
    * license **required** `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
    * link **required** `string`: The link to the video.
    * metadata **required** `object`: The video's metadata.
      * connections **required** `object`: A list of resource URIs related to the video.
        * comments **required** `object`: Information about the comments on this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of comments on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * credits **required** `object`: Information about the users credited in this video.
          * options `array`: An array of HTTP methods permitted on this URI.
          * total `number`: The total number of users on this connection.
          * uri `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the users who have liked this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * ondemand **required** `object`: Information about this video's ondemand data.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The On Demand connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this video's thumbnails.
          * options **required** `array`: An array of HTTP methods allowed on this URI.
          * total **required** `number`: Total number of thumbnails on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * playback **required** `object`: The DRM playback status connection for this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommendations **required** `object`: The recommendations for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * related **required** `object`: Related content for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * season **required** `object`: Information about the video's season.
          * name **required** `string`: The name of this season.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * texttracks **required** `object`: Information about this video's text tracks.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of text tracks on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * trailer **required** `object`: Information about this video's VOD trailer.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The trailer connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * users_with_access **required** `object`: Information about the user privacy of this video, if the video privacy is `users`.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * versions **required** `object`: Information about the versions of this video.
          * current_uri `string`: The URI of the current version of the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of versions on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: A list of resource URIs related to the video.
        * buy **required** `object`: The Buy interaction for a On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to buy an On Demand video.
          * download **required** `string` (values: available, purchased, restricted, unavailable): The user's download access to this On Demand video:
          * drm **required** `boolean`: Whether the video has DRM.
          * link **required** `string`: The URL to buy the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was purchased.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to purchase the On Demand video.
        * channel **required** `object`: When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * like **required** `object`: Information about whether the authenticated user has liked this video.
          * added **required** `boolean`: Whether the user has liked the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user liked the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * rent **required** `object`: The Rent interaction for an On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to rent an On Demand video.
          * drm **required** `boolean`: Whether the video has DRM.
          * expires_time **required** `string`: The time in ISO 8601 format when the rental period for the video expires.
          * link **required** `string`: The URL to rent the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was rented.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to rent the On Demand video.
        * report **required** `object`: Information about where and how to report a video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * reason **required** `array`: A list of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * subscribe `object`: Subscription information for an On Demand video.
          * drm `boolean`: Whether the video has DRM.
          * expires_time `string`: The time in ISO 8601 format when the subscription expires.
          * purchase_time `string`: The tine in ISO 8601 format when the subscription was purchased.
          * stream `string`: The stream type.
        * watched **required** `object`: Information about removing this video from the user's list of watched videos.
          * added **required** `boolean`: Whether the user has watched the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user watched the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about whether this video appears on the authenticated user's Watch Later list.
          * added **required** `boolean`: Whether the user has added the video to their Watch later list.
          * added_time **required** `string`: The time in ISO 8601 format when the user added the video to their Watch Later list.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * modified_time **required** `string`: The time in ISO 8601 format when the video metadata was last modified.
    * name **required** `string`: The video's title.
    * parent_folder: Information about the folder that contains this video.
      * created_time **required** `string`: The time in ISO 8601 format when the project was created.
      * metadata **required** `object`: The project's metadata.
        * connections **required** `object`: A list of resource URIs related to the project.
          * videos **required** `object`: A standard connection object indicating how to get all the videos in this project.
      * modified_time **required** `string`: The time in ISO 8601 format when the project was last modified.
      * name **required** `string`: The name of the folder.
      * resource_key **required** `string`: The resource key string of the project.
      * uri **required** `string`: The URI of the project.
      * user **required**: The owner of the project.
        * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
        * bio **required** `string`: The user's bio.
        * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
          * items `string`
        * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
        * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
        * link **required** `string`: The absolute URL of this user's profile page.
        * location **required** `string`: The user's location.
        * metadata **required** `object`: The user's metadata.
          * connections **required** `object`: The list of resource URIs related to the user.
          * interactions **required** `object`
        * name **required** `string`: The user's display name.
        * pictures **required**: The active portrait of this user.
          * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
          * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
          * resource_key **required** `string`: The picture's resource key string.
          * sizes **required** `array`: An array containing reference information about all available image files.
          * type **required** `string` (values: caution, custom, default): The type of the picture:
          * uri **required** `string`: The picture's URI.
        * preferences `object`
          * videos `object`
        * resource_key **required** `string`: The user's resource key string.
        * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
          * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * periodic **required** `object`: Information about the user's usage for the current period.
          * space **required** `object`: Information about the user's upload space remaining for the current period.
        * uri **required** `string`: The user's canonical relative URI.
        * websites **required** `array`: The user's websites.
          * items `object`
    * password `string`: The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.
    * pictures **required**: The active picture for this video.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * privacy **required** `object`: The video's privacy setting.
      * add **required** `boolean`: Whether the video can be added to collections.
      * comments **required** `string` (values: anybody, contacts, nobody): Who can comment on the video:
      * download **required** `boolean`: The video's download permission setting.
      * embed **required** `string` (values: private, public): The video's embed permission setting:
      * view **required** `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The general privacy setting for the video:
    * release_time **required** `string`: The time in ISO 8601 format when the video was released.
    * resource_key **required** `string`: The resource key string of the video.
    * spatial **required** `object`: 360 spatial data.
      * director_timeline **required** `array`: 360 director timeline.
        * items `object`
          * pitch `number`: The director timeline pitch, from -90 (minimum) to 90 (maximum).
          * roll `number`: The director timeline roll.
          * time_code `number`: The director timeline time code.
          * yaw `number`: The director timeline yaw, from 0 (minimum) to 360 (maximum).
      * field_of_view **required** `number`: The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
      * projection **required** `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection:
      * stereo_format **required** `string` (values: left-right, mono, top-bottom): The 360 stereo format:
    * stats **required** `object`: A collection of stats associated with this video.
      * plays **required** `number`: The current total number of times that the video has been played.
    * status **required** `string` (values: available, quota_exceeded, total_cap_exceeded, transcode_starting, transcoding, transcoding_error, unavailable, uploading, uploading_error): The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
    * transcode **required** `object`: The transcode information for a video upload.
      * status `string` (values: complete, error, in_progress): Status code for this video's availability.
    * upload **required** `object`: The upload information for this video.
      * approach `string` (values: post, pull, streaming, tus): The approach for uploading the video.
      * complete_uri `string`: The URI for completing the upload.
      * form `string`: The HTML form for uploading a video through the post approach.
      * link `string`: The link of the video to capture through the pull approach.
      * redirect_url `string`: The redirect URL for the upload app.
      * size `number`: The file size in bytes of the uploaded video.
      * status **required** `string` (values: complete, error, in_progress): The status code for the availability of the uploaded video:
      * upload_link `string`: The link for sending video file data.
    * uri **required** `string`: The video's canonical relative URI.
    * user **required**: The video owner.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
    * width **required** `number`: The video's width in pixels.
  * group: The group that this event occurred for. This will be present for only "group" activity types.
    * created_time **required** `string`: The time in ISO 8601 format when the group was created.
    * description **required** `string`: The group's description.
    * link **required** `string`: The link to the group.
    * metadata **required** `object`: Metadata about the group.
      * connections **required** `object`: A collection of information that is connected to this resource.
        * users **required** `object`: Information about the members or moderators of this group.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos contained within this group.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: User actions that have involved the group. This data requires a bearer token with the `private` scope.
        * join **required** `object`: An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
          * added **required** `boolean`: Whether the authenticated user has followed this group. This data requires a bearer token with the `private` scope.
          * added_time **required** `string`: The time in ISO 8601 format when the user joined this group. This data requires a bearer token with the `private` scope.
          * title **required** `string`: The user's title, or the null value if not applicable. This data requires a bearer token with the `private` scope.
          * type **required** `string` (values: member, moderator): Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The URI for following. PUT to this URI to follow, or DELETE to this URI to unfollow. This data requires a bearer token with the `private` scope.
    * modified_time **required** `string`: The time in ISO 8601 format when the group was last modified.
    * name **required** `string`: The group's display name.
    * pictures **required**: The active picture for this group.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * privacy **required** `object`: The group's privacy settings.
      * comment **required** `string` (values: all, members): Who can comment on the group:
      * invite **required** `string` (values: all, members): Who can invite new members to the group:
      * join **required** `string` (values: anybody, members): Who can join the group:
      * videos **required** `string` (values: all, members): Who can add videos to the group:
      * view **required** `string` (values: anybody, members): Who can view the group:
    * resource_key **required** `string`: The resource key of the group.
    * uri **required** `string`: The canonical relative URI of this group.
    * user: The owner of the group.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
  * metadata **required** `object`: The activity's metadata.
    * connections **required** `object`: A list of resource URIs related to the activity.
      * related **required** `object`: Related content for this activity.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
  * tag: The tag that this event occurred for. This will be present for only "tag" activity types.
    * canonical **required** `string`: The normalized canonical tag name.
    * metadata **required** `object`: Metadata about the group.
      * connections **required** `object`: A collection of information that is connected to this resource.
        * videos **required** `object`: Information about the videos related to this tag.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The tag value.
    * resource_key **required** `string`: The tag's resource key string.
    * uri **required** `string`: The canonical relative URI of the tag.
  * time **required** `string`: Time that the event occurred.
  * type **required** `string` (values: appearance, category, channel, facebook_feed, group, like, ondemand, share, tag, twitter_timeline, upload): Activity type
  * user: The user that this event occurred for. This will be present for "like", "appearance", and "share" activity types.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### album
* Album `object`
  * allow_continuous_play **required** `boolean`: Whether an album should allow continuous play.
  * allow_downloads **required** `boolean`: Whether an album should allow downloads.
  * allow_share **required** `boolean`: Whether an album should allow sharing.
  * brand_color **required** `string`: Hexadecimal color code for the decorative color. For example, album videos use this color for player buttons.
  * created_time **required** `string`: The time in ISO 8601 format that the album was created.
  * custom_logo **required**: The custom logo for this album.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * description **required** `string`: A brief description of the album's content.
  * domain **required** `string`: The custom domain a user has selected for their album.
  * duration **required** `number`: The total duration in seconds of all the videos in the album.
  * embed **required** `object`: Embed data for the album.
    * html **required** `string`: The responsive HTML code to embed the playlist on a website. This is present only when `privacy.view` isn't password and when the album has embeddable videos.
  * embed_brand_color **required** `boolean`: Whether to show the album's custom brand color in the player of the album's embedded playlist.
  * embed_custom_logo **required** `boolean`: Whether to show the album's custom logo in the player of the album's embedded playlist.
  * hide_nav **required** `boolean`: Whether to hide the Vimeo navigation when viewing the album.
  * hide_vimeo_logo **required** `boolean`: Whether to hide the Vimeo logo in the player of the album's embedded playlist.
  * layout **required** `string` (values: grid, player): The album's layout preference
  * link **required** `string`: The URL to access the album.
  * metadata **required** `object`: Metadata about the album.
    * connections **required** `object`: A collection of information that is connected to this resource.
      * videos **required** `object`: Information about the videos that belong to this album.
        * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
    * interactions **required** `object`: A list of resource URIs related to the album.
      * add_custom_thumbnails **required** `object`: An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * add_logos **required** `object`: An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * add_videos **required** `object`: An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
  * modified_time **required** `string`: The time in ISO 8601 format when the album was last modified.
  * name **required** `string`: The album's display name.
  * pictures **required**: The active image for the album; defaults to the thumbnail of the last video added to the album.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * privacy **required** `object`: The privacy settings of the album.
    * password `string`: The privacy-enabled password to see this album. Present only when `privacy.view` is `password`.
    * view **required** `string` (values: anybody, embed_only, password): Who can view the album:
  * resource_key **required** `string`: The album resource key.
  * review_mode **required** `boolean`: Whether album videos should use the review mode URL.
  * sort **required** `string` (values: added_first, added_last, alphabetical, arranged, comments, likes, newest, oldest, plays): Sort type of the album.
  * theme **required** `string` (values: dark, standard): The album's color theme preference
  * uri **required** `string`: The album's URI.
  * url **required** `string`: The custom Vimeo URL a user has selected for their album.
  * use_custom_domain **required** `boolean`: Whether the user has opted in to use a custom domain for their album.
  * user **required**: The owner of the album.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.
  * web_brand_color **required** `boolean`: Whether an album should show the brand color in the web layout.
  * web_custom_logo **required** `boolean`: Whether an album's custom logo should be shown in the web layout.

### api-app
* API App `object`
  * name **required** `string`: The name of the API app.
  * uri **required** `string`: The canonical URI of the API app.

### auth
* Auth `object`
  * access_token **required** `string`: The access token string.
  * app **required**: The API application associated with the token.
    * name **required** `string`: The name of the API app.
    * uri **required** `string`: The canonical URI of the API app.
  * expires_on `string`: The date and time that the token expires.
  * refresh_token `string`: The refresh token string.
  * scope **required** `string`: The scope or scopes that the token supports.
  * token_type **required** `string` (values: bearer): The token type:
  * user: The user associated with the token.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### auth-error
* Auth Error `object`
  * error **required** `string`: The name of the error.
  * error_description **required** `string`: The description of the error.

### category
* Category `object`
  * icon: The active icon for the category.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * last_video_featured_time **required** `string`: The last time, in ISO 8601 format, that a video was featured.
  * link **required** `string`: The URL to access the category in a browser.
  * metadata **required** `object`: Metadata about the category.
    * connections **required** `object`: A collection of information that is connected to this resource.
      * channels **required** `object`: Information about the channels related to this category.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of channels on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * groups **required** `object`: Information about the groups related to this category.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of groups on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * users **required** `object`: Information about the users related to this category.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of users on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * videos **required** `object`: Information about the videos related to this category.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
    * interactions **required** `object`: The permissible actions related to the category.
      * follow **required** `object`: An action indicating if the authenticated user has followed this category.
        * added **required** `boolean`: Whether the authenticated user has followed this category.
        * added_time **required** `string`: The time in ISO 8601 format that the user followed this category, or the null value if the user hasn't followed this category.
        * uri **required** `string`: The URI for following or unfollowing this category: PUT to this URI to follow the category, or DELETE to this URI to unfollow the category.
  * name **required** `string`: The display name that identifies the category.
  * parent **required** `object`: The container of this category's parent category, if the current category is a subcategory.
    * link **required** `string`: The URL to access the parent category in a browser.
    * name **required** `string`: The display name that identifies the parent category.
    * uri **required** `string`: The unique identifier to access the parent of this category resource.
  * pictures **required**: The active picture for this category; defaults to vertical color bars.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * resource_key **required** `string`: The resource key of the category.
  * subcategories `array`: All the subcategories that belong to this category, if the current category is a top-level parent.
    * items `object`
      * link **required** `string`: The URL to access the subcategory in a browser.
      * name **required** `string`: The display name that identifies the subcategory.
      * uri **required** `string`: The unique identifier to access the subcategory resource.
  * top_level **required** `boolean`: Whether the category isn't a subcategory of another category.
  * uri **required** `string`: The unique identifier to access the category resource.

### channel
* Channel `object`
  * tags **required** `array`: An array of all tags assigned to this channel.
    * items [tag](#tag)
  * categories **required** `array`: The categories to which this channel belongs as specified by the channel moderators.
    * items [category](#category)
  * created_time **required** `string`: The time in ISO 8601 format when the channel was created.
  * description **required** `string`: A brief explanation of the channel's content.
  * header **required**: The banner that appears by default at the top of the channel page.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * link **required** `string`: The URL to access the channel in a browser.
  * metadata **required** `object`: Metadata about the channel.
    * connections **required** `object`: A collection of information that is connected to this resource.
      * privacy_users **required** `object`: Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * users **required** `object`: Information about the users following or moderating this channel.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of users on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * videos **required** `object`: Information about the videos that belong to this channel.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
    * interactions **required** `object`: A list of resource URIs related to the channel.
      * add_moderators **required** `object`: An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * add_to **required** `object`: When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * follow **required** `object`: An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
        * added **required** `boolean`: Whether the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
        * added_time **required** `string`: The time in ISO 8601 format that the user followed this channel, or the null value if the user hasn't followed the channel. This data requires a bearer token with the `private` scope.
        * type **required** `string` (values: moderator, subscriber): Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
        * uri **required** `string`: The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or DELETE to this URI to unfollow the channel. This data requires a bearer token with the `private` scope.
      * moderate_videos **required** `object`: An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
  * modified_time **required** `string`: The time in ISO 8601 format when the album was last modified.
  * name **required** `string`: The display name that identifies the channel.
  * pictures **required**: The active image for the channel; defaults to the thumbnail of the last video added to the channel.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * privacy **required** `object`: The privacy settings of the channel.
    * view **required** `string` (values: anybody, moderators, users): Who can view the channel:
  * resource_key **required** `string`: The channel resource key.
  * uri **required** `string`: The unique identifier to access the channel resource.
  * user **required**: The Vimeo user who owns the channel.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### comment
* Comment `object`
  * created_on **required** `string`: The time in ISO 8601 format when the comment was posted.
  * metadata **required** `object`
    * connections **required** `object`
      * replies **required** `object`: Information about this comment's replies.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of replies on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
  * resource_key **required** `string`: The resource key string for the comment.
  * text **required** `string`: The content of the comment.
  * type **required** `string` (values: video): The Vimeo content to which the comment relates:
  * uri **required** `string`: The unique identifier to access the comment resource.
  * user **required**: The user who posted the comment.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### content-rating
* Content Rating `object`
  * code **required** `string` (values: drugs, language, nudity, safe, unrated, violence): The code that uniquely identifies this content rating:
  * name **required** `string`: The description of this content rating.
  * uri **required** `string`: The canonical relative URI of the content rating.

### creative-commons
* Creative Commons `object`
  * code **required** `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The code that uniquely identifies this Creative Commons license:
  * name **required** `string`: The description of this Creative Commons license.
  * uri **required** `string`: The canonical relative URI of the Creative Commons license.

### credit
* Credit `object`
  * name **required** `string`: The name of the person credited.
  * role **required** `string`: The character that this person portrayed, or the job that this person performed.
  * uri **required** `string`: The unique identifier to access the credits resource.
  * user: The Vimeo user associated with this credit.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.
  * video: The video associated with this credit.
    * tags **required** `array`: An array of all tags assigned to this video.
      * items [tag](#tag)
    * categories **required** `array`: The categories to which this video belongs.
      * items [category](#category)
    * content_rating **required** `array`: The content ratings of this video.
      * items `string`
    * context **required** `object`: The context of the video's subscription, if this video is part of a subscription.
      * action **required** `string` (values: Added to, Appearance by, Liked by, Uploaded by): The contextual action:
      * resource **required** `object`: The contextual resource: a user, group, or channel representation, or an object of a tag.
      * resource_type **required** `string`: The contextual resource type.
    * created_time **required** `string`: The time in ISO 8601 format when the video was created.
    * description **required** `string`: A brief explanation of the video's content.
    * duration **required** `number`: The video's duration in seconds.
    * embed **required**: Information about embedding this video.
      * buttons **required** `object`: A collection of information about the buttons that appear on the interface of the embeddable player.
        * embed **required** `boolean`: Whether the Embed button appears in the embeddable player for this video.
        * fullscreen **required** `boolean`: Whether the Fullscreen button appears in the embeddable player for this video.
        * hd **required** `boolean`: Whether the HD button appears in the embeddable player for this video.
        * like **required** `boolean`: Whether the Like button appears in the embeddable player for this video.
        * scaling **required** `boolean`: Whether the Scaling button appears in the embeddable player for this video.
        * share **required** `boolean`: Whether the Share button appears in the embeddable player for this video.
        * watchlater **required** `boolean`: Whether the Watch Later button appears in the embeddable player for this video.
      * color **required** `string`: The primary player color, which controls the color of the progress bar, buttons, and more.
      * logos **required** `object`: A collection of information about the logo in the corner of the embeddable player.
        * custom **required** `object`: A collection of information relating to custom logos in the embeddable player.
          * active **required** `boolean`: Whether the custom logo appears in the embeddable player.
          * link **required** `string`: The URL that loads upon clicking the custom logo.
          * sticky **required** `boolean`: Whether the custom logo appears even when the player interface is hidden.
        * vimeo **required** `boolean`: Whether the Vimeo logo appears in the embeddable player for this video.
      * playbar **required** `boolean`: Whether the playbar appears in the embeddable player for this video.
      * speed **required** `boolean`: Whether the speed controls appear in the embeddable player for this video.
      * title **required** `object`: A collection of information relating to the embeddable player's title bar.
        * name **required** `string` (values: hide, show, user): How the embeddable player handles the video title:
        * owner **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's information:
        * portrait **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's portrait:
      * uri `string`: The URI of the embed preset.
      * volume **required** `boolean`: Whether the volume controls appear in the embeddable player for this video.
    * height **required** `number`: The video's height in pixels.
    * language **required** `string`: The video's primary language.
    * last_user_action_event_date `string`: The time in ISO 8601 format when the user last modified the video.
    * license **required** `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
    * link **required** `string`: The link to the video.
    * metadata **required** `object`: The video's metadata.
      * connections **required** `object`: A list of resource URIs related to the video.
        * comments **required** `object`: Information about the comments on this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of comments on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * credits **required** `object`: Information about the users credited in this video.
          * options `array`: An array of HTTP methods permitted on this URI.
          * total `number`: The total number of users on this connection.
          * uri `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the users who have liked this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * ondemand **required** `object`: Information about this video's ondemand data.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The On Demand connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this video's thumbnails.
          * options **required** `array`: An array of HTTP methods allowed on this URI.
          * total **required** `number`: Total number of thumbnails on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * playback **required** `object`: The DRM playback status connection for this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommendations **required** `object`: The recommendations for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * related **required** `object`: Related content for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * season **required** `object`: Information about the video's season.
          * name **required** `string`: The name of this season.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * texttracks **required** `object`: Information about this video's text tracks.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of text tracks on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * trailer **required** `object`: Information about this video's VOD trailer.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The trailer connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * users_with_access **required** `object`: Information about the user privacy of this video, if the video privacy is `users`.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * versions **required** `object`: Information about the versions of this video.
          * current_uri `string`: The URI of the current version of the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of versions on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: A list of resource URIs related to the video.
        * buy **required** `object`: The Buy interaction for a On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to buy an On Demand video.
          * download **required** `string` (values: available, purchased, restricted, unavailable): The user's download access to this On Demand video:
          * drm **required** `boolean`: Whether the video has DRM.
          * link **required** `string`: The URL to buy the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was purchased.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to purchase the On Demand video.
        * channel **required** `object`: When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * like **required** `object`: Information about whether the authenticated user has liked this video.
          * added **required** `boolean`: Whether the user has liked the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user liked the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * rent **required** `object`: The Rent interaction for an On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to rent an On Demand video.
          * drm **required** `boolean`: Whether the video has DRM.
          * expires_time **required** `string`: The time in ISO 8601 format when the rental period for the video expires.
          * link **required** `string`: The URL to rent the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was rented.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to rent the On Demand video.
        * report **required** `object`: Information about where and how to report a video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * reason **required** `array`: A list of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * subscribe `object`: Subscription information for an On Demand video.
          * drm `boolean`: Whether the video has DRM.
          * expires_time `string`: The time in ISO 8601 format when the subscription expires.
          * purchase_time `string`: The tine in ISO 8601 format when the subscription was purchased.
          * stream `string`: The stream type.
        * watched **required** `object`: Information about removing this video from the user's list of watched videos.
          * added **required** `boolean`: Whether the user has watched the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user watched the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about whether this video appears on the authenticated user's Watch Later list.
          * added **required** `boolean`: Whether the user has added the video to their Watch later list.
          * added_time **required** `string`: The time in ISO 8601 format when the user added the video to their Watch Later list.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * modified_time **required** `string`: The time in ISO 8601 format when the video metadata was last modified.
    * name **required** `string`: The video's title.
    * parent_folder: Information about the folder that contains this video.
      * created_time **required** `string`: The time in ISO 8601 format when the project was created.
      * metadata **required** `object`: The project's metadata.
        * connections **required** `object`: A list of resource URIs related to the project.
          * videos **required** `object`: A standard connection object indicating how to get all the videos in this project.
      * modified_time **required** `string`: The time in ISO 8601 format when the project was last modified.
      * name **required** `string`: The name of the folder.
      * resource_key **required** `string`: The resource key string of the project.
      * uri **required** `string`: The URI of the project.
      * user **required**: The owner of the project.
        * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
        * bio **required** `string`: The user's bio.
        * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
          * items `string`
        * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
        * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
        * link **required** `string`: The absolute URL of this user's profile page.
        * location **required** `string`: The user's location.
        * metadata **required** `object`: The user's metadata.
          * connections **required** `object`: The list of resource URIs related to the user.
          * interactions **required** `object`
        * name **required** `string`: The user's display name.
        * pictures **required**: The active portrait of this user.
          * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
          * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
          * resource_key **required** `string`: The picture's resource key string.
          * sizes **required** `array`: An array containing reference information about all available image files.
          * type **required** `string` (values: caution, custom, default): The type of the picture:
          * uri **required** `string`: The picture's URI.
        * preferences `object`
          * videos `object`
        * resource_key **required** `string`: The user's resource key string.
        * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
          * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * periodic **required** `object`: Information about the user's usage for the current period.
          * space **required** `object`: Information about the user's upload space remaining for the current period.
        * uri **required** `string`: The user's canonical relative URI.
        * websites **required** `array`: The user's websites.
          * items `object`
    * password `string`: The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.
    * pictures **required**: The active picture for this video.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * privacy **required** `object`: The video's privacy setting.
      * add **required** `boolean`: Whether the video can be added to collections.
      * comments **required** `string` (values: anybody, contacts, nobody): Who can comment on the video:
      * download **required** `boolean`: The video's download permission setting.
      * embed **required** `string` (values: private, public): The video's embed permission setting:
      * view **required** `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The general privacy setting for the video:
    * release_time **required** `string`: The time in ISO 8601 format when the video was released.
    * resource_key **required** `string`: The resource key string of the video.
    * spatial **required** `object`: 360 spatial data.
      * director_timeline **required** `array`: 360 director timeline.
        * items `object`
          * pitch `number`: The director timeline pitch, from -90 (minimum) to 90 (maximum).
          * roll `number`: The director timeline roll.
          * time_code `number`: The director timeline time code.
          * yaw `number`: The director timeline yaw, from 0 (minimum) to 360 (maximum).
      * field_of_view **required** `number`: The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
      * projection **required** `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection:
      * stereo_format **required** `string` (values: left-right, mono, top-bottom): The 360 stereo format:
    * stats **required** `object`: A collection of stats associated with this video.
      * plays **required** `number`: The current total number of times that the video has been played.
    * status **required** `string` (values: available, quota_exceeded, total_cap_exceeded, transcode_starting, transcoding, transcoding_error, unavailable, uploading, uploading_error): The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
    * transcode **required** `object`: The transcode information for a video upload.
      * status `string` (values: complete, error, in_progress): Status code for this video's availability.
    * upload **required** `object`: The upload information for this video.
      * approach `string` (values: post, pull, streaming, tus): The approach for uploading the video.
      * complete_uri `string`: The URI for completing the upload.
      * form `string`: The HTML form for uploading a video through the post approach.
      * link `string`: The link of the video to capture through the pull approach.
      * redirect_url `string`: The redirect URL for the upload app.
      * size `number`: The file size in bytes of the uploaded video.
      * status **required** `string` (values: complete, error, in_progress): The status code for the availability of the uploaded video:
      * upload_link `string`: The link for sending video file data.
    * uri **required** `string`: The video's canonical relative URI.
    * user **required**: The video owner.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
    * width **required** `number`: The video's width in pixels.

### domain
* Domain `object`
  * allow_hd **required** `boolean`: Whether to permit HD embeds on this domain.
  * domain **required** `string`: The domain name.
  * uri **required** `string`: The URI of the domain.

### embed-settings
* Embed Settings `object`
  * buttons **required** `object`: A collection of information about the buttons that appear on the interface of the embeddable player.
    * embed **required** `boolean`: Whether the Embed button appears in the embeddable player for this video.
    * fullscreen **required** `boolean`: Whether the Fullscreen button appears in the embeddable player for this video.
    * hd **required** `boolean`: Whether the HD button appears in the embeddable player for this video.
    * like **required** `boolean`: Whether the Like button appears in the embeddable player for this video.
    * scaling **required** `boolean`: Whether the Scaling button appears in the embeddable player for this video.
    * share **required** `boolean`: Whether the Share button appears in the embeddable player for this video.
    * watchlater **required** `boolean`: Whether the Watch Later button appears in the embeddable player for this video.
  * color **required** `string`: The primary player color, which controls the color of the progress bar, buttons, and more.
  * logos **required** `object`: A collection of information about the logo in the corner of the embeddable player.
    * custom **required** `object`: A collection of information relating to custom logos in the embeddable player.
      * active **required** `boolean`: Whether the custom logo appears in the embeddable player.
      * link **required** `string`: The URL that loads upon clicking the custom logo.
      * sticky **required** `boolean`: Whether the custom logo appears even when the player interface is hidden.
    * vimeo **required** `boolean`: Whether the Vimeo logo appears in the embeddable player for this video.
  * playbar **required** `boolean`: Whether the playbar appears in the embeddable player for this video.
  * speed **required** `boolean`: Whether the speed controls appear in the embeddable player for this video.
  * title **required** `object`: A collection of information relating to the embeddable player's title bar.
    * name **required** `string` (values: hide, show, user): How the embeddable player handles the video title:
    * owner **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's information:
    * portrait **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's portrait:
  * uri `string`: The URI of the embed preset.
  * volume **required** `boolean`: Whether the volume controls appear in the embeddable player for this video.

### endpoint
* Endpoint `object`
  * methods **required** `array`: All HTTP methods permitted on this endpoint.
    * items `string`
  * path **required** `string`: The path section of the URL, which, when appended to the API host `https:///api.vimeo.com`, builds a full API endpoint.

### error
* Error `object`
  * developer_message **required** `string`: The error message that developers receive.
  * error **required** `string`: The error message that non-developer users receive.
  * error_code **required** `number`: The error code.
  * link **required** `string`: A link to more information about the error.

### group
* Group `object`
  * created_time **required** `string`: The time in ISO 8601 format when the group was created.
  * description **required** `string`: The group's description.
  * link **required** `string`: The link to the group.
  * metadata **required** `object`: Metadata about the group.
    * connections **required** `object`: A collection of information that is connected to this resource.
      * users **required** `object`: Information about the members or moderators of this group.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of users on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * videos **required** `object`: Information about the videos contained within this group.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
    * interactions **required** `object`: User actions that have involved the group. This data requires a bearer token with the `private` scope.
      * join **required** `object`: An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
        * added **required** `boolean`: Whether the authenticated user has followed this group. This data requires a bearer token with the `private` scope.
        * added_time **required** `string`: The time in ISO 8601 format when the user joined this group. This data requires a bearer token with the `private` scope.
        * title **required** `string`: The user's title, or the null value if not applicable. This data requires a bearer token with the `private` scope.
        * type **required** `string` (values: member, moderator): Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
        * uri **required** `string`: The URI for following. PUT to this URI to follow, or DELETE to this URI to unfollow. This data requires a bearer token with the `private` scope.
  * modified_time **required** `string`: The time in ISO 8601 format when the group was last modified.
  * name **required** `string`: The group's display name.
  * pictures **required**: The active picture for this group.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * privacy **required** `object`: The group's privacy settings.
    * comment **required** `string` (values: all, members): Who can comment on the group:
    * invite **required** `string` (values: all, members): Who can invite new members to the group:
    * join **required** `string` (values: anybody, members): Who can join the group:
    * videos **required** `string` (values: all, members): Who can add videos to the group:
    * view **required** `string` (values: anybody, members): Who can view the group:
  * resource_key **required** `string`: The resource key of the group.
  * uri **required** `string`: The canonical relative URI of this group.
  * user: The owner of the group.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### language
* Language `object`
  * code **required** `string`: The code that represents this language.
  * name **required** `string`: The name of the language.

### legacy-error
* Legacy Error `object`
  * error **required** `string`: User-friendly error message

### on-demand-genre
* On Demand Genre `object`
  * canonical **required** `string`: The canonical name or URL slug of the genre.
  * interactions **required** `object`
    * page **required** `object`: Interactions for On Demand pages that are in this genre.
      * added **required** `boolean`: Whether this On Demand genre was added.
      * options **required** `array`: An array of HTTP methods permitted on this URI.
        * items `string`
      * uri **required** `string`: The URI to access the On Demand page.
  * link **required** `string`: The Vimeo URL for this genre.
  * metadata **required** `object`
    * connections **required** `object`: A collection of information connected to this resource.
      * pages **required** `object`: Information about the On Demand pages related to this group.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
  * name **required** `string`: The descriptive name of the genre.
  * uri **required** `string`: The relative URI of the On Demand genre.

### on-demand-page
* On Demand Page `object`
  * background **required**: The background image for the On Demand page on Vimeo.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * colors **required** `object`: The primary and secondary colors used for rendering this On Demand page.
    * primary **required** `string`: The hexadecimal color code for the page's primary color.
    * secondary **required** `string`: The hexadecimal color code for the page's secondary color.
  * content_rating **required** `array`: An array of the page's content ratings.
    * items `string`
  * created_time `string`: The time in ISO 8601 format when the page was created.
  * description **required** `string`: The description of this On Demand page.
  * domain_link **required** `string`: The link to this page on its own domain.
  * episodes **required** `object`: Information about this On Demand page's episodes, if the page is for a series.
    * buy **required** `object`
      * active **required** `boolean`: Whether all the videos on this On Demand page can be purchased as a whole.
      * price **required** `number`: The default price to buy an episode.
    * rent **required** `object`
      * active **required** `boolean`: Whether all the videos on this On Demand page can be rented as a whole.
      * period **required** `string` (values: 1 day, 1 month, 1 week, 1 year, 2 day, 24 hour, 3 day, 3 month, 30 day, 48 hour, 6 month, 60 day, 7 day, 72 hour): The rental period for the video:
      * price **required** `number`: The default price to rent an episode.
  * film: This On Demand page's film, if it is a film.
    * tags **required** `array`: An array of all tags assigned to this video.
      * items [tag](#tag)
    * categories **required** `array`: The categories to which this video belongs.
      * items [category](#category)
    * content_rating **required** `array`: The content ratings of this video.
      * items `string`
    * context **required** `object`: The context of the video's subscription, if this video is part of a subscription.
      * action **required** `string` (values: Added to, Appearance by, Liked by, Uploaded by): The contextual action:
      * resource **required** `object`: The contextual resource: a user, group, or channel representation, or an object of a tag.
      * resource_type **required** `string`: The contextual resource type.
    * created_time **required** `string`: The time in ISO 8601 format when the video was created.
    * description **required** `string`: A brief explanation of the video's content.
    * duration **required** `number`: The video's duration in seconds.
    * embed **required**: Information about embedding this video.
      * buttons **required** `object`: A collection of information about the buttons that appear on the interface of the embeddable player.
        * embed **required** `boolean`: Whether the Embed button appears in the embeddable player for this video.
        * fullscreen **required** `boolean`: Whether the Fullscreen button appears in the embeddable player for this video.
        * hd **required** `boolean`: Whether the HD button appears in the embeddable player for this video.
        * like **required** `boolean`: Whether the Like button appears in the embeddable player for this video.
        * scaling **required** `boolean`: Whether the Scaling button appears in the embeddable player for this video.
        * share **required** `boolean`: Whether the Share button appears in the embeddable player for this video.
        * watchlater **required** `boolean`: Whether the Watch Later button appears in the embeddable player for this video.
      * color **required** `string`: The primary player color, which controls the color of the progress bar, buttons, and more.
      * logos **required** `object`: A collection of information about the logo in the corner of the embeddable player.
        * custom **required** `object`: A collection of information relating to custom logos in the embeddable player.
          * active **required** `boolean`: Whether the custom logo appears in the embeddable player.
          * link **required** `string`: The URL that loads upon clicking the custom logo.
          * sticky **required** `boolean`: Whether the custom logo appears even when the player interface is hidden.
        * vimeo **required** `boolean`: Whether the Vimeo logo appears in the embeddable player for this video.
      * playbar **required** `boolean`: Whether the playbar appears in the embeddable player for this video.
      * speed **required** `boolean`: Whether the speed controls appear in the embeddable player for this video.
      * title **required** `object`: A collection of information relating to the embeddable player's title bar.
        * name **required** `string` (values: hide, show, user): How the embeddable player handles the video title:
        * owner **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's information:
        * portrait **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's portrait:
      * uri `string`: The URI of the embed preset.
      * volume **required** `boolean`: Whether the volume controls appear in the embeddable player for this video.
    * height **required** `number`: The video's height in pixels.
    * language **required** `string`: The video's primary language.
    * last_user_action_event_date `string`: The time in ISO 8601 format when the user last modified the video.
    * license **required** `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
    * link **required** `string`: The link to the video.
    * metadata **required** `object`: The video's metadata.
      * connections **required** `object`: A list of resource URIs related to the video.
        * comments **required** `object`: Information about the comments on this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of comments on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * credits **required** `object`: Information about the users credited in this video.
          * options `array`: An array of HTTP methods permitted on this URI.
          * total `number`: The total number of users on this connection.
          * uri `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the users who have liked this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * ondemand **required** `object`: Information about this video's ondemand data.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The On Demand connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this video's thumbnails.
          * options **required** `array`: An array of HTTP methods allowed on this URI.
          * total **required** `number`: Total number of thumbnails on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * playback **required** `object`: The DRM playback status connection for this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommendations **required** `object`: The recommendations for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * related **required** `object`: Related content for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * season **required** `object`: Information about the video's season.
          * name **required** `string`: The name of this season.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * texttracks **required** `object`: Information about this video's text tracks.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of text tracks on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * trailer **required** `object`: Information about this video's VOD trailer.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The trailer connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * users_with_access **required** `object`: Information about the user privacy of this video, if the video privacy is `users`.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * versions **required** `object`: Information about the versions of this video.
          * current_uri `string`: The URI of the current version of the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of versions on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: A list of resource URIs related to the video.
        * buy **required** `object`: The Buy interaction for a On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to buy an On Demand video.
          * download **required** `string` (values: available, purchased, restricted, unavailable): The user's download access to this On Demand video:
          * drm **required** `boolean`: Whether the video has DRM.
          * link **required** `string`: The URL to buy the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was purchased.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to purchase the On Demand video.
        * channel **required** `object`: When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * like **required** `object`: Information about whether the authenticated user has liked this video.
          * added **required** `boolean`: Whether the user has liked the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user liked the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * rent **required** `object`: The Rent interaction for an On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to rent an On Demand video.
          * drm **required** `boolean`: Whether the video has DRM.
          * expires_time **required** `string`: The time in ISO 8601 format when the rental period for the video expires.
          * link **required** `string`: The URL to rent the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was rented.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to rent the On Demand video.
        * report **required** `object`: Information about where and how to report a video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * reason **required** `array`: A list of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * subscribe `object`: Subscription information for an On Demand video.
          * drm `boolean`: Whether the video has DRM.
          * expires_time `string`: The time in ISO 8601 format when the subscription expires.
          * purchase_time `string`: The tine in ISO 8601 format when the subscription was purchased.
          * stream `string`: The stream type.
        * watched **required** `object`: Information about removing this video from the user's list of watched videos.
          * added **required** `boolean`: Whether the user has watched the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user watched the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about whether this video appears on the authenticated user's Watch Later list.
          * added **required** `boolean`: Whether the user has added the video to their Watch later list.
          * added_time **required** `string`: The time in ISO 8601 format when the user added the video to their Watch Later list.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * modified_time **required** `string`: The time in ISO 8601 format when the video metadata was last modified.
    * name **required** `string`: The video's title.
    * parent_folder: Information about the folder that contains this video.
      * created_time **required** `string`: The time in ISO 8601 format when the project was created.
      * metadata **required** `object`: The project's metadata.
        * connections **required** `object`: A list of resource URIs related to the project.
          * videos **required** `object`: A standard connection object indicating how to get all the videos in this project.
      * modified_time **required** `string`: The time in ISO 8601 format when the project was last modified.
      * name **required** `string`: The name of the folder.
      * resource_key **required** `string`: The resource key string of the project.
      * uri **required** `string`: The URI of the project.
      * user **required**: The owner of the project.
        * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
        * bio **required** `string`: The user's bio.
        * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
          * items `string`
        * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
        * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
        * link **required** `string`: The absolute URL of this user's profile page.
        * location **required** `string`: The user's location.
        * metadata **required** `object`: The user's metadata.
          * connections **required** `object`: The list of resource URIs related to the user.
          * interactions **required** `object`
        * name **required** `string`: The user's display name.
        * pictures **required**: The active portrait of this user.
          * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
          * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
          * resource_key **required** `string`: The picture's resource key string.
          * sizes **required** `array`: An array containing reference information about all available image files.
          * type **required** `string` (values: caution, custom, default): The type of the picture:
          * uri **required** `string`: The picture's URI.
        * preferences `object`
          * videos `object`
        * resource_key **required** `string`: The user's resource key string.
        * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
          * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * periodic **required** `object`: Information about the user's usage for the current period.
          * space **required** `object`: Information about the user's upload space remaining for the current period.
        * uri **required** `string`: The user's canonical relative URI.
        * websites **required** `array`: The user's websites.
          * items `object`
    * password `string`: The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.
    * pictures **required**: The active picture for this video.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * privacy **required** `object`: The video's privacy setting.
      * add **required** `boolean`: Whether the video can be added to collections.
      * comments **required** `string` (values: anybody, contacts, nobody): Who can comment on the video:
      * download **required** `boolean`: The video's download permission setting.
      * embed **required** `string` (values: private, public): The video's embed permission setting:
      * view **required** `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The general privacy setting for the video:
    * release_time **required** `string`: The time in ISO 8601 format when the video was released.
    * resource_key **required** `string`: The resource key string of the video.
    * spatial **required** `object`: 360 spatial data.
      * director_timeline **required** `array`: 360 director timeline.
        * items `object`
          * pitch `number`: The director timeline pitch, from -90 (minimum) to 90 (maximum).
          * roll `number`: The director timeline roll.
          * time_code `number`: The director timeline time code.
          * yaw `number`: The director timeline yaw, from 0 (minimum) to 360 (maximum).
      * field_of_view **required** `number`: The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
      * projection **required** `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection:
      * stereo_format **required** `string` (values: left-right, mono, top-bottom): The 360 stereo format:
    * stats **required** `object`: A collection of stats associated with this video.
      * plays **required** `number`: The current total number of times that the video has been played.
    * status **required** `string` (values: available, quota_exceeded, total_cap_exceeded, transcode_starting, transcoding, transcoding_error, unavailable, uploading, uploading_error): The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
    * transcode **required** `object`: The transcode information for a video upload.
      * status `string` (values: complete, error, in_progress): Status code for this video's availability.
    * upload **required** `object`: The upload information for this video.
      * approach `string` (values: post, pull, streaming, tus): The approach for uploading the video.
      * complete_uri `string`: The URI for completing the upload.
      * form `string`: The HTML form for uploading a video through the post approach.
      * link `string`: The link of the video to capture through the pull approach.
      * redirect_url `string`: The redirect URL for the upload app.
      * size `number`: The file size in bytes of the uploaded video.
      * status **required** `string` (values: complete, error, in_progress): The status code for the availability of the uploaded video:
      * upload_link `string`: The link for sending video file data.
    * uri **required** `string`: The video's canonical relative URI.
    * user **required**: The video owner.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
    * width **required** `number`: The video's width in pixels.
  * genres **required** `array`: All the genres assigned to this page.
    * items [on-demand-genre](#on-demand-genre)
  * link **required** `string`: The link to the page on Vimeo.
  * metadata **required** `object`: Metadata about the On Demand page.
    * connections **required** `object`: A collection of information that is connected to this resource, including videos, genres, and pictures connections.
      * metadata **required** `object`
        * connections **required** `object`
          * comments **required** `object`: Information about the comments associated with this page.
          * genres **required** `object`: Information about the genres associated with this page.
          * likes **required** `object`: Information about the likes associated with this page.
          * pictures **required** `object`: Information about the pictures associated with this page.
          * seasons **required** `object`: Information about the seasons associated with this page.
          * videos **required** `object`: Information about the videos associated with this page.
    * interactions **required**: The user's available purchase interactions.
      * buy `object`: Information on purchasing this video.
        * drm `boolean`: Whether the On Demand video for purchase has DRM.
      * rent `object`: Information on renting this video.
      * subscribe `object`: Information on subscribing to this video.
        * drm `boolean`: Whether the On Demand subscription has DRM.
        * expires_time `string`: The time in ISO 8601 format when the On Demand video will expire.
        * link `string`: The URL to purchase this On Demand subscription on Vimeo.
        * purchase_time `string`: The time in ISO 8601 format when the On Demand was purchased.
        * stream `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand subscription:
        * uri `string`: The On Demand subscription's product URI.
  * modified_time `string`: he time in ISO 8601 format when the page was last modified.
  * name **required** `string`: A descriptive title of this On Demand page.
  * pictures **required**: The active poster for this On Demand page.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * preorder **required** `object`
    * active **required** `boolean`: Whether this page is available for preorder.
    * cancel_time **required** `string`: The time in ISO 8601 format when the preorder was cancelled.
    * publish_time **required** `string`: The time in ISO 8601 format when the preorder was released to the public.
    * time **required** `string`: The time in ISO 8601 format when the preorder started.
  * published **required** `object`
    * enabled **required** `boolean`: Whether this On Demand page has been published.
    * time **required** `string`: The time in IS 8601 format when this page was published.
  * rating **required** `number`: The rating of this page.
  * resource_key **required** `string`: The VOD resource key.
  * sku `string`: The creator-designated SKU for this On Demand page.
  * subscription **required** `object`: Information about subscribing to this On Demand page, if enabled.
    * active **required** `boolean`: Whether this product is active.
    * link **required** `string`: The link to this product on Vimeo.
    * period `string`: The product's rental period.
    * price **required** `object`: The accepted currencies and respective pricing for this product.
  * theme **required** `string`: The graphical theme for this On Demand page.
  * thumbnail **required**: The thumbnail image for the On Demand page on Vimeo.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * trailer **required**: The trailer for this On Demand page.
    * tags **required** `array`: An array of all tags assigned to this video.
      * items [tag](#tag)
    * categories **required** `array`: The categories to which this video belongs.
      * items [category](#category)
    * content_rating **required** `array`: The content ratings of this video.
      * items `string`
    * context **required** `object`: The context of the video's subscription, if this video is part of a subscription.
      * action **required** `string` (values: Added to, Appearance by, Liked by, Uploaded by): The contextual action:
      * resource **required** `object`: The contextual resource: a user, group, or channel representation, or an object of a tag.
      * resource_type **required** `string`: The contextual resource type.
    * created_time **required** `string`: The time in ISO 8601 format when the video was created.
    * description **required** `string`: A brief explanation of the video's content.
    * duration **required** `number`: The video's duration in seconds.
    * embed **required**: Information about embedding this video.
      * buttons **required** `object`: A collection of information about the buttons that appear on the interface of the embeddable player.
        * embed **required** `boolean`: Whether the Embed button appears in the embeddable player for this video.
        * fullscreen **required** `boolean`: Whether the Fullscreen button appears in the embeddable player for this video.
        * hd **required** `boolean`: Whether the HD button appears in the embeddable player for this video.
        * like **required** `boolean`: Whether the Like button appears in the embeddable player for this video.
        * scaling **required** `boolean`: Whether the Scaling button appears in the embeddable player for this video.
        * share **required** `boolean`: Whether the Share button appears in the embeddable player for this video.
        * watchlater **required** `boolean`: Whether the Watch Later button appears in the embeddable player for this video.
      * color **required** `string`: The primary player color, which controls the color of the progress bar, buttons, and more.
      * logos **required** `object`: A collection of information about the logo in the corner of the embeddable player.
        * custom **required** `object`: A collection of information relating to custom logos in the embeddable player.
          * active **required** `boolean`: Whether the custom logo appears in the embeddable player.
          * link **required** `string`: The URL that loads upon clicking the custom logo.
          * sticky **required** `boolean`: Whether the custom logo appears even when the player interface is hidden.
        * vimeo **required** `boolean`: Whether the Vimeo logo appears in the embeddable player for this video.
      * playbar **required** `boolean`: Whether the playbar appears in the embeddable player for this video.
      * speed **required** `boolean`: Whether the speed controls appear in the embeddable player for this video.
      * title **required** `object`: A collection of information relating to the embeddable player's title bar.
        * name **required** `string` (values: hide, show, user): How the embeddable player handles the video title:
        * owner **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's information:
        * portrait **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's portrait:
      * uri `string`: The URI of the embed preset.
      * volume **required** `boolean`: Whether the volume controls appear in the embeddable player for this video.
    * height **required** `number`: The video's height in pixels.
    * language **required** `string`: The video's primary language.
    * last_user_action_event_date `string`: The time in ISO 8601 format when the user last modified the video.
    * license **required** `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
    * link **required** `string`: The link to the video.
    * metadata **required** `object`: The video's metadata.
      * connections **required** `object`: A list of resource URIs related to the video.
        * comments **required** `object`: Information about the comments on this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of comments on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * credits **required** `object`: Information about the users credited in this video.
          * options `array`: An array of HTTP methods permitted on this URI.
          * total `number`: The total number of users on this connection.
          * uri `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the users who have liked this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * ondemand **required** `object`: Information about this video's ondemand data.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The On Demand connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this video's thumbnails.
          * options **required** `array`: An array of HTTP methods allowed on this URI.
          * total **required** `number`: Total number of thumbnails on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * playback **required** `object`: The DRM playback status connection for this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommendations **required** `object`: The recommendations for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * related **required** `object`: Related content for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * season **required** `object`: Information about the video's season.
          * name **required** `string`: The name of this season.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * texttracks **required** `object`: Information about this video's text tracks.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of text tracks on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * trailer **required** `object`: Information about this video's VOD trailer.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The trailer connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * users_with_access **required** `object`: Information about the user privacy of this video, if the video privacy is `users`.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * versions **required** `object`: Information about the versions of this video.
          * current_uri `string`: The URI of the current version of the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of versions on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: A list of resource URIs related to the video.
        * buy **required** `object`: The Buy interaction for a On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to buy an On Demand video.
          * download **required** `string` (values: available, purchased, restricted, unavailable): The user's download access to this On Demand video:
          * drm **required** `boolean`: Whether the video has DRM.
          * link **required** `string`: The URL to buy the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was purchased.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to purchase the On Demand video.
        * channel **required** `object`: When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * like **required** `object`: Information about whether the authenticated user has liked this video.
          * added **required** `boolean`: Whether the user has liked the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user liked the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * rent **required** `object`: The Rent interaction for an On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to rent an On Demand video.
          * drm **required** `boolean`: Whether the video has DRM.
          * expires_time **required** `string`: The time in ISO 8601 format when the rental period for the video expires.
          * link **required** `string`: The URL to rent the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was rented.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to rent the On Demand video.
        * report **required** `object`: Information about where and how to report a video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * reason **required** `array`: A list of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * subscribe `object`: Subscription information for an On Demand video.
          * drm `boolean`: Whether the video has DRM.
          * expires_time `string`: The time in ISO 8601 format when the subscription expires.
          * purchase_time `string`: The tine in ISO 8601 format when the subscription was purchased.
          * stream `string`: The stream type.
        * watched **required** `object`: Information about removing this video from the user's list of watched videos.
          * added **required** `boolean`: Whether the user has watched the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user watched the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about whether this video appears on the authenticated user's Watch Later list.
          * added **required** `boolean`: Whether the user has added the video to their Watch later list.
          * added_time **required** `string`: The time in ISO 8601 format when the user added the video to their Watch Later list.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * modified_time **required** `string`: The time in ISO 8601 format when the video metadata was last modified.
    * name **required** `string`: The video's title.
    * parent_folder: Information about the folder that contains this video.
      * created_time **required** `string`: The time in ISO 8601 format when the project was created.
      * metadata **required** `object`: The project's metadata.
        * connections **required** `object`: A list of resource URIs related to the project.
          * videos **required** `object`: A standard connection object indicating how to get all the videos in this project.
      * modified_time **required** `string`: The time in ISO 8601 format when the project was last modified.
      * name **required** `string`: The name of the folder.
      * resource_key **required** `string`: The resource key string of the project.
      * uri **required** `string`: The URI of the project.
      * user **required**: The owner of the project.
        * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
        * bio **required** `string`: The user's bio.
        * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
          * items `string`
        * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
        * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
        * link **required** `string`: The absolute URL of this user's profile page.
        * location **required** `string`: The user's location.
        * metadata **required** `object`: The user's metadata.
          * connections **required** `object`: The list of resource URIs related to the user.
          * interactions **required** `object`
        * name **required** `string`: The user's display name.
        * pictures **required**: The active portrait of this user.
          * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
          * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
          * resource_key **required** `string`: The picture's resource key string.
          * sizes **required** `array`: An array containing reference information about all available image files.
          * type **required** `string` (values: caution, custom, default): The type of the picture:
          * uri **required** `string`: The picture's URI.
        * preferences `object`
          * videos `object`
        * resource_key **required** `string`: The user's resource key string.
        * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
          * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * periodic **required** `object`: Information about the user's usage for the current period.
          * space **required** `object`: Information about the user's upload space remaining for the current period.
        * uri **required** `string`: The user's canonical relative URI.
        * websites **required** `array`: The user's websites.
          * items `object`
    * password `string`: The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.
    * pictures **required**: The active picture for this video.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * privacy **required** `object`: The video's privacy setting.
      * add **required** `boolean`: Whether the video can be added to collections.
      * comments **required** `string` (values: anybody, contacts, nobody): Who can comment on the video:
      * download **required** `boolean`: The video's download permission setting.
      * embed **required** `string` (values: private, public): The video's embed permission setting:
      * view **required** `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The general privacy setting for the video:
    * release_time **required** `string`: The time in ISO 8601 format when the video was released.
    * resource_key **required** `string`: The resource key string of the video.
    * spatial **required** `object`: 360 spatial data.
      * director_timeline **required** `array`: 360 director timeline.
        * items `object`
          * pitch `number`: The director timeline pitch, from -90 (minimum) to 90 (maximum).
          * roll `number`: The director timeline roll.
          * time_code `number`: The director timeline time code.
          * yaw `number`: The director timeline yaw, from 0 (minimum) to 360 (maximum).
      * field_of_view **required** `number`: The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
      * projection **required** `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection:
      * stereo_format **required** `string` (values: left-right, mono, top-bottom): The 360 stereo format:
    * stats **required** `object`: A collection of stats associated with this video.
      * plays **required** `number`: The current total number of times that the video has been played.
    * status **required** `string` (values: available, quota_exceeded, total_cap_exceeded, transcode_starting, transcoding, transcoding_error, unavailable, uploading, uploading_error): The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
    * transcode **required** `object`: The transcode information for a video upload.
      * status `string` (values: complete, error, in_progress): Status code for this video's availability.
    * upload **required** `object`: The upload information for this video.
      * approach `string` (values: post, pull, streaming, tus): The approach for uploading the video.
      * complete_uri `string`: The URI for completing the upload.
      * form `string`: The HTML form for uploading a video through the post approach.
      * link `string`: The link of the video to capture through the pull approach.
      * redirect_url `string`: The redirect URL for the upload app.
      * size `number`: The file size in bytes of the uploaded video.
      * status **required** `string` (values: complete, error, in_progress): The status code for the availability of the uploaded video:
      * upload_link `string`: The link for sending video file data.
    * uri **required** `string`: The video's canonical relative URI.
    * user **required**: The video owner.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
    * width **required** `number`: The video's width in pixels.
  * type **required** `string` (values: film, series): Whether this On Demand page is for a film or a series.
  * uri **required** `string`: The relative URI of the On Demand page.
  * user **required**: The user who created this On Demand page.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### on-demand-promotion
* On Demand Promotion `object`
  * access_type **required** `string` (values: default, vip): The type of access that this promotion grants:
  * discount_type **required** `string` (values: dollars, free, percent): The type of discount for which this promotion can be used.
  * download **required** `boolean`: Whether this promotion grants download access to On Demand content.
  * label **required** `string`: The prefix string for batch codes, or the null value for single codes.
  * metadata **required** `object`: The video's metadata.
    * connections **required** `object`: A list of resource URIs related to the On Demand promotion.
      * codes **required** `object`: Information about the codes associated with this promotion.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of uses on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
  * percent_off **required** `number`: The percentage amount that is deducted from the product price.
  * product_type **required** `string` (values: any, buy, buy_episode, rent, rent_episode, subscribe): The type of product to which this promotion can be applied. Only `buy` and `rent` are available for the VIP access type:
  * stream_period **required** `string` (values: 1_week, 1_year, 24_hour, 30_days, 3_month, 48_hour, 6_month, 72_hour): The amount of time that the user has access to the VOD content after redeeming a promo code.
  * total **required** `number`: The total amount of times that this promotion can be used.
  * type **required** `string` (values: batch, batch_prefix, single): The way in which this promotion can generate promo codes:
  * uri **required** `string`: The promotion's canonical relative URI.

### on-demand-promotion-code
* On Demand Promotion Code `object`
  * code **required** `string`: A promotion code that can be redeemed on Vimeo.
  * link **required** `string`: A link to redeem the promotion code instantly.
  * max_uses **required** `number`: The total amount of times this code can be used.
  * uses **required** `number`: The number of times that this code has been used.

### on-demand-region
* On Demand Region `object`
  * country_code **required** `string`: The ISO 3166-1 alpha-2 code for this country.
  * country_name **required** `string`: The descriptive name of this country.
  * uri **required** `string`: The region container's relative URI.

### on-demand-season
* On Demand Season `object`
  * description **required** `string`: The description for this season.
  * metadata **required** `object`
    * connections **required** `object`
      * videos **required** `object`: The Videos connection.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection ∂data.
  * name **required** `string`: The descriptive name of the season.
  * position **required** `number`: The position of the season relative to other seasons in the series.
  * resource_key **required** `string`: The unique identifier for this On Demand season.
  * type **required** `string`: The type of season.
  * uri **required** `string`: The season container's relative URI.
  * user **required**: The creator of this On Demand page.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### on-demand-video
* On Demand Video `object`
  * buy **required** `object`: Information about purchasing this video.
    * active **required** `boolean`: Whether this On Demand video can be purchased.
    * price **required** `object`: A map of currency type to price.
    * purchased `boolean`: Whether this On Demand video has been purchased.
  * description `string`: Description of the On Demand video.
  * duration `string`: The duration of the On Demand video.
  * episode `number`: The episode number of the On Demand video.
  * interactions **required** `object`: An object containing information about how the authenticated user can interact with this On Demand page.
    * page **required** `object`: Information about how the authenticated user can interact with the connection to the video's On Demand page.
      * added **required** `boolean`: Whether this On Demand page was added.
      * options **required** `array`: An array of HTTP methods permitted on this URI.
        * items `string`
      * uri **required** `string`: The URI to access the On Demand page.
  * link **required** `string`: The link to this video on Vimeo.
  * metadata **required** `object`: Metadata information about this video.
    * connections **required** `object`
      * season **required** `object`: Information about this season.
        * name **required** `string`: The name of the season on this connection.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
    * interactions **required** `object`
      * likes **required** `object`: Information about the user's Like interactions with this video.
        * added **required** `boolean`: Whether the user has liked this video.
        * added_time **required** `string`: The time in ISO 8601 format when the user liked this video.
        * uri **required** `string`: The URI for the user to like this video.
      * watchlater **required** `object`: Information about the user's Watch Later interactions with this video.
        * added **required** `boolean`: Whether the user has added this video to their Watch Later queue.
        * added_time **required** `string`: The time in ISO 8601 format when the user added this video to their Watch Later queue.
        * uri **required** `string`: The URI for the user to add this video to their Watch Later queue.
  * name `string`: The title of the On Demand video.
  * options `array`: An array of HTTP methods permitted on this URI.
    * items `string`
  * pictures: The active picture for this video.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * play_progress **required** `number`: The user's most recent play position in seconds for this video.
  * position `number`: Describes the manual position of this video relative to the other videos owned by this On Demand page.
  * release_date `string`: The time in ISO 8601 format when the On Demand video was created or published.
  * release_year **required** `number`: The year that this On Demand video was released.
  * rent **required** `object`: Information about renting this video.
    * active **required** `boolean`: Whether this On Demand video can be rented.
    * price **required** `object`: A map of currency type to price.
    * purchased `boolean`: Whether this On Demand video has been rented.
  * type **required** `string` (values: extra, main, trailer): The type of the On Demand video:
  * uri **required** `string`: The video container's relative URI.
  * user: The owner of the video.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### picture
* Picture `object`
  * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
  * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
  * resource_key **required** `string`: The picture's resource key string.
  * sizes **required** `array`: An array containing reference information about all available image files.
    * items `object`
      * height **required** `number`: The height of the image.
      * link **required** `string`: The direct link to the image.
      * link_with_play_button `string`: The direct link to the image with a play button overlay.
      * width **required** `number`: The width of the image.
  * type **required** `string` (values: caution, custom, default): The type of the picture:
  * uri **required** `string`: The picture's URI.

### play
* Play `object`
  * progressive `array`: Progressive files.
    * items `object`
      * created_time **required** `string`: The time in ISO 8601 format when this video file was created.
      * fps **required** `number`: The FPS of the video file.
      * height **required** `number`: The height in pixels of the video.
      * link **required** `string`: The direct link to this video file.
      * link_expiration_time **required** `string`: The time in ISO 8601 format when the link to this video file expires.
      * log `object`: The URLs for logging events.
      * md5 **required** `string`: The MD5 hash of the video file.
      * size **required** `number`: The file size in bytes of this video.
      * type **required** `string` (values: source, video/mp4, video/webm, vp6/x-video): The type of the video file:
      * width **required** `number`: The width in pixels of the video.
  * status **required** `string` (values: playable, purchase_required, restricted, unavailable): The play status of the video:

### portfolio
* Portfolio `object`
  * created_time **required** `string`: The time in ISO 8601 format when the portfolio was created.
  * description **required** `string`: The portfolio's description.
  * link **required** `string`: The link to the portfolio.
  * metadata **required** `object`: Metadata about the album.
    * connections **required** `object`: A list of resource URIs related to the album.
      * videos **required** `object`: Information about the videos contained within this portfolio.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
  * modified_time **required** `string`: The time in ISO 8601 format when the portfolio's data was last modified.
  * name **required** `string`: The display name of the portfolio.
  * sort **required** `string` (values: alphabetical, clips, modified, recent): The default video sort order for the portfolio:
  * uri **required** `string`: The canonical relative URI of the portfolio.

### presets
* Presets `object`
  * metadata **required** `object`: Metadata about the album.
    * connections **required** `object`: A list of resource URIs related to the album.
      * videos **required** `object`: Information about the videos in this preset.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
  * name **required** `string`: The display name of the presets group.
  * settings **required** `object`: The contents of the presets group.
    * buttons **required** `object`
      * embed **required** `boolean`: Whether the preset includes Embed button settings.
      * hd **required** `boolean`: Whether the preset includes HD button settings.
      * like **required** `boolean`: Whether the preset includes Like button settings.
      * share **required** `boolean`: Whether the present includes Share button settings.
      * vote **required** `boolean`: Whether the preset includes Vote button settings.
      * watchlater **required** `boolean`: Whether the preset includes Watch Later button settings.
    * logos **required** `object`
      * custom **required** `boolean`: Whether the preset includes custom logo settings.
      * sticky_custom **required** `boolean`: Whether the present includes sticky custom logo settings.
      * vimeo **required** `boolean`: Whether the preset includes Vimeo logo settings.
    * outro **required** `object`
      * clips `string`: A comma-separated list of video URIs. Present only if the type is `uploaded_clips`.
      * link `object`: The outro link settings. Present only if the type is `link`.
        * name `string`: The name of the outro link.
        * url `string`: The URL of the outro link.
      * text `string`: The outro text. Present only if the type is `text`.
      * type **required** `string` (values: link, no idea, text, uploaded_clips, uploaded_videos): The preset outro type:
      * videos `string`: A comma-separated list of video URIs. Present only if type is `no idea`.
  * uri **required** `string`: The canonical relative URI of the presets object.
  * user **required**: The owner of the preset.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### project
* Project `object`
  * created_time **required** `string`: The time in ISO 8601 format when the project was created.
  * metadata **required** `object`: The project's metadata.
    * connections **required** `object`: A list of resource URIs related to the project.
      * videos **required** `object`: A standard connection object indicating how to get all the videos in this project.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
  * modified_time **required** `string`: The time in ISO 8601 format when the project was last modified.
  * name **required** `string`: The name of the folder.
  * resource_key **required** `string`: The resource key string of the project.
  * uri **required** `string`: The URI of the project.
  * user **required**: The owner of the project.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### purchase-interaction
* Purchase Interaction `object`
  * buy `object`: Information on purchasing this video.
    * drm `boolean`: Whether the On Demand video for purchase has DRM.
  * rent `object`: Information on renting this video.
  * subscribe `object`: Information on subscribing to this video.
    * drm `boolean`: Whether the On Demand subscription has DRM.
    * expires_time `string`: The time in ISO 8601 format when the On Demand video will expire.
    * link `string`: The URL to purchase this On Demand subscription on Vimeo.
    * purchase_time `string`: The time in ISO 8601 format when the On Demand was purchased.
    * stream `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand subscription:
    * uri `string`: The On Demand subscription's product URI.

### tag
* Tag `object`
  * canonical **required** `string`: The normalized canonical tag name.
  * metadata **required** `object`: Metadata about the group.
    * connections **required** `object`: A collection of information that is connected to this resource.
      * videos **required** `object`: Information about the videos related to this tag.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
  * name **required** `string`: The tag value.
  * resource_key **required** `string`: The tag's resource key string.
  * uri **required** `string`: The canonical relative URI of the tag.

### text-track
* Text Track `object`
  * active **required** `boolean`: Whether this text track is active.
  * hls_link **required** `string`: The read-only URL of the text track file, intended for use with HLS playback.
  * hls_link_expires_time **required** `string`: The time in ISO 8601 format when the read-only HLS playback text track file expires.
  * language **required** `string`: The language code for this text track. To see a full list, request
  * link **required** `string`: The read-only URL of the text track file. You can upload to this link when you create it for the first time.
  * link_expires_time **required** `string`: The time in ISO 8601 format when the text track link expires.
  * name **required** `string`: The descriptive name of this text track.
  * type **required** `string` (values: captions, subtitles): The type of the text track:
  * uri **required** `string`: The relative URI of the text track.

### upload-attempt
* Upload Attempt `object`
  * clip: The video to upload.
    * tags **required** `array`: An array of all tags assigned to this video.
      * items [tag](#tag)
    * categories **required** `array`: The categories to which this video belongs.
      * items [category](#category)
    * content_rating **required** `array`: The content ratings of this video.
      * items `string`
    * context **required** `object`: The context of the video's subscription, if this video is part of a subscription.
      * action **required** `string` (values: Added to, Appearance by, Liked by, Uploaded by): The contextual action:
      * resource **required** `object`: The contextual resource: a user, group, or channel representation, or an object of a tag.
      * resource_type **required** `string`: The contextual resource type.
    * created_time **required** `string`: The time in ISO 8601 format when the video was created.
    * description **required** `string`: A brief explanation of the video's content.
    * duration **required** `number`: The video's duration in seconds.
    * embed **required**: Information about embedding this video.
      * buttons **required** `object`: A collection of information about the buttons that appear on the interface of the embeddable player.
        * embed **required** `boolean`: Whether the Embed button appears in the embeddable player for this video.
        * fullscreen **required** `boolean`: Whether the Fullscreen button appears in the embeddable player for this video.
        * hd **required** `boolean`: Whether the HD button appears in the embeddable player for this video.
        * like **required** `boolean`: Whether the Like button appears in the embeddable player for this video.
        * scaling **required** `boolean`: Whether the Scaling button appears in the embeddable player for this video.
        * share **required** `boolean`: Whether the Share button appears in the embeddable player for this video.
        * watchlater **required** `boolean`: Whether the Watch Later button appears in the embeddable player for this video.
      * color **required** `string`: The primary player color, which controls the color of the progress bar, buttons, and more.
      * logos **required** `object`: A collection of information about the logo in the corner of the embeddable player.
        * custom **required** `object`: A collection of information relating to custom logos in the embeddable player.
          * active **required** `boolean`: Whether the custom logo appears in the embeddable player.
          * link **required** `string`: The URL that loads upon clicking the custom logo.
          * sticky **required** `boolean`: Whether the custom logo appears even when the player interface is hidden.
        * vimeo **required** `boolean`: Whether the Vimeo logo appears in the embeddable player for this video.
      * playbar **required** `boolean`: Whether the playbar appears in the embeddable player for this video.
      * speed **required** `boolean`: Whether the speed controls appear in the embeddable player for this video.
      * title **required** `object`: A collection of information relating to the embeddable player's title bar.
        * name **required** `string` (values: hide, show, user): How the embeddable player handles the video title:
        * owner **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's information:
        * portrait **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's portrait:
      * uri `string`: The URI of the embed preset.
      * volume **required** `boolean`: Whether the volume controls appear in the embeddable player for this video.
    * height **required** `number`: The video's height in pixels.
    * language **required** `string`: The video's primary language.
    * last_user_action_event_date `string`: The time in ISO 8601 format when the user last modified the video.
    * license **required** `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
    * link **required** `string`: The link to the video.
    * metadata **required** `object`: The video's metadata.
      * connections **required** `object`: A list of resource URIs related to the video.
        * comments **required** `object`: Information about the comments on this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of comments on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * credits **required** `object`: Information about the users credited in this video.
          * options `array`: An array of HTTP methods permitted on this URI.
          * total `number`: The total number of users on this connection.
          * uri `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the users who have liked this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * ondemand **required** `object`: Information about this video's ondemand data.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The On Demand connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this video's thumbnails.
          * options **required** `array`: An array of HTTP methods allowed on this URI.
          * total **required** `number`: Total number of thumbnails on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * playback **required** `object`: The DRM playback status connection for this video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommendations **required** `object`: The recommendations for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * related **required** `object`: Related content for this video.
          * options `array`: An array of HTTP methods allowed on this URI.
          * uri `string`: The API URI that resolves to the connection data.
        * season **required** `object`: Information about the video's season.
          * name **required** `string`: The name of this season.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * texttracks **required** `object`: Information about this video's text tracks.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of text tracks on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * trailer **required** `object`: Information about this video's VOD trailer.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * resource_key **required** `string`: The trailer connection resource key.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * users_with_access **required** `object`: Information about the user privacy of this video, if the video privacy is `users`.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * versions **required** `object`: Information about the versions of this video.
          * current_uri `string`: The URI of the current version of the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of versions on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`: A list of resource URIs related to the video.
        * buy **required** `object`: The Buy interaction for a On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to buy an On Demand video.
          * download **required** `string` (values: available, purchased, restricted, unavailable): The user's download access to this On Demand video:
          * drm **required** `boolean`: Whether the video has DRM.
          * link **required** `string`: The URL to buy the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was purchased.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to purchase the On Demand video.
        * channel **required** `object`: When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * like **required** `object`: Information about whether the authenticated user has liked this video.
          * added **required** `boolean`: Whether the user has liked the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user liked the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * rent **required** `object`: The Rent interaction for an On Demand video.
          * currency **required** `string`: The currency code for the current user's region.
          * display_price **required** `string`: Formatted price to display to rent an On Demand video.
          * drm **required** `boolean`: Whether the video has DRM.
          * expires_time **required** `string`: The time in ISO 8601 format when the rental period for the video expires.
          * link **required** `string`: The URL to rent the On Demand video on Vimeo.
          * price **required** `number`: The numeric value of the price for buying the On Demand video.
          * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was rented.
          * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
          * uri **required** `string`: The product URI to rent the On Demand video.
        * report **required** `object`: Information about where and how to report a video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * reason **required** `array`: A list of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * subscribe `object`: Subscription information for an On Demand video.
          * drm `boolean`: Whether the video has DRM.
          * expires_time `string`: The time in ISO 8601 format when the subscription expires.
          * purchase_time `string`: The tine in ISO 8601 format when the subscription was purchased.
          * stream `string`: The stream type.
        * watched **required** `object`: Information about removing this video from the user's list of watched videos.
          * added **required** `boolean`: Whether the user has watched the video.
          * added_time **required** `string`: The time in ISO 8601 format when the user watched the video.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about whether this video appears on the authenticated user's Watch Later list.
          * added **required** `boolean`: Whether the user has added the video to their Watch later list.
          * added_time **required** `string`: The time in ISO 8601 format when the user added the video to their Watch Later list.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * modified_time **required** `string`: The time in ISO 8601 format when the video metadata was last modified.
    * name **required** `string`: The video's title.
    * parent_folder: Information about the folder that contains this video.
      * created_time **required** `string`: The time in ISO 8601 format when the project was created.
      * metadata **required** `object`: The project's metadata.
        * connections **required** `object`: A list of resource URIs related to the project.
          * videos **required** `object`: A standard connection object indicating how to get all the videos in this project.
      * modified_time **required** `string`: The time in ISO 8601 format when the project was last modified.
      * name **required** `string`: The name of the folder.
      * resource_key **required** `string`: The resource key string of the project.
      * uri **required** `string`: The URI of the project.
      * user **required**: The owner of the project.
        * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
        * bio **required** `string`: The user's bio.
        * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
          * items `string`
        * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
        * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
        * link **required** `string`: The absolute URL of this user's profile page.
        * location **required** `string`: The user's location.
        * metadata **required** `object`: The user's metadata.
          * connections **required** `object`: The list of resource URIs related to the user.
          * interactions **required** `object`
        * name **required** `string`: The user's display name.
        * pictures **required**: The active portrait of this user.
          * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
          * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
          * resource_key **required** `string`: The picture's resource key string.
          * sizes **required** `array`: An array containing reference information about all available image files.
          * type **required** `string` (values: caution, custom, default): The type of the picture:
          * uri **required** `string`: The picture's URI.
        * preferences `object`
          * videos `object`
        * resource_key **required** `string`: The user's resource key string.
        * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
          * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * periodic **required** `object`: Information about the user's usage for the current period.
          * space **required** `object`: Information about the user's upload space remaining for the current period.
        * uri **required** `string`: The user's canonical relative URI.
        * websites **required** `array`: The user's websites.
          * items `object`
    * password `string`: The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.
    * pictures **required**: The active picture for this video.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * privacy **required** `object`: The video's privacy setting.
      * add **required** `boolean`: Whether the video can be added to collections.
      * comments **required** `string` (values: anybody, contacts, nobody): Who can comment on the video:
      * download **required** `boolean`: The video's download permission setting.
      * embed **required** `string` (values: private, public): The video's embed permission setting:
      * view **required** `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The general privacy setting for the video:
    * release_time **required** `string`: The time in ISO 8601 format when the video was released.
    * resource_key **required** `string`: The resource key string of the video.
    * spatial **required** `object`: 360 spatial data.
      * director_timeline **required** `array`: 360 director timeline.
        * items `object`
          * pitch `number`: The director timeline pitch, from -90 (minimum) to 90 (maximum).
          * roll `number`: The director timeline roll.
          * time_code `number`: The director timeline time code.
          * yaw `number`: The director timeline yaw, from 0 (minimum) to 360 (maximum).
      * field_of_view **required** `number`: The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
      * projection **required** `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection:
      * stereo_format **required** `string` (values: left-right, mono, top-bottom): The 360 stereo format:
    * stats **required** `object`: A collection of stats associated with this video.
      * plays **required** `number`: The current total number of times that the video has been played.
    * status **required** `string` (values: available, quota_exceeded, total_cap_exceeded, transcode_starting, transcoding, transcoding_error, unavailable, uploading, uploading_error): The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
    * transcode **required** `object`: The transcode information for a video upload.
      * status `string` (values: complete, error, in_progress): Status code for this video's availability.
    * upload **required** `object`: The upload information for this video.
      * approach `string` (values: post, pull, streaming, tus): The approach for uploading the video.
      * complete_uri `string`: The URI for completing the upload.
      * form `string`: The HTML form for uploading a video through the post approach.
      * link `string`: The link of the video to capture through the pull approach.
      * redirect_url `string`: The redirect URL for the upload app.
      * size `number`: The file size in bytes of the uploaded video.
      * status **required** `string` (values: complete, error, in_progress): The status code for the availability of the uploaded video:
      * upload_link `string`: The link for sending video file data.
    * uri **required** `string`: The video's canonical relative URI.
    * user **required**: The video owner.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
    * width **required** `number`: The video's width in pixels.
  * complete_uri `string`: The completion URI of the upload.
  * form `string`: The HTML upload form.
  * ticket_id **required** `string`: The ticket identifier string for the upload.
  * upload_link **required** `string`: The upload URL.
  * uri **required** `string`: The upload URI.
  * user **required**: The owner of the uploaded video.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.

### user
* User `object`
  * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
  * bio **required** `string`: The user's bio.
  * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
    * items `string`
  * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
  * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
  * link **required** `string`: The absolute URL of this user's profile page.
  * location **required** `string`: The user's location.
  * metadata **required** `object`: The user's metadata.
    * connections **required** `object`: The list of resource URIs related to the user.
      * albums **required** `object`: Information about the albums created by this user.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of albums on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * appearances **required** `object`: Information about the appearances of this user in other videos.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of appearances on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * categories **required** `object`: Information about this user's followed categories.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of categories on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * channels **required** `object`: Information about this user's subscribed channels.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of channels on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * feed **required** `object`: Information about this user's feed.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
      * folders **required** `object`: Information about this user's folders.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of folders on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * followers **required** `object`: Information about the user's followers.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of followers on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * following **required** `object`: Information about the users that the current user is following.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of users on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * groups **required** `object`: Information about the groups created by this user.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of groups on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * likes **required** `object`: Information about the videos that this user has liked.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of likes on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * moderated_channels **required** `object`: Information about the channels that this user moderates.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of channels on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * pictures **required** `object`: Information about this user's portraits.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of pictures on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * portfolios **required** `object`: Information about this user's portfolios.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of portfolios on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
        * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
        * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * shared **required** `object`: Information about the videos that have been shared with this user.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * videos **required** `object`: Information about the videos uploaded by this user.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * watched_videos **required** `object`: Information about the videos that this user has watched.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
    * interactions **required** `object`
      * add_privacy_user `object`
        * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * items `string`
        * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
      * block **required** `object`: Information related to the block status of this user.
        * added **required** `boolean`: Whether a user is blocking the current user.
        * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
        * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The URI to block or unblock the user.
      * follow **required** `object`: Information related to the followed status of this user.
        * added **required** `boolean`: Whether a user is following the current user.
        * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The URI to follow the user.
      * report **required** `object`: Information regarding where and how to report a user.
        * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * items `string`
        * reason **required** `array`: List of valid reasons for reporting a video.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
  * name **required** `string`: The user's display name.
  * pictures **required**: The active portrait of this user.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * preferences `object`
    * videos `object`
      * privacy `object`
        * add `boolean`: Whether other users can add the user's videos.
        * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
        * download `boolean`: Whether other users can download the user's videos.
        * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
        * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
  * resource_key **required** `string`: The user's resource key string.
  * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
    * lifetime **required** `object`: Information about the user's lifetime upload usage.
      * free **required** `number`: The number of bytes remaining in your lifetime maximum.
      * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
      * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
    * periodic **required** `object`: Information about the user's usage for the current period.
      * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
      * max **required** `number`: The total number of bytes that you can upload per period.
      * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
      * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
    * space **required** `object`: Information about the user's upload space remaining for the current period.
      * free **required** `number`: The number of bytes remaining in your upload quota.
      * max **required** `number`: The maximum number of bytes allotted to your upload quota.
      * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
      * used **required** `number`: The number of bytes that you've already uploaded against your quota.
  * uri **required** `string`: The user's canonical relative URI.
  * websites **required** `array`: The user's websites.
    * items `object`
      * description **required** `string`: The website's description.
      * link **required** `string`: The URL of the website.
      * name **required** `string`: The name of the website.

### video
* Video `object`
  * tags **required** `array`: An array of all tags assigned to this video.
    * items [tag](#tag)
  * categories **required** `array`: The categories to which this video belongs.
    * items [category](#category)
  * content_rating **required** `array`: The content ratings of this video.
    * items `string`
  * context **required** `object`: The context of the video's subscription, if this video is part of a subscription.
    * action **required** `string` (values: Added to, Appearance by, Liked by, Uploaded by): The contextual action:
    * resource **required** `object`: The contextual resource: a user, group, or channel representation, or an object of a tag.
    * resource_type **required** `string`: The contextual resource type.
  * created_time **required** `string`: The time in ISO 8601 format when the video was created.
  * description **required** `string`: A brief explanation of the video's content.
  * duration **required** `number`: The video's duration in seconds.
  * embed **required**: Information about embedding this video.
    * buttons **required** `object`: A collection of information about the buttons that appear on the interface of the embeddable player.
      * embed **required** `boolean`: Whether the Embed button appears in the embeddable player for this video.
      * fullscreen **required** `boolean`: Whether the Fullscreen button appears in the embeddable player for this video.
      * hd **required** `boolean`: Whether the HD button appears in the embeddable player for this video.
      * like **required** `boolean`: Whether the Like button appears in the embeddable player for this video.
      * scaling **required** `boolean`: Whether the Scaling button appears in the embeddable player for this video.
      * share **required** `boolean`: Whether the Share button appears in the embeddable player for this video.
      * watchlater **required** `boolean`: Whether the Watch Later button appears in the embeddable player for this video.
    * color **required** `string`: The primary player color, which controls the color of the progress bar, buttons, and more.
    * logos **required** `object`: A collection of information about the logo in the corner of the embeddable player.
      * custom **required** `object`: A collection of information relating to custom logos in the embeddable player.
        * active **required** `boolean`: Whether the custom logo appears in the embeddable player.
        * link **required** `string`: The URL that loads upon clicking the custom logo.
        * sticky **required** `boolean`: Whether the custom logo appears even when the player interface is hidden.
      * vimeo **required** `boolean`: Whether the Vimeo logo appears in the embeddable player for this video.
    * playbar **required** `boolean`: Whether the playbar appears in the embeddable player for this video.
    * speed **required** `boolean`: Whether the speed controls appear in the embeddable player for this video.
    * title **required** `object`: A collection of information relating to the embeddable player's title bar.
      * name **required** `string` (values: hide, show, user): How the embeddable player handles the video title:
      * owner **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's information:
      * portrait **required** `string` (values: hide, show, user): How the embeddable player handles the video owner's portrait:
    * uri `string`: The URI of the embed preset.
    * volume **required** `boolean`: Whether the volume controls appear in the embeddable player for this video.
  * height **required** `number`: The video's height in pixels.
  * language **required** `string`: The video's primary language.
  * last_user_action_event_date `string`: The time in ISO 8601 format when the user last modified the video.
  * license **required** `string` (values: by, by-nc, by-nc-nd, by-nc-sa, by-nd, by-sa, cc0): The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
  * link **required** `string`: The link to the video.
  * metadata **required** `object`: The video's metadata.
    * connections **required** `object`: A list of resource URIs related to the video.
      * comments **required** `object`: Information about the comments on this video.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of comments on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * credits **required** `object`: Information about the users credited in this video.
        * options `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total `number`: The total number of users on this connection.
        * uri `string`: The API URI that resolves to the connection data.
      * likes **required** `object`: Information about the users who have liked this video.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of likes on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * ondemand **required** `object`: Information about this video's ondemand data.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * resource_key **required** `string`: The On Demand connection resource key.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * pictures **required** `object`: Information about this video's thumbnails.
        * options **required** `array`: An array of HTTP methods allowed on this URI.
          * items `string`
        * total **required** `number`: Total number of thumbnails on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * playback **required** `object`: The DRM playback status connection for this video.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
      * recommendations **required** `object`: The recommendations for this video.
        * options `array`: An array of HTTP methods allowed on this URI.
          * items `string`
        * uri `string`: The API URI that resolves to the connection data.
      * related **required** `object`: Related content for this video.
        * options `array`: An array of HTTP methods allowed on this URI.
          * items `string`
        * uri `string`: The API URI that resolves to the connection data.
      * season **required** `object`: Information about the video's season.
        * name **required** `string`: The name of this season.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
      * texttracks **required** `object`: Information about this video's text tracks.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of text tracks on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * trailer **required** `object`: Information about this video's VOD trailer.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * resource_key **required** `string`: The trailer connection resource key.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * users_with_access **required** `object`: Information about the user privacy of this video, if the video privacy is `users`.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of users on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
      * versions **required** `object`: Information about the versions of this video.
        * current_uri `string`: The URI of the current version of the video.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of versions on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
    * interactions **required** `object`: A list of resource URIs related to the video.
      * buy **required** `object`: The Buy interaction for a On Demand video.
        * currency **required** `string`: The currency code for the current user's region.
        * display_price **required** `string`: Formatted price to display to buy an On Demand video.
        * download **required** `string` (values: available, purchased, restricted, unavailable): The user's download access to this On Demand video:
        * drm **required** `boolean`: Whether the video has DRM.
        * link **required** `string`: The URL to buy the On Demand video on Vimeo.
        * price **required** `number`: The numeric value of the price for buying the On Demand video.
        * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was purchased.
        * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
        * uri **required** `string`: The product URI to purchase the On Demand video.
      * channel **required** `object`: When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
      * like **required** `object`: Information about whether the authenticated user has liked this video.
        * added **required** `boolean`: Whether the user has liked the video.
        * added_time **required** `string`: The time in ISO 8601 format when the user liked the video.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
      * rent **required** `object`: The Rent interaction for an On Demand video.
        * currency **required** `string`: The currency code for the current user's region.
        * display_price **required** `string`: Formatted price to display to rent an On Demand video.
        * drm **required** `boolean`: Whether the video has DRM.
        * expires_time **required** `string`: The time in ISO 8601 format when the rental period for the video expires.
        * link **required** `string`: The URL to rent the On Demand video on Vimeo.
        * price **required** `number`: The numeric value of the price for buying the On Demand video.
        * purchase_time **required** `string`: The time in ISO 8601 format when the On Demand video was rented.
        * stream **required** `string` (values: available, purchased, restricted, unavailable): The user's streaming access to this On Demand video:
        * uri **required** `string`: The product URI to rent the On Demand video.
      * report **required** `object`: Information about where and how to report a video.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * reason **required** `array`: A list of valid reasons for reporting a video.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
      * subscribe `object`: Subscription information for an On Demand video.
        * drm `boolean`: Whether the video has DRM.
        * expires_time `string`: The time in ISO 8601 format when the subscription expires.
        * purchase_time `string`: The tine in ISO 8601 format when the subscription was purchased.
        * stream `string`: The stream type.
      * watched **required** `object`: Information about removing this video from the user's list of watched videos.
        * added **required** `boolean`: Whether the user has watched the video.
        * added_time **required** `string`: The time in ISO 8601 format when the user watched the video.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
      * watchlater **required** `object`: Information about whether this video appears on the authenticated user's Watch Later list.
        * added **required** `boolean`: Whether the user has added the video to their Watch later list.
        * added_time **required** `string`: The time in ISO 8601 format when the user added the video to their Watch Later list.
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * uri **required** `string`: The API URI that resolves to the connection data.
  * modified_time **required** `string`: The time in ISO 8601 format when the video metadata was last modified.
  * name **required** `string`: The video's title.
  * parent_folder: Information about the folder that contains this video.
    * created_time **required** `string`: The time in ISO 8601 format when the project was created.
    * metadata **required** `object`: The project's metadata.
      * connections **required** `object`: A list of resource URIs related to the project.
        * videos **required** `object`: A standard connection object indicating how to get all the videos in this project.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * modified_time **required** `string`: The time in ISO 8601 format when the project was last modified.
    * name **required** `string`: The name of the folder.
    * resource_key **required** `string`: The resource key string of the project.
    * uri **required** `string`: The URI of the project.
    * user **required**: The owner of the project.
      * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
      * bio **required** `string`: The user's bio.
      * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
        * items `string`
      * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
      * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
      * link **required** `string`: The absolute URL of this user's profile page.
      * location **required** `string`: The user's location.
      * metadata **required** `object`: The user's metadata.
        * connections **required** `object`: The list of resource URIs related to the user.
          * albums **required** `object`: Information about the albums created by this user.
          * appearances **required** `object`: Information about the appearances of this user in other videos.
          * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * categories **required** `object`: Information about this user's followed categories.
          * channels **required** `object`: Information about this user's subscribed channels.
          * feed **required** `object`: Information about this user's feed.
          * folders **required** `object`: Information about this user's folders.
          * followers **required** `object`: Information about the user's followers.
          * following **required** `object`: Information about the users that the current user is following.
          * groups **required** `object`: Information about the groups created by this user.
          * likes **required** `object`: Information about the videos that this user has liked.
          * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * pictures **required** `object`: Information about this user's portraits.
          * portfolios **required** `object`: Information about this user's portfolios.
          * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * shared **required** `object`: Information about the videos that have been shared with this user.
          * videos **required** `object`: Information about the videos uploaded by this user.
          * watched_videos **required** `object`: Information about the videos that this user has watched.
          * watchlater **required** `object`: Information about the videos that this user wants to watch later.
        * interactions **required** `object`
          * add_privacy_user `object`
          * block **required** `object`: Information related to the block status of this user.
          * follow **required** `object`: Information related to the followed status of this user.
          * report **required** `object`: Information regarding where and how to report a user.
      * name **required** `string`: The user's display name.
      * pictures **required**: The active portrait of this user.
        * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
        * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
        * resource_key **required** `string`: The picture's resource key string.
        * sizes **required** `array`: An array containing reference information about all available image files.
          * items `object`
        * type **required** `string` (values: caution, custom, default): The type of the picture:
        * uri **required** `string`: The picture's URI.
      * preferences `object`
        * videos `object`
          * privacy `object`
      * resource_key **required** `string`: The user's resource key string.
      * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
        * lifetime **required** `object`: Information about the user's lifetime upload usage.
          * free **required** `number`: The number of bytes remaining in your lifetime maximum.
          * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
          * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
        * periodic **required** `object`: Information about the user's usage for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
          * max **required** `number`: The total number of bytes that you can upload per period.
          * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
        * space **required** `object`: Information about the user's upload space remaining for the current period.
          * free **required** `number`: The number of bytes remaining in your upload quota.
          * max **required** `number`: The maximum number of bytes allotted to your upload quota.
          * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
          * used **required** `number`: The number of bytes that you've already uploaded against your quota.
      * uri **required** `string`: The user's canonical relative URI.
      * websites **required** `array`: The user's websites.
        * items `object`
          * description **required** `string`: The website's description.
          * link **required** `string`: The URL of the website.
          * name **required** `string`: The name of the website.
  * password `string`: The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.
  * pictures **required**: The active picture for this video.
    * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
    * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
    * resource_key **required** `string`: The picture's resource key string.
    * sizes **required** `array`: An array containing reference information about all available image files.
      * items `object`
        * height **required** `number`: The height of the image.
        * link **required** `string`: The direct link to the image.
        * link_with_play_button `string`: The direct link to the image with a play button overlay.
        * width **required** `number`: The width of the image.
    * type **required** `string` (values: caution, custom, default): The type of the picture:
    * uri **required** `string`: The picture's URI.
  * privacy **required** `object`: The video's privacy setting.
    * add **required** `boolean`: Whether the video can be added to collections.
    * comments **required** `string` (values: anybody, contacts, nobody): Who can comment on the video:
    * download **required** `boolean`: The video's download permission setting.
    * embed **required** `string` (values: private, public): The video's embed permission setting:
    * view **required** `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The general privacy setting for the video:
  * release_time **required** `string`: The time in ISO 8601 format when the video was released.
  * resource_key **required** `string`: The resource key string of the video.
  * spatial **required** `object`: 360 spatial data.
    * director_timeline **required** `array`: 360 director timeline.
      * items `object`
        * pitch `number`: The director timeline pitch, from -90 (minimum) to 90 (maximum).
        * roll `number`: The director timeline roll.
        * time_code `number`: The director timeline time code.
        * yaw `number`: The director timeline yaw, from 0 (minimum) to 360 (maximum).
    * field_of_view **required** `number`: The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
    * projection **required** `string` (values: cubical, cylindrical, dome, equirectangular, pyramid): The 360 spatial projection:
    * stereo_format **required** `string` (values: left-right, mono, top-bottom): The 360 stereo format:
  * stats **required** `object`: A collection of stats associated with this video.
    * plays **required** `number`: The current total number of times that the video has been played.
  * status **required** `string` (values: available, quota_exceeded, total_cap_exceeded, transcode_starting, transcoding, transcoding_error, unavailable, uploading, uploading_error): The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
  * transcode **required** `object`: The transcode information for a video upload.
    * status `string` (values: complete, error, in_progress): Status code for this video's availability.
  * upload **required** `object`: The upload information for this video.
    * approach `string` (values: post, pull, streaming, tus): The approach for uploading the video.
    * complete_uri `string`: The URI for completing the upload.
    * form `string`: The HTML form for uploading a video through the post approach.
    * link `string`: The link of the video to capture through the pull approach.
    * redirect_url `string`: The redirect URL for the upload app.
    * size `number`: The file size in bytes of the uploaded video.
    * status **required** `string` (values: complete, error, in_progress): The status code for the availability of the uploaded video:
    * upload_link `string`: The link for sending video file data.
  * uri **required** `string`: The video's canonical relative URI.
  * user **required**: The video owner.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.
  * width **required** `number`: The video's width in pixels.

### video-versions
* Video Versions `object`
  * active **required** `boolean`: Whether this video version is the currently active one.
  * app **required**: The API app associated with the video version.
    * name **required** `string`: The name of the API app.
    * uri **required** `string`: The canonical URI of the API app.
  * created_time **required** `string`: The time in ISO 8601 for when the video version was created.
  * duration **required** `number`: The duration of the video version in seconds.
  * filename **required** `string`: The file name of the video version.
  * filesize **required** `number`: The size in byes of the video version file.
  * metadata **required** `object`: The video version's metadata.
    * connections **required** `object`
      * video **required** `object`: Data from video associated with version
        * options **required** `array`: An array of HTTP methods permitted on this URI.
          * items `string`
        * total **required** `number`: The total number of videos on this connection.
        * uri **required** `string`: The API URI that resolves to the connection data.
  * modified_time **required** `string`: The time in ISO 8601 format when the video version was last modified.
  * play **required**: The Play representation.
    * progressive `array`: Progressive files.
      * items `object`
        * created_time **required** `string`: The time in ISO 8601 format when this video file was created.
        * fps **required** `number`: The FPS of the video file.
        * height **required** `number`: The height in pixels of the video.
        * link **required** `string`: The direct link to this video file.
        * link_expiration_time **required** `string`: The time in ISO 8601 format when the link to this video file expires.
        * log `object`: The URLs for logging events.
        * md5 **required** `string`: The MD5 hash of the video file.
        * size **required** `number`: The file size in bytes of this video.
        * type **required** `string` (values: source, video/mp4, video/webm, vp6/x-video): The type of the video file:
        * width **required** `number`: The width in pixels of the video.
    * status **required** `string` (values: playable, purchase_required, restricted, unavailable): The play status of the video:
  * upload **required** `object`: The upload information for this version.
    * approach `string` (values: post, pull, streaming, tus): The approach for uploading the video.
    * complete_uri `string`: The URI for completing the upload.
    * form `string`: The HTML form for uploading a video through the post approach.
    * link `string`: The link of the video to capture through the pull approach.
    * redirect_url `string`: The redirect URL for the upload app.
    * size `number`: The file size in bytes of the uploaded video.
    * status **required** `string` (values: complete, error, in_progress): The status code for the availability of the uploaded video:
    * upload_link `string`: The link for sending video file data.
  * upload_date **required** `string`: The time in ISO 8601 format when the video version was uploaded.
  * uri **required** `string`: The version's canonical relative URI.
  * user **required**: The owner of the video version.
    * account **required** `string` (values: basic, business, live_business, live_premium, live_pro, plus, pro, pro_unlimited, producer): The user's account type:
    * bio **required** `string`: The user's bio.
    * content_filter `array` (values: drugs, language, nudity, safe, unrated, violence): The user's content filters:
      * items `string`
    * created_time **required** `string`: The time in ISO 8601 format when the user account was created.
    * email `string`: The user's email address. This data requires a bearer token with the `email` scope.
    * link **required** `string`: The absolute URL of this user's profile page.
    * location **required** `string`: The user's location.
    * metadata **required** `object`: The user's metadata.
      * connections **required** `object`: The list of resource URIs related to the user.
        * albums **required** `object`: Information about the albums created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of albums on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * appearances **required** `object`: Information about the appearances of this user in other videos.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of appearances on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * block **required** `object`: Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * categories **required** `object`: Information about this user's followed categories.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of categories on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * channels **required** `object`: Information about this user's subscribed channels.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * feed **required** `object`: Information about this user's feed.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * folders **required** `object`: Information about this user's folders.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of folders on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * followers **required** `object`: Information about the user's followers.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of followers on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * following **required** `object`: Information about the users that the current user is following.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of users on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * groups **required** `object`: Information about the groups created by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of groups on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * likes **required** `object`: Information about the videos that this user has liked.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of likes on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * moderated_channels **required** `object`: Information about the channels that this user moderates.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of channels on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * pictures **required** `object`: Information about this user's portraits.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of pictures on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * portfolios **required** `object`: Information about this user's portfolios.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of portfolios on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * recommended_channels **required** `object`: A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of channels on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * recommended_users **required** `object`: A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
          * options **required** `array`: An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * total **required** `number`: The total number of users on this connection. This data requires a bearer token with the `private` scope.
          * uri **required** `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * shared **required** `object`: Information about the videos that have been shared with this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * videos **required** `object`: Information about the videos uploaded by this user.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watched_videos **required** `object`: Information about the videos that this user has watched.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
        * watchlater **required** `object`: Information about the videos that this user wants to watch later.
          * options **required** `array`: An array of HTTP methods permitted on this URI.
          * total **required** `number`: The total number of videos on this connection.
          * uri **required** `string`: The API URI that resolves to the connection data.
      * interactions **required** `object`
        * add_privacy_user `object`
          * options `array`: An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
          * uri `string`: The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
        * block **required** `object`: Information related to the block status of this user.
          * added **required** `boolean`: Whether a user is blocking the current user.
          * added_time **required** `string`: The time in ISO 8601 format when the block occurred, or the null value if no block exists.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to block or unblock the user.
        * follow **required** `object`: Information related to the followed status of this user.
          * added **required** `boolean`: Whether a user is following the current user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * uri **required** `string`: The URI to follow the user.
        * report **required** `object`: Information regarding where and how to report a user.
          * options **required** `array`: An array of the HTTP methods permitted on this URI.
          * reason **required** `array`: List of valid reasons for reporting a video.
          * uri **required** `string`: The API URI that resolves to the connection data.
    * name **required** `string`: The user's display name.
    * pictures **required**: The active portrait of this user.
      * active **required** `boolean`: Whether this picture is the active picture for its parent resource.
      * link `string`: The upload URL for the picture. This field appears when you create the picture resource for the first time.
      * resource_key **required** `string`: The picture's resource key string.
      * sizes **required** `array`: An array containing reference information about all available image files.
        * items `object`
          * height **required** `number`: The height of the image.
          * link **required** `string`: The direct link to the image.
          * link_with_play_button `string`: The direct link to the image with a play button overlay.
          * width **required** `number`: The width of the image.
      * type **required** `string` (values: caution, custom, default): The type of the picture:
      * uri **required** `string`: The picture's URI.
    * preferences `object`
      * videos `object`
        * privacy `object`
          * add `boolean`: Whether other users can add the user's videos.
          * comments `string` (values: anybody, contacts, nobody): The user's privacy preference for comments:
          * download `boolean`: Whether other users can download the user's videos.
          * embed `string` (values: private, public, whitelist): The user's privacy preference for embeds:
          * view `string` (values: anybody, contacts, disable, nobody, password, unlisted, users): The user's privacy preference for views:
    * resource_key **required** `string`: The user's resource key string.
    * upload_quota **required** `object`: Appears only when the user has upload access and is looking at their own user record.
      * lifetime **required** `object`: Information about the user's lifetime upload usage.
        * free **required** `number`: The number of bytes remaining in your lifetime maximum.
        * max **required** `number`: The total number of bytes that you can upload across the lifetime of your account.
        * used **required** `number`: The number of bytes that you've already uploaded against your lifetime limit.
      * periodic **required** `object`: Information about the user's usage for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota for the current period.
        * max **required** `number`: The total number of bytes that you can upload per period.
        * reset_date **required** `string`: The time in ISO 8601 format when your upload quota resets.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota in the current period.
      * space **required** `object`: Information about the user's upload space remaining for the current period.
        * free **required** `number`: The number of bytes remaining in your upload quota.
        * max **required** `number`: The maximum number of bytes allotted to your upload quota.
        * showing **required** `string` (values: lifetime, periodic): Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
        * used **required** `number`: The number of bytes that you've already uploaded against your quota.
    * uri **required** `string`: The user's canonical relative URI.
    * websites **required** `array`: The user's websites.
      * items `object`
        * description **required** `string`: The website's description.
        * link **required** `string`: The URL of the website.
        * name **required** `string`: The name of the website.


