# @datafire/azure_security_tasks

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_tasks
```
```js
let azure_security_tasks = require('@datafire/azure_security_tasks').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### Tasks_ListByHomeRegion
Recommended tasks that will help improve the security of the subscription proactively


```js
azure_security_tasks.Tasks_ListByHomeRegion({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * $filter `string`: OData filter. Optional.

#### Output
* output [SecurityTaskList](#securitytasklist)

### Tasks_GetSubscriptionLevelTask
Recommended tasks that will help improve the security of the subscription proactively


```js
azure_security_tasks.Tasks_GetSubscriptionLevelTask({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "taskName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * taskName **required** `string`: Name of the task object, will be a GUID

#### Output
* output [SecurityTask](#securitytask)

### Tasks_UpdateSubscriptionLevelTaskState
Recommended tasks that will help improve the security of the subscription proactively


```js
azure_security_tasks.Tasks_UpdateSubscriptionLevelTaskState({
  "api-version": "",
  "subscriptionId": "",
  "ascLocation": "",
  "taskName": "",
  "taskUpdateActionType": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * taskName **required** `string`: Name of the task object, will be a GUID
  * taskUpdateActionType **required** `string` (values: Activate, Dismiss, Start, Resolve, Close): Type of the action to do on the task

#### Output
*Output schema unknown*

### Tasks_List
Recommended tasks that will help improve the security of the subscription proactively


```js
azure_security_tasks.Tasks_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * $filter `string`: OData filter. Optional.

#### Output
* output [SecurityTaskList](#securitytasklist)

### Tasks_ListByResourceGroup
Recommended tasks that will help improve the security of the subscription proactively


```js
azure_security_tasks.Tasks_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * $filter `string`: OData filter. Optional.

#### Output
* output [SecurityTaskList](#securitytasklist)

### Tasks_GetResourceGroupLevelTask
Recommended tasks that will help improve the security of the subscription proactively


```js
azure_security_tasks.Tasks_GetResourceGroupLevelTask({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "taskName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * taskName **required** `string`: Name of the task object, will be a GUID

#### Output
* output [SecurityTask](#securitytask)

### Tasks_UpdateResourceGroupLevelTaskState
Recommended tasks that will help improve the security of the subscription proactively


```js
azure_security_tasks.Tasks_UpdateResourceGroupLevelTaskState({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "taskName": "",
  "taskUpdateActionType": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * taskName **required** `string`: Name of the task object, will be a GUID
  * taskUpdateActionType **required** `string` (values: Activate, Dismiss, Start, Resolve, Close): Type of the action to do on the task

#### Output
*Output schema unknown*



## Definitions

### SecurityTask
* SecurityTask `object`: Security task that we recommend to do in order to strengthen security
  * properties [SecurityTaskProperties](#securitytaskproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SecurityTaskList
* SecurityTaskList `object`: List of security task recommendations
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [SecurityTask](#securitytask)

### SecurityTaskParameters
* SecurityTaskParameters `object`: Changing set of properties, depending on the task type that is derived from the name field
  * name `string`: Name of the task type

### SecurityTaskProperties
* SecurityTaskProperties `object`: Describes properties of a task.
  * creationTimeUtc `string`: The time this task was discovered in UTC
  * lastStateChangeTimeUtc `string`: The time this task's details were last changed in UTC
  * securityTaskParameters [SecurityTaskParameters](#securitytaskparameters)
  * state `string`: State of the task (Active, Resolved etc.)
  * subState `string`: Additional data on the state of the task


