# @datafire/citrix_gototraining
The GoToTraining API enables developers to use the stable and robust GoToTraining functionality as the basis for online trainings in a proprietary learning management system. The GoToTraining APIs provide the ability to access the scheduling, registration, management, and reporting functions of GoToTraining from external applications. With the ability to tightly integrate GoToTraining into your learning infrastructure, you can offer your learners a seamless user experience and provide them with a market leading virtual classroom environment.

## Operation: getAllOrganisers
DEPRECATED: Please use the Admin API call 'Get all users' instead. For details see https://developer.citrixonline.com/get-all-users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "accountKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the multi-user account"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "accountKey"
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
## Operation: getAllTrainings
This call retrieves information on all scheduled trainings for a given organizer. The trainings are returned in the order in which they were created. Completed trainings are not included; ongoing trainings with past sessions are included along with the past sessions. If the organizer does not have any scheduled trainings, the response will be empty.

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
      "description": "The key of the training organizer"
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
    "$ref": "#/definitions/Training"
  },
  "type": "array"
}
```
## Operation: scheduleTraining
Schedules a training of one or more sessions. The call requires a training's name, at least one start and end time, and optionally may include additional sessions, a description, additional organizers (presenters), and registration settings. You can only add organizers to a training if you have a multi-user account. Once a training has been created with this method, you can accept registrations to the training. Registration is for the entire training - all sessions. (The GoToTraining admin site enables you to create trainings that allow participants to register for individual sessions as well as automatically create weekly or monthly events.) Registration settings controls whether you allow web registration for this training, and whether a confirmation email is sent to the registrant following registration. Disabling the confirmation email is an API-only setting. If the user registers through the GoToTraining website, a confirmation email is sent. If the user is manually approved by the training administrator through the GoToTraining web site, the confirmation email is sent. It is recommended that you disable web registration if you disable confirmation emails. The response contains a trainingKey for the scheduled training.

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
      "description": "The key of the training organizer"
    },
    "body": {
      "$ref": "#/definitions/TrainingReqCreate"
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
{
  "type": "string"
}
```
## Operation: cancelTraining
Deletes a scheduled or completed training. For scheduled trainings, it deletes all scheduled sessions of the training. For completed trainings, the sessions remain in the database. No email is sent to organizers or registrants, but when participants attempt to start or join the training, they are directed to a page that states: Training Not Found: The training you are trying to join is no longer available.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTraining
Uses the organizer key and training key to retrieve information on a scheduled training.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Training"
}
```
## Operation: getManageTrainingURL
A request for a direct URL to the admin portal for a specific training. The request identifies the organizer and the training; the response provides a link the organizer can use to manage or launch the training in the admin portal. The training organizer will be required to log in. You can schedule and manage the training (e.g., add tests, polls and training materials) from the URL provided in the response.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: updateTrainingNameDescription
Request to update a scheduled training name and description.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "body": {
      "$ref": "#/definitions/TrainingNameDescription"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganisersForTraining
Retrieves organizer details for a specific training. This is only applicable to multi-user accounts with sharing enabled (co-organizers).

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey"
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
## Operation: updateOrganisersForTraining
Replaces the co-organizers for a specific training. The scheduling organizer cannot be unassigned. Organizers will be notified via email if the notifyOrganizers parameter is set to true. Replaced organizers are not notified. This method is only applicable to multi-user accounts with sharing enabled (co-organizers).

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "body": {
      "$ref": "#/definitions/TrainingOrganizers"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRegistrants
Retrieves details on all registrants for a specific training. Registrants can be:<br>WAITING - registrant registered and is awaiting approval (where organizer has required approval)<br>APPROVED - registrant registered and is approved<br>DENIED - registrant registered and was not approved.<br><br>IMPORTANT: The registrant data caches are typically updated immediately and the data will be returned in the response. However, the update can take as long as two hours.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Registrant"
  },
  "type": "array"
}
```
## Operation: registerForTraining
Registers one person, identified by a unique email address, for a training. Approval is automatic unless payment or approval is required. The response contains the Confirmation page URL and Join URL for the registrant. NOTE: If some registrants do not receive a confirmation email, the emails could be getting blocked by their email server due to spam filtering or a grey-listing setting.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "body": {
      "$ref": "#/definitions/RegistrantReqCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistrantCreated"
}
```
## Operation: cancelRegistration
This call cancels a registration in a scheduled training for a specific registrant. If the registrant has paid for the training, a cancellation cannot be completed with this method; it must be completed on the external admin site. No notification is sent to the registrant or the organizer by default. The registrant can re-register if needed.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "registrantKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the registrant"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey",
    "registrantKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRegistrant
Retrieves details for specific registrant in a specific training. Registrants can be:<br>WAITING - registrant registered and is awaiting approval (where organizer has required approval)<br>APPROVED - registrant registered and is approved<br>DENIED - registrant registered and was not approved.<br><br>IMPORTANT: The registrant data caches are typically updated immediately and the data will be returned in the response. However, the update can take as long as two hours.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "registrantKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the registrant"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey",
    "registrantKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Registrant"
}
```
## Operation: updateRegistrationSettingsForTraining
An API request to automatically enable or disable web registrations and confirmation emails to registrants.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "body": {
      "$ref": "#/definitions/RegistrationSettings"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getStartUrl
Returns a URL that can be used to start a training. When this URL is opened in a web browser, the GoToTraining client will be downloaded and launched and the training will start after the organizer logs in with its credentials.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: updateTrainingTimes
 A request to update a scheduled training's start and end times. If the request contains 'notifyTrainers = true' and 'notifyRegistrants = true', both organizers and registrants are notified. The response provides the number of notified trainers and registrants.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "body": {
      "$ref": "#/definitions/TrainingTimes"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotifiedParties"
}
```
## Operation: getSessionDetailsForDateRange
This call returns all session details over a given date range for a given organizer. A session is a completed training event.

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
      "description": "The key of the training organizer"
    },
    "body": {
      "$ref": "#/definitions/DateTimeRange"
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
{
  "items": {
    "$ref": "#/definitions/Session"
  },
  "type": "array"
}
```
## Operation: getAttendanceDetails
This call retrieves a list of registrants from a specific completed training session. The response includes the registrants' email addresses, and if they attended, it includes the duration of each period of their attendance in minutes, and the times at which they joined and left. If a registrant does not attend, they appear at the bottom of the listing with timeInSession = 0.

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
      "description": "The key of the training organizer"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training session"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "sessionKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Attendee"
  },
  "type": "array"
}
```
## Operation: getSessionDetailsForTraining
This call returns session details for a given training. A session is a completed training event. Each training may contain one or more sessions.

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
      "description": "The key of the training organizer"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Session"
  },
  "type": "array"
}
```
## Operation: getRecordingsForTraining
This call retrieves information on all online recordings for a given training. If there are none, it returns an empty list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecordingsListForTraining"
}
```
## Operation: getRecordingDownloadById
This call provides the download for the given recording by returning a 302 redirect to the original file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    },
    "recordingId": {
      "type": "integer",
      "format": "int64",
      "description": "the unique id of the recording"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "trainingKey",
    "recordingId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: startTraining
Returns a URL that can be used to start a training. When this URL is opened in a web browser, the GoToTraining client will be downloaded and launched and the training will start. A login of the organizer is not required.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Access token"
    },
    "trainingKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the training"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "trainingKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostUrl"
}
```
