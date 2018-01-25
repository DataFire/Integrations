# @datafire/zoomconnect

Client library for Zoom Connect

## Installation and Usage
```bash
npm install --save @datafire/zoomconnect
```
```js
let zoomconnect = require('@datafire/zoomconnect').create({
  email: "",
  token: ""
});

zoomconnect.sms.send_bulk.post({}).then(data => {
  console.log(data);
});
```

## Description

The world's greatest SMS API

## Actions

### getBalance
Returns your account's credit balance


```js
zoomconnect.getBalance(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebServiceAccount](#webserviceaccount)

### transfer
Transfers credits between two users in the same team. The <i>account email address</i> fields as well as the <i>number of credits to transfer</i> are required. 


```js
zoomconnect.transfer({}, context)
```

#### Input
* input `object`
  * body [WebServiceTransferCreditsRequest](#webservicetransfercreditsrequest)

#### Output
*Output schema unknown*

### search
Find a user for a particular email address


```js
zoomconnect.search({
  "searchEmail": ""
}, context)
```

#### Input
* input `object`
  * searchEmail **required** `string`: search by email address

#### Output
* output [WebServiceUsers](#webserviceusers)

### account.user.put
Creates a new sub-account in your team. The following fields are required <i>firstname, lastname, email address, contact number</i> and <i>password.</i>


```js
zoomconnect.account.user.put({}, context)
```

#### Input
* input `object`
  * body [WebServiceUser](#webserviceuser)

#### Output
* output [WebServiceUser](#webserviceuser)

### getUser
Gets a user from a given user id


```js
zoomconnect.getUser({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId

#### Output
* output [WebServiceUser](#webserviceuser)

### account.user.userId.post
Updates a sub-account in your team. The following fields can be updated <i>firstname, lastname, contact number</i> and <i>password.</i>


```js
zoomconnect.account.user.userId.post({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId
  * body [WebServiceUser](#webserviceuser)

#### Output
* output [WebServiceUser](#webserviceuser)

### contacts.all.get
Returns all contacts


```js
zoomconnect.contacts.all.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebServiceContacts](#webservicecontacts)

### contacts.create.post
Creates a  contact


```js
zoomconnect.contacts.create.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceContact](#webservicecontact)

#### Output
* output [WebServiceContact](#webservicecontact)

### contacts.contactId.delete
Deletes a  contact


```js
zoomconnect.contacts.contactId.delete({
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`: contactId

#### Output
*Output schema unknown*

### contacts.contactId.get
Returns details for a single contact


```js
zoomconnect.contacts.contactId.get({
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`: contactId

#### Output
* output [WebServiceContact](#webservicecontact)

### contacts.contactId.post
Updates a  contact


```js
zoomconnect.contacts.contactId.post({
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`: contactId
  * body [WebServiceContact](#webservicecontact)

#### Output
* output [WebServiceContact](#webservicecontact)

### contacts.contactId.addFromGroup.groupId.get
Remove a contact from a group


```js
zoomconnect.contacts.contactId.addFromGroup.groupId.get({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`: contactId
  * groupId **required** `string`: groupId

#### Output
*Output schema unknown*

### contacts.contactId.addFromGroup.groupId.post
Remove a contact from a group


```js
zoomconnect.contacts.contactId.addFromGroup.groupId.post({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`: contactId
  * groupId **required** `string`: groupId

#### Output
*Output schema unknown*

### contacts.contactId.addToGroup.groupId.get
Add a contact to a group


```js
zoomconnect.contacts.contactId.addToGroup.groupId.get({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`: contactId
  * groupId **required** `string`: groupId

#### Output
*Output schema unknown*

### contacts.contactId.addToGroup.groupId.post
Add a contact to a group


```js
zoomconnect.contacts.contactId.addToGroup.groupId.post({
  "contactId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * contactId **required** `string`: contactId
  * groupId **required** `string`: groupId

#### Output
*Output schema unknown*

### context.lookup.get
Returns context information for a single provided


```js
zoomconnect.context.lookup.get({}, context)
```

#### Input
* input `object`
  * body `string`

#### Output
* output [WebServiceNumberContextLookupResponse](#webservicenumbercontextlookupresponse)

### context.lookup.post
Returns context information for a single provided


```js
zoomconnect.context.lookup.post({}, context)
```

#### Input
* input `object`
  * body `string`

#### Output
* output [WebServiceNumberContextLookupResponse](#webservicenumbercontextlookupresponse)

### groups.all.get
Returns all groups


```js
zoomconnect.groups.all.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebServiceGroups](#webservicegroups)

### groups.create.post
Create a  group


```js
zoomconnect.groups.create.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceGroup](#webservicegroup)

#### Output
* output [WebServiceGroup](#webservicegroup)

### groups.groupId.delete
Deletes a  group


```js
zoomconnect.groups.groupId.delete({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: groupId

#### Output
*Output schema unknown*

### groups.groupId.get
Returns details for a single group


```js
zoomconnect.groups.groupId.get({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: groupId

#### Output
* output [WebServiceGroup](#webservicegroup)

### groups.groupId.post
Update a  group


```js
zoomconnect.groups.groupId.post({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: groupId
  * body [WebServiceGroup](#webservicegroup)

#### Output
* output [WebServiceGroup](#webservicegroup)

### groups.groupId.addContact.contactId.get
Add a contact to a group


```js
zoomconnect.groups.groupId.addContact.contactId.get({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: groupId
  * contactId **required** `string`: contactId

#### Output
*Output schema unknown*

### groups.groupId.addContact.contactId.post
Add a contact to a group


```js
zoomconnect.groups.groupId.addContact.contactId.post({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: groupId
  * contactId **required** `string`: contactId

#### Output
*Output schema unknown*

### groups.groupId.removeContact.contactId.get
Remove a contact from a group


```js
zoomconnect.groups.groupId.removeContact.contactId.get({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: groupId
  * contactId **required** `string`: contactId

#### Output
*Output schema unknown*

### groups.groupId.removeContact.contactId.post
Remove a contact from a group


```js
zoomconnect.groups.groupId.removeContact.contactId.post({
  "groupId": "",
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: groupId
  * contactId **required** `string`: contactId

#### Output
*Output schema unknown*

### messages.all.get
Returns all messages


```js
zoomconnect.messages.all.get({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: number of elements to return at a time
  * page `integer`: page number
  * type `string` (values: OUTBOUND, INBOUND): filter by message type
  * status `string` (values: SCHEDULED, UNKNOWN, SENT, FAILED, FAILED_REFUNDED, FAILED_OPTOUT, DELIVERED): filter by message status
  * fromDateTimeSent `string`: date format: yyyyMMdd
  * toDateTimeSent `string`: date format: yyyyMMdd
  * fromDateTimeReceived `string`: date format: yyyyMMdd
  * toDateTimeReceived `string`: date format: yyyyMMdd
  * fromNumber `string`: phone number the message was sent from
  * toNumber `string`: phone number the message was sent to
  * message `string`: search matching message text
  * campaign `string`: search by campaign
  * dataField `string`: search by data field
  * deleted `boolean`: return only deleted / not deleted messages
  * read `boolean`: return only read / unread messages (inbox messages only)

#### Output
* output [WebServiceMessages](#webservicemessages)

### messages.messageId.delete
Deletes a  message


```js
zoomconnect.messages.messageId.delete({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
*Output schema unknown*

### messages.messageId.get
Returns details for a single message


```js
zoomconnect.messages.messageId.get({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
* output [WebServiceMessage](#webservicemessage)

### messages.messageId.markRead.post
Marks a  message as read


```js
zoomconnect.messages.messageId.markRead.post({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
* output [WebServiceMessage](#webservicemessage)

### messages.messageId.markRead.put
Marks a  message as read


```js
zoomconnect.messages.messageId.markRead.put({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
* output [WebServiceMessage](#webservicemessage)

### messages.messageId.markUnread.post
Marks a  message as unread


```js
zoomconnect.messages.messageId.markUnread.post({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
* output [WebServiceMessage](#webservicemessage)

### messages.messageId.markUnread.put
Marks a  message as unread


```js
zoomconnect.messages.messageId.markUnread.put({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
* output [WebServiceMessage](#webservicemessage)

### sms.send.get
Returns an example of the data to POST to send a single message.


```js
zoomconnect.sms.send.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebServiceSendSmsRequest](#webservicesendsmsrequest)

### sms.send.post
Sends a single message. The <i>recipientNumber</i> and <i>message</i> fields are required. All other fields are optional.


```js
zoomconnect.sms.send.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceSendSmsRequest](#webservicesendsmsrequest)

#### Output
* output [WebServiceSendSmsResponse](#webservicesendsmsresponse)

### sms.send_bulk.get
Returns an example of the data to POST to send multiple messages in one transaction.


```js
zoomconnect.sms.send_bulk.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebServiceSendSmsRequests](#webservicesendsmsrequests)

### sms.send_bulk.post
Send multiple messages in one transaction.


```js
zoomconnect.sms.send_bulk.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceSendSmsRequests](#webservicesendsmsrequests)

#### Output
* output [WebServiceSendSmsResponses](#webservicesendsmsresponses)

### sms.send_url_parameters.get
Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.


```js
zoomconnect.sms.send_url_parameters.get({
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * recipientNumber **required** `string`: the phone number of the recipient to send to
  * message **required** `string`: the message to send
  * dateToSend `string`: date format: yyyyMMddHHmm
  * campaign `string`: optional campaign name
  * dataField `string`: optional extra data

#### Output
* output `string`

### sms.send_url_parameters.post
Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.


```js
zoomconnect.sms.send_url_parameters.post({
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * recipientNumber **required** `string`: the phone number of the recipient to send to
  * message **required** `string`: the message to send
  * dateToSend `string`: date format: yyyyMMddHHmm
  * campaign `string`: optional campaign name
  * dataField `string`: optional extra data

#### Output
* output `string`

### sms.send_url.token.get
Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is 


```js
zoomconnect.sms.send_url.token.get({
  "token": "",
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: token
  * recipientNumber **required** `string`: the phone number of the recipient to send to
  * message **required** `string`: the message to send
  * dateToSend `string`: date format: yyyyMMddHHmm
  * campaign `string`: optional campaign name
  * dataField `string`: optional extra data

#### Output
* output `string`

### sms.send_url.token.post
Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is 


```js
zoomconnect.sms.send_url.token.post({
  "token": "",
  "recipientNumber": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: token
  * recipientNumber **required** `string`: the phone number of the recipient to send to
  * message **required** `string`: the message to send
  * dateToSend `string`: date format: yyyyMMddHHmm
  * campaign `string`: optional campaign name
  * dataField `string`: optional extra data

#### Output
* output `string`

### templates.all.get
Returns all templates


```js
zoomconnect.templates.all.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebServiceTemplates](#webservicetemplates)

### templates.templateId.delete
Deletes a  template


```js
zoomconnect.templates.templateId.delete({
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: templateId

#### Output
*Output schema unknown*

### templates.templateId.get
Returns details for a single template


```js
zoomconnect.templates.templateId.get({
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: templateId

#### Output
* output [WebServiceTemplate](#webservicetemplate)



## Definitions

### Link
* Link `object`
  * href `string`
  * rel `string`
  * templated `boolean`

### RestErrorDTO
* RestErrorDTO `object`: RestErrorDTO
  * code `integer`
  * developerMessage `string`
  * message `string`
  * moreInfoUrl `string`
  * status `string`

### Void


### WebServiceAccount
* WebServiceAccount `object`: WebServiceAccount
  * creditBalance `number`
  * links `array`
    * items [Link](#link)

### WebServiceContact
* WebServiceContact `object`: WebServiceContact
  * contactId `string`
  * contactNumber `string`
  * firstName `string`
  * lastName `string`
  * links `array`
    * items [Link](#link)
  * title `string`

### WebServiceContactLink
* WebServiceContactLink `object`: WebServiceContactLink
  * contactId `string`
  * links `array`
    * items [Link](#link)

### WebServiceContacts
* WebServiceContacts `object`: WebServiceContacts
  * links `array`
    * items [Link](#link)
  * webServiceContacts `array`
    * items [WebServiceContact](#webservicecontact)

### WebServiceGroup
* WebServiceGroup `object`: WebServiceGroup
  * groupId `string`
  * links `array`
    * items [Link](#link)
  * name `string`

### WebServiceGroups
* WebServiceGroups `object`: WebServiceGroups
  * links `array`
    * items [Link](#link)
  * webServiceGroups `array`
    * items [WebServiceGroup](#webservicegroup)

### WebServiceMessage
* WebServiceMessage `object`: WebServiceMessage
  * campaign `string`
  * contact [WebServiceContactLink](#webservicecontactlink)
  * creditCost `number`
  * dateTimeReceived `string`
  * dateTimeScheduled `string`
  * dateTimeSent `string`
  * deleted `boolean`
  * fromNumber `string`
  * links `array`
    * items [Link](#link)
  * message `string`
  * messageId `string`
  * messageStatus `string`
  * messageType `string`
  * numberOfMessages `integer`
  * read `boolean`
  * toNumber `string`
  * userDataField `string`

### WebServiceMessages
* WebServiceMessages `object`: WebServiceMessages
  * elements `integer`
  * links `array`
    * items [Link](#link)
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`
  * webServiceMessages `array`
    * items [WebServiceMessage](#webservicemessage)

### WebServiceNumberContextLookupRequest
* WebServiceNumberContextLookupRequest `object`: WebServiceNumberContextLookupRequest
  * links `array`
    * items [Link](#link)
  * numbers `array`
    * items `string`

### WebServiceNumberContextLookupResponse
* WebServiceNumberContextLookupResponse `object`: WebServiceNumberContextLookupResponse
  * links `array`
    * items [Link](#link)
  * number `string`
  * numberValid `boolean`

### WebServiceSendSmsRequest
* WebServiceSendSmsRequest `object`: WebServiceSendSmsRequest
  * campaign `string`
  * dataField `string`
  * dateToSend `string`
  * message `string`
  * recipientNumber `string`

### WebServiceSendSmsRequests
* WebServiceSendSmsRequests `object`: WebServiceSendSmsRequests
  * defaultDateToSend `string`
  * messagesPerMinute `integer`
  * sendSmsRequests `array`
    * items [WebServiceSendSmsRequest](#webservicesendsmsrequest)

### WebServiceSendSmsResponse
* WebServiceSendSmsResponse `object`: WebServiceSendSmsResponse
  * error `string`
  * messageId `string`

### WebServiceSendSmsResponses
* WebServiceSendSmsResponses `object`: WebServiceSendSmsResponses
  * sendSmsResponses `array`
    * items [WebServiceSendSmsResponse](#webservicesendsmsresponse)

### WebServiceTemplate
* WebServiceTemplate `object`: WebServiceTemplate
  * data `string`
  * links `array`
    * items [Link](#link)
  * name `string`
  * templateId `integer`

### WebServiceTemplates
* WebServiceTemplates `object`: WebServiceTemplates
  * links `array`
    * items [Link](#link)
  * webServiceTemplates `array`
    * items [WebServiceTemplate](#webservicetemplate)

### WebServiceTransferCreditsRequest
* WebServiceTransferCreditsRequest `object`: WebServiceTransferCreditsRequest
  * numberOfCreditsToTransfer `integer`
  * transferFromEmailAddress `string`
  * transferToEmailAddress `string`

### WebServiceUser
* WebServiceUser `object`: WebServiceUser
  * company `string`
  * contactNumber `string`
  * creditBalance `number`
  * emailAddress `string`
  * firstName `string`
  * lastName `string`
  * password `string`
  * userId `integer`

### WebServiceUsers
* WebServiceUsers `object`: WebServiceUsers
  * webServiceUserList `array`
    * items [WebServiceUser](#webserviceuser)


