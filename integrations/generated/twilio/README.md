# @datafire/twilio

Client library for Twilio

## Installation and Usage
```bash
npm install --save @datafire/twilio
```
```js
let twilio = require('@datafire/twilio').create({
  username: "",
  password: ""
});

twilio.Accounts.AccountSid.Applications.ApplicationSid.json.delete({}).then(data => {
  console.log(data);
})
```

## Description

Enabling phones, VoIP, and messaging to be embedded into web, desktop, and mobile software.


## Actions

### Accounts.AccountSid.Applications.ApplicationSid.json.delete
Delete this application.


```js
twilio.Accounts.AccountSid.Applications.ApplicationSid.json.delete({
  "AccountSid": "",
  "ApplicationSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ApplicationSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Applications.ApplicationSid.json.get
Get application instance resource.


```js
twilio.Accounts.AccountSid.Applications.ApplicationSid.json.get({
  "AccountSid": "",
  "ApplicationSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ApplicationSid **required** `string`

#### Output
* output [application](#application)

### Accounts.AccountSid.Applications.ApplicationSid.json.post
Tries to update the application's properties, and returns the updated
resource representation if successful. The returned response is identical
to that returned above when making a GET request.



```js
twilio.Accounts.AccountSid.Applications.ApplicationSid.json.post({
  "AccountSid": "",
  "ApplicationSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ApplicationSid **required** `string`

#### Output
* output [application](#application)

### Accounts.AccountSid.Applications.json.get
Returns a list of Application resource representations, each representing
an application within your account. The list includes paging information.



```js
twilio.Accounts.AccountSid.Applications.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [applications](#applications)

### Accounts.AccountSid.Applications.json.post
Creates a new application within your account.


```js
twilio.Accounts.AccountSid.Applications.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.AuthorizedConnectApps.ConnectAppSid.json.get
Get the properties of the authorized application.


```js
twilio.Accounts.AccountSid.AuthorizedConnectApps.ConnectAppSid.json.get({
  "AccountSid": "",
  "ConnectAppSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConnectAppSid **required** `string`

#### Output
* output [authApp](#authapp)

### Accounts.AccountSid.AuthorizedConnectApps.json.get
Returns a list of Connect App resource representations, each representing a
Connect App you've authorized to access your account. The list includes
paging information.



```js
twilio.Accounts.AccountSid.AuthorizedConnectApps.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [authApps](#authapps)

### Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Local.json.get
Returns a list of local AvailablePhoneNumber resource representations
that match the specified filters, each representing a phone number tha
is currently available for provisioning within your account.



```js
twilio.Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Local.json.get({
  "AccountSid": "",
  "IsoCountryCode": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IsoCountryCode **required** `string`: ISO 3166-1 alpha-2.

#### Output
* output [availablePhoneNumbers](#availablephonenumbers)

### Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Mobile.json.get
Returns a list of mobile AvailablePhoneNumber resource representations that match the specified filters, each representing a phone number that is currently available for provisioning within your account.


```js
twilio.Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Mobile.json.get({
  "AccountSid": "",
  "IsoCountryCode": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IsoCountryCode **required** `string`: ISO 3166-1 alpha-2.

#### Output
* output [phoneMobileNumbers](#phonemobilenumbers)

### Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.TollFree.json.get
Returns a list of toll-free AvailablePhoneNumber elements that match the
specified filters, each representing a phone number that is currently
available for provisioning within your account. To provision an available
phone number, POST the number to the IncomingPhoneNumbers resource.



```js
twilio.Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.TollFree.json.get({
  "AccountSid": "",
  "IsoCountryCode": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IsoCountryCode **required** `string`: ISO 3166-1 alpha-2.

#### Output
* output [phoneTollFreeNumbers](#phonetollfreenumbers)

### Accounts.AccountSid.AvailablePhoneNumbers.json.get
Returns a list of all AvailablePhoneNumber subresources for your account by ISO Country. For full information about our phone number support, see our Phone Number CSV (http://www.twilio.com/resources/rates/international-phone-number-rates.csv).


```js
twilio.Accounts.AccountSid.AvailablePhoneNumbers.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [availablePhoneNumbers](#availablephonenumbers)

### Accounts.AccountSid.Calls.CallSid.Notifications.json.get
Returns a list of notifications generated for an account. The list includes
paging information.



```js
twilio.Accounts.AccountSid.Calls.CallSid.Notifications.json.get({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [notifications](#notifications)

### Accounts.AccountSid.Calls.CallSid.Recordings.json.get
Returns a list of Recording resource representations, each representing a
recording generated during the course of a phone call.



```js
twilio.Accounts.AccountSid.Calls.CallSid.Recordings.json.get({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [recordings](#recordings)

### Accounts.AccountSid.Calls.CallSid.json.get
Returns the single Call resource identified by {CallSid}.


```js
twilio.Accounts.AccountSid.Calls.CallSid.json.get({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [callInstance](#callinstance)

### Accounts.AccountSid.Calls.CallSid.json.post
Modify a phone call.


```js
twilio.Accounts.AccountSid.Calls.CallSid.json.post({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [callInstance](#callinstance)

### Accounts.AccountSid.Calls.json.get
Returns a list of phone calls made to and from the account identified by {AccountSid}.


```js
twilio.Accounts.AccountSid.Calls.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [calls](#calls)

### Accounts.AccountSid.Calls.json.post
To make a call, make an HTTP POST request. Initiate a new phone call.


```js
twilio.Accounts.AccountSid.Calls.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.delete
Kick this participant from the conference.


```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.delete({
  "AccountSid": "",
  "ConferenceSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConferenceSid **required** `string`
  * CallSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.get
Returns a representation of this participant.


```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.get({
  "AccountSid": "",
  "ConferenceSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConferenceSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [participant](#participant)

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.post
Updates the status of a participant.


```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.post({
  "AccountSid": "",
  "ConferenceSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConferenceSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [participant](#participant)

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.json.get
Returns the list of participants in the conference identified by
{ConferenceSid}.



```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.json.get({
  "AccountSid": "",
  "ConferenceSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConferenceSid **required** `string`

#### Output
* output [participants](#participants)

### Accounts.AccountSid.Conferences.ConferenceSid.json.get
Returns a representation of the conference identified by {ConferenceSid}.



```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.json.get({
  "AccountSid": "",
  "ConferenceSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConferenceSid **required** `string`

#### Output
* output [conference](#conference)

### Accounts.AccountSid.Conferences.json.get
Returns a list of conferences within an account. The list includes paging
information.



```js
twilio.Accounts.AccountSid.Conferences.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [conferences](#conferences)

### Accounts.AccountSid.ConnectApps.ConnectAppSid.json.get
Get the properties of a Connect App.


```js
twilio.Accounts.AccountSid.ConnectApps.ConnectAppSid.json.get({
  "AccountSid": "",
  "ConnectAppSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConnectAppSid **required** `string`

#### Output
* output [connectApp](#connectapp)

### Accounts.AccountSid.ConnectApps.ConnectAppSid.json.post
Tries to update the Connect App's properties, and returns the updated
resource representation if successful. The returned response is identical
to that returned above when making a GET request.



```js
twilio.Accounts.AccountSid.ConnectApps.ConnectAppSid.json.post({
  "AccountSid": "",
  "ConnectAppSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ConnectAppSid **required** `string`

#### Output
* output [connectApp](#connectapp)

### Accounts.AccountSid.ConnectApps.json.get
Returns a list of Connect App resource representations, each representing
a Connect App in your account. The list includes paging information.



```js
twilio.Accounts.AccountSid.ConnectApps.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [connectApps](#connectapps)

### Accounts.AccountSid.IncomingPhoneNumbers.Local.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a local (not toll-free) phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out toll-free numbers.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Local.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.IncomingPhoneNumbers.Local.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number. 


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Local.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a mobile phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out local and toll free numbers.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a toll-free phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out all numbers that aren't toll-free.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number. 


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.delete
Release this phone number from your account. Twilio will no longer answer
calls to this number, and you will stop being billed the monthly phone
number fee. The phone number will eventually be recycled and potentially
given to another customer, so use with care. If you make a mistake, contac
us. We may be able to give you the number back.



```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.delete({
  "AccountSid": "",
  "IncomingPhoneNumberSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IncomingPhoneNumberSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.get
Get info about incoming call's phone number.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.get({
  "AccountSid": "",
  "IncomingPhoneNumberSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IncomingPhoneNumberSid **required** `string`

#### Output
* output [incomingCall](#incomingcall)

### Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.post
Tries to update the incoming phone number's properties, and returns the
updated resource representation if successful. The returned response is
identical to that returned above when making a GET request.



```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.post({
  "AccountSid": "",
  "IncomingPhoneNumberSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IncomingPhoneNumberSid **required** `string`

#### Output
* output [incomingCall](#incomingcall)

### Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.put
Tries to update the incoming phone number's properties, and returns the
updated resource representation if successful. The returned response is
identical to that returned above when making a GET request.



```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.put({
  "AccountSid": "",
  "IncomingPhoneNumberSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IncomingPhoneNumberSid **required** `string`

#### Output
* output [incomingCall](#incomingcall)

### Accounts.AccountSid.IncomingPhoneNumbers.json.get
Returns a list of IncomingPhoneNumber resource representations, each
representing a phone number given to your account. The list includes paging
information.



```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [incomingCalls](#incomingcalls)

### Accounts.AccountSid.IncomingPhoneNumbers.json.post
Purchases a new phone number for your account. If a phone number is found
for your request, Twilio will add it to your account and bill you for the
first month's cost of the phone number.
To find an available phone number to POST, use the subresources of the
AvailablePhoneNumbers list resource.



```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Messages.MessageSid.Media.MediaSid.json.get
Without an extension, the media is returned using the mime-type provided when the media was generated.


```js
twilio.Accounts.AccountSid.Messages.MessageSid.Media.MediaSid.json.get({
  "AccountSid": "",
  "MessageSid": "",
  "MediaSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * MessageSid **required** `string`
  * MediaSid **required** `string`

#### Output
* output [media](#media)

### Accounts.AccountSid.Messages.MessageSid.Media.json.get
Returns a list of media associated with your message.


```js
twilio.Accounts.AccountSid.Messages.MessageSid.Media.json.get({
  "AccountSid": "",
  "MessageSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * MessageSid **required** `string`

#### Output
* output [mediaList](#medialist)

### Accounts.AccountSid.Messages.MessageSid.json.get
Returns a single message specified by the provided {MessageSid}.



```js
twilio.Accounts.AccountSid.Messages.MessageSid.json.get({
  "AccountSid": "",
  "MessageSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * MessageSid **required** `string`

#### Output
* output [message](#message)

### Accounts.AccountSid.Messages.json.get
Returns a list of messages associated with your account. The list includes paging information.


```js
twilio.Accounts.AccountSid.Messages.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [messages](#messages)

### Accounts.AccountSid.Messages.json.post
To send a new outgoing message, make an HTTP POST to your Messages list resource URI


```js
twilio.Accounts.AccountSid.Messages.json.post({
  "AccountSid": "",
  "To": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * To **required** `string`: The destination phone number. Format with a '+' and country code e.g., +16175551212 (E.164 format).
  * From `string`: A Twilio phone number (in E.164 format) or alphanumeric sender ID enabled for the type of message you wish to send. Phone numbers or short codes purchased from Twilio work here. You cannot (for example) spoof messages from your own cell phone number.
  * MessagingServiceSid `string`: The 34 character unique id of the Messaging Service you want to associate with this Message. Set this parameter to use the Messaging Service Settings and Copilot Features you have configured. When only this parameter is set, Twilio will use your enabled Copilot Features to select the From phone number for delivery.
  * Body `string`: The text of the message you want to send, limited to 1600 characters.
  * MediaUrl `string`: The URL of the media you wish to send out with the message. gif , png and jpeg content is currently supported and will be formatted correctly on the recipient's device. Other types are also accepted by the API. The media size limit is 5MB. If you wish to send more than one image in the message body, please provide multiple MediaUrls values in the POST request. You may include up to 10 MediaUrls per message.

#### Output
*Output schema unknown*

### Accounts.AccountSid.Notifications.NotificationSid.json.delete
Deletes the notification identified by {NotificationSid} from an account's log.



```js
twilio.Accounts.AccountSid.Notifications.NotificationSid.json.delete({
  "AccountSid": "",
  "NotificationSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * NotificationSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Notifications.NotificationSid.json.get
Get a notification entry.


```js
twilio.Accounts.AccountSid.Notifications.NotificationSid.json.get({
  "AccountSid": "",
  "NotificationSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * NotificationSid **required** `string`

#### Output
* output [notification](#notification)

### Accounts.AccountSid.Notifications.json.get
Returns a list of notifications generated for an account. The list includes
paging information.



```js
twilio.Accounts.AccountSid.Notifications.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [notifications](#notifications)

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.delete
Deletes the caller ID from the account. Returns an HTTP 204 response if
successful, with no body.



```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.delete({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * OutgoingCallerIdSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.get
Get the set of an account's verified phone numbers.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.get({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * OutgoingCallerIdSid **required** `string`

#### Output
* output [outgoingCallerId](#outgoingcallerid)

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.post
Updates the caller id, and returns the updated resource if successful.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.post({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * OutgoingCallerIdSid **required** `string`

#### Output
* output [outgoingCallerId](#outgoingcallerid)

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.put
Updates the caller id, and returns the updated resource if successful.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.put({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * OutgoingCallerIdSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.OutgoingCallerIds.json.get
Returns a list of OutgoingCallerId resource representations, each representing
a Caller ID number valid for an account. The list includes paging information.



```js
twilio.Accounts.AccountSid.OutgoingCallerIds.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [outCallerIds](#outcallerids)

### Accounts.AccountSid.OutgoingCallerIds.json.post
Adds a new CallerID to your account.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Queues.QueueSid.Members.Front.json.get
Get a front member.


```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.Front.json.get({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`

#### Output
* output [member](#member)

### Accounts.AccountSid.Queues.QueueSid.Members.Front.json.post
Posting a URL and Method to a Queue instance will dequeue a member from a
queue and have the member's call begin executing the TwiML document at that URL
When dequeuing the 'Front' of the queue, the next call in the queue will be redirected.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.Front.json.post({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`

#### Output
* output [member](#member)

### Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.get
Get a specific member.


```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.get({
  "AccountSid": "",
  "QueueSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [member](#member)

### Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.post
Posting a URL and Method to a Queue instance will dequeue a member from a
queue and have the member's call begin executing the TwiML document at that URL
When redirecting a member of a queue addressed by CallSid, only the first request
will succeed and return a 200 response code. A second request will fail and
return an appropriate 400 response code.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.post({
  "AccountSid": "",
  "QueueSid": "",
  "CallSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`
  * CallSid **required** `string`

#### Output
* output [member](#member)

### Accounts.AccountSid.Queues.QueueSid.Members.json.get
Returns the list of members in the queue identified by {QueueSid}.


```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.json.get({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`

#### Output
* output [members](#members)

### Accounts.AccountSid.Queues.QueueSid.json.delete
The DELETE method allows you to remove a Queue. Only empty queues are
deletable.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.json.delete({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Queues.QueueSid.json.get
Get resource's individual Queue instance.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.json.get({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`

#### Output
* output [queue](#queue)

### Accounts.AccountSid.Queues.QueueSid.json.post
This POST request allows you to change the FriendlyName or MaxSize.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.json.post({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * QueueSid **required** `string`

#### Output
* output [queue](#queue)

### Accounts.AccountSid.Queues.json.get
Returns a list of queues within an account. The list includes paging
information.



```js
twilio.Accounts.AccountSid.Queues.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [queues](#queues)

### Accounts.AccountSid.Queues.json.post
Create a new Queue resource.



```js
twilio.Accounts.AccountSid.Queues.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Recordings.RecordingSid.Transcriptions.json.get
Returns a set of Transcription resource representations that includes paging
information.



```js
twilio.Accounts.AccountSid.Recordings.RecordingSid.Transcriptions.json.get({
  "AccountSid": "",
  "RecordingSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * RecordingSid **required** `string`

#### Output
* output [transcriptions](#transcriptions)

### Accounts.AccountSid.Recordings.RecordingSid.json.delete
Deletes a recording  from your account.


```js
twilio.Accounts.AccountSid.Recordings.RecordingSid.json.delete({
  "AccountSid": "",
  "RecordingSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * RecordingSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Recordings.RecordingSid.json.get
Returns one of several representations:
Without an extension, or with a ".wav", a binary WAV audio file is returned
with mime-type "audio/x-wav".
Appending ".mp3" to the URI returns a binary MP3 audio file with mime-type
type "audio/mpeg".
Appending ".xml" to the URI returns a XML representation.



```js
twilio.Accounts.AccountSid.Recordings.RecordingSid.json.get({
  "AccountSid": "",
  "RecordingSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * RecordingSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Recordings.json.get
Returns a list of Recording resource representations, each representing a
recording generated during the course of a phone call.



```js
twilio.Accounts.AccountSid.Recordings.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [recordings](#recordings)

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.delete
Remove a Credential from a CredentialList.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.delete({
  "AccountSid": "",
  "CLSid": "",
  "CredentialSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`
  * CredentialSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.get
Get a specific Credential in a list. Though a password is stored for each username in your list, the password is not returned to protect your password. If you cannot remember your password, you will need to POST to this resource to update it.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.get({
  "AccountSid": "",
  "CLSid": "",
  "CredentialSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`
  * CredentialSid **required** `string`

#### Output
* output [credential](#credential)

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.post
Change the password of a Credential record.

If the change is successful, Twilio will respond with the Credential record but will not include the password in the response.



```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.post({
  "AccountSid": "",
  "CLSid": "",
  "CredentialSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`
  * CredentialSid **required** `string`

#### Output
* output [credential](#credential)

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.get
Get the list of Credentials in a CredentialList. The passwords for the Credentials are intentionally not returned so as to protect them.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.get({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`

#### Output
* output [credentials](#credentials)

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.post
Add a Credential to the CredentialList.

When creating a Credential, you will POST both a username and password, but only receive the username back in the response. The password is intentionally not returned so as to protect it.



```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.post({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.CredentialLists.CLSid.json.delete
Delete a CredentialList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.json.delete({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.CredentialLists.CLSid.json.get
Get a credential list instance resource


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.json.get({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`

#### Output
* output [credentialList](#credentiallist)

### Accounts.AccountSid.SIP.CredentialLists.CLSid.json.post
Change the FriendlyName of the list


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.json.post({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * CLSid **required** `string`

#### Output
* output [credentialList](#credentiallist)

### Accounts.AccountSid.SIP.CredentialLists.json.get
Gets a list of Credential Lists for an account


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [credentialLists](#credentiallists)

### Accounts.AccountSid.SIP.CredentialLists.json.post
Create a new Credential List.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.CLSid.json.delete
Remove a CredentialListMapping from a domain


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.CLSid.json.delete({
  "AccountSid": "",
  "SipDomainSid": "",
  "CLSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`
  * CLSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.get
Get the user lists mapped to this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.get({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`

#### Output
* output [credentialListMappings](#credentiallistmappings)

### Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.post
Map a CredentialList to the domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.post({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.delete
Remove a mapping from this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.delete({
  "AccountSid": "",
  "SipDomainSid": "",
  "ALSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`
  * ALSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.get
Return a specific IpAccessControlListMapping instance by Sid.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.get({
  "AccountSid": "",
  "SipDomainSid": "",
  "ALSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`
  * ALSid **required** `string`

#### Output
* output [ipAccessControlListMapping](#ipaccesscontrollistmapping)

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.get
Return the IpAccessControlListMappings that are associated to this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.get({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.post
Map an IpAccessControlList to this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.post({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.Domains.SipDomainSid.json.delete
Delete a domain. If you have created subdomains of a domain, you will not be able to delete the domain until you first delete all subdomains of it.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.json.delete({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.Domains.SipDomainSid.json.get
Return a specific instance by Sid.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.json.get({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`

#### Output
* output [domain](#domain)

### Accounts.AccountSid.SIP.Domains.SipDomainSid.json.post
Update the attributes of a domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.json.post({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * SipDomainSid **required** `string`

#### Output
* output [domain](#domain)

### Accounts.AccountSid.SIP.Domains.json.get
Returns a paged list of the domains for an account.


```js
twilio.Accounts.AccountSid.SIP.Domains.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [domains](#domains)

### Accounts.AccountSid.SIP.Domains.json.post
Creates a new Domain and returns its instance resource. You must pick a unique domain name that ends in ".sip.twilio.com".
After creating a Domain, you must map it to an authentication method before the domain is ready to receive traffic.



```js
twilio.Accounts.AccountSid.SIP.Domains.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.delete
Deletes an IP address entry from the list.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.delete({
  "AccountSid": "",
  "IpAccessControlListSid": "",
  "IpAddressSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`
  * IpAddressSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.get
Return a single IP Address resource.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.get({
  "AccountSid": "",
  "IpAccessControlListSid": "",
  "IpAddressSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`
  * IpAddressSid **required** `string`

#### Output
* output [ipAddress](#ipaddress)

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.post
Change the description or IP address of a given IpAddress instance resource


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.post({
  "AccountSid": "",
  "IpAccessControlListSid": "",
  "IpAddressSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`
  * IpAddressSid **required** `string`

#### Output
* output [ipAddress](#ipaddress)

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.get
List the IP Addresses contained in this list.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.get({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`

#### Output
* output [ipAddresses](#ipaddresses)

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.post
Add an IP Address to the list with a description.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.post({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.delete
Delete an IpAccessControlList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.delete({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.get
Return a specific IpAccessControlList resource.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.get({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`

#### Output
* output [ipAccessControlListMapping](#ipaccesscontrollistmapping)

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.post
Rename an IpAccessControlList.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.post({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * IpAccessControlListSid **required** `string`

#### Output
* output [ipAccessControlListMapping](#ipaccesscontrollistmapping)

### Accounts.AccountSid.SIP.IpAccessControlLists.json.get
Return a paged list of all IpAccessControlLists under this account.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.SIP.IpAccessControlLists.json.post
Create a new IpAccessControlList resource.

When created, the list will contain no IP addresses. You will need to add IP addresses to the list for it to be active. To add IP addresses, you will need to POST to the IpAddresses List subresource.



```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [ipAccessControlListMapping](#ipaccesscontrollistmapping)

### Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.get
Get a single message.


```js
twilio.Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.get({
  "AccountSid": "",
  "ShortCodeSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ShortCodeSid **required** `string`

#### Output
* output [shortCode](#shortcode)

### Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.post
Tries to update the shortcode's properties, and returns the updated
resource representation if successful.



```js
twilio.Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.post({
  "AccountSid": "",
  "ShortCodeSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * ShortCodeSid **required** `string`

#### Output
* output [shortCode](#shortcode)

### Accounts.AccountSid.SMS.ShortCodes.json.get
Returns a list of ShortCode resource representations, each representing a
short code within your account. The list includes paging information.



```js
twilio.Accounts.AccountSid.SMS.ShortCodes.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [shortCodes](#shortcodes)

### Accounts.AccountSid.Transcriptions.TranscriptionSid.json.delete
Deletes a transcription from your account.


```js
twilio.Accounts.AccountSid.Transcriptions.TranscriptionSid.json.delete({
  "AccountSid": "",
  "TranscriptionSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * TranscriptionSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Transcriptions.TranscriptionSid.json.get
Returns a single Transcription resource representation identified by the
given {TranscriptionSid}. By default Twilio will respond with the XML metadata for the Transcription. If you append ".txt" to the end of the Transcription resource's URI Twilio will just return you the transcription tex.



```js
twilio.Accounts.AccountSid.Transcriptions.TranscriptionSid.json.get({
  "AccountSid": "",
  "TranscriptionSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * TranscriptionSid **required** `string`

#### Output
* output [transcription](#transcription)

### Accounts.AccountSid.Transcriptions.json.get
Returns a set of Transcription resource representations that includes paging
information.



```js
twilio.Accounts.AccountSid.Transcriptions.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [transcriptions](#transcriptions)

### Accounts.AccountSid.Usage.Records.Subresource.json.get
Returns UsageRecords for all usage categories for a specified period.



```js
twilio.Accounts.AccountSid.Usage.Records.Subresource.json.get({
  "AccountSid": "",
  "Subresource": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * Subresource **required** `string` (values: Daily, Monthly, Yearly, AllTime, Today, Yesterday, ThisMonth, LastMonth): |Subresource|Description|

#### Output
* output [usageRecords](#usagerecords)

### Accounts.AccountSid.Usage.Records.json.get
Returns UsageRecords for all usage categories. The list includes paging
information.
By default, the UsageRecords resource will return one UsageRecord for
each Category, representing all usage accrued all-time for the account.
You can filter the usage Category or change the date-range over which usage
is counted using optional GET query parameters.



```js
twilio.Accounts.AccountSid.Usage.Records.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [usageRecords](#usagerecords)

### Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.delete
Delete this UsageTrigger.


```js
twilio.Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.delete({
  "AccountSid": "",
  "UsageTriggerSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * UsageTriggerSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.get
Returns a repesentation of the UsageTrigger.


```js
twilio.Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.get({
  "AccountSid": "",
  "UsageTriggerSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * UsageTriggerSid **required** `string`

#### Output
* output [usageTrigger](#usagetrigger)

### Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.post
Tries to update the UsageTrigger's properties, and returns the updated
resource representation if successful.



```js
twilio.Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.post({
  "AccountSid": "",
  "UsageTriggerSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`
  * UsageTriggerSid **required** `string`

#### Output
* output [usageTrigger](#usagetrigger)

### Accounts.AccountSid.Usage.Triggers.json.get
Returns a list of UsageTrigger resource representations. The list includes
paging information.
By default, all UsageTriggers are returned. You can filter the list by
specifying one or more query parameters. Note that the query parameters are
case-sensitive



```js
twilio.Accounts.AccountSid.Usage.Triggers.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
* output [usageTriggers](#usagetriggers)

### Accounts.AccountSid.Usage.Triggers.json.post
Creates a new UsageTrigger. Each account can create up to 1,000 UsageTriggers.
Currently, UsageTriggers that are no longer active are not deleted automatically.
Use DELETE to delete triggers you no longer need.



```js
twilio.Accounts.AccountSid.Usage.Triggers.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountSid.json.get
Returns a representation of an account.


```js
twilio.Accounts.AccountSid.json.get({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`: A 34 character string that uniquely identifies this account.

#### Output
* output [account](#account)

### Accounts.AccountSid.json.post
Allows you to modify the properties of an account.


```js
twilio.Accounts.AccountSid.json.post({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`: A 34 character string that uniquely identifies this account.

#### Output
* output [account](#account)

### Accounts.AccountSid.json.put
Allows you to modify the properties of an account.


```js
twilio.Accounts.AccountSid.json.put({
  "AccountSid": ""
}, context)
```

#### Input
* input `object`
  * AccountSid **required** `string`: A 34 character string that uniquely identifies this account.

#### Output
* output [account](#account)

### Accounts.json.get
Retrieve a list of the Account resources belonging to the account used to make the
API request. This list will include that Account as well.



```js
twilio.Accounts.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [accounts](#accounts)

### Accounts.json.post
Create a new Account instance resource as a subaccount of the one used to make the request. See
Creating Subaccounts for more information.



```js
twilio.Accounts.json.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

### account
* account `object`
  * auth_token `string`
  * date_created `string`: The date that this account was created, in GMT in RFC 2822 format
  * date_updated `string`: The date that this account was last updated, in GMT in RFC 2822 format.
  * friendly_name `string`: A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address.
  * sid `string`: A 34 character string that uniquely identifies this account.
  * status `string`: The status of this account. Usually active, but can be suspended or closed.
  * subresource_uris `object`
  * type `string`: The type of this account. Either Trial or Full if you've upgraded.
  * uri `string`

### accounts
* accounts `object`
  * accounts `array`
    * items `object`
      * date_created `string`: The date that this account was created, in GMT in RFC 2822 format
      * date_updated `string`: The date that this account was last updated, in GMT in RFC 2822 format.
      * friendly_name `string`: A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address.
      * sid `string`: A 34 character string that uniquely identifies this account.
      * status `string`: The status of this account. Usually active, but can be suspended or closed.
      * type `string`: The type of this account. Either Trial or Full if you've upgraded.
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `null`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `null`
  * start `number`
  * total `number`
  * uri `string`

### appResource
* appResource `object`
  * account_sid `string`
  * api_version `string`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * sms_fallback_method `string`
  * sms_fallback_url `string`
  * sms_method `string`
  * sms_status_callback `string`
  * sms_url `string`
  * status_callback `string`
  * status_callback_method `string`
  * uri `string`
  * voice_caller_id_lookup `string`
  * voice_fallback_method `string`
  * voice_fallback_url `string`
  * voice_method `string`
  * voice_url `string`

### appResources
* appResources `object`
  * applications `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * sid `string`
      * sms_fallback_method `string`
      * sms_fallback_url `string`
      * sms_method `string`
      * sms_status_callback `string`
      * sms_url `string`
      * status_callback `string`
      * status_callback_method `string`
      * uri `string`
      * voice_caller_id_lookup `string`
      * voice_fallback_method `string`
      * voice_fallback_url `string`
      * voice_method `string`
      * voice_url `string`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### application
* application `object`
  * account_sid `string`
  * api_version `string`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * sms_fallback_method `string`
  * sms_fallback_url `object`
  * sms_method `string`
  * sms_status_callback `object`
  * sms_url `object`
  * status_callback `object`
  * status_callback_method `object`
  * uri `string`
  * voice_caller_id_lookup `object`
  * voice_fallback_method `string`
  * voice_fallback_url `object`
  * voice_method `string`
  * voice_url `string`

### applications
* applications `object`
  * applications `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * sid `string`
      * sms_fallback_method `object`
      * sms_fallback_url `object`
      * sms_method `object`
      * sms_status_callback `object`
      * sms_url `object`
      * status_callback `object`
      * status_callback_method `object`
      * uri `string`
      * voice_caller_id_lookup `object`
      * voice_fallback_method `object`
      * voice_fallback_url `object`
      * voice_method `string`
      * voice_url `string`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### authApp
* authApp `object`
  * account_sid `string`
  * connect_app_company_name `string`
  * connect_app_description `string`
  * connect_app_friendly_name `string`
  * connect_app_homepage_url `string`
  * connect_app_sid `string`
  * permissions `array`
    * items `string`

### authApps
* authApps `object`
  * authorized_connect_apps `array`
    * items `object`
      * account_sid `string`
      * connect_app_company_name `string`
      * connect_app_description `string`
      * connect_app_friendly_name `string`
      * connect_app_homepage_url `string`
      * connect_app_sid `string`
      * permissions `array`
        * items `string`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### availablePhoneNumbers
* availablePhoneNumbers `object`
  * available_phone_numbers `array`
    * items `object`
      * capabilities `object`
        * MMS `string`
        * SMS `string`
        * voice `string`
      * friendly_name `string`
      * iso_country `string`
      * lata `string`
      * latitude `string`
      * longitude `string`
      * phone_number `string`
      * postal_code `string`
      * rate_center `string`
      * region `string`
  * uri `string`

### call
* call `object`
  * account_sid `string`: The unique id of the Account responsible for creating this call.
  * answered_by `string`
  * api_version `string`
  * caller_name `string`
  * date_created `string`: GMT in RFC 2822 format.
  * date_updated `string`
  * direction `string`
  * duration `string`
  * end_time `string`: Given as GMT in RFC 2822 format.
  * formatted_from `string`
  * formatted_to `string`
  * forwarded_from `string`
  * from `string`: The phone number, SIP address or Client identifier that made this call. Phone numbers are in E.164 format (e.g. +16175551212).
  * parent_call_sid `string`
  * phone_number_sid `string`
  * price `string`
  * sid `string`
  * start_time `string`: Given as GMT in RFC 2822 format.
  * status `string` (values: queued, ringing, in-progress, canceled, completed, failed, busy, no-answer)
  * subresource_uris `object`
    * notifications `string`
    * recordings `string`
  * to `string`: Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formated as name@company.com. Client identifiers are formatted client:name.
  * uri `string`

### callInstance
* callInstance `object`
  * account_sid `string`: The unique id of the Account responsible for creating this call.
  * answered_by `string` (values: null, human, machine): If this call was initiated with answering machine detection, either human or machine. Empty otherwise.
  * api_version `string`
  * caller_name `string`: If this call was an incoming call to a phone number with Caller ID Lookup enabled, the caller's name. Empty otherwise.
  * date_created `string`: GMT in RFC 2822 format.
  * date_updated `string`
  * direction `string` (values: inbound, outbound-api, outbound-dial): A string describing the direction of the call. inbound for inbound calls, outbound-api for calls initiated via the REST API or outbound-dial for calls initiated by a <Dial> verb.
  * duration `string`: The length of the call in seconds.
  * end_time `string`: Given as GMT in RFC 2822 format.
  * forwarded_from `string`: If this call was an incoming call forwarded from another number, the forwarding phone number (depends on carrier supporting forwarding). Empty otherwise.
  * from `string`: The phone number, SIP address or Client identifier that made this call. Phone numbers are in E.164 format (e.g. +16175551212).
  * parent_call_sid `string`
  * phone_number_sid `string`: If the call was inbound, this is the Sid of the IncomingPhoneNumber that received the call. If the call was outbound, it is the Sid of the OutgoingCallerId from which the call was placed.
  * price `string`: The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available.
  * price_unit `string`: The currency in which Price is measured, in ISO 4127 format.
  * sid `string`
  * start_time `string`: Given as GMT in RFC 2822 format.
  * status `string` (values: queued, ringing, in-progress, canceled, completed, failed, busy, no-answer): A string representing the status of the call.
  * subresource_uris `object`
  * to `string`: Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formated as name@company.com. Client identifiers are formatted client:name.
  * uri `string`: The URI for this resource, relative to https://api.twilio.com

### calls
* calls `object`
  * calls `array`
    * items `object`
      * account_sid `string`
      * answered_by `object`
      * api_version `string`
      * caller_name `object`
      * date_created `string`
      * date_updated `string`
      * direction `string`
      * duration `string`
      * end_time `string`
      * forwarded_from `object`
      * from `string`
      * from_formatted `string`
      * parent_call_sid `object`
      * phone_number_sid `string`
      * price `string`
      * sid `string`
      * start_time `string`
      * status `string`
      * subresource_uris `object`
        * notifications `string`
        * recordings `string`
      * to `string`
      * to_formatted `string`
      * uri `string`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### conference
* conference `object`
  * account_sid `string`
  * api_version `string`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * status `string` (values: init, in-progress, completed)
  * subresource_uris `object`
    * participants `string`
  * uri `string`

### conferences
* conferences `object`
  * conferences `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * sid `string`
      * status `string`
      * subresource_uris `object`
        * participants `string`
      * uri `string`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### connectApp
* connectApp `object`
  * account_sid `string`
  * authorize_redirect_url `string`
  * company_name `string`
  * deauthorize_callback_method `string`
  * deauthorize_callback_url `string`
  * description `string`
  * friendly_name `string`
  * homepage_url `string`
  * permissions `array`
    * items `string`
  * sid `string`

### connectApps
* connectApps `object`
  * connect_apps `array`
    * items `object`
      * account_sid `string`
      * authorize_redirect_url `string`
      * company_name `string`
      * deauthorize_callback_method `string`
      * deauthorize_callback_url `string`
      * description `string`
      * friendly_name `string`
      * homepage_url `string`
      * permissions `array`
        * items `string`
      * sid `string`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### credential
* credential `object`
  * date_created `string`
  * date_updated `string`
  * sid `string`
  * uri `string`
  * username `string`

### credentialList
* credentialList `object`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * subresource_uris `object`
    * credentials `string`
  * uri `string`

### credentialListMapping
* credentialListMapping `object`
  * account_sid `string`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * subresource_uris `object`
    * credentials `string`
  * uri `string`

### credentialListMappings
* credentialListMappings `object`
  * credential_list_mappings `array`
    * items `array`
      * items `object`
        * account_sid `string`
        * date_created `string`
        * date_updated `string`
        * friendly_name `string`
        * sid `string`
        * subresource_uris `object`
          * credentials `string`
        * uri `string`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### credentialLists
* credentialLists `object`
  * credential_lists `array`
    * items `object`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * sid `string`
      * subresource_uris `object`
        * credentials `string`
      * uri `string`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### credentials
* credentials `object`
  * credentials `array`
    * items `object`
      * account_sid `string`
      * credential_list_sid `string`
      * date_created `string`
      * date_updated `string`
      * sid `string`
      * uri `string`
      * username `string`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### domain
* domain `object`
  * account_sid `string`
  * api_version `string`
  * auth_type `string`
  * date_created `string`
  * date_updated `string`
  * domain_name `string`
  * friendly_name `string`
  * sid `string`
  * subresource_uris `object`
    * credential_list_mappings `string`
    * ip_access_control_list_mappings `string`
  * uri `string`
  * voice_fallback_method `string`
  * voice_fallback_url `object`
  * voice_method `string`
  * voice_status_callback_method `string`
  * voice_status_callback_url `object`
  * voice_url `string`

### domains
* domains `object`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * sip_domains `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * auth_type `string`
      * date_created `string`
      * date_updated `string`
      * domain_name `string`
      * friendly_name `string`
      * sid `string`
      * subresource_uris `object`
        * credential_list_mappings `string`
        * ip_access_control_list_mappings `string`
      * uri `string`
      * voice_fallback_method `string`
      * voice_fallback_url `object`
      * voice_method `string`
      * voice_status_callback_method `string`
      * voice_status_callback_url `object`
      * voice_url `string`
  * start `number`
  * total `number`
  * uri `string`

### incomingCall
* incomingCall `object`
  * account_sid `string`
  * api_version `string`
  * capabilities `object`
    * sms `string`
    * voice `string`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * phone_number `string`
  * sid `string`
  * sms_application_sid `string`
  * sms_fallback_method `string`
  * sms_fallback_url `string`
  * sms_method `string`
  * sms_url `string`
  * status_callback `string`
  * status_callback_method `string`
  * uri `string`
  * voice_application_sid `string`
  * voice_caller_id_lookup `string`
  * voice_fallback_method `string`
  * voice_fallback_url `string`
  * voice_method `string`
  * voice_url `string`

### incomingCalls
* incomingCalls `object`
  * end `number`
  * first_page_uri `string`
  * incoming_phone_numbers `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * capabilities `object`
        * sms `boolean`
        * voice `boolean`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * phone_number `string`
      * sid `string`
      * sms_application_sid `string`
      * sms_fallback_method `object`
      * sms_fallback_url `object`
      * sms_method `object`
      * sms_url `object`
      * status_callback `object`
      * status_callback_method `object`
      * uri `string`
      * voice_application_sid `object`
      * voice_caller_id_lookup `object`
      * voice_fallback_method `object`
      * voice_fallback_url `object`
      * voice_method `string`
      * voice_url `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### ipAccessControlList
* ipAccessControlList `object`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * subresource_uris `object`
    * addresses `string`
  * uri `string`

### ipAccessControlListMapping
* ipAccessControlListMapping `object`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * subresource_uris `object`
    * addresses `string`
  * uri `string`

### ipAccessControlListMappings
* ipAccessControlListMappings `object`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * sid `string`
  * subresource_uris `object`
    * addresses `string`
  * uri `string`

### ipAddress
* ipAddress `object`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * ip_address `string`
  * sid `string`
  * uri `string`

### ipAddresses
* ipAddresses `object`
  * end `number`
  * first_page_uri `string`
  * ip_addresses `array`
    * items `object`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * ip_address `string`
      * sid `string`
      * uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### media
* media `object`
  * account_sid `string`
  * content-type `string`
  * date_created `string`
  * date_updated `string`
  * parent_sid `string`
  * sid `string`
  * uri `string`

### mediaList
* mediaList `object`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * media_list `array`
    * items `object`
      * account_sid `string`
      * content_type `string`
      * date_created `string`
      * date_updated `string`
      * parent_sid `string`
      * sid `string`
      * uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### member
* member `object`
  * call_sid `string`
  * date_enqueued `string`
  * position `integer`
  * uri `string`
  * wait_time `integer`

### members
* members `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * queue_members `array`
    * items `object`
      * call_sid `string`
      * date_enqueued `string`
      * position `integer`
      * uri `string`
      * wait_time `integer`
  * start `integer`
  * total `integer`
  * uri `string`

### message
* message `object`
  * account_sid `string`
  * api_version `string`
  * body `string`
  * date_created `string`
  * date_sent `string`
  * date_updated `string`
  * direction `string`
  * from `string`
  * num_media `string`
  * num_segments `string`
  * price `string`
  * sid `string`
  * status `string`
  * to `string`
  * uri `string`

### messages
* messages `object`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * messages `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * body `string`
      * date_created `string`
      * date_sent `string`
      * date_updated `string`
      * direction `string`
      * from `string`
      * num_media `string`
      * num_segments `string`
      * price `string`
      * sid `string`
      * status `string`
      * to `string`
      * uri `string`
  * next_page_uri `string`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`

### mobilePhoneNumbers
* mobilePhoneNumbers `object`
  * available_phone_numbers `array`
    * items `object`
      * capabilities `object`
        * MMS `string`
        * SMS `string`
        * voice `string`
      * friendly_name `string`
      * iso_country `string`
      * lata `object`
      * latitude `object`
      * longitude `object`
      * phone_number `string`
      * postal_code `object`
      * rate_center `object`
      * region `string`
  * uri `string`

### notification
* notification `object`
  * account_sid `string`
  * api_version `string`
  * call_sid `string`
  * date_created `string`
  * date_updated `string`
  * error_code `string`
  * log `string`
  * message_date `string`
  * message_text `string`
  * more_info `string`
  * request_method `string`
  * request_url `string`
  * request_variables `string`
  * response_body `string`
  * response_headers `string`
  * sid `string`
  * uri `string`

### notifications
* notifications `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * notifications `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * call_sid `string`
      * date_created `string`
      * date_updated `string`
      * error_code `string`
      * log `string`
      * message_date `string`
      * message_text `string`
      * more_info `string`
      * request_method `string`
      * request_url `string`
      * request_variables `string`
      * response_body `string`
      * response_headers `string`
      * sid `string`
      * uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### outCaller
* outCaller `object`
  * account_sid `string`
  * call_sid `string`
  * friendly_name `string`
  * phone_number `string`
  * validation_code `integer`

### outCallerId
* outCallerId `object`
  * account_sid `string`
  * call_sid `string`
  * friendly_name `string`
  * phone_number `string`
  * validation_code `integer`

### outCallerIds
* outCallerIds `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * outgoing_caller_ids `object`
    * account_sid `string`
    * date_created `string`
    * date_updated `string`
    * friendly_name `string`
    * phone_number `string`
    * sid `string`
    * uri `string`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### outgoingCallerId
* outgoingCallerId `object`
  * account_sid `string`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * phone_number `string`
  * sid `string`
  * uri `string`

### participant
* participant `object`
  * account_sid `string`
  * call_sid `string`
  * conference_sid `string`
  * date_created `string`
  * date_updated `string`
  * end_conference_on_exit `boolean`
  * muted `boolean`
  * start_conference_on_enter `boolean`
  * uri `string`

### participants
* participants `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * participants `array`
    * items `object`
      * account_sid `string`
      * call_sid `string`
      * conference_sid `string`
      * date_created `string`
      * date_updated `string`
      * end_conference_on_exit `boolean`
      * muted `boolean`
      * start_conference_on_enter `boolean`
      * uri `string`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### phoneLocalNumbers
* phoneLocalNumbers `object`
  * available_phone_numbers `array`
    * items `object`
      * capabilities `object`
        * MMS `string`
        * SMS `string`
        * voice `string`
      * friendly_name `string`
      * iso_country `string`
      * lata `string`
      * latitude `string`
      * longitude `string`
      * phone_number `string`
      * postal_code `string`
      * rate_center `string`
      * region `string`
  * uri `string`

### phoneMobileNumbers
* phoneMobileNumbers `object`
  * available_phone_numbers `array`
    * items `object`
      * capabilities `object`
        * MMS `string`
        * SMS `string`
        * voice `string`
      * friendly_name `string`
      * iso_country `string`
      * lata `object`
      * latitude `object`
      * longitude `object`
      * phone_number `string`
      * postal_code `object`
      * rate_center `object`
      * region `string`
  * uri `string`

### phoneNumbers
* phoneNumbers `object`
  * available_phone_numbers `array`
    * items `object`
      * friendly_name `string`: A nicely-formatted version of the phone number.
      * iso_country `string`: The ISO country code of this phone number.
      * lata `string`: The LATA of this phone number.
      * latitude `string`: The latitude coordinate of this phone number.
      * longitude `string`: The longitude coordinate of this phone number.
      * phone_number `string`: The phone number, in E.164 (i.e. '+1') format.
      * postal_code `string`: The postal (zip) code of this phone number.
      * rate_center `string`: The rate center of this phone number.
      * region `string`: The two-letter state or province abbreviation of this phone number.
  * uri `string`

### phoneTollFreeNumbers
* phoneTollFreeNumbers `object`
  * available_phone_numbers `array`
    * items `object`
      * capabilities `object`
        * MMS `string`
        * SMS `string`
        * voice `string`
      * friendly_name `string`
      * iso_country `string`
      * phone_number `string`
  * uri `string`

### queue
* queue `object`
  * average_wait_time `integer`
  * current_size `integer`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * max_size `integer`
  * sid `string`
  * uri `string`

### queues
* queues `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * queues `array`
    * items `object`
      * average_wait_time `integer`
      * current_size `integer`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * max_size `integer`
      * sid `string`
      * uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### recordings
* recordings `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * recordings `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * call_sid `string`
      * date_created `string`
      * date_updated `string`
      * duration `string`
      * sid `string`
      * uri `string`
  * start `integer`
  * total `integer`
  * uri `string`

### shortCode
* shortCode `object`
  * account_sid `string`
  * date_created `string`
  * date_updated `string`
  * friendly_name `string`
  * short_code `string`
  * sid `string`
  * sms_fallback_method `string`
  * sms_fallback_url `string`
  * sms_method `string`
  * sms_url `string`
  * uri `string`

### shortCodes
* shortCodes `object`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * short_codes `array`
    * items `object`
      * account_sid `string`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * short_code `string`
      * sid `string`
      * sms_fallback_method `string`
      * sms_fallback_url `string`
      * sms_method `string`
      * sms_url `string`
      * uri `string`
  * start `number`
  * total `number`
  * uri `string`

### transcription
* transcription `object`
  * account_sid `string`
  * api_version `string`
  * date_created `string`
  * date_updated `string`
  * duration `string`
  * price `string`
  * recording_sid `string`
  * sid `string`
  * status `string`
  * transcription_text `string`
  * type `string`
  * uri `string`

### transcriptions
* transcriptions `object`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * transcriptions `array`
    * items `object`
      * account_sid `string`
      * api_version `string`
      * date_created `string`
      * date_updated `string`
      * duration `string`
      * price `string`
      * recording_sid `string`
      * sid `string`
      * status `string`
      * transcription_text `string`
      * type `string`
      * uri `string`
  * uri `string`

### usageRecords
* usageRecords `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`
  * usage_records `object`
    * account_sid `string`
    * category `string`
    * count `string`
    * count_unit `string`
    * description `string`
    * end_date `string`
    * price `string`
    * price_unit `string`
    * start_date `string`
    * subresource_uris `string`
    * uri `string`
    * usage `string`
    * usage_unit `string`

### usageTrigger
* usageTrigger `object`
  * account_sid `string`: The account this trigger monitors.
  * callback_method `string` (values: GET, POST): The HTTP method Twilio will use when making a request to the CallbackUrl. GET or POST.
  * callback_url `string`: Twilio will make a request to this url when the trigger fires.
  * current_value `string`: The current value of the field the trigger is watching.
  * date_created `string`: The date the trigger was created, given as GMT RFC 2822 format.
  * date_fired `string`: The date the trigger was last fired, given as GMT RFC 2822 format.
  * date_updated `string`: The date the trigger was last updated, given as GMT RFC 2822 format.
  * friendly_name `string`: A user-specified, human-readable name for the trigger.
  * recurring `string`: How this trigger recurs. Empty for non-recurring triggers. One of daily, monthly, or yearly for recurring triggers. A trigger will only fire once during each recurring period. Recurring periods are in GMT.
  * sid `string`: The trigger's unique Sid.
  * trigger_by `string` (values: count, usage, price): The field in the UsageRecord that fires the trigger. One of count, usage, or price.
  * trigger_value `string`: The value at which the trigger will fire. Must be a positive numeric value.
  * uri `string`: The URI for this resource, relative to https://api.twilio.com.
  * usage_category `string`: The usage category the trigger watches. One of the supported usage categories.
  * usage_record_uri `string`: The URI of the UsageRecord this trigger is watching, relative to https://api.twilio.com.

### usageTriggers
* usageTriggers `object`
  * end `integer`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `string`
  * num_pages `integer`
  * page `integer`
  * page_size `integer`
  * previous_page_uri `string`
  * start `integer`
  * total `integer`
  * uri `string`
  * usage_triggers `array`
    * items `object`
      * account_sid `string`
      * callback_method `string` (values: GET, POST)
      * callback_url `string`
      * current_value `string`
      * date_created `string`
      * date_fired `string`
      * date_updated `string`
      * friendly_name `string`
      * recurring `string`
      * sid `string`
      * trigger_by `string` (values: count, usage, price)
      * trigger_value `string`
      * uri `string`
      * usage_category `string`
      * usage_record_uri `string`

### userLists
* userLists `object`
  * credential_list_mappings `array`
    * items `object`
      * account_sid `string`
      * date_created `string`
      * date_updated `string`
      * friendly_name `string`
      * sid `string`
      * subresource_uris `object`
        * credentials `string`
      * uri `string`
  * end `number`
  * first_page_uri `string`
  * last_page_uri `string`
  * next_page_uri `object`
  * num_pages `number`
  * page `number`
  * page_size `number`
  * previous_page_uri `object`
  * start `number`
  * total `number`
  * uri `string`


