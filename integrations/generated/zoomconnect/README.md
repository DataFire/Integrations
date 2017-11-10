# @datafire/zoomconnect

Client library for Zoom Connect

## Installation and Usage
```bash
npm install --save datafire @datafire/zoomconnect
```

```js
let datafire = require('datafire');
let zoomconnect = require('@datafire/zoomconnect').create({
  email: "",
  token: "",
});

zoomconnect.sms.send_bulk.post({}).then(data => {
  console.log(data);
})
```

## Description
The world's greatest SMS API

## Actions
### getBalance
Returns your account's credit balance


```js
zoomconnect.getBalance(null, context)
```

#### Parameters
*This action has no parameters*

### transfer
Transfers credits between two users in the same team. The <i>account email address</i> fields as well as the <i>number of credits to transfer</i> are required. 


```js
zoomconnect.transfer({}, context)
```

#### Parameters
* body (undefined) - WebServiceTransferCreditsRequest

### search
Find a user for a particular email address


```js
zoomconnect.search({
  "searchEmail": ""
}, context)
```

#### Parameters
* searchEmail (string) **required** - search by email address

### account.user.put
Creates a new sub-account in your team. The following fields are required <i>firstname, lastname, email address, contact number</i> and <i>password.</i>


```js
zoomconnect.account.user.put({}, context)
```

#### Parameters
* body (undefined) - WebServiceUser

### getUser
Gets a user from a given user id


```js
zoomconnect.getUser({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId

### account.user.userId.post
Updates a sub-account in your team. The following fields can be updated <i>firstname, lastname, contact number</i> and <i>password.</i>


```js
zoomconnect.account.user.userId.post({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId
* body (undefined) - WebServiceUser

### contacts.all.get
Returns all contacts


```js
zoomconnect.contacts.all.get(null, context)
```

#### Parameters
*This action has no parameters*

### contacts.create.post
Creates a  contact


```js
zoomconnect.contacts.create.post({}, context)
```

#### Parameters
* body (undefined) - WebServiceContact

### contacts.contactId.delete
Deletes a  contact


```js
zoomconnect.contacts.contactId.delete({
  "contactId": ""
}, context)
```

#### Parameters
* contactId (string) **required** - contactId

### contacts.contactId.get
Returns details for a single contact


```js
zoomconnect.contacts.contactId.get({
  "contactId": ""
}, context)
```

#### Parameters
* contactId (string) **required** - contactId

### contacts.contactId.post
Updates a  contact


```js
zoomconnect.contacts.contactId.post({
  "contactId": ""
}, context)
```

#### Parameters
* contactId (string) **required** - contactId
* body (undefined) - WebServiceContact

### contacts.contactId.addFromGroup.groupId.get
Remove a contact from a group


```js
zoomconnect.contacts.contactId.addFromGroup.groupId.get({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Parameters
* contactId (string) **required** - contactId
* groupId (string) **required** - groupId

### contacts.contactId.addFromGroup.groupId.post
Remove a contact from a group


```js
zoomconnect.contacts.contactId.addFromGroup.groupId.post({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Parameters
* contactId (string) **required** - contactId
* groupId (string) **required** - groupId

### contacts.contactId.addToGroup.groupId.get
Add a contact to a group


```js
zoomconnect.contacts.contactId.addToGroup.groupId.get({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Parameters
* contactId (string) **required** - contactId
* groupId (string) **required** - groupId

### contacts.contactId.addToGroup.groupId.post
Add a contact to a group


```js
zoomconnect.contacts.contactId.addToGroup.groupId.post({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Parameters
* contactId (string) **required** - contactId
* groupId (string) **required** - groupId

### context.lookup.get
Returns context information for a single provided


```js
zoomconnect.context.lookup.get({}, context)
```

#### Parameters
* body (string)

### context.lookup.post
Returns context information for a single provided


```js
zoomconnect.context.lookup.post({}, context)
```

#### Parameters
* body (string)

### groups.all.get
Returns all groups


```js
zoomconnect.groups.all.get(null, context)
```

#### Parameters
*This action has no parameters*

### groups.create.post
Create a  group


```js
zoomconnect.groups.create.post({}, context)
```

#### Parameters
* body (undefined) - WebServiceGroup

### groups.groupId.delete
Deletes a  group


```js
zoomconnect.groups.groupId.delete({
  "groupId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - groupId

### groups.groupId.get
Returns details for a single group


```js
zoomconnect.groups.groupId.get({
  "groupId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - groupId

### groups.groupId.post
Update a  group


```js
zoomconnect.groups.groupId.post({
  "groupId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - groupId
* body (undefined) - WebServiceGroup

### groups.groupId.addContact.contactId.get
Add a contact to a group


```js
zoomconnect.groups.groupId.addContact.contactId.get({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - groupId
* contactId (string) **required** - contactId

### groups.groupId.addContact.contactId.post
Add a contact to a group


```js
zoomconnect.groups.groupId.addContact.contactId.post({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - groupId
* contactId (string) **required** - contactId

### groups.groupId.removeContact.contactId.get
Remove a contact from a group


```js
zoomconnect.groups.groupId.removeContact.contactId.get({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - groupId
* contactId (string) **required** - contactId

### groups.groupId.removeContact.contactId.post
Remove a contact from a group


```js
zoomconnect.groups.groupId.removeContact.contactId.post({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - groupId
* contactId (string) **required** - contactId

### messages.all.get
Returns all messages


```js
zoomconnect.messages.all.get({}, context)
```

#### Parameters
* pageSize (integer) - number of elements to return at a time
* page (integer) - page number
* type (string) - filter by message type
* status (string) - filter by message status
* fromDateTimeSent (string) - date format: yyyyMMdd
* toDateTimeSent (string) - date format: yyyyMMdd
* fromDateTimeReceived (string) - date format: yyyyMMdd
* toDateTimeReceived (string) - date format: yyyyMMdd
* fromNumber (string) - phone number the message was sent from
* toNumber (string) - phone number the message was sent to
* message (string) - search matching message text
* campaign (string) - search by campaign
* dataField (string) - search by data field
* deleted (boolean) - return only deleted / not deleted messages
* read (boolean) - return only read / unread messages (inbox messages only)

### messages.messageId.delete
Deletes a  message


```js
zoomconnect.messages.messageId.delete({
  "messageId": ""
}, context)
```

#### Parameters
* messageId (string) **required** - messageId

### messages.messageId.get
Returns details for a single message


```js
zoomconnect.messages.messageId.get({
  "messageId": ""
}, context)
```

#### Parameters
* messageId (string) **required** - messageId

### messages.messageId.markRead.post
Marks a  message as read


```js
zoomconnect.messages.messageId.markRead.post({
  "messageId": ""
}, context)
```

#### Parameters
* messageId (string) **required** - messageId

### messages.messageId.markRead.put
Marks a  message as read


```js
zoomconnect.messages.messageId.markRead.put({
  "messageId": ""
}, context)
```

#### Parameters
* messageId (string) **required** - messageId

### messages.messageId.markUnread.post
Marks a  message as unread


```js
zoomconnect.messages.messageId.markUnread.post({
  "messageId": ""
}, context)
```

#### Parameters
* messageId (string) **required** - messageId

### messages.messageId.markUnread.put
Marks a  message as unread


```js
zoomconnect.messages.messageId.markUnread.put({
  "messageId": ""
}, context)
```

#### Parameters
* messageId (string) **required** - messageId

### sms.send.get
Returns an example of the data to POST to send a single message.


```js
zoomconnect.sms.send.get(null, context)
```

#### Parameters
*This action has no parameters*

### sms.send.post
Sends a single message. The <i>recipientNumber</i> and <i>message</i> fields are required. All other fields are optional.


```js
zoomconnect.sms.send.post({}, context)
```

#### Parameters
* body (undefined) - WebServiceSendSmsRequest

### sms.send_bulk.get
Returns an example of the data to POST to send multiple messages in one transaction.


```js
zoomconnect.sms.send_bulk.get(null, context)
```

#### Parameters
*This action has no parameters*

### sms.send_bulk.post
Send multiple messages in one transaction.


```js
zoomconnect.sms.send_bulk.post({}, context)
```

#### Parameters
* body (undefined) - WebServiceSendSmsRequests

### sms.send_url_parameters.get
Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.


```js
zoomconnect.sms.send_url_parameters.get({
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Parameters
* recipientNumber (string) **required** - the phone number of the recipient to send to
* message (string) **required** - the message to send
* dateToSend (string) - date format: yyyyMMddHHmm
* campaign (string) - optional campaign name
* dataField (string) - optional extra data

### sms.send_url_parameters.post
Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.


```js
zoomconnect.sms.send_url_parameters.post({
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Parameters
* recipientNumber (string) **required** - the phone number of the recipient to send to
* message (string) **required** - the message to send
* dateToSend (string) - date format: yyyyMMddHHmm
* campaign (string) - optional campaign name
* dataField (string) - optional extra data

### sms.send_url.token.get
Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is 


```js
zoomconnect.sms.send_url.token.get({
  "token": "",
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* recipientNumber (string) **required** - the phone number of the recipient to send to
* message (string) **required** - the message to send
* dateToSend (string) - date format: yyyyMMddHHmm
* campaign (string) - optional campaign name
* dataField (string) - optional extra data

### sms.send_url.token.post
Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is 


```js
zoomconnect.sms.send_url.token.post({
  "token": "",
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Parameters
* token (string) **required** - token
* recipientNumber (string) **required** - the phone number of the recipient to send to
* message (string) **required** - the message to send
* dateToSend (string) - date format: yyyyMMddHHmm
* campaign (string) - optional campaign name
* dataField (string) - optional extra data

### templates.all.get
Returns all templates


```js
zoomconnect.templates.all.get(null, context)
```

#### Parameters
*This action has no parameters*

### templates.templateId.delete
Deletes a  template


```js
zoomconnect.templates.templateId.delete({
  "templateId": 0
}, context)
```

#### Parameters
* templateId (integer) **required** - templateId

### templates.templateId.get
Returns details for a single template


```js
zoomconnect.templates.templateId.get({
  "templateId": 0
}, context)
```

#### Parameters
* templateId (integer) **required** - templateId

