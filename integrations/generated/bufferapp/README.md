# @datafire/bufferapp
Social media management for marketers and agencies

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
## Operation: info.configuration.json.get
Returns an object with the current configuration that Buffer is using, including supported services, their icons and the varying limits of character and schedules.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/configuration"
}
```
## Operation: links.shares.json.get
Returns an object with a the numbers of shares a link has had using Buffer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL-encoded URL of the page for which the number of shares is requested."
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
  "$ref": "#/definitions/shares"
}
```
## Operation: profiles.id.schedules.update.json.post
"Set the posting schedules for the specified social media profile.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/success"
}
```
## Operation: profiles.id.schedules.json.get
Returns details of the posting schedules associated with a social media profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/schedules"
}
```
## Operation: profiles.id.updates.pending.json.get
"Returns an array of updates that are currently in the buffer for an individual social media profile.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "page": {
      "type": "integer",
      "description": "Specifies the page of status updates to receive. If not specified the first page of results will be returned."
    },
    "count": {
      "type": "integer",
      "description": "Specifies the number of status updates to receive. If provided, must be between 1 and 100."
    },
    "since": {
      "type": "string",
      "format": "date",
      "description": "Specifies a unix timestamp which only status updates created after this time will be retrieved."
    },
    "utc": {
      "type": "boolean",
      "description": "If utc is set times will be returned relative to UTC rather than the users associated timezone."
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
  "$ref": "#/definitions/updates-array"
}
```
## Operation: profiles.id.updates.reorder.json.post
Edit the order at which statuses for the specified social media profile will be sent out of the buffer.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/shuffle"
}
```
## Operation: profiles.id.updates.sent.json.get
Returns an array of updates that have been sent from the buffer for an individual social media profile.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "page": {
      "type": "integer",
      "description": "Specifies the page of status updates to receive. If not specified the first page of results will be returned."
    },
    "count": {
      "type": "integer",
      "description": "Specifies the number of status updates to receive. If provided, must be between 1 and 100."
    },
    "since": {
      "type": "string",
      "format": "date",
      "description": "Specifies a unix timestamp which only status updates created after this time will be retrieved."
    },
    "utc": {
      "type": "boolean",
      "description": "If utc is set times will be returned relative to UTC rather than the users associated timezone."
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
  "$ref": "#/definitions/updates-array"
}
```
## Operation: profiles.id.updates.shuffle.json.post
Randomize the order at which statuses for the specified social media profile will be sent out of the buffer.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/shuffle"
}
```
## Operation: profiles.id.json.get
Returns details of the single specified social media profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/profile"
}
```
## Operation: profiles.json.get
Returns an array of social media profiles connected to a users account.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/profiles"
}
```
## Operation: updates.create.json.post
Create one or more new status updates.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/newUpdate"
}
```
## Operation: updates.id.destroy.json.post
Permanently delete an existing status update.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/success"
}
```
## Operation: updates.id.interactions.json.get
Returns the detailed information on individual interactions with the social media update such as favorites, retweets and likes.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "event": {
      "type": "string",
      "description": "Specifies a type of event to be retrieved, for example \"retweet\", \"like\", \"comment\", \"mention\" or \"reshare\". They can also be plural (e.g., \"reshares\"). Plurality has no effect other than visual semantics. See /info/configuration for more information on supported interaction events.\n"
    },
    "page": {
      "type": "integer",
      "description": "Specifies the page of status updates to receive. If not specified the first page of results will be returned."
    },
    "count": {
      "type": "integer",
      "description": "Specifies the number of status updates to receive. If provided, must be between 1 and 100."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "event"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/interactions"
}
```
## Operation: updates.id.move_to_top.json.post
Move an existing status update to the top of the queue and recalculate times for all updates in the queue. Returns the update with its new posting time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/update"
}
```
## Operation: updates.id.share.json.post
Immediately shares a single pending update and recalculates times for updates remaining in the queue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/success"
}
```
## Operation: updates.id.update.json.post
Edit an existing, individual status update.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/individual-update"
}
```
## Operation: updates.id.json.get
Returns a single social media update.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
  "$ref": "#/definitions/update"
}
```
## Operation: user.json.get
Returns a single user.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
