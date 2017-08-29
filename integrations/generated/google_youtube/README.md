# @datafire/google_youtube

Client library for YouTube Data

## Installation and Usage
```bash
npm install --save datafire @datafire/google_youtube
```

```js
let datafire = require('datafire');
let google_youtube = require('@datafire/google_youtube').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_youtube.videos.reportAbuse({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_youtube.oauthRefresh(null, context)
```


### activities.list
Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.


```js
google_youtube.activities.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.
* channelId (string) - The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
* home (boolean) - Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* mine (boolean) - Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* publishedAfter (string) - The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
* publishedBefore (string) - The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
* regionCode (string) - The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### activities.insert
Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)

Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.


```js
google_youtube.activities.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* body (object) - An activity resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### captions.delete
Deletes a specified caption track.


```js
google_youtube.captions.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.
* onBehalfOf (string) - ID of the Google+ Page for the channel that the request is be on behalf of
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### captions.list
Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.


```js
google_youtube.captions.list({
  "part": "",
  "videoId": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
* videoId (string) **required** - The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
* id (string) - The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.
* onBehalfOf (string) - ID of the Google+ Page for the channel that the request is on behalf of.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### captions.insert
Uploads a caption track.


```js
google_youtube.captions.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
* onBehalfOf (string) - ID of the Google+ Page for the channel that the request is be on behalf of
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* sync (boolean) - The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.
* body (object) - A caption resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### captions.update
Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.


```js
google_youtube.captions.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.
* onBehalfOf (string) - ID of the Google+ Page for the channel that the request is be on behalf of
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* sync (boolean) - Note: The API server only processes the parameter value if the request contains an updated caption file.
* body (object) - A caption resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### captions.download
Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.


```js
google_youtube.captions.download({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.
* onBehalfOf (string) - ID of the Google+ Page for the channel that the request is be on behalf of
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* tfmt (string) - The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format.
* tlang (string) - The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channelBanners.insert
Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:

- Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
- Extract the url property's value from the response that the API returns for step 1.
- Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.


```js
google_youtube.channelBanners.insert({}, context)
```

#### Parameters
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A channel banner returned as the response to a channel_banner.insert call.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channelSections.delete
Deletes a channelSection.


```js
google_youtube.channelSections.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channelSections.list
Returns channelSection resources that match the API request criteria.


```js
google_youtube.channelSections.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.
* channelId (string) - The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
* hl (string) - The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the channelSections.insert or channelSections.update method.
* id (string) - The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
* mine (boolean) - Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channelSections.insert
Adds a channelSection for the authenticated user's channel.


```js
google_youtube.channelSections.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channelSections.update
Update a channelSection.


```js
google_youtube.channelSections.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channels.list
Returns a collection of zero or more channel resources that match the request criteria.


```js
google_youtube.channels.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.
* categoryId (string) - The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
* forUsername (string) - The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
* hl (string) - The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.
* id (string) - The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
* managedByMe (boolean) - Note: This parameter is intended exclusively for YouTube content partners.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* mine (boolean) - Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
* mySubscribers (boolean) - Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channels.update
Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.


```js
google_youtube.channels.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
* body (object) - A channel resource contains information about a YouTube channel.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### commentThreads.list
Returns a list of comment threads that match the API request parameters.


```js
google_youtube.commentThreads.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
* allThreadsRelatedToChannelId (string) - The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.
* channelId (string) - The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)
* id (string) - The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* moderationStatus (string) - Set this parameter to limit the returned comment threads to a particular moderation state.
* order (string) - The order parameter specifies the order in which the API response should list comment threads. Valid values are: 
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
* searchTerms (string) - The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.
* textFormat (string) - Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.
* videoId (string) - The videoId parameter instructs the API to return comment threads associated with the specified video ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### commentThreads.insert
Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.


```js
google_youtube.commentThreads.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
* body (object) - A comment thread represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### commentThreads.update
Modifies the top-level comment in a comment thread.


```js
google_youtube.commentThreads.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
* body (object) - A comment thread represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.delete
Deletes a comment.


```js
google_youtube.comments.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the comment ID for the resource that is being deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.list
Returns a list of comments that match the API request parameters.


```js
google_youtube.comments.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
* id (string) - The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
* parentId (string) - The parentId parameter specifies the ID of the comment for which replies should be retrieved.
* textFormat (string) - This parameter indicates whether the API should return comments formatted as HTML or as plain text.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.insert
Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.


```js
google_youtube.comments.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
* body (object) - A comment represents a single YouTube comment.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.update
Modifies a comment.


```js
google_youtube.comments.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
* body (object) - A comment represents a single YouTube comment.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.markAsSpam
Expresses the caller's opinion that one or more comments should be flagged as spam.


```js
google_youtube.comments.markAsSpam({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.setModerationStatus
Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.


```js
google_youtube.comments.setModerationStatus({
  "id": "",
  "moderationStatus": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.
* moderationStatus (string) **required** - Identifies the new moderation status of the specified comments.
* banAuthor (boolean) - The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### fanFundingEvents.list
Lists fan funding events for a channel.


```js
google_youtube.fanFundingEvents.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the fanFundingEvent resource parts that the API response will include. Supported values are id and snippet.
* hl (string) - The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### guideCategories.list
Returns a list of categories that can be associated with YouTube channels.


```js
google_youtube.guideCategories.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.
* hl (string) - The hl parameter specifies the language that will be used for text values in the API response.
* id (string) - The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
* regionCode (string) - The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### i18nLanguages.list
Returns a list of application languages that the YouTube website supports.


```js
google_youtube.i18nLanguages.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
* hl (string) - The hl parameter specifies the language that should be used for text values in the API response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### i18nRegions.list
Returns a list of content regions that the YouTube website supports.


```js
google_youtube.i18nRegions.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
* hl (string) - The hl parameter specifies the language that should be used for text values in the API response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveBroadcasts.delete
Deletes a broadcast.


```js
google_youtube.liveBroadcasts.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveBroadcasts.list
Returns a list of YouTube broadcasts that match the API request parameters.


```js
google_youtube.liveBroadcasts.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
* broadcastStatus (string) - The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
* broadcastType (string) - The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter for now.
* id (string) - The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* mine (boolean) - The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveBroadcasts.insert
Creates a broadcast.


```js
google_youtube.liveBroadcasts.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveBroadcasts.update
Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.


```js
google_youtube.liveBroadcasts.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveBroadcasts.bind
Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.


```js
google_youtube.liveBroadcasts.bind({
  "id": "",
  "part": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
* part (string) **required** - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* streamId (string) - The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveBroadcasts.control
Controls the settings for a slate that can be displayed in the broadcast stream.


```js
google_youtube.liveBroadcasts.control({
  "id": "",
  "part": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
* part (string) **required** - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
* displaySlate (boolean) - The displaySlate parameter specifies whether the slate is being enabled or disabled.
* offsetTimeMs (string) - The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* walltime (string) - The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveBroadcasts.transition
Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.


```js
google_youtube.liveBroadcasts.transition({
  "broadcastStatus": "",
  "id": "",
  "part": ""
}, context)
```

#### Parameters
* broadcastStatus (string) **required** - The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
* id (string) **required** - The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
* part (string) **required** - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatBans.delete
Removes a chat ban.


```js
google_youtube.liveChatBans.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatBans.insert
Adds a new ban to the chat.


```js
google_youtube.liveChatBans.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
* body (object) - A liveChatBan resource represents a ban for a YouTube live chat.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatMessages.delete
Deletes a chat message.


```js
google_youtube.liveChatMessages.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube chat message ID of the resource that is being deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatMessages.list
Lists live chat messages for a specific chat.


```js
google_youtube.liveChatMessages.list({
  "liveChatId": "",
  "part": ""
}, context)
```

#### Parameters
* liveChatId (string) **required** - The liveChatId parameter specifies the ID of the chat whose messages will be returned.
* part (string) **required** - The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
* hl (string) - The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
* maxResults (integer) - The maxResults parameter specifies the maximum number of messages that should be returned in the result set.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
* profileImageSize (integer) - The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatMessages.insert
Adds a message to a live chat.


```js
google_youtube.liveChatMessages.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
* body (object) - A liveChatMessage resource represents a chat message in a YouTube Live Chat.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatModerators.delete
Removes a chat moderator.


```js
google_youtube.liveChatModerators.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatModerators.list
Lists moderators for a live chat.


```js
google_youtube.liveChatModerators.list({
  "liveChatId": "",
  "part": ""
}, context)
```

#### Parameters
* liveChatId (string) **required** - The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.
* part (string) **required** - The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveChatModerators.insert
Adds a new moderator for the chat.


```js
google_youtube.liveChatModerators.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
* body (object) - A liveChatModerator resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveStreams.delete
Deletes a video stream.


```js
google_youtube.liveStreams.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveStreams.list
Returns a list of video streams that match the API request parameters.


```js
google_youtube.liveStreams.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
* id (string) - The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* mine (boolean) - The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveStreams.insert
Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.


```js
google_youtube.liveStreams.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A live stream describes a live ingestion point.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### liveStreams.update
Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.


```js
google_youtube.liveStreams.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A live stream describes a live ingestion point.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlistItems.delete
Deletes a playlist item.


```js
google_youtube.playlistItems.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlistItems.list
Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.


```js
google_youtube.playlistItems.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.
* id (string) - The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* playlistId (string) - The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
* videoId (string) - The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlistItems.insert
Adds a resource to a playlist.


```js
google_youtube.playlistItems.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlistItems.update
Modifies a playlist item. For example, you could update the item's position in the playlist.


```js
google_youtube.playlistItems.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlists.delete
Deletes a playlist.


```js
google_youtube.playlists.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlists.list
Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.


```js
google_youtube.playlists.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.
* channelId (string) - This value indicates that the API should only return the specified channel's playlists.
* hl (string) - The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.
* id (string) - The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* mine (boolean) - Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlists.insert
Creates a playlist.


```js
google_youtube.playlists.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### playlists.update
Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.


```js
google_youtube.playlists.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### search.list
Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.


```js
google_youtube.search.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
* channelId (string) - The channelId parameter indicates that the API response should only contain resources created by the channel
* channelType (string) - The channelType parameter lets you restrict a search to a particular type of channel.
* eventType (string) - The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
* forContentOwner (boolean) - Note: This parameter is intended exclusively for YouTube content partners.
* forDeveloper (boolean) - The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.
* forMine (boolean) - The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
* location (string) - The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).
* locationRadius (string) - The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* order (string) - The order parameter specifies the method that will be used to order resources in the API response.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* publishedAfter (string) - The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
* publishedBefore (string) - The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
* q (string) - The q parameter specifies the query term to search for.
* regionCode (string) - The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
* relatedToVideoId (string) - The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
* relevanceLanguage (string) - The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.
* safeSearch (string) - The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
* topicId (string) - The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
* type (string) - The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
* videoCaption (string) - The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoCategoryId (string) - The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoDefinition (string) - The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoDimension (string) - The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoDuration (string) - The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoEmbeddable (string) - The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoLicense (string) - The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoSyndicated (string) - The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
* videoType (string) - The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sponsors.list
Lists sponsors for a channel.


```js
google_youtube.sponsors.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
* filter (string) - The filter parameter specifies which channel sponsors to return.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subscriptions.delete
Deletes a subscription.


```js
google_youtube.subscriptions.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subscriptions.list
Returns subscription resources that match the API request criteria.


```js
google_youtube.subscriptions.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.
* channelId (string) - The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
* forChannelId (string) - The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
* id (string) - The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* mine (boolean) - Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
* myRecentSubscribers (boolean) - Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
* mySubscribers (boolean) - Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* order (string) - The order parameter specifies the method that will be used to sort resources in the API response.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subscriptions.insert
Adds a subscription for the authenticated user's channel.


```js
google_youtube.subscriptions.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* body (object) - A subscription resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### superChatEvents.list
Lists Super Chat events for a channel.


```js
google_youtube.superChatEvents.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
* hl (string) - The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### thumbnails.set
Uploads a custom video thumbnail to YouTube and sets it for a video.


```js
google_youtube.thumbnails.set({
  "videoId": ""
}, context)
```

#### Parameters
* videoId (string) **required** - The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videoAbuseReportReasons.list
Returns a list of abuse reasons that can be used for reporting abusive videos.


```js
google_youtube.videoAbuseReportReasons.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
* hl (string) - The hl parameter specifies the language that should be used for text values in the API response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videoCategories.list
Returns a list of categories that can be associated with YouTube videos.


```js
google_youtube.videoCategories.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
* hl (string) - The hl parameter specifies the language that should be used for text values in the API response.
* id (string) - The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
* regionCode (string) - The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videos.delete
Deletes a YouTube video.


```js
google_youtube.videos.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videos.list
Returns a list of videos that match the API request parameters.


```js
google_youtube.videos.list({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.
* chart (string) - The chart parameter identifies the chart that you want to retrieve.
* hl (string) - The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
* id (string) - The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
* locale (string) - DEPRECATED
* maxHeight (integer) - The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not violate the width request.
* maxResults (integer) - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* maxWidth (integer) - The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate the height request.
* myRating (string) - Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* pageToken (string) - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* regionCode (string) - The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
* videoCategoryId (string) - The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videos.insert
Uploads a video to YouTube and optionally sets the video's metadata.


```js
google_youtube.videos.insert({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* autoLevels (boolean) - The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
* notifySubscribers (boolean) - The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* onBehalfOfContentOwnerChannel (string) - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
* stabilize (boolean) - The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
* body (object) - A video resource represents a YouTube video.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videos.update
Updates a video's metadata.


```js
google_youtube.videos.update({
  "part": ""
}, context)
```

#### Parameters
* part (string) **required** - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object) - A video resource represents a YouTube video.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videos.getRating
Retrieves the ratings that the authorized user gave to a list of specified videos.


```js
google_youtube.videos.getRating({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videos.rate
Add a like or dislike rating to a video or remove a rating from a video.


```js
google_youtube.videos.rate({
  "id": "",
  "rating": ""
}, context)
```

#### Parameters
* id (string) **required** - The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
* rating (string) **required** - Specifies the rating to record.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videos.reportAbuse
Report abuse for a video.


```js
google_youtube.videos.reportAbuse({}, context)
```

#### Parameters
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### watermarks.set
Uploads a watermark image to YouTube and sets it for a channel.


```js
google_youtube.watermarks.set({
  "channelId": ""
}, context)
```

#### Parameters
* channelId (string) **required** - The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### watermarks.unset
Deletes a channel's watermark image.


```js
google_youtube.watermarks.unset({
  "channelId": ""
}, context)
```

#### Parameters
* channelId (string) **required** - The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.
* onBehalfOfContentOwner (string) - Note: This parameter is intended exclusively for YouTube content partners.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

