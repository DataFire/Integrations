# @datafire/skyrock

Client library for Skyrock

## Installation and Usage
```bash
npm install --save datafire @datafire/skyrock
```

```js
let datafire = require('datafire');
let skyrock = require('@datafire/skyrock').create();

skyrock.message.reply_thread.format.post({}).then(data => {
  console.log(data);
})
```

## Description
Interact with Skyrock.com features: blogs, profiles, messaging, 'what's new', friends & activities!

## Actions
### message.reply_thread.format.post
Replies to a thread.


```js
skyrock.message.reply_thread.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### message.create_thread.format.post
Creates a multi-recipient thread.


```js
skyrock.message.create_thread.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### message.send_message.format.post
Sends a message to a single recipient.


```js
skyrock.message.send_message.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### message.delete_message.format.post
Deletes a message.


```js
skyrock.message.delete_message.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### message.delete_thread.format.post
Deletes a message thread.


```js
skyrock.message.delete_thread.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### message.set_thread_as_read.format.post
Marks a message thread as read.


```js
skyrock.message.set_thread_as_read.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### message.get_thread.format.get
Returns a message thread (15 messages per page).


```js
skyrock.message.get_thread.format.get({
  "format": "",
  "id_thread": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_thread (integer) **required** - Message thread ID.
* page (integer) - Page number (optional).

### message.list_threads.format.get
Returns the authenticated user's message threads (15 threads per page).


```js
skyrock.message.list_threads.format.get({
  "format": "",
  "filter": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* filter (string) **required** - Thread selection filter (all/unread).
* page (integer) - Page number (optional).

### newsfeed.list_alerts_types.format.get
Returns descriptions of alerts types, for developer information.


```js
skyrock.newsfeed.list_alerts_types.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### newsfeed.list_alerts.format.get
Lists user's alerts (notifications).


```js
skyrock.newsfeed.list_alerts.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### newsfeed.list_events_types.format.get
Returns descriptions of events types, for developer information.


```js
skyrock.newsfeed.list_events_types.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### newsfeed.list_events.format.get
Lists events in the user's dash-board (eg. newsfeed).


```js
skyrock.newsfeed.list_events.format.get({
  "format": "",
  "events_category": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* events_category (string) **required** - Events category. Possible values: own (display own events), friends (display friends' events).

### newsfeed.send_alert.format.post
Sends a free text as alert to the authenticated user's alerts (notifications). The message is not localized and should be send in the user language. Unlike events, alerts are personal.


```js
skyrock.newsfeed.send_alert.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### newsfeed.send_event.format.post
Sends a free text as event to the authenticated user's dash-board (eg. newsfeed). Events also appear in the dash-board of the user's friends. The message is not localized and should be send in the user language.


```js
skyrock.newsfeed.send_event.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### mood.delete_mood.format.post
Deletes an user's mood.


```js
skyrock.mood.delete_mood.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### mood.set_mood.format.post
Sets an user's mood.


```js
skyrock.mood.set_mood.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### mood.get_mood.format.get
Returns an user last mood.


```js
skyrock.mood.get_mood.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).

### mood.list_moods.format.get
Returns an user's mood list.


```js
skyrock.mood.list_moods.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).

### profile.get_tags_types.format.get
Returns user profile's tags types.


```js
skyrock.profile.get_tags_types.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.get_tags.format.get
Returns an user profile's tags.


```js
skyrock.profile.get_tags.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).

### profile.set_tags.format.post
Sets an user profile's tags.


```js
skyrock.profile.set_tags.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.get_property_values.format.get
Returns possible values for a given property. These properties can be set using set or set_config.


```js
skyrock.profile.get_property_values.format.get({
  "format": "",
  "property": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* property (string) **required** - Property name. Possible values: gender, gender_preference, looks_for, status, town, country, department, occupation, place, personality, smoker, hair_color, eye_color, height, weight, block_friends, block_honors, block_groups, block_gifts, show_visits_counter, show_comments_counter, show_kiffs_counter, show_my_websites, show_mood, display_policy, allow_share, allow_facebook_like, allow_votes, allow_kiffs, default_page, show_me_page, show_news_page, show_photos_page, show_videos_page, allow_comments.

### profile.set_config.format.post
Sets informations about a profile's (see get_property_values for possible values to set).


```js
skyrock.profile.set_config.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.get_config.format.get
Returns settings about current user's profile.


```js
skyrock.profile.get_config.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.delete_picture.format.post
Deletes a picture.


```js
skyrock.profile.delete_picture.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.set_picture.format.post
Sets a picture's properties.


```js
skyrock.profile.set_picture.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.get_picture.format.get
Returns a specified picture.


```js
skyrock.profile.get_picture.format.get({
  "format": "",
  "id_album": 0,
  "id_picture": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_album (integer) **required** - Album ID.
* id_picture (integer) **required** - Picture ID.

### profile.list_pictures.format.get
Returns the list of pictures associated with a profile.


```js
skyrock.profile.list_pictures.format.get({
  "format": "",
  "id_album": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* id_album (integer) **required** - Album ID.

### profile.add_picture.format.post
Adds a picture to the profile.


```js
skyrock.profile.add_picture.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.delete_album.format.post
Deletes an empty album. Main album (id_album = 1) cannot be deleted.


```js
skyrock.profile.delete_album.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.set_album.format.post
Sets an album's title.


```js
skyrock.profile.set_album.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.list_albums.format.get
Returns the list of albums associated with a profile. Main album has id_album = 1.


```js
skyrock.profile.list_albums.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).

### profile.add_album.format.post
Adds an album to the profile.


```js
skyrock.profile.add_album.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.set.format.post
Sets an user's profile public data.


```js
skyrock.profile.set.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### profile.get.format.get
Returns an user's profile public data.


```js
skyrock.profile.get.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* output_format (string) - Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.

### blog.list_pictures.format.get
Returns the list of pictures from all blog's articles, paginated (35 pictures per page).


```js
skyrock.blog.list_pictures.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* page (integer) - Page number.

### blog.list_skins.format.get
Returns available skins.


```js
skyrock.blog.list_skins.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### blog.get_post_comment.format.get
Returns a post's comment.


```js
skyrock.blog.get_post_comment.format.get({
  "format": "",
  "id_post": 0,
  "id_comment": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* id_post (integer) **required** - Post ID.
* id_comment (integer) **required** - Post comment ID.

### blog.list_post_comments.format.get
Lists a post's comments.


```js
skyrock.blog.list_post_comments.format.get({
  "format": "",
  "id_post": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* id_post (integer) **required** - Post ID.
* page (integer) - Page number.

### blog.delete_post_media.format.post
Deletes a post's media.


```js
skyrock.blog.delete_post_media.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### blog.new_post_media.format.post
Associates media with a blog post.


```js
skyrock.blog.new_post_media.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### blog.list_post_medias.format.get
Returns a post's medias list.


```js
skyrock.blog.list_post_medias.format.get({
  "format": "",
  "id_post": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* id_post (integer) **required** - Post ID.

### blog.delete_post.format.post
Deletes a blog post.


```js
skyrock.blog.delete_post.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### blog.set_post.format.post
Edits a blog post.


```js
skyrock.blog.set_post.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### blog.get_post.format.get
Returns an user's blog post. Only online posts will be returned, unless authenticated user is its creator.


```js
skyrock.blog.get_post.format.get({
  "format": "",
  "id_post": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* id_post (integer) **required** - Post ID.
* output_format (string) - Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.

### blog.new_post.format.post
Creates a new blog post.


```js
skyrock.blog.new_post.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### blog.list_offline_posts.format.get
Returns current user's blog posts list (offline only), paginated.


```js
skyrock.blog.list_offline_posts.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* page (integer) - Page number.
* with_secret (boolean) - Allow authenticated blog owner to show secret posts (false by default).
* output_format (string) - Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.

### blog.list_posts.format.get
Returns an user's blog posts list (online only), paginated (10 articles per page).


```js
skyrock.blog.list_posts.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* page (integer) - Page number.
* with_secret (boolean) - Allow authenticated blog owner to show secret posts (false by default).
* output_format (string) - Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.

### blog.change_avatar.format.post
Changes authenticated user's blog avatar.


```js
skyrock.blog.change_avatar.format.post({
  "format": "",
  "Content-Type": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* Content-Type (string) **required** - Content type.

### blog.set.format.post
Sets authenticated user's blog data. Each parameter is optional, you can either set one or many at once.


```js
skyrock.blog.set.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### blog.get.format.get
Returns a blog public data. If the call is authenticated and username is not provided, the method returns data about the current user's Skyrock blog.


```js
skyrock.blog.get.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* output_format (string) - Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.

### user.list_groups.format.get
List of user's groups.


```js
skyrock.user.list_groups.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).

### user.remove_user_from_blacklist.format.post
Removes a user from the blacklist.


```js
skyrock.user.remove_user_from_blacklist.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.add_user_to_blacklist.format.post
Adds a user to the blacklist.


```js
skyrock.user.add_user_to_blacklist.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.list_blacklist.format.get
List of users in blacklist.


```js
skyrock.user.list_blacklist.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.get_counters.format.get
Returns current user counters.


```js
skyrock.user.get_counters.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.is_friend.format.get
Checks friend relation between two users.


```js
skyrock.user.is_friend.format.get({
  "format": "",
  "id_user_1": 0,
  "id_user_2": 0
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user_1 (integer) **required** - First user ID.
* id_user_2 (integer) **required** - Second user ID.

### user.deny_friend_request.format.post
Denies a friend request.


```js
skyrock.user.deny_friend_request.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.accept_friend_request.format.post
Accepts a friend request.


```js
skyrock.user.accept_friend_request.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.list_friend_requests.format.get
List of friend requests.


```js
skyrock.user.list_friend_requests.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.remove_from_friends.format.post
Removes a friend from the friend list.


```js
skyrock.user.remove_from_friends.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.remove_from_best_friends.format.post
Removes a friend from the best friend list. The friend user should be a best friend of current user.


```js
skyrock.user.remove_from_best_friends.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.add_to_best_friends.format.post
Adds a friend to the best friend list. The friend user should be a friend of current user.


```js
skyrock.user.add_to_best_friends.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.send_friend_request.format.post
Sends a friend request.


```js
skyrock.user.send_friend_request.format.post({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

### user.list_online_friends.format.get
List of online friends.


```js
skyrock.user.list_online_friends.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).

### user.list_best_friends.format.get
List of best friends (paginated).


```js
skyrock.user.list_best_friends.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* page (integer) - Page number.
* order (string) - Results order. Possible values:

### user.list_friends_ids.format.get
List of friends ids (paginated).


```js
skyrock.user.list_friends_ids.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* page (integer) - Page number.
* order (string) - Results order. Possible values:

### user.list_friends.format.get
List of friends (paginated).


```js
skyrock.user.list_friends.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).
* page (integer) - Page number.
* order (string) - Results order. Possible values:

### user.get.format.get
Returns an user's public data. If the call is authenticated and username is not provided, the method returns data about the current user's Skyrock account.


```js
skyrock.user.get.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.
* id_user (integer) - User ID (optional if OAuthenticated).
* username (string) - Username (optional if OAuthenticated).

### check_rate_limit.format.get
Returns the number of remaining queries (see http://en.skyrock.com/developer/documentation/api/#request-rate-limits). Calls to this method are not counted against the limits.


```js
skyrock.check_rate_limit.format.get({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Response format.

