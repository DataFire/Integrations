# @datafire/google_blogger

Client library for Blogger API v3

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

.then(data => {
  console.log(data);
});
```

## Description

The Blogger API provides access to posts, comments and pages of a Blogger blog.

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

### blogger.blogs.get
Gets a blog by id.


```js
google_blogger.blogger.blogs.get({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`
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
* output [Blog](#blog)

### blogger.pages.list
Lists pages.


```js
google_blogger.blogger.pages.list({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`
  * fetchBodies `boolean`
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
* output [PageList](#pagelist)

### blogger.pages.get
Gets a page by blog id and page id.


```js
google_blogger.blogger.pages.get({
  "blogId": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`
  * pageId **required** `string`
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
* output [Page](#page)

### blogger.posts.list
Lists posts.


```js
google_blogger.blogger.posts.list({
  "blogId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`
  * fetchBodies `boolean`
  * maxResults `integer`
  * pageToken `string`
  * startDate `string`
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
* output [PostList](#postlist)

### blogger.posts.get
Gets a post by blog id and post id


```js
google_blogger.blogger.posts.get({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`
  * postId **required** `string`
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
* output [Post](#post)

### blogger.comments.list
Lists comments.


```js
google_blogger.blogger.comments.list({
  "blogId": "",
  "postId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`
  * postId **required** `string`
  * fetchBodies `boolean`
  * maxResults `integer`
  * pageToken `string`
  * startDate `string`
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
* output [CommentList](#commentlist)

### blogger.comments.get
Gets a comment by blog id, post id and comment id.


```js
google_blogger.blogger.comments.get({
  "blogId": "",
  "postId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * blogId **required** `string`
  * postId **required** `string`
  * commentId **required** `string`
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

### blogger.users.get
Gets a user by user id.


```js
google_blogger.blogger.users.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`
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
* output [User](#user)

### blogger.blogs.list
Lists blogs by user id, possibly filtered.


```js
google_blogger.blogger.blogs.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`
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
* output [BlogList](#bloglist)



## Definitions

### Blog
* Blog `object`
  * customMetaData `string`: The JSON custom meta-data for the Blog.
  * description `string`: The description of this blog. This is displayed underneath the title.
  * id `string`: The identifier for this resource.
  * kind `string`: The kind of this entry. Always blogger#blog.
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
  * status `string` (values: LIVE, DELETED): The status of the blog.
  * updated `string`: RFC 3339 date-time when this blog was last updated.
  * url `string`: The URL where this blog is published.

### BlogList
* BlogList `object`
  * blogUserInfos `array`: Admin level list of blog per-user information.
    * items [BlogUserInfo](#bloguserinfo)
  * items `array`: The list of Blogs this user has Authorship or Admin rights over.
    * items [Blog](#blog)
  * kind `string`: The kind of this entity. Always blogger#blogList.

### BlogPerUserInfo
* BlogPerUserInfo `object`
  * blogId `string`: ID of the Blog resource.
  * hasAdminAccess `boolean`: True if the user has Admin level access to the blog.
  * kind `string`: The kind of this entity. Always blogger#blogPerUserInfo.
  * photosAlbumKey `string`: The Photo Album Key for the user when adding photos to the blog.
  * role `string` (values: VIEW_TYPE_UNSPECIFIED, READER, AUTHOR, ADMIN): Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
  * userId `string`: ID of the User.

### BlogUserInfo
* BlogUserInfo `object`
  * blog [Blog](#blog)
  * blog_user_info [BlogPerUserInfo](#blogperuserinfo)
  * kind `string`: The kind of this entity. Always blogger#blogUserInfo.

### Comment
* Comment `object`
  * author `object`: The author of this Comment.
    * displayName `string`: The display name.
    * id `string`: The identifier of the creator.
    * image `object`: The creator's avatar.
      * url `string`: The creator's avatar URL.
    * url `string`: The URL of the creator's Profile page.
  * blog `object`: Data about the blog containing this comment.
    * id `string`: The identifier of the blog containing this comment.
  * content `string`: The actual content of the comment. May include HTML markup.
  * id `string`: The identifier for this resource.
  * inReplyTo `object`: Data about the comment this is in reply to.
    * id `string`: The identified of the parent of this comment.
  * kind `string`: The kind of this entry. Always blogger#comment.
  * post `object`: Data about the post containing this comment.
    * id `string`: The identifier of the post containing this comment.
  * published `string`: RFC 3339 date-time when this comment was published.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * status `string` (values: LIVE, EMPTIED, PENDING, SPAM): The status of the comment (only populated for admin users).
  * updated `string`: RFC 3339 date-time when this comment was last updated.

### CommentList
* CommentList `object`
  * etag `string`: Etag of the response.
  * items `array`: The List of Comments for a Post.
    * items [Comment](#comment)
  * kind `string`: The kind of this entry. Always blogger#commentList.
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.
  * prevPageToken `string`: Pagination token to fetch the previous page, if one exists.

### Page
* Page `object`
  * author `object`: The author of this Page.
    * displayName `string`: The display name.
    * id `string`: The identifier of the creator.
    * image `object`: The creator's avatar.
      * url `string`: The creator's avatar URL.
    * url `string`: The URL of the creator's Profile page.
  * blog `object`: Data about the blog containing this Page.
    * id `string`: The identifier of the blog containing this page.
  * content `string`: The body content of this Page, in HTML.
  * etag `string`: Etag of the resource.
  * id `string`: The identifier for this resource.
  * kind `string`: The kind of this entity. Always blogger#page.
  * published `string`: RFC 3339 date-time when this Page was published.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * status `string` (values: LIVE, DRAFT): The status of the page for admin resources (either LIVE or DRAFT).
  * title `string`: The title of this entity. This is the name displayed in the Admin user interface.
  * updated `string`: RFC 3339 date-time when this Page was last updated.
  * url `string`: The URL that this Page is displayed at.

### PageList
* PageList `object`
  * etag `string`: Etag of the response.
  * items `array`: The list of Pages for a Blog.
    * items [Page](#page)
  * kind `string`: The kind of this entity. Always blogger#pageList.
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.

### Post
* Post `object`
  * author `object`: The author of this Post.
    * displayName `string`: The display name.
    * id `string`: The identifier of the creator.
    * image `object`: The creator's avatar.
      * url `string`: The creator's avatar URL.
    * url `string`: The URL of the creator's Profile page.
  * blog `object`: Data about the blog containing this Post.
    * id `string`: The identifier of the Blog that contains this Post.
  * content `string`: The content of the Post. May contain HTML markup.
  * customMetaData `string`: The JSON meta-data for the Post.
  * etag `string`: Etag of the resource.
  * id `string`: The identifier of this Post.
  * images `array`: Display image for the Post.
    * items `object`
      * url `string`
  * kind `string`: The kind of this entity. Always blogger#post.
  * labels `array`: The list of labels this Post was tagged with.
    * items `string`
  * location `object`: The location for geotagged posts.
    * lat `number`: Location's latitude.
    * lng `number`: Location's longitude.
    * name `string`: Location name.
    * span `string`: Location's viewport span. Can be used when rendering a map preview.
  * published `string`: RFC 3339 date-time when this Post was published.
  * readerComments `string` (values: ALLOW, DONT_ALLOW_SHOW_EXISTING, DONT_ALLOW_HIDE_EXISTING): Comment control and display setting for readers of this post.
  * replies `object`: The container of comments on this Post.
    * items `array`: The List of Comments for this Post.
      * items [Comment](#comment)
    * selfLink `string`: The URL of the comments on this post.
    * totalItems `string`: The count of comments on this post.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * status `string` (values: LIVE, DRAFT, SCHEDULED): Status of the post. Only set for admin-level requests.
  * title `string`: The title of the Post.
  * titleLink `string`: The title link URL, similar to atom's related link.
  * updated `string`: RFC 3339 date-time when this Post was last updated.
  * url `string`: The URL where this Post is displayed.

### PostList
* PostList `object`
  * etag `string`: Etag of the response.
  * items `array`: The list of Posts for this Blog.
    * items [Post](#post)
  * kind `string`: The kind of this entity. Always blogger#postList.
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.
  * prevPageToken `string`: Pagination token to fetch the previous page, if one exists.

### User
* User `object`
  * about `string`: Profile summary information.
  * blogs `object`: The container of blogs for this user.
    * selfLink `string`: The URL of the Blogs for this user.
  * created `string`: The timestamp of when this profile was created, in seconds since epoch.
  * displayName `string`: The display name.
  * id `string`: The identifier for this User.
  * kind `string`: The kind of this entity. Always blogger#user.
  * locale `object`: This user's locale
    * country `string`: The country this blog's locale is set to.
    * language `string`: The language this blog is authored in.
    * variant `string`: The language variant this blog is authored in.
  * selfLink `string`: The API REST URL to fetch this resource from.
  * url `string`: The user's profile page.


