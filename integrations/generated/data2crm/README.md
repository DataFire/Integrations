# @datafire/data2crm

Client library for Data2CRM.API

## Installation and Usage
```bash
npm install --save datafire @datafire/data2crm
```

```js
let datafire = require('datafire');
let data2crm = require('@datafire/data2crm').create();

data2crm.getAccountCollection({}).then(data => {
  console.log(data);
})
```

## Description
<p>Make use of our in-depth documentation to get more information about the various functions of the service. Those willing to explore the mechanics of Data2CRM.API can test it in live regime using the short code samples.</p><p>Select CRM: <span id="docs-select-crm" style="font-weight: bold">Loading... please wait</span></p><p>Here are the API access keys:<br><b>X-API2CRM-USERKEY</b>: <span id="docs-user-key">e2a6379ab878ae7e58119d4ec842bf9c926e05b5</span><br><b>X-API2CRM-CRMKEY</b>: <span id="docs-crm-key">7ae5b17008fb414d84981191cf3b66a476ef8bef</span></p><p id="docs-crm-access">The CRM access details are:<br><b>URL</b>: <a id="docs-crm-url" href="https://login.salesforce.com/" target="_blank">https://login.salesforce.com/</a><br><b>E-mail / Username</b>: <span id="docs-crm-username">developers.data2crm.api+1@magneticone.com</span><br><b>Password</b>: <span id="docs-crm-password">data2crmapi123</span></p>

## Actions
### getAccountCollection
Returns all accounts from the system


```js
data2crm.getAccountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter

### createAccountEntity
Add account into the system


```js
data2crm.createAccountEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getAccountCountCollection
Count all accounts from the system


```js
data2crm.getAccountCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getAccountDescribe
Returns describe for accounts


```js
data2crm.getAccountDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteAccountEntity
Delete account information


```js
data2crm.deleteAccountEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "account_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* account_id (string) **required** - Account Identifier

### getAccountEntity
Return account information


```js
data2crm.getAccountEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "account_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* account_id (string) **required** - Account Identifier

### updateAccountEntity
Update account information


```js
data2crm.updateAccountEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "account_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* account_id (string) **required** - Account Identifier
* body (object) **required**

### getAttachmentCollection
Returns all attachments from the system


```js
data2crm.getAttachmentCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* parent_type (string) - Parent Type
* parent_id (string) - Parent Identifier

### createAttachmentEntity
Add attachment into the system


```js
data2crm.createAttachmentEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getAttachmentCountCollection
Count all attachments from the system


```js
data2crm.getAttachmentCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getAttachmentDescribe
Returns describe for attachments


```js
data2crm.getAttachmentDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteAttachmentEntity
Delete attachment information


```js
data2crm.deleteAttachmentEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "attachment_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* attachment_id (string) **required** - Attachment Identifier

### getAttachmentEntity
Return attachment information


```js
data2crm.getAttachmentEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "attachment_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* attachment_id (string) **required** - Attachment Identifier

### updateAttachmentEntity
Update attachment information


```js
data2crm.updateAttachmentEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "attachment_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* attachment_id (string) **required** - Attachment Identifier
* body (object) **required**

### getCallCollection
Returns all calls from the system


```js
data2crm.getCallCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* parent_type (string) - Parent Type
* parent_id (string) - Parent Identifier

### createCallEntity
Add call into the system


```js
data2crm.createCallEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getCallCountCollection
Count all calls from the system


```js
data2crm.getCallCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getCallDescribe
Returns describe for calls


```js
data2crm.getCallDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteCallEntity
Delete call information


```js
data2crm.deleteCallEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "call_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* call_id (string) **required** - Call Identifier

### getCallEntity
Return call information


```js
data2crm.getCallEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "call_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* call_id (string) **required** - Call Identifier

### updateCallEntity
Update call information


```js
data2crm.updateCallEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "call_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* call_id (string) **required** - Call Identifier
* body (object) **required**

### getContactCollection
Returns all contacts from the system


```js
data2crm.getContactCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter

### createContactEntity
Add contact into the system


```js
data2crm.createContactEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getContactCountCollection
Count all contacts from the system


```js
data2crm.getContactCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getContactDescribe
Returns describe for contacts


```js
data2crm.getContactDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteContactEntity
Delete contact information


```js
data2crm.deleteContactEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "contact_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* contact_id (string) **required** - Contact Identifier

### getContactEntity
Return contact information


```js
data2crm.getContactEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "contact_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* contact_id (string) **required** - Contact Identifier

### updateContactEntity
Update contact information


```js
data2crm.updateContactEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "contact_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* contact_id (string) **required** - Contact Identifier
* body (object) **required**

### getCrmCollection
Returns all CRMs from the system


```js
data2crm.getCrmCollection({
  "X-API2CRM-USERKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* type (string) - Type

### createCrmEntity
Add CRM into the system<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>


```js
data2crm.createCrmEntity({
  "X-API2CRM-USERKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* body (object) **required**

### getCrmCountCollection
Count all CRMs from the system


```js
data2crm.getCrmCountCollection({
  "X-API2CRM-USERKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key

### deleteCrmEntity
Delete CRM information


```js
data2crm.deleteCrmEntity({
  "X-API2CRM-USERKEY": "",
  "crm_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* crm_id (string) **required** - CRM Identifier

### getCrmEntity
Return CRM information


```js
data2crm.getCrmEntity({
  "X-API2CRM-USERKEY": "",
  "crm_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* crm_id (string) **required** - CRM Identifier

### updateCrmEntity
Update CRM information<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>


```js
data2crm.updateCrmEntity({
  "X-API2CRM-USERKEY": "",
  "crm_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* crm_id (string) **required** - CRM Identifier
* body (object) **required**

### getCustomFieldCollection
Returns all custom field from the system


```js
data2crm.getCustomFieldCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* entity (string) - Entity
* label (string) - Label
* name (string) - Name

### createCustomFieldEntity
Add custom field into the system


```js
data2crm.createCustomFieldEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### deleteCustomFieldEntity
Delete custom field information


```js
data2crm.deleteCustomFieldEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "custom_field_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* custom_field_id (string) **required** - Custom Field Identifier

### getCustomFieldEntity
Return custom field information


```js
data2crm.getCustomFieldEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "custom_field_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* custom_field_id (string) **required** - Custom Field Identifier

### updateCustomFieldEntity
Update custom field information


```js
data2crm.updateCustomFieldEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "custom_field_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* custom_field_id (string) **required** - Custom Field Identifier
* body (object) **required**

### getEmailCollection
Returns all emails from the system


```js
data2crm.getEmailCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* parent_type (string) - Parent Type
* parent_id (string) - Parent Identifier

### createEmailEntity
Add email into the system


```js
data2crm.createEmailEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getEmailCountCollection
Count all emails from the system


```js
data2crm.getEmailCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getEmailDescribe
Returns describe for emails


```js
data2crm.getEmailDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteEmailEntity
Delete email information


```js
data2crm.deleteEmailEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "email_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* email_id (string) **required** - Email Identifier

### getEmailEntity
Return email information


```js
data2crm.getEmailEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "email_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* email_id (string) **required** - Email Identifier

### updateEmailEntity
Update email information


```js
data2crm.updateEmailEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "email_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* email_id (string) **required** - Email Identifier
* body (object) **required**

### getEventCollection
Returns all events from the system


```js
data2crm.getEventCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* parent_type (string) - Parent Type
* parent_id (string) - Parent Identifier

### createEventEntity
Add event into the system


```js
data2crm.createEventEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getEventCountCollection
Count all events from the system


```js
data2crm.getEventCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getEventDescribe
Returns describe for events


```js
data2crm.getEventDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteEventEntity
Delete event information


```js
data2crm.deleteEventEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "event_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* event_id (string) **required** - Event Identifier

### getEventEntity
Return event information


```js
data2crm.getEventEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "event_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* event_id (string) **required** - Event Identifier

### updateEventEntity
Update event information


```js
data2crm.updateEventEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "event_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* event_id (string) **required** - Event Identifier
* body (object) **required**

### getLeadCollection
Returns all leads from the system


```js
data2crm.getLeadCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter

### createLeadEntity
Add lead into the system


```js
data2crm.createLeadEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getLeadCountCollection
Count all leads from the system


```js
data2crm.getLeadCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getLeadDescribe
Returns describe for leads


```js
data2crm.getLeadDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteLeadEntity
Delete lead information


```js
data2crm.deleteLeadEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "lead_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* lead_id (string) **required** - Lead Identifier

### getLeadEntity
Return lead information


```js
data2crm.getLeadEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "lead_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* lead_id (string) **required** - Lead Identifier

### updateLeadEntity
Update lead information


```js
data2crm.updateLeadEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "lead_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* lead_id (string) **required** - Lead Identifier
* body (object) **required**

### getMeetingCollection
Returns all meetings from the system


```js
data2crm.getMeetingCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* parent_type (string) - Parent Type
* parent_id (string) - Parent Identifier

### createMeetingEntity
Add meeting into the system


```js
data2crm.createMeetingEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getMeetingCountCollection
Count all meetings from the system


```js
data2crm.getMeetingCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getMeetingDescribe
Returns describe for meetings


```js
data2crm.getMeetingDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteMeetingEntity
Delete meeting information


```js
data2crm.deleteMeetingEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "meeting_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* meeting_id (string) **required** - Meeting Identifier

### getMeetingEntity
Return meeting information


```js
data2crm.getMeetingEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "meeting_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* meeting_id (string) **required** - Meeting Identifier

### updateMeetingEntity
Update meeting information


```js
data2crm.updateMeetingEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "meeting_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* meeting_id (string) **required** - Meeting Identifier
* body (object) **required**

### getNoteCollection
Returns all notes from the system


```js
data2crm.getNoteCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter
* parent_type (string) - Parent Type
* parent_id (string) - Parent Identifier

### createNoteEntity
Add note into the system


```js
data2crm.createNoteEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getNoteCountCollection
Count all notes from the system


```js
data2crm.getNoteCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getNoteDescribe
Returns describe for notes


```js
data2crm.getNoteDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteNoteEntity
Delete note information


```js
data2crm.deleteNoteEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "note_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* note_id (string) **required** - Note Identifier

### getNoteEntity
Return note information


```js
data2crm.getNoteEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "note_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* note_id (string) **required** - Note Identifier

### updateNoteEntity
Update note information


```js
data2crm.updateNoteEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "note_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* note_id (string) **required** - Note Identifier
* body (object) **required**

### getOpportunityCollection
Returns all opportunities from the system


```js
data2crm.getOpportunityCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter

### createOpportunityEntity
Add opportunity into the system


```js
data2crm.createOpportunityEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getOpportunityCountCollection
Count all opportunities from the system


```js
data2crm.getOpportunityCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getOpportunityDescribe
Returns describe for opportunities


```js
data2crm.getOpportunityDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteOpportunityEntity
Delete opportunity information


```js
data2crm.deleteOpportunityEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "opportunity_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* opportunity_id (string) **required** - Opportunity Identifier

### getOpportunityEntity
Return opportunity information


```js
data2crm.getOpportunityEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "opportunity_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* opportunity_id (string) **required** - Opportunity Identifier

### updateOpportunityEntity
Update opportunity information


```js
data2crm.updateOpportunityEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "opportunity_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* opportunity_id (string) **required** - Opportunity Identifier
* body (object) **required**

### getTaskCollection
Returns all tasks from the system


```js
data2crm.getTaskCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter

### createTaskEntity
Add task into the system


```js
data2crm.createTaskEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getTaskCountCollection
Count all tasks from the system


```js
data2crm.getTaskCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getTaskDescribe
Returns describe for tasks


```js
data2crm.getTaskDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteTaskEntity
Delete task information


```js
data2crm.deleteTaskEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "task_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* task_id (string) **required** - Task Identifier

### getTaskEntity
Return task information


```js
data2crm.getTaskEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "task_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* task_id (string) **required** - Task Identifier

### updateTaskEntity
Update task information


```js
data2crm.updateTaskEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "task_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* task_id (string) **required** - Task Identifier
* body (object) **required**

### getUserCollection
Returns all users from the system


```js
data2crm.getUserCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* X-API2CRM-DATA-ENABLE (string) - Data Enable
* limit (integer) - Amount of results (default: 25)
* offset (integer) - Start from record (default: 0)
* filter (string) - Filter

### createUserEntity
Add user into the system


```js
data2crm.createUserEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* body (object) **required**

### getUserCountCollection
Count all users from the system


```js
data2crm.getUserCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### getUserDescribe
Returns describe for users


```js
data2crm.getUserDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key

### deleteUserEntity
Delete user information


```js
data2crm.deleteUserEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "user_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* user_id (string) **required** - User Identifier

### getUserEntity
Return user information


```js
data2crm.getUserEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "user_id": ""
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* user_id (string) **required** - User Identifier

### updateUserEntity
Update user information


```js
data2crm.updateUserEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "user_id": "",
  "body": {}
}, context)
```

#### Parameters
* X-API2CRM-USERKEY (string) **required** - User Key
* X-API2CRM-CRMKEY (string) **required** - CRM Key
* user_id (string) **required** - User Identifier
* body (object) **required**

