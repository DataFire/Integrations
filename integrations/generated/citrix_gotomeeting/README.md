# @datafire/citrix_gotomeeting

Client library for GoToMeeting

## Installation and Usage
```bash
npm install --save @datafire/citrix_gotomeeting
```
```js
let citrix_gotomeeting = require('@datafire/citrix_gotomeeting').create();

.then(data => {
  console.log(data);
});
```

## Description

<br>The GoToMeeting API provides seamless integration of GoToMeeting provisioning and meeting management into your existing infrastructure or third party applications.<br><br>For customers, the ability to add, suspend or delete an organizer in your GoToMeeting Corporate account from within your primary management systems simplifies and streamlines the entire process of account management. The ability to monitor meeting schedules, history and active meeting status allows managers to leverage GoToMeeting activities through your primary applications.<br><br>For third parties, the ability to create, update or delete a meeting from within your application makes real-time collaboration possible for your customers. The ability to update meeting schedules, view history and scheduled meetings, and view attendees from past meetings allows you to enhance your users' experience and the value of your applications.

## Actions

### groups.get
List all groups for an account. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.groups.get({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token

#### Output
* output `array`
  * items [Group](#group)

### groups.groupKey.attendees.get
Returns all attendees for all meetings within specified date range held by organizers within the specified group. This API call is only available to users with the admin role. This API call can be used only for groups with maximum 50 organizers.


```js
citrix_gotomeeting.groups.groupKey.attendees.get({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * groupKey **required** `integer`: The key of the group
  * startDate `string`: Start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate `string`: End of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [AttendeeByGroup](#attendeebygroup)

### groups.groupKey.historicalMeetings.get
Get historical meetings for the specified group that started within the specified date/time range. This API call is only available to users with the admin role. This API call is restricted to groups with a maximum of 50 organizers. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.


```js
citrix_gotomeeting.groups.groupKey.historicalMeetings.get({
  "Authorization": "",
  "groupKey": 0,
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * groupKey **required** `integer`: The key of the group
  * startDate **required** `string`: Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate **required** `string`: Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [HistoricalMeetingByGroup](#historicalmeetingbygroup)

### groups.groupKey.meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings by group' and 'Get upcoming meetings by group'. Get meetings for a specified group. Additional filters can be used to view only meetings within a specified date range. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.groups.groupKey.meetings.get({
  "Authorization": "",
  "groupKey": 0,
  "history": true,
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * groupKey **required** `integer`: The key of the group
  * history **required** `boolean`: When 'true', returns all past meetings within date range
  * startDate **required** `string`: If history=true, required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate **required** `string`: If history=true, required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [HistoryMeetingByGroup](#historymeetingbygroup)

### groups.groupKey.organizers.get
Returns all the organizers within a specific group. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.groups.groupKey.organizers.get({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * groupKey **required** `integer`: The key of the group

#### Output
* output `array`
  * items [OrganizerByGroup](#organizerbygroup)

### groups.groupKey.organizers.post
Creates a new organizer and sends an email to the email address defined in request. This API call is only available to users with the admin role. You may also pass 'G2W' or 'G2T' or 'OPENVOICE' as productType variables, creating organizers for those products. A G2W or G2T organizer will also have access to G2M.


```js
citrix_gotomeeting.groups.groupKey.organizers.post({
  "Authorization": "",
  "groupKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * groupKey **required** `integer`: The key of the group
  * body **required** [OrganizerReq](#organizerreq)

#### Output
* output `array`
  * items [OrganizerShort](#organizershort)

### groups.groupKey.upcomingMeetings.get
Get upcoming meetings for a specified group. This API call is only available to users with the admin role. This API call can be used only for groups with maximum 50 organizers.


```js
citrix_gotomeeting.groups.groupKey.upcomingMeetings.get({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * groupKey **required** `integer`: The key of the group

#### Output
* output `array`
  * items [UpcomingMeetingByGroup](#upcomingmeetingbygroup)

### historicalMeetings.get
Get historical meetings for the currently authenticated organizer that started within the specified date/time range. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.


```js
citrix_gotomeeting.historicalMeetings.get({
  "Authorization": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * startDate **required** `string`: Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate **required** `string`: Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [HistoricalMeeting](#historicalmeeting)

### meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings' and 'Get upcoming meetings'.  Gets historical meetings for the current authenticated organizer. Requires date range for filtering results to only meetings within specified dates. History searches will contain the parameter 'meetingInstanceKey' which is used in conjunction with the call 'Get Attendees by Meeting' to get attendee information for a past meeting.


```js
citrix_gotomeeting.meetings.get({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * history `boolean` (values: true): When 'true', returns all past meetings within date range
  * startDate `string`: If history=true, required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate `string`: If history=true, required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [MeetingHistory](#meetinghistory)

### meetings.post
Create a new meeting based on the parameters specified.


```js
citrix_gotomeeting.meetings.post({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * body **required** [MeetingReqCreate](#meetingreqcreate)

#### Output
* output `array`
  * items [MeetingCreated](#meetingcreated)

### meetings.meetingId.delete
Deletes the meeting identified by the meetingId.


```js
citrix_gotomeeting.meetings.meetingId.delete({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * meetingId **required** `integer`: The meeting ID

#### Output
*Output schema unknown*

### meetings.meetingId.get
Returns the meeting details for the specified meeting.


```js
citrix_gotomeeting.meetings.meetingId.get({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * meetingId **required** `integer`: The meeting ID

#### Output
* output `array`
  * items [MeetingById](#meetingbyid)

### meetings.meetingId.put
Updates an existing meeting specified by meetingId.


```js
citrix_gotomeeting.meetings.meetingId.put({
  "Authorization": "",
  "meetingId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * meetingId **required** `integer`: The meeting ID
  * body **required** [MeetingReqUpdate](#meetingrequpdate)

#### Output
*Output schema unknown*

### meetings.meetingId.attendees.get
List all attendees for specified meetingId of historical meeting. The historical meetings can be fetched using 'Get historical meetings', 'Get historical meetings by organizer', and 'Get historical meetings by group'. For users with the admin role this call returns attendees for any meeting. For any other user the call will return attendees for meetings on which the user is a valid organizer.


```js
citrix_gotomeeting.meetings.meetingId.attendees.get({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * meetingId **required** `integer`: The meeting ID

#### Output
* output `array`
  * items [AttendeeByMeeting](#attendeebymeeting)

### meetings.meetingId.start.get
Returns a host URL that can be used to start a meeting. When this URL is opened in a web browser, the GoToMeeting client will be downloaded and launched and the meeting will start. The end user is not required to login to a client.


```js
citrix_gotomeeting.meetings.meetingId.start.get({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * meetingId **required** `integer`: The meeting ID

#### Output
* output [StartUrl](#starturl)

### organizers.delete
Deletes the individual organizer specified by the email address. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.delete({
  "Authorization": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * email **required** `string`: The email address of the organizer

#### Output
*Output schema unknown*

### organizers.get
Gets the individual organizer specified by the organizer's email address. If an email address is not specified, all organizers are returned. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.get({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * email `string`: The email address of the organizer

#### Output
* output `array`
  * items [Organizer](#organizer)

### organizers.post
Creates a new organizer and sends an email to the email address defined in the request. This API call is only available to users with the admin role. You may also pass 'G2W' or 'G2T' or 'OPENVOICE' as productType variables, creating organizers for those products. A G2W or G2T organizer will also have access to G2M.


```js
citrix_gotomeeting.organizers.post({
  "Authorization": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * body **required** [OrganizerReq](#organizerreq)

#### Output
* output `array`
  * items [OrganizerShort](#organizershort)

### organizers.organizerKey.delete
Deletes the individual organizer specified by the organizer key. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.organizerKey.delete({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer

#### Output
*Output schema unknown*

### organizers.organizerKey.get
Returns the individual organizer specified by the key. This API call is only available to users with the admin role. Non-admin users can only make this call for their own organizerKey.


```js
citrix_gotomeeting.organizers.organizerKey.get({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer

#### Output
* output `array`
  * items [Organizer](#organizer)

### organizers.organizerKey.put
Updates the products of the specified organizer. To add a product (G2M, G2W, G2T, OPENVOICE) for the organizer, the call must be sent once for each product you want to add. To remove all products for the organizer, set status to 'suspended'. The call is limited to users with the admin role.


```js
citrix_gotomeeting.organizers.organizerKey.put({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * body **required** [OrganizerStatus](#organizerstatus)

#### Output
*Output schema unknown*

### organizers.organizerKey.attendees.get
Lists all attendees for all meetings within a specified date range for a specified organizer. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.organizerKey.attendees.get({
  "Authorization": "",
  "organizerKey": 0,
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * startDate **required** `string`: A required start of date range in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate **required** `string`: A required end of date range in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [AttendeeByOrganizer](#attendeebyorganizer)

### organizers.organizerKey.historicalMeetings.get
Get historical meetings for the specified organizer that started within the specified date/time range. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.


```js
citrix_gotomeeting.organizers.organizerKey.historicalMeetings.get({
  "Authorization": "",
  "organizerKey": 0,
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * startDate **required** `string`: Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate **required** `string`: Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [HistoricalMeeting](#historicalmeeting)

### organizers.organizerKey.meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings by organizer' and 'Get upcoming meetings by organizer'. Gets future (scheduled) or past (history) meetings for a specified organizer. Include 'history=true' and the past start and end dates in the URL to retrieve past meetings. Enter 'scheduled=true' (without dates) to get scheduled meetings.


```js
citrix_gotomeeting.organizers.organizerKey.meetings.get({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * scheduled `boolean`: When 'true', returns all future meetings. Date range not supported.
  * history `boolean`: When 'true', returns all past meetings within date range
  * startDate `string`: If history is 'true', required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
  * endDate `string`: If history is 'true', required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

#### Output
* output `array`
  * items [MeetingByOrganizer](#meetingbyorganizer)

### organizers.organizerKey.upcomingMeetings.get
Get upcoming meetings for a specified organizer. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.organizerKey.upcomingMeetings.get({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer

#### Output
* output `array`
  * items [UpcomingMeeting](#upcomingmeeting)

### upcomingMeetings.get
Gets upcoming meetings for the current authenticated organizer.


```js
citrix_gotomeeting.upcomingMeetings.get({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token

#### Output
* output `array`
  * items [UpcomingMeeting](#upcomingmeeting)



## Definitions

### AttendeeByGroup
* AttendeeByGroup `object`: Describes an attendee of a meeting instance held by an organizer within a specified group.
  * attendeeEmail **required** `string`: The attendee's email address
  * attendeeName **required** `string`: The full name of the attendee
  * conferenceCallInfo **required** `string`: Audio options for the attended meeting
  * duration **required** `integer`: The duration of attendance in minutes
  * email **required** `string`: The email address of the meeting organizer
  * endTime **required** `string`: The time the meeting instance ended
  * firstName **required** `string`: The first name of the organizer of the attended meeting
  * groupName **required** `string`: The name of the group
  * joinTime **required** `string`: The time the attendee joined the meeting instance
  * lastName **required** `string`: The surname of the meeting organizer
  * leaveTime **required** `string`: The time the attendee left the meeting instance
  * meetingId **required** `string`: The meeting ID
  * meetingInstanceKey **required** `integer`: The key of the attended meeting instance
  * meetingType **required** [MeetingType](#meetingtype)
  * numAttendees **required** `integer`: The number of attendees at the attended meeting instance
  * organizerKey **required** `string`: The key of the meeting organizer
  * organizerkey **required** `integer`: The key of the meeting organizer. Field retained for backwards compatibility reasons
  * startTime **required** `string`: The time the meeting instance started
  * subject **required** `string`: The subject of the attended meeting

### AttendeeByMeeting
* AttendeeByMeeting `object`: Describes an attendee of a specified meeting instance.
  * attendeeEmail **required** `string`: The attendee's email address
  * attendeeName **required** `string`: The attendee's full name
  * conferenceCallInfo **required** `string`: Audio options for the meeting
  * duration **required** `integer`: The meeting duration in minutes
  * email **required** `string`: The email address of the meeting organizer
  * endTime **required** `string`: The ending time of the meeting instance
  * firstName **required** `string`: The first name of the meeting organizer
  * groupName **required** `string`: DEPRECATED. Returns 'NA'
  * joinTime **required** `string`: The time the attendee joined the meeting instance
  * lastName **required** `string`: The surname of the meeting organizer
  * leaveTime **required** `string`: The time the attendee left the meeting instance
  * meetingId **required** `integer`: The meeting ID
  * meetingInstanceKey **required** `integer`: The key of the unique meeting instance
  * meetingType **required** [MeetingType](#meetingtype)
  * name **required** `string`: The attendee's full name
  * numAttendees **required** `integer`: The number of attendees at the meeting instance
  * organizerkey **required** `integer`: The key of the meeting organizer
  * startTime **required** `string`: The starting time of the meeting instance
  * subject **required** `string`: The subject of the meeting

### AttendeeByOrganizer
* AttendeeByOrganizer `object`: Describes an attendee of a meeting instance held by a specified organizer.
  * attendeeEmail **required** `string`: The attendee's email address
  * attendeeName **required** `string`: The full name of the attendee
  * conferenceCallInfo **required** `string`: Audio options for the attended meeting
  * duration **required** `integer`: The duration of attendance in minutes
  * email **required** `string`: The email address of the meeting organizer
  * endTime **required** `string`: The time the meeting instance ended
  * firstName **required** `string`: The first name of the meeting organizer
  * groupName **required** `string`: The name of the group the organizer is assigned to
  * joinTime **required** `string`: The time the attendee joined the meeting instance
  * lastName **required** `string`: The surname of the meeting organizer
  * leaveTime **required** `string`: The time the attendee left the meeting instance
  * meetingId **required** `integer`: The meeting ID
  * meetingInstanceKey **required** `integer`: The key of the attended meeting instance
  * meetingType **required** [MeetingType](#meetingtype)
  * name **required** `string`: The full name of the meeting organizer
  * newMeetingId **required** `string`: The formatted meeting ID
  * numAttendees **required** `integer`: The number of attendees at the attended meeting instance
  * organizerkey **required** `integer`: The key of the meeting organizer. Field retained for backwards compatibility reasons
  * startTime **required** `string`: The time the meeting instance started
  * subject **required** `string`: The subject of the attended meeting

### Group
* Group `object`: Describes a collection of organizers categorized by department or job function, for example. Can be a subgroup of a larger group.
  * groupName **required** `string`: The name of this group
  * groupkey **required** `integer`: The key of this group
  * numOrganizers **required** `integer`: The number of organizers assigned to this group
  * parentKey **required** `integer`: The key of the parent group this group belongs to. Identical with the groupkey if this group is not a subgroup
  * status **required** [Status](#status)

### HistoricalMeeting
* HistoricalMeeting `object`: Describes a historical meeting within specified dates.
  * accountKey **required** `string`: The key of the company account
  * conferenceCallInfo **required** `string`: Audio options for the meeting
  * duration **required** `string`: The duration of the meeting session in minutes
  * email **required** `string`: The meeting organizer's email address
  * endTime **required** `string`: The time the meeting instance ended
  * firstName **required** `string`: The meeting organizer's first name
  * lastName **required** `string`: The surname of the meeting organizer
  * locale **required** `string`: The current language setting of the organizer in the web portal
  * meetingId **required** `string`: The meeting ID
  * meetingType **required** [MeetingType](#meetingtype)
  * numAttendees **required** `string`: The number of attendees at the meeting instance
  * organizerKey **required** `string`: The key of the meeting organizer
  * sessionId **required** `string`: The ID of the meeting session
  * startTime **required** `string`: The time the meeting instance started
  * subject **required** `string`: The subject of the meeting

### HistoricalMeetingByGroup
* HistoricalMeetingByGroup `object`: Describes a historical meeting within specified dates for a specified group.
  * accountKey **required** `string`: The key of the company account
  * duration **required** `string`: The duration of the meeting session in minutes
  * email **required** `string`: The meeting organizer's email address
  * endTime **required** `string`: The time the meeting instance ended
  * firstName **required** `string`: The meeting organizer's first name
  * groupName **required** `string`: The name of the group
  * lastName **required** `string`: The surname of the meeting organizer
  * locale **required** `string`: The current language setting of the organizer in the web portal
  * meetingId **required** `string`: The meeting ID
  * meetingType **required** [MeetingType](#meetingtype)
  * numAttendees **required** `string`: The number of attendees at the meeting instance
  * organizerKey **required** `string`: The key of the meeting organizer
  * startTime **required** `string`: The time the meeting instance started
  * subject **required** `string`: The subject of the meeting

### HistoryMeetingByGroup
* HistoryMeetingByGroup `object`: Describes past meeting instance(s) held by an organizer within a specified group.
  * conferenceCallInfo **required** `string`: Audio options for the meeting
  * duration **required** `string`: The duration of this meeting instance in minutes
  * email **required** `string`: The email address of the meeting organizer
  * endTime **required** `string`: The time this meeting instance ended
  * firstName **required** `string`: The first name of the meeting organizer
  * groupName **required** `string`: The name of the group
  * lastName **required** `string`: The surname of the meeting organizer
  * meetingId **required** `string`: The meeting ID
  * meetingInstanceKey **required** `integer`: The key of this meeting instance
  * meetingType **required** [MeetingType](#meetingtype)
  * numAttendees **required** `integer`: The number of attendees at this meeting instance
  * organizerKey **required** `string`: The key of the meeting organizer
  * organizerkey **required** `integer`: The key of the meeting organizer. Field retained for backwards compatibility reasons
  * startTime **required** `string`: The time this meeting instance started
  * subject **required** `string`: The subject of the meeting

### MeetingById
* MeetingById `object`: Describes a given meeting.
  * conferenceCallInfo **required** `string`: Audio options of the meeting
  * createTime **required** `string`: DEPRECATED. Returns an empty string ''
  * duration **required** `integer`: The duration of the meeting in minutes
  * endTime **required** `string`: The ending time of the meeting
  * maxParticipants **required** `integer`: The maximum number of participants allowed at the meeting
  * meetingId **required** `integer`: The meeting ID
  * meetingKey **required** `integer`: The meeting ID. Field retained for backwards compatibility reasons
  * meetingType **required** [MeetingType](#meetingtype)
  * passwordRequired **required** `boolean`: Indicates whether a password is required to join the meeting
  * startTime **required** `string`: The meeting starting time
  * status **required** [MeetingStatus](#meetingstatus)
  * subject **required** `string`: The subject of the meeting
  * uniqueMeetingId **required** `integer`: The meeting ID. Field retained for backwards compatibility reasons

### MeetingByOrganizer
* MeetingByOrganizer `object`: Describes a meeting scheduled by a specified organizer
  * conferenceCallInfo **required** `string`: Audio options for the meeting
  * createTime **required** `string`: DEPRECATED. Returns an empty string ''
  * endTime **required** `string`: The ending time of the meeting
  * maxParticipants **required** `integer`: The maximum number of participants allowed at the meeting
  * meetingType **required** [MeetingType](#meetingtype)
  * meetingid **required** `integer`: The meeting ID
  * passwordRequired **required** `boolean`: Indicates whether a password is required to join the meeting
  * startTime **required** `string`: The starting time of the meeting
  * status **required** [MeetingStatus](#meetingstatus)
  * subject **required** `string`: The subject of the meeting
  * uniqueMeetingId **required** `integer`: A unique ID for the meeting

### MeetingCreated
* MeetingCreated `object`: Describes a newly created meeting.
  * conferenceCallInfo **required** `string`: Audio options for the meeting
  * joinURL **required** `string`: The URL the meeting participants will use to join the meeting
  * maxParticipants **required** `integer`: The maximum number of participants allowed in the meeting
  * meetingid **required** `integer`: The meeting ID
  * uniqueMeetingId **required** `integer`: The meeting ID. Field retained for backwards compatibility reasons

### MeetingHistory
* MeetingHistory `object`: Describes a unique past meeting instance.
  * conferenceCallInfo **required** `string`: Audio options for the meeting
  * date **required** `string`: The time the meeting instance started. Field retained for backwards compatibility reasons
  * duration **required** `integer`: The duration of the meeting session in minutes
  * email **required** `string`: The meeting organizer's email address
  * endTime **required** `string`: The time the meeting instance ended
  * firstName **required** `string`: The meeting organizer's first name
  * groupName **required** `string`: DEPRECATED. An empty string '' is returned
  * lastName **required** `string`: The surname of the meeting organizer
  * meetingId **required** `integer`: The meeting ID
  * meetingInstanceKey **required** `integer`: The key of the unique meeting instance
  * meetingKey **required** `integer`: The meeting ID. Field retained for backwards compatibility reasons
  * meetingType **required** [MeetingType](#meetingtype)
  * newMeetingId **required** `string`: Formatted meeting ID
  * newOrganizerKey **required** `string`: The key of the meeting organizer. Field introduced for compatibility reasons
  * numAttendees **required** `integer`: The number of attendees at the meeting instance
  * organizerKey **required** `string`: The key of the meeting organizer
  * organizerkey **required** `string`: The key of the meeting organizer. Field retained for backwards compatibility reasons
  * passwordRequired **required** `boolean`: DEPRECATED. An empty string '' is returned
  * sessionId **required** `integer`: The ID of the meeting session
  * startTime **required** `string`: The time the meeting instance started
  * status **required** `string`: DEPRECATED. An empty string '' is returned
  * subject **required** `string`: The subject of the meeting
  * uniqueMeetingId **required** `integer`: The meeting ID. Field retained for backwards compatibility reasons

### MeetingReqCreate
* MeetingReqCreate `object`: Describes the information required to create a meeting.
  * conferencecallinfo **required** `string`: A required string. Can be one of the following options: <br>PSTN (PSTN only), <br>Free (PSTN and VoIP), <br>Hybrid, (PSTN and VoIP), <br>Private (you provide numbers and access code), or <br>VoIP (VoIP only). <br>You may also enter plain text for numbers and access codes with a limit of 255 characters
  * endtime **required** `string`: The ending time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T23:00:00Z
  * meetingtype **required** [MeetingType](#meetingtype)
  * passwordrequired **required** `boolean`: Indicates whether a password is required to join the meeting. Required parameter
  * starttime **required** `string`: The starting time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T22:00:00Z
  * subject **required** `string`: The subject of the meeting. 100 characters maximum. The characters '&gt;' and '&lt;' have to be replaced with the corresponding html character code (&amp;gt; for &#39;&gt;&#39; and &amp;lt; for &#39;&lt;&#39;)
  * timezonekey **required** `string`: DEPRECATED. Must be provided and set to empty string ''

### MeetingReqUpdate
* MeetingReqUpdate `object`: Describes the information required to update a meeting.
  * conferencecallinfo **required** `string`: A required string. Can be one of the following options: <br>PSTN (PSTN only), <br>Free (PSTN and VoIP), <br>Hybrid, (PSTN and VoIP), <br>Private (you provide numbers and access code), or <br>VoIP (VoIP only). <br>You may also enter plain text for numbers and access codes with a limit of 255 characters
  * endtime **required** `string`: The ending time of the meeting. A required ISO8601 UTC string, e.g. 2015-07-01T22:00:00Z
  * meetingtype **required** [MeetingType](#meetingtype)
  * passwordrequired **required** `boolean`: Indicates whether a password is required to join the meeting. Required parameter
  * starttime **required** `string`: The starting time of the meeting. A required ISO8601 UTC string, e.g. 2015-07-01T22:00:00Z
  * subject **required** `string`: A description of the meeting. 100 characters maximum. The characters '&gt;' and '&lt;' have to be replaced with the corresponding html character code (&amp;gt; for &#39;&gt;&#39; and &amp;lt; for &#39;&lt;&#39;)
  * timezonekey **required** `string`: DEPRECATED. Must be provided and set to empty string ''

### MeetingScheduled
* MeetingScheduled `object`: Describes a scheduled meeting.
  * conferenceCallInfo **required** `string`: Audio options for the meeting.
  * createTime **required** `string`: The time the meeting was created.
  * endTime **required** `string`: The ending time of the meeting.
  * maxParticipants **required** `integer`: The maximum number of participants allowed at the meeting.
  * meetingType **required** [MeetingType](#meetingtype)
  * meetingid **required** `integer`: The meeting ID.
  * passwordRequired **required** `boolean`: Indicates whether a password is required to join the meeting.
  * startTime **required** `string`: The starting time of the meeting.
  * status **required** [MeetingStatus](#meetingstatus)
  * subject **required** `string`: The subject of the meeting.
  * uniqueMeetingId **required** `integer`: The meeting ID. Field retained for backwards compatibility reasons.

### MeetingStatus
* MeetingStatus `string` (values: ACTIVE, INACTIVE): The meeting status, i.e whether the meeting is running or not

### MeetingType
* MeetingType `string` (values: immediate, recurring, scheduled): The meeting type

### Organizer
* Organizer `object`: Describes an organizer.
  * email **required** `string`: The organizer's email address
  * firstName **required** `string`: The organizer's first name
  * groupId **required** `integer`: The key of the group this organizer is assigned to
  * groupName **required** `string`: The name of the group this organizer is assigned to
  * lastName **required** `string`: The organizer's surname
  * maxNumAttendeesAllowed **required** `integer`: The maximum number of attendees allowed at sessions hosted by this organizer.
  * organizerKey **required** `integer`: The key of the organizer
  * products **required** `array`: The products the organizer has access to, can be 'G2M', 'G2W', 'G2T' or 'OPENVOICE'
    * items [Product](#product)
  * status **required** [Status](#status)

### OrganizerByGroup
* OrganizerByGroup `object`: Describes an organizer within a specified group.
  * email **required** `string`: The organizer's email address
  * firstName **required** `string`: The organizer's first name
  * groupId **required** `integer`: The key of the group
  * groupName **required** `string`: The name of the group
  * lastName **required** `string`: The organizer's surname
  * maxNumAttendeesAllowed **required** `integer`: The maximum number of attendees allowed at sessions held by this organizer
  * organizerKey **required** `integer`: The key of the organizer
  * products **required** `array`: The products the organizer has access to, can be 'G2M', 'G2W', 'G2T' or 'OPENVOICE'
    * items [Product](#product)
  * status **required** [Status](#status)

### OrganizerReq
* OrganizerReq `object`: Describes the information required to create an organizer, with or without assigning a group.
  * firstName **required** `string`: The first name of the organizer
  * lastName **required** `string`: The surname of the organizer
  * organizerEmail **required** `string`: The email address of the organizer
  * productType **required** [Product](#product)

### OrganizerShort
* OrganizerShort `object`: Describes a newly created organizer.
  * email **required** `string`: The organizer's email address
  * key **required** `integer`: The organizer's key

### OrganizerStatus
* OrganizerStatus `object`: Describes the status of an organizer, i.e. whether they are able to host meetings.
  * productType [Product](#product)
  * status `string` (values: suspended): The status of the organizer can be set to. Use 'suspended' to remove all products. The formerly used status 'active' is now DEPRECATED for this call. To activate the organizer please assign a product. In this case do not pass this parameter

### Product
* Product `string` (values: G2M, G2T, G2W, OPENVOICE): The products the organizer has access to, can be 'G2M', 'G2W', 'G2T' or 'OPENVOICE'

### ScheduledMeetingByGroup
* ScheduledMeetingByGroup `object`: Describes a meeting scheduled by an organizer within a specified group.
  * attendees **required** `string`: Not in use.
  * conferenceCallInfo **required** `string`: Audio options for the meeting.
  * email **required** `string`: The email address of the meeting organizer.
  * firstName **required** `string`: The first name of the meeting organizer.
  * groupName **required** `string`: The name of the group.
  * lastName **required** `string`: The surname of the meeting organizer.
  * meetingId **required** `string`: The meeting ID.
  * meetingType **required** [MeetingType](#meetingtype)
  * organizerKey **required** `string`: The key of the meeting organizer.
  * organizerkey **required** `integer`: The key of the meeting organizer. Field retained for backwards compatibility reasons.
  * passwordRequired **required** `boolean`: Indicates whether a password is required to join the meeting.
  * subject **required** `string`: The subject of the meeting.

### StartUrl
* StartUrl `object`: Host URL that can be used to start a meeting
  * hostURL **required** `string`: The host URL that can be used to start a meeting.

### Status
* Status `string` (values: active, suspended): The status of an organizer (or group), i.e. whether the organizer (or the members of the group respectively) are able to host meetings

### UpcomingMeeting
* UpcomingMeeting `object`: Describes an upcoming meeting.
  * accountKey **required** `string`: The key of the company account
  * conferenceCallInfo **required** `string`: Audio options for the meeting
  * email **required** `string`: The meeting organizer's email address
  * endTime **required** `string`: The time the meeting instance ended
  * firstName **required** `string`: The meeting organizer's first name
  * lastName **required** `string`: The surname of the meeting organizer
  * locale **required** `string`: The current language setting of the organizer in the web portal
  * meetingId **required** `string`: The meeting ID
  * meetingType **required** [MeetingType](#meetingtype)
  * organizerKey **required** `string`: The key of the meeting organizer
  * passwordRequired **required** `boolean`: Indicates whether a password is required to join the meeting or not
  * startTime **required** `string`: The time the meeting instance will start
  * status **required** [MeetingStatus](#meetingstatus)
  * subject **required** `string`: The subject of the meeting

### UpcomingMeetingByGroup
* UpcomingMeetingByGroup `object`: Describes an upcoming meeting of a group.
  * accountKey **required** `string`: The key of the company account
  * email **required** `string`: The meeting organizer's email address
  * endTime **required** `string`: The time the meeting instance ended
  * firstName **required** `string`: The meeting organizer's first name
  * groupName **required** `string`: The name of the group the meeting belongs to
  * lastName **required** `string`: The surname of the meeting organizer
  * locale **required** `string`: The current language setting of the organizer in the web portal
  * meetingId **required** `string`: The meeting ID
  * meetingType **required** [MeetingType](#meetingtype)
  * organizerKey **required** `string`: The key of the meeting organizer
  * passwordRequired **required** `boolean`: Indicates whether a password is required to join the meeting or not
  * startTime **required** `string`: The time the meeting instance will start
  * status [MeetingStatus](#meetingstatus)
  * subject **required** `string`: The subject of the meeting


