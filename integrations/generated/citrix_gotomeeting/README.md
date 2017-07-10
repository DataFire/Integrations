# @datafire/citrix_gotomeeting
<br>The GoToMeeting API provides seamless integration of GoToMeeting provisioning and meeting management into your existing infrastructure or third party applications.<br><br>For customers, the ability to add, suspend or delete an organizer in your GoToMeeting Corporate account from within your primary management systems simplifies and streamlines the entire process of account management. The ability to monitor meeting schedules, history and active meeting status allows managers to leverage GoToMeeting activities through your primary applications.<br><br>For third parties, the ability to create, update or delete a meeting from within your application makes real-time collaboration possible for your customers. The ability to update meeting schedules, view history and scheduled meetings, and view attendees from past meetings allows you to enhance your users' experience and the value of your applications.

## Operation: groups.get
List all groups for an account. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
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
  "items": {
    "$ref": "#/definitions/Group"
  },
  "type": "array"
}
```
## Operation: groups.groupKey.attendees.get
Returns all attendees for all meetings within specified date range held by organizers within the specified group. This API call is only available to users with the admin role. This API call can be used only for groups with maximum 50 organizers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group"
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "Start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "End of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AttendeeByGroup"
  },
  "type": "array"
}
```
## Operation: groups.groupKey.historicalMeetings.get
Get historical meetings for the specified group that started within the specified date/time range. This API call is only available to users with the admin role. This API call is restricted to groups with a maximum of 50 organizers. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group"
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/HistoricalMeetingByGroup"
  },
  "type": "array"
}
```
## Operation: groups.groupKey.meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings by group' and 'Get upcoming meetings by group'. Get meetings for a specified group. Additional filters can be used to view only meetings within a specified date range. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group"
    },
    "history": {
      "type": "boolean",
      "description": "When 'true', returns all past meetings within date range"
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "If history=true, required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "If history=true, required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey",
    "history",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/HistoryMeetingByGroup"
  },
  "type": "array"
}
```
## Operation: groups.groupKey.organizers.get
Returns all the organizers within a specific group. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/OrganizerByGroup"
  },
  "type": "array"
}
```
## Operation: groups.groupKey.organizers.post
Creates a new organizer and sends an email to the email address defined in request. This API call is only available to users with the admin role. You may also pass 'G2W' or 'G2T' or 'OPENVOICE' as productType variables, creating organizers for those products. A G2W or G2T organizer will also have access to G2M.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group"
    },
    "body": {
      "$ref": "#/definitions/OrganizerReq"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/OrganizerShort"
  },
  "type": "array"
}
```
## Operation: groups.groupKey.upcomingMeetings.get
Get upcoming meetings for a specified group. This API call is only available to users with the admin role. This API call can be used only for groups with maximum 50 organizers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "groupKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the group"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "groupKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UpcomingMeetingByGroup"
  },
  "type": "array"
}
```
## Operation: historicalMeetings.get
Get historical meetings for the currently authenticated organizer that started within the specified date/time range. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/HistoricalMeeting"
  },
  "type": "array"
}
```
## Operation: meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings' and 'Get upcoming meetings'.  Gets historical meetings for the current authenticated organizer. Requires date range for filtering results to only meetings within specified dates. History searches will contain the parameter 'meetingInstanceKey' which is used in conjunction with the call 'Get Attendees by Meeting' to get attendee information for a past meeting.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "history": {
      "type": "boolean",
      "description": "When 'true', returns all past meetings within date range",
      "enum": [
        true
      ]
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "If history=true, required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "If history=true, required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
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
  "items": {
    "$ref": "#/definitions/MeetingHistory"
  },
  "type": "array"
}
```
## Operation: meetings.post
Create a new meeting based on the parameters specified.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "body": {
      "$ref": "#/definitions/MeetingReqCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/MeetingCreated"
  },
  "type": "array"
}
```
## Operation: meetings.meetingId.delete
Deletes the meeting identified by the meetingId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "meetingId": {
      "type": "integer",
      "format": "int64",
      "description": "The meeting ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "meetingId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: meetings.meetingId.get
Returns the meeting details for the specified meeting.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "meetingId": {
      "type": "integer",
      "format": "int64",
      "description": "The meeting ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "meetingId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/MeetingById"
  },
  "type": "array"
}
```
## Operation: meetings.meetingId.put
Updates an existing meeting specified by meetingId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "meetingId": {
      "type": "integer",
      "format": "int64",
      "description": "The meeting ID"
    },
    "body": {
      "$ref": "#/definitions/MeetingReqUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "meetingId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: meetings.meetingId.attendees.get
List all attendees for specified meetingId of historical meeting. The historical meetings can be fetched using 'Get historical meetings', 'Get historical meetings by organizer', and 'Get historical meetings by group'. For users with the admin role this call returns attendees for any meeting. For any other user the call will return attendees for meetings on which the user is a valid organizer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "meetingId": {
      "type": "integer",
      "format": "int64",
      "description": "The meeting ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "meetingId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AttendeeByMeeting"
  },
  "type": "array"
}
```
## Operation: meetings.meetingId.start.get
Returns a host URL that can be used to start a meeting. When this URL is opened in a web browser, the GoToMeeting client will be downloaded and launched and the meeting will start. The end user is not required to login to a client.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "meetingId": {
      "type": "integer",
      "format": "int64",
      "description": "The meeting ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "meetingId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StartUrl"
}
```
## Operation: organizers.delete
Deletes the individual organizer specified by the email address. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "email": {
      "type": "string",
      "description": "The email address of the organizer"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: organizers.get
Gets the individual organizer specified by the organizer's email address. If an email address is not specified, all organizers are returned. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "email": {
      "type": "string",
      "description": "The email address of the organizer"
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
  "items": {
    "$ref": "#/definitions/Organizer"
  },
  "type": "array"
}
```
## Operation: organizers.post
Creates a new organizer and sends an email to the email address defined in the request. This API call is only available to users with the admin role. You may also pass 'G2W' or 'G2T' or 'OPENVOICE' as productType variables, creating organizers for those products. A G2W or G2T organizer will also have access to G2M.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "body": {
      "$ref": "#/definitions/OrganizerReq"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/OrganizerShort"
  },
  "type": "array"
}
```
## Operation: organizers.organizerKey.delete
Deletes the individual organizer specified by the organizer key. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "organizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the organizer"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: organizers.organizerKey.get
Returns the individual organizer specified by the key. This API call is only available to users with the admin role. Non-admin users can only make this call for their own organizerKey.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "organizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the organizer"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Organizer"
  },
  "type": "array"
}
```
## Operation: organizers.organizerKey.put
Updates the products of the specified organizer. To add a product (G2M, G2W, G2T, OPENVOICE) for the organizer, the call must be sent once for each product you want to add. To remove all products for the organizer, set status to 'suspended'. The call is limited to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "organizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the organizer"
    },
    "body": {
      "$ref": "#/definitions/OrganizerStatus"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: organizers.organizerKey.attendees.get
Lists all attendees for all meetings within a specified date range for a specified organizer. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "organizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the organizer"
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "A required start of date range in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "A required end of date range in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AttendeeByOrganizer"
  },
  "type": "array"
}
```
## Operation: organizers.organizerKey.historicalMeetings.get
Get historical meetings for the specified organizer that started within the specified date/time range. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "organizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the organizer"
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "startDate",
    "endDate"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/HistoricalMeeting"
  },
  "type": "array"
}
```
## Operation: organizers.organizerKey.meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings by organizer' and 'Get upcoming meetings by organizer'. Gets future (scheduled) or past (history) meetings for a specified organizer. Include 'history=true' and the past start and end dates in the URL to retrieve past meetings. Enter 'scheduled=true' (without dates) to get scheduled meetings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "organizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the organizer"
    },
    "scheduled": {
      "type": "boolean",
      "description": "When 'true', returns all future meetings. Date range not supported."
    },
    "history": {
      "type": "boolean",
      "description": "When 'true', returns all past meetings within date range"
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "If history is 'true', required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z"
    },
    "endDate": {
      "type": "string",
      "format": "date-time",
      "description": "If history is 'true', required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/MeetingByOrganizer"
  },
  "type": "array"
}
```
## Operation: organizers.organizerKey.upcomingMeetings.get
Get upcoming meetings for a specified organizer. This API call is only available to users with the admin role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "organizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the organizer"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UpcomingMeeting"
  },
  "type": "array"
}
```
## Operation: upcomingMeetings.get
Gets upcoming meetings for the current authenticated organizer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
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
  "items": {
    "$ref": "#/definitions/UpcomingMeeting"
  },
  "type": "array"
}
```
