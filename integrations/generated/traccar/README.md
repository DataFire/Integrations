# @datafire/traccar
Open Source GPS Tracking Platform

## Operation: attributes.aliases.get
Without params, it returns a list of AttributeAlias from all the user's Devices

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "deviceId": {
      "type": "integer",
      "description": "Standard users can use this only with _userId_s, they have access to"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AttributeAlias"
  },
  "type": "array"
}
```
## Operation: attributes.aliases.post
Set an AttributeAlias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AttributeAlias"
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
  "$ref": "#/definitions/AttributeAlias"
}
```
## Operation: attributes.aliases.id.delete
Delete an AttributeAlias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
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
## Operation: attributes.aliases.id.put
Update an AttributeAlias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/AttributeAlias"
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
  "$ref": "#/definitions/AttributeAlias"
}
```
## Operation: calendars.get
Without params, it returns a list of Calendars the user has access to

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
      "description": "Can only be used by admins or managers to fetch all entities"
    },
    "userId": {
      "type": "integer",
      "description": "Standard users can use this only with their own _userId_"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Calendar"
  },
  "type": "array"
}
```
## Operation: calendars.post
Create a Calendar

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Calendar"
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
  "$ref": "#/definitions/Calendar"
}
```
## Operation: calendars.id.delete
Delete a Calendar

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
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
## Operation: calendars.id.put
Update a Calendar

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/Calendar"
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
  "$ref": "#/definitions/Calendar"
}
```
## Operation: commands.post
Dispatch commands to device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Command"
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
  "$ref": "#/definitions/Command"
}
```
## Operation: commandtypes.get
Fetch a list of available Commands for the Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CommandType"
  },
  "type": "array"
}
```
## Operation: devices.get
Without any params, returns a list of the user's devices

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
      "description": "Can only be used by admins or managers to fetch all entities"
    },
    "userId": {
      "type": "integer",
      "description": "Standard users can use this only with their own _userId_"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Device"
  },
  "type": "array"
}
```
## Operation: devices.post
Create a Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Device"
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
  "$ref": "#/definitions/Device"
}
```
## Operation: devices.geofences.delete
Remove a Geofence from a Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeviceGeofence"
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
## Operation: devices.geofences.post
Link a Geofence to a Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeviceGeofence"
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
  "$ref": "#/definitions/DeviceGeofence"
}
```
## Operation: devices.id.delete
Update a Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
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
## Operation: devices.id.put
Update a Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/Device"
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
  "$ref": "#/definitions/Device"
}
```
## Operation: devices.id.distance.put
Update the distance counter of the Device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/DeviceTotalDistance"
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
{}
```
## Operation: events.id.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
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
  "$ref": "#/definitions/Event"
}
```
## Operation: geofences.get
Without params, it returns a list of Geofences the user has access to

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
      "description": "Can only be used by admins or managers to fetch all entities"
    },
    "userId": {
      "type": "integer",
      "description": "Standard users can use this only with their own _userId_"
    },
    "groupId": {
      "type": "integer"
    },
    "deviceId": {
      "type": "integer",
      "description": "Standard users can use this only with _userId_s, they have access to"
    },
    "refresh": {
      "type": "boolean"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Geofence"
  },
  "type": "array"
}
```
## Operation: geofences.post
Create a Geofence

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Geofence"
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
  "$ref": "#/definitions/Geofence"
}
```
## Operation: geofences.id.delete
Delete a Geofence

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
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
## Operation: geofences.id.put
Update a Geofence

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/Geofence"
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
  "$ref": "#/definitions/Geofence"
}
```
## Operation: groups.get
Without any params, returns a list of the Groups the user belongs to

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
      "description": "Can only be used by admins or managers to fetch all entities"
    },
    "userId": {
      "type": "integer",
      "description": "Standard users can use this only with their own _userId_"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Group"
  },
  "type": "array"
}
```
## Operation: groups.post
Create a Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Group"
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
  "$ref": "#/definitions/Group"
}
```
## Operation: groups.geofences.delete
Remove a Geofence from a Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GroupGeofence"
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
## Operation: groups.geofences.post
Link a Geofence to a Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GroupGeofence"
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
  "$ref": "#/definitions/GroupGeofence"
}
```
## Operation: groups.id.delete
Delete a Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
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
## Operation: groups.id.put
Update a Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/Group"
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
  "$ref": "#/definitions/Group"
}
```
## Operation: permissions.calendars.delete
Remove a Calendar from a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CalendarPermission"
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
## Operation: permissions.calendars.post
Link a Calendar to a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CalendarPermission"
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
  "$ref": "#/definitions/CalendarPermission"
}
```
## Operation: permissions.devices.delete
Remove a Device from a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DevicePermission"
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
## Operation: permissions.devices.post
Link a Device to a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DevicePermission"
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
  "$ref": "#/definitions/DevicePermission"
}
```
## Operation: permissions.geofences.delete
Remove a Geofence from a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GeofencePermission"
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
## Operation: permissions.geofences.post
Link a Geofence to a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GeofencePermission"
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
  "$ref": "#/definitions/GeofencePermission"
}
```
## Operation: permissions.groups.delete
Remove a Group from a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GroupPermission"
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
## Operation: permissions.groups.post
Link a Group to a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GroupPermission"
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
  "$ref": "#/definitions/GroupPermission"
}
```
## Operation: permissions.users.delete
Remove a User from a manager User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UserPermission"
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
## Operation: permissions.users.post
Link a User to a manager User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UserPermission"
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
  "$ref": "#/definitions/UserPermission"
}
```
## Operation: positions.get
Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "deviceId": {
      "type": "integer",
      "description": "_deviceId_ is optional, but requires the _from_ and _to_ parameters when used"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    },
    "id": {
      "type": "integer",
      "description": "To fetch one or more positions. Multiple params can be passed like `id=31&id=42`"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Position"
  },
  "type": "array"
}
```
## Operation: reports.events.get
At least one _deviceId_ or one _groupId_ must be passed

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "array"
    },
    "groupId": {
      "type": "array"
    },
    "type": {
      "type": "array",
      "description": "% can be used to return events of all types"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    }
  },
  "additionalProperties": false,
  "required": [
    "from",
    "to"
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
## Operation: reports.route.get
At least one _deviceId_ or one _groupId_ must be passed

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "array"
    },
    "groupId": {
      "type": "array"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    }
  },
  "additionalProperties": false,
  "required": [
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Position"
  },
  "type": "array"
}
```
## Operation: reports.summary.get
At least one _deviceId_ or one _groupId_ must be passed

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "array"
    },
    "groupId": {
      "type": "array"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    }
  },
  "additionalProperties": false,
  "required": [
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ReportSummary"
  },
  "type": "array"
}
```
## Operation: reports.trips.get
At least one _deviceId_ or one _groupId_ must be passed

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "array"
    },
    "groupId": {
      "type": "array"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    }
  },
  "additionalProperties": false,
  "required": [
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ReportTrips"
  },
  "type": "array"
}
```
## Operation: server.get
Fetch Server information

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Server"
}
```
## Operation: server.put
Update Server information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Server"
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
  "$ref": "#/definitions/Server"
}
```
## Operation: session.delete
Close the Session

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: session.get
Fetch Session information

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "token": {
      "type": "string"
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
## Operation: session.post
Create a new Session

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    },
    "password": {
      "type": "string",
      "format": "password"
    }
  },
  "additionalProperties": false,
  "required": [
    "email",
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: statistics.get
Fetch server Statistics

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "in IS0 8601 format. eg. `1963-11-22T18:30:00Z`"
    }
  },
  "additionalProperties": false,
  "required": [
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Statistics"
  },
  "type": "array"
}
```
## Operation: users.get
Fetch a list of Users

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "userId": {
      "type": "string",
      "description": "Can only be used by admin or manager users"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/User"
  },
  "type": "array"
}
```
## Operation: users.post
Create a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/User"
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
  "$ref": "#/definitions/User"
}
```
## Operation: users.notifications.get
Without params, it returns a list of the user's enabled Notifications

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
      "description": "To fetch a list of all available Notifications"
    },
    "userId": {
      "type": "integer",
      "description": "Standard users can use this only with their own _userId_"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Notification"
  },
  "type": "array"
}
```
## Operation: users.notifications.post
Set or unset a Notification

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Notification"
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
  "$ref": "#/definitions/Notification"
}
```
## Operation: users.id.delete
Delete a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
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
## Operation: users.id.put
Update a User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "body": {
      "$ref": "#/definitions/User"
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
  "$ref": "#/definitions/User"
}
```
