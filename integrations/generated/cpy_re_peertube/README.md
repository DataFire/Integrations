# @datafire/cpy_re_peertube

Client library for PeerTube

## Installation and Usage
```bash
npm install --save @datafire/cpy_re_peertube
```
```js
let cpy_re_peertube = require('@datafire/cpy_re_peertube').create({
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

# Introduction

The PeerTube API is built on HTTP(S) and is RESTful. You can use your favorite
HTTP/REST library for your programming language to use PeerTube. The spec API is fully compatible with
[openapi-generator](https://github.com/OpenAPITools/openapi-generator/wiki/API-client-generator-HOWTO)
which generates a client SDK in the language of your choice - we generate some client SDKs automatically:

- [Python](https://framagit.org/framasoft/peertube/clients/python)
- [Go](https://framagit.org/framasoft/peertube/clients/go)
- [Kotlin](https://framagit.org/framasoft/peertube/clients/kotlin)

See the [Quick Start guide](https://docs.joinpeertube.org/#/api-rest-getting-started) so you can play with the PeerTube API.

# Authentication

When you sign up for an account, you are given the possibility to generate
sessions, and authenticate using this session token. One session token can
currently be used at a time.

## Roles

Accounts are given permissions based on their role. There are three roles on
PeerTube: Administrator, Moderator, and User. See the [roles guide](https://docs.joinpeertube.org/#/admin-managing-users?id=roles) for a detail of their permissions.

# Errors

The API uses standard HTTP status codes to indicate the success or failure
of the API call. The body of the response will be JSON in the following
format.

```
{
  "code": "unauthorized_request", // example inner error code
  "error": "Token is invalid." // example exposed error message
}
```


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
cpy_re_peertube.oauthCallback({
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
cpy_re_peertube.oauthRefresh(null, context)
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

### abuses.get
List abuses


```js
cpy_re_peertube.abuses.get({}, context)
```

#### Input
* input `object`
  * id `integer`: only list the report with this id
  * predefinedReason `array`: predefined reason the listed reports should contain
  * search `string`: plain search that will match with video titles, reporter names and more
  * state `integer` (values: 1, 2, 3): The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)
  * searchReporter `string`: only list reports of a specific reporter
  * searchReportee `string`: only list reports of a specific reportee
  * searchVideo `string`: only list reports of a specific video
  * searchVideoChannel `string`: only list reports of a specific video channel
  * videoIs `string` (values: deleted, blacklisted): only list blacklisted or deleted videos
  * filter `string` (values: video, comment, account): only list account, comment or video reports
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: -id, -createdAt, -state): Sort abuses by criteria

#### Output
* output `array`
  * items [Abuse](#abuse)

### abuses.post
Report an abuse


```js
cpy_re_peertube.abuses.post({
  "body": {
    "reason": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * account `object`
      * id `number`: Account id to report
    * comment `object`
      * id `number`: Comment id to report
    * predefinedReasons [PredefinedAbuseReasons](#predefinedabusereasons)
    * reason **required** `string`: Reason why the user reports this video
    * video `object`
      * endAt `integer`: Timestamp in the video that marks the ending of the report
      * id `number`: Video id to report
      * startAt `integer`: Timestamp in the video that marks the beginning of the report

#### Output
*Output schema unknown*

### abuses.abuseId.delete
Delete an abuse


```js
cpy_re_peertube.abuses.abuseId.delete({
  "abuseId": 0
}, context)
```

#### Input
* input `object`
  * abuseId **required** `integer`: Abuse id

#### Output
*Output schema unknown*

### abuses.abuseId.put
Update an abuse


```js
cpy_re_peertube.abuses.abuseId.put({
  "abuseId": 0
}, context)
```

#### Input
* input `object`
  * abuseId **required** `integer`: Abuse id
  * body `object`
    * moderationComment `string`: Update the report comment visible only to the moderation team
    * state [AbuseStateSet](#abusestateset)

#### Output
*Output schema unknown*

### abuses.abuseId.messages.get
List messages of an abuse


```js
cpy_re_peertube.abuses.abuseId.messages.get({
  "abuseId": 0
}, context)
```

#### Input
* input `object`
  * abuseId **required** `integer`: Abuse id

#### Output
* output `array`
  * items [AbuseMessage](#abusemessage)

### abuses.abuseId.messages.post
Add message to an abuse


```js
cpy_re_peertube.abuses.abuseId.messages.post({
  "abuseId": 0,
  "body": {
    "message": ""
  }
}, context)
```

#### Input
* input `object`
  * abuseId **required** `integer`: Abuse id
  * body **required** `object`
    * message **required** `string`: Message to send

#### Output
*Output schema unknown*

### abuses.abuseId.messages.abuseMessageId.delete
Delete an abuse message


```js
cpy_re_peertube.abuses.abuseId.messages.abuseMessageId.delete({
  "abuseId": 0,
  "abuseMessageId": 0
}, context)
```

#### Input
* input `object`
  * abuseId **required** `integer`: Abuse id
  * abuseMessageId **required** `integer`: Abuse message id

#### Output
*Output schema unknown*

### accounts.get
List accounts


```js
cpy_re_peertube.accounts.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output `array`
  * items [Account](#account)

### accounts.name.get
Get an account


```js
cpy_re_peertube.accounts.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The username or handle of the account

#### Output
* output [Account](#account)

### accounts.name.ratings.get
List ratings of an account


```js
cpy_re_peertube.accounts.name.ratings.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The username or handle of the account
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column
  * rating `string` (values: like, dislike): Optionally filter which ratings to retrieve

#### Output
* output `array`
  * items [VideoRating](#videorating)

### accounts.name.video_channels.get
List video channels of an account


```js
cpy_re_peertube.accounts.name.video_channels.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The username or handle of the account
  * withStats `boolean`: include view statistics for the last 30 days (only if authentified as the account user)
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output `array`
  * items [VideoChannel](#videochannel)

### accounts.name.videos.get
List videos of an account


```js
cpy_re_peertube.accounts.name.videos.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The username or handle of the account
  * nsfw `string` (values: true, false): whether to include nsfw videos, if any
  * filter `string` (values: local, all-local): Special filters which might require special rights:
  * skipCount `string` (values: true, false): if you don't need the `total` in the response
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: name, -duration, -createdAt, -publishedAt, -views, -likes, -trending): Sort videos by criteria

#### Output
* output [VideoListResponse](#videolistresponse)

### blocklist.accounts.get
List account blocks


```js
cpy_re_peertube.blocklist.accounts.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
*Output schema unknown*

### blocklist.accounts.post
Block an account


```js
cpy_re_peertube.blocklist.accounts.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * accountName **required** `string`: account to block, in the form `username@domain`

#### Output
*Output schema unknown*

### blocklist.accounts.accountName.delete
Unblock an account by its handle


```js
cpy_re_peertube.blocklist.accounts.accountName.delete({
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: account to unblock, in the form `username@domain`

#### Output
*Output schema unknown*

### blocklist.servers.get
List server blocks


```js
cpy_re_peertube.blocklist.servers.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
*Output schema unknown*

### blocklist.servers.post
Block a server


```js
cpy_re_peertube.blocklist.servers.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * host **required** `string`: server domain to block

#### Output
*Output schema unknown*

### blocklist.servers.host.delete
Unblock a server by its domain


```js
cpy_re_peertube.blocklist.servers.host.delete({
  "host": ""
}, context)
```

#### Input
* input `object`
  * host **required** `string`: server domain to unblock

#### Output
*Output schema unknown*

### config.get
Get instance public configuration


```js
cpy_re_peertube.config.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServerConfig](#serverconfig)

### config.about.get
Get instance "About" information


```js
cpy_re_peertube.config.about.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServerConfigAbout](#serverconfigabout)

### config.custom.delete
Delete instance runtime configuration


```js
cpy_re_peertube.config.custom.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### config.custom.get
Get instance runtime configuration


```js
cpy_re_peertube.config.custom.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServerConfigCustom](#serverconfigcustom)

### config.custom.put
Set instance runtime configuration


```js
cpy_re_peertube.config.custom.put(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### feeds.video_comments.format.get
List comments on videos


```js
cpy_re_peertube.feeds.video_comments.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, rss, rss2, atom, atom1, json, json1): format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))
  * videoId `string`: limit listing to a specific video
  * accountId `string`: limit listing to a specific account
  * accountName `string`: limit listing to a specific account
  * videoChannelId `string`: limit listing to a specific video channel
  * videoChannelName `string`: limit listing to a specific video channel

#### Output
* output `object`

### feeds.videos.format.get
List videos


```js
cpy_re_peertube.feeds.videos.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, rss, rss2, atom, atom1, json, json1): format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))
  * accountId `string`: limit listing to a specific account
  * accountName `string`: limit listing to a specific account
  * videoChannelId `string`: limit listing to a specific video channel
  * videoChannelName `string`: limit listing to a specific video channel
  * sort `string`: Sort column
  * nsfw `string` (values: true, false): whether to include nsfw videos, if any
  * filter `string` (values: local, all-local): Special filters which might require special rights:

#### Output
* output `object`

### jobs.state.get
List instance jobs


```js
cpy_re_peertube.jobs.state.get({
  "state": ""
}, context)
```

#### Input
* input `object`
  * state **required** `string` (values: , active, completed, failed, waiting, delayed): The state of the job ('' for for no filter)
  * jobType `string` (values: activitypub-follow, activitypub-http-broadcast, activitypub-http-fetcher, activitypub-http-unicast, email, video-transcoding, video-file-import, video-import, videos-views, activitypub-refresher, video-redundancy, video-live-ending): job type
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output `object`
  * data `array`
    * items [Job](#job)
  * total `integer`

### plugins.get
List plugins


```js
cpy_re_peertube.plugins.get({}, context)
```

#### Input
* input `object`
  * pluginType `integer`
  * uninstalled `boolean`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output [PluginResponse](#pluginresponse)

### plugins.available.get
List available plugins


```js
cpy_re_peertube.plugins.available.get({}, context)
```

#### Input
* input `object`
  * search `string`
  * pluginType `integer`
  * currentPeerTubeEngine `string`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output [PluginResponse](#pluginresponse)

### plugins.install.post
Install a plugin


```js
cpy_re_peertube.plugins.install.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### plugins.uninstall.post
Uninstall a plugin


```js
cpy_re_peertube.plugins.uninstall.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * npmName **required** `string`: name of the plugin/theme in its package.json

#### Output
*Output schema unknown*

### plugins.update.post
Update a plugin


```js
cpy_re_peertube.plugins.update.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### plugins.npmName.get
Get a plugin


```js
cpy_re_peertube.plugins.npmName.get({
  "npmName": ""
}, context)
```

#### Input
* input `object`
  * npmName **required** `string`: name of the plugin/theme on npmjs.com or in its package.json

#### Output
* output [Plugin](#plugin)

### plugins.npmName.public_settings.get
Get a plugin's public settings


```js
cpy_re_peertube.plugins.npmName.public_settings.get({
  "npmName": ""
}, context)
```

#### Input
* input `object`
  * npmName **required** `string`: name of the plugin/theme on npmjs.com or in its package.json

#### Output
* output `object`

### plugins.npmName.registered_settings.get
Get a plugin's registered settings


```js
cpy_re_peertube.plugins.npmName.registered_settings.get({
  "npmName": ""
}, context)
```

#### Input
* input `object`
  * npmName **required** `string`: name of the plugin/theme on npmjs.com or in its package.json

#### Output
* output `object`

### plugins.npmName.settings.put
Set a plugin's settings


```js
cpy_re_peertube.plugins.npmName.settings.put({
  "npmName": ""
}, context)
```

#### Input
* input `object`
  * npmName **required** `string`: name of the plugin/theme on npmjs.com or in its package.json
  * body `object`
    * settings `object`

#### Output
*Output schema unknown*

### redundancy.videos.get
List videos being mirrored


```js
cpy_re_peertube.redundancy.videos.get({
  "target": ""
}, context)
```

#### Input
* input `object`
  * target **required** `string` (values: my-videos, remote-videos): direction of the mirror
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: name): Sort abuses by criteria

#### Output
* output `array`
  * items [VideoRedundancy](#videoredundancy)

### redundancy.videos.post
Mirror a video


```js
cpy_re_peertube.redundancy.videos.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * videoId **required** `integer`

#### Output
*Output schema unknown*

### redundancy.videos.redundancyId.delete
Delete a mirror done on a video


```js
cpy_re_peertube.redundancy.videos.redundancyId.delete({
  "redundancyId": ""
}, context)
```

#### Input
* input `object`
  * redundancyId **required** `string`: id of an existing redundancy on a video

#### Output
*Output schema unknown*

### redundancy.host.put
Update a server redundancy policy


```js
cpy_re_peertube.redundancy.host.put({
  "host": ""
}, context)
```

#### Input
* input `object`
  * host **required** `string`: server domain to mirror
  * body `object`
    * redundancyAllowed **required** `boolean`: allow mirroring of the host's local videos

#### Output
*Output schema unknown*

### search.video_channels.get
Search channels


```js
cpy_re_peertube.search.video_channels.get({
  "search": ""
}, context)
```

#### Input
* input `object`
  * search **required** `string`: String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete channel information and interact with it.
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * searchTarget `string` (values: local, search-index): If the administrator enabled search index support, you can override the default search target.
  * sort `string`: Sort column

#### Output
* output `array`
  * items [VideoChannel](#videochannel)

### search.videos.get
Search videos


```js
cpy_re_peertube.search.videos.get({
  "search": ""
}, context)
```

#### Input
* input `object`
  * search **required** `string`: String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete video information and interact with it.
  * nsfw `string` (values: true, false): whether to include nsfw videos, if any
  * filter `string` (values: local, all-local): Special filters which might require special rights:
  * skipCount `string` (values: true, false): if you don't need the `total` in the response
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * searchTarget `string` (values: local, search-index): If the administrator enabled search index support, you can override the default search target.
  * sort `string` (values: name, -duration, -createdAt, -publishedAt, -views, -likes, -match): Sort videos by criteria
  * startDate `string`: Get videos that are published after this date
  * endDate `string`: Get videos that are published before this date
  * originallyPublishedStartDate `string`: Get videos that are originally published after this date
  * originallyPublishedEndDate `string`: Get videos that are originally published before this date
  * durationMin `integer`: Get videos that have this minimum duration
  * durationMax `integer`: Get videos that have this maximum duration

#### Output
* output [VideoListResponse](#videolistresponse)

### server.followers.get
List instance followers


```js
cpy_re_peertube.server.followers.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output `array`
  * items [Follow](#follow)

### server.following.get
List instances followed by the server


```js
cpy_re_peertube.server.following.get({}, context)
```

#### Input
* input `object`
  * state `string` (values: pending, accepted)
  * actorType `string` (values: Person, Application, Group, Service, Organization)
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output `array`
  * items [Follow](#follow)

### server.following.post
Follow a server


```js
cpy_re_peertube.server.following.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * hosts `array`
      * items `string`

#### Output
*Output schema unknown*

### server.following.host.delete
Unfollow a server


```js
cpy_re_peertube.server.following.host.delete({
  "host": ""
}, context)
```

#### Input
* input `object`
  * host **required** `string`: The host to unfollow 

#### Output
*Output schema unknown*

### users.get
List users


```js
cpy_re_peertube.users.get({}, context)
```

#### Input
* input `object`
  * search `string`: Plain text search that will match with user usernames or emails
  * blocked `boolean`: Filter results down to (un)banned users
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: -id, -username, -createdAt): Sort users by criteria

#### Output
* output `array`
  * items [User](#user)

### users.post
Create a user


```js
cpy_re_peertube.users.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [AddUser](#adduser)

#### Output
* output [AddUserResponse](#adduserresponse)

### users.me.get
Get my user information


```js
cpy_re_peertube.users.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [User](#user)

### users.me.put
Update my user information


```js
cpy_re_peertube.users.me.put({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [UpdateMe](#updateme)

#### Output
*Output schema unknown*

### users.me.abuses.get
List my abuses


```js
cpy_re_peertube.users.me.abuses.get({}, context)
```

#### Input
* input `object`
  * id `integer`: only list the report with this id
  * state `integer` (values: 1, 2, 3): The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: -id, -createdAt, -state): Sort abuses by criteria

#### Output
* output `array`
  * items [Abuse](#abuse)

### users.me.avatar.pick.post
Update my user avatar


```js
cpy_re_peertube.users.me.avatar.pick.post({}, context)
```

#### Input
* input `object`
  * avatarfile `string`: The file to upload.

#### Output
* output [Avatar](#avatar)

### users.me.history.videos.get
List watched videos history


```js
cpy_re_peertube.users.me.history.videos.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return

#### Output
* output [VideoListResponse](#videolistresponse)

### users.me.history.videos.remove.post
Clear video history


```js
cpy_re_peertube.users.me.history.videos.remove.post({}, context)
```

#### Input
* input `object`
  * beforeDate `string`: history before this date will be deleted

#### Output
*Output schema unknown*

### users.me.notification_settings.put
Update my notification settings


```js
cpy_re_peertube.users.me.notification_settings.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * abuseAsModerator [NotificationSettingValue](#notificationsettingvalue)
    * autoInstanceFollowing [NotificationSettingValue](#notificationsettingvalue)
    * blacklistOnMyVideo [NotificationSettingValue](#notificationsettingvalue)
    * commentMention [NotificationSettingValue](#notificationsettingvalue)
    * myVideoImportFinished [NotificationSettingValue](#notificationsettingvalue)
    * myVideoPublished [NotificationSettingValue](#notificationsettingvalue)
    * newCommentOnMyVideo [NotificationSettingValue](#notificationsettingvalue)
    * newFollow [NotificationSettingValue](#notificationsettingvalue)
    * newInstanceFollower [NotificationSettingValue](#notificationsettingvalue)
    * newUserRegistration [NotificationSettingValue](#notificationsettingvalue)
    * newVideoFromSubscription [NotificationSettingValue](#notificationsettingvalue)
    * videoAutoBlacklistAsModerator [NotificationSettingValue](#notificationsettingvalue)

#### Output
*Output schema unknown*

### users.me.notifications.get
List my notifications


```js
cpy_re_peertube.users.me.notifications.get({}, context)
```

#### Input
* input `object`
  * unread `boolean`: only list unread notifications
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output [NotificationListResponse](#notificationlistresponse)

### users.me.notifications.read.post
Mark notifications as read by their id


```js
cpy_re_peertube.users.me.notifications.read.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * ids **required** `array`: ids of the notifications to mark as read
      * items `integer`

#### Output
*Output schema unknown*

### users.me.notifications.read_all.post
Mark all my notification as read


```js
cpy_re_peertube.users.me.notifications.read_all.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### users.me.subscriptions.get
Get my user subscriptions


```js
cpy_re_peertube.users.me.subscriptions.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
*Output schema unknown*

### users.me.subscriptions.post
Add subscription to my user


```js
cpy_re_peertube.users.me.subscriptions.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * uri **required** `string`: uri of the video channels to subscribe to

#### Output
*Output schema unknown*

### users.me.subscriptions.exist.get
Get if subscriptions exist for my user


```js
cpy_re_peertube.users.me.subscriptions.exist.get({
  "uris": []
}, context)
```

#### Input
* input `object`
  * uris **required** `array`: list of uris to check if each is part of the user subscriptions

#### Output
* output `object`

### users.me.subscriptions.videos.get
List videos of subscriptions of my user


```js
cpy_re_peertube.users.me.subscriptions.videos.get({}, context)
```

#### Input
* input `object`
  * nsfw `string` (values: true, false): whether to include nsfw videos, if any
  * filter `string` (values: local, all-local): Special filters which might require special rights:
  * skipCount `string` (values: true, false): if you don't need the `total` in the response
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: name, -duration, -createdAt, -publishedAt, -views, -likes, -trending): Sort videos by criteria

#### Output
* output [VideoListResponse](#videolistresponse)

### users.me.subscriptions.subscriptionHandle.delete
Delete subscription of my user


```js
cpy_re_peertube.users.me.subscriptions.subscriptionHandle.delete({
  "subscriptionHandle": ""
}, context)
```

#### Input
* input `object`
  * subscriptionHandle **required** `string`: The subscription handle

#### Output
*Output schema unknown*

### users.me.subscriptions.subscriptionHandle.get
Get subscription of my user


```js
cpy_re_peertube.users.me.subscriptions.subscriptionHandle.get({
  "subscriptionHandle": ""
}, context)
```

#### Input
* input `object`
  * subscriptionHandle **required** `string`: The subscription handle

#### Output
* output [VideoChannel](#videochannel)

### users.me.video_playlists.videos_exist.get
Check video exists in my playlists


```js
cpy_re_peertube.users.me.video_playlists.videos_exist.get({
  "videoIds": []
}, context)
```

#### Input
* input `object`
  * videoIds **required** `array`: The video ids to check

#### Output
* output `object`
  * videoId `array`
    * items `object`
      * playlistElementId `integer`
      * playlistId `integer`
      * startTimestamp `integer`
      * stopTimestamp `integer`

### users.me.video_quota_used.get
Get my user used quota


```js
cpy_re_peertube.users.me.video_quota_used.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `number`

### users.me.videos.get
Get videos of my user


```js
cpy_re_peertube.users.me.videos.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output [VideoListResponse](#videolistresponse)

### users.me.videos.imports.get
Get video imports of my user


```js
cpy_re_peertube.users.me.videos.imports.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output [VideoImport](#videoimport)

### users.me.videos.videoId.rating.get
Get rate of my user for a video


```js
cpy_re_peertube.users.me.videos.videoId.rating.get({
  "videoId": ""
}, context)
```

#### Input
* input `object`
  * videoId **required** `string`: The video id 

#### Output
* output [GetMeVideoRating](#getmevideorating)

### users.register.post
Register a user


```js
cpy_re_peertube.users.register.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [RegisterUser](#registeruser)

#### Output
*Output schema unknown*

### delUserId
Delete a user


```js
cpy_re_peertube.delUserId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The user id

#### Output
*Output schema unknown*

### getUserId
Get a user


```js
cpy_re_peertube.getUserId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The user id

#### Output
* output [User](#user)

### putUserId
Update a user


```js
cpy_re_peertube.putUserId({
  "body": null,
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [UpdateUser](#updateuser)
  * id **required** `integer`: The user id

#### Output
*Output schema unknown*

### video_channels.get
List video channels


```js
cpy_re_peertube.video_channels.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output `object`
  * data `array`
    * items [VideoChannel](#videochannel)
  * total `integer`

### video_channels.post
Create a video channel


```js
cpy_re_peertube.video_channels.post({}, context)
```

#### Input
* input `object`
  * body [VideoChannelCreate](#videochannelcreate)

#### Output
*Output schema unknown*

### video_channels.channelHandle.delete
Delete a video channel


```js
cpy_re_peertube.video_channels.channelHandle.delete({
  "channelHandle": ""
}, context)
```

#### Input
* input `object`
  * channelHandle **required** `string`: The video channel handle

#### Output
*Output schema unknown*

### video_channels.channelHandle.get
Get a video channel


```js
cpy_re_peertube.video_channels.channelHandle.get({
  "channelHandle": ""
}, context)
```

#### Input
* input `object`
  * channelHandle **required** `string`: The video channel handle

#### Output
* output [VideoChannel](#videochannel)

### video_channels.channelHandle.put
Update a video channel


```js
cpy_re_peertube.video_channels.channelHandle.put({
  "channelHandle": ""
}, context)
```

#### Input
* input `object`
  * channelHandle **required** `string`: The video channel handle
  * body [VideoChannelUpdate](#videochannelupdate)

#### Output
*Output schema unknown*

### video_channels.channelHandle.videos.get
List videos of a video channel


```js
cpy_re_peertube.video_channels.channelHandle.videos.get({
  "channelHandle": ""
}, context)
```

#### Input
* input `object`
  * channelHandle **required** `string`: The video channel handle
  * nsfw `string` (values: true, false): whether to include nsfw videos, if any
  * filter `string` (values: local, all-local): Special filters which might require special rights:
  * skipCount `string` (values: true, false): if you don't need the `total` in the response
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: name, -duration, -createdAt, -publishedAt, -views, -likes, -trending): Sort videos by criteria

#### Output
* output [VideoListResponse](#videolistresponse)

### video_playlists.get
List video playlists


```js
cpy_re_peertube.video_playlists.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string`: Sort column

#### Output
* output `object`
  * data `array`
    * items [VideoPlaylist](#videoplaylist)
  * total `integer`

### video_playlists.post
If the video playlist is set as public, the videoChannelId is mandatory.


```js
cpy_re_peertube.video_playlists.post({
  "displayName": ""
}, context)
```

#### Input
* input `object`
  * description `string`: Video playlist description
  * displayName **required** `string`: Video playlist display name
  * privacy `integer` (values: 1, 2, 3): The video playlist privacy (Public = `1`, Unlisted = `2`, Private = `3`)
  * thumbnailfile `string`: Video playlist thumbnail file
  * videoChannelId `integer`: Video channel in which the playlist will be published

#### Output
* output `object`
  * videoPlaylist `object`
    * id `integer`
    * uuid `string`

### video_playlists.privacies.get
List available playlist privacies


```js
cpy_re_peertube.video_playlists.privacies.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### video_playlists.id.delete
Delete a video playlist


```js
cpy_re_peertube.video_playlists.id.delete({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### video_playlists.id.get
Get a video playlist


```js
cpy_re_peertube.video_playlists.id.get({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [VideoPlaylist](#videoplaylist)

### video_playlists.id.put
If the video playlist is set as public, the playlist must have a assigned channel.


```js
cpy_re_peertube.video_playlists.id.put({
  "id": null
}, context)
```

#### Input
* input `object`
  * description `string`: Video playlist description
  * displayName `string`: Video playlist display name
  * privacy `integer` (values: 1, 2, 3): The video playlist privacy (Public = `1`, Unlisted = `2`, Private = `3`)
  * thumbnailfile `string`: Video playlist thumbnail file
  * videoChannelId `integer`: Video channel in which the playlist will be published

#### Output
*Output schema unknown*

### video_playlists.id.videos.get
List videos of a playlist


```js
cpy_re_peertube.video_playlists.id.videos.get({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [VideoListResponse](#videolistresponse)

### video_playlists.id.videos.post
Add a video in a playlist


```js
cpy_re_peertube.video_playlists.id.videos.post({
  "id": null
}, context)
```

#### Input
* input `object`
  * body `object`
    * startTimestamp `integer`: Start the video at this specific timestamp (in seconds)
    * stopTimestamp `integer`: Stop the video at this specific timestamp (in seconds)
    * videoId **required** `integer`: Video to add in the playlist

#### Output
* output `object`
  * videoPlaylistElement `object`
    * id `integer`

### video_playlists.id.videos.reorder.post
Reorder a playlist


```js
cpy_re_peertube.video_playlists.id.videos.reorder.post({
  "id": null
}, context)
```

#### Input
* input `object`
  * body `object`
    * insertAfterPosition **required** `integer`: New position for the block to reorder, to add the block before the first element
    * reorderLength `integer`: How many element from `startPosition` to reorder
    * startPosition **required** `integer`: Start position of the element to reorder

#### Output
*Output schema unknown*

### video_playlists.id.videos.playlistElementId.delete
Delete an element from a playlist


```js
cpy_re_peertube.video_playlists.id.videos.playlistElementId.delete({
  "id": null,
  "playlistElementId": 0
}, context)
```

#### Input
* input `object`
  * playlistElementId **required** `integer`: Playlist element id

#### Output
*Output schema unknown*

### video_playlists.id.videos.playlistElementId.put
Update a playlist element


```js
cpy_re_peertube.video_playlists.id.videos.playlistElementId.put({
  "id": null,
  "playlistElementId": 0
}, context)
```

#### Input
* input `object`
  * playlistElementId **required** `integer`: Playlist element id
  * body `object`
    * startTimestamp `integer`: Start the video at this specific timestamp (in seconds)
    * stopTimestamp `integer`: Stop the video at this specific timestamp (in seconds)

#### Output
*Output schema unknown*

### videos.get
List videos


```js
cpy_re_peertube.videos.get({}, context)
```

#### Input
* input `object`
  * nsfw `string` (values: true, false): whether to include nsfw videos, if any
  * filter `string` (values: local, all-local): Special filters which might require special rights:
  * skipCount `string` (values: true, false): if you don't need the `total` in the response
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: name, -duration, -createdAt, -publishedAt, -views, -likes, -trending): Sort videos by criteria

#### Output
* output [VideoListResponse](#videolistresponse)

### videos.blacklist.get
List video blocks


```js
cpy_re_peertube.videos.blacklist.get({}, context)
```

#### Input
* input `object`
  * type `integer` (values: 1, 2): list only blocks that match this type:
  * search `string`: plain search that will match with video titles, and more
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: -id, name, -duration, -views, -likes, -dislikes, -uuid, -createdAt): Sort blacklists by criteria

#### Output
* output `object`
  * data `array`
    * items [VideoBlacklist](#videoblacklist)
  * total `integer`

### videos.categories.get
List available video categories


```js
cpy_re_peertube.videos.categories.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### videos.imports.post
Import a torrent or magnetURI or HTTP resource (if enabled by the instance administrator)


```js
cpy_re_peertube.videos.imports.post({
  "channelId": 0,
  "name": ""
}, context)
```

#### Input
* input `object`
  * category `string`: Video category
  * channelId **required** `integer`: Channel id that will contain this video
  * commentsEnabled `boolean`: Enable or disable comments for this video
  * description `string`: Video description
  * downloadEnabled `boolean`: Enable or disable downloading for this video
  * language `string`: Video language
  * licence `string`: Video licence
  * magnetUri `string`: Magnet URI
  * name **required** `string`: Video name
  * nsfw `boolean`: Whether or not this video contains sensitive content
  * previewfile `string`: Video preview file
  * privacy `integer` (values: 1, 2, 3, 4): The video privacy (Public = `1`, Unlisted = `2`, Private = `3`, Internal = `4`)
  * support `string`: A text tell the audience how to support the video creator
  * tags `array`: Video tags (maximum 5 tags each between 2 and 30 characters)
  * targetUrl `string`: HTTP target URL
  * thumbnailfile `string`: Video thumbnail file
  * torrentfile `string`: Torrent File
  * waitTranscoding `boolean`: Whether or not we wait transcoding before publish the video

#### Output
* output [VideoUploadResponse](#videouploadresponse)

### videos.languages.get
List available video languages


```js
cpy_re_peertube.videos.languages.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### videos.licences.get
List available video licences


```js
cpy_re_peertube.videos.licences.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### videos.live.post
Create a live


```js
cpy_re_peertube.videos.live.post({
  "channelId": 0,
  "name": ""
}, context)
```

#### Input
* input `object`
  * category `string`: Live video/replay category
  * channelId **required** `integer`: Channel id that will contain this live video
  * commentsEnabled `boolean`: Enable or disable comments for this live video/replay
  * description `string`: Live video/replay description
  * downloadEnabled `boolean`: Enable or disable downloading for the replay of this live
  * language `string`: Live video/replay language
  * licence `string`: Live video/replay licence
  * name **required** `string`: Live video/replay name
  * nsfw `boolean`: Whether or not this live video/replay contains sensitive content
  * permanentLive `boolean`: User can stream multiple times in a permanent live
  * previewfile `string`: Live video/replay preview file
  * privacy `integer` (values: 1, 2, 3, 4): The video privacy (Public = `1`, Unlisted = `2`, Private = `3`, Internal = `4`)
  * saveReplay `boolean`
  * support `string`: A text tell the audience how to support the creator
  * tags `array`: Live video/replay tags (maximum 5 tags each between 2 and 30 characters)
  * thumbnailfile `string`: Live video/replay thumbnail file

#### Output
* output [VideoUploadResponse](#videouploadresponse)

### videos.live.id.get
Get a live information


```js
cpy_re_peertube.videos.live.id.get({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [LiveVideoResponse](#livevideoresponse)

### videos.live.id.put
Update a live information


```js
cpy_re_peertube.videos.live.id.put({
  "id": null
}, context)
```

#### Input
* input `object`
  * body [LiveVideoUpdate](#livevideoupdate)

#### Output
*Output schema unknown*

### videos.ownership.get
List video ownership changes


```js
cpy_re_peertube.videos.ownership.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### videos.ownership.id.accept.post
Accept ownership change request


```js
cpy_re_peertube.videos.ownership.id.accept.post({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### videos.ownership.id.refuse.post
Refuse ownership change request


```js
cpy_re_peertube.videos.ownership.id.refuse.post({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### videos.privacies.get
List available video privacies


```js
cpy_re_peertube.videos.privacies.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### videos.upload.post
Upload a video


```js
cpy_re_peertube.videos.upload.post({
  "channelId": 0,
  "name": "",
  "videofile": ""
}, context)
```

#### Input
* input `object`
  * category `integer`: Video category
  * channelId **required** `integer`: Channel id that will contain this video
  * commentsEnabled `boolean`: Enable or disable comments for this video
  * description `string`: Video description
  * downloadEnabled `boolean`: Enable or disable downloading for this video
  * language `integer`: Video language
  * licence `string`: Video licence
  * name **required** `string`: Video name
  * nsfw `boolean`: Whether or not this video contains sensitive content
  * originallyPublishedAt `string`: Date when the content was originally published
  * previewfile `string`: Video preview file
  * privacy `integer` (values: 1, 2, 3, 4): The video privacy (Public = `1`, Unlisted = `2`, Private = `3`, Internal = `4`)
  * support `string`: A text tell the audience how to support the video creator
  * tags `array`: Video tags (maximum 5 tags each between 2 and 30 characters)
  * thumbnailfile `string`: Video thumbnail file
  * videofile **required** `string`: Video file
  * waitTranscoding `boolean`: Whether or not we wait transcoding before publish the video

#### Output
* output [VideoUploadResponse](#videouploadresponse)

### videos.id.delete
Delete a video


```js
cpy_re_peertube.videos.id.delete({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### videos.id.get
Get a video


```js
cpy_re_peertube.videos.id.get({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [VideoDetails](#videodetails)

### videos.id.put
Update a video


```js
cpy_re_peertube.videos.id.put({
  "id": null
}, context)
```

#### Input
* input `object`
  * category `integer`: Video category
  * commentsEnabled `boolean`: Enable or disable comments for this video
  * description `string`: Video description
  * language `string`: Video language
  * licence `integer`: Video licence
  * name `string`: Video name
  * nsfw `boolean`: Whether or not this video contains sensitive content
  * originallyPublishedAt `string`: Date when the content was originally published
  * previewfile `string`: Video preview file
  * privacy `integer` (values: 1, 2, 3, 4): The video privacy (Public = `1`, Unlisted = `2`, Private = `3`, Internal = `4`)
  * support `string`: A text tell the audience how to support the video creator
  * tags `array`: Video tags (maximum 5 tags each between 2 and 30 characters)
  * thumbnailfile `string`: Video thumbnail file
  * waitTranscoding `string`: Whether or not we wait transcoding before publish the video

#### Output
*Output schema unknown*

### videos.id.blacklist.delete
Unblock a video by its id


```js
cpy_re_peertube.videos.id.blacklist.delete({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### videos.id.blacklist.post
Block a video


```js
cpy_re_peertube.videos.id.blacklist.post({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### videos.id.captions.get
List captions of a video


```js
cpy_re_peertube.videos.id.captions.get({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output `object`
  * data `array`
    * items [VideoCaption](#videocaption)
  * total `integer`

### videos.id.captions.captionLanguage.delete
Delete a video caption


```js
cpy_re_peertube.videos.id.captions.captionLanguage.delete({
  "id": null,
  "captionLanguage": ""
}, context)
```

#### Input
* input `object`
  * captionLanguage **required** `string`: The caption language

#### Output
*Output schema unknown*

### videos.id.captions.captionLanguage.put
Add or replace a video caption


```js
cpy_re_peertube.videos.id.captions.captionLanguage.put({
  "id": null,
  "captionLanguage": ""
}, context)
```

#### Input
* input `object`
  * captionLanguage **required** `string`: The caption language
  * captionfile `string`: The file to upload.

#### Output
*Output schema unknown*

### videos.id.comment_threads.get
List threads of a video


```js
cpy_re_peertube.videos.id.comment_threads.get({
  "id": null
}, context)
```

#### Input
* input `object`
  * start `integer`: Offset used to paginate results
  * count `integer`: Number of items to return
  * sort `string` (values: -createdAt, -totalReplies): Sort comments by criteria

#### Output
* output [CommentThreadResponse](#commentthreadresponse)

### videos.id.comment_threads.post
Create a thread


```js
cpy_re_peertube.videos.id.comment_threads.post({
  "id": null
}, context)
```

#### Input
* input `object`
  * body `object`
    * text **required** `string`: Text comment

#### Output
* output [CommentThreadPostResponse](#commentthreadpostresponse)

### videos.id.comment_threads.threadId.get
Get a thread


```js
cpy_re_peertube.videos.id.comment_threads.threadId.get({
  "id": null,
  "threadId": 0
}, context)
```

#### Input
* input `object`
  * threadId **required** `integer`: The thread id (root comment id)

#### Output
* output [VideoCommentThreadTree](#videocommentthreadtree)

### videos.id.comments.commentId.delete
Delete a comment or a reply


```js
cpy_re_peertube.videos.id.comments.commentId.delete({
  "id": null,
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: The comment id

#### Output
*Output schema unknown*

### videos.id.comments.commentId.post
Reply to a thread of a video


```js
cpy_re_peertube.videos.id.comments.commentId.post({
  "id": null,
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: The comment id
  * body `object`
    * text **required** `string`: Text comment

#### Output
* output [CommentThreadPostResponse](#commentthreadpostresponse)

### videos.id.description.get
Get complete video description


```js
cpy_re_peertube.videos.id.description.get({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output `string`

### videos.id.give_ownership.post
Request ownership change


```js
cpy_re_peertube.videos.id.give_ownership.post({
  "id": null,
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### videos.id.rate.put
Like/dislike a video


```js
cpy_re_peertube.videos.id.rate.put({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### videos.id.views.post
Add a view to a video


```js
cpy_re_peertube.videos.id.views.post({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### videos.id.watching.put
Set watching progress of a video


```js
cpy_re_peertube.videos.id.watching.put({
  "id": null,
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [UserWatchingVideo](#userwatchingvideo)

#### Output
*Output schema unknown*



## Definitions

### Abuse
* Abuse `object`
  * createdAt `string`
  * id `integer`
  * moderationComment `string`
  * predefinedReasons [AbusePredefinedReasons](#abusepredefinedreasons)
  * reason `string`
  * reporterAccount [Account](#account)
  * state [AbuseStateConstant](#abusestateconstant)
  * video `object`
    * id `integer`
    * name `string`
    * uuid `string`

### AbuseMessage
* AbuseMessage `object`
  * account [AccountSummary](#accountsummary)
  * byModerator `boolean`
  * createdAt `string`
  * id `integer`
  * message `string`

### AbusePredefinedReasons
* AbusePredefinedReasons `array`
  * items `string` (values: violentOrAbusive, hatefulOrAbusive, spamOrMisleading, privacy, rights, serverRules, thumbnails, captions)

### AbuseStateConstant
* AbuseStateConstant `object`
  * id [AbuseStateSet](#abusestateset)
  * label `string`

### AbuseStateSet
* AbuseStateSet `integer` (values: 1, 2, 3): The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)

### Account
* Account
  * host `string`
  * avatar [Avatar](#avatar)
  * createdAt `string`
  * followersCount `integer`
  * followingCount `integer`
  * id `integer`
  * name `string`
  * updatedAt `string`
  * url `string`
  * description `string`
  * displayName `string`
  * userId `string`

### AccountSummary
* AccountSummary `object`
  * host `string`
  * avatar
    * createdAt `string`
    * path `string`
    * updatedAt `string`
  * displayName `string`
  * id `integer`
  * name `string`
  * url `string`

### Actor
* Actor `object`
  * host `string`
  * avatar [Avatar](#avatar)
  * createdAt `string`
  * followersCount `integer`
  * followingCount `integer`
  * id `integer`
  * name `string`
  * updatedAt `string`
  * url `string`

### ActorInfo
* ActorInfo `object`
  * host `string`
  * avatar `object`
    * path `string`
  * displayName `string`
  * id `integer`
  * name `string`

### AddUser
* AddUser `object`
  * email **required** `string`: The user email
  * password **required** `string`: The user password. If the smtp server is configured, you can leave empty and an email will be sent
  * role **required** [UserRole](#userrole)
  * username **required** `string`: The user username
  * videoQuota **required** `integer`: The user video quota
  * videoQuotaDaily **required** `integer`: The user daily video quota

### AddUserResponse
* AddUserResponse `object`
  * user `object`
    * account `object`
      * id `integer`
    * id `integer`

### Avatar
* Avatar `object`
  * createdAt `string`
  * path `string`
  * updatedAt `string`

### CommentThreadPostResponse
* CommentThreadPostResponse `object`
  * comment [VideoComment](#videocomment)

### CommentThreadResponse
* CommentThreadResponse `object`
  * data `array`
    * items [VideoComment](#videocomment)
  * total `integer`

### FileRedundancyInformation
* FileRedundancyInformation `object`
  * createdAt `string`
  * expiresOn `string`
  * fileUrl `string`
  * id `integer`
  * size `integer`
  * strategy `string` (values: manual, most-views, trending, recently-added)
  * updatedAt `string`

### Follow
* Follow `object`
  * createdAt `string`
  * follower [Actor](#actor)
  * following [Actor](#actor)
  * id `integer`
  * score `number`: score reflecting the reachability of the actor, with steps of `10` and a base score of `1000`.
  * state `string` (values: pending, accepted)
  * updatedAt `string`

### GetMeVideoRating
* GetMeVideoRating `object`
  * id **required** `string`: Id of the video
  * rating **required** `number`: Rating of the video

### Job
* Job `object`
  * createdAt `string`
  * data `object`
  * error `object`
  * finishedOn `string`
  * id `integer`
  * processedOn `string`
  * state `string` (values: active, completed, failed, waiting, delayed)
  * type `string` (values: activitypub-http-unicast, activitypub-http-broadcast, activitypub-http-fetcher, activitypub-follow, video-file-import, video-transcoding, email, video-import, videos-views, activitypub-refresher, video-redundancy)

### LiveVideoResponse
* LiveVideoResponse `object`
  * permanentLive `boolean`: User can stream multiple times in a permanent live
  * rtmpUrl `string`
  * saveReplay `boolean`
  * streamKey `string`: RTMP stream key to use to stream into this live video

### LiveVideoUpdate
* LiveVideoUpdate `object`
  * permanentLive `boolean`: User can stream multiple times in a permanent live
  * saveReplay `boolean`

### MRSSGroupContent
* MRSSGroupContent `object`
  * duration `integer`
  * fileSize `integer`
  * framerate `integer`
  * height `integer`
  * lang `string`
  * type `string`
  * url `string`

### MRSSPeerLink
* MRSSPeerLink `object`
  * href `string`
  * type `string` (values: application/x-bittorrent)

### NSFWPolicy
* NSFWPolicy `string` (values: display, blur, do_not_list)

### Notification
* Notification `object`
  * account
    * host `string`
    * avatar `object`
      * path `string`
    * displayName `string`
    * id `integer`
    * name `string`
  * actorFollow `object`
    * follower [ActorInfo](#actorinfo)
    * following `object`
      * host `string`
      * displayName `string`
      * name `string`
      * type `string` (values: account, channel, instance)
    * id `integer`
    * state `string` (values: pending, accepted)
  * comment `object`
    * account [ActorInfo](#actorinfo)
    * id `integer`
    * threadId `integer`
    * video [VideoInfo](#videoinfo)
  * createdAt `string`
  * id `integer`
  * read `boolean`
  * type `integer`: Notification type, following the `UserNotificationType` enum:
  * updatedAt `string`
  * video
    * id `integer`
    * name `string`
    * uuid `string`
    * channel [ActorInfo](#actorinfo)
  * videoAbuse `object`
    * id `integer`
    * video
      * id `integer`
      * name `string`
      * uuid `string`
  * videoBlacklist `object`
    * id `integer`
    * video
      * id `integer`
      * name `string`
      * uuid `string`
  * videoImport `object`
    * id `integer`
    * magnetUri `string`
    * targetUri `string`
    * torrentName `string`
    * video [VideoInfo](#videoinfo)

### NotificationListResponse
* NotificationListResponse `object`
  * data `array`
    * items [Notification](#notification)
  * total `integer`

### NotificationSettingValue
* NotificationSettingValue `integer` (values: 0, 1, 3): Notification type

### PlaylistElement
* PlaylistElement `object`
  * position `integer`
  * startTimestamp `integer`
  * stopTimestamp `integer`
  * video
    * account [AccountSummary](#accountsummary)
    * blacklisted `boolean`
    * blacklistedReason `string`
    * category [VideoConstantNumber](#videoconstantnumber)
    * channel [VideoChannelSummary](#videochannelsummary)
    * createdAt `string`
    * description `string`
    * dislikes `integer`
    * duration `integer`
    * embedPath `string`
    * id `integer`
    * isLive `boolean`
    * isLocal `boolean`
    * language [VideoConstantString](#videoconstantstring)
    * licence [VideoConstantNumber](#videoconstantnumber)
    * likes `integer`
    * name `string`
    * nsfw `boolean`
    * originallyPublishedAt `string`
    * previewPath `string`
    * privacy [VideoPrivacyConstant](#videoprivacyconstant)
    * publishedAt `string`
    * scheduledUpdate
      * privacy [VideoPrivacySet](#videoprivacyset)
      * updateAt **required** `string`: When to update the video
    * state [VideoStateConstant](#videostateconstant)
    * thumbnailPath `string`
    * updatedAt `string`
    * userHistory `object`
      * currentTime `integer`
    * uuid `string`
    * views `integer`
    * waitTranscoding `boolean`

### Plugin
* Plugin `object`
  * createdAt `string`
  * description `string`
  * enabled `boolean`
  * homepage `string`
  * latestVersion `string`
  * name `string`
  * peertubeEngine `string`
  * settings `object`
  * type `integer` (values: 1, 2): - `1`: PLUGIN
  * uninstalled `boolean`
  * updatedAt `string`
  * version `string`

### PluginResponse
* PluginResponse `object`
  * data `array`
    * items [Plugin](#plugin)
  * total `integer`

### PredefinedAbuseReasons
* PredefinedAbuseReasons `array`: Reason categories that help triage reports
  * items `string` (values: violentOrAbusive, hatefulOrAbusive, spamOrMisleading, privacy, rights, serverRules, thumbnails, captions)

### RegisterUser
* RegisterUser `object`
  * channel `object`
    * displayName `string`: The display name for the default channel
    * name `string`: The username for the default channel
  * displayName `string`: The user display name
  * email **required** `string`: The email of the user
  * password **required** `string`: The password of the user
  * username **required** `string`: The username of the user

### ServerConfig
* ServerConfig `object`
  * autoBlacklist `object`
    * videos `object`
      * ofUsers `object`
        * enabled `boolean`
  * avatar `object`
    * extensions `array`
      * items `string`
    * file `object`
      * size `object`
        * max `integer`
  * contactForm `object`
    * enabled `boolean`
  * email `object`
    * enabled `boolean`
  * followings `object`
    * instance `object`
      * autoFollowIndex `object`
        * indexUrl `string`
  * import `object`
    * videos `object`
      * http `object`
        * enabled `boolean`
      * torrent `object`
        * enabled `boolean`
  * instance `object`
    * customizations `object`
      * css `string`
      * javascript `string`
    * defaultClientRoute `string`
    * defaultNSFWPolicy `string`
    * isNSFW `boolean`
    * name `string`
    * shortDescription `string`
  * plugin `object`
    * registered `array`
      * items `string`
  * search `object`
    * remoteUri `object`
      * anonymous `boolean`
      * users `boolean`
  * serverCommit `string`
  * serverVersion `string`
  * signup `object`
    * allowed `boolean`
    * allowedForCurrentIP `boolean`
    * requiresEmailVerification `boolean`
  * theme `object`
    * registered `array`
      * items `string`
  * tracker `object`
    * enabled `boolean`
  * transcoding `object`
    * enabledResolutions `array`
      * items `integer`
    * hls `object`
      * enabled `boolean`
    * webtorrent `object`
      * enabled `boolean`
  * trending `object`
    * videos `object`
      * intervalDays `integer`
  * user `object`
    * videoQuota `integer`
    * videoQuotaDaily `integer`
  * video `object`
    * file `object`
      * extensions `array`
        * items `string`
    * image `object`
      * extensions `array`
        * items `string`
      * size `object`
        * max `integer`
  * videoCaption `object`
    * file `object`
      * extensions `array`
        * items `string`
      * size `object`
        * max `integer`

### ServerConfigAbout
* ServerConfigAbout `object`
  * instance `object`
    * description `string`
    * name `string`
    * shortDescription `string`
    * terms `string`

### ServerConfigCustom
* ServerConfigCustom `object`
  * admin `object`
    * email `string`
  * autoBlacklist `object`
    * videos `object`
      * ofUsers `object`
        * enabled `boolean`
  * cache `object`
    * captions `object`
      * size `integer`
    * previews `object`
      * size `integer`
  * contactForm `object`
    * enabled `boolean`
  * followers `object`
    * instance `object`
      * enabled `boolean`
      * manualApproval `boolean`
  * import `object`
    * videos `object`
      * http `object`
        * enabled `boolean`
      * torrent `object`
        * enabled `boolean`
  * instance `object`
    * customizations `object`
      * css `string`
      * javascript `string`
    * defaultClientRoute `string`
    * defaultNSFWPolicy `string`
    * description `string`
    * isNSFW `boolean`
    * name `string`
    * shortDescription `string`
    * terms `string`
  * services `object`
    * twitter `object`
      * username `string`
      * whitelisted `boolean`
  * signup `object`
    * enabled `boolean`
    * limit `integer`
    * requiresEmailVerification `boolean`
  * theme `object`
    * default `string`
  * transcoding `object`
    * allowAdditionalExtensions `boolean`
    * allowAudioFiles `boolean`
    * enabled `boolean`
    * hls `object`
      * enabled `boolean`
    * resolutions `object`
      * 1080p `boolean`
      * 2160p `boolean`
      * 240p `boolean`
      * 360p `boolean`
      * 480p `boolean`
      * 720p `boolean`
    * threads `integer`
  * user `object`
    * videoQuota `integer`
    * videoQuotaDaily `integer`

### UpdateMe
* UpdateMe `object`
  * autoPlayVideo **required** `boolean`: Your new autoPlayVideo
  * displayNSFW **required** `string` (values: true, false, both): Your new displayNSFW
  * email **required** `string`: Your new email
  * password **required** `string`: Your new password

### UpdateUser
* UpdateUser `object`
  * email **required** `string`: The updated email of the user
  * id **required** `string`: The user id
  * role **required** [UserRole](#userrole)
  * videoQuota **required** `integer`: The updated video quota of the user
  * videoQuotaDaily **required** `integer`: The updated daily video quota of the user

### User
* User `object`
  * abusesAcceptedCount `integer`
  * abusesCount `integer`
  * abusesCreatedCount `integer`
  * account [Account](#account)
  * autoPlayVideo `boolean`: Automatically start playing the video on the watch page
  * blocked `boolean`
  * blockedReason `string`
  * createdAt `string`
  * email `string`: The user email
  * emailVerified `boolean`: Has the user confirmed their email address?
  * id `integer`
  * noInstanceConfigWarningModal `boolean`
  * noWelcomeModal `boolean`
  * nsfwPolicy [NSFWPolicy](#nsfwpolicy)
  * role [UserRole](#userrole)
  * roleLabel `string` (values: User, Moderator, Administrator)
  * theme `string`: Theme enabled by this user
  * username `string`: The user username
  * videoChannels `array`
    * items [VideoChannel](#videochannel)
  * videoCommentsCount `integer`
  * videoQuota `integer`: The user video quota
  * videoQuotaDaily `integer`: The user daily video quota
  * videosCount `integer`
  * webtorrentEnabled `boolean`: Enable P2P in the player

### UserRole
* UserRole `integer` (values: 0, 1, 2): The user role (Admin = `0`, Moderator = `1`, User = `2`)

### UserWatchingVideo
* UserWatchingVideo `object`
  * currentTime `integer`: timestamp within the video, in seconds

### Video
* Video `object`
  * account [AccountSummary](#accountsummary)
  * blacklisted `boolean`
  * blacklistedReason `string`
  * category [VideoConstantNumber](#videoconstantnumber)
  * channel [VideoChannelSummary](#videochannelsummary)
  * createdAt `string`
  * description `string`
  * dislikes `integer`
  * duration `integer`
  * embedPath `string`
  * id `integer`
  * isLive `boolean`
  * isLocal `boolean`
  * language [VideoConstantString](#videoconstantstring)
  * licence [VideoConstantNumber](#videoconstantnumber)
  * likes `integer`
  * name `string`
  * nsfw `boolean`
  * originallyPublishedAt `string`
  * previewPath `string`
  * privacy [VideoPrivacyConstant](#videoprivacyconstant)
  * publishedAt `string`
  * scheduledUpdate
    * privacy [VideoPrivacySet](#videoprivacyset)
    * updateAt **required** `string`: When to update the video
  * state [VideoStateConstant](#videostateconstant)
  * thumbnailPath `string`
  * updatedAt `string`
  * userHistory `object`
    * currentTime `integer`
  * uuid `string`
  * views `integer`
  * waitTranscoding `boolean`

### VideoBlacklist
* VideoBlacklist `object`
  * createdAt `string`
  * description `string`
  * dislikes `integer`
  * duration `integer`
  * id `integer`
  * likes `integer`
  * name `string`
  * nsfw `boolean`
  * updatedAt `string`
  * uuid `string`
  * videoId `integer`
  * views `integer`

### VideoCaption
* VideoCaption `object`
  * captionPath `string`
  * language [VideoConstantString](#videoconstantstring)

### VideoChannel
* VideoChannel `object`
  * description `string`
  * displayName `string`
  * isLocal `boolean`
  * ownerAccount `object`
    * id `integer`
    * uuid `string`

### VideoChannelCreate
* VideoChannelCreate `object`
  * description `string`
  * displayName **required** `string`
  * name **required** `string`
  * support `string`: A text shown by default on all videos of this channel, to tell the audience how to support it

### VideoChannelSummary
* VideoChannelSummary `object`
  * host `string`
  * avatar
    * createdAt `string`
    * path `string`
    * updatedAt `string`
  * displayName `string`
  * id `integer`
  * name `string`
  * url `string`

### VideoChannelUpdate
* VideoChannelUpdate `object`
  * bulkVideosSupportUpdate `boolean`: Update the support field for all videos of this channel
  * description `string`
  * displayName `string`
  * support `string`: A text shown by default on all videos of this channel, to tell the audience how to support it

### VideoComment
* VideoComment `object`
  * account [Account](#account)
  * createdAt `string`
  * id `integer`
  * inReplyToCommentId `integer`
  * text `string`
  * threadId `integer`
  * totalReplies `integer`
  * totalRepliesFromVideoAuthor `integer`
  * updatedAt `string`
  * url `string`
  * videoId `integer`

### VideoCommentThreadTree
* VideoCommentThreadTree `object`
  * children `array`
    * items [VideoCommentThreadTree](#videocommentthreadtree)
  * comment [VideoComment](#videocomment)

### VideoCommentsForXML
* VideoCommentsForXML `array`
  * items `object`
    * content:encoded `string`
    * dc:creator `string`
    * guid `string`
    * link `string`
    * pubDate `string`

### VideoConstantNumber
* VideoConstantNumber `object`
  * id `integer`
  * label `string`

### VideoConstantString
* VideoConstantString `object`
  * id `string`
  * label `string`

### VideoDetails
* VideoDetails
  * account [AccountSummary](#accountsummary)
  * blacklisted `boolean`
  * blacklistedReason `string`
  * category [VideoConstantNumber](#videoconstantnumber)
  * channel [VideoChannelSummary](#videochannelsummary)
  * createdAt `string`
  * description `string`
  * dislikes `integer`
  * duration `integer`
  * embedPath `string`
  * id `integer`
  * isLive `boolean`
  * isLocal `boolean`
  * language [VideoConstantString](#videoconstantstring)
  * licence [VideoConstantNumber](#videoconstantnumber)
  * likes `integer`
  * name `string`
  * nsfw `boolean`
  * originallyPublishedAt `string`
  * previewPath `string`
  * privacy [VideoPrivacyConstant](#videoprivacyconstant)
  * publishedAt `string`
  * scheduledUpdate
    * privacy [VideoPrivacySet](#videoprivacyset)
    * updateAt **required** `string`: When to update the video
  * state [VideoStateConstant](#videostateconstant)
  * thumbnailPath `string`
  * updatedAt `string`
  * userHistory `object`
    * currentTime `integer`
  * uuid `string`
  * views `integer`
  * waitTranscoding `boolean`
  * tags `array`
    * items `string`
  * account [Account](#account)
  * channel [VideoChannel](#videochannel)
  * commentsEnabled `boolean`
  * descriptionPath `string`
  * downloadEnabled `boolean`
  * files `array`: WebTorrent/raw video files. Can be empty if WebTorrent is disabled on the server. In this case, video files will be in the "streamingPlaylists[].files" property
    * items [VideoFile](#videofile)
  * streamingPlaylists `array`
    * items [VideoStreamingPlaylists](#videostreamingplaylists)
  * support `string`: A text tell the audience how to support the video creator
  * trackerUrls `array`
    * items `string`

### VideoFile
* VideoFile `object`
  * fileDownloadUrl `string`
  * fileUrl `string`
  * fps `number`
  * magnetUri `string`
  * metadataUrl `string`
  * resolution [VideoResolutionConstant](#videoresolutionconstant)
  * size `integer`: Video file size in bytes
  * torrentDownloadUrl `string`
  * torrentUrl `string`

### VideoImport
* VideoImport `object`
  * createdAt `string`
  * error `string`
  * id `integer`
  * magnetUri `string`
  * state [VideoImportStateConstant](#videoimportstateconstant)
  * targetUrl `string`
  * torrentName `string`
  * updatedAt `string`
  * video [Video](#video)

### VideoImportStateConstant
* VideoImportStateConstant `object`
  * id `integer` (values: 1, 2, 3): The video import state (Pending = `1`, Success = `2`, Failed = `3`)
  * label `string`

### VideoInfo
* VideoInfo `object`
  * id `integer`
  * name `string`
  * uuid `string`

### VideoListResponse
* VideoListResponse `object`
  * data `array`
    * items [Video](#video)
  * total `integer`

### VideoPlaylist
* VideoPlaylist `object`
  * createdAt `string`
  * description `string`
  * displayName `string`
  * id `integer`
  * isLocal `boolean`
  * ownerAccount [AccountSummary](#accountsummary)
  * privacy [VideoPlaylistPrivacyConstant](#videoplaylistprivacyconstant)
  * thumbnailPath `string`
  * type [VideoPlaylistTypeConstant](#videoplaylisttypeconstant)
  * updatedAt `string`
  * uuid `string`
  * videoChannel [VideoChannelSummary](#videochannelsummary)
  * videoLength `integer`

### VideoPlaylistPrivacyConstant
* VideoPlaylistPrivacyConstant `object`
  * id [VideoPlaylistPrivacySet](#videoplaylistprivacyset)
  * label `string`

### VideoPlaylistPrivacySet
* VideoPlaylistPrivacySet `integer` (values: 1, 2, 3): The video playlist privacy (Public = `1`, Unlisted = `2`, Private = `3`)

### VideoPlaylistTypeConstant
* VideoPlaylistTypeConstant `object`
  * id [VideoPlaylistTypeSet](#videoplaylisttypeset)
  * label `string`

### VideoPlaylistTypeSet
* VideoPlaylistTypeSet `integer` (values: 1, 2): The video playlist type (Regular = `1`, Watch Later = `2`)

### VideoPrivacyConstant
* VideoPrivacyConstant `object`
  * id [VideoPrivacySet](#videoprivacyset)
  * label `string`

### VideoPrivacySet
* VideoPrivacySet `integer` (values: 1, 2, 3, 4): The video privacy (Public = `1`, Unlisted = `2`, Private = `3`, Internal = `4`)

### VideoRating
* VideoRating `object`
  * rating **required** `number`: Rating of the video
  * video **required** [Video](#video)

### VideoRedundancy
* VideoRedundancy `object`
  * id `integer`
  * name `string`
  * redundancies `object`
    * files `array`
      * items [FileRedundancyInformation](#fileredundancyinformation)
    * streamingPlaylists `array`
      * items [FileRedundancyInformation](#fileredundancyinformation)
  * url `string`
  * uuid `string`

### VideoResolutionConstant
* VideoResolutionConstant `object`
  * id `integer`: Video resolution (240, 360, 720 ...)
  * label `string`

### VideoScheduledUpdate
* VideoScheduledUpdate `object`
  * privacy [VideoPrivacySet](#videoprivacyset)
  * updateAt **required** `string`: When to update the video

### VideoStateConstant
* VideoStateConstant `object`
  * id `integer` (values: 1, 2, 3): The video state (Published = `1`, to transcode = `2`, to import = `3`)
  * label `string`

### VideoStreamingPlaylists
* VideoStreamingPlaylists `object`
  * files `array`: Video files associated to this playlist. The difference with the root "files" property is that these files are fragmented, so they can be used in this streaming playlist (HLS etc)
    * items [VideoFile](#videofile)
  * id `integer`
  * playlistUrl `string`
  * redundancies `array`
    * items `object`
      * baseUrl `string`
  * segmentsSha256Url `string`
  * type `integer` (values: 1): Playlist type (HLS = `1`)

### VideoUploadResponse
* VideoUploadResponse `object`
  * video `object`
    * id `integer`
    * uuid `string`

### VideosForXML
* VideosForXML `array`
  * items `object`
    * content:encoded `string`: video description
    * dc:creator `string`: publisher user name
    * description `string`: video description
    * enclosure `object`: main streamable file for the video
      * length `integer`
      * type `string` (values: application/x-bittorrent)
      * url `string`
    * guid `string`: video canonical URL
    * link `string`: video watch page URL
    * media:category `integer`: video category (MRSS)
    * media:community `object`: see [media:community](https://www.rssboard.org/media-rss#media-community) (MRSS)
      * media:statistics `object`
        * views `integer`
    * media:description `string`
    * media:embed `object`
      * url `string`: video embed path, relative to the canonical URL domain (MRSS)
    * media:group `array`: list of streamable files for the video. see [media:peerLink](https://www.rssboard.org/media-rss#media-peerlink) and [media:content](https://www.rssboard.org/media-rss#media-content) or  (MRSS)
    * media:player `object`
      * url `string`: video watch path, relative to the canonical URL domain (MRSS)
    * media:rating `string` (values: nonadult, adult): see [media:rating](https://www.rssboard.org/media-rss#media-rating) (MRSS)
    * media:thumbnail `object`
      * height `integer`
      * url `string`
      * width `integer`
    * media:title `string`: see [media:title](https://www.rssboard.org/media-rss#media-title) (MRSS). We only use `plain` titles.
    * pubDate `string`: video publication date


