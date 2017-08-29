# @datafire/getgo_gotowebinar

Client library for GoToWebinar

## Installation and Usage
```bash
npm install --save datafire @datafire/getgo_gotowebinar
```

```js
let datafire = require('datafire');
let getgo_gotowebinar = require('@datafire/getgo_gotowebinar').create();

getgo_gotowebinar.getAllAccountWebinars({}).then(data => {
  console.log(data);
})
```

## Description
The GoToWebinar API provides seamless integration of webinar registrant and attendee data into your existing infrastructure or third-party applications. The ability to register participants, as well as pull lists of registrants and attendees for a webinar, allows organizers to manage the flow of information between their primary applications without manual intervention.

## Actions
### getAllAccountWebinars
Retrieves the list of webinars for an account within a given date range. __*Page*__ and __*size*__ parameters are optional. Default __*page*__ is 0 and default __*size*__ is 20. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getAllAccountWebinars({
  "Authorization": "",
  "accountKey": 0,
  "fromTime": "",
  "toTime": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* accountKey (integer) **required** - The key of the account
* fromTime (string) **required** - A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z
* toTime (string) **required** - A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z
* page (integer) - The page number to be displayed. The first page is 0.
* size (integer) - The size of the page.

### getHistoricalWebinars
Returns details for completed webinars for the specified organizer and completed webinars of other organizers where the specified organizer is a co-organizer.


```js
getgo_gotowebinar.getHistoricalWebinars({
  "Authorization": "",
  "organizerKey": 0,
  "fromTime": "",
  "toTime": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* fromTime (string) **required** - A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z
* toTime (string) **required** - A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z

### getOrganizerSessions
Retrieve all completed sessions of all the webinars of a given organizer.


```js
getgo_gotowebinar.getOrganizerSessions({
  "Authorization": "",
  "organizerKey": 0,
  "fromTime": "",
  "toTime": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* fromTime (string) **required** - A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z
* toTime (string) **required** - A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z

### getUpcomingWebinars
Returns webinars scheduled for the future for the specified organizer and webinars of other organizers where the specified organizer is a co-organizer.


```js
getgo_gotowebinar.getUpcomingWebinars({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer

### getAllWebinars
Returns webinars scheduled for the future for a specified organizer.


```js
getgo_gotowebinar.getAllWebinars({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer

### createWebinar
Creates a single session webinar, a sequence of webinars or a series of webinars depending on the type field in the body: "single_session" creates a single webinar session, "sequence" creates a webinar with multiple meeting times where attendees are expected to be the same for all sessions, and "series" creates a webinar with multiple meetings times where attendees choose only one to attend. The default, if no type is declared, is single_session. A sequence webinar requires a "recurrenceStart" object consisting of a "startTime" and "endTime" key for the first webinar of the sequence, a "recurrencePattern" of "daily", "weekly", "monthly", and a "recurrenceEnd" which is the last date of the sequence (for example, 2016-12-01). A series webinar requires a "times" array with a discrete "startTime" and "endTime" for each webinar in the series. The call requires a webinar subject and description. The "isPasswordProtected" sets whether the webinar requires a password for attendees to join. If set to True, the organizer must go to Registration Settings at My Webinars (https://global.gotowebinar.com/webinars.tmpl) and add the password to the webinar, and send the password to the registrants. The response provides a numeric webinarKey in string format for the new webinar. Once a webinar has been created with this method, you can accept registrations.


```js
getgo_gotowebinar.createWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* body (undefined) **required** - Describes the details used to create a new single session webinar.

### cancelWebinar
Cancels a specific webinar. If the webinar is a series or sequence, this call deletes all scheduled sessions. To send cancellation emails to registrants set sendCancellationEmails=true in the request. When the cancellation emails are sent, the default generated message is used in the cancellation email body.


```js
getgo_gotowebinar.cancelWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sendCancellationEmails (boolean) - Indicates whether cancellation notice emails should be sent. The default value is false

### getWebinar
Retrieve information on a specific webinar. If the type of the webinar is 'sequence', a sequence of future times will be provided. Webinars of type 'series' are treated the same as normal webinars - each session in the webinar series has a different webinarKey. If an organizer cancels a webinar, then a request to get that webinar would return a '404 Not Found' error.


```js
getgo_gotowebinar.getWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### updateWebinar
Updates a webinar. The call requires at least one of the parameters in the request body. The request completely replaces the existing session, series, or sequence and so must include the full definition of each as for the Create call. Set notifyParticipants=true to send update emails to registrants.


```js
getgo_gotowebinar.updateWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* notifyParticipants (boolean) - Defines whether to send notifications to participants
* body (undefined) **required** - Describes the details of the webinar

### getAttendeesForAllWebinarSessions
Returns all attendees for all sessions of the specified webinar.


```js
getgo_gotowebinar.getAttendeesForAllWebinarSessions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### getAudioInformation
Retrieves the audio/conferencing information for a specific webinar.


```js
getgo_gotowebinar.getAudioInformation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### updateAudioInformation
Updates the audio/conferencing settings for a specific webinar


```js
getgo_gotowebinar.updateAudioInformation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* notifyParticipants (boolean) - Defines whether to send notifications to participants
* body (undefined) **required** - Defines the audio/conferencing settings for the specified webinar

### getCoorganizers
Returns the co-organizers for the specified webinar. The original organizer who created the webinar is filtered out of the list. If the webinar has no co-organizers, an empty array is returned. Co-organizers that do not have a GoToWebinar account are returned as external co-organizers. For those organizers no surname is returned.


```js
getgo_gotowebinar.getCoorganizers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### createCoorganizers
Creates co-organizers for the specified webinar. For co-organizers that have a GoToWebinar account you have to set the parameter 'external' to 'false'. In this case you have to pass the parameter 'organizerKey' only. For co-organizers that have no GoToWebinar account you have to set the parameter 'external' to 'true'. In this case you have to pass the parameters 'givenName' and 'email'. Since there is no parameter for 'surname' you should pass first and last name to the parameter 'givenName'.


```js
getgo_gotowebinar.createCoorganizers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": []
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* body (array) **required**

### deleteCoorganizer
Deletes an internal co-organizer specified by the coorganizerKey (memberKey).


```js
getgo_gotowebinar.deleteCoorganizer({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "coorganizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* coorganizerKey (integer) **required** - The key of the internal or external co-organizer (memberKey)
* external (boolean) - By default only internal co-organizers (with a GoToWebinar account) can be deleted. If you want to use this call for external co-organizers you have to set this parameter to 'true'.

### resendCoorganizerInvitation
Resends an invitation email to the specified co-organizer


```js
getgo_gotowebinar.resendCoorganizerInvitation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "coorganizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* coorganizerKey (integer) **required** - The key of the internal or external co-organizer (memberKey)
* external (boolean) - By default only internal co-organizers (with a GoToWebinar account) will retrieve the resent invitation email. If you want to use this call for external co-organizers you have to set this parameter to 'true'.

### getWebinarMeetingTimes
Retrieves the meeting times for a webinar.


```js
getgo_gotowebinar.getWebinarMeetingTimes({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### getPanelists
Retrieves all the panelists for a specific webinar.


```js
getgo_gotowebinar.getPanelists({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### createPanelists
Create panelists for a specified webinar


```js
getgo_gotowebinar.createPanelists({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": []
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* body (array) **required**

### deleteWebinarPanelist
Removes a webinar panelist.


```js
getgo_gotowebinar.deleteWebinarPanelist({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "panelistKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* panelistKey (integer) **required** - The key of the webinar panelist

### resendPanelistInvitation
Resend the panelist invitation email.


```js
getgo_gotowebinar.resendPanelistInvitation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "panelistKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* panelistKey (integer) **required** - The key of the webinar panelist

### getPerformanceForAllWebinarSessions
Gets performance details for all sessions of a specific webinar.


```js
getgo_gotowebinar.getPerformanceForAllWebinarSessions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### getAllRegistrantsForWebinar
Retrieve registration details for all registrants of a specific webinar. Registrant details will not include all fields captured when creating the registrant. To see all data, use the API call 'Get Registrant'. Registrants can have one of the following states; <br>WAITING - registrant registered and is awaiting approval (where organizer has required approval), <br>APPROVED - registrant registered and is approved, and <br>DENIED - registrant registered and was denied.


```js
getgo_gotowebinar.getAllRegistrantsForWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### createRegistrant
Register an attendee for a scheduled webinar. The response contains the registrantKey and join URL for the registrant. An email will be sent to the registrant unless the organizer turns off the confirmation email setting from the GoToWebinar website. Please note that you must provide all required fields including custom fields defined during the webinar creation. Use the API call 'Get registration fields' to get a list of all fields, if they are required, and their possible values. At this time there are two versions of the 'Create Registrant' call. The first version only accepts firstName, lastName, and email and ignores all other fields. If you have custom fields or want to capture additional information this version won't work for you. The second version allows you to pass all required and optional fields, including custom fields defined when creating the webinar. To use the second version you must pass the header value 'Accept: application/vnd.citrix.g2wapi-v1.1+json' instead of 'Accept: application/json'. Leaving this header out results in the first version of the API call.


```js
getgo_gotowebinar.createRegistrant({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* Accept (string) - Set to 'application/vnd.citrix.g2wapi-v1.1+json' to make a registration using fields (custom or default) additional to the basic ones.
* resendConfirmation (boolean) - Indicates whether the confirmation email should be resent when a registrant is re-registered. The default value is false.
* body (undefined) **required** - Detailed description of a all fields to register a registrant for a webinar.

### getRegistrationFields
Retrieve required, optional registration, and custom questions for a specified webinar.


```js
getgo_gotowebinar.getRegistrationFields({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### deleteRegistrant
Removes a webinar registrant from current registrations for the specified webinar. The webinar must be a scheduled, future webinar.


```js
getgo_gotowebinar.deleteRegistrant({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "registrantKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* registrantKey (integer) **required** - The key of the registrant

### getRegistrant
Retrieve registration details for a specific registrant.


```js
getgo_gotowebinar.getRegistrant({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "registrantKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* registrantKey (integer) **required** - The key of the registrant

### getAllSessions
Retrieves details for all past sessions of a specific webinar.


```js
getgo_gotowebinar.getAllSessions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar

### getWebinarSession
Retrieves attendance details for a specific webinar session that has ended. If attendees attended the session ('registrantsAttended'), specific attendance details, such as attendenceTime for a registrant, will also be retrieved. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getWebinarSession({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session

### getAttendees
Retrieve details for all attendees of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getAttendees({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session

### getAttendee
Retrieve registration details for a particular attendee of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getAttendee({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session
* registrantKey (integer) **required** - The key of the registrant

### getAttendeePollAnswers
Get poll answers from a particular attendee of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getAttendeePollAnswers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session
* registrantKey (integer) **required** - The key of the registrant

### getAttendeeQuestions
Get questions asked by an attendee during a webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getAttendeeQuestions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session
* registrantKey (integer) **required** - The key of the registrant

### getAttendeeSurveyAnswers
Retrieve survey answers from a particular attendee during a webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getAttendeeSurveyAnswers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session
* registrantKey (integer) **required** - The key of the registrant

### getPerformance
Get performance details for a session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getPerformance({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session

### getPolls
Retrieve all collated attendee questions and answers for polls from a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getPolls({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session

### getQuestions
Retrieve questions and answers for a past webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getQuestions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session

### getSurveys
Retrieve surveys for a past webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
getgo_gotowebinar.getSurveys({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the organizer
* webinarKey (integer) **required** - The key of the webinar
* sessionKey (integer) **required** - The key of the webinar session

