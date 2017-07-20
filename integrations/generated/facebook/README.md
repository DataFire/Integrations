# @datafire/facebook
Connect to the social network with the Graph API.

## Operation: video.picture.get
The image which represents the content of the video

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "video": {
      "type": "string",
      "description": "Represents the ID of the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "video"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: video.likes.delete
Unlikes this video.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "video": {
      "type": "string",
      "description": "Represents the ID of the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "video"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: video.likes.post
Likes this video.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "video": {
      "type": "string",
      "description": "Represents the ID of the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "video"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: video.likes.get
Users who like this video.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "video": {
      "type": "string",
      "description": "Represents the ID of the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "video"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: video.comments.post
Posts a comment to this video.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "video": {
      "type": "string",
      "description": "Represents the ID of the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "video"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: video.comments.get
All of the comments on this video.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "video": {
      "type": "string",
      "description": "Represents the ID of the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "video"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: video.get
An individual video

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "video": {
      "type": "string",
      "description": "Represents the ID of the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "video"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notification.post
Marks the notification as read

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "unread": {
      "type": "boolean"
    },
    "notification": {
      "type": "string",
      "description": "Represents the ID of the notification."
    }
  },
  "additionalProperties": false,
  "required": [
    "unread",
    "notification"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.videos.post
Publishes a video on behalf of the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Video title"
    },
    "description": {
      "type": "string",
      "description": "Video description"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.videos.get
The videos this user has been tagged in

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.updates.get
The updates in this user's inbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.television.get
The television listed on the user's profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.tagged.get
Posts the user is tagged in

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.statuses.post
Posts a status message on the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.statuses.get
The user's status updates

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.scores.post
Posts a score for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "integer",
      "description": "Numeric score with value < 0."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.scores.get
The scores for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.posts.post
Creates a post on behalf of the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Post message"
    },
    "link": {
      "type": "string",
      "description": "Post URL"
    },
    "picture": {
      "type": "string",
      "description": "Post thumbnail image"
    },
    "name": {
      "type": "string",
      "description": "Post name"
    },
    "caption": {
      "type": "string",
      "description": "Post caption"
    },
    "description": {
      "type": "string",
      "description": "Post description"
    },
    "actions": {
      "type": "string",
      "description": "Post actions"
    },
    "privacy": {
      "type": "string",
      "description": "Post privacy settings"
    },
    "object_attachment": {
      "type": "string",
      "description": "Facebook ID for an existing picture in the User's photo albums to use as the thumbnail image. The User must be the owner of the photo, and the photo cannot be part of a message attachment."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "link",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.posts.get
The user's posts

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.pokes.get
The user's pokes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.picture.get
The user's profile picture

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,\n                            variable height)",
      "enum": [
        "square",
        "small",
        "large"
      ]
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.photos.post
Posts a photo to the user's Wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Photo description"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.photos.get
The photos the user is tagged in

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.permissions.delete
De-authorizes an application or revokes a specific extended permissions on behalf of a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "permission": {
      "type": "string",
      "description": "The permission you wish to revoke. If you don't specify a permission then this will de-authorize the application completely."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.permissions.get
The permissions that user has granted the application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.payments.get
The transactions the user placed with an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.outbox.get
The messages in this user's outbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.notifications.get
The user's notifications

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "include_read": {
      "type": "boolean",
      "description": "Enables you to see notifications that the user has already read in addition to the ones which are unread"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.notes.post
Creates a note on behalf of the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subject": {
      "type": "string",
      "description": "The subject of the Note"
    },
    "message": {
      "type": "string",
      "description": "Note content"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "subject",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.notes.get
The user's notes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.music.get
The music listed on the user's profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.movies.get
The movies listed on the user's profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.links.post
Posts a link on the user's profile page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Link URL"
    },
    "message": {
      "type": "string",
      "description": "Link message"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.links.get
The user's posted links.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.likes.page.get
Checks if the user likes the given page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page."
    }
  },
  "additionalProperties": false,
  "required": [
    "user",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.likes.get
All the pages this user has liked.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.interests.get
The interests listed on the user's profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.inbox.get
The threads in this user's inbox.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.home.get
The user's news feed

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.groups.get
The Groups that the user belongs to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.games.get
Games the user has added to the Arts and Entertainment section of their profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.friends.friend.get
Checks if the given user is a friend of the current user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    },
    "friend": {
      "type": "string",
      "description": "Represents the ID of the user's friend."
    }
  },
  "additionalProperties": false,
  "required": [
    "user",
    "friend"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.friends.get
The user's friends

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.friendlists.post
Creates a FriendList for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Friend list name"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.feed.post
Posts a status message on this user's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.feed.get
This user's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.events.post
Creates an event for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Event name"
    },
    "start_time": {
      "type": "integer",
      "description": "Event start time",
      "maximum": 9223372036854776000,
      "minimum": -9223372036854776000
    },
    "end_time": {
      "type": "integer",
      "description": "Event end time",
      "maximum": 9223372036854776000,
      "minimum": -9223372036854776000
    },
    "message": {
      "type": "string",
      "description": "Event description"
    },
    "location": {
      "type": "string",
      "description": "Event location"
    },
    "privacy_type": {
      "type": "string",
      "description": "Event privacy setting",
      "enum": [
        "OPEN",
        "CLOSED",
        "SECRET"
      ]
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "start_time",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.events.get
The events this user is attending.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.checkins.post
Checks the user into a place

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "place": {
      "type": "string",
      "description": "Checkin Place ID; for example 110506962309835 for Facebook HQ"
    },
    "coordinates": {
      "type": "string",
      "description": "The user's location, as a string containing latitude and longitude: {\"latitude\":\"...\", \"longitude\": \"...\"}"
    },
    "tags": {
      "type": "string",
      "description": "Comma-separated list of tagged friends' user IDs"
    },
    "message": {
      "type": "string",
      "description": "Checkin description"
    },
    "link": {
      "type": "string",
      "description": "Checkin link"
    },
    "picture": {
      "type": "string",
      "description": "Checkin picture"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "place",
    "coordinates",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.checkins.get
The places that the user has checked-into

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.books.get
The books listed on the user's profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.apprequests.get
The user's outstanding requests from an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.albums.post
Creates an album for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Album name"
    },
    "message": {
      "type": "string",
      "description": "Album description"
    },
    "privacy": {
      "type": "string",
      "description": "Privacy settings for the Album. Format: A JSON-encoded object that defines the privacy setting for the album, for example: {\"value\":\"SELF\"}. Only the user can specify the privacy settings for the post."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.albums.get
The photo albums this user has created

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.activities.get
The activities listed on the user's profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.achievements.delete
Deletes an achievement for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievement": {
      "type": "string",
      "description": "The unique URL of the achievement you wish to delete."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievement",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.achievements.post
Posts an achievement for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievement": {
      "type": "string",
      "description": "The unique URL of the achievement which the user achieved."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievement",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.accounts.get
The Facebook apps and pages owned by the current user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.get
A user profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "The fields to return"
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user object."
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: status.likes.delete
Unlikes this status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "description": "Represents the ID of the status object."
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: status.likes.post
Likes this status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "description": "Represents the ID of the status object."
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: status.likes.get
Users who like this status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "description": "Represents the ID of the status object."
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: status.comments.post
Posts a comment to this status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "status": {
      "type": "string",
      "description": "Represents the ID of the status object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: status.comments.get
All of the comments on this status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "description": "Represents the ID of the status object."
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: status.get
A Facebook status

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "description": "Represents the ID of the status object."
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: post.likes.delete
Unlikes this post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "post": {
      "type": "string",
      "description": "Represents the ID of the post object."
    }
  },
  "additionalProperties": false,
  "required": [
    "post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: post.likes.post
Likes this post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "post": {
      "type": "string",
      "description": "Represents the ID of the post object."
    }
  },
  "additionalProperties": false,
  "required": [
    "post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: post.likes.get
Users who like this post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "post": {
      "type": "string",
      "description": "Represents the ID of the post object."
    }
  },
  "additionalProperties": false,
  "required": [
    "post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: post.comments.post
Posts a comment to this post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "post": {
      "type": "string",
      "description": "Represents the ID of the post object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: post.comments.get
All of the comments on this post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "post": {
      "type": "string",
      "description": "Represents the ID of the post object."
    }
  },
  "additionalProperties": false,
  "required": [
    "post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: post.get
A Facebook post

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "post": {
      "type": "string",
      "description": "Represents the ID of the post object."
    }
  },
  "additionalProperties": false,
  "required": [
    "post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.tags.user.post
Updates the position of a tag on this photo for the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "x": {
      "type": "string",
      "description": "x coordinate of tag, as a percentage offset from the left edge of the picture"
    },
    "y": {
      "type": "string",
      "description": "y coordinate of tag, as a percentage offset from the top edge of the picture"
    },
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the user."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.tags.post
Creates a tag on this photo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "to": {
      "type": "string",
      "description": "USER_ID of the User to tag; can also be provided in URL path"
    },
    "x": {
      "type": "string",
      "description": "x coordinate of tag, as a percentage offset from the left edge of the picture"
    },
    "y": {
      "type": "string",
      "description": "y coordinate of tag, as a percentage offset from the top edge of the picture"
    },
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "to",
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.tags.get
Tags for this photo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.picture.get
The album-sized view of the photo

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.likes.delete
Unlikes this photo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.likes.post
Likes this photo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.likes.get
Users who like this photo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.comments.post
Posts a comment to this photo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.comments.get
All of the comments on this photo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: photo.get
An individual photo

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "photo": {
      "type": "string",
      "description": "Represents the ID of the photo object."
    }
  },
  "additionalProperties": false,
  "required": [
    "photo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.blocked.user.get
Checks if a user is blocked from the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of a user."
    }
  },
  "additionalProperties": false,
  "required": [
    "page",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.blocked.delete
Unblocks a user (or users) for the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "uids": {
      "type": "string",
      "description": "Comma-separated list of the user IDs you wish to unblock"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "uids",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.blocked.post
Blocks a user (or users) from posting content to the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "uids": {
      "type": "string",
      "description": "Comma-separated list of the user IDs you wish to block"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "uids",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.blocked.get
A list of the users blocked from the page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.admins.get
A list of the Page's admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.tabs.tab.delete
Deletes an installed profile tab (where is_permanent is not true) for a page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    },
    "tab": {
      "type": "string",
      "description": "Represents the ID of the tab."
    }
  },
  "additionalProperties": false,
  "required": [
    "page",
    "tab"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.tabs.tab.post
Updates an installed profile tab for a page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "position": {
      "type": "integer",
      "description": "Order in which the tab will appear on the profile. Must be after permanent tabs and less than the number of installed tabs. Index starts at 0"
    },
    "custom_name": {
      "type": "string",
      "description": "Name to be used for the tab. If this is set to an empty string, the tab will use the application’s default tab name."
    },
    "is_non_connection_landing_tab": {
      "type": "boolean",
      "description": "Set this tab as the default landing tab for users who have not liked and are not admins of the Page. If provided, value must be true."
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    },
    "tab": {
      "type": "string",
      "description": "Represents the ID of the tab."
    }
  },
  "additionalProperties": false,
  "required": [
    "page",
    "tab"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.tabs.post
Installs a profile tab at the end of the current list of installed tabs for the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "app_id": {
      "type": "string",
      "description": "ID of the application for which to install the tab"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "app_id",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.tabs.get
The page's profile tabs

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.checkins.get
Checkins made to this Place Page by the current user, and friends of the current user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.events.post
Creates an event for the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Event name"
    },
    "start_time": {
      "type": "integer",
      "description": "Event start time",
      "maximum": 9223372036854776000,
      "minimum": -9223372036854776000
    },
    "end_time": {
      "type": "integer",
      "description": "Event end time",
      "maximum": 9223372036854776000,
      "minimum": -9223372036854776000
    },
    "message": {
      "type": "string",
      "description": "Event description"
    },
    "location": {
      "type": "string",
      "description": "Event location"
    },
    "privacy_type": {
      "type": "string",
      "description": "Event privacy setting",
      "enum": [
        "OPEN",
        "CLOSED",
        "SECRET"
      ]
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "start_time",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.events.get
The events the Page is attending

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.posts.get
The page's own posts

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.notes.post
Creates a note on the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subject": {
      "type": "string",
      "description": "The subject of the Note"
    },
    "message": {
      "type": "string",
      "description": "Note content"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "subject",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.notes.get
The notes contained on this page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.videos.post
Publishes a video to the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Video title"
    },
    "description": {
      "type": "string",
      "description": "Video description"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.videos.get
The videos contained on this page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.statuses.post
Posts a status message on the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.statuses.get
The page's status updates

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.albums.get
The photo albums this Page has uploaded

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.groups.get
The groups this page is a member of

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.photos.post
Adds a photo to the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Photo description"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.photos.get
The photos contained on this page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.links.post
Posts a link on the page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Link URL"
    },
    "message": {
      "type": "string",
      "description": "Link message"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.links.get
The page's posted links

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.tagged.get
The photos, videos, and posts in which this page has been tagged

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.settings.post
The page's post permission settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "setting": {
      "type": "string",
      "description": "Which single setting to update: USERS_CAN_POST, USERS_CAN_POST_PHOTOS, USERS_CAN_TAG_PHOTOS, USERS_CAN_POST_VIDEOS",
      "enum": [
        "USERS_CAN_POST",
        "USERS_CAN_POST_PHOTOS",
        "USERS_CAN_TAG_PHOTOS",
        "USERS_CAN_POST_VIDEOS"
      ]
    },
    "value": {
      "type": "boolean"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "setting",
    "value",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.settings.get
The page's post permission settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.picture.get
The page's profile picture

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,\n                            variable height)",
      "enum": [
        "square",
        "small",
        "large"
      ]
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.feed.post
Posts a status message on this page's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.feed.get
This page's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: page.get
Returns a Page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string",
      "description": "Represents the ID of the page object."
    }
  },
  "additionalProperties": false,
  "required": [
    "page"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: note.likes.delete
Unlikes this note.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "note": {
      "type": "string",
      "description": "Represents the ID of the note object."
    }
  },
  "additionalProperties": false,
  "required": [
    "note"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: note.likes.post
Likes this note.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "note": {
      "type": "string",
      "description": "Represents the ID of the note object."
    }
  },
  "additionalProperties": false,
  "required": [
    "note"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: note.likes.get
Users who like this note.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "note": {
      "type": "string",
      "description": "Represents the ID of the note object."
    }
  },
  "additionalProperties": false,
  "required": [
    "note"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: note.comments.post
Posts a comment to this note.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "note": {
      "type": "string",
      "description": "Represents the ID of the note object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "note"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: note.comments.get
All of the comments on this note.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "note": {
      "type": "string",
      "description": "Represents the ID of the note object."
    }
  },
  "additionalProperties": false,
  "required": [
    "note"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: note.get
A Facebook note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "note": {
      "type": "string",
      "description": "Represents the ID of the note object."
    }
  },
  "additionalProperties": false,
  "required": [
    "note"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: link.likes.delete
Unlikes this link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Represents the ID of the link object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: link.likes.post
Likes this link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Represents the ID of the link object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: link.likes.get
Users who like this link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Represents the ID of the link object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: link.comments.post
Posts a comment to this link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "link": {
      "type": "string",
      "description": "Represents the ID of the link object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "link"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: link.comments.get
All of the comments on this link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Represents the ID of the link object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: link.get
A link shared on a user's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Represents the ID of the link object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: group.docs.get
The docs in this group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group": {
      "type": "string",
      "description": "Represents the ID of the group object."
    }
  },
  "additionalProperties": false,
  "required": [
    "group"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: group.picture.get
The profile picture of this group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,\n                            variable height)",
      "enum": [
        "square",
        "small",
        "large"
      ]
    },
    "group": {
      "type": "string",
      "description": "Represents the ID of the group object."
    }
  },
  "additionalProperties": false,
  "required": [
    "group"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: group.members.get
All of the users who are members of this group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group": {
      "type": "string",
      "description": "Represents the ID of the group object."
    }
  },
  "additionalProperties": false,
  "required": [
    "group"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: group.feed.post
Posts a status message on this group's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "group": {
      "type": "string",
      "description": "Represents the ID of the group object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "group"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: group.feed.get
This group's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group": {
      "type": "string",
      "description": "Represents the ID of the group object."
    }
  },
  "additionalProperties": false,
  "required": [
    "group"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: group.get
A Facebook group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group": {
      "type": "string",
      "description": "Represents the ID of the group object."
    }
  },
  "additionalProperties": false,
  "required": [
    "group"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: friendlist.members.user.delete
Removes a user from the friend list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "friendlist": {
      "type": "string",
      "description": "Represents the ID of the FriendList object."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the User to add to or remove from the friend list."
    }
  },
  "additionalProperties": false,
  "required": [
    "friendlist",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: friendlist.members.user.post
Adds a user to the friend list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "friendlist": {
      "type": "string",
      "description": "Represents the ID of the FriendList object."
    },
    "user": {
      "type": "string",
      "description": "Represents the ID of the User to add to or remove from the friend list."
    }
  },
  "additionalProperties": false,
  "required": [
    "friendlist",
    "user"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: friendlist.members.get
All of the users who are members of this list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "friendlist": {
      "type": "string",
      "description": "Represents the ID of the FriendList object."
    }
  },
  "additionalProperties": false,
  "required": [
    "friendlist"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: friendlist.delete
Deletes the FriendList.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "friendlist": {
      "type": "string",
      "description": "Represents the ID of the FriendList object."
    }
  },
  "additionalProperties": false,
  "required": [
    "friendlist"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: friendlist.get
A Facebook friend list. This object represents the list itself and not the members of the list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "friendlist": {
      "type": "string",
      "description": "Represents the ID of the FriendList object."
    }
  },
  "additionalProperties": false,
  "required": [
    "friendlist"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.picture.get
The event's profile picture

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,\n                            variable height)",
      "enum": [
        "square",
        "small",
        "large"
      ]
    },
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.declined.post
RSVPs the user as 'declined' for the event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.declined.get
All of the users who declined their invitation to this event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.attending.post
RSVPs the user as 'attending' for the event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.attending.get
All of the users who are attending this event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.invited.get
All of the users who have been invited to this event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.maybe.post
RSVPs the user as a 'maybe' for the event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.maybe.get
All of the users who have been responded "Maybe" to their invitation to this event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.noreply.get
All of the users who have been not yet responded to their invitation to this event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.feed.post
Posts a status message on this event's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.feed.get
This event's wall

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: event.get
Specifies information about an event, including the location, event name, and which invitees plan to attend.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "event": {
      "type": "string",
      "description": "Represents the ID of the event object."
    }
  },
  "additionalProperties": false,
  "required": [
    "event"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comment.likes.delete
Unlikes the comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "comment": {
      "type": "string",
      "description": "Represents the ID of the comment object."
    }
  },
  "additionalProperties": false,
  "required": [
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comment.likes.post
Likes the comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "comment": {
      "type": "string",
      "description": "Represents the ID of the comment object."
    }
  },
  "additionalProperties": false,
  "required": [
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comment.likes.get
All the likes on this comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "comment": {
      "type": "string",
      "description": "Represents the ID of the comment object."
    }
  },
  "additionalProperties": false,
  "required": [
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comment.delete
Deletes a comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "comment": {
      "type": "string",
      "description": "Represents the ID of the comment object."
    }
  },
  "additionalProperties": false,
  "required": [
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comment.get
Returns a comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "comment": {
      "type": "string",
      "description": "Represents the ID of the comment object."
    }
  },
  "additionalProperties": false,
  "required": [
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: checkin.likes.delete
Unlikes this checkin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "checkin": {
      "type": "string",
      "description": "Represents the ID of the checkin object."
    }
  },
  "additionalProperties": false,
  "required": [
    "checkin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: checkin.likes.post
Likes this checkin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "checkin": {
      "type": "string",
      "description": "Represents the ID of the checkin object."
    }
  },
  "additionalProperties": false,
  "required": [
    "checkin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: checkin.likes.get
Users who like this checkin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "checkin": {
      "type": "string",
      "description": "Represents the ID of the checkin object."
    }
  },
  "additionalProperties": false,
  "required": [
    "checkin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: checkin.comments.post
Posts a comment to this checkin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "checkin": {
      "type": "string",
      "description": "Represents the ID of the checkin object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "checkin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: checkin.comments.get
All of the comments on this checkin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "checkin": {
      "type": "string",
      "description": "Represents the ID of the checkin object."
    }
  },
  "additionalProperties": false,
  "required": [
    "checkin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: checkin.get
Represents a single visit by a user to a location

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "checkin": {
      "type": "string",
      "description": "Represents the ID of the checkin object."
    }
  },
  "additionalProperties": false,
  "required": [
    "checkin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.achievements.delete
Unregisters an achievement for the application

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievement": {
      "type": "string",
      "description": "Unique URL to the achievement."
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievement",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.achievements.post
Registers an achievement for the application

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "achievement": {
      "type": "string",
      "description": "Unique URL to the achievement."
    },
    "display_order": {
      "type": "integer",
      "description": "Order of this achievement as it shows up in the achievement stories UI (low to high). For example a display order of 100 will be displayed in the UI before 200. We use this value to surface achievements according to the order the developer has specified. Please make sure this value is unique and increments in the correct order for your achievements."
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "achievement",
    "display_order",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.scores.delete
Deletes all the scores for the application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.scores.get
Scores for the user and their friends.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.translations.delete
Deletes a translation string for this application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "native_hashes": {
      "type": "string",
      "description": "An array of native hashes. The native hash is a unique identifier of the native string and a description and is generated by the Translations application."
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "native_hashes",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.translations.post
Uploads translated strings for this application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "native_strings": {
      "type": "string",
      "description": "A JSON-encoded array of strings to translate. Each element of the string array is an object, with text storing the actual string, description storing the description of the text."
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "native_strings",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.translations.get
The translated strings for this application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.tagged.get
The photos, videos, and posts in which this application has been tagged.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.subscriptions.delete
Deletes a real-time notification subscription for this application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "object": {
      "type": "string",
      "description": "Object to monitor - `user`, `permissions`, or `page`. If no object is specified all subscriptions are deleted.",
      "enum": [
        "user",
        "permissions",
        "page"
      ]
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.subscriptions.post
Adds a real-time notification subscription for this application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "object": {
      "type": "string",
      "description": "Object to monitor - `user`, `permissions`, or `page`.",
      "enum": [
        "user",
        "permissions",
        "page"
      ]
    },
    "fields": {
      "type": "string",
      "description": "List of properties for the `object` to monitor."
    },
    "callback_url": {
      "type": "string",
      "description": "A callback URL to which Facebook will post subscription updates."
    },
    "verify_token": {
      "type": "string",
      "description": "Token sent in the verification request."
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "object",
    "callback_url",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.subscriptions.get
All of the subscriptions this application has for real-time notifications.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.statuses.post
Posts a status message on the application's profile page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.statuses.get
The application's status updates

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.staticresources.get
Usage stats about the canvas application's static resources, such as javascript and CSS, and which ones are being flushed to browsers early.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.reviews.get
Reviews of this application

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.posts.get
The application's own posts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.picture.get
The application's logo

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,\n                            variable height)",
      "enum": [
        "square",
        "small",
        "large"
      ]
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.links.post
Posts a link on the application's profile page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "link": {
      "type": "string",
      "description": "Link URL"
    },
    "message": {
      "type": "string",
      "description": "Link message"
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "link",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.links.get
The application's posted links.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.insights.get
Usage metrics for this application

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.feed.post
Posts a status message on the application's profile page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Status Message content"
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.feed.get
The application's wall.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.albums.get
The photo albums this application has created.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.accounts.test_users.post
Creates a test account for the application

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "installed": {
      "type": "boolean",
      "description": "Install app for the test user upon creation"
    },
    "permissions": {
      "type": "string",
      "description": "List of extended permissions app granted for the new test user if installed is true"
    },
    "name": {
      "type": "string",
      "description": "A name for the test user. The specified name will also be used in the email address assigned to the test user."
    },
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.accounts.get
Test User accounts associated with the application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: application.get
An application's profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "application": {
      "type": "string",
      "description": "Represents the ID of the application object."
    }
  },
  "additionalProperties": false,
  "required": [
    "application"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.picture.get
The album's cover photo; the first picture uploaded to an album becomes the cover photo for the album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "One of square (50x50), small (50 pixels wide, variable height), and large (about 200 pixels wide,\n                            variable height)",
      "enum": [
        "square",
        "small",
        "large"
      ]
    },
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.comments.post
Posts a comment on the album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Comment text"
    },
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "message",
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.comments.get
The comments made on this album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.likes.delete
Unlikes the album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.likes.post
Likes the album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.likes.get
The likes made on this album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.photos.post
Adds a photo to the album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Photo description"
    },
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.photos.get
The photos contained in this album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: album.get
A photo album

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "album": {
      "type": "string",
      "description": "Represents the ID of the album object."
    }
  },
  "additionalProperties": false,
  "required": [
    "album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: search.get
Search over all public objects in the social graph

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "The search string"
    },
    "type": {
      "type": "string",
      "description": "Supports these types of objects: All public posts (post), people (user), pages (page), events\n                            (event), groups (group), check-ins (checkin)",
      "enum": [
        "post",
        "user",
        "page",
        "event",
        "group",
        "checkin"
      ]
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
{}
```
