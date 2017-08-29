# @datafire/azure_arm_scheduler

Client library for SchedulerManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_scheduler
```

```js
let datafire = require('datafire');
let azure_arm_scheduler = require('@datafire/azure_arm_scheduler').create();

azure_arm_scheduler.JobCollections_ListBySubscription({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### JobCollections_ListBySubscription
Gets all job collections under specified subscription.


```js
azure_arm_scheduler.JobCollections_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* api-version (string) **required** - The API version.

### JobCollections_ListByResourceGroup
Gets all job collections under specified resource group.


```js
azure_arm_scheduler.JobCollections_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* api-version (string) **required** - The API version.

### JobCollections_Delete
Deletes a job collection.


```js
azure_arm_scheduler.JobCollections_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* api-version (string) **required** - The API version.

### JobCollections_Get
Gets a job collection.


```js
azure_arm_scheduler.JobCollections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* api-version (string) **required** - The API version.

### JobCollections_Patch
Patches an existing job collection.


```js
azure_arm_scheduler.JobCollections_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": "",
  "jobCollection": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* api-version (string) **required** - The API version.
* jobCollection (undefined) **required**

### JobCollections_CreateOrUpdate
Provisions a new job collection or updates an existing job collection.


```js
azure_arm_scheduler.JobCollections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": "",
  "jobCollection": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* api-version (string) **required** - The API version.
* jobCollection (undefined) **required**

### JobCollections_Disable
Disables all of the jobs in the job collection.


```js
azure_arm_scheduler.JobCollections_Disable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* api-version (string) **required** - The API version.

### JobCollections_Enable
Enables all of the jobs in the job collection.


```js
azure_arm_scheduler.JobCollections_Enable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* api-version (string) **required** - The API version.

### Jobs_List
Lists all jobs under the specified job collection.


```js
azure_arm_scheduler.Jobs_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of jobs to request, in the of range of [1..100].
* $skip (integer) - The (0-based) index of the job history list from which to begin requesting entries.
* $filter (string) - The filter to apply on the job state.

### Jobs_Delete
Deletes a job.


```js
azure_arm_scheduler.Jobs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* jobName (string) **required** - The job name.
* api-version (string) **required** - The API version.

### Jobs_Get
Gets a job.


```js
azure_arm_scheduler.Jobs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* jobName (string) **required** - The job name.
* api-version (string) **required** - The API version.

### Jobs_Patch
Patches an existing job.


```js
azure_arm_scheduler.Jobs_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": "",
  "job": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* jobName (string) **required** - The job name.
* api-version (string) **required** - The API version.
* job (undefined) **required**

### Jobs_CreateOrUpdate
Provisions a new job or updates an existing job.


```js
azure_arm_scheduler.Jobs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": "",
  "job": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* jobName (string) **required** - The job name.
* api-version (string) **required** - The API version.
* job (undefined) **required**

### Jobs_ListJobHistory
Lists job history.


```js
azure_arm_scheduler.Jobs_ListJobHistory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* jobName (string) **required** - The job name.
* api-version (string) **required** - The API version.
* $top (integer) - the number of job history to request, in the of range of [1..100].
* $skip (integer) - The (0-based) index of the job history list from which to begin requesting entries.
* $filter (string) - The filter to apply on the job state.

### Jobs_Run
Runs a job.


```js
azure_arm_scheduler.Jobs_Run({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* jobCollectionName (string) **required** - The job collection name.
* jobName (string) **required** - The job name.
* api-version (string) **required** - The API version.

