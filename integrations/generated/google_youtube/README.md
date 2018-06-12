# @datafire/google_youtube

Client library for YouTube Data

## Installation and Usage
```bash
npm install --save @datafire/google_youtube
```
```js
let google_youtube = require('@datafire/google_youtube').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_youtube.videos.reportAbuse({}).then(data => {
  console.log(data);
});
```

## Description

Supports core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and much more.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_youtube.oauthCallback({
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
google_youtube.oauthRefresh(null, context)
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

### activities.list
Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.


```js
google_youtube.activities.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * channelId `string`: The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
  * home `boolean`: Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.
  * publishedAfter `string`: The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * publishedBefore `string`: The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * regionCode `string`: The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ActivityListResponse](#activitylistresponse)

### activities.insert
Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)

Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.


```js
google_youtube.activities.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Activity](#activity)
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Activity](#activity)

### captions.delete
Deletes a specified caption track.


```js
google_youtube.captions.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is be on behalf of
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### captions.list
Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.


```js
google_youtube.captions.list({
  "part": "",
  "videoId": ""
}, context)
```

#### Input
* input `object`
  * id `string`: The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is on behalf of.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
  * videoId **required** `string`: The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CaptionListResponse](#captionlistresponse)

### captions.insert
Uploads a caption track.


```js
google_youtube.captions.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Caption](#caption)
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is be on behalf of
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
  * sync `boolean`: The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Caption](#caption)

### captions.update
Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.


```js
google_youtube.captions.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Caption](#caption)
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is be on behalf of
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.
  * sync `boolean`: Note: The API server only processes the parameter value if the request contains an updated caption file.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Caption](#caption)

### captions.download
Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.


```js
google_youtube.captions.download({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is be on behalf of
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * tfmt `string` (values: sbv, scc, srt, ttml, vtt): The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format.
  * tlang `string`: The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### channelBanners.insert
Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:

- Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
- Extract the url property's value from the response that the API returns for step 1.
- Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.


```js
google_youtube.channelBanners.insert({}, context)
```

#### Input
* input `object`
  * body [ChannelBannerResource](#channelbannerresource)
  * channelId `string`: The channelId parameter identifies the YouTube channel to which the banner is uploaded. The channelId parameter was introduced as a required parameter in May 2017. As this was a backward-incompatible change, channelBanners.insert requests that do not specify this parameter will not return an error until six months have passed from the time that the parameter was introduced. Please see the API Terms of Service for the official policy regarding backward incompatible changes and the API revision history for the exact date that the parameter was introduced.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ChannelBannerResource](#channelbannerresource)

### channelSections.delete
Deletes a channelSection.


```js
google_youtube.channelSections.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### channelSections.list
Returns channelSection resources that match the API request criteria.


```js
google_youtube.channelSections.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * channelId `string`: The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
  * hl `string`: The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the channelSections.insert or channelSections.update method.
  * id `string`: The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
  * mine `boolean`: Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ChannelSectionListResponse](#channelsectionlistresponse)

### channelSections.insert
Adds a channelSection for the authenticated user's channel.


```js
google_youtube.channelSections.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [ChannelSection](#channelsection)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ChannelSection](#channelsection)

### channelSections.update
Update a channelSection.


```js
google_youtube.channelSections.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [ChannelSection](#channelsection)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ChannelSection](#channelsection)

### channels.list
Returns a collection of zero or more channel resources that match the request criteria.


```js
google_youtube.channels.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * categoryId `string`: The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
  * forUsername `string`: The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
  * hl `string`: The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.
  * id `string`: The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
  * managedByMe `boolean`: Note: This parameter is intended exclusively for YouTube content partners.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
  * mySubscribers `boolean`: Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ChannelListResponse](#channellistresponse)

### channels.update
Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.


```js
google_youtube.channels.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Channel](#channel)
  * onBehalfOfContentOwner `string`: The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Channel](#channel)

### commentThreads.list
Returns a list of comment threads that match the API request parameters.


```js
google_youtube.commentThreads.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * allThreadsRelatedToChannelId `string`: The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.
  * channelId `string`: The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)
  * id `string`: The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * moderationStatus `string` (values: heldForReview, likelySpam, published): Set this parameter to limit the returned comment threads to a particular moderation state.
  * order `string` (values: relevance, time): The order parameter specifies the order in which the API response should list comment threads. Valid values are: 
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
  * searchTerms `string`: The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.
  * textFormat `string` (values: html, plainText): Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.
  * videoId `string`: The videoId parameter instructs the API to return comment threads associated with the specified video ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CommentThreadListResponse](#commentthreadlistresponse)

### commentThreads.insert
Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.


```js
google_youtube.commentThreads.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [CommentThread](#commentthread)
  * part **required** `string`: The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CommentThread](#commentthread)

### commentThreads.update
Modifies the top-level comment in a comment thread.


```js
google_youtube.commentThreads.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [CommentThread](#commentthread)
  * part **required** `string`: The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CommentThread](#commentthread)

### comments.delete
Deletes a comment.


```js
google_youtube.comments.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the comment ID for the resource that is being deleted.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### comments.list
Returns a list of comments that match the API request parameters.


```js
google_youtube.comments.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * id `string`: The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
  * parentId `string`: The parentId parameter specifies the ID of the comment for which replies should be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
  * textFormat `string` (values: html, plainText): This parameter indicates whether the API should return comments formatted as HTML or as plain text.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CommentListResponse](#commentlistresponse)

### comments.insert
Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.


```js
google_youtube.comments.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Comment](#comment)
  * part **required** `string`: The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### comments.update
Modifies a comment.


```js
google_youtube.comments.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Comment](#comment)
  * part **required** `string`: The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### comments.markAsSpam
Expresses the caller's opinion that one or more comments should be flagged as spam.


```js
google_youtube.comments.markAsSpam({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### comments.setModerationStatus
Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.


```js
google_youtube.comments.setModerationStatus({
  "id": "",
  "moderationStatus": ""
}, context)
```

#### Input
* input `object`
  * banAuthor `boolean`: The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.
  * id **required** `string`: The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.
  * moderationStatus **required** `string` (values: heldForReview, published, rejected): Identifies the new moderation status of the specified comments.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### guideCategories.list
Returns a list of categories that can be associated with YouTube channels.


```js
google_youtube.guideCategories.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * hl `string`: The hl parameter specifies the language that will be used for text values in the API response.
  * id `string`: The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
  * part **required** `string`: The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.
  * regionCode `string`: The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GuideCategoryListResponse](#guidecategorylistresponse)

### i18nLanguages.list
Returns a list of application languages that the YouTube website supports.


```js
google_youtube.i18nLanguages.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * hl `string`: The hl parameter specifies the language that should be used for text values in the API response.
  * part **required** `string`: The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [I18nLanguageListResponse](#i18nlanguagelistresponse)

### i18nRegions.list
Returns a list of content regions that the YouTube website supports.


```js
google_youtube.i18nRegions.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * hl `string`: The hl parameter specifies the language that should be used for text values in the API response.
  * part **required** `string`: The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [I18nRegionListResponse](#i18nregionlistresponse)

### liveBroadcasts.delete
Deletes a broadcast.


```js
google_youtube.liveBroadcasts.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### liveBroadcasts.list
Returns a list of YouTube broadcasts that match the API request parameters.


```js
google_youtube.liveBroadcasts.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * broadcastStatus `string` (values: active, all, completed, upcoming): The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
  * broadcastType `string` (values: all, event, persistent): The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter for now.
  * id `string`: The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveBroadcastListResponse](#livebroadcastlistresponse)

### liveBroadcasts.insert
Creates a broadcast.


```js
google_youtube.liveBroadcasts.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [LiveBroadcast](#livebroadcast)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveBroadcast](#livebroadcast)

### liveBroadcasts.update
Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.


```js
google_youtube.liveBroadcasts.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [LiveBroadcast](#livebroadcast)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveBroadcast](#livebroadcast)

### liveBroadcasts.bind
Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.


```js
google_youtube.liveBroadcasts.bind({
  "id": "",
  "part": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
  * streamId `string`: The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveBroadcast](#livebroadcast)

### liveBroadcasts.control
Controls the settings for a slate that can be displayed in the broadcast stream.


```js
google_youtube.liveBroadcasts.control({
  "id": "",
  "part": ""
}, context)
```

#### Input
* input `object`
  * displaySlate `boolean`: The displaySlate parameter specifies whether the slate is being enabled or disabled.
  * id **required** `string`: The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
  * offsetTimeMs `string`: The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
  * walltime `string`: The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveBroadcast](#livebroadcast)

### liveBroadcasts.transition
Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.


```js
google_youtube.liveBroadcasts.transition({
  "broadcastStatus": "",
  "id": "",
  "part": ""
}, context)
```

#### Input
* input `object`
  * broadcastStatus **required** `string` (values: complete, live, testing): The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
  * id **required** `string`: The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveBroadcast](#livebroadcast)

### liveChatBans.delete
Removes a chat ban.


```js
google_youtube.liveChatBans.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### liveChatBans.insert
Adds a new ban to the chat.


```js
google_youtube.liveChatBans.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [LiveChatBan](#livechatban)
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveChatBan](#livechatban)

### liveChatMessages.delete
Deletes a chat message.


```js
google_youtube.liveChatMessages.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube chat message ID of the resource that is being deleted.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### liveChatMessages.list
Lists live chat messages for a specific chat.


```js
google_youtube.liveChatMessages.list({
  "liveChatId": "",
  "part": ""
}, context)
```

#### Input
* input `object`
  * hl `string`: The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
  * liveChatId **required** `string`: The liveChatId parameter specifies the ID of the chat whose messages will be returned.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of messages that should be returned in the result set.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
  * profileImageSize `integer`: The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveChatMessageListResponse](#livechatmessagelistresponse)

### liveChatMessages.insert
Adds a message to a live chat.


```js
google_youtube.liveChatMessages.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [LiveChatMessage](#livechatmessage)
  * part **required** `string`: The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveChatMessage](#livechatmessage)

### liveChatModerators.delete
Removes a chat moderator.


```js
google_youtube.liveChatModerators.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### liveChatModerators.list
Lists moderators for a live chat.


```js
google_youtube.liveChatModerators.list({
  "liveChatId": "",
  "part": ""
}, context)
```

#### Input
* input `object`
  * liveChatId **required** `string`: The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveChatModeratorListResponse](#livechatmoderatorlistresponse)

### liveChatModerators.insert
Adds a new moderator for the chat.


```js
google_youtube.liveChatModerators.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [LiveChatModerator](#livechatmoderator)
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveChatModerator](#livechatmoderator)

### liveStreams.delete
Deletes a video stream.


```js
google_youtube.liveStreams.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### liveStreams.list
Returns a list of video streams that match the API request parameters.


```js
google_youtube.liveStreams.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * id `string`: The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveStreamListResponse](#livestreamlistresponse)

### liveStreams.insert
Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.


```js
google_youtube.liveStreams.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [LiveStream](#livestream)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveStream](#livestream)

### liveStreams.update
Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.


```js
google_youtube.liveStreams.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [LiveStream](#livestream)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [LiveStream](#livestream)

### playlistItems.delete
Deletes a playlist item.


```js
google_youtube.playlistItems.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### playlistItems.list
Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.


```js
google_youtube.playlistItems.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * id `string`: The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.
  * playlistId `string`: The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
  * videoId `string`: The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PlaylistItemListResponse](#playlistitemlistresponse)

### playlistItems.insert
Adds a resource to a playlist.


```js
google_youtube.playlistItems.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [PlaylistItem](#playlistitem)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PlaylistItem](#playlistitem)

### playlistItems.update
Modifies a playlist item. For example, you could update the item's position in the playlist.


```js
google_youtube.playlistItems.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [PlaylistItem](#playlistitem)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PlaylistItem](#playlistitem)

### playlists.delete
Deletes a playlist.


```js
google_youtube.playlists.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### playlists.list
Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.


```js
google_youtube.playlists.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * channelId `string`: This value indicates that the API should only return the specified channel's playlists.
  * hl `string`: The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.
  * id `string`: The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PlaylistListResponse](#playlistlistresponse)

### playlists.insert
Creates a playlist.


```js
google_youtube.playlists.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Playlist](#playlist)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Playlist](#playlist)

### playlists.update
Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.


```js
google_youtube.playlists.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Playlist](#playlist)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Playlist](#playlist)

### search.list
Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.


```js
google_youtube.search.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * channelId `string`: The channelId parameter indicates that the API response should only contain resources created by the channel
  * channelType `string` (values: any, show): The channelType parameter lets you restrict a search to a particular type of channel.
  * eventType `string` (values: completed, live, upcoming): The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * forContentOwner `boolean`: Note: This parameter is intended exclusively for YouTube content partners.
  * forDeveloper `boolean`: The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.
  * forMine `boolean`: The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
  * location `string`: The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).
  * locationRadius `string`: The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * order `string` (values: date, rating, relevance, title, videoCount, viewCount): The order parameter specifies the method that will be used to order resources in the API response.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
  * publishedAfter `string`: The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
  * publishedBefore `string`: The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
  * q `string`: The q parameter specifies the query term to search for.
  * regionCode `string`: The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
  * relatedToVideoId `string`: The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
  * relevanceLanguage `string`: The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.
  * safeSearch `string` (values: moderate, none, strict): The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
  * topicId `string`: The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
  * type `string`: The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
  * videoCaption `string` (values: any, closedCaption, none): The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoCategoryId `string`: The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoDefinition `string` (values: any, high, standard): The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoDimension `string` (values: 2d, 3d, any): The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoDuration `string` (values: any, long, medium, short): The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoEmbeddable `string` (values: any, true): The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoLicense `string` (values: any, creativeCommon, youtube): The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoSyndicated `string` (values: any, true): The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * videoType `string` (values: any, episode, movie): The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SearchListResponse](#searchlistresponse)

### sponsors.list
Lists sponsors for a channel.


```js
google_youtube.sponsors.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * filter `string` (values: all, newest): The filter parameter specifies which channel sponsors to return.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SponsorListResponse](#sponsorlistresponse)

### subscriptions.delete
Deletes a subscription.


```js
google_youtube.subscriptions.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### subscriptions.list
Returns subscription resources that match the API request criteria.


```js
google_youtube.subscriptions.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * channelId `string`: The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
  * forChannelId `string`: The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
  * id `string`: The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
  * myRecentSubscribers `boolean`: Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
  * mySubscribers `boolean`: Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * order `string` (values: alphabetical, relevance, unread): The order parameter specifies the method that will be used to sort resources in the API response.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SubscriptionListResponse](#subscriptionlistresponse)

### subscriptions.insert
Adds a subscription for the authenticated user's channel.


```js
google_youtube.subscriptions.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Subscription](#subscription)
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Subscription](#subscription)

### superChatEvents.list
Lists Super Chat events for a channel.


```js
google_youtube.superChatEvents.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * hl `string`: The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SuperChatEventListResponse](#superchateventlistresponse)

### thumbnails.set
Uploads a custom video thumbnail to YouTube and sets it for a video.


```js
google_youtube.thumbnails.set({
  "videoId": ""
}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * videoId **required** `string`: The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ThumbnailSetResponse](#thumbnailsetresponse)

### videoAbuseReportReasons.list
Returns a list of abuse reasons that can be used for reporting abusive videos.


```js
google_youtube.videoAbuseReportReasons.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * hl `string`: The hl parameter specifies the language that should be used for text values in the API response.
  * part **required** `string`: The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [VideoAbuseReportReasonListResponse](#videoabusereportreasonlistresponse)

### videoCategories.list
Returns a list of categories that can be associated with YouTube videos.


```js
google_youtube.videoCategories.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * hl `string`: The hl parameter specifies the language that should be used for text values in the API response.
  * id `string`: The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
  * part **required** `string`: The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
  * regionCode `string`: The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [VideoCategoryListResponse](#videocategorylistresponse)

### videos.delete
Deletes a YouTube video.


```js
google_youtube.videos.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### videos.list
Returns a list of videos that match the API request parameters.


```js
google_youtube.videos.list({
  "part": ""
}, context)
```

#### Input
* input `object`
  * chart `string` (values: mostPopular): The chart parameter identifies the chart that you want to retrieve.
  * hl `string`: The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
  * id `string`: The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
  * locale `string`: DEPRECATED
  * maxHeight `integer`: The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not violate the width request.
  * maxResults `integer`: The maxResults parameter specifies the maximum number of items that should be returned in the result set.
  * maxWidth `integer`: The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate the height request.
  * myRating `string` (values: dislike, like): Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * part **required** `string`: The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.
  * regionCode `string`: The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
  * videoCategoryId `string`: The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [VideoListResponse](#videolistresponse)

### videos.insert
Uploads a video to YouTube and optionally sets the video's metadata.


```js
google_youtube.videos.insert({
  "part": ""
}, context)
```

#### Input
* input `object`
  * autoLevels `boolean`: The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
  * body [Video](#video)
  * notifySubscribers `boolean`: The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * stabilize `boolean`: The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Video](#video)

### videos.update
Updates a video's metadata.


```js
google_youtube.videos.update({
  "part": ""
}, context)
```

#### Input
* input `object`
  * body [Video](#video)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * part **required** `string`: The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Video](#video)

### videos.getRating
Retrieves the ratings that the authorized user gave to a list of specified videos.


```js
google_youtube.videos.getRating({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [VideoGetRatingResponse](#videogetratingresponse)

### videos.rate
Add a like or dislike rating to a video or remove a rating from a video.


```js
google_youtube.videos.rate({
  "id": "",
  "rating": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
  * rating **required** `string` (values: dislike, like, none): Specifies the rating to record.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### videos.reportAbuse
Report abuse for a video.


```js
google_youtube.videos.reportAbuse({}, context)
```

#### Input
* input `object`
  * body [VideoAbuseReport](#videoabusereport)
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### watermarks.set
Uploads a watermark image to YouTube and sets it for a channel.


```js
google_youtube.watermarks.set({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * body [InvideoBranding](#invideobranding)
  * channelId **required** `string`: The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### watermarks.unset
Deletes a channel's watermark image.


```js
google_youtube.watermarks.unset({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`: The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*



## Definitions

### AccessPolicy
* AccessPolicy `object`: Rights management policy for YouTube resources.
  * allowed `boolean`: The value of allowed indicates whether the access to the policy is allowed or denied by default.
  * exception `array`: A list of region codes that identify countries where the default policy do not apply.
    * items `string`

### Activity
* Activity `object`: An activity resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
  * contentDetails [ActivityContentDetails](#activitycontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the activity.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#activity".
  * snippet [ActivitySnippet](#activitysnippet)

### ActivityContentDetails
* ActivityContentDetails `object`: Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
  * bulletin [ActivityContentDetailsBulletin](#activitycontentdetailsbulletin)
  * channelItem [ActivityContentDetailsChannelItem](#activitycontentdetailschannelitem)
  * comment [ActivityContentDetailsComment](#activitycontentdetailscomment)
  * favorite [ActivityContentDetailsFavorite](#activitycontentdetailsfavorite)
  * like [ActivityContentDetailsLike](#activitycontentdetailslike)
  * playlistItem [ActivityContentDetailsPlaylistItem](#activitycontentdetailsplaylistitem)
  * promotedItem [ActivityContentDetailsPromotedItem](#activitycontentdetailspromoteditem)
  * recommendation [ActivityContentDetailsRecommendation](#activitycontentdetailsrecommendation)
  * social [ActivityContentDetailsSocial](#activitycontentdetailssocial)
  * subscription [ActivityContentDetailsSubscription](#activitycontentdetailssubscription)
  * upload [ActivityContentDetailsUpload](#activitycontentdetailsupload)

### ActivityContentDetailsBulletin
* ActivityContentDetailsBulletin `object`: Details about a channel bulletin post.
  * resourceId [ResourceId](#resourceid)

### ActivityContentDetailsChannelItem
* ActivityContentDetailsChannelItem `object`: Details about a resource which was added to a channel.
  * resourceId [ResourceId](#resourceid)

### ActivityContentDetailsComment
* ActivityContentDetailsComment `object`: Information about a resource that received a comment.
  * resourceId [ResourceId](#resourceid)

### ActivityContentDetailsFavorite
* ActivityContentDetailsFavorite `object`: Information about a video that was marked as a favorite video.
  * resourceId [ResourceId](#resourceid)

### ActivityContentDetailsLike
* ActivityContentDetailsLike `object`: Information about a resource that received a positive (like) rating.
  * resourceId [ResourceId](#resourceid)

### ActivityContentDetailsPlaylistItem
* ActivityContentDetailsPlaylistItem `object`: Information about a new playlist item.
  * playlistId `string`: The value that YouTube uses to uniquely identify the playlist.
  * playlistItemId `string`: ID of the item within the playlist.
  * resourceId [ResourceId](#resourceid)

### ActivityContentDetailsPromotedItem
* ActivityContentDetailsPromotedItem `object`: Details about a resource which is being promoted.
  * adTag `string`: The URL the client should fetch to request a promoted item.
  * clickTrackingUrl `string`: The URL the client should ping to indicate that the user clicked through on this promoted item.
  * creativeViewUrl `string`: The URL the client should ping to indicate that the user was shown this promoted item.
  * ctaType `string` (values: unspecified, visitAdvertiserSite): The type of call-to-action, a message to the user indicating action that can be taken.
  * customCtaButtonText `string`: The custom call-to-action button text. If specified, it will override the default button text for the cta_type.
  * descriptionText `string`: The text description to accompany the promoted item.
  * destinationUrl `string`: The URL the client should direct the user to, if the user chooses to visit the advertiser's website.
  * forecastingUrl `array`: The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.
    * items `string`
  * impressionUrl `array`: The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.
    * items `string`
  * videoId `string`: The ID that YouTube uses to uniquely identify the promoted video.

### ActivityContentDetailsRecommendation
* ActivityContentDetailsRecommendation `object`: Information that identifies the recommended resource.
  * reason `string` (values: unspecified, videoFavorited, videoLiked, videoWatched): The reason that the resource is recommended to the user.
  * resourceId [ResourceId](#resourceid)
  * seedResourceId [ResourceId](#resourceid)

### ActivityContentDetailsSocial
* ActivityContentDetailsSocial `object`: Details about a social network post.
  * author `string`: The author of the social network post.
  * imageUrl `string`: An image of the post's author.
  * referenceUrl `string`: The URL of the social network post.
  * resourceId [ResourceId](#resourceid)
  * type `string` (values: facebook, googlePlus, twitter, unspecified): The name of the social network.

### ActivityContentDetailsSubscription
* ActivityContentDetailsSubscription `object`: Information about a channel that a user subscribed to.
  * resourceId [ResourceId](#resourceid)

### ActivityContentDetailsUpload
* ActivityContentDetailsUpload `object`: Information about the uploaded video.
  * videoId `string`: The ID that YouTube uses to uniquely identify the uploaded video.

### ActivityListResponse
* ActivityListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of activities, or events, that match the request criteria.
    * items [Activity](#activity)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### ActivitySnippet
* ActivitySnippet `object`: Basic details about an activity, including title, description, thumbnails, activity type and group.
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel associated with the activity.
  * channelTitle `string`: Channel title for the channel responsible for this activity
  * description `string`: The description of the resource primarily associated with the activity.
  * groupId `string`: The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.
  * publishedAt `string`: The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The title of the resource primarily associated with the activity.
  * type `string` (values: bulletin, channelItem, comment, favorite, like, playlistItem, promotedItem, recommendation, social, subscription, upload): The type of activity that the resource describes.

### Caption
* Caption `object`: A caption resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the caption track.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#caption".
  * snippet [CaptionSnippet](#captionsnippet)

### CaptionListResponse
* CaptionListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of captions that match the request criteria.
    * items [Caption](#caption)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### CaptionSnippet
* CaptionSnippet `object`: Basic details about a caption track, such as its language and name.
  * audioTrackType `string` (values: commentary, descriptive, primary, unknown): The type of audio track associated with the caption track.
  * failureReason `string` (values: processingFailed, unknownFormat, unsupportedFormat): The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.
  * isAutoSynced `boolean`: Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions.
  * isCC `boolean`: Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.
  * isDraft `boolean`: Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false.
  * isEasyReader `boolean`: Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false.
  * isLarge `boolean`: Indicates whether the caption track uses large text for the vision-impaired. The default value is false.
  * language `string`: The language of the caption track. The property value is a BCP-47 language tag.
  * lastUpdated `string`: The date and time when the caption track was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * name `string`: The name of the caption track. The name is intended to be visible to the user as an option during playback.
  * status `string` (values: failed, serving, syncing): The caption track's status.
  * trackKind `string` (values: ASR, forced, standard): The caption track's type.
  * videoId `string`: The ID that YouTube uses to uniquely identify the video associated with the caption track.

### CdnSettings
* CdnSettings `object`: Brief description of the live stream cdn settings.
  * format `string`: The format of the video stream that you are sending to Youtube.
  * frameRate `string` (values: 30fps, 60fps, variable): The frame rate of the inbound video data.
  * ingestionInfo [IngestionInfo](#ingestioninfo)
  * ingestionType `string` (values: dash, rtmp): The method or protocol used to transmit the video stream.
  * resolution `string` (values: 1080p, 1440p, 2160p, 240p, 360p, 480p, 720p, variable): The resolution of the inbound video data.

### Channel
* Channel `object`: A channel resource contains information about a YouTube channel.
  * auditDetails [ChannelAuditDetails](#channelauditdetails)
  * brandingSettings [ChannelBrandingSettings](#channelbrandingsettings)
  * contentDetails [ChannelContentDetails](#channelcontentdetails)
  * contentOwnerDetails [ChannelContentOwnerDetails](#channelcontentownerdetails)
  * conversionPings [ChannelConversionPings](#channelconversionpings)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the channel.
  * invideoPromotion [InvideoPromotion](#invideopromotion)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#channel".
  * localizations `object`: Localizations for different languages
  * snippet [ChannelSnippet](#channelsnippet)
  * statistics [ChannelStatistics](#channelstatistics)
  * status [ChannelStatus](#channelstatus)
  * topicDetails [ChannelTopicDetails](#channeltopicdetails)

### ChannelAuditDetails
* ChannelAuditDetails `object`: The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
  * communityGuidelinesGoodStanding `boolean`: Whether or not the channel respects the community guidelines.
  * contentIdClaimsGoodStanding `boolean`: Whether or not the channel has any unresolved claims.
  * copyrightStrikesGoodStanding `boolean`: Whether or not the channel has any copyright strikes.
  * overallGoodStanding `boolean`: Describes the general state of the channel. This field will always show if there are any issues whatsoever with the channel. Currently this field represents the result of the logical and operation over the community guidelines good standing, the copyright strikes good standing and the content ID claims good standing, but this may change in the future.

### ChannelBannerResource
* ChannelBannerResource `object`: A channel banner returned as the response to a channel_banner.insert call.
  * etag `string`: Etag of this resource.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".
  * url `string`: The URL of this banner image.

### ChannelBrandingSettings
* ChannelBrandingSettings `object`: Branding properties of a YouTube channel.
  * channel [ChannelSettings](#channelsettings)
  * hints `array`: Additional experimental branding properties.
    * items [PropertyValue](#propertyvalue)
  * image [ImageSettings](#imagesettings)
  * watch [WatchSettings](#watchsettings)

### ChannelContentDetails
* ChannelContentDetails `object`: Details about the content of a channel.
  * relatedPlaylists `object`
    * favorites `string`: The ID of the playlist that contains the channel"s favorite videos. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list.
    * likes `string`: The ID of the playlist that contains the channel"s liked videos. Use the   playlistItems.insert and  playlistItems.delete to add or remove items from that list.
    * uploads `string`: The ID of the playlist that contains the channel"s uploaded videos. Use the  videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos.
    * watchHistory `string`: The ID of the playlist that contains the channel"s watch history. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list.
    * watchLater `string`: The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and  playlistItems.delete to add or remove items from that list.

### ChannelContentOwnerDetails
* ChannelContentOwnerDetails `object`: The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
  * contentOwner `string`: The ID of the content owner linked to the channel.
  * timeLinked `string`: The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.

### ChannelConversionPing
* ChannelConversionPing `object`: Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
  * context `string` (values: cview, subscribe, unsubscribe): Defines the context of the ping.
  * conversionUrl `string`: The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.

### ChannelConversionPings
* ChannelConversionPings `object`: The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
  * pings `array`: Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
    * items [ChannelConversionPing](#channelconversionping)

### ChannelListResponse
* ChannelListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of channels that match the request criteria.
    * items [Channel](#channel)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### ChannelLocalization
* ChannelLocalization `object`: Channel localization setting
  * description `string`: The localized strings for channel's description.
  * title `string`: The localized strings for channel's title.

### ChannelProfileDetails
* ChannelProfileDetails `object`
  * channelId `string`: The YouTube channel ID.
  * channelUrl `string`: The channel's URL.
  * displayName `string`: The channel's display name.
  * profileImageUrl `string`: The channels's avatar URL.

### ChannelSection
* ChannelSection `object`
  * contentDetails [ChannelSectionContentDetails](#channelsectioncontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the channel section.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".
  * localizations `object`: Localizations for different languages
  * snippet [ChannelSectionSnippet](#channelsectionsnippet)
  * targeting [ChannelSectionTargeting](#channelsectiontargeting)

### ChannelSectionContentDetails
* ChannelSectionContentDetails `object`: Details about a channelsection, including playlists and channels.
  * channels `array`: The channel ids for type multiple_channels.
    * items `string`
  * playlists `array`: The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.
    * items `string`

### ChannelSectionListResponse
* ChannelSectionListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of ChannelSections that match the request criteria.
    * items [ChannelSection](#channelsection)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### ChannelSectionLocalization
* ChannelSectionLocalization `object`: ChannelSection localization setting
  * title `string`: The localized strings for channel section's title.

### ChannelSectionSnippet
* ChannelSectionSnippet `object`: Basic details about a channel section, including title, style and position.
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that published the channel section.
  * defaultLanguage `string`: The language of the channel section's default title and description.
  * localized [ChannelSectionLocalization](#channelsectionlocalization)
  * position `integer`: The position of the channel section in the channel.
  * style `string` (values: channelsectionStyleUndefined, horizontalRow, verticalList): The style of the channel section.
  * title `string`: The channel section's title for multiple_playlists and multiple_channels.
  * type `string` (values: allPlaylists, channelsectionTypeUndefined, completedEvents, likedPlaylists, likes, liveEvents, multipleChannels, multiplePlaylists, popularUploads, postedPlaylists, postedVideos, recentActivity, recentPosts, recentUploads, singlePlaylist, subscriptions, upcomingEvents): The type of the channel section.

### ChannelSectionTargeting
* ChannelSectionTargeting `object`: ChannelSection targeting setting.
  * countries `array`: The country the channel section is targeting.
    * items `string`
  * languages `array`: The language the channel section is targeting.
    * items `string`
  * regions `array`: The region the channel section is targeting.
    * items `string`

### ChannelSettings
* ChannelSettings `object`: Branding properties for the channel view.
  * country `string`: The country of the channel.
  * defaultLanguage `string`
  * defaultTab `string`: Which content tab users should see when viewing the channel.
  * description `string`: Specifies the channel description.
  * featuredChannelsTitle `string`: Title for the featured channels tab.
  * featuredChannelsUrls `array`: The list of featured channels.
    * items `string`
  * keywords `string`: Lists keywords associated with the channel, comma-separated.
  * moderateComments `boolean`: Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.
  * profileColor `string`: A prominent color that can be rendered on this channel page.
  * showBrowseView `boolean`: Whether the tab to browse the videos should be displayed.
  * showRelatedChannels `boolean`: Whether related channels should be proposed.
  * title `string`: Specifies the channel title.
  * trackingAnalyticsAccountId `string`: The ID for a Google Analytics account to track and measure traffic to the channels.
  * unsubscribedTrailer `string`: The trailer of the channel, for users that are not subscribers.

### ChannelSnippet
* ChannelSnippet `object`: Basic details about a channel, including title, description and thumbnails.
  * country `string`: The country of the channel.
  * customUrl `string`: The custom url of the channel.
  * defaultLanguage `string`: The language of the channel's default title and description.
  * description `string`: The description of the channel.
  * localized [ChannelLocalization](#channellocalization)
  * publishedAt `string`: The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The channel's title.

### ChannelStatistics
* ChannelStatistics `object`: Statistics about a channel: number of subscribers, number of videos in the channel, etc.
  * commentCount `string`: The number of comments for the channel.
  * hiddenSubscriberCount `boolean`: Whether or not the number of subscribers is shown for this user.
  * subscriberCount `string`: The number of subscribers that the channel has.
  * videoCount `string`: The number of videos uploaded to the channel.
  * viewCount `string`: The number of times the channel has been viewed.

### ChannelStatus
* ChannelStatus `object`: JSON template for the status part of a channel.
  * isLinked `boolean`: If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.
  * longUploadsStatus `string` (values: allowed, disallowed, eligible, longUploadsUnspecified): The long uploads status of this channel. See
  * privacyStatus `string` (values: private, public, unlisted, unlisted_new): Privacy status of the channel.

### ChannelTopicDetails
* ChannelTopicDetails `object`: Freebase topic information related to the channel.
  * topicCategories `array`: A list of Wikipedia URLs that describe the channel's content.
    * items `string`
  * topicIds `array`: A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
    * items `string`

### Comment
* Comment `object`: A comment represents a single YouTube comment.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the comment.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#comment".
  * snippet [CommentSnippet](#commentsnippet)

### CommentListResponse
* CommentListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of comments that match the request criteria.
    * items [Comment](#comment)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### CommentSnippet
* CommentSnippet `object`: Basic details about a comment, such as its author and text.
  * authorChannelUrl `string`: Link to the author's YouTube channel, if any.
  * authorDisplayName `string`: The name of the user who posted the comment.
  * authorProfileImageUrl `string`: The URL for the avatar of the user who posted the comment.
  * canRate `boolean`: Whether the current viewer can rate this comment.
  * channelId `string`: The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel.
  * likeCount `integer`: The total number of likes this comment has received.
  * moderationStatus `string` (values: heldForReview, likelySpam, published, rejected): The comment's moderation status. Will not be set if the comments were requested through the id filter.
  * parentId `string`: The unique id of the parent comment, only set for replies.
  * publishedAt `string`: The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * textDisplay `string`: The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.
  * textOriginal `string`: The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author.
  * updatedAt `string`: The date and time when was last updated . The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * videoId `string`: The ID of the video the comment refers to, if any.
  * viewerRating `string` (values: dislike, like, none, unspecified): The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.

### CommentThread
* CommentThread `object`: A comment thread represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the comment thread.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".
  * replies [CommentThreadReplies](#commentthreadreplies)
  * snippet [CommentThreadSnippet](#commentthreadsnippet)

### CommentThreadListResponse
* CommentThreadListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of comment threads that match the request criteria.
    * items [CommentThread](#commentthread)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### CommentThreadReplies
* CommentThreadReplies `object`: Comments written in (direct or indirect) reply to the top level comment.
  * comments `array`: A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies.
    * items [Comment](#comment)

### CommentThreadSnippet
* CommentThreadSnippet `object`: Basic details about a comment thread.
  * canReply `boolean`: Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.
  * channelId `string`: The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself.
  * isPublic `boolean`: Whether the thread (and therefore all its comments) is visible to all YouTube users.
  * topLevelComment [Comment](#comment)
  * totalReplyCount `integer`: The total number of replies (not including the top level comment).
  * videoId `string`: The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment.

### ContentRating
* ContentRating `object`: Ratings schemes. The country-specific ratings are mostly for movies and shows. NEXT_ID: 71
  * acbRating `string` (values: acbC, acbE, acbG, acbM, acbMa15plus, acbP, acbPg, acbR18plus, acbUnrated): The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming.
  * agcomRating `string` (values: agcomT, agcomUnrated, agcomVm14, agcomVm18): The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM).
  * anatelRating `string` (values: anatelA, anatelF, anatelI, anatelI10, anatelI12, anatelI7, anatelR, anatelUnrated): The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television.
  * bbfcRating `string` (values: bbfc12, bbfc12a, bbfc15, bbfc18, bbfcPg, bbfcR18, bbfcU, bbfcUnrated): The video's British Board of Film Classification (BBFC) rating.
  * bfvcRating `string` (values: bfvc13, bfvc15, bfvc18, bfvc20, bfvcB, bfvcE, bfvcG, bfvcUnrated): The video's rating from Thailand's Board of Film and Video Censors.
  * bmukkRating `string` (values: bmukk10, bmukk12, bmukk14, bmukk16, bmukk6, bmukk8, bmukkAa, bmukkUnrated): The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).
  * catvRating `string` (values: catv14plus, catv18plus, catvC, catvC8, catvG, catvPg, catvUnrated): Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
  * catvfrRating `string` (values: catvfr13plus, catvfr16plus, catvfr18plus, catvfr8plus, catvfrG, catvfrUnrated): The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
  * cbfcRating `string` (values: cbfcA, cbfcS, cbfcU, cbfcUA, cbfcUnrated): The video's Central Board of Film Certification (CBFC - India) rating.
  * cccRating `string` (values: ccc14, ccc18, ccc18s, ccc18v, ccc6, cccTe, cccUnrated): The video's Consejo de Calificación Cinematográfica (Chile) rating.
  * cceRating `string` (values: cceM12, cceM14, cceM16, cceM18, cceM4, cceM6, cceUnrated): The video's rating from Portugal's Comissão de Classificação de Espect´culos.
  * chfilmRating `string` (values: chfilm0, chfilm12, chfilm16, chfilm18, chfilm6, chfilmUnrated): The video's rating in Switzerland.
  * chvrsRating `string` (values: chvrs14a, chvrs18a, chvrsE, chvrsG, chvrsPg, chvrsR, chvrsUnrated): The video's Canadian Home Video Rating System (CHVRS) rating.
  * cicfRating `string` (values: cicfE, cicfKntEna, cicfKtEa, cicfUnrated): The video's rating from the Commission de Contrôle des Films (Belgium).
  * cnaRating `string` (values: cna12, cna15, cna18, cna18plus, cnaAp, cnaUnrated): The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).
  * cncRating `string` (values: cnc10, cnc12, cnc16, cnc18, cncE, cncT, cncUnrated): Rating system in France - Commission de classification cinematographique
  * csaRating `string` (values: csa10, csa12, csa16, csa18, csaInterdiction, csaT, csaUnrated): The video's rating from France's Conseil supérieur de l?audiovisuel, which rates broadcast content.
  * cscfRating `string` (values: cscf12, cscf16, cscf18, cscf6, cscf9, cscfA, cscfAl, cscfUnrated): The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF).
  * czfilmRating `string` (values: czfilm12, czfilm14, czfilm18, czfilmU, czfilmUnrated): The video's rating in the Czech Republic.
  * djctqRating `string` (values: djctq10, djctq12, djctq14, djctq16, djctq18, djctqL, djctqUnrated): The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.
  * djctqRatingReasons `array`: Reasons that explain why the video received its DJCQT (Brazil) rating.
    * items `string` (values: djctqCriminalActs, djctqDrugs, djctqExplicitSex, djctqExtremeViolence, djctqIllegalDrugs, djctqImpactingContent, djctqInappropriateLanguage, djctqLegalDrugs, djctqNudity, djctqSex, djctqSexualContent, djctqViolence)
  * ecbmctRating `string` (values: ecbmct13a, ecbmct13plus, ecbmct15a, ecbmct15plus, ecbmct18plus, ecbmct7a, ecbmct7plus, ecbmctG, ecbmctUnrated): Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism
  * eefilmRating `string` (values: eefilmK12, eefilmK14, eefilmK16, eefilmK6, eefilmL, eefilmMs12, eefilmMs6, eefilmPere, eefilmUnrated): The video's rating in Estonia.
  * egfilmRating `string` (values: egfilm18, egfilmBn, egfilmGn, egfilmUnrated): The video's rating in Egypt.
  * eirinRating `string` (values: eirinG, eirinPg12, eirinR15plus, eirinR18plus, eirinUnrated): The video's Eirin (映倫) rating. Eirin is the Japanese rating system.
  * fcbmRating `string` (values: fcbm18, fcbm18pa, fcbm18pl, fcbm18sg, fcbm18sx, fcbmP13, fcbmPg13, fcbmU, fcbmUnrated): The video's rating from Malaysia's Film Censorship Board.
  * fcoRating `string` (values: fcoI, fcoIi, fcoIia, fcoIib, fcoIii, fcoUnrated): The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration.
  * fmocRating `string` (values: fmoc10, fmoc12, fmoc16, fmoc18, fmocE, fmocU, fmocUnrated): This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.
  * fpbRating `string` (values: fpb10, fpb1012Pg, fpb13, fpb16, fpb18, fpb79Pg, fpbA, fpbPg, fpbUnrated, fpbX18, fpbXx): The video's rating from South Africa's Film and Publication Board.
  * fpbRatingReasons `array`: Reasons that explain why the video received its FPB (South Africa) rating.
    * items `string` (values: fpbBlasphemy, fpbCriminalTechniques, fpbDrugs, fpbHorror, fpbImitativeActsTechniques, fpbLanguage, fpbNudity, fpbPrejudice, fpbSex, fpbSexualViolence, fpbViolence)
  * fskRating `string` (values: fsk0, fsk12, fsk16, fsk18, fsk6, fskUnrated): The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
  * grfilmRating `string` (values: grfilmE, grfilmK, grfilmK12, grfilmK13, grfilmK15, grfilmK17, grfilmK18, grfilmUnrated): The video's rating in Greece.
  * icaaRating `string` (values: icaa12, icaa13, icaa16, icaa18, icaa7, icaaApta, icaaUnrated, icaaX): The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.
  * ifcoRating `string` (values: ifco12, ifco12a, ifco15, ifco15a, ifco16, ifco18, ifcoG, ifcoPg, ifcoUnrated): The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.
  * ilfilmRating `string` (values: ilfilm12, ilfilm14, ilfilm16, ilfilm18, ilfilmAa, ilfilmUnrated): The video's rating in Israel.
  * incaaRating `string` (values: incaaAtp, incaaC, incaaSam13, incaaSam16, incaaSam18, incaaUnrated): The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.
  * kfcbRating `string` (values: kfcb16plus, kfcbG, kfcbPg, kfcbR, kfcbUnrated): The video's rating from the Kenya Film Classification Board.
  * kijkwijzerRating `string` (values: kijkwijzer12, kijkwijzer16, kijkwijzer18, kijkwijzer6, kijkwijzer9, kijkwijzerAl, kijkwijzerUnrated): voor de Classificatie van Audiovisuele Media (Netherlands).
  * kmrbRating `string` (values: kmrb12plus, kmrb15plus, kmrbAll, kmrbR, kmrbTeenr, kmrbUnrated): The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.
  * lsfRating `string` (values: lsf13, lsf17, lsf21, lsfA, lsfBo, lsfD, lsfR, lsfSu, lsfUnrated): The video's rating from Indonesia's Lembaga Sensor Film.
  * mccaaRating `string` (values: mccaa12, mccaa12a, mccaa14, mccaa15, mccaa16, mccaa18, mccaaPg, mccaaU, mccaaUnrated): The video's rating from Malta's Film Age-Classification Board.
  * mccypRating `string` (values: mccyp11, mccyp15, mccyp7, mccypA, mccypUnrated): The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People.
  * mcstRating `string` (values: mcst0, mcst16plus, mcstC13, mcstC16, mcstC18, mcstGPg, mcstP, mcstUnrated): The video's rating system for Vietnam - MCST
  * mdaRating `string` (values: mdaG, mdaM18, mdaNc16, mdaPg, mdaPg13, mdaR21, mdaUnrated): The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC).
  * medietilsynetRating `string` (values: medietilsynet11, medietilsynet12, medietilsynet15, medietilsynet18, medietilsynet6, medietilsynet7, medietilsynet9, medietilsynetA, medietilsynetUnrated): The video's rating from Medietilsynet, the Norwegian Media Authority.
  * mekuRating `string` (values: meku12, meku16, meku18, meku7, mekuS, mekuUnrated): The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).
  * menaMpaaRating `string` (values: menaMpaaG, menaMpaaPg, menaMpaaPg13, menaMpaaR, menaMpaaUnrated): The rating system for MENA countries, a clone of MPAA. It is needed to
  * mibacRating `string` (values: mibacT, mibacUnrated, mibacVap, mibacVm12, mibacVm14, mibacVm18): The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).
  * mocRating `string` (values: moc12, moc15, moc18, moc7, mocBanned, mocE, mocT, mocUnrated, mocX): The video's Ministerio de Cultura (Colombia) rating.
  * moctwRating `string` (values: moctwG, moctwP, moctwPg, moctwR, moctwR12, moctwR15, moctwUnrated): The video's rating from Taiwan's Ministry of Culture (文化部).
  * mpaaRating `string` (values: mpaaG, mpaaNc17, mpaaPg, mpaaPg13, mpaaR, mpaaUnrated): The video's Motion Picture Association of America (MPAA) rating.
  * mpaatRating `string` (values: mpaatGb, mpaatRb): The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.
  * mtrcbRating `string` (values: mtrcbG, mtrcbPg, mtrcbR13, mtrcbR16, mtrcbR18, mtrcbUnrated, mtrcbX): The video's rating from the Movie and Television Review and Classification Board (Philippines).
  * nbcRating `string` (values: nbc12plus, nbc15plus, nbc18plus, nbc18plusr, nbcG, nbcPg, nbcPu, nbcUnrated): The video's rating from the Maldives National Bureau of Classification.
  * nbcplRating `string` (values: nbcpl18plus, nbcplI, nbcplIi, nbcplIii, nbcplIv, nbcplUnrated): The video's rating in Poland.
  * nfrcRating `string` (values: nfrcA, nfrcB, nfrcC, nfrcD, nfrcUnrated, nfrcX): The video's rating from the Bulgarian National Film Center.
  * nfvcbRating `string` (values: nfvcb12, nfvcb12a, nfvcb15, nfvcb18, nfvcbG, nfvcbPg, nfvcbRe, nfvcbUnrated): The video's rating from Nigeria's National Film and Video Censors Board.
  * nkclvRating `string` (values: nkclv12plus, nkclv18plus, nkclv7plus, nkclvU, nkclvUnrated): The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).
  * oflcRating `string` (values: oflcG, oflcM, oflcPg, oflcR13, oflcR15, oflcR16, oflcR18, oflcRp13, oflcRp16, oflcRp18, oflcUnrated): The video's Office of Film and Literature Classification (OFLC - New Zealand) rating.
  * pefilmRating `string` (values: pefilm14, pefilm18, pefilmPg, pefilmPt, pefilmUnrated): The video's rating in Peru.
  * rcnofRating `string` (values: rcnofI, rcnofIi, rcnofIii, rcnofIv, rcnofUnrated, rcnofV, rcnofVi): The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.
  * resorteviolenciaRating `string` (values: resorteviolenciaA, resorteviolenciaB, resorteviolenciaC, resorteviolenciaD, resorteviolenciaE, resorteviolenciaUnrated): The video's rating in Venezuela.
  * rtcRating `string` (values: rtcA, rtcAa, rtcB, rtcB15, rtcC, rtcD, rtcUnrated): The video's General Directorate of Radio, Television and Cinematography (Mexico) rating.
  * rteRating `string` (values: rteCh, rteGa, rteMa, rtePs, rteUnrated): The video's rating from Ireland's Raidió Teilifís Éireann.
  * russiaRating `string` (values: russia0, russia12, russia16, russia18, russia6, russiaUnrated): The video's National Film Registry of the Russian Federation (MKRF - Russia) rating.
  * skfilmRating `string` (values: skfilmG, skfilmP2, skfilmP5, skfilmP8, skfilmUnrated): The video's rating in Slovakia.
  * smaisRating `string` (values: smais12, smais14, smais16, smais18, smais7, smaisL, smaisUnrated): The video's rating in Iceland.
  * smsaRating `string` (values: smsa11, smsa15, smsa7, smsaA, smsaUnrated): The video's rating from Statens medieråd (Sweden's National Media Council).
  * tvpgRating `string` (values: pg14, tvpgG, tvpgMa, tvpgPg, tvpgUnrated, tvpgY, tvpgY7, tvpgY7Fv): The video's TV Parental Guidelines (TVPG) rating.
  * ytRating `string` (values: ytAgeRestricted): A rating that YouTube uses to identify age-restricted content.

### GeoPoint
* GeoPoint `object`: Geographical coordinates of a point, in WGS84.
  * altitude `number`: Altitude above the reference ellipsoid, in meters.
  * latitude `number`: Latitude in degrees.
  * longitude `number`: Longitude in degrees.

### GuideCategory
* GuideCategory `object`: A guideCategory resource identifies a category that YouTube algorithmically assigns based on a channel's content or other indicators, such as the channel's popularity. The list is similar to video categories, with the difference being that a video's uploader can assign a video category but only YouTube can assign a channel category.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the guide category.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategory".
  * snippet [GuideCategorySnippet](#guidecategorysnippet)

### GuideCategoryListResponse
* GuideCategoryListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of categories that can be associated with YouTube channels. In this map, the category ID is the map key, and its value is the corresponding guideCategory resource.
    * items [GuideCategory](#guidecategory)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategoryListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### GuideCategorySnippet
* GuideCategorySnippet `object`: Basic details about a guide category.
  * channelId `string`
  * title `string`: Description of the guide category.

### I18nLanguage
* I18nLanguage `object`: An i18nLanguage resource identifies a UI language currently supported by YouTube.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the i18n language.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage".
  * snippet [I18nLanguageSnippet](#i18nlanguagesnippet)

### I18nLanguageListResponse
* I18nLanguageListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.
    * items [I18nLanguage](#i18nlanguage)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### I18nLanguageSnippet
* I18nLanguageSnippet `object`: Basic details about an i18n language, such as language code and human-readable name.
  * hl `string`: A short BCP-47 code that uniquely identifies a language.
  * name `string`: The human-readable name of the language in the language itself.

### I18nRegion
* I18nRegion `object`: A i18nRegion resource identifies a region where YouTube is available.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the i18n region.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion".
  * snippet [I18nRegionSnippet](#i18nregionsnippet)

### I18nRegionListResponse
* I18nRegionListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.
    * items [I18nRegion](#i18nregion)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### I18nRegionSnippet
* I18nRegionSnippet `object`: Basic details about an i18n region, such as region code and human-readable name.
  * gl `string`: The region code as a 2-letter ISO country code.
  * name `string`: The human-readable name of the region.

### ImageSettings
* ImageSettings `object`: Branding properties for images associated with the channel.
  * backgroundImageUrl [LocalizedProperty](#localizedproperty)
  * bannerExternalUrl `string`: This is used only in update requests; if it's set, we use this URL to generate all of the above banner URLs.
  * bannerImageUrl `string`: Banner image. Desktop size (1060x175).
  * bannerMobileExtraHdImageUrl `string`: Banner image. Mobile size high resolution (1440x395).
  * bannerMobileHdImageUrl `string`: Banner image. Mobile size high resolution (1280x360).
  * bannerMobileImageUrl `string`: Banner image. Mobile size (640x175).
  * bannerMobileLowImageUrl `string`: Banner image. Mobile size low resolution (320x88).
  * bannerMobileMediumHdImageUrl `string`: Banner image. Mobile size medium/high resolution (960x263).
  * bannerTabletExtraHdImageUrl `string`: Banner image. Tablet size extra high resolution (2560x424).
  * bannerTabletHdImageUrl `string`: Banner image. Tablet size high resolution (2276x377).
  * bannerTabletImageUrl `string`: Banner image. Tablet size (1707x283).
  * bannerTabletLowImageUrl `string`: Banner image. Tablet size low resolution (1138x188).
  * bannerTvHighImageUrl `string`: Banner image. TV size high resolution (1920x1080).
  * bannerTvImageUrl `string`: Banner image. TV size extra high resolution (2120x1192).
  * bannerTvLowImageUrl `string`: Banner image. TV size low resolution (854x480).
  * bannerTvMediumImageUrl `string`: Banner image. TV size medium resolution (1280x720).
  * largeBrandedBannerImageImapScript [LocalizedProperty](#localizedproperty)
  * largeBrandedBannerImageUrl [LocalizedProperty](#localizedproperty)
  * smallBrandedBannerImageImapScript [LocalizedProperty](#localizedproperty)
  * smallBrandedBannerImageUrl [LocalizedProperty](#localizedproperty)
  * trackingImageUrl `string`: The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
  * watchIconImageUrl `string`: The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels.

### IngestionInfo
* IngestionInfo `object`: Describes information necessary for ingesting an RTMP or an HTTP stream.
  * backupIngestionAddress `string`: The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL.
  * ingestionAddress `string`: The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.
  * streamName `string`: The HTTP or RTMP stream name that YouTube assigns to the video stream.

### InvideoBranding
* InvideoBranding `object`
  * imageBytes `string`
  * imageUrl `string`
  * position [InvideoPosition](#invideoposition)
  * targetChannelId `string`
  * timing [InvideoTiming](#invideotiming)

### InvideoPosition
* InvideoPosition `object`: Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.
  * cornerPosition `string` (values: bottomLeft, bottomRight, topLeft, topRight): Describes in which corner of the video the visual widget will appear.
  * type `string` (values: corner): Defines the position type.

### InvideoPromotion
* InvideoPromotion `object`: Describes an invideo promotion campaign consisting of multiple promoted items. A campaign belongs to a single channel_id.
  * defaultTiming [InvideoTiming](#invideotiming)
  * items `array`: List of promoted items in decreasing priority.
    * items [PromotedItem](#promoteditem)
  * position [InvideoPosition](#invideoposition)
  * useSmartTiming `boolean`: Indicates whether the channel's promotional campaign uses "smart timing." This feature attempts to show promotions at a point in the video when they are more likely to be clicked and less likely to disrupt the viewing experience. This feature also picks up a single promotion to show on each video.

### InvideoTiming
* InvideoTiming `object`: Describes a temporal position of a visual widget inside a video.
  * durationMs `string`: Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.
  * offsetMs `string`: Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.
  * type `string` (values: offsetFromEnd, offsetFromStart): Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.

### LanguageTag
* LanguageTag `object`
  * value `string`

### LiveBroadcast
* LiveBroadcast `object`: A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube.
  * contentDetails [LiveBroadcastContentDetails](#livebroadcastcontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the broadcast.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".
  * snippet [LiveBroadcastSnippet](#livebroadcastsnippet)
  * statistics [LiveBroadcastStatistics](#livebroadcaststatistics)
  * status [LiveBroadcastStatus](#livebroadcaststatus)

### LiveBroadcastContentDetails
* LiveBroadcastContentDetails `object`: Detailed settings of a broadcast.
  * boundStreamId `string`: This value uniquely identifies the live stream bound to the broadcast.
  * boundStreamLastUpdateTimeMs `string`: The date and time that the live stream referenced by boundStreamId was last updated.
  * closedCaptionsType `string` (values: closedCaptionsDisabled, closedCaptionsEmbedded, closedCaptionsHttpPost)
  * enableAutoStart `boolean`: This setting indicates whether auto start is enabled for this broadcast.
  * enableClosedCaptions `boolean`: This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST.
  * enableContentEncryption `boolean`: This setting indicates whether YouTube should enable content encryption for the broadcast.
  * enableDvr `boolean`: This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true.
  * enableEmbed `boolean`: This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.
  * enableLowLatency `boolean`: Indicates whether this broadcast has low latency enabled.
  * latencyPreference `string` (values: low, normal, ultraLow): If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.
  * mesh `string`
  * monitorStream [MonitorStreamInfo](#monitorstreaminfo)
  * projection `string` (values: 360, mesh, rectangular): The projection format of this broadcast. This defaults to rectangular.
  * recordFromStart `boolean`: Automatically start recording after the event goes live. The default value for this property is true.
  * startWithSlate `boolean`: This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.
  * stereoLayout `string` (values: left_right, mono, top_bottom)

### LiveBroadcastListResponse
* LiveBroadcastListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of broadcasts that match the request criteria.
    * items [LiveBroadcast](#livebroadcast)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### LiveBroadcastSnippet
* LiveBroadcastSnippet `object`
  * actualEndTime `string`: The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * actualStartTime `string`: The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
  * description `string`: The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.
  * isDefaultBroadcast `boolean`
  * liveChatId `string`: The id of the live chat for this broadcast.
  * publishedAt `string`: The date and time that the broadcast was added to YouTube's live broadcast schedule. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * scheduledEndTime `string`: The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * scheduledStartTime `string`: The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.

### LiveBroadcastStatistics
* LiveBroadcastStatistics `object`: Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
  * concurrentViewers `string`: The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
  * totalChatCount `string`: The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not identify the number of chat messages for an archived video of a completed live broadcast.

### LiveBroadcastStatus
* LiveBroadcastStatus `object`
  * lifeCycleStatus `string` (values: abandoned, complete, completeStarting, created, live, liveStarting, ready, reclaimed, revoked, testStarting, testing): The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.
  * liveBroadcastPriority `string` (values: high, low, normal): Priority of the live broadcast event (internal state).
  * privacyStatus `string` (values: private, public, unlisted, unlisted_new): The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.
  * recordingStatus `string` (values: notRecording, recorded, recording): The broadcast's recording status.

### LiveChatBan
* LiveChatBan `object`: A liveChatBan resource represents a ban for a YouTube live chat.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the ban.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatBan".
  * snippet [LiveChatBanSnippet](#livechatbansnippet)

### LiveChatBanSnippet
* LiveChatBanSnippet `object`
  * banDurationSeconds `string`: The duration of a ban, only filled if the ban has type TEMPORARY.
  * bannedUserDetails [ChannelProfileDetails](#channelprofiledetails)
  * liveChatId `string`: The chat this ban is pertinent to.
  * type `string` (values: permanent, temporary): The type of ban.

### LiveChatFanFundingEventDetails
* LiveChatFanFundingEventDetails `object`
  * amountDisplayString `string`: A rendered string that displays the fund amount and currency to the user.
  * amountMicros `string`: The amount of the fund.
  * currency `string`: The currency in which the fund was made.
  * userComment `string`: The comment added by the user to this fan funding event.

### LiveChatMessage
* LiveChatMessage `object`: A liveChatMessage resource represents a chat message in a YouTube Live Chat.
  * authorDetails [LiveChatMessageAuthorDetails](#livechatmessageauthordetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the message.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage".
  * snippet [LiveChatMessageSnippet](#livechatmessagesnippet)

### LiveChatMessageAuthorDetails
* LiveChatMessageAuthorDetails `object`
  * channelId `string`: The YouTube channel ID.
  * channelUrl `string`: The channel's URL.
  * displayName `string`: The channel's display name.
  * isChatModerator `boolean`: Whether the author is a moderator of the live chat.
  * isChatOwner `boolean`: Whether the author is the owner of the live chat.
  * isChatSponsor `boolean`: Whether the author is a sponsor of the live chat.
  * isVerified `boolean`: Whether the author's identity has been verified by YouTube.
  * profileImageUrl `string`: The channels's avatar URL.

### LiveChatMessageDeletedDetails
* LiveChatMessageDeletedDetails `object`
  * deletedMessageId `string`

### LiveChatMessageListResponse
* LiveChatMessageListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of live chat messages.
    * items [LiveChatMessage](#livechatmessage)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * offlineAt `string`: The date and time when the underlying stream went offline. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * pageInfo [PageInfo](#pageinfo)
  * pollingIntervalMillis `integer`: The amount of time the client should wait before polling again.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### LiveChatMessageRetractedDetails
* LiveChatMessageRetractedDetails `object`
  * retractedMessageId `string`

### LiveChatMessageSnippet
* LiveChatMessageSnippet `object`
  * authorChannelId `string`: The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase
  * displayMessage `string`: Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent.
  * fanFundingEventDetails [LiveChatFanFundingEventDetails](#livechatfanfundingeventdetails)
  * hasDisplayContent `boolean`: Whether the message has display content that should be displayed to users.
  * liveChatId `string`
  * messageDeletedDetails [LiveChatMessageDeletedDetails](#livechatmessagedeleteddetails)
  * messageRetractedDetails [LiveChatMessageRetractedDetails](#livechatmessageretracteddetails)
  * pollClosedDetails [LiveChatPollClosedDetails](#livechatpollcloseddetails)
  * pollEditedDetails [LiveChatPollEditedDetails](#livechatpollediteddetails)
  * pollOpenedDetails [LiveChatPollOpenedDetails](#livechatpollopeneddetails)
  * pollVotedDetails [LiveChatPollVotedDetails](#livechatpollvoteddetails)
  * publishedAt `string`: The date and time when the message was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * superChatDetails [LiveChatSuperChatDetails](#livechatsuperchatdetails)
  * textMessageDetails [LiveChatTextMessageDetails](#livechattextmessagedetails)
  * type `string` (values: chatEndedEvent, fanFundingEvent, messageDeletedEvent, messageRetractedEvent, newSponsorEvent, pollClosedEvent, pollEditedEvent, pollOpenedEvent, pollVotedEvent, sponsorOnlyModeEndedEvent, sponsorOnlyModeStartedEvent, superChatEvent, textMessageEvent, tombstone, userBannedEvent): The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.
  * userBannedDetails [LiveChatUserBannedMessageDetails](#livechatuserbannedmessagedetails)

### LiveChatModerator
* LiveChatModerator `object`: A liveChatModerator resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the moderator.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator".
  * snippet [LiveChatModeratorSnippet](#livechatmoderatorsnippet)

### LiveChatModeratorListResponse
* LiveChatModeratorListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of moderators that match the request criteria.
    * items [LiveChatModerator](#livechatmoderator)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### LiveChatModeratorSnippet
* LiveChatModeratorSnippet `object`
  * liveChatId `string`: The ID of the live chat this moderator can act on.
  * moderatorDetails [ChannelProfileDetails](#channelprofiledetails)

### LiveChatPollClosedDetails
* LiveChatPollClosedDetails `object`
  * pollId `string`: The id of the poll that was closed.

### LiveChatPollEditedDetails
* LiveChatPollEditedDetails `object`
  * id `string`
  * items `array`
    * items [LiveChatPollItem](#livechatpollitem)
  * prompt `string`

### LiveChatPollItem
* LiveChatPollItem `object`
  * description `string`: Plain text description of the item.
  * itemId `string`

### LiveChatPollOpenedDetails
* LiveChatPollOpenedDetails `object`
  * id `string`
  * items `array`
    * items [LiveChatPollItem](#livechatpollitem)
  * prompt `string`

### LiveChatPollVotedDetails
* LiveChatPollVotedDetails `object`
  * itemId `string`: The poll item the user chose.
  * pollId `string`: The poll the user voted on.

### LiveChatSuperChatDetails
* LiveChatSuperChatDetails `object`
  * amountDisplayString `string`: A rendered string that displays the fund amount and currency to the user.
  * amountMicros `string`: The amount purchased by the user, in micros (1,750,000 micros = 1.75).
  * currency `string`: The currency in which the purchase was made.
  * tier `integer`: The tier in which the amount belongs to. Lower amounts belong to lower tiers. Starts at 1.
  * userComment `string`: The comment added by the user to this Super Chat event.

### LiveChatTextMessageDetails
* LiveChatTextMessageDetails `object`
  * messageText `string`: The user's message.

### LiveChatUserBannedMessageDetails
* LiveChatUserBannedMessageDetails `object`
  * banDurationSeconds `string`: The duration of the ban. This property is only present if the banType is temporary.
  * banType `string` (values: permanent, temporary): The type of ban.
  * bannedUserDetails [ChannelProfileDetails](#channelprofiledetails)

### LiveStream
* LiveStream `object`: A live stream describes a live ingestion point.
  * cdn [CdnSettings](#cdnsettings)
  * contentDetails [LiveStreamContentDetails](#livestreamcontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the stream.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".
  * snippet [LiveStreamSnippet](#livestreamsnippet)
  * status [LiveStreamStatus](#livestreamstatus)

### LiveStreamConfigurationIssue
* LiveStreamConfigurationIssue `object`
  * description `string`: The long-form description of the issue and how to resolve it.
  * reason `string`: The short-form reason for this issue.
  * severity `string` (values: error, info, warning): How severe this issue is to the stream.
  * type `string` (values: audioBitrateHigh, audioBitrateLow, audioBitrateMismatch, audioCodec, audioCodecMismatch, audioSampleRate, audioSampleRateMismatch, audioStereoMismatch, audioTooManyChannels, badContainer, bitrateHigh, bitrateLow, frameRateHigh, framerateMismatch, gopMismatch, gopSizeLong, gopSizeOver, gopSizeShort, interlacedVideo, multipleAudioStreams, multipleVideoStreams, noAudioStream, noVideoStream, openGop, resolutionMismatch, videoBitrateMismatch, videoCodec, videoCodecMismatch, videoIngestionFasterThanRealtime, videoIngestionStarved, videoInterlaceMismatch, videoProfileMismatch, videoResolutionSuboptimal, videoResolutionUnsupported): The kind of error happening.

### LiveStreamContentDetails
* LiveStreamContentDetails `object`: Detailed settings of a stream.
  * closedCaptionsIngestionUrl `string`: The ingestion URL where the closed captions of this stream are sent.
  * isReusable `boolean`: Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times.

### LiveStreamHealthStatus
* LiveStreamHealthStatus `object`
  * configurationIssues `array`: The configurations issues on this stream
    * items [LiveStreamConfigurationIssue](#livestreamconfigurationissue)
  * lastUpdateTimeSeconds `string`: The last time this status was updated (in seconds)
  * status `string` (values: bad, good, noData, ok, revoked): The status code of this stream

### LiveStreamListResponse
* LiveStreamListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of live streams that match the request criteria.
    * items [LiveStream](#livestream)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### LiveStreamSnippet
* LiveStreamSnippet `object`
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.
  * description `string`: The stream's description. The value cannot be longer than 10000 characters.
  * isDefaultStream `boolean`
  * publishedAt `string`: The date and time that the stream was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * title `string`: The stream's title. The value must be between 1 and 128 characters long.

### LiveStreamStatus
* LiveStreamStatus `object`: Brief description of the live stream status.
  * healthStatus [LiveStreamHealthStatus](#livestreamhealthstatus)
  * streamStatus `string` (values: active, created, error, inactive, ready)

### LocalizedProperty
* LocalizedProperty `object`
  * default `string`
  * defaultLanguage [LanguageTag](#languagetag)
  * localized `array`
    * items [LocalizedString](#localizedstring)

### LocalizedString
* LocalizedString `object`
  * language `string`
  * value `string`

### MonitorStreamInfo
* MonitorStreamInfo `object`: Settings and Info of the monitor stream
  * broadcastStreamDelayMs `integer`: If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
  * embedHtml `string`: HTML code that embeds a player that plays the monitor stream.
  * enableMonitorStream `boolean`: This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints.

### Nonprofit
* Nonprofit `object`: Nonprofit information.
  * nonprofitId [NonprofitId](#nonprofitid)
  * nonprofitLegalName `string`: Legal name of the nonprofit.

### NonprofitId
* NonprofitId `object`
  * value `string`

### PageInfo
* PageInfo `object`: Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
  * resultsPerPage `integer`: The number of results included in the API response.
  * totalResults `integer`: The total number of results in the result set.

### Playlist
* Playlist `object`: A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.
  * contentDetails [PlaylistContentDetails](#playlistcontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the playlist.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".
  * localizations `object`: Localizations for different languages
  * player [PlaylistPlayer](#playlistplayer)
  * snippet [PlaylistSnippet](#playlistsnippet)
  * status [PlaylistStatus](#playliststatus)

### PlaylistContentDetails
* PlaylistContentDetails `object`
  * itemCount `integer`: The number of videos in the playlist.

### PlaylistItem
* PlaylistItem `object`: A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.
  * contentDetails [PlaylistItemContentDetails](#playlistitemcontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the playlist item.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".
  * snippet [PlaylistItemSnippet](#playlistitemsnippet)
  * status [PlaylistItemStatus](#playlistitemstatus)

### PlaylistItemContentDetails
* PlaylistItemContentDetails `object`
  * endAt `string`: The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video.
  * note `string`: A user-generated note for this item.
  * startAt `string`: The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.
  * videoId `string`: The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.
  * videoPublishedAt `string`: The date and time that the video was published to YouTube. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.

### PlaylistItemListResponse
* PlaylistItemListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of playlist items that match the request criteria.
    * items [PlaylistItem](#playlistitem)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### PlaylistItemSnippet
* PlaylistItemSnippet `object`: Basic details about a playlist, including title, description and thumbnails.
  * channelId `string`: The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
  * channelTitle `string`: Channel title for the channel that the playlist item belongs to.
  * description `string`: The item's description.
  * playlistId `string`: The ID that YouTube uses to uniquely identify the playlist that the playlist item is in.
  * position `integer`: The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
  * publishedAt `string`: The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * resourceId [ResourceId](#resourceid)
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The item's title.

### PlaylistItemStatus
* PlaylistItemStatus `object`: Information about the playlist item's privacy status.
  * privacyStatus `string` (values: private, public, unlisted, unlisted_new): This resource's privacy status.

### PlaylistListResponse
* PlaylistListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of playlists that match the request criteria.
    * items [Playlist](#playlist)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### PlaylistLocalization
* PlaylistLocalization `object`: Playlist localization setting
  * description `string`: The localized strings for playlist's description.
  * title `string`: The localized strings for playlist's title.

### PlaylistPlayer
* PlaylistPlayer `object`
  * embedHtml `string`: An <iframe> tag that embeds a player that will play the playlist.

### PlaylistSnippet
* PlaylistSnippet `object`: Basic details about a playlist, including title, description and thumbnails.
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that published the playlist.
  * channelTitle `string`: The channel title of the channel that the video belongs to.
  * defaultLanguage `string`: The language of the playlist's default title and description.
  * description `string`: The playlist's description.
  * localized [PlaylistLocalization](#playlistlocalization)
  * publishedAt `string`: The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * tags `array`: Keyword tags associated with the playlist.
    * items `string`
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The playlist's title.

### PlaylistStatus
* PlaylistStatus `object`
  * privacyStatus `string` (values: private, public, unlisted, unlisted_new): The playlist's privacy status.

### PromotedItem
* PromotedItem `object`: Describes a single promoted item.
  * customMessage `string`: A custom message to display for this promotion. This field is currently ignored unless the promoted item is a website.
  * id [PromotedItemId](#promoteditemid)
  * promotedByContentOwner `boolean`: If true, the content owner's name will be used when displaying the promotion. This field can only be set when the update is made on behalf of the content owner.
  * timing [InvideoTiming](#invideotiming)

### PromotedItemId
* PromotedItemId `object`: Describes a single promoted item id. It is a union of various possible types.
  * recentlyUploadedBy `string`: If type is recentUpload, this field identifies the channel from which to take the recent upload. If missing, the channel is assumed to be the same channel for which the invideoPromotion is set.
  * type `string` (values: recentUpload, video, website): Describes the type of the promoted item.
  * videoId `string`: If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if type has the value video.
  * websiteUrl `string`: If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if type has the value website.

### PropertyValue
* PropertyValue `object`: A pair Property / Value.
  * property `string`: A property.
  * value `string`: The property's value.

### ResourceId
* ResourceId `object`: A resource id is a generic reference that points to another YouTube resource.
  * channelId `string`: The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.
  * kind `string`: The type of the API resource.
  * playlistId `string`: The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.
  * videoId `string`: The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.

### SearchListResponse
* SearchListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of results that match the search criteria.
    * items [SearchResult](#searchresult)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * regionCode `string`
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### SearchResult
* SearchResult `object`: A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
  * etag `string`: Etag of this resource.
  * id [ResourceId](#resourceid)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult".
  * snippet [SearchResultSnippet](#searchresultsnippet)

### SearchResultSnippet
* SearchResultSnippet `object`: Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
  * channelId `string`: The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
  * channelTitle `string`: The title of the channel that published the resource that the search result identifies.
  * description `string`: A description of the search result.
  * liveBroadcastContent `string` (values: live, none, upcoming): It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts.
  * publishedAt `string`: The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The title of the search result.

### Sponsor
* Sponsor `object`: A sponsor resource represents a sponsor for a YouTube channel. A sponsor provides recurring monetary support to a creator and receives special benefits.
  * etag `string`: Etag of this resource.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#sponsor".
  * snippet [SponsorSnippet](#sponsorsnippet)

### SponsorListResponse
* SponsorListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of sponsors that match the request criteria.
    * items [Sponsor](#sponsor)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#sponsorListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### SponsorSnippet
* SponsorSnippet `object`
  * channelId `string`: The id of the channel being sponsored.
  * cumulativeDurationMonths `integer`: The cumulative time a user has been a sponsor in months.
  * sponsorDetails [ChannelProfileDetails](#channelprofiledetails)
  * sponsorSince `string`: The date and time when the user became a sponsor. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.

### Subscription
* Subscription `object`: A subscription resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
  * contentDetails [SubscriptionContentDetails](#subscriptioncontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the subscription.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".
  * snippet [SubscriptionSnippet](#subscriptionsnippet)
  * subscriberSnippet [SubscriptionSubscriberSnippet](#subscriptionsubscribersnippet)

### SubscriptionContentDetails
* SubscriptionContentDetails `object`: Details about the content to witch a subscription refers.
  * activityType `string` (values: all, uploads): The type of activity this subscription is for (only uploads, everything).
  * newItemCount `integer`: The number of new items in the subscription since its content was last read.
  * totalItemCount `integer`: The approximate number of items that the subscription points to.

### SubscriptionListResponse
* SubscriptionListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of subscriptions that match the request criteria.
    * items [Subscription](#subscription)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### SubscriptionSnippet
* SubscriptionSnippet `object`: Basic details about a subscription, including title, description and thumbnails of the subscribed item.
  * channelId `string`: The ID that YouTube uses to uniquely identify the subscriber's channel.
  * channelTitle `string`: Channel title for the channel that the subscription belongs to.
  * description `string`: The subscription's details.
  * publishedAt `string`: The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * resourceId [ResourceId](#resourceid)
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The subscription's title.

### SubscriptionSubscriberSnippet
* SubscriptionSubscriberSnippet `object`: Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
  * channelId `string`: The channel ID of the subscriber.
  * description `string`: The description of the subscriber.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The title of the subscriber.

### SuperChatEvent
* SuperChatEvent `object`: A superChatEvent resource represents a Super Chat purchase on a YouTube channel.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the Super Chat event.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEvent".
  * snippet [SuperChatEventSnippet](#superchateventsnippet)

### SuperChatEventListResponse
* SuperChatEventListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of Super Chat purchases that match the request criteria.
    * items [SuperChatEvent](#superchatevent)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### SuperChatEventSnippet
* SuperChatEventSnippet `object`
  * amountMicros `string`: The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.
  * channelId `string`: Channel id where the event occurred.
  * commentText `string`: The text contents of the comment left by the user.
  * createdAt `string`: The date and time when the event occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * currency `string`: The currency in which the purchase was made. ISO 4217.
  * displayString `string`: A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language.
  * isSuperChatForGood `boolean`: True if this event is a Super Chat for Good purchase.
  * messageType `integer`: The tier for the paid message, which is based on the amount of money spent to purchase the message.
  * nonprofit [Nonprofit](#nonprofit)
  * supporterDetails [ChannelProfileDetails](#channelprofiledetails)

### Thumbnail
* Thumbnail `object`: A thumbnail is an image representing a YouTube resource.
  * height `integer`: (Optional) Height of the thumbnail image.
  * url `string`: The thumbnail image's URL.
  * width `integer`: (Optional) Width of the thumbnail image.

### ThumbnailDetails
* ThumbnailDetails `object`: Internal representation of thumbnails for a YouTube resource.
  * default [Thumbnail](#thumbnail)
  * high [Thumbnail](#thumbnail)
  * maxres [Thumbnail](#thumbnail)
  * medium [Thumbnail](#thumbnail)
  * standard [Thumbnail](#thumbnail)

### ThumbnailSetResponse
* ThumbnailSetResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of thumbnails.
    * items [ThumbnailDetails](#thumbnaildetails)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### TokenPagination
* TokenPagination `object`: Stub token pagination template to suppress results.

### Video
* Video `object`: A video resource represents a YouTube video.
  * ageGating [VideoAgeGating](#videoagegating)
  * contentDetails [VideoContentDetails](#videocontentdetails)
  * etag `string`: Etag of this resource.
  * fileDetails [VideoFileDetails](#videofiledetails)
  * id `string`: The ID that YouTube uses to uniquely identify the video.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#video".
  * liveStreamingDetails [VideoLiveStreamingDetails](#videolivestreamingdetails)
  * localizations `object`: List with all localizations.
  * monetizationDetails [VideoMonetizationDetails](#videomonetizationdetails)
  * player [VideoPlayer](#videoplayer)
  * processingDetails [VideoProcessingDetails](#videoprocessingdetails)
  * projectDetails [VideoProjectDetails](#videoprojectdetails)
  * recordingDetails [VideoRecordingDetails](#videorecordingdetails)
  * snippet [VideoSnippet](#videosnippet)
  * statistics [VideoStatistics](#videostatistics)
  * status [VideoStatus](#videostatus)
  * suggestions [VideoSuggestions](#videosuggestions)
  * topicDetails [VideoTopicDetails](#videotopicdetails)

### VideoAbuseReport
* VideoAbuseReport `object`
  * comments `string`: Additional comments regarding the abuse report.
  * language `string`: The language that the content was viewed in.
  * reasonId `string`: The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.
  * secondaryReasonId `string`: The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.
  * videoId `string`: The ID that YouTube uses to uniquely identify the video.

### VideoAbuseReportReason
* VideoAbuseReportReason `object`: A videoAbuseReportReason resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with video.ReportAbuse.
  * etag `string`: Etag of this resource.
  * id `string`: The ID of this abuse report reason.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReason".
  * snippet [VideoAbuseReportReasonSnippet](#videoabusereportreasonsnippet)

### VideoAbuseReportReasonListResponse
* VideoAbuseReportReasonListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of valid abuse reasons that are used with video.ReportAbuse.
    * items [VideoAbuseReportReason](#videoabusereportreason)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReasonListResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### VideoAbuseReportReasonSnippet
* VideoAbuseReportReasonSnippet `object`: Basic details about a video category, such as its localized title.
  * label `string`: The localized label belonging to this abuse report reason.
  * secondaryReasons `array`: The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)
    * items [VideoAbuseReportSecondaryReason](#videoabusereportsecondaryreason)

### VideoAbuseReportSecondaryReason
* VideoAbuseReportSecondaryReason `object`
  * id `string`: The ID of this abuse report secondary reason.
  * label `string`: The localized label for this abuse report secondary reason.

### VideoAgeGating
* VideoAgeGating `object`
  * alcoholContent `boolean`: Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.
  * restricted `boolean`: Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present.
  * videoGameRating `string` (values: anyone, m15Plus, m16Plus, m17Plus): Video game rating, if any.

### VideoCategory
* VideoCategory `object`: A videoCategory resource identifies a category that has been or could be associated with uploaded videos.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the video category.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory".
  * snippet [VideoCategorySnippet](#videocategorysnippet)

### VideoCategoryListResponse
* VideoCategoryListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.
    * items [VideoCategory](#videocategory)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### VideoCategorySnippet
* VideoCategorySnippet `object`: Basic details about a video category, such as its localized title.
  * assignable `boolean`
  * channelId `string`: The YouTube channel that created the video category.
  * title `string`: The video category's title.

### VideoContentDetails
* VideoContentDetails `object`: Details about the content of a YouTube Video.
  * caption `string` (values: false, true): The value of captions indicates whether the video has captions or not.
  * contentRating [ContentRating](#contentrating)
  * countryRestriction [AccessPolicy](#accesspolicy)
  * definition `string` (values: hd, sd): The value of definition indicates whether the video is available in high definition or only in standard definition.
  * dimension `string`: The value of dimension indicates whether the video is available in 3D or in 2D.
  * duration `string`: The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.
  * hasCustomThumbnail `boolean`: Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
  * licensedContent `boolean`: The value of is_license_content indicates whether the video is licensed content.
  * projection `string` (values: 360, rectangular): Specifies the projection format of the video.
  * regionRestriction [VideoContentDetailsRegionRestriction](#videocontentdetailsregionrestriction)

### VideoContentDetailsRegionRestriction
* VideoContentDetailsRegionRestriction `object`: DEPRECATED Region restriction of the video.
  * allowed `array`: A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
    * items `string`
  * blocked `array`: A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.
    * items `string`

### VideoFileDetails
* VideoFileDetails `object`: Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
  * audioStreams `array`: A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
    * items [VideoFileDetailsAudioStream](#videofiledetailsaudiostream)
  * bitrateBps `string`: The uploaded video file's combined (video and audio) bitrate in bits per second.
  * container `string`: The uploaded video file's container format.
  * creationTime `string`: The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:  
  * durationMs `string`: The length of the uploaded video in milliseconds.
  * fileName `string`: The uploaded file's name. This field is present whether a video file or another type of file was uploaded.
  * fileSize `string`: The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.
  * fileType `string` (values: archive, audio, document, image, other, project, video): The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
  * videoStreams `array`: A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
    * items [VideoFileDetailsVideoStream](#videofiledetailsvideostream)

### VideoFileDetailsAudioStream
* VideoFileDetailsAudioStream `object`: Information about an audio stream.
  * bitrateBps `string`: The audio stream's bitrate, in bits per second.
  * channelCount `integer`: The number of audio channels that the stream contains.
  * codec `string`: The audio codec that the stream uses.
  * vendor `string`: A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.

### VideoFileDetailsVideoStream
* VideoFileDetailsVideoStream `object`: Information about a video stream.
  * aspectRatio `number`: The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
  * bitrateBps `string`: The video stream's bitrate, in bits per second.
  * codec `string`: The video codec that the stream uses.
  * frameRateFps `number`: The video stream's frame rate, in frames per second.
  * heightPixels `integer`: The encoded video content's height in pixels.
  * rotation `string` (values: clockwise, counterClockwise, none, other, upsideDown): The amount that YouTube needs to rotate the original source content to properly display the video.
  * vendor `string`: A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
  * widthPixels `integer`: The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.

### VideoGetRatingResponse
* VideoGetRatingResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of ratings that match the request criteria.
    * items [VideoRating](#videorating)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### VideoListResponse
* VideoListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of videos that match the request criteria.
    * items [Video](#video)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### VideoLiveStreamingDetails
* VideoLiveStreamingDetails `object`: Details about the live streaming metadata.
  * activeLiveChatId `string`: The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page.
  * actualEndTime `string`: The time that the broadcast actually ended. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast is over.
  * actualStartTime `string`: The time that the broadcast actually started. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast begins.
  * concurrentViewers `string`: The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
  * scheduledEndTime `string`: The time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.
  * scheduledStartTime `string`: The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.

### VideoLocalization
* VideoLocalization `object`: Localized versions of certain video properties (e.g. title).
  * description `string`: Localized version of the video's description.
  * title `string`: Localized version of the video's title.

### VideoMonetizationDetails
* VideoMonetizationDetails `object`: Details about monetization of a YouTube Video.
  * access [AccessPolicy](#accesspolicy)

### VideoPlayer
* VideoPlayer `object`: Player to be used for a video playback.
  * embedHeight `string`
  * embedHtml `string`: An <iframe> tag that embeds a player that will play the video.
  * embedWidth `string`: The embed width

### VideoProcessingDetails
* VideoProcessingDetails `object`: Describes processing status and progress and availability of some other Video resource parts.
  * editorSuggestionsAvailability `string`: This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
  * fileDetailsAvailability `string`: This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request.
  * processingFailureReason `string` (values: other, streamingFailed, transcodeFailed, uploadFailed): The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.
  * processingIssuesAvailability `string`: This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
  * processingProgress [VideoProcessingDetailsProcessingProgress](#videoprocessingdetailsprocessingprogress)
  * processingStatus `string` (values: failed, processing, succeeded, terminated): The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
  * tagSuggestionsAvailability `string`: This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
  * thumbnailsAvailability `string`: This value indicates whether thumbnail images have been generated for the video.

### VideoProcessingDetailsProcessingProgress
* VideoProcessingDetailsProcessingProgress `object`: Video processing progress and completion time estimate.
  * partsProcessed `string`: The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating:
  * partsTotal `string`: An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
  * timeLeftMs `string`: An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.

### VideoProjectDetails
* VideoProjectDetails `object`: Project specific details about the content of a YouTube Video.
  * tags `array`: A list of project tags associated with the video during the upload.
    * items `string`

### VideoRating
* VideoRating `object`
  * rating `string` (values: dislike, like, none, unspecified)
  * videoId `string`

### VideoRecordingDetails
* VideoRecordingDetails `object`: Recording information associated with the video.
  * location [GeoPoint](#geopoint)
  * locationDescription `string`: The text description of the location where the video was recorded.
  * recordingDate `string`: The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.

### VideoSnippet
* VideoSnippet `object`: Basic details about a video, including title, description, uploader, thumbnails and category.
  * categoryId `string`: The YouTube video category associated with the video.
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
  * channelTitle `string`: Channel title for the channel that the video belongs to.
  * defaultAudioLanguage `string`: The default_audio_language property specifies the language spoken in the video's default audio track.
  * defaultLanguage `string`: The language of the videos's default snippet.
  * description `string`: The video's description.
  * liveBroadcastContent `string` (values: live, none, upcoming): Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.
  * localized [VideoLocalization](#videolocalization)
  * publishedAt `string`: The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * tags `array`: A list of keyword tags associated with the video. Tags may contain spaces.
    * items `string`
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The video's title.

### VideoStatistics
* VideoStatistics `object`: Statistics about the video, such as the number of times the video was viewed or liked.
  * commentCount `string`: The number of comments for the video.
  * dislikeCount `string`: The number of users who have indicated that they disliked the video by giving it a negative rating.
  * favoriteCount `string`: The number of users who currently have the video marked as a favorite video.
  * likeCount `string`: The number of users who have indicated that they liked the video by giving it a positive rating.
  * viewCount `string`: The number of times the video has been viewed.

### VideoStatus
* VideoStatus `object`: Basic details about a video category, such as its localized title.
  * embeddable `boolean`: This value indicates if the video can be embedded on another website.
  * failureReason `string` (values: codec, conversion, emptyFile, invalidFile, tooSmall, uploadAborted): This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
  * license `string` (values: creativeCommon, youtube): The video's license.
  * privacyStatus `string` (values: private, public, unlisted, unlisted_new): The video's privacy status.
  * publicStatsViewable `boolean`: This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled.
  * publishAt `string`: The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
  * rejectionReason `string` (values: claim, copyright, duplicate, inappropriate, legal, length, termsOfUse, trademark, uploaderAccountClosed, uploaderAccountSuspended): This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
  * uploadStatus `string` (values: deleted, failed, processed, rejected, uploaded): The status of the uploaded video.

### VideoSuggestions
* VideoSuggestions `object`: Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
  * editorSuggestions `array`: A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
    * items `string` (values: audioQuietAudioSwap, videoAutoLevels, videoCrop, videoStabilize)
  * processingErrors `array`: A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.
    * items `string` (values: archiveFile, audioFile, docFile, imageFile, notAVideoFile, projectFile, unsupportedSpatialAudioLayout)
  * processingHints `array`: A list of suggestions that may improve YouTube's ability to process the video.
    * items `string` (values: hdrVideo, nonStreamableMov, sendBestQualityVideo, spatialAudio, sphericalVideo, vrVideo)
  * processingWarnings `array`: A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
    * items `string` (values: hasEditlist, inconsistentResolution, problematicAudioCodec, problematicHdrLookupTable, problematicVideoCodec, unknownAudioCodec, unknownContainer, unknownVideoCodec, unsupportedHdrColorMetadata, unsupportedHdrPixelFormat, unsupportedSphericalProjectionType, unsupportedVrStereoMode)
  * tagSuggestions `array`: A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
    * items [VideoSuggestionsTagSuggestion](#videosuggestionstagsuggestion)

### VideoSuggestionsTagSuggestion
* VideoSuggestionsTagSuggestion `object`: A single tag suggestion with it's relevance information.
  * categoryRestricts `array`: A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
    * items `string`
  * tag `string`: The keyword tag suggested for the video.

### VideoTopicDetails
* VideoTopicDetails `object`: Freebase topic information related to the video.
  * relevantTopicIds `array`: Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.
    * items `string`
  * topicCategories `array`: A list of Wikipedia URLs that provide a high-level description of the video's content.
    * items `string`
  * topicIds `array`: A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the Freebase Topic API.
    * items `string`

### WatchSettings
* WatchSettings `object`: Branding properties for the watch. All deprecated.
  * backgroundColor `string`: The text color for the video watch page's branded area.
  * featuredPlaylistId `string`: An ID that uniquely identifies a playlist that displays next to the video player.
  * textColor `string`: The background color for the video watch page's branded area.


