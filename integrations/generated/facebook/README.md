# @datafire/facebook

Client library for Facebook

## Installation and Usage
```bash
npm install --save @datafire/facebook
```
```js
let facebook = require('@datafire/facebook').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

facebook.video.picture.get({}).then(data => {
  console.log(data);
})
```

## Description

Connect to the social network with the Graph API.

## Actions

### video.picture.get
The image which represents the content of the video


```js
facebook.video.picture.get({
  "video": ""
}, context)
```

#### Input
* input `object`
  * video **required** `string`: Represents the ID of the video object.

#### Output
*Output schema unknown*

### video.likes.delete
Unlikes this video.


```js
facebook.video.likes.delete({
  "video": ""
}, context)
```

#### Input
* input `object`
  * video **required** `string`: Represents the ID of the video object.

#### Output
*Output schema unknown*

### video.likes.post
Likes this video.


```js
facebook.video.likes.post({
  "video": ""
}, context)
```

#### Input
* input `object`
  * video **required** `string`: Represents the ID of the video object.

#### Output
*Output schema unknown*

### video.likes.get
Users who like this video.


```js
facebook.video.likes.get({
  "video": ""
}, context)
```

#### Input
* input `object`
  * video **required** `string`: Represents the ID of the video object.

#### Output
*Output schema unknown*

### video.comments.post
Posts a comment to this video.


```js
facebook.video.comments.post({
  "message": "",
  "video": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * video **required** `string`: Represents the ID of the video object.

#### Output
*Output schema unknown*

### video.comments.get
All of the comments on this video.


```js
facebook.video.comments.get({
  "video": ""
}, context)
```

#### Input
* input `object`
  * video **required** `string`: Represents the ID of the video object.

#### Output
*Output schema unknown*

### video.get
An individual video


```js
facebook.video.get({
  "video": ""
}, context)
```

#### Input
* input `object`
  * video **required** `string`: Represents the ID of the video object.

#### Output
*Output schema unknown*

### notification.post
Marks the notification as read


```js
facebook.notification.post({
  "unread": true,
  "notification": ""
}, context)
```

#### Input
* input `object`
  * unread **required** `boolean`
  * notification **required** `string`: Represents the ID of the notification.

#### Output
*Output schema unknown*

### user.videos.post
Publishes a video on behalf of the user


```js
facebook.user.videos.post({
  "user": ""
}, context)
```

#### Input
* input `object`
  * title `string`: Video title
  * description `string`: Video description
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.videos.get
The videos this user has been tagged in


```js
facebook.user.videos.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.updates.get
The updates in this user's inbox.


```js
facebook.user.updates.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.television.get
The television listed on the user's profile


```js
facebook.user.television.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.tagged.get
Posts the user is tagged in


```js
facebook.user.tagged.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.statuses.post
Posts a status message on the user


```js
facebook.user.statuses.post({
  "message": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.statuses.get
The user's status updates


```js
facebook.user.statuses.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.scores.post
Posts a score for the user


```js
facebook.user.scores.post({
  "score": 0,
  "user": ""
}, context)
```

#### Input
* input `object`
  * score **required** `integer`: Numeric score with value < 0.
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.scores.get
The scores for the user


```js
facebook.user.scores.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.posts.post
Creates a post on behalf of the user


```js
facebook.user.posts.post({
  "message": "",
  "link": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Post message
  * link **required** `string`: Post URL
  * picture `string`: Post thumbnail image
  * name `string`: Post name
  * caption `string`: Post caption
  * description `string`: Post description
  * actions `string`: Post actions
  * privacy `string`: Post privacy settings
  * object_attachment `string`: Facebook ID for an existing picture in the User's photo albums to use as the thumbnail image. The User must be the owner of the photo, and the photo cannot be part of a message attachment.
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.posts.get
The user's posts


```js
facebook.user.posts.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.pokes.get
The user's pokes


```js
facebook.user.pokes.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.picture.get
The user's profile picture


```js
facebook.user.picture.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: square, small, large): One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.photos.post
Posts a photo to the user's Wall


```js
facebook.user.photos.post({
  "user": ""
}, context)
```

#### Input
* input `object`
  * message `string`: Photo description
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.photos.get
The photos the user is tagged in


```js
facebook.user.photos.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.permissions.delete
De-authorizes an application or revokes a specific extended permissions on behalf of a user


```js
facebook.user.permissions.delete({
  "user": ""
}, context)
```

#### Input
* input `object`
  * permission `string`: The permission you wish to revoke. If you don't specify a permission then this will de-authorize the application completely.
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.permissions.get
The permissions that user has granted the application.


```js
facebook.user.permissions.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.payments.get
The transactions the user placed with an application.


```js
facebook.user.payments.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.outbox.get
The messages in this user's outbox.


```js
facebook.user.outbox.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.notifications.get
The user's notifications


```js
facebook.user.notifications.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * include_read `boolean`: Enables you to see notifications that the user has already read in addition to the ones which are unread
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.notes.post
Creates a note on behalf of the user


```js
facebook.user.notes.post({
  "subject": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * subject **required** `string`: The subject of the Note
  * message `string`: Note content
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.notes.get
The user's notes


```js
facebook.user.notes.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.music.get
The music listed on the user's profile


```js
facebook.user.music.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.movies.get
The movies listed on the user's profile


```js
facebook.user.movies.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.links.post
Posts a link on the user's profile page


```js
facebook.user.links.post({
  "link": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Link URL
  * message `string`: Link message
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.links.get
The user's posted links.


```js
facebook.user.links.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.likes.page.get
Checks if the user likes the given page.


```js
facebook.user.likes.page.get({
  "user": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.
  * page **required** `string`: Represents the ID of the page.

#### Output
*Output schema unknown*

### user.likes.get
All the pages this user has liked.


```js
facebook.user.likes.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.interests.get
The interests listed on the user's profile


```js
facebook.user.interests.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.inbox.get
The threads in this user's inbox.


```js
facebook.user.inbox.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.home.get
The user's news feed


```js
facebook.user.home.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.groups.get
The Groups that the user belongs to.


```js
facebook.user.groups.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.games.get
Games the user has added to the Arts and Entertainment section of their profile.


```js
facebook.user.games.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.friends.friend.get
Checks if the given user is a friend of the current user


```js
facebook.user.friends.friend.get({
  "user": "",
  "friend": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.
  * friend **required** `string`: Represents the ID of the user's friend.

#### Output
*Output schema unknown*

### user.friends.get
The user's friends


```js
facebook.user.friends.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.friendlists.post
Creates a FriendList for the user


```js
facebook.user.friendlists.post({
  "name": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Friend list name
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.feed.post
Posts a status message on this user's wall


```js
facebook.user.feed.post({
  "message": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.feed.get
This user's wall


```js
facebook.user.feed.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.events.post
Creates an event for the user


```js
facebook.user.events.post({
  "name": "",
  "start_time": 0,
  "user": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Event name
  * start_time **required** `integer`: Event start time
  * end_time `integer`: Event end time
  * message `string`: Event description
  * location `string`: Event location
  * privacy_type `string` (values: OPEN, CLOSED, SECRET): Event privacy setting
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.events.get
The events this user is attending.


```js
facebook.user.events.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.checkins.post
Checks the user into a place


```js
facebook.user.checkins.post({
  "place": "",
  "coordinates": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * place **required** `string`: Checkin Place ID; for example 110506962309835 for Facebook HQ
  * coordinates **required** `string`: The user's location, as a string containing latitude and longitude: {"latitude":"...", "longitude": "..."}
  * tags `string`: Comma-separated list of tagged friends' user IDs
  * message `string`: Checkin description
  * link `string`: Checkin link
  * picture `string`: Checkin picture
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.checkins.get
The places that the user has checked-into


```js
facebook.user.checkins.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.books.get
The books listed on the user's profile.


```js
facebook.user.books.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.apprequests.get
The user's outstanding requests from an app.


```js
facebook.user.apprequests.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.albums.post
Creates an album for the user


```js
facebook.user.albums.post({
  "name": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Album name
  * message `string`: Album description
  * privacy `string`: Privacy settings for the Album. Format: A JSON-encoded object that defines the privacy setting for the album, for example: {"value":"SELF"}. Only the user can specify the privacy settings for the post.
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.albums.get
The photo albums this user has created


```js
facebook.user.albums.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.activities.get
The activities listed on the user's profile


```js
facebook.user.activities.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.achievements.delete
Deletes an achievement for the user


```js
facebook.user.achievements.delete({
  "achievement": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * achievement **required** `string`: The unique URL of the achievement you wish to delete.
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.achievements.post
Posts an achievement for the user


```js
facebook.user.achievements.post({
  "achievement": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * achievement **required** `string`: The unique URL of the achievement which the user achieved.
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.accounts.get
The Facebook apps and pages owned by the current user


```js
facebook.user.accounts.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### user.get
A user profile.


```js
facebook.user.get({
  "user": ""
}, context)
```

#### Input
* input `object`
  * fields `string`: The fields to return
  * user **required** `string`: Represents the ID of the user object.

#### Output
*Output schema unknown*

### status.likes.delete
Unlikes this status.


```js
facebook.status.likes.delete({
  "status": ""
}, context)
```

#### Input
* input `object`
  * status **required** `string`: Represents the ID of the status object.

#### Output
*Output schema unknown*

### status.likes.post
Likes this status.


```js
facebook.status.likes.post({
  "status": ""
}, context)
```

#### Input
* input `object`
  * status **required** `string`: Represents the ID of the status object.

#### Output
*Output schema unknown*

### status.likes.get
Users who like this status.


```js
facebook.status.likes.get({
  "status": ""
}, context)
```

#### Input
* input `object`
  * status **required** `string`: Represents the ID of the status object.

#### Output
*Output schema unknown*

### status.comments.post
Posts a comment to this status.


```js
facebook.status.comments.post({
  "message": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * status **required** `string`: Represents the ID of the status object.

#### Output
*Output schema unknown*

### status.comments.get
All of the comments on this status.


```js
facebook.status.comments.get({
  "status": ""
}, context)
```

#### Input
* input `object`
  * status **required** `string`: Represents the ID of the status object.

#### Output
*Output schema unknown*

### status.get
A Facebook status


```js
facebook.status.get({
  "status": ""
}, context)
```

#### Input
* input `object`
  * status **required** `string`: Represents the ID of the status object.

#### Output
*Output schema unknown*

### post.likes.delete
Unlikes this post.


```js
facebook.post.likes.delete({
  "post": ""
}, context)
```

#### Input
* input `object`
  * post **required** `string`: Represents the ID of the post object.

#### Output
*Output schema unknown*

### post.likes.post
Likes this post.


```js
facebook.post.likes.post({
  "post": ""
}, context)
```

#### Input
* input `object`
  * post **required** `string`: Represents the ID of the post object.

#### Output
*Output schema unknown*

### post.likes.get
Users who like this post.


```js
facebook.post.likes.get({
  "post": ""
}, context)
```

#### Input
* input `object`
  * post **required** `string`: Represents the ID of the post object.

#### Output
*Output schema unknown*

### post.comments.post
Posts a comment to this post.


```js
facebook.post.comments.post({
  "message": "",
  "post": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * post **required** `string`: Represents the ID of the post object.

#### Output
*Output schema unknown*

### post.comments.get
All of the comments on this post.


```js
facebook.post.comments.get({
  "post": ""
}, context)
```

#### Input
* input `object`
  * post **required** `string`: Represents the ID of the post object.

#### Output
*Output schema unknown*

### post.get
A Facebook post


```js
facebook.post.get({
  "post": ""
}, context)
```

#### Input
* input `object`
  * post **required** `string`: Represents the ID of the post object.

#### Output
*Output schema unknown*

### photo.tags.user.post
Updates the position of a tag on this photo for the user.


```js
facebook.photo.tags.user.post({
  "photo": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * x `string`: x coordinate of tag, as a percentage offset from the left edge of the picture
  * y `string`: y coordinate of tag, as a percentage offset from the top edge of the picture
  * photo **required** `string`: Represents the ID of the photo object.
  * user **required** `string`: Represents the ID of the user.

#### Output
*Output schema unknown*

### photo.tags.post
Creates a tag on this photo.


```js
facebook.photo.tags.post({
  "to": "",
  "photo": ""
}, context)
```

#### Input
* input `object`
  * to **required** `string`: USER_ID of the User to tag; can also be provided in URL path
  * x `string`: x coordinate of tag, as a percentage offset from the left edge of the picture
  * y `string`: y coordinate of tag, as a percentage offset from the top edge of the picture
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.tags.get
Tags for this photo.


```js
facebook.photo.tags.get({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.picture.get
The album-sized view of the photo


```js
facebook.photo.picture.get({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.likes.delete
Unlikes this photo.


```js
facebook.photo.likes.delete({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.likes.post
Likes this photo.


```js
facebook.photo.likes.post({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.likes.get
Users who like this photo.


```js
facebook.photo.likes.get({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.comments.post
Posts a comment to this photo.


```js
facebook.photo.comments.post({
  "message": "",
  "photo": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.comments.get
All of the comments on this photo.


```js
facebook.photo.comments.get({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### photo.get
An individual photo


```js
facebook.photo.get({
  "photo": ""
}, context)
```

#### Input
* input `object`
  * photo **required** `string`: Represents the ID of the photo object.

#### Output
*Output schema unknown*

### page.blocked.user.get
Checks if a user is blocked from the page


```js
facebook.page.blocked.user.get({
  "page": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.
  * user **required** `string`: Represents the ID of a user.

#### Output
*Output schema unknown*

### page.blocked.delete
Unblocks a user (or users) for the page


```js
facebook.page.blocked.delete({
  "uids": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * uids **required** `string`: Comma-separated list of the user IDs you wish to unblock
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.blocked.post
Blocks a user (or users) from posting content to the page


```js
facebook.page.blocked.post({
  "uids": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * uids **required** `string`: Comma-separated list of the user IDs you wish to block
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.blocked.get
A list of the users blocked from the page.


```js
facebook.page.blocked.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.admins.get
A list of the Page's admins.


```js
facebook.page.admins.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.tabs.tab.delete
Deletes an installed profile tab (where is_permanent is not true) for a page


```js
facebook.page.tabs.tab.delete({
  "page": "",
  "tab": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.
  * tab **required** `string`: Represents the ID of the tab.

#### Output
*Output schema unknown*

### page.tabs.tab.post
Updates an installed profile tab for a page


```js
facebook.page.tabs.tab.post({
  "page": "",
  "tab": ""
}, context)
```

#### Input
* input `object`
  * position `integer`: Order in which the tab will appear on the profile. Must be after permanent tabs and less than the number of installed tabs. Index starts at 0
  * custom_name `string`: Name to be used for the tab. If this is set to an empty string, the tab will use the application’s default tab name.
  * is_non_connection_landing_tab `boolean`: Set this tab as the default landing tab for users who have not liked and are not admins of the Page. If provided, value must be true.
  * page **required** `string`: Represents the ID of the page object.
  * tab **required** `string`: Represents the ID of the tab.

#### Output
*Output schema unknown*

### page.tabs.post
Installs a profile tab at the end of the current list of installed tabs for the page


```js
facebook.page.tabs.post({
  "app_id": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: ID of the application for which to install the tab
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.tabs.get
The page's profile tabs


```js
facebook.page.tabs.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.checkins.get
Checkins made to this Place Page by the current user, and friends of the current user


```js
facebook.page.checkins.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.events.post
Creates an event for the page


```js
facebook.page.events.post({
  "name": "",
  "start_time": 0,
  "page": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Event name
  * start_time **required** `integer`: Event start time
  * end_time `integer`: Event end time
  * message `string`: Event description
  * location `string`: Event location
  * privacy_type `string` (values: OPEN, CLOSED, SECRET): Event privacy setting
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.events.get
The events the Page is attending


```js
facebook.page.events.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.posts.get
The page's own posts


```js
facebook.page.posts.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.notes.post
Creates a note on the page


```js
facebook.page.notes.post({
  "subject": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * subject **required** `string`: The subject of the Note
  * message `string`: Note content
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.notes.get
The notes contained on this page


```js
facebook.page.notes.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.videos.post
Publishes a video to the page


```js
facebook.page.videos.post({
  "page": ""
}, context)
```

#### Input
* input `object`
  * title `string`: Video title
  * description `string`: Video description
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.videos.get
The videos contained on this page


```js
facebook.page.videos.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.statuses.post
Posts a status message on the page


```js
facebook.page.statuses.post({
  "message": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.statuses.get
The page's status updates


```js
facebook.page.statuses.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.albums.get
The photo albums this Page has uploaded


```js
facebook.page.albums.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.groups.get
The groups this page is a member of


```js
facebook.page.groups.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.photos.post
Adds a photo to the page


```js
facebook.page.photos.post({
  "page": ""
}, context)
```

#### Input
* input `object`
  * message `string`: Photo description
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.photos.get
The photos contained on this page


```js
facebook.page.photos.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.links.post
Posts a link on the page


```js
facebook.page.links.post({
  "link": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Link URL
  * message `string`: Link message
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.links.get
The page's posted links


```js
facebook.page.links.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.tagged.get
The photos, videos, and posts in which this page has been tagged


```js
facebook.page.tagged.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.settings.post
The page's post permission settings


```js
facebook.page.settings.post({
  "setting": "",
  "value": true,
  "page": ""
}, context)
```

#### Input
* input `object`
  * setting **required** `string` (values: USERS_CAN_POST, USERS_CAN_POST_PHOTOS, USERS_CAN_TAG_PHOTOS, USERS_CAN_POST_VIDEOS): Which single setting to update: USERS_CAN_POST, USERS_CAN_POST_PHOTOS, USERS_CAN_TAG_PHOTOS, USERS_CAN_POST_VIDEOS
  * value **required** `boolean`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.settings.get
The page's post permission settings


```js
facebook.page.settings.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.picture.get
The page's profile picture


```js
facebook.page.picture.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: square, small, large): One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.feed.post
Posts a status message on this page's wall


```js
facebook.page.feed.post({
  "message": "",
  "page": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.feed.get
This page's wall


```js
facebook.page.feed.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### page.get
Returns a Page


```js
facebook.page.get({
  "page": ""
}, context)
```

#### Input
* input `object`
  * page **required** `string`: Represents the ID of the page object.

#### Output
*Output schema unknown*

### note.likes.delete
Unlikes this note.


```js
facebook.note.likes.delete({
  "note": ""
}, context)
```

#### Input
* input `object`
  * note **required** `string`: Represents the ID of the note object.

#### Output
*Output schema unknown*

### note.likes.post
Likes this note.


```js
facebook.note.likes.post({
  "note": ""
}, context)
```

#### Input
* input `object`
  * note **required** `string`: Represents the ID of the note object.

#### Output
*Output schema unknown*

### note.likes.get
Users who like this note.


```js
facebook.note.likes.get({
  "note": ""
}, context)
```

#### Input
* input `object`
  * note **required** `string`: Represents the ID of the note object.

#### Output
*Output schema unknown*

### note.comments.post
Posts a comment to this note.


```js
facebook.note.comments.post({
  "message": "",
  "note": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * note **required** `string`: Represents the ID of the note object.

#### Output
*Output schema unknown*

### note.comments.get
All of the comments on this note.


```js
facebook.note.comments.get({
  "note": ""
}, context)
```

#### Input
* input `object`
  * note **required** `string`: Represents the ID of the note object.

#### Output
*Output schema unknown*

### note.get
A Facebook note


```js
facebook.note.get({
  "note": ""
}, context)
```

#### Input
* input `object`
  * note **required** `string`: Represents the ID of the note object.

#### Output
*Output schema unknown*

### link.likes.delete
Unlikes this link.


```js
facebook.link.likes.delete({
  "link": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Represents the ID of the link object.

#### Output
*Output schema unknown*

### link.likes.post
Likes this link.


```js
facebook.link.likes.post({
  "link": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Represents the ID of the link object.

#### Output
*Output schema unknown*

### link.likes.get
Users who like this link.


```js
facebook.link.likes.get({
  "link": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Represents the ID of the link object.

#### Output
*Output schema unknown*

### link.comments.post
Posts a comment to this link.


```js
facebook.link.comments.post({
  "message": "",
  "link": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * link **required** `string`: Represents the ID of the link object.

#### Output
*Output schema unknown*

### link.comments.get
All of the comments on this link.


```js
facebook.link.comments.get({
  "link": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Represents the ID of the link object.

#### Output
*Output schema unknown*

### link.get
A link shared on a user's wall


```js
facebook.link.get({
  "link": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Represents the ID of the link object.

#### Output
*Output schema unknown*

### group.docs.get
The docs in this group


```js
facebook.group.docs.get({
  "group": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`: Represents the ID of the group object.

#### Output
*Output schema unknown*

### group.picture.get
The profile picture of this group


```js
facebook.group.picture.get({
  "group": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: square, small, large): One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
  * group **required** `string`: Represents the ID of the group object.

#### Output
*Output schema unknown*

### group.members.get
All of the users who are members of this group


```js
facebook.group.members.get({
  "group": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`: Represents the ID of the group object.

#### Output
*Output schema unknown*

### group.feed.post
Posts a status message on this group's wall


```js
facebook.group.feed.post({
  "message": "",
  "group": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * group **required** `string`: Represents the ID of the group object.

#### Output
*Output schema unknown*

### group.feed.get
This group's wall


```js
facebook.group.feed.get({
  "group": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`: Represents the ID of the group object.

#### Output
*Output schema unknown*

### group.get
A Facebook group


```js
facebook.group.get({
  "group": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`: Represents the ID of the group object.

#### Output
*Output schema unknown*

### friendlist.members.user.delete
Removes a user from the friend list


```js
facebook.friendlist.members.user.delete({
  "friendlist": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * friendlist **required** `string`: Represents the ID of the FriendList object.
  * user **required** `string`: Represents the ID of the User to add to or remove from the friend list.

#### Output
*Output schema unknown*

### friendlist.members.user.post
Adds a user to the friend list


```js
facebook.friendlist.members.user.post({
  "friendlist": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * friendlist **required** `string`: Represents the ID of the FriendList object.
  * user **required** `string`: Represents the ID of the User to add to or remove from the friend list.

#### Output
*Output schema unknown*

### friendlist.members.get
All of the users who are members of this list.


```js
facebook.friendlist.members.get({
  "friendlist": ""
}, context)
```

#### Input
* input `object`
  * friendlist **required** `string`: Represents the ID of the FriendList object.

#### Output
*Output schema unknown*

### friendlist.delete
Deletes the FriendList.


```js
facebook.friendlist.delete({
  "friendlist": ""
}, context)
```

#### Input
* input `object`
  * friendlist **required** `string`: Represents the ID of the FriendList object.

#### Output
*Output schema unknown*

### friendlist.get
A Facebook friend list. This object represents the list itself and not the members of the list.


```js
facebook.friendlist.get({
  "friendlist": ""
}, context)
```

#### Input
* input `object`
  * friendlist **required** `string`: Represents the ID of the FriendList object.

#### Output
*Output schema unknown*

### event.picture.get
The event's profile picture


```js
facebook.event.picture.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: square, small, large): One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.declined.post
RSVPs the user as 'declined' for the event


```js
facebook.event.declined.post({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.declined.get
All of the users who declined their invitation to this event


```js
facebook.event.declined.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.attending.post
RSVPs the user as 'attending' for the event


```js
facebook.event.attending.post({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.attending.get
All of the users who are attending this event


```js
facebook.event.attending.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.invited.get
All of the users who have been invited to this event


```js
facebook.event.invited.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.maybe.post
RSVPs the user as a 'maybe' for the event


```js
facebook.event.maybe.post({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.maybe.get
All of the users who have been responded "Maybe" to their invitation to this event


```js
facebook.event.maybe.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.noreply.get
All of the users who have been not yet responded to their invitation to this event


```js
facebook.event.noreply.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.feed.post
Posts a status message on this event's wall


```js
facebook.event.feed.post({
  "message": "",
  "event": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.feed.get
This event's wall


```js
facebook.event.feed.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### event.get
Specifies information about an event, including the location, event name, and which invitees plan to attend.


```js
facebook.event.get({
  "event": ""
}, context)
```

#### Input
* input `object`
  * event **required** `string`: Represents the ID of the event object.

#### Output
*Output schema unknown*

### comment.likes.delete
Unlikes the comment


```js
facebook.comment.likes.delete({
  "comment": ""
}, context)
```

#### Input
* input `object`
  * comment **required** `string`: Represents the ID of the comment object.

#### Output
*Output schema unknown*

### comment.likes.post
Likes the comment


```js
facebook.comment.likes.post({
  "comment": ""
}, context)
```

#### Input
* input `object`
  * comment **required** `string`: Represents the ID of the comment object.

#### Output
*Output schema unknown*

### comment.likes.get
All the likes on this comment


```js
facebook.comment.likes.get({
  "comment": ""
}, context)
```

#### Input
* input `object`
  * comment **required** `string`: Represents the ID of the comment object.

#### Output
*Output schema unknown*

### comment.delete
Deletes a comment


```js
facebook.comment.delete({
  "comment": ""
}, context)
```

#### Input
* input `object`
  * comment **required** `string`: Represents the ID of the comment object.

#### Output
*Output schema unknown*

### comment.get
Returns a comment


```js
facebook.comment.get({
  "comment": ""
}, context)
```

#### Input
* input `object`
  * comment **required** `string`: Represents the ID of the comment object.

#### Output
*Output schema unknown*

### checkin.likes.delete
Unlikes this checkin.


```js
facebook.checkin.likes.delete({
  "checkin": ""
}, context)
```

#### Input
* input `object`
  * checkin **required** `string`: Represents the ID of the checkin object.

#### Output
*Output schema unknown*

### checkin.likes.post
Likes this checkin.


```js
facebook.checkin.likes.post({
  "checkin": ""
}, context)
```

#### Input
* input `object`
  * checkin **required** `string`: Represents the ID of the checkin object.

#### Output
*Output schema unknown*

### checkin.likes.get
Users who like this checkin.


```js
facebook.checkin.likes.get({
  "checkin": ""
}, context)
```

#### Input
* input `object`
  * checkin **required** `string`: Represents the ID of the checkin object.

#### Output
*Output schema unknown*

### checkin.comments.post
Posts a comment to this checkin.


```js
facebook.checkin.comments.post({
  "message": "",
  "checkin": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * checkin **required** `string`: Represents the ID of the checkin object.

#### Output
*Output schema unknown*

### checkin.comments.get
All of the comments on this checkin.


```js
facebook.checkin.comments.get({
  "checkin": ""
}, context)
```

#### Input
* input `object`
  * checkin **required** `string`: Represents the ID of the checkin object.

#### Output
*Output schema unknown*

### checkin.get
Represents a single visit by a user to a location


```js
facebook.checkin.get({
  "checkin": ""
}, context)
```

#### Input
* input `object`
  * checkin **required** `string`: Represents the ID of the checkin object.

#### Output
*Output schema unknown*

### application.achievements.delete
Unregisters an achievement for the application


```js
facebook.application.achievements.delete({
  "achievement": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * achievement **required** `string`: Unique URL to the achievement.
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.achievements.post
Registers an achievement for the application


```js
facebook.application.achievements.post({
  "achievement": "",
  "display_order": 0,
  "application": ""
}, context)
```

#### Input
* input `object`
  * achievement **required** `string`: Unique URL to the achievement.
  * display_order **required** `integer`: Order of this achievement as it shows up in the achievement stories UI (low to high). For example a display order of 100 will be displayed in the UI before 200. We use this value to surface achievements according to the order the developer has specified. Please make sure this value is unique and increments in the correct order for your achievements.
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.scores.delete
Deletes all the scores for the application.


```js
facebook.application.scores.delete({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.scores.get
Scores for the user and their friends.


```js
facebook.application.scores.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.translations.delete
Deletes a translation string for this application.


```js
facebook.application.translations.delete({
  "native_hashes": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * native_hashes **required** `string`: An array of native hashes. The native hash is a unique identifier of the native string and a description and is generated by the Translations application.
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.translations.post
Uploads translated strings for this application.


```js
facebook.application.translations.post({
  "native_strings": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * native_strings **required** `string`: A JSON-encoded array of strings to translate. Each element of the string array is an object, with text storing the actual string, description storing the description of the text.
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.translations.get
The translated strings for this application.


```js
facebook.application.translations.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.tagged.get
The photos, videos, and posts in which this application has been tagged.


```js
facebook.application.tagged.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.subscriptions.delete
Deletes a real-time notification subscription for this application.


```js
facebook.application.subscriptions.delete({
  "application": ""
}, context)
```

#### Input
* input `object`
  * object `string` (values: user, permissions, page): Object to monitor - `user`, `permissions`, or `page`. If no object is specified all subscriptions are deleted.
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.subscriptions.post
Adds a real-time notification subscription for this application.


```js
facebook.application.subscriptions.post({
  "object": "",
  "callback_url": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * object **required** `string` (values: user, permissions, page): Object to monitor - `user`, `permissions`, or `page`.
  * fields `string`: List of properties for the `object` to monitor.
  * callback_url **required** `string`: A callback URL to which Facebook will post subscription updates.
  * verify_token `string`: Token sent in the verification request.
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.subscriptions.get
All of the subscriptions this application has for real-time notifications.


```js
facebook.application.subscriptions.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.statuses.post
Posts a status message on the application's profile page


```js
facebook.application.statuses.post({
  "message": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.statuses.get
The application's status updates


```js
facebook.application.statuses.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.staticresources.get
Usage stats about the canvas application's static resources, such as javascript and CSS, and which ones are being flushed to browsers early.


```js
facebook.application.staticresources.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.reviews.get
Reviews of this application


```js
facebook.application.reviews.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.posts.get
The application's own posts.


```js
facebook.application.posts.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.picture.get
The application's logo


```js
facebook.application.picture.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: square, small, large): One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.links.post
Posts a link on the application's profile page


```js
facebook.application.links.post({
  "link": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: Link URL
  * message `string`: Link message
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.links.get
The application's posted links.


```js
facebook.application.links.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.insights.get
Usage metrics for this application


```js
facebook.application.insights.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.feed.post
Posts a status message on the application's profile page


```js
facebook.application.feed.post({
  "message": "",
  "application": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Status Message content
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.feed.get
The application's wall.


```js
facebook.application.feed.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.albums.get
The photo albums this application has created.


```js
facebook.application.albums.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.accounts.test_users.post
Creates a test account for the application


```js
facebook.application.accounts.test_users.post({
  "application": ""
}, context)
```

#### Input
* input `object`
  * installed `boolean`: Install app for the test user upon creation
  * permissions `string`: List of extended permissions app granted for the new test user if installed is true
  * name `string`: A name for the test user. The specified name will also be used in the email address assigned to the test user.
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.accounts.get
Test User accounts associated with the application.


```js
facebook.application.accounts.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### application.get
An application's profile


```js
facebook.application.get({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: Represents the ID of the application object.

#### Output
*Output schema unknown*

### album.picture.get
The album's cover photo; the first picture uploaded to an album becomes the cover photo for the album.


```js
facebook.album.picture.get({
  "album": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: square, small, large): One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.comments.post
Posts a comment on the album


```js
facebook.album.comments.post({
  "message": "",
  "album": ""
}, context)
```

#### Input
* input `object`
  * message **required** `string`: Comment text
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.comments.get
The comments made on this album


```js
facebook.album.comments.get({
  "album": ""
}, context)
```

#### Input
* input `object`
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.likes.delete
Unlikes the album


```js
facebook.album.likes.delete({
  "album": ""
}, context)
```

#### Input
* input `object`
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.likes.post
Likes the album


```js
facebook.album.likes.post({
  "album": ""
}, context)
```

#### Input
* input `object`
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.likes.get
The likes made on this album


```js
facebook.album.likes.get({
  "album": ""
}, context)
```

#### Input
* input `object`
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.photos.post
Adds a photo to the album


```js
facebook.album.photos.post({
  "album": ""
}, context)
```

#### Input
* input `object`
  * message `string`: Photo description
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.photos.get
The photos contained in this album


```js
facebook.album.photos.get({
  "album": ""
}, context)
```

#### Input
* input `object`
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### album.get
A photo album


```js
facebook.album.get({
  "album": ""
}, context)
```

#### Input
* input `object`
  * album **required** `string`: Represents the ID of the album object.

#### Output
*Output schema unknown*

### search.get
Search over all public objects in the social graph


```js
facebook.search.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The search string
  * type `string` (values: post, user, page, event, group, checkin): Supports these types of objects: All public posts (post), people (user), pages (page), events

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
