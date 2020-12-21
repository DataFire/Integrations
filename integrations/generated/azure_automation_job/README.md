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

.then(data => {
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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output [JobListResultV2](#joblistresultv2)

### Job_Get
Retrieve the job identified by job name.


```js
azure_automation_job.Job_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output [Job](#job)

### Job_Create
Create a job of the runbook.


```js
azure_automation_job.Job_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * parameters **required** [JobCreateParameters](#jobcreateparameters)
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output [Job](#job)

### Job_GetOutput
Retrieve the job output identified by job name.


```js
azure_automation_job.Job_GetOutput({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The name of the job to be created.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output `file`

### Job_Resume
Resume the job identified by jobName.


```js
azure_automation_job.Job_Resume({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
*Output schema unknown*

### Job_GetRunbookContent
Retrieve the runbook content of the job identified by job name.


```js
azure_automation_job.Job_GetRunbookContent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output `file`

### Job_Stop
Stop the job identified by jobName.


```js
azure_automation_job.Job_Stop({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
*Output schema unknown*

### JobStream_ListByJob
Retrieve a list of jobs streams identified by job name.


```js
azure_automation_job.JobStream_ListByJob({
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output [JobStreamListResult](#jobstreamlistresult)

### JobStream_Get
Retrieve the job stream identified by job stream id.


```js
azure_automation_job.JobStream_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "jobStreamId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * jobStreamId **required** `string`: The job stream id.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output [JobStream](#jobstream)

### Job_Suspend
Suspend the job identified by job name.


```js
azure_automation_job.Job_Suspend({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
*Output schema unknown*



## Definitions

### Job
* Job `object`: Definition of the job.
  * properties [JobProperties](#jobproperties)
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### JobCollectionItem
* JobCollectionItem `object`: Job collection item properties.
  * properties **required** [JobCollectionItemProperties](#jobcollectionitemproperties)
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### JobCollectionItemProperties
* JobCollectionItemProperties `object`: Job collection item properties.
  * creationTime `string`: The creation time of the job.
  * endTime `string`: The end time of the job.
  * jobId `string`: The id of the job.
  * lastModifiedTime `string`: The last modified time of the job.
  * provisioningState `string`: The provisioning state of a resource.
  * runOn `string`: Specifies the runOn group name where the job was executed.
  * runbook [RunbookAssociationProperty](#runbookassociationproperty)
  * startTime `string`: The start time of the job.
  * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): The status of the job.

### JobCreateParameters
* JobCreateParameters `object`: The parameters supplied to the create job operation.
  * properties **required** [JobCreateProperties](#jobcreateproperties)

### JobCreateProperties
* JobCreateProperties `object`
  * parameters `object`: Gets or sets the parameters of the job.
  * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
  * runbook [RunbookAssociationProperty](#runbookassociationproperty)

### JobListResultV2
* JobListResultV2 `object`: The response model for the list job operation.
  * nextLink `string`: The  link to the next page.
  * value `array`: List of jobs.
    * items [JobCollectionItem](#jobcollectionitem)

### JobProperties
* JobProperties `object`: Definition of job properties.
  * creationTime `string`: Gets or sets the creation time of the job.
  * endTime `string`: Gets or sets the end time of the job.
  * exception `string`: Gets or sets the exception of the job.
  * jobId `string`: Gets or sets the id of the job.
  * lastModifiedTime `string`: Gets or sets the last modified time of the job.
  * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the job.
  * parameters `object`: Gets or sets the parameters of the job.
  * provisioningState [JobProvisioningStateProperty](#jobprovisioningstateproperty)
  * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
  * runbook [RunbookAssociationProperty](#runbookassociationproperty)
  * startTime `string`: Gets or sets the start time of the job.
  * startedBy `string`: Gets or sets the job started by.
  * status `string` (values: New, Activating, Running, Completed, Failed, Stopped, Blocked, Suspended, Disconnected, Suspending, Stopping, Resuming, Removing): Gets or sets the status of the job.
  * statusDetails `string`: Gets or sets the status details of the job.

### JobProvisioningStateProperty
* JobProvisioningStateProperty `string` (values: Failed, Succeeded, Suspended, Processing): The provisioning state of the resource.

### JobStream
* JobStream `object`: Definition of the job stream.
  * id `string`: Gets or sets the id of the resource.
  * properties [JobStreamProperties](#jobstreamproperties)

### JobStreamListResult
* JobStreamListResult `object`: The response model for the list job stream operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: A list of job streams.
    * items [JobStream](#jobstream)

### JobStreamProperties
* JobStreamProperties `object`: Definition of the job stream.
  * jobStreamId `string`: Gets or sets the id of the job stream.
  * streamText `string`: Gets or sets the stream text.
  * streamType `string` (values: Progress, Output, Warning, Error, Debug, Verbose, Any): Gets or sets the stream type.
  * summary `string`: Gets or sets the summary.
  * time `string`: Gets or sets the creation time of the job.
  * value `object`: Gets or sets the values of the job stream.

### RunbookAssociationProperty
* RunbookAssociationProperty `object`: The runbook property associated with the entity.
  * name `string`: Gets or sets the name of the runbook.


