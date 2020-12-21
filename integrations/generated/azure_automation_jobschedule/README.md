# @datafire/azure_automation_jobschedule

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_jobschedule
```
```js
let azure_automation_jobschedule = require('@datafire/azure_automation_jobschedule').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### JobSchedule_ListByAutomationAccount
Retrieve a list of job schedules.


```js
azure_automation_jobschedule.JobSchedule_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobScheduleListResult](#jobschedulelistresult)

### JobSchedule_Delete
Delete the job schedule identified by job schedule name.


```js
azure_automation_jobschedule.JobSchedule_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobScheduleId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobScheduleId **required** `string`: The job schedule name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### JobSchedule_Get
Retrieve the job schedule identified by job schedule name.


```js
azure_automation_jobschedule.JobSchedule_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobScheduleId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobScheduleId **required** `string`: The job schedule name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobSchedule](#jobschedule)

### JobSchedule_Create
Create a job schedule.


```js
azure_automation_jobschedule.JobSchedule_Create({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobScheduleId": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobScheduleId **required** `string`: The job schedule name.
  * parameters **required** [JobScheduleCreateParameters](#jobschedulecreateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobSchedule](#jobschedule)



## Definitions

### JobSchedule
* JobSchedule `object`: Definition of the job schedule.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the variable.
  * properties [JobScheduleProperties](#jobscheduleproperties)
  * type `string`: Resource type

### JobScheduleCreateParameters
* JobScheduleCreateParameters `object`: The parameters supplied to the create job schedule operation.
  * properties **required** [JobScheduleCreateProperties](#jobschedulecreateproperties)

### JobScheduleCreateProperties
* JobScheduleCreateProperties `object`: The parameters supplied to the create job schedule operation.
  * parameters `object`: Gets or sets a list of job properties.
  * runOn `string`: Gets or sets the hybrid worker group that the scheduled job should run on.
  * runbook **required** [RunbookAssociationProperty](#runbookassociationproperty)
  * schedule **required** [ScheduleAssociationProperty](#scheduleassociationproperty)

### JobScheduleListResult
* JobScheduleListResult `object`: The response model for the list job schedule operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of job schedules.
    * items [JobSchedule](#jobschedule)

### JobScheduleProperties
* JobScheduleProperties `object`: Definition of job schedule parameters.
  * jobScheduleId `string`: Gets or sets the id of job schedule.
  * parameters `object`: Gets or sets the parameters of the job schedule.
  * runOn `string`: Gets or sets the hybrid worker group that the scheduled job should run on.
  * runbook [RunbookAssociationProperty](#runbookassociationproperty)
  * schedule [ScheduleAssociationProperty](#scheduleassociationproperty)

### RunbookAssociationProperty
* RunbookAssociationProperty `object`: The runbook property associated with the entity.
  * name `string`: Gets or sets the name of the runbook.

### ScheduleAssociationProperty
* ScheduleAssociationProperty `object`: The schedule property associated with the entity.
  * name `string`: Gets or sets the name of the Schedule.


