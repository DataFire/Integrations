# @datafire/citrix_gotoassistseeit
<p>Allows you to integrate GoToAssist Seeit into your own solutions.</p><p>General notes:<ul><li>GoToAssist Seeit sessions are identified by their uuid. The more readable 9 digit support key (e.g. 123-456-789) may be reused later for another session and thus cannot be used to unambiguously identify a session.</li><li>If not explicitly stated otherwise all timestamps represent the number of milliseconds since 1970-01-01 in UTC (similar to a Unix Timestamp but with millisecond resolution)</li></ul></p>

## Operation: sessions.get
<p>This endpoint allows you to get all relevant details for mulitple GoToAssist Seeit sessions. Session details are available for 90 days.</p></p>The fields and their values in the response depend on session status and the time elapsed since session end; e.g. session data like snapshots or the session recording are only available for 72 hours.</p><p>The results will be paged, with paging customizable to match your requirements.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access Token"
    },
    "startTime": {
      "type": "integer",
      "format": "int64",
      "description": "Optional start of date range as timestamp (will be compared against session creation time)"
    },
    "endTime": {
      "type": "integer",
      "format": "int64",
      "description": "Optional end of date range as timestamp (will be compared against session creation time)"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Optional page number. If not specified, page 0 is delivered"
    },
    "size": {
      "type": "integer",
      "format": "int32",
      "description": "Optional page size. If not specified, 5 sessions are delivered"
    },
    "sort": {
      "type": "string",
      "description": "Optional sort criteria, i.e. field name to sort by, optionally followed by a comma and the sort order (asc or desc). Every field available in the session details can be used as sort criteria. If not specified, result is sorted ascending by sessionCreateTime"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PagedSessionDetails"
}
```
## Operation: sessions.post
This endpoint allows you to create a GoToAssist Seeit session. The session logically exists but is not started until you open the returned startUrl in a suitable browser.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Session"
}
```
## Operation: sessions.uuid.get
<p>This endpoint allows you to get all relevant details for a single GoToAssist Seeit session. Session details are available for 90 days.</p><p>The fields and their values in the response depend on session status and the time elapsed since session end; e.g. session data like snapshots or the session recording are only available for 72 hours.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access Token"
    },
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "the uuid returned when creating the session."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SessionDetails"
}
```
