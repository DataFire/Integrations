# @datafire/myspace
Create apps and games within the MySpace platform. Monetize through advertising and virtual goods.

## Operation: 1.0.statusmoodcomments.personId._self.statusId.post
Posts a comment to a status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "statusId": {
      "type": "string",
      "description": "Specifies which status or mood to post a comment for."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "statusId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId.selector.friendId.history.get
Returns History Friend.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "friendId": {
      "type": "string",
      "description": "Is the same as {personId}, but for the person's friend."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "friendId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId.selector.friendId.get
Returns a status for Friend.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "friendId": {
      "type": "string",
      "description": "Is the same as {personId}, but for the person's friend."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "friendId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId.selector.history.get
Returns History User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId.selector.put
Updates a status for User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId.selector.get
Returns a status for User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId._supportedMood.moodId.put
Updates a mood.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "moodId": {
      "type": "integer",
      "description": "The integer value of the specific mood that you want to retrieve data for."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "moodId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId._supportedMood.moodId.get
Retrieves a mood.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "moodId": {
      "type": "integer",
      "description": "The integer value of the specific mood that you want to retrieve data for."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "moodId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId._supportedMood.post
Adds a mood.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.statusmood.personId._supportedMood.get
Retrieves all supported moods.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported."
    },
    "filterBy": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterOp": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "filterValue": {
      "type": "string",
      "description": "See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaitemcomments.personId._self.albumId.mediaItemId.get
Retrieves item comments from a specified album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "albumId": {
      "type": "string",
      "description": "Indicates which single album from the group identified by {selector} should be returned."
    },
    "mediaItemId": {
      "type": "string",
      "description": "Indicates which single media item from the album identified by {albumId} should be returned."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "albumId",
    "mediaItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._videos._supportedcategories.categoryId.get
Retrieves videos for Category.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "categoryId": {
      "type": "string",
      "description": "Indicates the video category about which you want to retrieve data."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "categoryId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._videos._supportedcategories.get
Retrieves supported categories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self._videos.mediaItemId.put
Updates an video.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "mediaItemId": {
      "type": "string",
      "description": "Indicates which single media item should be returned."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "mediaItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self._videos.mediaItemId.get
Retrieves a video.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "mediaItemId": {
      "type": "string",
      "description": "Indicates which single media item should be returned."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "mediaItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self._videos.post
Adds videos from a specified album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self._videos.get
Retrieves all the videos.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self.albumId.mediaItemId.put
Updates an item from a specified album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "albumId": {
      "type": "string",
      "description": "Indicates which single album from the group identified by {selector} should be returned."
    },
    "mediaItemId": {
      "type": "string",
      "description": "Indicates which single media item from the album identified by {albumId} should be returned."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "albumId",
    "mediaItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self.albumId.mediaItemId.get
Retrieves an item from a specified album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "albumId": {
      "type": "string",
      "description": "Indicates which single album from the group identified by {selector} should be returned."
    },
    "mediaItemId": {
      "type": "string",
      "description": "Indicates which single media item from the album identified by {albumId} should be returned."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "albumId",
    "mediaItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self.albumId.post
Adds items from a specified album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "albumId": {
      "type": "string",
      "description": "Indicates which single album from the group identified by {selector} should be returned."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "albumId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems.personId._self.albumId.get
Retrieves items from a specified album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "albumId": {
      "type": "string",
      "description": "Indicates which single album from the group identified by {selector} should be returned."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "albumId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.mediaItems._supportedFields.get
Retrieves all supported fields.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold fields are always returned.\nalbumId, created, description, duration, id, language, mimeType, msMediaItemUri, msPrivacyLevel, \nnumComments, numViews, numVotes, rating, tags, thumbnailUrl, title, type, url \n@all (a special value that tells the REST endpoint to send back all fields for the MediaItem.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Media item is private.\nfriendsonly - Media item is visible to friends.\neveryone - Media item is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: stream.subscription._all.delete
Deletes all subscriptions.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: stream.subscription._all.get
Retrieves all subscriptions.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: stream.subscription.subscriptionId.delete
Deletes a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "integer",
      "description": "The subscription's identifier."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: stream.subscription.subscriptionId.put
Updates a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "subscriptionId": {
      "type": "integer",
      "description": "The subscription's identifier."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: stream.subscription.subscriptionId.get
Retrieves a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "integer",
      "description": "The subscription's identifier."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: stream.subscription.post
Creates a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: opensearch.videos.get
Returns search results for videos.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "searchTerms": {
      "type": "string",
      "description": "Free form search terms or query words"
    },
    "count": {
      "type": "integer",
      "description": "Number of items to return."
    },
    "culture": {
      "type": "string",
      "description": "The culture context of the search. Default is en-us."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json"
      ]
    },
    "startPage": {
      "type": "integer",
      "description": "Which page to start at for the results."
    },
    "tag": {
      "type": "integer",
      "description": "Determine if searching on tags, as opposed to contents. To enable tag search, set to 1."
    },
    "videoMode": {
      "type": "integer",
      "description": "Search for specific video types. Two allowed values are videoMode=1 (music videos) or videoMode=2 (official).",
      "enum": [
        "1",
        "2"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "searchTerms"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: opensearch.images.get
Returns search results for images.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "searchTerms": {
      "type": "string",
      "description": "Free form search terms or query words"
    },
    "count": {
      "type": "integer",
      "description": "Number of items to return."
    },
    "culture": {
      "type": "string",
      "description": "The culture context of the search. Default is en-us."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "sortBy": {
      "type": "string",
      "description": "How to sort the images. Default is all."
    },
    "sortOrder": {
      "type": "string",
      "description": "Indicates whether to sort ascending or descending. Default is descending."
    },
    "startPage": {
      "type": "integer",
      "description": "Which page to start at for the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "searchTerms"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: opensearch.people.get
Returns search results for people.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "searchTerms": {
      "type": "string",
      "description": "Free form search terms or query words"
    },
    "count": {
      "type": "integer",
      "description": "Number of items to return."
    },
    "countryCode": {
      "type": "string",
      "description": "Country code to search with. Can be used instead of culture."
    },
    "culture": {
      "type": "string",
      "description": "The culture context of the search. Default is en-us."
    },
    "distance": {
      "type": "integer",
      "description": "Distance away from location to return results. Default is in miles, but depending on culture specified, it can be in kilometers."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "gender": {
      "type": "string",
      "description": "The gender to filter on. Default is both."
    },
    "hasPhoto": {
      "type": "string",
      "description": "Filter for only those who have a photo. Default those with or without a photo."
    },
    "latitude": {
      "type": "integer",
      "description": "Geographic latitude. Required to be combined with longitude and not combined with location field."
    },
    "location": {
      "type": "string",
      "description": "The location field, such as city, state and/or country."
    },
    "longitude": {
      "type": "integer",
      "description": "Geographic longitude. Required to be combined with latitude and not combined with location field."
    },
    "minAge": {
      "type": "integer",
      "description": "Minimum age for returned people. Same functionality as the MySpace website search."
    },
    "maxAge": {
      "type": "integer",
      "description": "Maximum age for returned people. Same functionality as the MySpace website search."
    },
    "searchBy": {
      "type": "string",
      "description": "Which field the search should go through. Default is all of the fields. (yomi is only available to ja-jp culture)."
    },
    "startPage": {
      "type": "integer",
      "description": "Which page to start at for the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "searchTerms"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.profilecomments.personId._self.get
Retrieves profile comments.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.people.personId.selector.friendId.get
Retrieves friend data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends",
        "groupId"
      ]
    },
    "friendId": {
      "type": "string",
      "description": "Is the same as {personId}, but for the person's friend."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold are default values.\naboutMe, age, birthday, bodyType, children, currentLocation, dateofbirth, displayname,drinker, ethnicity, gender, hasapp, heroes, id, interests, jobinterests, jobs, lookingFor,movies, mslargeImage, msmediumimage, msstatusmood, msusertype, mszodiacsign, music, name, nickname, networkPresence, organizations, photos, profilesong,profileurl, relationshipStatus, religion, sexualOrientation, smoker, status, thumbnailUrl, tvshows, urls, userappdata (See documentation on App_Data endpoints), utcOffset, \n@all (a special value that tells the REST endpoint to send back all fields for the person.)"
    },
    "filterBy": {
      "type": "string",
      "description": "@friends, hasapp, @topfriends, @toponlinefriends,\tnetworkpresence.\nSee: http://wiki.developer.myspace.com/index.php?title=People_API#Filters_Supported_by_People_Endpoints"
    },
    "filterOp": {
      "type": "string",
      "description": "contains, equals\nSee: http://wiki.developer.myspace.com/index.php?title=People_API#Filters_Supported_by_People_Endpoints"
    },
    "filterValue": {
      "type": "string",
      "description": "<userId>, online, true|false \nSee: http://wiki.developer.myspace.com/index.php?title=People_API#Filters_Supported_by_People_Endpoints"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector",
    "friendId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.people.personId.selector.get
Retrieves user data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends",
        "groupId"
      ]
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold are default values.\naboutMe, age, birthday, bodyType, children, currentLocation, dateofbirth, displayname,drinker, ethnicity, gender, hasapp, heroes, id, interests, jobinterests, jobs, lookingFor,movies, mslargeImage, msmediumimage, msstatusmood, msusertype, mszodiacsign, music, name, nickname, networkPresence, organizations, photos, profilesong,profileurl, relationshipStatus, religion, sexualOrientation, smoker, status, thumbnailUrl, tvshows, urls, userappdata (See documentation on App_Data endpoints), utcOffset, \n@all (a special value that tells the REST endpoint to send back all fields for the person.)"
    },
    "filterBy": {
      "type": "string",
      "description": "@friends, hasapp, @topfriends, @toponlinefriends,\tnetworkpresence.\nSee: http://wiki.developer.myspace.com/index.php?title=People_API#Filters_Supported_by_People_Endpoints"
    },
    "filterOp": {
      "type": "string",
      "description": "contains, equals\nSee: http://wiki.developer.myspace.com/index.php?title=People_API#Filters_Supported_by_People_Endpoints"
    },
    "filterValue": {
      "type": "string",
      "description": "<userId>, online, true|false \nSee: http://wiki.developer.myspace.com/index.php?title=People_API#Filters_Supported_by_People_Endpoints"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.people._supportedFields.get
Retrieves all supported fields.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold are default values.\naboutMe, age, birthday, bodyType, children, currentLocation, dateofbirth, displayname,drinker, ethnicity, gender, hasapp, heroes, id, interests, jobinterests, jobs, lookingFor,movies, mslargeImage, msmediumimage, msstatusmood, msusertype, mszodiacsign, music, name, nickname, networkPresence, organizations, photos, profilesong,profileurl, relationshipStatus, religion, sexualOrientation, smoker, status, thumbnailUrl, tvshows, urls, userappdata (See documentation on App_Data endpoints), utcOffset, \n@all (a special value that tells the REST endpoint to send back all fields for the person.)"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.appdata.personId.selector.appId.delete
Deletes a specified user's application data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends",
        "groupId"
      ]
    },
    "appId": {
      "type": "string",
      "description": "The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair."
    },
    "fields": {
      "type": "string",
      "description": "The fields correspond to keys in the application data. One uses fields to only retrieve specific keys. If the request omits fields, all application data per user will be returned."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector",
    "appId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.appdata.personId.selector.appId.post
Adds or updates a specified user's application data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends",
        "groupId"
      ]
    },
    "appId": {
      "type": "string",
      "description": "The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair."
    },
    "fields": {
      "type": "string",
      "description": "The fields correspond to keys in the application data. One uses fields to only retrieve specific keys. If the request omits fields, all application data per user will be returned."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "selector",
    "appId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.appdata.personId.selector.appId.get
Retrieves all application data for a specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends",
        "groupId"
      ]
    },
    "appId": {
      "type": "string",
      "description": "The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair."
    },
    "fields": {
      "type": "string",
      "description": "The fields correspond to keys in the application data. One uses fields to only retrieve specific keys. If the request omits fields, all application data per user will be returned."
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector",
    "appId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.notifications.personId._self.post
Sends notification.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.groups.personId.get
Retrieves the current user's groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported: id and title."
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Album is private.\nfriendsonly - Album is visible to friends.\neveryone - Album is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.groups._supportedFields.get
Retrieves all supported fields.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported: id and title."
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Album is private.\nfriendsonly - Album is visible to friends.\neveryone - Album is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.albums.personId._self.albumId.put
Update an Album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "albumId": {
      "type": "string",
      "description": "Indicates which single album should be returned."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId",
    "albumId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.albums.personId._self.albumId.get
Retrieves an album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "albumId": {
      "type": "string",
      "description": "Indicates which single album should be returned."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "albumId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.albums.personId._self.post
Adding an Album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.albums.personId._self.get
Retrieves the current user's albums.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold are default values.\n caption, id, location, mediaItemCount, mediaType, ownerId, thumbnailUrl \n @all (a special value that tells the REST endpoint to send back all fields for the album.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Album is private.\nfriendsonly - Album is visible to friends.\neveryone - Album is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.albums._supportedFields.get
Retrieves all supported fields.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported. Bold are default values.\n caption, id, location, mediaItemCount, mediaType, ownerId, thumbnailUrl \n @all (a special value that tells the REST endpoint to send back all fields for the album.)"
    },
    "msPrivacyLevel": {
      "type": "string",
      "description": "MySpace specific field. May be one of the following values:\nme - Album is private.\nfriendsonly - Album is visible to friends.\neveryone - Album is visible to everyone.",
      "enum": [
        "me",
        "friendsonly",
        "everyone"
      ]
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.activities.personId.selector.appId.get
Retrieves activities created by an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    },
    "appId": {
      "type": "string",
      "description": "The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair."
    },
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported.\nappid, body, externalid, id, mediaitems, postedtime, streamfaviconurl, title, titleid, userid, \n@all (a special value that tells the REST endpoint to send back all fields for the activity.)"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    },
    "updatedSince": {
      "type": "string",
      "description": "Indicates the date before which no activities should be returned."
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector",
    "appId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.activities._supportedObjectTypes.get
Retrieves all supported object types.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported.\nappid, body, externalid, id, mediaitems, postedtime, streamfaviconurl, title, titleid, userid, \n@all (a special value that tells the REST endpoint to send back all fields for the activity.)"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    },
    "updatedSince": {
      "type": "string",
      "description": "Indicates the date before which no activities should be returned."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.activities._supportedVerbs.get
Retrieves all supported verbs.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported.\nappid, body, externalid, id, mediaitems, postedtime, streamfaviconurl, title, titleid, userid, \n@all (a special value that tells the REST endpoint to send back all fields for the activity.)"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    },
    "updatedSince": {
      "type": "string",
      "description": "Indicates the date before which no activities should be returned."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.activities._supportedFields.get
Retrieves all supported fields.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported.\nappid, body, externalid, id, mediaitems, postedtime, streamfaviconurl, title, titleid, userid, \n@all (a special value that tells the REST endpoint to send back all fields for the activity.)"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    },
    "updatedSince": {
      "type": "string",
      "description": "Indicates the date before which no activities should be returned."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.activities.personId._self.post
Creates an activity for the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Specifies Content Type."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "personId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: 1.0.activities.personId.selector.get
Retrieves all activities for the user or for the friends of the viewer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "count": {
      "type": "string",
      "description": "Only returns the nearest multiple of 3 compared to the original value."
    },
    "fields": {
      "type": "string",
      "description": "The following field names are supported.\nappid, body, externalid, id, mediaitems, postedtime, streamfaviconurl, title, titleid, userid, \n@all (a special value that tells the REST endpoint to send back all fields for the activity.)"
    },
    "format": {
      "type": "string",
      "description": "Determines the format of the response.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "startIndex": {
      "type": "string",
      "description": "Indicates the index of the first item to retrieve from the query set."
    },
    "updatedSince": {
      "type": "string",
      "description": "Indicates the date before which no activities should be returned."
    },
    "personId": {
      "type": "string",
      "description": "The person's identifier."
    },
    "selector": {
      "type": "string",
      "description": "Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.",
      "enum": [
        "@self",
        "@all",
        "@friends"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "personId",
    "selector"
  ]
}
```
### Output Schema
```json
{}
```
