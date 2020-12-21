# @datafire/zoomconnect

Client library for www.zoomconnect.com

## Installation and Usage
```bash
npm install --save @datafire/zoomconnect
```
```js
let zoomconnect = require('@datafire/zoomconnect').create({
  email: "",
  token: ""
});

.then(data => {
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

### getStatistics
Returns data from the statistics report. Note that by default the statistics shown are based on the number of messages, use the calculateCreditValue should you wish to calculate the statistics based on credit value.


```js
zoomconnect.getStatistics({}, context)
```

#### Input
* input `object`
  * from `string`: date format: dd-MM-yyyy
  * to `string`: date format: dd-MM-yyyy
  * userEmailAddress `string`: optional email address of user to return statistics for a single user, default is to return statistics for all users if administrator, or statistics for your own account if not an administrator
  * campaign `string`: optional campaign name
  * includeRefundedAndOptout `boolean`: optionally include refunded and optout counts, default is false
  * calculateCreditValue `boolean`: optionally calculate using credit value rather than message count, default is false

#### Output
* output [WebServiceAccountStatistics](#webserviceaccountstatistics)

### transfer
Transfers credits between two users in the same team. The <i>account email address</i> fields as well as the <i>number of credits to transfer</i> are required. 


```js
zoomconnect.transfer({}, context)
```

#### Input
* input `object`
  * body [WebServiceTransferCreditsRequest](#webservicetransfercreditsrequest)

#### Output
* output [WebServiceUser](#webserviceuser)

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
  * repliesToMessageId `string`: return only inbox messages which are a reply to the message with the given message id

#### Output
* output [WebServiceMessages](#webservicemessages)

### messages.analyse.full.post
Returns full analysis of message


```js
zoomconnect.messages.analyse.full.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceAnalyseMessageRequestMessageAndRecipientNumber](#webserviceanalysemessagerequestmessageandrecipientnumber)

#### Output
* output [WebServiceAnalyseMessageResponse](#webserviceanalysemessageresponse)

### messages.analyse.message_credit_cost.post
Returns the number of credit which would be required to send the request message to the requested recipient number


```js
zoomconnect.messages.analyse.message_credit_cost.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceAnalyseMessageRequestMessageAndRecipientNumber](#webserviceanalysemessagerequestmessageandrecipientnumber)

#### Output
* output `number`

### messages.analyse.message_encoding.post
Returns the message encoding that would be required to send the requested message


```js
zoomconnect.messages.analyse.message_encoding.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceAnalyseMessageRequestMessageOnly](#webserviceanalysemessagerequestmessageonly)

#### Output
* output `string`

### messages.analyse.message_length.post
Returns the number of characters the requested message consists of


```js
zoomconnect.messages.analyse.message_length.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceAnalyseMessageRequestMessageOnly](#webserviceanalysemessagerequestmessageonly)

#### Output
* output `integer`

### messages.analyse.message_length_within_max_allowed.post
Returns details for a single message


```js
zoomconnect.messages.analyse.message_length_within_max_allowed.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceAnalyseMessageRequestMessageOnly](#webserviceanalysemessagerequestmessageonly)

#### Output
* output `boolean`

### messages.analyse.number_of_messages.post
Returns the number of SMS parts which would be sent when sending the requested message


```js
zoomconnect.messages.analyse.number_of_messages.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceAnalyseMessageRequestMessageOnly](#webserviceanalysemessagerequestmessageonly)

#### Output
* output `integer`

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

### voice.all.get
Returns all voice messages


```js
zoomconnect.voice.all.get({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: number of elements to return at a time
  * page `integer`: page number
  * status `string` (values: SCHEDULED, UNKNOWN, SENT, FAILED, FAILED_REFUNDED, FAILED_OPTOUT, DELIVERED): filter by message status
  * fromDateTimeSent `string`: date format: yyyyMMdd
  * toDateTimeSent `string`: date format: yyyyMMdd
  * toNumber `string`: phone number the message was sent to
  * message `string`: search matching message text
  * campaign `string`: search by campaign
  * dataField `string`: search by data field
  * deleted `boolean`: return only deleted / not deleted messages

#### Output
* output [WebServiceVoiceMessages](#webservicevoicemessages)

### voice.single_audio.post
Send a single audio voice message to one recipient. Note, Content-Type header must be set to multipart/form-data for this request.


```js
zoomconnect.voice.single_audio.post({
  "file": "",
  "recipientNumber": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`, `object`: audio file to play, supports MP3 or WAV format
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * recipientNumber **required** `string`: the phone number of the recipient to send to
  * campaign `string`: optional campaign name
  * dataField `string`: optional extra data
  * retryCount `integer`: optional number of times to retry unanswered call
  * retryMinimumInterval `integer`: optional minimum interval in minutes between retry attempts
  * retryMaximumInterval `integer`: optional maximum interval in minutes between retry attempts

#### Output
* output [WebServiceSendVoiceMessageResponse](#webservicesendvoicemessageresponse)

### voice.single_text.post
Send a single text voice message to one recipient


```js
zoomconnect.voice.single_text.post({}, context)
```

#### Input
* input `object`
  * body [WebServiceVoiceMessageSendSingleTextRequest](#webservicevoicemessagesendsingletextrequest)

#### Output
* output [WebServiceSendVoiceMessageResponse](#webservicesendvoicemessageresponse)

### voice.messageId.delete
Deletes a  message


```js
zoomconnect.voice.messageId.delete({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
*Output schema unknown*

### voice.messageId.get
Returns details for a single message


```js
zoomconnect.voice.messageId.get({
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * messageId **required** `string`: messageId

#### Output
* output [WebServiceVoiceMessage](#webservicevoicemessage)



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

### WebServiceAccountStatistics
* WebServiceAccountStatistics `object`: WebServiceAccountStatistics
  * from `string`
  * grandTotal [WebServiceStatistics](#webservicestatistics)
  * showingCreditValue `boolean`
  * to `string`
  * users `array`
    * items [WebServiceUserStatistics](#webserviceuserstatistics)

### WebServiceAnalyseMessageRequestMessageAndRecipientNumber
* WebServiceAnalyseMessageRequestMessageAndRecipientNumber `object`: WebServiceAnalyseMessageRequest
  * message `string`
  * recipientNumber `string`

### WebServiceAnalyseMessageRequestMessageOnly
* WebServiceAnalyseMessageRequestMessageOnly `object`: WebServiceAnalyseMessageRequest
  * message `string`
  * recipientNumber `string`

### WebServiceAnalyseMessageResponse
* WebServiceAnalyseMessageResponse `object`: WebServiceAnalyseMessageResponse
  * characterAnalysis `array`
    * items `array`
  * messageCreditCost `number`
  * messageEncoding `string`
  * messageLength `integer`
  * messageLengthWithinMaximumAllowed `boolean`
  * numberOfMessages `integer`

### WebServiceCampaignStatistics
* WebServiceCampaignStatistics `object`: WebServiceCampaignStatistics
  * campaign `string`
  * statistics [WebServiceStatistics](#webservicestatistics)

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
  * repliedToMessage [WebServiceMessageLink](#webservicemessagelink)
  * toNumber `string`
  * userDataField `string`

### WebServiceMessageLink
* WebServiceMessageLink `object`: WebServiceMessageLink
  * links `array`
    * items [Link](#link)
  * messageId `string`

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

### WebServiceSendVoiceMessageResponse
* WebServiceSendVoiceMessageResponse `object`: WebServiceSendVoiceMessageResponse
  * error `string`
  * voiceMessageId `string`

### WebServiceStatistics
* WebServiceStatistics `object`: WebServiceStatistics
  * delivered `number`
  * failed `number`
  * failedOptout `number`
  * failedRefunded `number`
  * sent `number`
  * total `number`

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

### WebServiceUserStatistics
* WebServiceUserStatistics `object`: WebServiceUserStatistics
  * campaigns `array`
    * items [WebServiceCampaignStatistics](#webservicecampaignstatistics)
  * total [WebServiceStatistics](#webservicestatistics)
  * user [WebServiceUser](#webserviceuser)

### WebServiceUsers
* WebServiceUsers `object`: WebServiceUsers
  * webServiceUserList `array`
    * items [WebServiceUser](#webserviceuser)

### WebServiceVoiceMessage
* WebServiceVoiceMessage `object`: WebServiceVoiceMessage
  * audioFileUrl `string`
  * campaign `string`
  * dateTimeSent `string`
  * deleted `boolean`
  * language `string`
  * links `array`
    * items [Link](#link)
  * message `string`
  * messageStatus `string`
  * toNumber `string`
  * userDataField `string`
  * voiceMessageId `string`

### WebServiceVoiceMessageSendSingleTextRequest
* WebServiceVoiceMessageSendSingleTextRequest `object`: WebServiceVoiceMessageSendSingleTextRequest
  * campaign `string`
  * dataField `string`
  * language `string`
  * message `string`
  * recipientNumber `string`
  * retryCount `integer`
  * retryMaximumInterval `integer`
  * retryMinimumInterval `integer`

### WebServiceVoiceMessages
* WebServiceVoiceMessages `object`: WebServiceVoiceMessages
  * elements `integer`
  * links `array`
    * items [Link](#link)
  * messages `array`
    * items [WebServiceVoiceMessage](#webservicevoicemessage)
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`


