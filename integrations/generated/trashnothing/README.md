# @datafire/trashnothing

Client library for trash nothing

## Installation and Usage
```bash
npm install --save @datafire/trashnothing
```
```js
let trashnothing = require('@datafire/trashnothing').create({
  api_key: "",
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

This is the REST API for [trashnothing.com](https://trashnothing.com).

To learn more about the API or to register your app for use with the API
visit the [trash nothing Developer page](https://trashnothing.com/developer).

NOTE: All date-time values are [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)
and are in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) (eg. 2019-02-03T01:23:53).


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
trashnothing.oauthCallback({
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
trashnothing.oauthRefresh(null, context)
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

### get_conversations
List conversations


```js
trashnothing.get_conversations({}, context)
```

#### Input
* input `object`
  * category `string`: Used to filter messases by category.  Must be set to one of the following three categories: inbox, archived, blocked
  * page `integer`: The page of conversations to return.
  * per_page `integer`: The number of conversations to return per page (must be >= 1 and <= 30).
  * num_messages `integer`: The number of recent messages to return with each conversation. Additional messages can be retrieved using get conversation messages endpoint.
  * include_num_unread `integer`: If set to 1, the num_unread field in the response will be set to the count of the total number of conversations that have unread messages. <br /><br /> This is useful for showing users the total number of unread messages that they have in their inbox. Calculating the count will slow the request down a bit so setting this should be avoided for requests where it's not needed (eg. requesting archived or blocked conversations or requests that are just paging through older conversations).
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output `object`
  * conversations `array`
    * items [Conversation](#conversation)
  * num_unread `integer`: If the include_num_unread parameter is set to 1, this will be set to the total number of conversations that have unread messages matching the query parameters of the request.  If the include_num_unread parameter is set to 0, this will be null.
  * page `integer`
  * per_page `integer`

### mark_all_conversations_read
Mark all conversations as read


```js
trashnothing.mark_all_conversations_read({
  "message_id": ""
}, context)
```

#### Input
* input `object`
  * message_id **required** `string`: The message_id of the most recent message from the conversations that the client has downloaded.

#### Output
*Output schema unknown*

### search_conversations
Searches all conversations except blocked conversations.


```js
trashnothing.search_conversations({
  "search": ""
}, context)
```

#### Input
* input `object`
  * search **required** `string`: The search query used to find conversations and messages.
  * page `integer`: The page of conversations to return.
  * per_page `integer`: The number of conversations to return per page (must be >= 1 and <= 30).
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output `object`
  * conversations `array`
    * items [Conversation](#conversation)
  * page `integer`
  * per_page `integer`
  * search `string`

### delete_conversation
Delete conversation


```js
trashnothing.delete_conversation({
  "conversation_id": "",
  "message_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to delete.
  * message_id **required** `string`: The ID of the newest message in the conversation that the client has downloaded.

#### Output
*Output schema unknown*

### archive_conversation
Archive conversation


```js
trashnothing.archive_conversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to archive.

#### Output
*Output schema unknown*

### block_conversation
Block conversation


```js
trashnothing.block_conversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to block.

#### Output
*Output schema unknown*

### mark_conversation_read
Mark conversation as read


```js
trashnothing.mark_conversation_read({
  "conversation_id": "",
  "message_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to mark as read.
  * message_id **required** `string`: The ID of the newest message in the conversation that the current user has read.

#### Output
*Output schema unknown*

### get_conversation_messages
List conversation messages


```js
trashnothing.get_conversation_messages({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to return messages from.
  * page `integer`: The page of messages to return.
  * per_page `integer`: The number of messages to return per page (must be >= 1 and <= 30).
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * include_conversation `integer`: If set to 1, the conversation will be returned along with the messages.

#### Output
* output `object`
  * conversation [Conversation](#conversation)
  * messages `array`
    * items [Message](#message)
  * page `integer`
  * per_page `integer`

### reply_to_conversation
Reply to conversation


```js
trashnothing.reply_to_conversation({
  "conversation_id": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to reply to.
  * content **required** `string`: The content of the reply.
  * photo_ids `string`: A comma separated list of the IDs of the photos that should be attached to this message.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [Message](#message)

### report_conversation
Report conversation


```js
trashnothing.report_conversation({
  "conversation_id": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to report.
  * reason **required** `string`: A user provided reason why the conversation is being reported.

#### Output
*Output schema unknown*

### unarchive_conversation
Unarchive conversation


```js
trashnothing.unarchive_conversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to unarchive.

#### Output
*Output schema unknown*

### unblock_conversation
Unblock conversation


```js
trashnothing.unblock_conversation({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * conversation_id **required** `string`: The ID of the conversation to unblock.

#### Output
*Output schema unknown*

### send_feedback
Allows users to send feedback about the trashnothing.com site or apps.


```js
trashnothing.send_feedback({
  "subject": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * subject **required** `string`: The subject.
  * message **required** `string`: The message.
  * meta `string`: Extra information set by the client that may be useful to contextualize the feedback (eg. operating system details, browser details, app details, device details).

#### Output
*Output schema unknown*

### search_groups
Search groups


```js
trashnothing.search_groups({}, context)
```

#### Input
* input `object`
  * name `string`: Find groups that have the given text somewhere in their name (case insensitive).
  * latitude `number`: Find groups near the given latitude and longitude.
  * longitude `number`: Find groups near the given latitude and longitude.
  * distance `number`: When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.
  * country `string`: Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
  * region `string`: For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv
  * postal_code `string`: Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.
  * page `integer`: The page of groups to return.
  * per_page `integer`: The number of groups to return per page (must be >= 1 and <= 100).

#### Output
* output `object`
  * end_index `integer`: The index of the last group being returned (an integer between start_index and num_groups).
  * groups `array`
    * items [Group](#group)
  * num_groups `integer`: The total number of groups available.
  * num_pages `integer`: The total number of pages available.
  * page `integer`: The page number of the groups being returned.
  * per_page `integer`: The number of groups being returned per page.
  * start_index `integer`: The index of the first group being returned (an integer between 1 and num_groups).

### get_groups_by_ids
Retrieve multiple groups


```js
trashnothing.get_groups_by_ids({
  "group_ids": ""
}, context)
```

#### Input
* input `object`
  * group_ids **required** `string`: The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned.

#### Output
* output `array`
  * items [Group](#group)

### join_groups
Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group after a subscribe request is made to that group.



```js
trashnothing.join_groups({
  "group_ids": ""
}, context)
```

#### Input
* input `object`
  * group_ids **required** `string`: A comma separated list of the IDs of the groups to join.

#### Output
* output `object`
  * groups `array`: Updated data about the groups and the current users' membership to each group.
    * items [Group](#group)
  * over_group_limit `boolean`: When this is true, it means that some of the membership requests weren't processed in order to keep the user from going over the 12 group limit (the membership field of the groups can be used to determine which requests were processed).

### get_group
Retrieve a group


```js
trashnothing.get_group({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The ID of the group to retrieve.

#### Output
* output [Group](#group)

### submit_answers
Submits answers to a groups' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.



```js
trashnothing.submit_answers({
  "group_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The group ID of the group that the user is submitting answers for.
  * body **required** `object`

#### Output
* output [Group](#group)

### contact_moderators
Contact group moderators


```js
trashnothing.contact_moderators({
  "group_id": "",
  "subject": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The group ID of the group whose moderators will be contacted.
  * subject **required** `string`: The subject of the message.
  * message **required** `string`: The body of the message.

#### Output
*Output schema unknown*

### leave_group
Leave a group


```js
trashnothing.leave_group({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The ID of the group to leave.

#### Output
* output [Group](#group)

### upload_photo
Create a photo


```js
trashnothing.upload_photo({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`, `object`: Photo to upload.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [PhotoResult](#photoresult)

### get_photos_by_ids
Retrieve multiple photos


```js
trashnothing.get_photos_by_ids({
  "photo_ids": ""
}, context)
```

#### Input
* input `object`
  * photo_ids **required** `string`: The IDs of the photos to retrieve.  If more than 50 photo IDs are passed, only the first 50 photos will be returned.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output `array`
  * items [PhotoResult](#photoresult)

### delete_photo
Delete a photo


```js
trashnothing.delete_photo({
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * photo_id **required** `string`

#### Output
*Output schema unknown*

### rotate_photo
Rotate a photo


```js
trashnothing.rotate_photo({
  "photo_id": "",
  "degrees": 0
}, context)
```

#### Input
* input `object`
  * photo_id **required** `string`
  * degrees **required** `integer`: Rotation in degrees - currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [PhotoResult](#photoresult)

### get_posts
NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.



```js
trashnothing.get_posts({
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
  * date_min `string`: Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.
  * date_max `string`: Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.
  * outcomes `string`: A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
  * user_state `string`: If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * group_ids `array`: The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
    * items `string`
  * last_listings_view `string`: The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [Post](#post)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### submit_post
Submits a new post. <br /><br /> NOTE: An alternate way to submit posts that does quicker client side validation is to use the script served by the API at the /posts/client.js endpoint (see the description of the /posts/client.js endpoint for usage instructions).



```js
trashnothing.submit_post({
  "type": "",
  "title": "",
  "location": "",
  "session": ""
}, context)
```

#### Input
* input `object`
  * group_ids `string`: A comma separated list of group IDs to submit the post to (if any).
  * type **required** `string`: The type of post.  One of: offer, wanted
  * title **required** `string`: A short description of the item(s).
  * location **required** `string`: A short location description.
  * content `string`: A longer description of the item(s).
  * fair_offer `integer`: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
  * latitude `number`: The latitude corresponding to the location description provided. <br /><br /> If latitude and longitude are not provided, an attempt will be made to automatically geocode the location.  If the location is unable to be geocoded, the post will be rejected* and will have to be resubmitted with a latitude and longitude corresponding to the location or resubmitted with a different location that can be automatically geocoded. <br /><br /> NOTE: The latitude and longitude should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address (which is not recommended). <br /><br /> *When a post is rejected because it can't be geocoded, the returned error will have its identifier property set to 'unknown-location'.
  * longitude `number`: The longitude corresponding to the location description provided. (see the NOTE in latitude description)
  * photo_ids `string`: A comma separated list of the IDs of the photos that should be attached to this post.
  * session **required** `string`: A JSON string representing a temporary object that is used to store data about the submission process for a single post.  The first time a post is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that post is successfully submitted and then it  can be discarded so that the next post will start over with a new empty session object.  Every time a post is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.
  * preferences `string`: A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the post submission process and user input.  Some warnings returned after submitting  a post have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is never modified by the server - it is up to the client to initialize, modify and persist the preferences object.

#### Output
* output `object`
  * identifier `string`: When an error or warning is returned, this will contain a short string representing the type of error or warning that occurred.  Is null on success.
  * message `string`: Contains text describing the reason a post  was not successful.  Is null on success.
  * preference_key `string`: Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).  Is null for errors, success and warnings that can't be opted out of.
  * result `string`: One of: success, error, warning. <br /><br /> A success result indicates that the post  was submitted successfully. Note that posts may not appear instantly after submission because the moderators of many groups may have additional automatic or manual review processes in place that can cause delays. <br /><br /> An error result indicates that there is an error with the post that should be shown to the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post  to show the user and the message property will contain a string describing the warning.   A warning result doesn't prevent a post  from being submitted, to continue the submission process after a warning result, just re-submit (with the updated session object) to temporarily override that specific warning.
  * session `object`: The updated session object that should override the client's copy of the session that was passed in the session parameter. Is null on success.

### get_all_posts
This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.



```js
trashnothing.get_all_posts({
  "types": "",
  "date_min": "",
  "date_max": ""
}, context)
```

#### Input
* input `object`
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, wanted
  * date_min **required** `string`: Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.
  * date_max **required** `string`: Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 50).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output `object`
  * posts `array`
    * items [Post](#post)

### get_all_posts_changes
This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> - expired<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.



```js
trashnothing.get_all_posts_changes({
  "date_min": "",
  "date_max": ""
}, context)
```

#### Input
* input `object`
  * date_min **required** `string`: Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.
  * date_max **required** `string`: Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.
  * per_page `integer`: The number of changes to return per page (must be >= 1 and <= 50).
  * page `integer`: The page of changes to return.

#### Output
* output `object`
  * changes `array`
    * items `object`
      * date `string`: The UTC date and time when the post was changed.
      * post_id `string`
      * type `string`: The type of change.  One of: deleted, undeleted, satisfied, promised, unpromised, withdrawn, edited, expired

### get_post_client_javascript
Defines javascript functions that can be used to validate and submit posts.

The advantage of using these functions versus using the post submission endpoint directly is that
some of the post validation checks can be done on the client side which will be faster.

NOTE: If used, this javascript file MUST be loaded dynamically for each user because the contents
of the file are generated dynamically based on the current user.  The file may be cached on a per
user basis based on the HTTP cache headers that are returned when the file is requested (currently
the cache headers specify that the file should expire after one day).


The following functions are available:

---

**window.TN.check_crossposting_restrictions(group_ids)**

Checks for crossposting restrictions when the user selects more than one group to post to.

Parameters:
- **group_ids** is an array of group IDs

Returns an object with three properties {allowed, restricted, restrictions}.

- **allowed** is an array of the group IDs from group_ids that can be crossposted to

- **restricted** is an array of the group IDs from group_ids that can't be crossposted to

- **restrictions** is an object mapping group IDs that have crossposting restrictions to arrays of group IDs that are restricted.
  It is useful for pinpointing why a group ID shows up in the restricted array so that users can be provided feedback
  about the reason for the crossposting restriction (eg. a message like 'group A doesn't allow crossposting to group B').

For example, given group_ids = [1, 2, 3, 4] and assuming group 1 doesn't allow posting to group 3 and group 2 doesn't allow
posting to group 1, the returned object will be:

{allowed: [4], restricted: [1, 2, 3], restrictions: {1: [3], 2: [1]}}


---

**window.TN.submit_post(args, session, preferences, callback)**

Submits a new post and performs validation checks on the post before it is accepted for submission.

Parameters:

- **args** is an object containing data about the post being submitted and must include
  the following properties:

  - type: The type of post.  One of: offer, wanted
  - title: A short description of the item(s).
  - location: A short location description.

  The following properties are optional:

  - content: A longer description of the item(s).
  - group_ids: An array of group IDs to submit the post to (if any).
  - fair_offer: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
  - photo_ids: A comma separated list of the IDs of the photos that should be attached to this post.
  - latitude
  - longitude

- **session** is a temporary object that is used by submit_post to store data about the submission
  process for a single post.  The first time submit_post is called with a post, session should
  be a new empty object (eg. {}).  The session object should be persisted until that post
  is successfully submitted and then it can be discarded so that the next post will start
  over with a new empty session object.  

- **preferences** is a permanent object that the client persists and modifies based on warnings returned
  by the post submission process and user input.  Some post warnings passed to the callback object
  have a preference_key string property so that users can opt out of those warnings in the future.
  To save this opt-out preference, set the property indicated by the preference_key in the preferences
  object (eg. preferences[preference_key] = 1).  The preferences object is only read by submit_post and
  never modified - it is up to the client to initialize, modify and persist the preferences object.

- **callback** is a function used to return the result of the post submission. It is called and passed
  one argument - an object with five properties {result, message, preference_key, identifier, session}.
  The result property is a string that is one of: success, error, warning.  The identifier property is
  set for errors and warnings and will contain a string that represents the type of error or warning that
  occurred.

  A success result indicates that the post was submitted successfully. Note that posts may not
  appear instantly after submission because the moderators of many groups may have additional
  automatic or manual review processes in place that can delay the publishing of a post.
  
  An error result indicates that there is an error with the post to show the user and the message property
  will contain text describing the error.

  A warning result indicates that there is a warning about the post to show the user and the
  message property will contain a string describing the warning.  A warning result doesn't prevent a post from
  being submitted, to continue the submission process after a warning result, just re-submit the post
  (with the updated session object) to temporarily override that specific warning.

  Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be 
  set in the preferences object by the client to opt out of that type of warning in the future (see the description
  of the preferences parameter for more details).



```js
trashnothing.get_post_client_javascript({
  "group_ids": "",
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * group_ids **required** `string`: A comma separated list of all the group IDs that the current user is a member of. If the current user is not a member of any groups, simply pass an empty string.
  * callback `string`: The name of a global function to call once the script is loaded.
  * access_token **required** `string`: Passing the current users' OAuth2 access token as a GET parameter makes it easier to load this script in a normal HTML <script> tag.

#### Output
*Output schema unknown*

### get_posts_by_ids
Retrieve multiple posts


```js
trashnothing.get_posts_by_ids({
  "post_ids": ""
}, context)
```

#### Input
* input `object`
  * post_ids **required** `string`: A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.

#### Output
* output `array`
  * items [Post](#post)

### search_posts
Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.



```js
trashnothing.search_posts({
  "search": "",
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * search **required** `string`: The search query used to find posts.
  * sort_by `string`: How to sort the posts that are returned.  One of: relevance, date <br /><br /> Setting sort_by to date will sort posts from newest to oldest.
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
  * date_min `string`: Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.
  * date_max `string`: Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.
  * outcomes `string`: A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
  * user_state `string`: If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * group_ids `array`: The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
    * items `string`
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [PostSearchResult](#postsearchresult)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### get_post
Retrieve a post


```js
trashnothing.get_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to retrieve.

#### Output
* output [Post](#post)

### update_post
Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.



```js
trashnothing.update_post({
  "post_id": "",
  "type": "",
  "title": "",
  "location": "",
  "session": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to update.
  * type **required** `string`: The type of post.  One of: offer, wanted
  * title **required** `string`: A short description of the item(s).
  * location **required** `string`: A short location description.
  * content `string`: A longer description of the item(s).
  * fair_offer `integer`: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
  * latitude `number`: The latitude corresponding to the location description provided. <br /><br /> If latitude and longitude are not provided, an attempt will be made to automatically geocode the location.  If the location is unable to be geocoded, the post will be rejected* and will have to be resubmitted with a latitude and longitude corresponding to the location or resubmitted with a different location that can be automatically geocoded. <br /><br /> NOTE: The latitude and longitude should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address (which is not recommended). <br /><br /> *When a post is rejected because it can't be geocoded, the returned error will have its identifier property set to 'unknown-location'.
  * longitude `number`: The longitude corresponding to the location description provided. (see the NOTE in latitude description)
  * photo_ids `string`: A comma separated list of the IDs of the photos that should be attached to this post.
  * session **required** `string`: A JSON string representing a temporary object that is used to store data about the update process for a single post.  The first time a post update is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that update is successfully submitted and then it  can be discarded so that the next update will start over with a new empty session object.  Every time an update is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.
  * preferences `string`: A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the update submission process and user input.  Some warnings returned after submitting  an update have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is never modified by the server - it is up to the client to initialize, modify and persist the preferences object.

#### Output
* output `object`
  * identifier `string`: When an error or warning is returned, this will contain a short string representing the type of error or warning that occurred.  Is null on success.
  * message `string`: Contains text describing the reason a post update was not successful.  Is null on success.
  * preference_key `string`: Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).  Is null for errors, success and warnings that can't be opted out of.
  * result `string`: One of: success, error, warning. <br /><br /> A success result indicates that the post update was submitted successfully. Note that post updates may not appear instantly after submission because the moderators of many groups may have additional automatic or manual review processes in place that can cause delays. <br /><br /> An error result indicates that there is an error with the post that should be shown to the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post update to show the user and the message property will contain a string describing the warning.   A warning result doesn't prevent a post update from being submitted, to continue the submission process after a warning result, just re-submit (with the updated session object) to temporarily override that specific warning.
  * session `object`: The updated session object that should override the client's copy of the session that was passed in the session parameter. Is null on success.

### delete_bookmark
Delete a post bookmark


```js
trashnothing.delete_bookmark({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`

#### Output
*Output schema unknown*

### bookmark_post
Bookmark a post


```js
trashnothing.bookmark_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`

#### Output
*Output schema unknown*

### get_post_and_related_data
Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.



```js
trashnothing.get_post_and_related_data({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to retrieve.

#### Output
* output `object`
  * author [User](#user)
  * author_offer_count `integer`: Count of offer posts made by the post author in the last 90 days.
  * author_posts `array`: Other active posts from the post author in the last 90 days. A maximum of 30 posts will be returned.
    * items [Post](#post)
  * author_wanted_count `integer`: Count of wanted posts made by the post author in the last 90 days.
  * bookmarked `boolean`: Whether or not the current user has bookmarked this post.  Will be null for api key requests and for the current users' posts.
  * feedback `array`: Feedback the current user has left on the post author.
    * items [Feedback](#feedback)
  * geolocate_bounds [GeolocateBounds](#geolocatebounds)
  * groups `array`: The groups the post is published on.
    * items [Group](#group)
  * post [Post](#post)
  * replied `boolean`: Whether or not the current user has replied to this post.  Will be null for api key requests and for the current users' posts.
  * user_can_reply `boolean`: Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.
  * viewed `boolean`: Whether or not the current user has previously viewed this post.  Will be null for api key requests and for the current users' posts.

### flag_post
Flags a post to be reviewed by the moderators.


```js
trashnothing.flag_post({
  "post_id": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`
  * reason **required** `string`: The reason that this post is being flagged.  Must be one of: 'spam', 'not free (for sale/trade/borrow)', 'illegal item', 'not family-friendly', 'other', 'mislabeled: is a Want', 'mislabeled: is an Offer'. <br /><br /> NOTE: If reason is set to 'other', the details parameter is required to be set.
  * details `string`: An explanation from the current user for why they are flagging this post.   This is useful for users to provide evidence or explain why there is a problem with the post. <br /><br /> NOTE: If reason is set to 'other', details are required.

#### Output
*Output schema unknown*

### geolocate_post
Map a post to a specific location when the post is missing a location or has an incorrect location.


```js
trashnothing.geolocate_post({
  "post_id": "",
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to geolocate.
  * latitude **required** `number`
  * longitude **required** `number`
  * location `string`: A location name corresponding to the given latitude and longitude.  Usually this is either a location included somewhere in the post title or content or a location description typed or selected by the user who is mapping the post.

#### Output
* output [Post](#post)

### promise_post
Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.



```js
trashnothing.promise_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to promise.

#### Output
* output [Post](#post)

### reply_to_post
Send a reply to a post from the current user to the post author.


```js
trashnothing.reply_to_post({
  "post_id": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to reply to.
  * message **required** `string`: The message to send to the post author.
  * send_copy `integer`: If set to 1, a copy of the reply will be emailed to the current user.
  * photo_ids `string`: A comma separated list of the IDs of the photos that should be attached to this reply.

#### Output
*Output schema unknown*

### satisfy_post
Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).


```js
trashnothing.satisfy_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to satisfy.

#### Output
* output [Post](#post)

### get_post_share_content
Retrieve text and html content useful for sharing a post by email.


```js
trashnothing.get_post_share_content({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to share.

#### Output
* output `object`
  * html `string`: Email body as html.
  * subject `string`: Email subject line text.
  * text `string`: Email body as plain text.

### share_post
Forwards a copy of the post to the current user so that they can forward it to friends.


```js
trashnothing.share_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to share.

#### Output
*Output schema unknown*

### unpromise_post
Mark an offer by the current user as unpromised.


```js
trashnothing.unpromise_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to unpromise.

#### Output
* output [Post](#post)

### withdraw_post
Mark an offer or wanted post by the current user as withdrawn.


```js
trashnothing.withdraw_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to withdraw.

#### Output
* output [Post](#post)

### get_stories
List stories


```js
trashnothing.get_stories({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of stories to return.
  * per_page `integer`: The number of stories to return per page (must be >= 1 and <= 50).
  * sort_by `string`: How to sort the stories that are returned.  One of: date, distance, likes, views <br /><br /> Setting sort_by to date will sort posts from newest to oldest.  Setting sort_by to distance will sort posts from nearest to farthest.  Setting sort_by to likes will sort posts with the most likes first.  Setting sort_by to views will show the posts with the most views first.
  * latitude `number`: Find groups near the given latitude and longitude.
  * longitude `number`: Find groups near the given latitude and longitude.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output `object`
  * stories `array`
    * items [Story](#story)

### submit_story
Submit a story


```js
trashnothing.submit_story({
  "title": "",
  "content": "",
  "sharing": ""
}, context)
```

#### Input
* input `object`
  * title **required** `string`: The title of the story.
  * content **required** `string`: The content of the story.
  * sharing **required** `string`: Must be set to one of the following two options: public, members <br /><br /> When sharing is set to public, anyone will be able to view the story. When sharing is set to members, only other members will be able to view the story.
  * photo_ids `string`: A comma separated list of the IDs of the photos that should be attached to this story.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [Story](#story)

### get_story
Retrieve a story


```js
trashnothing.get_story({
  "story_id": ""
}, context)
```

#### Input
* input `object`
  * story_id **required** `string`: The ID of the story to retrieve.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [Story](#story)

### like_story
Like a story


```js
trashnothing.like_story({
  "story_id": ""
}, context)
```

#### Input
* input `object`
  * story_id **required** `string`: The ID of the story to like.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [Story](#story)

### unlike_story
Unlike a story


```js
trashnothing.unlike_story({
  "story_id": ""
}, context)
```

#### Input
* input `object`
  * story_id **required** `string`: The ID of the story to unlike.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [Story](#story)

### viewed_story
Records every time a user views the full story (and not just a preview or snippet),


```js
trashnothing.viewed_story({
  "story_id": ""
}, context)
```

#### Input
* input `object`
  * story_id **required** `string`: The ID of the story viewed.

#### Output
*Output schema unknown*

### get_current_user
Retrieve current user


```js
trashnothing.get_current_user(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CurrentUser](#currentuser)

### update_current_user
Update the current user.  All fields are optional so requests can update just one or multiple user properties at a time.



```js
trashnothing.update_current_user({}, context)
```

#### Input
* input `object`
  * firstname `string`: The first name of the user.
  * lastname `string`: The last name of the user.
  * public_name `integer`: Whether or not the users' first and last name will be visible to other users. Set to 1 to enable and 0 to disable.
  * digest `string`: The frequency of digest emails sent to this user. One of: weekly, twice_weekly, daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> To disable digests, set this to an empty string.
  * digest_photos `integer`: Whether or not to include photos in the digest emails. Set to 1 to enable photos and 0 to disable photos.
  * post_reminders `integer`: Whether or not the user will receive post reminder emails (to remind them to update or repost their posts). Set to 1 to enable and 0 to disable.
  * password `string`: A new password for the users' account.  When setting a new password, the old_password parameter must be passed and set to the users' current password. <br /><br /> NOTE: The password and old_password properties can NOT be used when the user property has_password is false.  Instead, use the password reset endpoint to have a new password emailed to the user.
  * old_password `string`: The users current password.  This is required when the user is changing their password.
  * profile_image_source `string`: The source of the users' profile image. The values this can be set to change dynamically based on the users' account. To get the values that can be used, use the source properties returned by the profile images endpoint.
  * last_listings_view `string`: The UTC date and time when the user last viewed the newest posts on the All Posts page.
  * public_post_sources `string`: A comma separated list of the sources to show public posts from. Currently only 'trashnothing' is supported.
  * show_all_group_posts `integer`: Set to 1 to show all group posts on the main posts page and in the digest emails.  Set to 0 to only show group posts in the area defined by the users' location.  Can only be set to 0 if the users' location is already set.
  * special_notices `integer`: Whether or not the user wants to receive special notice emails from the groups they are a member of. Special notices are admin posts that the group moderators choose to send out by email. Set to 1 to enable and 0 to disable.

#### Output
* output [CurrentUser](#currentuser)

### get_alerts
List current users' email alerts


```js
trashnothing.get_alerts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Alert](#alert)

### create_alert
Create an email alert


```js
trashnothing.create_alert({
  "search": "",
  "types": ""
}, context)
```

#### Input
* input `object`
  * search **required** `string`: When a post matches this search query, an email alert will be sent.  Must have a length >= 2 and < 255 characters.
  * types **required** `string`: A comma separated list of the post types that the alert should match against. The available post types are: offer, wanted

#### Output
* output [Alert](#alert)

### delete_alert
Delete an email alert


```js
trashnothing.delete_alert({
  "alert_id": ""
}, context)
```

#### Input
* input `object`
  * alert_id **required** `string`: The ID of the email alert to delete.

#### Output
*Output schema unknown*

### change_email
Change the users' current email address.  A verification link will be emailed to the new email address to verify that the email account belongs to the user.  The email change will not take effect until the user clicks the link in the verification email.



```js
trashnothing.change_email({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: The new email address.

#### Output
*Output schema unknown*

### set_email_not_bouncing
Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.



```js
trashnothing.set_email_not_bouncing(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CurrentUser](#currentuser)

### get_current_user_groups
List current users' groups


```js
trashnothing.get_current_user_groups({}, context)
```

#### Input
* input `object`
  * membership `string`: Set the membership parameter to only return certain groups. The options are: <br /><br /> - **subscribed**: Only return groups the user is a member of.<br /> - **pending-questions**: Only return groups where the user needs to respond to a new member questionnaire.<br /> - **pending**: Only return groups where the user is waiting for their membership request to be approved (excludes groups which are pending-questions). <br /><br /> If unset, all groups the user is a member of and pending membership on will be returned.

#### Output
* output `array`
  * items [Group](#group)

### update_location
Update the current users' location. The location is used to determine which posts are shown to the user (both public posts and group posts).



```js
trashnothing.update_location({
  "name": "",
  "latitude": 0,
  "longitude": 0,
  "radius": 0
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A name that describes the location specified by the given latitude and longitude (must be <= 128 characters).
  * latitude **required** `number`
  * longitude **required** `number`
  * radius **required** `number`: A radius in meters that defines a circle around the point specified by latitude and longitude. Only posts within the area specified by this circle will be shown.

#### Output
* output [CurrentUser](#currentuser)

### get_user_group_notices
List current users' group notices


```js
trashnothing.get_user_group_notices({}, context)
```

#### Input
* input `object`
  * group_ids `string`: A comma separated list of group IDs to return notices for.  If unset, notices for all the users groups will be returned.

#### Output
* output `array`
  * items [GroupNotice](#groupnotice)

### get_current_user_posts
NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.



```js
trashnothing.get_current_user_posts({
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
  * date_min `string`: Only posts newer than or equal to this UTC date and time will be returned.
  * date_max `string`: Only posts older than this UTC date and time will be returned.
  * outcomes `string`: A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
  * user_state `string`: If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * group_ids `array`: The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
    * items `string`
  * last_listings_view `string`: The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [Post](#post)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### search_current_user_posts
Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.



```js
trashnothing.search_current_user_posts({
  "search": "",
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * search **required** `string`: The search query used to find posts.
  * sort_by `string`: How to sort the posts that are returned.  One of: relevance, date <br /><br /> Setting sort_by to date will sort posts from newest to oldest.
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
  * date_min `string`: Only posts newer than or equal to this UTC date and time will be returned.
  * date_max `string`: Only posts older than this UTC date and time will be returned.
  * outcomes `string`: A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
  * user_state `string`: If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * group_ids `array`: The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
    * items `string`
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [PostSearchResult](#postsearchresult)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### get_profile_images
List current users' profile images


```js
trashnothing.get_profile_images(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * image `string`: An image URL.
    * source `string`: The source of the image.  Currently one of: gravatar, facebook, twitter, google <br /><br /> NOTE: Additional sources may be added in the future (eg. 'trashnothing' when support for uploading custom profile images is added) so clients should take care to support arbitrary sources being returned.

### resend_account_verification_email
Resend account verification email


```js
trashnothing.resend_account_verification_email(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### send_password_reset_email
Send password reset email


```js
trashnothing.send_password_reset_email(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### report_user
Report a user


```js
trashnothing.report_user({
  "subject": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * subject **required** `string`: The subject of the message.
  * message **required** `string`: The body of the message.
  * user_id `string`: The ID of the user to report.  One of user_id or user_email must be passed but only user_id will be used if both are passed.
  * user_email `string`: The email of the user to report.  Often users only know to identify other users by their email addresses so allowing users to enter an email address can be easier in certain cases.
  * group_id `string`: The ID of the group to report the user to.  This may be disregarded in cases where user_email is set and can be used to automatically identify which group the user should be reported to (because some email addresses are specific to certain groups).

#### Output
*Output schema unknown*

### get_user
Retrieve a user


```js
trashnothing.get_user({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: A user ID.

#### Output
* output [User](#user)

### get_user_and_related_data
Retrieve a user and information related to the user (eg. recent posts) that is useful for displaying a more detailed view of the user.



```js
trashnothing.get_user_and_related_data({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: A user ID.

#### Output
* output `object`
  * feedback `array`: Feedback the current user has left on the user.
    * items [Feedback](#feedback)
  * offer_count `integer`: Count of offer posts made by the user in the last 90 days.
  * posts `array`: Other active posts from the user in the last 90 days. A maximum of 30 posts will be returned.
    * items [Post](#post)
  * user [User](#user)
  * wanted_count `integer`: Count of wanted posts made by the user in the last 90 days.

### submit_user_feedback
Allows the current user to submit feedback on a user.  The current user can only leave feedback on a user if the feedback allowed property on that user is set to true (see User definition for more details). And the system will only store the most recent feedback submission that the current user has submitted on a user. If the current user submits feedback multiple times, the newest feedback will overwrite the older feedback. This allows users to update their feedback as long as the feedback allowed property allows it.



```js
trashnothing.submit_user_feedback({
  "user_id": "",
  "positive": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: A user ID.
  * positive **required** `integer`: If set to 1, the feedback is positive.  If set to 0, the feedback is negative.
  * content `string`: A comment written by the current user about the user they are leaving feedback on. This is optional for positive feedback but is required for negative feedback.
  * category `string`: For positive feedback, category should not be set. <br /><br /> For negative feedback, category should be set to one of: NO_SHOW, UNRESPONSIVE, LATE, ITEM_NOT_AS_DESCRIBED, BROKEN_PROMISE, RUDE, RESELLER, SELLING, UNWANTED_MESSAGES, OTHER <br /><br /> Below are descriptions for each of these categories: <br /><br /> **NO_SHOW** - The user did not show up when they said they would.<br /> **UNRESPONSIVE** - The user failed to respond when a response was expected.<br /> **LATE** - The user showed up later than they said they would.<br /> **ITEM_NOT_AS_DESCRIBED** - The user gave away an item that had a misleading on incomplete description.<br /> **BROKEN_PROMISE** - The user broke a promise.<br /> **RUDE** - The user was rude or impolite.<br /> **RESELLER** - The user is obtaining free items to sell on other sites without disclosing their intent to resell.<br /> **SELLING** - The user is selling items on trash nothing.<br /> **UNWANTED_MESSAGES** - The user is sending off-topic or unrelated messages.<br />           **OTHER** - This category is for anything that does not fit in any of the above categories.

#### Output
* output `object`
  * feedback [Feedback](#feedback)
  * user [User](#user)

### get_user_posts
NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.



```js
trashnothing.get_user_posts({
  "user_id": "",
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
  * date_min `string`: Only posts newer than or equal to this UTC date and time will be returned.
  * date_max `string`: Only posts older than this UTC date and time will be returned.
  * outcomes `string`: A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * group_ids `array`: The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
    * items `string`
  * last_listings_view `string`: The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [Post](#post)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### search_user_posts
Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.



```js
trashnothing.search_user_posts({
  "user_id": "",
  "search": "",
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.
  * search **required** `string`: The search query used to find posts.
  * sort_by `string`: How to sort the posts that are returned.  One of: relevance, date <br /><br /> Setting sort_by to date will sort posts from newest to oldest.
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
  * date_min `string`: Only posts newer than or equal to this UTC date and time will be returned.
  * date_max `string`: Only posts older than this UTC date and time will be returned.
  * outcomes `string`: A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * group_ids `array`: The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
    * items `string`
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [PostSearchResult](#postsearchresult)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### get_profile_image_file
This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.



```js
trashnothing.get_profile_image_file({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The user ID of the user to return the profile image of.
  * default `string`: A default image URL to use when the user has no profile image. Or to use one of the Gravatar default images, you can set default to any one of (404, mm, identicon, monsterid, wavatar, retro, blank). <br /><br /> To learn how the Gravatar default images options work, see the Default Image section on the page at:<br /> https://en.gravatar.com/site/implement/images/

#### Output
*Output schema unknown*



## Definitions

### Alert
* Alert `object`: A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.
  * alert_id `string`
  * last_sent `string`: The UTC date and time when the alert was last triggered and sent out (may be null).
  * search `string`: The search phrase that the alert triggers on.
  * send_count `integer`: The number of time the alert has triggered and been send out.
  * types `array`: A list of the post types that the alert is set to match against.  The available post types are: offer, wanted <br /><br /> NOTE: Additional post types may be added in the future (eg. events) so clients should take care to support arbitrary types being returned.
    * items `string`
  * user_id `string`

### BoundingBox
* BoundingBox `object`: A geographic bounding box defined by its southwest and northeast points.
  * northeast `object`: The point defining the northeast corner of the bounding box.
    * latitude `number`
    * longitude `number`
  * southwest `object`: The point defining the southwest corner of the bounding box.
    * latitude `number`
    * longitude `number`

### Conversation
* Conversation `object`: A conversation between the current user and another user.
  * archived `boolean`: Whether or not this conversation is archived.
  * blocked `boolean`: Whether or not this conversation is blocked.
  * conversation_id `string`
  * last_message_date `string`: The UTC date and time of the last message in this conversation.
  * messages `array`: The latest messages in this conversation.
    * items [Message](#message)
  * num_unread_messages `integer`: The count of how many unread messages this conversation has.
  * user [User](#user)

### CurrentUser
* CurrentUser
  * country `string`: A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
  * feedback `object`
    * percent_positive `number`: The percent of feedback that this user has received in the last year that was positive. May be null if a user has not received enough feedback to calculate a percentage.
    * restriction `string`: If the current user can leave positive or negative feedback on this user then restriction is null. <br /><br /> Otherwise, restriction is set to a string that explains why feedback is currently restricted and what type of feedback is restricted. The string will be one of the following:  no-recent-messages, negative-score, moderator, [days]-day-wait-for-negative <br /><br /> - **no-recent-messages**: The current user has not received any messages from this user in the last 30 days. <br /> - **negative-score**: The current user has a negative feedback and will not be able to leave feedback until their score is >= 0. <br /> - **moderator**: The user is a moderator and leaving feedback on moderators is not currently supported. <br /> - **[days]-day-wait-for-negative**: Positive feedback is not restricted but the current user must wait
    * score `integer`: The feedback score of this user.  Higher scores are better.   Scores are calculated by substracting the total number of negative feedback from the total number of positive feedback that a user has received.  May be null if a user has not received enough feedback to calculate a score.
  * firstname `string`: The first name of the user (may be null).
  * lastname `string`: The last name of the user (may be null).
  * member_since `string`: The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).
  * profile_image `string`: A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Twitter, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
  * reply_time `integer`: An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.
  * user_id `string`
  * username `string`: A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
  * digest `string`: If digest emails are enabled, this is the frequency of digest emails sent to this user. One of: weekly, twice_weekly, daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> If digest emails are disabled, this will be null.
  * digest_photos `boolean`: Whether or not photos are included in the digest emails sent to the user.
  * email `object`: Data related to the users' email address.
    * address `string`: The email address.
    * bouncing `boolean`: Whether or not this email address has been bouncing emails that are sent to it.  When bouncing is true, no emails will be sent to the user.  If the user thinks that their email account shouldn't be bouncing emails, use the email not bouncing endpoint to reset bouncing to false.
    * spam_stop `boolean`: Whether or not emails have been stopped because of a spam complaint from the users' email account. When spam_stop is first set to true, it indicates that all emails have been automatically disabled for the users' account (eg. digest and alerts).  The user will need to re-enable digests and re-add any alerts that they had previously set up.
  * has_password `boolean`: Whether or not the user has a password (accounts created using 3rd party providers like Facebook don't have passwords set). <br /><br /> When has_password is false, the only way to set a password on the users' account is to send the user a password reset email.
  * last_listings_view `string`: The UTC date and time when the user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page.
  * location `object`: The users' location.  The location is used to determine which posts are shown to the user (may be null).
    * latitude `number`
    * longitude `number`
    * name `string`: A text description of the location specified by latitude and longitude.
    * radius `number`: Defines the radius (in meters) of a circle around the point specified by latitude and longitude.
  * post_location `object`: The short location description used by the user the last time they posted.
    * latitude `number`: May be null.
    * longitude `number`: May be null.
    * name `string`: A text description of the location specified by latitude and longitude.
  * post_reminders `boolean`: Whether or not post reminders are enabled for this user (to remind them to update or repost their posts).
  * profile_image_source `string`: The source of the users' profile image. One of: gravatar, facebook, twitter, google, freegle, custom
  * public_name `boolean`: Whether or not the user has chosen to make their first and last name public.
  * public_post_sources `array`: A list of the public post sources the user is interested in seeing posts from (currently only 'trashnothing' is supported). If the array is empty, no sources are enabled and the user will only see posts from the groups they are a member of. <br /><br /> NOTE: Additional sources may be added in the future so clients should take care to support arbitrary sources being returned.
    * items `string`
  * show_all_group_posts `boolean`: If true, all group posts from the users' groups are shown to them on the main posts page and in the digest emails. <br /><br /> If false, only group posts in the area defined by the users' location are shown.
  * signup `string`: The UTC date and time when the user signed up.
  * special_notices `boolean`: Whether or not the user wants to receive special notice emails from the groups they are a member of. Special notices are admin posts that the group moderators choose to send out by email.
  * uses_fair_offer_policy `boolean`: Whether or not the user used the Fair Offer Policy (see https://trashnothing.com/fair_offer_policy ) the last time they posted.
  * verified `boolean`: Whether or not the user has verified their account. The user account will be limited (eg. they will not be able to reply to posts) until their account is verified.

### Feedback
* Feedback `object`
  * content `string`: A comment written by the reviewer about the user (may be null).
  * date `string`: Date when the feedback was submitted.
  * positive `boolean`: Set to true for positive feedback and false for negative feedback.
  * reviewer_user_id `string`: The user ID of the user that submitted the feedback.
  * user_id `string`: The user ID of the user that the feedback is about.

### GeolocateBounds
* GeolocateBounds `object`: Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.
  * default [BoundingBox](#boundingbox)
  * limit [BoundingBox](#boundingbox)

### Group
* Group `object`: Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
  * country `object`: Provides information about the country that is associated with a group.  May be null.
    * abbreviation `string`: A 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
    * name `string`: The name of the country.
  * group_id `string`
  * has_questions `boolean`: When true, anyone requesting membership to this group will be required to answer a new membership questionnaire.
  * homepage `string`: A URL to the group homepage.
  * identifier `string`: A unique identifier for the group that is used in URLs.
  * latitude `number`
  * longitude `number`
  * member_count `integer`: The number of members who belong to the group.
  * membership `object`: Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
    * date `string`: For pending and pending-questions memberships, this is the UTC date and time when the current user requested membership to this group. For subscribed memberships, this is the UTC date and time when the membership status became subscribed.
    * questionnaire `object`: Membership questionnaire data.  Will be null unless the membership status is pending-questions.
      * message `string`: A message from the group moderators to be displayed above the questions (may be null).
      * questions `array`: The list of questions.
        * items `string`
    * status `string`: One of: subscribed, pending, pending-questions
  * name `string`: The name of the group (not guaranteed to be unique).
  * open_archives `boolean`: When true, the group posts are viewable by anyone.  When false, the group posts can only be viewed by members of the group.
  * open_membership `boolean`: When true, the group allows anyone to join.  When false, the group moderators review and approve applicants.
  * region `object`: Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
    * abbreviation `string`: A 2 letter abbreviation for the region (is not guaranteed to be globally unique but is unique among all the regions in the country).
    * name `string`: The name of the region.
  * timezone `string`: The timezone that the group is in (eg. America/New_York).
  * utc_offset `number`: The group offset (in hours) from UTC time.  This does not take into account daylight savings time (DST) in places that observe DST so it may be incorrect during DST.

### GroupNotice
* GroupNotice `object`: Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines).
  * content `string`
  * date `string`: The UTC date and time when this notice was received.
  * group_id `string`
  * notice_id `string`
  * title `string`

### Message
* Message `object`: A message between two users.
  * content `string`: The content of the message.
  * date `string`: The UTC date and time when the message was sent.
  * email_attachments `array`: Every message a user receives is made available via the API and is sent to the user by email.  Some messages may contain unsupported attachments that are not available by the API but are emailed to the user (eg. documents, videos, zip files). The email_attachments field provides the names of all the unsupported attachments that were emailed to the user (will be null if there are no unsupported attachments).
    * items `string`
  * from_user_id `string`: The ID of the user that sent the message (the sender).
  * message_id `string`
  * photos `array`: Details about the photos associated with this message (may be null if there are no photos).
    * items [Photo](#photo)
  * subject `string`: Because many messages are received by email, all messages have a subject. The subject is often useful to allow the recipient to determine which post a message may be referring to.  In rare cases, some senders send emails with a subject and but no email body which causes the message content to be an empty string.
  * to_user_id `string`: The ID of the user that received the message (the recipient).

### Photo
* Photo `object`
  * blurhash `string`: A blurhash of the photo that can be used as a placeholder while the photo is loading (see: https://github.com/woltapp/blurhash). May be null if no blurhash is available and the length of the blurhash can vary based on the photo.
  * images `array`: All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties.
    * items `object`
      * height `integer`
      * url `string`
      * width `integer`
  * photo_id `string`
  * thumbnail `string`: A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square.
  * url `string`: A URL to a large version of this photo (but not necessarily the largest size available).

### PhotoResult
* PhotoResult `object`: The result of uploading or editing a photo.
  * photo_id `string`
  * thumbnail `object`: Photo thumbnail data.
    * height `integer`
    * url `string`
    * width `integer`

### Post
* Post `object`: An offer, wanted, admin, taken or received post.
  * content `string`
  * date `string`: The UTC date and time when the post was published.
  * footer `string`: Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).
  * group_id `string`: The group ID of the post.  For public posts, this is always null.
  * latitude `number`: May be null if a post hasn't been mapped.
  * longitude `number`: May be null if a post hasn't been mapped.
  * outcome `string`: For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.
  * photos `array`: Details about the photos associated with this post (may be null if there are no photos).
    * items [Photo](#photo)
  * post_id `string`
  * source `string`: The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.
  * title `string`
  * type `string`: The type of post.  One of: offer, taken, wanted, received, admin
  * url `string`: The link to use to view the post on the trash nothing site.
  * user_id `string`

### PostSearchResult
* PostSearchResult
  * content `string`
  * date `string`: The UTC date and time when the post was published.
  * footer `string`: Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).
  * group_id `string`: The group ID of the post.  For public posts, this is always null.
  * latitude `number`: May be null if a post hasn't been mapped.
  * longitude `number`: May be null if a post hasn't been mapped.
  * outcome `string`: For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.
  * photos `array`: Details about the photos associated with this post (may be null if there are no photos).
    * items [Photo](#photo)
  * post_id `string`
  * source `string`: The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.
  * title `string`
  * type `string`: The type of post.  One of: offer, taken, wanted, received, admin
  * url `string`: The link to use to view the post on the trash nothing site.
  * user_id `string`
  * search_content `string`: A snippet of the post content as HTML with the parts of the content that matched the search query (if any) wrapped in an HTML span tags with the class 'highlight' (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the post content matched the search query. <br /><br /> NOTE: This is not the full content of the post  It is just a snippet of around 200 characters that can be used to display the parts of the post content relevant to the search query.
  * search_title `string`: The post subject as HTML with the parts of the subject that matched the search query (if any) wrapped in HTML span tags with the class 'highlight'. (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the subject matched the search query.

### Story
* Story `object`: A user story
  * content `string`
  * date `string`: The UTC date and time when the post was published.
  * like_count `integer`: The number of people who have liked this story.
  * photos `array`: Details about the photos associated with this story (may be null if there are no photos).
    * items [Photo](#photo)
  * share_url `string`: A URL that can be used to share the story (may be null if the story is not public).
  * story_id `string`
  * title `string`
  * user [User](#user)
  * user_liked `boolean`: Whether or not the current user has liked this story or not.

### User
* User `object`
  * country `string`: A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
  * feedback `object`
    * percent_positive `number`: The percent of feedback that this user has received in the last year that was positive. May be null if a user has not received enough feedback to calculate a percentage.
    * restriction `string`: If the current user can leave positive or negative feedback on this user then restriction is null. <br /><br /> Otherwise, restriction is set to a string that explains why feedback is currently restricted and what type of feedback is restricted. The string will be one of the following:  no-recent-messages, negative-score, moderator, [days]-day-wait-for-negative <br /><br /> - **no-recent-messages**: The current user has not received any messages from this user in the last 30 days. <br /> - **negative-score**: The current user has a negative feedback and will not be able to leave feedback until their score is >= 0. <br /> - **moderator**: The user is a moderator and leaving feedback on moderators is not currently supported. <br /> - **[days]-day-wait-for-negative**: Positive feedback is not restricted but the current user must wait
    * score `integer`: The feedback score of this user.  Higher scores are better.   Scores are calculated by substracting the total number of negative feedback from the total number of positive feedback that a user has received.  May be null if a user has not received enough feedback to calculate a score.
  * firstname `string`: The first name of the user (may be null).
  * lastname `string`: The last name of the user (may be null).
  * member_since `string`: The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).
  * profile_image `string`: A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Twitter, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
  * reply_time `integer`: An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.
  * user_id `string`
  * username `string`: A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.


