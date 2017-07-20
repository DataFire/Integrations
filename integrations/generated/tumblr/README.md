# @datafire/tumblr

	Share photos, mobile apps, and social network using Tumblr's API's.
    

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
## Operation: blog.base_hostname.info.get
This method returns general information about the blog, such as the title, number of posts, and other high-level data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.avatar.size.get
Retrieves a blog's avatar in one of 9 different sizes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    },
    "size": {
      "type": "string",
      "description": "The size of the avatar (square, one value for both length and width). Must be one of the values: 16, 24, 30, 40, 48, 64, 96, 128, 512",
      "enum": [
        "16",
        "24",
        "30",
        "40",
        "48",
        "64",
        "96",
        "128",
        "512"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.followers.get
Retrieves a blog's followers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results to return: 1–20, inclusive",
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "description": "Result to start at.",
      "minimum": 1
    },
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.posts.type.get
Retrieves published posts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "A specific post ID. Returns the single post specified or (if not found) a 404 error."
    },
    "tag": {
      "type": "string",
      "description": "Limits the response to posts with the specified tag"
    },
    "limit": {
      "type": "integer",
      "description": "The number of posts to return: 1–20, inclusive",
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "description": "Post number to start at.",
      "minimum": 1
    },
    "reblog_info": {
      "type": "boolean",
      "description": "Indicates whether to return reblog information (specify true or false). Returns the various reblogged_ fields."
    },
    "notes_info": {
      "type": "boolean",
      "description": "Indicates whether to return notes information (specify true or false). Returns note count and note metadata."
    },
    "format": {
      "type": "string",
      "description": "Specifies the post format to return, other than HTML.",
      "enum": [
        "text",
        "raw"
      ]
    },
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    },
    "type": {
      "type": "string",
      "description": "The type of post to return. Specify one of the following:  text, quote, link, answer, video, audio, photo. By default, all types are returned",
      "enum": [
        "text",
        "quote",
        "link",
        "answer",
        "video",
        "audio",
        "photo"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.posts.queue.get
Retrieves queued posts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.posts.draft.get
Retrieves draft posts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.posts.submission.get
Retrieves submission posts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.post.post
Creates a new video blog post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The type of post to create.",
      "enum": [
        "text",
        "photo",
        "quote",
        "link",
        "chat",
        "audio",
        "video"
      ]
    },
    "tags": {
      "type": "string",
      "description": "Comma-separated tags for this post."
    },
    "tweet": {
      "type": "string",
      "description": "Manages the autotweet (if enabled) for this post: set to off for no tweet, or enter text to override the default tweet"
    },
    "date": {
      "type": "string",
      "description": "The GMT date and time of the post, as a string. Default is the date and time of the POST request."
    },
    "markdown": {
      "type": "boolean",
      "description": "Indicates whether the post uses markdown syntax."
    },
    "caption": {
      "type": "string",
      "description": "The user-supplied caption."
    },
    "embed": {
      "type": "string",
      "description": "HTML embed code for the video. Either the embed or data parameter is required."
    },
    "data": {
      "type": "string",
      "description": "A video file, as URL-encoded binary. Either the embed or data parameter is required."
    },
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.post.edit.post
Edits a blog post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The post type.",
      "enum": [
        "text",
        "photo",
        "quote",
        "link",
        "chat",
        "audio",
        "video"
      ]
    },
    "tags": {
      "type": "string",
      "description": "Comma-separated tags for this post."
    },
    "tweet": {
      "type": "string",
      "description": "Manages the autotweet (if enabled) for this post: set to off for no tweet, or enter text to override the default tweet"
    },
    "date": {
      "type": "string",
      "description": "The GMT date and time of the post, as a string. Default is the date and time of the POST request."
    },
    "markdown": {
      "type": "boolean",
      "description": "Indicates whether the post uses markdown syntax."
    },
    "id": {
      "type": "integer",
      "description": "The ID of the post to edit."
    },
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "id",
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.post.reblog.post
Reblogs a post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The post type.",
      "enum": [
        "text",
        "photo",
        "quote",
        "link",
        "chat",
        "audio",
        "video"
      ]
    },
    "tags": {
      "type": "string",
      "description": "Comma-separated tags for this post."
    },
    "tweet": {
      "type": "string",
      "description": "Manages the autotweet (if enabled) for this post: set to off for no tweet, or enter text to override the default tweet"
    },
    "date": {
      "type": "string",
      "description": "The GMT date and time of the post, as a string. Default is the date and time of the POST request."
    },
    "markdown": {
      "type": "boolean",
      "description": "Indicates whether the post uses markdown syntax."
    },
    "id": {
      "type": "integer",
      "description": "The ID of the reblogged post on tumblelog. Default is the next available ID."
    },
    "reblog_key": {
      "type": "integer",
      "description": "The reblog key for the reblogged post – get the reblog key with a /posts request"
    },
    "comment": {
      "type": "string",
      "description": "A comment added to the reblogged post."
    },
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "reblog_key",
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.base_hostname.post.delete.post
Deletes a post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The ID of the post to delete."
    },
    "base-hostname": {
      "type": "string",
      "description": "The unique hostname of the blog."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "base-hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.dashboard.get
Use this method to retrieve the dashboard that matches the OAuth credentials submitted with the request.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results to return: 1–20, inclusive",
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "description": "Post number to start at.",
      "minimum": 1
    },
    "type": {
      "type": "string",
      "description": "The type of post to return.",
      "enum": [
        "text",
        "photo",
        "quote",
        "link",
        "chat",
        "audio",
        "video",
        "question"
      ]
    },
    "since_id": {
      "type": "integer",
      "description": "Return posts that have appeared after this ID. Use this parameter to page through the results: first get a set of posts, and then get posts since the last ID of the previous set."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: user.likes.get
Use this method to retrieve the liked posts that match the OAuth credentials submitted with the request.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results to return: 1–20, inclusive",
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "description": "Liked post number to start at.",
      "minimum": 1
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: user.following.get
Use this method to retrieve the blogs followed by the user whose OAuth credentials are submitted with the request.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results to return: 1–20, inclusive",
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "description": "Result number to start at.",
      "minimum": 1
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: user.follow.post
Follow a blog.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "description": "The URL of the blog to follow."
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
{}
```
## Operation: user.unfollow.post
Unfollow a blog.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "description": "The URL of the blog to unfollow."
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
{}
```
