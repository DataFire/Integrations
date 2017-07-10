# @datafire/github
Powerful collaboration, code review, and code management for open source and private projects.


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
## Operation: emojis.get
Lists all the emojis available to use on GitHub.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/emojis"
}
```
## Operation: events.get
List public events.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events"
}
```
## Operation: feeds.get
List Feeds.
GitHub provides several timeline resources in Atom format. The Feeds API
 lists all the feeds available to the authenticating user.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/feeds"
}
```
## Operation: gists.get
List the authenticated user's gists or if called anonymously, this will
return all public gists.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "since": {
      "type": "string",
      "description": "Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.\nOnly gists updated at or after this time are returned.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gists"
}
```
## Operation: gists.post
Create a gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/postGist"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gist"
}
```
## Operation: gists.public.get
List all public gists.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "since": {
      "type": "string",
      "description": "Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.\nOnly gists updated at or after this time are returned.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gists"
}
```
## Operation: gists.starred.get
List the authenticated user's starred gists.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "since": {
      "type": "string",
      "description": "Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.\nOnly gists updated at or after this time are returned.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gists"
}
```
## Operation: gists.id.delete
Delete a gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gists.id.get
Get a single gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gist"
}
```
## Operation: gists.id.patch
Edit a gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/patchGist"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gist"
}
```
## Operation: gists.id.comments.get
List comments on a gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comments"
}
```
## Operation: gists.id.comments.post
Create a commen

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/commentBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comment"
}
```
## Operation: gists.id.comments.commentId.delete
Delete a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gists.id.comments.commentId.get
Get a single comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comment"
}
```
## Operation: gists.id.comments.commentId.patch
Edit a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/comment"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "commentId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comment"
}
```
## Operation: gists.id.forks.post
Fork a gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gists.id.star.delete
Unstar a gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gists.id.star.get
Check if a gist is starred.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gists.id.star.put
Star a gist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of gist."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gitignore.templates.get
Listing available templates.
List all templates available to pass as an option when creating a repository.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitignore"
}
```
## Operation: gitignore.templates.language.get
Get a single template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "language": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitignore-lang"
}
```
## Operation: issues.get
List issues.
List all issues across all the authenticated user's visible repositories.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string",
      "description": "Issues assigned to you / created by you / mentioning you / you're\nsubscribed to updates for / All issues the authenticated user can see\n",
      "enum": [
        "assigned",
        "created",
        "mentioned",
        "subscribed",
        "all"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "open",
        "closed"
      ]
    },
    "labels": {
      "type": "string",
      "description": "String list of comma separated Label names. Example - bug,ui,@high."
    },
    "sort": {
      "type": "string",
      "enum": [
        "created",
        "updated",
        "comments"
      ]
    },
    "direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "since": {
      "type": "string",
      "description": "Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nOnly issues updated at or after this time are returned.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "filter",
    "state",
    "labels",
    "sort",
    "direction"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issues"
}
```
## Operation: legacy.issues.search.owner.repository.state.keyword.get
Find issues by state and keyword.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "keyword": {
      "type": "string",
      "description": "The search term."
    },
    "state": {
      "type": "string",
      "description": "Indicates the state of the issues to return. Can be either open or closed.",
      "enum": [
        "open",
        "closed"
      ]
    },
    "owner": {
      "type": "string"
    },
    "repository": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "keyword",
    "state",
    "owner",
    "repository"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-issues-by-keyword"
}
```
## Operation: legacy.repos.search.keyword.get
Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "keyword": {
      "type": "string",
      "description": "The search term"
    },
    "order": {
      "type": "string",
      "description": "The sort field. if sort param is provided. Can be either asc or desc.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "language": {
      "type": "string",
      "description": "Filter results by language"
    },
    "start_page": {
      "type": "string",
      "description": "The page number to fetch"
    },
    "sort": {
      "type": "string",
      "description": "The sort field. One of stars, forks, or updated. Default: results are sorted by best match.",
      "enum": [
        "updated",
        "stars",
        "forks"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "keyword"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-repositories-by-keyword"
}
```
## Operation: legacy.user.email.email.get
This API call is added for compatibility reasons only.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The email address"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-user-by-email"
}
```
## Operation: legacy.user.search.keyword.get
Find users by keyword.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "keyword": {
      "type": "string",
      "description": "The search term"
    },
    "order": {
      "type": "string",
      "description": "The sort field. if sort param is provided. Can be either asc or desc.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "start_page": {
      "type": "string",
      "description": "The page number to fetch"
    },
    "sort": {
      "type": "string",
      "description": "The sort field. One of stars, forks, or updated. Default: results are sorted by best match.",
      "enum": [
        "updated",
        "stars",
        "forks"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "keyword"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-users-by-keyword"
}
```
## Operation: markdown.post
Render an arbitrary Markdown document

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/markdown"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: markdown.raw.post
Render a Markdown document in raw mode

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: meta.get
This gives some information about GitHub.com, the service.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/meta"
}
```
## Operation: networks.owner.repo.events.get
List public events for a network of repositories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of the owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events"
}
```
## Operation: notifications.get
List your notifications.
List all notifications for the current user, grouped by repository.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "all": {
      "type": "boolean",
      "description": "True to show notifications marked as read."
    },
    "participating": {
      "type": "boolean",
      "description": "True to show only notifications in which the user is directly participating\nor mentioned.\n"
    },
    "since": {
      "type": "string",
      "description": "The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nExample: \"2012-10-09T23:39:01Z\".\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: notifications.put
Mark as read.
Marking a notification as "read" removes it from the default view on GitHub.com.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/notificationMarkRead"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notifications.threads.id.get
View a single thread.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of thread."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: notifications.threads.id.patch
Mark a thread as read

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of thread."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notifications.threads.id.subscription.delete
Delete a Thread Subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of thread."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notifications.threads.id.subscription.get
Get a Thread Subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of thread."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subscription"
}
```
## Operation: notifications.threads.id.subscription.put
Set a Thread Subscription.
This lets you subscribe to a thread, or ignore it. Subscribing to a thread
is unnecessary if the user is already subscribed to the repository. Ignoring
a thread will mute all future notifications (until you comment or get @mentioned).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of thread."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/putSubscription"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subscription"
}
```
## Operation: orgs.org.get
Get an Organization.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/organization"
}
```
## Operation: orgs.org.patch
Edit an Organization.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/patchOrg"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/organization"
}
```
## Operation: orgs.org.events.get
List public events for an organization.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events"
}
```
## Operation: orgs.org.issues.get
List issues.
List all issues for a given organization for the authenticated user.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "filter": {
      "type": "string",
      "description": "Issues assigned to you / created by you / mentioning you / you're\nsubscribed to updates for / All issues the authenticated user can see\n",
      "enum": [
        "assigned",
        "created",
        "mentioned",
        "subscribed",
        "all"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "open",
        "closed"
      ]
    },
    "labels": {
      "type": "string",
      "description": "String list of comma separated Label names. Example - bug,ui,@high."
    },
    "sort": {
      "type": "string",
      "enum": [
        "created",
        "updated",
        "comments"
      ]
    },
    "direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "since": {
      "type": "string",
      "description": "Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nOnly issues updated at or after this time are returned.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "filter",
    "state",
    "labels",
    "sort",
    "direction"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issues"
}
```
## Operation: orgs.org.members.get
Members list.
List all users who are members of an organization. A member is a user tha
belongs to at least 1 team in the organization. If the authenticated user
is also an owner of this organization then both concealed and public members
will be returned. If the requester is not an owner of the organization the
query will be redirected to the public members list.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: orgs.org.members.username.delete
Remove a member.
Removing a user from this list will remove them from all teams and they
will no longer have any access to the organization's repositories.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "username": {
      "type": "string",
      "description": "Name of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgs.org.members.username.get
Check if a user is, publicly or privately, a member of the organization.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "username": {
      "type": "string",
      "description": "Name of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgs.org.public_members.get
Public members list.
Members of an organization can choose to have their membership publicized
or not.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: orgs.org.public_members.username.delete
Conceal a user's membership.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "username": {
      "type": "string",
      "description": "Name of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgs.org.public_members.username.get
Check public membership.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "username": {
      "type": "string",
      "description": "Name of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgs.org.public_members.username.put
Publicize a user's membership.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "username": {
      "type": "string",
      "description": "Name of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgs.org.repos.get
List repositories for the specified org.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "type": {
      "type": "string",
      "enum": [
        "all",
        "public",
        "private",
        "forks",
        "sources",
        "member"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repos"
}
```
## Operation: orgs.org.repos.post
Create a new repository for the authenticated user. OAuth users must supply
repo scope.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/postRepo"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repos"
}
```
## Operation: orgs.org.teams.get
List teams.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "org"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/teams"
}
```
## Operation: orgs.org.teams.post
Create team.
In order to create a team, the authenticated user must be an owner of organization.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "org": {
      "type": "string",
      "description": "Name of organisation."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/orgTeamsPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "org",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/team"
}
```
## Operation: rate_limit.get
Get your current rate limit status
Note: Accessing this endpoint does not count against your rate limit.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/rate_limit"
}
```
## Operation: repos.owner.repo.delete
Delete a Repository.
Deleting a repository requires admin access. If OAuth is used, the delete_repo
scope is required.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.get
Get repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repo"
}
```
## Operation: repos.owner.repo.patch
Edit repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/repoEdit"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repo"
}
```
## Operation: repos.owner.repo.assignees.get
List assignees.
This call lists all the available assignees (owner + collaborators) to which
issues may be assigned.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/assignees"
}
```
## Operation: repos.owner.repo.assignees.assignee.get
Check assignee.
You may also check to see if a particular user is an assignee for a repository.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "assignee": {
      "type": "string",
      "description": "Login of the assignee."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "assignee"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.branches.get
Get list of branches

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/branches"
}
```
## Operation: repos.owner.repo.branches.branch.get
Get Branch

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "branch": {
      "type": "string",
      "description": "Name of the branch."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "branch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/branch"
}
```
## Operation: repos.owner.repo.collaborators.get
List.
When authenticating as an organization owner of an organization-owned
repository, all organization owners are included in the list of
collaborators. Otherwise, only users with access to the repository are
returned in the collaborators list.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: repos.owner.repo.collaborators.user.delete
Remove collaborator.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "user": {
      "type": "string",
      "description": "Login of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.collaborators.user.get
Check if user is a collaborator

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "user": {
      "type": "string",
      "description": "Login of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.collaborators.user.put
Add collaborator.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "user": {
      "type": "string",
      "description": "Login of the user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.comments.get
List commit comments for a repository.
Comments are ordered by ascending ID.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repoComments"
}
```
## Operation: repos.owner.repo.comments.commentId.delete
Delete a commit comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.comments.commentId.get
Get a single commit comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commitComments"
}
```
## Operation: repos.owner.repo.comments.commentId.patch
Update a commit comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/commentBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commitComments"
}
```
## Operation: repos.owner.repo.commits.get
List commits on a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "since": {
      "type": "string",
      "description": "The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nExample: \"2012-10-09T23:39:01Z\".\n"
    },
    "sha": {
      "type": "string",
      "description": "Sha or branch to start listing commits from."
    },
    "path": {
      "type": "string",
      "description": "Only commits containing this file path will be returned."
    },
    "author": {
      "type": "string",
      "description": "GitHub login, name, or email by which to filter by commit author."
    },
    "until": {
      "type": "string",
      "description": "ISO 8601 Date - Only commits before this date will be returned."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commits"
}
```
## Operation: repos.owner.repo.commits.ref.status.get
Get the combined Status for a specific Ref
The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details.
To access this endpoint during the preview period, you must provide a custom media type in the Accept header:
application/vnd.github.she-hulk-preview+json


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "ref": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "ref"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/refStatus"
}
```
## Operation: repos.owner.repo.commits.shaCode.get
Get a single commit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "shaCode": {
      "type": "string",
      "description": "SHA-1 code of the commit."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "shaCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commit"
}
```
## Operation: repos.owner.repo.commits.shaCode.comments.get
List comments for a single commitList comments for a single commit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "shaCode": {
      "type": "string",
      "description": "SHA-1 code of the commit."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "shaCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repoComments"
}
```
## Operation: repos.owner.repo.commits.shaCode.comments.post
Create a commit comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "shaCode": {
      "type": "string",
      "description": "SHA-1 code of the commit."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/commitBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "shaCode",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commitComments"
}
```
## Operation: repos.owner.repo.compare.baseId...headId.get
Compare two commits

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "baseId": {
      "type": "string"
    },
    "headId": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "baseId",
    "headId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/compare-commits"
}
```
## Operation: repos.owner.repo.contents.path.delete
Delete a file.
This method deletes a file in a repository.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "path": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/deleteFileBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "path",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/deleteFile"
}
```
## Operation: repos.owner.repo.contents.path.get
Get contents.
This method returns the contents of a file or directory in a repository.
Files and symlinks support a custom media type for getting the raw content.
Directories and submodules do not support custom media types.
Note: This API supports files up to 1 megabyte in size.
Here can be many outcomes. For details see "http://developer.github.com/v3/repos/contents/"


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "path": {
      "type": "string"
    },
    "path_query": {
      "type": "string",
      "description": "The content path."
    },
    "ref": {
      "type": "string",
      "description": "The String name of the Commit/Branch/Tag. Defaults to 'master'."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "path"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contents-path"
}
```
## Operation: repos.owner.repo.contents.path.put
Create a file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "path": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/createFileBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "path",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/createFile"
}
```
## Operation: repos.owner.repo.contributors.get
Get list of contributors.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "anon": {
      "type": "string",
      "description": "Set to 1 or true to include anonymous contributors in results."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "anon"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contributors"
}
```
## Operation: repos.owner.repo.deployments.get
Users with pull access can view deployments for a repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repo-deployments"
}
```
## Operation: repos.owner.repo.deployments.post
Users with push access can create a deployment for a given ref

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/deployment"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/deployment-resp"
}
```
## Operation: repos.owner.repo.deployments.id.statuses.get
Users with pull access can view deployment statuses for a deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "integer",
      "description": "The Deployment ID to list the statuses from."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/deployment-statuses"
}
```
## Operation: repos.owner.repo.deployments.id.statuses.post
Create a Deployment Status
Users with push access can create deployment statuses for a given deployment:


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "integer",
      "description": "The Deployment ID to list the statuses from."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/deployment-statuses-create"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.downloads.get
Deprecated. List downloads for a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/downloads"
}
```
## Operation: repos.owner.repo.downloads.downloadId.delete
Deprecated. Delete a download.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "downloadId": {
      "type": "integer",
      "description": "Id of download."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "downloadId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.downloads.downloadId.get
Deprecated. Get a single download.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "downloadId": {
      "type": "integer",
      "description": "Id of download."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "downloadId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/downloads"
}
```
## Operation: repos.owner.repo.events.get
Get list of repository events.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events"
}
```
## Operation: repos.owner.repo.forks.get
List forks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "sort": {
      "type": "string",
      "enum": [
        "newes",
        "oldes",
        "watchers"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/forks"
}
```
## Operation: repos.owner.repo.forks.post
Create a fork.
Forking a Repository happens asynchronously. Therefore, you may have to wai
a short period before accessing the git objects. If this takes longer than 5
minutes, be sure to contact Support.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/forkBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/fork"
}
```
## Operation: repos.owner.repo.git.blobs.post
Create a Blob.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/blob"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/blobs"
}
```
## Operation: repos.owner.repo.git.blobs.shaCode.get
Get a Blob.
Since blobs can be any arbitrary binary data, the input and responses for
the blob API takes an encoding parameter that can be either utf-8 or
base64. If your data cannot be losslessly sent as a UTF-8 string, you can
base64 encode it.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "shaCode": {
      "type": "string",
      "description": "SHA-1 code."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "shaCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/blob"
}
```
## Operation: repos.owner.repo.git.commits.post
Create a Commit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/repoCommitBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitCommit"
}
```
## Operation: repos.owner.repo.git.commits.shaCode.get
Get a Commit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "shaCode": {
      "type": "string",
      "description": "SHA-1 code."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "shaCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repoCommit"
}
```
## Operation: repos.owner.repo.git.refs.get
Get all References

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/refs"
}
```
## Operation: repos.owner.repo.git.refs.post
Create a Reference

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/refsBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/headBranch"
}
```
## Operation: repos.owner.repo.git.refs.ref.delete
Delete a Reference
Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a 
Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "ref": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "ref"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.git.refs.ref.get
Get a Reference

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "ref": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "ref"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/headBranch"
}
```
## Operation: repos.owner.repo.git.refs.ref.patch
Update a Reference

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "ref": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/gitRefPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "ref",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/headBranch"
}
```
## Operation: repos.owner.repo.git.tags.post
Create a Tag Object.
Note that creating a tag object does not create the reference that makes a
tag in Git. If you want to create an annotated tag in Git, you have to do
this call to create the tag object, and then create the refs/tags/[tag]
reference. If you want to create a lightweight tag, you only have to create
the tag reference - this call would be unnecessary.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: repos.owner.repo.git.tags.shaCode.get
Get a Tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "shaCode": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "shaCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tag"
}
```
## Operation: repos.owner.repo.git.trees.post
Create a Tree.
The tree creation API will take nested entries as well. If both a tree and
a nested path modifying that tree are specified, it will overwrite the
contents of that tree with the new path contents and write a new tree out.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/tree"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/trees"
}
```
## Operation: repos.owner.repo.git.trees.shaCode.get
Get a Tree.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "shaCode": {
      "type": "string",
      "description": "Tree SHA."
    },
    "recursive": {
      "type": "integer",
      "description": "Get a Tree Recursively. (0 or 1)"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "shaCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tree"
}
```
## Operation: repos.owner.repo.hooks.get
Get list of hooks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/hook"
}
```
## Operation: repos.owner.repo.hooks.post
Create a hook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/hookBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/hook"
}
```
## Operation: repos.owner.repo.hooks.hookId.delete
Delete a hook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "hookId": {
      "type": "integer",
      "description": "Id of hook."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "hookId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.hooks.hookId.get
Get single hook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "hookId": {
      "type": "integer",
      "description": "Id of hook."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "hookId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/hook"
}
```
## Operation: repos.owner.repo.hooks.hookId.patch
Edit a hook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "hookId": {
      "type": "integer",
      "description": "Id of hook."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/hookBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "hookId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/hook"
}
```
## Operation: repos.owner.repo.hooks.hookId.tests.post
Test a push hook.
This will trigger the hook with the latest push to the current repository
if the hook is subscribed to push events. If the hook is not subscribed
to push events, the server will respond with 204 but no test POST will
be generated.
Note: Previously /repos/:owner/:repo/hooks/:id/tes


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "hookId": {
      "type": "integer",
      "description": "Id of hook."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "hookId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.issues.get
List issues for a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "filter": {
      "type": "string",
      "description": "Issues assigned to you / created by you / mentioning you / you're\nsubscribed to updates for / All issues the authenticated user can see\n",
      "enum": [
        "assigned",
        "created",
        "mentioned",
        "subscribed",
        "all"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "open",
        "closed"
      ]
    },
    "labels": {
      "type": "string",
      "description": "String list of comma separated Label names. Example - bug,ui,@high."
    },
    "sort": {
      "type": "string",
      "enum": [
        "created",
        "updated",
        "comments"
      ]
    },
    "direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "since": {
      "type": "string",
      "description": "Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nOnly issues updated at or after this time are returned.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "filter",
    "state",
    "labels",
    "sort",
    "direction"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issues"
}
```
## Operation: repos.owner.repo.issues.post
Create an issue.
Any user with pull access to a repository can create an issue.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/issue"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issue"
}
```
## Operation: repos.owner.repo.issues.comments.get
List comments in a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "direction": {
      "type": "string",
      "description": "Ignored without 'sort' parameter."
    },
    "sort": {
      "type": "string",
      "description": "",
      "enum": [
        "created",
        "updated"
      ]
    },
    "since": {
      "type": "string",
      "description": "The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nExample: \"2012-10-09T23:39:01Z\".\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issuesComments"
}
```
## Operation: repos.owner.repo.issues.comments.commentId.delete
Delete a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "ID of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.issues.comments.commentId.get
Get a single comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "ID of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issuesComment"
}
```
## Operation: repos.owner.repo.issues.comments.commentId.patch
Edit a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "ID of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/commentBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issuesComment"
}
```
## Operation: repos.owner.repo.issues.events.get
List issue events for a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events"
}
```
## Operation: repos.owner.repo.issues.events.eventId.get
Get a single event.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "eventId": {
      "type": "integer",
      "description": "Id of the event."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "eventId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/event"
}
```
## Operation: repos.owner.repo.issues.number.get
Get a single issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issue"
}
```
## Operation: repos.owner.repo.issues.number.patch
Edit an issue.
Issue owners and users with push access can edit an issue.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/issue"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issue"
}
```
## Operation: repos.owner.repo.issues.number.comments.get
List comments on an issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issuesComments"
}
```
## Operation: repos.owner.repo.issues.number.comments.post
Create a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/commentBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issuesComment"
}
```
## Operation: repos.owner.repo.issues.number.events.get
List events for an issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events"
}
```
## Operation: repos.owner.repo.issues.number.labels.delete
Remove all labels from an issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.issues.number.labels.get
List labels on an issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/labels"
}
```
## Operation: repos.owner.repo.issues.number.labels.post
Add labels to an issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/emailsPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/label"
}
```
## Operation: repos.owner.repo.issues.number.labels.put
Replace all labels for an issue.
Sending an empty array ([]) will remove all Labels from the Issue.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/emailsPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/label"
}
```
## Operation: repos.owner.repo.issues.number.labels.name.delete
Remove a label from an issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of issue."
    },
    "name": {
      "type": "string",
      "description": "Name of the label."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.keys.get
Get list of keys.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/keys"
}
```
## Operation: repos.owner.repo.keys.post
Create a key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/user-keys-post"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-keys-keyId"
}
```
## Operation: repos.owner.repo.keys.keyId.delete
Delete a key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "keyId": {
      "type": "integer",
      "description": "Id of key."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "keyId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.keys.keyId.get
Get a key

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "keyId": {
      "type": "integer",
      "description": "Id of key."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "keyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-keys-keyId"
}
```
## Operation: repos.owner.repo.labels.get
List all labels for this repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/labels"
}
```
## Operation: repos.owner.repo.labels.post
Create a label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/emailsPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/label"
}
```
## Operation: repos.owner.repo.labels.name.delete
Delete a label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "name": {
      "type": "string",
      "description": "Name of the label."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.labels.name.get
Get a single label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "name": {
      "type": "string",
      "description": "Name of the label."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/label"
}
```
## Operation: repos.owner.repo.labels.name.patch
Update a label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "name": {
      "type": "string",
      "description": "Name of the label."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/emailsPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "name",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/label"
}
```
## Operation: repos.owner.repo.languages.get
List languages.
List languages for the specified repository. The value on the right of a
language is the number of bytes of code written in that language.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/languages"
}
```
## Operation: repos.owner.repo.merges.post
Perform a merge.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/mergesBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mergesSuccessful"
}
```
## Operation: repos.owner.repo.milestones.get
List milestones for a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "state": {
      "type": "string",
      "description": "String to filter by state.",
      "enum": [
        "open",
        "closed"
      ]
    },
    "direction": {
      "type": "string",
      "description": "Ignored without 'sort' parameter."
    },
    "sort": {
      "type": "string",
      "description": "",
      "enum": [
        "due_date",
        "completeness"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/milestone"
}
```
## Operation: repos.owner.repo.milestones.post
Create a milestone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/milestoneUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/milestone"
}
```
## Operation: repos.owner.repo.milestones.number.delete
Delete a milestone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of milestone."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.milestones.number.get
Get a single milestone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of milestone."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/milestone"
}
```
## Operation: repos.owner.repo.milestones.number.patch
Update a milestone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of milestone."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/milestoneUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/milestone"
}
```
## Operation: repos.owner.repo.milestones.number.labels.get
Get labels for every issue in a milestone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Number of milestone."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/labels"
}
```
## Operation: repos.owner.repo.notifications.get
List your notifications in a repository
List all notifications for the current user.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "all": {
      "type": "boolean",
      "description": "True to show notifications marked as read."
    },
    "participating": {
      "type": "boolean",
      "description": "True to show only notifications in which the user is directly participating\nor mentioned.\n"
    },
    "since": {
      "type": "string",
      "description": "The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nExample: \"2012-10-09T23:39:01Z\".\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: repos.owner.repo.notifications.put
Mark notifications as read in a repository.
Marking all notifications in a repository as "read" removes them from the
default view on GitHub.com.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/notificationMarkRead"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.pulls.get
List pull requests.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "state": {
      "type": "string",
      "description": "String to filter by state.",
      "enum": [
        "open",
        "closed"
      ]
    },
    "head": {
      "type": "string",
      "description": "Filter pulls by head user and branch name in the format of 'user:ref-name'.\nExample: github:new-script-format.\n"
    },
    "base": {
      "type": "string",
      "description": "Filter pulls by base branch name. Example - gh-pages."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pulls"
}
```
## Operation: repos.owner.repo.pulls.post
Create a pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/pullsPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pulls"
}
```
## Operation: repos.owner.repo.pulls.comments.get
List comments in a repository.
By default, Review Comments are ordered by ascending ID.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "direction": {
      "type": "string",
      "description": "Ignored without 'sort' parameter."
    },
    "sort": {
      "type": "string",
      "description": "",
      "enum": [
        "created",
        "updated"
      ]
    },
    "since": {
      "type": "string",
      "description": "The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nExample: \"2012-10-09T23:39:01Z\".\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issuesComments"
}
```
## Operation: repos.owner.repo.pulls.comments.commentId.delete
Delete a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.pulls.comments.commentId.get
Get a single comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullsComment"
}
```
## Operation: repos.owner.repo.pulls.comments.commentId.patch
Edit a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "commentId": {
      "type": "integer",
      "description": "Id of comment."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/commentBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "commentId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullsComment"
}
```
## Operation: repos.owner.repo.pulls.number.get
Get a single pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullRequest"
}
```
## Operation: repos.owner.repo.pulls.number.patch
Update a pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/pullUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repo"
}
```
## Operation: repos.owner.repo.pulls.number.comments.get
List comments on a pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullsComment"
}
```
## Operation: repos.owner.repo.pulls.number.comments.post
Create a comment.
  #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ )
  description: |
    Alternative Input.
    Instead of passing commit_id, path, and position you can reply to an
    existing Pull Request Comment like this:

        body
           Required string
        in_reply_to
           Required number - Comment id to reply to.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/pullsCommentPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullsComment"
}
```
## Operation: repos.owner.repo.pulls.number.commits.get
List commits on a pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commits"
}
```
## Operation: repos.owner.repo.pulls.number.files.get
List pull requests files.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pulls"
}
```
## Operation: repos.owner.repo.pulls.number.merge.get
Get if a pull request has been merged.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.pulls.number.merge.put
Merge a pull request (Merge Button's)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "number": {
      "type": "integer",
      "description": "Id of pull."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/mergePullBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "number",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/merge"
}
```
## Operation: repos.owner.repo.readme.get
Get the README.
This method returns the preferred README for a repository.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "ref": {
      "type": "string",
      "description": "The String name of the Commit/Branch/Tag. Defaults to master."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contents-path"
}
```
## Operation: repos.owner.repo.releases.get
Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/releases"
}
```
## Operation: repos.owner.repo.releases.post
Create a release
Users with push access to the repository can create a release.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/release-create"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/release"
}
```
## Operation: repos.owner.repo.releases.assets.id.delete
Delete a release asset

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.releases.assets.id.get
Get a single release asset

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/asset"
}
```
## Operation: repos.owner.repo.releases.assets.id.patch
Edit a release asset
Users with push access to the repository can edit a release asset.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/assetPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/asset"
}
```
## Operation: repos.owner.repo.releases.id.delete
Users with push access to the repository can delete a release.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.releases.id.get
Get a single release

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/release"
}
```
## Operation: repos.owner.repo.releases.id.patch
Users with push access to the repository can edit a release

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/release-create"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/release"
}
```
## Operation: repos.owner.repo.releases.id.assets.get
List assets for a release

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "id": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/assets"
}
```
## Operation: repos.owner.repo.stargazers.get
List Stargazers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: repos.owner.repo.stats.code_frequency.get
Get the number of additions and deletions per week.
Returns a weekly aggregate of the number of additions and deletions pushed
to a repository.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/codeFrequencyStats"
}
```
## Operation: repos.owner.repo.stats.commit_activity.get
Get the last year of commit activity data.
Returns the last year of commit activity grouped by week. The days array
is a group of commits per day, starting on Sunday.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commitActivityStats"
}
```
## Operation: repos.owner.repo.stats.contributors.get
Get contributors list with additions, deletions, and commit counts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contributorsStats"
}
```
## Operation: repos.owner.repo.stats.participation.get
Get the weekly commit count for the repo owner and everyone else.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/participationStats"
}
```
## Operation: repos.owner.repo.stats.punch_card.get
Get the number of commits per hour in each day.
Each array contains the day number, hour number, and number of commits
0-6 Sunday - Saturday
0-23 Hour of day
Number of commits

For example, [2, 14, 25] indicates that there were 25 total commits, during
the 2.00pm hour on Tuesdays. All times are based on the time zone of
individual commits.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/codeFrequencyStats"
}
```
## Operation: repos.owner.repo.statuses.ref.get
List Statuses for a specific Ref.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "ref": {
      "type": "string",
      "description": "Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "ref"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ref"
}
```
## Operation: repos.owner.repo.statuses.ref.post
Create a Status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "ref": {
      "type": "string",
      "description": "Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/headBranch"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "ref",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ref"
}
```
## Operation: repos.owner.repo.subscribers.get
List watchers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: repos.owner.repo.subscription.delete
Delete a Repository Subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repos.owner.repo.subscription.get
Get a Repository Subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subscribition"
}
```
## Operation: repos.owner.repo.subscription.put
Set a Repository Subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/subscribitionBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subscribition"
}
```
## Operation: repos.owner.repo.tags.get
Get list of tags.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tags"
}
```
## Operation: repos.owner.repo.teams.get
Get list of teams

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/teams"
}
```
## Operation: repos.owner.repo.watchers.get
List Stargazers. New implementation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: repos.owner.repo.archive_format.path.get
Get archive link.
This method will return a 302 to a URL to download a tarball or zipball
archive for a repository. Please make sure your HTTP framework is
configured to follow redirects or you will need to use the Location header
to make a second GET request.
Note: For private repositories, these links are temporary and expire quickly.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "archive_format": {
      "type": "string",
      "enum": [
        "tarball",
        "zipball"
      ]
    },
    "path": {
      "type": "string",
      "description": "Valid Git reference, defaults to 'master'."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo",
    "archive_format",
    "path"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.get
List all public repositories.
This provides a dump of every public repository, in the order that they
were created.
Note: Pagination is powered exclusively by the since parameter. is the
Link header to get the URL for the next page of repositories.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "since": {
      "type": "string",
      "description": "The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nExample: \"2012-10-09T23:39:01Z\".\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repositories"
}
```
## Operation: search.code.get
Search code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "description": "The sort field. if sort param is provided. Can be either asc or desc.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "q": {
      "type": "string",
      "description": "The search terms. This can be any combination of the supported code\nsearch parameters:\n'Search In' Qualifies which fields are searched. With this qualifier\nyou can restrict the search to just the file contents, the file path,\nor both.\n'Languages' Searches code based on the language it's written in.\n'Forks' Filters repositories based on the number of forks, and/or\nwhether code from forked repositories should be included in the results\nat all.\n'Size' Finds files that match a certain size (in bytes).\n'Path' Specifies the path that the resulting file must be at.\n'Extension' Matches files with a certain extension.\n'Users' or 'Repositories' Limits searches to a specific user or repository.\n"
    },
    "sort": {
      "type": "string",
      "description": "Can only be 'indexed', which indicates how recently a file has been indexed\nby the GitHub search infrastructure. If not provided, results are sorted\nby best match.\n",
      "enum": [
        "indexed"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-code"
}
```
## Operation: search.issues.get
Find issues by state and keyword. (This method returns up to 100 results per page.)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "description": "The sort field. if sort param is provided. Can be either asc or desc.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "q": {
      "type": "string",
      "description": "The q search term can also contain any combination of the supported issue search qualifiers:"
    },
    "sort": {
      "type": "string",
      "description": "The sort field. Can be comments, created, or updated. Default: results are sorted by best match.",
      "enum": [
        "updated",
        "created",
        "comments"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-issues"
}
```
## Operation: search.repositories.get
Search repositories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "description": "The sort field. if sort param is provided. Can be either asc or desc.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "q": {
      "type": "string",
      "description": "The search terms. This can be any combination of the supported repository\nsearch parameters:\n'Search In' Qualifies which fields are searched. With this qualifier you\ncan restrict the search to just the repository name, description, readme,\nor any combination of these.\n'Size' Finds repositories that match a certain size (in kilobytes).\n'Forks' Filters repositories based on the number of forks, and/or whether\nforked repositories should be included in the results at all.\n'Created' and 'Last Updated' Filters repositories based on times of\ncreation, or when they were last updated.\n'Users or Repositories' Limits searches to a specific user or repository.\n'Languages' Searches repositories based on the language they are written in.\n'Stars' Searches repositories based on the number of stars.\n"
    },
    "sort": {
      "type": "string",
      "description": "If not provided, results are sorted by best match.",
      "enum": [
        "stars",
        "forks",
        "updated"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-repositories"
}
```
## Operation: search.users.get
Search users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "description": "The sort field. if sort param is provided. Can be either asc or desc.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "q": {
      "type": "string",
      "description": "The search terms. This can be any combination of the supported user\nsearch parameters:\n'Search In' Qualifies which fields are searched. With this qualifier you\ncan restrict the search to just the username, public email, full name,\nlocation, or any combination of these.\n'Repository count' Filters users based on the number of repositories they\nhave.\n'Location' Filter users by the location indicated in their profile.\n'Language' Search for users that have repositories that match a certain\nlanguage.\n'Created' Filter users based on when they joined.\n'Followers' Filter users based on the number of followers they have.\n"
    },
    "sort": {
      "type": "string",
      "description": "If not provided, results are sorted by best match.",
      "enum": [
        "followers",
        "repositories",
        "joined"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/search-users"
}
```
## Operation: teams.teamId.delete
Delete team.
In order to delete a team, the authenticated user must be an owner of the
org that the team is associated with.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.get
Get team.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/team"
}
```
## Operation: teams.teamId.patch
Edit team.
In order to edit a team, the authenticated user must be an owner of the org
that the team is associated with.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/editTeam"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/team"
}
```
## Operation: teams.teamId.members.get
List team members.
In order to list members in a team, the authenticated user must be a member
of the team.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: teams.teamId.members.username.delete
The "Remove team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.

Remove team member.
In order to remove a user from a team, the authenticated user must have 'admin'
permissions to the team or be an owner of the org that the team is associated
with.
NOTE This does not delete the user, it just remove them from the team.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "username": {
      "type": "string",
      "description": "Name of a member."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.members.username.get
The "Get team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.

Get team member.
In order to get if a user is a member of a team, the authenticated user mus
be a member of the team.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "username": {
      "type": "string",
      "description": "Name of a member."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.members.username.put
The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.

Add team member.
In order to add a user to a team, the authenticated user must have 'admin'
permissions to the team or be an owner of the org that the team is associated
with.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "username": {
      "type": "string",
      "description": "Name of a member."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.memberships.username.delete
Remove team membership.
In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "username": {
      "type": "string",
      "description": "Name of a member."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.memberships.username.get
Get team membership.
In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "username": {
      "type": "string",
      "description": "Name of a member."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/teamMembership"
}
```
## Operation: teams.teamId.memberships.username.put
Add team membership.
In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with.

If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team.

If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "username": {
      "type": "string",
      "description": "Name of a member."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/teamMembership"
}
```
## Operation: teams.teamId.repos.get
List team repos

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/teamRepos"
}
```
## Operation: teams.teamId.repos.org.repo.put
In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "org": {
      "type": "string",
      "description": "Name of a organization."
    },
    "repo": {
      "type": "string",
      "description": "Name of a repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "org",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.repos.owner.repo.delete
In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "owner": {
      "type": "string",
      "description": "Name of a repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of a repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.repos.owner.repo.get
Check if a team manages a repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "integer",
      "description": "Id of team."
    },
    "owner": {
      "type": "string",
      "description": "Name of a repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of a repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId",
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.get
Get the authenticated user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
## Operation: user.patch
Update the authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/user-update"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
## Operation: user.emails.delete
Delete email address(es).
You can include a single email address or an array of addresses.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/user-emails"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.emails.get
List email addresses for a user.
In the final version of the API, this method will return an array of hashes
with extended information for each email address indicating if the address
has been verified and if it's primary email address for GitHub.
Until API v3 is finalized, use the application/vnd.github.v3 media type to
get other response format.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-emails"
}
```
## Operation: user.emails.post
Add email address(es).
You can post a single email address or an array of addresses.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/emailsPost"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.followers.get
List the authenticated user's followers

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: user.following.get
List who the authenticated user is following.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: user.following.username.delete
Unfollow a user.
Unfollowing a user requires the user to be logged in and authenticated with
basic auth or OAuth with the user:follow scope.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.following.username.get
Check if you are following a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.following.username.put
Follow a user.
Following a user requires the user to be logged in and authenticated with
basic auth or OAuth with the user:follow scope.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.issues.get
List issues.
List all issues across owned and member repositories for the authenticated
user.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string",
      "description": "Issues assigned to you / created by you / mentioning you / you're\nsubscribed to updates for / All issues the authenticated user can see\n",
      "enum": [
        "assigned",
        "created",
        "mentioned",
        "subscribed",
        "all"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "open",
        "closed"
      ]
    },
    "labels": {
      "type": "string",
      "description": "String list of comma separated Label names. Example - bug,ui,@high."
    },
    "sort": {
      "type": "string",
      "enum": [
        "created",
        "updated",
        "comments"
      ]
    },
    "direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "since": {
      "type": "string",
      "description": "Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nOnly issues updated at or after this time are returned.\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "filter",
    "state",
    "labels",
    "sort",
    "direction"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issues"
}
```
## Operation: user.keys.get
List your public keys.
Lists the current user's keys. Management of public keys via the API requires
that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitignore"
}
```
## Operation: user.keys.post
Create a public key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/user-keys-post"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-keys-keyId"
}
```
## Operation: user.keys.keyId.delete
Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "keyId": {
      "type": "integer",
      "description": "ID of key."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "keyId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.keys.keyId.get
Get a single public key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "keyId": {
      "type": "integer",
      "description": "ID of key."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "keyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-keys-keyId"
}
```
## Operation: user.orgs.get
List public and private organizations for the authenticated user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitignore"
}
```
## Operation: user.repos.get
List repositories for the authenticated user. Note that this does not include
repositories owned by organizations which the user can access. You can lis
user organizations and list organization repositories separately.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "all",
        "public",
        "private",
        "forks",
        "sources",
        "member"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repos"
}
```
## Operation: user.repos.post
Create a new repository for the authenticated user. OAuth users must supply
repo scope.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/postRepo"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repos"
}
```
## Operation: user.starred.get
List repositories being starred by the authenticated user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "direction": {
      "type": "string",
      "description": "Ignored without 'sort' parameter."
    },
    "sort": {
      "type": "string",
      "description": "",
      "enum": [
        "created",
        "updated"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitignore"
}
```
## Operation: user.starred.owner.repo.delete
Unstar a repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of a repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of a repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.starred.owner.repo.get
Check if you are starring a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of a repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of a repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.starred.owner.repo.put
Star a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of a repository owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of a repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.subscriptions.get
List repositories being watched by the authenticated user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user-userId-subscribitions"
}
```
## Operation: user.subscriptions.owner.repo.delete
Stop watching a repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of the owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.subscriptions.owner.repo.get
Check if you are watching a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of the owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.subscriptions.owner.repo.put
Watch a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "Name of the owner."
    },
    "repo": {
      "type": "string",
      "description": "Name of repository."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "repo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.teams.get
List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/teams-list"
}
```
## Operation: users.get
Get all users.
This provides a dump of every user, in the order that they signed up for GitHub.
Note: Pagination is powered exclusively by the since parameter. Use the Link
header to get the URL for the next page of users.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "since": {
      "type": "integer",
      "description": "The integer ID of the last User that you've seen."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: users.username.get
Get a single user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: users.username.events.get
If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.username.events.orgs.org.get
This is the user's organization dashboard. You must be authenticated as the user to view this.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "org": {
      "type": "string"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "org"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.username.followers.get
List a user's followers

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/users"
}
```
## Operation: users.username.following.targetUser.get
Check if one user follows another.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "targetUser": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "targetUser"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.username.gists.get
List a users gists.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "since": {
      "type": "string",
      "description": "The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\nExample: \"2012-10-09T23:39:01Z\".\n"
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gists"
}
```
## Operation: users.username.keys.get
List public keys for a user.
Lists the verified public keys for a user. This is accessible by anyone.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitignore"
}
```
## Operation: users.username.orgs.get
List all public organizations for a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gitignore"
}
```
## Operation: users.username.received_events.get
These are events that you'll only see public events.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.username.received_events.public.get
List public events that a user has received

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.username.repos.get
List public repositories for the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "type": {
      "type": "string",
      "enum": [
        "all",
        "public",
        "private",
        "forks",
        "sources",
        "member"
      ]
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repos"
}
```
## Operation: users.username.starred.get
List repositories being starred by a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.username.subscriptions.get
List repositories being watched by a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of user."
    },
    "X-GitHub-Media-Type": {
      "type": "string",
      "description": "You can check the current version of media type in responses.\n"
    },
    "Accept": {
      "type": "string",
      "description": "Is used to set specified media type."
    },
    "X-RateLimit-Limit": {
      "type": "integer"
    },
    "X-RateLimit-Remaining": {
      "type": "integer"
    },
    "X-RateLimit-Reset": {
      "type": "integer"
    },
    "X-GitHub-Request-Id": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
