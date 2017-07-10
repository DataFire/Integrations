# @datafire/citrix_gotowebinar
The GoToWebinar API provides seamless integration of webinar registrant and attendee data into your existing infrastructure or third-party applications. The ability to register participants, as well as pull lists of registrants and attendees for a webinar, allows organizers to manage the flow of information between their primary applications without manual intervention.

## Operation: getAllAccountWebinars
Retrieves the list of webinars for an account within a given date range. __*Page*__ and __*size*__ parameters are optional. Default __*page*__ is 0 and default __*size*__ is 20. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
      "description": "The key of the account"
    },
    "fromTime": {
      "type": "string",
      "format": "date-time",
      "description": "A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z"
    },
    "toTime": {
      "type": "string",
      "format": "date-time",
      "description": "A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z"
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "The page number to be displayed. The first page is 0."
    },
    "size": {
      "type": "integer",
      "format": "int64",
      "description": "The size of the page."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "accountKey",
    "fromTime",
    "toTime"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountWebinarsResponse"
}
```
## Operation: getHistoricalWebinars
Returns details for completed webinars for the specified organizer and completed webinars of other organizers where the specified organizer is a co-organizer.

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
    "fromTime": {
      "type": "string",
      "format": "date-time",
      "description": "A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z"
    },
    "toTime": {
      "type": "string",
      "format": "date-time",
      "description": "A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "fromTime",
    "toTime"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/HistoricalWebinar"
  },
  "type": "array"
}
```
## Operation: getOrganizerSessions
Retrieve all completed sessions of all the webinars of a given organizer.

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
    "fromTime": {
      "type": "string",
      "format": "date-time",
      "description": "A required start of datetime range in ISO8601 UTC format, e.g. 2015-07-13T10:00:00Z"
    },
    "toTime": {
      "type": "string",
      "format": "date-time",
      "description": "A required end of datetime range in ISO8601 UTC format, e.g. 2015-07-13T22:00:00Z"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "fromTime",
    "toTime"
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
## Operation: getUpcomingWebinars
Returns webinars scheduled for the future for the specified organizer and webinars of other organizers where the specified organizer is a co-organizer.

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
    "$ref": "#/definitions/UpcomingWebinar"
  },
  "type": "array"
}
```
## Operation: getAllWebinars
Returns webinars scheduled for the future for a specified organizer.

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
    "$ref": "#/definitions/Webinar"
  },
  "type": "array"
}
```
## Operation: createWebinar
Creates a single session webinar, a sequence of webinars or a series of webinars depending on the type field in the body: "single_session" creates a single webinar session, "sequence" creates a webinar with multiple meeting times where attendees are expected to be the same for all sessions, and "series" creates a webinar with multiple meetings times where attendees choose only one to attend. The default, if no type is declared, is single_session. A sequence webinar requires a "recurrenceStart" object consisting of a "startTime" and "endTime" key for the first webinar of the sequence, a "recurrencePattern" of "daily", "weekly", "monthly", and a "recurrenceEnd" which is the last date of the sequence (for example, 2016-12-01). A series webinar requires a "times" array with a discrete "startTime" and "endTime" for each webinar in the series. The call requires a webinar subject and description. The "isPasswordProtected" sets whether the webinar requires a password for attendees to join. If set to True, the organizer must go to Registration Settings at My Webinars (https://global.gotowebinar.com/webinars.tmpl) and add the password to the webinar, and send the password to the registrants. The response provides a numeric webinarKey in string format for the new webinar. Once a webinar has been created with this method, you can accept registrations.

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
      "$ref": "#/definitions/WebinarReqCreate"
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
  "$ref": "#/definitions/CreatedWebinar"
}
```
## Operation: cancelWebinar
Cancels a specific webinar. If the webinar is a series or sequence, this call deletes all scheduled sessions. To send cancellation emails to registrants set sendCancellationEmails=true in the request. When the cancellation emails are sent, the default generated message is used in the cancellation email body.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sendCancellationEmails": {
      "type": "boolean",
      "description": "Indicates whether cancellation notice emails should be sent. The default value is false"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWebinar
Retrieve information on a specific webinar. If the type of the webinar is 'sequence', a sequence of future times will be provided. Webinars of type 'series' are treated the same as normal webinars - each session in the webinar series has a different webinarKey. If an organizer cancels a webinar, then a request to get that webinar would return a '404 Not Found' error.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebinarByKey"
}
```
## Operation: updateWebinar
Updates a webinar. The call requires at least one of the parameters in the request body. The request completely replaces the existing session, series, or sequence and so must include the full definition of each as for the Create call. Set notifyParticipants=true to send update emails to registrants.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "notifyParticipants": {
      "type": "boolean",
      "description": "Defines whether to send notifications to participants"
    },
    "body": {
      "$ref": "#/definitions/WebinarReqUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAttendeesForAllWebinarSessions
Returns all attendees for all sessions of the specified webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
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
## Operation: getAudioInformation
Retrieves the audio/conferencing information for a specific webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Audio"
}
```
## Operation: updateAudioInformation
Updates the audio/conferencing settings for a specific webinar

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "notifyParticipants": {
      "type": "boolean",
      "description": "Defines whether to send notifications to participants"
    },
    "body": {
      "$ref": "#/definitions/AudioUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCoorganizers
Returns the co-organizers for the specified webinar. The original organizer who created the webinar is filtered out of the list. If the webinar has no co-organizers, an empty array is returned. Co-organizers that do not have a GoToWebinar account are returned as external co-organizers. For those organizers no surname is returned.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Coorganizer"
  },
  "type": "array"
}
```
## Operation: createCoorganizers
Creates co-organizers for the specified webinar. For co-organizers that have a GoToWebinar account you have to set the parameter 'external' to 'false'. In this case you have to pass the parameter 'organizerKey' only. For co-organizers that have no GoToWebinar account you have to set the parameter 'external' to 'true'. In this case you have to pass the parameters 'givenName' and 'email'. Since there is no parameter for 'surname' you should pass first and last name to the parameter 'givenName'.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "body": {
      "items": {
        "$ref": "#/definitions/CoorganizerReqCreate"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Coorganizer"
  },
  "type": "array"
}
```
## Operation: deleteCoorganizer
Deletes an internal co-organizer specified by the coorganizerKey (memberKey).

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "coorganizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the internal or external co-organizer (memberKey)"
    },
    "external": {
      "type": "boolean",
      "description": "By default only internal co-organizers (with a GoToWebinar account) can be deleted. If you want to use this call for external co-organizers you have to set this parameter to 'true'."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "coorganizerKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: resendCoorganizerInvitation
Resends an invitation email to the specified co-organizer

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "coorganizerKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the internal or external co-organizer (memberKey)"
    },
    "external": {
      "type": "boolean",
      "description": "By default only internal co-organizers (with a GoToWebinar account) will retrieve the resent invitation email. If you want to use this call for external co-organizers you have to set this parameter to 'true'."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "coorganizerKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWebinarMeetingTimes
Retrieves the meeting times for a webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/DateTimeRange"
  },
  "type": "array"
}
```
## Operation: getPanelists
Retrieves all the panelists for a specific webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Panelist"
  },
  "type": "array"
}
```
## Operation: createPanelists
Create panelists for a specified webinar

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "body": {
      "items": {
        "$ref": "#/definitions/PanelistReqCreate"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CreatedPanelist"
  },
  "type": "array"
}
```
## Operation: deleteWebinarPanelist
Removes a webinar panelist.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "panelistKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar panelist"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "panelistKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: resendPanelistInvitation
Resend the panelist invitation email.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "panelistKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar panelist"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "panelistKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getPerformanceForAllWebinarSessions
Gets performance details for all sessions of a specific webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{
  "additionalProperties": {
    "$ref": "#/definitions/SessionPerformance"
  },
  "description": "Describes performance details for webinars",
  "type": "object"
}
```
## Operation: getAllRegistrantsForWebinar
Retrieve registration details for all registrants of a specific webinar. Registrant details will not include all fields captured when creating the registrant. To see all data, use the API call 'Get Registrant'. Registrants can have one of the following states; <br>WAITING - registrant registered and is awaiting approval (where organizer has required approval), <br>APPROVED - registrant registered and is approved, and <br>DENIED - registrant registered and was denied.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
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
## Operation: createRegistrant
Register an attendee for a scheduled webinar. The response contains the registrantKey and join URL for the registrant. An email will be sent to the registrant unless the organizer turns off the confirmation email setting from the GoToWebinar website. Please note that you must provide all required fields including custom fields defined during the webinar creation. Use the API call 'Get registration fields' to get a list of all fields, if they are required, and their possible values. At this time there are two versions of the 'Create Registrant' call. The first version only accepts firstName, lastName, and email and ignores all other fields. If you have custom fields or want to capture additional information this version won't work for you. The second version allows you to pass all required and optional fields, including custom fields defined when creating the webinar. To use the second version you must pass the header value 'Accept: application/vnd.citrix.g2wapi-v1.1+json' instead of 'Accept: application/json'. Leaving this header out results in the first version of the API call.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "Accept": {
      "type": "string",
      "description": "Set to 'application/vnd.citrix.g2wapi-v1.1+json' to make a registration using fields (custom or default) additional to the basic ones."
    },
    "resendConfirmation": {
      "type": "boolean",
      "description": "Indicates whether the confirmation email should be resent when a registrant is re-registered. The default value is false."
    },
    "body": {
      "$ref": "#/definitions/RegistrantFields"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
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
## Operation: getRegistrationFields
Retrieve required, optional registration, and custom questions for a specified webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistrationFields"
}
```
## Operation: deleteRegistrant
Removes a webinar registrant from current registrations for the specified webinar. The webinar must be a scheduled, future webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
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
    "webinarKey",
    "registrantKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRegistrant
Retrieve registration details for a specific registrant.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
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
    "webinarKey",
    "registrantKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistrantDetailed"
}
```
## Operation: getAllSessions
Retrieves details for all past sessions of a specific webinar.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey"
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
## Operation: getWebinarSession
Retrieves attendance details for a specific webinar session that has ended. If attendees attended the session ('registrantsAttended'), specific attendance details, such as attendenceTime for a registrant, will also be retrieved. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
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
## Operation: getAttendees
Retrieve details for all attendees of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
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
## Operation: getAttendee
Retrieve registration details for a particular attendee of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
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
    "webinarKey",
    "sessionKey",
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
## Operation: getAttendeePollAnswers
Get poll answers from a particular attendee of a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
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
    "webinarKey",
    "sessionKey",
    "registrantKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PollAnswer"
  },
  "type": "array"
}
```
## Operation: getAttendeeQuestions
Get questions asked by an attendee during a webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
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
    "webinarKey",
    "sessionKey",
    "registrantKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AttendeeQuestion"
  },
  "type": "array"
}
```
## Operation: getAttendeeSurveyAnswers
Retrieve survey answers from a particular attendee during a webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
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
    "webinarKey",
    "sessionKey",
    "registrantKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PollAnswer"
  },
  "type": "array"
}
```
## Operation: getPerformance
Get performance details for a session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "sessionKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SessionPerformance"
}
```
## Operation: getPolls
Retrieve all collated attendee questions and answers for polls from a specific webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "sessionKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Poll"
  },
  "type": "array"
}
```
## Operation: getQuestions
Retrieve questions and answers for a past webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "sessionKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AttendeeQuestion"
  },
  "type": "array"
}
```
## Operation: getSurveys
Retrieve surveys for a past webinar session. For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.

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
    "webinarKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar"
    },
    "sessionKey": {
      "type": "integer",
      "format": "int64",
      "description": "The key of the webinar session"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "organizerKey",
    "webinarKey",
    "sessionKey"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Poll"
  },
  "type": "array"
}
```
