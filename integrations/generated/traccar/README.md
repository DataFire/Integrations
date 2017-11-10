# @datafire/traccar

Client library for traccar

## Installation and Usage
```bash
npm install --save datafire @datafire/traccar
```

```js
let datafire = require('datafire');
let traccar = require('@datafire/traccar').create({
  username: "",
  password: "",
});

traccar.users.get({}).then(data => {
  console.log(data);
})
```

## Description
Open Source GPS Tracking Platform

## Actions
### attributes.computed.get
Without params, it returns a list of Attributes the user has access to


```js
traccar.attributes.computed.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_
* deviceId (integer) - Standard users can use this only with _deviceId_s, they have access to
* groupId (integer) - Standard users can use this only with _groupId_s, they have access to
* refresh (boolean)

### attributes.computed.post
Create an Attribute


```js
traccar.attributes.computed.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### attributes.computed.id.delete
Delete an Attribute


```js
traccar.attributes.computed.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### attributes.computed.id.put
Update an Attribute


```js
traccar.attributes.computed.id.put({
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

### commands.get
Without params, it returns a list of Drivers the user has access to


```js
traccar.commands.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_
* deviceId (integer) - Standard users can use this only with _deviceId_s, they have access to
* groupId (integer) - Standard users can use this only with _groupId_s, they have access to
* refresh (boolean)

### commands.post
Create a Saved Command


```js
traccar.commands.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### commands.send.get
Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support


```js
traccar.commands.send.get({}, context)
```

#### Parameters
* deviceId (integer) - Standard users can use this only with _deviceId_s, they have access to

### commands.send.post
Dispatch a new command or Saved Command if _body.id_ set


```js
traccar.commands.send.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### commands.types.get
Fetch a list of available Commands for the Device or all possible Commands if Device ommited


```js
traccar.commands.types.get({}, context)
```

#### Parameters
* deviceId (integer)
* textChannel (boolean)

### commands.id.delete
Delete a Saved Command


```js
traccar.commands.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### commands.id.put
Update a Saved Command


```js
traccar.commands.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### devices.get
Without any params, returns a list of the user's devices


```js
traccar.devices.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_
* id (integer) - To fetch one or more devices. Multiple params can be passed like `id=31&id=42`
* uniqueId (string) - To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442`

### devices.post
Create a Device


```js
traccar.devices.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### devices.id.delete
Delete a Device


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

### drivers.get
Without params, it returns a list of Drivers the user has access to


```js
traccar.drivers.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_
* deviceId (integer) - Standard users can use this only with _deviceId_s, they have access to
* groupId (integer) - Standard users can use this only with _groupId_s, they have access to
* refresh (boolean)

### drivers.post
Create a Driver


```js
traccar.drivers.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### drivers.id.delete
Delete a Driver


```js
traccar.drivers.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### drivers.id.put
Update a Driver


```js
traccar.drivers.id.put({
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
* deviceId (integer) - Standard users can use this only with _deviceId_s, they have access to
* groupId (integer) - Standard users can use this only with _groupId_s, they have access to
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

### notifications.get
Without params, it returns a list of Notifications the user has access to


```js
traccar.notifications.get({}, context)
```

#### Parameters
* all (boolean) - Can only be used by admins or managers to fetch all entities
* userId (integer) - Standard users can use this only with their own _userId_
* deviceId (integer) - Standard users can use this only with _deviceId_s, they have access to
* groupId (integer) - Standard users can use this only with _groupId_s, they have access to
* refresh (boolean)

### notifications.post
Create a Notification


```js
traccar.notifications.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### notifications.test.post
Send test notification to current user via Email and SMS


```js
traccar.notifications.test.post(null, context)
```

#### Parameters
*This action has no parameters*

### notifications.types.get
Fetch a list of available Notification types


```js
traccar.notifications.types.get(null, context)
```

#### Parameters
*This action has no parameters*

### notifications.id.delete
Delete a Notification


```js
traccar.notifications.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### notifications.id.put
Update a Notification


```js
traccar.notifications.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required**
* body (undefined) **required**

### permissions.delete
Unlink an Object from another Object


```js
traccar.permissions.delete({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required** - This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }

### permissions.post
Link an Object to another Object


```js
traccar.permissions.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required** - This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }

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

### reports.stops.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.stops.get({
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

#### Parameters
*This action has no parameters*

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

#### Parameters
*This action has no parameters*

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

