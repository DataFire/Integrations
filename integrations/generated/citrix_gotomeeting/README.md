# @datafire/citrix_gotomeeting

Client library for GoToMeeting

## Installation and Usage
```bash
npm install --save datafire @datafire/citrix_gotomeeting
```

```js
let datafire = require('datafire');
let citrix_gotomeeting = require('@datafire/citrix_gotomeeting').create();

citrix_gotomeeting.groups.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* Authorization (string) **required** - Access token

### groups.groupKey.attendees.get
Returns all attendees for all meetings within specified date range held by organizers within the specified group. This API call is only available to users with the admin role. This API call can be used only for groups with maximum 50 organizers.


```js
citrix_gotomeeting.groups.groupKey.attendees.get({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* groupKey (integer) **required** - The key of the group
* startDate (string) - Start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) - End of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

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

#### Parameters
* Authorization (string) **required** - Access token
* groupKey (integer) **required** - The key of the group
* startDate (string) **required** - Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) **required** - Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

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

#### Parameters
* Authorization (string) **required** - Access token
* groupKey (integer) **required** - The key of the group
* history (boolean) **required** - When 'true', returns all past meetings within date range
* startDate (string) **required** - If history=true, required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) **required** - If history=true, required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

### groups.groupKey.organizers.get
Returns all the organizers within a specific group. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.groups.groupKey.organizers.get({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* groupKey (integer) **required** - The key of the group

### groups.groupKey.organizers.post
Creates a new organizer and sends an email to the email address defined in request. This API call is only available to users with the admin role. You may also pass 'G2W' or 'G2T' or 'OPENVOICE' as productType variables, creating organizers for those products. A G2W or G2T organizer will also have access to G2M.


```js
citrix_gotomeeting.groups.groupKey.organizers.post({
  "Authorization": "",
  "groupKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* groupKey (integer) **required** - The key of the group
* body (undefined) **required** - Describes the information required to create an organizer, with or without assigning a group.

### groups.groupKey.upcomingMeetings.get
Get upcoming meetings for a specified group. This API call is only available to users with the admin role. This API call can be used only for groups with maximum 50 organizers.


```js
citrix_gotomeeting.groups.groupKey.upcomingMeetings.get({
  "Authorization": "",
  "groupKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* groupKey (integer) **required** - The key of the group

### historicalMeetings.get
Get historical meetings for the currently authenticated organizer that started within the specified date/time range. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.


```js
citrix_gotomeeting.historicalMeetings.get({
  "Authorization": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* startDate (string) **required** - Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) **required** - Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

### meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings' and 'Get upcoming meetings'.  Gets historical meetings for the current authenticated organizer. Requires date range for filtering results to only meetings within specified dates. History searches will contain the parameter 'meetingInstanceKey' which is used in conjunction with the call 'Get Attendees by Meeting' to get attendee information for a past meeting.


```js
citrix_gotomeeting.meetings.get({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* history (boolean) - When 'true', returns all past meetings within date range
* startDate (string) - If history=true, required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) - If history=true, required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

### meetings.post
Create a new meeting based on the parameters specified.


```js
citrix_gotomeeting.meetings.post({
  "Authorization": "",
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* body (undefined) **required** - Describes the information required to create a meeting.

### meetings.meetingId.delete
Deletes the meeting identified by the meetingId.


```js
citrix_gotomeeting.meetings.meetingId.delete({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* meetingId (integer) **required** - The meeting ID

### meetings.meetingId.get
Returns the meeting details for the specified meeting.


```js
citrix_gotomeeting.meetings.meetingId.get({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* meetingId (integer) **required** - The meeting ID

### meetings.meetingId.put
Updates an existing meeting specified by meetingId.


```js
citrix_gotomeeting.meetings.meetingId.put({
  "Authorization": "",
  "meetingId": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* meetingId (integer) **required** - The meeting ID
* body (undefined) **required** - Describes the information required to update a meeting.

### meetings.meetingId.attendees.get
List all attendees for specified meetingId of historical meeting. The historical meetings can be fetched using 'Get historical meetings', 'Get historical meetings by organizer', and 'Get historical meetings by group'. For users with the admin role this call returns attendees for any meeting. For any other user the call will return attendees for meetings on which the user is a valid organizer.


```js
citrix_gotomeeting.meetings.meetingId.attendees.get({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* meetingId (integer) **required** - The meeting ID

### meetings.meetingId.start.get
Returns a host URL that can be used to start a meeting. When this URL is opened in a web browser, the GoToMeeting client will be downloaded and launched and the meeting will start. The end user is not required to login to a client.


```js
citrix_gotomeeting.meetings.meetingId.start.get({
  "Authorization": "",
  "meetingId": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* meetingId (integer) **required** - The meeting ID

### organizers.delete
Deletes the individual organizer specified by the email address. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.delete({
  "Authorization": "",
  "email": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* email (string) **required** - The email address of the organizer

### organizers.get
Gets the individual organizer specified by the organizer's email address. If an email address is not specified, all organizers are returned. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.get({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* email (string) - The email address of the organizer

### organizers.post
Creates a new organizer and sends an email to the email address defined in the request. This API call is only available to users with the admin role. You may also pass 'G2W' or 'G2T' or 'OPENVOICE' as productType variables, creating organizers for those products. A G2W or G2T organizer will also have access to G2M.


```js
citrix_gotomeeting.organizers.post({
  "Authorization": "",
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* body (undefined) **required** - Describes the information required to create an organizer, with or without assigning a group.

### organizers.organizerKey.delete
Deletes the individual organizer specified by the organizer key. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.organizerKey.delete({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer

### organizers.organizerKey.get
Returns the individual organizer specified by the key. This API call is only available to users with the admin role. Non-admin users can only make this call for their own organizerKey.


```js
citrix_gotomeeting.organizers.organizerKey.get({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer

### organizers.organizerKey.put
Updates the products of the specified organizer. To add a product (G2M, G2W, G2T, OPENVOICE) for the organizer, the call must be sent once for each product you want to add. To remove all products for the organizer, set status to 'suspended'. The call is limited to users with the admin role.


```js
citrix_gotomeeting.organizers.organizerKey.put({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* body (undefined) **required** - Describes the status of an organizer, i.e. whether they are able to host meetings.

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* startDate (string) **required** - A required start of date range in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) **required** - A required end of date range in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* startDate (string) **required** - Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) **required** - Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

### organizers.organizerKey.meetings.get
DEPRECATED: Please use the new API calls 'Get historical meetings by organizer' and 'Get upcoming meetings by organizer'. Gets future (scheduled) or past (history) meetings for a specified organizer. Include 'history=true' and the past start and end dates in the URL to retrieve past meetings. Enter 'scheduled=true' (without dates) to get scheduled meetings.


```js
citrix_gotomeeting.organizers.organizerKey.meetings.get({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* scheduled (boolean) - When 'true', returns all future meetings. Date range not supported.
* history (boolean) - When 'true', returns all past meetings within date range
* startDate (string) - If history is 'true', required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
* endDate (string) - If history is 'true', required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z

### organizers.organizerKey.upcomingMeetings.get
Get upcoming meetings for a specified organizer. This API call is only available to users with the admin role.


```js
citrix_gotomeeting.organizers.organizerKey.upcomingMeetings.get({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer

### upcomingMeetings.get
Gets upcoming meetings for the current authenticated organizer.


```js
citrix_gotomeeting.upcomingMeetings.get({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token

