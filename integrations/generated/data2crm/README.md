# @datafire/data2crm

Client library for Data2CRM.API

## Installation and Usage
```bash
npm install --save @datafire/data2crm
```
```js
let data2crm = require('@datafire/data2crm').create();

data2crm.getAccountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter

#### Output
* output `array`
  * items [Account](#account)

### createAccountEntity
Add account into the system


```js
data2crm.createAccountEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [AccountCreate](#accountcreate)

#### Output
* output [AccountCreated](#accountcreated)

### getAccountCountCollection
Count all accounts from the system


```js
data2crm.getAccountCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getAccountDescribe
Returns describe for accounts


```js
data2crm.getAccountDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteAccountEntity
Delete account information


```js
data2crm.deleteAccountEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * account_id **required** `string`: Account Identifier

#### Output
*Output schema unknown*

### getAccountEntity
Return account information


```js
data2crm.getAccountEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * account_id **required** `string`: Account Identifier

#### Output
* output [Account](#account)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * account_id **required** `string`: Account Identifier
  * body **required** [AccountUpdate](#accountupdate)

#### Output
* output [AccountUpdated](#accountupdated)

### getAttachmentCollection
Returns all attachments from the system


```js
data2crm.getAttachmentCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * parent_type `string` (values: account, contact, lead, task, user, opportunity, note): Parent Type
  * parent_id `string`: Parent Identifier

#### Output
* output `array`
  * items [Attachment](#attachment)

### createAttachmentEntity
Add attachment into the system


```js
data2crm.createAttachmentEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [AttachmentCreate](#attachmentcreate)

#### Output
* output [AttachmentCreated](#attachmentcreated)

### getAttachmentCountCollection
Count all attachments from the system


```js
data2crm.getAttachmentCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getAttachmentDescribe
Returns describe for attachments


```js
data2crm.getAttachmentDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteAttachmentEntity
Delete attachment information


```js
data2crm.deleteAttachmentEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "attachment_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * attachment_id **required** `string`: Attachment Identifier

#### Output
*Output schema unknown*

### getAttachmentEntity
Return attachment information


```js
data2crm.getAttachmentEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "attachment_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * attachment_id **required** `string`: Attachment Identifier

#### Output
* output [Attachment](#attachment)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * attachment_id **required** `string`: Attachment Identifier
  * body **required** [AttachmentUpdate](#attachmentupdate)

#### Output
* output [AttachmentUpdated](#attachmentupdated)

### getCallCollection
Returns all calls from the system


```js
data2crm.getCallCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type
  * parent_id `string`: Parent Identifier

#### Output
* output `array`
  * items [Call](#call)

### createCallEntity
Add call into the system


```js
data2crm.createCallEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [CallCreate](#callcreate)

#### Output
* output [CallCreated](#callcreated)

### getCallCountCollection
Count all calls from the system


```js
data2crm.getCallCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getCallDescribe
Returns describe for calls


```js
data2crm.getCallDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteCallEntity
Delete call information


```js
data2crm.deleteCallEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "call_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * call_id **required** `string`: Call Identifier

#### Output
*Output schema unknown*

### getCallEntity
Return call information


```js
data2crm.getCallEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "call_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * call_id **required** `string`: Call Identifier

#### Output
* output [Call](#call)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * call_id **required** `string`: Call Identifier
  * body **required** [CallUpdate](#callupdate)

#### Output
* output [CallUpdated](#callupdated)

### getContactCollection
Returns all contacts from the system


```js
data2crm.getContactCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter

#### Output
* output `array`
  * items [Contact](#contact)

### createContactEntity
Add contact into the system


```js
data2crm.createContactEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [ContactCreate](#contactcreate)

#### Output
* output [ContactCreated](#contactcreated)

### getContactCountCollection
Count all contacts from the system


```js
data2crm.getContactCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getContactDescribe
Returns describe for contacts


```js
data2crm.getContactDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteContactEntity
Delete contact information


```js
data2crm.deleteContactEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "contact_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * contact_id **required** `string`: Contact Identifier

#### Output
*Output schema unknown*

### getContactEntity
Return contact information


```js
data2crm.getContactEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "contact_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * contact_id **required** `string`: Contact Identifier

#### Output
* output [Contact](#contact)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * contact_id **required** `string`: Contact Identifier
  * body **required** [ContactUpdate](#contactupdate)

#### Output
* output [ContactUpdated](#contactupdated)

### getCrmCollection
Returns all CRMs from the system


```js
data2crm.getCrmCollection({
  "X-API2CRM-USERKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * type `string` (values: Bitrix24, SugarCRM, SuiteCRM, BPMOnline, HubSpot, vtiger, OroCRM, ZohoCRM, Insightly, Salesforce, Solve360CRM, HighriseHQ, PipelineDeals, Pipedrive, CapsuleCRM, Zurmo, MicrosoftDynamics): Type

#### Output
* output `array`
  * items [Crm](#crm)

### createCrmEntity
Add CRM into the system<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>


```js
data2crm.createCrmEntity({
  "X-API2CRM-USERKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * body **required** [CrmCreate](#crmcreate)

#### Output
* output [CrmCreated](#crmcreated)

### getCrmCountCollection
Count all CRMs from the system


```js
data2crm.getCrmCountCollection({
  "X-API2CRM-USERKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key

#### Output
* output [Count](#count)

### deleteCrmEntity
Delete CRM information


```js
data2crm.deleteCrmEntity({
  "X-API2CRM-USERKEY": "",
  "crm_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * crm_id **required** `string`: CRM Identifier

#### Output
*Output schema unknown*

### getCrmEntity
Return CRM information


```js
data2crm.getCrmEntity({
  "X-API2CRM-USERKEY": "",
  "crm_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * crm_id **required** `string`: CRM Identifier

#### Output
* output [Crm](#crm)

### updateCrmEntity
Update CRM information<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>


```js
data2crm.updateCrmEntity({
  "X-API2CRM-USERKEY": "",
  "crm_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * crm_id **required** `string`: CRM Identifier
  * body **required** [CrmUpdate](#crmupdate)

#### Output
* output [CrmUpdated](#crmupdated)

### getCustomFieldCollection
Returns all custom field from the system


```js
data2crm.getCustomFieldCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * entity `string` (values: account, contact, user, opportunity, task, lead, note, attachment, event, email, call, meeting): Entity
  * label `string`: Label
  * name `string`: Name

#### Output
* output `array`
  * items [CustomField](#customfield)

### createCustomFieldEntity
Add custom field into the system


```js
data2crm.createCustomFieldEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [CustomFieldCreate](#customfieldcreate)

#### Output
* output [CustomFieldCreated](#customfieldcreated)

### deleteCustomFieldEntity
Delete custom field information


```js
data2crm.deleteCustomFieldEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "custom_field_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * custom_field_id **required** `string`: Custom Field Identifier

#### Output
*Output schema unknown*

### getCustomFieldEntity
Return custom field information


```js
data2crm.getCustomFieldEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "custom_field_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * custom_field_id **required** `string`: Custom Field Identifier

#### Output
* output [CustomField](#customfield)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * custom_field_id **required** `string`: Custom Field Identifier
  * body **required** [CustomFieldUpdate](#customfieldupdate)

#### Output
* output [CustomFieldUpdated](#customfieldupdated)

### getEmailCollection
Returns all emails from the system


```js
data2crm.getEmailCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * parent_type `string` (values: account, opportunity, contact, lead, user, task): Parent Type
  * parent_id `string`: Parent Identifier

#### Output
* output `array`
  * items [Email](#email)

### createEmailEntity
Add email into the system


```js
data2crm.createEmailEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [EmailCreate](#emailcreate)

#### Output
* output [EmailCreated](#emailcreated)

### getEmailCountCollection
Count all emails from the system


```js
data2crm.getEmailCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getEmailDescribe
Returns describe for emails


```js
data2crm.getEmailDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteEmailEntity
Delete email information


```js
data2crm.deleteEmailEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * email_id **required** `string`: Email Identifier

#### Output
*Output schema unknown*

### getEmailEntity
Return email information


```js
data2crm.getEmailEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * email_id **required** `string`: Email Identifier

#### Output
* output [Email](#email)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * email_id **required** `string`: Email Identifier
  * body **required** [EmailUpdate](#emailupdate)

#### Output
* output [EmailUpdated](#emailupdated)

### getEventCollection
Returns all events from the system


```js
data2crm.getEventCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type
  * parent_id `string`: Parent Identifier

#### Output
* output `array`
  * items [Event](#event)

### createEventEntity
Add event into the system


```js
data2crm.createEventEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [EventCreate](#eventcreate)

#### Output
* output [EventCreated](#eventcreated)

### getEventCountCollection
Count all events from the system


```js
data2crm.getEventCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getEventDescribe
Returns describe for events


```js
data2crm.getEventDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteEventEntity
Delete event information


```js
data2crm.deleteEventEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * event_id **required** `string`: Event Identifier

#### Output
*Output schema unknown*

### getEventEntity
Return event information


```js
data2crm.getEventEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * event_id **required** `string`: Event Identifier

#### Output
* output [Event](#event)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * event_id **required** `string`: Event Identifier
  * body **required** [EventUpdate](#eventupdate)

#### Output
* output [EventUpdated](#eventupdated)

### getLeadCollection
Returns all leads from the system


```js
data2crm.getLeadCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter

#### Output
* output `array`
  * items [Lead](#lead)

### createLeadEntity
Add lead into the system


```js
data2crm.createLeadEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [LeadCreate](#leadcreate)

#### Output
* output [LeadCreated](#leadcreated)

### getLeadCountCollection
Count all leads from the system


```js
data2crm.getLeadCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getLeadDescribe
Returns describe for leads


```js
data2crm.getLeadDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteLeadEntity
Delete lead information


```js
data2crm.deleteLeadEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "lead_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * lead_id **required** `string`: Lead Identifier

#### Output
*Output schema unknown*

### getLeadEntity
Return lead information


```js
data2crm.getLeadEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "lead_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * lead_id **required** `string`: Lead Identifier

#### Output
* output [Lead](#lead)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * lead_id **required** `string`: Lead Identifier
  * body **required** [LeadUpdate](#leadupdate)

#### Output
* output [LeadUpdated](#leadupdated)

### getMeetingCollection
Returns all meetings from the system


```js
data2crm.getMeetingCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * parent_type `string` (values: account, contact, lead, opportunity, user): Parent Type
  * parent_id `string`: Parent Identifier

#### Output
* output `array`
  * items [Meeting](#meeting)

### createMeetingEntity
Add meeting into the system


```js
data2crm.createMeetingEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [MeetingCreate](#meetingcreate)

#### Output
* output [MeetingCreated](#meetingcreated)

### getMeetingCountCollection
Count all meetings from the system


```js
data2crm.getMeetingCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getMeetingDescribe
Returns describe for meetings


```js
data2crm.getMeetingDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteMeetingEntity
Delete meeting information


```js
data2crm.deleteMeetingEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "meeting_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * meeting_id **required** `string`: Meeting Identifier

#### Output
*Output schema unknown*

### getMeetingEntity
Return meeting information


```js
data2crm.getMeetingEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "meeting_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * meeting_id **required** `string`: Meeting Identifier

#### Output
* output [Meeting](#meeting)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * meeting_id **required** `string`: Meeting Identifier
  * body **required** [MeetingUpdate](#meetingupdate)

#### Output
* output [MeetingUpdated](#meetingupdated)

### getNoteCollection
Returns all notes from the system


```js
data2crm.getNoteCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter
  * parent_type `string` (values: account, contact, lead, task, user, opportunity, event): Parent Type
  * parent_id `string`: Parent Identifier

#### Output
* output `array`
  * items [Note](#note)

### createNoteEntity
Add note into the system


```js
data2crm.createNoteEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [NoteCreate](#notecreate)

#### Output
* output [NoteCreated](#notecreated)

### getNoteCountCollection
Count all notes from the system


```js
data2crm.getNoteCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getNoteDescribe
Returns describe for notes


```js
data2crm.getNoteDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteNoteEntity
Delete note information


```js
data2crm.deleteNoteEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * note_id **required** `string`: Note Identifier

#### Output
*Output schema unknown*

### getNoteEntity
Return note information


```js
data2crm.getNoteEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * note_id **required** `string`: Note Identifier

#### Output
* output [Note](#note)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * note_id **required** `string`: Note Identifier
  * body **required** [NoteUpdate](#noteupdate)

#### Output
* output [NoteUpdated](#noteupdated)

### getOpportunityCollection
Returns all opportunities from the system


```js
data2crm.getOpportunityCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter

#### Output
* output `array`
  * items [Opportunity](#opportunity)

### createOpportunityEntity
Add opportunity into the system


```js
data2crm.createOpportunityEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [OpportunityCreate](#opportunitycreate)

#### Output
* output [OpportunityCreated](#opportunitycreated)

### getOpportunityCountCollection
Count all opportunities from the system


```js
data2crm.getOpportunityCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getOpportunityDescribe
Returns describe for opportunities


```js
data2crm.getOpportunityDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteOpportunityEntity
Delete opportunity information


```js
data2crm.deleteOpportunityEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "opportunity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * opportunity_id **required** `string`: Opportunity Identifier

#### Output
*Output schema unknown*

### getOpportunityEntity
Return opportunity information


```js
data2crm.getOpportunityEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "opportunity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * opportunity_id **required** `string`: Opportunity Identifier

#### Output
* output [Opportunity](#opportunity)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * opportunity_id **required** `string`: Opportunity Identifier
  * body **required** [OpportunityUpdate](#opportunityupdate)

#### Output
* output [OpportunityUpdated](#opportunityupdated)

### getTaskCollection
Returns all tasks from the system


```js
data2crm.getTaskCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter

#### Output
* output `array`
  * items [Task](#task)

### createTaskEntity
Add task into the system


```js
data2crm.createTaskEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [TaskCreate](#taskcreate)

#### Output
* output [TaskCreated](#taskcreated)

### getTaskCountCollection
Count all tasks from the system


```js
data2crm.getTaskCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getTaskDescribe
Returns describe for tasks


```js
data2crm.getTaskDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteTaskEntity
Delete task information


```js
data2crm.deleteTaskEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * task_id **required** `string`: Task Identifier

#### Output
*Output schema unknown*

### getTaskEntity
Return task information


```js
data2crm.getTaskEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * task_id **required** `string`: Task Identifier

#### Output
* output [Task](#task)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * task_id **required** `string`: Task Identifier
  * body **required** [TaskUpdate](#taskupdate)

#### Output
* output [TaskUpdated](#taskupdated)

### getUserCollection
Returns all users from the system


```js
data2crm.getUserCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * limit `integer`: Amount of results (default: 25)
  * offset `integer`: Start from record (default: 0)
  * filter `string`: Filter

#### Output
* output `array`
  * items [User](#user)

### createUserEntity
Add user into the system


```js
data2crm.createUserEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * body **required** [UserCreate](#usercreate)

#### Output
* output [UserCreated](#usercreated)

### getUserCountCollection
Count all users from the system


```js
data2crm.getUserCountCollection({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Count](#count)

### getUserDescribe
Returns describe for users


```js
data2crm.getUserDescribe({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key

#### Output
* output [Describe](#describe)

### deleteUserEntity
Delete user information


```js
data2crm.deleteUserEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * user_id **required** `string`: User Identifier

#### Output
*Output schema unknown*

### getUserEntity
Return user information


```js
data2crm.getUserEntity({
  "X-API2CRM-USERKEY": "",
  "X-API2CRM-CRMKEY": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * user_id **required** `string`: User Identifier

#### Output
* output [User](#user)

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

#### Input
* input `object`
  * X-API2CRM-USERKEY **required** `string`: User Key
  * X-API2CRM-CRMKEY **required** `string`: CRM Key
  * user_id **required** `string`: User Identifier
  * body **required** [UserUpdate](#userupdate)

#### Output
* output [UserUpdated](#userupdated)



## Definitions

### Account
* Account `object`
  * embedded `object`
    * account_category `string`: Category
    * address_type `string`: Address Type
    * annual_revenue `number`: Annual Revenue
    * billing_city `string`: Billing City
    * billing_country `string`: Billing Country
    * billing_state `string`: Billing State
    * billing_street `string`: Billing Street
    * billing_zip `string`: Billing Zip
    * created_at `string`: Created At
    * description `string`: Description
    * email `string`: Email
    * email_alt `string`: Email Alternative
    * employees `integer`: Employees
    * facebook `string`: Facebook
    * fax `string`: Fax
    * industry `string` (values: Informational Technology, Telecommunications, Manufacturing, Banking, Consulting, Finance, Government, Delivery, Non-Profit, Entertainment, Biotechnology, Chemicals, Communications, Construction, Education, Electronics, Energy, Engineering, Environmental, Health care, Hospitality, Machinery, Media, Recreation, Retail, Transportation, Utilities, Other): Industry
    * livejournal `string`: Livejournal
    * name `string`: Name
    * owner `string`: Owner
    * ownership `string`: Ownership
    * phone `string`: Phone
    * phone_alt `string`: Phone Alternative
    * rating `string`: Rating
    * shipping_city `string`: Shipping City
    * shipping_country `string`: Shipping Country
    * shipping_state `string`: Shipping State
    * shipping_street `string`: Shipping Street
    * shipping_zip `string`: Shipping Zip Code
    * sic_code `string`: SIC Code
    * tickersymbol `string`: Ticker Symbol
    * twitter `string`: Twitter
    * type `string`: Type
    * updated_at `string`: Updated At
    * website `string`: Website
    * website_alt `string`: Website Alternative
  * id `string`: Account Identifier
  * relation `object`
    * owner_id `string`: Owner Identifier
    * parent_id `string`: Parent Identifier

### AccountCreate
* AccountCreate `object`
  * account_category `string`: Category
  * address_type `string`: Address Type
  * annual_revenue `number`: Annual Revenue
  * billing_city `string`: Billing City
  * billing_country `string`: Billing Country
  * billing_state `string`: Billing State
  * billing_street `string`: Billing Street
  * billing_zip `string`: Billing Zip
  * created_at `string`: Created At
  * description `string`: Description
  * email `string`: Email
  * email_alt `string`: Email Alternative
  * employees `integer`: Employees
  * facebook `string`: Facebook
  * fax `string`: Fax
  * industry `string` (values: Informational Technology, Telecommunications, Manufacturing, Banking, Consulting, Finance, Government, Delivery, Non-Profit, Entertainment, Biotechnology, Chemicals, Communications, Construction, Education, Electronics, Energy, Engineering, Environmental, Health care, Hospitality, Machinery, Media, Recreation, Retail, Transportation, Utilities, Other): Industry
  * livejournal `string`: Livejournal
  * name `string`: Name
  * owner `string`: Owner
  * owner_id `string`: Owner Identifier
  * ownership `string`: Ownership
  * parent_id `string`: Parent Identifier
  * phone `string`: Phone
  * phone_alt `string`: Phone Alternative
  * rating `string`: Rating
  * shipping_city `string`: Shipping City
  * shipping_country `string`: Shipping Country
  * shipping_state `string`: Shipping State
  * shipping_street `string`: Shipping Street
  * shipping_zip `string`: Shipping Zip Code
  * sic_code `string`: SIC Code
  * tickersymbol `string`: Ticker Symbol
  * twitter `string`: Twitter
  * type `string`: Type
  * updated_at `string`: Updated At
  * website `string`: Website
  * website_alt `string`: Website Alternative

### AccountCreated
* AccountCreated `object`
  * id `string`: Account Identifier

### AccountUpdate
* AccountUpdate `object`
  * account_category `string`: Category
  * address_type `string`: Address Type
  * annual_revenue `number`: Annual Revenue
  * billing_city `string`: Billing City
  * billing_country `string`: Billing Country
  * billing_state `string`: Billing State
  * billing_street `string`: Billing Street
  * billing_zip `string`: Billing Zip
  * created_at `string`: Created At
  * description `string`: Description
  * email `string`: Email
  * email_alt `string`: Email Alternative
  * employees `integer`: Employees
  * facebook `string`: Facebook
  * fax `string`: Fax
  * industry `string` (values: Informational Technology, Telecommunications, Manufacturing, Banking, Consulting, Finance, Government, Delivery, Non-Profit, Entertainment, Biotechnology, Chemicals, Communications, Construction, Education, Electronics, Energy, Engineering, Environmental, Health care, Hospitality, Machinery, Media, Recreation, Retail, Transportation, Utilities, Other): Industry
  * livejournal `string`: Livejournal
  * name `string`: Name
  * owner `string`: Owner
  * owner_id `string`: Owner Identifier
  * ownership `string`: Ownership
  * parent_id `string`: Parent Identifier
  * phone `string`: Phone
  * phone_alt `string`: Phone Alternative
  * rating `string`: Rating
  * shipping_city `string`: Shipping City
  * shipping_country `string`: Shipping Country
  * shipping_state `string`: Shipping State
  * shipping_street `string`: Shipping Street
  * shipping_zip `string`: Shipping Zip Code
  * sic_code `string`: SIC Code
  * tickersymbol `string`: Ticker Symbol
  * twitter `string`: Twitter
  * type `string`: Type
  * updated_at `string`: Updated At
  * website `string`: Website
  * website_alt `string`: Website Alternative

### AccountUpdated
* AccountUpdated `object`
  * id `string`: Account Identifier

### Attachment
* Attachment `object`
  * embedded `object`
    * contact_name `string`: Contact Name
    * created_at `string`: Created At
    * description `string`: Description
    * link `string`: Link
    * mime_type `string`: Mime Type
    * name `string`: Name
    * owner_user_name `string`: Owner User Name
    * parent_name `string`: Parent Name
    * size `integer`: Size (in bytes)
    * updated_at `string`: Updated At
  * id `string`: Note Identifier
  * relation `object`
    * owner_user_id `string`: Owner User Identifier
    * parent_id `string`: Parent Identifier
    * parent_type `string` (values: account, contact, lead, task, user, opportunity, note): Parent Type

### AttachmentCreate
* AttachmentCreate `object`
  * contact_name `string`: Contact Name
  * created_at `string`: Created At
  * description `string`: Description
  * link `string`: Link
  * mime_type `string`: Mime Type
  * name `string`: Name
  * owner_user_id `string`: Owner User Identifier
  * owner_user_name `string`: Owner User Name
  * parent_id `string`: Parent Identifier
  * parent_name `string`: Parent Name
  * parent_type `string` (values: account, contact, lead, task, user, opportunity, note): Parent Type
  * size `integer`: Size (in bytes)
  * updated_at `string`: Updated At

### AttachmentCreated
* AttachmentCreated `object`
  * id `string`: Note Identifier

### AttachmentUpdate
* AttachmentUpdate `object`
  * contact_name `string`: Contact Name
  * created_at `string`: Created At
  * description `string`: Description
  * link `string`: Link
  * mime_type `string`: Mime Type
  * name `string`: Name
  * owner_user_id `string`: Owner User Identifier
  * owner_user_name `string`: Owner User Name
  * parent_id `string`: Parent Identifier
  * parent_name `string`: Parent Name
  * parent_type `string` (values: account, contact, lead, task, user, opportunity, note): Parent Type
  * size `integer`: Size (in bytes)
  * updated_at `string`: Updated At

### AttachmentUpdated
* AttachmentUpdated `object`
  * id `string`: Note Identifier

### Call
* Call `object`
  * embedded `object`
    * created_at `string`: Created At
    * description `string`: Description
    * direction `string` (values: Inbound, Outbound): Direction
    * ended_at `string`: Ended At
    * purpose `string` (values: None, Prospecting, Administrative, Negotiation, Demo, Project, Support): Purpose
    * result `string`: Result
    * started_at `string`: Started At
    * status `string` (values: Planned, Held, Not Held): Status
    * subject `string`: Subject
    * updated_at `string`: Updated At
  * id `string`: Call Identifier
  * relation `object`
    * contact_id `string`: Contact Identifier
    * owner_user_id `string`: Owner User Identifier
    * parent_id `string`: Parent Identifier
    * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type

### CallCreate
* CallCreate `object`
  * contact_id `string`: Contact Identifier
  * created_at `string`: Created At
  * description `string`: Description
  * direction `string` (values: Inbound, Outbound): Direction
  * ended_at `string`: Ended At
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type
  * purpose `string` (values: None, Prospecting, Administrative, Negotiation, Demo, Project, Support): Purpose
  * result `string`: Result
  * started_at `string`: Started At
  * status `string` (values: Planned, Held, Not Held): Status
  * subject `string`: Subject
  * updated_at `string`: Updated At

### CallCreated
* CallCreated `object`
  * id `string`: Call Identifier

### CallUpdate
* CallUpdate `object`
  * contact_id `string`: Contact Identifier
  * created_at `string`: Created At
  * description `string`: Description
  * direction `string` (values: Inbound, Outbound): Direction
  * ended_at `string`: Ended At
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type
  * purpose `string` (values: None, Prospecting, Administrative, Negotiation, Demo, Project, Support): Purpose
  * result `string`: Result
  * started_at `string`: Started At
  * status `string` (values: Planned, Held, Not Held): Status
  * subject `string`: Subject
  * updated_at `string`: Updated At

### CallUpdated
* CallUpdated `object`
  * id `string`: Call Identifier

### Contact
* Contact `object`
  * embedded `object`
    * account_name `string`: Account Name
    * address_city `string`: Address City
    * address_country `string`: Address Country
    * address_state `string`: Address State
    * address_street `string`: Address Street
    * address_zip `string`: Address Zip
    * alternate_address_city `string`: Alternative Address City
    * alternate_address_country `string`: Alternative Address Country
    * alternate_address_state `string`: Alternative Address State
    * alternate_address_street `string`: Alternative Address Street
    * alternate_address_zip `string`: Alternative Address Zip Code
    * created_at `string`: Created At
    * date_created `string`: Date Created
    * date_updated `string`: Date Updated
    * department `string`: Department
    * description `string`: Description
    * do_not_call `boolean`: Do Not Call
    * email `string`: Email
    * email_alt `string`: Email Alternative
    * fax `string`: Fax
    * first_name `string`: First Name
    * full_name `string`: Full Name
    * last_name `string`: Last Name
    * lead_source `string` (values: Personal Contact, Existing Customer, Call, Website, Email, Conference, Trade Show, Employee, Campaign, HR, Inbound Call, Mail, Partner, Word of mouth, Self Generated, Other): Lead Source
    * name `string`: Name
    * phone_home `string`: Phone Home
    * phone_mobile `string`: Phone Mobile
    * phone_work `string`: Phone Work
    * salutation `string`: Salutation
    * sync_to_outlook `boolean`: Sync To Outlook
    * title `string`: Title
    * type `string`: Type
    * updated_at `string`: Updated At
    * user `string`: User
  * id `string`: Contact Identifier
  * relation `object`
    * account_id `string`: Account Identifier
    * owner_id `string`: Owner Identifier
    * report_to_id `string`: Report To Identifier
    * user_id `string`: User Identifier

### ContactCreate
* ContactCreate `object`
  * account_id `string`: Account Identifier
  * address_city `string`: Address City
  * address_country `string`: Address Country
  * address_state `string`: Address State
  * address_street `string`: Address Street
  * address_zip `string`: Address Zip
  * alternate_address_city `string`: Alternative Address City
  * alternate_address_country `string`: Alternative Address Country
  * alternate_address_state `string`: Alternative Address State
  * alternate_address_street `string`: Alternative Address Street
  * alternate_address_zip `string`: Alternative Address Zip Code
  * created_at `string`: Created At
  * date_created `string`: Date Created
  * date_updated `string`: Date Updated
  * department `string`: Department
  * description `string`: Description
  * do_not_call `boolean`: Do Not Call
  * email `string`: Email
  * email_alt `string`: Email Alternative
  * fax `string`: Fax
  * first_name `string`: First Name
  * full_name `string`: Full Name
  * last_name `string`: Last Name
  * lead_source `string` (values: Personal Contact, Existing Customer, Call, Website, Email, Conference, Trade Show, Employee, Campaign, HR, Inbound Call, Mail, Partner, Word of mouth, Self Generated, Other): Lead Source
  * name `string`: Name
  * owner_id `string`: Owner Identifier
  * phone_home `string`: Phone Home
  * phone_mobile `string`: Phone Mobile
  * phone_work `string`: Phone Work
  * report_to_id `string`: Report To Identifier
  * salutation `string`: Salutation
  * sync_to_outlook `boolean`: Sync To Outlook
  * title `string`: Title
  * type `string`: Type
  * updated_at `string`: Updated At
  * user `string`: User
  * user_id `string`: User Identifier

### ContactCreated
* ContactCreated `object`
  * id `string`: Contact Identifier

### ContactUpdate
* ContactUpdate `object`
  * account_id `string`: Account Identifier
  * address_city `string`: Address City
  * address_country `string`: Address Country
  * address_state `string`: Address State
  * address_street `string`: Address Street
  * address_zip `string`: Address Zip
  * alternate_address_city `string`: Alternative Address City
  * alternate_address_country `string`: Alternative Address Country
  * alternate_address_state `string`: Alternative Address State
  * alternate_address_street `string`: Alternative Address Street
  * alternate_address_zip `string`: Alternative Address Zip Code
  * created_at `string`: Created At
  * date_created `string`: Date Created
  * date_updated `string`: Date Updated
  * department `string`: Department
  * description `string`: Description
  * do_not_call `boolean`: Do Not Call
  * email `string`: Email
  * email_alt `string`: Email Alternative
  * fax `string`: Fax
  * first_name `string`: First Name
  * full_name `string`: Full Name
  * last_name `string`: Last Name
  * lead_source `string` (values: Personal Contact, Existing Customer, Call, Website, Email, Conference, Trade Show, Employee, Campaign, HR, Inbound Call, Mail, Partner, Word of mouth, Self Generated, Other): Lead Source
  * name `string`: Name
  * owner_id `string`: Owner Identifier
  * phone_home `string`: Phone Home
  * phone_mobile `string`: Phone Mobile
  * phone_work `string`: Phone Work
  * report_to_id `string`: Report To Identifier
  * salutation `string`: Salutation
  * sync_to_outlook `boolean`: Sync To Outlook
  * title `string`: Title
  * type `string`: Type
  * updated_at `string`: Updated At
  * user `string`: User
  * user_id `string`: User Identifier

### ContactUpdated
* ContactUpdated `object`
  * id `string`: Contact Identifier

### Count
* Count `object`
  * total `integer`: Total

### Crm
* Crm `object`
  * api_url `string`: API URL
  * id `string`: CRM Identifier
  * type `string` (values: Bitrix24, SugarCRM, SuiteCRM, BPMOnline, HubSpot, vtiger, OroCRM, ZohoCRM, Insightly, Salesforce, Solve360CRM, HighriseHQ, PipelineDeals, Pipedrive, CapsuleCRM, Zurmo, MicrosoftDynamics): Type

### CrmCreate
* CrmCreate `object`
  * api_url `string`: API URL
  * login `string`: Login
  * password `string`: Password
  * type `string` (values: Bitrix24, SugarCRM, SuiteCRM, BPMOnline, HubSpot, vtiger, OroCRM, ZohoCRM, Insightly, Salesforce, Solve360CRM, HighriseHQ, PipelineDeals, Pipedrive, CapsuleCRM, Zurmo, MicrosoftDynamics): Type

### CrmCreated
* CrmCreated `object`
  * id `string`: CRM Identifier

### CrmUpdate
* CrmUpdate `object`
  * api_url `string`: API URL
  * login `string`: Login
  * password `string`: Password
  * type `string` (values: Bitrix24, SugarCRM, SuiteCRM, BPMOnline, HubSpot, vtiger, OroCRM, ZohoCRM, Insightly, Salesforce, Solve360CRM, HighriseHQ, PipelineDeals, Pipedrive, CapsuleCRM, Zurmo, MicrosoftDynamics): Type

### CrmUpdated
* CrmUpdated `object`
  * id `string`: CRM Identifier

### CustomField
* CustomField `object`
  * embedded `object`
    * decimal_places `integer`: Decimal Places
    * default_value `string`: Default Value
    * description `string`: Description
    * entity `string` (values: account, contact, user, opportunity, task, lead, note, attachment, event, email, call, meeting): Entity
    * label `string`: Label
    * length `integer`: Length
    * name `string`: Name
    * required `boolean`: Required
    * select `array`: Select Pairs for field with type "select"
      * items [Select](#select)
    * type `string` (values: string, integer, decimal, boolean, date, time, datetime, checkbox, radio, select): Type
  * id `string`: Custom Field Identifier

### CustomFieldCreate
* CustomFieldCreate `object`
  * decimal_places `integer`: Decimal Places
  * default_value `string`: Default Value
  * description `string`: Description
  * entity `string` (values: account, contact, user, opportunity, task, lead, note, attachment, event, email, call, meeting): Entity
  * label `string`: Label
  * length `integer`: Length
  * name `string`: Name
  * required `boolean`: Required
  * select `array`: Select Pairs for field with type "select"
    * items [SelectCreated](#selectcreated)
  * type `string` (values: string, integer, decimal, boolean, date, time, datetime, checkbox, radio, select): Type

### CustomFieldCreated
* CustomFieldCreated `object`
  * id `string`: Custom Field Identifier

### CustomFieldUpdate
* CustomFieldUpdate `object`
  * decimal_places `integer`: Decimal Places
  * default_value `string`: Default Value
  * description `string`: Description
  * entity `string` (values: account, contact, user, opportunity, task, lead, note, attachment, event, email, call, meeting): Entity
  * label `string`: Label
  * length `integer`: Length
  * name `string`: Name
  * required `boolean`: Required
  * select `array`: Select Pairs for field with type "select"
    * items [SelectUpdated](#selectupdated)
  * type `string` (values: string, integer, decimal, boolean, date, time, datetime, checkbox, radio, select): Type

### CustomFieldUpdated
* CustomFieldUpdated `object`
  * id `string`: Custom Field Identifier

### Describe
* Describe `object`
  * entity `string`: Entity
  * schema `object`: Schema
    * create `object`: Create a resource request body schema
    * fetch `object`: Fetch a resource response body schema
    * fetchAll `object`: Fetch all or a subset of resources body response
    * update `object`: Update a resource request body schema

### Email
* Email `object`
  * embedded `object`
    * bcc `string`: BCC
    * body `string`: Body
    * cc `string`: CC
    * created_at `string`: Created At
    * direction `string` (values: Inbound, Outbound): Direction
    * from `string`: From
    * sent_at `string`: Sent At
    * status `string` (values: Draft, Pending, Sent): Status
    * subject `string`: Subject
    * to `string`: To
    * updated_at `string`: Updated At
  * id `string`: Email Identifier
  * relation `object`
    * owner_user_id `string`: Owner User Identifier
    * parent_id `string`: Parent Identifier
    * parent_type `string` (values: account, opportunity, contact, lead, user, task): Parent Type

### EmailCreate
* EmailCreate `object`
  * bcc `string`: BCC
  * body `string`: Body
  * cc `string`: CC
  * created_at `string`: Created At
  * direction `string` (values: Inbound, Outbound): Direction
  * from `string`: From
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, opportunity, contact, lead, user, task): Parent Type
  * sent_at `string`: Sent At
  * status `string` (values: Draft, Pending, Sent): Status
  * subject `string`: Subject
  * to `string`: To
  * updated_at `string`: Updated At

### EmailCreated
* EmailCreated `object`
  * id `string`: Email Identifier

### EmailUpdate
* EmailUpdate `object`
  * bcc `string`: BCC
  * body `string`: Body
  * cc `string`: CC
  * created_at `string`: Created At
  * direction `string` (values: Inbound, Outbound): Direction
  * from `string`: From
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, opportunity, contact, lead, user, task): Parent Type
  * sent_at `string`: Sent At
  * status `string` (values: Draft, Pending, Sent): Status
  * subject `string`: Subject
  * to `string`: To
  * updated_at `string`: Updated At

### EmailUpdated
* EmailUpdated `object`
  * id `string`: Email Identifier

### Event
* Event `object`
  * embedded `object`
    * access `string` (values: Public, Private, Other): Access
    * created_at `string`: Created At
    * description `string`: Description
    * ended_at `string`: Ended At
    * is_all_day `boolean`: Is All Day
    * location `string`: Location
    * started_at `string`: Started At
    * subject `string`: Subject
    * updated_at `string`: Updated At
  * id `string`: Event Identifier
  * relation `object`
    * contact_id `string`: Contact Identifier
    * owner_user_id `string`: Owner User Identifier
    * parent_id `string`: Parent Identifier
    * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type

### EventCreate
* EventCreate `object`
  * access `string` (values: Public, Private, Other): Access
  * contact_id `string`: Contact Identifier
  * created_at `string`: Created At
  * description `string`: Description
  * ended_at `string`: Ended At
  * is_all_day `boolean`: Is All Day
  * location `string`: Location
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type
  * started_at `string`: Started At
  * subject `string`: Subject
  * updated_at `string`: Updated At

### EventCreated
* EventCreated `object`
  * id `string`: Event Identifier

### EventUpdate
* EventUpdate `object`
  * access `string` (values: Public, Private, Other): Access
  * contact_id `string`: Contact Identifier
  * created_at `string`: Created At
  * description `string`: Description
  * ended_at `string`: Ended At
  * is_all_day `boolean`: Is All Day
  * location `string`: Location
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, contact, lead, opportunity, task, user): Parent Type
  * started_at `string`: Started At
  * subject `string`: Subject
  * updated_at `string`: Updated At

### EventUpdated
* EventUpdated `object`
  * id `string`: Event Identifier

### Lead
* Lead `object`
  * embedded `object`
    * account_name `string`: Account Name
    * alt_city `string`: Alternative City
    * alt_country `string`: Alternative Country
    * alt_state `string`: Alternative State
    * alt_street `string`: Alternative Street
    * alt_zip_code `string`: Alternative Zip Code
    * annual_revenue `number`: Annual Revenue
    * birth_date `string`: Annual Revenue
    * city `string`: City
    * company `string`: Company
    * country `string`: Country
    * date_created `string`: Date Created
    * date_updated `string`: Date Updated
    * department `string`: Department
    * description `string`: Description
    * do_not_call `boolean`: Do Not Call
    * email `string`: Email
    * email_home `string`: Email Home
    * email_other `string`: Email Other
    * fax `string`: Fax
    * first_name `string`: First Name
    * industry `string` (values: Informational Technology, Telecommunications, Manufacturing, Banking, Consulting, Finance, Government, Delivery, Non-Profit, Entertainment, Biotechnology, Chemicals, Communications, Construction, Education, Electronics, Energy, Engineering, Environmental, Health care, Hospitality, Machinery, Media, Recreation, Retail, Transportation, Utilities, Other): Industry
    * last_name `string`: Last Name
    * lead_source `string` (values: Personal Contact, Existing Customer, Call, Website, Email, Conference, Trade Show, Employee, Campaign, HR, Inbound Call, Mail, Partner, Word of mouth, Self Generated, Purchased List, Other): Lead Source
    * lead_source_description `string`: Lead Source Description
    * opened `string`: Opened
    * pager `string`: Pager Number
    * phone_home `string`: Phone Home
    * phone_mobile `string`: Phone Mobile
    * phone_other `string`: Phone Other
    * phone_work `string`: Phone Work
    * referred_by `string`: Referred By
    * salutation `string`: Salutation
    * skype_id `string`: Skype
    * state `string`: State
    * status `string` (values: Unassigned, Responsible Assigned, Waiting for details, Cannot contact, On hold, Restored, In Progress, Junk Lead, Converted, Attempted to contact, Contact in Future, Contacted, Lost Lead, Not Contacted, Pre Qualified): Status
    * status_description `string`: Status Description
    * street `string`: Street
    * suite `string`: Suite
    * title `string`: Title
    * type `string`: Type
    * website `string`: Website
    * zip_code `string`: Zip Code
  * id `string`: Lead Identifier
  * relation `object`
    * account_id `string`: Account Identifier
    * assigned_user_id `string`: Assigned User Identifier
    * campaign_id `string`: Campaign Identifier
    * contact_id `string`: Contact Identifier
    * event_id `string`: Event Identifier
    * opportunity_id `string`: Opportunity Identifier
    * owner_id `string`: Owner Identifier
    * task_id `string`: Task Identifier

### LeadCreate
* LeadCreate `object`
  * account_id `string`: Account Identifier
  * account_name `string`: Account Name
  * alt_city `string`: Alternative City
  * alt_country `string`: Alternative Country
  * alt_state `string`: Alternative State
  * alt_street `string`: Alternative Street
  * alt_zip_code `string`: Alternative Zip Code
  * annual_revenue `number`: Annual Revenue
  * assigned_user_id `string`: Assigned User Identifier
  * birth_date `string`: Annual Revenue
  * campaign_id `string`: Campaign Identifier
  * city `string`: City
  * company `string`: Company
  * contact_id `string`: Contact Identifier
  * country `string`: Country
  * date_created `string`: Date Created
  * date_updated `string`: Date Updated
  * department `string`: Department
  * description `string`: Description
  * do_not_call `boolean`: Do Not Call
  * email `string`: Email
  * email_home `string`: Email Home
  * email_other `string`: Email Other
  * event_id `string`: Event Identifier
  * fax `string`: Fax
  * first_name `string`: First Name
  * industry `string` (values: Informational Technology, Telecommunications, Manufacturing, Banking, Consulting, Finance, Government, Delivery, Non-Profit, Entertainment, Biotechnology, Chemicals, Communications, Construction, Education, Electronics, Energy, Engineering, Environmental, Health care, Hospitality, Machinery, Media, Recreation, Retail, Transportation, Utilities, Other): Industry
  * last_name `string`: Last Name
  * lead_source `string` (values: Personal Contact, Existing Customer, Call, Website, Email, Conference, Trade Show, Employee, Campaign, HR, Inbound Call, Mail, Partner, Word of mouth, Self Generated, Purchased List, Other): Lead Source
  * lead_source_description `string`: Lead Source Description
  * opened `string`: Opened
  * opportunity_id `string`: Opportunity Identifier
  * owner_id `string`: Owner Identifier
  * pager `string`: Pager Number
  * phone_home `string`: Phone Home
  * phone_mobile `string`: Phone Mobile
  * phone_other `string`: Phone Other
  * phone_work `string`: Phone Work
  * referred_by `string`: Referred By
  * salutation `string`: Salutation
  * skype_id `string`: Skype
  * state `string`: State
  * status `string` (values: Unassigned, Responsible Assigned, Waiting for details, Cannot contact, On hold, Restored, In Progress, Junk Lead, Converted, Attempted to contact, Contact in Future, Contacted, Lost Lead, Not Contacted, Pre Qualified): Status
  * status_description `string`: Status Description
  * street `string`: Street
  * suite `string`: Suite
  * task_id `string`: Task Identifier
  * title `string`: Title
  * type `string`: Type
  * website `string`: Website
  * zip_code `string`: Zip Code

### LeadCreated
* LeadCreated `object`
  * id `string`: Lead Identifier

### LeadUpdate
* LeadUpdate `object`
  * account_id `string`: Account Identifier
  * account_name `string`: Account Name
  * alt_city `string`: Alternative City
  * alt_country `string`: Alternative Country
  * alt_state `string`: Alternative State
  * alt_street `string`: Alternative Street
  * alt_zip_code `string`: Alternative Zip Code
  * annual_revenue `number`: Annual Revenue
  * assigned_user_id `string`: Assigned User Identifier
  * birth_date `string`: Annual Revenue
  * campaign_id `string`: Campaign Identifier
  * city `string`: City
  * company `string`: Company
  * contact_id `string`: Contact Identifier
  * country `string`: Country
  * date_created `string`: Date Created
  * date_updated `string`: Date Updated
  * department `string`: Department
  * description `string`: Description
  * do_not_call `boolean`: Do Not Call
  * email `string`: Email
  * email_home `string`: Email Home
  * email_other `string`: Email Other
  * event_id `string`: Event Identifier
  * fax `string`: Fax
  * first_name `string`: First Name
  * industry `string` (values: Informational Technology, Telecommunications, Manufacturing, Banking, Consulting, Finance, Government, Delivery, Non-Profit, Entertainment, Biotechnology, Chemicals, Communications, Construction, Education, Electronics, Energy, Engineering, Environmental, Health care, Hospitality, Machinery, Media, Recreation, Retail, Transportation, Utilities, Other): Industry
  * last_name `string`: Last Name
  * lead_source `string` (values: Personal Contact, Existing Customer, Call, Website, Email, Conference, Trade Show, Employee, Campaign, HR, Inbound Call, Mail, Partner, Word of mouth, Self Generated, Purchased List, Other): Lead Source
  * lead_source_description `string`: Lead Source Description
  * opened `string`: Opened
  * opportunity_id `string`: Opportunity Identifier
  * owner_id `string`: Owner Identifier
  * pager `string`: Pager Number
  * phone_home `string`: Phone Home
  * phone_mobile `string`: Phone Mobile
  * phone_other `string`: Phone Other
  * phone_work `string`: Phone Work
  * referred_by `string`: Referred By
  * salutation `string`: Salutation
  * skype_id `string`: Skype
  * state `string`: State
  * status `string` (values: Unassigned, Responsible Assigned, Waiting for details, Cannot contact, On hold, Restored, In Progress, Junk Lead, Converted, Attempted to contact, Contact in Future, Contacted, Lost Lead, Not Contacted, Pre Qualified): Status
  * status_description `string`: Status Description
  * street `string`: Street
  * suite `string`: Suite
  * task_id `string`: Task Identifier
  * title `string`: Title
  * type `string`: Type
  * website `string`: Website
  * zip_code `string`: Zip Code

### LeadUpdated
* LeadUpdated `object`
  * id `string`: Lead Identifier

### Meeting
* Meeting `object`
  * embedded `object`
    * created_at `string`: Created At
    * description `string`: Description
    * ended_at `string`: Ended At
    * location `string`: Location
    * result `string`: Result
    * started_at `string`: Started At
    * status `string` (values: Planned, Held, Not Held): Status
    * subject `string`: Subject
    * updated_at `string`: Updated At
  * id `string`: Meeting Identifier
  * relation `object`
    * contact_id `string`: Contact Identifier
    * owner_user_id `string`: Owner User Identifier
    * parent_id `string`: Parent Identifier
    * parent_type `string` (values: account, contact, lead, opportunity, user): Parent Type

### MeetingCreate
* MeetingCreate `object`
  * contact_id `string`: Contact Identifier
  * created_at `string`: Created At
  * description `string`: Description
  * ended_at `string`: Ended At
  * location `string`: Location
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, contact, lead, opportunity, user): Parent Type
  * result `string`: Result
  * started_at `string`: Started At
  * status `string` (values: Planned, Held, Not Held): Status
  * subject `string`: Subject
  * updated_at `string`: Updated At

### MeetingCreated
* MeetingCreated `object`
  * id `string`: Meeting Identifier

### MeetingUpdate
* MeetingUpdate `object`
  * contact_id `string`: Contact Identifier
  * created_at `string`: Created At
  * description `string`: Description
  * ended_at `string`: Ended At
  * location `string`: Location
  * owner_user_id `string`: Owner User Identifier
  * parent_id `string`: Parent Identifier
  * parent_type `string` (values: account, contact, lead, opportunity, user): Parent Type
  * result `string`: Result
  * started_at `string`: Started At
  * status `string` (values: Planned, Held, Not Held): Status
  * subject `string`: Subject
  * updated_at `string`: Updated At

### MeetingUpdated
* MeetingUpdated `object`
  * id `string`: Meeting Identifier

### Note
* Note `object`
  * embedded `object`
    * body `string`: Body
    * contact_name `string`: Contact Name
    * created_at `string`: Created At
    * owner_user_name `string`: Owner User Name
    * parent_name `string`: Parent Name
    * subject `string`: Subject
    * updated_at `string`: Updated At
  * id `string`: Note Identifier
  * relation `object`
    * owner_user_id `string`: Owner User Identifier
    * parent_id `string`: Parent Identifier
    * parent_type `string` (values: account, contact, lead, task, user, opportunity, event): Parent Type

### NoteCreate
* NoteCreate `object`
  * body `string`: Body
  * contact_name `string`: Contact Name
  * created_at `string`: Created At
  * owner_user_id `string`: Owner User Identifier
  * owner_user_name `string`: Owner User Name
  * parent_id `string`: Parent Identifier
  * parent_name `string`: Parent Name
  * parent_type `string` (values: account, contact, lead, task, user, opportunity, event): Parent Type
  * subject `string`: Subject
  * updated_at `string`: Updated At

### NoteCreated
* NoteCreated `object`
  * id `string`: Note Identifier

### NoteUpdate
* NoteUpdate `object`
  * body `string`: Body
  * contact_name `string`: Contact Name
  * created_at `string`: Created At
  * owner_user_id `string`: Owner User Identifier
  * owner_user_name `string`: Owner User Name
  * parent_id `string`: Parent Identifier
  * parent_name `string`: Parent Name
  * parent_type `string` (values: account, contact, lead, task, user, opportunity, event): Parent Type
  * subject `string`: Subject
  * updated_at `string`: Updated At

### NoteUpdated
* NoteUpdated `object`
  * id `string`: Note Identifier

### Opportunity
* Opportunity `object`
  * embedded `object`
    * account_name `string`: Account Name
    * amount `number`: Amount
    * assigned_user_name `string`: Assigned User Name
    * campaign_id `string`: Campaign Identifier
    * campaign_name `string`: Campaign Name
    * currency_name `string`: Currency Name
    * currency_symbol `string`: Currency Symbol
    * date_closed `string`: Date Closed
    * date_created `string`: Date Created
    * description `string`: Description
    * lead_source `string`: Lead Source
    * name `string`: Name
    * next_step `string`: Next Step
    * probability `number`: Probability
    * sales_stage `string` (values: New, Open, Details, Proposal, Negotiation, Abandoned, Suspended, Won, On hold, Lost, Prospecting, Qualification, Needs Analysis, Value Proposition, Decision Makers, Perception Analysis, Closed Lost to competition, Other): Sales Stage
    * type `string`: Type
  * id `string`: Opportunity Identifier
  * relation `object`
    * account_id `string`: Account Identifier
    * assigned_user_id `string`: Assigned User Identifier
    * contact_id `string`: Contact Identifier
    * lead_id `string`: Lead Identifier
    * owner_id `string`: Owner Identifier

### OpportunityCreate
* OpportunityCreate `object`
  * account_id `string`: Account Identifier
  * account_name `string`: Account Name
  * amount `number`: Amount
  * assigned_user_id `string`: Assigned User Identifier
  * assigned_user_name `string`: Assigned User Name
  * campaign_id `string`: Campaign Identifier
  * campaign_name `string`: Campaign Name
  * contact_id `string`: Contact Identifier
  * currency_name `string`: Currency Name
  * currency_symbol `string`: Currency Symbol
  * date_closed `string`: Date Closed
  * date_created `string`: Date Created
  * description `string`: Description
  * lead_id `string`: Lead Identifier
  * lead_source `string`: Lead Source
  * name `string`: Name
  * next_step `string`: Next Step
  * owner_id `string`: Owner Identifier
  * probability `number`: Probability
  * sales_stage `string` (values: New, Open, Details, Proposal, Negotiation, Abandoned, Suspended, Won, On hold, Lost, Prospecting, Qualification, Needs Analysis, Value Proposition, Decision Makers, Perception Analysis, Closed Lost to competition, Other): Sales Stage
  * type `string`: Type

### OpportunityCreated
* OpportunityCreated `object`
  * id `string`: Opportunity Identifier

### OpportunityUpdate
* OpportunityUpdate `object`
  * account_id `string`: Account Identifier
  * account_name `string`: Account Name
  * amount `number`: Amount
  * assigned_user_id `string`: Assigned User Identifier
  * assigned_user_name `string`: Assigned User Name
  * campaign_id `string`: Campaign Identifier
  * campaign_name `string`: Campaign Name
  * contact_id `string`: Contact Identifier
  * currency_name `string`: Currency Name
  * currency_symbol `string`: Currency Symbol
  * date_closed `string`: Date Closed
  * date_created `string`: Date Created
  * description `string`: Description
  * lead_id `string`: Lead Identifier
  * lead_source `string`: Lead Source
  * name `string`: Name
  * next_step `string`: Next Step
  * owner_id `string`: Owner Identifier
  * probability `number`: Probability
  * sales_stage `string` (values: New, Open, Details, Proposal, Negotiation, Abandoned, Suspended, Won, On hold, Lost, Prospecting, Qualification, Needs Analysis, Value Proposition, Decision Makers, Perception Analysis, Closed Lost to competition, Other): Sales Stage
  * type `string`: Type

### OpportunityUpdated
* OpportunityUpdated `object`
  * id `string`: Opportunity Identifier

### Select
* Select `object`
  * label `string`: Label
  * value `string`: Value

### SelectCreated
* SelectCreated `object`
  * label `string`: Label
  * value `string`: Value

### SelectUpdated
* SelectUpdated `object`
  * label `string`: Label
  * value `string`: Value

### Task
* Task `object`
  * embedded `object`
    * account `string`: Account
    * contact `string`: Contact
    * created_date `string`: Created Date
    * description `string`: Description
    * due_date `string`: Due Date
    * lead `string`: Lead
    * name `string`: Name
    * opportunity `string`: Opportunity
    * owner `string`: Owner
    * priority `boolean`: Completed
    * publicly_visible `boolean`: Publicly visible
    * reminder_date `string`: Remainder Date
    * start_date `string`: Start Date
    * status `string` (values: Deferred, Not Started, In Progress, Waiting, Completed): Status
    * updated_date `string`: Updated Date
  * id `string`: Task Identifier
  * relation `object`
    * account_id `string`: Account Identifier
    * assigned_user_id `string`: Assigned User Identifier
    * contact_id `string`: Contact Identifier
    * lead_id `string`: Lead Identifier
    * opportunity_id `string`: Opportunity Identifier
    * owner_id `string`: Owner Identifier
    * parent_id `string`: Parent Identifier
    * reporter_id `string`: Reporter Identifier

### TaskCreate
* TaskCreate `object`
  * account_id `string`: Account Identifier
  * assigned_user_id `string`: Assigned User Identifier
  * contact `string`: Contact
  * contact_id `string`: Contact Identifier
  * created_date `string`: Created Date
  * description `string`: Description
  * due_date `string`: Due Date
  * lead_id `string`: Lead Identifier
  * name `string`: Name
  * opportunity `string`: Opportunity
  * opportunity_id `string`: Opportunity Identifier
  * owner `string`: Owner
  * owner_id `string`: Owner Identifier
  * parent_id `string`: Parent Identifier
  * priority `boolean`: Completed
  * publicly_visible `boolean`: Publicly visible
  * reminder_date `string`: Remainder Date
  * reporter_id `string`: Reporter Identifier
  * start_date `string`: Start Date
  * status `string` (values: Deferred, Not Started, In Progress, Waiting, Completed): Status
  * updated_date `string`: Updated Date

### TaskCreated
* TaskCreated `object`
  * id `string`: Task Identifier

### TaskUpdate
* TaskUpdate `object`
  * account_id `string`: Account Identifier
  * assigned_user_id `string`: Assigned User Identifier
  * contact `string`: Contact
  * contact_id `string`: Contact Identifier
  * created_date `string`: Created Date
  * description `string`: Description
  * due_date `string`: Due Date
  * lead_id `string`: Lead Identifier
  * name `string`: Name
  * opportunity `string`: Opportunity
  * opportunity_id `string`: Opportunity Identifier
  * owner `string`: Owner
  * owner_id `string`: Owner Identifier
  * parent_id `string`: Parent Identifier
  * priority `boolean`: Completed
  * publicly_visible `boolean`: Publicly visible
  * reminder_date `string`: Remainder Date
  * reporter_id `string`: Reporter Identifier
  * start_date `string`: Start Date
  * status `string` (values: Deferred, Not Started, In Progress, Waiting, Completed): Status
  * updated_date `string`: Updated Date

### TaskUpdated
* TaskUpdated `object`
  * id `string`: Task Identifier

### User
* User `object`
  * embedded `object`
    * address_city `string`: Address city
    * address_country `string`: Address country
    * address_postal_code `string`: Address postal code
    * address_state `string`: Address state
    * address_street `string`: Address street
    * confirm_password `string`: Confirm password
    * created_by `string`: Created by
    * department `string`: Department
    * description `string`: Description
    * email `string`: Email
    * email_other `string`: Email other
    * firstname `string`: First name
    * fullname `string`: Full name
    * is_active `boolean`: Is active
    * is_admin `boolean`: Is admin
    * lastname `string`: Last name
    * modified_by `string`: Modified by
    * name `string`: Name
    * phone_home `string`: Phone home
    * phone_mobile `string`: Phone mobile
    * phone_other `string`: Phone other
    * phone_work `string`: Phone work
    * position `string`: Position
    * role `string`: Role
    * signature `string`: Signature
    * status `string`: Status
    * title `string`: Title
    * user_password `string`: User password
    * website `string`: Website
  * id `string`: User Identifier
  * relation `object`
    * roleid `string`: Role ID

### UserCreate
* UserCreate `object`
  * address_city `string`: Address city
  * address_country `string`: Address country
  * address_postal_code `string`: Address postal code
  * address_state `string`: Address state
  * address_street `string`: Address street
  * confirm_password `string`: Confirm password
  * created_by `string`: Created by
  * department `string`: Department
  * description `string`: Description
  * email `string`: Email
  * email_other `string`: Email other
  * firstname `string`: First name
  * fullname `string`: Full name
  * is_active `boolean`: Is active
  * is_admin `boolean`: Is admin
  * lastname `string`: Last name
  * modified_by `string`: Modified by
  * name `string`: Name
  * phone_home `string`: Phone home
  * phone_mobile `string`: Phone mobile
  * phone_other `string`: Phone other
  * phone_work `string`: Phone work
  * position `string`: Position
  * role `string`: Role
  * roleid `string`: Role ID
  * signature `string`: Signature
  * status `string`: Status
  * title `string`: Title
  * user_password `string`: User password
  * website `string`: Website

### UserCreated
* UserCreated `object`
  * id `string`: User Identifier

### UserUpdate
* UserUpdate `object`
  * address_city `string`: Address city
  * address_country `string`: Address country
  * address_postal_code `string`: Address postal code
  * address_state `string`: Address state
  * address_street `string`: Address street
  * confirm_password `string`: Confirm password
  * created_by `string`: Created by
  * department `string`: Department
  * description `string`: Description
  * email `string`: Email
  * email_other `string`: Email other
  * firstname `string`: First name
  * fullname `string`: Full name
  * is_active `boolean`: Is active
  * is_admin `boolean`: Is admin
  * lastname `string`: Last name
  * modified_by `string`: Modified by
  * name `string`: Name
  * phone_home `string`: Phone home
  * phone_mobile `string`: Phone mobile
  * phone_other `string`: Phone other
  * phone_work `string`: Phone work
  * position `string`: Position
  * role `string`: Role
  * roleid `string`: Role ID
  * signature `string`: Signature
  * status `string`: Status
  * title `string`: Title
  * user_password `string`: User password
  * website `string`: Website

### UserUpdated
* UserUpdated `object`
  * id `string`: User Identifier


