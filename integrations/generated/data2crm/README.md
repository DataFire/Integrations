# @datafire/data2crm

Client library for Data2CRM.API

## Installation and Usage
```bash
npm install --save @datafire/data2crm
```
```js
let data2crm = require('@datafire/data2crm').create();

.then(data => {
  console.log(data);
});
```

## Description

<p>Make use of our in-depth documentation to get more information about the various functions of the service. Those willing to explore the mechanics of Data2CRM.API can test it in live regime using the short code samples.</p><p>Select CRM: <span id="docs-select-crm" style="font-weight: bold">Loading... please wait</span></p><p>Here are the API access keys:<br><b>X-API2CRM-USER-KEY</b>: <span id="docs-user-key">e2a6379ab878ae7e58119d4ec842bf9c</span><br><b>X-API2CRM-APPLICATION-KEY</b>: <span id="docs-crm-key">7ae5b17008fb414d84981191cf3b66a476ef8bef</span></p><p id="docs-crm-access">The CRM access details are:<br><b>URL</b>: <a id="docs-crm-url" href="https://login.salesforce.com/" target="_blank">https://login.salesforce.com/</a><br><b>E-mail / Username</b>: <span id="docs-crm-username">developers.data2crm.api+1@magneticone.com</span><br><b>Password</b>: <span id="docs-crm-password">data2crmapi123</span></p>

## Actions

### getAccountCollection
Returns all accounts from the system


```js
data2crm.getAccountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [AccountEntity](#accountentity)

### createAccountEntity
Add account into the system


```js
data2crm.createAccountEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [AccountEntity](#accountentity)

#### Output
* output [AccountEntityRelation](#accountentityrelation)

### getAccountAggregate
Returns aggregate for accounts


```js
data2crm.getAccountAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteAccountCollectionBulk
DELETE bulk  for account


```js
data2crm.deleteAccountCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createAccountEntityBulk
Add account into the system


```js
data2crm.createAccountEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateAccountEntityBulk
PUT bulk  for account


```js
data2crm.updateAccountEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getAccountCountCollection
Count all accounts from the system


```js
data2crm.getAccountCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getAccountDescribe
Returns describe for accounts


```js
data2crm.getAccountDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [AccountDescribe](#accountdescribe)

### deleteAccountEntity
Delete account information


```js
data2crm.deleteAccountEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * account_id **required** `string`: Account Identifier

#### Output
*Output schema unknown*

### getAccountEntity
Return account information


```js
data2crm.getAccountEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * account_id **required** `string`: Account Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [AccountEntity](#accountentity)

### updateAccountEntity
Update account information


```js
data2crm.updateAccountEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "account_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * account_id **required** `string`: Account Identifier
  * body **required** [AccountEntity](#accountentity)

#### Output
* output [AccountEntityRelation](#accountentityrelation)

### getApplicationCollection
Returns all applications from the system


```js
data2crm.getApplicationCollection({
  "X-API2CRM-USER-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields

#### Output
* output `array`
  * items [ApplicationEntityList](#applicationentitylist)

### createApplicationEntity
Add application into the system


```js
data2crm.createApplicationEntity({
  "X-API2CRM-USER-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key
  * body **required** [ApplicationEntityWrite](#applicationentitywrite)

#### Output
* output [ApplicationEntityRelation](#applicationentityrelation)

### getApplicationCountCollection
Count all applications from the system


```js
data2crm.getApplicationCountCollection({
  "X-API2CRM-USER-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key

#### Output
* output [Count](#count)

### deleteApplicationEntity
Delete application information


```js
data2crm.deleteApplicationEntity({
  "X-API2CRM-USER-KEY": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key
  * key **required** `string`: Application key

#### Output
*Output schema unknown*

### getApplicationEntity
Return application information


```js
data2crm.getApplicationEntity({
  "X-API2CRM-USER-KEY": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key
  * key **required** `string`: Application key
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [ApplicationEntity](#applicationentity)

### updateApplicationEntity
Update application information


```js
data2crm.updateApplicationEntity({
  "X-API2CRM-USER-KEY": "",
  "key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key
  * key **required** `string`: Application key
  * body **required** [ApplicationEntityWrite](#applicationentitywrite)

#### Output
* output [ApplicationEntityRelation](#applicationentityrelation)

### getAttachmentCollection
Returns all attachments from the system


```js
data2crm.getAttachmentCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [AttachmentEntityList](#attachmententitylist)

### createAttachmentEntity
Add attachment into the system


```js
data2crm.createAttachmentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [AttachmentEntityWrite](#attachmententitywrite)

#### Output
* output [AttachmentEntityRelation](#attachmententityrelation)

### getAttachmentAggregate
Returns aggregate for attachments


```js
data2crm.getAttachmentAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteAttachmentCollectionBulk
DELETE bulk  for attachment


```js
data2crm.deleteAttachmentCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createAttachmentEntityBulk
Add attachment into the system


```js
data2crm.createAttachmentEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateAttachmentEntityBulk
PUT bulk  for attachment


```js
data2crm.updateAttachmentEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getAttachmentCountCollection
Count all attachments from the system


```js
data2crm.getAttachmentCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getAttachmentDescribe
Returns describe for attachments


```js
data2crm.getAttachmentDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [AttachmentDescribe](#attachmentdescribe)

### deleteAttachmentEntity
Delete attachment information


```js
data2crm.deleteAttachmentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "attachment_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * attachment_id **required** `string`: Attachment Identifier

#### Output
*Output schema unknown*

### getAttachmentEntity
Return attachment information


```js
data2crm.getAttachmentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "attachment_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * attachment_id **required** `string`: Attachment Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [AttachmentEntity](#attachmententity)

### updateAttachmentEntity
Update attachment information


```js
data2crm.updateAttachmentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "attachment_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * attachment_id **required** `string`: Attachment Identifier
  * body **required** [AttachmentEntityWrite](#attachmententitywrite)

#### Output
* output [AttachmentEntityRelation](#attachmententityrelation)

### getCallCollection
Returns all calls from the system


```js
data2crm.getCallCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [CallEntity](#callentity)

### createCallEntity
Add call into the system


```js
data2crm.createCallEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [CallEntity](#callentity)

#### Output
* output [CallEntityRelation](#callentityrelation)

### getCallAggregate
Returns aggregate for calls


```js
data2crm.getCallAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteCallCollectionBulk
DELETE bulk  for call


```js
data2crm.deleteCallCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createCallEntityBulk
Add call into the system


```js
data2crm.createCallEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateCallEntityBulk
PUT bulk  for call


```js
data2crm.updateCallEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getCallCountCollection
Count all calls from the system


```js
data2crm.getCallCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getCallDescribe
Returns describe for calls


```js
data2crm.getCallDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [CallDescribe](#calldescribe)

### deleteCallEntity
Delete call information


```js
data2crm.deleteCallEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "call_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * call_id **required** `string`: Call Identifier

#### Output
*Output schema unknown*

### getCallEntity
Return call information


```js
data2crm.getCallEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "call_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * call_id **required** `string`: Call Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CallEntity](#callentity)

### updateCallEntity
Update call information


```js
data2crm.updateCallEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "call_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * call_id **required** `string`: Call Identifier
  * body **required** [CallEntity](#callentity)

#### Output
* output [CallEntityRelation](#callentityrelation)

### getCampaignCollection
Returns all campaigns from the system


```js
data2crm.getCampaignCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [CampaignEntity](#campaignentity)

### createCampaignEntity
Add campaign into the system


```js
data2crm.createCampaignEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [CampaignEntity](#campaignentity)

#### Output
* output [CampaignEntityRelation](#campaignentityrelation)

### getCampaignAggregate
Returns aggregate for campaigns


```js
data2crm.getCampaignAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteCampaignCollectionBulk
DELETE bulk  for campaign


```js
data2crm.deleteCampaignCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createCampaignEntityBulk
Add campaign into the system


```js
data2crm.createCampaignEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateCampaignEntityBulk
PUT bulk  for campaign


```js
data2crm.updateCampaignEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getCampaignCountCollection
Count all campaigns from the system


```js
data2crm.getCampaignCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getCampaignDescribe
Returns describe for campaigns


```js
data2crm.getCampaignDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [CampaignDescribe](#campaigndescribe)

### deleteCampaignEntity
Delete campaign information


```js
data2crm.deleteCampaignEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * campaign_id **required** `string`: Campaign Identifier

#### Output
*Output schema unknown*

### getCampaignEntity
Return campaign information


```js
data2crm.getCampaignEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * campaign_id **required** `string`: Campaign Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CampaignEntity](#campaignentity)

### updateCampaignEntity
Update campaign information


```js
data2crm.updateCampaignEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * campaign_id **required** `string`: Campaign Identifier
  * body **required** [CampaignEntity](#campaignentity)

#### Output
* output [CampaignEntityRelation](#campaignentityrelation)

### getCaseCollection
Returns all cases from the system


```js
data2crm.getCaseCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [CasesEntity](#casesentity)

### createCaseEntity
Add case into the system


```js
data2crm.createCaseEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [CasesEntity](#casesentity)

#### Output
* output [CasesEntityRelation](#casesentityrelation)

### getCaseAggregate
Returns aggregate for cases


```js
data2crm.getCaseAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteCaseCollectionBulk
DELETE bulk  for case


```js
data2crm.deleteCaseCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createCaseEntityBulk
Add case into the system


```js
data2crm.createCaseEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateCaseEntityBulk
PUT bulk  for case


```js
data2crm.updateCaseEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getCaseCountCollection
Count all cases from the system


```js
data2crm.getCaseCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getCaseDescribe
Returns describe for cases


```js
data2crm.getCaseDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [CaseDescribe](#casedescribe)

### deleteCaseEntity
Delete case information


```js
data2crm.deleteCaseEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "case_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * case_id **required** `string`: Case Identifier

#### Output
*Output schema unknown*

### getCaseEntity
Return case information


```js
data2crm.getCaseEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "case_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * case_id **required** `string`: Case Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CasesEntity](#casesentity)

### updateCaseEntity
Update case information


```js
data2crm.updateCaseEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "case_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * case_id **required** `string`: Case Identifier
  * body **required** [CasesEntity](#casesentity)

#### Output
* output [CasesEntityRelation](#casesentityrelation)

### getCommentCollection
Returns all comments from the system


```js
data2crm.getCommentCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [CommentEntity](#commententity)

### createCommentEntity
Add comment into the system


```js
data2crm.createCommentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [CommentEntity](#commententity)

#### Output
* output [CommentEntityRelation](#commententityrelation)

### getCommentAggregate
Returns aggregate for comments


```js
data2crm.getCommentAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteCommentCollectionBulk
DELETE bulk  for comment


```js
data2crm.deleteCommentCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createCommentEntityBulk
Add comment into the system


```js
data2crm.createCommentEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateCommentEntityBulk
PUT bulk  for comment


```js
data2crm.updateCommentEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getCommentCountCollection
Count all comments from the system


```js
data2crm.getCommentCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getCommentDescribe
Returns describe for comments


```js
data2crm.getCommentDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [CommentDescribe](#commentdescribe)

### deleteCommentEntity
Delete comment information


```js
data2crm.deleteCommentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * comment_id **required** `string`: Comment Identifier

#### Output
*Output schema unknown*

### getCommentEntity
Return comment information


```js
data2crm.getCommentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * comment_id **required** `string`: Comment Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CommentEntity](#commententity)

### updateCommentEntity
Update comment information


```js
data2crm.updateCommentEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "comment_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * comment_id **required** `string`: Comment Identifier
  * body **required** [CommentEntity](#commententity)

#### Output
* output [CommentEntityRelation](#commententityrelation)

### getContactCollection
Returns all contacts from the system


```js
data2crm.getContactCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [ContactEntity](#contactentity)

### createContactEntity
Add contact into the system


```js
data2crm.createContactEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [ContactEntity](#contactentity)

#### Output
* output [ContactEntityRelation](#contactentityrelation)

### getContactAggregate
Returns aggregate for contacts


```js
data2crm.getContactAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteContactCollectionBulk
DELETE bulk  for contact


```js
data2crm.deleteContactCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createContactEntityBulk
Add contact into the system


```js
data2crm.createContactEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateContactEntityBulk
PUT bulk  for contact


```js
data2crm.updateContactEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getContactCountCollection
Count all contacts from the system


```js
data2crm.getContactCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getContactDescribe
Returns describe for contacts


```js
data2crm.getContactDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [ContactDescribe](#contactdescribe)

### deleteContactEntity
Delete contact information


```js
data2crm.deleteContactEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "contact_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * contact_id **required** `string`: Contact Identifier

#### Output
*Output schema unknown*

### getContactEntity
Return contact information


```js
data2crm.getContactEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "contact_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * contact_id **required** `string`: Contact Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [ContactEntity](#contactentity)

### updateContactEntity
Update contact information


```js
data2crm.updateContactEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "contact_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * contact_id **required** `string`: Contact Identifier
  * body **required** [ContactEntity](#contactentity)

#### Output
* output [ContactEntityRelation](#contactentityrelation)

### getCustomEntityCollection
Returns all custom entities from the system


```js
data2crm.getCustomEntityCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * X-API2CRM-ALL-AS-CUSTOM-ENTITY `string` (values: true): Work with native entity like a custom entity
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output `array`
  * items [CustomEntityEntity](#customentityentity)

### getCustomEntityCountCollection
Count all custom entities from the system


```js
data2crm.getCustomEntityCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key

#### Output
* output [Count](#count)

### getCustomEntityEntity
Return custom entity information


```js
data2crm.getCustomEntityEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * X-API2CRM-ALL-AS-CUSTOM-ENTITY `string` (values: true): Work with native entity like a custom entity
  * custom_entity_id **required** `string`: Custom Field Identifier
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CustomEntityEntity](#customentityentity)

### getCustomEntityItemCollection
Returns all custom entity items from the system


```js
data2crm.getCustomEntityItemCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * X-API2CRM-ALL-AS-CUSTOM-ENTITY `string` (values: true): Work with native entity like a custom entity
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [CustomEntityItemEntity](#customentityitementity)

### createCustomEntityItemEntity
Add custom entity item into the system


```js
data2crm.createCustomEntityItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * X-API2CRM-ALL-AS-CUSTOM-ENTITY `string` (values: true): Work with native entity like a custom entity
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * body **required** [CustomEntityItemEntity](#customentityitementity)

#### Output
* output [CustomEntityItemEntityRelation](#customentityitementityrelation)

### getCustomEntityItemAggregate
Returns aggregate for custom entity items


```js
data2crm.getCustomEntityItemAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteCustomEntityItemCollectionBulk
DELETE bulk  for customEntityItem


```js
data2crm.deleteCustomEntityItemCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createCustomEntityItemEntityBulk
Add custom entity item into the system


```js
data2crm.createCustomEntityItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateCustomEntityItemEntityBulk
PUT bulk  for customEntityItem


```js
data2crm.updateCustomEntityItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getCustomEntityItemCountCollection
Count all custom entity items from the system


```js
data2crm.getCustomEntityItemCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getCustomEntityItemDescribe
Returns describe for custom entity items


```js
data2crm.getCustomEntityItemDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_entity_id **required** `string`: Custom Entity Identifier

#### Output
* output [CustomEntityItemDescribe](#customentityitemdescribe)

### deleteCustomEntityItemEntity
Delete custom entity item information


```js
data2crm.deleteCustomEntityItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": "",
  "custom_entity_item_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * custom_entity_item_id **required** `string`: Custom Entity Item Identifier

#### Output
*Output schema unknown*

### getCustomEntityItemEntity
Return custom entity item information


```js
data2crm.getCustomEntityItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": "",
  "custom_entity_item_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * X-API2CRM-ALL-AS-CUSTOM-ENTITY `string` (values: true): Work with native entity like a custom entity
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * custom_entity_item_id **required** `string`: Custom Entity Item Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CustomEntityItemEntity](#customentityitementity)

### updateCustomEntityItemEntity
Update custom entity item information


```js
data2crm.updateCustomEntityItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_entity_id": "",
  "custom_entity_item_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * X-API2CRM-ALL-AS-CUSTOM-ENTITY `string` (values: true): Work with native entity like a custom entity
  * custom_entity_id **required** `string`: Custom Entity Identifier
  * custom_entity_item_id **required** `string`: Custom Entity Item Identifier
  * body **required** [CustomEntityItemEntity](#customentityitementity)

#### Output
* output [CustomEntityItemEntityRelation](#customentityitementityrelation)

### getCustomFieldCollection
Returns all custom field from the system


```js
data2crm.getCustomFieldCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output `array`
  * items [CustomFieldEntity](#customfieldentity)

### getCustomFieldCountCollection
Count all custom fields from the system


```js
data2crm.getCustomFieldCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key

#### Output
* output [Count](#count)

### getCustomFieldEntity
Return custom field information


```js
data2crm.getCustomFieldEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_field_id **required** `string`: Custom Field Identifier
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CustomFieldEntity](#customfieldentity)

### getCustomFieldItemCollection
Returns all custom field from the system items


```js
data2crm.getCustomFieldItemCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_field_id **required** `string`: Custom Field Identifier
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output `array`
  * items [CustomFieldItemEntity](#customfielditementity)

### createCustomFieldItemEntity
Add custom field item into the system


```js
data2crm.createCustomFieldItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_field_id **required** `string`: Custom Field Identifier
  * body **required** [CustomFieldItemEntity](#customfielditementity)

#### Output
* output [CustomFieldItemEntityRelation](#customfielditementityrelation)

### getCustomFieldItemCountCollection
Count all custom field items from the system


```js
data2crm.getCustomFieldItemCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * custom_field_id **required** `string`: Custom Field Identifier

#### Output
* output [Count](#count)

### getCustomFieldItemDescribe
Returns describe for custom field items


```js
data2crm.getCustomFieldItemDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_field_id **required** `string`: Custom Field Identifier

#### Output
* output [CustomFieldItemDescribe](#customfielditemdescribe)

### deleteCustomFieldItemEntity
Delete custom field item information


```js
data2crm.deleteCustomFieldItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": "",
  "custom_field_item_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * custom_field_id **required** `string`: Custom Field Identifier
  * custom_field_item_id **required** `string`: Custom Field Item Identifier

#### Output
*Output schema unknown*

### getCustomFieldItemEntity
Return custom field item information


```js
data2crm.getCustomFieldItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": "",
  "custom_field_item_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_field_id **required** `string`: Custom Field Identifier
  * custom_field_item_id **required** `string`: Custom Field Item Identifier
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [CustomFieldItemEntity](#customfielditementity)

### updateCustomFieldItemEntity
Update custom field item information


```js
data2crm.updateCustomFieldItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "custom_field_id": "",
  "custom_field_item_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * custom_field_id **required** `string`: Custom Field Identifier
  * custom_field_item_id **required** `string`: Custom Field Item Identifier
  * body **required** [CustomFieldItemEntity](#customfielditementity)

#### Output
* output [CustomFieldItemEntityRelation](#customfielditementityrelation)

### getEmailCollection
Returns all emails from the system


```js
data2crm.getEmailCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [EmailEntity](#emailentity)

### createEmailEntity
Add email into the system


```js
data2crm.createEmailEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [EmailEntity](#emailentity)

#### Output
* output [EmailEntityRelation](#emailentityrelation)

### getEmailAggregate
Returns aggregate for emails


```js
data2crm.getEmailAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteEmailCollectionBulk
DELETE bulk  for email


```js
data2crm.deleteEmailCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createEmailEntityBulk
Add email into the system


```js
data2crm.createEmailEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateEmailEntityBulk
PUT bulk  for email


```js
data2crm.updateEmailEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getEmailCountCollection
Count all emails from the system


```js
data2crm.getEmailCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getEmailDescribe
Returns describe for emails


```js
data2crm.getEmailDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [EmailDescribe](#emaildescribe)

### deleteEmailEntity
Delete email information


```js
data2crm.deleteEmailEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * email_id **required** `string`: Email Identifier

#### Output
*Output schema unknown*

### getEmailEntity
Return email information


```js
data2crm.getEmailEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "email_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * email_id **required** `string`: Email Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [EmailEntity](#emailentity)

### updateEmailEntity
Update email information


```js
data2crm.updateEmailEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "email_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * email_id **required** `string`: Email Identifier
  * body **required** [EmailEntity](#emailentity)

#### Output
* output [EmailEntityRelation](#emailentityrelation)

### getEventCollection
Returns all events from the system


```js
data2crm.getEventCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [EventEntity](#evententity)

### createEventEntity
Add event into the system


```js
data2crm.createEventEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [EventEntity](#evententity)

#### Output
* output [EventEntityRelation](#evententityrelation)

### getEventAggregate
Returns aggregate for events


```js
data2crm.getEventAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteEventCollectionBulk
DELETE bulk  for event


```js
data2crm.deleteEventCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createEventEntityBulk
Add event into the system


```js
data2crm.createEventEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateEventEntityBulk
PUT bulk  for event


```js
data2crm.updateEventEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getEventCountCollection
Count all events from the system


```js
data2crm.getEventCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getEventDescribe
Returns describe for events


```js
data2crm.getEventDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [EventDescribe](#eventdescribe)

### deleteEventEntity
Delete event information


```js
data2crm.deleteEventEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * event_id **required** `string`: Event Identifier

#### Output
*Output schema unknown*

### getEventEntity
Return event information


```js
data2crm.getEventEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * event_id **required** `string`: Event Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [EventEntity](#evententity)

### updateEventEntity
Update event information


```js
data2crm.updateEventEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "event_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * event_id **required** `string`: Event Identifier
  * body **required** [EventEntity](#evententity)

#### Output
* output [EventEntityRelation](#evententityrelation)

### getInvoiceCollection
Returns all invoices from the system


```js
data2crm.getInvoiceCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [InvoiceEntity](#invoiceentity)

### createInvoiceEntity
Add invoice into the system


```js
data2crm.createInvoiceEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [InvoiceEntity](#invoiceentity)

#### Output
* output [InvoiceEntityRelation](#invoiceentityrelation)

### getInvoiceAggregate
Returns aggregate for invoices


```js
data2crm.getInvoiceAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteInvoiceCollectionBulk
DELETE bulk  for invoice


```js
data2crm.deleteInvoiceCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createInvoiceEntityBulk
Add invoice into the system


```js
data2crm.createInvoiceEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateInvoiceEntityBulk
PUT bulk  for invoice


```js
data2crm.updateInvoiceEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getInvoiceCountCollection
Count all invoices from the system


```js
data2crm.getInvoiceCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getInvoiceDescribe
Returns describe for invoices


```js
data2crm.getInvoiceDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [InvoiceDescribe](#invoicedescribe)

### deleteInvoiceEntity
Delete invoice information


```js
data2crm.deleteInvoiceEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "invoice_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * invoice_id **required** `string`: Invoice Identifier

#### Output
*Output schema unknown*

### getInvoiceEntity
Return invoice information


```js
data2crm.getInvoiceEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "invoice_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * invoice_id **required** `string`: Invoice Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [InvoiceEntity](#invoiceentity)

### updateInvoiceEntity
Update invoice information


```js
data2crm.updateInvoiceEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "invoice_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * invoice_id **required** `string`: Invoice Identifier
  * body **required** [InvoiceEntity](#invoiceentity)

#### Output
* output [InvoiceEntityRelation](#invoiceentityrelation)

### getInvoiceItemCollection
Returns all invoiceItems from the system


```js
data2crm.getInvoiceItemCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [InvoiceItemEntity](#invoiceitementity)

### createInvoiceItemEntity
Add invoiceItem into the system


```js
data2crm.createInvoiceItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [InvoiceItemEntity](#invoiceitementity)

#### Output
* output [InvoiceItemEntityRelation](#invoiceitementityrelation)

### getInvoiceItemAggregate
Returns aggregate for invoiceItems


```js
data2crm.getInvoiceItemAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteInvoiceItemCollectionBulk
DELETE bulk  for invoiceItem


```js
data2crm.deleteInvoiceItemCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createInvoiceItemEntityBulk
Add invoiceItem into the system


```js
data2crm.createInvoiceItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateInvoiceItemEntityBulk
PUT bulk  for invoiceItem


```js
data2crm.updateInvoiceItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getInvoiceItemCountCollection
Count all invoiceItems from the system


```js
data2crm.getInvoiceItemCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getInvoiceItemDescribe
Returns describe for invoiceItems


```js
data2crm.getInvoiceItemDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [InvoiceItemDescribe](#invoiceitemdescribe)

### deleteInvoiceItemEntity
Delete invoiceItem information


```js
data2crm.deleteInvoiceItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "invoiceItem_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * invoiceItem_id **required** `string`: Invoice Item Identifier

#### Output
*Output schema unknown*

### getInvoiceItemEntity
Return invoiceItem information


```js
data2crm.getInvoiceItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "invoiceItem_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * invoiceItem_id **required** `string`: Invoice Item Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [InvoiceItemEntity](#invoiceitementity)

### updateInvoiceItemEntity
Update invoiceItem information


```js
data2crm.updateInvoiceItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "invoiceItem_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * invoiceItem_id **required** `string`: Invoice Item Identifier
  * body **required** [InvoiceItemEntity](#invoiceitementity)

#### Output
* output [InvoiceItemEntityRelation](#invoiceitementityrelation)

### getLeadCollection
Returns all leads from the system


```js
data2crm.getLeadCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [LeadEntity](#leadentity)

### createLeadEntity
Add lead into the system


```js
data2crm.createLeadEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [LeadEntity](#leadentity)

#### Output
* output [LeadEntityRelation](#leadentityrelation)

### getLeadAggregate
Returns aggregate for leads


```js
data2crm.getLeadAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteLeadCollectionBulk
DELETE bulk  for lead


```js
data2crm.deleteLeadCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createLeadEntityBulk
Add lead into the system


```js
data2crm.createLeadEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateLeadEntityBulk
PUT bulk  for lead


```js
data2crm.updateLeadEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getLeadCountCollection
Count all leads from the system


```js
data2crm.getLeadCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getLeadDescribe
Returns describe for leads


```js
data2crm.getLeadDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [LeadDescribe](#leaddescribe)

### deleteLeadEntity
Delete lead information


```js
data2crm.deleteLeadEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "lead_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * lead_id **required** `string`: Lead Identifier

#### Output
*Output schema unknown*

### getLeadEntity
Return lead information


```js
data2crm.getLeadEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "lead_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * lead_id **required** `string`: Lead Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [LeadEntity](#leadentity)

### updateLeadEntity
Update lead information


```js
data2crm.updateLeadEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "lead_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * lead_id **required** `string`: Lead Identifier
  * body **required** [LeadEntity](#leadentity)

#### Output
* output [LeadEntityRelation](#leadentityrelation)

### getMeetingCollection
Returns all meetings from the system


```js
data2crm.getMeetingCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [MeetingEntity](#meetingentity)

### createMeetingEntity
Add meeting into the system


```js
data2crm.createMeetingEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [MeetingEntity](#meetingentity)

#### Output
* output [MeetingEntityRelation](#meetingentityrelation)

### getMeetingAggregate
Returns aggregate for meetings


```js
data2crm.getMeetingAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteMeetingCollectionBulk
DELETE bulk  for meeting


```js
data2crm.deleteMeetingCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createMeetingEntityBulk
Add meeting into the system


```js
data2crm.createMeetingEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateMeetingEntityBulk
PUT bulk  for meeting


```js
data2crm.updateMeetingEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getMeetingCountCollection
Count all meetings from the system


```js
data2crm.getMeetingCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getMeetingDescribe
Returns describe for meetings


```js
data2crm.getMeetingDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [MeetingDescribe](#meetingdescribe)

### deleteMeetingEntity
Delete meeting information


```js
data2crm.deleteMeetingEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "meeting_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * meeting_id **required** `string`: Meeting Identifier

#### Output
*Output schema unknown*

### getMeetingEntity
Return meeting information


```js
data2crm.getMeetingEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "meeting_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * meeting_id **required** `string`: Meeting Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [MeetingEntity](#meetingentity)

### updateMeetingEntity
Update meeting information


```js
data2crm.updateMeetingEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "meeting_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * meeting_id **required** `string`: Meeting Identifier
  * body **required** [MeetingEntity](#meetingentity)

#### Output
* output [MeetingEntityRelation](#meetingentityrelation)

### getNoteCollection
Returns all notes from the system


```js
data2crm.getNoteCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [NoteEntity](#noteentity)

### createNoteEntity
Add note into the system


```js
data2crm.createNoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [NoteEntity](#noteentity)

#### Output
* output [NoteEntityRelation](#noteentityrelation)

### getNoteAggregate
Returns aggregate for notes


```js
data2crm.getNoteAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteNoteCollectionBulk
DELETE bulk  for note


```js
data2crm.deleteNoteCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createNoteEntityBulk
Add note into the system


```js
data2crm.createNoteEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateNoteEntityBulk
PUT bulk  for note


```js
data2crm.updateNoteEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getNoteCountCollection
Count all notes from the system


```js
data2crm.getNoteCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getNoteDescribe
Returns describe for notes


```js
data2crm.getNoteDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [NoteDescribe](#notedescribe)

### deleteNoteEntity
Delete note information


```js
data2crm.deleteNoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * note_id **required** `string`: Note Identifier

#### Output
*Output schema unknown*

### getNoteEntity
Return note information


```js
data2crm.getNoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * note_id **required** `string`: Note Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [NoteEntity](#noteentity)

### updateNoteEntity
Update note information


```js
data2crm.updateNoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "note_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * note_id **required** `string`: Note Identifier
  * body **required** [NoteEntity](#noteentity)

#### Output
* output [NoteEntityRelation](#noteentityrelation)

### getOpportunityCollection
Returns all opportunities from the system


```js
data2crm.getOpportunityCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [OpportunityEntity](#opportunityentity)

### createOpportunityEntity
Add opportunity into the system


```js
data2crm.createOpportunityEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [OpportunityEntity](#opportunityentity)

#### Output
* output [OpportunityEntityRelation](#opportunityentityrelation)

### getOpportunityAggregate
Returns aggregate for opportunities


```js
data2crm.getOpportunityAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteOpportunityCollectionBulk
DELETE bulk  for opportunity


```js
data2crm.deleteOpportunityCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createOpportunityEntityBulk
Add opportunity into the system


```js
data2crm.createOpportunityEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateOpportunityEntityBulk
PUT bulk  for opportunity


```js
data2crm.updateOpportunityEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getOpportunityCountCollection
Count all opportunities from the system


```js
data2crm.getOpportunityCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getOpportunityDescribe
Returns describe for opportunities


```js
data2crm.getOpportunityDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [OpportunityDescribe](#opportunitydescribe)

### deleteOpportunityEntity
Delete opportunity information


```js
data2crm.deleteOpportunityEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "opportunity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * opportunity_id **required** `string`: Opportunity Identifier

#### Output
*Output schema unknown*

### getOpportunityEntity
Return opportunity information


```js
data2crm.getOpportunityEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "opportunity_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * opportunity_id **required** `string`: Opportunity Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [OpportunityEntity](#opportunityentity)

### updateOpportunityEntity
Update opportunity information


```js
data2crm.updateOpportunityEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "opportunity_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * opportunity_id **required** `string`: Opportunity Identifier
  * body **required** [OpportunityEntity](#opportunityentity)

#### Output
* output [OpportunityEntityRelation](#opportunityentityrelation)

### getOpportunityProductCollection
Returns all opportunityProducts from the system


```js
data2crm.getOpportunityProductCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [OpportunityProductEntity](#opportunityproductentity)

### createOpportunityProductEntity
Add opportunityProduct into the system


```js
data2crm.createOpportunityProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [OpportunityProductEntity](#opportunityproductentity)

#### Output
* output [OpportunityProductEntityRelation](#opportunityproductentityrelation)

### getOpportunityProductAggregate
Returns aggregate for opportunityProducts


```js
data2crm.getOpportunityProductAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteOpportunityProductCollectionBulk
DELETE bulk  for opportunityProduct


```js
data2crm.deleteOpportunityProductCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createOpportunityProductEntityBulk
Add opportunityProduct into the system


```js
data2crm.createOpportunityProductEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateOpportunityProductEntityBulk
PUT bulk  for opportunityProduct


```js
data2crm.updateOpportunityProductEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getOpportunityProductCountCollection
Count all opportunityProducts from the system


```js
data2crm.getOpportunityProductCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getOpportunityProductDescribe
Returns describe for opportunityProducts


```js
data2crm.getOpportunityProductDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [OpportunityProductDescribe](#opportunityproductdescribe)

### deleteOpportunityProductEntity
Delete opportunityProduct information


```js
data2crm.deleteOpportunityProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "opportunityProduct_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * opportunityProduct_id **required** `string`: Opportunity Product Identifier

#### Output
*Output schema unknown*

### getOpportunityProductEntity
Return opportunityProduct information


```js
data2crm.getOpportunityProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "opportunityProduct_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * opportunityProduct_id **required** `string`: Opportunity Product Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [OpportunityProductEntity](#opportunityproductentity)

### updateOpportunityProductEntity
Update opportunityProduct information


```js
data2crm.updateOpportunityProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "opportunityProduct_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * opportunityProduct_id **required** `string`: Opportunity Product Identifier
  * body **required** [OpportunityProductEntity](#opportunityproductentity)

#### Output
* output [OpportunityProductEntityRelation](#opportunityproductentityrelation)

### getPlatformCollection
Returns all platforms from the system


```js
data2crm.getPlatformCollection({
  "X-API2CRM-USER-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields

#### Output
* output `array`
  * items [PlatformEntity](#platformentity)

### getPlatformEntity
Return platform information


```js
data2crm.getPlatformEntity({
  "X-API2CRM-USER-KEY": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: API2CRM user key
  * type **required** `string`: Platform type
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [PlatformEntity](#platformentity)

### getPostCollection
Returns all posts from the system


```js
data2crm.getPostCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [PostEntity](#postentity)

### createPostEntity
Add post into the system


```js
data2crm.createPostEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [PostEntity](#postentity)

#### Output
* output [PostEntityRelation](#postentityrelation)

### getPostAggregate
Returns aggregate for posts


```js
data2crm.getPostAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deletePostCollectionBulk
DELETE bulk  for post


```js
data2crm.deletePostCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createPostEntityBulk
Add post into the system


```js
data2crm.createPostEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updatePostEntityBulk
PUT bulk  for post


```js
data2crm.updatePostEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getPostCountCollection
Count all posts from the system


```js
data2crm.getPostCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getPostDescribe
Returns describe for posts


```js
data2crm.getPostDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [PostDescribe](#postdescribe)

### deletePostEntity
Delete post information


```js
data2crm.deletePostEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * post_id **required** `string`: Post Identifier

#### Output
*Output schema unknown*

### getPostEntity
Return post information


```js
data2crm.getPostEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "post_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * post_id **required** `string`: Post Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [PostEntity](#postentity)

### updatePostEntity
Update post information


```js
data2crm.updatePostEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "post_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * post_id **required** `string`: Post Identifier
  * body **required** [PostEntity](#postentity)

#### Output
* output [PostEntityRelation](#postentityrelation)

### getPriceBookCollection
Returns all priceBooks from the system


```js
data2crm.getPriceBookCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [PriceBookEntity](#pricebookentity)

### createPriceBookEntity
Add priceBook into the system


```js
data2crm.createPriceBookEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [PriceBookEntity](#pricebookentity)

#### Output
* output [PriceBookEntityRelation](#pricebookentityrelation)

### getPriceBookAggregate
Returns aggregate for priceBooks


```js
data2crm.getPriceBookAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deletePriceBookCollectionBulk
DELETE bulk  for priceBook


```js
data2crm.deletePriceBookCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createPriceBookEntityBulk
Add priceBook into the system


```js
data2crm.createPriceBookEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updatePriceBookEntityBulk
PUT bulk  for priceBook


```js
data2crm.updatePriceBookEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getPriceBookCountCollection
Count all priceBooks from the system


```js
data2crm.getPriceBookCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getPriceBookDescribe
Returns describe for priceBooks


```js
data2crm.getPriceBookDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [PriceBookDescribe](#pricebookdescribe)

### deletePriceBookEntity
Delete priceBook information


```js
data2crm.deletePriceBookEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "priceBook_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * priceBook_id **required** `string`: PriceBook Identifier

#### Output
*Output schema unknown*

### getPriceBookEntity
Return priceBook information


```js
data2crm.getPriceBookEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "priceBook_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * priceBook_id **required** `string`: PriceBook Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [PriceBookEntity](#pricebookentity)

### updatePriceBookEntity
Update priceBook information


```js
data2crm.updatePriceBookEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "priceBook_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * priceBook_id **required** `string`: PriceBook Identifier
  * body **required** [PriceBookEntity](#pricebookentity)

#### Output
* output [PriceBookEntityRelation](#pricebookentityrelation)

### getPriceBookItemCollection
Returns all priceBookItems from the system


```js
data2crm.getPriceBookItemCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [PriceBookItemEntity](#pricebookitementity)

### createPriceBookItemEntity
Add priceBookItem into the system


```js
data2crm.createPriceBookItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [PriceBookItemEntity](#pricebookitementity)

#### Output
* output [PriceBookItemEntityRelation](#pricebookitementityrelation)

### getPriceBookItemAggregate
Returns aggregate for priceBookItems


```js
data2crm.getPriceBookItemAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deletePriceBookItemCollectionBulk
DELETE bulk  for priceBookItem


```js
data2crm.deletePriceBookItemCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createPriceBookItemEntityBulk
Add priceBookItem into the system


```js
data2crm.createPriceBookItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updatePriceBookItemEntityBulk
PUT bulk  for priceBookItem


```js
data2crm.updatePriceBookItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getPriceBookItemCountCollection
Count all priceBookItems from the system


```js
data2crm.getPriceBookItemCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getPriceBookItemDescribe
Returns describe for priceBookItems


```js
data2crm.getPriceBookItemDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [PriceBookItemDescribe](#pricebookitemdescribe)

### deletePriceBookItemEntity
Delete priceBookItem information


```js
data2crm.deletePriceBookItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "priceBookItem_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * priceBookItem_id **required** `string`: PriceBookItem Identifier

#### Output
*Output schema unknown*

### getPriceBookItemEntity
Return priceBookItem information


```js
data2crm.getPriceBookItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "priceBookItem_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * priceBookItem_id **required** `string`: PriceBookItem Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [PriceBookItemEntity](#pricebookitementity)

### updatePriceBookItemEntity
Update priceBookItem information


```js
data2crm.updatePriceBookItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "priceBookItem_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * priceBookItem_id **required** `string`: PriceBookItem Identifier
  * body **required** [PriceBookItemEntity](#pricebookitementity)

#### Output
* output [PriceBookItemEntityRelation](#pricebookitementityrelation)

### getProductCollection
Returns all products from the system


```js
data2crm.getProductCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [ProductEntity](#productentity)

### createProductEntity
Add product into the system


```js
data2crm.createProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [ProductEntity](#productentity)

#### Output
* output [ProductEntityRelation](#productentityrelation)

### getProductAggregate
Returns aggregate for products


```js
data2crm.getProductAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteProductCollectionBulk
DELETE bulk  for product


```js
data2crm.deleteProductCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createProductEntityBulk
Add product into the system


```js
data2crm.createProductEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateProductEntityBulk
PUT bulk  for product


```js
data2crm.updateProductEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getProductCountCollection
Count all products from the system


```js
data2crm.getProductCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getProductDescribe
Returns describe for products


```js
data2crm.getProductDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [ProductDescribe](#productdescribe)

### deleteProductEntity
Delete product information


```js
data2crm.deleteProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * product_id **required** `string`: Product Identifier

#### Output
*Output schema unknown*

### getProductEntity
Return product information


```js
data2crm.getProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * product_id **required** `string`: Product Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [ProductEntity](#productentity)

### updateProductEntity
Update product information


```js
data2crm.updateProductEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "product_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * product_id **required** `string`: Product Identifier
  * body **required** [ProductEntity](#productentity)

#### Output
* output [ProductEntityRelation](#productentityrelation)

### getProjectCollection
Returns all projects from the system


```js
data2crm.getProjectCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [ProjectEntity](#projectentity)

### createProjectEntity
Add project into the system


```js
data2crm.createProjectEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [ProjectEntity](#projectentity)

#### Output
* output [ProjectEntityRelation](#projectentityrelation)

### getProjectAggregate
Returns aggregate for projects


```js
data2crm.getProjectAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteProjectCollectionBulk
DELETE bulk  for project


```js
data2crm.deleteProjectCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createProjectEntityBulk
Add project into the system


```js
data2crm.createProjectEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateProjectEntityBulk
PUT bulk  for project


```js
data2crm.updateProjectEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getProjectCountCollection
Count all projects from the system


```js
data2crm.getProjectCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getProjectDescribe
Returns describe for projects


```js
data2crm.getProjectDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [ProjectDescribe](#projectdescribe)

### deleteProjectEntity
Delete project information


```js
data2crm.deleteProjectEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * project_id **required** `string`: Project Identifier

#### Output
*Output schema unknown*

### getProjectEntity
Return project information


```js
data2crm.getProjectEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * project_id **required** `string`: Project Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [ProjectEntity](#projectentity)

### updateProjectEntity
Update project information


```js
data2crm.updateProjectEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "project_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * project_id **required** `string`: Project Identifier
  * body **required** [ProjectEntity](#projectentity)

#### Output
* output [ProjectEntityRelation](#projectentityrelation)

### getQuoteCollection
Returns all quotes from the system


```js
data2crm.getQuoteCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [QuoteEntity](#quoteentity)

### createQuoteEntity
Add quote into the system


```js
data2crm.createQuoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [QuoteEntity](#quoteentity)

#### Output
* output [QuoteEntityRelation](#quoteentityrelation)

### getQuoteAggregate
Returns aggregate for quotes


```js
data2crm.getQuoteAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteQuoteCollectionBulk
DELETE bulk  for quote


```js
data2crm.deleteQuoteCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createQuoteEntityBulk
Add quote into the system


```js
data2crm.createQuoteEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateQuoteEntityBulk
PUT bulk  for quote


```js
data2crm.updateQuoteEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getQuoteCountCollection
Count all quotes from the system


```js
data2crm.getQuoteCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getQuoteDescribe
Returns describe for quotes


```js
data2crm.getQuoteDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [QuoteDescribe](#quotedescribe)

### deleteQuoteEntity
Delete quote information


```js
data2crm.deleteQuoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * quote_id **required** `string`: Quote Identifier

#### Output
*Output schema unknown*

### getQuoteEntity
Return quote information


```js
data2crm.getQuoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * quote_id **required** `string`: Quote Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [QuoteEntity](#quoteentity)

### updateQuoteEntity
Update quote information


```js
data2crm.updateQuoteEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "quote_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * quote_id **required** `string`: Quote Identifier
  * body **required** [QuoteEntity](#quoteentity)

#### Output
* output [QuoteEntityRelation](#quoteentityrelation)

### getQuoteItemCollection
Returns all quoteItems from the system


```js
data2crm.getQuoteItemCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [QuoteItemEntity](#quoteitementity)

### createQuoteItemEntity
Add quoteItem into the system


```js
data2crm.createQuoteItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [QuoteItemEntity](#quoteitementity)

#### Output
* output [QuoteItemEntityRelation](#quoteitementityrelation)

### getQuoteItemAggregate
Returns aggregate for quoteItems


```js
data2crm.getQuoteItemAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteQuoteItemCollectionBulk
DELETE bulk  for quoteItem


```js
data2crm.deleteQuoteItemCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createQuoteItemEntityBulk
Add quoteItem into the system


```js
data2crm.createQuoteItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateQuoteItemEntityBulk
PUT bulk  for quoteItem


```js
data2crm.updateQuoteItemEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getQuoteItemCountCollection
Count all quoteItems from the system


```js
data2crm.getQuoteItemCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getQuoteItemDescribe
Returns describe for quoteItems


```js
data2crm.getQuoteItemDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [QuoteItemDescribe](#quoteitemdescribe)

### deleteQuoteItemEntity
Delete quoteItem information


```js
data2crm.deleteQuoteItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "quoteItem_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * quoteItem_id **required** `string`: Quote Item Identifier

#### Output
*Output schema unknown*

### getQuoteItemEntity
Return quoteItem information


```js
data2crm.getQuoteItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "quoteItem_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * quoteItem_id **required** `string`: Quote Item Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [QuoteItemEntity](#quoteitementity)

### updateQuoteItemEntity
Update quoteItem information


```js
data2crm.updateQuoteItemEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "quoteItem_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * quoteItem_id **required** `string`: Quote Item Identifier
  * body **required** [QuoteItemEntity](#quoteitementity)

#### Output
* output [QuoteItemEntityRelation](#quoteitementityrelation)

### createRequestEntity
Execute request into the system


```js
data2crm.createRequestEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [RequestEntity](#requestentity)

#### Output
* output [RequestEntityRelation](#requestentityrelation)

### getTagCollection
Returns all tags from the system


```js
data2crm.getTagCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [TagEntity](#tagentity)

### createTagEntity
Add tag into the system


```js
data2crm.createTagEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [TagEntity](#tagentity)

#### Output
* output [TagEntityRelation](#tagentityrelation)

### getTagAggregate
Returns aggregate for tags


```js
data2crm.getTagAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteTagCollectionBulk
DELETE bulk  for tag


```js
data2crm.deleteTagCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createTagEntityBulk
Add tag into the system


```js
data2crm.createTagEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateTagEntityBulk
PUT bulk  for tag


```js
data2crm.updateTagEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getTagCountCollection
Count all tags from the system


```js
data2crm.getTagCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getTagDescribe
Returns describe for tags


```js
data2crm.getTagDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [TagDescribe](#tagdescribe)

### deleteTagEntity
Delete tag information


```js
data2crm.deleteTagEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "tag_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * tag_id **required** `string`: Tag Identifier

#### Output
*Output schema unknown*

### getTagEntity
Return tag information


```js
data2crm.getTagEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "tag_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * tag_id **required** `string`: Tag Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [TagEntity](#tagentity)

### updateTagEntity
Update tag information


```js
data2crm.updateTagEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "tag_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * tag_id **required** `string`: Tag Identifier
  * body **required** [TagEntity](#tagentity)

#### Output
* output [TagEntityRelation](#tagentityrelation)

### getTaskCollection
Returns all tasks from the system


```js
data2crm.getTaskCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [TaskEntity](#taskentity)

### createTaskEntity
Add task into the system


```js
data2crm.createTaskEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [TaskEntity](#taskentity)

#### Output
* output [TaskEntityRelation](#taskentityrelation)

### getTaskAggregate
Returns aggregate for tasks


```js
data2crm.getTaskAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteTaskCollectionBulk
DELETE bulk  for task


```js
data2crm.deleteTaskCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createTaskEntityBulk
Add task into the system


```js
data2crm.createTaskEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateTaskEntityBulk
PUT bulk  for task


```js
data2crm.updateTaskEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getTaskCountCollection
Count all tasks from the system


```js
data2crm.getTaskCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getTaskDescribe
Returns describe for tasks


```js
data2crm.getTaskDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [TaskDescribe](#taskdescribe)

### deleteTaskEntity
Delete task information


```js
data2crm.deleteTaskEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * task_id **required** `string`: Task Identifier

#### Output
*Output schema unknown*

### getTaskEntity
Return task information


```js
data2crm.getTaskEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * task_id **required** `string`: Task Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [TaskEntity](#taskentity)

### updateTaskEntity
Update task information


```js
data2crm.updateTaskEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "task_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * task_id **required** `string`: Task Identifier
  * body **required** [TaskEntity](#taskentity)

#### Output
* output [TaskEntityRelation](#taskentityrelation)

### getTicketCollection
Returns all tickets from the system


```js
data2crm.getTicketCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [TicketEntity](#ticketentity)

### createTicketEntity
Add ticket into the system


```js
data2crm.createTicketEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [TicketEntity](#ticketentity)

#### Output
* output [TicketEntityRelation](#ticketentityrelation)

### getTicketAggregate
AGGREGATE for ticket


```js
data2crm.getTicketAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteTicketCollectionBulk
DELETE bulk  for ticket


```js
data2crm.deleteTicketCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createTicketEntityBulk
Add ticket into the system


```js
data2crm.createTicketEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateTicketEntityBulk
PUT bulk  for ticket


```js
data2crm.updateTicketEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getTicketCountCollection
Count all tickets from the system


```js
data2crm.getTicketCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getTicketDescribe
Returns describe for tickets


```js
data2crm.getTicketDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [TicketDescribe](#ticketdescribe)

### deleteTicketEntity
Delete ticket information


```js
data2crm.deleteTicketEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "ticket_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * ticket_id **required** `string`: Ticket Identifier

#### Output
*Output schema unknown*

### getTicketEntity
Return ticket information


```js
data2crm.getTicketEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "ticket_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * ticket_id **required** `string`: Ticket Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [TicketEntity](#ticketentity)

### updateTicketEntity
Update ticket information


```js
data2crm.updateTicketEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "ticket_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * ticket_id **required** `string`: Ticket Identifier
  * body **required** [TicketEntity](#ticketentity)

#### Output
* output [TicketEntityRelation](#ticketentityrelation)

### getUserCollection
Returns all users from the system


```js
data2crm.getUserCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * page_size `integer`: Amount of results (default: 25)
  * page `integer`: Page to show (default: 1)
  * filter `string`: Filter
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response
  * sort `string`: Specifies ascending or descending sort on existing fields
  * unique `string` (values: false, true): Find all unique values for selected field

#### Output
* output `array`
  * items [UserEntity](#userentity)

### createUserEntity
Add user into the system


```js
data2crm.createUserEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [UserEntity](#userentity)

#### Output
* output [UserEntityRelation](#userentityrelation)

### getUserAggregate
Returns aggregate for users


```js
data2crm.getUserAggregate({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * filter `string`: Filter
  * pipeline `string`: Pipeline

#### Output
* output [Aggregate](#aggregate)

### deleteUserCollectionBulk
DELETE bulk  for user


```js
data2crm.deleteUserCollectionBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntity](#bulkentity)

### createUserEntityBulk
Add user into the system


```js
data2crm.createUserEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### updateUserEntityBulk
PUT bulk  for user


```js
data2crm.updateUserEntityBulk({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * body **required** [BulkEntity](#bulkentity)

#### Output
* output [BulkEntityRelation](#bulkentityrelation)

### getUserCountCollection
Count all users from the system


```js
data2crm.getUserCountCollection({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * filter `string`: Filter

#### Output
* output [Count](#count)

### getUserDescribe
Returns describe for users


```js
data2crm.getUserDescribe({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime

#### Output
* output [UserDescribe](#userdescribe)

### deleteUserEntity
Delete user information


```js
data2crm.deleteUserEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * user_id **required** `string`: User Identifier

#### Output
*Output schema unknown*

### getUserEntity
Return user information


```js
data2crm.getUserEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DATA-ENABLE `string` (values: false, true): Data Enable
  * X-API2CRM-DATA-IS-FINAL `string` (values: true, false): Data Is Final
  * X-API2CRM-DATA-STRATEGY `string` (values: simple): Data Strategy
  * X-API2CRM-DATA-ALWAYS-ACTUAL `string` (values: true): Data Is Actual
  * X-API2CRM-DATA-ACTUAL-AT `string`: Data Actual At
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * user_id **required** `string`: User Identifier
  * expand `string`: Expand relations
  * fields `string`: Comma-separated list of fields to include in the response

#### Output
* output [UserEntity](#userentity)

### updateUserEntity
Update user information


```js
data2crm.updateUserEntity({
  "X-API2CRM-USER-KEY": "",
  "X-API2CRM-APPLICATION-KEY": "",
  "user_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-API2CRM-USER-KEY **required** `string`: User Key
  * X-API2CRM-APPLICATION-KEY **required** `string`: Application Key
  * X-API2CRM-NATIVE-ENABLE `string` (values: false, true): Return native response
  * X-API2CRM-DESCRIBE-LIFETIME `string`: Describe lifetime
  * user_id **required** `string`: User Identifier
  * body **required** [UserEntity](#userentity)

#### Output
* output [UserEntityRelation](#userentityrelation)



## Definitions

### AccountDescribe
* AccountDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### AccountEntity
* AccountEntity `object`
  * address `array`: Address
    * items [Address](#address)
  * annual_revenue `string`: Annual Revenue
  * category `string`: Category
  * created_at `string`: Created At
  * description `string`: Description
  * email `array`: Email
    * items [Email](#email)
  * employees `string`: Employees
  * id `string`: Account Identifier
  * industry `array`: Industry
    * items `string`
  * messenger `array`: Messenger
    * items [Messenger](#messenger)
  * name `string`: Name
  * ownership `string`: Ownership
  * phone `array`: Phone
    * items [Phone](#phone)
  * rating `string`: Rating
  * relation [Relation](#relation)
  * sic_code `string`: SIC Code
  * ticker_symbol `string`: Ticker Symbol
  * type `string`: Type
  * updated_at `string`: Updated At
  * website `array`: Website
    * items [Website](#website)

### AccountEntityRelation
* AccountEntityRelation `object`
  * id `string`: Account Identifier

### AccountRelation
* AccountRelation `object`
  * entity [AccountEntityRelation](#accountentityrelation)
  * type `string`: Type

### Address
* Address `object`
  * city `string`: City
  * country `string`: Country
  * state `string`: State
  * street `string`: Street
  * type `string`: Type
  * zip `string`: Zip

### Aggregate
* Aggregate `object`
  * id `string`: Identifier
  * result [ResultAggregate](#resultaggregate)

### ApplicationEntity
* ApplicationEntity `object`
  * authorization `string`: Application authorization
  * company [Company](#company)
  * description `string`: Application description
  * is_authorized `boolean`: Is Authorized
  * key `string`: Application key
  * me [UserEntity](#userentity)
  * plan `string`: Application Plan
  * requests_limit [RequestsLimit](#requestslimit)
  * type `string`: Application platform type
  * url `string`: Application URL

### ApplicationEntityList
* ApplicationEntityList `object`
  * authorization `string`: Application authorization
  * company [Company](#company)
  * description `string`: Application description
  * key `string`: Application key
  * type `string`: Application platform type
  * url `string`: Application URL

### ApplicationEntityRelation
* ApplicationEntityRelation `object`
  * key `string`: Application key

### ApplicationEntityWrite
* ApplicationEntityWrite `object`
  * authorization `string`: Application authorization
  * credential [Credential](#credential)
  * description `string`: Application description
  * type `string`: Application platform type

### AttachmentDescribe
* AttachmentDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### AttachmentEntity
* AttachmentEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * id `string`: Attachment Identifier
  * link `string`: Link
  * mime_type `string`: Mime Type
  * name `string`: Name
  * relation [Relation](#relation)
  * size `integer`: Size (in bytes)
  * title `string`: Title
  * updated_at `string`: Updated At

### AttachmentEntityList
* AttachmentEntityList `object`
  * created_at `string`: Created At
  * description `string`: Description
  * id `string`: Attachment Identifier
  * link `string`: Link
  * mime_type `string`: Mime Type
  * name `string`: Name
  * relation [Relation](#relation)
  * size `integer`: Size (in bytes)
  * title `string`: Title
  * updated_at `string`: Updated At

### AttachmentEntityRelation
* AttachmentEntityRelation `object`
  * id `string`: Attachment Identifier

### AttachmentEntityWrite
* AttachmentEntityWrite `object`
  * created_at `string`: Created At
  * description `string`: Description
  * link `string`: Link
  * mime_type `string`: Mime Type
  * name `string`: Name
  * relation [Relation](#relation)
  * size `integer`: Size (in bytes)
  * title `string`: Title
  * updated_at `string`: Updated At

### AttachmentRelation
* AttachmentRelation `object`
  * entity [AttachmentEntityRelation](#attachmententityrelation)
  * type `string`: Type

### Authorization
* Authorization `object`
  * description `string`: Description
  * platform_credential `array`: Credential
    * items [PlatformCredential](#platformcredential)
  * type `string`: Type

### BulkEntity
* BulkEntity `object`
  * item `array`: Item
    * items [Item](#item)

### BulkEntityRelation
* BulkEntityRelation `object`
  * id `string`: Bulk Identifier
  * item `array`: Item
    * items [Item](#item)

### CallDescribe
* CallDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### CallEntity
* CallEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * direction `string`: Direction
  * ended_at `string`: Ended At
  * id `string`: Call Identifier
  * purpose `string`: Purpose
  * relation [Relation](#relation)
  * result `string`: Result
  * started_at `string`: Started At
  * status `string`: Status
  * subject `string`: Subject
  * updated_at `string`: Updated At

### CallEntityRelation
* CallEntityRelation `object`
  * id `string`: Call Identifier

### CallRelation
* CallRelation `object`
  * entity [CallEntityRelation](#callentityrelation)
  * type `string`: Type

### CampaignDescribe
* CampaignDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### CampaignEntity
* CampaignEntity `object`
  * actual_cost `number`: Actual Cost
  * budgeted_cost `number`: Budgeted Cost
  * created_at `string`: Created At
  * currency [Currency](#currency)
  * description `string`: Description
  * ended_at `string`: Ended At
  * expected_end_at `string`: Expected End At
  * expected_response `number`: Expected Response
  * expected_revenue `number`: Expected Revenue
  * expected_start_at `string`: Expected Start At
  * id `string`: Campaign Identifier
  * is_active `boolean`: Is Active
  * name `string`: Name
  * numbers_sent `integer`: Numbers Sent
  * objective `string`: Objective
  * relation [Relation](#relation)
  * started_at `string`: Started At
  * status `string`: Status
  * type `string`: Type
  * updated_at `string`: Updated At

### CampaignEntityRelation
* CampaignEntityRelation `object`
  * id `string`: Campaign Identifier

### CampaignRelation
* CampaignRelation `object`
  * entity [CampaignEntityRelation](#campaignentityrelation)
  * type `string`: Type

### CaseDescribe
* CaseDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### CaseRelation
* CaseRelation `object`
  * entity [CasesEntityRelation](#casesentityrelation)
  * type `string`: Type

### CasesEntity
* CasesEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * ended_at `string`: Ended At
  * expected_end_at `string`: Expected End At
  * id `string`: Case Identifier
  * internal_comments `string`: Internal Comments
  * is_closed `boolean`: Is Closed
  * is_escalated `boolean`: Is Escalated
  * number `string`: Number
  * origin `string`: Origin
  * pipeline_with_stage `string`: Pipeline With Stage
  * priority `string`: Priority
  * reason `string`: Reason
  * relation [Relation](#relation)
  * resolution `string`: Resolution
  * resolution_comments `string`: Resolution Comments
  * satisfaction `string`: Satisfaction
  * status `string`: Status
  * subject `string`: Subject
  * type `string`: Type
  * updated_at `string`: Updated At

### CasesEntityRelation
* CasesEntityRelation `object`
  * id `string`: Case Identifier

### CommentDescribe
* CommentDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### CommentEntity
* CommentEntity `object`
  * body `string`: Body
  * created_at `string`: Created At
  * id `string`: Comment Identifier
  * relation [Relation](#relation)
  * updated_at `string`: Updated At

### CommentEntityRelation
* CommentEntityRelation `object`
  * id `string`: Comment Identifier

### CommentRelation
* CommentRelation `object`
  * entity [CommentEntityRelation](#commententityrelation)
  * type `string`: Type

### Company
* Company `object`
  * id `string`: Company Item Identifier

### ContactDescribe
* ContactDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### ContactEntity
* ContactEntity `object`
  * address `array`: Address
    * items [Address](#address)
  * birth_date `string`: Birth Date
  * created_at `string`: Created At
  * department `string`: Department
  * description `string`: Description
  * do_not_call `boolean`: Do Not Call
  * email `array`: Email
    * items [Email](#email)
  * first_name `string`: First Name
  * id `string`: Contact Identifier
  * last_name `string`: Last Name
  * lead_source `string`: Lead Source
  * messenger `array`: Messenger
    * items [Messenger](#messenger)
  * middle_name `string`: Middle Name
  * name_suffix `string`: Name Suffix
  * phone `array`: Phone
    * items [Phone](#phone)
  * position `string`: Position (job)
  * relation [Relation](#relation)
  * salutation `string`: Salutation
  * sync_to_outlook `boolean`: Sync To Outlook
  * type `string`: Type
  * updated_at `string`: Updated At
  * website `array`: Website
    * items [Website](#website)

### ContactEntityRelation
* ContactEntityRelation `object`
  * id `string`: Contact Identifier

### ContactRelation
* ContactRelation `object`
  * entity [ContactEntityRelation](#contactentityrelation)
  * type `string`: Type

### Cost
* Cost `object`
  * currency `string`: Currency
  * value `number`: Value

### Count
* Count `object`
  * total `integer`: Total

### CreateDescribe
* CreateDescribe `object`

### Credential
* Credential `object`

### Currency
* Currency `object`
  * id `string`: ISO 4217 Code

### CustomEntityEntity
* CustomEntityEntity `object`
  * collection `string`: Collection
  * entity `string`: Entity
  * id `string`: Custom Entity Identifier
  * is_custom `boolean`: Is Custom
  * is_supported `boolean`: Is Supported
  * name `string`: Name

### CustomEntityItemDescribe
* CustomEntityItemDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### CustomEntityItemEntity
* CustomEntityItemEntity `object`
  * address `array`: Address
    * items [Address](#address)
  * created_at `string`: Created At
  * email `array`: Email
    * items [Email](#email)
  * id `string`: Custom Entity Item Identifier
  * messenger `array`: Messenger
    * items [Messenger](#messenger)
  * phone `array`: Phone
    * items [Phone](#phone)
  * relation [Relation](#relation)
  * updated_at `string`: Updated At
  * website `array`: Website
    * items [Website](#website)

### CustomEntityItemEntityRelation
* CustomEntityItemEntityRelation `object`
  * id `string`: Custom Entity Item Identifier

### CustomFieldEntity
* CustomFieldEntity `object`
  * array_item `string`: Array Item
  * format `string`: Format
  * id `string`: Custom Field Identifier
  * is_enum `boolean`: Is Enum
  * label `string`: Label
  * relation `array`: Relation
    * items `string`
  * type `string`: Type

### CustomFieldItemDescribe
* CustomFieldItemDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### CustomFieldItemEntity
* CustomFieldItemEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * entity `string`: Entity
  * id `string`: Custom Field Item Identifier
  * label `string`: Label
  * name `string`: Name
  * relation [Relation](#relation)
  * updated_at `string`: Updated At

### CustomFieldItemEntityRelation
* CustomFieldItemEntityRelation `object`
  * id `string`: Custom Field Item Identifier

### Discount
* Discount `object`
  * percent_value `number`: Percent Value
  * type `string`: Type
  * value `number`: Value

### Email
* Email `object`
  * address `string`: Address
  * type `string`: Type

### EmailDescribe
* EmailDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### EmailEntity
* EmailEntity `object`
  * bcc `array`: BCC
    * items `string`
  * body `string`: Body
  * cc `array`: CC
    * items `string`
  * created_at `string`: Created At
  * direction `string`: Direction
  * from `string`: From
  * id `string`: Email Identifier
  * relation [Relation](#relation)
  * sent_at `string`: Sent At
  * status `string`: Status
  * subject `string`: Subject
  * to `array`: To
    * items `string`
  * updated_at `string`: Updated At

### EmailEntityRelation
* EmailEntityRelation `object`
  * id `string`: Email Identifier

### EmailRelation
* EmailRelation `object`
  * entity [EmailEntityRelation](#emailentityrelation)
  * type `string`: Type

### EventDescribe
* EventDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### EventEntity
* EventEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * ended_at `string`: Ended At
  * id `string`: Event Identifier
  * is_all_day `boolean`: Is All Day
  * location `string`: Location
  * relation [Relation](#relation)
  * started_at `string`: Started At
  * status `string`: Status
  * subject `string`: Subject
  * updated_at `string`: Updated At

### EventEntityRelation
* EventEntityRelation `object`
  * id `string`: Event Identifier

### EventRelation
* EventRelation `object`
  * entity [EventEntityRelation](#evententityrelation)
  * type `string`: Type

### FetchAllDescribe
* FetchAllDescribe `object`

### FetchDescribe
* FetchDescribe `object`

### Header
* Header `object`
  * name `string`: Name
  * value `string`: Value

### Image
* Image `object`
  * type `string`: Type
  * url `string`: URL

### InvoiceDescribe
* InvoiceDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### InvoiceEntity
* InvoiceEntity `object`
  * address `array`: Address
    * items [Address](#address)
  * adjustment `number`: Adjustment
  * balance `number`: Balance
  * created_at `string`: Created At
  * currency [Currency](#currency)
  * description `string`: Description
  * discount `array`: Discount
    * items [Discount](#discount)
  * due_date `string`: Due Date
  * excise_duty `number`: Excise Duty
  * grand_total `number`: Grand Total
  * id `string`: Invoice Identifier
  * invoice_date `string`: Invoice Date
  * number `string`: Number
  * purchase_order `string`: Purchase Order
  * received `number`: Received
  * relation [Relation](#relation)
  * sales_commission `number`: Sales Commission
  * shipping_and_handling `number`: Shipping And Handling
  * status `string`: Status
  * subject `string`: Subject
  * subtotal `number`: Subtotal
  * tax `array`: Tax
    * items [Tax](#tax)
  * terms_and_conditions `string`: Terms And Conditions
  * total_price `number`: Total Price
  * updated_at `string`: Updated At

### InvoiceEntityRelation
* InvoiceEntityRelation `object`
  * id `string`: Invoice Identifier

### InvoiceItemDescribe
* InvoiceItemDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### InvoiceItemEntity
* InvoiceItemEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * discount `array`: Discount
    * items [Discount](#discount)
  * id `string`: InvoiceItem Identifier
  * list_price `number`: List Price
  * number `string`: Number
  * quantity `number`: Quantity
  * relation [Relation](#relation)
  * sales_price `number`: Sales Price
  * subtotal `number`: Subtotal
  * tax `array`: Tax
    * items [Tax](#tax)
  * total_price `number`: Total Price
  * unit `string`: Unit
  * updated_at `string`: Updated At

### InvoiceItemEntityRelation
* InvoiceItemEntityRelation `object`
  * id `string`: InvoiceItem Identifier

### InvoiceItemRelation
* InvoiceItemRelation `object`
  * entity [InvoiceItemEntityRelation](#invoiceitementityrelation)
  * type `string`: Type

### InvoiceRelation
* InvoiceRelation `object`
  * entity [InvoiceEntityRelation](#invoiceentityrelation)
  * type `string`: Type

### Item
* Item `object`

### LeadDescribe
* LeadDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### LeadEntity
* LeadEntity `object`
  * address `array`: Address
    * items [Address](#address)
  * annual_revenue `string`: Annual Revenue
  * birth_date `string`: Birth Date
  * company `string`: Company
  * created_at `string`: Created At
  * department `string`: Department
  * description `string`: Description
  * do_not_call `boolean`: Do Not Call
  * email `array`: Email
    * items [Email](#email)
  * first_name `string`: First Name
  * id `string`: Lead Identifier
  * industry `array`: Industry
    * items `string`
  * last_name `string`: Last Name
  * messenger `array`: Messenger
    * items [Messenger](#messenger)
  * middle_name `string`: Middle Name
  * name_suffix `string`: Name Suffix
  * phone `array`: Phone
    * items [Phone](#phone)
  * position `string`: Position (job)
  * rating `string`: Rating
  * relation [Relation](#relation)
  * salutation `string`: Salutation
  * source `string`: Lead Source
  * source_description `string`: Lead Source Description
  * status `string`: Status
  * status_description `string`: Status Description
  * type `string`: Type
  * updated_at `string`: Updated At
  * website `array`: Website
    * items [Website](#website)

### LeadEntityRelation
* LeadEntityRelation `object`
  * id `string`: Lead Identifier

### LeadRelation
* LeadRelation `object`
  * entity [LeadEntityRelation](#leadentityrelation)
  * type `string`: Type

### MeetingDescribe
* MeetingDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### MeetingEntity
* MeetingEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * ended_at `string`: Ended At
  * id `string`: Meeting Identifier
  * location `string`: Location
  * relation [Relation](#relation)
  * result `string`: Result
  * started_at `string`: Started At
  * status `string`: Status
  * subject `string`: Subject
  * updated_at `string`: Updated At

### MeetingEntityRelation
* MeetingEntityRelation `object`
  * id `string`: Meeting Identifier

### MeetingRelation
* MeetingRelation `object`
  * entity [MeetingEntityRelation](#meetingentityrelation)
  * type `string`: Type

### Messenger
* Messenger `object`
  * location `string`: Location
  * type `string`: Type

### NoteDescribe
* NoteDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### NoteEntity
* NoteEntity `object`
  * body `string`: Body
  * created_at `string`: Created At
  * id `string`: Note Identifier
  * relation [Relation](#relation)
  * subject `string`: Subject
  * updated_at `string`: Updated At

### NoteEntityRelation
* NoteEntityRelation `object`
  * id `string`: Note Identifier

### NoteRelation
* NoteRelation `object`
  * entity [NoteEntityRelation](#noteentityrelation)
  * type `string`: Type

### OpportunityDescribe
* OpportunityDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### OpportunityEntity
* OpportunityEntity `object`
  * amount `number`: Amount
  * created_at `string`: Created At
  * currency [Currency](#currency)
  * description `string`: Description
  * ended_at `string`: Closed At
  * expected_amount `number`: Expected Amount
  * expected_end_at `string`: Expected End At
  * id `string`: Opportunity Identifier
  * lead_source `string`: Lead Source
  * name `string`: Name
  * next_step `string`: Next Step
  * pipeline_with_stage `string`: Pipeline With Stage
  * probability `integer`: Probability
  * relation [Relation](#relation)
  * state `string`: State
  * type `string`: Type
  * updated_at `string`: Updated At

### OpportunityEntityRelation
* OpportunityEntityRelation `object`
  * id `string`: Opportunity Identifier

### OpportunityProductDescribe
* OpportunityProductDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### OpportunityProductEntity
* OpportunityProductEntity `object`
  * created_at `string`: Created At
  * currency [Currency](#currency)
  * description `string`: Description
  * discount `array`: Discount
    * items [Discount](#discount)
  * id `string`: OpportunityProduct Identifier
  * list_price `number`: List Price
  * name `string`: Name
  * number `string`: Number
  * quantity `number`: Quantity
  * relation [Relation](#relation)
  * sales_price `number`: Sales Price
  * subtotal `number`: Subtotal
  * tax `array`: Tax
    * items [Tax](#tax)
  * total_price `number`: Total Price
  * unit `string`: Unit
  * updated_at `string`: Updated At

### OpportunityProductEntityRelation
* OpportunityProductEntityRelation `object`
  * id `string`: OpportunityProduct Identifier

### OpportunityProductRelation
* OpportunityProductRelation `object`
  * entity [OpportunityProductEntityRelation](#opportunityproductentityrelation)
  * type `string`: Type

### OpportunityRelation
* OpportunityRelation `object`
  * entity [OpportunityEntityRelation](#opportunityentityrelation)
  * type `string`: Type

### Phone
* Phone `object`
  * number `string`: Number
  * type `string`: Type

### PlatformCredential
* PlatformCredential `object`

### PlatformEntity
* PlatformEntity `object`
  * authorization `array`: Authorization
    * items [Authorization](#authorization)
  * name `string`: Name
  * resource [Resource](#resource)
  * type `string`: Type

### PostDescribe
* PostDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### PostEntity
* PostEntity `object`
  * body `string`: Body
  * created_at `string`: Created At
  * id `string`: Post Identifier
  * relation [Relation](#relation)
  * updated_at `string`: Updated At

### PostEntityRelation
* PostEntityRelation `object`
  * id `string`: Post Identifier

### PostRelation
* PostRelation `object`
  * entity [PostEntityRelation](#postentityrelation)
  * type `string`: Type

### Price
* Price `object`
  * currency `string`: Currency
  * value `number`: Value

### PriceBookDescribe
* PriceBookDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### PriceBookEntity
* PriceBookEntity `object`
  * created_at `string`: Created At
  * currency [Currency](#currency)
  * description `string`: Description
  * id `string`: PriceBook Identifier
  * is_active `boolean`: Is Active
  * is_standard `boolean`: Is Standard
  * name `string`: Name
  * relation [Relation](#relation)
  * type `string`: Number
  * updated_at `string`: Updated At

### PriceBookEntityRelation
* PriceBookEntityRelation `object`
  * id `string`: PriceBook Identifier

### PriceBookItemDescribe
* PriceBookItemDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### PriceBookItemEntity
* PriceBookItemEntity `object`
  * code `string`: Code
  * created_at `string`: Created At
  * id `string`: PriceBookItem Identifier
  * is_active `boolean`: Is Active
  * name `string`: Name
  * price `array`: Price
    * items [Price](#price)
  * relation [Relation](#relation)
  * updated_at `string`: Updated At
  * use_standard_price `boolean`: Is Standard

### PriceBookItemEntityRelation
* PriceBookItemEntityRelation `object`
  * id `string`: PriceBookItem Identifier

### PriceBookItemRelation
* PriceBookItemRelation `object`
  * entity [PriceBookItemEntityRelation](#pricebookitementityrelation)
  * type `string`: Type

### PriceBookRelation
* PriceBookRelation `object`
  * entity [PriceBookEntityRelation](#pricebookentityrelation)
  * type `string`: Type

### ProductDescribe
* ProductDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### ProductEntity
* ProductEntity `object`
  * category `array`: Category
    * items `string`
  * code `string`: Code
  * cost `array`: Cost
    * items [Cost](#cost)
  * created_at `string`: Created At
  * description `string`: Description
  * id `string`: Product Identifier
  * image `array`: Image
    * items [Image](#image)
  * is_active `boolean`: Is active
  * is_taxable `boolean`: Is taxable
  * manufacturer `string`: Manufacturer
  * name `string`: Name
  * price `array`: Price
    * items [Price](#price)
  * quantity_in_demand `number`: Quantity In Demand
  * quantity_in_stock `number`: Quantity In Stock
  * relation [Relation](#relation)
  * reorder_level `number`: Reorder Level
  * sales_ended_at `string`: Sales Ended At
  * sales_started_at `string`: Sales Started At
  * support_ended_at `string`: Support Ended At
  * support_started_at `string`: Support Started At
  * type `string`: Type
  * unit `string`: Unit
  * updated_at `string`: Updated At
  * url `string`: URL
  * vendor `string`: Vendor

### ProductEntityRelation
* ProductEntityRelation `object`
  * id `string`: Product Identifier

### ProductRelation
* ProductRelation `object`
  * entity [ProductEntityRelation](#productentityrelation)
  * type `string`: Type

### ProjectDescribe
* ProjectDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### ProjectEntity
* ProjectEntity `object`
  * category `string`: Category
  * created_at `string`: Created At
  * description `string`: Body
  * ended_at `string`: Ended At
  * id `string`: Project Identifier
  * name `string`: Name
  * pipeline_with_stage `string`: Pipeline With Stage
  * priority `string`: Priority
  * relation [Relation](#relation)
  * started_at `string`: Started At
  * status `string`: Status
  * updated_at `string`: Updated At

### ProjectEntityRelation
* ProjectEntityRelation `object`
  * id `string`: Project Identifier

### ProjectRelation
* ProjectRelation `object`
  * entity [ProjectEntityRelation](#projectentityrelation)
  * type `string`: Type

### QuoteDescribe
* QuoteDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### QuoteEntity
* QuoteEntity `object`
  * address `array`: Address
    * items [Address](#address)
  * adjustment `number`: Adjustment
  * carrier `string`: Carrier
  * created_at `string`: Created At
  * currency [Currency](#currency)
  * description `string`: Description
  * discount `array`: Discount
    * items [Discount](#discount)
  * expiration_date `string`: Expiration Date
  * grand_total `number`: Grand Total
  * id `string`: Quote Identifier
  * number `string`: Number
  * payment_terms `string`: Payment Terms
  * relation [Relation](#relation)
  * shipping_and_handling `number`: Shipping And Handling
  * status `string`: Status
  * subject `string`: Subject
  * subtotal `number`: Subtotal
  * tax `array`: Tax
    * items [Tax](#tax)
  * terms_and_conditions `string`: Terms And Conditions
  * total_price `number`: Total Price
  * updated_at `string`: Updated At

### QuoteEntityRelation
* QuoteEntityRelation `object`
  * id `string`: Quote Identifier

### QuoteItemDescribe
* QuoteItemDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### QuoteItemEntity
* QuoteItemEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * discount `array`: Discount
    * items [Discount](#discount)
  * id `string`: QuoteItem Identifier
  * list_price `number`: List Price
  * number `string`: Number
  * quantity `number`: Quantity
  * relation [Relation](#relation)
  * sales_price `number`: Sales Price
  * subtotal `number`: Subtotal
  * tax `array`: Tax
    * items [Tax](#tax)
  * total_price `number`: Total Price
  * unit `string`: Unit
  * updated_at `string`: Updated At

### QuoteItemEntityRelation
* QuoteItemEntityRelation `object`
  * id `string`: QuoteItem Identifier

### QuoteItemRelation
* QuoteItemRelation `object`
  * entity [QuoteItemEntityRelation](#quoteitementityrelation)
  * type `string`: Type

### QuoteRelation
* QuoteRelation `object`
  * entity [QuoteEntityRelation](#quoteentityrelation)
  * type `string`: Type

### Relation
* Relation `object`
  * account `array`: Account
    * items [AccountRelation](#accountrelation)
  * attachment `array`: Attachment
    * items [AttachmentRelation](#attachmentrelation)
  * call `array`: Call
    * items [CallRelation](#callrelation)
  * campaign `array`: Campaign
    * items [CampaignRelation](#campaignrelation)
  * case `array`: Case
    * items [CaseRelation](#caserelation)
  * comment `array`: Comment
    * items [CommentRelation](#commentrelation)
  * contact `array`: Contact
    * items [ContactRelation](#contactrelation)
  * email `array`: Email
    * items [EmailRelation](#emailrelation)
  * event `array`: Event
    * items [EventRelation](#eventrelation)
  * invoice `array`: Invoice
    * items [InvoiceRelation](#invoicerelation)
  * invoiceItem `array`: Invoice Item
    * items [InvoiceItemRelation](#invoiceitemrelation)
  * lead `array`: Lead
    * items [LeadRelation](#leadrelation)
  * meeting `array`: Meeting
    * items [MeetingRelation](#meetingrelation)
  * note `array`: Note
    * items [NoteRelation](#noterelation)
  * opportunity `array`: Opportunity
    * items [OpportunityRelation](#opportunityrelation)
  * opportunityProduct `array`: Opportunity Product
    * items [OpportunityProductRelation](#opportunityproductrelation)
  * post `array`: Post
    * items [PostRelation](#postrelation)
  * priceBook `array`: Price Book
    * items [PriceBookRelation](#pricebookrelation)
  * priceBookItem `array`: Price Book Item
    * items [PriceBookItemRelation](#pricebookitemrelation)
  * product `array`: Product
    * items [ProductRelation](#productrelation)
  * project `array`: Project
    * items [ProjectRelation](#projectrelation)
  * quote `array`: Quote
    * items [QuoteRelation](#quoterelation)
  * quoteItem `array`: Quote Item
    * items [QuoteItemRelation](#quoteitemrelation)
  * tag `array`: Tag
    * items [TagRelation](#tagrelation)
  * task `array`: Task
    * items [TaskRelation](#taskrelation)
  * ticket `array`: Ticket
    * items [TicketRelation](#ticketrelation)
  * user `array`: User
    * items [UserRelation](#userrelation)

### RequestEntity
* RequestEntity `object`
  * content `string`: Content (in base64 encoding)
  * header `array`: Header
    * items [Header](#header)
  * method `string`: Method
  * path `string`: Path (with query)

### RequestEntityRelation
* RequestEntityRelation `object`
  * content `string`: Content (in base64 encoding)
  * header `array`: Header
    * items [Header](#header)
  * status_code `integer`: Status Code

### RequestsLimit
* RequestsLimit `object`
  * is_exceeded `boolean`: Is Exceeded
  * retry_after `string`: Retry After
  * type `array`: Type
    * items [Type](#type)

### Resource
* Resource `object`

### ResultAggregate
* ResultAggregate `object`

### SchemaDescribe
* SchemaDescribe `object`
  * create [CreateDescribe](#createdescribe)
  * fetch [FetchDescribe](#fetchdescribe)
  * fetchAll [FetchAllDescribe](#fetchalldescribe)
  * update [UpdateDescribe](#updatedescribe)

### TagDescribe
* TagDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### TagEntity
* TagEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * entity `string` (values: account, contact, lead, opportunity, task, call, email, event, meeting, note, attachment, case, product, campaign, project, invoice, invoiceItem, quote, quoteItem, priceBook, priceBookItem, comment): Entity
  * id `string`: Tag Identifier
  * name `string`: Name
  * relation [Relation](#relation)
  * updated_at `string`: Updated At

### TagEntityRelation
* TagEntityRelation `object`
  * id `string`: Tag Identifier

### TagRelation
* TagRelation `object`
  * entity [TagEntityRelation](#tagentityrelation)
  * type `string`: Type

### TaskDescribe
* TaskDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### TaskEntity
* TaskEntity `object`
  * created_at `string`: Created At
  * description `string`: Description
  * due_at `string`: Due At
  * ended_at `string`: Ended At
  * id `string`: Task Identifier
  * priority `string`: Priority
  * relation [Relation](#relation)
  * reminder_at `string`: Remainder At
  * started_at `string`: Started At
  * status `string`: Status
  * subject `string`: Name
  * updated_at `string`: Updated At

### TaskEntityRelation
* TaskEntityRelation `object`
  * id `string`: Task Identifier

### TaskRelation
* TaskRelation `object`
  * entity [TaskEntityRelation](#taskentityrelation)
  * type `string`: Type

### Tax
* Tax `object`
  * percent_value `number`: Percent Value
  * type `string`: Type
  * value `number`: Value

### TicketDescribe
* TicketDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### TicketEntity
* TicketEntity `object`
  * category `array`: Category
    * items `string`
  * closed_at `string`: Closed At
  * created_at `string`: Created At
  * description `string`: Description
  * due_at `string`: Due At
  * email `array`: Email
    * items [Email](#email)
  * id `string`: Ticket Identifier
  * number `string`: Number
  * pipeline_with_stage `string`: Pipeline With Stage
  * priority `string`: Priority
  * relation [Relation](#relation)
  * resolution `string`: Resolution
  * source `string`: Source
  * subject `string`: Subject
  * updated_at `string`: Updated At

### TicketEntityRelation
* TicketEntityRelation `object`
  * id `string`: Ticket Identifier

### TicketRelation
* TicketRelation `object`
  * entity [TicketEntityRelation](#ticketentityrelation)
  * type `string`: Type

### Type
* Type `object`
  * available `integer`: Available
  * count `number`: Count
  * period `integer`: Period
  * type `string`: Type

### UpdateDescribe
* UpdateDescribe `object`

### UserDescribe
* UserDescribe `object`
  * entity `string`: Entity
  * schema [SchemaDescribe](#schemadescribe)

### UserEntity
* UserEntity `object`
  * address `array`: Address
    * items [Address](#address)
  * created_at `string`: Created At
  * department `string`: Department
  * description `string`: Description
  * email `array`: Email
    * items [Email](#email)
  * first_name `string`: First Name
  * id `string`: User Identifier
  * is_admin `boolean`: Is admin
  * is_associable `boolean`: Is associable
  * last_name `string`: Last Name
  * messenger `array`: Messenger
    * items [Messenger](#messenger)
  * middle_name `string`: Middle Name
  * name_suffix `string`: Name Suffix
  * phone `array`: Phone
    * items [Phone](#phone)
  * position `string`: Position
  * relation [Relation](#relation)
  * salutation `string`: Salutation
  * status `string`: Status
  * updated_at `string`: Updated At
  * username `string`: Username
  * website `array`: Website
    * items [Website](#website)

### UserEntityRelation
* UserEntityRelation `object`
  * id `string`: User Identifier

### UserRelation
* UserRelation `object`
  * entity [UserEntityRelation](#userentityrelation)
  * type `string`: Type

### Website
* Website `object`
  * address `string`: Address
  * type `string`: Type


