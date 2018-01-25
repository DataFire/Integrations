# @datafire/payrun

Client library for PayRun.IO

## Installation and Usage
```bash
npm install --save @datafire/payrun
```
```js
let payrun = require('@datafire/payrun').create();

payrun.DeleteEmployer({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}).then(data => {
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * Employer **required** [Employer](#employer)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employer](#employer)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
  * Employee **required** [Employee](#employee)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Employee](#employee)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
  * CommentaryId **required** `string`: The commentary unique identifier. E.g. C001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Commentary](#commentary)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
  * PayInstructionId **required** `string`: The pay instruction unique identifier. E.g. SAL001
  * PayInstruction **required** [PayInstruction](#payinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayInstruction](#payinstruction)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
  * PayInstruction **required** [PayInstruction](#payinstruction)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
  * PayLineId **required** `string`: The pay line unique identifier. E.g. PL001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayLine](#payline)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * NominalCodeId **required** `string`: The nominal code unique identifier. E.g. NOM001
  * NominalCode **required** [NominalCode](#nominalcode)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [NominalCode](#nominalcode)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
  * PayCode **required** [PayCode](#paycode)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayCode](#paycode)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayCodeId **required** `string`: The pay code unique identifier. E.g. CODE001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PaySchedule **required** [PaySchedule](#payschedule)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PaySchedule](#payschedule)

### GetEmployeesFromPaySchedule
Gets links to all employees included in the specified pay schedule.


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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [PayRun](#payrun)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
  * EmployeeId **required** `string`: The employee's unique identifier. E.g EE001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
*Output schema unknown*

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
  * PayRunId **required** `string`: The pay run's unique identifier. E.g. PR001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PayScheduleId **required** `string`: The pay schedule's unique identifier. E.g SCH001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PensionId **required** `string`: The pension's unique identifier. E.g PEN001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PensionId **required** `string`: The pension's unique identifier. E.g PEN001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PensionId **required** `string`: The pension's unique identifier. E.g PEN001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PensionId **required** `string`: The pension's unique identifier. E.g PEN001
  * Pension **required** [Pension](#pension)
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Pension](#pension)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PensionId **required** `string`: The pension's unique identifier. E.g PEN001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * PensionId **required** `string`: The pension's unique identifier. E.g PEN001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * ReportingInstructionId **required** `string`: The reporting instruction unique identifier. E.g. SERRPT001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [LinkCollection](#linkcollection)

### PostReportingInstruction
Creates a new reporting instruction object


```js
payrun.PostReportingInstruction({
  "EmployerId": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [Link](#link)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * RtiTransactionId **required** `string`: The RTI transaction unique identifier. E.g. FPS001
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output [RtiTransactionBase](#rtitransactionbase)

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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
  * EffectiveDate **required** `string`: The effective date to be applied. E.g 2016-04-06
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  * EmployerId **required** `string`: The employer's unique identifier. E.g ER001
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
  "ActiveOn": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * EmployeeKey **required** `string`: The employee unique key. E.g. EE001
  * ActiveOn **required** `string`: The active date to consider. E.g 2017-04-05
  * Type `string`: the data type to filter on. E.g. TaxPayInstruction
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
  * TaxYear **required** `string`: The tax year. E.g. 2016 = 2016/17 year.
  * TaxPeriod `string`: The tax period number.
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
  * TaxYear **required** `string`: The tax year. E.g. 2016 = 2016/17 year.
  * TaxPeriod `string`: The tax period number.
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
  * TaxYear **required** `string`: The tax year. E.g. 2016 = 2016/17 year.
  * TaxPeriod `string`: The tax period number.
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
  * TaxYear **required** `string`: The tax year. E.g. 2016 = 2016/17 year.
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
  * TaxYear **required** `string`: The tax year. E.g. 2016 = 2016/17 year.
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
  * TaxYear **required** `string`: The tax year. E.g. 2016 = 2016/17 year.
  * EmployeeCodes `string`: A comma separated list of the employee codes. E.g. EMP001,EMP002
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayslipReportOutput
Returns the result of the executed payslip report for the given query parameters


```js
payrun.GetPayslipReportOutput({
  "EmployerKey": "",
  "TaxYear": "",
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * EmployerKey **required** `string`: The employer unique key. E.g. ER001
  * TaxYear **required** `string`: The tax year. E.g. 2016 = 2016/17 year.
  * TaxPeriod `string`: The tax period number.
  * EmployeeCodes `string`: A comma separated list of the employee codes. E.g. EMP001,EMP002
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

### GetAbsencePayInstructionSchema
Returns the AbsencePayInstruction schema object


```js
payrun.GetAbsencePayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetAbsenceYtdPayInstructionSchema
Returns the AbsenceYtdPayInstruction schema object


```js
payrun.GetAbsenceYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetAddressSchema
Returns the Address schema object


```js
payrun.GetAddressSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetArrayOfEmployeeSchema
Returns the ArrayOfEmployee schema object


```js
payrun.GetArrayOfEmployeeSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetBankAccountSchema
Returns the BankAccount schema object


```js
payrun.GetBankAccountSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetBenefitPayInstructionSchema
Returns the BenefitPayInstruction schema object


```js
payrun.GetBenefitPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetBenefitYtdPayInstructionSchema
Returns the BenefitYtdPayInstruction schema object


```js
payrun.GetBenefitYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetCommonSchema
Returns the Common schema object


```js
payrun.GetCommonSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetEmployeeSchema
Returns the Employee schema object


```js
payrun.GetEmployeeSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetEmployeePartnerSchema
Returns the EmployeePartner schema object


```js
payrun.GetEmployeePartnerSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetEmployerSchema
Returns the Employer schema object


```js
payrun.GetEmployerSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetHmrcSettingsSchema
Returns the HmrcSettings schema object


```js
payrun.GetHmrcSettingsSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetLinkSchema
Returns the Link schema object


```js
payrun.GetLinkSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNiAdjustmentPayInstructionSchema
Returns the NiAdjustmentPayInstruction schema object


```js
payrun.GetNiAdjustmentPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNiPayInstructionSchema
Returns the NiPayInstruction schema object


```js
payrun.GetNiPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNiYtdPayInstructionSchema
Returns the NiYtdPayInstruction schema object


```js
payrun.GetNiYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetP45PayInstructionSchema
Returns the P45PayInstruction schema object


```js
payrun.GetP45PayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayInstructionSchema
Returns the PayInstruction schema object


```js
payrun.GetPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayRunJobInstructionSchema
Returns the PayRunJobInstruction schema object


```js
payrun.GetPayRunJobInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayScheduleSchema
Returns the PaySchedule schema object


```js
payrun.GetPayScheduleSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPensionPayInstructionSchema
Returns the PensionPayInstruction schema object


```js
payrun.GetPensionPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPensionYtdPayInstructionSchema
Returns the PensionYtdPayInstruction schema object


```js
payrun.GetPensionYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPrimitivePayInstructionSchema
Returns the PrimitivePayInstruction schema object


```js
payrun.GetPrimitivePayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiJobInstructionSchema
Returns the RtiJobInstruction schema object


```js
payrun.GetRtiJobInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSalaryPayInstructionSchema
Returns the SalaryPayInstruction schema object


```js
payrun.GetSalaryPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSapPayInstructionSchema
Returns the SapPayInstruction schema object


```js
payrun.GetSapPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSapYtdPayInstructionSchema
Returns the SapYtdPayInstruction schema object


```js
payrun.GetSapYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetShppPayInstructionSchema
Returns the ShppPayInstruction schema object


```js
payrun.GetShppPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetShppYtdPayInstructionSchema
Returns the ShppYtdPayInstruction schema object


```js
payrun.GetShppYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSmpPayInstructionSchema
Returns the SmpPayInstruction schema object


```js
payrun.GetSmpPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSmpYtdPayInstructionSchema
Returns the SmpYtdPayInstruction schema object


```js
payrun.GetSmpYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSppPayInstructionSchema
Returns the SppPayInstruction schema object


```js
payrun.GetSppPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSppYtdPayInstructionSchema
Returns the SppYtdPayInstruction schema object


```js
payrun.GetSppYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSspPayInstructionSchema
Returns the SspPayInstruction schema object


```js
payrun.GetSspPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSspYtdPayInstructionSchema
Returns the SspYtdPayInstruction schema object


```js
payrun.GetSspYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetStudentLoanPayInstructionSchema
Returns the StudentLoanPayInstruction schema object


```js
payrun.GetStudentLoanPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetStudentLoanYtdPayInstructionSchema
Returns the StudentLoanYtdPayInstruction schema object


```js
payrun.GetStudentLoanYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetTaxPayInstructionSchema
Returns the TaxPayInstruction schema object


```js
payrun.GetTaxPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetTaxYtdPayInstructionSchema
Returns the TaxYtdPayInstruction schema object


```js
payrun.GetTaxYtdPayInstructionSchema({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
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

### GetAddressTemplate
Return the address data object template


```js
payrun.GetAddressTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetApplicationInfoTemplate
Return the application info data object template


```js
payrun.GetApplicationInfoTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetBankAccountTemplate
Return the bank account data object template


```js
payrun.GetBankAccountTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetBenefitPayInstructionTemplate
Return the benefit pay instruction data object template


```js
payrun.GetBenefitPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetBenefitYtdPayInstructionTemplate
Return the benefit YTD pay instruction data object template


```js
payrun.GetBenefitYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetCommentaryTemplate
Return the commentary data object template


```js
payrun.GetCommentaryTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetEmployeeTemplate
Return the employee data object template


```js
payrun.GetEmployeeTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetEmployeePartnerTemplate
Return the employee partner data object template


```js
payrun.GetEmployeePartnerTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetEmployerTemplate
Return the employer data object template


```js
payrun.GetEmployerTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetErrorModelTemplate
Return the error model data object template


```js
payrun.GetErrorModelTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetHmrcSettingsTemplate
Return the hmrc settings data object template


```js
payrun.GetHmrcSettingsTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetJobInfoTemplate
Return the job info data object template


```js
payrun.GetJobInfoTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetLinkTemplate
Return the link data object template


```js
payrun.GetLinkTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetLinkCollectionTemplate
Return the link collection data object template


```js
payrun.GetLinkCollectionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNiAdjustmentPayInstructionTemplate
Return the NI adjustment pay instruction data object template


```js
payrun.GetNiAdjustmentPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNiPayInstructionTemplate
Return the NI pay instruction data object template


```js
payrun.GetNiPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetNiYtdPayInstructionTemplate
Return the NI YTD pay instruction data object template


```js
payrun.GetNiYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetP45PayInstructionTemplate
Return the P45 pay instruction data object template


```js
payrun.GetP45PayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayCodeTemplate
Return the pay code data object template


```js
payrun.GetPayCodeTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayInstructionTemplate
Return the pay instruction data object template


```js
payrun.GetPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineTemplate
Return the pay line data object template


```js
payrun.GetPayLineTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineBenefitTemplate
Return the pay line benefit data object template


```js
payrun.GetPayLineBenefitTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineNiTemplate
Return the pay line NI data object template


```js
payrun.GetPayLineNiTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLinePensionTemplate
Return the pay line pension data object template


```js
payrun.GetPayLinePensionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineSapTemplate
Return the pay line sap data object template


```js
payrun.GetPayLineSapTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineShppTemplate
Return the pay line shpp data object template


```js
payrun.GetPayLineShppTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineSmpTemplate
Return the pay line smp data object template


```js
payrun.GetPayLineSmpTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineSppTemplate
Return the pay line spp data object template


```js
payrun.GetPayLineSppTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineSspTemplate
Return the pay line ssp data object template


```js
payrun.GetPayLineSspTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineStudentLoanTemplate
Return the pay line student loan data object template


```js
payrun.GetPayLineStudentLoanTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayLineTaxTemplate
Return the pay line tax data object template


```js
payrun.GetPayLineTaxTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayRunTemplate
Return the pay run data object template


```js
payrun.GetPayRunTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayRunJobTemplate
Return the pay run job data object template


```js
payrun.GetPayRunJobTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayRunJobInstructionTemplate
Return the pay run job instruction data object template


```js
payrun.GetPayRunJobInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPayScheduleTemplate
Return the pay schedule data object template


```js
payrun.GetPayScheduleTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPensionPayInstructionTemplate
Return the pension pay instruction data object template


```js
payrun.GetPensionPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPensionYtdPayInstructionTemplate
Return the pension YTD pay instruction data object template


```js
payrun.GetPensionYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetPrimitivePayInstructionTemplate
Return the primitive pay instruction data object template


```js
payrun.GetPrimitivePayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetReportDefinitionTemplate
Return the report definition data object template


```js
payrun.GetReportDefinitionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiEasTransactionTemplate
Return the rti eas transaction data object template


```js
payrun.GetRtiEasTransactionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiEpsTransactionTemplate
Return the rti eps transaction data object template


```js
payrun.GetRtiEpsTransactionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiEyuTransactionTemplate
Return the rti eyu transaction data object template


```js
payrun.GetRtiEyuTransactionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiFpsTransactionTemplate
Return the rti fps transaction data object template


```js
payrun.GetRtiFpsTransactionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiJobTemplate
Return the rti job data object template


```js
payrun.GetRtiJobTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiJobInstructionTemplate
Return the rti job instruction data object template


```js
payrun.GetRtiJobInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiNvrTransactionTemplate
Return the rti nvr transaction data object template


```js
payrun.GetRtiNvrTransactionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetRtiTransactionBaseTemplate
Return the rti transaction base data object template


```js
payrun.GetRtiTransactionBaseTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSalaryPayInstructionTemplate
Return the salary pay instruction data object template


```js
payrun.GetSalaryPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSapPayInstructionTemplate
Return the sap pay instruction data object template


```js
payrun.GetSapPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSapYtdPayInstructionTemplate
Return the sap YTD pay instruction data object template


```js
payrun.GetSapYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetShppPayInstructionTemplate
Return the shpp pay instruction data object template


```js
payrun.GetShppPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetShppYtdPayInstructionTemplate
Return the shpp YTD pay instruction data object template


```js
payrun.GetShppYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSmpPayInstructionTemplate
Return the smp pay instruction data object template


```js
payrun.GetSmpPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSmpYtdPayInstructionTemplate
Return the smp YTD pay instruction data object template


```js
payrun.GetSmpYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSppPayInstructionTemplate
Return the spp pay instruction data object template


```js
payrun.GetSppPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSppYtdPayInstructionTemplate
Return the spp YTD pay instruction data object template


```js
payrun.GetSppYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSspPayInstructionTemplate
Return the ssp pay instruction data object template


```js
payrun.GetSspPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetSspYtdPayInstructionTemplate
Return the ssp YTD pay instruction data object template


```js
payrun.GetSspYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetStudentLoanPayInstructionTemplate
Return the student loan pay instruction data object template


```js
payrun.GetStudentLoanPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetStudentLoanYtdPayInstructionTemplate
Return the student loan YTD pay instruction data object template


```js
payrun.GetStudentLoanYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetTaxPayInstructionTemplate
Return the tax pay instruction data object template


```js
payrun.GetTaxPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`

### GetTaxYtdPayInstructionTemplate
Return the tax YTD pay instruction data object template


```js
payrun.GetTaxYtdPayInstructionTemplate({
  "Authorization": "",
  "Api-Version": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
  * Api-Version **required** `string`: The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.

#### Output
* output `file`



## Definitions

### Commentary
* Commentary `object`
  * Commentary `object`
    * Created `string`: The commentary's created
    * Detail `string`: The commentary's detail

### DpsJobInstruction
* DpsJobInstruction `object`
  * DpsJobInstruction `object`
    * Apply `boolean`: The dps job instruction's apply
    * Employer `object`: The dps job instruction's employer
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * FromDate `string`: The dps job instruction's from date
    * HoldingDate `string`: The dps job instruction's holding date
    * MessageTypes `object`: The dps job instruction's message types
      * Type `array`
        * items `object`
    * MessagesToProcess `object`: The dps job instruction's messages to process
      * Message `array`
        * items `object`
          * @href `string`: The link's href
          * @rel `string`: The link's target type
          * @title `string`: The link's title
    * Retrieve `boolean`: The dps job instruction's retrieve

### DpsMessage
* DpsMessage `object`
  * DpsMessage `object`
    * FormType `string`: The dps message's form type
    * IssueDate `string`: The dps message's issue date
    * LastUpdated `string`: The dps message's last updated
    * Message `string`: The dps message's message
    * MessageStatus `string` (values: Retrieved, Applied, Unresolved, Ignored, Information): The dps message's message status
    * MessageType `string`: The dps message's message type
    * ProcessingResult `string`: The dps message's processing result
    * RetrieveDate `string`: The dps message's retrieve date
    * SequenceNumber `integer`: The dps message's sequence number

### Employee
* Employee `object`
  * Employee `object`
    * Address `object`: The employee's address
      * Address1 `string`: The address's line 1
      * Address2 `string`: The address's line 2
      * Address3 `string`: The address's line 3
      * Address4 `string`: The address's line 4
      * Country `string`: The address's country
      * Postcode `string`: The address's postcode
    * BankAccount `object`: The employee's bank account
      * AccountName `string`: The bank account's account name
      * AccountNumber `string`: The bank account's account number
      * SortCode `string`: The bank account's sort code
    * Code `string`: The employee's code
    * DateOfBirth `string`: The employee's date of birth
    * Deactivated `boolean`: The employee's deactivated
    * DirectorshipAppointmentDate `string`: The employee's directorship appointment date
    * EEACitizen `boolean`: The employee's e e a citizen
    * EPM6 `boolean`: The employee's e p m6
    * EffectiveDate `string`: The employee's effective date
    * EmployeePartner `object`: The employee's employee partner
      * FirstName `string`: The employee partner's first name
      * Initials `string`: The employee partner's initials
      * LastName `string`: The employee partner's last name
      * MiddleName `string`: The employee partner's middle name
      * NiNumber `string`: The employee partner's ni number
    * FirstName `string`: The employee's the first name
    * Gender `string` (values: Unknown, Male, Female): The employee's gender
    * HoursPerWeek `number`: The employee's hours per week
    * Initials `string`: The employee's initials
    * IrregularEmployment `boolean`: The employee's irregular employment
    * IsAgencyWorker `boolean`: The employee's is agency worker
    * LastName `string`: The employee's last name
    * LeaverReason `string` (values: Resigned, Dismissed, Redundant, Retired, Deceased, LegalCustody, Other): The employee's leaver reason
    * LeavingDate `string`: The employee's leaving date
    * MaritalStatus `string` (values: NotSet, Single, Married, Divorced, Widowed): The employee's marital status
    * MiddleName `string`: The employee's middle name
    * NiNumber `string`: The employee's ni number
    * NicLiability `string` (values: HasOtherJob, IsFemaleEntitledToReducedRate, IsNotLiable, IsContractedOut, IsFullyLiable, IsApprentice, LeaverBeyond6Weeks): The employee's nic liability
    * OnStrike `boolean`: The employee's on strike
    * PassportNumber `string`: The employee's passport number
    * PaySchedule `object`: The employee's pay schedule
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * PaymentMethod `string` (values: NotSet, Cash, Cheque, BACS): The employee's payment method
    * PaymentToANonIndividual `boolean`: The employee's payment to a non individual
    * Region `string` (values: NotSet, England, Scotland): The employee's region
    * Revision `integer`: The employee's revision
    * RuleExclusions `string` (values: None, NiMissingPayInstructionRule, TaxMissingPayInstructionRule, TaxCodeUpliftRule, NiSetExpectedLetterRule, NiDateOfBirthChangeRetrospectiveCRule, NiDefermentStatusChangeRule, NiEndContractedOutTransferRule, PaymentAfterLeavingRule, LeaverEndInstructionsRule, P45StudentLoanInstructionRule, P45TaxInstructionRule, P45YtdTaxRule, YtdInstructionRule, TaxCodeRegionChangeRule): The employee's rule exclusions
    * Seconded `string` (values: NotSet, Stay183DaysOrMore, StayLessThan183Days, InOutUk): The employee's seconded
    * StartDate `string`: The employee's start date
    * StarterDeclaration `string` (values: A, B, C, NA): The employee's starter declaration
    * Territory `string` (values: UnitedKingdom): The employee's territory
    * Title `string`: The employee's title
    * WorkingWeek `string` (values: None, Monday, Tuesday, Wednesday, Thursday, Friday, AllWeekDays, Saturday, Sunday, AllDays): The employee's working week

### Employer
* Employer `object`
  * Employer `object`
    * Address `object`: The employer's address
      * Address1 `string`: The address's line 1
      * Address2 `string`: The address's line 2
      * Address3 `string`: The address's line 3
      * Address4 `string`: The address's line 4
      * Country `string`: The address's country
      * Postcode `string`: The address's postcode
    * ApprenticeshipLevyAllowance `number`: The employer's apprenticeship levy allowance
    * BacsServiceUserNumber `string`: The employer's bacs service user number
    * BankAccount `object`: The employer's bank account
      * AccountName `string`: The bank account's account name
      * AccountNumber `string`: The bank account's account number
      * SortCode `string`: The bank account's sort code
    * ClaimEmploymentAllowance `boolean`: The employer's claim employment allowance
    * ClaimSmallEmployerRelief `boolean`: The employer's claim small employer relief
    * EffectiveDate `string`: The employer's effective date
    * HmrcSettings `object`: The employer's hmrc settings
      * AccountingOfficeRef `string`: The hmrc settings's accounting office ref
      * COTAXRef `string`: The hmrc settings's c o t a x ref
      * ContactEmail `string`: The hmrc settings's contact email
      * ContactFax `string`: The hmrc settings's contact fax
      * ContactFirstName `string`: The hmrc settings's contact first name
      * ContactLastName `string`: The hmrc settings's contact last name
      * ContactTelephone `string`: The hmrc settings's contact telephone
      * Password `string`: The hmrc settings's password
      * SAUTR `string`: The hmrc settings's s a u t r
      * Sender `string` (values: Employer, Individual, Company, Agent, Bureau, Partnership, Trust, Government, ActingInCapacity, Other): The hmrc settings's sender
      * SenderId `string`: The hmrc settings's sender id
      * TaxOfficeNumber `string`: The hmrc settings's tax office number
      * TaxOfficeReference `string`: The hmrc settings's tax office reference
    * Name `string`: The employer's name
    * Region `string` (values: NotSet, England, Scotland): The employer's region
    * Revision `integer`: The employer's revision
    * RuleExclusions `string` (values: None, NiMissingPayInstructionRule, TaxMissingPayInstructionRule, TaxCodeUpliftRule, NiSetExpectedLetterRule, NiDateOfBirthChangeRetrospectiveCRule, NiDefermentStatusChangeRule, NiEndContractedOutTransferRule, PaymentAfterLeavingRule, LeaverEndInstructionsRule, P45StudentLoanInstructionRule, P45TaxInstructionRule, P45YtdTaxRule, YtdInstructionRule, TaxCodeRegionChangeRule): The employer's rule exclusions
    * Territory `string` (values: UnitedKingdom): The employer's territory

### ErrorModel
* ErrorModel `object`
  * ErrorModel `object`
    * Description `string`: The error model's description
    * ErrorCategory `string` (values: General, NotFound, NotAuthorised, ValidationFailure): The error model's error category
    * Errors `object`: The error model's errors
      * Error `array`
        * items `string`

### HealthCheck
* HealthCheck `object`
  * HealthCheck `object`
    * Info `string`: The health check's info
    * Version `string`: The health check's version

### JobInfo
* JobInfo `object`
  * JobInfo `object`
    * Created `string`: The job info's created
    * Errors `object`: The job info's errors
      * Error `array`
        * items `string`
    * HoldingDate `string`: The job info's holding date
    * JobId `string`: The job info's job id
    * JobStatus `string` (values: New, Pending, InProgress, Success, Failed, OnHold): The job info's job status
    * LastUpdated `string`: The job info's last updated
    * Progress `number`: The job info's progress

### Link
* Link `object`
  * Link `object`
    * @href `string`: The link's href
    * @rel `string`: The link's target type
    * @title `string`: The link's title

### LinkCollection
* LinkCollection `object`
  * LinkCollection `object`
    * Links `object`: The link collection's links
      * Link `array`
        * items `object`
          * @href `string`: The link's href
          * @rel `string`: The link's target type
          * @title `string`: The link's title

### NominalCode
* NominalCode `object`
  * NominalCode `object`
    * Description `string`: The nominal code's description
    * Key `string`: The nominal code's key

### PayCode
* PayCode `object`
  * PayCode `object`
    * Benefit `boolean`: The pay code's benefit
    * Code `string`: The pay code's code
    * Description `string`: The pay code's description
    * EffectiveDate `string`: The pay code's effective date
    * Niable `boolean`: The pay code's niable
    * NominalCode `object`: The pay code's nominal code
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * Readonly `boolean`: The pay code's readonly
    * Region `string` (values: NotSet, England, Scotland): The pay code's region
    * Revision `integer`: The pay code's revision
    * Taxable `boolean`: The pay code's taxable
    * Territory `string` (values: UnitedKingdom): The pay code's territory
    * Type `string` (values: NotSet, Payment, Deduction): The pay code's type

### PayInstruction
* PayInstruction `object`
  * PayInstruction `object`
    * Description `string`: The pay instruction's description
    * EndDate `string`: The pay instruction's end date
    * StartDate `string`: The pay instruction's start date

### PayLine
* PayLine `object`
  * PayLine `object`
    * Calculator `string`: The pay line's calculator
    * Description `string`: The pay line's description
    * Generated `string`: The pay line's generated
    * PayCode `string`: The pay line's pay code
    * PayCodeType `string` (values: NotSet, Payment, Deduction): The pay line's pay code type
    * PaymentDate `string`: The pay line's payment date
    * TaxPeriod `integer`: The pay line's tax period
    * TaxYear `integer`: The pay line's tax year
    * Value `number`: The pay line's value

### PayRun
* PayRun `object`
  * PayRun `object`
    * IsSupplementary `boolean`: The pay run's is supplementary
    * PayFrequency `string` (values: Weekly, Monthly, TwoWeekly, FourWeekly, Yearly): The pay run's pay frequency
    * PaySchedule `object`: The pay run's pay schedule
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * PaymentDate `string`: The pay run's payment date
    * PeriodEnd `string`: The pay run's period end
    * PeriodStart `string`: The pay run's period start
    * ProceedingPayRun `object`: The pay run's proceeding pay run
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * Sequence `integer`: The pay run's sequence
    * TaxPeriod `integer`: The pay run's tax period
    * TaxYear `integer`: The pay run's tax year

### PayRunJobInstruction
* PayRunJobInstruction `object`
  * PayRunJobInstruction `object`
    * Employees `object`: The pay run job instruction's employees
      * Employee `array`
        * items `object`
          * @href `string`: The link's href
          * @rel `string`: The link's target type
          * @title `string`: The link's title
    * EndDate `string`: The pay run job instruction's end date
    * HoldingDate `string`: The pay run job instruction's holding date
    * IsSupplementary `boolean`: The pay run job instruction's is supplementary
    * PaySchedule `object`: The pay run job instruction's pay schedule
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * PaymentDate `string`: The pay run job instruction's payment date
    * StartDate `string`: The pay run job instruction's start date

### PaySchedule
* PaySchedule `object`
  * PaySchedule `object`
    * Name `string`: The pay schedule's name
    * PayFrequency `string` (values: Weekly, Monthly, TwoWeekly, FourWeekly, Yearly): The pay schedule's pay frequency

### Pension
* Pension `object`
  * Pension `object`
    * Code `string`: The pension's code
    * ContributionDeductionDay `integer`: The pension's contribution deduction day
    * EffectiveDate `string`: The pension's effective date
    * EmployeeContributionCash `number`: The pension's employee contribution cash
    * EmployeeContributionPercent `number`: The pension's employee contribution percent
    * EmployerContributionCash `number`: The pension's employer contribution cash
    * EmployerContributionPercent `number`: The pension's employer contribution percent
    * Group `string`: The pension's group
    * LowerThreshold `number`: The pension's lower threshold
    * ProviderEmployerRef `string`: The pension's provider employer ref
    * ProviderName `string`: The pension's provider name
    * Revision `integer`: The pension's revision
    * SchemeName `string`: The pension's scheme name
    * SubGroup `string`: The pension's sub group
    * TaxationMethod `string` (values: NotSet, NetBased, ReliefAtSourceIncluded, ReliefAtSourceExcluded): The pension's taxation method
    * UpperThreshold `number`: The pension's upper threshold

### Query
* Query `object`
  * Query `object`
    * Groups `object`: The query's groups
      * Group `array`
        * items `object`
          * @GroupName `string`: The entity group's group name
          * @ItemName `string`: The entity group's item name
          * @LoopExpression `string`: The entity group's loop expression
          * @Selector `string`: The entity group's selector
          * @UniqueKeyVariable `string`: The entity group's unique key variable
          * Condition `array`: The entity group's conditions
            * items `object`
          * Filter `array`: The entity group's filters
            * items `object`
              * @Property `string`: The filter base's property
              * @Value `string`: The filter base's value
          * Order `array`: The entity group's ordering
            * items `object`
              * @Property `string`: The order by base's property
          * Output `array`: The entity group's outputs
            * items `object`
              * @Output `string` (values: Element, Attribute, Variable, VariableSum, VariableAppend): The output base's output
    * RootNodeName `string`: The query's root node name
    * Variables `object`: The query's variables
      * Variable `array`
        * items `object`
          * @Name `string`: The name value pair's name
          * @Value `string`: The name value pair's value

### ReportDefinition
* ReportDefinition `object`
  * ReportDefinition `object`
    * Readonly `boolean`: The report definition's readonly
    * ReportQuery `object`: The report definition's report query
      * Groups `object`: The query's groups
        * Group `array`
          * items `object`
            * @GroupName `string`: The entity group's group name
            * @ItemName `string`: The entity group's item name
            * @LoopExpression `string`: The entity group's loop expression
            * @Selector `string`: The entity group's selector
            * @UniqueKeyVariable `string`: The entity group's unique key variable
            * Condition `array`: The entity group's conditions
              * items `object`
            * Filter `array`: The entity group's filters
              * items `object`
                * @Property `string`: The filter base's property
                * @Value `string`: The filter base's value
            * Order `array`: The entity group's ordering
              * items `object`
                * @Property `string`: The order by base's property
            * Output `array`: The entity group's outputs
              * items `object`
                * @Output `string` (values: Element, Attribute, Variable, VariableSum, VariableAppend): The output base's output
      * RootNodeName `string`: The query's root node name
      * Variables `object`: The query's variables
        * Variable `array`
          * items `object`
            * @Name `string`: The name value pair's name
            * @Value `string`: The name value pair's value
    * Title `string`: The report definition's title

### ReportLine
* ReportLine `object`
  * ReportLine `object`
    * Description `string`: The report line's description
    * Generated `string`: The report line's generated
    * TaxMonth `integer`: The report line's tax month
    * TaxYear `integer`: The report line's tax year
    * Value `number`: The report line's value

### ReportingInstruction
* ReportingInstruction `object`
  * ReportingInstruction `object`
    * EndDate `string`: The reporting instruction's end date
    * StartDate `string`: The reporting instruction's start date
    * TaxMonth `integer`: The reporting instruction's tax month
    * TaxYear `integer`: The reporting instruction's tax year
    * Value `number`: The reporting instruction's value

### RtiJobInstruction
* RtiJobInstruction `object`
  * RtiJobInstruction `object`
    * EarlierTaxYear `integer`: The rti job instruction's earlier tax year
    * Employer `object`: The rti job instruction's employer
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * FinalSubmissionForYear `boolean`: The rti job instruction's final submission for year
    * Generate `boolean`: The rti job instruction's generate
    * HoldingDate `string`: The rti job instruction's holding date
    * LateReason `string` (values: A, B, C, D, F, G, H): The rti job instruction's late reason
    * NoPaymentForPeriodFrom `string`: The rti job instruction's no payment for period from
    * NoPaymentForPeriodTo `string`: The rti job instruction's no payment for period to
    * PaySchedule `object`: The rti job instruction's pay schedule
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * PaymentDate `string`: The rti job instruction's payment date
    * PeriodOfInactivityFrom `string`: The rti job instruction's period of inactivity from
    * PeriodOfInactivityTo `string`: The rti job instruction's period of inactivity to
    * RtiType `string`: The rti job instruction's rti type
    * SchemeCeased `string`: The rti job instruction's scheme ceased
    * TaxMonth `integer`: The rti job instruction's tax month
    * TaxYear `integer`: The rti job instruction's tax year
    * Timestamp `string`: The rti job instruction's timestamp
    * Transmit `boolean`: The rti job instruction's transmit

### RtiTransactionBase
* RtiTransactionBase `object`
  * RtiTransactionBase `object`
    * EmployerCore `object`: The rti transaction base's employer core
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * RequestData `string`: The rti transaction base's request data
    * ResponseData `string`: The rti transaction base's response data
    * RtiType `string`: The rti transaction base's rti type
    * TaxYear `integer`: The rti transaction base's tax year
    * Timestamp `string`: The rti transaction base's timestamp
    * TransactionStatus `string` (values: New, RequestGenerated, CompletedWithError, CompletedWithSuccess, TimeOut): The rti transaction base's transaction status
    * TransmissionDate `string`: The rti transaction base's transmission date

### Tag
* Tag `object`
  * Tag `object`
    * Created `string`: The tag's created
    * TaggedItem `object`: The tag's tagged item
      * @href `string`: The link's href
      * @rel `string`: The link's target type
      * @title `string`: The link's title
    * Text `string`: The tag's text


