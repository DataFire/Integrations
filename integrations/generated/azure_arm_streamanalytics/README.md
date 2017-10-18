# @datafire/azure_arm_streamanalytics

Client library for StreamAnalyticsManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_streamanalytics
```

```js
let datafire = require('datafire');
let azure_arm_streamanalytics = require('@datafire/azure_arm_streamanalytics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_streamanalytics.Functions_ListByStreamingJob({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Functions_ListByStreamingJob
Lists all of the functions under the specified streaming job.


```js
azure_arm_streamanalytics.Functions_ListByStreamingJob({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Parameters
* $select (string) - The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or “*” to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* jobName (string) **required** - The name of the streaming job.

### Functions_Delete
Deletes a function from the streaming job.


```js
azure_arm_streamanalytics.Functions_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* jobName (string) **required** - The name of the streaming job.
* functionName (string) **required** - The name of the function.

### Functions_Get
Gets details about the specified function.


```js
azure_arm_streamanalytics.Functions_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* jobName (string) **required** - The name of the streaming job.
* functionName (string) **required** - The name of the function.

### Functions_Update
Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.


```js
azure_arm_streamanalytics.Functions_Update({
  "function": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Parameters
* function (undefined) **required** - A function object, containing all information associated with the named function. All functions are contained under a streaming job.
* If-Match (string) - The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* jobName (string) **required** - The name of the streaming job.
* functionName (string) **required** - The name of the function.

### Functions_CreateOrReplace
Creates a function or replaces an already existing function under an existing streaming job.


```js
azure_arm_streamanalytics.Functions_CreateOrReplace({
  "function": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Parameters
* function (undefined) **required** - A function object, containing all information associated with the named function. All functions are contained under a streaming job.
* If-Match (string) - The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
* If-None-Match (string) - Set to '*' to allow a new function to be created, but to prevent updating an existing function. Other values will result in a 412 Pre-condition Failed response.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* jobName (string) **required** - The name of the streaming job.
* functionName (string) **required** - The name of the function.

### Functions_RetrieveDefaultDefinition
Retrieves the default definition of a function based on the parameters specified.


```js
azure_arm_streamanalytics.Functions_RetrieveDefaultDefinition({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Parameters
* functionRetrieveDefaultDefinitionParameters (undefined) - Parameters used to specify the type of function to retrieve the default definition for.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* jobName (string) **required** - The name of the streaming job.
* functionName (string) **required** - The name of the function.

### Functions_Test
Tests if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct.


```js
azure_arm_streamanalytics.Functions_Test({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Parameters
* function (undefined) - A function object, containing all information associated with the named function. All functions are contained under a streaming job.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
* jobName (string) **required** - The name of the streaming job.
* functionName (string) **required** - The name of the function.

