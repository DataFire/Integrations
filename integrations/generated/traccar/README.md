# @datafire/traccar

Client library for traccar

## Installation and Usage
```bash
npm install --save datafire @datafire/traccar
```

```js
let datafire = require('datafire');
let traccar = require('@datafire/traccar').actions;

let account = {
  username: "",
  password: "",
}
let context = new datafire.Context({
  accounts: {
    traccar: account,
  }
})

traccar.users.notifications.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Open Source GPS Tracking Platform

## Actions
### attributes.aliases.get
Without params, it returns a list of AttributeAlias from all the user's Devices


```js
traccar.attributes.aliases.get({}, context)
```

#### Parameters
* deviceId (integer) - Standard users can use this only with _userId_s, they have access to

### attributes.aliases.post
Set an AttributeAlias


```js
traccar.attributes.aliases.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### attributes.aliases.id.delete
Delete an AttributeAlias


```js
traccar.attributes.aliases.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### attributes.aliases.id.put
Update an AttributeAlias


```js
traccar.attributes.aliases.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### calendars.get
Without params, it returns a list of Calendars the user has access to


```js
traccar.calendars.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_

### calendars.post
Create a Calendar


```js
traccar.calendars.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### calendars.id.delete
Delete a Calendar


```js
traccar.calendars.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### calendars.id.put
Update a Calendar


```js
traccar.calendars.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### commands.post
Dispatch commands to device


```js
traccar.commands.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### commandtypes.get
Fetch a list of available Commands for the Device


```js
traccar.commandtypes.get({
  "deviceId": 0
}, context)
```

#### Parameters
* deviceId (integer) **required**

### devices.get
Without any params, returns a list of the user's devices


```js
traccar.devices.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_

### devices.post
Create a Device


```js
traccar.devices.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### devices.geofences.delete
Remove a Geofence from a Device


```js
traccar.devices.geofences.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### devices.geofences.post
Link a Geofence to a Device


```js
traccar.devices.geofences.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### devices.id.delete
Update a Device


```js
traccar.devices.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### devices.id.put
Update a Device


```js
traccar.devices.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### devices.id.distance.put
Update the distance counter of the Device


```js
traccar.devices.id.distance.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### events.id.get



```js
traccar.events.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### geofences.get
Without params, it returns a list of Geofences the user has access to


```js
traccar.geofences.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_
* groupId (integer)
* deviceId (integer) - Standard users can use this only with _userId_s, they have access to
* refresh (boolean)

### geofences.post
Create a Geofence


```js
traccar.geofences.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### geofences.id.delete
Delete a Geofence


```js
traccar.geofences.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### geofences.id.put
Update a Geofence


```js
traccar.geofences.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### groups.get
Without any params, returns a list of the Groups the user belongs to


```js
traccar.groups.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_

### groups.post
Create a Group


```js
traccar.groups.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### groups.geofences.delete
Remove a Geofence from a Group


```js
traccar.groups.geofences.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### groups.geofences.post
Link a Geofence to a Group


```js
traccar.groups.geofences.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### groups.id.delete
Delete a Group


```js
traccar.groups.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### groups.id.put
Update a Group


```js
traccar.groups.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### permissions.calendars.delete
Remove a Calendar from a User


```js
traccar.permissions.calendars.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.calendars.post
Link a Calendar to a User


```js
traccar.permissions.calendars.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.devices.delete
Remove a Device from a User


```js
traccar.permissions.devices.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.devices.post
Link a Device to a User


```js
traccar.permissions.devices.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.geofences.delete
Remove a Geofence from a User


```js
traccar.permissions.geofences.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.geofences.post
Link a Geofence to a User


```js
traccar.permissions.geofences.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.groups.delete
Remove a Group from a User


```js
traccar.permissions.groups.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.groups.post
Link a Group to a User


```js
traccar.permissions.groups.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.users.delete
Remove a User from a manager User


```js
traccar.permissions.users.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### permissions.users.post
Link a User to a manager User


```js
traccar.permissions.users.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### positions.get
Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_


```js
traccar.positions.get({}, context)
```

#### Parameters
* deviceId (integer) - _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
* from (string) - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
* to (string) - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
* id (integer) - To fetch one or more positions. Multiple params can be passed like `id=31&id=42`

### reports.events.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.events.get({
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* deviceId (array)
* groupId (array)
* type (array) - % can be used to return events of all types
* from (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
* to (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

### reports.route.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.route.get({
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* deviceId (array)
* groupId (array)
* from (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
* to (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

### reports.summary.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.summary.get({
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* deviceId (array)
* groupId (array)
* from (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
* to (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

### reports.trips.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.trips.get({
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* deviceId (array)
* groupId (array)
* from (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
* to (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

### server.get
Fetch Server information


```js
traccar.server.get(null, context)
```


### server.put
Update Server information


```js
traccar.server.put({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### session.delete
Close the Session


```js
traccar.session.delete(null, context)
```


### session.get
Fetch Session information


```js
traccar.session.get({}, context)
```

#### Parameters
* token (string)

### session.post
Create a new Session


```js
traccar.session.post({
  "email": "",
  "password": ""
}, context)
```

#### Parameters
* email (string) **required**
* password (string) **required**

### statistics.get
Fetch server Statistics


```js
traccar.statistics.get({
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* from (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
* to (string) **required** - in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

### users.get
Fetch a list of Users


```js
traccar.users.get({}, context)
```

#### Parameters
* userId (string) - Can only be used by admin or manager users

### users.post
Create a User


```js
traccar.users.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### users.notifications.get
Without params, it returns a list of the user's enabled Notifications


```js
traccar.users.notifications.get({}, context)
```

#### Parameters
* all (boolean) - To fetch a list of all available Notifications
* userId (integer) - Standard users can use this only with their own _userId_

### users.notifications.post
Set or unset a Notification


```js
traccar.users.notifications.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### users.id.delete
Delete a User


```js
traccar.users.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### users.id.put
Update a User


```js
traccar.users.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

