# @datafire/citrix_gotoassistseeit

Client library for GoToAssist Seeit

## Installation and Usage
```bash
npm install --save datafire @datafire/citrix_gotoassistseeit
```

```js
let datafire = require('datafire');
let citrix_gotoassistseeit = require('@datafire/citrix_gotoassistseeit').create();

citrix_gotoassistseeit.sessions.get({}).then(data => {
  console.log(data);
})
```

## Description
<p>Allows you to integrate GoToAssist Seeit into your own solutions.</p><p>General notes:<ul><li>GoToAssist Seeit sessions are identified by their uuid. The more readable 9 digit support key (e.g. 123-456-789) may be reused later for another session and thus cannot be used to unambiguously identify a session.</li><li>If not explicitly stated otherwise all timestamps represent the number of milliseconds since 1970-01-01 in UTC (similar to a Unix Timestamp but with millisecond resolution)</li></ul></p>

## Actions
### sessions.get
<p>This endpoint allows you to get all relevant details for mulitple GoToAssist Seeit sessions. Session details are available for 90 days.</p></p>The fields and their values in the response depend on session status and the time elapsed since session end; e.g. session data like snapshots or the session recording are only available for 72 hours.</p><p>The results will be paged, with paging customizable to match your requirements.</p>


```js
citrix_gotoassistseeit.sessions.get({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access Token
* startTime (integer) - Optional start of date range as timestamp (will be compared against session creation time)
* endTime (integer) - Optional end of date range as timestamp (will be compared against session creation time)
* page (integer) - Optional page number. If not specified, page 0 is delivered
* size (integer) - Optional page size. If not specified, 5 sessions are delivered
* sort (string) - Optional sort criteria, i.e. field name to sort by, optionally followed by a comma and the sort order (asc or desc). Every field available in the session details can be used as sort criteria. If not specified, result is sorted ascending by sessionCreateTime

### sessions.post
This endpoint allows you to create a GoToAssist Seeit session. The session logically exists but is not started until you open the returned startUrl in a suitable browser.


```js
citrix_gotoassistseeit.sessions.post({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access Token

### sessions.uuid.get
<p>This endpoint allows you to get all relevant details for a single GoToAssist Seeit session. Session details are available for 90 days.</p><p>The fields and their values in the response depend on session status and the time elapsed since session end; e.g. session data like snapshots or the session recording are only available for 72 hours.</p>


```js
citrix_gotoassistseeit.sessions.uuid.get({
  "Authorization": "",
  "uuid": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access Token
* uuid (string) **required** - the uuid returned when creating the session.

