# @datafire/azure_automation_job

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_job
```
```js
let azure_automation_job = require('@datafire/azure_automation_job').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_job.Job_ListByAutomationAccount({
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

### Job_ListByAutomationAccount
Retrieve a list of jobs.


```js
azure_automation_job.Job_ListByAutomationAccount({
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
  * value `array`: Gets or sets a list of jobs.
    * items `object`: Definition of the job.
      * id `string`: Gets or sets the id of the resource.
      * properties `object`: Definition of job properties.
        * creationTime `string`: Gets or sets the creation time of the job.
        * endTime `string`: Gets or sets the end time of the job.
        * exception `string`: Gets or sets the exception of the job.
        * jobId `string`: Gets or sets the id of the job.
        * lastModifiedTime `string`: Gets or sets the last modified time of the job.
        * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the job.
        * parameters `object`: Gets or sets the parameters of the job.
        * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
        * runbook `object`: The runbook property associated with the entity.
          * name `string`: Gets or sets the name of the runbook.
        * startTime `string`: Gets or sets the start time of the job.
        * startedBy `string`: Gets or sets the job started by.
        * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): Gets or sets the status of the job.
        * statusDetails `string`: Gets or sets the status details of the job.

### Job_Get
Retrieve the job identified by job id.


```js
azure_automation_job.Job_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the job.
  * id `string`: Gets or sets the id of the resource.
  * properties `object`: Definition of job properties.
    * creationTime `string`: Gets or sets the creation time of the job.
    * endTime `string`: Gets or sets the end time of the job.
    * exception `string`: Gets or sets the exception of the job.
    * jobId `string`: Gets or sets the id of the job.
    * lastModifiedTime `string`: Gets or sets the last modified time of the job.
    * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the job.
    * parameters `object`: Gets or sets the parameters of the job.
    * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
    * runbook `object`: The runbook property associated with the entity.
      * name `string`: Gets or sets the name of the runbook.
    * startTime `string`: Gets or sets the start time of the job.
    * startedBy `string`: Gets or sets the job started by.
    * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): Gets or sets the status of the job.
    * statusDetails `string`: Gets or sets the status details of the job.

### Job_Create
Create a job of the runbook.


```js
azure_automation_job.Job_Create({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * parameters **required** `object`: The parameters supplied to the create job operation.
    * location `string`: Gets or sets the location of the resource.
    * name `string`: Gets or sets name of the resource.
    * properties **required** `object`: The parameters supplied to the create job operation.
      * parameters `object`: Gets or sets the parameters of the job.
      * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
      * runbook **required** `object`: The runbook property associated with the entity.
        * name `string`: Gets or sets the name of the runbook.
    * tags `object`: Gets or sets the tags attached to the resource.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the job.
  * id `string`: Gets or sets the id of the resource.
  * properties `object`: Definition of job properties.
    * creationTime `string`: Gets or sets the creation time of the job.
    * endTime `string`: Gets or sets the end time of the job.
    * exception `string`: Gets or sets the exception of the job.
    * jobId `string`: Gets or sets the id of the job.
    * lastModifiedTime `string`: Gets or sets the last modified time of the job.
    * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the job.
    * parameters `object`: Gets or sets the parameters of the job.
    * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
    * runbook `object`: The runbook property associated with the entity.
      * name `string`: Gets or sets the name of the runbook.
    * startTime `string`: Gets or sets the start time of the job.
    * startedBy `string`: Gets or sets the job started by.
    * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): Gets or sets the status of the job.
    * statusDetails `string`: Gets or sets the status details of the job.

### Job_GetOutput
Retrieve the job output identified by job id.


```js
azure_automation_job.Job_GetOutput({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`

### Job_Resume
Resume the job identified by jobId.


```js
azure_automation_job.Job_Resume({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Job_GetRunbookContent
Retrieve the runbook content of the job identified by job id.


```js
azure_automation_job.Job_GetRunbookContent({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`

### Job_Stop
Stop the job identified by jobId.


```js
azure_automation_job.Job_Stop({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### JobStream_ListByJob
Retrieve a list of jobs streams identified by job id.


```js
azure_automation_job.JobStream_ListByJob({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job Id.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list job stream operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: A list of job streams.
    * items `object`: Definition of the job stream.
      * id `string`: Gets or sets the id of the resource.
      * properties `object`: Definition of the job stream.
        * jobStreamId `string`: Gets or sets the id of the job stream.
        * streamText `string`: Gets or sets the stream text.
        * streamType `string` (values: Progress, Output, Warning, Error, Debug, Verbose, Any): Gets or sets the stream type.
        * summary `string`: Gets or sets the summary.
        * time `string`: Gets or sets the creation time of the job.
        * value `object`: Gets or sets the values of the job stream.

### JobStream_Get
Retrieve the job stream identified by job stream id.


```js
azure_automation_job.JobStream_Get({
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

### Job_Suspend
Suspend the job identified by jobId.


```js
azure_automation_job.Job_Suspend({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * jobId **required** `string`: The job id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
