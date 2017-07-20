# @datafire/google_blogger

Client library for Blogger

## Installation and Usage
```bash
npm install --save datafire @datafire/google_blogger
```

```js
let datafire = require('datafire');
let google_blogger = require('@datafire/google_blogger').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_blogger: account,
  }
})

google_blogger.blogs.getByUrl({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_blogger.oauthRefresh(null, context)
```


### blogs.getByUrl
Retrieve a Blog by URL.


```js
google_blogger.blogs.getByUrl({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - The URL of the blog to retrieve.
* view (string) - Access level with which to view the blog. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### blogs.get
Gets one blog by ID.


```js
google_blogger.blogs.get({
  "blogId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the blog to get.
* maxPosts (integer) - Maximum number of posts to pull back with the blog.
* view (string) - Access level with which to view the blog. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.listByBlog
Retrieves the comments for a blog, across all posts, possibly filtered.


```js
google_blogger.comments.listByBlog({
  "blogId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to fetch comments from.
* endDate (string) - Latest date of comment to fetch, a date-time with RFC 3339 formatting.
* fetchBodies (boolean) - Whether the body content of the comments is included.
* maxResults (integer) - Maximum number of comments to include in the result.
* pageToken (string) - Continuation token if request is paged.
* startDate (string) - Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
* status (array)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.list
Retrieves the pages for a blog, optionally including non-LIVE statuses.


```js
google_blogger.pages.list({
  "blogId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to fetch Pages from.
* fetchBodies (boolean) - Whether to retrieve the Page bodies.
* maxResults (integer) - Maximum number of Pages to fetch.
* pageToken (string) - Continuation token if the request is paged.
* status (array)
* view (string) - Access level with which to view the returned result. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.insert
Add a page.


```js
google_blogger.pages.insert({
  "blogId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to add the page to.
* isDraft (boolean) - Whether to create the page as a draft (default: false).
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.delete
Delete a page by ID.


```js
google_blogger.pages.delete({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* pageId (string) **required** - The ID of the Page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.get
Gets one blog page by ID.


```js
google_blogger.pages.get({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog containing the page.
* pageId (string) **required** - The ID of the page to get.
* view (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.patch
Update a page. This method supports patch semantics.


```js
google_blogger.pages.patch({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* pageId (string) **required** - The ID of the Page.
* publish (boolean) - Whether a publish action should be performed when the page is updated (default: false).
* revert (boolean) - Whether a revert action should be performed when the page is updated (default: false).
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.update
Update a page.


```js
google_blogger.pages.update({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* pageId (string) **required** - The ID of the Page.
* publish (boolean) - Whether a publish action should be performed when the page is updated (default: false).
* revert (boolean) - Whether a revert action should be performed when the page is updated (default: false).
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.publish
Publishes a draft page.


```js
google_blogger.pages.publish({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the blog.
* pageId (string) **required** - The ID of the page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pages.revert
Revert a published or scheduled page to draft state.


```js
google_blogger.pages.revert({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the blog.
* pageId (string) **required** - The ID of the page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pageViews.get
Retrieve pageview stats for a Blog.


```js
google_blogger.pageViews.get({
  "blogId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the blog to get.
* range (array)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.list
Retrieves a list of posts, possibly filtered.


```js
google_blogger.posts.list({
  "blogId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to fetch posts from.
* endDate (string) - Latest post date to fetch, a date-time with RFC 3339 formatting.
* fetchBodies (boolean) - Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
* fetchImages (boolean) - Whether image URL metadata for each post is included.
* labels (string) - Comma-separated list of labels to search for.
* maxResults (integer) - Maximum number of posts to fetch.
* orderBy (string) - Sort search results
* pageToken (string) - Continuation token if the request is paged.
* startDate (string) - Earliest post date to fetch, a date-time with RFC 3339 formatting.
* status (array) - Statuses to include in the results.
* view (string) - Access level with which to view the returned result. Note that some fields require escalated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.insert
Add a post.


```js
google_blogger.posts.insert({
  "blogId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to add the post to.
* fetchBody (boolean) - Whether the body content of the post is included with the result (default: true).
* fetchImages (boolean) - Whether image URL metadata for each post is included in the returned result (default: false).
* isDraft (boolean) - Whether to create the post as a draft (default: false).
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.getByPath
Retrieve a Post by Path.


```js
google_blogger.posts.getByPath({
  "blogId": "",
  "path": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to fetch the post from.
* path (string) **required** - Path of the Post to retrieve.
* maxComments (integer) - Maximum number of comments to pull back on a post.
* view (string) - Access level with which to view the returned result. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.search
Search for a post.


```js
google_blogger.posts.search({
  "blogId": "",
  "q": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to fetch the post from.
* q (string) **required** - Query terms to search this blog for matching posts.
* fetchBodies (boolean) - Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
* orderBy (string) - Sort search results
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.delete
Delete a post by ID.


```js
google_blogger.posts.delete({
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.get
Get a post by ID.


```js
google_blogger.posts.get({
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to fetch the post from.
* postId (string) **required** - The ID of the post
* fetchBody (boolean) - Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
* fetchImages (boolean) - Whether image URL metadata for each post is included (default: false).
* maxComments (integer) - Maximum number of comments to pull back on a post.
* view (string) - Access level with which to view the returned result. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.patch
Update a post. This method supports patch semantics.


```js
google_blogger.posts.patch({
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* fetchBody (boolean) - Whether the body content of the post is included with the result (default: true).
* fetchImages (boolean) - Whether image URL metadata for each post is included in the returned result (default: false).
* maxComments (integer) - Maximum number of comments to retrieve with the returned post.
* publish (boolean) - Whether a publish action should be performed when the post is updated (default: false).
* revert (boolean) - Whether a revert action should be performed when the post is updated (default: false).
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.update
Update a post.


```js
google_blogger.posts.update({
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* fetchBody (boolean) - Whether the body content of the post is included with the result (default: true).
* fetchImages (boolean) - Whether image URL metadata for each post is included in the returned result (default: false).
* maxComments (integer) - Maximum number of comments to retrieve with the returned post.
* publish (boolean) - Whether a publish action should be performed when the post is updated (default: false).
* revert (boolean) - Whether a revert action should be performed when the post is updated (default: false).
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.list
Retrieves the comments for a post, possibly filtered.


```js
google_blogger.comments.list({
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to fetch comments from.
* postId (string) **required** - ID of the post to fetch posts from.
* endDate (string) - Latest date of comment to fetch, a date-time with RFC 3339 formatting.
* fetchBodies (boolean) - Whether the body content of the comments is included.
* maxResults (integer) - Maximum number of comments to include in the result.
* pageToken (string) - Continuation token if request is paged.
* startDate (string) - Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
* status (array)
* view (string) - Access level with which to view the returned result. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.delete
Delete a comment by ID.


```js
google_blogger.comments.delete({
  "blogId": "",
  "postId": "",
  "commentId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* commentId (string) **required** - The ID of the comment to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.get
Gets one comment by ID.


```js
google_blogger.comments.get({
  "blogId": "",
  "postId": "",
  "commentId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - ID of the blog to containing the comment.
* postId (string) **required** - ID of the post to fetch posts from.
* commentId (string) **required** - The ID of the comment to get.
* view (string) - Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.approve
Marks a comment as not spam.


```js
google_blogger.comments.approve({
  "blogId": "",
  "postId": "",
  "commentId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* commentId (string) **required** - The ID of the comment to mark as not spam.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.removeContent
Removes the content of a comment.


```js
google_blogger.comments.removeContent({
  "blogId": "",
  "postId": "",
  "commentId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* commentId (string) **required** - The ID of the comment to delete content from.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.markAsSpam
Marks a comment as spam.


```js
google_blogger.comments.markAsSpam({
  "blogId": "",
  "postId": "",
  "commentId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* commentId (string) **required** - The ID of the comment to mark as spam.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.publish
Publishes a draft post, optionally at the specific time of the given publishDate parameter.


```js
google_blogger.posts.publish({
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* publishDate (string) - Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### posts.revert
Revert a published or scheduled post to draft state.


```js
google_blogger.posts.revert({
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* blogId (string) **required** - The ID of the Blog.
* postId (string) **required** - The ID of the Post.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.get
Gets one user by ID.


```js
google_blogger.users.get({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### blogs.listByUser
Retrieves a list of blogs, possibly filtered.


```js
google_blogger.blogs.listByUser({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* fetchUserInfo (boolean) - Whether the response is a list of blogs with per-user information instead of just blogs.
* role (array) - User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles.
* status (array) - Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs.
* view (string) - Access level with which to view the blogs. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### blogUserInfos.get
Gets one blog and user info pair by blogId and userId.


```js
google_blogger.blogUserInfos.get({
  "userId": "",
  "blogId": ""
}, context)
```

#### Parameters
* userId (string) **required** - ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* blogId (string) **required** - The ID of the blog to get.
* maxPosts (integer) - Maximum number of posts to pull back with the blog.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### postUserInfos.list
Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.


```js
google_blogger.postUserInfos.list({
  "userId": "",
  "blogId": ""
}, context)
```

#### Parameters
* userId (string) **required** - ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* blogId (string) **required** - ID of the blog to fetch posts from.
* endDate (string) - Latest post date to fetch, a date-time with RFC 3339 formatting.
* fetchBodies (boolean) - Whether the body content of posts is included. Default is false.
* labels (string) - Comma-separated list of labels to search for.
* maxResults (integer) - Maximum number of posts to fetch.
* orderBy (string) - Sort order applied to search results. Default is published.
* pageToken (string) - Continuation token if the request is paged.
* startDate (string) - Earliest post date to fetch, a date-time with RFC 3339 formatting.
* status (array)
* view (string) - Access level with which to view the returned result. Note that some fields require elevated access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### postUserInfos.get
Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user.


```js
google_blogger.postUserInfos.get({
  "userId": "",
  "blogId": "",
  "postId": ""
}, context)
```

#### Parameters
* userId (string) **required** - ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
* blogId (string) **required** - The ID of the blog.
* postId (string) **required** - The ID of the post to get.
* maxComments (integer) - Maximum number of comments to pull back on a post.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

