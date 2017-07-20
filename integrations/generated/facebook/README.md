# @datafire/facebook

Client library for Facebook

## Installation and Usage
```bash
npm install --save datafire @datafire/facebook
```

```js
let datafire = require('datafire');
let facebook = require('@datafire/facebook').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    facebook: account,
  }
})


facebook.video.picture.get({}, context).then(data => {
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

#### Parameters
* video (string) **required** - Represents the ID of the video object.

### video.likes.delete
Unlikes this video.


```js
facebook.video.likes.delete({
  "video": ""
}, context)
```

#### Parameters
* video (string) **required** - Represents the ID of the video object.

### video.likes.post
Likes this video.


```js
facebook.video.likes.post({
  "video": ""
}, context)
```

#### Parameters
* video (string) **required** - Represents the ID of the video object.

### video.likes.get
Users who like this video.


```js
facebook.video.likes.get({
  "video": ""
}, context)
```

#### Parameters
* video (string) **required** - Represents the ID of the video object.

### video.comments.post
Posts a comment to this video.


```js
facebook.video.comments.post({
  "message": "",
  "video": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* video (string) **required** - Represents the ID of the video object.

### video.comments.get
All of the comments on this video.


```js
facebook.video.comments.get({
  "video": ""
}, context)
```

#### Parameters
* video (string) **required** - Represents the ID of the video object.

### video.get
An individual video


```js
facebook.video.get({
  "video": ""
}, context)
```

#### Parameters
* video (string) **required** - Represents the ID of the video object.

### notification.post
Marks the notification as read


```js
facebook.notification.post({
  "unread": true,
  "notification": ""
}, context)
```

#### Parameters
* unread (boolean) **required**
* notification (string) **required** - Represents the ID of the notification.

### user.videos.post
Publishes a video on behalf of the user


```js
facebook.user.videos.post({
  "user": ""
}, context)
```

#### Parameters
* title (string) - Video title
* description (string) - Video description
* user (string) **required** - Represents the ID of the user object.

### user.videos.get
The videos this user has been tagged in


```js
facebook.user.videos.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.updates.get
The updates in this user's inbox.


```js
facebook.user.updates.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.television.get
The television listed on the user's profile


```js
facebook.user.television.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.tagged.get
Posts the user is tagged in


```js
facebook.user.tagged.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.statuses.post
Posts a status message on the user


```js
facebook.user.statuses.post({
  "message": "",
  "user": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* user (string) **required** - Represents the ID of the user object.

### user.statuses.get
The user's status updates


```js
facebook.user.statuses.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.scores.post
Posts a score for the user


```js
facebook.user.scores.post({
  "score": 0,
  "user": ""
}, context)
```

#### Parameters
* score (integer) **required** - Numeric score with value < 0.
* user (string) **required** - Represents the ID of the user object.

### user.scores.get
The scores for the user


```js
facebook.user.scores.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.posts.post
Creates a post on behalf of the user


```js
facebook.user.posts.post({
  "message": "",
  "link": "",
  "user": ""
}, context)
```

#### Parameters
* message (string) **required** - Post message
* link (string) **required** - Post URL
* picture (string) - Post thumbnail image
* name (string) - Post name
* caption (string) - Post caption
* description (string) - Post description
* actions (string) - Post actions
* privacy (string) - Post privacy settings
* object_attachment (string) - Facebook ID for an existing picture in the User's photo albums to use as the thumbnail image. The User must be the owner of the photo, and the photo cannot be part of a message attachment.
* user (string) **required** - Represents the ID of the user object.

### user.posts.get
The user's posts


```js
facebook.user.posts.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.pokes.get
The user's pokes


```js
facebook.user.pokes.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.picture.get
The user's profile picture


```js
facebook.user.picture.get({
  "user": ""
}, context)
```

#### Parameters
* type (string) - One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
* user (string) **required** - Represents the ID of the user object.

### user.photos.post
Posts a photo to the user's Wall


```js
facebook.user.photos.post({
  "user": ""
}, context)
```

#### Parameters
* message (string) - Photo description
* user (string) **required** - Represents the ID of the user object.

### user.photos.get
The photos the user is tagged in


```js
facebook.user.photos.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.permissions.delete
De-authorizes an application or revokes a specific extended permissions on behalf of a user


```js
facebook.user.permissions.delete({
  "user": ""
}, context)
```

#### Parameters
* permission (string) - The permission you wish to revoke. If you don't specify a permission then this will de-authorize the application completely.
* user (string) **required** - Represents the ID of the user object.

### user.permissions.get
The permissions that user has granted the application.


```js
facebook.user.permissions.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.payments.get
The transactions the user placed with an application.


```js
facebook.user.payments.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.outbox.get
The messages in this user's outbox.


```js
facebook.user.outbox.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.notifications.get
The user's notifications


```js
facebook.user.notifications.get({
  "user": ""
}, context)
```

#### Parameters
* include_read (boolean) - Enables you to see notifications that the user has already read in addition to the ones which are unread
* user (string) **required** - Represents the ID of the user object.

### user.notes.post
Creates a note on behalf of the user


```js
facebook.user.notes.post({
  "subject": "",
  "user": ""
}, context)
```

#### Parameters
* subject (string) **required** - The subject of the Note
* message (string) - Note content
* user (string) **required** - Represents the ID of the user object.

### user.notes.get
The user's notes


```js
facebook.user.notes.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.music.get
The music listed on the user's profile


```js
facebook.user.music.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.movies.get
The movies listed on the user's profile


```js
facebook.user.movies.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.links.post
Posts a link on the user's profile page


```js
facebook.user.links.post({
  "link": "",
  "user": ""
}, context)
```

#### Parameters
* link (string) **required** - Link URL
* message (string) - Link message
* user (string) **required** - Represents the ID of the user object.

### user.links.get
The user's posted links.


```js
facebook.user.links.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.likes.page.get
Checks if the user likes the given page.


```js
facebook.user.likes.page.get({
  "user": "",
  "page": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.
* page (string) **required** - Represents the ID of the page.

### user.likes.get
All the pages this user has liked.


```js
facebook.user.likes.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.interests.get
The interests listed on the user's profile


```js
facebook.user.interests.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.inbox.get
The threads in this user's inbox.


```js
facebook.user.inbox.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.home.get
The user's news feed


```js
facebook.user.home.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.groups.get
The Groups that the user belongs to.


```js
facebook.user.groups.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.games.get
Games the user has added to the Arts and Entertainment section of their profile.


```js
facebook.user.games.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.friends.friend.get
Checks if the given user is a friend of the current user


```js
facebook.user.friends.friend.get({
  "user": "",
  "friend": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.
* friend (string) **required** - Represents the ID of the user's friend.

### user.friends.get
The user's friends


```js
facebook.user.friends.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.friendlists.post
Creates a FriendList for the user


```js
facebook.user.friendlists.post({
  "name": "",
  "user": ""
}, context)
```

#### Parameters
* name (string) **required** - Friend list name
* user (string) **required** - Represents the ID of the user object.

### user.feed.post
Posts a status message on this user's wall


```js
facebook.user.feed.post({
  "message": "",
  "user": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* user (string) **required** - Represents the ID of the user object.

### user.feed.get
This user's wall


```js
facebook.user.feed.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.events.post
Creates an event for the user


```js
facebook.user.events.post({
  "name": "",
  "start_time": 0,
  "user": ""
}, context)
```

#### Parameters
* name (string) **required** - Event name
* start_time (integer) **required** - Event start time
* end_time (integer) - Event end time
* message (string) - Event description
* location (string) - Event location
* privacy_type (string) - Event privacy setting
* user (string) **required** - Represents the ID of the user object.

### user.events.get
The events this user is attending.


```js
facebook.user.events.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.checkins.post
Checks the user into a place


```js
facebook.user.checkins.post({
  "place": "",
  "coordinates": "",
  "user": ""
}, context)
```

#### Parameters
* place (string) **required** - Checkin Place ID; for example 110506962309835 for Facebook HQ
* coordinates (string) **required** - The user's location, as a string containing latitude and longitude: {"latitude":"...", "longitude": "..."}
* tags (string) - Comma-separated list of tagged friends' user IDs
* message (string) - Checkin description
* link (string) - Checkin link
* picture (string) - Checkin picture
* user (string) **required** - Represents the ID of the user object.

### user.checkins.get
The places that the user has checked-into


```js
facebook.user.checkins.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.books.get
The books listed on the user's profile.


```js
facebook.user.books.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.apprequests.get
The user's outstanding requests from an app.


```js
facebook.user.apprequests.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.albums.post
Creates an album for the user


```js
facebook.user.albums.post({
  "name": "",
  "user": ""
}, context)
```

#### Parameters
* name (string) **required** - Album name
* message (string) - Album description
* privacy (string) - Privacy settings for the Album. Format: A JSON-encoded object that defines the privacy setting for the album, for example: {"value":"SELF"}. Only the user can specify the privacy settings for the post.
* user (string) **required** - Represents the ID of the user object.

### user.albums.get
The photo albums this user has created


```js
facebook.user.albums.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.activities.get
The activities listed on the user's profile


```js
facebook.user.activities.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.achievements.delete
Deletes an achievement for the user


```js
facebook.user.achievements.delete({
  "achievement": "",
  "user": ""
}, context)
```

#### Parameters
* achievement (string) **required** - The unique URL of the achievement you wish to delete.
* user (string) **required** - Represents the ID of the user object.

### user.achievements.post
Posts an achievement for the user


```js
facebook.user.achievements.post({
  "achievement": "",
  "user": ""
}, context)
```

#### Parameters
* achievement (string) **required** - The unique URL of the achievement which the user achieved.
* user (string) **required** - Represents the ID of the user object.

### user.accounts.get
The Facebook apps and pages owned by the current user


```js
facebook.user.accounts.get({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Represents the ID of the user object.

### user.get
A user profile.


```js
facebook.user.get({
  "user": ""
}, context)
```

#### Parameters
* fields (string) - The fields to return
* user (string) **required** - Represents the ID of the user object.

### status.likes.delete
Unlikes this status.


```js
facebook.status.likes.delete({
  "status": ""
}, context)
```

#### Parameters
* status (string) **required** - Represents the ID of the status object.

### status.likes.post
Likes this status.


```js
facebook.status.likes.post({
  "status": ""
}, context)
```

#### Parameters
* status (string) **required** - Represents the ID of the status object.

### status.likes.get
Users who like this status.


```js
facebook.status.likes.get({
  "status": ""
}, context)
```

#### Parameters
* status (string) **required** - Represents the ID of the status object.

### status.comments.post
Posts a comment to this status.


```js
facebook.status.comments.post({
  "message": "",
  "status": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* status (string) **required** - Represents the ID of the status object.

### status.comments.get
All of the comments on this status.


```js
facebook.status.comments.get({
  "status": ""
}, context)
```

#### Parameters
* status (string) **required** - Represents the ID of the status object.

### status.get
A Facebook status


```js
facebook.status.get({
  "status": ""
}, context)
```

#### Parameters
* status (string) **required** - Represents the ID of the status object.

### post.likes.delete
Unlikes this post.


```js
facebook.post.likes.delete({
  "post": ""
}, context)
```

#### Parameters
* post (string) **required** - Represents the ID of the post object.

### post.likes.post
Likes this post.


```js
facebook.post.likes.post({
  "post": ""
}, context)
```

#### Parameters
* post (string) **required** - Represents the ID of the post object.

### post.likes.get
Users who like this post.


```js
facebook.post.likes.get({
  "post": ""
}, context)
```

#### Parameters
* post (string) **required** - Represents the ID of the post object.

### post.comments.post
Posts a comment to this post.


```js
facebook.post.comments.post({
  "message": "",
  "post": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* post (string) **required** - Represents the ID of the post object.

### post.comments.get
All of the comments on this post.


```js
facebook.post.comments.get({
  "post": ""
}, context)
```

#### Parameters
* post (string) **required** - Represents the ID of the post object.

### post.get
A Facebook post


```js
facebook.post.get({
  "post": ""
}, context)
```

#### Parameters
* post (string) **required** - Represents the ID of the post object.

### photo.tags.user.post
Updates the position of a tag on this photo for the user.


```js
facebook.photo.tags.user.post({
  "photo": "",
  "user": ""
}, context)
```

#### Parameters
* x (string) - x coordinate of tag, as a percentage offset from the left edge of the picture
* y (string) - y coordinate of tag, as a percentage offset from the top edge of the picture
* photo (string) **required** - Represents the ID of the photo object.
* user (string) **required** - Represents the ID of the user.

### photo.tags.post
Creates a tag on this photo.


```js
facebook.photo.tags.post({
  "to": "",
  "photo": ""
}, context)
```

#### Parameters
* to (string) **required** - USER_ID of the User to tag; can also be provided in URL path
* x (string) - x coordinate of tag, as a percentage offset from the left edge of the picture
* y (string) - y coordinate of tag, as a percentage offset from the top edge of the picture
* photo (string) **required** - Represents the ID of the photo object.

### photo.tags.get
Tags for this photo.


```js
facebook.photo.tags.get({
  "photo": ""
}, context)
```

#### Parameters
* photo (string) **required** - Represents the ID of the photo object.

### photo.picture.get
The album-sized view of the photo


```js
facebook.photo.picture.get({
  "photo": ""
}, context)
```

#### Parameters
* photo (string) **required** - Represents the ID of the photo object.

### photo.likes.delete
Unlikes this photo.


```js
facebook.photo.likes.delete({
  "photo": ""
}, context)
```

#### Parameters
* photo (string) **required** - Represents the ID of the photo object.

### photo.likes.post
Likes this photo.


```js
facebook.photo.likes.post({
  "photo": ""
}, context)
```

#### Parameters
* photo (string) **required** - Represents the ID of the photo object.

### photo.likes.get
Users who like this photo.


```js
facebook.photo.likes.get({
  "photo": ""
}, context)
```

#### Parameters
* photo (string) **required** - Represents the ID of the photo object.

### photo.comments.post
Posts a comment to this photo.


```js
facebook.photo.comments.post({
  "message": "",
  "photo": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* photo (string) **required** - Represents the ID of the photo object.

### photo.comments.get
All of the comments on this photo.


```js
facebook.photo.comments.get({
  "photo": ""
}, context)
```

#### Parameters
* photo (string) **required** - Represents the ID of the photo object.

### photo.get
An individual photo


```js
facebook.photo.get({
  "photo": ""
}, context)
```

#### Parameters
* photo (string) **required** - Represents the ID of the photo object.

### page.blocked.user.get
Checks if a user is blocked from the page


```js
facebook.page.blocked.user.get({
  "page": "",
  "user": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.
* user (string) **required** - Represents the ID of a user.

### page.blocked.delete
Unblocks a user (or users) for the page


```js
facebook.page.blocked.delete({
  "uids": "",
  "page": ""
}, context)
```

#### Parameters
* uids (string) **required** - Comma-separated list of the user IDs you wish to unblock
* page (string) **required** - Represents the ID of the page object.

### page.blocked.post
Blocks a user (or users) from posting content to the page


```js
facebook.page.blocked.post({
  "uids": "",
  "page": ""
}, context)
```

#### Parameters
* uids (string) **required** - Comma-separated list of the user IDs you wish to block
* page (string) **required** - Represents the ID of the page object.

### page.blocked.get
A list of the users blocked from the page.


```js
facebook.page.blocked.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.admins.get
A list of the Page's admins.


```js
facebook.page.admins.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.tabs.tab.delete
Deletes an installed profile tab (where is_permanent is not true) for a page


```js
facebook.page.tabs.tab.delete({
  "page": "",
  "tab": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.
* tab (string) **required** - Represents the ID of the tab.

### page.tabs.tab.post
Updates an installed profile tab for a page


```js
facebook.page.tabs.tab.post({
  "page": "",
  "tab": ""
}, context)
```

#### Parameters
* position (integer) - Order in which the tab will appear on the profile. Must be after permanent tabs and less than the number of installed tabs. Index starts at 0
* custom_name (string) - Name to be used for the tab. If this is set to an empty string, the tab will use the application’s default tab name.
* is_non_connection_landing_tab (boolean) - Set this tab as the default landing tab for users who have not liked and are not admins of the Page. If provided, value must be true.
* page (string) **required** - Represents the ID of the page object.
* tab (string) **required** - Represents the ID of the tab.

### page.tabs.post
Installs a profile tab at the end of the current list of installed tabs for the page


```js
facebook.page.tabs.post({
  "app_id": "",
  "page": ""
}, context)
```

#### Parameters
* app_id (string) **required** - ID of the application for which to install the tab
* page (string) **required** - Represents the ID of the page object.

### page.tabs.get
The page's profile tabs


```js
facebook.page.tabs.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.checkins.get
Checkins made to this Place Page by the current user, and friends of the current user


```js
facebook.page.checkins.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.events.post
Creates an event for the page


```js
facebook.page.events.post({
  "name": "",
  "start_time": 0,
  "page": ""
}, context)
```

#### Parameters
* name (string) **required** - Event name
* start_time (integer) **required** - Event start time
* end_time (integer) - Event end time
* message (string) - Event description
* location (string) - Event location
* privacy_type (string) - Event privacy setting
* page (string) **required** - Represents the ID of the page object.

### page.events.get
The events the Page is attending


```js
facebook.page.events.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.posts.get
The page's own posts


```js
facebook.page.posts.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.notes.post
Creates a note on the page


```js
facebook.page.notes.post({
  "subject": "",
  "page": ""
}, context)
```

#### Parameters
* subject (string) **required** - The subject of the Note
* message (string) - Note content
* page (string) **required** - Represents the ID of the page object.

### page.notes.get
The notes contained on this page


```js
facebook.page.notes.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.videos.post
Publishes a video to the page


```js
facebook.page.videos.post({
  "page": ""
}, context)
```

#### Parameters
* title (string) - Video title
* description (string) - Video description
* page (string) **required** - Represents the ID of the page object.

### page.videos.get
The videos contained on this page


```js
facebook.page.videos.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.statuses.post
Posts a status message on the page


```js
facebook.page.statuses.post({
  "message": "",
  "page": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* page (string) **required** - Represents the ID of the page object.

### page.statuses.get
The page's status updates


```js
facebook.page.statuses.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.albums.get
The photo albums this Page has uploaded


```js
facebook.page.albums.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.groups.get
The groups this page is a member of


```js
facebook.page.groups.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.photos.post
Adds a photo to the page


```js
facebook.page.photos.post({
  "page": ""
}, context)
```

#### Parameters
* message (string) - Photo description
* page (string) **required** - Represents the ID of the page object.

### page.photos.get
The photos contained on this page


```js
facebook.page.photos.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.links.post
Posts a link on the page


```js
facebook.page.links.post({
  "link": "",
  "page": ""
}, context)
```

#### Parameters
* link (string) **required** - Link URL
* message (string) - Link message
* page (string) **required** - Represents the ID of the page object.

### page.links.get
The page's posted links


```js
facebook.page.links.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.tagged.get
The photos, videos, and posts in which this page has been tagged


```js
facebook.page.tagged.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.settings.post
The page's post permission settings


```js
facebook.page.settings.post({
  "setting": "",
  "value": true,
  "page": ""
}, context)
```

#### Parameters
* setting (string) **required** - Which single setting to update: USERS_CAN_POST, USERS_CAN_POST_PHOTOS, USERS_CAN_TAG_PHOTOS, USERS_CAN_POST_VIDEOS
* value (boolean) **required**
* page (string) **required** - Represents the ID of the page object.

### page.settings.get
The page's post permission settings


```js
facebook.page.settings.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.picture.get
The page's profile picture


```js
facebook.page.picture.get({
  "page": ""
}, context)
```

#### Parameters
* type (string) - One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
* page (string) **required** - Represents the ID of the page object.

### page.feed.post
Posts a status message on this page's wall


```js
facebook.page.feed.post({
  "message": "",
  "page": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* page (string) **required** - Represents the ID of the page object.

### page.feed.get
This page's wall


```js
facebook.page.feed.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### page.get
Returns a Page


```js
facebook.page.get({
  "page": ""
}, context)
```

#### Parameters
* page (string) **required** - Represents the ID of the page object.

### note.likes.delete
Unlikes this note.


```js
facebook.note.likes.delete({
  "note": ""
}, context)
```

#### Parameters
* note (string) **required** - Represents the ID of the note object.

### note.likes.post
Likes this note.


```js
facebook.note.likes.post({
  "note": ""
}, context)
```

#### Parameters
* note (string) **required** - Represents the ID of the note object.

### note.likes.get
Users who like this note.


```js
facebook.note.likes.get({
  "note": ""
}, context)
```

#### Parameters
* note (string) **required** - Represents the ID of the note object.

### note.comments.post
Posts a comment to this note.


```js
facebook.note.comments.post({
  "message": "",
  "note": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* note (string) **required** - Represents the ID of the note object.

### note.comments.get
All of the comments on this note.


```js
facebook.note.comments.get({
  "note": ""
}, context)
```

#### Parameters
* note (string) **required** - Represents the ID of the note object.

### note.get
A Facebook note


```js
facebook.note.get({
  "note": ""
}, context)
```

#### Parameters
* note (string) **required** - Represents the ID of the note object.

### link.likes.delete
Unlikes this link.


```js
facebook.link.likes.delete({
  "link": ""
}, context)
```

#### Parameters
* link (string) **required** - Represents the ID of the link object.

### link.likes.post
Likes this link.


```js
facebook.link.likes.post({
  "link": ""
}, context)
```

#### Parameters
* link (string) **required** - Represents the ID of the link object.

### link.likes.get
Users who like this link.


```js
facebook.link.likes.get({
  "link": ""
}, context)
```

#### Parameters
* link (string) **required** - Represents the ID of the link object.

### link.comments.post
Posts a comment to this link.


```js
facebook.link.comments.post({
  "message": "",
  "link": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* link (string) **required** - Represents the ID of the link object.

### link.comments.get
All of the comments on this link.


```js
facebook.link.comments.get({
  "link": ""
}, context)
```

#### Parameters
* link (string) **required** - Represents the ID of the link object.

### link.get
A link shared on a user's wall


```js
facebook.link.get({
  "link": ""
}, context)
```

#### Parameters
* link (string) **required** - Represents the ID of the link object.

### group.docs.get
The docs in this group


```js
facebook.group.docs.get({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Represents the ID of the group object.

### group.picture.get
The profile picture of this group


```js
facebook.group.picture.get({
  "group": ""
}, context)
```

#### Parameters
* type (string) - One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
* group (string) **required** - Represents the ID of the group object.

### group.members.get
All of the users who are members of this group


```js
facebook.group.members.get({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Represents the ID of the group object.

### group.feed.post
Posts a status message on this group's wall


```js
facebook.group.feed.post({
  "message": "",
  "group": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* group (string) **required** - Represents the ID of the group object.

### group.feed.get
This group's wall


```js
facebook.group.feed.get({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Represents the ID of the group object.

### group.get
A Facebook group


```js
facebook.group.get({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Represents the ID of the group object.

### friendlist.members.user.delete
Removes a user from the friend list


```js
facebook.friendlist.members.user.delete({
  "friendlist": "",
  "user": ""
}, context)
```

#### Parameters
* friendlist (string) **required** - Represents the ID of the FriendList object.
* user (string) **required** - Represents the ID of the User to add to or remove from the friend list.

### friendlist.members.user.post
Adds a user to the friend list


```js
facebook.friendlist.members.user.post({
  "friendlist": "",
  "user": ""
}, context)
```

#### Parameters
* friendlist (string) **required** - Represents the ID of the FriendList object.
* user (string) **required** - Represents the ID of the User to add to or remove from the friend list.

### friendlist.members.get
All of the users who are members of this list.


```js
facebook.friendlist.members.get({
  "friendlist": ""
}, context)
```

#### Parameters
* friendlist (string) **required** - Represents the ID of the FriendList object.

### friendlist.delete
Deletes the FriendList.


```js
facebook.friendlist.delete({
  "friendlist": ""
}, context)
```

#### Parameters
* friendlist (string) **required** - Represents the ID of the FriendList object.

### friendlist.get
A Facebook friend list. This object represents the list itself and not the members of the list.


```js
facebook.friendlist.get({
  "friendlist": ""
}, context)
```

#### Parameters
* friendlist (string) **required** - Represents the ID of the FriendList object.

### event.picture.get
The event's profile picture


```js
facebook.event.picture.get({
  "event": ""
}, context)
```

#### Parameters
* type (string) - One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
* event (string) **required** - Represents the ID of the event object.

### event.declined.post
RSVPs the user as 'declined' for the event


```js
facebook.event.declined.post({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.declined.get
All of the users who declined their invitation to this event


```js
facebook.event.declined.get({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.attending.post
RSVPs the user as 'attending' for the event


```js
facebook.event.attending.post({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.attending.get
All of the users who are attending this event


```js
facebook.event.attending.get({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.invited.get
All of the users who have been invited to this event


```js
facebook.event.invited.get({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.maybe.post
RSVPs the user as a 'maybe' for the event


```js
facebook.event.maybe.post({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.maybe.get
All of the users who have been responded "Maybe" to their invitation to this event


```js
facebook.event.maybe.get({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.noreply.get
All of the users who have been not yet responded to their invitation to this event


```js
facebook.event.noreply.get({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.feed.post
Posts a status message on this event's wall


```js
facebook.event.feed.post({
  "message": "",
  "event": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* event (string) **required** - Represents the ID of the event object.

### event.feed.get
This event's wall


```js
facebook.event.feed.get({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### event.get
Specifies information about an event, including the location, event name, and which invitees plan to attend.


```js
facebook.event.get({
  "event": ""
}, context)
```

#### Parameters
* event (string) **required** - Represents the ID of the event object.

### comment.likes.delete
Unlikes the comment


```js
facebook.comment.likes.delete({
  "comment": ""
}, context)
```

#### Parameters
* comment (string) **required** - Represents the ID of the comment object.

### comment.likes.post
Likes the comment


```js
facebook.comment.likes.post({
  "comment": ""
}, context)
```

#### Parameters
* comment (string) **required** - Represents the ID of the comment object.

### comment.likes.get
All the likes on this comment


```js
facebook.comment.likes.get({
  "comment": ""
}, context)
```

#### Parameters
* comment (string) **required** - Represents the ID of the comment object.

### comment.delete
Deletes a comment


```js
facebook.comment.delete({
  "comment": ""
}, context)
```

#### Parameters
* comment (string) **required** - Represents the ID of the comment object.

### comment.get
Returns a comment


```js
facebook.comment.get({
  "comment": ""
}, context)
```

#### Parameters
* comment (string) **required** - Represents the ID of the comment object.

### checkin.likes.delete
Unlikes this checkin.


```js
facebook.checkin.likes.delete({
  "checkin": ""
}, context)
```

#### Parameters
* checkin (string) **required** - Represents the ID of the checkin object.

### checkin.likes.post
Likes this checkin.


```js
facebook.checkin.likes.post({
  "checkin": ""
}, context)
```

#### Parameters
* checkin (string) **required** - Represents the ID of the checkin object.

### checkin.likes.get
Users who like this checkin.


```js
facebook.checkin.likes.get({
  "checkin": ""
}, context)
```

#### Parameters
* checkin (string) **required** - Represents the ID of the checkin object.

### checkin.comments.post
Posts a comment to this checkin.


```js
facebook.checkin.comments.post({
  "message": "",
  "checkin": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* checkin (string) **required** - Represents the ID of the checkin object.

### checkin.comments.get
All of the comments on this checkin.


```js
facebook.checkin.comments.get({
  "checkin": ""
}, context)
```

#### Parameters
* checkin (string) **required** - Represents the ID of the checkin object.

### checkin.get
Represents a single visit by a user to a location


```js
facebook.checkin.get({
  "checkin": ""
}, context)
```

#### Parameters
* checkin (string) **required** - Represents the ID of the checkin object.

### application.achievements.delete
Unregisters an achievement for the application


```js
facebook.application.achievements.delete({
  "achievement": "",
  "application": ""
}, context)
```

#### Parameters
* achievement (string) **required** - Unique URL to the achievement.
* application (string) **required** - Represents the ID of the application object.

### application.achievements.post
Registers an achievement for the application


```js
facebook.application.achievements.post({
  "achievement": "",
  "display_order": 0,
  "application": ""
}, context)
```

#### Parameters
* achievement (string) **required** - Unique URL to the achievement.
* display_order (integer) **required** - Order of this achievement as it shows up in the achievement stories UI (low to high). For example a display order of 100 will be displayed in the UI before 200. We use this value to surface achievements according to the order the developer has specified. Please make sure this value is unique and increments in the correct order for your achievements.
* application (string) **required** - Represents the ID of the application object.

### application.scores.delete
Deletes all the scores for the application.


```js
facebook.application.scores.delete({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.scores.get
Scores for the user and their friends.


```js
facebook.application.scores.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.translations.delete
Deletes a translation string for this application.


```js
facebook.application.translations.delete({
  "native_hashes": "",
  "application": ""
}, context)
```

#### Parameters
* native_hashes (string) **required** - An array of native hashes. The native hash is a unique identifier of the native string and a description and is generated by the Translations application.
* application (string) **required** - Represents the ID of the application object.

### application.translations.post
Uploads translated strings for this application.


```js
facebook.application.translations.post({
  "native_strings": "",
  "application": ""
}, context)
```

#### Parameters
* native_strings (string) **required** - A JSON-encoded array of strings to translate. Each element of the string array is an object, with text storing the actual string, description storing the description of the text.
* application (string) **required** - Represents the ID of the application object.

### application.translations.get
The translated strings for this application.


```js
facebook.application.translations.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.tagged.get
The photos, videos, and posts in which this application has been tagged.


```js
facebook.application.tagged.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.subscriptions.delete
Deletes a real-time notification subscription for this application.


```js
facebook.application.subscriptions.delete({
  "application": ""
}, context)
```

#### Parameters
* object (string) - Object to monitor - `user`, `permissions`, or `page`. If no object is specified all subscriptions are deleted.
* application (string) **required** - Represents the ID of the application object.

### application.subscriptions.post
Adds a real-time notification subscription for this application.


```js
facebook.application.subscriptions.post({
  "object": "",
  "callback_url": "",
  "application": ""
}, context)
```

#### Parameters
* object (string) **required** - Object to monitor - `user`, `permissions`, or `page`.
* fields (string) - List of properties for the `object` to monitor.
* callback_url (string) **required** - A callback URL to which Facebook will post subscription updates.
* verify_token (string) - Token sent in the verification request.
* application (string) **required** - Represents the ID of the application object.

### application.subscriptions.get
All of the subscriptions this application has for real-time notifications.


```js
facebook.application.subscriptions.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.statuses.post
Posts a status message on the application's profile page


```js
facebook.application.statuses.post({
  "message": "",
  "application": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* application (string) **required** - Represents the ID of the application object.

### application.statuses.get
The application's status updates


```js
facebook.application.statuses.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.staticresources.get
Usage stats about the canvas application's static resources, such as javascript and CSS, and which ones are being flushed to browsers early.


```js
facebook.application.staticresources.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.reviews.get
Reviews of this application


```js
facebook.application.reviews.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.posts.get
The application's own posts.


```js
facebook.application.posts.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.picture.get
The application's logo


```js
facebook.application.picture.get({
  "application": ""
}, context)
```

#### Parameters
* type (string) - One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
* application (string) **required** - Represents the ID of the application object.

### application.links.post
Posts a link on the application's profile page


```js
facebook.application.links.post({
  "link": "",
  "application": ""
}, context)
```

#### Parameters
* link (string) **required** - Link URL
* message (string) - Link message
* application (string) **required** - Represents the ID of the application object.

### application.links.get
The application's posted links.


```js
facebook.application.links.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.insights.get
Usage metrics for this application


```js
facebook.application.insights.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.feed.post
Posts a status message on the application's profile page


```js
facebook.application.feed.post({
  "message": "",
  "application": ""
}, context)
```

#### Parameters
* message (string) **required** - Status Message content
* application (string) **required** - Represents the ID of the application object.

### application.feed.get
The application's wall.


```js
facebook.application.feed.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.albums.get
The photo albums this application has created.


```js
facebook.application.albums.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.accounts.test_users.post
Creates a test account for the application


```js
facebook.application.accounts.test_users.post({
  "application": ""
}, context)
```

#### Parameters
* installed (boolean) - Install app for the test user upon creation
* permissions (string) - List of extended permissions app granted for the new test user if installed is true
* name (string) - A name for the test user. The specified name will also be used in the email address assigned to the test user.
* application (string) **required** - Represents the ID of the application object.

### application.accounts.get
Test User accounts associated with the application.


```js
facebook.application.accounts.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### application.get
An application's profile


```js
facebook.application.get({
  "application": ""
}, context)
```

#### Parameters
* application (string) **required** - Represents the ID of the application object.

### album.picture.get
The album's cover photo; the first picture uploaded to an album becomes the cover photo for the album.


```js
facebook.album.picture.get({
  "album": ""
}, context)
```

#### Parameters
* type (string) - One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,
* album (string) **required** - Represents the ID of the album object.

### album.comments.post
Posts a comment on the album


```js
facebook.album.comments.post({
  "message": "",
  "album": ""
}, context)
```

#### Parameters
* message (string) **required** - Comment text
* album (string) **required** - Represents the ID of the album object.

### album.comments.get
The comments made on this album


```js
facebook.album.comments.get({
  "album": ""
}, context)
```

#### Parameters
* album (string) **required** - Represents the ID of the album object.

### album.likes.delete
Unlikes the album


```js
facebook.album.likes.delete({
  "album": ""
}, context)
```

#### Parameters
* album (string) **required** - Represents the ID of the album object.

### album.likes.post
Likes the album


```js
facebook.album.likes.post({
  "album": ""
}, context)
```

#### Parameters
* album (string) **required** - Represents the ID of the album object.

### album.likes.get
The likes made on this album


```js
facebook.album.likes.get({
  "album": ""
}, context)
```

#### Parameters
* album (string) **required** - Represents the ID of the album object.

### album.photos.post
Adds a photo to the album


```js
facebook.album.photos.post({
  "album": ""
}, context)
```

#### Parameters
* message (string) - Photo description
* album (string) **required** - Represents the ID of the album object.

### album.photos.get
The photos contained in this album


```js
facebook.album.photos.get({
  "album": ""
}, context)
```

#### Parameters
* album (string) **required** - Represents the ID of the album object.

### album.get
A photo album


```js
facebook.album.get({
  "album": ""
}, context)
```

#### Parameters
* album (string) **required** - Represents the ID of the album object.

### search.get
Search over all public objects in the social graph


```js
facebook.search.get({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - The search string
* type (string) - Supports these types of objects: All public posts (post), people (user), pages (page), events

