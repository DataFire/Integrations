# @datafire/google_calendar

Client library for Calendar

## Installation and Usage
```bash
npm install --save @datafire/google_calendar
```
```js
let google_calendar = require('@datafire/google_calendar').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_calendar.settings.watch({}).then(data => {
  console.log(data);
});
```

## Description

Manipulates events and other calendar data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_calendar.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_calendar.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### calendars.insert
Creates a secondary calendar.


```js
google_calendar.calendars.insert({}, context)
```

#### Input
* input `object`
  * body [Calendar](#calendar)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Calendar](#calendar)

### calendars.delete
Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.


```js
google_calendar.calendars.delete({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### calendars.get
Returns metadata for a calendar.


```js
google_calendar.calendars.get({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Calendar](#calendar)

### calendars.patch
Updates metadata for a calendar. This method supports patch semantics.


```js
google_calendar.calendars.patch({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * body [Calendar](#calendar)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Calendar](#calendar)

### calendars.update
Updates metadata for a calendar.


```js
google_calendar.calendars.update({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * body [Calendar](#calendar)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Calendar](#calendar)

### acl.list
Returns the rules in the access control list for the calendar.


```js
google_calendar.acl.list({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * maxResults `integer`: Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * showDeleted `boolean`: Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Acl](#acl)

### acl.insert
Creates an access control rule.


```js
google_calendar.acl.insert({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * body [AclRule](#aclrule)
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * sendNotifications `boolean`: Whether to send notifications about the calendar sharing change. Optional. The default is True.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AclRule](#aclrule)

### acl.watch
Watch for changes to ACL resources.


```js
google_calendar.acl.watch({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * maxResults `integer`: Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * showDeleted `boolean`: Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### acl.delete
Deletes an access control rule.


```js
google_calendar.acl.delete({
  "calendarId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * ruleId **required** `string`: ACL rule identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### acl.get
Returns an access control rule.


```js
google_calendar.acl.get({
  "calendarId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * ruleId **required** `string`: ACL rule identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AclRule](#aclrule)

### acl.patch
Updates an access control rule. This method supports patch semantics.


```js
google_calendar.acl.patch({
  "calendarId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * body [AclRule](#aclrule)
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * ruleId **required** `string`: ACL rule identifier.
  * sendNotifications `boolean`: Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AclRule](#aclrule)

### acl.update
Updates an access control rule.


```js
google_calendar.acl.update({
  "calendarId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * body [AclRule](#aclrule)
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * ruleId **required** `string`: ACL rule identifier.
  * sendNotifications `boolean`: Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AclRule](#aclrule)

### calendars.clear
Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.


```js
google_calendar.calendars.clear({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### events.list
Returns events on the specified calendar.


```js
google_calendar.events.list({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * alwaysIncludeEmail `boolean`: Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * iCalUID `string`: Specifies event ID in the iCalendar format to be included in the response. Optional.
  * maxAttendees `integer`: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
  * maxResults `integer`: Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
  * orderBy `string` (values: startTime, updated): The order of the events returned in the result. Optional. The default is an unspecified, stable order.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * privateExtendedProperty `array`: Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
  * q `string`: Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
  * sharedExtendedProperty `array`: Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
  * showDeleted `boolean`: Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
  * showHiddenInvitations `boolean`: Whether to include hidden invitations in the result. Optional. The default is False.
  * singleEvents `boolean`: Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
  * timeMax `string`: Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMin is set, timeMax must be greater than timeMin.
  * timeMin `string`: Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMax is set, timeMin must be smaller than timeMax.
  * timeZone `string`: Time zone used in the response. Optional. The default is the time zone of the calendar.
  * updatedMin `string`: Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Events](#events)

### events.insert
Creates an event.


```js
google_calendar.events.insert({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * maxAttendees `integer`: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
  * sendNotifications `boolean`: Whether to send notifications about the creation of the new event. Optional. The default is False.
  * supportsAttachments `boolean`: Whether API client performing operation supports event attachments. Optional. The default is False.
  * body [Event](#event)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Event](#event)

### events.import
Imports an event. This operation is used to add a private copy of an existing event to a calendar.


```js
google_calendar.events.import({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * supportsAttachments `boolean`: Whether API client performing operation supports event attachments. Optional. The default is False.
  * body [Event](#event)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Event](#event)

### events.quickAdd
Creates an event based on a simple text string.


```js
google_calendar.events.quickAdd({
  "calendarId": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * text **required** `string`: The text describing the event to be created.
  * sendNotifications `boolean`: Whether to send notifications about the creation of the event. Optional. The default is False.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Event](#event)

### events.watch
Watch for changes to Events resources.


```js
google_calendar.events.watch({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * alwaysIncludeEmail `boolean`: Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * iCalUID `string`: Specifies event ID in the iCalendar format to be included in the response. Optional.
  * maxAttendees `integer`: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
  * maxResults `integer`: Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
  * orderBy `string` (values: startTime, updated): The order of the events returned in the result. Optional. The default is an unspecified, stable order.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * privateExtendedProperty `array`: Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
  * q `string`: Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
  * resource [Channel](#channel)
  * sharedExtendedProperty `array`: Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
  * showDeleted `boolean`: Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
  * showHiddenInvitations `boolean`: Whether to include hidden invitations in the result. Optional. The default is False.
  * singleEvents `boolean`: Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
  * timeMax `string`: Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMin is set, timeMax must be greater than timeMin.
  * timeMin `string`: Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMax is set, timeMin must be smaller than timeMax.
  * timeZone `string`: Time zone used in the response. Optional. The default is the time zone of the calendar.
  * updatedMin `string`: Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### events.delete
Deletes an event.


```js
google_calendar.events.delete({
  "calendarId": "",
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * eventId **required** `string`: Event identifier.
  * sendNotifications `boolean`: Whether to send notifications about the deletion of the event. Optional. The default is False.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### events.get
Returns an event.


```js
google_calendar.events.get({
  "calendarId": "",
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * eventId **required** `string`: Event identifier.
  * alwaysIncludeEmail `boolean`: Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
  * maxAttendees `integer`: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
  * timeZone `string`: Time zone used in the response. Optional. The default is the time zone of the calendar.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Event](#event)

### events.patch
Updates an event. This method supports patch semantics.


```js
google_calendar.events.patch({
  "calendarId": "",
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * eventId **required** `string`: Event identifier.
  * alwaysIncludeEmail `boolean`: Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
  * maxAttendees `integer`: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
  * sendNotifications `boolean`: Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
  * supportsAttachments `boolean`: Whether API client performing operation supports event attachments. Optional. The default is False.
  * body [Event](#event)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Event](#event)

### events.update
Updates an event.


```js
google_calendar.events.update({
  "calendarId": "",
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * eventId **required** `string`: Event identifier.
  * alwaysIncludeEmail `boolean`: Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
  * maxAttendees `integer`: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
  * sendNotifications `boolean`: Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
  * supportsAttachments `boolean`: Whether API client performing operation supports event attachments. Optional. The default is False.
  * body [Event](#event)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Event](#event)

### events.instances
Returns instances of the specified recurring event.


```js
google_calendar.events.instances({
  "calendarId": "",
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * eventId **required** `string`: Recurring event identifier.
  * alwaysIncludeEmail `boolean`: Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
  * maxAttendees `integer`: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
  * maxResults `integer`: Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
  * originalStart `string`: The original start time of the instance in the result. Optional.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * showDeleted `boolean`: Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
  * timeMax `string`: Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
  * timeMin `string`: Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
  * timeZone `string`: Time zone used in the response. Optional. The default is the time zone of the calendar.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Events](#events)

### events.move
Moves an event to another calendar, i.e. changes an event's organizer.


```js
google_calendar.events.move({
  "calendarId": "",
  "eventId": "",
  "destination": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier of the source calendar where the event currently is on.
  * eventId **required** `string`: Event identifier.
  * destination **required** `string`: Calendar identifier of the target calendar where the event is to be moved to.
  * sendNotifications `boolean`: Whether to send notifications about the change of the event's organizer. Optional. The default is False.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Event](#event)

### channels.stop
Stop watching resources through this channel


```js
google_calendar.channels.stop({}, context)
```

#### Input
* input `object`
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### colors.get
Returns the color definitions for calendars and events.


```js
google_calendar.colors.get({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Colors](#colors)

### freebusy.query
Returns free/busy information for a set of calendars.


```js
google_calendar.freebusy.query({}, context)
```

#### Input
* input `object`
  * body [FreeBusyRequest](#freebusyrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FreeBusyResponse](#freebusyresponse)

### calendarList.list
Returns entries on the user's calendar list.


```js
google_calendar.calendarList.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
  * minAccessRole `string` (values: freeBusyReader, owner, reader, writer): The minimum access role for the user in the returned entries. Optional. The default is no restriction.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * showDeleted `boolean`: Whether to include deleted calendar list entries in the result. Optional. The default is False.
  * showHidden `boolean`: Whether to show hidden entries. Optional. The default is False.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CalendarList](#calendarlist)

### calendarList.insert
Adds an entry to the user's calendar list.


```js
google_calendar.calendarList.insert({}, context)
```

#### Input
* input `object`
  * colorRgbFormat `boolean`: Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
  * body [CalendarListEntry](#calendarlistentry)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CalendarListEntry](#calendarlistentry)

### calendarList.watch
Watch for changes to CalendarList resources.


```js
google_calendar.calendarList.watch({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
  * minAccessRole `string` (values: freeBusyReader, owner, reader, writer): The minimum access role for the user in the returned entries. Optional. The default is no restriction.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * showDeleted `boolean`: Whether to include deleted calendar list entries in the result. Optional. The default is False.
  * showHidden `boolean`: Whether to show hidden entries. Optional. The default is False.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### calendarList.delete
Deletes an entry on the user's calendar list.


```js
google_calendar.calendarList.delete({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### calendarList.get
Returns an entry on the user's calendar list.


```js
google_calendar.calendarList.get({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CalendarListEntry](#calendarlistentry)

### calendarList.patch
Updates an entry on the user's calendar list. This method supports patch semantics.


```js
google_calendar.calendarList.patch({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * colorRgbFormat `boolean`: Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
  * body [CalendarListEntry](#calendarlistentry)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CalendarListEntry](#calendarlistentry)

### calendarList.update
Updates an entry on the user's calendar list.


```js
google_calendar.calendarList.update({
  "calendarId": ""
}, context)
```

#### Input
* input `object`
  * calendarId **required** `string`: Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
  * colorRgbFormat `boolean`: Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
  * body [CalendarListEntry](#calendarlistentry)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CalendarListEntry](#calendarlistentry)

### settings.list
Returns all user settings for the authenticated user.


```js
google_calendar.settings.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Settings](#settings)

### settings.watch
Watch for changes to Settings resources.


```js
google_calendar.settings.watch({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
  * pageToken `string`: Token specifying which result page to return. Optional.
  * syncToken `string`: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### settings.get
Returns a single user setting.


```js
google_calendar.settings.get({
  "setting": ""
}, context)
```

#### Input
* input `object`
  * setting **required** `string`: The id of the user setting.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Setting](#setting)



## Definitions

### Acl
* Acl `object`
  * etag `string`: ETag of the collection.
  * items `array`: List of rules on the access control list.
    * items [AclRule](#aclrule)
  * kind `string`: Type of the collection ("calendar#acl").
  * nextPageToken `string`: Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
  * nextSyncToken `string`: Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.

### AclRule
* AclRule `object`
  * etag `string`: ETag of the resource.
  * id `string`: Identifier of the ACL rule.
  * kind `string`: Type of the resource ("calendar#aclRule").
  * role `string`: The role assigned to the scope. Possible values are:  
  * scope `object`: The scope of the rule.
    * type `string`: The type of the scope. Possible values are:  
    * value `string`: The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".

### Calendar
* Calendar `object`
  * description `string`: Description of the calendar. Optional.
  * etag `string`: ETag of the resource.
  * id `string`: Identifier of the calendar. To retrieve IDs call the calendarList.list() method.
  * kind `string`: Type of the resource ("calendar#calendar").
  * location `string`: Geographic location of the calendar as free-form text. Optional.
  * summary `string`: Title of the calendar.
  * timeZone `string`: The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.

### CalendarList
* CalendarList `object`
  * etag `string`: ETag of the collection.
  * items `array`: Calendars that are present on the user's calendar list.
    * items [CalendarListEntry](#calendarlistentry)
  * kind `string`: Type of the collection ("calendar#calendarList").
  * nextPageToken `string`: Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
  * nextSyncToken `string`: Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.

### CalendarListEntry
* CalendarListEntry `object`
  * accessRole `string`: The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:  
  * backgroundColor `string`: The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
  * colorId `string`: The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.
  * defaultReminders `array`: The default reminders that the authenticated user has for this calendar.
    * items [EventReminder](#eventreminder)
  * deleted `boolean`: Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
  * description `string`: Description of the calendar. Optional. Read-only.
  * etag `string`: ETag of the resource.
  * foregroundColor `string`: The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
  * hidden `boolean`: Whether the calendar has been hidden from the list. Optional. The default is False.
  * id `string`: Identifier of the calendar.
  * kind `string`: Type of the resource ("calendar#calendarListEntry").
  * location `string`: Geographic location of the calendar as free-form text. Optional. Read-only.
  * notificationSettings `object`: The notifications that the authenticated user is receiving for this calendar.
    * notifications `array`: The list of notifications set for this calendar.
      * items [CalendarNotification](#calendarnotification)
  * primary `boolean`: Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
  * selected `boolean`: Whether the calendar content shows up in the calendar UI. Optional. The default is False.
  * summary `string`: Title of the calendar. Read-only.
  * summaryOverride `string`: The summary that the authenticated user has set for this calendar. Optional.
  * timeZone `string`: The time zone of the calendar. Optional. Read-only.

### CalendarNotification
* CalendarNotification `object`
  * method `string`: The method used to deliver the notification. Possible values are:  
  * type `string`: The type of notification. Possible values are:  

### Channel
* Channel `object`
  * address `string`: The address where notifications are delivered for this channel.
  * expiration `string`: Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
  * id `string`: A UUID or similar unique string that identifies this channel.
  * kind `string`: Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
  * params `object`: Additional parameters controlling delivery channel behavior. Optional.
  * payload `boolean`: A Boolean value to indicate whether payload is wanted. Optional.
  * resourceId `string`: An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
  * resourceUri `string`: A version-specific identifier for the watched resource.
  * token `string`: An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
  * type `string`: The type of delivery mechanism used for this channel.

### ColorDefinition
* ColorDefinition `object`
  * background `string`: The background color associated with this color definition.
  * foreground `string`: The foreground color that can be used to write on top of a background with 'background' color.

### Colors
* Colors `object`
  * calendar `object`: A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its color field. Read-only.
  * event `object`: A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its color field. Read-only.
  * kind `string`: Type of the resource ("calendar#colors").
  * updated `string`: Last modification time of the color palette (as a RFC3339 timestamp). Read-only.

### Error
* Error `object`
  * domain `string`: Domain, or broad category, of the error.
  * reason `string`: Specific reason for the error. Some of the possible values are:  

### Event
* Event `object`
  * anyoneCanAddSelf `boolean`: Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.
  * attachments `array`: File attachments for the event. Currently only Google Drive attachments are supported.
    * items [EventAttachment](#eventattachment)
  * attendees `array`: The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.
    * items [EventAttendee](#eventattendee)
  * attendeesOmitted `boolean`: Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.
  * colorId `string`: The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.
  * created `string`: Creation time of the event (as a RFC3339 timestamp). Read-only.
  * creator `object`: The creator of the event. Read-only.
    * displayName `string`: The creator's name, if available.
    * email `string`: The creator's email address, if available.
    * id `string`: The creator's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
    * self `boolean`: Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
  * description `string`: Description of the event. Optional.
  * end [EventDateTime](#eventdatetime)
  * endTimeUnspecified `boolean`: Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.
  * etag `string`: ETag of the resource.
  * extendedProperties `object`: Extended properties of the event.
    * private `object`: Properties that are private to the copy of the event that appears on this calendar.
    * shared `object`: Properties that are shared between copies of the event on other attendees' calendars.
  * gadget `object`: A gadget that extends this event.
    * display `string`: The gadget's display mode. Optional. Possible values are:  
    * height `integer`: The gadget's height in pixels. The height must be an integer greater than 0. Optional.
    * iconLink `string`: The gadget's icon URL. The URL scheme must be HTTPS.
    * link `string`: The gadget's URL. The URL scheme must be HTTPS.
    * preferences `object`: Preferences.
    * title `string`: The gadget's title.
    * type `string`: The gadget's type.
    * width `integer`: The gadget's width in pixels. The width must be an integer greater than 0. Optional.
  * guestsCanInviteOthers `boolean`: Whether attendees other than the organizer can invite others to the event. Optional. The default is True.
  * guestsCanModify `boolean`: Whether attendees other than the organizer can modify the event. Optional. The default is False.
  * guestsCanSeeOtherGuests `boolean`: Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.
  * hangoutLink `string`: An absolute link to the Google+ hangout associated with this event. Read-only.
  * htmlLink `string`: An absolute link to this event in the Google Calendar Web UI. Read-only.
  * iCalUID `string`: Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
  * id `string`: Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  
  * kind `string`: Type of the resource ("calendar#event").
  * location `string`: Geographic location of the event as free-form text. Optional.
  * locked `boolean`: Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.
  * organizer `object`: The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
    * displayName `string`: The organizer's name, if available.
    * email `string`: The organizer's email address, if available. It must be a valid email address as per RFC5322.
    * id `string`: The organizer's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
    * self `boolean`: Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
  * originalStartTime [EventDateTime](#eventdatetime)
  * privateCopy `boolean`: Whether this is a private event copy where changes are not shared with other copies on other calendars. Optional. Immutable. The default is False.
  * recurrence `array`: List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.
    * items `string`
  * recurringEventId `string`: For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.
  * reminders `object`: Information about the event's reminders for the authenticated user.
    * overrides `array`: If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.
      * items [EventReminder](#eventreminder)
    * useDefault `boolean`: Whether the default reminders of the calendar apply to the event.
  * sequence `integer`: Sequence number as per iCalendar.
  * source `object`: Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
    * title `string`: Title of the source; for example a title of a web page or an email subject.
    * url `string`: URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.
  * start [EventDateTime](#eventdatetime)
  * status `string`: Status of the event. Optional. Possible values are:  
  * summary `string`: Title of the event.
  * transparency `string`: Whether the event blocks time on the calendar. Optional. Possible values are:  
  * updated `string`: Last modification time of the event (as a RFC3339 timestamp). Read-only.
  * visibility `string`: Visibility of the event. Optional. Possible values are:  

### EventAttachment
* EventAttachment `object`
  * fileId `string`: ID of the attached file. Read-only.
  * fileUrl `string`: URL link to the attachment.
  * iconLink `string`: URL link to the attachment's icon. Read-only.
  * mimeType `string`: Internet media type (MIME type) of the attachment.
  * title `string`: Attachment title.

### EventAttendee
* EventAttendee `object`
  * additionalGuests `integer`: Number of additional guests. Optional. The default is 0.
  * comment `string`: The attendee's response comment. Optional.
  * displayName `string`: The attendee's name, if available. Optional.
  * email `string`: The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
  * id `string`: The attendee's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
  * optional `boolean`: Whether this is an optional attendee. Optional. The default is False.
  * organizer `boolean`: Whether the attendee is the organizer of the event. Read-only. The default is False.
  * resource `boolean`: Whether the attendee is a resource. Read-only. The default is False.
  * responseStatus `string`: The attendee's response status. Possible values are:  
  * self `boolean`: Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.

### EventDateTime
* EventDateTime `object`
  * date `string`: The date, in the format "yyyy-mm-dd", if this is an all-day event.
  * dateTime `string`: The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.
  * timeZone `string`: The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.

### EventReminder
* EventReminder `object`
  * method `string`: The method used by this reminder. Possible values are:  
  * minutes `integer`: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).

### Events
* Events `object`
  * accessRole `string`: The user's access role for this calendar. Read-only. Possible values are:  
  * defaultReminders `array`: The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).
    * items [EventReminder](#eventreminder)
  * description `string`: Description of the calendar. Read-only.
  * etag `string`: ETag of the collection.
  * items `array`: List of events on the calendar.
    * items [Event](#event)
  * kind `string`: Type of the collection ("calendar#events").
  * nextPageToken `string`: Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
  * nextSyncToken `string`: Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
  * summary `string`: Title of the calendar. Read-only.
  * timeZone `string`: The time zone of the calendar. Read-only.
  * updated `string`: Last modification time of the calendar (as a RFC3339 timestamp). Read-only.

### FreeBusyCalendar
* FreeBusyCalendar `object`
  * busy `array`: List of time ranges during which this calendar should be regarded as busy.
    * items [TimePeriod](#timeperiod)
  * errors `array`: Optional error(s) (if computation for the calendar failed).
    * items [Error](#error)

### FreeBusyGroup
* FreeBusyGroup `object`
  * calendars `array`: List of calendars' identifiers within a group.
    * items `string`
  * errors `array`: Optional error(s) (if computation for the group failed).
    * items [Error](#error)

### FreeBusyRequest
* FreeBusyRequest `object`
  * calendarExpansionMax `integer`: Maximal number of calendars for which FreeBusy information is to be provided. Optional.
  * groupExpansionMax `integer`: Maximal number of calendar identifiers to be provided for a single group. Optional. An error will be returned for a group with more members than this value.
  * items `array`: List of calendars and/or groups to query.
    * items [FreeBusyRequestItem](#freebusyrequestitem)
  * timeMax `string`: The end of the interval for the query.
  * timeMin `string`: The start of the interval for the query.
  * timeZone `string`: Time zone used in the response. Optional. The default is UTC.

### FreeBusyRequestItem
* FreeBusyRequestItem `object`
  * id `string`: The identifier of a calendar or a group.

### FreeBusyResponse
* FreeBusyResponse `object`
  * calendars `object`: List of free/busy information for calendars.
  * groups `object`: Expansion of groups.
  * kind `string`: Type of the resource ("calendar#freeBusy").
  * timeMax `string`: The end of the interval.
  * timeMin `string`: The start of the interval.

### Setting
* Setting `object`
  * etag `string`: ETag of the resource.
  * id `string`: The id of the user setting.
  * kind `string`: Type of the resource ("calendar#setting").
  * value `string`: Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.

### Settings
* Settings `object`
  * etag `string`: Etag of the collection.
  * items `array`: List of user settings.
    * items [Setting](#setting)
  * kind `string`: Type of the collection ("calendar#settings").
  * nextPageToken `string`: Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
  * nextSyncToken `string`: Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.

### TimePeriod
* TimePeriod `object`
  * end `string`: The (exclusive) end of the time period.
  * start `string`: The (inclusive) start of the time period.


