# @datafire/caldav

Client library for CalDAV

## Installation and Usage
```bash
npm install --save @datafire/caldav
```
```js
let caldav = require('@datafire/caldav').create({
  username: "",
  password: "",
  server: "",
  basePath: "",
  principalPath: ""
});

caldav.listCalendars({}).then(data => {
  console.log(data);
});
```

## Description

Access and update calendar data using the CalDAV protocol

## Actions

### listEvents



```js
caldav.listEvents({
  "filename": ""
}, context)
```

#### Input
* input `object`
  * filename **required** `string`

#### Output
* output `array`
  * items `object`
    * etag `string`
    * calendarData `string`
    * start `string`
    * end `string`
    * summary `string`

### createCalendar



```js
caldav.createCalendar({
  "name": "",
  "timezone": "",
  "filename": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * timezone **required** `string`
  * filename **required** `string`
  * description `string`

#### Output
* output `string`

### listCalendars



```js
caldav.listCalendars({}, context)
```

#### Input
* input `object`

#### Output
* output `array`
  * items `object`
    * owner `string`
    * displayName `string`
    * ctag `string`
    * syncToken `string`

### deleteCalendar



```js
caldav.deleteCalendar({
  "filename": ""
}, context)
```

#### Input
* input `object`
  * filename **required** `string`

#### Output
* output `string`

### getChanges



```js
caldav.getChanges({
  "filename": "",
  "syncToken": ""
}, context)
```

#### Input
* input `object`
  * filename **required** `string`
  * syncToken **required** `string`

#### Output
* output `object`
  * syncToken `string`
  * changes `array`
    * items `object`
      * href `string`
      * etag `string`

### createEvent



```js
caldav.createEvent({
  "start": "",
  "end": "",
  "summary": "",
  "filename": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`
  * end **required** `string`
  * summary **required** `string`
  * organizer `string`
  * filename **required** `string`

#### Output
* output `string`

### deleteEvent



```js
caldav.deleteEvent({
  "filename": ""
}, context)
```

#### Input
* input `object`
  * filename **required** `string`

#### Output
* output `string`



## Definitions

*This integration has no definitions*
