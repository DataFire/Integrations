# @datafire/reddit

Client library for Reddit

## Installation and Usage
```bash
npm install --save datafire @datafire/reddit
```

```js
let datafire = require('datafire');
let reddit = require('@datafire/reddit').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    reddit: account,
  }
})


reddit.about.log.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Reddit API

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
reddit.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
reddit.oauthRefresh(null, context)
```


### sort.get
This endpoint is a listing.


```js
reddit.sort.get({}, context)
```


### wiki.page.get
Return the content of a wiki page

If v is given, show the wiki page as it was at that version
If both v and v2 are given, show a diff of the two


```js
reddit.wiki.page.get({}, context)
```


### wiki.settings.page.post
Update the permissions and visibility of wiki page


```js
reddit.wiki.settings.page.post({}, context)
```


### wiki.settings.page.get
Retrieve the current permission settings for page


```js
reddit.wiki.settings.page.get({}, context)
```


### wiki.revisions.page.get
Retrieve a list of revisions of this wiki page

This endpoint is a listing.


```js
reddit.wiki.revisions.page.get({}, context)
```


### wiki.revisions.get
Retrieve a list of recently changed wiki pages in this subreddit


```js
reddit.wiki.revisions.get({}, context)
```


### wiki.pages.get
Retrieve a list of wiki pages in this subreddit


```js
reddit.wiki.pages.get(null, context)
```


### wiki.discussions.page.get
Retrieve a list of discussions about this wiki page

This endpoint is a listing.


```js
reddit.wiki.discussions.page.get({}, context)
```


### user.username.where.get
This endpoint is a listing.


```js
reddit.user.username.where.get({}, context)
```


### user.username.about.get
Return information about the user, including karma and gold status.


```js
reddit.user.username.about.get({}, context)
```


### subreddits.where.get
Get all subreddits.

The where parameter chooses the order in which the subreddits are
displayed.  popular sorts on the activity of the subreddit and the
position of the subreddits can shift around. new sorts the subreddits
based on their creation date, newest first.

This endpoint is a listing.


```js
reddit.subreddits.where.get({}, context)
```


### subreddits.search.get
Search subreddits by title and description.

This endpoint is a listing.


```js
reddit.subreddits.search.get({}, context)
```


### subreddits.mine.where.get
Get subreddits the user has a relationship with.

The where parameter chooses which subreddits are returned as follows:


subscriber - subreddits the user is subscribed to
contributor - subreddits the user is an approved submitter in
moderator - subreddits the user is a moderator of


See also: /api/subscribe,
/api/friend, and
/api/accept_moderator_invite.

This endpoint is a listing.


```js
reddit.subreddits.mine.where.get({}, context)
```


### stylesheet.get
Redirect to the subreddit's stylesheet if one exists.

See also: /api/subreddit_stylesheet.


```js
reddit.stylesheet.get(null, context)
```


### sticky.get
Redirect to one of the posts stickied in the current subreddit

The "num" argument can be used to select a specific sticky, and will
default to 1 (the top sticky) if not specified.
Will 404 if there is not currently a sticky post in this subreddit.


```js
reddit.sticky.get({}, context)
```


### sidebar.get
Get the sidebar for the current subreddit


```js
reddit.sidebar.get(null, context)
```


### search.get
Search links page.

This endpoint is a listing.


```js
reddit.search.get({}, context)
```


### rules.get
Get the rules for the current subreddit


```js
reddit.rules.get(null, context)
```


### related.article.get
Related page: performs a search using title of article as
the search query.

This endpoint is a listing.


```js
reddit.related.article.get({}, context)
```


### random.get
The Serendipity button


```js
reddit.random.get(null, context)
```


### r.subreddit.sort.get
This endpoint is a listing.


```js
reddit.r.subreddit.sort.get({}, context)
```


### r.subreddit.wiki.page.get
Return the content of a wiki page

If v is given, show the wiki page as it was at that version
If both v and v2 are given, show a diff of the two


```js
reddit.r.subreddit.wiki.page.get({}, context)
```


### r.subreddit.wiki.settings.page.post
Update the permissions and visibility of wiki page


```js
reddit.r.subreddit.wiki.settings.page.post({}, context)
```


### r.subreddit.wiki.settings.page.get
Retrieve the current permission settings for page


```js
reddit.r.subreddit.wiki.settings.page.get({}, context)
```


### r.subreddit.wiki.revisions.page.get
Retrieve a list of revisions of this wiki page

This endpoint is a listing.


```js
reddit.r.subreddit.wiki.revisions.page.get({}, context)
```


### r.subreddit.wiki.revisions.get
Retrieve a list of recently changed wiki pages in this subreddit


```js
reddit.r.subreddit.wiki.revisions.get({}, context)
```


### r.subreddit.wiki.pages.get
Retrieve a list of wiki pages in this subreddit


```js
reddit.r.subreddit.wiki.pages.get({}, context)
```


### r.subreddit.wiki.discussions.page.get
Retrieve a list of discussions about this wiki page

This endpoint is a listing.


```js
reddit.r.subreddit.wiki.discussions.page.get({}, context)
```


### r.subreddit.stylesheet.get
Redirect to the subreddit's stylesheet if one exists.

See also: /api/subreddit_stylesheet.


```js
reddit.r.subreddit.stylesheet.get({}, context)
```


### r.subreddit.sticky.get
Redirect to one of the posts stickied in the current subreddit

The "num" argument can be used to select a specific sticky, and will
default to 1 (the top sticky) if not specified.
Will 404 if there is not currently a sticky post in this subreddit.


```js
reddit.r.subreddit.sticky.get({}, context)
```


### r.subreddit.sidebar.get
Get the sidebar for the current subreddit


```js
reddit.r.subreddit.sidebar.get({}, context)
```


### r.subreddit.search.get
Search links page.

This endpoint is a listing.


```js
reddit.r.subreddit.search.get({}, context)
```


### r.subreddit.rules.get
Get the rules for the current subreddit


```js
reddit.r.subreddit.rules.get({}, context)
```


### r.subreddit.random.get
The Serendipity button


```js
reddit.r.subreddit.random.get({}, context)
```


### r.subreddit.new.get
This endpoint is a listing.


```js
reddit.r.subreddit.new.get({}, context)
```


### r.subreddit.hot.get
This endpoint is a listing.


```js
reddit.r.subreddit.hot.get({}, context)
```


### r.subreddit.comments.article.get
Get the comment tree for a given Link article.

If supplied, comment is the ID36 of a comment in the comment tree for
article. This comment will be the (highlighted) focal point of the
returned view and context will be the number of parents shown.

depth is the maximum depth of subtrees in the thread.

limit is the maximum number of comments to return.

See also: /api/morechildren and
/api/comment.


```js
reddit.r.subreddit.comments.article.get({}, context)
```


### r.subreddit.api.wiki.revert.post
Revert a wiki page to revision


```js
reddit.r.subreddit.api.wiki.revert.post({}, context)
```


### r.subreddit.api.wiki.hide.post
Toggle the public visibility of a wiki page revision


```js
reddit.r.subreddit.api.wiki.hide.post({}, context)
```


### r.subreddit.api.wiki.edit.post
Edit a wiki page


```js
reddit.r.subreddit.api.wiki.edit.post({}, context)
```


### r.subreddit.api.wiki.alloweditor.act.post
Allow/deny username to edit this wiki page


```js
reddit.r.subreddit.api.wiki.alloweditor.act.post({}, context)
```


### r.subreddit.api.upload_sr_img.post
Add or replace a subreddit image, custom header logo, custom mobile
icon, or custom mobile banner.


If the upload_type value is img, an image for use in the
subreddit stylesheet is uploaded with the name specified in name.
If the upload_type value is header then the image uploaded will
be the subreddit's new logo and name will be ignored.
If the upload_type value is icon then the image uploaded will be
the subreddit's new mobile icon and name will be ignored.
If the upload_type value is banner then the image uploaded will
be the subreddit's new mobile banner and name will be ignored.


For backwards compatibility, if upload_type is not specified, the
header field will be used instead:


If the header field has value 0, then upload_type is img.
If the header field has value 1, then upload_type is header.


The img_type field specifies whether to store the uploaded image as a
PNG or JPEG.

Subreddits have a limited number of images that can be in use at any
given time. If no image with the specified name already exists, one of
the slots will be consumed.

If an image with the specified name already exists, it will be
replaced.  This does not affect the stylesheet immediately, but will
take effect the next time the stylesheet is saved.

See also: /api/delete_sr_img,
/api/delete_sr_header,
/api/delete_sr_icon, and
/api/delete_sr_banner.


```js
reddit.r.subreddit.api.upload_sr_img.post({}, context)
```


### r.subreddit.api.unfriend.post
Remove a relationship between a user and another user or subreddit

The user can either be passed in by name (nuser)
or by fullname (iuser).  If type is friend or enemy,
'container' MUST be the current user's fullname;
for other types, the subreddit must be set
via URL (e.g., /r/funny/api/unfriend)

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: modothers
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: privatemessages


Complement to POST_friend


```js
reddit.r.subreddit.api.unfriend.post({}, context)
```


### r.subreddit.api.subreddit_stylesheet.post
Update a subreddit's stylesheet.

op should be save to update the contents of the stylesheet.


```js
reddit.r.subreddit.api.subreddit_stylesheet.post({}, context)
```


### r.subreddit.api.submit_text.get
Get the submission text for the subreddit.

This text is set by the subreddit moderators and intended to be
displayed on the submission form.

See also: /api/site_admin.


```js
reddit.r.subreddit.api.submit_text.get({}, context)
```


### r.subreddit.api.setpermissions.post



```js
reddit.r.subreddit.api.setpermissions.post({}, context)
```


### r.subreddit.api.setflairenabled.post



```js
reddit.r.subreddit.api.setflairenabled.post({}, context)
```


### r.subreddit.api.selectflair.post



```js
reddit.r.subreddit.api.selectflair.post({}, context)
```


### r.subreddit.api.info.get
Return a listing of things specified by their fullnames.

Only Links, Comments, and Subreddits are allowed.


```js
reddit.r.subreddit.api.info.get({}, context)
```


### r.subreddit.api.friend.post
Create a relationship between a user and another user or subreddit

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: Use "moderator_invite"
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: Use /api/block


Complement to POST_unfriend


```js
reddit.r.subreddit.api.friend.post({}, context)
```


### r.subreddit.api.flairtemplate.post



```js
reddit.r.subreddit.api.flairtemplate.post({}, context)
```


### r.subreddit.api.flairselector.post
Return information about a users's flair options.

If link is given, return link flair options.
Otherwise, return user flair options for this subreddit.

The logged in user's flair is also returned.
Subreddit moderators may give a user by name to instead
retrieve that user's flair.


```js
reddit.r.subreddit.api.flairselector.post({}, context)
```


### r.subreddit.api.flairlist.get
This endpoint is a listing.


```js
reddit.r.subreddit.api.flairlist.get({}, context)
```


### r.subreddit.api.flaircsv.post
Change the flair of multiple users in the same subreddit with a
single API call.

Requires a string 'flair_csv' which has up to 100 lines of the form
'user,flairtext,cssclass' (Lines beyond the 100th are ignored).

If both cssclass and flairtext are the empty string for a given
user, instead clears that user's flair.

Returns an array of objects indicating if each flair setting was 
applied, or a reason for the failure.


```js
reddit.r.subreddit.api.flaircsv.post({}, context)
```


### r.subreddit.api.flairconfig.post



```js
reddit.r.subreddit.api.flairconfig.post({}, context)
```


### r.subreddit.api.flair.post



```js
reddit.r.subreddit.api.flair.post({}, context)
```


### r.subreddit.api.deleteflairtemplate.post



```js
reddit.r.subreddit.api.deleteflairtemplate.post({}, context)
```


### r.subreddit.api.deleteflair.post



```js
reddit.r.subreddit.api.deleteflair.post({}, context)
```


### r.subreddit.api.delete_sr_img.post
Remove an image from the subreddit's custom image set.

The image will no longer count against the subreddit's image limit.
However, the actual image data may still be accessible for an
unspecified amount of time. If the image is currently referenced by the
subreddit's stylesheet, that stylesheet will no longer validate and
won't be editable until the image reference is removed.

See also: /api/upload_sr_img.


```js
reddit.r.subreddit.api.delete_sr_img.post({}, context)
```


### r.subreddit.api.delete_sr_icon.post
Remove the subreddit's custom mobile icon.

See also: /api/upload_sr_img.


```js
reddit.r.subreddit.api.delete_sr_icon.post({}, context)
```


### r.subreddit.api.delete_sr_header.post
Remove the subreddit's custom header image.

The sitewide-default header image will be shown again after this call.

See also: /api/upload_sr_img.


```js
reddit.r.subreddit.api.delete_sr_header.post({}, context)
```


### r.subreddit.api.delete_sr_banner.post
Remove the subreddit's custom mobile banner.

See also: /api/upload_sr_img.


```js
reddit.r.subreddit.api.delete_sr_banner.post({}, context)
```


### r.subreddit.api.clearflairtemplates.post



```js
reddit.r.subreddit.api.clearflairtemplates.post({}, context)
```


### r.subreddit.api.accept_moderator_invite.post
Accept an invite to moderate the specified subreddit.

The authenticated user must have been invited to moderate the subreddit
by one of its current moderators.

See also: /api/friend and
/subreddits/mine.


```js
reddit.r.subreddit.api.accept_moderator_invite.post({}, context)
```


### r.subreddit.about.where.get
This endpoint is a listing.


```js
reddit.r.subreddit.about.where.get({}, context)
```


### r.subreddit.about.location.get
Return a listing of posts relevant to moderators.


reports: Things that have been reported.
spam: Things that have been marked as spam or otherwise removed.
modqueue: Things requiring moderator review, such as reported things
and items caught by the spam filter.
unmoderated: Things that have yet to be approved/removed by a mod.
edited: Things that have been edited recently.


Requires the "posts" moderator permission for the subreddit.

This endpoint is a listing.


```js
reddit.r.subreddit.about.location.get({}, context)
```


### r.subreddit.about.log.get
Get a list of recent moderation actions.

Moderator actions taken within a subreddit are logged. This listing is
a view of that log with various filters to aid in analyzing the
information.

The optional mod parameter can be a comma-delimited list of moderator
names to restrict the results to, or the string a to restrict the
results to admin actions taken within the subreddit.

The type parameter is optional and if sent limits the log entries
returned to only those of the type specified.

This endpoint is a listing.


```js
reddit.r.subreddit.about.log.get({}, context)
```


### r.subreddit.about.edit.get
Get the current settings of a subreddit.

In the API, this returns the current settings of the subreddit as used
by /api/site_admin.  On the HTML site, it will
display a form for editing the subreddit.


```js
reddit.r.subreddit.about.edit.get({}, context)
```


### r.subreddit.about.get
Return information about the subreddit.

Data includes the subscriber count, description, and header image.


```js
reddit.r.subreddit.about.get({}, context)
```


### prefs.where.get
This endpoint is a listing.


```js
reddit.prefs.where.get({}, context)
```


### new.get
This endpoint is a listing.


```js
reddit.new.get({}, context)
```


### message.where.get
This endpoint is a listing.


```js
reddit.message.where.get({}, context)
```


### live.thread.discussions.get
Get a list of reddit submissions linking to this thread.

This endpoint is a listing.


```js
reddit.live.thread.discussions.get({}, context)
```


### live.thread.contributors.get
Get a list of users that contribute to this thread.

See also: /api/live/thread/invite_contributor, and
/api/live/thread/rm_contributor.


```js
reddit.live.thread.contributors.get({}, context)
```


### live.thread.about.get
Get some basic information about the live thread.

See also: /api/live/thread/edit.


```js
reddit.live.thread.about.get({}, context)
```


### live.thread.get
Get a list of updates posted in this thread.

See also: /api/live/thread/update.

This endpoint is a listing.


```js
reddit.live.thread.get({}, context)
```


### hot.get
This endpoint is a listing.


```js
reddit.hot.get({}, context)
```


### duplicates.article.get
Return a list of other submissions of the same URL

This endpoint is a listing.


```js
reddit.duplicates.article.get({}, context)
```


### comments.article.get
Get the comment tree for a given Link article.

If supplied, comment is the ID36 of a comment in the comment tree for
article. This comment will be the (highlighted) focal point of the
returned view and context will be the number of parents shown.

depth is the maximum depth of subtrees in the thread.

limit is the maximum number of comments to return.

See also: /api/morechildren and
/api/comment.


```js
reddit.comments.article.get({}, context)
```


### captcha.iden.get
Request a CAPTCHA image given an iden.

An iden is given as the captcha field with a BAD_CAPTCHA
error, you should use this endpoint if you get a
BAD_CAPTCHA error response.

Responds with a 120x50 image/png which should be displayed
to the user.

The user's response to the CAPTCHA should be sent as captcha
along with your request.

To request a new CAPTCHA,
use /api/new_captcha.


```js
reddit.captcha.iden.get({}, context)
```


### by_id.names.get
Get a listing of links by fullname.

names is a list of fullnames for links separated by commas or spaces.


```js
reddit.by_id.names.get({}, context)
```


### api.subreddit_stylesheet.post
Update a subreddit's stylesheet.

op should be save to update the contents of the stylesheet.


```js
reddit.api.subreddit_stylesheet.post({}, context)
```


### api.wiki.revert.post
Revert a wiki page to revision


```js
reddit.api.wiki.revert.post({}, context)
```


### api.wiki.hide.post
Toggle the public visibility of a wiki page revision


```js
reddit.api.wiki.hide.post({}, context)
```


### api.wiki.edit.post
Edit a wiki page


```js
reddit.api.wiki.edit.post({}, context)
```


### api.wiki.alloweditor.act.post
Allow/deny username to edit this wiki page


```js
reddit.api.wiki.alloweditor.act.post({}, context)
```


### api.vote.post
Cast a vote on a thing.

id should be the fullname of the Link or Comment to vote on.

dir indicates the direction of the vote. Voting 1 is an upvote,
-1 is a downvote, and 0 is equivalent to "un-voting" by clicking
again on a highlighted arrow.

Note: votes must be cast by humans. That is, API clients proxying a
human's action one-for-one are OK, but bots deciding how to vote on
content or amplifying a human's vote are not. See the reddit
rules for more details on what constitutes vote cheating.


```js
reddit.api.vote.post({}, context)
```


### api.v1.user.username.trophies.get
Return a list of trophies for the a given user.


```js
reddit.api.v1.user.username.trophies.get({}, context)
```


### api.v1.scopes.get
Retrieve descriptions of reddit's OAuth2 scopes.

If no scopes are given, information on all scopes are returned.

Invalid scope(s) will result in a 400 error with body that indicates
the invalid scope(s).


```js
reddit.api.v1.scopes.get({}, context)
```


### api.v1.me.trophies.get
Return a list of trophies for the current user.


```js
reddit.api.v1.me.trophies.get(null, context)
```


### api.v1.me.prefs.patch



```js
reddit.api.v1.me.prefs.patch({}, context)
```


### api.v1.me.prefs.get
Return the preference settings of the logged in user


```js
reddit.api.v1.me.prefs.get({}, context)
```


### api.v1.me.notifications.id.patch



```js
reddit.api.v1.me.notifications.id.patch({}, context)
```


### api.v1.me.notifications.get
Get my notifications.


```js
reddit.api.v1.me.notifications.get({}, context)
```


### api.v1.me.karma.get
Return a breakdown of subreddit karma.


```js
reddit.api.v1.me.karma.get(null, context)
```


### api.v1.me.friends.username.put
Create or update a "friend" relationship.

This operation is idempotent. It can be used to add a new
friend, or update an existing friend (e.g., add/change the
note on that friend)


```js
reddit.api.v1.me.friends.username.put({}, context)
```


### api.v1.me.friends.username.get
Get information about a specific 'friend', such as notes.


```js
reddit.api.v1.me.friends.username.get({}, context)
```


### api.v1.me.friends.username.delete
Stop being friends with a user.


```js
reddit.api.v1.me.friends.username.delete({}, context)
```


### api.v1.me.get
Returns the identity of the user currently authenticated via OAuth.


```js
reddit.api.v1.me.get(null, context)
```


### api.v1.gold.give.username.post



```js
reddit.api.v1.gold.give.username.post({}, context)
```


### api.v1.gold.gild.fullname.post



```js
reddit.api.v1.gold.gild.fullname.post({}, context)
```


### api.username_available.get
Check whether a username is available for registration.


```js
reddit.api.username_available.get({}, context)
```


### api.upload_sr_img.post
Add or replace a subreddit image, custom header logo, custom mobile
icon, or custom mobile banner.


If the upload_type value is img, an image for use in the
subreddit stylesheet is uploaded with the name specified in name.
If the upload_type value is header then the image uploaded will
be the subreddit's new logo and name will be ignored.
If the upload_type value is icon then the image uploaded will be
the subreddit's new mobile icon and name will be ignored.
If the upload_type value is banner then the image uploaded will
be the subreddit's new mobile banner and name will be ignored.


For backwards compatibility, if upload_type is not specified, the
header field will be used instead:


If the header field has value 0, then upload_type is img.
If the header field has value 1, then upload_type is header.


The img_type field specifies whether to store the uploaded image as a
PNG or JPEG.

Subreddits have a limited number of images that can be in use at any
given time. If no image with the specified name already exists, one of
the slots will be consumed.

If an image with the specified name already exists, it will be
replaced.  This does not affect the stylesheet immediately, but will
take effect the next time the stylesheet is saved.

See also: /api/delete_sr_img,
/api/delete_sr_header,
/api/delete_sr_icon, and
/api/delete_sr_banner.


```js
reddit.api.upload_sr_img.post({}, context)
```


### api.unsave.post
Unsave a link or comment.

This removes the thing from the user's saved listings as well.

See also: /api/save.


```js
reddit.api.unsave.post({}, context)
```


### api.unread_message.post



```js
reddit.api.unread_message.post({}, context)
```


### api.unmute_message_author.post
For unmuting user via modmail.


```js
reddit.api.unmute_message_author.post({}, context)
```


### api.unmarknsfw.post
Remove the NSFW marking from a link.

See also: /api/marknsfw.


```js
reddit.api.unmarknsfw.post({}, context)
```


### api.unlock.post
Unlock a link.

Allow a post to receive new comments.

See also: /api/lock.


```js
reddit.api.unlock.post({}, context)
```


### api.unignore_reports.post
Allow future reports on a thing to cause notifications.

See also: /api/ignore_reports.


```js
reddit.api.unignore_reports.post({}, context)
```


### api.unhide.post
Unhide a link.

See also: /api/hide.


```js
reddit.api.unhide.post({}, context)
```


### api.unfriend.post
Remove a relationship between a user and another user or subreddit

The user can either be passed in by name (nuser)
or by fullname (iuser).  If type is friend or enemy,
'container' MUST be the current user's fullname;
for other types, the subreddit must be set
via URL (e.g., /r/funny/api/unfriend)

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: modothers
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: privatemessages


Complement to POST_friend


```js
reddit.api.unfriend.post({}, context)
```


### api.uncollapse_message.post
Uncollapse a message

See also: /api/collapse_message


```js
reddit.api.uncollapse_message.post({}, context)
```


### api.unblock_subreddit.post



```js
reddit.api.unblock_subreddit.post({}, context)
```


### api.subscribe.post
Subscribe to or unsubscribe from a subreddit.

To subscribe, action should be sub. To unsubscribe, action should
be unsub. The user must have access to the subreddit to be able to
subscribe to it.

See also: /subreddits/mine/.


```js
reddit.api.subscribe.post({}, context)
```


### api.subreddits_by_topic.get
Return a list of subreddits that are relevant to a search query.


```js
reddit.api.subreddits_by_topic.get({}, context)
```


### api.submit_text.get
Get the submission text for the subreddit.

This text is set by the subreddit moderators and intended to be
displayed on the submission form.

See also: /api/site_admin.


```js
reddit.api.submit_text.get(null, context)
```


### api.submit.post
Submit a link to a subreddit.

Submit will create a link or self-post in the subreddit sr with the
title title. If kind is "link", then url is expected to be a
valid URL to link to. Otherwise, text, if present, will be the
body of the self-post.

If a link with the same URL has already been submitted to the specified
subreddit an error will be returned unless resubmit is true.
extension is used for determining which view-type (e.g. json,
compact etc.) to use for the redirect that is generated if the
resubmit error occurs.


```js
reddit.api.submit.post({}, context)
```


### api.store_visits.post
Requires a subscription to reddit gold


```js
reddit.api.store_visits.post({}, context)
```


### api.site_admin.post
Create or configure a subreddit.

If sr is specified, the request will attempt to modify the specified
subreddit. If not, a subreddit with name name will be created.

This endpoint expects all values to be supplied on every request.  If
modifying a subset of options, it may be useful to get the current
settings from /about/edit.json
first.

For backwards compatibility, description is the sidebar text and
public_description is the publicly visible subreddit description.

Most of the parameters for this endpoint are identical to options
visible in the user interface and their meanings are best explained
there.

See also: /about/edit.json.


```js
reddit.api.site_admin.post({}, context)
```


### api.setpermissions.post



```js
reddit.api.setpermissions.post({}, context)
```


### api.setflairenabled.post



```js
reddit.api.setflairenabled.post({}, context)
```


### api.set_suggested_sort.post
Set a suggested sort for a link.

Suggested sorts are useful to display comments in a certain preferred way
for posts. For example, casual conversation may be better sorted by new
by default, or AMAs may be sorted by Q&A. A sort of an empty string
clears the default sort.


```js
reddit.api.set_suggested_sort.post({}, context)
```


### api.set_subreddit_sticky.post
Set or unset a Link as the sticky in its subreddit.

state is a boolean that indicates whether to sticky or unsticky
this post - true to sticky, false to unsticky.

The num argument is optional, and only used when stickying a post.
It allows specifying a particular "slot" to sticky the post into, and
if there is already a post stickied in that slot it will be replaced.
If there is no post in the specified slot to replace, or num is None,
the bottom-most slot will be used.


```js
reddit.api.set_subreddit_sticky.post({}, context)
```


### api.set_contest_mode.post
Set or unset "contest mode" for a link's comments.

state is a boolean that indicates whether you are enabling or
disabling contest mode - true to enable, false to disable.


```js
reddit.api.set_contest_mode.post({}, context)
```


### api.sendreplies.post
Enable or disable inbox replies for a link or comment.

state is a boolean that indicates whether you are enabling or
disabling inbox replies - true to enable, false to disable.


```js
reddit.api.sendreplies.post({}, context)
```


### api.selectflair.post



```js
reddit.api.selectflair.post({}, context)
```


### api.search_reddit_names.post
List subreddit names that begin with a query string.

Subreddits whose names begin with query will be returned. If
include_over_18 is false, subreddits with over-18 content
restrictions will be filtered from the results.

If exact is true, only an exact match will be returned.


```js
reddit.api.search_reddit_names.post({}, context)
```


### api.saved_categories.get
Get a list of categories in which things are currently saved.

See also: /api/save.


```js
reddit.api.saved_categories.get(null, context)
```


### api.save.post
Save a link or comment.

Saved things are kept in the user's saved listing for later perusal.

See also: /api/unsave.


```js
reddit.api.save.post({}, context)
```


### api.report.post
Report a link, comment or message.

Reporting a thing brings it to the attention of the subreddit's
moderators. Reporting a message sends it to a system for admin review.

For links and comments, the thing is implicitly hidden as well (see
/api/hide for details).


```js
reddit.api.report.post({}, context)
```


### api.remove.post
Remove a link, comment, or modmail message.

If the thing is a link, it will be removed from all subreddit listings.
If the thing is a comment, it will be redacted and removed from all
subreddit comment listings.

See also: /api/approve.


```js
reddit.api.remove.post({}, context)
```


### api.recommend.sr.srnames.get
Return subreddits recommended for the given subreddit(s).

Gets a list of subreddits recommended for srnames, filtering out any
that appear in the optional omit param.


```js
reddit.api.recommend.sr.srnames.get({}, context)
```


### api.read_message.post



```js
reddit.api.read_message.post({}, context)
```


### api.read_all_messages.post
Queue up marking all messages for a user as read.

This may take some time, and returns 202 to acknowledge acceptance of
the request.


```js
reddit.api.read_all_messages.post({}, context)
```


### api.new_captcha.post
Responds with an iden of a new CAPTCHA.

Use this endpoint if a user cannot read a given CAPTCHA,
and wishes to receive a new CAPTCHA.

To request the CAPTCHA image for an iden, use
/captcha/iden.


```js
reddit.api.new_captcha.post({}, context)
```


### api.needs_captcha.get
Check whether CAPTCHAs are needed for API methods that define the
"captcha" and "iden" parameters.


```js
reddit.api.needs_captcha.get(null, context)
```


### api.mute_message_author.post
For muting user via modmail.


```js
reddit.api.mute_message_author.post({}, context)
```


### api.multi.multipath.r.srname.put
Add a subreddit to a multi.


```js
reddit.api.multi.multipath.r.srname.put({}, context)
```


### api.multi.multipath.r.srname.get
Get data about a subreddit in a multi.


```js
reddit.api.multi.multipath.r.srname.get({}, context)
```


### api.multi.multipath.r.srname.delete
Remove a subreddit from a multi.


```js
reddit.api.multi.multipath.r.srname.delete({}, context)
```


### api.multi.multipath.description.put
Change a multi's markdown description.


```js
reddit.api.multi.multipath.description.put({}, context)
```


### api.multi.multipath.description.get
Get a multi's description.


```js
reddit.api.multi.multipath.description.get({}, context)
```


### api.multi.multipath.put
Create or update a multi.


```js
reddit.api.multi.multipath.put({}, context)
```


### api.multi.multipath.post
Create a multi. Responds with 409 Conflict if it already exists.


```js
reddit.api.multi.multipath.post({}, context)
```


### api.multi.multipath.get
Fetch a multi's data and subreddit list by name.


```js
reddit.api.multi.multipath.get({}, context)
```


### api.multi.multipath.delete
Delete a multi.


```js
reddit.api.multi.multipath.delete({}, context)
```


### api.multi.user.username.get
Fetch a list of public multis belonging to username


```js
reddit.api.multi.user.username.get({}, context)
```


### api.multi.rename.post
Rename a multi.


```js
reddit.api.multi.rename.post({}, context)
```


### api.multi.mine.get
Fetch a list of multis belonging to the current user.


```js
reddit.api.multi.mine.get({}, context)
```


### api.multi.copy.post
Copy a multi.

Responds with 409 Conflict if the target already exists.

A "copied from ..." line will automatically be appended to the
description.


```js
reddit.api.multi.copy.post({}, context)
```


### api.morechildren.get
Retrieve additional comments omitted from a base comment tree.

When a comment tree is rendered, the most relevant comments are
selected for display first. Remaining comments are stubbed out with
"MoreComments" links. This API call is used to retrieve the additional
comments represented by those stubs, up to 20 at a time.

The two core parameters required are link and children.  link is
the fullname of the link whose comments are being fetched. children
is a comma-delimited list of comment ID36s that need to be fetched.

If id is passed, it should be the ID of the MoreComments object this
call is replacing. This is needed only for the HTML UI's purposes and
is optional otherwise.

NOTE: you may only make one request at a time to this API endpoint.
Higher concurrency will result in an error being returned.


```js
reddit.api.morechildren.get({}, context)
```


### api.marknsfw.post
Mark a link NSFW.

See also: /api/unmarknsfw.


```js
reddit.api.marknsfw.post({}, context)
```


### api.lock.post
Lock a link.

Prevents a post from receiving new comments.

See also: /api/unlock.


```js
reddit.api.lock.post({}, context)
```


### api.live.thread.update.post
Post an update to the thread.

Requires the update permission for this thread.

See also: /api/live/thread/strike_update, and
/api/live/thread/delete_update.


```js
reddit.api.live.thread.update.post({}, context)
```


### api.live.thread.strike_update.post
Strike (mark incorrect and cross out) the content of an update.

Requires that specified update must have been authored by the user or
that you have the edit permission for this thread.

See also: /api/live/thread/update.


```js
reddit.api.live.thread.strike_update.post({}, context)
```


### api.live.thread.set_contributor_permissions.post
Change a contributor or contributor invite's permissions.

Requires the manage permission for this thread.

See also: /api/live/thread/invite_contributor and
/api/live/thread/rm_contributor.


```js
reddit.api.live.thread.set_contributor_permissions.post({}, context)
```


### api.live.thread.rm_contributor_invite.post
Revoke an outstanding contributor invite.

Requires the manage permission for this thread.

See also: /api/live/thread/invite_contributor.


```js
reddit.api.live.thread.rm_contributor_invite.post({}, context)
```


### api.live.thread.rm_contributor.post
Revoke another user's contributorship.

Requires the manage permission for this thread.

See also: /api/live/thread/invite_contributor.


```js
reddit.api.live.thread.rm_contributor.post({}, context)
```


### api.live.thread.report.post
Report the thread for violating the rules of reddit.


```js
reddit.api.live.thread.report.post({}, context)
```


### api.live.thread.leave_contributor.post
Abdicate contributorship of the thread.

See also: /api/live/thread/accept_contributor_invite, and
/api/live/thread/invite_contributor.


```js
reddit.api.live.thread.leave_contributor.post({}, context)
```


### api.live.thread.invite_contributor.post
Invite another user to contribute to the thread.

Requires the manage permission for this thread.  If the recipient
accepts the invite, they will be granted the permissions specified.

See also: /api/live/thread/accept_contributor_invite, and
/api/live/thread/rm_contributor_invite.


```js
reddit.api.live.thread.invite_contributor.post({}, context)
```


### api.live.thread.edit.post
Configure the thread.

Requires the settings permission for this thread.

See also: /live/thread/about.json.


```js
reddit.api.live.thread.edit.post({}, context)
```


### api.live.thread.delete_update.post
Delete an update from the thread.

Requires that specified update must have been authored by the user or
that you have the edit permission for this thread.

See also: /api/live/thread/update.


```js
reddit.api.live.thread.delete_update.post({}, context)
```


### api.live.thread.close_thread.post
Permanently close the thread, disallowing future updates.

Requires the close permission for this thread.


```js
reddit.api.live.thread.close_thread.post({}, context)
```


### api.live.thread.accept_contributor_invite.post
Accept a pending invitation to contribute to the thread.

See also: /api/live/thread/leave_contributor.


```js
reddit.api.live.thread.accept_contributor_invite.post({}, context)
```


### api.live.create.post
Create a new live thread.

Once created, the initial settings can be modified with
/api/live/thread/edit and new updates
can be posted with
/api/live/thread/update.


```js
reddit.api.live.create.post({}, context)
```


### api.leavemoderator.post
Abdicate moderator status in a subreddit.

See also: /api/friend.


```js
reddit.api.leavemoderator.post({}, context)
```


### api.leavecontributor.post
Abdicate approved submitter status in a subreddit.

See also: /api/friend.


```js
reddit.api.leavecontributor.post({}, context)
```


### api.info.get
Return a listing of things specified by their fullnames.

Only Links, Comments, and Subreddits are allowed.


```js
reddit.api.info.get({}, context)
```


### api.ignore_reports.post
Prevent future reports on a thing from causing notifications.

Any reports made about a thing after this flag is set on it will not
cause notifications or make the thing show up in the various moderation
listings.

See also: /api/unignore_reports.


```js
reddit.api.ignore_reports.post({}, context)
```


### api.hide.post
Hide a link.

This removes it from the user's default view of subreddit listings.

See also: /api/unhide.


```js
reddit.api.hide.post({}, context)
```


### api.friend.post
Create a relationship between a user and another user or subreddit

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: Use "moderator_invite"
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: Use /api/block


Complement to POST_unfriend


```js
reddit.api.friend.post({}, context)
```


### api.flairtemplate.post



```js
reddit.api.flairtemplate.post({}, context)
```


### api.flairselector.post
Return information about a users's flair options.

If link is given, return link flair options.
Otherwise, return user flair options for this subreddit.

The logged in user's flair is also returned.
Subreddit moderators may give a user by name to instead
retrieve that user's flair.


```js
reddit.api.flairselector.post({}, context)
```


### api.flairlist.get
This endpoint is a listing.


```js
reddit.api.flairlist.get({}, context)
```


### api.flaircsv.post
Change the flair of multiple users in the same subreddit with a
single API call.

Requires a string 'flair_csv' which has up to 100 lines of the form
'user,flairtext,cssclass' (Lines beyond the 100th are ignored).

If both cssclass and flairtext are the empty string for a given
user, instead clears that user's flair.

Returns an array of objects indicating if each flair setting was 
applied, or a reason for the failure.


```js
reddit.api.flaircsv.post({}, context)
```


### api.flairconfig.post



```js
reddit.api.flairconfig.post({}, context)
```


### api.flair.post



```js
reddit.api.flair.post({}, context)
```


### api.editusertext.post
Edit the body text of a comment or self-post.


```js
reddit.api.editusertext.post({}, context)
```


### api.distinguish.post
Distinguish a thing's author with a sigil.

This can be useful to draw attention to and confirm the identity of the
user in the context of a link or comment of theirs. The options for
distinguish are as follows:


yes - add a moderator distinguish ([M]). only if the user is a
      moderator of the subreddit the thing is in.
no - remove any distinguishes.
admin - add an admin distinguish ([A]). admin accounts only.
special - add a user-specific distinguish. depends on user.


The first time a top-level comment is moderator distinguished, the
author of the link the comment is in reply to will get a notification
in their inbox.


```js
reddit.api.distinguish.post({}, context)
```


### api.deleteflairtemplate.post



```js
reddit.api.deleteflairtemplate.post({}, context)
```


### api.deleteflair.post



```js
reddit.api.deleteflair.post({}, context)
```


### api.delete_sr_img.post
Remove an image from the subreddit's custom image set.

The image will no longer count against the subreddit's image limit.
However, the actual image data may still be accessible for an
unspecified amount of time. If the image is currently referenced by the
subreddit's stylesheet, that stylesheet will no longer validate and
won't be editable until the image reference is removed.

See also: /api/upload_sr_img.


```js
reddit.api.delete_sr_img.post({}, context)
```


### api.delete_sr_icon.post
Remove the subreddit's custom mobile icon.

See also: /api/upload_sr_img.


```js
reddit.api.delete_sr_icon.post({}, context)
```


### api.delete_sr_header.post
Remove the subreddit's custom header image.

The sitewide-default header image will be shown again after this call.

See also: /api/upload_sr_img.


```js
reddit.api.delete_sr_header.post({}, context)
```


### api.delete_sr_banner.post
Remove the subreddit's custom mobile banner.

See also: /api/upload_sr_img.


```js
reddit.api.delete_sr_banner.post({}, context)
```


### api.del.post
Delete a Link or Comment.


```js
reddit.api.del.post({}, context)
```


### api.compose.post
Handles message composition under /message/compose.


```js
reddit.api.compose.post({}, context)
```


### api.comment.post
Submit a new comment or reply to a message.

parent is the fullname of the thing being replied to. Its value
changes the kind of object created by this request:


the fullname of a Link: a top-level comment in that Link's thread. (requires submit scope)
the fullname of a Comment: a comment reply to that comment. (requires submit scope)
the fullname of a Message: a message reply to that message. (requires privatemessages scope)


text should be the raw markdown body of the comment or message.

To start a new message thread, use /api/compose.


```js
reddit.api.comment.post({}, context)
```


### api.collapse_message.post
Collapse a message

See also: /api/uncollapse_message


```js
reddit.api.collapse_message.post({}, context)
```


### api.clearflairtemplates.post



```js
reddit.api.clearflairtemplates.post({}, context)
```


### api.block.post
For blocking via inbox.


```js
reddit.api.block.post({}, context)
```


### api.approve.post
Approve a link or comment.

If the thing was removed, it will be re-inserted into appropriate
listings. Any reports on the approved thing will be discarded.

See also: /api/remove.


```js
reddit.api.approve.post({}, context)
```


### api.accept_moderator_invite.post
Accept an invite to moderate the specified subreddit.

The authenticated user must have been invited to moderate the subreddit
by one of its current moderators.

See also: /api/friend and
/subreddits/mine.


```js
reddit.api.accept_moderator_invite.post({}, context)
```


### about.where.get
This endpoint is a listing.


```js
reddit.about.where.get({}, context)
```


### about.location.get
Return a listing of posts relevant to moderators.


reports: Things that have been reported.
spam: Things that have been marked as spam or otherwise removed.
modqueue: Things requiring moderator review, such as reported things
and items caught by the spam filter.
unmoderated: Things that have yet to be approved/removed by a mod.
edited: Things that have been edited recently.


Requires the "posts" moderator permission for the subreddit.

This endpoint is a listing.


```js
reddit.about.location.get({}, context)
```


### about.log.get
Get a list of recent moderation actions.

Moderator actions taken within a subreddit are logged. This listing is
a view of that log with various filters to aid in analyzing the
information.

The optional mod parameter can be a comma-delimited list of moderator
names to restrict the results to, or the string a to restrict the
results to admin actions taken within the subreddit.

The type parameter is optional and if sent limits the log entries
returned to only those of the type specified.

This endpoint is a listing.


```js
reddit.about.log.get({}, context)
```


