# @datafire/azure_appplatform

Client library for AppPlatformManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_appplatform
```
```js
let azure_appplatform = require('@datafire/azure_appplatform').create({
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

REST API for Azure Spring Cloud

## Actions

### Operations_List
Lists all of the available REST API operations of the Microsoft.AppPlatform provider.


```js
azure_appplatform.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.

#### Output
* output [AvailableOperations](#availableoperations)

### Services_ListBySubscription
Handles requests to list all resources in a subscription.


```js
azure_appplatform.Services_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceResourceList](#serviceresourcelist)

### Services_CheckNameAvailability
Checks that the resource name is valid and is not already in use.


```js
azure_appplatform.Services_CheckNameAvailability({
  "location": "",
  "api-version": "",
  "subscriptionId": "",
  "availabilityParameters": {
    "type": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * location **required** `string`: the region
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * availabilityParameters **required** [NameAvailabilityParameters](#nameavailabilityparameters)

#### Output
* output [NameAvailability](#nameavailability)

### Services_List
Handles requests to list all resources in a resource group.


```js
azure_appplatform.Services_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ServiceResourceList](#serviceresourcelist)

### Services_Delete
Operation to delete a Service.


```js
azure_appplatform.Services_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.

#### Output
*Output schema unknown*

### Services_Get
Get a Service and its properties.


```js
azure_appplatform.Services_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.

#### Output
* output [ServiceResource](#serviceresource)

### Services_Update
Operation to update an exiting Service.


```js
azure_appplatform.Services_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "resource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * resource **required** [ServiceResource](#serviceresource)

#### Output
* output [ServiceResource](#serviceresource)

### Services_CreateOrUpdate
Create a new Service or update an exiting Service.


```js
azure_appplatform.Services_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "resource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * resource **required** [ServiceResource](#serviceresource)

#### Output
* output [ServiceResource](#serviceresource)

### Apps_List
Handles requests to list all resources in a Service.


```js
azure_appplatform.Apps_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.

#### Output
* output [AppResourceCollection](#appresourcecollection)

### Apps_Delete
Operation to delete an App.


```js
azure_appplatform.Apps_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.

#### Output
*Output schema unknown*

### Apps_Get
Get an App and its properties.


```js
azure_appplatform.Apps_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": ""
}, context)
```

#### Input
* input `object`
  * syncStatus `string`: Indicates whether sync status
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.

#### Output
* output [AppResource](#appresource)

### Apps_Update
Operation to update an exiting App.


```js
azure_appplatform.Apps_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "appResource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * appResource **required** [AppResource](#appresource)

#### Output
* output [AppResource](#appresource)

### Apps_CreateOrUpdate
Create a new App or update an exiting App.


```js
azure_appplatform.Apps_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "appResource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * appResource **required** [AppResource](#appresource)

#### Output
* output [AppResource](#appresource)

### Bindings_List
Handles requests to list all resources in an App.


```js
azure_appplatform.Bindings_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.

#### Output
* output [BindingResourceCollection](#bindingresourcecollection)

### Bindings_Delete
Operation to delete a Binding.


```js
azure_appplatform.Bindings_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "bindingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * bindingName **required** `string`: The name of the Binding resource.

#### Output
*Output schema unknown*

### Bindings_Get
Get a Binding and its properties.


```js
azure_appplatform.Bindings_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "bindingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * bindingName **required** `string`: The name of the Binding resource.

#### Output
* output [BindingResource](#bindingresource)

### Bindings_Update
Operation to update an exiting Binding.


```js
azure_appplatform.Bindings_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "bindingName": "",
  "bindingResource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * bindingName **required** `string`: The name of the Binding resource.
  * bindingResource **required** [BindingResource](#bindingresource)

#### Output
* output [BindingResource](#bindingresource)

### Bindings_CreateOrUpdate
Create a new Binding or update an exiting Binding.


```js
azure_appplatform.Bindings_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "bindingName": "",
  "bindingResource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * bindingName **required** `string`: The name of the Binding resource.
  * bindingResource **required** [BindingResource](#bindingresource)

#### Output
* output [BindingResource](#bindingresource)

### Deployments_List
Handles requests to list all resources in an App.


```js
azure_appplatform.Deployments_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": ""
}, context)
```

#### Input
* input `object`
  * version `array`: Version of the deployments to be listed
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.

#### Output
* output [DeploymentResourceCollection](#deploymentresourcecollection)

### Deployments_Delete
Operation to delete a Deployment.


```js
azure_appplatform.Deployments_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.

#### Output
*Output schema unknown*

### Deployments_Get
Get a Deployment and its properties.


```js
azure_appplatform.Deployments_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.

#### Output
* output [DeploymentResource](#deploymentresource)

### Deployments_Update
Operation to update an exiting Deployment.


```js
azure_appplatform.Deployments_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": "",
  "deploymentResource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.
  * deploymentResource **required** [DeploymentResource](#deploymentresource)

#### Output
* output [DeploymentResource](#deploymentresource)

### Deployments_CreateOrUpdate
Create a new Deployment or update an exiting Deployment.


```js
azure_appplatform.Deployments_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": "",
  "deploymentResource": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.
  * deploymentResource **required** [DeploymentResource](#deploymentresource)

#### Output
* output [DeploymentResource](#deploymentresource)

### Deployments_GetLogFileUrl
Get deployment log file URL


```js
azure_appplatform.Deployments_GetLogFileUrl({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.

#### Output
* output [LogFileUrlResponse](#logfileurlresponse)

### Deployments_Restart
Restart the deployment.


```js
azure_appplatform.Deployments_Restart({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.

#### Output
*Output schema unknown*

### Deployments_Start
Start the deployment.


```js
azure_appplatform.Deployments_Start({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.

#### Output
*Output schema unknown*

### Deployments_Stop
Stop the deployment.


```js
azure_appplatform.Deployments_Stop({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": "",
  "deploymentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.
  * deploymentName **required** `string`: The name of the Deployment resource.

#### Output
*Output schema unknown*

### Apps_GetResourceUploadUrl
Get an resource upload URL for an App, which may be artifacts or source archive.


```js
azure_appplatform.Apps_GetResourceUploadUrl({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "appName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * appName **required** `string`: The name of the App resource.

#### Output
* output [ResourceUploadDefinition](#resourceuploaddefinition)

### Deployments_ListClusterAllDeployments
List deployments for a certain service


```js
azure_appplatform.Deployments_ListClusterAllDeployments({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * version `array`: Version of the deployments to be listed
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.

#### Output
* output [DeploymentResourceCollection](#deploymentresourcecollection)

### Services_DisableTestEndpoint



```js
azure_appplatform.Services_DisableTestEndpoint({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.

#### Output
*Output schema unknown*

### Services_EnableTestEndpoint



```js
azure_appplatform.Services_EnableTestEndpoint({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.

#### Output
* output [TestKeys](#testkeys)

### Services_ListTestKeys
List test keys for a Service.


```js
azure_appplatform.Services_ListTestKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.

#### Output
* output [TestKeys](#testkeys)

### Services_RegenerateTestKey
Regenerate a test key for a Service.


```js
azure_appplatform.Services_RegenerateTestKey({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "regenerateTestKeyRequest": {
    "keyType": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-01-preview): Client Api Version.
  * subscriptionId **required** `string`: Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serviceName **required** `string`: The name of the Service resource.
  * regenerateTestKeyRequest **required** [RegenerateTestKeyRequestPayload](#regeneratetestkeyrequestpayload)

#### Output
* output [TestKeys](#testkeys)



## Definitions

### AppResource
* AppResource `object`: App resource payload
  * properties [AppResourceProperties](#appresourceproperties)
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### AppResourceCollection
* AppResourceCollection `object`: Object that includes an array of App resources and a possible link for next set
  * nextLink `string`: URL client should use to fetch the next page (per server side paging).
  * value `array`: Collection of App resources
    * items [AppResource](#appresource)

### AppResourceProperties
* AppResourceProperties `object`: App resource properties payload
  * activeDeploymentName `string`: Name of the active deployment of the App
  * createdTime `string`: Date time when the resource is created
  * persistentDisk [PersistentDisk](#persistentdisk)
  * provisioningState `string` (values: Succeeded, Failed, Creating, Updating): Provisioning state of the App
  * public `boolean`: Indicates whether the App exposes public endpoint
  * temporaryDisk [TemporaryDisk](#temporarydisk)
  * url `string`: URL of the App

### AvailableOperations
* AvailableOperations `object`: Available operations of the service
  * nextLink `string`: URL client should use to fetch the next page (per server side paging).
  * value `array`: Collection of available operation details
    * items [OperationDetail](#operationdetail)

### BindingResource
* BindingResource `object`: Binding resource payload
  * properties [BindingResourceProperties](#bindingresourceproperties)
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### BindingResourceCollection
* BindingResourceCollection `object`: Object that includes an array of Binding resources and a possible link for next set
  * nextLink `string`: URL client should use to fetch the next page (per server side paging).
  * value `array`: Collection of Binding resources
    * items [BindingResource](#bindingresource)

### BindingResourceProperties
* BindingResourceProperties `object`: Binding resource properties payload
  * bindingParameters `object`: Binding parameters of the Binding resource
  * createdAt `string`: Creation time of the Binding resource
  * generatedProperties `string`: The generated Spring Boot property file for this binding. The secret will be deducted.
  * key `string`: The key of the bound resource
  * resourceId `string`: The Azure resource id of the bound resource
  * resourceName `string`: The name of the bound resource
  * resourceType `string`: The standard Azure resource type of the bound resource
  * updatedAt `string`: Update time of the Binding resource

### CloudError
* CloudError `object`: An error response from the service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### ClusterResourceProperties
* ClusterResourceProperties `object`: Service properties payload
  * configServerProperties [ConfigServerProperties](#configserverproperties)
  * provisioningState `string` (values: Creating, Updating, Deleting, Deleted, Succeeded, Failed, Moving, Moved, MoveFailed): Provisioning state of the Service
  * serviceId `string`: ServiceInstanceEntity GUID which uniquely identifies a created resource
  * trace [TraceProperties](#traceproperties)
  * version `integer`: Version of the Service

### ConfigServerGitProperty
* ConfigServerGitProperty `object`: Property of git.
  * hostKey `string`: Public sshKey of git repository.
  * hostKeyAlgorithm `string`: SshKey algorithm of git repository.
  * label `string`: Label of the repository
  * password `string`: Password of git repository basic auth.
  * privateKey `string`: Private sshKey algorithm of git repository.
  * repositories `array`: Repositories of git.
    * items [GitPatternRepository](#gitpatternrepository)
  * searchPaths `array`: Searching path of the repository
    * items `string`
  * strictHostKeyChecking `boolean`: Strict host key checking or not.
  * uri **required** `string`: URI of the repository
  * username `string`: Username of git repository basic auth.

### ConfigServerProperties
* ConfigServerProperties `object`: Config server git properties payload
  * configServer [ConfigServerSettings](#configserversettings)
  * error [Error](#error)
  * state `string` (values: NotAvailable, Deleted, Failed, Succeeded, Updating): State of the config server.

### ConfigServerSettings
* ConfigServerSettings `object`: The settings of config server.
  * gitProperty [ConfigServerGitProperty](#configservergitproperty)

### DeploymentInstance
* DeploymentInstance `object`: Deployment instance payload
  * discoveryStatus `string`: Discovery status of the deployment instance
  * name `string`: Name of the deployment instance
  * reason `string`: Failed reason of the deployment instance
  * status `string`: Status of the deployment instance

### DeploymentResource
* DeploymentResource `object`: Deployment resource payload
  * properties [DeploymentResourceProperties](#deploymentresourceproperties)
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### DeploymentResourceCollection
* DeploymentResourceCollection `object`: Object that includes an array of App resources and a possible link for next set
  * nextLink `string`: URL client should use to fetch the next page (per server side paging).
  * value `array`: Collection of Deployment resources
    * items [DeploymentResource](#deploymentresource)

### DeploymentResourceProperties
* DeploymentResourceProperties `object`: Deployment resource properties payload
  * active `boolean`: Indicates whether the Deployment is active
  * appName `string`: App name of the deployment
  * createdTime `string`: Date time when the resource is created
  * deploymentSettings [DeploymentSettings](#deploymentsettings)
  * instances `array`: Collection of instances belong to the Deployment
    * items [DeploymentInstance](#deploymentinstance)
  * provisioningState `string` (values: Creating, Updating, Succeeded, Failed): Provisioning state of the Deployment
  * source [UserSourceInfo](#usersourceinfo)
  * status `string` (values: Unknown, Stopped, Running, Failed, Allocating, Upgrading, Compiling): Status of the Deployment

### DeploymentSettings
* DeploymentSettings `object`: Deployment settings payload
  * cpu `integer`: Required CPU
  * environmentVariables `object`: Collection of environment variables
  * instanceCount `integer`: Instance count
  * jvmOptions `string`: JVM parameter
  * memoryInGB `integer`: Required Memory size in GB
  * runtimeVersion `string` (values: Java_8, Java_11): Runtime version

### Error
* Error `object`: The error code compose of code and message.
  * code `string`: The code of error.
  * message `string`: The message of error.

### GitPatternRepository
* GitPatternRepository `object`: Git repository property payload
  * hostKey `string`: Public sshKey of git repository.
  * hostKeyAlgorithm `string`: SshKey algorithm of git repository.
  * label `string`: Label of the repository
  * name **required** `string`: Name of the repository
  * password `string`: Password of git repository basic auth.
  * pattern `array`: Collection of pattern of the repository
    * items `string`
  * privateKey `string`: Private sshKey algorithm of git repository.
  * searchPaths `array`: Searching path of the repository
    * items `string`
  * strictHostKeyChecking `boolean`: Strict host key checking or not.
  * uri **required** `string`: URI of the repository
  * username `string`: Username of git repository basic auth.

### LogFileUrlResponse
* LogFileUrlResponse `object`: Log file URL payload
  * url **required** `string`: URL of the log file

### LogSpecification
* LogSpecification `object`: Specifications of the Log for Azure Monitoring
  * blobDuration `string`: Blob duration of the log
  * displayName `string`: Localized friendly display name of the log
  * name `string`: Name of the log

### MetricDimension
* MetricDimension `object`: Specifications of the Dimension of metrics
  * displayName `string`: Localized friendly display name of the dimension
  * name `string`: Name of the dimension

### MetricSpecification
* MetricSpecification `object`: Specifications of the Metrics for Azure Monitoring
  * aggregationType `string`: Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count.
  * category `string`: Name of the metric category that the metric belongs to. A metric can only belong to a single category.
  * dimensions `array`: Dimensions of the metric
    * items [MetricDimension](#metricdimension)
  * displayDescription `string`: Localized friendly description of the metric
  * displayName `string`: Localized friendly display name of the metric
  * fillGapWithZero `boolean`: Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published.
  * name `string`: Name of the metric
  * supportedAggregationTypes `array`: Supported aggregation types
    * items `string`
  * supportedTimeGrainTypes `array`: Supported time grain types
    * items `string`
  * unit `string`: Unit that makes sense for the metric

### NameAvailability
* NameAvailability `object`: Name availability result payload
  * message `string`: Message why the name is not available
  * nameAvailable `boolean`: Indicates whether the name is available
  * reason `string`: Reason why the name is not available

### NameAvailabilityParameters
* NameAvailabilityParameters `object`: Name availability parameters payload
  * name **required** `string`: Name to be checked
  * type **required** `string`: Type of the resource to check name availability

### OperationDetail
* OperationDetail `object`: Operation detail payload
  * dataAction `boolean`: Indicates whether the operation is a data action
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation
  * origin `string`: Origin of the operation
  * properties [OperationProperties](#operationproperties)

### OperationDisplay
* OperationDisplay `object`: Operation display payload
  * description `string`: Localized friendly description for the operation
  * operation `string`: Localized friendly name for the operation
  * provider `string`: Resource provider of the operation
  * resource `string`: Resource of the operation

### OperationProperties
* OperationProperties `object`: Extra Operation properties
  * serviceSpecification [ServiceSpecification](#servicespecification)

### PersistentDisk
* PersistentDisk `object`: Persistent disk payload
  * mountPath `string`: Mount path of the persistent disk
  * sizeInGB `integer`: Size of the persistent disk in GB
  * usedInGB `integer`: Size of the used persistent disk in GB

### ProxyResource
* ProxyResource `object`: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### RegenerateTestKeyRequestPayload
* RegenerateTestKeyRequestPayload `object`: Regenerate test key request payload
  * keyType **required** `string` (values: Primary, Secondary): Type of the test key

### Resource
* Resource `object`: The core properties of ARM resources.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ResourceUploadDefinition
* ResourceUploadDefinition `object`: Resource upload definition payload
  * relativePath `string`: Source relative path
  * uploadUrl `string`: Upload URL

### ServiceResource
* ServiceResource `object`: Service resource
  * properties [ClusterResourceProperties](#clusterresourceproperties)
  * location `string`: The GEO location of the resource.
  * tags `object`: Tags of the service which is a list of key value pairs that describe the resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ServiceResourceList
* ServiceResourceList `object`: Object that includes an array of Service resources and a possible link for next set
  * nextLink `string`: URL client should use to fetch the next page (per server side paging).
  * value `array`: Collection of Service resources
    * items [ServiceResource](#serviceresource)

### ServiceSpecification
* ServiceSpecification `object`: Service specification payload
  * logSpecifications `array`: Specifications of the Log for Azure Monitoring
    * items [LogSpecification](#logspecification)
  * metricSpecifications `array`: Specifications of the Metrics for Azure Monitoring
    * items [MetricSpecification](#metricspecification)

### TemporaryDisk
* TemporaryDisk `object`: Temporary disk payload
  * mountPath `string`: Mount path of the temporary disk
  * sizeInGB `integer`: Size of the temporary disk in GB

### TestKeys
* TestKeys `object`: Test keys payload
  * enabled `boolean`: Indicates whether the test endpoint feature enabled or not
  * primaryKey `string`: Primary key
  * primaryTestEndpoint `string`: Primary test endpoint
  * secondaryKey `string`: Secondary key
  * secondaryTestEndpoint `string`: Secondary test endpoint

### TraceProperties
* TraceProperties `object`: Trace properties payload
  * appInsightInstrumentationKey `string`: Target application insight instrumentation key
  * enabled `boolean`: Indicates whether enable the tracing functionality
  * error [Error](#error)
  * state `string` (values: NotAvailable, Failed, Succeeded, Updating): State of the trace proxy.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource.
  * location `string`: The GEO location of the resource.
  * tags `object`: Tags of the service which is a list of key value pairs that describe the resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### UserSourceInfo
* UserSourceInfo `object`: Source information for a deployment
  * artifactSelector `string`: Selector for the artifact to be used for the deployment for multi-module projects. This should be
  * relativePath `string`: Relative path of the storage which stores the source
  * type `string` (values: Jar, Source): Type of the source uploaded
  * version `string`: Version of the source


