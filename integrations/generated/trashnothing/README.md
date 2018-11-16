# @datafire/trashnothing

Client library for trash nothing!

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

trashnothing.get_user_group_notices({}).then(data => {
  console.log(data);
});
```

## Description

This is the REST API for [trashnothing.com](https://trashnothing.com).

To learn more about the API or to register your app for use with the API
visit the [trash nothing! Developer page](https://trashnothing.com/developer).


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
Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group.



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
  "photo": "",
  "upload_key": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`, `object`: Photo to upload.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * upload_key **required** `string`: A client created identifier used to associate a photo or set of photos with a post (a  random number will work - must be <= 32 characters).
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).

#### Output
* output [PhotoResult](#photoresult)

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
Only posts from the last 30 days will be returned. <br /><br /> NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.



```js
trashnothing.get_posts({
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of will be used (the group IDs of other groups will be silently discarded). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded).
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * last_listings_view `string`: The date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
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
  "item": "",
  "location": "",
  "latitude": 0,
  "longitude": 0,
  "session": ""
}, context)
```

#### Input
* input `object`
  * group_ids `string`: A comma separated list of group IDs to submit the post to (if any).
  * type **required** `string`: The type of post.  One of: offer, wanted
  * item **required** `string`: A short description of the item(s).
  * location **required** `string`: A short location description.
  * content `string`: A longer description of the item(s).
  * fair_offer `integer`: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
  * latitude **required** `number`: The latitude corresponding to the location description provided. <br /><br /> NOTE: This should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address.
  * longitude **required** `number`: The longitude corresponding to the location description provided. (see the NOTE in latitude description)
  * upload_key `string`: The upload_key used to upload any photos that should be attached to this post.
  * session **required** `string`: A JSON string representing a temporary object that is used to store data about the submission process for a single post.  The first time a post is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that post is successfully submitted and then it can be discarded so that the next post will start over with a new empty session object.  Every time a post is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.
  * preferences `string`: A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the post submission process and user input.  Some warnings returned after submitting a post have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is only read by submit_post and never modified - it is up to the client to initialize, modify and persist the preferences object.

#### Output
* output `object`
  * message `string`: Contains text describing the reason a post was not successful.  Is null on success.
  * preference_key `string`: Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).
  * result `string`: One of: success, error, warning. <br /><br /> A success result indicates that the post was submitted successfully. Note that posts may not appear instantly after submission because the moderators of many groups may have additional automatic or manual review processes in place that can delay the publishing of a post. <br /><br /> An error result indicates that there is an error with the post to show the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post to show the user and the message property will contain a string describing the warning.  A warning result doesn't prevent a post from being submitted, to continue the submission process after a warning result, just re-submit the post  (with the updated session object) to temporarily override that specific warning.
  * session `object`: The updated session object that should override the client's copy of the session that was passed in the session parameter.

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

Submits a new post and performs validation checks on the post before it is accepted for submission..

Parameters:

- **args** is an object containing data about the post being submitted and must include
  the following properties:

  - type: The type of post.  One of: offer, wanted
  - item: A short description of the item(s).
  - location: A short location description.

  The following properties are optional:

  - content: A longer description of the item(s).
  - group_ids: An array of group IDs to submit the post to (if any).
  - fair_offer: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
  - upload_key: The key used to upload any photos that should be attached to this post.
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
  one argument - an object with three properties {result, message, preference_key}.  The result property
  is a string that is one of: success, error, warning.

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
  "group_ids": ""
}, context)
```

#### Input
* input `object`
  * group_ids **required** `string`: A comma separated list of all the group IDs that the current user is a member of. If the current user is not a member of any groups, simply pass an empty string.

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
  * post_ids **required** `string`: The IDs of the posts to retrieve.  If more than 10 post IDs are passed, only the first 10 posts will be returned.

#### Output
* output `array`
  * items [Post](#post)

### search_posts
Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters. <br /><br /> Only posts from the last 30 days will be returned.



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
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of will be used (the group IDs of other groups will be silently discarded). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded).
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
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
  * author_offer_count `integer`: Count of offer posts made by the post author in the last 30 days.
  * author_posts `array`: Other posts by the post author.
    * items [Post](#post)
  * author_wanted_count `integer`: Count of wanted posts made by the post author in the last 30 days.
  * geolocate_bounds [GeolocateBounds](#geolocatebounds)
  * groups `array`: The groups the post is published on.
    * items [Group](#group)
  * post [Post](#post)
  * related_posts `array`: If the post is an offer post, this will contain taken posts that may correspond to the offer post (if any). If the post is a wanted post, this will contain received posts that may correspond to the wanted post (if any). These posts are useful to help people viewing the post decide if one or more of the items in the post is no longer available (for offer posts) or needed (for wanted posts).
    * items [Post](#post)

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
  * summary `string`: If the post contains multiple items and not every item has been taken or received, pass a short summary of the items that have been so that the post will be updated to reflect which items are still being offered or request. Once all items in the post have been taken or received, this endpoint should be called with no summary passed so that the post will be removed from the listings.

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
Shares a post by email.


```js
trashnothing.share_post({
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * post_id **required** `string`: The ID of the post to share.
  * send_copy `integer`: If set to 1, a copy of post will be emailed to the current user so that they can share the email with anyone.  The message and recipients parameters are not used when this is set.
  * message `string`: An optional message to prefix to the email body that will be sent to the recipients.
  * recipients `string`: A comma separated list of email addresses to share the post with.  This is a required field if send_copy is not set.

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
  * digest_enabled `integer`: Whether or not the user will receive digest emails summarizing the new posts. Set to 1 to enable and 0 to disable.
  * digest_frequency `string`: The frequency of digest emails sent to this user. One of: daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> NOTE: A weekly option with the value 'weekly' will probably be added in the future so clients should recognize weekly as a valid value that can be displayed and set if it is ever returned.
  * post_reminders `integer`: Whether or not the user will receive post reminder emails (to remind them to update or repost their posts). Set to 1 to enable and 0 to disable.
  * password `string`: A new password for the users' account.  When setting a new password, the old_password parameter must be passed and set to the users' current password. <br /><br /> NOTE: The password and old_password properties can NOT be used when the user property has_password is false.  Instead, use the password reset endpoint to have a new password emailed to the user.
  * old_password `string`: The users current password.  This is required when the user is changing their password.
  * profile_image_source `string`: The source of the users' profile image. The values this can be set to change dynamically based on the users' account. To get the values that can be used, use the source properties returned by the profile images endpoint.
  * last_listings_view `string`: The date and time when the user last viewed the newest posts on the All Posts page.
  * filter_group_posts_by_location `integer`: Whether or not group posts should be filtered by their location to only include posts defined by the users' location field. Set to 1 to enable and 0 to disable.
  * public_post_sources `string`: A comma separated list of the sources to show public posts from. Currently only 'trashnothing' is supported.

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

### get_emails
List email addresses


```js
trashnothing.get_emails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Email](#email)

### add_email
Add a new email address to the current users' account.  The first time an email address is added to a users account, a verification link will be sent to the email address to verify the address.



```js
trashnothing.add_email({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: The email address to add.

#### Output
* output [Email](#email)

### delete_email
Delete an existing email address from the current users' account. If the email being deleted is the last email address the user has or if the email address is the primary email for the user, deleting the email will fail. In order to delete a users' primary email, another email must first be made the primary email.



```js
trashnothing.delete_email({
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: The ID of the email address to delete.

#### Output
* output `array`
  * items [Email](#email)

### set_email_not_bouncing
Resets an email address bouncing state to false.  The email address may be automatically marked as bouncing if further emails sent to it are bounced.



```js
trashnothing.set_email_not_bouncing({
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: The ID of the email to set as not bouncing.

#### Output
* output [Email](#email)

### resend_email_verification_email
Resends the verification email to one of the users' unverified email addresses.


```js
trashnothing.resend_email_verification_email({
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: The ID of the email to resend the verification email to.

#### Output
*Output schema unknown*

### update_primary_email
Update primary email


```js
trashnothing.update_primary_email({
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * email_id **required** `string`: The ID of the email address to make the primary email address for the user.

#### Output
* output `array`
  * items [Email](#email)

### get_user_groups
List current users' groups


```js
trashnothing.get_user_groups({}, context)
```

#### Input
* input `object`
  * membership `string`: Set the membership parameter to only return certain groups. The options are: <br /><br /> - **subscribed**: Only return groups the user is a member of.<br /> - **pending-questions**: Only return groups where the user needs to respond to a new member questionnaire.<br /> - **pending**: Only return groups where the user is waiting for their membership request to be approved (excludes groups which are pending-questions). <br /><br /> If unset, all groups the user is a member of and pending membership on will be returned.

#### Output
* output `array`
  * items [Group](#group)

### update_location
Update the current users' location. The location is used to determine what (if any) public posts are shown to the user.



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
Only posts from the last 30 days will be returned. <br /><br /> NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.



```js
trashnothing.get_current_user_posts({
  "types": "",
  "sources": ""
}, context)
```

#### Input
* input `object`
  * types **required** `string`: A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of will be used (the group IDs of other groups will be silently discarded). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded).
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * last_listings_view `string`: The date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [Post](#post)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### search_current_user_posts
Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters. <br /><br /> Only posts from the last 30 days will be returned.



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
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of will be used (the group IDs of other groups will be silently discarded). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded).
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
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

### get_user_posts
Only posts from the last 30 days will be returned. <br /><br /> NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.



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
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of will be used (the group IDs of other groups will be silently discarded). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded).
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
  * last_listings_view `string`: The date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
  * num_pages `integer`: The total number of pages available.
  * num_posts `integer`: The total number of posts available.
  * page `integer`: The page number of the posts being returned.
  * per_page `integer`: The number of posts being returned per page.
  * posts `array`
    * items [Post](#post)
  * start_index `integer`: The index of the first post being returned (an integer between 1 and num_posts).

### search_user_posts
Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters. <br /><br /> Only posts from the last 30 days will be returned.



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
  * sources **required** `string`: A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group.
  * group_ids `string`: A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of will be used (the group IDs of other groups will be silently discarded). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded).
  * per_page `integer`: The number of posts to return per page (must be >= 1 and <= 100).
  * page `integer`: The page of posts to return.
  * device_pixel_ratio `number`: Client device pixel ratio used to determine thumbnail size (default 1.0).
  * latitude `number`: The latitude of a point around which to return posts.
  * longitude `number`: The longitude of a point around which to return posts.
  * radius `number`: The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.

#### Output
* output `object`
  * end_index `integer`: The index of the last post being returned (an integer between start_index and num_posts).
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
  * last_sent `string`: The last time that the alert was triggered and sent out (may be null).
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

### CurrentUser
* CurrentUser
  * country `string`: A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
  * firstname `string`: The first name of the user (may be null).
  * lastname `string`: The last name of the user (may be null).
  * member_since `string`: The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).
  * profile_image `string`: A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Twitter, Gravatar, etc) and some can be as small as 64px by 64px.
  * user_id `string`
  * username `string`: A username that can be displayed for the user (the username is NOT guaranteed to be unique).
  * contributed_recently `boolean`: Whether or not this user has contributed money recently to support the site using the page at: https://trashnothing.com/payment
  * digest_enabled `boolean`: Whether or not digest emails are enabled for this user.
  * digest_frequency `string`: The frequency of digest emails sent to this user. One of: daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> NOTE: A weekly option with the value 'weekly' will probably be added in the future so clients should recognize weekly as a valid value that can be displayed and set if it is ever returned.
  * digest_timezone `string`: The timezone used for emailing digests to this user (may be null if digests are disabled).
  * email_bouncing `boolean`: Whether or not the users' primary email address is bouncing emails sent to it.
  * email_spam_stop `boolean`: Whether or not emails have been stopped because of a spam complaint from the users' email account.
  * filter_group_posts_by_location `boolean`: Whether or not group posts should be filtered by their location to only include posts defined by the users' location field.
  * has_password `boolean`: Whether or not the user has a password (accounts created using 3rd party providers like Facebook don't have passwords set).
  * hide_ads `boolean`: Whether or not advertisements (eg. Google Ads) should be shown to this user.
  * last_listings_view `string`: The date and time when the user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page.
  * location `object`: The users' preference for what public posts they want to see outside of the groups they are a member of (may be null).
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
  * public_post_sources `array`: A list of the public post sources the user is interested in seeing posts from (currently only 'trashnothing' is supported). <br /><br /> NOTE: Additional sources may be added in the future so clients should take care to support arbitrary sources being returned.
    * items `string`
  * signup `string`: The date and time when the user signed up.
  * uses_fair_offer_policy `boolean`: Whether or not the user used the Fair Offer Policy (see https://trashnothing.com/fair_offer_policy ) the last time they posted.
  * verified `boolean`: Whether or not the user has verified their account.

### Email
* Email `object`: Contains information about a user email address.
  * address `string`: The email address.
  * bouncing `boolean`: Whether or not this email address has been bouncing emails that are sent to it.
  * email_id `string`
  * is_primary `boolean`: Whether or not this email is the primary email on the user account.
  * user_id `string`
  * verified `boolean`: Whether or not this email address has been verified.

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
    * date `string`: For pending and pending-questions memberships, this is the date and time when the current user requested membership to this group. For subscribed memberships, this is the date and time when the membership status became subscribed.
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
  * date `string`: The date and time when this notice was received.
  * group_id `string`
  * notice_id `string`
  * title `string`

### PhotoResult
* PhotoResult `object`: The result of uploading or editing a photo.
  * album_url `string`: A URL to view all the photos uploaded using the upload_key that this photo was uploaded with.
  * photo_id `string`
  * thumbnail `object`: Photo thumbnail data.
    * height `integer`
    * url `string`
    * width `integer`

### Post
* Post `object`: An offer, wanted, admin, taken or received post.
  * content `string`
  * date `string`: The date and time when the post was published.
  * footer `string`: Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).
  * group_id `string`: The group ID of the post.  For public posts, this is always null.
  * latitude `number`: May be null if a post hasn't been mapped.
  * longitude `number`: May be null if a post hasn't been mapped.
  * photos `array`: Details about the photos associated with this post (may be null if there are no photos).
    * items `object`
      * images `array`: All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties.
        * items `object`
          * height `integer`
          * url `string`
          * width `integer`
      * photo_id `string`
      * thumbnail `string`: A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and can vary from 120px by 120px up to 360px by 360px (but the thumbnail is not guaranteed to be square).
      * url `string`: A URL to a version of this photo that is at most 800px by 600px (but may be smaller if no copy of the photo exists at that exact size).
  * post_id `string`
  * satisfied `boolean`: For offer and wanted posts, indicates whether or not this post has been satisfied or not. An offer that has been taken or a want that has been received have both been satisfied. For other types of posts, this is always null.
  * source `string`: The source of the post.  One of: groups, trashnothing.  A value of groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.
  * title `string`
  * type `string`: The type of post.  One of: offer, taken, wanted, received, admin
  * user_id `string`

### PostSearchResult
* PostSearchResult
  * content `string`
  * date `string`: The date and time when the post was published.
  * footer `string`: Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).
  * group_id `string`: The group ID of the post.  For public posts, this is always null.
  * latitude `number`: May be null if a post hasn't been mapped.
  * longitude `number`: May be null if a post hasn't been mapped.
  * photos `array`: Details about the photos associated with this post (may be null if there are no photos).
    * items `object`
      * images `array`: All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties.
        * items `object`
          * height `integer`
          * url `string`
          * width `integer`
      * photo_id `string`
      * thumbnail `string`: A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and can vary from 120px by 120px up to 360px by 360px (but the thumbnail is not guaranteed to be square).
      * url `string`: A URL to a version of this photo that is at most 800px by 600px (but may be smaller if no copy of the photo exists at that exact size).
  * post_id `string`
  * satisfied `boolean`: For offer and wanted posts, indicates whether or not this post has been satisfied or not. An offer that has been taken or a want that has been received have both been satisfied. For other types of posts, this is always null.
  * source `string`: The source of the post.  One of: groups, trashnothing.  A value of groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.
  * title `string`
  * type `string`: The type of post.  One of: offer, taken, wanted, received, admin
  * user_id `string`
  * search_content `string`: A snippet of the post content as HTML with the parts of the content that matched the search query (if any) wrapped in an HTML span tags with the class 'highlight' (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the post content matched the search query. <br /><br /> NOTE: This is not the full content of the post  It is just a snippet of around 200 characters that can be used to display the parts of the post content relevant to the search query.
  * search_subject `string`: The post subject as HTML with the parts of the subject that matched the search query (if any) wrapped in HTML span tags with the class 'highlight'. (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the subject matched the search query.

### User
* User `object`
  * country `string`: A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
  * firstname `string`: The first name of the user (may be null).
  * lastname `string`: The last name of the user (may be null).
  * member_since `string`: The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).
  * profile_image `string`: A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Twitter, Gravatar, etc) and some can be as small as 64px by 64px.
  * user_id `string`
  * username `string`: A username that can be displayed for the user (the username is NOT guaranteed to be unique).


