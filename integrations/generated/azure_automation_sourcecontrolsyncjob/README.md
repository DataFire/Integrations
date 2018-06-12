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

azure_automation_sourcecontrolsyncjob.SourceControlSyncJob_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
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
* output `object`: The response model for the list source control sync jobs operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets a list of source control sync jobs.
    * items `object`: Definition of the source control sync job.
      * id `string`: Resource id.
      * name `string`: Resource name.
      * properties `object`: Definition of source control sync job properties.
        * creationTime `string`: Gets the creation time of the job.
        * endTime `string`: Gets the end time of the job.
        * provisioningState `string` (values: Completed, Failed, Running): Gets the provisioning state of the job.
        * startTime `string`: Gets the start time of the job.
        * startType `string` (values: AutoSync, ManualSync): Gets the type of start for the sync job.
        * syncJobId `string`: Gets the source control sync job id.
      * type `string`: Resource type.

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
* output `object`: Definition of the source control sync job.
  * id `string`: Gets the id of the job.
  * properties `object`: Definition of source control sync job properties.
    * creationTime `string`: Gets the creation time of the job.
    * endTime `string`: Gets the end time of the job.
    * exception `string`: Gets the exceptions that occured while running the sync job.
    * provisioningState `string` (values: Completed, Failed, Running): Gets the provisioning state of the job.
    * startTime `string`: Gets the start time of the job.
    * startType `string` (values: AutoSync, ManualSync): Gets the type of start for the sync job.
    * syncJobId `string`: Gets the source control sync job id.

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
  * parameters **required** `object`: The parameters supplied to the create source control sync job operation.
    * properties **required** `object`: Definition of create source control sync job properties.
      * commitId `string`: Sets the commit id of the source control sync job.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the source control sync job.
  * id `string`: Resource id.
  * name `string`: Resource name.
  * properties `object`: Definition of source control sync job properties.
    * creationTime `string`: Gets the creation time of the job.
    * endTime `string`: Gets the end time of the job.
    * provisioningState `string` (values: Completed, Failed, Running): Gets the provisioning state of the job.
    * startTime `string`: Gets the start time of the job.
    * startType `string` (values: AutoSync, ManualSync): Gets the type of start for the sync job.
    * syncJobId `string`: Gets the source control sync job id.
  * type `string`: Resource type.



## Definitions

*This integration has no definitions*
