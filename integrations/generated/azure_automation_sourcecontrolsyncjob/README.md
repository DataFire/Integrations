# @datafire/azure_automation_sourcecontrolsyncjob

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_sourcecontrolsyncjob
```
```js
let azure_automation_sourcecontrolsyncjob = require('@datafire/azure_automation_sourcecontrolsyncjob').create({
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

### SourceControlSyncJob_ListByAutomationAccount
Retrieve a list of source control sync jobs.


```js
azure_automation_sourcecontrolsyncjob.SourceControlSyncJob_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The source control name.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SourceControlSyncJobListResult](#sourcecontrolsyncjoblistresult)

### SourceControlSyncJob_Get
Retrieve the source control sync job identified by job id.


```js
azure_automation_sourcecontrolsyncjob.SourceControlSyncJob_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "sourceControlSyncJobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The source control name.
  * sourceControlSyncJobId **required** `string`: The source control sync job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SourceControlSyncJobById](#sourcecontrolsyncjobbyid)

### SourceControlSyncJob_Create
Creates the sync job for a source control.


```js
azure_automation_sourcecontrolsyncjob.SourceControlSyncJob_Create({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "sourceControlSyncJobId": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The source control name.
  * sourceControlSyncJobId **required** `string`: The source control sync job id.
  * parameters **required** [SourceControlSyncJobCreateParameters](#sourcecontrolsyncjobcreateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SourceControlSyncJob](#sourcecontrolsyncjob)



## Definitions

### SourceControlSyncJob
* SourceControlSyncJob `object`: Definition of the source control sync job.
  * id `string`: Resource id.
  * name `string`: Resource name.
  * properties [SourceControlSyncJobProperties](#sourcecontrolsyncjobproperties)
  * type `string`: Resource type.

### SourceControlSyncJobById
* SourceControlSyncJobById `object`: Definition of the source control sync job.
  * id `string`: The id of the job.
  * properties [SourceControlSyncJobByIdProperties](#sourcecontrolsyncjobbyidproperties)

### SourceControlSyncJobByIdProperties
* SourceControlSyncJobByIdProperties `object`: Definition of source control sync job properties.
  * creationTime `string`: The creation time of the job.
  * endTime `string`: The end time of the job.
  * exception `string`: The exceptions that occurred while running the sync job.
  * provisioningState `string` (values: Completed, Failed, Running): The provisioning state of the job.
  * sourceControlSyncJobId `string`: The source control sync job id.
  * startTime `string`: The start time of the job.
  * syncType `string` (values: PartialSync, FullSync): The sync type.

### SourceControlSyncJobCreateParameters
* SourceControlSyncJobCreateParameters `object`: The parameters supplied to the create source control sync job operation.
  * properties **required** [SourceControlSyncJobCreateProperties](#sourcecontrolsyncjobcreateproperties)

### SourceControlSyncJobCreateProperties
* SourceControlSyncJobCreateProperties `object`: Definition of create source control sync job properties.
  * commitId **required** `string`: The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.

### SourceControlSyncJobListResult
* SourceControlSyncJobListResult `object`: The response model for the list source control sync jobs operation.
  * nextLink `string`: The next link.
  * value `array`: The list of source control sync jobs.
    * items [SourceControlSyncJob](#sourcecontrolsyncjob)

### SourceControlSyncJobProperties
* SourceControlSyncJobProperties `object`: Definition of source control sync job properties.
  * creationTime `string`: The creation time of the job.
  * endTime `string`: The end time of the job.
  * provisioningState `string` (values: Completed, Failed, Running): The provisioning state of the job.
  * sourceControlSyncJobId `string`: The source control sync job id.
  * startTime `string`: The start time of the job.
  * syncType `string` (values: PartialSync, FullSync): The sync type.


