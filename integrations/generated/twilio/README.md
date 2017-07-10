# @datafire/twilio
Enabling phones, VoIP, and messaging to be embedded into web, desktop, and mobile software.


## Operation: Accounts.AccountSid.Applications.ApplicationSid.json.delete
Delete this application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ApplicationSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ApplicationSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Applications.ApplicationSid.json.get
Get application instance resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ApplicationSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ApplicationSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/application"
}
```
## Operation: Accounts.AccountSid.Applications.ApplicationSid.json.post
Tries to update the application's properties, and returns the updated
resource representation if successful. The returned response is identical
to that returned above when making a GET request.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ApplicationSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ApplicationSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/application"
}
```
## Operation: Accounts.AccountSid.Applications.json.get
Returns a list of Application resource representations, each representing
an application within your account. The list includes paging information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/applications"
}
```
## Operation: Accounts.AccountSid.Applications.json.post
Creates a new application within your account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.AuthorizedConnectApps.ConnectAppSid.json.get
Get the properties of the authorized application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConnectAppSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConnectAppSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/authApp"
}
```
## Operation: Accounts.AccountSid.AuthorizedConnectApps.json.get
Returns a list of Connect App resource representations, each representing a
Connect App you've authorized to access your account. The list includes
paging information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/authApps"
}
```
## Operation: Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Local.json.get
Returns a list of local AvailablePhoneNumber resource representations
that match the specified filters, each representing a phone number tha
is currently available for provisioning within your account.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IsoCountryCode": {
      "type": "string",
      "description": "ISO 3166-1 alpha-2.",
      "maxLength": 2,
      "minLength": 2
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IsoCountryCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/availablePhoneNumbers"
}
```
## Operation: Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Mobile.json.get
Returns a list of mobile AvailablePhoneNumber resource representations that match the specified filters, each representing a phone number that is currently available for provisioning within your account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IsoCountryCode": {
      "type": "string",
      "description": "ISO 3166-1 alpha-2.",
      "maxLength": 2,
      "minLength": 2
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IsoCountryCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/phoneMobileNumbers"
}
```
## Operation: Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.TollFree.json.get
Returns a list of toll-free AvailablePhoneNumber elements that match the
specified filters, each representing a phone number that is currently
available for provisioning within your account. To provision an available
phone number, POST the number to the IncomingPhoneNumbers resource.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IsoCountryCode": {
      "type": "string",
      "description": "ISO 3166-1 alpha-2.",
      "maxLength": 2,
      "minLength": 2
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IsoCountryCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/phoneTollFreeNumbers"
}
```
## Operation: Accounts.AccountSid.AvailablePhoneNumbers.json.get
Returns a list of all AvailablePhoneNumber subresources for your account by ISO Country. For full information about our phone number support, see our Phone Number CSV (http://www.twilio.com/resources/rates/international-phone-number-rates.csv).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/availablePhoneNumbers"
}
```
## Operation: Accounts.AccountSid.Calls.CallSid.Notifications.json.get
Returns a list of notifications generated for an account. The list includes
paging information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: Accounts.AccountSid.Calls.CallSid.Recordings.json.get
Returns a list of Recording resource representations, each representing a
recording generated during the course of a phone call.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/recordings"
}
```
## Operation: Accounts.AccountSid.Calls.CallSid.json.get
Returns the single Call resource identified by {CallSid}.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/callInstance"
}
```
## Operation: Accounts.AccountSid.Calls.CallSid.json.post
Modify a phone call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/callInstance"
}
```
## Operation: Accounts.AccountSid.Calls.json.get
Returns a list of phone calls made to and from the account identified by {AccountSid}.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/calls"
}
```
## Operation: Accounts.AccountSid.Calls.json.post
To make a call, make an HTTP POST request. Initiate a new phone call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.delete
Kick this participant from the conference.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConferenceSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConferenceSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.get
Returns a representation of this participant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConferenceSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConferenceSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/participant"
}
```
## Operation: Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.post
Updates the status of a participant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConferenceSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConferenceSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/participant"
}
```
## Operation: Accounts.AccountSid.Conferences.ConferenceSid.Participants.json.get
Returns the list of participants in the conference identified by
{ConferenceSid}.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConferenceSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConferenceSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/participants"
}
```
## Operation: Accounts.AccountSid.Conferences.ConferenceSid.json.get
Returns a representation of the conference identified by {ConferenceSid}.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConferenceSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConferenceSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/conference"
}
```
## Operation: Accounts.AccountSid.Conferences.json.get
Returns a list of conferences within an account. The list includes paging
information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/conferences"
}
```
## Operation: Accounts.AccountSid.ConnectApps.ConnectAppSid.json.get
Get the properties of a Connect App.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConnectAppSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConnectAppSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/connectApp"
}
```
## Operation: Accounts.AccountSid.ConnectApps.ConnectAppSid.json.post
Tries to update the Connect App's properties, and returns the updated
resource representation if successful. The returned response is identical
to that returned above when making a GET request.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ConnectAppSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ConnectAppSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/connectApp"
}
```
## Operation: Accounts.AccountSid.ConnectApps.json.get
Returns a list of Connect App resource representations, each representing
a Connect App in your account. The list includes paging information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/connectApps"
}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.Local.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a local (not toll-free) phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out toll-free numbers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.Local.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a mobile phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out local and toll free numbers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a toll-free phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out all numbers that aren't toll-free.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.delete
Release this phone number from your account. Twilio will no longer answer
calls to this number, and you will stop being billed the monthly phone
number fee. The phone number will eventually be recycled and potentially
given to another customer, so use with care. If you make a mistake, contac
us. We may be able to give you the number back.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IncomingPhoneNumberSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IncomingPhoneNumberSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.get
Get info about incoming call's phone number.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IncomingPhoneNumberSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IncomingPhoneNumberSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/incomingCall"
}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.post
Tries to update the incoming phone number's properties, and returns the
updated resource representation if successful. The returned response is
identical to that returned above when making a GET request.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IncomingPhoneNumberSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IncomingPhoneNumberSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/incomingCall"
}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.put
Tries to update the incoming phone number's properties, and returns the
updated resource representation if successful. The returned response is
identical to that returned above when making a GET request.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IncomingPhoneNumberSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IncomingPhoneNumberSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/incomingCall"
}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.json.get
Returns a list of IncomingPhoneNumber resource representations, each
representing a phone number given to your account. The list includes paging
information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/incomingCalls"
}
```
## Operation: Accounts.AccountSid.IncomingPhoneNumbers.json.post
Purchases a new phone number for your account. If a phone number is found
for your request, Twilio will add it to your account and bill you for the
first month's cost of the phone number.
To find an available phone number to POST, use the subresources of the
AvailablePhoneNumbers list resource.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Messages.MessageSid.Media.MediaSid.json.get
Without an extension, the media is returned using the mime-type provided when the media was generated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "MessageSid": {
      "type": "string"
    },
    "MediaSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "MessageSid",
    "MediaSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/media"
}
```
## Operation: Accounts.AccountSid.Messages.MessageSid.Media.json.get
Returns a list of media associated with your message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "MessageSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "MessageSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mediaList"
}
```
## Operation: Accounts.AccountSid.Messages.MessageSid.json.get
Returns a single message specified by the provided {MessageSid}.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "MessageSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "MessageSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/message"
}
```
## Operation: Accounts.AccountSid.Messages.json.get
Returns a list of messages associated with your account. The list includes paging information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/messages"
}
```
## Operation: Accounts.AccountSid.Messages.json.post
To send a new outgoing message, make an HTTP POST to your Messages list resource URI

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "To": {
      "type": "string",
      "description": "The destination phone number. Format with a '+' and country code e.g., +16175551212 (E.164 format).\n"
    },
    "From": {
      "type": "string",
      "description": "A Twilio phone number (in E.164 format) or alphanumeric sender ID enabled for the type of message you wish to send. Phone numbers or short codes purchased from Twilio work here. You cannot (for example) spoof messages from your own cell phone number.\n"
    },
    "MessagingServiceSid": {
      "type": "string",
      "description": "The 34 character unique id of the Messaging Service you want to associate with this Message. Set this parameter to use the Messaging Service Settings and Copilot Features you have configured. When only this parameter is set, Twilio will use your enabled Copilot Features to select the From phone number for delivery.\n"
    },
    "Body": {
      "type": "string",
      "description": "The text of the message you want to send, limited to 1600 characters.\n"
    },
    "MediaUrl": {
      "type": "string",
      "description": "The URL of the media you wish to send out with the message. gif , png and jpeg content is currently supported and will be formatted correctly on the recipient's device. Other types are also accepted by the API. The media size limit is 5MB. If you wish to send more than one image in the message body, please provide multiple MediaUrls values in the POST request. You may include up to 10 MediaUrls per message.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "To"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Notifications.NotificationSid.json.delete
Deletes the notification identified by {NotificationSid} from an account's log.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "NotificationSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "NotificationSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Notifications.NotificationSid.json.get
Get a notification entry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "NotificationSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "NotificationSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notification"
}
```
## Operation: Accounts.AccountSid.Notifications.json.get
Returns a list of notifications generated for an account. The list includes
paging information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/notifications"
}
```
## Operation: Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.delete
Deletes the caller ID from the account. Returns an HTTP 204 response if
successful, with no body.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "OutgoingCallerIdSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "OutgoingCallerIdSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.get
Get the set of an account's verified phone numbers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "OutgoingCallerIdSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "OutgoingCallerIdSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/outgoingCallerId"
}
```
## Operation: Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.post
Updates the caller id, and returns the updated resource if successful.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "OutgoingCallerIdSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "OutgoingCallerIdSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/outgoingCallerId"
}
```
## Operation: Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.put
Updates the caller id, and returns the updated resource if successful.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "OutgoingCallerIdSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "OutgoingCallerIdSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.OutgoingCallerIds.json.get
Returns a list of OutgoingCallerId resource representations, each representing
a Caller ID number valid for an account. The list includes paging information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/outCallerIds"
}
```
## Operation: Accounts.AccountSid.OutgoingCallerIds.json.post
Adds a new CallerID to your account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.Members.Front.json.get
Get a front member.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/member"
}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.Members.Front.json.post
Posting a URL and Method to a Queue instance will dequeue a member from a
queue and have the member's call begin executing the TwiML document at that URL
When dequeuing the 'Front' of the queue, the next call in the queue will be redirected.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/member"
}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.get
Get a specific member.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/member"
}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.post
Posting a URL and Method to a Queue instance will dequeue a member from a
queue and have the member's call begin executing the TwiML document at that URL
When redirecting a member of a queue addressed by CallSid, only the first request
will succeed and return a 200 response code. A second request will fail and
return an appropriate 400 response code.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    },
    "CallSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid",
    "CallSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/member"
}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.Members.json.get
Returns the list of members in the queue identified by {QueueSid}.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/members"
}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.json.delete
The DELETE method allows you to remove a Queue. Only empty queues are
deletable.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.json.get
Get resource's individual Queue instance.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/queue"
}
```
## Operation: Accounts.AccountSid.Queues.QueueSid.json.post
This POST request allows you to change the FriendlyName or MaxSize.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "QueueSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "QueueSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/queue"
}
```
## Operation: Accounts.AccountSid.Queues.json.get
Returns a list of queues within an account. The list includes paging
information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/queues"
}
```
## Operation: Accounts.AccountSid.Queues.json.post
Create a new Queue resource.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Recordings.RecordingSid.Transcriptions.json.get
Returns a set of Transcription resource representations that includes paging
information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "RecordingSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "RecordingSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/transcriptions"
}
```
## Operation: Accounts.AccountSid.Recordings.RecordingSid.json.delete
Deletes a recording  from your account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "RecordingSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "RecordingSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Recordings.RecordingSid.json.get
Returns one of several representations:
Without an extension, or with a ".wav", a binary WAV audio file is returned
with mime-type "audio/x-wav".
Appending ".mp3" to the URI returns a binary MP3 audio file with mime-type
type "audio/mpeg".
Appending ".xml" to the URI returns a XML representation.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "RecordingSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "RecordingSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Recordings.json.get
Returns a list of Recording resource representations, each representing a
recording generated during the course of a phone call.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/recordings"
}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.delete
Remove a Credential from a CredentialList.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    },
    "CredentialSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid",
    "CredentialSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.get
Get a specific Credential in a list. Though a password is stored for each username in your list, the password is not returned to protect your password. If you cannot remember your password, you will need to POST to this resource to update it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    },
    "CredentialSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid",
    "CredentialSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/credential"
}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.post
Change the password of a Credential record.

If the change is successful, Twilio will respond with the Credential record but will not include the password in the response.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    },
    "CredentialSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid",
    "CredentialSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/credential"
}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.get
Get the list of Credentials in a CredentialList. The passwords for the Credentials are intentionally not returned so as to protect them.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/credentials"
}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.post
Add a Credential to the CredentialList.

When creating a Credential, you will POST both a username and password, but only receive the username back in the response. The password is intentionally not returned so as to protect it.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.json.delete
Delete a CredentialList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.json.get
Get a credential list instance resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/credentialList"
}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.CLSid.json.post
Change the FriendlyName of the list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "CLSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/credentialList"
}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.json.get
Gets a list of Credential Lists for an account

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/credentialLists"
}
```
## Operation: Accounts.AccountSid.SIP.CredentialLists.json.post
Create a new Credential List.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.CLSid.json.delete
Remove a CredentialListMapping from a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    },
    "CLSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid",
    "CLSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.get
Get the user lists mapped to this domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/credentialListMappings"
}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.post
Map a CredentialList to the domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.delete
Remove a mapping from this domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    },
    "ALSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid",
    "ALSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.get
Return a specific IpAccessControlListMapping instance by Sid.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    },
    "ALSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid",
    "ALSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ipAccessControlListMapping"
}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.get
Return the IpAccessControlListMappings that are associated to this domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.post
Map an IpAccessControlList to this domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.json.delete
Delete a domain. If you have created subdomains of a domain, you will not be able to delete the domain until you first delete all subdomains of it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.json.get
Return a specific instance by Sid.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/domain"
}
```
## Operation: Accounts.AccountSid.SIP.Domains.SipDomainSid.json.post
Update the attributes of a domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "SipDomainSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "SipDomainSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/domain"
}
```
## Operation: Accounts.AccountSid.SIP.Domains.json.get
Returns a paged list of the domains for an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/domains"
}
```
## Operation: Accounts.AccountSid.SIP.Domains.json.post
Creates a new Domain and returns its instance resource. You must pick a unique domain name that ends in ".sip.twilio.com".
After creating a Domain, you must map it to an authentication method before the domain is ready to receive traffic.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.delete
Deletes an IP address entry from the list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    },
    "IpAddressSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid",
    "IpAddressSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.get
Return a single IP Address resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    },
    "IpAddressSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid",
    "IpAddressSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ipAddress"
}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.post
Change the description or IP address of a given IpAddress instance resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    },
    "IpAddressSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid",
    "IpAddressSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ipAddress"
}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.get
List the IP Addresses contained in this list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ipAddresses"
}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.post
Add an IP Address to the list with a description.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.delete
Delete an IpAccessControlList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.get
Return a specific IpAccessControlList resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ipAccessControlListMapping"
}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.post
Rename an IpAccessControlList.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "IpAccessControlListSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "IpAccessControlListSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ipAccessControlListMapping"
}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.json.get
Return a paged list of all IpAccessControlLists under this account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.SIP.IpAccessControlLists.json.post
Create a new IpAccessControlList resource.

When created, the list will contain no IP addresses. You will need to add IP addresses to the list for it to be active. To add IP addresses, you will need to POST to the IpAddresses List subresource.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ipAccessControlListMapping"
}
```
## Operation: Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.get
Get a single message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ShortCodeSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ShortCodeSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/shortCode"
}
```
## Operation: Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.post
Tries to update the shortcode's properties, and returns the updated
resource representation if successful.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "ShortCodeSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "ShortCodeSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/shortCode"
}
```
## Operation: Accounts.AccountSid.SMS.ShortCodes.json.get
Returns a list of ShortCode resource representations, each representing a
short code within your account. The list includes paging information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/shortCodes"
}
```
## Operation: Accounts.AccountSid.Transcriptions.TranscriptionSid.json.delete
Deletes a transcription from your account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "TranscriptionSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "TranscriptionSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Transcriptions.TranscriptionSid.json.get
Returns a single Transcription resource representation identified by the
given {TranscriptionSid}. By default Twilio will respond with the XML metadata for the Transcription. If you append ".txt" to the end of the Transcription resource's URI Twilio will just return you the transcription tex.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "TranscriptionSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "TranscriptionSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/transcription"
}
```
## Operation: Accounts.AccountSid.Transcriptions.json.get
Returns a set of Transcription resource representations that includes paging
information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/transcriptions"
}
```
## Operation: Accounts.AccountSid.Usage.Records.Subresource.json.get
Returns UsageRecords for all usage categories for a specified period.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "Subresource": {
      "type": "string",
      "description": "|Subresource|Description|\n|---|---|\n|Daily|Return multiple UsageRecords for each usage category, each representing usage over a daily time-interval.|\n|Monthly|Return multiple UsageRecords for each usage category, each representing usage over a monthly time-interval.|\n|Yearly|Return multple UsageRecords for each usage category, each representing usage over a yearly time-interval.|\n|AllTime|  Return a single UsageRecord for each usage category, each representing usage over the date-range specified. This is the same as the root /Usage/Records.|\n|Today|Return a single UsageRecord per usage category, for today's usage only.|\n||Yesterday|Return a single UsageRecord per usage category, for yesterday's usage only.|\n|ThisMonth|Return a single UsageRecord per usage category, for this month's usage only.|\n|LastMonth|Return a single UsageRecord per usage category, for last month's usage only.|\n",
      "enum": [
        "Daily",
        "Monthly",
        "Yearly",
        "AllTime",
        "Today",
        "Yesterday",
        "ThisMonth",
        "LastMonth"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "Subresource"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/usageRecords"
}
```
## Operation: Accounts.AccountSid.Usage.Records.json.get
Returns UsageRecords for all usage categories. The list includes paging
information.
By default, the UsageRecords resource will return one UsageRecord for
each Category, representing all usage accrued all-time for the account.
You can filter the usage Category or change the date-range over which usage
is counted using optional GET query parameters.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/usageRecords"
}
```
## Operation: Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.delete
Delete this UsageTrigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "UsageTriggerSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "UsageTriggerSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.get
Returns a repesentation of the UsageTrigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "UsageTriggerSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "UsageTriggerSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/usageTrigger"
}
```
## Operation: Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.post
Tries to update the UsageTrigger's properties, and returns the updated
resource representation if successful.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    },
    "UsageTriggerSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid",
    "UsageTriggerSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/usageTrigger"
}
```
## Operation: Accounts.AccountSid.Usage.Triggers.json.get
Returns a list of UsageTrigger resource representations. The list includes
paging information.
By default, all UsageTriggers are returned. You can filter the list by
specifying one or more query parameters. Note that the query parameters are
case-sensitive


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/usageTriggers"
}
```
## Operation: Accounts.AccountSid.Usage.Triggers.json.post
Creates a new UsageTrigger. Each account can create up to 1,000 UsageTriggers.
Currently, UsageTriggers that are no longer active are not deleted automatically.
Use DELETE to delete triggers you no longer need.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Accounts.AccountSid.json.get
Returns a representation of an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string",
      "description": "A 34 character string that uniquely identifies this account.",
      "maxLength": 34,
      "minLength": 34
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/account"
}
```
## Operation: Accounts.AccountSid.json.post
Allows you to modify the properties of an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string",
      "description": "A 34 character string that uniquely identifies this account.",
      "maxLength": 34,
      "minLength": 34
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/account"
}
```
## Operation: Accounts.AccountSid.json.put
Allows you to modify the properties of an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "AccountSid": {
      "type": "string",
      "description": "A 34 character string that uniquely identifies this account.",
      "maxLength": 34,
      "minLength": 34
    }
  },
  "additionalProperties": false,
  "required": [
    "AccountSid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/account"
}
```
## Operation: Accounts.json.get
Retrieve a list of the Account resources belonging to the account used to make the
API request. This list will include that Account as well.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/accounts"
}
```
## Operation: Accounts.json.post
Create a new Account instance resource as a subaccount of the one used to make the request. See
Creating Subaccounts for more information.


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
