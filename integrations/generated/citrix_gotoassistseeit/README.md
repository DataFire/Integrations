# @datafire/citrix_gotoassistseeit

Client library for GoToAssist Seeit

## Installation and Usage
```bash
npm install --save @datafire/citrix_gotoassistseeit
```
```js
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

#### Input
* input `object`
  * Authorization **required** `string`: Access Token
  * startTime `integer`: Optional start of date range as timestamp (will be compared against session creation time)
  * endTime `integer`: Optional end of date range as timestamp (will be compared against session creation time)
  * page `integer`: Optional page number. If not specified, page 0 is delivered
  * size `integer`: Optional page size. If not specified, 5 sessions are delivered
  * sort `string`: Optional sort criteria, i.e. field name to sort by, optionally followed by a comma and the sort order (asc or desc). Every field available in the session details can be used as sort criteria. If not specified, result is sorted ascending by sessionCreateTime

#### Output
* output [PagedSessionDetails](#pagedsessiondetails)

### sessions.post
This endpoint allows you to create a GoToAssist Seeit session. The session logically exists but is not started until you open the returned startUrl in a suitable browser.


```js
citrix_gotoassistseeit.sessions.post({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access Token

#### Output
* output [Session](#session)

### sessions.uuid.get
<p>This endpoint allows you to get all relevant details for a single GoToAssist Seeit session. Session details are available for 90 days.</p><p>The fields and their values in the response depend on session status and the time elapsed since session end; e.g. session data like snapshots or the session recording are only available for 72 hours.</p>


```js
citrix_gotoassistseeit.sessions.uuid.get({
  "Authorization": "",
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access Token
  * uuid **required** `string`: the uuid returned when creating the session.

#### Output
* output [SessionDetails](#sessiondetails)



## Definitions

### Link
* Link `object`
  * href **required** `string`: The corresponding link
  * rel **required** `string` (values: self, next, prev): The kind of link that is provided

### PagedSessionDetails
* PagedSessionDetails `object`
  * content **required** `array`: Details for the sessions within this result page. May be an empty array if there are no sessions that match the specified query parameters
    * items [SessionDetails](#sessiondetails)
  * links **required** `array`: Links to the current, next and previous page (if applicable)
    * items [Link](#link)
  * page **required** [PagingInfo](#paginginfo)

### PagingInfo
* PagingInfo `object`
  * number **required** `integer`: Current page number
  * size **required** `integer`: Page size (i.e. number of elements within a page)
  * totalElements **required** `integer`: Number of total elements available
  * totalPages **required** `integer`: Number of total pages available

### Session
* Session `object`
  * startUrl **required** `string`: The URL that can be used to start the session in a suitable browser. Valid only until the session has been finished
  * supportKey **required** `string`: Human readable support key
  * uuid **required** `string`: Canonical form of the [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) uniquely identifying this session

### SessionDetails
* SessionDetails `object`
  * sessionCreateTime **required** `integer`: Timestamp of when the session was created via API
  * sessionDataDownloadUrl `string`: Url of zip file containing session data like photos, notes or recording (if applicable)
  * sessionDataDownloadUrlExpiration `integer`: Timestamp of when sessionDataDownloadUrl expires. After the specified expiry date session data cannot be downloaded any longer
  * sessionDataPhotoCount `integer`: Number of photos stored for this session
  * sessionDataPhotoNotesCount `integer`: Number of photo notes stored for this session
  * sessionDataSize `integer`: Size of the session data zip file, 0 if not present
  * sessionDataStatus `string` (values: NO_DATA, PROCESSING, AVAILABLE): A string describing the availability of session data
  * sessionEndTime `integer`: Timestamp of when the session was ended (if applicable)
  * sessionJoinTime `integer`: Timestamp of when the session was joined by the mobile app (if applicable)
  * sessionNotes `string`: Session notes stored for this session (cut to 1000 characters)
  * sessionRecorded `boolean`: true if session is being recorded, otherwise false
  * sessionStartTime `integer`: Timestamp of when the session was started in the browser (if applicable)
  * sessionStatus **required** `string` (values: CREATED, STARTED, JOINED, FINISHED): A string describing the session status
  * startUrl `string`: The URL that can be used to start the session in a suitable browser. Valid only until the session has been finished
  * supportKey **required** `string`: Human readable support key
  * technicianEmail `string`: Email address of technician
  * uuid **required** `string`: Canonical form of the [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) uniquely identifying this session


