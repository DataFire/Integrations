# @datafire/pinboard
Store, manage and share bookmarks on Pinboard

## Operation: posts.update.get
Returns the most recent time a bookmark was added, updated or deleted. Use this before calling posts/all to see if the data has changed since the last fetch.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: posts.add.get
Add a new bookmark.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The URL of the item."
    },
    "description": {
      "type": "string",
      "description": "Title of the item. This field is unfortunately named 'description' for backwards compatibility with the delicious API."
    },
    "extended": {
      "type": "string",
      "description": "Description of the item. Called 'extended' for backwards compatibility with delicious API."
    },
    "tags": {
      "type": "string",
      "description": "List of up to 100 tags."
    },
    "dt": {
      "type": "string",
      "description": "Creation time for this bookmark. Defaults to current time. Datestamps more than 10 minutes ahead of server time will be reset to current server time."
    },
    "replace": {
      "type": "string",
      "description": "Replace any existing bookmark with this URL. Default is yes. If set to no, will throw an error if bookmark exists."
    },
    "shared": {
      "type": "string",
      "description": "Make bookmark public. Default is \"yes\" unless user has enabled the \"save all bookmarks as private\" user setting, in which case default is \"no\"."
    },
    "toread": {
      "type": "string",
      "description": "Marks the bookmark as unread. Default is \"no\"."
    }
  },
  "additionalProperties": false,
  "required": [
    "url",
    "description"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: posts.delete.get
Delete a bookmark.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The URL of the item."
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
## Operation: posts.get.get
Returns one or more posts on a single day matching the arguments. If no date or url is given, date of most recent bookmark will be used.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "tag": {
      "type": "string",
      "description": "Filter by up to three tags."
    },
    "dt": {
      "type": "string",
      "description": "Return results bookmarked on this day."
    },
    "url": {
      "type": "string",
      "description": "Return bookmark for this URL."
    },
    "meta": {
      "type": "string",
      "description": "Include a change detection signature in a meta attribute (yes/no)."
    },
    "format": {
      "type": "string",
      "description": "Default is xml."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: posts.dates.get
Returns a list of dates with the number of posts at each date.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "tag": {
      "type": "string",
      "description": "Filter by up to three tags."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: posts.recent.get
Returns a list of the user's most recent posts, filtered by tag.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "tag": {
      "type": "string",
      "description": "Filter by up to three tags."
    },
    "count": {
      "type": "integer",
      "description": "Number of results to return. Default is 15, max is 100."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: posts.all.get
Returns all bookmarks in the user's account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "tag": {
      "type": "string",
      "description": "Filter by up to three tags."
    },
    "start": {
      "type": "integer",
      "description": "Offset value (default is 0)."
    },
    "results": {
      "type": "integer",
      "description": "Number of results to return. Default is all."
    },
    "fromdt": {
      "type": "string",
      "description": "Return only bookmarks created after this time."
    },
    "todt": {
      "type": "string",
      "description": "Return only bookmarks created before this time."
    },
    "meta": {
      "type": "integer",
      "description": "Include a change detection signature for each bookmark."
    },
    "format": {
      "type": "string",
      "description": "Default is xml."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: posts.suggest.get
Returns a list of popular tags and recommended tags for a given URL. Popular tags are tags used site-wide for the url; recommended tags are drawn from the user's own tags.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The URL of the item."
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
## Operation: tags.get.get
Returns a full list of the user's tags along with the number of times they were used.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: tags.delete.get
Delete an existing tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {
      "type": "string",
      "description": "The tag to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "tag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tags.rename.get
Rename an tag, or fold it in to an existing tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "old": {
      "type": "string",
      "description": "The tag to rename. Note: match is not case sensitive."
    },
    "new": {
      "type": "string",
      "description": "The new name. If empty, nothing will happen."
    }
  },
  "additionalProperties": false,
  "required": [
    "old",
    "new"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.secret.get
Get the secret RSS token (allows viewing user's private RSS feeds).

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
