# @datafire/azure_arm_machinelearning_webservices

Client library for Azure ML Web Services Management Client

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_machinelearning_webservices
```

```js
let datafire = require('datafire');
let azure_arm_machinelearning_webservices = require('@datafire/azure_arm_machinelearning_webservices').actions;
let context = new datafire.Context();

azure_arm_machinelearning_webservices.WebServices_List({}, context).then(data => {
  console.log(data);
})
```

## Description
These APIs allow end users to operate on Azure Machine Learning Web Services resources. They support the following operations:<ul><li>Create or update a web service</li><li>Get a web service</li><li>Patch a web service</li><li>Delete a web service</li><li>Get All Web Services in a Resource Group </li><li>Get All Web Services in a Subscription</li><li>Get Web Services Keys</li></ul>

## Actions
### WebServices_List
Gets the web services in the specified subscription.


```js
azure_arm_machinelearning_webservices.WebServices_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* $skiptoken (string) - Continuation token for pagination.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* subscriptionId (string) **required** - The Azure subscription ID.

### WebServices_ListByResourceGroup
Gets the web services in the specified resource group.


```js
azure_arm_machinelearning_webservices.WebServices_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group in which the web service is located.
* $skiptoken (string) - Continuation token for pagination.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* subscriptionId (string) **required** - The Azure subscription ID.

### WebServices_Remove
Deletes the specified web service.


```js
azure_arm_machinelearning_webservices.WebServices_Remove({
  "resourceGroupName": "",
  "webServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group in which the web service is located.
* webServiceName (string) **required** - The name of the web service.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* subscriptionId (string) **required** - The Azure subscription ID.

### WebServices_Get
Gets the Web Service Definiton as specified by a subscription, resource group, and name. Note that the storage credentials and web service keys are not returned by this call. To get the web service access keys, call List Keys.


```js
azure_arm_machinelearning_webservices.WebServices_Get({
  "resourceGroupName": "",
  "webServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group in which the web service is located.
* webServiceName (string) **required** - The name of the web service.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* subscriptionId (string) **required** - The Azure subscription ID.

### WebServices_Patch
Modifies an existing web service resource. The PATCH API call is an asynchronous operation. To determine whether it has completed successfully, you must perform a Get operation.


```js
azure_arm_machinelearning_webservices.WebServices_Patch({
  "resourceGroupName": "",
  "webServiceName": "",
  "patchPayload": {
    "properties": {
      "packageType": ""
    }
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group in which the web service is located.
* webServiceName (string) **required** - The name of the web service.
* patchPayload (object) **required** - Instance of an Azure ML web service resource.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* subscriptionId (string) **required** - The Azure subscription ID.

### WebServices_CreateOrUpdate
Create or update a web service. This call will overwrite an existing web service. Note that there is no warning or confirmation. This is a nonrecoverable operation. If your intent is to create a new web service, call the Get operation first to verify that it does not exist.


```js
azure_arm_machinelearning_webservices.WebServices_CreateOrUpdate({
  "resourceGroupName": "",
  "webServiceName": "",
  "createOrUpdatePayload": {
    "properties": {
      "packageType": ""
    }
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group in which the web service is located.
* webServiceName (string) **required** - The name of the web service.
* createOrUpdatePayload (object) **required** - Instance of an Azure ML web service resource.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* subscriptionId (string) **required** - The Azure subscription ID.

### WebServices_ListKeys
Gets the access keys for the specified web service.


```js
azure_arm_machinelearning_webservices.WebServices_ListKeys({
  "resourceGroupName": "",
  "webServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group in which the web service is located.
* webServiceName (string) **required** - The name of the web service.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* subscriptionId (string) **required** - The Azure subscription ID.

