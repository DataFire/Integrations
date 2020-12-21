# @datafire/azure_automation_schedule

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_schedule
```
```js
let azure_automation_schedule = require('@datafire/azure_automation_schedule').create({
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

### Schedule_ListByAutomationAccount
Retrieve a list of schedules.


```js
azure_automation_schedule.Schedule_ListByAutomationAccount({
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ScheduleListResult](#schedulelistresult)

### Schedule_Delete
Delete the schedule identified by schedule name.


```js
azure_automation_schedule.Schedule_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "scheduleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * scheduleName **required** `string`: The schedule name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Schedule_Get
Retrieve the schedule identified by schedule name.


```js
azure_automation_schedule.Schedule_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "scheduleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * scheduleName **required** `string`: The schedule name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Schedule](#schedule)

### Schedule_Update
Update the schedule identified by schedule name.


```js
azure_automation_schedule.Schedule_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "scheduleName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * scheduleName **required** `string`: The schedule name.
  * parameters **required** [ScheduleUpdateParameters](#scheduleupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Schedule](#schedule)

### Schedule_CreateOrUpdate
Create a schedule.


```js
azure_automation_schedule.Schedule_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "scheduleName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * scheduleName **required** `string`: The schedule name.
  * parameters **required** [ScheduleCreateOrUpdateParameters](#schedulecreateorupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Schedule](#schedule)



## Definitions

### AdvancedSchedule
* AdvancedSchedule `object`: The properties of the create Advanced Schedule.
  * monthDays `array`: Days of the month that the job should execute on. Must be between 1 and 31.
    * items `integer`
  * monthlyOccurrences `array`: Occurrences of days within a month.
    * items [AdvancedScheduleMonthlyOccurrence](#advancedschedulemonthlyoccurrence)
  * weekDays `array`: Days of the week that the job should execute on.
    * items `string`

### AdvancedScheduleMonthlyOccurrence
* AdvancedScheduleMonthlyOccurrence `object`: The properties of the create advanced schedule monthly occurrence.
  * day `string` (values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday): Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
  * occurrence `integer`: Occurrence of the week within the month. Must be between 1 and 5

### Schedule
* Schedule `object`: Definition of the schedule.
  * properties [ScheduleProperties](#scheduleproperties)
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### ScheduleCreateOrUpdateParameters
* ScheduleCreateOrUpdateParameters `object`: The parameters supplied to the create or update schedule operation.
  * name **required** `string`: Gets or sets the name of the Schedule.
  * properties **required** [ScheduleCreateOrUpdateProperties](#schedulecreateorupdateproperties)

### ScheduleCreateOrUpdateProperties
* ScheduleCreateOrUpdateProperties `object`: The parameters supplied to the create or update schedule operation.
  * advancedSchedule [AdvancedSchedule](#advancedschedule)
  * description `string`: Gets or sets the description of the schedule.
  * expiryTime `string`: Gets or sets the end time of the schedule.
  * frequency **required** [scheduleFrequency](#schedulefrequency)
  * startTime **required** `string`: Gets or sets the start time of the schedule.
  * timeZone `string`: Gets or sets the time zone of the schedule.

### ScheduleListResult
* ScheduleListResult `object`: The response model for the list schedule operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of schedules.
    * items [Schedule](#schedule)

### ScheduleProperties
* ScheduleProperties `object`: Definition of schedule parameters.
  * advancedSchedule [AdvancedSchedule](#advancedschedule)
  * creationTime `string`: Gets or sets the creation time.
  * description `string`: Gets or sets the description.
  * expiryTime `string`: Gets or sets the end time of the schedule.
  * expiryTimeOffsetMinutes `number`: Gets or sets the expiry time's offset in minutes.
  * frequency [scheduleFrequency](#schedulefrequency)
  * isEnabled `boolean`: Gets or sets a value indicating whether this schedule is enabled.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * nextRun `string`: Gets or sets the next run time of the schedule.
  * nextRunOffsetMinutes `number`: Gets or sets the next run time's offset in minutes.
  * startTime `string`: Gets or sets the start time of the schedule.
  * startTimeOffsetMinutes `number`: Gets the start time's offset in minutes.
  * timeZone `string`: Gets or sets the time zone of the schedule.

### ScheduleUpdateParameters
* ScheduleUpdateParameters `object`: The parameters supplied to the update schedule operation.
  * name `string`: Gets or sets the name of the Schedule.
  * properties [ScheduleUpdateProperties](#scheduleupdateproperties)

### ScheduleUpdateProperties
* ScheduleUpdateProperties `object`: The parameters supplied to the update schedule operation.
  * description `string`: Gets or sets the description of the schedule.
  * isEnabled `boolean`: Gets or sets a value indicating whether this schedule is enabled.

### scheduleFrequency
* scheduleFrequency `string` (values: OneTime, Day, Hour, Week, Month, Minute): Gets or sets the frequency of the schedule.


