# @datafire/twilio

Client library for Twilio

## Installation and Usage
```bash
npm install --save datafire @datafire/twilio
```

```js
let datafire = require('datafire');
let twilio = require('@datafire/twilio').create({
  username: "",
  password: "",
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

#### Parameters
* AccountSid (string) **required**
* ApplicationSid (string) **required**

### Accounts.AccountSid.Applications.ApplicationSid.json.get
Get application instance resource.


```js
twilio.Accounts.AccountSid.Applications.ApplicationSid.json.get({
  "AccountSid": "",
  "ApplicationSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ApplicationSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* ApplicationSid (string) **required**

### Accounts.AccountSid.Applications.json.get
Returns a list of Application resource representations, each representing
an application within your account. The list includes paging information.



```js
twilio.Accounts.AccountSid.Applications.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Applications.json.post
Creates a new application within your account.


```js
twilio.Accounts.AccountSid.Applications.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.AuthorizedConnectApps.ConnectAppSid.json.get
Get the properties of the authorized application.


```js
twilio.Accounts.AccountSid.AuthorizedConnectApps.ConnectAppSid.json.get({
  "AccountSid": "",
  "ConnectAppSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ConnectAppSid (string) **required**

### Accounts.AccountSid.AuthorizedConnectApps.json.get
Returns a list of Connect App resource representations, each representing a
Connect App you've authorized to access your account. The list includes
paging information.



```js
twilio.Accounts.AccountSid.AuthorizedConnectApps.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* IsoCountryCode (string) **required** - ISO 3166-1 alpha-2.

### Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Mobile.json.get
Returns a list of mobile AvailablePhoneNumber resource representations that match the specified filters, each representing a phone number that is currently available for provisioning within your account.


```js
twilio.Accounts.AccountSid.AvailablePhoneNumbers.IsoCountryCode.Mobile.json.get({
  "AccountSid": "",
  "IsoCountryCode": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IsoCountryCode (string) **required** - ISO 3166-1 alpha-2.

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

#### Parameters
* AccountSid (string) **required**
* IsoCountryCode (string) **required** - ISO 3166-1 alpha-2.

### Accounts.AccountSid.AvailablePhoneNumbers.json.get
Returns a list of all AvailablePhoneNumber subresources for your account by ISO Country. For full information about our phone number support, see our Phone Number CSV (http://www.twilio.com/resources/rates/international-phone-number-rates.csv).


```js
twilio.Accounts.AccountSid.AvailablePhoneNumbers.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Calls.CallSid.Notifications.json.get
Returns a list of notifications generated for an account. The list includes
paging information.



```js
twilio.Accounts.AccountSid.Calls.CallSid.Notifications.json.get({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Calls.CallSid.Recordings.json.get
Returns a list of Recording resource representations, each representing a
recording generated during the course of a phone call.



```js
twilio.Accounts.AccountSid.Calls.CallSid.Recordings.json.get({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Calls.CallSid.json.get
Returns the single Call resource identified by {CallSid}.


```js
twilio.Accounts.AccountSid.Calls.CallSid.json.get({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Calls.CallSid.json.post
Modify a phone call.


```js
twilio.Accounts.AccountSid.Calls.CallSid.json.post({
  "AccountSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Calls.json.get
Returns a list of phone calls made to and from the account identified by {AccountSid}.


```js
twilio.Accounts.AccountSid.Calls.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Calls.json.post
To make a call, make an HTTP POST request. Initiate a new phone call.


```js
twilio.Accounts.AccountSid.Calls.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.delete
Kick this participant from the conference.


```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.delete({
  "AccountSid": "",
  "ConferenceSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ConferenceSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.get
Returns a representation of this participant.


```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.get({
  "AccountSid": "",
  "ConferenceSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ConferenceSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.post
Updates the status of a participant.


```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.CallSid.json.post({
  "AccountSid": "",
  "ConferenceSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ConferenceSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Conferences.ConferenceSid.Participants.json.get
Returns the list of participants in the conference identified by
{ConferenceSid}.



```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.Participants.json.get({
  "AccountSid": "",
  "ConferenceSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ConferenceSid (string) **required**

### Accounts.AccountSid.Conferences.ConferenceSid.json.get
Returns a representation of the conference identified by {ConferenceSid}.



```js
twilio.Accounts.AccountSid.Conferences.ConferenceSid.json.get({
  "AccountSid": "",
  "ConferenceSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ConferenceSid (string) **required**

### Accounts.AccountSid.Conferences.json.get
Returns a list of conferences within an account. The list includes paging
information.



```js
twilio.Accounts.AccountSid.Conferences.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.ConnectApps.ConnectAppSid.json.get
Get the properties of a Connect App.


```js
twilio.Accounts.AccountSid.ConnectApps.ConnectAppSid.json.get({
  "AccountSid": "",
  "ConnectAppSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ConnectAppSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* ConnectAppSid (string) **required**

### Accounts.AccountSid.ConnectApps.json.get
Returns a list of Connect App resource representations, each representing
a Connect App in your account. The list includes paging information.



```js
twilio.Accounts.AccountSid.ConnectApps.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.Local.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a local (not toll-free) phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out toll-free numbers.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Local.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.Local.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number. 


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Local.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a mobile phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out local and toll free numbers.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.Mobile.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.get
Returns a list of local <IncomingPhoneNumber> elements, each representing a toll-free phone number given to your account, under an <IncomingPhoneNumbers> list element that includes paging information. Works exactly the same as the IncomingPhoneNumber resource, but filters out all numbers that aren't toll-free.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.post
Adds a new phone number to your account. If a phone number is found for your request, Twilio will add it to your account and bill you for the first month's cost of the phone number. 


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.TollFree.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* IncomingPhoneNumberSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.get
Get info about incoming call's phone number.


```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.IncomingPhoneNumberSid.json.get({
  "AccountSid": "",
  "IncomingPhoneNumberSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IncomingPhoneNumberSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* IncomingPhoneNumberSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* IncomingPhoneNumberSid (string) **required**

### Accounts.AccountSid.IncomingPhoneNumbers.json.get
Returns a list of IncomingPhoneNumber resource representations, each
representing a phone number given to your account. The list includes paging
information.



```js
twilio.Accounts.AccountSid.IncomingPhoneNumbers.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Messages.MessageSid.Media.MediaSid.json.get
Without an extension, the media is returned using the mime-type provided when the media was generated.


```js
twilio.Accounts.AccountSid.Messages.MessageSid.Media.MediaSid.json.get({
  "AccountSid": "",
  "MessageSid": "",
  "MediaSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* MessageSid (string) **required**
* MediaSid (string) **required**

### Accounts.AccountSid.Messages.MessageSid.Media.json.get
Returns a list of media associated with your message.


```js
twilio.Accounts.AccountSid.Messages.MessageSid.Media.json.get({
  "AccountSid": "",
  "MessageSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* MessageSid (string) **required**

### Accounts.AccountSid.Messages.MessageSid.json.get
Returns a single message specified by the provided {MessageSid}.



```js
twilio.Accounts.AccountSid.Messages.MessageSid.json.get({
  "AccountSid": "",
  "MessageSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* MessageSid (string) **required**

### Accounts.AccountSid.Messages.json.get
Returns a list of messages associated with your account. The list includes paging information.


```js
twilio.Accounts.AccountSid.Messages.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Messages.json.post
To send a new outgoing message, make an HTTP POST to your Messages list resource URI


```js
twilio.Accounts.AccountSid.Messages.json.post({
  "AccountSid": "",
  "To": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* To (string) **required** - The destination phone number. Format with a '+' and country code e.g., +16175551212 (E.164 format).
* From (string) - A Twilio phone number (in E.164 format) or alphanumeric sender ID enabled for the type of message you wish to send. Phone numbers or short codes purchased from Twilio work here. You cannot (for example) spoof messages from your own cell phone number.
* MessagingServiceSid (string) - The 34 character unique id of the Messaging Service you want to associate with this Message. Set this parameter to use the Messaging Service Settings and Copilot Features you have configured. When only this parameter is set, Twilio will use your enabled Copilot Features to select the From phone number for delivery.
* Body (string) - The text of the message you want to send, limited to 1600 characters.
* MediaUrl (string) - The URL of the media you wish to send out with the message. gif , png and jpeg content is currently supported and will be formatted correctly on the recipient's device. Other types are also accepted by the API. The media size limit is 5MB. If you wish to send more than one image in the message body, please provide multiple MediaUrls values in the POST request. You may include up to 10 MediaUrls per message.

### Accounts.AccountSid.Notifications.NotificationSid.json.delete
Deletes the notification identified by {NotificationSid} from an account's log.



```js
twilio.Accounts.AccountSid.Notifications.NotificationSid.json.delete({
  "AccountSid": "",
  "NotificationSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* NotificationSid (string) **required**

### Accounts.AccountSid.Notifications.NotificationSid.json.get
Get a notification entry.


```js
twilio.Accounts.AccountSid.Notifications.NotificationSid.json.get({
  "AccountSid": "",
  "NotificationSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* NotificationSid (string) **required**

### Accounts.AccountSid.Notifications.json.get
Returns a list of notifications generated for an account. The list includes
paging information.



```js
twilio.Accounts.AccountSid.Notifications.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.delete
Deletes the caller ID from the account. Returns an HTTP 204 response if
successful, with no body.



```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.delete({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* OutgoingCallerIdSid (string) **required**

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.get
Get the set of an account's verified phone numbers.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.get({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* OutgoingCallerIdSid (string) **required**

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.post
Updates the caller id, and returns the updated resource if successful.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.post({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* OutgoingCallerIdSid (string) **required**

### Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.put
Updates the caller id, and returns the updated resource if successful.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.OutgoingCallerIdSid.json.put({
  "AccountSid": "",
  "OutgoingCallerIdSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* OutgoingCallerIdSid (string) **required**

### Accounts.AccountSid.OutgoingCallerIds.json.get
Returns a list of OutgoingCallerId resource representations, each representing
a Caller ID number valid for an account. The list includes paging information.



```js
twilio.Accounts.AccountSid.OutgoingCallerIds.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.OutgoingCallerIds.json.post
Adds a new CallerID to your account.


```js
twilio.Accounts.AccountSid.OutgoingCallerIds.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Queues.QueueSid.Members.Front.json.get
Get a front member.


```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.Front.json.get({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**

### Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.get
Get a specific member.


```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.CallSid.json.get({
  "AccountSid": "",
  "QueueSid": "",
  "CallSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**
* CallSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**
* CallSid (string) **required**

### Accounts.AccountSid.Queues.QueueSid.Members.json.get
Returns the list of members in the queue identified by {QueueSid}.


```js
twilio.Accounts.AccountSid.Queues.QueueSid.Members.json.get({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**

### Accounts.AccountSid.Queues.QueueSid.json.delete
The DELETE method allows you to remove a Queue. Only empty queues are
deletable.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.json.delete({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**

### Accounts.AccountSid.Queues.QueueSid.json.get
Get resource's individual Queue instance.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.json.get({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**

### Accounts.AccountSid.Queues.QueueSid.json.post
This POST request allows you to change the FriendlyName or MaxSize.



```js
twilio.Accounts.AccountSid.Queues.QueueSid.json.post({
  "AccountSid": "",
  "QueueSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* QueueSid (string) **required**

### Accounts.AccountSid.Queues.json.get
Returns a list of queues within an account. The list includes paging
information.



```js
twilio.Accounts.AccountSid.Queues.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Queues.json.post
Create a new Queue resource.



```js
twilio.Accounts.AccountSid.Queues.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Recordings.RecordingSid.Transcriptions.json.get
Returns a set of Transcription resource representations that includes paging
information.



```js
twilio.Accounts.AccountSid.Recordings.RecordingSid.Transcriptions.json.get({
  "AccountSid": "",
  "RecordingSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* RecordingSid (string) **required**

### Accounts.AccountSid.Recordings.RecordingSid.json.delete
Deletes a recording  from your account.


```js
twilio.Accounts.AccountSid.Recordings.RecordingSid.json.delete({
  "AccountSid": "",
  "RecordingSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* RecordingSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* RecordingSid (string) **required**

### Accounts.AccountSid.Recordings.json.get
Returns a list of Recording resource representations, each representing a
recording generated during the course of a phone call.



```js
twilio.Accounts.AccountSid.Recordings.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.delete
Remove a Credential from a CredentialList.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.delete({
  "AccountSid": "",
  "CLSid": "",
  "CredentialSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**
* CredentialSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.get
Get a specific Credential in a list. Though a password is stored for each username in your list, the password is not returned to protect your password. If you cannot remember your password, you will need to POST to this resource to update it.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.CredentialSid.json.get({
  "AccountSid": "",
  "CLSid": "",
  "CredentialSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**
* CredentialSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**
* CredentialSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.get
Get the list of Credentials in a CredentialList. The passwords for the Credentials are intentionally not returned so as to protect them.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.get({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.post
Add a Credential to the CredentialList.

When creating a Credential, you will POST both a username and password, but only receive the username back in the response. The password is intentionally not returned so as to protect it.



```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.Credentials.json.post({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.CLSid.json.delete
Delete a CredentialList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.json.delete({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.CLSid.json.get
Get a credential list instance resource


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.json.get({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.CLSid.json.post
Change the FriendlyName of the list


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.CLSid.json.post({
  "AccountSid": "",
  "CLSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* CLSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.json.get
Gets a list of Credential Lists for an account


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.SIP.CredentialLists.json.post
Create a new Credential List.


```js
twilio.Accounts.AccountSid.SIP.CredentialLists.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.CLSid.json.delete
Remove a CredentialListMapping from a domain


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.CLSid.json.delete({
  "AccountSid": "",
  "SipDomainSid": "",
  "CLSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**
* CLSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.get
Get the user lists mapped to this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.get({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.post
Map a CredentialList to the domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.CredentialListMappings.json.post({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.delete
Remove a mapping from this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.delete({
  "AccountSid": "",
  "SipDomainSid": "",
  "ALSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**
* ALSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.get
Return a specific IpAccessControlListMapping instance by Sid.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.ALSid.json.get({
  "AccountSid": "",
  "SipDomainSid": "",
  "ALSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**
* ALSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.get
Return the IpAccessControlListMappings that are associated to this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.get({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.post
Map an IpAccessControlList to this domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.IpAccessControlListMappings.json.post({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.json.delete
Delete a domain. If you have created subdomains of a domain, you will not be able to delete the domain until you first delete all subdomains of it.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.json.delete({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.json.get
Return a specific instance by Sid.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.json.get({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**

### Accounts.AccountSid.SIP.Domains.SipDomainSid.json.post
Update the attributes of a domain.


```js
twilio.Accounts.AccountSid.SIP.Domains.SipDomainSid.json.post({
  "AccountSid": "",
  "SipDomainSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* SipDomainSid (string) **required**

### Accounts.AccountSid.SIP.Domains.json.get
Returns a paged list of the domains for an account.


```js
twilio.Accounts.AccountSid.SIP.Domains.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.SIP.Domains.json.post
Creates a new Domain and returns its instance resource. You must pick a unique domain name that ends in ".sip.twilio.com".
After creating a Domain, you must map it to an authentication method before the domain is ready to receive traffic.



```js
twilio.Accounts.AccountSid.SIP.Domains.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.delete
Deletes an IP address entry from the list.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.delete({
  "AccountSid": "",
  "IpAccessControlListSid": "",
  "IpAddressSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**
* IpAddressSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.get
Return a single IP Address resource.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.get({
  "AccountSid": "",
  "IpAccessControlListSid": "",
  "IpAddressSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**
* IpAddressSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.post
Change the description or IP address of a given IpAddress instance resource


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.IpAddressSid.json.post({
  "AccountSid": "",
  "IpAccessControlListSid": "",
  "IpAddressSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**
* IpAddressSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.get
List the IP Addresses contained in this list.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.get({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.post
Add an IP Address to the list with a description.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.IpAddresses.json.post({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.delete
Delete an IpAccessControlList from your account. It can only be deleted if no domains are mapped to it. If you attempt to delete one that is mapped to a domain, you will receive an error.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.delete({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.get
Return a specific IpAccessControlList resource.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.get({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.post
Rename an IpAccessControlList.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.IpAccessControlListSid.json.post({
  "AccountSid": "",
  "IpAccessControlListSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* IpAccessControlListSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.json.get
Return a paged list of all IpAccessControlLists under this account.


```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.SIP.IpAccessControlLists.json.post
Create a new IpAccessControlList resource.

When created, the list will contain no IP addresses. You will need to add IP addresses to the list for it to be active. To add IP addresses, you will need to POST to the IpAddresses List subresource.



```js
twilio.Accounts.AccountSid.SIP.IpAccessControlLists.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.get
Get a single message.


```js
twilio.Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.get({
  "AccountSid": "",
  "ShortCodeSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ShortCodeSid (string) **required**

### Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.post
Tries to update the shortcode's properties, and returns the updated
resource representation if successful.



```js
twilio.Accounts.AccountSid.SMS.ShortCodes.ShortCodeSid.json.post({
  "AccountSid": "",
  "ShortCodeSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* ShortCodeSid (string) **required**

### Accounts.AccountSid.SMS.ShortCodes.json.get
Returns a list of ShortCode resource representations, each representing a
short code within your account. The list includes paging information.



```js
twilio.Accounts.AccountSid.SMS.ShortCodes.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Transcriptions.TranscriptionSid.json.delete
Deletes a transcription from your account.


```js
twilio.Accounts.AccountSid.Transcriptions.TranscriptionSid.json.delete({
  "AccountSid": "",
  "TranscriptionSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* TranscriptionSid (string) **required**

### Accounts.AccountSid.Transcriptions.TranscriptionSid.json.get
Returns a single Transcription resource representation identified by the
given {TranscriptionSid}. By default Twilio will respond with the XML metadata for the Transcription. If you append ".txt" to the end of the Transcription resource's URI Twilio will just return you the transcription tex.



```js
twilio.Accounts.AccountSid.Transcriptions.TranscriptionSid.json.get({
  "AccountSid": "",
  "TranscriptionSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* TranscriptionSid (string) **required**

### Accounts.AccountSid.Transcriptions.json.get
Returns a set of Transcription resource representations that includes paging
information.



```js
twilio.Accounts.AccountSid.Transcriptions.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Usage.Records.Subresource.json.get
Returns UsageRecords for all usage categories for a specified period.



```js
twilio.Accounts.AccountSid.Usage.Records.Subresource.json.get({
  "AccountSid": "",
  "Subresource": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* Subresource (string) **required** - |Subresource|Description|

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

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.delete
Delete this UsageTrigger.


```js
twilio.Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.delete({
  "AccountSid": "",
  "UsageTriggerSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* UsageTriggerSid (string) **required**

### Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.get
Returns a repesentation of the UsageTrigger.


```js
twilio.Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.get({
  "AccountSid": "",
  "UsageTriggerSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* UsageTriggerSid (string) **required**

### Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.post
Tries to update the UsageTrigger's properties, and returns the updated
resource representation if successful.



```js
twilio.Accounts.AccountSid.Usage.Triggers.UsageTriggerSid.json.post({
  "AccountSid": "",
  "UsageTriggerSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**
* UsageTriggerSid (string) **required**

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

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.Usage.Triggers.json.post
Creates a new UsageTrigger. Each account can create up to 1,000 UsageTriggers.
Currently, UsageTriggers that are no longer active are not deleted automatically.
Use DELETE to delete triggers you no longer need.



```js
twilio.Accounts.AccountSid.Usage.Triggers.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required**

### Accounts.AccountSid.json.get
Returns a representation of an account.


```js
twilio.Accounts.AccountSid.json.get({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required** - A 34 character string that uniquely identifies this account.

### Accounts.AccountSid.json.post
Allows you to modify the properties of an account.


```js
twilio.Accounts.AccountSid.json.post({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required** - A 34 character string that uniquely identifies this account.

### Accounts.AccountSid.json.put
Allows you to modify the properties of an account.


```js
twilio.Accounts.AccountSid.json.put({
  "AccountSid": ""
}, context)
```

#### Parameters
* AccountSid (string) **required** - A 34 character string that uniquely identifies this account.

### Accounts.json.get
Retrieve a list of the Account resources belonging to the account used to make the
API request. This list will include that Account as well.



```js
twilio.Accounts.json.get(null, context)
```

#### Parameters
*This action has no parameters*

### Accounts.json.post
Create a new Account instance resource as a subaccount of the one used to make the request. See
Creating Subaccounts for more information.



```js
twilio.Accounts.json.post(null, context)
```

#### Parameters
*This action has no parameters*

