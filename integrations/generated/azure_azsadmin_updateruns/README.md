# @datafire/azure_azsadmin_updateruns

Client library for UpdateAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_updateruns
```
```js
let azure_azsadmin_updateruns = require('@datafire/azure_azsadmin_updateruns').create({
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

Update run operation endpoints and objects.

## Actions

### UpdateRuns_ListTopLevel
Get the list of update runs.


```js
azure_azsadmin_updateruns.UpdateRuns_ListTopLevel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "updateLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name.
  * updateLocation **required** `string`: The name of the update location.
  * api-version **required** `string`: Client API Version.

#### Output
* output [UpdateRunList](#updaterunlist)

### UpdateRuns_GetTopLevel
Get an instance of update run using the ID.


```js
azure_azsadmin_updateruns.UpdateRuns_GetTopLevel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "updateLocation": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name.
  * updateLocation **required** `string`: The name of the update location.
  * runName **required** `string`: Update run identifier.
  * api-version **required** `string`: Client API Version.

#### Output
* output [UpdateRun](#updaterun)

### UpdateRuns_List
Get the list of update runs.


```js
azure_azsadmin_updateruns.UpdateRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "updateLocation": "",
  "updateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name.
  * updateLocation **required** `string`: The name of the update location.
  * updateName **required** `string`: Name of the update.
  * api-version **required** `string`: Client API Version.

#### Output
* output [UpdateRunList](#updaterunlist)

### UpdateRuns_Get
Get an instance of update run using the ID.


```js
azure_azsadmin_updateruns.UpdateRuns_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "updateLocation": "",
  "updateName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name.
  * updateLocation **required** `string`: The name of the update location.
  * updateName **required** `string`: Name of the update.
  * runName **required** `string`: Update run identifier.
  * api-version **required** `string`: Client API Version.

#### Output
* output [UpdateRun](#updaterun)

### UpdateRuns_Rerun
Resume a failed update.


```js
azure_azsadmin_updateruns.UpdateRuns_Rerun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "updateLocation": "",
  "updateName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name.
  * updateLocation **required** `string`: The name of the update location.
  * updateName **required** `string`: Name of the update.
  * runName **required** `string`: Update run identifier.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### Step
* Step `object`: Information about each step of the update process.
  * description `string`: Description of the step.
  * endTimeUtc `string`: Time at which this step stopped executing
  * errorMessage `string`: Error message, if any.
  * name `string`: Name of the step.
  * startTimeUtc `string`: Time at which this step started executing
  * status `string`: State of the step.
  * steps `array`: Inner steps
    * items [Step](#step)

### UpdateRun
* UpdateRun `object`: Representation of a update run resource.
  * properties [UpdateRunModel](#updaterunmodel)
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### UpdateRunList
* UpdateRunList `object`: Pageable list of update runs.
  * nextLink `string`: URI to the next page.
  * value `array`: List of update runs.
    * items [UpdateRun](#updaterun)

### UpdateRunModel
* UpdateRunModel `object`: Properties of an update run.
  * duration `string`: Duration of the update.
  * progress [Step](#step)
  * state [UpdateRunState](#updaterunstate)
  * timeStarted `string`: Update start time.

### UpdateRunState
* UpdateRunState `string` (values: Unknown, Succeeded, InProgress, Failed): State of the update run.


