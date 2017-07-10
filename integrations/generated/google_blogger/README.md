# @datafire/google_blogger
API for access to the data within Blogger.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: blogs.getByUrl
Retrieve a Blog by URL.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The URL of the blog to retrieve."
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the blog. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Blog"
}
```
## Operation: blogs.get
Gets one blog by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the blog to get."
    },
    "maxPosts": {
      "type": "integer",
      "description": "Maximum number of posts to pull back with the blog."
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the blog. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Blog"
}
```
## Operation: comments.listByBlog
Retrieves the comments for a blog, across all posts, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch comments from."
    },
    "endDate": {
      "type": "string",
      "description": "Latest date of comment to fetch, a date-time with RFC 3339 formatting."
    },
    "fetchBodies": {
      "type": "boolean",
      "description": "Whether the body content of the comments is included."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of comments to include in the result."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token if request is paged."
    },
    "startDate": {
      "type": "string",
      "description": "Earliest date of comment to fetch, a date-time with RFC 3339 formatting."
    },
    "status": {
      "type": "array"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommentList"
}
```
## Operation: pages.list
Retrieves the pages for a blog, optionally including non-LIVE statuses.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch Pages from."
    },
    "fetchBodies": {
      "type": "boolean",
      "description": "Whether to retrieve the Page bodies."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of Pages to fetch."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token if the request is paged."
    },
    "status": {
      "type": "array"
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the returned result. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PageList"
}
```
## Operation: pages.insert
Add a page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to add the page to."
    },
    "isDraft": {
      "type": "boolean",
      "description": "Whether to create the page as a draft (default: false)."
    },
    "body": {
      "$ref": "#/definitions/Page"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Page"
}
```
## Operation: pages.delete
Delete a page by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the Page."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "pageId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: pages.get
Gets one blog page by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog containing the page."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page to get."
    },
    "view": {
      "type": "string",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Page"
}
```
## Operation: pages.patch
Update a page. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the Page."
    },
    "publish": {
      "type": "boolean",
      "description": "Whether a publish action should be performed when the page is updated (default: false)."
    },
    "revert": {
      "type": "boolean",
      "description": "Whether a revert action should be performed when the page is updated (default: false)."
    },
    "body": {
      "$ref": "#/definitions/Page"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Page"
}
```
## Operation: pages.update
Update a page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the Page."
    },
    "publish": {
      "type": "boolean",
      "description": "Whether a publish action should be performed when the page is updated (default: false)."
    },
    "revert": {
      "type": "boolean",
      "description": "Whether a revert action should be performed when the page is updated (default: false)."
    },
    "body": {
      "$ref": "#/definitions/Page"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Page"
}
```
## Operation: pages.publish
Publishes a draft page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the blog."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Page"
}
```
## Operation: pages.revert
Revert a published or scheduled page to draft state.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the blog."
    },
    "pageId": {
      "type": "string",
      "description": "The ID of the page."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Page"
}
```
## Operation: pageViews.get
Retrieve pageview stats for a Blog.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the blog to get."
    },
    "range": {
      "type": "array"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Pageviews"
}
```
## Operation: posts.list
Retrieves a list of posts, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch posts from."
    },
    "endDate": {
      "type": "string",
      "description": "Latest post date to fetch, a date-time with RFC 3339 formatting."
    },
    "fetchBodies": {
      "type": "boolean",
      "description": "Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic."
    },
    "fetchImages": {
      "type": "boolean",
      "description": "Whether image URL metadata for each post is included."
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of labels to search for."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of posts to fetch."
    },
    "orderBy": {
      "type": "string",
      "description": "Sort search results",
      "enum": [
        "published",
        "updated"
      ]
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token if the request is paged."
    },
    "startDate": {
      "type": "string",
      "description": "Earliest post date to fetch, a date-time with RFC 3339 formatting."
    },
    "status": {
      "type": "array",
      "description": "Statuses to include in the results."
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the returned result. Note that some fields require escalated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostList"
}
```
## Operation: posts.insert
Add a post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to add the post to."
    },
    "fetchBody": {
      "type": "boolean",
      "description": "Whether the body content of the post is included with the result (default: true)."
    },
    "fetchImages": {
      "type": "boolean",
      "description": "Whether image URL metadata for each post is included in the returned result (default: false)."
    },
    "isDraft": {
      "type": "boolean",
      "description": "Whether to create the post as a draft (default: false)."
    },
    "body": {
      "$ref": "#/definitions/Post"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Post"
}
```
## Operation: posts.getByPath
Retrieve a Post by Path.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch the post from."
    },
    "path": {
      "type": "string",
      "description": "Path of the Post to retrieve."
    },
    "maxComments": {
      "type": "integer",
      "description": "Maximum number of comments to pull back on a post."
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the returned result. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "path"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Post"
}
```
## Operation: posts.search
Search for a post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch the post from."
    },
    "q": {
      "type": "string",
      "description": "Query terms to search this blog for matching posts."
    },
    "fetchBodies": {
      "type": "boolean",
      "description": "Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic."
    },
    "orderBy": {
      "type": "string",
      "description": "Sort search results",
      "enum": [
        "published",
        "updated"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostList"
}
```
## Operation: posts.delete
Delete a post by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: posts.get
Get a post by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch the post from."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the post"
    },
    "fetchBody": {
      "type": "boolean",
      "description": "Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic."
    },
    "fetchImages": {
      "type": "boolean",
      "description": "Whether image URL metadata for each post is included (default: false)."
    },
    "maxComments": {
      "type": "integer",
      "description": "Maximum number of comments to pull back on a post."
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the returned result. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Post"
}
```
## Operation: posts.patch
Update a post. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "fetchBody": {
      "type": "boolean",
      "description": "Whether the body content of the post is included with the result (default: true)."
    },
    "fetchImages": {
      "type": "boolean",
      "description": "Whether image URL metadata for each post is included in the returned result (default: false)."
    },
    "maxComments": {
      "type": "integer",
      "description": "Maximum number of comments to retrieve with the returned post."
    },
    "publish": {
      "type": "boolean",
      "description": "Whether a publish action should be performed when the post is updated (default: false)."
    },
    "revert": {
      "type": "boolean",
      "description": "Whether a revert action should be performed when the post is updated (default: false)."
    },
    "body": {
      "$ref": "#/definitions/Post"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Post"
}
```
## Operation: posts.update
Update a post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "fetchBody": {
      "type": "boolean",
      "description": "Whether the body content of the post is included with the result (default: true)."
    },
    "fetchImages": {
      "type": "boolean",
      "description": "Whether image URL metadata for each post is included in the returned result (default: false)."
    },
    "maxComments": {
      "type": "integer",
      "description": "Maximum number of comments to retrieve with the returned post."
    },
    "publish": {
      "type": "boolean",
      "description": "Whether a publish action should be performed when the post is updated (default: false)."
    },
    "revert": {
      "type": "boolean",
      "description": "Whether a revert action should be performed when the post is updated (default: false)."
    },
    "body": {
      "$ref": "#/definitions/Post"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Post"
}
```
## Operation: comments.list
Retrieves the comments for a post, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch comments from."
    },
    "postId": {
      "type": "string",
      "description": "ID of the post to fetch posts from."
    },
    "endDate": {
      "type": "string",
      "description": "Latest date of comment to fetch, a date-time with RFC 3339 formatting."
    },
    "fetchBodies": {
      "type": "boolean",
      "description": "Whether the body content of the comments is included."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of comments to include in the result."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token if request is paged."
    },
    "startDate": {
      "type": "string",
      "description": "Earliest date of comment to fetch, a date-time with RFC 3339 formatting."
    },
    "status": {
      "type": "array"
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the returned result. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommentList"
}
```
## Operation: comments.delete
Delete a comment by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment to delete."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId",
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comments.get
Gets one comment by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "ID of the blog to containing the comment."
    },
    "postId": {
      "type": "string",
      "description": "ID of the post to fetch posts from."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment to get."
    },
    "view": {
      "type": "string",
      "description": "Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: comments.approve
Marks a comment as not spam.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment to mark as not spam."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: comments.removeContent
Removes the content of a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment to delete content from."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: comments.markAsSpam
Marks a comment as spam.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment to mark as spam."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: posts.publish
Publishes a draft post, optionally at the specific time of the given publishDate parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "publishDate": {
      "type": "string",
      "description": "Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Post"
}
```
## Operation: posts.revert
Revert a published or scheduled post to draft state.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blogId": {
      "type": "string",
      "description": "The ID of the Blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the Post."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Post"
}
```
## Operation: users.get
Gets one user by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "The ID of the user to get."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: blogs.listByUser
Retrieves a list of blogs, possibly filtered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier."
    },
    "fetchUserInfo": {
      "type": "boolean",
      "description": "Whether the response is a list of blogs with per-user information instead of just blogs."
    },
    "role": {
      "type": "array",
      "description": "User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles."
    },
    "status": {
      "type": "array",
      "description": "Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs."
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the blogs. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BlogList"
}
```
## Operation: blogUserInfos.get
Gets one blog and user info pair by blogId and userId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier."
    },
    "blogId": {
      "type": "string",
      "description": "The ID of the blog to get."
    },
    "maxPosts": {
      "type": "integer",
      "description": "Maximum number of posts to pull back with the blog."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BlogUserInfo"
}
```
## Operation: postUserInfos.list
Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier."
    },
    "blogId": {
      "type": "string",
      "description": "ID of the blog to fetch posts from."
    },
    "endDate": {
      "type": "string",
      "description": "Latest post date to fetch, a date-time with RFC 3339 formatting."
    },
    "fetchBodies": {
      "type": "boolean",
      "description": "Whether the body content of posts is included. Default is false."
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of labels to search for."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of posts to fetch."
    },
    "orderBy": {
      "type": "string",
      "description": "Sort order applied to search results. Default is published.",
      "enum": [
        "published",
        "updated"
      ]
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token if the request is paged."
    },
    "startDate": {
      "type": "string",
      "description": "Earliest post date to fetch, a date-time with RFC 3339 formatting."
    },
    "status": {
      "type": "array"
    },
    "view": {
      "type": "string",
      "description": "Access level with which to view the returned result. Note that some fields require elevated access.",
      "enum": [
        "ADMIN",
        "AUTHOR",
        "READER"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "blogId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostUserInfosList"
}
```
## Operation: postUserInfos.get
Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier."
    },
    "blogId": {
      "type": "string",
      "description": "The ID of the blog."
    },
    "postId": {
      "type": "string",
      "description": "The ID of the post to get."
    },
    "maxComments": {
      "type": "integer",
      "description": "Maximum number of comments to pull back on a post."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "blogId",
    "postId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostUserInfo"
}
```
