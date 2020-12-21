# @datafire/azure_automation_softwareupdateconfigurationrun

Client library for Update Management

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_softwareupdateconfigurationrun
```
```js
let azure_automation_softwareupdateconfigurationrun = require('@datafire/azure_automation_softwareupdateconfigurationrun').create({
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

APIs for managing software update configurations.

## Actions

### SoftwareUpdateConfigurationRuns_List
Return list of software update configuration runs


```js
azure_automation_softwareupdateconfigurationrun.SoftwareUpdateConfigurationRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.
  * $filter `string`: The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
  * $skip `string`: Number of entries you skip before returning results
  * $top `string`: Maximum number of entries returned in the results collection

#### Output
* output [softwareUpdateConfigurationRunListResult](#softwareupdateconfigurationrunlistresult)

### SoftwareUpdateConfigurationRuns_GetById
Get a single software update configuration Run by Id.


```js
azure_automation_softwareupdateconfigurationrun.SoftwareUpdateConfigurationRuns_GetById({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "softwareUpdateConfigurationRunId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * softwareUpdateConfigurationRunId **required** `string`: The Id of the software update configuration run.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output [softwareUpdateConfigurationRun](#softwareupdateconfigurationrun)



## Definitions

### softareUpdateConfigurationRunTaskProperties
* softareUpdateConfigurationRunTaskProperties `object`: Task properties of the software update configuration.
  * jobId `string`: The job id of the task.
  * source `string`: The name of the source of the task.
  * status `string`: The status of the task.

### softareUpdateConfigurationRunTasks
* softareUpdateConfigurationRunTasks `object`: Software update configuration run tasks model.
  * postTask [softareUpdateConfigurationRunTaskProperties](#softareupdateconfigurationruntaskproperties)
  * preTask [softareUpdateConfigurationRunTaskProperties](#softareupdateconfigurationruntaskproperties)

### softwareUpdateConfigurationRun
* softwareUpdateConfigurationRun `object`: Software update configuration Run properties.
  * id `string`: Resource Id of the software update configuration run
  * name `string`: Name of the software update configuration run.
  * properties [softwareUpdateConfigurationRunProperties](#softwareupdateconfigurationrunproperties)

### softwareUpdateConfigurationRunListResult
* softwareUpdateConfigurationRunListResult `object`: result of listing all software update configuration runs
  * nextLink `string`: link to next page of results.
  * value `array`: outer object returned when listing all software update configuration runs
    * items [softwareUpdateConfigurationRun](#softwareupdateconfigurationrun)

### softwareUpdateConfigurationRunProperties
* softwareUpdateConfigurationRunProperties `object`: Software update configuration properties.
  * computerCount `integer`: Number of computers in the software update configuration run.
  * configuredDuration `string`: Configured duration for the software update configuration run.
  * createdBy `string`: CreatedBy property, which only appears in the response.
  * creationTime `string`: Creation time of the resource, which only appears in the response.
  * endTime `string`: End time of the software update configuration run.
  * failedCount `integer`: Number of computers with failed status.
  * lastModifiedBy `string`: LastModifiedBy property, which only appears in the response.
  * lastModifiedTime `string`: Last time resource was modified, which only appears in the response.
  * osType `string`: Operating system target of the software update configuration triggered this run
  * softwareUpdateConfiguration [updateConfigurationNavigation](#updateconfigurationnavigation)
  * startTime `string`: Start time of the software update configuration run.
  * status `string`: Status of the software update configuration run.
  * tasks [softareUpdateConfigurationRunTasks](#softareupdateconfigurationruntasks)

### updateConfigurationNavigation
* updateConfigurationNavigation `object`: Software update configuration Run Navigation model.
  * name `string`: Name of the software update configuration triggered the software update configuration run


