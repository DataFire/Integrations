# @datafire/tumblr

Client library for Tumblr

## Installation and Usage
```bash
npm install --save datafire @datafire/tumblr
```

```js
let datafire = require('datafire');
let tumblr = require('@datafire/tumblr').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

tumblr.user.following.get({}).then(data => {
  console.log(data);
})
```

## Description

	Share photos, mobile apps, and social network using Tumblr's API's.
    

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
tumblr.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
tumblr.oauthRefresh(null, context)
```


### blog.base_hostname.info.get
This method returns general information about the blog, such as the title, number of posts, and other high-level data.


```js
tumblr.blog.base_hostname.info.get({
  "base-hostname": ""
}, context)
```

#### Parameters
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.avatar.size.get
Retrieves a blog's avatar in one of 9 different sizes.


```js
tumblr.blog.base_hostname.avatar.size.get({
  "base-hostname": ""
}, context)
```

#### Parameters
* base-hostname (string) **required** - The unique hostname of the blog.
* size (string) - The size of the avatar (square, one value for both length and width). Must be one of the values: 16, 24, 30, 40, 48, 64, 96, 128, 512

### blog.base_hostname.followers.get
Retrieves a blog's followers.


```js
tumblr.blog.base_hostname.followers.get({
  "base-hostname": ""
}, context)
```

#### Parameters
* limit (integer) - The number of results to return: 1–20, inclusive
* offset (integer) - Result to start at.
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.posts.type.get
Retrieves published posts.


```js
tumblr.blog.base_hostname.posts.type.get({
  "base-hostname": ""
}, context)
```

#### Parameters
* id (integer) - A specific post ID. Returns the single post specified or (if not found) a 404 error.
* tag (string) - Limits the response to posts with the specified tag
* limit (integer) - The number of posts to return: 1–20, inclusive
* offset (integer) - Post number to start at.
* reblog_info (boolean) - Indicates whether to return reblog information (specify true or false). Returns the various reblogged_ fields.
* notes_info (boolean) - Indicates whether to return notes information (specify true or false). Returns note count and note metadata.
* format (string) - Specifies the post format to return, other than HTML.
* base-hostname (string) **required** - The unique hostname of the blog.
* type (string) - The type of post to return. Specify one of the following:  text, quote, link, answer, video, audio, photo. By default, all types are returned

### blog.base_hostname.posts.queue.get
Retrieves queued posts.


```js
tumblr.blog.base_hostname.posts.queue.get({
  "base-hostname": ""
}, context)
```

#### Parameters
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.posts.draft.get
Retrieves draft posts.


```js
tumblr.blog.base_hostname.posts.draft.get({
  "base-hostname": ""
}, context)
```

#### Parameters
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.posts.submission.get
Retrieves submission posts.


```js
tumblr.blog.base_hostname.posts.submission.get({
  "base-hostname": ""
}, context)
```

#### Parameters
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.post.post
Creates a new video blog post.


```js
tumblr.blog.base_hostname.post.post({
  "type": "",
  "base-hostname": ""
}, context)
```

#### Parameters
* type (string) **required** - The type of post to create.
* tags (string) - Comma-separated tags for this post.
* tweet (string) - Manages the autotweet (if enabled) for this post: set to off for no tweet, or enter text to override the default tweet
* date (string) - The GMT date and time of the post, as a string. Default is the date and time of the POST request.
* markdown (boolean) - Indicates whether the post uses markdown syntax.
* caption (string) - The user-supplied caption.
* embed (string) - HTML embed code for the video. Either the embed or data parameter is required.
* data (string) - A video file, as URL-encoded binary. Either the embed or data parameter is required.
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.post.edit.post
Edits a blog post.


```js
tumblr.blog.base_hostname.post.edit.post({
  "type": "",
  "id": 0,
  "base-hostname": ""
}, context)
```

#### Parameters
* type (string) **required** - The post type.
* tags (string) - Comma-separated tags for this post.
* tweet (string) - Manages the autotweet (if enabled) for this post: set to off for no tweet, or enter text to override the default tweet
* date (string) - The GMT date and time of the post, as a string. Default is the date and time of the POST request.
* markdown (boolean) - Indicates whether the post uses markdown syntax.
* id (integer) **required** - The ID of the post to edit.
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.post.reblog.post
Reblogs a post.


```js
tumblr.blog.base_hostname.post.reblog.post({
  "type": "",
  "reblog_key": 0,
  "base-hostname": ""
}, context)
```

#### Parameters
* type (string) **required** - The post type.
* tags (string) - Comma-separated tags for this post.
* tweet (string) - Manages the autotweet (if enabled) for this post: set to off for no tweet, or enter text to override the default tweet
* date (string) - The GMT date and time of the post, as a string. Default is the date and time of the POST request.
* markdown (boolean) - Indicates whether the post uses markdown syntax.
* id (integer) - The ID of the reblogged post on tumblelog. Default is the next available ID.
* reblog_key (integer) **required** - The reblog key for the reblogged post – get the reblog key with a /posts request
* comment (string) - A comment added to the reblogged post.
* base-hostname (string) **required** - The unique hostname of the blog.

### blog.base_hostname.post.delete.post
Deletes a post.


```js
tumblr.blog.base_hostname.post.delete.post({
  "id": 0,
  "base-hostname": ""
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the post to delete.
* base-hostname (string) **required** - The unique hostname of the blog.

### user.dashboard.get
Use this method to retrieve the dashboard that matches the OAuth credentials submitted with the request.


```js
tumblr.user.dashboard.get({}, context)
```

#### Parameters
* limit (integer) - The number of results to return: 1–20, inclusive
* offset (integer) - Post number to start at.
* type (string) - The type of post to return.
* since_id (integer) - Return posts that have appeared after this ID. Use this parameter to page through the results: first get a set of posts, and then get posts since the last ID of the previous set.

### user.likes.get
Use this method to retrieve the liked posts that match the OAuth credentials submitted with the request.


```js
tumblr.user.likes.get({}, context)
```

#### Parameters
* limit (integer) - The number of results to return: 1–20, inclusive
* offset (integer) - Liked post number to start at.

### user.following.get
Use this method to retrieve the blogs followed by the user whose OAuth credentials are submitted with the request.


```js
tumblr.user.following.get({}, context)
```

#### Parameters
* limit (integer) - The number of results to return: 1–20, inclusive
* offset (integer) - Result number to start at.

### user.follow.post
Follow a blog.


```js
tumblr.user.follow.post({
  "url": null
}, context)
```

#### Parameters
* url (undefined) **required** - The URL of the blog to follow.

### user.unfollow.post
Unfollow a blog.


```js
tumblr.user.unfollow.post({
  "url": null
}, context)
```

#### Parameters
* url (undefined) **required** - The URL of the blog to unfollow.

