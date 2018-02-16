# @datafire/azure_automation_dsccompilationjob

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_dsccompilationjob
```
```js
let azure_automation_dsccompilationjob = require('@datafire/azure_automation_dsccompilationjob').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_dsccompilationjob.DscCompilationJob_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### DscCompilationJob_ListByAutomationAccount
Retrieve a list of dsc compilation jobs.


```js
azure_automation_dsccompilationjob.DscCompilationJob_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list job operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of Dsc Compilation jobs.
    * items `object`: Definition of the Dsc Compilation job.
      * id `string`: Gets the id of the resource.
      * properties `object`: Definition of Dsc Compilation job properties.
        * configuration `object`: The Dsc configuration property associated with the entity.
          * name `string`: Gets or sets the name of the Dsc configuration.
        * creationTime `string`: Gets the creation time of the job.
        * endTime `string`: Gets the end time of the job.
        * exception `string`: Gets the exception of the job.
        * jobId `string`: Gets the id of the job.
        * lastModifiedTime `string`: Gets the last modified time of the job.
        * lastStatusModifiedTime `string`: Gets the last status modified time of the job.
        * parameters `object`: Gets or sets the parameters of the job.
        * startTime `string`: Gets the start time of the job.
        * startedBy `string`: Gets the compilation job started by.
        * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): Gets or sets the status of the job.
        * statusDetails `string`: Gets or sets the status details of the job.

### DscCompilationJob_Get
Retrieve the Dsc configuration compilation job identified by job id.


```js
azure_automation_dsccompilationjob.DscCompilationJob_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "compilationJobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * compilationJobId **required** `string`: The Dsc configuration compilation job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the Dsc Compilation job.
  * id `string`: Gets the id of the resource.
  * properties `object`: Definition of Dsc Compilation job properties.
    * configuration `object`: The Dsc configuration property associated with the entity.
      * name `string`: Gets or sets the name of the Dsc configuration.
    * creationTime `string`: Gets the creation time of the job.
    * endTime `string`: Gets the end time of the job.
    * exception `string`: Gets the exception of the job.
    * jobId `string`: Gets the id of the job.
    * lastModifiedTime `string`: Gets the last modified time of the job.
    * lastStatusModifiedTime `string`: Gets the last status modified time of the job.
    * parameters `object`: Gets or sets the parameters of the job.
    * startTime `string`: Gets the start time of the job.
    * startedBy `string`: Gets the compilation job started by.
    * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): Gets or sets the status of the job.
    * statusDetails `string`: Gets or sets the status details of the job.

### DscCompilationJob_Create
Creates the Dsc compilation job of the configuration.


```js
azure_automation_dsccompilationjob.DscCompilationJob_Create({
  "resourceGroupName": "",
  "automationAccountName": "",
  "compilationJobId": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * compilationJobId **required** `string`: The the DSC configuration Id.
  * parameters **required** `object`: The parameters supplied to the create compilation job operation.
    * location `string`: Gets or sets the location of the resource.
    * name `string`: Gets or sets name of the resource.
    * properties **required** `object`: The parameters supplied to the create compilation job operation.
      * configuration **required** `object`: The Dsc configuration property associated with the entity.
        * name `string`: Gets or sets the name of the Dsc configuration.
      * newNodeConfigurationBuildVersionRequired `boolean`: If a new build version of NodeConfiguration is required.
      * parameters `object`: Gets or sets the parameters of the job.
    * tags `object`: Gets or sets the tags attached to the resource.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the Dsc Compilation job.
  * id `string`: Gets the id of the resource.
  * properties `object`: Definition of Dsc Compilation job properties.
    * configuration `object`: The Dsc configuration property associated with the entity.
      * name `string`: Gets or sets the name of the Dsc configuration.
    * creationTime `string`: Gets the creation time of the job.
    * endTime `string`: Gets the end time of the job.
    * exception `string`: Gets the exception of the job.
    * jobId `string`: Gets the id of the job.
    * lastModifiedTime `string`: Gets the last modified time of the job.
    * lastStatusModifiedTime `string`: Gets the last status modified time of the job.
    * parameters `object`: Gets or sets the parameters of the job.
    * startTime `string`: Gets the start time of the job.
    * startedBy `string`: Gets the compilation job started by.
    * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): Gets or sets the status of the job.
    * statusDetails `string`: Gets or sets the status details of the job.

### DscCompilationJob_GetStream
Retrieve the job stream identified by job stream id.


```js
azure_automation_dsccompilationjob.DscCompilationJob_GetStream({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "jobStreamId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * jobStreamId **required** `string`: The job stream id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the job stream.
  * id `string`: Gets or sets the id of the resource.
  * properties `object`: Definition of the job stream.
    * jobStreamId `string`: Gets or sets the id of the job stream.
    * streamText `string`: Gets or sets the stream text.
    * streamType `string` (values: Progress, Output, Warning, Error, Debug, Verbose, Any): Gets or sets the stream type.
    * summary `string`: Gets or sets the summary.
    * time `string`: Gets or sets the creation time of the job.
    * value `object`: Gets or sets the values of the job stream.



## Definitions

*This integration has no definitions*
