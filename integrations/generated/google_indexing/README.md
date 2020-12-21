# @datafire/google_indexing

Client library for Indexing API

## Installation and Usage
```bash
npm install --save @datafire/google_indexing
```
```js
let google_indexing = require('@datafire/google_indexing').create({
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

Notifies Google when your web pages change.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_indexing.oauthCallback({
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
google_indexing.oauthRefresh(null, context)
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

### indexing.urlNotifications.getMetadata
Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.


```js
google_indexing.indexing.urlNotifications.getMetadata({}, context)
```

#### Input
* input `object`
  * url `string`: URL that is being queried.
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
* output [UrlNotificationMetadata](#urlnotificationmetadata)

### indexing.urlNotifications.publish
Notifies that a URL has been updated or deleted.


```js
google_indexing.indexing.urlNotifications.publish({}, context)
```

#### Input
* input `object`
  * body [UrlNotification](#urlnotification)
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
* output [PublishUrlNotificationResponse](#publishurlnotificationresponse)



## Definitions

### PublishUrlNotificationResponse
* PublishUrlNotificationResponse `object`: Output for PublishUrlNotification
  * urlNotificationMetadata [UrlNotificationMetadata](#urlnotificationmetadata)

### UrlNotification
* UrlNotification `object`: `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
  * notifyTime `string`: Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time.
  * type `string` (values: URL_NOTIFICATION_TYPE_UNSPECIFIED, URL_UPDATED, URL_DELETED): The URL life cycle event that Google is being notified about.
  * url `string`: The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google.

### UrlNotificationMetadata
* UrlNotificationMetadata `object`: Summary of the most recent Indexing API notifications successfully received, for a given URL.
  * latestRemove [UrlNotification](#urlnotification)
  * latestUpdate [UrlNotification](#urlnotification)
  * url `string`: URL to which this metadata refers.


