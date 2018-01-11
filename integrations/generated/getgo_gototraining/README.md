# @datafire/getgo_gototraining

Client library for GoToTraining

## Installation and Usage
```bash
npm install --save @datafire/getgo_gototraining
```
```js
let getgo_gototraining = require('@datafire/getgo_gototraining').create();

getgo_gototraining.getAllOrganisers({}).then(data => {
  console.log(data);
})
```

## Description

The GoToTraining API enables developers to use the stable and robust GoToTraining functionality as the basis for online trainings in a proprietary learning management system. The GoToTraining APIs provide the ability to access the scheduling, registration, management, and reporting functions of GoToTraining from external applications. With the ability to tightly integrate GoToTraining into your learning infrastructure, you can offer your learners a seamless user experience and provide them with a market leading virtual classroom environment.

## Actions

### getAllOrganisers
DEPRECATED: Please use the Admin API call 'Get all users' instead. For details see https://goto-developer.logmein.com/get-all-users.


```js
getgo_gototraining.getAllOrganisers({
  "Authorization": "",
  "accountKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * accountKey **required** `integer`: The key of the multi-user account

#### Output
* output `array`
  * items [Organizer](#organizer)

### getAllTrainings
This call retrieves information on all scheduled trainings for a given organizer. The trainings are returned in the order in which they were created. Completed trainings are not included; ongoing trainings with past sessions are included along with the past sessions. If the organizer does not have any scheduled trainings, the response will be empty.


```js
getgo_gototraining.getAllTrainings({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer

#### Output
* output `array`
  * items [Training](#training)

### scheduleTraining
Schedules a training of one or more sessions. The call requires a training's name, at least one start and end time, and optionally may include additional sessions, a description, additional organizers (presenters), and registration settings. You can only add organizers to a training if you have a multi-user account. Once a training has been created with this method, you can accept registrations to the training. Registration is for the entire training - all sessions. (The GoToTraining admin site enables you to create trainings that allow participants to register for individual sessions as well as automatically create weekly or monthly events.) Registration settings controls whether you allow web registration for this training, and whether a confirmation email is sent to the registrant following registration. Disabling the confirmation email is an API-only setting. If the user registers through the GoToTraining website, a confirmation email is sent. If the user is manually approved by the training administrator through the GoToTraining web site, the confirmation email is sent. It is recommended that you disable web registration if you disable confirmation emails. The response contains a trainingKey for the scheduled training.


```js
getgo_gototraining.scheduleTraining({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * body **required** [TrainingReqCreate](#trainingreqcreate)

#### Output
* output `string`

### cancelTraining
Deletes a scheduled or completed training. For scheduled trainings, it deletes all scheduled sessions of the training. For completed trainings, the sessions remain in the database. No email is sent to organizers or registrants, but when participants attempt to start or join the training, they are directed to a page that states: Training Not Found: The training you are trying to join is no longer available.


```js
getgo_gototraining.cancelTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training

#### Output
*Output schema unknown*

### getTraining
Uses the organizer key and training key to retrieve information on a scheduled training.


```js
getgo_gototraining.getTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training

#### Output
* output [Training](#training)

### getManageTrainingURL
A request for a direct URL to the admin portal for a specific training. The request identifies the organizer and the training; the response provides a link the organizer can use to manage or launch the training in the admin portal. The training organizer will be required to log in. You can schedule and manage the training (e.g., add tests, polls and training materials) from the URL provided in the response.


```js
getgo_gototraining.getManageTrainingURL({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training

#### Output
* output `string`

### updateTrainingNameDescription
Request to update a scheduled training name and description.


```js
getgo_gototraining.updateTrainingNameDescription({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training
  * body **required** [TrainingNameDescription](#trainingnamedescription)

#### Output
*Output schema unknown*

### getOrganisersForTraining
Retrieves organizer details for a specific training. This is only applicable to multi-user accounts with sharing enabled (co-organizers).


```js
getgo_gototraining.getOrganisersForTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training

#### Output
* output `array`
  * items [Organizer](#organizer)

### updateOrganisersForTraining
Replaces the co-organizers for a specific training. The scheduling organizer cannot be unassigned. Organizers will be notified via email if the notifyOrganizers parameter is set to true. Replaced organizers are not notified. This method is only applicable to multi-user accounts with sharing enabled (co-organizers).


```js
getgo_gototraining.updateOrganisersForTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training
  * body **required** [TrainingOrganizers](#trainingorganizers)

#### Output
*Output schema unknown*

### getRegistrants
Retrieves details on all registrants for a specific training. Registrants can be:<br>WAITING - registrant registered and is awaiting approval (where organizer has required approval)<br>APPROVED - registrant registered and is approved<br>DENIED - registrant registered and was not approved.<br><br>IMPORTANT: The registrant data caches are typically updated immediately and the data will be returned in the response. However, the update can take as long as two hours.


```js
getgo_gototraining.getRegistrants({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training

#### Output
* output `array`
  * items [Registrant](#registrant)

### registerForTraining
Registers one person, identified by a unique email address, for a training. Approval is automatic unless payment or approval is required. The response contains the Confirmation page URL and Join URL for the registrant. NOTE: If some registrants do not receive a confirmation email, the emails could be getting blocked by their email server due to spam filtering or a grey-listing setting.


```js
getgo_gototraining.registerForTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training
  * body **required** [RegistrantReqCreate](#registrantreqcreate)

#### Output
* output [RegistrantCreated](#registrantcreated)

### cancelRegistration
This call cancels a registration in a scheduled training for a specific registrant. If the registrant has paid for the training, a cancellation cannot be completed with this method; it must be completed on the external admin site. No notification is sent to the registrant or the organizer by default. The registrant can re-register if needed.


```js
getgo_gototraining.cancelRegistration({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training
  * registrantKey **required** `integer`: The key of the registrant

#### Output
*Output schema unknown*

### getRegistrant
Retrieves details for specific registrant in a specific training. Registrants can be:<br>WAITING - registrant registered and is awaiting approval (where organizer has required approval)<br>APPROVED - registrant registered and is approved<br>DENIED - registrant registered and was not approved.<br><br>IMPORTANT: The registrant data caches are typically updated immediately and the data will be returned in the response. However, the update can take as long as two hours.


```js
getgo_gototraining.getRegistrant({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0,
  "registrantKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training
  * registrantKey **required** `integer`: The key of the registrant

#### Output
* output [Registrant](#registrant)

### updateRegistrationSettingsForTraining
An API request to automatically enable or disable web registrations and confirmation emails to registrants.


```js
getgo_gototraining.updateRegistrationSettingsForTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training
  * body **required** [RegistrationSettings](#registrationsettings)

#### Output
*Output schema unknown*

### getStartUrl
Returns a URL that can be used to start a training. When this URL is opened in a web browser, the GoToTraining client will be downloaded and launched and the training will start after the organizer logs in with its credentials.


```js
getgo_gototraining.getStartUrl({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training

#### Output
* output `string`

### updateTrainingTimes
 A request to update a scheduled training's start and end times. If the request contains 'notifyTrainers = true' and 'notifyRegistrants = true', both organizers and registrants are notified. The response provides the number of notified trainers and registrants.


```js
getgo_gototraining.updateTrainingTimes({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training
  * body **required** [TrainingTimes](#trainingtimes)

#### Output
* output [NotifiedParties](#notifiedparties)

### getSessionDetailsForDateRange
This call returns all session details over a given date range for a given organizer. A session is a completed training event.


```js
getgo_gototraining.getSessionDetailsForDateRange({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * body **required** [DateTimeRange](#datetimerange)

#### Output
* output `array`
  * items [Session](#session)

### getAttendanceDetails
This call retrieves a list of registrants from a specific completed training session. The response includes the registrants' email addresses, and if they attended, it includes the duration of each period of their attendance in minutes, and the times at which they joined and left. If a registrant does not attend, they appear at the bottom of the listing with timeInSession = 0.


```js
getgo_gototraining.getAttendanceDetails({
  "Authorization": "",
  "organizerKey": 0,
  "sessionKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * sessionKey **required** `integer`: The key of the training session

#### Output
* output `array`
  * items [Attendee](#attendee)

### getSessionDetailsForTraining
This call returns session details for a given training. A session is a completed training event. Each training may contain one or more sessions.


```js
getgo_gototraining.getSessionDetailsForTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * organizerKey **required** `integer`: The key of the training organizer
  * trainingKey **required** `integer`: The key of the training

#### Output
* output `array`
  * items [Session](#session)

### getRecordingsForTraining
This call retrieves information on all online recordings for a given training. If there are none, it returns an empty list.


```js
getgo_gototraining.getRecordingsForTraining({
  "Authorization": "",
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * trainingKey **required** `integer`: The key of the training

#### Output
* output [RecordingsListForTraining](#recordingslistfortraining)

### getRecordingDownloadById
This call provides the download for the given recording by returning a 302 redirect to the original file.


```js
getgo_gototraining.getRecordingDownloadById({
  "Authorization": "",
  "trainingKey": 0,
  "recordingId": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * trainingKey **required** `integer`: The key of the training
  * recordingId **required** `integer`: the unique id of the recording

#### Output
*Output schema unknown*

### startTraining
Returns a URL that can be used to start a training. When this URL is opened in a web browser, the GoToTraining client will be downloaded and launched and the training will start. A login of the organizer is not required.


```js
getgo_gototraining.startTraining({
  "Authorization": "",
  "trainingKey": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Access token
  * trainingKey **required** `integer`: The key of the training

#### Output
* output [HostUrl](#hosturl)



## Definitions

### Attendance
* Attendance `object`: Describes the times the attendee joined and left a part of a training session.
  * joinTime **required** `string`: The time the attendee joined a part of a training session
  * leaveTime **required** `string`: The time the attendee left a part of a training session
  * timeInPartOfSession **required** `integer`: The time in minutes the attendee spent at a part of a training session

### Attendee
* Attendee `object`: Describes the attendee of a training session.
  * email **required** `string`: The attendee's email address
  * givenName **required** `string`: The attendee's first name
  * inSessionTimes **required** `array`: List of the parts of the training session the attendee joined
    * items [Attendance](#attendance)
  * surname **required** `string`: The attendee's surname
  * timeInSession **required** `integer`: The total time in minutes spent at all the parts of the training session the attendee joined

### DateTimeRange
* DateTimeRange `object`: A pair of DateTime values, the first of which serves as a start time and the second as an end time of an interval
  * endDate **required** `string`: The ending time of an interval
  * startDate **required** `string`: The starting time of an interval

### HostUrl
* HostUrl `object`: Host URL that can be used to start a training
  * hostURL **required** `string`: The host URL that can be used to start a training

### NotifiedParties
* NotifiedParties `object`: Number of parties notified of a change to a training session times
  * notifiedRegistrants **required** `integer`: Number of registrants notified of changes to a training
  * notifiedTrainers **required** `integer`: Number of trainers notified of changes to a training

### Organizer
* Organizer `object`: Describes a training organizer.
  * email **required** `string`: The email address of the training (co-)organizer
  * givenName **required** `string`: The (co-)organizer's first name
  * organizerKey **required** `string`: The key of the training (co-)organizer
  * surname **required** `string`: The (co-)organizer's surname

### Recording
* Recording `object`: Describes an online recording of a training
  * description `string`: The description of the recording
  * downloadUrl `string`: The url used to download the recording to the local device
  * endDate **required** `string`: The time the recording was ended
  * name **required** `string`: The title of the recording
  * recordingId **required** `integer`: The unique id of the recording
  * registrationUrl `string`: The url where attendees can register to view the recording
  * startDate **required** `string`: The time the recording was started

### RecordingsListForTraining
* RecordingsListForTraining `object`: Contains a list of recordings for the training.
  * recordingList **required** `array`: The list of online recordings for the training
    * items [Recording](#recording)
  * trainingKey **required** `integer`: The training's unique key

### Registrant
* Registrant `object`: Describes a training registrant.
  * confirmationUrl **required** `string`: The URL where the confirmation for the registration can be found
  * email **required** `string`: The registrant's email address
  * givenName **required** `string`: The registrant's first name
  * joinUrl **required** `string`: The URL the registrant will use to join the training
  * registrantKey **required** `string`: The registrant's key
  * registrationDate **required** `string`: The date and time the registration took place
  * status **required** `string` (values: WAITING, APPROVED, DENIED): The registrant's status
  * surname **required** `string`: The registrant's surname

### RegistrantCreated
* RegistrantCreated `object`: Describes a newly created training registrant
  * confirmationUrl **required** `string`: The URL where confirmation for the registration can be found
  * joinUrl **required** `string`: The URL the registrant will use to join the training
  * registrantKey **required** `string`: The registrant's key

### RegistrantReqCreate
* RegistrantReqCreate `object`: Details required to make a new training registration.
  * email **required** `string`: The registrant's email address
  * givenName **required** `string`: The registrant's first name
  * surname **required** `string`: The registrant's surname

### RegistrationSettings
* RegistrationSettings `object`: Training settings, namely availability of web registration and confirmation emails to the training registrants
  * disableConfirmationEmail **required** `boolean`: Indicates whether confirmation emails to the training registrants are disabled
  * disableWebRegistration **required** `boolean`: Indicates whether the web registration for the training is disabled

### Session
* Session `object`: Describes a completed training session.
  * attendanceCount **required** `integer`: The number of attendees at the training session
  * duration **required** `integer`: The duration of the training session in minutes
  * organizers **required** `array`: The organizers of the training session.
    * items [Organizer](#organizer)
  * sessionEndTime **required** `string`: The time the training session finished
  * sessionKey **required** `string`: The key of the training session
  * sessionStartTime **required** `string`: The time the training session started
  * trainingName **required** `string`: The subject of the training

### Training
* Training `object`: Describes a scheduled training.
  * description **required** `string`: The training's description
  * name **required** `string`: The training's subject
  * organizers **required** `array`: The list of (co-)organizers for the training
    * items [Organizer](#organizer)
  * registrationSettings **required** [RegistrationSettings](#registrationsettings)
  * timeZone **required** `string`: The time zone where the training takes place
  * times **required** `array`: Array with startDate and endDate for the training sessions
    * items [DateTimeRange](#datetimerange)
  * trainingId **required** `string`: The 9-digit training's ID
  * trainingKey **required** `string`: The training's unique key

### TrainingNameDescription
* TrainingNameDescription `object`: Details required to update a training's name and description.
  * description `string`: The training's description
  * name **required** `string`: The training's name

### TrainingOrganizers
* TrainingOrganizers `object`: Details required to update the list of organizers for a training.
  * notifyOrganizers `boolean`: Specifies whether an email should be sent notifying of the change to the training's organizers.
  * organizers **required** `array`: List of keys of the organizers for the training.
    * items `integer`

### TrainingReqCreate
* TrainingReqCreate `object`: Describes the details used to create a new training.
  * description `string`: Description of the training
  * name **required** `string`: Name of the training
  * organizers `array`: List of keys of the co-organizers for this training
    * items `integer`
  * registrationSettings [RegistrationSettings](#registrationsettings)
  * timeZone **required** `string`: Time zone of the training. (Must be a valid time zone ID, see https://goto-developer.logmein.com/time-zones)
  * times **required** `array`: Array with startDate and endDate for the training sessions
    * items [DateTimeRange](#datetimerange)

### TrainingTimes
* TrainingTimes `object`: Details required to update the session times of a training.
  * notifyRegistrants `boolean`: Notify registrants via email of change to training. Default is true
  * notifyTrainers `boolean`: Notify trainers via email of change to training. Default is true
  * timeZone **required** `string`: Time zone of the training. Must be a valid time zone ID, see https://goto-developer.logmein.com/time-zones
  * times **required** `array`: Start and end times for the training sessions
    * items [DateTimeRange](#datetimerange)


