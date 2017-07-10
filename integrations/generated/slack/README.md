# @datafire/slack
A messaging app for teams

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
## Operation: authTest
Checks authentication and tells you who you are.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Authentication token"
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
## Operation: channelsHistory
Fetches history of messages and events from a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "latest": {
      "type": "string",
      "description": "Timestamp of the oldest recent seen message."
    },
    "oldest": {
      "type": "string",
      "description": "Timestamp of the latest previously seen message."
    },
    "count": {
      "type": "number",
      "description": "Number of messages to return, between 1 and 1000."
    },
    "has_more": {
      "type": "boolean"
    },
    "is_limited": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/channelsHistory"
}
```
## Operation: channelsInfo
Gets information about a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/searchAll"
}
```
## Operation: channelsInvite
Invites a user to a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "user": {
      "type": "string",
      "description": "User to invite to channel."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "user"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/channelsInvite"
}
```
## Operation: channelsJoin
Joins a channel, creating it if needed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of channel to join"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/channelsInvite"
}
```
## Operation: channelsLeave
Leaves a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ok"
}
```
## Operation: channelsList
Lists all channels in a Slack team.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "exclude_archived": {
      "type": "string",
      "description": "Don't return archived channels."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/channels"
}
```
## Operation: channelsMark
Sets the read cursor in a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "ts": {
      "type": "string",
      "description": "Timestamp of the most recently seen message."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "ts"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ok"
}
```
## Operation: channelsSetPurpose
Sets the purpose for a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "purpose": {
      "type": "string",
      "description": "The new purpose"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "purpose"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/purpose"
}
```
## Operation: channelsSetTopic
Sets the topic for a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "topic": {
      "type": "string",
      "description": "The new topic"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "topic"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/topic"
}
```
## Operation: chatDelete
Deletes a message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "ts": {
      "type": "string",
      "description": "Timestamp of the most recently seen message."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "ts"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/chatOk"
}
```
## Operation: chatPostMessage
Sends a message to a channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "text": {
      "type": "string",
      "description": "Text of the message to send. See below for an explanation of formatting."
    },
    "username": {
      "type": "string",
      "description": "Name of bot."
    },
    "parse": {
      "type": "string",
      "description": "Change how messages are treated. See below."
    },
    "link_names": {
      "type": "string",
      "description": "Find and link channel names and usernames."
    },
    "unfurl_links": {
      "type": "string",
      "description": "Pass 1 to enable unfurling of primarily text-based content."
    },
    "icon_url": {
      "type": "string",
      "description": "URL to an image to use as the icon for this message"
    },
    "icon_emoji": {
      "type": "string",
      "description": "emoji to use as the icon for this message. Overrides icon_url."
    },
    "attachments": {
      "type": "string",
      "description": "Structured message attachments."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "text"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/chatOk"
}
```
## Operation: chatUpdate
Updates a message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "text": {
      "type": "string",
      "description": "Text of the message to send. See below for an explanation of formatting."
    },
    "ts": {
      "type": "string",
      "description": "Timestamp of the most recently seen message."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "text",
    "ts"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/chatUpdate"
}
```
## Operation: emojiList
Lists custom emoji for a team.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/emojiList"
}
```
## Operation: filesInfo
Gets information about a team file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "file": {
      "type": "string",
      "description": "File to fetch info for"
    },
    "count": {
      "type": "number",
      "description": "Number of items to return per page."
    },
    "page": {
      "type": "number",
      "description": "Page number of results to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "file"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/fileObj"
}
```
## Operation: filesList
Lists and filters team files.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "file": {
      "type": "string",
      "description": "File to fetch info for"
    },
    "user": {
      "type": "string",
      "description": "Filter files created by a single user."
    },
    "ts_from": {
      "type": "string",
      "description": "Filter files created after this timestamp (inclusive)."
    },
    "ts_to": {
      "type": "string",
      "description": "Filter files created before this timestamp (inclusive)."
    },
    "types": {
      "type": "string",
      "description": "You can pass multiple values in the types argument, like types=posts,snippets.The default value is all, which does not filter the list.",
      "enum": [
        "pdfs",
        "zips",
        "posts",
        "images",
        "snippets",
        "gdocs",
        "all"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "file"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/files"
}
```
## Operation: filesUpload
Uploads or creates a file.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "file": {
      "type": "string",
      "description": "File contents via multipart/form-data."
    },
    "content": {
      "type": "string",
      "description": "File contents via a POST var."
    },
    "filetype": {
      "type": "string",
      "description": "Slack-internal file type identifier."
    },
    "filename": {
      "type": "string",
      "description": "Filename of file."
    },
    "title": {
      "type": "string",
      "description": "Title of file."
    },
    "initial_comment": {
      "type": "string",
      "description": "Initial comment to add to file."
    },
    "channels": {
      "type": "string",
      "description": "Comma separated list of channels to share the file into."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/fileObj"
}
```
## Operation: groupsHistory
Fetches history of messages and events from a private group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Group to fetch history for."
    },
    "latest": {
      "type": "string",
      "description": "Timestamp of the oldest recent seen message."
    },
    "oldest": {
      "type": "string",
      "description": "Timestamp of the latest previously seen message."
    },
    "count": {
      "type": "number",
      "description": "Number of messages to return, between 1 and 1000."
    },
    "has_more": {
      "type": "boolean"
    },
    "is_limited": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/channelsHistory"
}
```
## Operation: groupsList
Lists private groups that the calling user has access to.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "exclude_archived": {
      "type": "string",
      "description": "Don't return archived channels."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/groups"
}
```
## Operation: groupsMark
Sets the read cursor in a private group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Group to fetch history for."
    },
    "ts": {
      "type": "string",
      "description": "Timestamp of the most recently seen message."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "ts"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ok"
}
```
## Operation: groupsSetPurpose
Sets the purpose for a private group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Group to fetch history for."
    },
    "purpose": {
      "type": "string",
      "description": "The new purpose"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "purpose"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/purpose"
}
```
## Operation: groupsSetTopic
Sets the topic for a private group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "topic": {
      "type": "string",
      "description": "The new topic"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "topic"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/topic"
}
```
## Operation: imHistory
Fetches history of messages and events from direct message channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Direct message channel to fetch history for."
    },
    "latest": {
      "type": "string",
      "description": "Timestamp of the oldest recent seen message."
    },
    "oldest": {
      "type": "string",
      "description": "Timestamp of the latest previously seen message."
    },
    "count": {
      "type": "number",
      "description": "Number of messages to return, between 1 and 1000."
    },
    "has_more": {
      "type": "boolean"
    },
    "is_limited": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/channelsHistory"
}
```
## Operation: imList
Lists direct message channels for the calling user.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ims"
}
```
## Operation: imMark
Sets the read cursor in a direct message channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "channel": {
      "type": "string",
      "description": "Channel to fetch history for."
    },
    "ts": {
      "type": "string",
      "description": "Timestamp of the most recently seen message."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel",
    "ts"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ok"
}
```
## Operation: searchAll
Searches for messages and files matching a query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query. May contains booleans, etc."
    },
    "sort": {
      "type": "string",
      "description": "Return matches sorted by either score or timestamp.",
      "enum": [
        "timestamp",
        "score"
      ]
    },
    "sort_dir": {
      "type": "string",
      "description": "Change sort direction to ascending (asc) or descending (desc).",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "highlight": {
      "type": "string",
      "description": "Pass a value of 1 to enable query highlight markers ."
    },
    "count": {
      "type": "number",
      "description": "Number of items to return per page."
    },
    "page": {
      "type": "number",
      "description": "Page number of results to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/searchAll"
}
```
## Operation: searchFiles
Searches for files matching a query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query. May contains booleans, etc."
    },
    "sort": {
      "type": "string",
      "description": "Return matches sorted by either score or timestamp.",
      "enum": [
        "timestamp",
        "score"
      ]
    },
    "sort_dir": {
      "type": "string",
      "description": "Change sort direction to ascending (asc) or descending (desc).",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "highlight": {
      "type": "string",
      "description": "Pass a value of 1 to enable query highlight markers ."
    },
    "count": {
      "type": "number",
      "description": "Number of items to return per page."
    },
    "page": {
      "type": "number",
      "description": "Page number of results to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/searchFiles"
}
```
## Operation: searchMessages
Searches for messages matching a query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query. May contains booleans, etc."
    },
    "sort": {
      "type": "string",
      "description": "Return matches sorted by either score or timestamp.",
      "enum": [
        "timestamp",
        "score"
      ]
    },
    "sort_dir": {
      "type": "string",
      "description": "Change sort direction to ascending (asc) or descending (desc).",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "highlight": {
      "type": "string",
      "description": "Pass a value of 1 to enable query highlight markers ."
    },
    "count": {
      "type": "number",
      "description": "Number of items to return per page."
    },
    "page": {
      "type": "number",
      "description": "Page number of results to return."
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/searchMessages"
}
```
## Operation: starsList
Lists stars for a user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "user": {
      "type": "string",
      "description": "Show stars by this user. Defaults to the authed user."
    },
    "count": {
      "type": "number",
      "description": "Number of items to return per page."
    },
    "page": {
      "type": "number",
      "description": "Page number of results to return."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/starList"
}
```
## Operation: usersList
Lists all users in a Slack team.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/usersList"
}
```
