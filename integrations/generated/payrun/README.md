# @datafire/payrun

Client library for PayRun.IO

## Installation and Usage
```bash
npm install --save @datafire/payrun
```
```js
let payrun = require('@datafire/payrun').create();

.then(data => {
  console.log(data);
});
```

## Description

Open, scableable, transparent payroll API.

## Actions

### DeleteEmployer
Delete the specified employer


```js
payrun.DeleteEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployer
Get the specified employer object


```js
payrun.GetEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employer](#employer)

### PatchEmployer
Patches the specified employer with the supplied values


```js
payrun.PatchEmployer({
  "Employer": {},
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Employer **required** [Employer](#employer)
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employer](#employer)

### PutEmployer
Updates the existing specified employer object


```js
payrun.PutEmployer({
  "EmployerId": "",
  "Employer": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Employer **required** [Employer](#employer)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employer](#employer)

### GetCisLineTypeWithTag
Gets the CIS line types with the tag


```js
payrun.GetCisLineTypeWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteCisLineType
Delete the specified CIS line type


```js
payrun.DeleteCisLineType({
  "EmployerId": "",
  "CisLineTypeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineTypeId **required** `string`: The CIS line type unique identifier. E.g. TYPEA
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCisLineTypeFromEmployer
Gets the specified CIS line type from employer.


```js
payrun.GetCisLineTypeFromEmployer({
  "EmployerId": "",
  "CisLineTypeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineTypeId **required** `string`: The CIS line type unique identifier. E.g. TYPEA
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [CisLineType](#cislinetype)

### PutCisLineTypeIntoEmployer
Updates the existing specified CIS line type object


```js
payrun.PutCisLineTypeIntoEmployer({
  "EmployerId": "",
  "CisLineTypeId": "",
  "CisLineType": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineTypeId **required** `string`: The CIS line type unique identifier. E.g. TYPEA
  * CisLineType **required** [CisLineType](#cislinetype)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [CisLineType](#cislinetype)

### DeleteCisLineTypeTag
Deletes a tag from the CIS line type


```js
payrun.DeleteCisLineTypeTag({
  "EmployerId": "",
  "CisLineTypeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineTypeId **required** `string`: The CIS line type unique identifier. E.g. TYPEA
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromCisLineType
Gets the tag from the CIS line type


```js
payrun.GetTagFromCisLineType({
  "EmployerId": "",
  "CisLineTypeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineTypeId **required** `string`: The CIS line type unique identifier. E.g. TYPEA
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutCisLineTypeTag
Inserts a new tag on the CIS line type


```js
payrun.PutCisLineTypeTag({
  "EmployerId": "",
  "CisLineTypeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineTypeId **required** `string`: The CIS line type unique identifier. E.g. TYPEA
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromCisLineType
Gets all the tags from the CIS line type


```js
payrun.GetTagsFromCisLineType({
  "EmployerId": "",
  "CisLineTypeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineTypeId **required** `string`: The CIS line type unique identifier. E.g. TYPEA
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetCisLineTypesFromEmployer
Get links to all CIS line types for the specified employer.


```js
payrun.GetCisLineTypesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostCisLineTypeIntoEmployer
Create a new CIS line type object


```js
payrun.PostCisLineTypeIntoEmployer({
  "EmployerId": "",
  "CisLineType": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisLineType **required** [CisLineType](#cislinetype)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetCisLineTypesWithTag
Gets the CIS line type with the tag


```js
payrun.GetCisLineTypesWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllCisLineTypeTags
Gets all the CIS line type tags


```js
payrun.GetAllCisLineTypeTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteCisTransaction
Deletes the specified CIS transaction


```js
payrun.DeleteCisTransaction({
  "EmployerId": "",
  "CisTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisTransactionId **required** `string`: The CIS transaction unique identifier. E.g. CISTRAN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCisTransactionFromEmployer
Returns the specified CIS transaction


```js
payrun.GetCisTransactionFromEmployer({
  "EmployerId": "",
  "CisTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * CisTransactionId **required** `string`: The CIS transaction unique identifier. E.g. CISTRAN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [CisTransaction](#cistransaction)

### GetCisTransactionsFromEmployer
Get links for all CIS transactions for the specified employer


```js
payrun.GetCisTransactionsFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteDpsMessage
Deletes the DPS message


```js
payrun.DeleteDpsMessage({
  "EmployerId": "",
  "DpsMessageId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * DpsMessageId **required** `string`: The DPS message unique identifier. E.g. DPS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetDpsMessageFromEmployer
Gets the DPS message


```js
payrun.GetDpsMessageFromEmployer({
  "EmployerId": "",
  "DpsMessageId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * DpsMessageId **required** `string`: The DPS message unique identifier. E.g. DPS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [DpsMessage](#dpsmessage)

### PatchDpsMessage
Patches the specified DPS message with the supplied values


```js
payrun.PatchDpsMessage({
  "EmployerId": "",
  "DpsMessageId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * DpsMessageId **required** `string`: The DPS message unique identifier. E.g. DPS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [DpsMessage](#dpsmessage)

### GetDpsMessagesFromEmployer
Gets the DPS message links


```js
payrun.GetDpsMessagesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteEmployee
Delete the specified employee


```js
payrun.DeleteEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployeeFromEmployer
Gets the specified employee from employer by employee code.


```js
payrun.GetEmployeeFromEmployer({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employee](#employee)

### PatchEmployee
Patches the specified employee with the supplied values


```js
payrun.PatchEmployee({
  "Employee": {},
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Employee **required** [Employee](#employee)
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employee](#employee)

### PutEmployeeIntoEmployer
Updates the existing specified employee object


```js
payrun.PutEmployeeIntoEmployer({
  "EmployerId": "",
  "EmployeeId": "",
  "Employee": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Employee **required** [Employee](#employee)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employee](#employee)

### DeleteAEAssessment
Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments


```js
payrun.DeleteAEAssessment({
  "EmployerId": "",
  "EmployeeId": "",
  "AEAssessmentId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * AEAssessmentId **required** `string`: The auto enrolment assessment unique identifier. E.g. AE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetAEAssessmentFromEmployee
Gets the auto enrolment assessment from the specified employee


```js
payrun.GetAEAssessmentFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "AEAssessmentId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * AEAssessmentId **required** `string`: The auto enrolment assessment unique identifier. E.g. AE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [AEAssessment](#aeassessment)

### PutNewAEAssessment
Creates a new auto enrolment assessment for the employee. Used to insert historical assessments


```js
payrun.PutNewAEAssessment({
  "EmployerId": "",
  "EmployeeId": "",
  "AEAssessmentId": "",
  "AEAssessment": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * AEAssessmentId **required** `string`: The auto enrolment assessment unique identifier. E.g. AE001
  * AEAssessment **required** [AEAssessment](#aeassessment)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [AEAssessment](#aeassessment)

### GetAEAssessmentsFromEmployee
Gets all auto enrolment assessments from the specified employee


```js
payrun.GetAEAssessmentsFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNewAEAssessment
Creates a new auto enrolment assessment for the employee. Used to insert historical assessments


```js
payrun.PostNewAEAssessment({
  "EmployerId": "",
  "EmployeeId": "",
  "AEAssessment": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * AEAssessment **required** [AEAssessment](#aeassessment)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetCommentariesFromEmployee
Get links to all commentaries for the specified employee.


```js
payrun.GetCommentariesFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetCommentaryFromEmployee
Gets the specified commentary report from the employee


```js
payrun.GetCommentaryFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "CommentaryId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * CommentaryId **required** `string`: The commentary unique identifier. E.g. C001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Commentary](#commentary)

### GetPayInstructionWithTag
Gets the pay instructions with the tag


```js
payrun.GetPayInstructionWithTag({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePayInstruction
Delete the specified pay instruction


```js
payrun.DeletePayInstruction({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayInstructionFromEmployee
Returns the specified pay instruction from employee


```js
payrun.GetPayInstructionFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayInstruction](#payinstruction)

### PatchPayInstruction
Patches the specified pay instruction with the supplied values


```js
payrun.PatchPayInstruction({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "PayInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * PayInstruction **required** [PayInstruction](#payinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayInstruction](#payinstruction)

### PutPayInstruction
Updates the existing specified pay instruction object


```js
payrun.PutPayInstruction({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "PayInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * PayInstruction **required** [PayInstruction](#payinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayInstruction](#payinstruction)

### DeletePayInstructionTag
Deletes a tag from the pay instruction


```js
payrun.DeletePayInstructionTag({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromPayInstruction
Gets the tag from the pay instruction


```js
payrun.GetTagFromPayInstruction({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutPayInstructionTag
Inserts a new tag on the pay instruction


```js
payrun.PutPayInstructionTag({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromPayInstruction
Gets all the tags from the pay instruction


```js
payrun.GetTagsFromPayInstruction({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayInstructionsFromEmployee
Get links to all pay instructions for the specified employee


```js
payrun.GetPayInstructionsFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostPayInstruction
Creates a new pay instruction object


```js
payrun.PostPayInstruction({
  "EmployerId": "",
  "EmployeeId": "",
  "PayInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayInstruction **required** [PayInstruction](#payinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetPayInstructionsWithTag
Gets the pay instructions with the tag


```js
payrun.GetPayInstructionsWithTag({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllPayInstructionTags
Gets all the pay instruction tags


```js
payrun.GetAllPayInstructionTags({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayLineWithTag
Gets the pay lines with the tag


```js
payrun.GetPayLineWithTag({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayLineFromEmployee
Returns the specified pay line from employee


```js
payrun.GetPayLineFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "PayLineId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayLineId **required** `string`: The pay line unique identifier. E.g. PL001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayLine](#payline)

### DeletePayLineTag
Deletes a tag from the pay line


```js
payrun.DeletePayLineTag({
  "EmployerId": "",
  "EmployeeId": "",
  "PayLineId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayLineId **required** `string`: The pay line unique identifier. E.g. PL001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromPayLine
Gets the tag from the pay line


```js
payrun.GetTagFromPayLine({
  "EmployerId": "",
  "EmployeeId": "",
  "PayLineId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayLineId **required** `string`: The pay line unique identifier. E.g. PL001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutPayLineTag
Inserts a new tag on the pay line


```js
payrun.PutPayLineTag({
  "EmployerId": "",
  "EmployeeId": "",
  "PayLineId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayLineId **required** `string`: The pay line unique identifier. E.g. PL001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromPayLine
Gets all the tags from the pay line


```js
payrun.GetTagsFromPayLine({
  "EmployerId": "",
  "EmployeeId": "",
  "PayLineId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * PayLineId **required** `string`: The pay line unique identifier. E.g. PL001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayLinesFromEmployee
Get links to all pay lines for the specified employee


```js
payrun.GetPayLinesFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayLinesWithTag
Gets the pay line with the tag


```js
payrun.GetPayLinesWithTag({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllPayLineTags
Gets all the pay line tags


```js
payrun.GetAllPayLineTags({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayRunsFromEmployee
Get links to all pay runs for the specified employee.


```js
payrun.GetPayRunsFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteEmployeeRevisionByNumber
Deletes the specified employee revision for the matching revision number


```js
payrun.DeleteEmployeeRevisionByNumber({
  "EmployerId": "",
  "EmployeeId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployeeRevisionByNumber
Get the employee revision matching the specified revision number


```js
payrun.GetEmployeeRevisionByNumber({
  "EmployerId": "",
  "EmployeeId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employee](#employee)

### GetEmployeeRevisions
Gets links to all employee revisions


```js
payrun.GetEmployeeRevisions({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteEmployeeSecret
Deletes an employee secret from the given resource location


```js
payrun.DeleteEmployeeSecret({
  "EmployerId": "",
  "EmployeeId": "",
  "SecretId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * SecretId **required** `string`: The secret unique identifier. E.g ERSEC001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployeeSecret
Get the public visible employee secret object


```js
payrun.GetEmployeeSecret({
  "EmployerId": "",
  "EmployeeId": "",
  "SecretId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * SecretId **required** `string`: The secret unique identifier. E.g ERSEC001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [EmployeeSecret](#employeesecret)

### PutEmployeeSecret
Create / update an employee secret at the given resource location


```js
payrun.PutEmployeeSecret({
  "EmployerId": "",
  "EmployeeId": "",
  "SecretId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * SecretId **required** `string`: The secret unique identifier. E.g ERSEC001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [EmployeeSecret](#employeesecret)

### GetEmployeeSecrets
Get all the employee secret links


```js
payrun.GetEmployeeSecrets({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostEmployeeSecret
Create new employee secret using auto generated resource location key


```js
payrun.PostEmployeeSecret({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeleteEmployeeTag
Deletes a tag from the employee


```js
payrun.DeleteEmployeeTag({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromEmployee
Gets the tag from the employee


```js
payrun.GetTagFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutEmployeeTag
Inserts a new tag on the employee


```js
payrun.PutEmployeeTag({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagFromEmployeeRevision
Gets the tag from the employee revision


```js
payrun.GetTagFromEmployeeRevision({
  "EmployerId": "",
  "EmployeeId": "",
  "TagId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromEmployee
Gets all the tags from the employee


```js
payrun.GetTagsFromEmployee({
  "EmployerId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetTagsFromEmployeeRevision
Gets all the tags from the employee revision


```js
payrun.GetTagsFromEmployeeRevision({
  "EmployerId": "",
  "EmployeeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteEmployeeRevision
Deletes the specified employee revision for the matching revision date


```js
payrun.DeleteEmployeeRevision({
  "EmployerId": "",
  "EmployeeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployeeByEffectiveDate
Returns the employee's state at the specified effective date.


```js
payrun.GetEmployeeByEffectiveDate({
  "EmployerId": "",
  "EmployeeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employee](#employee)

### GetEmployeesFromEmployer
Get links to all employees for the specified employer.


```js
payrun.GetEmployeesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostEmployeeIntoEmployer
Create a new employee object


```js
payrun.PostEmployeeIntoEmployer({
  "EmployerId": "",
  "Employee": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Employee **required** [Employee](#employee)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetEmployeesWithTag
Gets the employees with the tag


```js
payrun.GetEmployeesWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllEmployeeTags
Gets all the employee tags


```js
payrun.GetAllEmployeeTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetEmployeesByEffectiveDate
Get links to all employees for the employer on specified effective date.


```js
payrun.GetEmployeesByEffectiveDate({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetHolidaySchemeWithTag
Gets the holiday schemes with the tag


```js
payrun.GetHolidaySchemeWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteHolidayScheme
Delete the specified holiday scheme


```js
payrun.DeleteHolidayScheme({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetHolidaySchemeFromEmployer
Gets the specified holiday scheme from employer.


```js
payrun.GetHolidaySchemeFromEmployer({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [HolidayScheme](#holidayscheme)

### PatchHolidayScheme
Patches the specified holiday scheme with the supplied values


```js
payrun.PatchHolidayScheme({
  "HolidayScheme": {},
  "EmployerId": "",
  "HolidaySchemeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * HolidayScheme **required** [HolidayScheme](#holidayscheme)
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [HolidayScheme](#holidayscheme)

### PutHolidaySchemeIntoEmployer
Updates the existing specified holiday scheme object


```js
payrun.PutHolidaySchemeIntoEmployer({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "HolidayScheme": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * HolidayScheme **required** [HolidayScheme](#holidayscheme)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [HolidayScheme](#holidayscheme)

### DeleteHolidaySchemeRevisionByNumber
Deletes the specified holiday scheme revision for the matching revision number


```js
payrun.DeleteHolidaySchemeRevisionByNumber({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetHolidaySchemeRevisionByNumber
Get the holiday scheme revision matching the specified revision number


```js
payrun.GetHolidaySchemeRevisionByNumber({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [HolidayScheme](#holidayscheme)

### GetHolidaySchemeRevisions
Gets links to all the holiday scheme revisions


```js
payrun.GetHolidaySchemeRevisions({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteHolidaySchemeTag
Deletes a tag from the holiday scheme


```js
payrun.DeleteHolidaySchemeTag({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromHolidayScheme
Gets the tag from the holiday scheme


```js
payrun.GetTagFromHolidayScheme({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutHolidaySchemeTag
Inserts a new tag on the holiday scheme


```js
payrun.PutHolidaySchemeTag({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagFromHolidaySchemeRevision
Gets the tag from the holiday scheme revision


```js
payrun.GetTagFromHolidaySchemeRevision({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "TagId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromHolidayScheme
Gets all the tags from the holiday scheme


```js
payrun.GetTagsFromHolidayScheme({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetTagsFromHolidaySchemeRevision
Gets all the tags from the holiday scheme revision


```js
payrun.GetTagsFromHolidaySchemeRevision({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteHolidaySchemeRevision
Deletes the specified holiday scheme revision for the matching revision date


```js
payrun.DeleteHolidaySchemeRevision({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetHolidaySchemeByEffectiveDate
Returns the holiday scheme's state at the specified effective date.


```js
payrun.GetHolidaySchemeByEffectiveDate({
  "EmployerId": "",
  "HolidaySchemeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidaySchemeId **required** `string`: The holiday schemes' unique identifier. E.g HOLSCH001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [HolidayScheme](#holidayscheme)

### GetHolidaySchemesFromEmployer
Get links to all holiday schemes for the specified employer.


```js
payrun.GetHolidaySchemesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostHolidaySchemeIntoEmployer
Create a new holiday scheme object


```js
payrun.PostHolidaySchemeIntoEmployer({
  "EmployerId": "",
  "HolidayScheme": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * HolidayScheme **required** [HolidayScheme](#holidayscheme)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetHolidaySchemesWithTag
Gets the holiday scheme with the tag


```js
payrun.GetHolidaySchemesWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllHolidaySchemeTags
Gets all the holiday scheme tags


```js
payrun.GetAllHolidaySchemeTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetHolidaySchemesByEffectiveDate
Get links to all holiday schemes for the employer on specified effective date.


```js
payrun.GetHolidaySchemesByEffectiveDate({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteNominalCode
Deletes the nominal code


```js
payrun.DeleteNominalCode({
  "EmployerId": "",
  "NominalCodeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * NominalCodeId **required** `string`: The nominal code unique identifier. E.g. NOM001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetNominalCodeFromEmployer
Gets the nominal code


```js
payrun.GetNominalCodeFromEmployer({
  "EmployerId": "",
  "NominalCodeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * NominalCodeId **required** `string`: The nominal code unique identifier. E.g. NOM001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [NominalCode](#nominalcode)

### PutNominalCode
Inserts a new nominal code at the specified resource location


```js
payrun.PutNominalCode({
  "EmployerId": "",
  "NominalCodeId": "",
  "NominalCode": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * NominalCodeId **required** `string`: The nominal code unique identifier. E.g. NOM001
  * NominalCode **required** [NominalCode](#nominalcode)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [NominalCode](#nominalcode)

### GetPayCodesFromNominalCode
Get the pay codes that share the specified nominal code


```js
payrun.GetPayCodesFromNominalCode({
  "EmployerId": "",
  "NominalCodeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * NominalCodeId **required** `string`: The nominal code unique identifier. E.g. NOM001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetNominalCodesFromEmployer
Gets the nominal code links


```js
payrun.GetNominalCodesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNominalCode
Inserts a new nominal code


```js
payrun.PostNominalCode({
  "EmployerId": "",
  "NominalCode": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * NominalCode **required** [NominalCode](#nominalcode)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeletePayCode
Delete the specified pay code


```js
payrun.DeletePayCode({
  "EmployerId": "",
  "PayCodeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayCodeFromEmployer
Returns the specified pay code from the employer


```js
payrun.GetPayCodeFromEmployer({
  "EmployerId": "",
  "PayCodeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayCode](#paycode)

### PatchPayCode
Patches the specified pay code object with the supplied values


```js
payrun.PatchPayCode({
  "EmployerId": "",
  "PayCodeId": "",
  "PayCode": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * PayCode **required** [PayCode](#paycode)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayCode](#paycode)

### PutPayCode
Updates the existing specified pay code object


```js
payrun.PutPayCode({
  "EmployerId": "",
  "PayCodeId": "",
  "PayCode": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * PayCode **required** [PayCode](#paycode)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayCode](#paycode)

### DeletePayCodeRevisionByNumber
Deletes the specified pay code revision for the matching revision number


```js
payrun.DeletePayCodeRevisionByNumber({
  "EmployerId": "",
  "PayCodeId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayCodeRevisionByNumber
Get the pay code revision matching the specified revision number


```js
payrun.GetPayCodeRevisionByNumber({
  "EmployerId": "",
  "PayCodeId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayCode](#paycode)

### GetPayCodeRevisions
Returns links to all revisions of the pay code


```js
payrun.GetPayCodeRevisions({
  "EmployerId": "",
  "PayCodeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePayCodeTag
Deletes a tag from the pay code


```js
payrun.DeletePayCodeTag({
  "EmployerId": "",
  "PayCodeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromPayCode
Gets the tag from the pay code


```js
payrun.GetTagFromPayCode({
  "EmployerId": "",
  "PayCodeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutPayCodeTag
Inserts a new tag on the pay code


```js
payrun.PutPayCodeTag({
  "EmployerId": "",
  "PayCodeId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromPayCode
Gets all the tags from the pay code


```js
payrun.GetTagsFromPayCode({
  "EmployerId": "",
  "PayCodeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePayCodeRevision
Delete the pay code revision for the specified date


```js
payrun.DeletePayCodeRevision({
  "EmployerId": "",
  "PayCodeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayCodeByEffectiveDate
Gets the pay code revision for the specified effective date


```js
payrun.GetPayCodeByEffectiveDate({
  "EmployerId": "",
  "PayCodeId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. BASIC
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayCode](#paycode)

### GetPayCodesFromEmployer
Get links to all the pay codes for the specified employer


```js
payrun.GetPayCodesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostPayCode
Create a new pay code object


```js
payrun.PostPayCode({
  "EmployerId": "",
  "PayCode": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayCode **required** [PayCode](#paycode)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetPayCodesWithTag
Gets the pay codes with the tag


```js
payrun.GetPayCodesWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllPayCodeTags
Gets all the pay code tags


```js
payrun.GetAllPayCodeTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayCodesByEffectiveDate
Gets the effective pay code revision for the specified date


```js
payrun.GetPayCodesByEffectiveDate({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePaySchedule
Delete the specified pay schedule


```js
payrun.DeletePaySchedule({
  "EmployerId": "",
  "PayScheduleId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayScheduleFromEmployer
Returns the specified pay schedule object from employer


```js
payrun.GetPayScheduleFromEmployer({
  "EmployerId": "",
  "PayScheduleId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PaySchedule](#payschedule)

### PutPaySchedule
Updates the existing specified pay schedule object


```js
payrun.PutPaySchedule({
  "EmployerId": "",
  "PayScheduleId": "",
  "PaySchedule": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PaySchedule **required** [PaySchedule](#payschedule)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PaySchedule](#payschedule)

### GetEmployeesFromPaySchedule
Gets links to all employee revisions that have ever existed in the specified pay schedule.


```js
payrun.GetEmployeesFromPaySchedule({
  "EmployerId": "",
  "PayScheduleId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetEmployeesFromPayScheduleOnEffectiveDate
Gets links to all employee revisions in the specified pay schedule for the given effective date.


```js
payrun.GetEmployeesFromPayScheduleOnEffectiveDate({
  "EmployerId": "",
  "PayScheduleId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePayRun
Delete the specified pay run


```js
payrun.DeletePayRun({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayRunFromPaySchedule
Returns the pay run from the pay schedule


```js
payrun.GetPayRunFromPaySchedule({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayRun](#payrun)

### GetAEAssessmentsFromPayRun
Gets all auto enrolment assessments from the specified pay run


```js
payrun.GetAEAssessmentsFromPayRun({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetCommentariesFromPayRun
Get links to all commentaries for the specified pay run.


```js
payrun.GetCommentariesFromPayRun({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePayRunEmployee
Delete pay run results for a single employee


```js
payrun.DeletePayRunEmployee({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCommentaryFromPayRunByEmployee
Get commentary from payrun by specified employee.


```js
payrun.GetCommentaryFromPayRunByEmployee({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "EmployeeId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * EmployeeId **required** `string`: The employees' unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Commentary](#commentary)

### GetEmployeesFromPayRun
Gets links to all employees included in the specified pay run.


```js
payrun.GetEmployeesFromPayRun({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetReportLinesFromPayRun
Returns all report lines associated with the specified pay run


```js
payrun.GetReportLinesFromPayRun({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePayRunTag
Deletes a tag from the pay run


```js
payrun.DeletePayRunTag({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromPayRun
Gets the tag from the pay run


```js
payrun.GetTagFromPayRun({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutPayRunTag
Inserts a new tag on the pay run


```js
payrun.PutPayRunTag({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromPayRun
Gets all the tags from the pay run


```js
payrun.GetTagsFromPayRun({
  "EmployerId": "",
  "PayScheduleId": "",
  "PayRunId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay runs' unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayRunsFromPaySchedule
Get links to all pay runs for the specified pay schedule


```js
payrun.GetPayRunsFromPaySchedule({
  "EmployerId": "",
  "PayScheduleId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPayRunsWithTag
Gets the pay runs with the tag


```js
payrun.GetPayRunsWithTag({
  "EmployerId": "",
  "PayScheduleId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllPayRunTags
Gets all the pay run tags


```js
payrun.GetAllPayRunTags({
  "EmployerId": "",
  "PayScheduleId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePayScheduleTag
Deletes a tag from the pay schedule


```js
payrun.DeletePayScheduleTag({
  "EmployerId": "",
  "PayScheduleId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromPaySchedule
Gets the tag from the pay schedule


```js
payrun.GetTagFromPaySchedule({
  "EmployerId": "",
  "PayScheduleId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutPayScheduleTag
Inserts a new tag on the pay schedule


```js
payrun.PutPayScheduleTag({
  "EmployerId": "",
  "PayScheduleId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromPaySchedule
Gets all the tags from the pay schedule


```js
payrun.GetTagsFromPaySchedule({
  "EmployerId": "",
  "PayScheduleId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedules' unique identifier. E.g SCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetPaySchedulesFromEmployer
Get links to all pay schedules for the specified employer


```js
payrun.GetPaySchedulesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostPaySchedule
Create a new pay schedule object


```js
payrun.PostPaySchedule({
  "EmployerId": "",
  "PaySchedule": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PaySchedule **required** [PaySchedule](#payschedule)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetPaySchedulesWithTag
Gets the pay schedules with the tag


```js
payrun.GetPaySchedulesWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllPayScheduleTags
Gets all the pay schedule tags


```js
payrun.GetAllPayScheduleTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePension
Delete the specified ppension


```js
payrun.DeletePension({
  "EmployerId": "",
  "PensionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPensionFromEmployer
Gets the specified pension from employer by pension code.


```js
payrun.GetPensionFromEmployer({
  "EmployerId": "",
  "PensionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Pension](#pension)

### PatchPension
Patches the specified pension with the supplied values


```js
payrun.PatchPension({
  "Pension": {},
  "EmployerId": "",
  "PensionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Pension **required** [Pension](#pension)
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Pension](#pension)

### PutPensionIntoEmployer
Updates existing or inserts the specified pension object


```js
payrun.PutPensionIntoEmployer({
  "EmployerId": "",
  "PensionId": "",
  "Pension": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * Pension **required** [Pension](#pension)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Pension](#pension)

### DeletePensionRevisionByNumber
Deletes the specified pension revision for the matching revision number


```js
payrun.DeletePensionRevisionByNumber({
  "EmployerId": "",
  "PensionId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPensionRevisionByNumber
Get the pension revision matching the specified revision number


```js
payrun.GetPensionRevisionByNumber({
  "EmployerId": "",
  "PensionId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Pension](#pension)

### GetPensionRevisions
Returns links to all revisions of the pension


```js
payrun.GetPensionRevisions({
  "EmployerId": "",
  "PensionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeletePensionRevision
Deletes the specified pension revision for the matching revision date


```js
payrun.DeletePensionRevision({
  "EmployerId": "",
  "PensionId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPensionByEffectiveDate
Returns the penion's state at the specified effective date.


```js
payrun.GetPensionByEffectiveDate({
  "EmployerId": "",
  "PensionId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * PensionId **required** `string`: The pensions' unique identifier. E.g PEN001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Pension](#pension)

### GetPensionsFromEmployer
Get links to all pensions for the specified employer.


```js
payrun.GetPensionsFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostPensionIntoEmployer
Create a new pension object


```js
payrun.PostPensionIntoEmployer({
  "EmployerId": "",
  "Pension": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Pension **required** [Pension](#pension)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetPensionsByEffectiveDate
Get links to all pensions for the employer on specified effective date.


```js
payrun.GetPensionsByEffectiveDate({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetReportLineFromEmployer
Returns the specified pay line from employee


```js
payrun.GetReportLineFromEmployer({
  "EmployerId": "",
  "ReportLineId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ReportLineId **required** `string`: The report line unique identifier. E.g. RTL001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [ReportLine](#reportline)

### GetReportLinesFromEmployer
Get links to all report lines for the specified employee


```js
payrun.GetReportLinesFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteReportingInstruction
Delete the specified reporting instruction


```js
payrun.DeleteReportingInstruction({
  "EmployerId": "",
  "ReportingInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ReportingInstructionId **required** `string`: The reporting instruction unique identifier. E.g. SERRPT001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetReportingInstructionFromEmployer
Returns the specified pay instruction from employee


```js
payrun.GetReportingInstructionFromEmployer({
  "EmployerId": "",
  "ReportingInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ReportingInstructionId **required** `string`: The reporting instruction unique identifier. E.g. SERRPT001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [ReportingInstruction](#reportinginstruction)

### PutReportingInstruction
Updates the existing specified reporting instruction object


```js
payrun.PutReportingInstruction({
  "EmployerId": "",
  "ReportingInstructionId": "",
  "ReportingInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ReportingInstructionId **required** `string`: The reporting instruction unique identifier. E.g. SERRPT001
  * ReportingInstruction **required** [ReportingInstruction](#reportinginstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [ReportingInstruction](#reportinginstruction)

### GetReportingInstructionsFromEmployer
Get links to all pay instructions for the specified employee


```js
payrun.GetReportingInstructionsFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostReportingInstruction
Creates a new reporting instruction object


```js
payrun.PostReportingInstruction({
  "EmployerId": "",
  "ReportingInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ReportingInstruction **required** [ReportingInstruction](#reportinginstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeleteEmployerRevisionByNumber
Deletes the specified employer revision for the matching revision number


```js
payrun.DeleteEmployerRevisionByNumber({
  "EmployerId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployerRevisionByNumber
Get the employer revision matching the specified revision number


```js
payrun.GetEmployerRevisionByNumber({
  "EmployerId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employer](#employer)

### GetEmployerRevisions
Gets links to all the employer revisions


```js
payrun.GetEmployerRevisions({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteRtiTransaction
Deletes the specified RTI transaction


```js
payrun.DeleteRtiTransaction({
  "EmployerId": "",
  "RtiTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RtiTransactionId **required** `string`: The RTI transaction unique identifier. E.g. FPS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetRtiTransactionFromEmployer
Returns the specified RTI transaction


```js
payrun.GetRtiTransactionFromEmployer({
  "EmployerId": "",
  "RtiTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RtiTransactionId **required** `string`: The RTI transaction unique identifier. E.g. FPS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [RtiTransactionBase](#rtitransactionbase)

### DeleteRtiTransactionTag
Deletes a tag from the RTI transaction


```js
payrun.DeleteRtiTransactionTag({
  "EmployerId": "",
  "RtiTransactionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RtiTransactionId **required** `string`: The RTI transaction unique identifier. E.g. FPS001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromRtiTransaction
Gets the tag from the RTI transaction


```js
payrun.GetTagFromRtiTransaction({
  "EmployerId": "",
  "RtiTransactionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RtiTransactionId **required** `string`: The RTI transaction unique identifier. E.g. FPS001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutRtiTransactionTag
Inserts a new tag on the RTI transaction


```js
payrun.PutRtiTransactionTag({
  "EmployerId": "",
  "RtiTransactionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RtiTransactionId **required** `string`: The RTI transaction unique identifier. E.g. FPS001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromRtiTransaction
Gets all the tags from the RTI transaction


```js
payrun.GetTagsFromRtiTransaction({
  "EmployerId": "",
  "RtiTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * RtiTransactionId **required** `string`: The RTI transaction unique identifier. E.g. FPS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetRtiTransactionsFromEmployer
Get links for all RTI transactions for the specified employer


```js
payrun.GetRtiTransactionsFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetRtiTransactionsWithTag
Gets the RTI transactions with the tag


```js
payrun.GetRtiTransactionsWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllRtiTransactionTags
Gets all the RTI transaction tags


```js
payrun.GetAllRtiTransactionTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteEmployerSecret
Deletes an employer secret from the given resource location


```js
payrun.DeleteEmployerSecret({
  "EmployerId": "",
  "SecretId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SecretId **required** `string`: The secret unique identifier. E.g ERSEC001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployerSecret
Get the public visible employer secret object


```js
payrun.GetEmployerSecret({
  "EmployerId": "",
  "SecretId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SecretId **required** `string`: The secret unique identifier. E.g ERSEC001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [EmployerSecret](#employersecret)

### PutEmployerSecret
Create / update an employer secret at the given resource location


```js
payrun.PutEmployerSecret({
  "EmployerId": "",
  "SecretId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SecretId **required** `string`: The secret unique identifier. E.g ERSEC001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [EmployerSecret](#employersecret)

### GetEmployerSecrets
Get all the employer secret links


```js
payrun.GetEmployerSecrets({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostEmployerSecret
Create new employer secret using auto generated resource location key


```js
payrun.PostEmployerSecret({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetSubContractorWithTag
Gets the sub contractors with the tag


```js
payrun.GetSubContractorWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteSubContractor
Delete the specified sub contractor


```js
payrun.DeleteSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetSubContractorFromEmployer
Gets the specified sub contractor from employer.


```js
payrun.GetSubContractorFromEmployer({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [SubContractor](#subcontractor)

### PatchSubContractor
Patches the specified sub contractor with the supplied values


```js
payrun.PatchSubContractor({
  "SubContractor": {},
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * SubContractor **required** [SubContractor](#subcontractor)
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [SubContractor](#subcontractor)

### PutSubContractorIntoEmployer
Updates the existing specified sub contractor object


```js
payrun.PutSubContractorIntoEmployer({
  "EmployerId": "",
  "SubContractorId": "",
  "SubContractor": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * SubContractor **required** [SubContractor](#subcontractor)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [SubContractor](#subcontractor)

### GetCisInstructionWithTag
Gets the CIS instructions with the tag


```js
payrun.GetCisInstructionWithTag({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteCisInstruction
Delete the specified CIS instruction


```js
payrun.DeleteCisInstruction({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCisInstructionFromSubContractor
Gets the specified CIS instruction from sub contractor.


```js
payrun.GetCisInstructionFromSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [CisInstruction](#cisinstruction)

### PatchCisInstruction
Update an existing CIS instruction object


```js
payrun.PatchCisInstruction({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [CisInstruction](#cisinstruction)

### PutCisInstructionIntoSubContractor
Insert or update existing CIS instruction object


```js
payrun.PutCisInstructionIntoSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "CisInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * CisInstruction **required** [CisInstruction](#cisinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [CisInstruction](#cisinstruction)

### DeleteCisInstructionTag
Deletes a tag from the CIS instruction


```js
payrun.DeleteCisInstructionTag({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromCisInstruction
Gets the tag from the CIS instruction


```js
payrun.GetTagFromCisInstruction({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutCisInstructionTag
Inserts a new tag on the CIS instruction


```js
payrun.PutCisInstructionTag({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromCisInstruction
Gets all the tags from the CIS instruction


```js
payrun.GetTagsFromCisInstruction({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstructionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstructionId **required** `string`: The CIS instruction unique identifier. E.g. CIS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetCisInstructionsFromSubContractor
Get links to all CIS instructions for the specified sub contractor.


```js
payrun.GetCisInstructionsFromSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostCisInstructionIntoSubContractor
Create a new CIS instruction object


```js
payrun.PostCisInstructionIntoSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "CisInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisInstruction **required** [CisInstruction](#cisinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetCisInstructionsWithTag
Gets the CIS instruction with the tag


```js
payrun.GetCisInstructionsWithTag({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllCisInstructionTags
Gets all the CIS instruction tags


```js
payrun.GetAllCisInstructionTags({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetCisLineWithTag
Gets the CIS lines with the tag


```js
payrun.GetCisLineWithTag({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteCisLine
Delete the specified CIS line


```js
payrun.DeleteCisLine({
  "EmployerId": "",
  "SubContractorId": "",
  "CisLineId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisLineId **required** `string`: The CIS line unique identifier. E.g. CISLN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCisLineFromSubContractor
Gets the specified CIS line from sub contractor.


```js
payrun.GetCisLineFromSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "CisLineId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisLineId **required** `string`: The CIS line unique identifier. E.g. CISLN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [CisLine](#cisline)

### DeleteCisLineTag
Deletes a tag from the CIS line


```js
payrun.DeleteCisLineTag({
  "EmployerId": "",
  "SubContractorId": "",
  "CisLineId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisLineId **required** `string`: The CIS line unique identifier. E.g. CISLN001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromCisLine
Gets the tag from the CIS line


```js
payrun.GetTagFromCisLine({
  "EmployerId": "",
  "SubContractorId": "",
  "CisLineId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisLineId **required** `string`: The CIS line unique identifier. E.g. CISLN001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutCisLineTag
Inserts a new tag on the CIS line


```js
payrun.PutCisLineTag({
  "EmployerId": "",
  "SubContractorId": "",
  "CisLineId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisLineId **required** `string`: The CIS line unique identifier. E.g. CISLN001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromCisLine
Gets all the tags from the CIS line


```js
payrun.GetTagsFromCisLine({
  "EmployerId": "",
  "SubContractorId": "",
  "CisLineId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * CisLineId **required** `string`: The CIS line unique identifier. E.g. CISLN001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetCisLinesFromSubContractor
Get links to all CIS lines for the specified sub contractor.


```js
payrun.GetCisLinesFromSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetCisLinesWithTag
Gets the CIS line with the tag


```js
payrun.GetCisLinesWithTag({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllCisLineTags
Gets all the CIS line tags


```js
payrun.GetAllCisLineTags({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteSubContractorRevisionByNumber
Deletes the specified sub contractor revision for the matching revision number


```js
payrun.DeleteSubContractorRevisionByNumber({
  "EmployerId": "",
  "SubContractorId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetSubContractorRevisionByNumber
Get the sub contractor revision matching the specified revision number


```js
payrun.GetSubContractorRevisionByNumber({
  "EmployerId": "",
  "SubContractorId": "",
  "RevisionNumber": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * RevisionNumber **required** `string`: The revision number. E.g. 1
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [SubContractor](#subcontractor)

### GetSubContractorRevisions
Gets links to all the sub contractor revisions


```js
payrun.GetSubContractorRevisions({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteSubContractorTag
Deletes a tag from the sub contractor


```js
payrun.DeleteSubContractorTag({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromSubContractor
Gets the tag from the sub contractor


```js
payrun.GetTagFromSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutSubContractorTag
Inserts a new tag on the sub contractor


```js
payrun.PutSubContractorTag({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagFromSubContractorRevision
Gets the tag from the sub contractor revision


```js
payrun.GetTagFromSubContractorRevision({
  "EmployerId": "",
  "SubContractorId": "",
  "TagId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromSubContractor
Gets all the tags from the sub contractor


```js
payrun.GetTagsFromSubContractor({
  "EmployerId": "",
  "SubContractorId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetTagsFromSubContractorRevision
Gets all the tags from the sub contractor revision


```js
payrun.GetTagsFromSubContractorRevision({
  "EmployerId": "",
  "SubContractorId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteSubContractorRevision
Deletes the specified sub contractor revision for the matching revision date


```js
payrun.DeleteSubContractorRevision({
  "EmployerId": "",
  "SubContractorId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetSubContractorByEffectiveDate
Returns the sub contractor's state at the specified effective date.


```js
payrun.GetSubContractorByEffectiveDate({
  "EmployerId": "",
  "SubContractorId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractorId **required** `string`: The sub contractors' unique identifier. E.g SUB001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [SubContractor](#subcontractor)

### GetSubContractorsFromEmployer
Get links to all sub contractors for the specified employer.


```js
payrun.GetSubContractorsFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostSubContractorIntoEmployer
Create a new sub contractor object


```js
payrun.PostSubContractorIntoEmployer({
  "EmployerId": "",
  "SubContractor": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * SubContractor **required** [SubContractor](#subcontractor)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetSubContractorsWithTag
Gets the sub contractor with the tag


```js
payrun.GetSubContractorsWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllSubContractorTags
Gets all the sub contractor tags


```js
payrun.GetAllSubContractorTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetSubContractorsByEffectiveDate
Get links to all sub contractors for the employer on specified effective date.


```js
payrun.GetSubContractorsByEffectiveDate({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteEmployerTag
Deletes a tag from the employer


```js
payrun.DeleteEmployerTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromEmployer
Gets the tag from the employer


```js
payrun.GetTagFromEmployer({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutEmployerTag
Inserts a new tag on the employer


```js
payrun.PutEmployerTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagFromEmployerRevision
Gets the tag from the employer revision


```js
payrun.GetTagFromEmployerRevision({
  "EmployerId": "",
  "TagId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromEmployer
Gets all the tags from the employer


```js
payrun.GetTagsFromEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetTagsFromEmployerRevision
Gets all the tags from the employer revision


```js
payrun.GetTagsFromEmployerRevision({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteThirdPartyTransaction
Deletes a third party transaction record from the given resource location


```js
payrun.DeleteThirdPartyTransaction({
  "EmployerId": "",
  "ThirdPartyTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ThirdPartyTransactionId **required** `string`: The third party transaction unique identifier. E.g TP001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetThirdPartyTransaction
Get a third party transaction


```js
payrun.GetThirdPartyTransaction({
  "EmployerId": "",
  "ThirdPartyTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ThirdPartyTransactionId **required** `string`: The third party transaction unique identifier. E.g TP001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [ThirdPartyTransaction](#thirdpartytransaction)

### DeleteThirdPartyTransactionTag
Deletes a tag from the third party transaction


```js
payrun.DeleteThirdPartyTransactionTag({
  "EmployerId": "",
  "ThirdPartyTransactionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ThirdPartyTransactionId **required** `string`: The third party transaction unique identifier. E.g TP001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTagFromThirdPartyTransaction
Gets a tag from the third party transaction


```js
payrun.GetTagFromThirdPartyTransaction({
  "EmployerId": "",
  "ThirdPartyTransactionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ThirdPartyTransactionId **required** `string`: The third party transaction unique identifier. E.g TP001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### PutThirdPartyTransactionTag
Inserts a tag on the third party transaction


```js
payrun.PutThirdPartyTransactionTag({
  "EmployerId": "",
  "ThirdPartyTransactionId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ThirdPartyTransactionId **required** `string`: The third party transaction unique identifier. E.g TP001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Tag](#tag)

### GetTagsFromThirdPartyTransaction
Gets all tags from the third party transaction


```js
payrun.GetTagsFromThirdPartyTransaction({
  "EmployerId": "",
  "ThirdPartyTransactionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * ThirdPartyTransactionId **required** `string`: The third party transaction unique identifier. E.g TP001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetThirdPartyTransactions
Get all third party transaction links


```js
payrun.GetThirdPartyTransactions({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllThirdPartyTransactionsWithTag
Gets the third party transactions with the specified tag


```js
payrun.GetAllThirdPartyTransactionsWithTag({
  "EmployerId": "",
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllThirdPartyTransactionTags
Gets all the third party transaction tags


```js
payrun.GetAllThirdPartyTransactionTags({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteEmployerRevision
Deletes the specified employer revision for the matching revision date


```js
payrun.DeleteEmployerRevision({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployerByEffectiveDate
Returns the employer's state at the specified effective date.


```js
payrun.GetEmployerByEffectiveDate({
  "EmployerId": "",
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employer](#employer)

### GetEmployers
Gets links to all employers contained under the authorised application scope


```js
payrun.GetEmployers({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostEmployer
Create a new employer object


```js
payrun.PostEmployer({
  "Employer": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Employer **required** [Employer](#employer)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetEmployersWithTag
Gets the employers with the tag


```js
payrun.GetEmployersWithTag({
  "TagId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * TagId **required** `string`: The tag unique identifier. E.g. MyTag
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetAllEmployerTags
Gets all the employer tags


```js
payrun.GetAllEmployerTags({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetEmployersByEffectiveDate
Gets links to all employers contained under the authorised application scope for the specified effective date.


```js
payrun.GetEmployersByEffectiveDate({
  "EffectiveDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetHealthCheck
Returns the health status of the application


```js
payrun.GetHealthCheck(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [HealthCheck](#healthcheck)

### GetBatchJobs
Gets all the Batch jobs


```js
payrun.GetBatchJobs({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNewBatchJob
Adds a new Batch job to the queue and returns the job info


```js
payrun.PostNewBatchJob({
  "BatchJobInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * BatchJobInstruction **required** [BatchJobInstruction](#batchjobinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeleteBatchJob
Deletes the the Batch job


```js
payrun.DeleteBatchJob({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetBatchJobInfo
Return the the Batch job information


```js
payrun.GetBatchJobInfo({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [JobInfo](#jobinfo)

### GetBatchJobProgress
Return the the Batch job progress


```js
payrun.GetBatchJobProgress({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetBatchJobStatus
Return the the Batch job status


```js
payrun.GetBatchJobStatus({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCisJobs
Gets all the CIS jobs


```js
payrun.GetCisJobs({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNewCisJob
Adds a new CIS job to the queue and returns the job info


```js
payrun.PostNewCisJob({
  "CisJobInstructionBase": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * CisJobInstructionBase **required** [CisJobInstructionBase](#cisjobinstructionbase)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeleteCisJob
Deletes the the CIS job


```js
payrun.DeleteCisJob({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCisJobInfo
Return the the CIS job information


```js
payrun.GetCisJobInfo({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [JobInfo](#jobinfo)

### GetCisJobProgress
Return the the CIS job progress


```js
payrun.GetCisJobProgress({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetCisJobStatus
Return the the CIS job status


```js
payrun.GetCisJobStatus({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetDpsJobs
Gets all the DPS jobs


```js
payrun.GetDpsJobs({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNewDpsJob
Creates the new DPS job to the queue and returns the job info


```js
payrun.PostNewDpsJob({
  "DpsJobInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * DpsJobInstruction **required** [DpsJobInstruction](#dpsjobinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeleteDpsJob
Deletes the the DPS job


```js
payrun.DeleteDpsJob({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetDpsJobInfo
Return the the DPS job information


```js
payrun.GetDpsJobInfo({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [JobInfo](#jobinfo)

### GetDpsJobProgress
Return the the DPS job progress


```js
payrun.GetDpsJobProgress({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetDpsJobStatus
Return the the DPS job status


```js
payrun.GetDpsJobStatus({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetEmployerJobs
Returns all job information objects for the specified employer.


```js
payrun.GetEmployerJobs({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employers' unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayRunJobs
Gets all the pay run jobs


```js
payrun.GetPayRunJobs({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNewPayRunJob
Creates the new pay run job to the queue and returns the job info


```js
payrun.PostNewPayRunJob({
  "PayRunJobInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * PayRunJobInstruction **required** [PayRunJobInstruction](#payrunjobinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeletePayRunJob
Deletes the the payrun job


```js
payrun.DeletePayRunJob({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayRunJobInfo
Return the the payrun job information


```js
payrun.GetPayRunJobInfo({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [JobInfo](#jobinfo)

### GetPayRunJobProgress
Return the the payrun job progress


```js
payrun.GetPayRunJobProgress({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetPayRunJobStatus
Return the the payrun job status


```js
payrun.GetPayRunJobStatus({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetRtiJobs
Gets all the RTI jobs


```js
payrun.GetRtiJobs({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNewRtiJob
Creates the new RTI job to the queue and returns the job info


```js
payrun.PostNewRtiJob({
  "RtiJobInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * RtiJobInstruction **required** [RtiJobInstruction](#rtijobinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeleteRtiJob
Deletes the the RTI job


```js
payrun.DeleteRtiJob({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetRtiJobInfo
Return the the RTI job information


```js
payrun.GetRtiJobInfo({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [JobInfo](#jobinfo)

### GetRtiJobProgress
Return the the RTI job progress


```js
payrun.GetRtiJobProgress({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetRtiJobStatus
Return the the RTI job status


```js
payrun.GetRtiJobStatus({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetThirdPartyJobs
Gets all the Third Party jobs


```js
payrun.GetThirdPartyJobs({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostNewThirdPartyJob
Adds a new Third Party job to the queue and returns the job info


```js
payrun.PostNewThirdPartyJob({
  "ThirdPartyJobInstruction": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * ThirdPartyJobInstruction **required** [ThirdPartyJobInstruction](#thirdpartyjobinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### DeleteThirdPartyJob
Deletes the the Third Party job


```js
payrun.DeleteThirdPartyJob({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetThirdPartyJobInfo
Return the the Third Party job information


```js
payrun.GetThirdPartyJobInfo({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [JobInfo](#jobinfo)

### GetThirdPartyJobProgress
Return the the Third Party job progress


```js
payrun.GetThirdPartyJobProgress({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetThirdPartyJobStatus
Return the the Third Party job status


```js
payrun.GetThirdPartyJobStatus({
  "JobId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`: The job unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetQueryResponse
Get the results for the specified query


```js
payrun.GetQueryResponse({
  "Query": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Query **required** [Query](#query)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetActivePayInstructionsReportOutput
Returns the result of the executed active pay instructions report for the given query parameters


```js
payrun.GetActivePayInstructionsReportOutput({
  "EmployerKey": "",
  "EmployeeKey": "",
  "FromDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * EmployeeKey **required** `string`: The employee unique key. E.g. EE001
  * ActiveOn `string`: The active date to consider. E.g 2017-04-05
  * FromDate **required** `string`: The lower filter date. E.g 2016-04-06
  * ToDate `string`: The upper filter date. E.g 2017-04-05
  * Type `string`: the data type to filter on. E.g. TaxPayInstruction
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetAoeLiabilityReportOuput
Returns the result of the executed AOE liability report for the given query parameters


```js
payrun.GetAoeLiabilityReportOuput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * TaxPeriod `string`: The tax period number.
  * TransformDefinitionKey `string`: The transform definition unique key. E.g. P45-Pdf
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetDpsMessageReportOutput
Returns the result of the executed DPS message report for the given query parameters


```js
payrun.GetDpsMessageReportOutput({
  "EmployerKey": "",
  "FromDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * FromDate **required** `string`: The lower filter date. E.g 2016-04-06
  * ToDate `string`: The upper filter date. E.g 2017-04-05
  * MessageTypes `string`: The DPS message types as a CSV list. E.g. P6,P9,SL1,SL2
  * MessageStatuses `string`: The DPS message status as a CSV list. E.g. Retrieved,Processed,Blocked,Ignored
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetEmployerSummaryReportOuput
Returns the result of the employer summary report for the given query parameters


```js
payrun.GetEmployerSummaryReportOuput({
  "EmployerKey": "",
  "ContextDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * ContextDate **required** `string`: The date context for the report. E.g. 2018-04-30
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetGrossToNetReportOutput
Returns the result of the executed gross to net report for the given query parameters


```js
payrun.GetGrossToNetReportOutput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * TaxPeriod `string`: The tax period number.
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetHolidayBalanceReportOuput
Returns the result of the executed holiday balance report for the given query parameters


```js
payrun.GetHolidayBalanceReportOuput({
  "EmployerKey": "",
  "HolidayYearEnd": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * HolidayYearEnd **required** `string`: The holiday year end for the report. E.g. 2018-12-31
  * EmployeeCodes `string`: A comma separated list of the employee codes. E.g. EMP001,EMP002
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetLastPayDateReportOuput
Returns the result of the executed last pay date report for the given query parameters


```js
payrun.GetLastPayDateReportOuput({
  "EmployerKey": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * OptEmployeeKey `string`: The optional employee unique key. E.g. EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNetPayReportOutput
Returns the result of the executed net pay report for the given query parameters


```js
payrun.GetNetPayReportOutput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * TaxPeriod `string`: The tax period number.
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNextPayPeriodDatesReportOutput
Returns the result of the executed next pay period report for the given query parameters


```js
payrun.GetNextPayPeriodDatesReportOutput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetP11SummaryReportOutput
Returns the result of the executed P11 summary report for the given query parameters


```js
payrun.GetP11SummaryReportOutput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetP32NetReportOutput
Returns the result of the executed P32 report for the given query parameters


```js
payrun.GetP32NetReportOutput({
  "EmployerKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetP32SummaryNetReportOutput
Returns the result of the executed P32 summary report for the given query parameters


```js
payrun.GetP32SummaryNetReportOutput({
  "EmployerKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetP45ReportOutput
Returns the result of the executed P45 report for the given query parameters


```js
payrun.GetP45ReportOutput({
  "EmployerKey": "",
  "EmployeeKey": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * EmployeeKey **required** `string`: The employee unique key. E.g. EE001
  * TransformDefinitionKey `string`: The transform definition unique key. E.g. P45-Pdf
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetP60ReportOutput
Returns the result of the executed P60 report for the given query parameters


```js
payrun.GetP60ReportOutput({
  "EmployerKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * EmployeeCodes `string`: A comma separated list of the employee codes. E.g. EMP001,EMP002
  * TransformDefinitionKey `string`: The transform definition unique key. E.g. P45-Pdf
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPapdisReportOuput
Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org


```js
payrun.GetPapdisReportOuput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "PensionKey": "",
  "MessageFunctionCode": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * PaymentDate `string`: The payment date context for the report. E.g. 2018-04-30
  * PensionKey **required** `string`: The pension scheme unique key. E.g. PENSCH001
  * MessageFunctionCode **required** `string`: Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
  * TransformDefinitionKey `string`: The transform definition unique key. E.g. P45-Pdf
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPassReportOuput
Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1


```js
payrun.GetPassReportOuput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "PensionKey": "",
  "MessageFunctionCode": "",
  "IntermediaryId": "",
  "DocumentId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * PaymentDate `string`: The payment date context for the report. E.g. 2018-04-30
  * PensionKey **required** `string`: The pension scheme unique key. E.g. PENSCH001
  * MessageFunctionCode **required** `string`: Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
  * IntermediaryId **required** `string`: Specific to PensionSync PASS report, a unique identifier for the Intermediary who is acting on behalf of the employer.
  * DocumentId **required** `string`: Specific to PensionSync PASS report, a document identifier unique for this document within the Intermediary.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayDashboardPayslipReportOuput
Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.


```js
payrun.GetPayDashboardPayslipReportOuput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "PublicationDate": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * EmployeeCodes `string`: A comma separated list of the employee codes. E.g. EMP001,EMP002
  * TransformDefinitionKey `string`: The transform definition unique key. E.g. P45-Pdf
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * PaymentDate `string`: The payment date context for the report. E.g. 2018-04-30
  * PublicationDate **required** `string`: Specific to the Pay Dashboard report, allows the specification of a future payslip publication date. E.g. 2018-12-31
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayslip3ReportOutput
Returns the result of the executed verbose payslip report for the given query parameters


```js
payrun.GetPayslip3ReportOutput({
  "EmployerKey": "",
  "PayScheduleKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * PayScheduleKey **required** `string`: The pay schedule unique key. E.g. SCH001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * EmployeeCodes `string`: A comma separated list of the employee codes. E.g. EMP001,EMP002
  * TransformDefinitionKey `string`: The transform definition unique key. E.g. P45-Pdf
  * StartIndex `string`: The element index to begin the report. Used to control paging within large data sets. E.g. 1
  * MaxIndex `string`: The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
  * PaymentDate `string`: The payment date context for the report. E.g. 2018-04-30
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPensionLiabilityReportOutput
Returns the result of the executed pension liability report for the given query parameters


```js
payrun.GetPensionLiabilityReportOutput({
  "EmployerKey": "",
  "TaxYear": "",
  "PensionKey": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * TaxYear **required** `string`: The tax year. E.g. 2017 = 2017/18 year.
  * PensionKey **required** `string`: The pension scheme unique key. E.g. PENSCH001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### DeleteReportDefinition
Delete the specified report definition


```js
payrun.DeleteReportDefinition({
  "ReportDefinitionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * ReportDefinitionId **required** `string`: The report definition unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetReportDefinitionFromApplication
Returns the specified report definition from the authroised application


```js
payrun.GetReportDefinitionFromApplication({
  "ReportDefinitionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * ReportDefinitionId **required** `string`: The report definition unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [ReportDefinition](#reportdefinition)

### PutReportDefinition
Updates the existing specified report definition object


```js
payrun.PutReportDefinition({
  "ReportDefinitionId": "",
  "ReportDefinition": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * ReportDefinitionId **required** `string`: The report definition unique identifier.
  * ReportDefinition **required** [ReportDefinition](#reportdefinition)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [ReportDefinition](#reportdefinition)

### GetReportOutput
Returns the result of the executed report definition


```js
payrun.GetReportOutput({
  "ReportDefinitionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * ReportDefinitionId **required** `string`: The report definition unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetReportDefinitionsFromApplication
Get links to all saved report definitions under authorised application


```js
payrun.GetReportDefinitionsFromApplication({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostReportDefinition
Creates a new report defintion object


```js
payrun.PostReportDefinition({
  "ReportDefinition": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * ReportDefinition **required** [ReportDefinition](#reportdefinition)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

### GetSchemas
Returns a collection of links to all the available data object schemas


```js
payrun.GetSchemas({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### GetSchema
Returns the XSD schema for the specified data type


```js
payrun.GetSchema({
  "DtoDataType": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * DtoDataType **required** `string`: The data transfer object type name. E.g PensionPayInstruction
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetTemplateModel
Returns a template instance of the specified data type


```js
payrun.GetTemplateModel({
  "DtoDataType": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * DtoDataType **required** `string`: The data transfer object type name. E.g PensionPayInstruction
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetTemplates
Returns a collection of links to all the available data object templates


```js
payrun.GetTemplates({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### DeleteTransformDefinition
Delete the specified transform definition


```js
payrun.DeleteTransformDefinition({
  "TransformDefinitionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * TransformDefinitionId **required** `string`: The transform definition unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

### GetTransformDefinitionFromApplication
Returns the specified transform definition from the authroised application


```js
payrun.GetTransformDefinitionFromApplication({
  "TransformDefinitionId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * TransformDefinitionId **required** `string`: The transform definition unique identifier.
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [TransformDefinition](#transformdefinition)

### PutTransformDefinition
Updates the existing specified transform definition object


```js
payrun.PutTransformDefinition({
  "TransformDefinitionId": "",
  "TransformDefinition": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * TransformDefinitionId **required** `string`: The transform definition unique identifier.
  * TransformDefinition **required** [TransformDefinition](#transformdefinition)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [TransformDefinition](#transformdefinition)

### GetTransformDefinitionsFromApplication
Get links to all saved transform definitions under authorised application


```js
payrun.GetTransformDefinitionsFromApplication({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostTransformDefinition
Creates a new transform defintion object


```js
payrun.PostTransformDefinition({
  "TransformDefinition": {},
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * TransformDefinition **required** [TransformDefinition](#transformdefinition)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)



## Definitions

### AEAssessment
* AEAssessment `object`
  * AEAssessment `object`
    * Age `integer`: The a e assessments' age
    * AssessmentCode `string` (values: Excluded, EligibleJobHolder, NonEligibleJobHolder, EntitledWorker): The a e assessments' assessment code
    * AssessmentDate `string`: The a e assessments' assessment date
    * AssessmentEvent `string` (values: NonEnrolmentEvent, AutomaticEnrolment, OptIn, VoluntaryJoiner, ContractualEnrolment): The a e assessments' assessment event
    * AssessmentOverride `string` (values: None, OptOut, OptIn, VoluntaryJoiner, ContractualPension, CeasedMembership, Leaver, Excluded): The a e assessments' assessment override
    * AssessmentResult `string` (values: Inconclusive, NoChange, Enrol, Exit): The a e assessments' assessment result
    * IsMemberOfAlternativePensionScheme `boolean`: The a e assessments' is member of alternative pension scheme
    * OptOutWindowEndDate `string`: The a e assessments' opt out window end date
    * QualifyingEarnings `number`: The a e assessments' qualifying earnings
    * ReenrolmentDate `string`: The a e assessments' reenrolment date
    * StatePensionAge `integer`: The a e assessments' state pension age
    * StatePensionDate `string`: The a e assessments' state pension date
    * TaxPeriod `integer`: The a e assessments' tax period
    * TaxYear `integer`: The a e assessments' tax year

### BatchItemBase
* BatchItemBase `object`
  * BatchItemBase `object`
    * @Href `string`: The batch item bases' href

### BatchJobInstruction
* BatchJobInstruction `object`
  * BatchJobInstruction `object`
    * HoldingDate `string`: The batch job instructions' holding date
    * Instructions `object`: The batch job instructions' instructions
      * DELETE `array`
        * items `object`
          * @Href `string`: The batch item bases' href
    * ValidateOnly `boolean`: The batch job instructions' validate only

### CisInstruction
* CisInstruction `object`
  * CisInstruction `object`
    * CisLineTag `string`: The cis instructions' cis line tag
    * CisLineType `string`: The cis instructions' cis line type
    * Description `string`: The cis instructions' description
    * PayFrequency `string` (values: Monthly, Weekly): The cis instructions' pay frequency
    * PeriodEnd `integer`: The cis instructions' period end
    * PeriodStart `integer`: The cis instructions' period start
    * TaxYearEnd `integer`: The cis instructions' tax year end
    * TaxYearStart `integer`: The cis instructions' tax year start
    * UOM `string` (values: NotSet, Minute, Hour, Day, Week, Month, Year, Unit): The cis instructions' u o m
    * Units `number`: The cis instructions' units
    * VAT `number`: The cis instructions' v a t
    * Value `number`: The cis instructions' value

### CisJobInstructionBase
* CisJobInstructionBase `object`
  * CisJobInstructionBase `object`
    * Employer `object`: The cis job instruction bases' employer
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * HoldingDate `string`: The cis job instruction bases' holding date
    * SubContractors `object`: The cis job instruction bases' sub contractors
      * SubContractor `array`
        * items `object`
          * @href `string`: The links' href
          * @rel `string`: The links' target type
          * @title `string`: The links' title

### CisLine
* CisLine `object`
  * CisLine `object`
    * CisDeduction `number`: The cis lines' cis deduction
    * CisLineType `string`: The cis lines' cis line type
    * Description `string`: The cis lines' description
    * Generated `string`: The cis lines' generated
    * GrossPay `number`: The cis lines' gross pay
    * NominalCodeKey `string`: The cis lines' nominal code key
    * PayFrequency `string` (values: Monthly, Weekly): The cis lines' pay frequency
    * TaxMonth `integer`: The cis lines' tax month
    * TaxPeriod `integer`: The cis lines' tax period
    * TaxTreatment `string` (values: Taxable, NonTaxable, Notional, Materials): The cis lines' tax treatment
    * TaxYear `integer`: The cis lines' tax year
    * UOM `string` (values: NotSet, Minute, Hour, Day, Week, Month, Year, Unit): The cis lines' u o m
    * UnitRate `number`: The cis lines' unit rate
    * Units `number`: The cis lines' units
    * VAT `number`: The cis lines' v a t

### CisLineType
* CisLineType `object`
  * CisLineType `object`
    * Description `string`: The cis line types' description
    * LineType `string`: The cis line types' line type
    * NominalCode `object`: The cis line types' nominal code
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * TaxTreatment `string` (values: Taxable, NonTaxable, Notional, Materials): The cis line types' tax treatment

### CisTransaction
* CisTransaction `object`
  * CisTransaction `object`
    * CisMessageType `string` (values: Verification, Return): The cis transactions' cis message type
    * EmployerCore `object`: The cis transactions' employer core
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * RequestData `string`: The cis transactions' request data
    * ResponseData `string`: The cis transactions' response data
    * TaxYear `integer`: The cis transactions' tax year
    * Timestamp `string`: The cis transactions' timestamp
    * TransactionStatus `string` (values: New, RequestGenerated, CompletedWithError, CompletedWithSuccess, TimeOut): The cis transactions' transaction status
    * TransmissionDate `string`: The cis transactions' transmission date

### Commentary
* Commentary `object`
  * Commentary `object`
    * Created `string`: The commentarys' created
    * Detail `string`: The commentarys' detail
    * Employee `object`: The commentarys' employee
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * PayRun `object`: The commentarys' pay run
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title

### DpsJobInstruction
* DpsJobInstruction `object`
  * DpsJobInstruction `object`
    * Apply `boolean`: The dps job instructions' apply
    * Employer `object`: The dps job instructions' employer
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * FromDate `string`: The dps job instructions' from date
    * HoldingDate `string`: The dps job instructions' holding date
    * MessageTypes `object`: The dps job instructions' message types
      * Type `array`
        * items `object`
    * MessagesToProcess `object`: The dps job instructions' messages to process
      * Message `array`
        * items `object`
          * @href `string`: The links' href
          * @rel `string`: The links' target type
          * @title `string`: The links' title
    * Retrieve `boolean`: The dps job instructions' retrieve

### DpsMessage
* DpsMessage `object`
  * DpsMessage `object`
    * FormType `string`: The dps messages' form type
    * IssueDate `string`: The dps messages' issue date
    * LastUpdated `string`: The dps messages' last updated
    * Message `string`: The dps messages' message
    * MessageStatus `string` (values: Retrieved, Applied, Unresolved, Ignored, Information): The dps messages' message status
    * MessageType `string`: The dps messages' message type
    * ProcessingResult `string`: The dps messages' processing result
    * RetrieveDate `string`: The dps messages' retrieve date
    * SequenceNumber `integer`: The dps messages' sequence number

### Employee
* Employee `object`
  * Employee `object`
    * AEAssessmentOverride `string` (values: None, OptOut, OptIn, VoluntaryJoiner, ContractualPension, CeasedMembership, Leaver, Excluded): The employees' a e assessment override
    * AEAssessmentOverrideDate `string`: The employees' a e assessment override date
    * AEExclusionReasonCode `string` (values: OtherNotKnown, NotAWorker, NotUKWorker, TemporaryUKWorker, OutsideAgeRange, SingleEmployeeDirector, CeasedMembershipWithin12Months, CeasedMembershipBeyond12Months, WorkerWULSWithin12Month, WorkerWULSBeyond12Month, WorkerInNoticePeriod, WorkerTaxProtection): The employees' a e exclusion reason code
    * AEPostponementDate `string`: The employees' a e postponement date
    * Address `object`: The employees' address
      * Address1 `string`: The addresss' line 1
      * Address2 `string`: The addresss' line 2
      * Address3 `string`: The addresss' line 3
      * Address4 `string`: The addresss' line 4
      * Country `string`: The addresss' country
      * Postcode `string`: The addresss' postcode
    * BankAccount `object`: The employees' bank account
      * AccountName `string`: The bank accounts' account name
      * AccountNumber `string`: The bank accounts' account number
      * Reference `string`: The bank accounts' reference
      * SortCode `string`: The bank accounts' sort code
    * Code `string`: The employees' code
    * DateOfBirth `string`: The employees' date of birth
    * Deactivated `boolean`: The employees' deactivated
    * DirectorshipAppointmentDate `string`: The employees' directorship appointment date
    * EEACitizen `boolean`: The employees' e e a citizen
    * EPM6 `boolean`: The employees' e p m6
    * EffectiveDate `string`: The employees' effective date
    * EmployeePartner `object`: The employees' employee partner
      * FirstName `string`: The employee partners' first name
      * Initials `string`: The employee partners' initials
      * LastName `string`: The employee partners' last name
      * MiddleName `string`: The employee partners' middle name
      * NiNumber `string`: The employee partners' ni number
    * FirstName `string`: The employees' the first name
    * Gender `string` (values: Unknown, Male, Female): The employees' gender
    * HoursPerWeek `number`: The employees' hours per week
    * Initials `string`: The employees' initials
    * IrregularEmployment `boolean`: The employees' irregular employment
    * IsAgencyWorker `boolean`: The employees' is agency worker
    * LastName `string`: The employees' last name
    * LeaverReason `string` (values: Resigned, Dismissed, Redundant, Retired, Deceased, LegalCustody, Other): The employees' leaver reason
    * LeavingDate `string`: The employees' leaving date
    * MaritalStatus `string` (values: NotSet, Single, Married, Divorced, Widowed): The employees' marital status
    * MetaData `object`: The employees' meta data
    * MiddleName `string`: The employees' middle name
    * NiNumber `string`: The employees' ni number
    * NicLiability `string` (values: HasOtherJob, IsFemaleEntitledToReducedRate, IsNotLiable, IsContractedOut, IsFullyLiable, IsApprentice, LeaverBeyond6Weeks, PaymentAfterLeaving): The employees' nic liability
    * OnStrike `boolean`: The employees' on strike
    * PassportNumber `string`: The employees' passport number
    * PaySchedule `object`: The employees' pay schedule
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * PaymentMethod `string` (values: NotSet, Cash, Cheque, BACS, FasterPayments, Other): The employees' payment method
    * PaymentToANonIndividual `boolean`: The employees' payment to a non individual
    * Region `string` (values: NotSet, England, Scotland, Wales): The employees' region
    * Revision `integer`: The employees' revision
    * RuleExclusions `string` (values: None, NiMissingPayInstructionRule, TaxMissingPayInstructionRule, TaxCodeUpliftRule, NiSetExpectedLetterRule, NiDateOfBirthChangeRetrospectiveCRule, NiDefermentStatusChangeRule, NiEndContractedOutTransferRule, PaymentAfterLeavingRule, LeaverEndInstructionsRule, P45StudentLoanInstructionRule, P45TaxInstructionRule, P45YtdTaxRule, YtdInstructionRule, TaxCodeRegionChangeRule, AutoEnrolmentStatusChangeRule, EmployeeDeceasedRule, BenefitInstructionAutoEndRule): The employees' rule exclusions
    * Seconded `string` (values: NotSet, Stay183DaysOrMore, StayLessThan183Days, InOutUk): The employees' seconded
    * StartDate `string`: The employees' start date
    * StarterDeclaration `string` (values: PreviouslyReported, A, B, C): The employees' starter declaration
    * Territory `string` (values: UnitedKingdom): The employees' territory
    * Title `string`: The employees' title
    * WorkingWeek `string` (values: None, Monday, Tuesday, Wednesday, Thursday, Friday, AllWeekDays, Saturday, Sunday, AllDays): The employees' working week

### EmployeeSecret
* EmployeeSecret `object`
  * EmployeeSecret `object`
    * Created `string`: The employee secrets' created
    * Name `string`: The employee secrets' name
    * Value `string`: The employee secrets' value

### Employer
* Employer `object`
  * Employer `object`
    * Address `object`: The employers' address
      * Address1 `string`: The addresss' line 1
      * Address2 `string`: The addresss' line 2
      * Address3 `string`: The addresss' line 3
      * Address4 `string`: The addresss' line 4
      * Country `string`: The addresss' country
      * Postcode `string`: The addresss' postcode
    * ApprenticeshipLevyAllowance `number`: The employers' apprenticeship levy allowance
    * AutoEnrolment `object`: The employers' auto enrolment
      * Pension `object`: The employer auto enrolments' pension
        * @href `string`: The links' href
        * @rel `string`: The links' target type
        * @title `string`: The links' title
      * PostponementDate `string`: The employer auto enrolments' postponement date
      * PrimaryEmail `string`: The employer auto enrolments' primary email
      * PrimaryFirstName `string`: The employer auto enrolments' primary first name
      * PrimaryJobTitle `string`: The employer auto enrolments' primary job title
      * PrimaryLastName `string`: The employer auto enrolments' primary last name
      * PrimaryTelephone `string`: The employer auto enrolments' primary telephone
      * ReEnrolmentDayOffset `integer`: The employer auto enrolments' re enrolment day offset
      * ReEnrolmentMonthOffset `integer`: The employer auto enrolments' re enrolment month offset
      * SecondaryEmail `string`: The employer auto enrolments' secondary email
      * SecondaryFirstName `string`: The employer auto enrolments' secondary first name
      * SecondaryJobTitle `string`: The employer auto enrolments' secondary job title
      * SecondaryLastName `string`: The employer auto enrolments' secondary last name
      * SecondaryTelephone `string`: The employer auto enrolments' secondary telephone
      * StagingDate `string`: The employer auto enrolments' staging date
    * BacsServiceUserNumber `string`: The employers' bacs service user number
    * BankAccount `object`: The employers' bank account
      * AccountName `string`: The bank accounts' account name
      * AccountNumber `string`: The bank accounts' account number
      * Reference `string`: The bank accounts' reference
      * SortCode `string`: The bank accounts' sort code
    * ClaimEmploymentAllowance `boolean`: The employers' claim employment allowance
    * ClaimSmallEmployerRelief `boolean`: The employers' claim small employer relief
    * EffectiveDate `string`: The employers' effective date
    * HmrcSettings `object`: The employers' hmrc settings
      * AccountingOfficeRef `string`: The hmrc settingss' accounting office ref
      * COTAXRef `string`: The hmrc settingss' c o t a x ref
      * ContactEmail `string`: The hmrc settingss' contact email
      * ContactFax `string`: The hmrc settingss' contact fax
      * ContactFirstName `string`: The hmrc settingss' contact first name
      * ContactLastName `string`: The hmrc settingss' contact last name
      * ContactTelephone `string`: The hmrc settingss' contact telephone
      * Password `string`: The hmrc settingss' password
      * SAUTR `string`: The hmrc settingss' s a u t r
      * Sender `string` (values: Employer, Individual, Company, Agent, Bureau, Partnership, Trust, Government, ActingInCapacity, Other): The hmrc settingss' sender
      * SenderId `string`: The hmrc settingss' sender id
      * TaxOfficeNumber `string`: The hmrc settingss' tax office number
      * TaxOfficeReference `string`: The hmrc settingss' tax office reference
    * MetaData `object`: The employers' meta data
    * Name `string`: The employers' name
    * Region `string` (values: NotSet, England, Scotland, Wales): The employers' region
    * Revision `integer`: The employers' revision
    * RuleExclusions `string` (values: None, NiMissingPayInstructionRule, TaxMissingPayInstructionRule, TaxCodeUpliftRule, NiSetExpectedLetterRule, NiDateOfBirthChangeRetrospectiveCRule, NiDefermentStatusChangeRule, NiEndContractedOutTransferRule, PaymentAfterLeavingRule, LeaverEndInstructionsRule, P45StudentLoanInstructionRule, P45TaxInstructionRule, P45YtdTaxRule, YtdInstructionRule, TaxCodeRegionChangeRule, AutoEnrolmentStatusChangeRule, EmployeeDeceasedRule, BenefitInstructionAutoEndRule): The employers' rule exclusions
    * Territory `string` (values: UnitedKingdom): The employers' territory

### EmployerSecret
* EmployerSecret `object`
  * EmployerSecret `object`
    * Created `string`: The employer secrets' created
    * Name `string`: The employer secrets' name
    * Value `string`: The employer secrets' value

### ErrorModel
* ErrorModel `object`
  * ErrorModel `object`
    * Description `string`: The error models' description
    * ErrorCategory `string` (values: General, NotFound, NotAuthorised, ValidationFailure): The error models' error category
    * Errors `object`: The error models' errors
      * Error `array`
        * items `string`

### HealthCheck
* HealthCheck `object`
  * HealthCheck `object`
    * Info `string`: The health checks' info
    * Version `string`: The health checks' version

### HolidayScheme
* HolidayScheme `object`
  * HolidayScheme `object`
    * AccrualPayCodes `object`: The holiday schemes' accrual pay codes
      * PayCode `array`
        * items `string`
    * AllowNegativeBalance `boolean`: The holiday schemes' allow negative balance
    * AnnualEntitlementWeeks `number`: The holiday schemes' annual entitlement weeks
    * BankHolidayInclusive `boolean`: The holiday schemes' bank holiday inclusive
    * Code `string`: The holiday schemes' code
    * EffectiveDate `string`: The holiday schemes' effective date
    * MaxCarryOverDays `number`: The holiday schemes' max carry over days
    * Revision `integer`: The holiday schemes' revision
    * SchemeCeasedDate `string`: The holiday schemes' scheme ceased date
    * SchemeKey `string`: The holiday schemes' scheme key
    * SchemeName `string`: The holiday schemes' scheme name
    * YearStartDay `integer`: The holiday schemes' year start day
    * YearStartMonth `integer`: The holiday schemes' year start month

### JobInfo
* JobInfo `object`
  * JobInfo `object`
    * Created `string`: The job infos' created
    * EmployerKey `string`: The job infos' employer key
    * Errors `object`: The job infos' errors
      * Error `array`
        * items `string`
    * HoldingDate `string`: The job infos' holding date
    * JobId `string`: The job infos' job id
    * JobStatus `string` (values: New, Pending, InProgress, Success, Failed, OnHold): The job infos' job status
    * JobType `string`: The job infos' job type
    * LastUpdated `string`: The job infos' last updated
    * Progress `number`: The job infos' progress

### Link
* Link `object`
  * Link `object`
    * @href `string`: The links' href
    * @rel `string`: The links' target type
    * @title `string`: The links' title

### LinkCollection
* LinkCollection `object`
  * LinkCollection `object`
    * Links `object`: The link collections' links
      * Link `array`
        * items `object`
          * @href `string`: The links' href
          * @rel `string`: The links' target type
          * @title `string`: The links' title

### NominalCode
* NominalCode `object`
  * NominalCode `object`
    * Description `string`: The nominal codes' description
    * Key `string`: The nominal codes' key

### PayCode
* PayCode `object`
  * PayCode `object`
    * Benefit `boolean`: The pay codes' benefit
    * Code `string`: The pay codes' code
    * Description `string`: The pay codes' description
    * EffectiveDate `string`: The pay codes' effective date
    * Niable `boolean`: The pay codes' niable
    * NominalCode `object`: The pay codes' nominal code
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * NonArrestable `boolean`: The pay codes' non arrestable
    * Notional `boolean`: The pay codes' notional
    * Readonly `boolean`: The pay codes' readonly
    * Region `string` (values: NotSet, England, Scotland, Wales): The pay codes' region
    * Revision `integer`: The pay codes' revision
    * Taxable `boolean`: The pay codes' taxable
    * Territory `string` (values: UnitedKingdom): The pay codes' territory
    * Type `string` (values: NotSet, Payment, Deduction): The pay codes' type

### PayInstruction
* PayInstruction `object`
  * PayInstruction `object`
    * Description `string`: The pay instructions' description
    * EndDate `string`: The pay instructions' end date
    * PayLineTag `string`: The pay instructions' pay line tag
    * StartDate `string`: The pay instructions' start date

### PayLine
* PayLine `object`
  * PayLine `object`
    * Calculator `string`: The pay lines' calculator
    * Description `string`: The pay lines' description
    * Generated `string`: The pay lines' generated
    * PayCode `string`: The pay lines' pay code
    * PayCodeType `string` (values: NotSet, Payment, Deduction): The pay lines' pay code type
    * PayRunSequence `integer`: The pay lines' pay run sequence
    * PaymentDate `string`: The pay lines' payment date
    * TaxPeriod `integer`: The pay lines' tax period
    * TaxYear `integer`: The pay lines' tax year
    * Value `number`: The pay lines' value

### PayRun
* PayRun `object`
  * PayRun `object`
    * Executed `string`: The pay runs' executed
    * IsSupplementary `boolean`: The pay runs' is supplementary
    * PayFrequency `string` (values: Weekly, Monthly, TwoWeekly, FourWeekly, Yearly): The pay runs' pay frequency
    * PaySchedule `object`: The pay runs' pay schedule
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * PaymentDate `string`: The pay runs' payment date
    * PeriodEnd `string`: The pay runs' period end
    * PeriodStart `string`: The pay runs' period start
    * ProceedingPayRun `object`: The pay runs' proceeding pay run
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * Sequence `integer`: The pay runs' sequence
    * TaxPeriod `integer`: The pay runs' tax period
    * TaxYear `integer`: The pay runs' tax year

### PayRunJobInstruction
* PayRunJobInstruction `object`
  * PayRunJobInstruction `object`
    * Employees `object`: The pay run job instructions' employees
      * Employee `array`
        * items `object`
          * @href `string`: The links' href
          * @rel `string`: The links' target type
          * @title `string`: The links' title
    * EndDate `string`: The pay run job instructions' end date
    * HoldingDate `string`: The pay run job instructions' holding date
    * IsSupplementary `boolean`: The pay run job instructions' is supplementary
    * PaySchedule `object`: The pay run job instructions' pay schedule
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * PaymentDate `string`: The pay run job instructions' payment date
    * StartDate `string`: The pay run job instructions' start date

### PaySchedule
* PaySchedule `object`
  * PaySchedule `object`
    * MetaData `object`: The pay schedules' meta data
    * Name `string`: The pay schedules' name
    * PayFrequency `string` (values: Weekly, Monthly, TwoWeekly, FourWeekly, Yearly): The pay schedules' pay frequency

### Pension
* Pension `object`
  * Pension `object`
    * AECompatible `boolean`: The pensions' a e compatible
    * Code `string`: The pensions' code
    * ContributionDeductionDay `integer`: The pensions' contribution deduction day
    * EffectiveDate `string`: The pensions' effective date
    * EmployeeContributionCash `number`: The pensions' employee contribution cash
    * EmployeeContributionPercent `number`: The pensions' employee contribution percent
    * EmployerContributionCash `number`: The pensions' employer contribution cash
    * EmployerContributionPercent `number`: The pensions' employer contribution percent
    * Group `string`: The pensions' group
    * LowerThreshold `number`: The pensions' lower threshold
    * MetaData `object`: The pensions' meta data
    * PensionablePayCodes `object`: The pensions' pensionable pay codes
      * PayCode `array`
        * items `string`
    * ProRataMethod `string` (values: NotSet, Annual260Days, Annual365Days, AnnualQualifyingDays, DaysPerCalendarMonth, DaysPerTaxPeriod): The pensions' pro rata method
    * ProviderEmployerRef `string`: The pensions' provider employer ref
    * ProviderName `string`: The pensions' provider name
    * QualifyingPayCodes `object`: The pensions' qualifying pay codes
      * PayCode `array`
        * items `string`
    * Revision `integer`: The pensions' revision
    * RoundingOption `string` (values: NotSet, PennyUp, PennyDown, Bankers, FiveUp, FiveDown): The pensions' rounding option
    * SalarySacrifice `boolean`: The pensions' salary sacrifice
    * SchemeName `string`: The pensions' scheme name
    * SubGroup `string`: The pensions' sub group
    * TaxationMethod `string` (values: NotSet, NetBased, ReliefAtSource, TaxReliefExcluded): The pensions' taxation method
    * UpperThreshold `number`: The pensions' upper threshold
    * UseAEThresholds `boolean`: The pensions' use a e thresholds

### Query
* Query `object`
  * Query `object`
    * ExcludeNullOrEmptyElements `boolean`: The querys' exclude null or empty elements
    * Groups `object`: The querys' groups
      * Group `array`
        * items `object`
          * @GroupName `string`: The entity groups' group name
          * @ItemName `string`: The entity groups' item name
          * @LoopExpression `string`: The entity groups' loop expression
          * @Selector `string`: The entity groups' selector
          * @UniqueKeyVariable `string`: The entity groups' unique key variable
          * Condition `array`: The entity groups' conditions
          * Filter `array`: The entity groups' filters
          * Order `array`: The entity groups' ordering
          * Output `array`: The entity groups' outputs
    * RootNodeName `string`: The querys' root node name
    * SuppressMetricAttributes `boolean`: The querys' suppress metric attributes
    * Variables `object`: The querys' variables
      * Variable `array`
        * items `object`
          * @Name `string`: The name value pairs' name
          * @Value `string`: The name value pairs' value

### ReportDefinition
* ReportDefinition `object`
  * ReportDefinition `object`
    * Readonly `boolean`: The report definitions' readonly
    * ReportQuery `object`: The report definitions' report query
      * ExcludeNullOrEmptyElements `boolean`: The querys' exclude null or empty elements
      * Groups `object`: The querys' groups
        * Group `array`
          * items `object`
      * RootNodeName `string`: The querys' root node name
      * SuppressMetricAttributes `boolean`: The querys' suppress metric attributes
      * Variables `object`: The querys' variables
        * Variable `array`
          * items `object`
    * Title `string`: The report definitions' title

### ReportLine
* ReportLine `object`
  * ReportLine `object`
    * Description `string`: The report lines' description
    * Generated `string`: The report lines' generated
    * TaxMonth `integer`: The report lines' tax month
    * TaxYear `integer`: The report lines' tax year
    * Value `number`: The report lines' value

### ReportingInstruction
* ReportingInstruction `object`
  * ReportingInstruction `object`
    * EndDate `string`: The reporting instructions' end date
    * StartDate `string`: The reporting instructions' start date
    * TaxMonth `integer`: The reporting instructions' tax month
    * TaxYear `integer`: The reporting instructions' tax year
    * Value `number`: The reporting instructions' value

### RtiJobInstruction
* RtiJobInstruction `object`
  * RtiJobInstruction `object`
    * EarlierTaxYear `integer`: The rti job instructions' earlier tax year
    * Employer `object`: The rti job instructions' employer
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * FinalSubmissionForYear `boolean`: The rti job instructions' final submission for year
    * Generate `boolean`: The rti job instructions' generate
    * HoldingDate `string`: The rti job instructions' holding date
    * LateReason `string` (values: A, B, C, D, F, G, H): The rti job instructions' late reason
    * NoPaymentForPeriodFrom `string`: The rti job instructions' no payment for period from
    * NoPaymentForPeriodTo `string`: The rti job instructions' no payment for period to
    * PaySchedule `object`: The rti job instructions' pay schedule
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * PaymentDate `string`: The rti job instructions' payment date
    * PeriodOfInactivityFrom `string`: The rti job instructions' period of inactivity from
    * PeriodOfInactivityTo `string`: The rti job instructions' period of inactivity to
    * RtiTransaction `object`: The rti job instructions' rti transaction
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * RtiType `string`: The rti job instructions' rti type
    * SchemeCeased `string`: The rti job instructions' scheme ceased
    * TaxMonth `integer`: The rti job instructions' tax month
    * TaxYear `integer`: The rti job instructions' tax year
    * Timestamp `string`: The rti job instructions' timestamp
    * Transmit `boolean`: The rti job instructions' transmit

### RtiTransactionBase
* RtiTransactionBase `object`
  * RtiTransactionBase `object`
    * EmployerCore `object`: The rti transaction bases' employer core
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * RequestData `string`: The rti transaction bases' request data
    * ResponseData `string`: The rti transaction bases' response data
    * RtiType `string`: The rti transaction bases' rti type
    * TaxYear `integer`: The rti transaction bases' tax year
    * Timestamp `string`: The rti transaction bases' timestamp
    * TransactionStatus `string` (values: New, RequestGenerated, CompletedWithError, CompletedWithSuccess, TimeOut): The rti transaction bases' transaction status
    * TransmissionDate `string`: The rti transaction bases' transmission date

### SubContractor
* SubContractor `object`
  * SubContractor `object`
    * Address `object`: The sub contractors' address
      * Address1 `string`: The addresss' line 1
      * Address2 `string`: The addresss' line 2
      * Address3 `string`: The addresss' line 3
      * Address4 `string`: The addresss' line 4
      * Country `string`: The addresss' country
      * Postcode `string`: The addresss' postcode
    * BankAccount `object`: The sub contractors' bank account
      * AccountName `string`: The bank accounts' account name
      * AccountNumber `string`: The bank accounts' account number
      * Reference `string`: The bank accounts' reference
      * SortCode `string`: The bank accounts' sort code
    * BusinessType `string` (values: SoleTrader, Company, Partnership, Trust): The sub contractors' business type
    * CompanyName `string`: The sub contractors' company name
    * CompanyRegistrationNumber `string`: The sub contractors' company registration number
    * Deactivated `boolean`: The sub contractors' deactivated
    * EffectiveDate `string`: The sub contractors' effective date
    * FirstName `string`: The sub contractors' first name
    * Initials `string`: The sub contractors' initials
    * LastName `string`: The sub contractors' last name
    * MetaData `object`: The sub contractors' meta data
    * MiddleName `string`: The sub contractors' middle name
    * NiNumber `string`: The sub contractors' ni number
    * PartnershipName `string`: The sub contractors' partnership name
    * PartnershipUniqueTaxReference `string`: The sub contractors' partnership unique tax reference
    * PayFrequency `string` (values: Monthly, Weekly): The sub contractors' pay frequency
    * PaymentMethod `string` (values: NotSet, Cash, Cheque, BACS, FasterPayments, Other): The sub contractors' payment method
    * Region `string` (values: NotSet, England, Scotland, Wales): The sub contractors' region
    * Revision `integer`: The sub contractors' revision
    * TaxationStatus `string` (values: Unmatched, Net, Gross): The sub contractors' taxation status
    * Telephone `string`: The sub contractors' telephone
    * Territory `string` (values: UnitedKingdom): The sub contractors' territory
    * Title `string`: The sub contractors' title
    * TradingName `string`: The sub contractors' trading name
    * UniqueTaxReference `string`: The sub contractors' unique tax reference
    * VatRegistered `boolean`: The sub contractors' vat registered
    * VatRegistrationNumber `string`: The sub contractors' vat registration number
    * VerificationDate `string`: The sub contractors' verification date
    * VerificationNumber `string`: The sub contractors' verification number
    * WorksNumber `string`: The sub contractors' works number

### Tag
* Tag `object`
  * Tag `object`
    * Created `string`: The tags' created
    * TaggedItem `object`: The tags' tagged item
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * Text `string`: The tags' text

### ThirdPartyJobInstruction
* ThirdPartyJobInstruction `object`
  * ThirdPartyJobInstruction `object`
    * ClientIdUniqueKey `string`: The third party job instructions' client id unique key
    * ClientSecretUniqueKey `string`: The third party job instructions' client secret unique key
    * Employer `object`: The third party job instructions' employer
      * @href `string`: The links' href
      * @rel `string`: The links' target type
      * @title `string`: The links' title
    * HoldingDate `string`: The third party job instructions' holding date
    * InstructionTypeName `string`: The third party job instructions' instruction type name
    * PayScheduleUniqueKey `string`: The third party job instructions' pay schedule unique key
    * PaymentDate `string`: The third party job instructions' payment date
    * RemoteEndpoint `string`: The third party job instructions' remote endpoint

### ThirdPartyTransaction


### TransformDefinition
* TransformDefinition `object`
  * TransformDefinition `object`
    * ContentType `string`: The transform definitions' content type
    * Definition `string`: The transform definitions' definition
    * DefinitionType `string`: The transform definitions' definition type
    * Readonly `boolean`: The transform definitions' readonly
    * SupportedReports `string`: The transform definitions' supported reports
    * TaxYear `integer`: The transform definitions' tax year
    * Title `string`: The transform definitions' title


