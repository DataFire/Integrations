# @datafire/google_youtube

Client library for YouTube Data API v3

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

.then(data => {
  console.log(data);
});
```

## Description

The YouTube Data API v3 is an API that provides access to YouTube data, such as videos, playlists, and channels.

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

### youtube.abuseReports.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.abuseReports.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * body [AbuseReport](#abusereport)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AbuseReport](#abusereport)

### youtube.activities.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.activities.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.
  * channelId `string`
  * home `boolean`
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * publishedAfter `string`
  * publishedBefore `string`
  * regionCode `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ActivityListResponse](#activitylistresponse)

### youtube.captions.delete
Deletes a resource.


```js
google_youtube.youtube.captions.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is be on behalf of
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.captions.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.captions.list({
  "part": [],
  "videoId": ""
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
  * videoId **required** `string`: Returns the captions for the specified video.
  * id `array`: Returns the captions with the given IDs for Stubby or Apiary.
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is on behalf of.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CaptionListResponse](#captionlistresponse)

### youtube.captions.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.captions.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is be on behalf of
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * sync `boolean`: Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
  * body [Caption](#caption)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Caption](#caption)

### youtube.captions.update
Updates an existing resource.


```js
google_youtube.youtube.captions.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is on behalf of.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * sync `boolean`: Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
  * body [Caption](#caption)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Caption](#caption)

### youtube.captions.download
Downloads a caption track.


```js
google_youtube.youtube.captions.download({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the caption track to download, required for One Platform.
  * onBehalfOf `string`: ID of the Google+ Page for the channel that the request is be on behalf of
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * tfmt `string`: Convert the captions into this format. Supported options are sbv, srt, and vtt.
  * tlang `string`: tlang is the language code; machine translate the captions into this language.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.channelBanners.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.channelBanners.insert({}, context)
```

#### Input
* input `object`
  * channelId `string`: Unused, channel_id is currently derived from the security context of the requestor.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * body [ChannelBannerResource](#channelbannerresource)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ChannelBannerResource](#channelbannerresource)

### youtube.channelSections.delete
Deletes a resource.


```js
google_youtube.youtube.channelSections.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.channelSections.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.channelSections.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.
  * channelId `string`: Return the ChannelSections owned by the specified channel ID.
  * hl `string`: Return content in specified language
  * id `array`: Return the ChannelSections with the given IDs for Stubby or Apiary.
  * mine `boolean`: Return the ChannelSections owned by the authenticated user.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ChannelSectionListResponse](#channelsectionlistresponse)

### youtube.channelSections.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.channelSections.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * body [ChannelSection](#channelsection)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ChannelSection](#channelsection)

### youtube.channelSections.update
Updates an existing resource.


```js
google_youtube.youtube.channelSections.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * body [ChannelSection](#channelsection)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ChannelSection](#channelsection)

### youtube.channels.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.channels.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.
  * categoryId `string`: Return the channels within the specified guide category ID.
  * forUsername `string`: Return the channel associated with a YouTube username.
  * hl `string`: Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
  * id `array`: Return the channels with the specified IDs.
  * managedByMe `boolean`: Return the channels managed by the authenticated user.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: Return the ids of channels owned by the authenticated user.
  * mySubscribers `boolean`: Return the channels subscribed to the authenticated user
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ChannelListResponse](#channellistresponse)

### youtube.channels.update
Updates an existing resource.


```js
google_youtube.youtube.channels.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
  * onBehalfOfContentOwner `string`: The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
  * body [Channel](#channel)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Channel](#channel)

### youtube.commentThreads.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.commentThreads.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
  * allThreadsRelatedToChannelId `string`: Returns the comment threads of all videos of the channel and the channel comments as well.
  * channelId `string`: Returns the comment threads for all the channel comments (ie does not include comments left on videos).
  * id `array`: Returns the comment threads with the given IDs for Stubby or Apiary.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * moderationStatus `string` (values: published, heldForReview, likelySpam, rejected): Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
  * order `string` (values: orderUnspecified, time, relevance)
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * searchTerms `string`: Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
  * textFormat `string` (values: textFormatUnspecified, html, plainText): The requested text format for the returned comments.
  * videoId `string`: Returns the comment threads of the specified video.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CommentThreadListResponse](#commentthreadlistresponse)

### youtube.commentThreads.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.commentThreads.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
  * body [CommentThread](#commentthread)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CommentThread](#commentthread)

### youtube.commentThreads.update
Updates an existing resource.


```js
google_youtube.youtube.commentThreads.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
  * body [CommentThread](#commentthread)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CommentThread](#commentthread)

### youtube.comments.delete
Deletes a resource.


```js
google_youtube.youtube.comments.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.comments.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.comments.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
  * id `array`: Returns the comments with the given IDs for One Platform.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * parentId `string`: Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
  * textFormat `string` (values: textFormatUnspecified, html, plainText): The requested text format for the returned comments.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CommentListResponse](#commentlistresponse)

### youtube.comments.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.comments.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
  * body [Comment](#comment)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Comment](#comment)

### youtube.comments.update
Updates an existing resource.


```js
google_youtube.youtube.comments.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
  * body [Comment](#comment)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Comment](#comment)

### youtube.comments.markAsSpam
Expresses the caller's opinion that one or more comments should be flagged as spam.


```js
google_youtube.youtube.comments.markAsSpam({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`: Flags the comments with the given IDs as spam in the caller's opinion.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.comments.setModerationStatus
Sets the moderation status of one or more comments.


```js
google_youtube.youtube.comments.setModerationStatus({
  "id": [],
  "moderationStatus": ""
}, context)
```

#### Input
* input `object`
  * id **required** `array`: Modifies the moderation status of the comments with the given IDs
  * moderationStatus **required** `string` (values: published, heldForReview, likelySpam, rejected): Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: MODERATION_STATUS_PUBLISHED, MODERATION_STATUS_HELD_FOR_REVIEW, MODERATION_STATUS_REJECTED.
  * banAuthor `boolean`: If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.i18nLanguages.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.i18nLanguages.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
  * hl `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [I18nLanguageListResponse](#i18nlanguagelistresponse)

### youtube.i18nRegions.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.i18nRegions.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
  * hl `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [I18nRegionListResponse](#i18nregionlistresponse)

### youtube.liveBroadcasts.delete
Delete a given broadcast.


```js
google_youtube.youtube.liveBroadcasts.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Broadcast to delete.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.liveBroadcasts.list
Retrieve the list of broadcasts associated with the given channel.


```js
google_youtube.youtube.liveBroadcasts.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.
  * broadcastStatus `string` (values: broadcastStatusFilterUnspecified, all, active, upcoming, completed): Return broadcasts with a certain status, e.g. active broadcasts.
  * broadcastType `string` (values: broadcastTypeFilterUnspecified, all, event, persistent): Return only broadcasts with the selected type.
  * id `array`: Return broadcasts with the given ids from Stubby or Apiary.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveBroadcastListResponse](#livebroadcastlistresponse)

### youtube.liveBroadcasts.insert
Inserts a new stream for the authenticated user.


```js
google_youtube.youtube.liveBroadcasts.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * body [LiveBroadcast](#livebroadcast)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveBroadcast](#livebroadcast)

### youtube.liveBroadcasts.update
Updates an existing broadcast for the authenticated user.


```js
google_youtube.youtube.liveBroadcasts.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * body [LiveBroadcast](#livebroadcast)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveBroadcast](#livebroadcast)

### youtube.liveBroadcasts.bind
Bind a broadcast to a stream.


```js
google_youtube.youtube.liveBroadcasts.bind({
  "id": "",
  "part": []
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Broadcast to bind to the stream
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * streamId `string`: Stream to bind, if not set unbind the current one.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveBroadcast](#livebroadcast)

### youtube.liveBroadcasts.control
Slate and recording control of the live broadcast. Support actions: slate on/off, recording start/stop/pause/resume. Design doc: goto/yt-api-liveBroadcast-control


```js
google_youtube.youtube.liveBroadcasts.control({
  "id": "",
  "part": []
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Broadcast to operate.
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
  * displaySlate `boolean`: Whether display or hide slate.
  * offsetTimeMs `string`: The exact time when the actions (e.g. slate on) are executed. It is an offset from the first frame of the monitor stream. If not set, it means "now" or ASAP. This field should not be set if the monitor stream is disabled, otherwise an error will be returned.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * walltime `string`: The wall clock time at which the action should be executed. Only one of offset_time_ms and walltime may be set at a time.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveBroadcast](#livebroadcast)

### youtube.liveBroadcasts.transition
Transition a broadcast to a given status.


```js
google_youtube.youtube.liveBroadcasts.transition({
  "broadcastStatus": "",
  "id": "",
  "part": []
}, context)
```

#### Input
* input `object`
  * broadcastStatus **required** `string` (values: statusUnspecified, testing, live, complete): The status to which the broadcast is going to transition.
  * id **required** `string`: Broadcast to transition.
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveBroadcast](#livebroadcast)

### youtube.liveChatBans.delete
Deletes a chat ban.


```js
google_youtube.youtube.liveChatBans.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.liveChatBans.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.liveChatBans.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
  * body [LiveChatBan](#livechatban)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveChatBan](#livechatban)

### youtube.liveChatMessages.delete
Deletes a chat message.


```js
google_youtube.youtube.liveChatMessages.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.liveChatMessages.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.liveChatMessages.list({
  "liveChatId": "",
  "part": []
}, context)
```

#### Input
* input `object`
  * liveChatId **required** `string`: The id of the live chat for which comments should be returned.
  * part **required** `array`: The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
  * hl `string`: Specifies the localization language in which the system messages should be returned.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
  * profileImageSize `integer`: Specifies the size of the profile image that should be returned for each user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveChatMessageListResponse](#livechatmessagelistresponse)

### youtube.liveChatMessages.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.liveChatMessages.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
  * body [LiveChatMessage](#livechatmessage)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveChatMessage](#livechatmessage)

### youtube.liveChatModerators.delete
Deletes a chat moderator.


```js
google_youtube.youtube.liveChatModerators.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.liveChatModerators.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.liveChatModerators.list({
  "liveChatId": "",
  "part": []
}, context)
```

#### Input
* input `object`
  * liveChatId **required** `string`: The id of the live chat for which moderators should be returned.
  * part **required** `array`: The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveChatModeratorListResponse](#livechatmoderatorlistresponse)

### youtube.liveChatModerators.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.liveChatModerators.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
  * body [LiveChatModerator](#livechatmoderator)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveChatModerator](#livechatmoderator)

### youtube.liveStreams.delete
Deletes an existing stream for the authenticated user.


```js
google_youtube.youtube.liveStreams.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.liveStreams.list
Retrieve the list of streams associated with the given channel. --


```js
google_youtube.youtube.liveStreams.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
  * id `array`: Return LiveStreams with the given ids from Stubby or Apiary.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveStreamListResponse](#livestreamlistresponse)

### youtube.liveStreams.insert
Inserts a new stream for the authenticated user.


```js
google_youtube.youtube.liveStreams.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * body [LiveStream](#livestream)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveStream](#livestream)

### youtube.liveStreams.update
Updates an existing stream for the authenticated user.


```js
google_youtube.youtube.liveStreams.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * body [LiveStream](#livestream)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LiveStream](#livestream)

### youtube.members.list
Retrieves a list of members that match the request criteria for a channel.


```js
google_youtube.youtube.members.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
  * filterByMemberChannelId `string`: Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
  * hasAccessToLevel `string`: Filter members in the results set to the ones that have access to a level.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * mode `string` (values: listMembersModeUnknown, updates, all_current): Parameter that specifies which channel members to return.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [MemberListResponse](#memberlistresponse)

### youtube.membershipsLevels.list
Retrieves a list of all pricing levels offered by a creator to the fans.


```js
google_youtube.youtube.membershipsLevels.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [MembershipsLevelListResponse](#membershipslevellistresponse)

### youtube.playlistItems.delete
Deletes a resource.


```js
google_youtube.youtube.playlistItems.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.playlistItems.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.playlistItems.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
  * id `array`
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * playlistId `string`: Return the playlist items within the given playlist.
  * videoId `string`: Return the playlist items associated with the given video ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlaylistItemListResponse](#playlistitemlistresponse)

### youtube.playlistItems.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.playlistItems.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * body [PlaylistItem](#playlistitem)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlaylistItem](#playlistitem)

### youtube.playlistItems.update
Updates an existing resource.


```js
google_youtube.youtube.playlistItems.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * body [PlaylistItem](#playlistitem)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlaylistItem](#playlistitem)

### youtube.playlists.delete
Deletes a resource.


```js
google_youtube.youtube.playlists.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.playlists.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.playlists.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.
  * channelId `string`: Return the playlists owned by the specified channel ID.
  * hl `string`: Returen content in specified language
  * id `array`: Return the playlists with the given IDs for Stubby or Apiary.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: Return the playlists owned by the authenticated user.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlaylistListResponse](#playlistlistresponse)

### youtube.playlists.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.playlists.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * body [Playlist](#playlist)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Playlist](#playlist)

### youtube.playlists.update
Updates an existing resource.


```js
google_youtube.youtube.playlists.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * body [Playlist](#playlist)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Playlist](#playlist)

### youtube.search.list
Retrieves a list of search resources


```js
google_youtube.youtube.search.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
  * channelId `string`: Filter on resources belonging to this channelId.
  * channelType `string` (values: channelTypeUnspecified, any, show): Add a filter on the channel search.
  * eventType `string` (values: none, upcoming, live, completed): Filter on the livestream status of the videos.
  * forContentOwner `boolean`: Search owned by a content owner.
  * forDeveloper `boolean`: Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
  * forMine `boolean`: Search for the private videos of the authenticated user.
  * location `string`: Filter on location of the video
  * locationRadius `string`: Filter on distance from the location (specified above).
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * order `string` (values: searchSortUnspecified, date, rating, viewCount, relevance, title, videoCount): Sort order of the results.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * publishedAfter `string`: Filter on resources published after this date.
  * publishedBefore `string`: Filter on resources published before this date.
  * q `string`: Textual search terms to match.
  * regionCode `string`: Display the content as seen by viewers in this country.
  * relatedToVideoId `string`: Search related to a resource.
  * relevanceLanguage `string`: Return results relevant to this language.
  * safeSearch `string` (values: safeSearchSettingUnspecified, none, moderate, strict): Indicates whether the search results should include restricted content as well as standard content.
  * topicId `string`: Restrict results to a particular topic.
  * type `array`: Restrict results to a particular set of resource types from One Platform.
  * videoCaption `string` (values: videoCaptionUnspecified, any, closedCaption, none): Filter on the presence of captions on the videos.
  * videoCategoryId `string`: Filter on videos in a specific category.
  * videoDefinition `string` (values: any, standard, high): Filter on the definition of the videos.
  * videoDimension `string` (values: any, 2d, 3d): Filter on 3d videos.
  * videoDuration `string` (values: videoDurationUnspecified, any, short, medium, long): Filter on the duration of the videos.
  * videoEmbeddable `string` (values: videoEmbeddableUnspecified, any, true): Filter on embeddable videos.
  * videoLicense `string` (values: any, youtube, creativeCommon): Filter on the license of the videos.
  * videoSyndicated `string` (values: videoSyndicatedUnspecified, any, true): Filter on syndicated videos.
  * videoType `string` (values: videoTypeUnspecified, any, movie, episode): Filter on videos of a specific type.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchListResponse](#searchlistresponse)

### youtube.sponsors.list
Retrieves a list of sponsors that match the request criteria for a channel.


```js
google_youtube.youtube.sponsors.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
  * filter `string` (values: sponsorFilterUnknown, newest, all): Parameter that specifies which channel sponsors to return.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SponsorListResponse](#sponsorlistresponse)

### youtube.subscriptions.delete
Deletes a resource.


```js
google_youtube.youtube.subscriptions.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.subscriptions.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.subscriptions.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.
  * channelId `string`: Return the subscriptions of the given channel owner.
  * forChannelId `string`: Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
  * id `array`: Return the subscriptions with the given IDs for Stubby or Apiary.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * mine `boolean`: Flag for returning the subscriptions of the authenticated user.
  * myRecentSubscribers `boolean`
  * mySubscribers `boolean`: Return the subscribers of the given channel owner.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * order `string` (values: subscriptionOrderUnspecified, relevance, unread, alphabetical): The order of the returned subscriptions
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SubscriptionListResponse](#subscriptionlistresponse)

### youtube.subscriptions.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.subscriptions.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
  * body [Subscription](#subscription)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Subscription](#subscription)

### youtube.superChatEvents.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.superChatEvents.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
  * hl `string`: Return rendered funding amounts in specified language.
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SuperChatEventListResponse](#superchateventlistresponse)

### youtube.tests.insert
POST method.


```js
google_youtube.youtube.tests.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`
  * body [TestItem](#testitem)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TestItem](#testitem)

### youtube.thirdPartyLinks.delete
Deletes a resource.


```js
google_youtube.youtube.thirdPartyLinks.delete({
  "linkingToken": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * linkingToken **required** `string`: Delete the partner links with the given linking token.
  * type **required** `string` (values: linkUnspecified, channelToStoreLink): Type of the link to be deleted.
  * part `array`: Do not use. Required for compatibility.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.thirdPartyLinks.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.thirdPartyLinks.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.
  * linkingToken `string`: Get a third party link with the given linking token.
  * type `string` (values: linkUnspecified, channelToStoreLink): Get a third party link of the given type.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ThirdPartyLink](#thirdpartylink)

### youtube.thirdPartyLinks.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.thirdPartyLinks.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
  * body [ThirdPartyLink](#thirdpartylink)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ThirdPartyLink](#thirdpartylink)

### youtube.thirdPartyLinks.update
Updates an existing resource.


```js
google_youtube.youtube.thirdPartyLinks.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
  * body [ThirdPartyLink](#thirdpartylink)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ThirdPartyLink](#thirdpartylink)

### youtube.thumbnails.set
As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.


```js
google_youtube.youtube.thumbnails.set({
  "videoId": ""
}, context)
```

#### Input
* input `object`
  * videoId **required** `string`: Returns the Thumbnail with the given video IDs for Stubby or Apiary.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ThumbnailSetResponse](#thumbnailsetresponse)

### youtube.videoAbuseReportReasons.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.videoAbuseReportReasons.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
  * hl `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VideoAbuseReportReasonListResponse](#videoabusereportreasonlistresponse)

### youtube.videoCategories.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.videoCategories.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
  * hl `string`
  * id `array`: Returns the video categories with the given IDs for Stubby or Apiary.
  * regionCode `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VideoCategoryListResponse](#videocategorylistresponse)

### youtube.videos.delete
Deletes a resource.


```js
google_youtube.youtube.videos.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.videos.list
Retrieves a list of resources, possibly filtered.


```js
google_youtube.youtube.videos.list({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
  * chart `string` (values: chartUnspecified, mostPopular): Return the videos that are in the specified chart.
  * hl `string`: Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
  * id `array`: Return videos with the given ids.
  * locale `string`
  * maxHeight `integer`
  * maxResults `integer`: The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
  * maxWidth `integer`: Return the player with maximum height specified in
  * myRating `string` (values: none, like, dislike): Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * pageToken `string`: The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
  * regionCode `string`: Use a chart that is specific to the specified region
  * videoCategoryId `string`: Use chart that is specific to the specified video category
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VideoListResponse](#videolistresponse)

### youtube.videos.insert
Inserts a new resource into this collection.


```js
google_youtube.youtube.videos.insert({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
  * autoLevels `boolean`: Should auto-levels be applied to the upload.
  * notifySubscribers `boolean`: Notify the channel subscribers about the new video. As default, the notification is enabled.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * onBehalfOfContentOwnerChannel `string`: This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
  * stabilize `boolean`: Should stabilize be applied to the upload.
  * body [Video](#video)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Video](#video)

### youtube.videos.update
Updates an existing resource.


```js
google_youtube.youtube.videos.update({
  "part": []
}, context)
```

#### Input
* input `object`
  * part **required** `array`: The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * body [Video](#video)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Video](#video)

### youtube.videos.getRating
Retrieves the ratings that the authorized user gave to a list of specified videos.


```js
google_youtube.youtube.videos.getRating({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VideoRatingListResponse](#videoratinglistresponse)

### youtube.videos.rate
Adds a like or dislike rating to a video or removes a rating from a video.


```js
google_youtube.youtube.videos.rate({
  "id": "",
  "rating": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * rating **required** `string` (values: none, like, dislike)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.videos.reportAbuse
Report abuse for a video.


```js
google_youtube.youtube.videos.reportAbuse({}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * body [VideoAbuseReport](#videoabusereport)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.watermarks.set
Allows upload of watermark image and setting it for a channel.


```js
google_youtube.youtube.watermarks.set({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * body [InvideoBranding](#invideobranding)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### youtube.watermarks.unset
Allows removal of channel watermark.


```js
google_youtube.youtube.watermarks.unset({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`
  * onBehalfOfContentOwner `string`: *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*



## Definitions

### AbuseReport
* AbuseReport `object`
  * abuseTypes `array`
    * items [AbuseType](#abusetype)
  * description `string`
  * relatedEntities `array`
    * items [RelatedEntity](#relatedentity)
  * subject [Entity](#entity)

### AbuseType
* AbuseType `object`
  * id `string`

### AccessPolicy
* AccessPolicy `object`: Rights management policy for YouTube resources.
  * allowed `boolean`: The value of allowed indicates whether the access to the policy is allowed or denied by default.
  * exception `array`: A list of region codes that identify countries where the default policy do not apply.
    * items `string`

### Activity
* Activity `object`: An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
  * contentDetails [ActivityContentDetails](#activitycontentdetails)
  * etag `string`: Etag of this resource
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
  * ctaType `string` (values: ctaTypeUnspecified, visitAdvertiserSite): The type of call-to-action, a message to the user indicating action that can be taken.
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
  * reason `string` (values: reasonUnspecified, videoFavorited, videoLiked, videoWatched): The reason that the resource is recommended to the user.
  * resourceId [ResourceId](#resourceid)
  * seedResourceId [ResourceId](#resourceid)

### ActivityContentDetailsSocial
* ActivityContentDetailsSocial `object`: Details about a social network post.
  * author `string`: The author of the social network post.
  * imageUrl `string`: An image of the post's author.
  * referenceUrl `string`: The URL of the social network post.
  * resourceId [ResourceId](#resourceid)
  * type `string` (values: typeUnspecified, googlePlus, facebook, twitter): The name of the social network.

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
  * items `array`
    * items [Activity](#activity)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### ActivitySnippet
* ActivitySnippet `object`: Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel associated with the activity.
  * channelTitle `string`: Channel title for the channel responsible for this activity
  * description `string`: The description of the resource primarily associated with the activity. @mutable youtube.activities.insert
  * groupId `string`: The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.
  * publishedAt `string`: The date and time that the video was uploaded. The value is specified in ISO 8601 format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The title of the resource primarily associated with the activity.
  * type `string` (values: typeUnspecified, upload, like, favorite, comment, subscription, playlistItem, recommendation, bulletin, social, channelItem, promotedItem): The type of activity that the resource describes.

### Caption
* Caption `object`: A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
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
  * audioTrackType `string` (values: unknown, primary, commentary, descriptive): The type of audio track associated with the caption track.
  * failureReason `string` (values: unknownFormat, unsupportedFormat, processingFailed): The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.
  * isAutoSynced `boolean`: Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions.
  * isCC `boolean`: Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.
  * isDraft `boolean`: Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update
  * isEasyReader `boolean`: Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false.
  * isLarge `boolean`: Indicates whether the caption track uses large text for the vision-impaired. The default value is false.
  * language `string`: The language of the caption track. The property value is a BCP-47 language tag.
  * lastUpdated `string`: The date and time when the caption track was last updated. The value is specified in ISO 8601 format.
  * name `string`: The name of the caption track. The name is intended to be visible to the user as an option during playback.
  * status `string` (values: serving, syncing, failed): The caption track's status.
  * trackKind `string` (values: standard, ASR, forced): The caption track's type.
  * videoId `string`: The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert

### CdnSettings
* CdnSettings `object`: Brief description of the live stream cdn settings.
  * format `string`: The format of the video stream that you are sending to Youtube. 
  * frameRate `string` (values: 30fps, 60fps, variable): The frame rate of the inbound video data.
  * ingestionInfo [IngestionInfo](#ingestioninfo)
  * ingestionType `string` (values: rtmp, dash, webrtc, hls):  The method or protocol used to transmit the video stream.
  * resolution `string` (values: 240p, 360p, 480p, 720p, 1080p, 1440p, 2160p, variable): The resolution of the inbound video data.

### Channel
* Channel `object`: A *channel* resource contains information about a YouTube channel.
  * auditDetails [ChannelAuditDetails](#channelauditdetails)
  * brandingSettings [ChannelBrandingSettings](#channelbrandingsettings)
  * contentDetails [ChannelContentDetails](#channelcontentdetails)
  * contentOwnerDetails [ChannelContentOwnerDetails](#channelcontentownerdetails)
  * conversionPings [ChannelConversionPings](#channelconversionpings)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the channel.
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

### ChannelBannerResource
* ChannelBannerResource `object`: A channel banner returned as the response to a channel_banner.insert call.
  * etag `string`
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
    * favorites `string`: The ID of the playlist that contains the channel"s favorite videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
    * likes `string`: The ID of the playlist that contains the channel"s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
    * uploads `string`: The ID of the playlist that contains the channel"s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos.
    * watchHistory `string`: The ID of the playlist that contains the channel"s watch history. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
    * watchLater `string`: The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.

### ChannelContentOwnerDetails
* ChannelContentOwnerDetails `object`: The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
  * contentOwner `string`: The ID of the content owner linked to the channel.
  * timeLinked `string`: The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 format.

### ChannelConversionPing
* ChannelConversionPing `object`: Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
  * context `string` (values: subscribe, unsubscribe, cview): Defines the context of the ping.
  * conversionUrl `string`: The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.

### ChannelConversionPings
* ChannelConversionPings `object`: The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
  * pings `array`: Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
    * items [ChannelConversionPing](#channelconversionping)

### ChannelListResponse
* ChannelListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`
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
  * style `string` (values: channelsectionStyleUnspecified, horizontalRow, verticalList): The style of the channel section.
  * title `string`: The channel section's title for multiple_playlists and multiple_channels.
  * type `string` (values: channelsectionTypeUnspecified, singlePlaylist, multiplePlaylists, popularUploads, recentUploads, likes, allPlaylists, likedPlaylists, recentPosts, recentActivity, liveEvents, upcomingEvents, completedEvents, multipleChannels, postedVideos, postedPlaylists, subscriptions): The type of the channel section.

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
  * publishedAt `string`: The date and time that the channel was created. The value is specified in < a href="//www.w3.org/TR/NOTE-datetime">ISO 8601 format.
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
  * longUploadsStatus `string` (values: longUploadsUnspecified, allowed, eligible, disallowed): The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.
  * madeForKids `boolean`
  * privacyStatus `string` (values: public, unlisted, private): Privacy status of the channel.
  * selfDeclaredMadeForKids `boolean`

### ChannelToStoreLinkDetails
* ChannelToStoreLinkDetails `object`: Information specific to a store on a merchandising platform linked to a YouTube channel.
  * storeName `string`: Name of the store.
  * storeUrl `string`: Landing page of the store.

### ChannelTopicDetails
* ChannelTopicDetails `object`: Freebase topic information related to the channel.
  * topicCategories `array`: A list of Wikipedia URLs that describe the channel's content.
    * items `string`
  * topicIds `array`: A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
    * items `string`

### Comment
* Comment `object`: A *comment* represents a single YouTube comment.
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
  * authorChannelId [CommentSnippetAuthorChannelId](#commentsnippetauthorchannelid)
  * authorChannelUrl `string`: Link to the author's YouTube channel, if any.
  * authorDisplayName `string`: The name of the user who posted the comment.
  * authorProfileImageUrl `string`: The URL for the avatar of the user who posted the comment.
  * canRate `boolean`: Whether the current viewer can rate this comment.
  * channelId `string`: The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel.
  * likeCount `integer`: The total number of likes this comment has received.
  * moderationStatus `string` (values: published, heldForReview, likelySpam, rejected): The comment's moderation status. Will not be set if the comments were requested through the id filter.
  * parentId `string`: The unique id of the parent comment, only set for replies.
  * publishedAt `string`: The date and time when the comment was orignally published. The value is specified in ISO 8601 format.
  * textDisplay `string`: The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.
  * textOriginal `string`: The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author.
  * updatedAt `string`: The date and time when was last updated . The value is specified in ISO 8601 format.
  * videoId `string`: The ID of the video the comment refers to, if any.
  * viewerRating `string` (values: none, like, dislike): The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.

### CommentSnippetAuthorChannelId
* CommentSnippetAuthorChannelId `object`: The id of the author's YouTube channel, if any.
  * value `string`

### CommentThread
* CommentThread `object`: A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
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
* ContentRating `object`: Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
  * acbRating `string` (values: acbUnspecified, acbE, acbP, acbC, acbG, acbPg, acbM, acbMa15plus, acbR18plus, acbUnrated): The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming.
  * agcomRating `string` (values: agcomUnspecified, agcomT, agcomVm14, agcomVm18, agcomUnrated): The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM).
  * anatelRating `string` (values: anatelUnspecified, anatelF, anatelI, anatelI7, anatelI10, anatelI12, anatelR, anatelA, anatelUnrated): The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television.
  * bbfcRating `string` (values: bbfcUnspecified, bbfcU, bbfcPg, bbfc12a, bbfc12, bbfc15, bbfc18, bbfcR18, bbfcUnrated): The video's British Board of Film Classification (BBFC) rating.
  * bfvcRating `string` (values: bfvcUnspecified, bfvcG, bfvcE, bfvc13, bfvc15, bfvc18, bfvc20, bfvcB, bfvcUnrated): The video's rating from Thailand's Board of Film and Video Censors.
  * bmukkRating `string` (values: bmukkUnspecified, bmukkAa, bmukk6, bmukk8, bmukk10, bmukk12, bmukk14, bmukk16, bmukkUnrated): The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).
  * catvRating `string` (values: catvUnspecified, catvC, catvC8, catvG, catvPg, catv14plus, catv18plus, catvUnrated, catvE): Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
  * catvfrRating `string` (values: catvfrUnspecified, catvfrG, catvfr8plus, catvfr13plus, catvfr16plus, catvfr18plus, catvfrUnrated, catvfrE): The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
  * cbfcRating `string` (values: cbfcUnspecified, cbfcU, cbfcUA, cbfcA, cbfcS, cbfcUnrated): The video's Central Board of Film Certification (CBFC - India) rating.
  * cccRating `string` (values: cccUnspecified, cccTe, ccc6, ccc14, ccc18, ccc18v, ccc18s, cccUnrated): The video's Consejo de Calificación Cinematográfica (Chile) rating.
  * cceRating `string` (values: cceUnspecified, cceM4, cceM6, cceM12, cceM16, cceM18, cceUnrated, cceM14): The video's rating from Portugal's Comissão de Classificação de Espect´culos.
  * chfilmRating `string` (values: chfilmUnspecified, chfilm0, chfilm6, chfilm12, chfilm16, chfilm18, chfilmUnrated): The video's rating in Switzerland.
  * chvrsRating `string` (values: chvrsUnspecified, chvrsG, chvrsPg, chvrs14a, chvrs18a, chvrsR, chvrsE, chvrsUnrated): The video's Canadian Home Video Rating System (CHVRS) rating.
  * cicfRating `string` (values: cicfUnspecified, cicfE, cicfKtEa, cicfKntEna, cicfUnrated): The video's rating from the Commission de Contrôle des Films (Belgium).
  * cnaRating `string` (values: cnaUnspecified, cnaAp, cna12, cna15, cna18, cna18plus, cnaUnrated): The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).
  * cncRating `string` (values: cncUnspecified, cncT, cnc10, cnc12, cnc16, cnc18, cncE, cncInterdiction, cncUnrated): Rating system in France - Commission de classification cinematographique
  * csaRating `string` (values: csaUnspecified, csaT, csa10, csa12, csa16, csa18, csaInterdiction, csaUnrated): The video's rating from France's Conseil supérieur de l’audiovisuel, which rates broadcast content.
  * cscfRating `string` (values: cscfUnspecified, cscfAl, cscfA, cscf6, cscf9, cscf12, cscf16, cscf18, cscfUnrated): The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF).
  * czfilmRating `string` (values: czfilmUnspecified, czfilmU, czfilm12, czfilm14, czfilm18, czfilmUnrated): The video's rating in the Czech Republic.
  * djctqRating `string` (values: djctqUnspecified, djctqL, djctq10, djctq12, djctq14, djctq16, djctq18, djctqEr, djctqL10, djctqL12, djctqL14, djctqL16, djctqL18, djctq1012, djctq1014, djctq1016, djctq1018, djctq1214, djctq1216, djctq1218, djctq1416, djctq1418, djctq1618, djctqUnrated): The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.
  * djctqRatingReasons `array`: Reasons that explain why the video received its DJCQT (Brazil) rating.
    * items `string` (values: djctqRatingReasonUnspecified, djctqViolence, djctqExtremeViolence, djctqSexualContent, djctqNudity, djctqSex, djctqExplicitSex, djctqDrugs, djctqLegalDrugs, djctqIllegalDrugs, djctqInappropriateLanguage, djctqCriminalActs, djctqImpactingContent)
  * ecbmctRating `string` (values: ecbmctUnspecified, ecbmctG, ecbmct7a, ecbmct7plus, ecbmct13a, ecbmct13plus, ecbmct15a, ecbmct15plus, ecbmct18plus, ecbmctUnrated): Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism
  * eefilmRating `string` (values: eefilmUnspecified, eefilmPere, eefilmL, eefilmMs6, eefilmK6, eefilmMs12, eefilmK12, eefilmK14, eefilmK16, eefilmUnrated): The video's rating in Estonia.
  * egfilmRating `string` (values: egfilmUnspecified, egfilmGn, egfilm18, egfilmBn, egfilmUnrated): The video's rating in Egypt.
  * eirinRating `string` (values: eirinUnspecified, eirinG, eirinPg12, eirinR15plus, eirinR18plus, eirinUnrated): The video's Eirin (映倫) rating. Eirin is the Japanese rating system.
  * fcbmRating `string` (values: fcbmUnspecified, fcbmU, fcbmPg13, fcbmP13, fcbm18, fcbm18sx, fcbm18pa, fcbm18sg, fcbm18pl, fcbmUnrated): The video's rating from Malaysia's Film Censorship Board.
  * fcoRating `string` (values: fcoUnspecified, fcoI, fcoIia, fcoIib, fcoIi, fcoIii, fcoUnrated): The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration.
  * fmocRating `string` (values: fmocUnspecified, fmocU, fmoc10, fmoc12, fmoc16, fmoc18, fmocE, fmocUnrated): This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.
  * fpbRating `string` (values: fpbUnspecified, fpbA, fpbPg, fpb79Pg, fpb1012Pg, fpb13, fpb16, fpb18, fpbX18, fpbXx, fpbUnrated, fpb10): The video's rating from South Africa's Film and Publication Board.
  * fpbRatingReasons `array`: Reasons that explain why the video received its FPB (South Africa) rating.
    * items `string` (values: fpbRatingReasonUnspecified, fpbBlasphemy, fpbLanguage, fpbNudity, fpbPrejudice, fpbSex, fpbViolence, fpbDrugs, fpbSexualViolence, fpbHorror, fpbCriminalTechniques, fpbImitativeActsTechniques)
  * fskRating `string` (values: fskUnspecified, fsk0, fsk6, fsk12, fsk16, fsk18, fskUnrated): The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
  * grfilmRating `string` (values: grfilmUnspecified, grfilmK, grfilmE, grfilmK12, grfilmK13, grfilmK15, grfilmK17, grfilmK18, grfilmUnrated): The video's rating in Greece.
  * icaaRating `string` (values: icaaUnspecified, icaaApta, icaa7, icaa12, icaa13, icaa16, icaa18, icaaX, icaaUnrated): The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.
  * ifcoRating `string` (values: ifcoUnspecified, ifcoG, ifcoPg, ifco12, ifco12a, ifco15, ifco15a, ifco16, ifco18, ifcoUnrated): The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.
  * ilfilmRating `string` (values: ilfilmUnspecified, ilfilmAa, ilfilm12, ilfilm14, ilfilm16, ilfilm18, ilfilmUnrated): The video's rating in Israel.
  * incaaRating `string` (values: incaaUnspecified, incaaAtp, incaaSam13, incaaSam16, incaaSam18, incaaC, incaaUnrated): The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.
  * kfcbRating `string` (values: kfcbUnspecified, kfcbG, kfcbPg, kfcb16plus, kfcbR, kfcbUnrated): The video's rating from the Kenya Film Classification Board.
  * kijkwijzerRating `string` (values: kijkwijzerUnspecified, kijkwijzerAl, kijkwijzer6, kijkwijzer9, kijkwijzer12, kijkwijzer16, kijkwijzer18, kijkwijzerUnrated): The video's NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands).
  * kmrbRating `string` (values: kmrbUnspecified, kmrbAll, kmrb12plus, kmrb15plus, kmrbTeenr, kmrbR, kmrbUnrated): The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.
  * lsfRating `string` (values: lsfUnspecified, lsfSu, lsfA, lsfBo, lsf13, lsfR, lsf17, lsfD, lsf21, lsfUnrated): The video's rating from Indonesia's Lembaga Sensor Film.
  * mccaaRating `string` (values: mccaaUnspecified, mccaaU, mccaaPg, mccaa12a, mccaa12, mccaa14, mccaa15, mccaa16, mccaa18, mccaaUnrated): The video's rating from Malta's Film Age-Classification Board.
  * mccypRating `string` (values: mccypUnspecified, mccypA, mccyp7, mccyp11, mccyp15, mccypUnrated): The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People.
  * mcstRating `string` (values: mcstUnspecified, mcstP, mcst0, mcstC13, mcstC16, mcst16plus, mcstC18, mcstGPg, mcstUnrated): The video's rating system for Vietnam - MCST
  * mdaRating `string` (values: mdaUnspecified, mdaG, mdaPg, mdaPg13, mdaNc16, mdaM18, mdaR21, mdaUnrated): The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC).
  * medietilsynetRating `string` (values: medietilsynetUnspecified, medietilsynetA, medietilsynet6, medietilsynet7, medietilsynet9, medietilsynet11, medietilsynet12, medietilsynet15, medietilsynet18, medietilsynetUnrated): The video's rating from Medietilsynet, the Norwegian Media Authority.
  * mekuRating `string` (values: mekuUnspecified, mekuS, meku7, meku12, meku16, meku18, mekuUnrated): The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).
  * menaMpaaRating `string` (values: menaMpaaUnspecified, menaMpaaG, menaMpaaPg, menaMpaaPg13, menaMpaaR, menaMpaaUnrated): The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details.
  * mibacRating `string` (values: mibacUnspecified, mibacT, mibacVap, mibacVm12, mibacVm14, mibacVm18, mibacUnrated): The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).
  * mocRating `string` (values: mocUnspecified, mocE, mocT, moc7, moc12, moc15, moc18, mocX, mocBanned, mocUnrated): The video's Ministerio de Cultura (Colombia) rating.
  * moctwRating `string` (values: moctwUnspecified, moctwG, moctwP, moctwPg, moctwR, moctwUnrated, moctwR12, moctwR15): The video's rating from Taiwan's Ministry of Culture (文化部).
  * mpaaRating `string` (values: mpaaUnspecified, mpaaG, mpaaPg, mpaaPg13, mpaaR, mpaaNc17, mpaaX, mpaaUnrated): The video's Motion Picture Association of America (MPAA) rating.
  * mpaatRating `string` (values: mpaatUnspecified, mpaatGb, mpaatRb): The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.
  * mtrcbRating `string` (values: mtrcbUnspecified, mtrcbG, mtrcbPg, mtrcbR13, mtrcbR16, mtrcbR18, mtrcbX, mtrcbUnrated): The video's rating from the Movie and Television Review and Classification Board (Philippines).
  * nbcRating `string` (values: nbcUnspecified, nbcG, nbcPg, nbc12plus, nbc15plus, nbc18plus, nbc18plusr, nbcPu, nbcUnrated): The video's rating from the Maldives National Bureau of Classification.
  * nbcplRating `string` (values: nbcplUnspecified, nbcplI, nbcplIi, nbcplIii, nbcplIv, nbcpl18plus, nbcplUnrated): The video's rating in Poland.
  * nfrcRating `string` (values: nfrcUnspecified, nfrcA, nfrcB, nfrcC, nfrcD, nfrcX, nfrcUnrated): The video's rating from the Bulgarian National Film Center.
  * nfvcbRating `string` (values: nfvcbUnspecified, nfvcbG, nfvcbPg, nfvcb12, nfvcb12a, nfvcb15, nfvcb18, nfvcbRe, nfvcbUnrated): The video's rating from Nigeria's National Film and Video Censors Board.
  * nkclvRating `string` (values: nkclvUnspecified, nkclvU, nkclv7plus, nkclv12plus, nkclv16plus, nkclv18plus, nkclvUnrated): The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).
  * nmcRating `string` (values: nmcUnspecified, nmcG, nmcPg, nmcPg13, nmcPg15, nmc15plus, nmc18plus, nmc18tc, nmcUnrated): The National Media Council ratings system for United Arab Emirates.
  * oflcRating `string` (values: oflcUnspecified, oflcG, oflcPg, oflcM, oflcR13, oflcR15, oflcR16, oflcR18, oflcUnrated, oflcRp13, oflcRp16, oflcRp18): The video's Office of Film and Literature Classification (OFLC - New Zealand) rating.
  * pefilmRating `string` (values: pefilmUnspecified, pefilmPt, pefilmPg, pefilm14, pefilm18, pefilmUnrated): The video's rating in Peru.
  * rcnofRating `string` (values: rcnofUnspecified, rcnofI, rcnofIi, rcnofIii, rcnofIv, rcnofV, rcnofVi, rcnofUnrated): The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.
  * resorteviolenciaRating `string` (values: resorteviolenciaUnspecified, resorteviolenciaA, resorteviolenciaB, resorteviolenciaC, resorteviolenciaD, resorteviolenciaE, resorteviolenciaUnrated): The video's rating in Venezuela.
  * rtcRating `string` (values: rtcUnspecified, rtcAa, rtcA, rtcB, rtcB15, rtcC, rtcD, rtcUnrated): The video's General Directorate of Radio, Television and Cinematography (Mexico) rating.
  * rteRating `string` (values: rteUnspecified, rteGa, rteCh, rtePs, rteMa, rteUnrated): The video's rating from Ireland's Raidió Teilifís Éireann.
  * russiaRating `string` (values: russiaUnspecified, russia0, russia6, russia12, russia16, russia18, russiaUnrated): The video's National Film Registry of the Russian Federation (MKRF - Russia) rating.
  * skfilmRating `string` (values: skfilmUnspecified, skfilmG, skfilmP2, skfilmP5, skfilmP8, skfilmUnrated): The video's rating in Slovakia.
  * smaisRating `string` (values: smaisUnspecified, smaisL, smais7, smais12, smais14, smais16, smais18, smaisUnrated): The video's rating in Iceland.
  * smsaRating `string` (values: smsaUnspecified, smsaA, smsa7, smsa11, smsa15, smsaUnrated): The video's rating from Statens medieråd (Sweden's National Media Council).
  * tvpgRating `string` (values: tvpgUnspecified, tvpgY, tvpgY7, tvpgY7Fv, tvpgG, tvpgPg, pg14, tvpgMa, tvpgUnrated): The video's TV Parental Guidelines (TVPG) rating.
  * ytRating `string` (values: ytUnspecified, ytAgeRestricted): A rating that YouTube uses to identify age-restricted content.

### Entity
* Entity `object`
  * id `string`
  * typeId `string`
  * url `string`

### GeoPoint
* GeoPoint `object`: Geographical coordinates of a point, in WGS84.
  * altitude `number`: Altitude above the reference ellipsoid, in meters.
  * latitude `number`: Latitude in degrees.
  * longitude `number`: Longitude in degrees.

### I18nLanguage
* I18nLanguage `object`: An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
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
* I18nRegion `object`: A *i18nRegion* resource identifies a region where YouTube is available.
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
  * bannerExternalUrl `string`: This is generated when a ChannelBanner.Insert request has succeeded for the given channel.
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
  * watchIconImageUrl `string`

### IngestionInfo
* IngestionInfo `object`: Describes information necessary for ingesting an RTMP or an HTTP stream.
  * backupIngestionAddress `string`: The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL.
  * ingestionAddress `string`: The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME* 
  * rtmpsBackupIngestionAddress `string`: This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.
  * rtmpsIngestionAddress `string`: This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.
  * streamName `string`: The HTTP or RTMP stream name that YouTube assigns to the video stream.

### InvideoBranding
* InvideoBranding `object`: LINT.IfChange Describes an invideo branding.
  * imageBytes `string`: The bytes the uploaded image. Only used in api to youtube communication.
  * imageUrl `string`: The url of the uploaded image. Only used in apiary to api communication.
  * position [InvideoPosition](#invideoposition)
  * targetChannelId `string`: The channel to which this branding links. If not present it defaults to the current channel.
  * timing [InvideoTiming](#invideotiming)

### InvideoPosition
* InvideoPosition `object`: Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.
  * cornerPosition `string` (values: topLeft, topRight, bottomLeft, bottomRight): Describes in which corner of the video the visual widget will appear.
  * type `string` (values: corner): Defines the position type.

### InvideoTiming
* InvideoTiming `object`: Describes a temporal position of a visual widget inside a video.
  * durationMs `string`: Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.
  * offsetMs `string`: Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.
  * type `string` (values: offsetFromStart, offsetFromEnd): Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.

### LanguageTag
* LanguageTag `object`
  * value `string`

### LevelDetails
* LevelDetails `object`
  * displayName `string`: The name that should be used when referring to this level.

### LiveBroadcast
* LiveBroadcast `object`: A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
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
  * closedCaptionsType `string` (values: closedCaptionsTypeUnspecified, closedCaptionsDisabled, closedCaptionsHttpPost, closedCaptionsEmbedded)
  * enableAutoStart `boolean`: This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.
  * enableAutoStop `boolean`: This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.
  * enableClosedCaptions `boolean`: This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST.
  * enableContentEncryption `boolean`: This setting indicates whether YouTube should enable content encryption for the broadcast.
  * enableDvr `boolean`: This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.
  * enableEmbed `boolean`: This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.
  * enableLowLatency `boolean`: Indicates whether this broadcast has low latency enabled.
  * latencyPreference `string` (values: latencyPreferenceUnspecified, normal, low, ultraLow): If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.
  * mesh `string`: The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags.
  * monitorStream [MonitorStreamInfo](#monitorstreaminfo)
  * projection `string` (values: projectionUnspecified, rectangular, 360, mesh): The projection format of this broadcast. This defaults to rectangular.
  * recordFromStart `boolean`: Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.
  * startWithSlate `boolean`: This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.

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
* LiveBroadcastSnippet `object`: Basic broadcast information.
  * actualEndTime `string`: The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. The value is specified in ISO 8601 format.
  * actualStartTime `string`: The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. The value is specified in ISO 8601 format.
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
  * description `string`: The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.
  * isDefaultBroadcast `boolean`: Indicates whether this broadcast is the default broadcast. Internal only.
  * liveChatId `string`: The id of the live chat for this broadcast.
  * publishedAt `string`: The date and time that the broadcast was added to YouTube's live broadcast schedule. The value is specified in ISO 8601 format.
  * scheduledEndTime `string`: The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 format.
  * scheduledStartTime `string`: The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.

### LiveBroadcastStatistics
* LiveBroadcastStatistics `object`: Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
  * totalChatCount `string`: The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not identify the number of chat messages for an archived video of a completed live broadcast.

### LiveBroadcastStatus
* LiveBroadcastStatus `object`: Live broadcast state.
  * lifeCycleStatus `string` (values: lifeCycleStatusUnspecified, created, ready, testing, live, complete, revoked, testStarting, liveStarting): The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.
  * liveBroadcastPriority `string` (values: liveBroadcastPriorityUnspecified, low, normal, high): Priority of the live broadcast event (internal state).
  * madeForKids `boolean`: Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only.
  * privacyStatus `string` (values: public, unlisted, private): The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.
  * recordingStatus `string` (values: liveBroadcastRecordingStatusUnspecified, notRecording, recording, recorded): The broadcast's recording status.
  * selfDeclaredMadeForKids `boolean`: This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work.

### LiveChatBan
* LiveChatBan `object`: A `__liveChatBan__` resource represents a ban for a YouTube live chat.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the ban.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`.
  * snippet [LiveChatBanSnippet](#livechatbansnippet)

### LiveChatBanSnippet
* LiveChatBanSnippet `object`
  * banDurationSeconds `string`: The duration of a ban, only filled if the ban has type TEMPORARY.
  * bannedUserDetails [ChannelProfileDetails](#channelprofiledetails)
  * liveChatId `string`: The chat this ban is pertinent to.
  * type `string` (values: liveChatBanTypeUnspecified, permanent, temporary): The type of ban.

### LiveChatFanFundingEventDetails
* LiveChatFanFundingEventDetails `object`
  * amountDisplayString `string`: A rendered string that displays the fund amount and currency to the user.
  * amountMicros `string`: The amount of the fund.
  * currency `string`: The currency in which the fund was made.
  * userComment `string`: The comment added by the user to this fan funding event.

### LiveChatMessage
* LiveChatMessage `object`: A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
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
  * items `array`
    * items [LiveChatMessage](#livechatmessage)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse".
  * nextPageToken `string`
  * offlineAt `string`: The date and time when the underlying stream went offline. The value is specified in ISO 8601 format.
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
  * publishedAt `string`: The date and time when the message was orignally published. The value is specified in ISO 8601 format.
  * superChatDetails [LiveChatSuperChatDetails](#livechatsuperchatdetails)
  * superStickerDetails [LiveChatSuperStickerDetails](#livechatsuperstickerdetails)
  * textMessageDetails [LiveChatTextMessageDetails](#livechattextmessagedetails)
  * type `string` (values: invalidType, textMessageEvent, tombstone, fanFundingEvent, chatEndedEvent, sponsorOnlyModeStartedEvent, sponsorOnlyModeEndedEvent, newSponsorEvent, messageDeletedEvent, messageRetractedEvent, userBannedEvent, superChatEvent, superStickerEvent): The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.
  * userBannedDetails [LiveChatUserBannedMessageDetails](#livechatuserbannedmessagedetails)

### LiveChatModerator
* LiveChatModerator `object`: A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
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

### LiveChatSuperChatDetails
* LiveChatSuperChatDetails `object`
  * amountDisplayString `string`: A rendered string that displays the fund amount and currency to the user.
  * amountMicros `string`: The amount purchased by the user, in micros (1,750,000 micros = 1.75).
  * currency `string`: The currency in which the purchase was made.
  * tier `integer`: The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
  * userComment `string`: The comment added by the user to this Super Chat event.

### LiveChatSuperStickerDetails
* LiveChatSuperStickerDetails `object`
  * amountDisplayString `string`: A rendered string that displays the fund amount and currency to the user.
  * amountMicros `string`: The amount purchased by the user, in micros (1,750,000 micros = 1.75).
  * currency `string`: The currency in which the purchase was made.
  * superStickerMetadata [SuperStickerMetadata](#superstickermetadata)
  * tier `integer`: The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.

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
  * severity `string` (values: info, warning, error): How severe this issue is to the stream.
  * type `string` (values: gopSizeOver, gopSizeLong, gopSizeShort, openGop, badContainer, audioBitrateHigh, audioBitrateLow, audioSampleRate, bitrateHigh, bitrateLow, audioCodec, videoCodec, noAudioStream, noVideoStream, multipleVideoStreams, multipleAudioStreams, audioTooManyChannels, interlacedVideo, frameRateHigh, resolutionMismatch, videoCodecMismatch, videoInterlaceMismatch, videoProfileMismatch, videoBitrateMismatch, framerateMismatch, gopMismatch, audioSampleRateMismatch, audioStereoMismatch, audioCodecMismatch, audioBitrateMismatch, videoResolutionSuboptimal, videoResolutionUnsupported, videoIngestionStarved, videoIngestionFasterThanRealtime): The kind of error happening.

### LiveStreamContentDetails
* LiveStreamContentDetails `object`: Detailed settings of a stream.
  * closedCaptionsIngestionUrl `string`: The ingestion URL where the closed captions of this stream are sent.
  * isReusable `boolean`: Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream. 

### LiveStreamHealthStatus
* LiveStreamHealthStatus `object`
  * configurationIssues `array`: The configurations issues on this stream
    * items [LiveStreamConfigurationIssue](#livestreamconfigurationissue)
  * lastUpdateTimeSeconds `string`: The last time this status was updated (in seconds)
  * status `string` (values: good, ok, bad, noData, revoked): The status code of this stream

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
  * publishedAt `string`: The date and time that the stream was created. The value is specified in ISO 8601 format.
  * title `string`: The stream's title. The value must be between 1 and 128 characters long.

### LiveStreamStatus
* LiveStreamStatus `object`: Brief description of the live stream status.
  * healthStatus [LiveStreamHealthStatus](#livestreamhealthstatus)
  * streamStatus `string` (values: created, ready, active, inactive, error)

### LocalizedProperty
* LocalizedProperty `object`
  * defaultLanguage [LanguageTag](#languagetag)
  * localized `array`
    * items [LocalizedString](#localizedstring)

### LocalizedString
* LocalizedString `object`
  * language `string`
  * value `string`

### Member
* Member `object`: A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
  * etag `string`: Etag of this resource.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#member".
  * snippet [MemberSnippet](#membersnippet)

### MemberListResponse
* MemberListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of members that match the request criteria.
    * items [Member](#member)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#memberListResponse".
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### MemberSnippet
* MemberSnippet `object`
  * creatorChannelId `string`: The id of the channel that's offering memberships.
  * memberDetails [ChannelProfileDetails](#channelprofiledetails)
  * membershipsDetails [MembershipsDetails](#membershipsdetails)

### MembershipsDetails
* MembershipsDetails `object`
  * accessibleLevels `array`: Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase.
    * items `string`
  * highestAccessibleLevel `string`: Id of the highest level that the user has access to at the moment.
  * highestAccessibleLevelDisplayName `string`: Display name for the highest level that the user has access to at the moment.
  * membershipsDuration [MembershipsDuration](#membershipsduration)
  * membershipsDurationAtLevels `array`: Data about memberships duration on particular pricing levels.
    * items [MembershipsDurationAtLevel](#membershipsdurationatlevel)

### MembershipsDuration
* MembershipsDuration `object`
  * memberSince `string`: The date and time when the user became a continuous member across all levels.
  * memberTotalDurationMonths `integer`: The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).

### MembershipsDurationAtLevel
* MembershipsDurationAtLevel `object`
  * level `string`: Pricing level ID.
  * memberSince `string`: The date and time when the user became a continuous member for the given level.
  * memberTotalDurationMonths `integer`: The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).

### MembershipsLevel
* MembershipsLevel `object`: A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the memberships level.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".
  * snippet [MembershipsLevelSnippet](#membershipslevelsnippet)

### MembershipsLevelListResponse
* MembershipsLevelListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of pricing levels offered by a creator to the fans.
    * items [MembershipsLevel](#membershipslevel)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### MembershipsLevelSnippet
* MembershipsLevelSnippet `object`
  * creatorChannelId `string`: The id of the channel that's offering channel memberships.
  * levelDetails [LevelDetails](#leveldetails)

### MonitorStreamInfo
* MonitorStreamInfo `object`: Settings and Info of the monitor stream
  * broadcastStreamDelayMs `integer`: If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
  * embedHtml `string`: HTML code that embeds a player that plays the monitor stream.
  * enableMonitorStream `boolean`: This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state.

### PageInfo
* PageInfo `object`: Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
  * resultsPerPage `integer`: The number of results included in the API response.
  * totalResults `integer`: The total number of results in the result set.

### Playlist
* Playlist `object`: A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.
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
* PlaylistItem `object`: A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.
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
  * videoPublishedAt `string`: The date and time that the video was published to YouTube. The value is specified in ISO 8601 format.

### PlaylistItemListResponse
* PlaylistItemListResponse `object`
  * etag `string`
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of playlist items that match the request criteria.
    * items [PlaylistItem](#playlistitem)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". Etag of this resource.
  * nextPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * prevPageToken `string`: The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The visitorId identifies the visitor.

### PlaylistItemSnippet
* PlaylistItemSnippet `object`: Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 13
  * channelId `string`: The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
  * channelTitle `string`: Channel title for the channel that the playlist item belongs to.
  * description `string`: The item's description.
  * playlistId `string`: The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.
  * position `integer`: The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
  * publishedAt `string`: The date and time that the item was added to the playlist. The value is specified in ISO 8601 format.
  * resourceId [ResourceId](#resourceid)
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The item's title.

### PlaylistItemStatus
* PlaylistItemStatus `object`: Information about the playlist item's privacy status.
  * privacyStatus `string` (values: public, unlisted, private): This resource's privacy status.

### PlaylistListResponse
* PlaylistListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of playlists that match the request criteria
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
  * tags `array`: Keyword tags associated with the playlist.
    * items `string`
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that published the playlist.
  * channelTitle `string`: The channel title of the channel that the video belongs to.
  * defaultLanguage `string`: The language of the playlist's default title and description.
  * description `string`: The playlist's description.
  * localized [PlaylistLocalization](#playlistlocalization)
  * publishedAt `string`: The date and time that the playlist was created. The value is specified in ISO 8601 format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The playlist's title.

### PlaylistStatus
* PlaylistStatus `object`
  * privacyStatus `string` (values: public, unlisted, private): The playlist's privacy status.

### PropertyValue
* PropertyValue `object`: A pair Property / Value.
  * property `string`: A property.
  * value `string`: The property's value.

### RelatedEntity
* RelatedEntity `object`
  * entity [Entity](#entity)

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
  * items `array`: Pagination information for token pagination.
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
  * liveBroadcastContent `string` (values: none, upcoming, live, completed): It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts.
  * publishedAt `string`: The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The title of the search result.

### Sponsor
* Sponsor `object`: A `__sponsor__` resource represents a sponsor for a YouTube channel. A sponsor provides recurring monetary support to a creator and receives special benefits.
  * etag `string`: Etag of this resource.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"youtube#sponsor"`.
  * snippet [SponsorSnippet](#sponsorsnippet)

### SponsorListResponse
* SponsorListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of sponsors that match the request criteria.
    * items [Sponsor](#sponsor)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"youtube#sponsorListResponse".
  * nextPageToken `string`: The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * visitorId `string`: The `visitorId` identifies the visitor.

### SponsorSnippet
* SponsorSnippet `object`
  * channelId `string`: The id of the channel being sponsored.
  * cumulativeDurationMonths `integer`: The cumulative time a user has been a sponsor in months.
  * sponsorDetails [ChannelProfileDetails](#channelprofiledetails)
  * sponsorSince `string`: The date and time when the user became a sponsor. The value is specified in ISO 8601 (`YYYY-MM-DDThh:mm:ss.sZ`) format.

### Subscription
* Subscription `object`: A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
  * contentDetails [SubscriptionContentDetails](#subscriptioncontentdetails)
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube uses to uniquely identify the subscription.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".
  * snippet [SubscriptionSnippet](#subscriptionsnippet)
  * subscriberSnippet [SubscriptionSubscriberSnippet](#subscriptionsubscribersnippet)

### SubscriptionContentDetails
* SubscriptionContentDetails `object`: Details about the content to witch a subscription refers.
  * activityType `string` (values: subscriptionActivityTypeUnspecified, all, uploads): The type of activity this subscription is for (only uploads, everything).
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
  * publishedAt `string`: The date and time that the subscription was created. The value is specified in ISO 8601 format.
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
* SuperChatEvent `object`: A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
  * etag `string`: Etag of this resource.
  * id `string`: The ID that YouTube assigns to uniquely identify the Super Chat event.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`.
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
  * createdAt `string`: The date and time when the event occurred. The value is specified in ISO 8601 format.
  * currency `string`: The currency in which the purchase was made. ISO 4217.
  * displayString `string`: A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language.
  * isSuperStickerEvent `boolean`: True if this event is a Super Sticker event.
  * messageType `integer`: The tier for the paid message, which is based on the amount of money spent to purchase the message.
  * superStickerMetadata [SuperStickerMetadata](#superstickermetadata)
  * supporterDetails [ChannelProfileDetails](#channelprofiledetails)

### SuperStickerMetadata
* SuperStickerMetadata `object`
  * altText `string`: Internationalized alt text that describes the sticker image and any animation associated with it.
  * altTextLanguage `string`: Specifies the localization language in which the alt text is returned.
  * stickerId `string`: Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker.

### TestItem
* TestItem `object`
  * gaia `string`
  * id `string`
  * snippet [TestItemTestItemSnippet](#testitemtestitemsnippet)

### TestItemTestItemSnippet
* TestItemTestItemSnippet `object`

### ThirdPartyLink
* ThirdPartyLink `object`: A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
  * etag `string`: Etag of this resource
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink".
  * linkingToken `string`: The linking_token identifies a YouTube account and channel with which the third party account is linked.
  * snippet [ThirdPartyLinkSnippet](#thirdpartylinksnippet)
  * status [ThirdPartyLinkStatus](#thirdpartylinkstatus)

### ThirdPartyLinkSnippet
* ThirdPartyLinkSnippet `object`: Basic information about a third party account link, including its type and type-specific information.
  * channelToStoreLink [ChannelToStoreLinkDetails](#channeltostorelinkdetails)
  * type `string` (values: linkUnspecified, channelToStoreLink): Type of the link named after the entities that are being linked.

### ThirdPartyLinkStatus
* ThirdPartyLinkStatus `object`: The third-party link status object contains information about the status of the link.
  * linkStatus `string` (values: unknown, failed, pending, linked)

### Thumbnail
* Thumbnail `object`: A thumbnail is an image representing a YouTube resource.
  * height `integer`: (Optional) Height of the thumbnail image.
  * url `string`: The thumbnail image's URL.
  * width `integer`: (Optional) Width of the thumbnail image.

### ThumbnailDetails
* ThumbnailDetails `object`: Internal representation of thumbnails for a YouTube resource.
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
* Video `object`: A *video* resource represents a YouTube video.
  * ageGating [VideoAgeGating](#videoagegating)
  * contentDetails [VideoContentDetails](#videocontentdetails)
  * etag `string`: Etag of this resource.
  * fileDetails [VideoFileDetails](#videofiledetails)
  * id `string`: The ID that YouTube uses to uniquely identify the video.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#video".
  * liveStreamingDetails [VideoLiveStreamingDetails](#videolivestreamingdetails)
  * localizations `object`: The localizations object contains localized versions of the basic details about the video, such as its title and description.
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
* VideoAbuseReportReason `object`: A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
  * etag `string`: Etag of this resource.
  * id `string`: The ID of this abuse report reason.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`.
  * snippet [VideoAbuseReportReasonSnippet](#videoabusereportreasonsnippet)

### VideoAbuseReportReasonListResponse
* VideoAbuseReportReasonListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of valid abuse reasons that are used with `video.ReportAbuse`.
    * items [VideoAbuseReportReason](#videoabusereportreason)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`.
  * visitorId `string`: The `visitorId` identifies the visitor.

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
* VideoCategory `object`: A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.
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
  * caption `string` (values: true, false): The value of captions indicates whether the video has captions or not.
  * contentRating [ContentRating](#contentrating)
  * countryRestriction [AccessPolicy](#accesspolicy)
  * definition `string` (values: sd, hd): The value of definition indicates whether the video is available in high definition or only in standard definition.
  * dimension `string`: The value of dimension indicates whether the video is available in 3D or in 2D.
  * duration `string`: The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.
  * hasCustomThumbnail `boolean`: Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
  * licensedContent `boolean`: The value of is_license_content indicates whether the video is licensed content.
  * projection `string` (values: rectangular, 360): Specifies the projection format of the video.
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
  * creationTime `string`: The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM 
  * durationMs `string`: The length of the uploaded video in milliseconds.
  * fileName `string`: The uploaded file's name. This field is present whether a video file or another type of file was uploaded.
  * fileSize `string`: The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.
  * fileType `string` (values: video, audio, image, archive, document, project, other): The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
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
  * rotation `string` (values: none, clockwise, upsideDown, counterClockwise, other): The amount that YouTube needs to rotate the original source content to properly display the video.
  * vendor `string`: A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
  * widthPixels `integer`: The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.

### VideoListResponse
* VideoListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`
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
  * actualEndTime `string`: The time that the broadcast actually ended. The value is specified in ISO 8601 format. This value will not be available until the broadcast is over.
  * actualStartTime `string`: The time that the broadcast actually started. The value is specified in ISO 8601 format. This value will not be available until the broadcast begins.
  * concurrentViewers `string`: The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
  * scheduledEndTime `string`: The time that the broadcast is scheduled to end. The value is specified in ISO 8601 format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.
  * scheduledStartTime `string`: The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 format.

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
  * processingFailureReason `string` (values: uploadFailed, transcodeFailed, streamingFailed, other): The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.
  * processingIssuesAvailability `string`: This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
  * processingProgress [VideoProcessingDetailsProcessingProgress](#videoprocessingdetailsprocessingprogress)
  * processingStatus `string` (values: processing, succeeded, failed, terminated): The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
  * tagSuggestionsAvailability `string`: This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
  * thumbnailsAvailability `string`: This value indicates whether thumbnail images have been generated for the video.

### VideoProcessingDetailsProcessingProgress
* VideoProcessingDetailsProcessingProgress `object`: Video processing progress and completion time estimate.
  * partsProcessed `string`: The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
  * partsTotal `string`: An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
  * timeLeftMs `string`: An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.

### VideoProjectDetails
* VideoProjectDetails `object`: Project specific details about the content of a YouTube Video.
  * tags `array`: A list of project tags associated with the video during the upload.
    * items `string`

### VideoRating
* VideoRating `object`: Basic details about rating of a video.
  * rating `string` (values: none, like, dislike): Rating of a video.
  * videoId `string`: The ID that YouTube uses to uniquely identify the video.

### VideoRatingListResponse
* VideoRatingListResponse `object`
  * etag `string`: Etag of this resource.
  * eventId `string`: Serialized EventId of the request which produced this response.
  * items `array`: A list of ratings that match the request criteria.
    * items [VideoRating](#videorating)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".
  * visitorId `string`: The visitorId identifies the visitor.

### VideoRecordingDetails
* VideoRecordingDetails `object`: Recording information associated with the video.
  * location [GeoPoint](#geopoint)
  * locationDescription `string`: The text description of the location where the video was recorded.
  * recordingDate `string`: The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.

### VideoSnippet
* VideoSnippet `object`: Basic details about a video, including title, description, uploader, thumbnails and category.
  * tags `array`: A list of keyword tags associated with the video. Tags may contain spaces.
    * items `string`
  * categoryId `string`: The YouTube video category associated with the video.
  * channelId `string`: The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
  * channelTitle `string`: Channel title for the channel that the video belongs to.
  * defaultAudioLanguage `string`: The default_audio_language property specifies the language spoken in the video's default audio track.
  * defaultLanguage `string`: The language of the videos's default snippet.
  * description `string`: The video's description. @mutable youtube.videos.insert youtube.videos.update
  * liveBroadcastContent `string` (values: none, upcoming, live, completed): Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.
  * localized [VideoLocalization](#videolocalization)
  * publishedAt `string`: The date and time that the video was uploaded. The value is specified in ISO 8601 format.
  * thumbnails [ThumbnailDetails](#thumbnaildetails)
  * title `string`: The video's title. @mutable youtube.videos.insert youtube.videos.update

### VideoStatistics
* VideoStatistics `object`: Statistics about the video, such as the number of times the video was viewed or liked.
  * commentCount `string`: The number of comments for the video.
  * dislikeCount `string`: The number of users who have indicated that they disliked the video by giving it a negative rating.
  * favoriteCount `string`: The number of users who currently have the video marked as a favorite video.
  * likeCount `string`: The number of users who have indicated that they liked the video by giving it a positive rating.
  * viewCount `string`: The number of times the video has been viewed.

### VideoStatus
* VideoStatus `object`: Basic details about a video category, such as its localized title. Next Id: 17
  * embeddable `boolean`: This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update
  * failureReason `string` (values: conversion, invalidFile, emptyFile, tooSmall, codec, uploadAborted): This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
  * license `string` (values: youtube, creativeCommon): The video's license. @mutable youtube.videos.insert youtube.videos.update
  * madeForKids `boolean`
  * privacyStatus `string` (values: public, unlisted, private): The video's privacy status.
  * publicStatsViewable `boolean`: This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update
  * publishAt `string`: The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in ISO 8601 format.
  * rejectionReason `string` (values: copyright, inappropriate, duplicate, termsOfUse, uploaderAccountSuspended, length, claim, uploaderAccountClosed, trademark, legal): This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
  * selfDeclaredMadeForKids `boolean`
  * uploadStatus `string` (values: uploaded, processed, failed, rejected, deleted): The status of the uploaded video.

### VideoSuggestions
* VideoSuggestions `object`: Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
  * editorSuggestions `array`: A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
    * items `string` (values: videoAutoLevels, videoStabilize, videoCrop, audioQuietAudioSwap)
  * processingErrors `array`: A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.
    * items `string` (values: audioFile, imageFile, projectFile, notAVideoFile, docFile, archiveFile, unsupportedSpatialAudioLayout)
  * processingHints `array`: A list of suggestions that may improve YouTube's ability to process the video.
    * items `string` (values: nonStreamableMov, sendBestQualityVideo, sphericalVideo, spatialAudio, vrVideo, hdrVideo)
  * processingWarnings `array`: A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
    * items `string` (values: unknownContainer, unknownVideoCodec, unknownAudioCodec, inconsistentResolution, hasEditlist, problematicVideoCodec, problematicAudioCodec, unsupportedVrStereoMode, unsupportedSphericalProjectionType, unsupportedHdrPixelFormat, unsupportedHdrColorMetadata, problematicHdrLookupTable)
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
  * topicIds `array`: A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the < a href="http://wiki.freebase.com/wiki/Topic_API">Freebase Topic API.
    * items `string`

### WatchSettings
* WatchSettings `object`: Branding properties for the watch. All deprecated.
  * backgroundColor `string`: The text color for the video watch page's branded area.
  * featuredPlaylistId `string`: An ID that uniquely identifies a playlist that displays next to the video player.
  * textColor `string`: The background color for the video watch page's branded area.


