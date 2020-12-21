# @datafire/traccar

Client library for Traccar

## Installation and Usage
```bash
npm install --save @datafire/traccar
```
```js
let traccar = require('@datafire/traccar').create({
  username: "",
  password: "",
  host: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Open Source GPS Tracking Platform

## Actions

### attributes.computed.get
Without params, it returns a list of Attributes the user has access to


```js
traccar.attributes.computed.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_
  * deviceId `integer`: Standard users can use this only with _deviceId_s, they have access to
  * groupId `integer`: Standard users can use this only with _groupId_s, they have access to
  * refresh `boolean`

#### Output
* output `array`
  * items [Attribute](#attribute)

### attributes.computed.post
Create an Attribute


```js
traccar.attributes.computed.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Attribute](#attribute)

#### Output
* output [Attribute](#attribute)

### attributes.computed.id.delete
Delete an Attribute


```js
traccar.attributes.computed.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### attributes.computed.id.put
Update an Attribute


```js
traccar.attributes.computed.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Attribute](#attribute)

#### Output
* output [Attribute](#attribute)

### calendars.get
Without params, it returns a list of Calendars the user has access to


```js
traccar.calendars.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_

#### Output
* output `array`
  * items [Calendar](#calendar)

### calendars.post
Create a Calendar


```js
traccar.calendars.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Calendar](#calendar)

#### Output
* output [Calendar](#calendar)

### calendars.id.delete
Delete a Calendar


```js
traccar.calendars.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### calendars.id.put
Update a Calendar


```js
traccar.calendars.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Calendar](#calendar)

#### Output
* output [Calendar](#calendar)

### commands.get
Without params, it returns a list of Saved Commands the user has access to


```js
traccar.commands.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_
  * deviceId `integer`: Standard users can use this only with _deviceId_s, they have access to
  * groupId `integer`: Standard users can use this only with _groupId_s, they have access to
  * refresh `boolean`

#### Output
* output `array`
  * items [Command](#command)

### commands.post
Create a Saved Command


```js
traccar.commands.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Command](#command)

#### Output
* output [Command](#command)

### commands.send.get
Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support


```js
traccar.commands.send.get({}, context)
```

#### Input
* input `object`
  * deviceId `integer`: Standard users can use this only with _deviceId_s, they have access to

#### Output
* output `array`
  * items [Command](#command)

### commands.send.post
Dispatch a new command or Saved Command if _body.id_ set


```js
traccar.commands.send.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Command](#command)

#### Output
* output [Command](#command)

### commands.types.get
Fetch a list of available Commands for the Device or all possible Commands if Device ommited


```js
traccar.commands.types.get({}, context)
```

#### Input
* input `object`
  * deviceId `integer`: Internal device identifier. Only works if device has already reported some locations
  * protocol `string`: Protocol name. Can be used instead of device id
  * textChannel `boolean`: When `true` return SMS commands. If not specified or `false` return data commands

#### Output
* output `array`
  * items [CommandType](#commandtype)

### commands.id.delete
Delete a Saved Command


```js
traccar.commands.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### commands.id.put
Update a Saved Command


```js
traccar.commands.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Command](#command)

#### Output
* output [Command](#command)

### devices.get
Without any params, returns a list of the user's devices


```js
traccar.devices.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_
  * id `integer`: To fetch one or more devices. Multiple params can be passed like `id=31&id=42`
  * uniqueId `string`: To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442`

#### Output
* output `array`
  * items [Device](#device)

### devices.post
Create a Device


```js
traccar.devices.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Device](#device)

#### Output
* output [Device](#device)

### devices.id.delete
Delete a Device


```js
traccar.devices.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### devices.id.put
Update a Device


```js
traccar.devices.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Device](#device)

#### Output
* output [Device](#device)

### devices.id.accumulators.put
Update total distance and hours of the Device


```js
traccar.devices.id.accumulators.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [DeviceAccumulators](#deviceaccumulators)

#### Output
*Output schema unknown*

### drivers.get
Without params, it returns a list of Drivers the user has access to


```js
traccar.drivers.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_
  * deviceId `integer`: Standard users can use this only with _deviceId_s, they have access to
  * groupId `integer`: Standard users can use this only with _groupId_s, they have access to
  * refresh `boolean`

#### Output
* output `array`
  * items [Driver](#driver)

### drivers.post
Create a Driver


```js
traccar.drivers.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Driver](#driver)

#### Output
* output [Driver](#driver)

### drivers.id.delete
Delete a Driver


```js
traccar.drivers.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### drivers.id.put
Update a Driver


```js
traccar.drivers.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Driver](#driver)

#### Output
* output [Driver](#driver)

### events.id.get



```js
traccar.events.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [Event](#event)

### geofences.get
Without params, it returns a list of Geofences the user has access to


```js
traccar.geofences.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_
  * deviceId `integer`: Standard users can use this only with _deviceId_s, they have access to
  * groupId `integer`: Standard users can use this only with _groupId_s, they have access to
  * refresh `boolean`

#### Output
* output `array`
  * items [Geofence](#geofence)

### geofences.post
Create a Geofence


```js
traccar.geofences.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Geofence](#geofence)

#### Output
* output [Geofence](#geofence)

### geofences.id.delete
Delete a Geofence


```js
traccar.geofences.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### geofences.id.put
Update a Geofence


```js
traccar.geofences.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Geofence](#geofence)

#### Output
* output [Geofence](#geofence)

### groups.get
Without any params, returns a list of the Groups the user belongs to


```js
traccar.groups.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_

#### Output
* output `array`
  * items [Group](#group)

### groups.post
Create a Group


```js
traccar.groups.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Group](#group)

#### Output
* output [Group](#group)

### groups.id.delete
Delete a Group


```js
traccar.groups.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### groups.id.put
Update a Group


```js
traccar.groups.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Group](#group)

#### Output
* output [Group](#group)

### maintenance.get
Without params, it returns a list of Maintenance the user has access to


```js
traccar.maintenance.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_
  * deviceId `integer`: Standard users can use this only with _deviceId_s, they have access to
  * groupId `integer`: Standard users can use this only with _groupId_s, they have access to
  * refresh `boolean`

#### Output
* output `array`
  * items [Maintenance](#maintenance)

### maintenance.post
Create a Maintenance


```js
traccar.maintenance.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Maintenance](#maintenance)

#### Output
* output [Maintenance](#maintenance)

### maintenance.id.delete
Delete a Maintenance


```js
traccar.maintenance.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### maintenance.id.put
Update a Maintenance


```js
traccar.maintenance.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Maintenance](#maintenance)

#### Output
* output [Maintenance](#maintenance)

### notifications.get
Without params, it returns a list of Notifications the user has access to


```js
traccar.notifications.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: Can only be used by admins or managers to fetch all entities
  * userId `integer`: Standard users can use this only with their own _userId_
  * deviceId `integer`: Standard users can use this only with _deviceId_s, they have access to
  * groupId `integer`: Standard users can use this only with _groupId_s, they have access to
  * refresh `boolean`

#### Output
* output `array`
  * items [Notification](#notification)

### notifications.post
Create a Notification


```js
traccar.notifications.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Notification](#notification)

#### Output
* output [Notification](#notification)

### notifications.test.post
Send test notification to current user via Email and SMS


```js
traccar.notifications.test.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### notifications.types.get
Fetch a list of available Notification types


```js
traccar.notifications.types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [NotificationType](#notificationtype)

### notifications.id.delete
Delete a Notification


```js
traccar.notifications.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### notifications.id.put
Update a Notification


```js
traccar.notifications.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [Notification](#notification)

#### Output
* output [Notification](#notification)

### permissions.delete
Unlink an Object from another Object


```js
traccar.permissions.delete({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Permission](#permission)

#### Output
*Output schema unknown*

### permissions.post
Link an Object to another Object


```js
traccar.permissions.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Permission](#permission)

#### Output
* output [Permission](#permission)

### positions.get
We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.


```js
traccar.positions.get({}, context)
```

#### Input
* input `object`
  * deviceId `integer`: _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
  * from `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * to `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * id `integer`: To fetch one or more positions. Multiple params can be passed like `id=31&id=42`

#### Output
* output `array`
  * items [Position](#position)

### reports.events.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.events.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * deviceId `array`
  * groupId `array`
  * type `array`: % can be used to return events of all types
  * from **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * to **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

#### Output
* output `array`
  * items [Event](#event)

### reports.route.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.route.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * deviceId `array`
  * groupId `array`
  * from **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * to **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

#### Output
* output `array`
  * items [Position](#position)

### reports.stops.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.stops.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * deviceId `array`
  * groupId `array`
  * from **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * to **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

#### Output
* output `array`
  * items [ReportStops](#reportstops)

### reports.summary.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.summary.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * deviceId `array`
  * groupId `array`
  * from **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * to **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

#### Output
* output `array`
  * items [ReportSummary](#reportsummary)

### reports.trips.get
At least one _deviceId_ or one _groupId_ must be passed


```js
traccar.reports.trips.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * deviceId `array`
  * groupId `array`
  * from **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * to **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

#### Output
* output `array`
  * items [ReportTrips](#reporttrips)

### server.get
Fetch Server information


```js
traccar.server.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Server](#server)

### server.put
Update Server information


```js
traccar.server.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Server](#server)

#### Output
* output [Server](#server)

### session.delete
Close the Session


```js
traccar.session.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### session.get
Fetch Session information


```js
traccar.session.get({}, context)
```

#### Input
* input `object`
  * token `string`

#### Output
* output [User](#user)

### session.post
Create a new Session


```js
traccar.session.post({
  "body": null
}, context)
```

#### Input
* input `object`

#### Output
* output [User](#user)

### statistics.get
Fetch server Statistics


```js
traccar.statistics.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * to **required** `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

#### Output
* output `array`
  * items [Statistics](#statistics)

### users.get
Fetch a list of Users


```js
traccar.users.get({}, context)
```

#### Input
* input `object`
  * userId `string`: Can only be used by admin or manager users

#### Output
* output `array`
  * items [User](#user)

### users.post
Create a User


```js
traccar.users.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [User](#user)

#### Output
* output [User](#user)

### users.id.delete
Delete a User


```js
traccar.users.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### users.id.put
Update a User


```js
traccar.users.id.put({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [User](#user)

#### Output
* output [User](#user)



## Definitions

### Attribute
* Attribute `object`
  * attribute `string`
  * description `string`
  * expression `string`
  * id `integer`
  * type `string`: String|Number|Boolean

### Calendar
* Calendar `object`
  * attributes `object`
  * data `string`: base64 encoded in iCalendar format
  * id `integer`
  * name `string`

### Command
* Command `object`
  * attributes `object`
  * description `string`
  * deviceId `integer`
  * id `integer`
  * type `string`

### CommandType
* CommandType `object`
  * type `string`

### Device
* Device `object`
  * attributes `object`
  * category `string`
  * contact `string`
  * disabled `boolean`
  * geofenceIds `array`
    * items `integer`
  * groupId `integer`
  * id `integer`
  * lastUpdate `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * model `string`
  * name `string`
  * phone `string`
  * positionId `integer`
  * status `string`
  * uniqueId `string`

### DeviceAccumulators
* DeviceAccumulators `object`
  * deviceId `integer`
  * hours `number`
  * totalDistance `number`: in meters

### Driver
* Driver `object`
  * attributes `object`
  * id `integer`
  * name `string`
  * uniqueId `string`

### Event
* Event `object`
  * attributes `object`
  * deviceId `integer`
  * geofenceId `integer`
  * id `integer`
  * maintenanceId `integer`
  * positionId `integer`
  * serverTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * type `string`

### Geofence
* Geofence `object`
  * area `string`
  * attributes `object`
  * calendarId `integer`
  * description `string`
  * id `integer`
  * name `string`

### Group
* Group `object`
  * attributes `object`
  * groupId `integer`
  * id `integer`
  * name `string`

### Maintenance
* Maintenance `object`
  * attributes `object`
  * id `integer`
  * name `string`
  * period `number`
  * start `number`
  * type `string`

### Notification
* Notification `object`
  * always `boolean`
  * attributes `object`
  * calendarId `integer`
  * id `integer`
  * mail `boolean`
  * sms `boolean`
  * type `string`
  * web `boolean`

### NotificationType
* NotificationType `object`
  * type `string`

### Permission
* Permission `object`: This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
  * attributeId `integer`: Computed Attribute Id, can be second parameter only
  * calendarId `integer`: Calendar Id, can be second parameter only and only in combination with userId
  * deviceId `integer`: Device Id, can be first parameter or second only in combination with userId
  * driverId `integer`: Driver Id, can be second parameter only
  * geofenceId `integer`: Geofence Id, can be second parameter only
  * groupId `integer`: Group Id, can be first parameter or second only in combination with userId
  * managedUserId `integer`: User Id, can be second parameter only and only in combination with userId
  * userId `integer`: User Id, can be only first parameter

### Position
* Position `object`
  * accuracy `number`
  * address `string`
  * altitude `number`
  * attributes `object`
  * course `number`
  * deviceId `integer`
  * deviceTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * fixTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * id `integer`
  * latitude `number`
  * longitude `number`
  * network `object`
  * outdated `boolean`
  * protocol `string`
  * serverTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * speed `number`: in knots
  * valid `boolean`

### ReportStops
* ReportStops `object`
  * address `string`
  * deviceId `integer`
  * deviceName `string`
  * duration `integer`
  * endTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * engineHours `integer`
  * lat `number`
  * lon `number`
  * spentFuel `number`: in liters
  * startTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

### ReportSummary
* ReportSummary `object`
  * averageSpeed `number`: in knots
  * deviceId `integer`
  * deviceName `string`
  * distance `number`: in meters
  * engineHours `integer`
  * maxSpeed `number`: in knots
  * spentFuel `number`: in liters

### ReportTrips
* ReportTrips `object`
  * averageSpeed `number`: in knots
  * deviceId `integer`
  * deviceName `string`
  * distance `number`: in meters
  * driverName `string`
  * driverUniqueId `integer`
  * duration `integer`
  * endAddress `string`
  * endLat `number`
  * endLon `number`
  * endTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * maxSpeed `number`: in knots
  * spentFuel `number`: in liters
  * startAddress `string`
  * startLat `number`
  * startLon `number`
  * startTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`

### Server
* Server `object`
  * attributes `object`
  * bingKey `string`
  * coordinateFormat `string`
  * deviceReadonly `boolean`
  * forceSettings `boolean`
  * id `integer`
  * latitude `number`
  * limitCommands `boolean`
  * longitude `number`
  * map `string`
  * mapUrl `string`
  * poiLayer `string`
  * readonly `boolean`
  * registration `boolean`
  * twelveHourFormat `boolean`
  * version `string`
  * zoom `integer`

### Statistics
* Statistics `object`
  * activeDevices `integer`
  * activeUsers `integer`
  * captureTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * messagesReceived `integer`
  * messagesStored `integer`
  * requests `integer`

### User
* User `object`
  * administrator `boolean`
  * attributes `object`
  * coordinateFormat `string`
  * deviceLimit `integer`
  * deviceReadonly `boolean`
  * disabled `boolean`
  * email `string`
  * expirationTime `string`: in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
  * id `integer`
  * latitude `number`
  * limitCommands `boolean`
  * longitude `number`
  * map `string`
  * name `string`
  * password `string`
  * phone `string`
  * poiLayer `string`
  * readonly `boolean`
  * token `string`
  * twelveHourFormat `boolean`
  * userLimit `integer`
  * zoom `integer`


