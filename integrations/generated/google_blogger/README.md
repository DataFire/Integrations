# @datafire/google_blogger

Client library for Blogger

## Installation and Usage
```bash
npm install --save @datafire/google_blogger
```
```js
let google_blogger = require('@datafire/google_blogger').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_blogger.blogs.getByUrl({
  "url": ""
}).then(data => {
  console.log(data);
});
```

## Description

API for access to the data within Blogger.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_blogger.oauthCallback({
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
google_blogger.oauthRefresh(null, context)
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

### blogs.getByUrl
Retrieve a Blog by URL.


```js
google_blogger.blogs.getByUrl({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the blog to retrieve.
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the blog. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Blog](#blog)

### blogs.get
Gets one blog by ID.


```js
google_blogger.blogs.get({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the blog to get.
  * maxPosts `integer`: Maximum number of posts to pull back with the blog.
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the blog. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Blog](#blog)

### comments.listByBlog
Retrieves the comments for a blog, across all posts, possibly filtered.


```js
google_blogger.comments.listByBlog({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch comments from.
  * endDate `string`: Latest date of comment to fetch, a date-time with RFC 3339 formatting.
  * fetchBodies `boolean`: Whether the body content of the comments is included.
  * maxResults `integer`: Maximum number of comments to include in the result.
  * pageToken `string`: Continuation token if request is paged.
  * startDate `string`: Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
  * status `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CommentList](#commentlist)

### pages.list
Retrieves the pages for a blog, optionally including non-LIVE statuses.


```js
google_blogger.pages.list({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch Pages from.
  * fetchBodies `boolean`: Whether to retrieve the Page bodies.
  * maxResults `integer`: Maximum number of Pages to fetch.
  * pageToken `string`: Continuation token if the request is paged.
  * status `array`
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the returned result. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PageList](#pagelist)

### pages.insert
Add a page.


```js
google_blogger.pages.insert({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to add the page to.
  * body [Page](#page)
  * isDraft `boolean`: Whether to create the page as a draft (default: false).
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Page](#page)

### pages.delete
Delete a page by ID.


```js
google_blogger.pages.delete({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * pageId **required** `string`: The ID of the Page.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### pages.get
Gets one blog page by ID.


```js
google_blogger.pages.get({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog containing the page.
  * pageId **required** `string`: The ID of the page to get.
  * view `string` (values: ADMIN, AUTHOR, READER)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Page](#page)

### pages.patch
Update a page. This method supports patch semantics.


```js
google_blogger.pages.patch({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * body [Page](#page)
  * pageId **required** `string`: The ID of the Page.
  * publish `boolean`: Whether a publish action should be performed when the page is updated (default: false).
  * revert `boolean`: Whether a revert action should be performed when the page is updated (default: false).
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Page](#page)

### pages.update
Update a page.


```js
google_blogger.pages.update({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * body [Page](#page)
  * pageId **required** `string`: The ID of the Page.
  * publish `boolean`: Whether a publish action should be performed when the page is updated (default: false).
  * revert `boolean`: Whether a revert action should be performed when the page is updated (default: false).
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Page](#page)

### pages.publish
Publishes a draft page.


```js
google_blogger.pages.publish({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the blog.
  * pageId **required** `string`: The ID of the page.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Page](#page)

### pages.revert
Revert a published or scheduled page to draft state.


```js
google_blogger.pages.revert({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the blog.
  * pageId **required** `string`: The ID of the page.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Page](#page)

### pageViews.get
Retrieve pageview stats for a Blog.


```js
google_blogger.pageViews.get({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the blog to get.
  * range `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Pageviews](#pageviews)

### posts.list
Retrieves a list of posts, possibly filtered.


```js
google_blogger.posts.list({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch posts from.
  * endDate `string`: Latest post date to fetch, a date-time with RFC 3339 formatting.
  * fetchBodies `boolean`: Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
  * fetchImages `boolean`: Whether image URL metadata for each post is included.
  * labels `string`: Comma-separated list of labels to search for.
  * maxResults `integer`: Maximum number of posts to fetch.
  * orderBy `string` (values: published, updated): Sort search results
  * pageToken `string`: Continuation token if the request is paged.
  * startDate `string`: Earliest post date to fetch, a date-time with RFC 3339 formatting.
  * status `array`: Statuses to include in the results.
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the returned result. Note that some fields require escalated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PostList](#postlist)

### posts.insert
Add a post.


```js
google_blogger.posts.insert({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to add the post to.
  * body [Post](#post)
  * fetchBody `boolean`: Whether the body content of the post is included with the result (default: true).
  * fetchImages `boolean`: Whether image URL metadata for each post is included in the returned result (default: false).
  * isDraft `boolean`: Whether to create the post as a draft (default: false).
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Post](#post)

### posts.getByPath
Retrieve a Post by Path.


```js
google_blogger.posts.getByPath({
  "blogId": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch the post from.
  * maxComments `integer`: Maximum number of comments to pull back on a post.
  * path **required** `string`: Path of the Post to retrieve.
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the returned result. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Post](#post)

### posts.search
Search for a post.


```js
google_blogger.posts.search({
  "blogId": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch the post from.
  * fetchBodies `boolean`: Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
  * orderBy `string` (values: published, updated): Sort search results
  * q **required** `string`: Query terms to search this blog for matching posts.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PostList](#postlist)

### posts.delete
Delete a post by ID.


```js
google_blogger.posts.delete({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * postId **required** `string`: The ID of the Post.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### posts.get
Get a post by ID.


```js
google_blogger.posts.get({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch the post from.
  * fetchBody `boolean`: Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
  * fetchImages `boolean`: Whether image URL metadata for each post is included (default: false).
  * maxComments `integer`: Maximum number of comments to pull back on a post.
  * postId **required** `string`: The ID of the post
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the returned result. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Post](#post)

### posts.patch
Update a post. This method supports patch semantics.


```js
google_blogger.posts.patch({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * body [Post](#post)
  * fetchBody `boolean`: Whether the body content of the post is included with the result (default: true).
  * fetchImages `boolean`: Whether image URL metadata for each post is included in the returned result (default: false).
  * maxComments `integer`: Maximum number of comments to retrieve with the returned post.
  * postId **required** `string`: The ID of the Post.
  * publish `boolean`: Whether a publish action should be performed when the post is updated (default: false).
  * revert `boolean`: Whether a revert action should be performed when the post is updated (default: false).
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Post](#post)

### posts.update
Update a post.


```js
google_blogger.posts.update({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * body [Post](#post)
  * fetchBody `boolean`: Whether the body content of the post is included with the result (default: true).
  * fetchImages `boolean`: Whether image URL metadata for each post is included in the returned result (default: false).
  * maxComments `integer`: Maximum number of comments to retrieve with the returned post.
  * postId **required** `string`: The ID of the Post.
  * publish `boolean`: Whether a publish action should be performed when the post is updated (default: false).
  * revert `boolean`: Whether a revert action should be performed when the post is updated (default: false).
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Post](#post)

### comments.list
Retrieves the comments for a post, possibly filtered.


```js
google_blogger.comments.list({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch comments from.
  * endDate `string`: Latest date of comment to fetch, a date-time with RFC 3339 formatting.
  * fetchBodies `boolean`: Whether the body content of the comments is included.
  * maxResults `integer`: Maximum number of comments to include in the result.
  * pageToken `string`: Continuation token if request is paged.
  * postId **required** `string`: ID of the post to fetch posts from.
  * startDate `string`: Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
  * status `array`
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the returned result. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CommentList](#commentlist)

### comments.delete
Delete a comment by ID.


```js
google_blogger.comments.delete({
  "blogId": "",
  "commentId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * commentId **required** `string`: The ID of the comment to delete.
  * postId **required** `string`: The ID of the Post.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### comments.get
Gets one comment by ID.


```js
google_blogger.comments.get({
  "blogId": "",
  "commentId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to containing the comment.
  * commentId **required** `string`: The ID of the comment to get.
  * postId **required** `string`: ID of the post to fetch posts from.
  * view `string` (values: ADMIN, AUTHOR, READER): Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### comments.approve
Marks a comment as not spam.


```js
google_blogger.comments.approve({
  "blogId": "",
  "commentId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * commentId **required** `string`: The ID of the comment to mark as not spam.
  * postId **required** `string`: The ID of the Post.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### comments.removeContent
Removes the content of a comment.


```js
google_blogger.comments.removeContent({
  "blogId": "",
  "commentId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * commentId **required** `string`: The ID of the comment to delete content from.
  * postId **required** `string`: The ID of the Post.
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
Marks a comment as spam.


```js
google_blogger.comments.markAsSpam({
  "blogId": "",
  "commentId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * commentId **required** `string`: The ID of the comment to mark as spam.
  * postId **required** `string`: The ID of the Post.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### posts.publish
Publishes a draft post, optionally at the specific time of the given publishDate parameter.


```js
google_blogger.posts.publish({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * postId **required** `string`: The ID of the Post.
  * publishDate `string`: Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Post](#post)

### posts.revert
Revert a published or scheduled post to draft state.


```js
google_blogger.posts.revert({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the Blog.
  * postId **required** `string`: The ID of the Post.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Post](#post)

### users.get
Gets one user by ID.


```js
google_blogger.users.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user to get.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [User](#user)

### blogs.listByUser
Retrieves a list of blogs, possibly filtered.


```js
google_blogger.blogs.listByUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * fetchUserInfo `boolean`: Whether the response is a list of blogs with per-user information instead of just blogs.
  * role `array`: User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles.
  * status `array`: Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs.
  * userId **required** `string`: ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the blogs. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BlogList](#bloglist)

### blogUserInfos.get
Gets one blog and user info pair by blogId and userId.


```js
google_blogger.blogUserInfos.get({
  "blogId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the blog to get.
  * maxPosts `integer`: Maximum number of posts to pull back with the blog.
  * userId **required** `string`: ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BlogUserInfo](#bloguserinfo)

### postUserInfos.list
Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.


```js
google_blogger.postUserInfos.list({
  "blogId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: ID of the blog to fetch posts from.
  * endDate `string`: Latest post date to fetch, a date-time with RFC 3339 formatting.
  * fetchBodies `boolean`: Whether the body content of posts is included. Default is false.
  * labels `string`: Comma-separated list of labels to search for.
  * maxResults `integer`: Maximum number of posts to fetch.
  * orderBy `string` (values: published, updated): Sort order applied to search results. Default is published.
  * pageToken `string`: Continuation token if the request is paged.
  * startDate `string`: Earliest post date to fetch, a date-time with RFC 3339 formatting.
  * status `array`
  * userId **required** `string`: ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
  * view `string` (values: ADMIN, AUTHOR, READER): Access level with which to view the returned result. Note that some fields require elevated access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PostUserInfosList](#postuserinfoslist)

### postUserInfos.get
Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user.


```js
google_blogger.postUserInfos.get({
  "blogId": "",
  "postId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`: The ID of the blog.
  * maxComments `integer`: Maximum number of comments to pull back on a post.
  * postId **required** `string`: The ID of the post to get.
  * userId **required** `string`: ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PostUserInfo](#postuserinfo)



## Definitions

### Blog
* Blog `object`
  * customMetaData `string`: The JSON custom meta-data for the Blog
  * description `string`: The description of this blog. This is displayed underneath the title.
  * id `string`: The identifier for this resource.
  * kind `string`: The kind of this entry. Always blogger#blog
  * locale `object`: The locale this Blog is set to.
    * country `string`: The country this blog's locale is set to.
    * language `string`: The language this blog is authored in.
    * variant `string`: The language variant this blog is authored in.
  * name `string`: The name of this blog. This is displayed as the title.
  * pages `object`: The container of pages in this blog.
    * selfLink `string`: The URL of the container for pages in this blog.
    * totalItems `integer`: The count of pages in this blog.
  * posts `object`: The container of posts in this blog.
    * items `array`: The List of Posts for this Blog.
      * items [Post](#post)
    * selfLink `string`: The URL of the container for posts in this blog.
    * totalItems `integer`: The count of posts in this blog.
  * published `string`: RFC 3339 date-time when this blog was published.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * status `string`: The status of the blog.
  * updated `string`: RFC 3339 date-time when this blog was last updated.
  * url `string`: The URL where this blog is published.

### BlogList
* BlogList `object`
  * blogUserInfos `array`: Admin level list of blog per-user information
    * items [BlogUserInfo](#bloguserinfo)
  * items `array`: The list of Blogs this user has Authorship or Admin rights over.
    * items [Blog](#blog)
  * kind `string`: The kind of this entity. Always blogger#blogList

### BlogPerUserInfo
* BlogPerUserInfo `object`
  * blogId `string`: ID of the Blog resource
  * hasAdminAccess `boolean`: True if the user has Admin level access to the blog.
  * kind `string`: The kind of this entity. Always blogger#blogPerUserInfo
  * photosAlbumKey `string`: The Photo Album Key for the user when adding photos to the blog
  * role `string`: Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
  * userId `string`: ID of the User

### BlogUserInfo
* BlogUserInfo `object`
  * blog [Blog](#blog)
  * blog_user_info [BlogPerUserInfo](#blogperuserinfo)
  * kind `string`: The kind of this entity. Always blogger#blogUserInfo

### Comment
* Comment `object`
  * author `object`: The author of this Comment.
    * displayName `string`: The display name.
    * id `string`: The identifier of the Comment creator.
    * image `object`: The comment creator's avatar.
      * url `string`: The comment creator's avatar URL.
    * url `string`: The URL of the Comment creator's Profile page.
  * blog `object`: Data about the blog containing this comment.
    * id `string`: The identifier of the blog containing this comment.
  * content `string`: The actual content of the comment. May include HTML markup.
  * id `string`: The identifier for this resource.
  * inReplyTo `object`: Data about the comment this is in reply to.
    * id `string`: The identified of the parent of this comment.
  * kind `string`: The kind of this entry. Always blogger#comment
  * post `object`: Data about the post containing this comment.
    * id `string`: The identifier of the post containing this comment.
  * published `string`: RFC 3339 date-time when this comment was published.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * status `string`: The status of the comment (only populated for admin users)
  * updated `string`: RFC 3339 date-time when this comment was last updated.

### CommentList
* CommentList `object`
  * etag `string`: Etag of the response.
  * items `array`: The List of Comments for a Post.
    * items [Comment](#comment)
  * kind `string`: The kind of this entry. Always blogger#commentList
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.
  * prevPageToken `string`: Pagination token to fetch the previous page, if one exists.

### Page
* Page `object`
  * author `object`: The author of this Page.
    * displayName `string`: The display name.
    * id `string`: The identifier of the Page creator.
    * image `object`: The page author's avatar.
      * url `string`: The page author's avatar URL.
    * url `string`: The URL of the Page creator's Profile page.
  * blog `object`: Data about the blog containing this Page.
    * id `string`: The identifier of the blog containing this page.
  * content `string`: The body content of this Page, in HTML.
  * etag `string`: Etag of the resource.
  * id `string`: The identifier for this resource.
  * kind `string`: The kind of this entity. Always blogger#page
  * published `string`: RFC 3339 date-time when this Page was published.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * status `string`: The status of the page for admin resources (either LIVE or DRAFT).
  * title `string`: The title of this entity. This is the name displayed in the Admin user interface.
  * updated `string`: RFC 3339 date-time when this Page was last updated.
  * url `string`: The URL that this Page is displayed at.

### PageList
* PageList `object`
  * etag `string`: Etag of the response.
  * items `array`: The list of Pages for a Blog.
    * items [Page](#page)
  * kind `string`: The kind of this entity. Always blogger#pageList
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.

### Pageviews
* Pageviews `object`
  * blogId `string`: Blog Id
  * counts `array`: The container of posts in this blog.
    * items `object`
      * count `string`: Count of page views for the given time range
      * timeRange `string`: Time range the given count applies to
  * kind `string`: The kind of this entry. Always blogger#page_views

### Post
* Post `object`
  * author `object`: The author of this Post.
    * displayName `string`: The display name.
    * id `string`: The identifier of the Post creator.
    * image `object`: The Post author's avatar.
      * url `string`: The Post author's avatar URL.
    * url `string`: The URL of the Post creator's Profile page.
  * blog `object`: Data about the blog containing this Post.
    * id `string`: The identifier of the Blog that contains this Post.
  * content `string`: The content of the Post. May contain HTML markup.
  * customMetaData `string`: The JSON meta-data for the Post.
  * etag `string`: Etag of the resource.
  * id `string`: The identifier of this Post.
  * images `array`: Display image for the Post.
    * items `object`
      * url `string`
  * kind `string`: The kind of this entity. Always blogger#post
  * labels `array`: The list of labels this Post was tagged with.
    * items `string`
  * location `object`: The location for geotagged posts.
    * lat `number`: Location's latitude.
    * lng `number`: Location's longitude.
    * name `string`: Location name.
    * span `string`: Location's viewport span. Can be used when rendering a map preview.
  * published `string`: RFC 3339 date-time when this Post was published.
  * readerComments `string`: Comment control and display setting for readers of this post.
  * replies `object`: The container of comments on this Post.
    * items `array`: The List of Comments for this Post.
      * items [Comment](#comment)
    * selfLink `string`: The URL of the comments on this post.
    * totalItems `string`: The count of comments on this post.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * status `string`: Status of the post. Only set for admin-level requests
  * title `string`: The title of the Post.
  * titleLink `string`: The title link URL, similar to atom's related link.
  * updated `string`: RFC 3339 date-time when this Post was last updated.
  * url `string`: The URL where this Post is displayed.

### PostList
* PostList `object`
  * etag `string`: Etag of the response.
  * items `array`: The list of Posts for this Blog.
    * items [Post](#post)
  * kind `string`: The kind of this entity. Always blogger#postList
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.

### PostPerUserInfo
* PostPerUserInfo `object`
  * blogId `string`: ID of the Blog that the post resource belongs to.
  * hasEditAccess `boolean`: True if the user has Author level access to the post.
  * kind `string`: The kind of this entity. Always blogger#postPerUserInfo
  * postId `string`: ID of the Post resource.
  * userId `string`: ID of the User.

### PostUserInfo
* PostUserInfo `object`
  * kind `string`: The kind of this entity. Always blogger#postUserInfo
  * post [Post](#post)
  * post_user_info [PostPerUserInfo](#postperuserinfo)

### PostUserInfosList
* PostUserInfosList `object`
  * items `array`: The list of Posts with User information for the post, for this Blog.
    * items [PostUserInfo](#postuserinfo)
  * kind `string`: The kind of this entity. Always blogger#postList
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.

### User
* User `object`
  * about `string`: Profile summary information.
  * blogs `object`: The container of blogs for this user.
    * selfLink `string`: The URL of the Blogs for this user.
  * created `string`: The timestamp of when this profile was created, in seconds since epoch.
  * displayName `string`: The display name.
  * id `string`: The identifier for this User.
  * kind `string`: The kind of this entity. Always blogger#user
  * locale `object`: This user's locale
    * country `string`: The user's country setting.
    * language `string`: The user's language setting.
    * variant `string`: The user's language variant setting.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * url `string`: The user's profile page.


