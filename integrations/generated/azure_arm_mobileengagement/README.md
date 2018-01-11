# @datafire/azure_arm_mobileengagement

Client library for Engagement.ManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_mobileengagement
```
```js
let azure_arm_mobileengagement = require('@datafire/azure_arm_mobileengagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_mobileengagement.AppCollections_List({}).then(data => {
  console.log(data);
})
```

## Description

Microsoft Azure Mobile Engagement REST APIs.

## Actions

### AppCollections_List
Lists app collections in a subscription.


```js
azure_arm_mobileengagement.AppCollections_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [AppCollectionListResult](#appcollectionlistresult)

### AppCollections_CheckNameAvailability
Checks availability of an app collection name in the Engagement domain.


```js
azure_arm_mobileengagement.AppCollections_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [AppCollectionNameAvailability](#appcollectionnameavailability)

#### Output
* output [AppCollectionNameAvailability](#appcollectionnameavailability)

### SupportedPlatforms_List
Lists supported platforms for Engagement applications.


```js
azure_arm_mobileengagement.SupportedPlatforms_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SupportedPlatformsListResult](#supportedplatformslistresult)

### Apps_List
Lists apps in an appCollection.


```js
azure_arm_mobileengagement.Apps_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "appCollection": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.

#### Output
* output [AppListResult](#applistresult)

### Campaigns_List
Get the list of campaigns.


```js
azure_arm_mobileengagement.Campaigns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "kind": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * $skip `integer`: Control paging of campaigns, start results at the given offset, defaults to 0 (1st page of data).
  * $top `integer`: Control paging of campaigns, number of campaigns to return with each call. It returns all campaigns by default. When specifying $top parameter, the response contains a `nextLink` property describing the path to get the next page if there are more results.
  * $filter `string`: Filter can be used to restrict the results to campaigns matching a specific state. The syntax is `$filter=state eq 'draft'`. Valid state values are: draft, scheduled, in-progress, and finished. Only the eq operator and the state property are supported.
  * $orderby `string`: Sort results by an expression which looks like `$orderby=id asc` (this example is actually the default behavior). The syntax is orderby={property} {direction} or just orderby={property}. The available sorting properties are id, name, state, activatedDate, and finishedDate. The available directions are asc (for ascending order) and desc (for descending order). When not specified the asc direction is used. Only one property at a time can be used for sorting.
  * $search `string`: Restrict results to campaigns matching the optional `search` expression. This currently performs the search based on the name on the campaign only, case insensitive. If the campaign contains the value of the `search` parameter anywhere in the name, it matches.

#### Output
* output [CampaignsListResult](#campaignslistresult)

### Campaigns_Create
Create a push campaign (announcement, poll, data push or native push).


```js
azure_arm_mobileengagement.Campaigns_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "kind": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [Campaign](#campaign)

#### Output
* output [CampaignStateResult](#campaignstateresult)

### Campaigns_TestNew
Test a new campaign on a set of devices.


```js
azure_arm_mobileengagement.Campaigns_TestNew({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "kind": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * parameters **required** [CampaignTestNewParameters](#campaigntestnewparameters)

#### Output
* output [CampaignState](#campaignstate)

### Campaigns_Delete
Delete a campaign previously created by a call to Create campaign.


```js
azure_arm_mobileengagement.Campaigns_Delete({
  "kind": "",
  "id": 0,
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Campaigns_Get
The Get campaign operation retrieves information about a previously created campaign.


```js
azure_arm_mobileengagement.Campaigns_Get({
  "kind": "",
  "id": 0,
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CampaignResult](#campaignresult)

### Campaigns_Update
Update an existing push campaign (announcement, poll, data push or native push).


```js
azure_arm_mobileengagement.Campaigns_Update({
  "kind": "",
  "id": 0,
  "parameters": null,
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * parameters **required** [Campaign](#campaign)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CampaignStateResult](#campaignstateresult)

### Campaigns_Activate
Activate a campaign previously created by a call to Create campaign.


```js
azure_arm_mobileengagement.Campaigns_Activate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "kind": "",
  "id": 0,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CampaignStateResult](#campaignstateresult)

### Campaigns_Finish
Finish a push campaign previously activated by a call to Activate campaign.


```js
azure_arm_mobileengagement.Campaigns_Finish({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "kind": "",
  "id": 0,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CampaignStateResult](#campaignstateresult)

### Campaigns_Push
Push a previously saved campaign (created with Create campaign) to a set of devices.


```js
azure_arm_mobileengagement.Campaigns_Push({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "kind": "",
  "id": 0,
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * parameters **required** [CampaignPushParameters](#campaignpushparameters)

#### Output
* output [CampaignPushResult](#campaignpushresult)

### Campaigns_GetStatistics
Get all the campaign statistics.


```js
azure_arm_mobileengagement.Campaigns_GetStatistics({
  "kind": "",
  "id": 0,
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CampaignStatisticsResult](#campaignstatisticsresult)

### Campaigns_Suspend
Suspend a push campaign previously activated by a call to Activate campaign.


```js
azure_arm_mobileengagement.Campaigns_Suspend({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "kind": "",
  "id": 0,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CampaignStateResult](#campaignstateresult)

### Campaigns_TestSaved
Test an existing campaign (created with Create campaign) on a set of devices.


```js
azure_arm_mobileengagement.Campaigns_TestSaved({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "kind": "",
  "id": 0,
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * id **required** `integer`: Campaign identifier.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [CampaignTestSavedParameters](#campaigntestsavedparameters)

#### Output
* output [CampaignStateResult](#campaignstateresult)

### Campaigns_GetByName
The Get campaign operation retrieves information about a previously created campaign.


```js
azure_arm_mobileengagement.Campaigns_GetByName({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "kind": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * kind **required** `string` (values: announcements, polls, dataPushes, nativePushes): Campaign kind.
  * name **required** `string`: Campaign name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CampaignResult](#campaignresult)

### Devices_List
Query the information associated to the devices running an application.


```js
azure_arm_mobileengagement.Devices_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * $top `integer`: Number of devices to return with each call. Defaults to 100 and cannot return more. Passing a greater value is ignored. The response contains a `nextLink` property describing the URI path to get the next page of results if not all results could be returned at once.
  * $select `string`: By default all `meta` and `appInfo` properties are returned, this property is used to restrict the output to the desired properties. It also excludes all devices from the output that have none of the selected properties. In other terms, only devices having at least one of the selected property being set is part of the results. Examples: - `$select=appInfo` : select all devices having at least 1 appInfo, return them all and don’t return any meta property. - `$select=meta` : return only meta properties in the output. - `$select=appInfo,meta/firstSeen,meta/lastSeen` : return all `appInfo`, plus meta object containing only firstSeen and lastSeen properties. The format is thus a comma separated list of properties to select. Use `appInfo` to select all appInfo properties, `meta` to select all meta properties. Use `appInfo/{key}` and `meta/{key}` to select specific appInfo and meta properties.
  * $filter `string`: Filter can be used to reduce the number of results. Filter is a boolean expression that can look like the following examples: * `$filter=deviceId gt 'abcdef0123456789abcdef0123456789'` * `$filter=lastModified le 1447284263690L` * `$filter=(deviceId ge 'abcdef0123456789abcdef0123456789') and (deviceId lt 'bacdef0123456789abcdef0123456789') and (lastModified gt 1447284263690L)` The first example is used automatically for paging when returning the `nextLink` property. The filter expression is a combination of checks on some properties that can be compared to their value. The available operators are: * `gt`  : greater than * `ge`  : greater than or equals * `lt`  : less than * `le`  : less than or equals * `and` : to add multiple checks (all checks must pass), optional parentheses can be used. The properties that can be used in the expression are the following: * `deviceId {operator} '{deviceIdValue}'` : a lexicographical comparison is made on the deviceId value, use single quotes for the value. * `lastModified {operator} {number}L` : returns only meta properties or appInfo properties whose last value modification timestamp compared to the specified value is matching (value is milliseconds since January 1st, 1970 UTC). Please note the `L` character after the number of milliseconds, its required when the number of milliseconds exceeds `2^31 - 1` (which is always the case for recent timestamps). Using `lastModified` excludes all devices from the output that have no property matching the timestamp criteria, like `$select`. Please note that the internal value of `lastModified` timestamp for a given property is never part of the results.

#### Output
* output [DevicesQueryResult](#devicesqueryresult)

### ExportTasks_List
Get the list of export tasks.


```js
azure_arm_mobileengagement.ExportTasks_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * $skip `integer`: Control paging of export tasks, start results at the given offset, defaults to 0 (1st page of data).
  * $top `integer`: Control paging of export tasks, number of export tasks to return with each call. By default, it returns all export tasks with a default paging of 20.
  * $orderby `string`: Sort results by an expression which looks like `$orderby=taskId asc` (default when not specified).

#### Output
* output [exportTaskListResult](#exporttasklistresult)

### ExportTasks_CreateActivitiesTask
Creates a task to export activities.


```js
azure_arm_mobileengagement.ExportTasks_CreateActivitiesTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [dateRangeExportTaskParameter](#daterangeexporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateCrashesTask
Creates a task to export crashes.


```js
azure_arm_mobileengagement.ExportTasks_CreateCrashesTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [dateRangeExportTaskParameter](#daterangeexporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateErrorsTask
Creates a task to export errors.


```js
azure_arm_mobileengagement.ExportTasks_CreateErrorsTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [dateRangeExportTaskParameter](#daterangeexporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateEventsTask
Creates a task to export events.


```js
azure_arm_mobileengagement.ExportTasks_CreateEventsTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [dateRangeExportTaskParameter](#daterangeexporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateFeedbackTaskByCampaign
Creates a task to export push campaign data for a set of campaigns.


```js
azure_arm_mobileengagement.ExportTasks_CreateFeedbackTaskByCampaign({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [feedbackByCampaignParameter](#feedbackbycampaignparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateFeedbackTaskByDateRange
Creates a task to export push campaign data for a date range.


```js
azure_arm_mobileengagement.ExportTasks_CreateFeedbackTaskByDateRange({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [feedbackByDateRangeParameter](#feedbackbydaterangeparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateJobsTask
Creates a task to export jobs.


```js
azure_arm_mobileengagement.ExportTasks_CreateJobsTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [dateRangeExportTaskParameter](#daterangeexporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateSessionsTask
Creates a task to export sessions.


```js
azure_arm_mobileengagement.ExportTasks_CreateSessionsTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [dateRangeExportTaskParameter](#daterangeexporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateTagsTask
Creates a task to export tags.


```js
azure_arm_mobileengagement.ExportTasks_CreateTagsTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [exportTaskParameter](#exporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_CreateTokensTask
Creates a task to export tags.


```js
azure_arm_mobileengagement.ExportTasks_CreateTokensTask({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [exportTaskParameter](#exporttaskparameter)

#### Output
* output [exportTaskResult](#exporttaskresult)

### ExportTasks_Get
Retrieves information about a previously created export task.


```js
azure_arm_mobileengagement.ExportTasks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * id **required** `string`: Export task identifier.

#### Output
* output [exportTaskResult](#exporttaskresult)

### ImportTasks_List
Get the list of import jobs.


```js
azure_arm_mobileengagement.ImportTasks_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * $skip `integer`: Control paging of import jobs, start results at the given offset, defaults to 0 (1st page of data).
  * $top `integer`: Control paging of import jobs, number of import jobs to return with each call. By default, it returns all import jobs with a default paging of 20.
  * $orderby `string`: Sort results by an expression which looks like `$orderby=jobId asc` (default when not specified).

#### Output
* output [importTaskListResult](#importtasklistresult)

### ImportTasks_Create
Creates a job to import the specified data to a storageUrl.


```js
azure_arm_mobileengagement.ImportTasks_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [importTask](#importtask)

#### Output
* output [importTaskResult](#importtaskresult)

### ImportTasks_Get
The Get import job operation retrieves information about a previously created import job.


```js
azure_arm_mobileengagement.ImportTasks_Get({
  "id": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Import job identifier.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [importTaskResult](#importtaskresult)

### Devices_TagByDeviceId
Update the tags registered for a set of devices running an application. Updates are performed asynchronously, meaning that a few seconds are needed before the modifications appear in the results of the Get device command.



```js
azure_arm_mobileengagement.Devices_TagByDeviceId({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [DeviceTagsParameters](#devicetagsparameters)

#### Output
* output [DeviceTagsResult](#devicetagsresult)

### Devices_GetByDeviceId
Get the information associated to a device running an application.


```js
azure_arm_mobileengagement.Devices_GetByDeviceId({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * deviceId **required** `string`: Device identifier.

#### Output
* output [Device](#device)

### Devices_TagByUserId
Update the tags registered for a set of users running an application. Updates are performed asynchronously, meaning that a few seconds are needed before the modifications appear in the results of the Get device command.



```js
azure_arm_mobileengagement.Devices_TagByUserId({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [DeviceTagsParameters](#devicetagsparameters)

#### Output
* output [DeviceTagsResult](#devicetagsresult)

### Devices_GetByUserId
Get the information associated to a device running an application using the user identifier.


```js
azure_arm_mobileengagement.Devices_GetByUserId({
  "subscriptionId": "",
  "resourceGroupName": "",
  "appCollection": "",
  "appName": "",
  "api-version": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * appCollection **required** `string`: Application collection.
  * appName **required** `string`: Application resource name.
  * api-version **required** `string`: Client Api Version.
  * userId **required** `string`: User identifier.

#### Output
* output [Device](#device)



## Definitions

### AnnouncementFeedbackCriterion


### ApiError
* ApiError `object`
  * error `object`
    * code `string`
    * message `string`

### App
* App `object`: The Mobile Engagement App resource.
  * properties [AppProperties](#appproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### AppCollection
* AppCollection `object`: The AppCollection resource.
  * properties [AppCollectionProperties](#appcollectionproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### AppCollectionListResult
* AppCollectionListResult `object`: The list AppCollections operation response.
  * nextLink `string`: When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages.
  * value `array`: The list of AppCollections and their properties.
    * items [AppCollection](#appcollection)

### AppCollectionNameAvailability
* AppCollectionNameAvailability `object`
  * available `boolean`: Available.
  * name `string`: Name.
  * unavailabilityReason `string`: UnavailabilityReason.

### AppCollectionProperties
* AppCollectionProperties `object`
  * provisioningState `string` (values: Creating, Succeeded): Mobile Engagement AppCollection Properties.

### AppInfoFilter


### AppListResult
* AppListResult `object`: The list Apps operation response.
  * nextLink `string`: When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages.
  * value `array`: The list of Apps and their properties.
    * items [App](#app)

### AppProperties
* AppProperties `object`
  * appState `string`: The state of the application.
  * backendId `string`: The application unique identifier.
  * platform `string`: The platform of the app.

### ApplicationVersionCriterion


### BooleanTagCriterion


### Campaign
* Campaign `object`
  * audience `object`: Specify which users will be targeted by this campaign. By default, all users will be targeted. If you set `pushMode` property to `manual`, the only thing you can specify in the audience is the push quota filter. An audience is a boolean expression made of criteria (variables) operators (`not`, `and` or `or`) and parenthesis. Additionally, a set of filters can be added to an audience. 65535 bytes max as per JSON encoding.
    * criteria `object`: Criteria by name.
    * expression `string`: Boolean expression made of criteria (variables) operators (`not`, `and` or `or`) and parenthesis. Criterion names in the audience expression must start with a capital letter and can only contain alphanumeric (A-Z,a-z,0-9) and underscore (_) characters.
    * filters `array`: Global filters applied to all devices.
      * items [Filter](#filter)
  * category `string`: Category of the campaign. Categories can be used on the application side to customize campaigns.
  * deliveryActivities `array`: Announcements/polls only. Array containing the list of activities in which the campaign can be delivered. deliveryTime must be set to session. If the platform is iOS, this option can also be set if deliveryTime is set to any. In that case, if the campaign is received when the application is launched, it will be delivered only in the specified list of activities.
    * items `string`
  * deliveryTime `string` (values: any, background, session): Announcements/polls only. Defines when the campaign should be delivered. Valid values are: * `any`: Campaign will be delivered as soon as possible. * `background`: iOS only. Campaign will be only delivered when the application is in background (out of app). * `session`: Campaign will be delivered when the application is running.
  * endTime `string`: The date at which the campaign should be finished. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. Example: `2011-11-21 15:23Z`
  * localization `object`: Push campaigns can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable properties.
  * name `string`: Unique name of the campaign.
  * notificationBadge `boolean`: A flag indicating whether or not you want the native Apple Push notification to update the badge icon to the number of unread messages. The `deliveryTime` property must be set to `any` or `background`.
  * notificationCloseable `boolean`: A flag indicating whether or not you want the notification to be closeable.
  * notificationIcon `boolean`: A flag indicating whether or not you want to display the resource icon in notification content.
  * notificationSound `boolean`: * `Android`: A flag indicating whether or not you want the system notification to make a sound. The `notificationType` property must be set to `system`. * `iOS`: A flag indicating whether or not you want the native Apple Push notification to make a sound. The `deliveryTime` property must be set to `any` or `background`. This will play the 'default' sound. If you want to play a custom sound, see the `notificationOptions` property. * `Windows`: A flag indicating whether or not you want the native Windows Notification Service to make a sound. The `deliveryTime` property must be set to `any`.
  * notificationType `string` (values: system, popup): Android only. Defines how the notification should be displayed. Valid values are: * `system`: Display the notification using a standard system notification. * `popup`: Display the notification using a in-app banner notification.
  * notificationVibrate `boolean`: Android only. A flag indicating whether or not you want the system notification to make a vibration. The notificationType property must be set to system.
  * pushMode `string` (values: real-time, one-shot, manual): Announcements/polls only. Defines how the campaign is pushed. Valid values are: * `real-time`: Never ending campaign, the campaign will be delivered  to your existing users and also to your new users. * `one-shot`: In this mode, the campaign will be delivered only to your existing users (campaign will stop after that). * `manual`: In this mode, the campaign will not be pushed automatically to devices. You will have to use the Push campaign command to push the campaign to your end-users. Campaigns can be pushed multiple times to the same device.
  * questions `array`: Poll questions.
    * items [PollQuestion](#pollquestion)
  * startTime `string`: The date at which the campaign should be started. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. * If you set pushMode property to manual, this attribute will be ignored. * If you set pushMode property to one-shot, then the timezone attribute must be specified. Example: `2011-11-21 15:23Z`
  * timezone `string`: The id of the time zone to use for the startTime and endTime dates. If not provided, the two date attributes will be expressed using the device timezone. Example: America/Los_Angeles
  * type `string` (values: text/plain, text/html, only_notif, text/base64): Applicable only to announcements and data pushes. Type of announcement. Valid values are: * `text/plain`: Text-only announcement: `body` property should only contain plain text. * `text/html`: HTML announcement: `body` attribute can contain HTML code. * `only_notif`: Notification-only announcement. With this kind of announcements, the `body`, `title`, `actionButtonText` and `exitButtonText` are ignored. Type of data push. Valid values are: * `text/plain`: Text only data push: `body` property must be plain text. * `text/base64`: Base 64 data push: `body` property must be encoded in base 64.
  * actionButtonText `string`: Text of the action button for text/web announcements and polls (answer button).
  * actionUrl `string`: URL to launch when the announcement is actioned.
  * body `string`: Body of the text/web announcement, poll or data push. This field supports appInfo markers.
  * exitButtonText `string`: Text of the exit button for text/web announcements and polls.
  * notificationImage `string`: Optional image encoded in base 64. Usually included in the right part of in app notifications (or as a banner if there is neither text nor content icon). For Android system notifications, the image is used as the large icon (displayed only on Android 3+).
  * notificationMessage `string`: Message of the notification. This field supports appInfo markers.
  * notificationOptions [NotificationOptions](#notificationoptions)
  * notificationTitle `string`: Title of the notification. This field supports appInfo markers.
  * payload `object`: Native push payload.
  * title `string`: Title of the announcement or poll. This field supports appInfo markers.

### CampaignListResult
* CampaignListResult `object`
  * activatedDate `string`: The date at which the campaign was activated (Not present if not yet activated). The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * endTime `string`: The date at which the campaign should be finished if specified. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard. Applicable only to announcements and polls.
  * finishedDate `string`: The date at which the campaign was finished (Not present if not yet finished). The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * name `string`: Name of the campaign.
  * startTime `string`: The date at which the campaign should be started if specified. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard. Applicable only to announcements and polls.
  * timezone `string`: The id of the time zone to use for the `startTime` and `endTime` dates. If not provided, the two date attributes are referencing to the device timezone. Applicable only to announcements and polls.
  * id **required** `integer`: Campaign identifier.
  * state `string` (values: draft, scheduled, in-progress, finished, queued): State of the campaign, or 'queued' when testing a campaign.

### CampaignLocalization
* CampaignLocalization `object`
  * actionButtonText `string`: Text of the action button for text/web announcements and polls (answer button).
  * actionUrl `string`: URL to launch when the announcement is actioned.
  * body `string`: Body of the text/web announcement, poll or data push. This field supports appInfo markers.
  * exitButtonText `string`: Text of the exit button for text/web announcements and polls.
  * notificationImage `string`: Optional image encoded in base 64. Usually included in the right part of in app notifications (or as a banner if there is neither text nor content icon). For Android system notifications, the image is used as the large icon (displayed only on Android 3+).
  * notificationMessage `string`: Message of the notification. This field supports appInfo markers.
  * notificationOptions [NotificationOptions](#notificationoptions)
  * notificationTitle `string`: Title of the notification. This field supports appInfo markers.
  * payload `object`: Native push payload.
  * title `string`: Title of the announcement or poll. This field supports appInfo markers.

### CampaignPushParameters
* CampaignPushParameters `object`
  * data [Campaign](#campaign)
  * deviceIds **required** `array`: Device identifiers to push as a JSON array of strings. Note that if you want to push the same campaign several times to the same device, you need to make several API calls.
    * items `string`

### CampaignPushResult
* CampaignPushResult `object`
  * invalidDeviceIds `array`: A JSON array containing all identifiers that have been rejected. A device can be rejected for the following reasons: * The device hasn’t reported any session yet. * The device is over quota (if a push quota filter is applied on your campaign). Please note that if the request parameters are valid but all the specified devices are rejected, the status code is still `200` with a response including all the devices as being rejected.
    * items `string`

### CampaignResult
* CampaignResult `object`
  * activatedDate `string`: The date at which the campaign was activated (Not present if not yet activated). The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
  * finishedDate `string`: The date at which the campaign was finished (Not present if not yet finished). The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
  * id `integer`: Campaign identifier.
  * state `string` (values: draft, scheduled, in-progress, finished, queued): State of the campaign, or 'queued' when testing a campaign.
  * audience `object`: Specify which users will be targeted by this campaign. By default, all users will be targeted. If you set `pushMode` property to `manual`, the only thing you can specify in the audience is the push quota filter. An audience is a boolean expression made of criteria (variables) operators (`not`, `and` or `or`) and parenthesis. Additionally, a set of filters can be added to an audience. 65535 bytes max as per JSON encoding.
    * criteria `object`: Criteria by name.
    * expression `string`: Boolean expression made of criteria (variables) operators (`not`, `and` or `or`) and parenthesis. Criterion names in the audience expression must start with a capital letter and can only contain alphanumeric (A-Z,a-z,0-9) and underscore (_) characters.
    * filters `array`: Global filters applied to all devices.
      * items [Filter](#filter)
  * category `string`: Category of the campaign. Categories can be used on the application side to customize campaigns.
  * deliveryActivities `array`: Announcements/polls only. Array containing the list of activities in which the campaign can be delivered. deliveryTime must be set to session. If the platform is iOS, this option can also be set if deliveryTime is set to any. In that case, if the campaign is received when the application is launched, it will be delivered only in the specified list of activities.
    * items `string`
  * deliveryTime `string` (values: any, background, session): Announcements/polls only. Defines when the campaign should be delivered. Valid values are: * `any`: Campaign will be delivered as soon as possible. * `background`: iOS only. Campaign will be only delivered when the application is in background (out of app). * `session`: Campaign will be delivered when the application is running.
  * endTime `string`: The date at which the campaign should be finished. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. Example: `2011-11-21 15:23Z`
  * localization `object`: Push campaigns can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable properties.
  * name `string`: Unique name of the campaign.
  * notificationBadge `boolean`: A flag indicating whether or not you want the native Apple Push notification to update the badge icon to the number of unread messages. The `deliveryTime` property must be set to `any` or `background`.
  * notificationCloseable `boolean`: A flag indicating whether or not you want the notification to be closeable.
  * notificationIcon `boolean`: A flag indicating whether or not you want to display the resource icon in notification content.
  * notificationSound `boolean`: * `Android`: A flag indicating whether or not you want the system notification to make a sound. The `notificationType` property must be set to `system`. * `iOS`: A flag indicating whether or not you want the native Apple Push notification to make a sound. The `deliveryTime` property must be set to `any` or `background`. This will play the 'default' sound. If you want to play a custom sound, see the `notificationOptions` property. * `Windows`: A flag indicating whether or not you want the native Windows Notification Service to make a sound. The `deliveryTime` property must be set to `any`.
  * notificationType `string` (values: system, popup): Android only. Defines how the notification should be displayed. Valid values are: * `system`: Display the notification using a standard system notification. * `popup`: Display the notification using a in-app banner notification.
  * notificationVibrate `boolean`: Android only. A flag indicating whether or not you want the system notification to make a vibration. The notificationType property must be set to system.
  * pushMode `string` (values: real-time, one-shot, manual): Announcements/polls only. Defines how the campaign is pushed. Valid values are: * `real-time`: Never ending campaign, the campaign will be delivered  to your existing users and also to your new users. * `one-shot`: In this mode, the campaign will be delivered only to your existing users (campaign will stop after that). * `manual`: In this mode, the campaign will not be pushed automatically to devices. You will have to use the Push campaign command to push the campaign to your end-users. Campaigns can be pushed multiple times to the same device.
  * questions `array`: Poll questions.
    * items [PollQuestion](#pollquestion)
  * startTime `string`: The date at which the campaign should be started. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. * If you set pushMode property to manual, this attribute will be ignored. * If you set pushMode property to one-shot, then the timezone attribute must be specified. Example: `2011-11-21 15:23Z`
  * timezone `string`: The id of the time zone to use for the startTime and endTime dates. If not provided, the two date attributes will be expressed using the device timezone. Example: America/Los_Angeles
  * type `string` (values: text/plain, text/html, only_notif, text/base64): Applicable only to announcements and data pushes. Type of announcement. Valid values are: * `text/plain`: Text-only announcement: `body` property should only contain plain text. * `text/html`: HTML announcement: `body` attribute can contain HTML code. * `only_notif`: Notification-only announcement. With this kind of announcements, the `body`, `title`, `actionButtonText` and `exitButtonText` are ignored. Type of data push. Valid values are: * `text/plain`: Text only data push: `body` property must be plain text. * `text/base64`: Base 64 data push: `body` property must be encoded in base 64.
  * actionButtonText `string`: Text of the action button for text/web announcements and polls (answer button).
  * actionUrl `string`: URL to launch when the announcement is actioned.
  * body `string`: Body of the text/web announcement, poll or data push. This field supports appInfo markers.
  * exitButtonText `string`: Text of the exit button for text/web announcements and polls.
  * notificationImage `string`: Optional image encoded in base 64. Usually included in the right part of in app notifications (or as a banner if there is neither text nor content icon). For Android system notifications, the image is used as the large icon (displayed only on Android 3+).
  * notificationMessage `string`: Message of the notification. This field supports appInfo markers.
  * notificationOptions [NotificationOptions](#notificationoptions)
  * notificationTitle `string`: Title of the notification. This field supports appInfo markers.
  * payload `object`: Native push payload.
  * title `string`: Title of the announcement or poll. This field supports appInfo markers.

### CampaignState
* CampaignState `object`
  * state `string` (values: draft, scheduled, in-progress, finished, queued): State of the campaign, or 'queued' when testing a campaign.

### CampaignStateResult
* CampaignStateResult `object`
  * id **required** `integer`: Campaign identifier.
  * state `string` (values: draft, scheduled, in-progress, finished, queued): State of the campaign, or 'queued' when testing a campaign.

### CampaignStatisticsResult
* CampaignStatisticsResult `object`
  * answers `object`: Poll specific statistics.
  * content-actioned `integer`: Number of times the campaign’s content view was actioned (Not present in case of a notification-only announcement or a native-push).
  * content-displayed `integer`: Number of times the campaign’s content view was displayed (Not present in case of a notification-only announcement, a data-push or a native-push).
  * content-exited `integer`: Number of times the campaign’s content view was exited (Not present in case of a notification-only announcement or a native-push).
  * delivered `integer`: Number of times the campaign was received by the application (Not present in case of a native-push).
  * dropped `integer`: Number of times the campaign was dropped by the application. It can happen if the SDK failed to parse the campaign payload or if an error occurred while trying to notify the end-user (Not present in case of a native-push).
  * in-app-notification-actioned `integer`: Number of times the in-app notification was actioned (Not present in case of a data-push or a native-push).
  * in-app-notification-displayed `integer`: Number of times the in-app notification was displayed (Not present in case of a data-push or a native-push).
  * in-app-notification-exited `integer`: Number of times the in-app notification was exited (Not present in case of a data-push or a native-push).
  * pushed `integer`: Number of pushes performed.
  * pushed-native `integer`: Total number of native pushes. Information only available on Android, iOS, Windows Phone and Windows applications.
  * pushed-native-adm `integer`: Number of ADM pushes (available only on Android applications).
  * pushed-native-google `integer`: Number of C2DM/GCM pushes (available only on Android applications).
  * queued `integer`: Number of times the campaign was registered to be pushed.
  * system-notification-actioned `integer`: Number of times the system notification (On Android it corresponds to a status bar notification. On iOS, it is the Apple Push notification) was actioned.
  * system-notification-displayed `integer`: Number of times the system notification was displayed (Not present in case of a data-push or a native-push). On Android it corresponds to a status bar notification.
  * system-notification-exited `integer`: Number of times the system notification was exited (Not present in case of a data-push or a native-push).

### CampaignTestNewParameters
* CampaignTestNewParameters `object`
  * data **required** [Campaign](#campaign)
  * deviceId **required** `string`: Device identifier (as returned by the SDK).
  * lang `string`: The language to test expressed using ISO 639-1 code. The default language of the campaign will be used if the parameter is not provided.

### CampaignTestSavedParameters
* CampaignTestSavedParameters `object`
  * deviceId **required** `string`: Device identifier (as returned by the SDK).
  * lang `string`: The language to test expressed using ISO 639-1 code. The default language of the campaign will be used if the parameter is not provided.

### CampaignType
* CampaignType `string` (values: Announcement, DataPush, NativePush, Poll): Campaign type.

### CampaignsListResult
* CampaignsListResult `object`: The campaigns list result.
  * nextLink `string`: When using `top` parameter and if partial results are returned, this property describes a URI path to get the next results. This property is not set when reaching the last page.
  * value `array`: The list of campaigns.
    * items [CampaignListResult](#campaignlistresult)

### CarrierCountryCriterion


### CarrierNameCriterion


### Criterion
* Criterion `object`
  * type **required** `string`

### DatapushFeedbackCriterion


### DateTagCriterion


### Device
* Device `object`
  * appInfo `object`: Also known as tags, a key-value set as a JSON object.
  * deviceId **required** `string`: The device result.
  * info [DeviceInfo](#deviceinfo)
  * location [DeviceLocation](#devicelocation)
  * meta [DeviceMeta](#devicemeta)

### DeviceInfo
* DeviceInfo `object`
  * androidAPILevel `integer`: Android API level.
  * applicationVersionCode `integer`: Application version code.
  * applicationVersionName `string`: Application version name.
  * carrierCountry `string`: Carrier country.
  * carrierName `string`: Carrier name.
  * firmwareName `string`: Firmware name.
  * firmwareVersion `string`: Firmware version.
  * locale `string`: Locale code.
  * networkSubtype `string`: Network sub-type.
  * networkType `string`: Network type.
  * phoneManufacturer `string`: Phone manufacturer
  * phoneModel `string`: Phone model.
  * serviceVersion `string`: SDK version.
  * timeZoneOffset `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.

### DeviceLocation
* DeviceLocation `object`
  * countrycode `string`: The ISO 3166 two-letter country code.
  * locality `string`: A locality within the administrative region, such as a town or city.
  * region `string`: An administrative region of the nation, such as a state or province.

### DeviceManufacturerCriterion


### DeviceMeta
* DeviceMeta `object`
  * firstSeen `integer`: First time the device used the application in milliseconds since January 1st, 1970 UTC.
  * lastInfo `integer`: Timestamp corresponding to the info object in milliseconds since January 1st, 1970 UTC.
  * lastLocation `integer`: Timestamp corresponding to the location object in milliseconds since January 1st, 1970 UTC.
  * lastSeen `integer`: Last time the device used the application in milliseconds since January 1st, 1970 UTC.
  * nativePushEnabled `boolean`: Boolean indicating if native push notifications (like Android’s GCM or Apple’s APNS) are enabled for the application. This boolean is set to true when the application registers successfully to the native push service, and set to false when the native push service reports to Mobile Engagement that the application can no longer be pushed (which means that it has been uninstalled). This report is performed a few hours after Mobile Engagement has tried to perform a native push to a device on which the application has been uninstalled.

### DeviceModelCriterion


### DeviceQueryResult
* DeviceQueryResult `object`
  * appInfo `object`: Also known as tags, a key-value set as a JSON object.
  * deviceId **required** `string`: The device result.
  * meta [DeviceMeta](#devicemeta)

### DeviceTagsParameters
* DeviceTagsParameters `object`
  * deleteOnNull `boolean`: If this parameter is `true`, tags with a null value will be deleted.

### DeviceTagsResult
* DeviceTagsResult `object`
  * invalidIds **required** `array`: A JSON array containing all identifiers that have been rejected. Please note that if the request parameters are valid but all the specified devices are rejected, the status code is still `200` with a response including all the devices as being rejected.
    * items `string`

### DevicesQueryResult
* DevicesQueryResult `object`: The campaigns list result.
  * nextLink `string`: If partial results are returned, this property describes a URI path to get the next result page.
  * value `array`: The list of devices.
    * items [DeviceQueryResult](#devicequeryresult)

### EngageActiveUsersFilter


### EngageIdleUsersFilter


### EngageNewUsersFilter


### EngageOldUsersFilter


### EngageSubsetFilter


### Filter
* Filter `object`
  * type **required** `string`

### FirmwareVersionCriterion


### GeoFencingCriterion


### IntegerTagCriterion


### LanguageCriterion


### LocationCriterion


### NativePushEnabledFilter


### NetworkTypeCriterion


### NotificationOptions
* NotificationOptions `object`
  * actionText `string`: The action text is the title of the right button of the alert or the value of the unlock slider, where the value replaces 'unlock' in 'slide to unlock'. 'View' (localized to the preferred language) is used as the default value. The `deliveryTime` property must be set to `any` or `background`.
  * bigPicture `string`: URL of a remote image displayed in expanded notifications on
  * bigText `string`: Android 4.1+ only. Multi line message shown in expanded notifications on Android 4.1+ devices. The `notificationType` property must be set to `system`.
  * sound `string`: iOS only. The name of a sound file in the application bundle. The sound in this file is played as an alert. If the sound file doesn’t exist or default is specified as the value, the default alert sound is played. The audio must be in one of the audio data formats that are compatible with system sounds. The `deliveryTime` property must be set to `any` or `background`.

### PollAnswerFeedbackCriterion


### PollFeedbackCriterion


### PollQuestion
* PollQuestion `object`
  * choices `array`: List of possible choices for this question.
    * items [PollQuestionChoice](#pollquestionchoice)
  * id `integer`: Unique identifier of the question.
  * localization `object`: Poll questions can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable property title.
  * title `string`: Title of the question.

### PollQuestionChoice
* PollQuestionChoice `object`
  * id `integer`: Unique identifier of the choice.
  * isDefault `boolean`: A flag indicating if this choice is the default choice for the associated question. Only one choice in the array can have this value set to true.
  * localization `object`: Poll choices can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable property title.
  * title `string`: Title of the choice.

### PollQuestionChoiceLocalization
* PollQuestionChoiceLocalization `object`
  * title `string`: Title of the choice.

### PollQuestionLocalization
* PollQuestionLocalization `object`
  * title `string`: Title of the question.

### PushQuotaFilter


### Resource
* Resource `object`
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ScreenSizeCriterion


### SegmentCriterion


### StringTagCriterion


### SupportedPlatformsListResult
* SupportedPlatformsListResult `object`
  * platforms `array`: List of supported platforms.
    * items `string`

### containerUrl
* containerUrl [url](#url)

### date
* date `string`: A date as defined by full-date in RFC3339.

### dateRangeExportTaskParameter
* dateRangeExportTaskParameter `object`
  * containerUrl **required** [containerUrl](#containerurl)
  * description `string`: A description of the export task.
  * endDate **required** [date](#date)
  * exportFormat **required** [exportFormat](#exportformat)
  * startDate **required** [date](#date)

### exportFormat
* exportFormat `string` (values: JsonBlob, CsvBlob): The format of exported data.

### exportOptions
* exportOptions `object`: Options to control export generation.
  * exportUserId `boolean`

### exportState
* exportState `string` (values: Queued, Started, Succeeded, Failed): The state of an export task.

### exportTaskListResult
* exportTaskListResult `object`: Gets a paged list of ExportTasks.
  * nextLink `string`: When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages.
  * value **required** `array`: The list of export tasks.
    * items [exportTaskResult](#exporttaskresult)

### exportTaskParameter
* exportTaskParameter `object`
  * containerUrl **required** [containerUrl](#containerurl)
  * description `string`: A description of the export task.
  * exportFormat **required** [exportFormat](#exportformat)

### exportTaskResult
* exportTaskResult `object`
  * dateCompleted `string`: The RFC3339 date-time the export task was completed.
  * dateCreated **required** `string`: The RFC3339 date-time the export task was created.
  * description `string`: A description of the export task.
  * errorDetails `string`: Details of errors encountered during the export, if any.
  * exportType **required** [exportType](#exporttype)
  * id **required** `string`: Unique identifier of the export task.
  * state **required** [exportState](#exportstate)

### exportType
* exportType `string` (values: Activity, Tag, Crash, Error, Event, Job, Session, Token, Push): The type of export.

### feedbackByCampaignParameter
* feedbackByCampaignParameter `object`
  * campaignIds **required** `array`: A list of campaign identifiers.
    * items `integer`
  * campaignType **required** [CampaignType](#campaigntype)
  * containerUrl **required** [containerUrl](#containerurl)
  * description `string`: A description of the export task.
  * exportFormat **required** [exportFormat](#exportformat)

### feedbackByDateRangeParameter
* feedbackByDateRangeParameter `object`
  * campaignType **required** [CampaignType](#campaigntype)
  * campaignWindowEnd **required** [timestamp](#timestamp)
  * campaignWindowStart **required** [timestamp](#timestamp)
  * containerUrl **required** [containerUrl](#containerurl)
  * description `string`: A description of the export task.
  * exportFormat **required** [exportFormat](#exportformat)

### importTask
* importTask `object`
  * storageUrl `string`: A shared Access Signature (SAS) Storage URI where the job results will be retrieved from.

### importTaskListResult
* importTaskListResult `object`: Gets a paged list of import tasks.
  * nextLink `string`: When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages.
  * value `array`: The list of import task.
    * items [importTaskResult](#importtaskresult)

### importTaskResult
* importTaskResult `object`
  * dateCompleted `string`: The date at which the import job completed (Not present if not yet completed).
  * dateCreated `string`: The date at which the import job was created.
  * errorDetails `string`: Details of any errors encountered during the import, if any.
  * id `string`: Unique identifier of the import task.
  * state `string` (values: Queued, Started, Succeeded, Failed): The current state of the import task.
  * storageUrl `string`: A shared Access Signature (SAS) Storage URI where the job results will be retrieved from.

### timestamp
* timestamp `string`: A date time as defined by date-time in RFC3339.

### url
* url `string`


