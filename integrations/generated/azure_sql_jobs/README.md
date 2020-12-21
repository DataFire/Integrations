# @datafire/azure_sql_jobs

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_jobs
```
```js
let azure_sql_jobs = require('@datafire/azure_sql_jobs').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### JobAgents_ListByServer
Gets a list of job agents in a server.


```js
azure_sql_jobs.JobAgents_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobAgentListResult](#jobagentlistresult)

### JobAgents_Delete
Deletes a job agent.


```js
azure_sql_jobs.JobAgents_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent to be deleted.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### JobAgents_Get
Gets a job agent.


```js
azure_sql_jobs.JobAgents_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent to be retrieved.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobAgent](#jobagent)

### JobAgents_Update
Updates a job agent.


```js
azure_sql_jobs.JobAgents_Update({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent to be updated.
  * parameters **required** [JobAgentUpdate](#jobagentupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobAgent](#jobagent)

### JobAgents_CreateOrUpdate
Creates or updates a job agent.


```js
azure_sql_jobs.JobAgents_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent to be created or updated.
  * parameters **required** [JobAgent](#jobagent)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobAgent](#jobagent)

### JobCredentials_ListByAgent
Gets a list of jobs credentials.


```js
azure_sql_jobs.JobCredentials_ListByAgent({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobCredentialListResult](#jobcredentiallistresult)

### JobCredentials_Delete
Deletes a job credential.


```js
azure_sql_jobs.JobCredentials_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "credentialName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * credentialName **required** `string`: The name of the credential.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### JobCredentials_Get
Gets a jobs credential.


```js
azure_sql_jobs.JobCredentials_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "credentialName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * credentialName **required** `string`: The name of the credential.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobCredential](#jobcredential)

### JobCredentials_CreateOrUpdate
Creates or updates a job credential.


```js
azure_sql_jobs.JobCredentials_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "credentialName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * credentialName **required** `string`: The name of the credential.
  * parameters **required** [JobCredential](#jobcredential)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobCredential](#jobcredential)

### JobExecutions_ListByAgent
Lists all executions in a job agent.


```js
azure_sql_jobs.JobExecutions_ListByAgent({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * createTimeMin `string`: If specified, only job executions created at or after the specified time are included.
  * createTimeMax `string`: If specified, only job executions created before the specified time are included.
  * endTimeMin `string`: If specified, only job executions completed at or after the specified time are included.
  * endTimeMax `string`: If specified, only job executions completed before the specified time are included.
  * isActive `boolean`: If specified, only active or only completed job executions are included.
  * $skip `integer`: The number of elements in the collection to skip.
  * $top `integer`: The number of elements to return from the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecutionListResult](#jobexecutionlistresult)

### Jobs_ListByAgent
Gets a list of jobs.


```js
azure_sql_jobs.Jobs_ListByAgent({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobListResult](#joblistresult)

### Jobs_Delete
Deletes a job.


```js
azure_sql_jobs.Jobs_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to delete.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### Jobs_Get
Gets a job.


```js
azure_sql_jobs.Jobs_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Job](#job)

### Jobs_CreateOrUpdate
Creates or updates a job.


```js
azure_sql_jobs.Jobs_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * parameters **required** [Job](#job)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Job](#job)

### JobExecutions_ListByJob
Lists a job's executions.


```js
azure_sql_jobs.JobExecutions_ListByJob({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * createTimeMin `string`: If specified, only job executions created at or after the specified time are included.
  * createTimeMax `string`: If specified, only job executions created before the specified time are included.
  * endTimeMin `string`: If specified, only job executions completed at or after the specified time are included.
  * endTimeMax `string`: If specified, only job executions completed before the specified time are included.
  * isActive `boolean`: If specified, only active or only completed job executions are included.
  * $skip `integer`: The number of elements in the collection to skip.
  * $top `integer`: The number of elements to return from the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecutionListResult](#jobexecutionlistresult)

### JobExecutions_Get
Gets a job execution.


```js
azure_sql_jobs.JobExecutions_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job.
  * jobExecutionId **required** `string`: The id of the job execution
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecution](#jobexecution)

### JobExecutions_CreateOrUpdate
Creates or updates a job execution.


```js
azure_sql_jobs.JobExecutions_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * jobExecutionId **required** `string`: The job execution id to create the job execution under.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecution](#jobexecution)

### JobExecutions_Cancel
Requests cancellation of a job execution.


```js
azure_sql_jobs.JobExecutions_Cancel({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job.
  * jobExecutionId **required** `string`: The id of the job execution to cancel.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### JobStepExecutions_ListByJobExecution
Lists the step executions of a job execution.


```js
azure_sql_jobs.JobStepExecutions_ListByJobExecution({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * jobExecutionId **required** `string`: The id of the job execution
  * createTimeMin `string`: If specified, only job executions created at or after the specified time are included.
  * createTimeMax `string`: If specified, only job executions created before the specified time are included.
  * endTimeMin `string`: If specified, only job executions completed at or after the specified time are included.
  * endTimeMax `string`: If specified, only job executions completed before the specified time are included.
  * isActive `boolean`: If specified, only active or only completed job executions are included.
  * $skip `integer`: The number of elements in the collection to skip.
  * $top `integer`: The number of elements to return from the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecutionListResult](#jobexecutionlistresult)

### JobStepExecutions_Get
Gets a step execution of a job execution.


```js
azure_sql_jobs.JobStepExecutions_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "stepName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * jobExecutionId **required** `string`: The unique id of the job execution
  * stepName **required** `string`: The name of the step.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecution](#jobexecution)

### JobTargetExecutions_ListByStep
Lists the target executions of a job step execution.


```js
azure_sql_jobs.JobTargetExecutions_ListByStep({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "stepName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * jobExecutionId **required** `string`: The id of the job execution
  * stepName **required** `string`: The name of the step.
  * createTimeMin `string`: If specified, only job executions created at or after the specified time are included.
  * createTimeMax `string`: If specified, only job executions created before the specified time are included.
  * endTimeMin `string`: If specified, only job executions completed at or after the specified time are included.
  * endTimeMax `string`: If specified, only job executions completed before the specified time are included.
  * isActive `boolean`: If specified, only active or only completed job executions are included.
  * $skip `integer`: The number of elements in the collection to skip.
  * $top `integer`: The number of elements to return from the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecutionListResult](#jobexecutionlistresult)

### JobTargetExecutions_Get
Gets a target execution.


```js
azure_sql_jobs.JobTargetExecutions_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "stepName": "",
  "targetId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * jobExecutionId **required** `string`: The unique id of the job execution
  * stepName **required** `string`: The name of the step.
  * targetId **required** `string`: The target id.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecution](#jobexecution)

### JobTargetExecutions_ListByJobExecution
Lists target executions for all steps of a job execution.


```js
azure_sql_jobs.JobTargetExecutions_ListByJobExecution({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobExecutionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * jobExecutionId **required** `string`: The id of the job execution
  * createTimeMin `string`: If specified, only job executions created at or after the specified time are included.
  * createTimeMax `string`: If specified, only job executions created before the specified time are included.
  * endTimeMin `string`: If specified, only job executions completed at or after the specified time are included.
  * endTimeMax `string`: If specified, only job executions completed before the specified time are included.
  * isActive `boolean`: If specified, only active or only completed job executions are included.
  * $skip `integer`: The number of elements in the collection to skip.
  * $top `integer`: The number of elements to return from the collection.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecutionListResult](#jobexecutionlistresult)

### JobExecutions_Create
Starts an elastic job execution.


```js
azure_sql_jobs.JobExecutions_Create({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobExecution](#jobexecution)

### JobSteps_ListByJob
Gets all job steps for a job's current version.


```js
azure_sql_jobs.JobSteps_ListByJob({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobStepListResult](#jobsteplistresult)

### JobSteps_Delete
Deletes a job step. This will implicitly create a new job version.


```js
azure_sql_jobs.JobSteps_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "stepName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job.
  * stepName **required** `string`: The name of the job step to delete.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### JobSteps_Get
Gets a job step in a job's current version.


```js
azure_sql_jobs.JobSteps_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "stepName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job.
  * stepName **required** `string`: The name of the job step.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobStep](#jobstep)

### JobSteps_CreateOrUpdate
Creates or updates a job step. This will implicitly create a new job version.


```js
azure_sql_jobs.JobSteps_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "stepName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job.
  * stepName **required** `string`: The name of the job step.
  * parameters **required** [JobStep](#jobstep)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobStep](#jobstep)

### JobVersions_ListByJob
Gets all versions of a job.


```js
azure_sql_jobs.JobVersions_ListByJob({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobVersionListResult](#jobversionlistresult)

### JobVersions_Get
Gets a job version.


```js
azure_sql_jobs.JobVersions_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobVersion": 0,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job.
  * jobVersion **required** `integer`: The version of the job to get.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobVersion](#jobversion)

### JobSteps_ListByVersion
Gets all job steps in the specified job version.


```js
azure_sql_jobs.JobSteps_ListByVersion({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobVersion": 0,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job to get.
  * jobVersion **required** `integer`: The version of the job to get.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobStepListResult](#jobsteplistresult)

### JobSteps_GetByVersion
Gets the specified version of a job step.


```js
azure_sql_jobs.JobSteps_GetByVersion({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "jobName": "",
  "jobVersion": 0,
  "stepName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * jobName **required** `string`: The name of the job.
  * jobVersion **required** `integer`: The version of the job to get.
  * stepName **required** `string`: The name of the job step.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobStep](#jobstep)

### JobTargetGroups_ListByAgent
Gets all target groups in an agent.


```js
azure_sql_jobs.JobTargetGroups_ListByAgent({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobTargetGroupListResult](#jobtargetgrouplistresult)

### JobTargetGroups_Delete
Deletes a target group.


```js
azure_sql_jobs.JobTargetGroups_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "targetGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * targetGroupName **required** `string`: The name of the target group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### JobTargetGroups_Get
Gets a target group.


```js
azure_sql_jobs.JobTargetGroups_Get({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "targetGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * targetGroupName **required** `string`: The name of the target group.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobTargetGroup](#jobtargetgroup)

### JobTargetGroups_CreateOrUpdate
Creates or updates a target group.


```js
azure_sql_jobs.JobTargetGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "serverName": "",
  "jobAgentName": "",
  "targetGroupName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * jobAgentName **required** `string`: The name of the job agent.
  * targetGroupName **required** `string`: The name of the target group.
  * parameters **required** [JobTargetGroup](#jobtargetgroup)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [JobTargetGroup](#jobtargetgroup)



## Definitions

### Job
* Job `object`: A job.
  * properties [JobProperties](#jobproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### JobAgent
* JobAgent `object`: An Azure SQL job agent.
  * properties [JobAgentProperties](#jobagentproperties)
  * sku `object`: An ARM Resource SKU.
    * capacity `integer`: Capacity of the particular SKU.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
    * size `string`: Size of the particular SKU
    * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### JobAgentListResult
* JobAgentListResult `object`: A list of Azure SQL job agents.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [JobAgent](#jobagent)

### JobAgentProperties
* JobAgentProperties `object`: Properties of a job agent.
  * databaseId **required** `string`: Resource ID of the database to store job metadata in.
  * state `string` (values: Creating, Ready, Updating, Deleting, Disabled): The state of the job agent.

### JobAgentUpdate
* JobAgentUpdate `object`: An update to an Azure SQL job agent.
  * tags `object`: Resource tags.

### JobCredential
* JobCredential `object`: A stored credential that can be used by a job to connect to target databases.
  * properties [JobCredentialProperties](#jobcredentialproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### JobCredentialListResult
* JobCredentialListResult `object`: A list of job credentials.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [JobCredential](#jobcredential)

### JobCredentialProperties
* JobCredentialProperties `object`: Properties of a job credential.
  * password **required** `string`: The credential password.
  * username **required** `string`: The credential user name.

### JobExecution
* JobExecution `object`: An execution of a job
  * properties [JobExecutionProperties](#jobexecutionproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### JobExecutionListResult
* JobExecutionListResult `object`: A list of job executions.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [JobExecution](#jobexecution)

### JobExecutionProperties
* JobExecutionProperties `object`: Properties for an Azure SQL Database Elastic job execution.
  * createTime `string`: The time that the job execution was created.
  * currentAttemptStartTime `string`: Start time of the current attempt.
  * currentAttempts `integer`: Number of times the job execution has been attempted.
  * endTime `string`: The time that the job execution completed.
  * jobExecutionId `string`: The unique identifier of the job execution.
  * jobVersion `integer`: The job version number.
  * lastMessage `string`: The last status or error message.
  * lifecycle `string` (values: Created, InProgress, WaitingForChildJobExecutions, WaitingForRetry, Succeeded, SucceededWithSkipped, Failed, TimedOut, Canceled, Skipped): The detailed state of the job execution.
  * provisioningState `string` (values: Created, InProgress, Succeeded, Failed, Canceled): The ARM provisioning state of the job execution.
  * startTime `string`: The time that the job execution started.
  * stepId `integer`: The job step id.
  * stepName `string`: The job step name.
  * target [JobExecutionTarget](#jobexecutiontarget)

### JobExecutionTarget
* JobExecutionTarget `object`: The target that a job execution is executed on.
  * databaseName `string`: The database name.
  * serverName `string`: The server name.
  * type `string` (values: TargetGroup, SqlDatabase, SqlElasticPool, SqlShardMap, SqlServer): The type of the target.

### JobListResult
* JobListResult `object`: A list of jobs.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [Job](#job)

### JobProperties
* JobProperties `object`: Properties of a job.
  * description `string`: User-defined description of the job.
  * schedule [JobSchedule](#jobschedule)
  * version `integer`: The job version number.

### JobSchedule
* JobSchedule `object`: Scheduling properties of a job.
  * enabled `boolean`: Whether or not the schedule is enabled.
  * endTime `string`: Schedule end time.
  * interval `string`: Value of the schedule's recurring interval, if the schedule type is recurring. ISO8601 duration format.
  * startTime `string`: Schedule start time.
  * type `string` (values: Once, Recurring): Schedule interval type

### JobStep
* JobStep `object`: A job step.
  * properties [JobStepProperties](#jobstepproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### JobStepAction
* JobStepAction `object`: The action to be executed by a job step.
  * source `string` (values: Inline): The source of the action to execute.
  * type `string` (values: TSql): Type of action being executed by the job step.
  * value **required** `string`: The action value, for example the text of the T-SQL script to execute.

### JobStepExecutionOptions
* JobStepExecutionOptions `object`: The execution options of a job step.
  * initialRetryIntervalSeconds `integer`: Initial delay between retries for job step execution.
  * maximumRetryIntervalSeconds `integer`: The maximum amount of time to wait between retries for job step execution.
  * retryAttempts `integer`: Maximum number of times the job step will be reattempted if the first attempt fails.
  * retryIntervalBackoffMultiplier `number`: The backoff multiplier for the time between retries.
  * timeoutSeconds `integer`: Execution timeout for the job step.

### JobStepListResult
* JobStepListResult `object`: A list of job steps.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [JobStep](#jobstep)

### JobStepOutput
* JobStepOutput `object`: The output configuration of a job step.
  * credential **required** `string`: The resource ID of the credential to use to connect to the output destination.
  * databaseName **required** `string`: The output destination database.
  * resourceGroupName `string`: The output destination resource group.
  * schemaName `string`: The output destination schema.
  * serverName **required** `string`: The output destination server name.
  * subscriptionId `string`: The output destination subscription id.
  * tableName **required** `string`: The output destination table.
  * type `string` (values: SqlDatabase): The output destination type.

### JobStepProperties
* JobStepProperties `object`: Properties of a job step.
  * action **required** [JobStepAction](#jobstepaction)
  * credential **required** `string`: The resource ID of the job credential that will be used to connect to the targets.
  * executionOptions [JobStepExecutionOptions](#jobstepexecutionoptions)
  * output [JobStepOutput](#jobstepoutput)
  * stepId `integer`: The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
  * targetGroup **required** `string`: The resource ID of the target group that the job step will be executed on.

### JobTarget
* JobTarget `object`: A job target, for example a specific database or a container of databases that is evaluated during job execution.
  * databaseName `string`: The target database name.
  * elasticPoolName `string`: The target elastic pool name.
  * membershipType `string` (values: Include, Exclude): Whether the target is included or excluded from the group.
  * refreshCredential `string`: The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target.
  * serverName `string`: The target server name.
  * shardMapName `string`: The target shard map.
  * type **required** `string` (values: TargetGroup, SqlDatabase, SqlElasticPool, SqlShardMap, SqlServer): The target type.

### JobTargetGroup
* JobTargetGroup `object`: A group of job targets.
  * properties [JobTargetGroupProperties](#jobtargetgroupproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### JobTargetGroupListResult
* JobTargetGroupListResult `object`: A list of target groups.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [JobTargetGroup](#jobtargetgroup)

### JobTargetGroupProperties
* JobTargetGroupProperties `object`: Properties of job target group.
  * members **required** `array`: Members of the target group.
    * items [JobTarget](#jobtarget)

### JobVersion
* JobVersion `object`: A job version.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### JobVersionListResult
* JobVersionListResult `object`: A list of job versions.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [JobVersion](#jobversion)


