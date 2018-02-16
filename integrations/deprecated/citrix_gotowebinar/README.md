# @datafire/citrix_gotowebinar

Client library for GoToWebinar

## Installation and Usage
```bash
npm install --save @datafire/citrix_gotowebinar
```
```js
let citrix_gotowebinar = require('@datafire/citrix_gotowebinar').create();

citrix_gotowebinar.getAllAccountWebinars({
  "Authorization": "",
  "accountKey": 0,
  "fromTime": "",
  "toTime": ""
}).then(data => {
  console.log(data);
});
```

## Description

The GoToWebinar API provides seamless integration of webinar registrant and attendee data into your existing infrastructure or third-party applications. The ability to register participants, as well as pull lists of registrants and attendees for a webinar, allows organizers to manage the flow of information between their primary applications without manual intervention.

## Actions

### getAllAccountWebinars
Retrieves the list of webinars for an account within a given date range. __*Page*__ and __*size*__ parameters are optional. Default __*page*__ is 0 and default __*size*__ is 20. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getAllAccountWebinars({
  "Authorization": "",
  "accountKey": 0,
  "fromTime": "",
  "toTime": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * accountKey **required** `integer`: The key of the account
  * fromTime **required** `string`: A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z
  * toTime **required** `string`: A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z
  * page `integer`: The page number to be displayed. The first page is 0.
  * size `integer`: The size of the page.

#### Output
* output [AccountWebinarsResponse](#accountwebinarsresponse)

### getHistoricalWebinars
Returns details for completed webinars for the specified organizer and completed webinars of other organizers where the specified organizer is a co-organizer.


```js
citrix_gotowebinar.getHistoricalWebinars({
  "Authorization": "",
  "organizerKey": 0,
  "fromTime": "",
  "toTime": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * fromTime **required** `string`: A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z
  * toTime **required** `string`: A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z

#### Output
* output `array`
  * items [HistoricalWebinar](#historicalwebinar)

### getOrganizerSessions
Retrieve all completed sessions of all the webinars of a given organizer.


```js
citrix_gotowebinar.getOrganizerSessions({
  "Authorization": "",
  "organizerKey": 0,
  "fromTime": "",
  "toTime": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * fromTime **required** `string`: A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z
  * toTime **required** `string`: A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z

#### Output
* output `array`
  * items [Session](#session)

### getUpcomingWebinars
Returns webinars scheduled for the future for the specified organizer and webinars of other organizers where the specified organizer is a co-organizer.


```js
citrix_gotowebinar.getUpcomingWebinars({
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
  * items [UpcomingWebinar](#upcomingwebinar)

### getAllWebinars
Returns webinars scheduled for the future for a specified organizer.


```js
citrix_gotowebinar.getAllWebinars({
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
  * items [Webinar](#webinar)

### createWebinar
Creates a single session webinar, a sequence of webinars or a series of webinars depending on the type field in the body: "single_session" creates a single webinar session, "sequence" creates a webinar with multiple meeting times where attendees are expected to be the same for all sessions, and "series" creates a webinar with multiple meetings times where attendees choose only one to attend. The default, if no type is declared, is single_session. A sequence webinar requires a "recurrenceStart" object consisting of a "startTime" and "endTime" key for the first webinar of the sequence, a "recurrencePattern" of "daily", "weekly", "monthly", and a "recurrenceEnd" which is the last date of the sequence (for example, 2016-12-01). A series webinar requires a "times" array with a discrete "startTime" and "endTime" for each webinar in the series. The call requires a webinar subject and description. The "isPasswordProtected" sets whether the webinar requires a password for attendees to join. If set to True, the organizer must go to Registration Settings at My Webinars (https://global.gotowebinar.com/webinars.tmpl) and add the password to the webinar, and send the password to the registrants. The response provides a numeric webinarKey in string format for the new webinar. Once a webinar has been created with this method, you can accept registrations.


```js
citrix_gotowebinar.createWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * body **required** [WebinarReqCreate](#webinarreqcreate)

#### Output
* output [CreatedWebinar](#createdwebinar)

### cancelWebinar
Cancels a specific webinar. If the webinar is a series or sequence, this call deletes all scheduled sessions. To send cancellation emails to registrants set sendCancellationEmails=true in the request. When the cancellation emails are sent, the default generated message is used in the cancellation email body.


```js
citrix_gotowebinar.cancelWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sendCancellationEmails `boolean`: Indicates whether cancellation notice emails should be sent. The default value is false

#### Output
*Output schema unknown*

### getWebinar
Retrieve information on a specific webinar. If the type of the webinar is 'sequence', a sequence of future times will be provided. Webinars of type 'series' are treated the same as normal webinars - each session in the webinar series has a different webinarKey. If an organizer cancels a webinar, then a request to get that webinar would return a '404 Not Found' error.


```js
citrix_gotowebinar.getWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output [WebinarByKey](#webinarbykey)

### updateWebinar
Updates a webinar. The call requires at least one of the parameters in the request body. The request completely replaces the existing session, series, or sequence and so must include the full definition of each as for the Create call. Set notifyParticipants=true to send update emails to registrants.


```js
citrix_gotowebinar.updateWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * notifyParticipants `boolean`: Defines whether to send notifications to participants
  * body **required** [WebinarReqUpdate](#webinarrequpdate)

#### Output
*Output schema unknown*

### getAttendeesForAllWebinarSessions
Returns all attendees for all sessions of the specified webinar.


```js
citrix_gotowebinar.getAttendeesForAllWebinarSessions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output `array`
  * items [Attendee](#attendee)

### getAudioInformation
Retrieves the audio/conferencing information for a specific webinar.


```js
citrix_gotowebinar.getAudioInformation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output [Audio](#audio)

### updateAudioInformation
Updates the audio/conferencing settings for a specific webinar


```js
citrix_gotowebinar.updateAudioInformation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * notifyParticipants `boolean`: Defines whether to send notifications to participants
  * body **required** [AudioUpdate](#audioupdate)

#### Output
*Output schema unknown*

### getCoorganizers
Returns the co-organizers for the specified webinar. The original organizer who created the webinar is filtered out of the list. If the webinar has no co-organizers, an empty array is returned. Co-organizers that do not have a GoToWebinar account are returned as external co-organizers. For those organizers no surname is returned.


```js
citrix_gotowebinar.getCoorganizers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output `array`
  * items [Coorganizer](#coorganizer)

### createCoorganizers
Creates co-organizers for the specified webinar. For co-organizers that have a GoToWebinar account you have to set the parameter 'external' to 'false'. In this case you have to pass the parameter 'organizerKey' only. For co-organizers that have no GoToWebinar account you have to set the parameter 'external' to 'true'. In this case you have to pass the parameters 'givenName' and 'email'. Since there is no parameter for 'surname' you should pass first and last name to the parameter 'givenName'.


```js
citrix_gotowebinar.createCoorganizers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * body **required** `array`
    * items [CoorganizerReqCreate](#coorganizerreqcreate)

#### Output
* output `array`
  * items [Coorganizer](#coorganizer)

### deleteCoorganizer
Deletes an internal co-organizer specified by the coorganizerKey (memberKey).


```js
citrix_gotowebinar.deleteCoorganizer({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "coorganizerKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * coorganizerKey **required** `integer`: The key of the internal or external co-organizer (memberKey)
  * external `boolean`: By default only internal co-organizers (with a GoToWebinar account) can be deleted. If you want to use this call for external co-organizers you have to set this parameter to 'true'.

#### Output
*Output schema unknown*

### resendCoorganizerInvitation
Resends an invitation email to the specified co-organizer


```js
citrix_gotowebinar.resendCoorganizerInvitation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "coorganizerKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * coorganizerKey **required** `integer`: The key of the internal or external co-organizer (memberKey)
  * external `boolean`: By default only internal co-organizers (with a GoToWebinar account) will retrieve the resent invitation email. If you want to use this call for external co-organizers you have to set this parameter to 'true'.

#### Output
*Output schema unknown*

### getWebinarMeetingTimes
Retrieves the meeting times for a webinar.


```js
citrix_gotowebinar.getWebinarMeetingTimes({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output `array`
  * items [DateTimeRange](#datetimerange)

### getPanelists
Retrieves all the panelists for a specific webinar.


```js
citrix_gotowebinar.getPanelists({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output `array`
  * items [Panelist](#panelist)

### createPanelists
Create panelists for a specified webinar


```js
citrix_gotowebinar.createPanelists({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * body **required** `array`
    * items [PanelistReqCreate](#panelistreqcreate)

#### Output
* output `array`
  * items [CreatedPanelist](#createdpanelist)

### deleteWebinarPanelist
Removes a webinar panelist.


```js
citrix_gotowebinar.deleteWebinarPanelist({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "panelistKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * panelistKey **required** `integer`: The key of the webinar panelist

#### Output
*Output schema unknown*

### resendPanelistInvitation
Resend the panelist invitation email.


```js
citrix_gotowebinar.resendPanelistInvitation({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "panelistKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * panelistKey **required** `integer`: The key of the webinar panelist

#### Output
*Output schema unknown*

### getPerformanceForAllWebinarSessions
Gets performance details for all sessions of a specific webinar.


```js
citrix_gotowebinar.getPerformanceForAllWebinarSessions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output `object`: Describes performance details for webinars

### getAllRegistrantsForWebinar
Retrieve registration details for all registrants of a specific webinar. Registrant details will not include all fields captured when creating the registrant. To see all data, use the API call 'Get Registrant'. Registrants can have one of the following states; <br>WAITING - registrant registered and is awaiting approval (where organizer has required approval), <br>APPROVED - registrant registered and is approved, and <br>DENIED - registrant registered and was denied.


```js
citrix_gotowebinar.getAllRegistrantsForWebinar({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output `array`
  * items [Registrant](#registrant)

### createRegistrant
Register an attendee for a scheduled webinar. The response contains the registrantKey and join URL for the registrant. An email will be sent to the registrant unless the organizer turns off the confirmation email setting from the GoToWebinar website. Please note that you must provide all required fields including custom fields defined during the webinar creation. Use the API call 'Get registration fields' to get a list of all fields, if they are required, and their possible values. At this time there are two versions of the 'Create Registrant' call. The first version only accepts firstName, lastName, and email and ignores all other fields. If you have custom fields or want to capture additional information this version won't work for you. The second version allows you to pass all required and optional fields, including custom fields defined when creating the webinar. To use the second version you must pass the header value 'Accept: application/vnd.citrix.g2wapi-v1.1+json' instead of 'Accept: application/json'. Leaving this header out results in the first version of the API call.


```js
citrix_gotowebinar.createRegistrant({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * Accept `string`: Set to 'application/vnd.citrix.g2wapi-v1.1+json' to make a registration using fields (custom or default) additional to the basic ones.
  * resendConfirmation `boolean`: Indicates whether the confirmation email should be resent when a registrant is re-registered. The default value is false.
  * body **required** [RegistrantFields](#registrantfields)

#### Output
* output [RegistrantCreated](#registrantcreated)

### getRegistrationFields
Retrieve required, optional registration, and custom questions for a specified webinar.


```js
citrix_gotowebinar.getRegistrationFields({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output [RegistrationFields](#registrationfields)

### deleteRegistrant
Removes a webinar registrant from current registrations for the specified webinar. The webinar must be a scheduled, future webinar.


```js
citrix_gotowebinar.deleteRegistrant({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * registrantKey **required** `integer`: The key of the registrant

#### Output
*Output schema unknown*

### getRegistrant
Retrieve registration details for a specific registrant.


```js
citrix_gotowebinar.getRegistrant({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * registrantKey **required** `integer`: The key of the registrant

#### Output
* output [RegistrantDetailed](#registrantdetailed)

### getAllSessions
Retrieves details for all past sessions of a specific webinar.


```js
citrix_gotowebinar.getAllSessions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar

#### Output
* output `array`
  * items [Session](#session)

### getWebinarSession
Retrieves attendance details for a specific webinar session that has ended. If attendees attended the session ('registrantsAttended'), specific attendance details, such as attendenceTime for a registrant, will also be retrieved. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getWebinarSession({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session

#### Output
* output `array`
  * items [Attendee](#attendee)

### getAttendees
Retrieve details for all attendees of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getAttendees({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session

#### Output
* output `array`
  * items [Attendee](#attendee)

### getAttendee
Retrieve registration details for a particular attendee of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getAttendee({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session
  * registrantKey **required** `integer`: The key of the registrant

#### Output
* output [Registrant](#registrant)

### getAttendeePollAnswers
Get poll answers from a particular attendee of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getAttendeePollAnswers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session
  * registrantKey **required** `integer`: The key of the registrant

#### Output
* output `array`
  * items [PollAnswer](#pollanswer)

### getAttendeeQuestions
Get questions asked by an attendee during a webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getAttendeeQuestions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session
  * registrantKey **required** `integer`: The key of the registrant

#### Output
* output `array`
  * items [AttendeeQuestion](#attendeequestion)

### getAttendeeSurveyAnswers
Retrieve survey answers from a particular attendee during a webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getAttendeeSurveyAnswers({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session
  * registrantKey **required** `integer`: The key of the registrant

#### Output
* output `array`
  * items [PollAnswer](#pollanswer)

### getPerformance
Get performance details for a session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getPerformance({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session

#### Output
* output [SessionPerformance](#sessionperformance)

### getPolls
Retrieve all collated attendee questions and answers for polls from a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getPolls({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session

#### Output
* output `array`
  * items [Poll](#poll)

### getQuestions
Retrieve questions and answers for a past webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getQuestions({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session

#### Output
* output `array`
  * items [AttendeeQuestion](#attendeequestion)

### getSurveys
Retrieve surveys for a past webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.


```js
citrix_gotowebinar.getSurveys({
  "Authorization": "",
  "organizerKey": 0,
  "webinarKey": 0,
  "sessionKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the organizer
  * webinarKey **required** `integer`: The key of the webinar
  * sessionKey **required** `integer`: The key of the webinar session

#### Output
* output `array`
  * items [Poll](#poll)



## Definitions

### AccessCodes
* AccessCodes `object`: Describes the access codes for organizer, panelists and attendees
  * attendee **required** `string`: Access code for attendees
  * organizer **required** `string`: Access code for the organizer
  * panelist **required** `string`: Access code for panelists

### AccountWebinar
* AccountWebinar `object`: Describes a webinar for an account within a given date range.
  * description **required** `string`: A short description of the webinar
  * impromptu **required** `boolean`: A boolean flag indicating if the webinar type is impromptu
  * isPasswordProtected **required** `boolean`: A boolean flag indicating if the webinar is password protected
  * organizerKey **required** `string`: The key of the webinar organizer
  * registrationUrl **required** `string`: The URL the webinar invitees can use to register
  * subject **required** `string`: The webinar subject
  * timeZone **required** `string`: The timezone where the webinar is taking place
  * times **required** `array`: Array with startTime and endTime for the webinar sessions
    * items [DateTimeRange](#datetimerange)
  * type **required** `string`: Specifies the webinar type
  * webinarID **required** `string`: The 9-digit webinar ID
  * webinarKey **required** `string`: The unique key of the webinar

### AccountWebinars
* AccountWebinars `object`
  * webinars **required** `array`
    * items [AccountWebinar](#accountwebinar)

### AccountWebinarsResponse
* AccountWebinarsResponse `object`: Describes a list of webinars for an account within a given date range
  * _embedded **required** [AccountWebinars](#accountwebinars)
  * page **required** [page](#page)

### AnswerToAttendeeQuestion
* AnswerToAttendeeQuestion `object`: Describes an answer to a question asked by an attendee during a webinar session.
  * answer **required** `string`: An answer given to a question asked by an attendee during a webinar session
  * answeredBy **required** `string`: The key of the organizer that answered the attendee's question

### Attendance
* Attendance `object`: Describes the times the attendee joined and left a webinar session.
  * joinTime **required** `string`: The time the attendee joined a webinar session
  * leaveTime **required** `string`: The time the attendee left a webinar session

### AttendanceStatistics
* AttendanceStatistics `object`: Describes attendance metrics for a webinar session.
  * averageAttendanceTimeSeconds **required** `number`: Average attendance time in seconds
  * averageAttentiveness **required** `number`: Average based on the focus of the attendees Viewer during the webinar session
  * averageInterestRating **required** `number`: Numerical value 1-100 (100 being most interested) indicating the average interest rating of the webinar attendees
  * percentageAttendance **required** `number`: The percentage of registrants that actually attended the webinar session
  * registrantCount **required** `integer`: The number of registrations for the webinar

### Attendee
* Attendee `object`: Describes the attendee of a webinar
  * attendance **required** `array`: The list of times the attendee joined and left the webinar session
    * items [Attendance](#attendance)
  * attendanceTimeInSeconds **required** `integer`: The total attendance time in seconds
  * email **required** `string`: The attendee's email address
  * firstName **required** `string`: The attendee's first name
  * lastName **required** `string`: The attendee's last name
  * registrantKey **required** `integer`: The key of the webinar attendee
  * sessionKey **required** `integer`: The unique key of the webinar session

### AttendeeQuestion
* AttendeeQuestion `object`: Describes the question asked by an attendee during a webinar session; includes the answers given to it.
  * answers **required** `array`: Answer to a question of an attendee and key of the organizer that answered
    * items [AnswerToAttendeeQuestion](#answertoattendeequestion)
  * askedBy **required** `string`: The email address of the attendee that asked the question
  * question **required** `string`: The question asked by the attendee

### Audio
* Audio `object`: Describes the audio/conferencing information for a webinar.
  * confCallNumbers `object`: The conference call numbers and access codes per country. This will be returned only, if 'type' is not set to 'Private'. Example for this object: "confCallNumbers":{"CA":{"accessCodes":{"attendee":"159-309-045","organizer":"791-426-085","panelist":"690-270-339"},"tollFree":"1 888 455 4198"},"FI":{"accessCodes":{"attendee":"159-309-045","organizer":"791-426-085","panelist":"690-270-339"},"toll":"+358 (0) 338 79 4198"},"US":{"accessCodes":{"attendee":"159-309-045","organizer":"791-426-085","panelist":"690-270-339"},"toll":"+1 (805) 879-4198","tollFree":"1 888 455 4198"}}
  * privateInfo [PrivateInfo](#privateinfo)
  * type **required** [AudioType](#audiotype)

### AudioType
* AudioType `string` (values: PSTN, VOIP, Hybrid, Private): How to connect to the webinar's audio conference

### AudioUpdate
* AudioUpdate `object`: Defines the audio/conferencing settings for the specified webinar
  * privateInfo [PrivateInfoUpdate](#privateinfoupdate)
  * pstnInfo [PstnInfoUpdate](#pstninfoupdate)
  * type **required** [AudioType](#audiotype)

### CallNumbers
* CallNumbers `object`: Conference call numbers per country.
  * accessCodes **required** [AccessCodes](#accesscodes)
  * toll **required** `string`: Conference number for toll calls.
  * tollFree `string`: Conference number for toll-free calls.

### Coorganizer
* Coorganizer `object`: Describes a webinar co-organizer. A co-organizer without a GoToWebinar account is marked as external and is returned without a surname
  * email **required** `string`: The co-organizer's email address
  * external **required** `boolean`: If the co-organizer has no GoToWebinar account, this value is set to 'true'
  * givenName **required** `string`: The co-organizer's given name
  * joinLink **required** `string`: The co-organizer's join link
  * memberKey **required** `string`: The co-organizer's organizer key. A new member key is created for external co-organizers
  * surname **required** `string`: The co-organizer's surname. For external co-organizers this parameter is not returned

### CoorganizerReqCreate
* CoorganizerReqCreate `object`: Details used for creating a co-organizer for a webinar. 
  * email `string`: The co-organizer's email address. This parameter has to be passed only, if 'external' is set to 'true'
  * external **required** `boolean`: If the co-organizer has no GoToWebinar account, this value has to be set to 'true'
  * givenName `string`: The co-organizer's given name. This parameter has to be passed only, if 'external' is set to 'true'
  * organizerKey `string`: The co-organizer's organizer key. This parameter has to be passed only, if 'external' is set to 'false'

### CreatedPanelist
* CreatedPanelist `object`: Describes a created panelist
  * email **required** `string`: The panelist's email address
  * joinLink **required** `string`: The panelist's join link
  * name **required** `string`: The panelist's name
  * panelistKey **required** `string`: The panelist's key

### CreatedWebinar
* CreatedWebinar `object`: Describes a newly created webinar.
  * webinarKey **required** `string`: The unique key of the webinar.

### CustomAnswers
* CustomAnswers `object`: Answers to custom questions of the registrant
  * answer **required** `string`: Answer to a custom question when registering
  * question **required** `string`: Custom question for registering

### DateTimeRange
* DateTimeRange `object`: A pair of DateTime values, the first of which serves as a start time and the second as an end time of an interval.
  * endTime **required** `string`: The ending time of an interval, e.g. 2015-07-13T22:00:00Z
  * startTime **required** `string`: The starting time of an interval, e.g. 2015-07-13T10:00:00Z

### HistoricalWebinar
* HistoricalWebinar `object`: Describes a completed webinar
  * description **required** `string`: A short description of the webinar
  * organizerKey **required** `integer`: The key of the webinar organizer
  * subject **required** `string`: The webinar subject
  * timeZone **required** `string`: The timezone where the webinar is taking place
  * times **required** `array`: Array with startTime and endTime for the webinar sessions
    * items [DateTimeRange](#datetimerange)
  * webinarID **required** `string`: The 9-digit webinar ID
  * webinarKey **required** `integer`: The unique key of the webinar

### Panelist
* Panelist `object`: Describes a webinar session panelist
  * email **required** `string`: The panelist's email address
  * firstName **required** `string`: DEPRECATED. The fields 'firstName' and 'lastName' are replaced by the field 'name'
  * joinLink **required** `string`: The co-organizer's join link
  * lastName **required** `string`: DEPRECATED. The fields 'firstName' and 'lastName' are replaced by the field 'name'
  * name **required** `string`: The panelist's name
  * panelistId **required** `integer`: The panelist's ID

### PanelistReqCreate
* PanelistReqCreate `object`: Describes a single panelist
  * email **required** `string`: The panelist's email address
  * name **required** `string`: The panelist's name

### Poll
* Poll `object`: A poll or survey launched by an organizer during or after a webinar session; includes the responses given to it by the attendees.
  * numberOfResponses **required** `integer`: The total number of responses received for this poll or survey
  * question **required** `string`: The poll or survey question asked by the webinar organizer
  * responses **required** `array`: The responses given by the attendees to the poll or survey
    * items [PollResponse](#pollresponse)

### PollAnswer
* PollAnswer `object`: Describes the answer given by a webinar attendee to a poll or survey launched by an organizer.
  * answer **required** `string`: The answer given to the poll or survey question
  * question **required** `string`: The poll or survey question

### PollResponse
* PollResponse `object`: One of the potential responses/options to a poll or survey launched by an organizer during a webinar session.
  * percentage **required** `number`: The percentage of responses that favored this particular option
  * text **required** `string`: The text of the response/option to a poll or survey

### PollsAndSurveysStatistics
* PollsAndSurveysStatistics `object`: Details on the polls and surveys for a webinar session.
  * percentagePollsCompleted **required** `number`: The percentage of polls completed by the attendees
  * percentageSurveysCompleted **required** `number`: The percentage of surveys completed by the attendees
  * pollCount **required** `integer`: The number of polls launched at a webinar session
  * questionsAsked **required** `integer`: The number of questions asked at a webinar session
  * surveyCount **required** `number`: The percentage of surveys launched at a webinar session

### PrivateInfo
* PrivateInfo `object`: Phone numbers for an own conference call service.
  * attendee **required** `string`: Text for the panelist when using an own conference call service
  * organizer `string`: Text for the organizer when using an own conference call service
  * panelist `string`: Text for the panelist when using an own conference call service

### PrivateInfoUpdate
* PrivateInfoUpdate `object`: Defines the audio data for an own conferencing system
  * attendee **required** `string`: Attendee phone number for own conference call system
  * organizer `string`: Organizer phone number for own conference call system
  * panelist `string`: Panelist phone number for own conference call system

### PstnInfoUpdate
* PstnInfoUpdate `object`: Defines the audio/conferencing settings for the specified webinar. It required to pass 'tollFreeCountries' or 'tollCountries' or both.
  * tollCountries `array`: Defines in which countries toll PSTN numbers are available. Possible values are AT, AU, BE, CA, CH, DE, DK, ES, FI, FR, GB, IE, IT, NL, NO, NZ, SE, US
    * items [TollCountries](#tollcountries)
  * tollFreeCountries `array`: Defines in which countries toll free PSTN numbers are available. Possible values are AE, AR, AT, AU, BE, BG, BH, BR, BY, CA, CH, CL, CN, CO, CZ, DE, DK, ES, FI, FR, GB, GR, HK, HU, ID, IE, IL, IN, IS, IT, JP, KR, LU, MX, MY, NL, NO, NZ, PA, PE, PH, PL, PT, RO, RU, SA, SE, SG, TH, TR, TW, UA, US, UY, VN, ZA
    * items [TollFreeCountries](#tollfreecountries)

### Registrant
* Registrant `object`: Describes a webinar registrant
  * email **required** `string`: The registrant's email address
  * firstName **required** `string`: The registrant's first name
  * joinUrl **required** `string`: The URL the registrant will use to join the webinar
  * lastName **required** `string`: The registrant's last name
  * registrantKey **required** `integer`: The registrant's key
  * registrationDate **required** `string`: The registration date and time
  * status **required** `string` (values: APPROVED, DENIED, WAITING): The registration status
  * timeZone **required** `string`: The time zone where the webinar will take place

### RegistrantCreated
* RegistrantCreated `object`: Describes a newly created webinar registrant.
  * joinUrl **required** `string`: The URL the registrant will use to join the webinar.
  * registrantKey **required** `integer`: The registrant's key

### RegistrantDetailed
* RegistrantDetailed `object`: Detailed description of a webinar registrant with all registration fields.
  * address `string`: The registrant's address
  * city `string`: The registrant's city
  * country `string`: The registrant's country
  * email **required** `string`: The registrant's email address
  * employeeCount `string`: The size in employees of the registrant's organization
  * firstName **required** `string`: The registrant's first name
  * implementationTimeFrame `string`: The time frame within which the product will be purchased
  * industry `string`: The type of industry the registrant's organization belongs to
  * jobTitle `string`: The registrant's job title
  * joinUrl **required** `string`: The URL the registrant will use to join the webinar
  * lastName **required** `string`: The registrant's last name
  * numberOfEmployees `string`: The size in employees of the registrant's organization
  * organization `string`: The registrant's organization
  * phone `string`: The registrant's phone
  * purchasingRole `string`: The registrant's role in purchasing the product
  * purchasingTimeFrame `string`: The time frame within which the product will be purchased
  * questionsAndComments `string`: Any questions or comments the registrant made at the time of registration
  * registrantKey **required** `integer`: The registrant's key
  * registrationDate **required** `string`: The registration date and time
  * responses `array`: Responses to custom questions
    * items [CustomAnswers](#customanswers)
  * source `string`: The source that led to the registration. This can be any string like 'Newsletter 123' or 'Marketing campaign ABC'
  * state `string`: The registrant's state (US only)
  * status **required** `string` (values: APPROVED, DENIED, WAITING): The registration status
  * timeZone **required** `string`: The time zone where the webinar will take place
  * type `string` (values: REGULAR): The type is REGULAR for 'One session' and 'Sequence' webinars. For webinar series this parameter is not passed
  * unsubscribed `boolean`: Indicates whether the registrant opted-out from receiving other emails from this webinar's organizer
  * zipCode `string`: The registrant's zip (post) code

### RegistrantFields
* RegistrantFields `object`: Detailed description of a all fields to register a registrant for a webinar.
  * address `string`: The registrant's address
  * city `string`: The registrant's city
  * country `string`: The registrant's country
  * email **required** `string`: The registrant's email address
  * firstName **required** `string`: The registrant's first name
  * industry `string`: The type of industry the registrant's organization belongs to
  * jobTitle `string`: The registrant's job title
  * lastName **required** `string`: The registrant's last name
  * numberOfEmployees `string`: The size in employees of the registrant's organization
  * organization `string`: The registrant's organization
  * phone `string`: The registrant's phone
  * purchasingRole `string`: The registrant's role in purchasing the product
  * purchasingTimeFrame `string`: The time frame within which the product will be purchased
  * questionsAndComments `string`: Any questions or comments the registrant made at the time of registration
  * responses `array`: Set the answers of all questions
    * items [RegistrantQAResponse](#registrantqaresponse)
  * source `string`: The source that led to the registration. This can be any string like 'Newsletter 123' or 'Marketing campaign ABC'
  * state `string`: The registrant's state (US only)
  * zipCode `string`: The registrant's zip (post) code

### RegistrantQAResponse
* RegistrantQAResponse `object`: Describes a completed registration question for a webinar registrant. If you use 'Multiple choice' questions the response contains the numeric answerKey, otherwise the answer text. Example:<br>{<br>  "firstName": "First",<br>  "lastName": "Last",<br>  "email": "First.Last@example.com",<br>  "responses": [{<br>      "questionKey": 17023549,<br>      "responseText": "This is a short answer"},{<br>      "questionKey": 17023550,<br>      "answerKey": 17023553}  ]<br>}
  * answerKey `integer`: The numeric key of the answer to a multiple-choice question.
  * questionKey **required** `integer`: The unique key of the question
  * responseText `string`: Answer of the question.

### RegistrationAnswer
* RegistrationAnswer `object`: Describes an answer to a multiple choice custom registration field.
  * answer **required** `string`: The answer value
  * answerKey **required** `integer`: The answer key

### RegistrationField
* RegistrationField `object`: Describes a field for a webinar registration.
  * answers `array`: List of choices for a multiple choice registration field
    * items `string`
  * field **required** `string`: The name of the registration field
  * maxSize **required** `integer`: The character size of the custom registration field (max 128)
  * required **required** `boolean`: Indicates whether the custom registration field is compulsory

### RegistrationFields
* RegistrationFields `object`: The fields to be completed on the webinar registration form.
  * fields **required** `array`: The default fields the organizer has selected for the webinar registration form
    * items [RegistrationField](#registrationfield)
  * questions **required** `array`: Custom fields created by the organizer for the webinar registration form
    * items [RegistrationQuestion](#registrationquestion)

### RegistrationQuestion
* RegistrationQuestion `object`: Describes a custom field for a webinar registration.
  * answers `array`: The answers to a multiple choice custom registration field
    * items [RegistrationAnswer](#registrationanswer)
  * maxSize **required** `integer`: The character size of the custom registration field (max 1000)
  * question **required** `string`: The value (text) of the custom registration field
  * questionKey **required** `integer`: The unique key of the custom registration field
  * required **required** `boolean`: Indicates whether the custom registration field is compulsory
  * type **required** `string` (values: multipleChoice, shortAnswer): Indicates whether the custom registration field requires a single short answer or whether it is a multiple choice question

### Session
* Session `object`: Describes a completed webinar session.
  * endTime **required** `string`: The ending time of the webinar session
  * registrantsAttended **required** `integer`: The number of registrants who attended the webinar session
  * sessionKey **required** `integer`: The unique key of the webinar session
  * startTime **required** `string`: The starting time of the webinar session
  * webinarID **required** `string`: The 9-digit webinar ID
  * webinarKey **required** `integer`: The unique key of the webinar

### SessionPerformance
* SessionPerformance `object`: Describes performance details for webinar sessions
  * attendance **required** [AttendanceStatistics](#attendancestatistics)
  * pollsAndSurveys **required** [PollsAndSurveysStatistics](#pollsandsurveysstatistics)

### TollCountries
* TollCountries `string` (values: AT, AU, BE, CA, CH, DE, DK, ES, FI, FR, GB, IE, IT, NL, NO, NZ, SE, US): Defines in which countries toll PSTN numbers are available.

### TollFreeCountries
* TollFreeCountries `string` (values: AE, AR, AT, AU, BE, BG, BH, BR, BY, CA, CH, CL, CN, CO, CZ, DE, DK, ES, FI, FR, GB, GR, HK, HU, ID, IE, IL, IN, IS, IT, JP, KR, LU, MX, MY, NL, NO, NZ, PA, PE, PH, PL, PT, RO, RU, SA, SE, SG, TH, TR, TW, UA, US, UY, VN, ZA): Countries in which toll free PSTN numbers are available.

### UpcomingWebinar
* UpcomingWebinar `object`: Describes a scheduled webinar
  * description **required** `string`: A short description of the webinar
  * inSession **required** `boolean`: Indicates whether there is a webinar session currently in progress
  * organizerKey **required** `integer`: The key of the webinar organizer
  * registrationUrl **required** `string`: The URL the webinar invitees can use to register
  * subject **required** `string`: The webinar subject
  * timeZone **required** `string`: The timezone where the webinar is taking place
  * times **required** `array`: Array with startTime and endTime for the webinar sessions
    * items [DateTimeRange](#datetimerange)
  * webinarID **required** `string`: The 9-digit webinar ID
  * webinarKey **required** `integer`: The unique key of the webinar

### Webinar
* Webinar `object`: Describes a scheduled webinar
  * description **required** `string`: A short description of the webinar
  * inSession **required** `boolean`: Indicates whether there is a webinar session currently in progress
  * numberOfRegistrants **required** `integer`: The number of registrants at the webinar
  * organizerKey **required** `integer`: The key of the webinar organizer
  * registrationUrl **required** `string`: The URL the webinar invitees can use to register
  * subject **required** `string`: The webinar subject
  * timeZone **required** `string`: The timezone where the webinar is taking place
  * times **required** `array`: Array with startTime and endTime for the webinar sessions
    * items [DateTimeRange](#datetimerange)
  * webinarID **required** `string`: The 9-digit webinar ID
  * webinarKey **required** `integer`: The unique key of the webinar

### WebinarByKey
* WebinarByKey `object`: Describes a completed webinar
  * description **required** `string`: A short description of the webinar
  * inSession **required** `boolean`: Indicates whether there is a webinar session currently in progress
  * numberOfOpenedInvitations **required** `integer`: This field is obsolete. It is always set to 0
  * numberOfRegistrants **required** `integer`: The number of registrants at the webinar
  * numberOfRegistrationLinkClicks **required** `integer`: This field is obsolete. It is always set to 0
  * organizerKey **required** `integer`: The key of the webinar organizer
  * registrationUrl **required** `string`: The URL the webinar invitees can use to register
  * subject **required** `string`: The webinar subject.
  * timeZone **required** `string`: The timezone where the webinar is taking place
  * times **required** `array`: Array with startTime and endTime for the webinar sessions
    * items [DateTimeRange](#datetimerange)
  * webinarID **required** `string`: The 9-digit webinar ID
  * webinarKey **required** `integer`: The unique key of the webinar

### WebinarReqCreate
* WebinarReqCreate `object`: Describes the details used to create a new single session webinar.
  * description `string`: A short description of the webinar (2048 characters maximum)
  * isPasswordProtected `boolean`: A boolean flag indicating if the webinar is password protected or not.
  * subject **required** `string`: The name/subject of the webinar (128 characters maximum)
  * timeZone `string`: The time zone where the webinar is taking place (must be a valid time zone ID, see https://developer.citrixonline.com/time-zones). If this parameter is not passed, the timezone of the organizer's profile will be used
  * times **required** `array`: Array with startTime and endTime for webinar. Since this call creates single session webinars, the array can only contain a single pair of startTime and endTime
    * items [DateTimeRange](#datetimerange)
  * type `string`: Specifies the webinar type. The default type value is "single_session", which is used to create a single webinar session. The possible values are "single_session", "series", "sequence". If type is set to "single_session", a single webinar session is created. If type is set to "series", a webinar series is created. In this case 2 or more timeframes must be specified for each webinar. Example: "times": [{"startTime": "...", "endTime": "..."},{"startTime": "...", "endTime": "..."},{"startTime": "...", "endTime": "..."}. If type is set to "sequence" a sequence of webinars is created. The times object in the body must be replaced by the "recurrenceStart" object. Example: "recurrenceStart": {"startTime":"2012-06-12T16:00:00Z", "endTime": "2012-06-12T17:00:00Z" }.  The "recurrenceEnd" and "recurrencePattern" body parameter must be specified. Example: , "recurrenceEnd": "2012-07-10", "recurrencePattern": "daily".

### WebinarReqUpdate
* WebinarReqUpdate `object`: Describes the details of the webinar
  * description `string`: A description of the webinar (2048 characters maximum)
  * locale `string` (values: en_US, de_DE, es_ES, fr_FR, it_IT, zh_CN): The webinar language
  * subject `string`: The name/subject of the webinar (128 characters maximum)
  * timeZone `string`: The time zone where the webinar is taking place (must be a valid time zone ID, see https://developer.citrixonline.com/time-zones). If this parameter is not passed, the timezone of the organizer's profile will be used
  * times `array`: Array with start and end time(s) for webinar
    * items [DateTimeRange](#datetimerange)

### firstPage
* firstPage `object`
  * href **required** `string`: The first page link

### lastPage
* lastPage `object`
  * href **required** `string`: The last page link

### page
* page `object`
  * number **required** `integer`: The current page number. The first page is 0
  * size **required** `integer`: The page size
  * totalElements **required** `integer`: The total elements
  * totalPages **required** `integer`: The pages count

### selfPage
* selfPage `object`
  * href **required** `string`: The current page link


