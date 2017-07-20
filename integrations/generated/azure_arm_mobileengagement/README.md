# @datafire/azure_arm_mobileengagement

Client library for Engagement.ManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_mobileengagement
```

```js
let datafire = require('datafire');
let azure_arm_mobileengagement = require('@datafire/azure_arm_mobileengagement').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_mobileengagement: account,
  }
})


azure_arm_mobileengagement.AppCollections_List({}, context).then(data => {
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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client Api Version.

### AppCollections_CheckNameAvailability
Checks availability of an app collection name in the Engagement domain.


```js
azure_arm_mobileengagement.AppCollections_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

### SupportedPlatforms_List
Lists supported platforms for Engagement applications.


```js
azure_arm_mobileengagement.SupportedPlatforms_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client Api Version.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* kind (string) **required** - Campaign kind.
* $skip (integer) - Control paging of campaigns, start results at the given offset, defaults to 0 (1st page of data).
* $top (integer) - Control paging of campaigns, number of campaigns to return with each call. It returns all campaigns by default. When specifying $top parameter, the response contains a `nextLink` property describing the path to get the next page if there are more results.
* $filter (string) - Filter can be used to restrict the results to campaigns matching a specific state. The syntax is `$filter=state eq 'draft'`. Valid state values are: draft, scheduled, in-progress, and finished. Only the eq operator and the state property are supported.
* $orderby (string) - Sort results by an expression which looks like `$orderby=id asc` (this example is actually the default behavior). The syntax is orderby={property} {direction} or just orderby={property}. The available sorting properties are id, name, state, activatedDate, and finishedDate. The available directions are asc (for ascending order) and desc (for descending order). When not specified the asc direction is used. Only one property at a time can be used for sorting.
* $search (string) - Restrict results to campaigns matching the optional `search` expression. This currently performs the search based on the name on the campaign only, case insensitive. If the campaign contains the value of the `search` parameter anywhere in the name, it matches.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* kind (string) **required** - Campaign kind.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* kind (string) **required** - Campaign kind.
* parameters (undefined) **required**

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

#### Parameters
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* parameters (undefined) **required**
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* parameters (undefined) **required**

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

#### Parameters
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* kind (string) **required** - Campaign kind.
* id (integer) **required** - Campaign identifier.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* kind (string) **required** - Campaign kind.
* name (string) **required** - Campaign name.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* $top (integer) - Number of devices to return with each call. Defaults to 100 and cannot return more. Passing a greater value is ignored. The response contains a `nextLink` property describing the URI path to get the next page of results if not all results could be returned at once.
* $select (string) - By default all `meta` and `appInfo` properties are returned, this property is used to restrict the output to the desired properties. It also excludes all devices from the output that have none of the selected properties. In other terms, only devices having at least one of the selected property being set is part of the results. Examples: - `$select=appInfo` : select all devices having at least 1 appInfo, return them all and don’t return any meta property. - `$select=meta` : return only meta properties in the output. - `$select=appInfo,meta/firstSeen,meta/lastSeen` : return all `appInfo`, plus meta object containing only firstSeen and lastSeen properties. The format is thus a comma separated list of properties to select. Use `appInfo` to select all appInfo properties, `meta` to select all meta properties. Use `appInfo/{key}` and `meta/{key}` to select specific appInfo and meta properties.
* $filter (string) - Filter can be used to reduce the number of results. Filter is a boolean expression that can look like the following examples: * `$filter=deviceId gt 'abcdef0123456789abcdef0123456789'` * `$filter=lastModified le 1447284263690L` * `$filter=(deviceId ge 'abcdef0123456789abcdef0123456789') and (deviceId lt 'bacdef0123456789abcdef0123456789') and (lastModified gt 1447284263690L)` The first example is used automatically for paging when returning the `nextLink` property. The filter expression is a combination of checks on some properties that can be compared to their value. The available operators are: * `gt`  : greater than * `ge`  : greater than or equals * `lt`  : less than * `le`  : less than or equals * `and` : to add multiple checks (all checks must pass), optional parentheses can be used. The properties that can be used in the expression are the following: * `deviceId {operator} '{deviceIdValue}'` : a lexicographical comparison is made on the deviceId value, use single quotes for the value. * `lastModified {operator} {number}L` : returns only meta properties or appInfo properties whose last value modification timestamp compared to the specified value is matching (value is milliseconds since January 1st, 1970 UTC). Please note the `L` character after the number of milliseconds, its required when the number of milliseconds exceeds `2^31 - 1` (which is always the case for recent timestamps). Using `lastModified` excludes all devices from the output that have no property matching the timestamp criteria, like `$select`. Please note that the internal value of `lastModified` timestamp for a given property is never part of the results.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* $skip (integer) - Control paging of export tasks, start results at the given offset, defaults to 0 (1st page of data).
* $top (integer) - Control paging of export tasks, number of export tasks to return with each call. By default, it returns all export tasks with a default paging of 20.
* $orderby (string) - Sort results by an expression which looks like `$orderby=taskId asc` (default when not specified).

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* id (string) **required** - Export task identifier.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* $skip (integer) - Control paging of import jobs, start results at the given offset, defaults to 0 (1st page of data).
* $top (integer) - Control paging of import jobs, number of import jobs to return with each call. By default, it returns all import jobs with a default paging of 20.
* $orderby (string) - Sort results by an expression which looks like `$orderby=jobId asc` (default when not specified).

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* id (string) **required** - Import job identifier.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* deviceId (string) **required** - Device identifier.

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* parameters (undefined) **required**

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

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* appCollection (string) **required** - Application collection.
* appName (string) **required** - Application resource name.
* api-version (string) **required** - Client Api Version.
* userId (string) **required** - User identifier.

