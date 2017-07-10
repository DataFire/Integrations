# @datafire/uebermaps
Enable people to store spots on public and private maps

## Operation: account.patch
Update account. Wrap map parameters in [user].

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "user": {
      "$ref": "#/definitions/UserEditable"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: attachments.id.delete
Delete attachment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Attachment id"
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
  "$ref": "#/definitions/Attachment"
}
```
## Operation: authentication.post
Sign in user. Wrap authentication parameters in [user].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/definitions/UserAuthentication"
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
{
  "$ref": "#/definitions/UserFullProfile"
}
```
## Operation: collaborator_invitations.get
List your collaborator invitations.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CollaboratorInvitation"
  },
  "type": "array"
}
```
## Operation: collaborator_invitations.post
Invite user to collaborate on map.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/CollaboratorInvitationCreate"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollaboratorInvitation"
}
```
## Operation: collaborator_invitations.id.delete
Delete collaborator invitation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Collaborator invitation id"
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
  "$ref": "#/definitions/CollaboratorInvitation"
}
```
## Operation: collaborator_invitations.id.get
Show collaborator invitation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Collaborator invitation id"
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
  "$ref": "#/definitions/CollaboratorInvitation"
}
```
## Operation: collaborator_invitations.id.patch
Accept collaborator invitation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Collaborator invitation id"
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
  "$ref": "#/definitions/CollaboratorInvitation"
}
```
## Operation: comments.id.delete
Delete comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Comment id"
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
  "$ref": "#/definitions/Comment"
}
```
## Operation: comments.id.patch
Update comment. Wrap comment parameters in [comment].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Comment id"
    },
    "comment": {
      "$ref": "#/definitions/CommentEditable"
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
  "$ref": "#/definitions/Comment"
}
```
## Operation: events.get
List your own events.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "timeframe_start": {
      "type": "string",
      "description": "Begin of time range of event (ISO 8601 date format)."
    },
    "timeframe_end": {
      "type": "string",
      "description": "End of time range of event (ISO 8601 date format)."
    },
    "bounds": {
      "type": "string",
      "description": "To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Event"
  },
  "type": "array"
}
```
## Operation: events.id.delete
Delete event.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Event id"
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
  "$ref": "#/definitions/Event"
}
```
## Operation: events.id.get
Get basic information about an event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of event"
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
  "$ref": "#/definitions/Event"
}
```
## Operation: events.id.patch
Update event. Wrap event parameters in [event].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Event id"
    },
    "event": {
      "$ref": "#/definitions/EventEditable"
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
  "$ref": "#/definitions/Map"
}
```
## Operation: maps.get
List your own maps.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Map"
  },
  "type": "array"
}
```
## Operation: maps.post
Create map. Wrap map parameters in [map]. To add a map header picture pass a base64 encoded string to [map][picture].

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "map": {
      "$ref": "#/definitions/MapEditable"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Map"
}
```
## Operation: maps.search.get
Search maps

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "Query"
    },
    "d": {
      "type": "integer",
      "description": "Distance. Diameter of search radius in meter (default: 2000 meter)"
    },
    "lat": {
      "type": "number",
      "description": "Latitude for search radius (default distance: 2000 meter)"
    },
    "lon": {
      "type": "number",
      "description": "Longitude for search radius (default distance: 2000 meter)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Map"
}
```
## Operation: maps.id.delete
Delete map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "map id"
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
  "$ref": "#/definitions/Map"
}
```
## Operation: maps.id.get
Get basic information about a map

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of map"
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
  "$ref": "#/definitions/Map"
}
```
## Operation: maps.id.patch
Update map. Wrap map parameters in [map]. To update the map header picture pass a base64 encoded string to [map][picture].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "map id"
    },
    "map": {
      "$ref": "#/definitions/MapEditable"
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
  "$ref": "#/definitions/Map"
}
```
## Operation: maps.id.attachments.get
List attachments for a given map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Map id"
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
  "items": {
    "$ref": "#/definitions/Attachment"
  },
  "type": "array"
}
```
## Operation: maps.id.attachments.post
Upload map attachment. Wrap attachment parameters in [attachment]

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Map id"
    },
    "image": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "image"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Attachment"
}
```
## Operation: maps.id.collaborators.get
List collaborators of a map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Map id"
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
  "items": {
    "$ref": "#/definitions/Collaborator"
  },
  "type": "array"
}
```
## Operation: maps.id.collaborators.user_id.delete
Delete collaboration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "map id"
    },
    "user_id": {
      "type": "integer",
      "description": "user id"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Collaborator"
}
```
## Operation: maps.id.collaborators.user_id.patch
Update collaborator. Wrap collaborator parameters in [collaborator]

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "map id"
    },
    "user_id": {
      "type": "integer",
      "description": "user id"
    },
    "collaborator": {
      "$ref": "#/definitions/CollaboratorEditable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Collaborator"
}
```
## Operation: maps.id.comments.get
List comments for a given map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of map"
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
  "items": {
    "$ref": "#/definitions/Comment"
  },
  "type": "array"
}
```
## Operation: maps.id.comments.post
Create map comment. Wrap comment parameters in [comment].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "map id"
    },
    "comment": {
      "$ref": "#/definitions/CommentEditable"
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
  "$ref": "#/definitions/Comment"
}
```
## Operation: maps.id.respots.get
List respots of a map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Map Id"
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
  "items": {
    "$ref": "#/definitions/Respot"
  },
  "type": "array"
}
```
## Operation: maps.id.spots.get
List spots for a given map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of map"
    },
    "order": {
      "type": "string",
      "description": "Order of spots",
      "enum": [
        "created_at_asc",
        "created_at_desc",
        "updated_at_asc",
        "updated_at_desc",
        "title_asc",
        "title_desc"
      ]
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
  "items": {
    "$ref": "#/definitions/Spot"
  },
  "type": "array"
}
```
## Operation: maps.id.spots.post
Create spot. Wrap parameters in [spot]. To add a spot picture pass a base64 encoded string to [spot][picture].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of map"
    },
    "spot": {
      "$ref": "#/definitions/SpotEditable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "spot"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Spot"
}
```
## Operation: maps.id.subscriptions.delete
Unsubscribe from map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "map id"
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
  "$ref": "#/definitions/Subscription"
}
```
## Operation: maps.id.subscriptions.get
List subscriptions for a given map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of map"
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
  "items": {
    "$ref": "#/definitions/Subscription"
  },
  "type": "array"
}
```
## Operation: maps.map_id.spots.id.get
Get basic information about a spot

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of spot"
    },
    "map_id": {
      "type": "integer",
      "description": "Id of map"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "map_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Spot"
}
```
## Operation: maps.map_id.spots.spot_id.respot.delete
Delete respot from map by spot id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "map_id": {
      "type": "integer",
      "description": "Map Id"
    },
    "spot_id": {
      "type": "integer",
      "description": "Spot Id"
    }
  },
  "additionalProperties": false,
  "required": [
    "map_id",
    "spot_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Respot"
}
```
## Operation: respot_maps.get
List maps that user can respot to.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Map"
  },
  "type": "array"
}
```
## Operation: respots.id.delete
Delete respot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Respot Id"
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
  "$ref": "#/definitions/Respot"
}
```
## Operation: respots.id.get
Get basic information about a respot

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of respot"
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
  "$ref": "#/definitions/Respot"
}
```
## Operation: spots.search.get
Search spots

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "Query"
    },
    "d": {
      "type": "integer",
      "description": "Distance. Diameter of search radius in meter (default: 2000 meter)"
    },
    "lat": {
      "type": "number",
      "description": "Latitude for search radius (2 km)"
    },
    "lon": {
      "type": "number",
      "description": "Longitude for search radius (2 km)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Spot"
}
```
## Operation: spots.id.delete
Delete spot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "spot id"
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
  "$ref": "#/definitions/Spot"
}
```
## Operation: spots.id.patch
Update spot. Wrap parameters in [spot]. To update the spot picture pass a base64 encoded string to [spot][picture].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "spot id"
    },
    "spot": {
      "$ref": "#/definitions/SpotEditable"
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
  "$ref": "#/definitions/Spot"
}
```
## Operation: spots.id.attachments.get
List attachments for a given spot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Spot id"
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
  "items": {
    "$ref": "#/definitions/Attachment"
  },
  "type": "array"
}
```
## Operation: spots.id.attachments.post
Upload spot attachment. Wrap attachment parameters in [attachment]

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Spot id"
    },
    "image": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "image"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Attachment"
}
```
## Operation: spots.id.comments.get
List comments for a given spot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of spot"
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
  "items": {
    "$ref": "#/definitions/Comment"
  },
  "type": "array"
}
```
## Operation: spots.id.comments.post
Create spot comment. Wrap comment parameters in [comment].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "spot id"
    },
    "comment": {
      "$ref": "#/definitions/CommentEditable"
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
  "$ref": "#/definitions/Comment"
}
```
## Operation: spots.id.events.get
List maps for a given spot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of spot"
    },
    "timeframe_start": {
      "type": "string",
      "description": "Begin of time range of event (ISO 8601 date format)."
    },
    "timeframe_end": {
      "type": "string",
      "description": "End of time range of event (ISO 8601 date format)."
    },
    "bounds": {
      "type": "string",
      "description": "To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792"
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
  "items": {
    "$ref": "#/definitions/Event"
  },
  "type": "array"
}
```
## Operation: spots.id.events.post
Create event. Wrap map parameters in [event].

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Spot id"
    },
    "event": {
      "$ref": "#/definitions/EventEditable"
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
  "$ref": "#/definitions/Event"
}
```
## Operation: spots.id.respots.post
Respot a spot onto a map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Spot Id"
    },
    "map_id": {
      "format": "integer",
      "type": "number"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "map_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Respot"
}
```
## Operation: subscriptions.get
List subscriptions.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "user_id": {
      "type": "integer",
      "description": "Id of user"
    },
    "map_id": {
      "type": "integer",
      "description": "Id of map"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Subscription"
  },
  "type": "array"
}
```
## Operation: subscriptions.post
Create map subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "map_id": {
      "format": "integer",
      "type": "number"
    }
  },
  "additionalProperties": false,
  "required": [
    "map_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subscription"
}
```
## Operation: trends.latest.get
List latest maps.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Map"
  },
  "type": "array"
}
```
## Operation: trends.recommended.get
List recommended maps.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Map"
  },
  "type": "array"
}
```
## Operation: users.search.get
Search users

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "Query"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.id.get
Get profile a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of user"
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
  "$ref": "#/definitions/User"
}
```
## Operation: users.user_id.maps.get
List maps for a given user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "integer",
      "description": "Id of user"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Map"
  },
  "type": "array"
}
```
