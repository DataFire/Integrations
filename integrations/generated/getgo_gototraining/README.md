# @datafire/getgo_gototraining

Client library for GoToTraining

## Installation and Usage
```bash
npm install --save datafire @datafire/getgo_gototraining
```

```js
let datafire = require('datafire');
let getgo_gototraining = require('@datafire/getgo_gototraining').actions;
let context = new datafire.Context();

getgo_gototraining.getAllOrganisers({}, context).then(data => {
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

#### Parameters
* Authorization (string) **required** - Access token
* accountKey (integer) **required** - The key of the multi-user account

### getAllTrainings
This call retrieves information on all scheduled trainings for a given organizer. The trainings are returned in the order in which they were created. Completed trainings are not included; ongoing trainings with past sessions are included along with the past sessions. If the organizer does not have any scheduled trainings, the response will be empty.


```js
getgo_gototraining.getAllTrainings({
  "Authorization": "",
  "organizerKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer

### scheduleTraining
Schedules a training of one or more sessions. The call requires a training's name, at least one start and end time, and optionally may include additional sessions, a description, additional organizers (presenters), and registration settings. You can only add organizers to a training if you have a multi-user account. Once a training has been created with this method, you can accept registrations to the training. Registration is for the entire training - all sessions. (The GoToTraining admin site enables you to create trainings that allow participants to register for individual sessions as well as automatically create weekly or monthly events.) Registration settings controls whether you allow web registration for this training, and whether a confirmation email is sent to the registrant following registration. Disabling the confirmation email is an API-only setting. If the user registers through the GoToTraining website, a confirmation email is sent. If the user is manually approved by the training administrator through the GoToTraining web site, the confirmation email is sent. It is recommended that you disable web registration if you disable confirmation emails. The response contains a trainingKey for the scheduled training.


```js
getgo_gototraining.scheduleTraining({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* body (undefined) **required** - Describes the details used to create a new training.

### cancelTraining
Deletes a scheduled or completed training. For scheduled trainings, it deletes all scheduled sessions of the training. For completed trainings, the sessions remain in the database. No email is sent to organizers or registrants, but when participants attempt to start or join the training, they are directed to a page that states: Training Not Found: The training you are trying to join is no longer available.


```js
getgo_gototraining.cancelTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training

### getTraining
Uses the organizer key and training key to retrieve information on a scheduled training.


```js
getgo_gototraining.getTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training

### getManageTrainingURL
A request for a direct URL to the admin portal for a specific training. The request identifies the organizer and the training; the response provides a link the organizer can use to manage or launch the training in the admin portal. The training organizer will be required to log in. You can schedule and manage the training (e.g., add tests, polls and training materials) from the URL provided in the response.


```js
getgo_gototraining.getManageTrainingURL({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training
* body (undefined) **required** - Details required to update a training's name and description.

### getOrganisersForTraining
Retrieves organizer details for a specific training. This is only applicable to multi-user accounts with sharing enabled (co-organizers).


```js
getgo_gototraining.getOrganisersForTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training
* body (undefined) **required** - Details required to update the list of organizers for a training.

### getRegistrants
Retrieves details on all registrants for a specific training. Registrants can be:<br>WAITING - registrant registered and is awaiting approval (where organizer has required approval)<br>APPROVED - registrant registered and is approved<br>DENIED - registrant registered and was not approved.<br><br>IMPORTANT: The registrant data caches are typically updated immediately and the data will be returned in the response. However, the update can take as long as two hours.


```js
getgo_gototraining.getRegistrants({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training
* body (undefined) **required** - Details required to make a new training registration.

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training
* registrantKey (integer) **required** - The key of the registrant

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training
* registrantKey (integer) **required** - The key of the registrant

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training
* body (undefined) **required** - Training settings, namely availability of web registration and confirmation emails to the training registrants

### getStartUrl
Returns a URL that can be used to start a training. When this URL is opened in a web browser, the GoToTraining client will be downloaded and launched and the training will start after the organizer logs in with its credentials.


```js
getgo_gototraining.getStartUrl({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training

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

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training
* body (undefined) **required** - Details required to update the session times of a training.

### getSessionDetailsForDateRange
This call returns all session details over a given date range for a given organizer. A session is a completed training event.


```js
getgo_gototraining.getSessionDetailsForDateRange({
  "Authorization": "",
  "organizerKey": 0,
  "body": null
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* body (undefined) **required** - A pair of DateTime values, the first of which serves as a start time and the second as an end time of an interval

### getAttendanceDetails
This call retrieves a list of registrants from a specific completed training session. The response includes the registrants' email addresses, and if they attended, it includes the duration of each period of their attendance in minutes, and the times at which they joined and left. If a registrant does not attend, they appear at the bottom of the listing with timeInSession = 0.


```js
getgo_gototraining.getAttendanceDetails({
  "Authorization": "",
  "organizerKey": 0,
  "sessionKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* sessionKey (integer) **required** - The key of the training session

### getSessionDetailsForTraining
This call returns session details for a given training. A session is a completed training event. Each training may contain one or more sessions.


```js
getgo_gototraining.getSessionDetailsForTraining({
  "Authorization": "",
  "organizerKey": 0,
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* organizerKey (integer) **required** - The key of the training organizer
* trainingKey (integer) **required** - The key of the training

### getRecordingsForTraining
This call retrieves information on all online recordings for a given training. If there are none, it returns an empty list.


```js
getgo_gototraining.getRecordingsForTraining({
  "Authorization": "",
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* trainingKey (integer) **required** - The key of the training

### getRecordingDownloadById
This call provides the download for the given recording by returning a 302 redirect to the original file.


```js
getgo_gototraining.getRecordingDownloadById({
  "Authorization": "",
  "trainingKey": 0,
  "recordingId": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* trainingKey (integer) **required** - The key of the training
* recordingId (integer) **required** - the unique id of the recording

### startTraining
Returns a URL that can be used to start a training. When this URL is opened in a web browser, the GoToTraining client will be downloaded and launched and the training will start. A login of the organizer is not required.


```js
getgo_gototraining.startTraining({
  "Authorization": "",
  "trainingKey": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Access token
* trainingKey (integer) **required** - The key of the training

