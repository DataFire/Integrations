# @datafire/azure_operationsmanagement_operationsmanagement

Client library for Azure Log Analytics - Operations Management

## Installation and Usage
```bash
npm install --save @datafire/azure_operationsmanagement_operationsmanagement
```
```js
let azure_operationsmanagement_operationsmanagement = require('@datafire/azure_operationsmanagement_operationsmanagement').create({
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

Azure Log Analytics API reference for Solution.

## Actions

### Operations_List
Lists all of the available OperationsManagement Rest API operations.


```js
azure_operationsmanagement_operationsmanagement.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### ManagementAssociations_ListBySubscription
Retrieves the ManagementAssociations list.


```js
azure_operationsmanagement_operationsmanagement.ManagementAssociations_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ManagementAssociationPropertiesList](#managementassociationpropertieslist)

### ManagementConfigurations_ListBySubscription
Retrieves the ManagementConfigurations list.


```js
azure_operationsmanagement_operationsmanagement.ManagementConfigurations_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ManagementConfigurationPropertiesList](#managementconfigurationpropertieslist)

### Solutions_ListBySubscription
Retrieves the solution list. It will retrieve both first party and third party solutions


```js
azure_operationsmanagement_operationsmanagement.Solutions_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SolutionPropertiesList](#solutionpropertieslist)

### ManagementConfigurations_Delete
Deletes the ManagementConfiguration in the subscription.


```js
azure_operationsmanagement_operationsmanagement.ManagementConfigurations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managementConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * managementConfigurationName **required** `string`: User Management Configuration Name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ManagementConfigurations_Get
Retrieves the user ManagementConfiguration.


```js
azure_operationsmanagement_operationsmanagement.ManagementConfigurations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "managementConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * managementConfigurationName **required** `string`: User Management Configuration Name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ManagementConfiguration](#managementconfiguration)

### ManagementConfigurations_CreateOrUpdate
Creates or updates the ManagementConfiguration.


```js
azure_operationsmanagement_operationsmanagement.ManagementConfigurations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "managementConfigurationName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: Client Api Version.
  * managementConfigurationName **required** `string`: User Management Configuration Name.
  * parameters **required** [ManagementConfiguration](#managementconfiguration)

#### Output
* output [ManagementConfiguration](#managementconfiguration)

### Solutions_ListByResourceGroup
Retrieves the solution list. It will retrieve both first party and third party solutions


```js
azure_operationsmanagement_operationsmanagement.Solutions_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SolutionPropertiesList](#solutionpropertieslist)

### Solutions_Delete
Deletes the solution in the subscription.


```js
azure_operationsmanagement_operationsmanagement.Solutions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * solutionName **required** `string`: User Solution Name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Solutions_Get
Retrieves the user solution.


```js
azure_operationsmanagement_operationsmanagement.Solutions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * solutionName **required** `string`: User Solution Name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Solution](#solution)

### Solutions_Update
Patch a Solution. Only updating tags supported.


```js
azure_operationsmanagement_operationsmanagement.Solutions_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "solutionName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: Client Api Version.
  * solutionName **required** `string`: User Solution Name.
  * parameters **required** [SolutionPatch](#solutionpatch)

#### Output
* output [Solution](#solution)

### Solutions_CreateOrUpdate
Creates or updates the Solution.


```js
azure_operationsmanagement_operationsmanagement.Solutions_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "solutionName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: Client Api Version.
  * solutionName **required** `string`: User Solution Name.
  * parameters **required** [Solution](#solution)

#### Output
* output [Solution](#solution)

### ManagementAssociations_Delete
Deletes the ManagementAssociation in the subscription.


```js
azure_operationsmanagement_operationsmanagement.ManagementAssociations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "managementAssociationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * providerName **required** `string`: Provider name for the parent resource.
  * resourceType **required** `string`: Resource type for the parent resource
  * resourceName **required** `string`: Parent resource name.
  * managementAssociationName **required** `string`: User ManagementAssociation Name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ManagementAssociations_Get
Retrieves the user ManagementAssociation.


```js
azure_operationsmanagement_operationsmanagement.ManagementAssociations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "managementAssociationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * providerName **required** `string`: Provider name for the parent resource.
  * resourceType **required** `string`: Resource type for the parent resource
  * resourceName **required** `string`: Parent resource name.
  * managementAssociationName **required** `string`: User ManagementAssociation Name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ManagementAssociation](#managementassociation)

### ManagementAssociations_CreateOrUpdate
Creates or updates the ManagementAssociation.


```js
azure_operationsmanagement_operationsmanagement.ManagementAssociations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "providerName": "",
  "resourceType": "",
  "resourceName": "",
  "managementAssociationName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: Client Api Version.
  * providerName **required** `string`: Provider name for the parent resource.
  * resourceType **required** `string`: Resource type for the parent resource
  * resourceName **required** `string`: Parent resource name.
  * managementAssociationName **required** `string`: User ManagementAssociation Name.
  * parameters **required** [ManagementAssociation](#managementassociation)

#### Output
* output [ManagementAssociation](#managementassociation)



## Definitions

### ArmTemplateParameter
* ArmTemplateParameter `object`: Parameter to pass to ARM template
  * name `string`: name of the parameter.
  * value `string`: value for the parameter. In Jtoken 

### CodeMessageError
* CodeMessageError `object`: The error body contract.
  * error `object`: The error details for a failed request.
    * code `string`: The error type.
    * message `string`: The error message.

### ManagementAssociation
* ManagementAssociation `object`: The container for solution.
  * id `string`: Resource ID.
  * location `string`: Resource location
  * name `string`: Resource name.
  * properties [ManagementAssociationProperties](#managementassociationproperties)
  * type `string`: Resource type.

### ManagementAssociationProperties
* ManagementAssociationProperties `object`: ManagementAssociation properties supported by the OperationsManagement resource provider.
  * applicationId **required** `string`: The applicationId of the appliance for this association.

### ManagementAssociationPropertiesList
* ManagementAssociationPropertiesList `object`: the list of ManagementAssociation response
  * value `array`: List of Management Association properties within the subscription.
    * items [ManagementAssociation](#managementassociation)

### ManagementConfiguration
* ManagementConfiguration `object`: The container for solution.
  * id `string`: Resource ID.
  * location `string`: Resource location
  * name `string`: Resource name.
  * properties [ManagementConfigurationProperties](#managementconfigurationproperties)
  * type `string`: Resource type.

### ManagementConfigurationProperties
* ManagementConfigurationProperties `object`: ManagementConfiguration properties supported by the OperationsManagement resource provider.
  * applicationId `string`: The applicationId of the appliance for this Management.
  * parameters **required** `array`: Parameters to run the ARM template
    * items [ArmTemplateParameter](#armtemplateparameter)
  * parentResourceType **required** `string`: The type of the parent resource.
  * provisioningState `string`: The provisioning state for the ManagementConfiguration.
  * template **required** `object`: The Json object containing the ARM template to deploy

### ManagementConfigurationPropertiesList
* ManagementConfigurationPropertiesList `object`: the list of ManagementConfiguration response
  * value `array`: List of Management Configuration properties within the subscription.
    * items [ManagementConfiguration](#managementconfiguration)

### Operation
* Operation `object`: Supported operation of OperationsManagement resource provider.
  * display `object`: Display metadata associated with the operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Service provider: Microsoft OperationsManagement.
    * resource `string`: Resource on which the operation is performed etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list solution operations.
  * value `array`: List of solution operations supported by the OperationsManagement resource provider.
    * items [Operation](#operation)

### Solution
* Solution `object`: The container for solution.
  * id `string`: Resource ID.
  * location `string`: Resource location
  * name `string`: Resource name.
  * plan [SolutionPlan](#solutionplan)
  * properties [SolutionProperties](#solutionproperties)
  * tags `object`: Resource tags
  * type `string`: Resource type.

### SolutionPatch
* SolutionPatch `object`: The properties of a Solution that can be patched.
  * tags `object`: Resource tags

### SolutionPlan
* SolutionPlan `object`: Plan for solution object supported by the OperationsManagement resource provider.
  * name `string`: name of the solution to be created. For Microsoft published solution it should be in the format of solutionType(workspaceName). SolutionType part is case sensitive. For third party solution, it can be anything.
  * product `string`: name of the solution to enabled/add. For Microsoft published gallery solution it should be in the format of OMSGallery/<solutionType>. This is case sensitive
  * promotionCode `string`: promotionCode, Not really used now, can you left as empty
  * publisher `string`: Publisher name. For gallery solution, it is Microsoft.

### SolutionProperties
* SolutionProperties `object`: Solution properties supported by the OperationsManagement resource provider.
  * containedResources `array`: The azure resources that will be contained within the solutions. They will be locked and gets deleted automatically when the solution is deleted.
    * items `string`: the azure resourceId of the resource.
  * provisioningState `string`: The provisioning state for the solution.
  * referencedResources `array`: The resources that will be referenced from this solution. Deleting any of those solution out of band will break the solution.
    * items `string`: the azure resourceId of the resource.
  * workspaceResourceId **required** `string`: The azure resourceId for the workspace where the solution will be deployed/enabled.

### SolutionPropertiesList
* SolutionPropertiesList `object`: the list of solution response
  * value `array`: List of solution properties within the subscription.
    * items [Solution](#solution)


