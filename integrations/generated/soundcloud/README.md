# @datafire/soundcloud
Access, host, upload, and comment on audio.

## Operation: tracks.json.get
Returns a collection of tracks

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "title": {
      "type": "string"
    },
    "asset_data": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "title",
    "asset_data"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.json.post
Uploads a track

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "asset_data": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "title",
    "asset_data"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.json.get
Returns a track by track id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.json.put
Updates a given track

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.json.delete
Deletes a given track

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.comments.json.get
Returns comments of a track by track id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.comments.json.post
Posts a comments to a track by track id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.permissions.json.get
Returns all users with permission for a track by track id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.permissions.json.put
Updates the list of permitted users for a track by track id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.secret_token.json.get
Returns the secret token for a track by track id. This resource can only be used by the track owner.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tracks.track_id.secret_token.json.put
Resets the secret token for a track by track id. The secret token can not be specified but will be randomly chosen on
          the server and returned. This resource can only be used by the track owner.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.json.get
Returns a collection of users

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "q": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.json.get
Returns a user by user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.tracks.json.get
Returns a collection of tracks uploaded by user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.comments.json.get
Returns a collection of comments made by user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.followings.json.get
Returns a collection of users the user with user id is following

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.followings.contact_id.json.get
Checks if the user with the id contact_id is in the givens user's list of contacts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    },
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id",
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.followings.contact_id.json.put
Adds the user with the id contact_id to the givens user's list of contacts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    },
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.followings.contact_id.json.delete
Removes the user with the id contact_id from the givens user's list of contacts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    },
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.followers.json.get
Returns a collection of users who follow the user with user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.followers.contact_id.json.get
Checks if the user with contact_id is a follower of the given user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    },
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id",
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.json.get
Returns a collection of tracks favorited by the user with user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.track_id.json.put
Adds the given track to the given user's list of favorites.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    },
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.track_id.json.delete
Deletes the given track from the given user's list of favorites.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    },
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.groups.json.get
Returns a collection of groups joined by user with user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.playlists.json.get
Returns a collection of playlists created by user with user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "user_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.json.get
Returns the logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.json.put
Updates the logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.tracks.json.get
Returns a collection of tracks uploaded by logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.comments.json.get
Returns a collection of comments made by logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.followings.json.get
Returns a collection of users the logged-in user is following

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.followings.contact_id.json.get
Checks if the user with the id contact_id is in the logged-in user's list of contacts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.followings.contact_id.json.put
Adds the user with the id contact_id to the logged-in user's list of contacts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.followings.contact_id.json.delete
Deletes the user with the id contact_id from the logged-in user's list of contacts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.followers.json.get
Returns a collection of users who follow the logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.followers.contact_id.json.get
Checks if the user with the id contact_id is a follower of the logged-in user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contact_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.favorites.json.get
Returns a collection of tracks favorited by the logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.favorites.track_id.json.put
Adds the given track to the logged-in user's list of favorites.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.favorites.track_id.json.delete
Deletes the given track from the logged-in user's list of favorites.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "track_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "track_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: me.groups.json.get
Returns a collection of groups joined by logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: me.playlists.json.get
Returns a collection of playlists created by the logged-in user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: playlists.json.get
Returns a collection of playlists

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "q": {
      "type": "string"
    },
    "filter": {
      "type": "string",
      "enum": [
        "all",
        "public",
        "private"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: playlists.playlist_id.json.get
Returns a playlist by playlist id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.json.get
Returns a collection of groups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {}
  },
  "additionalProperties": false,
  "required": [
    "consumer_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.group_id.json.get
Returns a group by group id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.group_id.users.json.get
Returns a combined collection of moderators, members and contributors of the group with group id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.group_id.moderators.json.get
Returns a collection of moderators of the group with group id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.group_id.members.json.get
Returns a collection of members of the group with group id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.group_id.contributors.json.get
Returns a collection of contributors of the group with group id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.group_id.tracks.json.get
Returns a collection of tracks contributed to the group with group id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comments.comment_id.json.get
Returns a comment by comment id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "playlist_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "playlist_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: resolve.json.get
Translates a website URI into an API URI

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {},
    "url": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "url"
  ]
}
```
### Output Schema
```json
{}
```
