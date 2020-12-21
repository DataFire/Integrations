# @datafire/azure_devspaces

Client library for DevSpacesManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_devspaces
```
```js
let azure_devspaces = require('@datafire/azure_devspaces').create({
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

Dev Spaces REST API

## Actions

### Operations_List
Lists all the supported operations by the Microsoft.DevSpaces resource provider along with their description.


```js
azure_devspaces.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [ResourceProviderOperationList](#resourceprovideroperationlist)

### Controllers_List
Lists all the Azure Dev Spaces Controllers with their properties in the subscription.


```js
azure_devspaces.Controllers_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Azure subscription ID.

#### Output
* output [ControllerList](#controllerlist)

### Controllers_ListByResourceGroup
Lists all the Azure Dev Spaces Controllers with their properties in the specified resource group and subscription.


```js
azure_devspaces.Controllers_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group to which the resource belongs.

#### Output
* output [ControllerList](#controllerlist)

### Controllers_Delete
Deletes an existing Azure Dev Spaces Controller.


```js
azure_devspaces.Controllers_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group to which the resource belongs.
  * name **required** `string`: Name of the resource.

#### Output
*Output schema unknown*

### Controllers_Get
Gets the properties for an Azure Dev Spaces Controller.


```js
azure_devspaces.Controllers_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group to which the resource belongs.
  * name **required** `string`: Name of the resource.

#### Output
* output [Controller](#controller)

### Controllers_Update
Updates the properties of an existing Azure Dev Spaces Controller with the specified update parameters.


```js
azure_devspaces.Controllers_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "controllerUpdateParameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group to which the resource belongs.
  * name **required** `string`: Name of the resource.
  * controllerUpdateParameters **required** [ControllerUpdateParameters](#controllerupdateparameters)

#### Output
* output [Controller](#controller)

### Controllers_Create
Creates an Azure Dev Spaces Controller with the specified create parameters.


```js
azure_devspaces.Controllers_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "controller": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group to which the resource belongs.
  * name **required** `string`: Name of the resource.
  * controller **required** [Controller](#controller)

#### Output
* output [Controller](#controller)

### Controllers_ListConnectionDetails
Lists connection details for the underlying container resources of an Azure Dev Spaces Controller.


```js
azure_devspaces.Controllers_ListConnectionDetails({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group to which the resource belongs.
  * name **required** `string`: Name of the resource.

#### Output
* output [ControllerConnectionDetailsList](#controllerconnectiondetailslist)

### ContainerHostMappings_GetContainerHostMapping
Returns container host mapping object for a container host resource ID if an associated controller exists.


```js
azure_devspaces.ContainerHostMappings_GetContainerHostMapping({
  "api-version": "",
  "containerHostMapping": null,
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * containerHostMapping **required** [ContainerHostMapping](#containerhostmapping)
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group to which the resource belongs.
  * location **required** `string`: Location of the container host.

#### Output
*Output schema unknown*



## Definitions

### ContainerHostMapping
* ContainerHostMapping `object`: Container host mapping object specifying the Container host resource ID and its associated Controller resource.
  * containerHostResourceId `string`: ARM ID of the Container Host resource
  * mappedControllerResourceId `string`: ARM ID of the mapped Controller resource

### Controller
* Controller `object`
  * properties **required** [ControllerProperties](#controllerproperties)
  * sku **required** [Sku](#sku)
  * location `string`: Region where the Azure resource is located.
  * tags `object`: Tags for the Azure resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ControllerConnectionDetails
* ControllerConnectionDetails `object`
  * authKey `string`: Authentication key for communicating with services.
  * orchestratorSpecificConnectionDetails [OrchestratorSpecificConnectionDetails](#orchestratorspecificconnectiondetails)

### ControllerConnectionDetailsList
* ControllerConnectionDetailsList `object`
  * connectionDetailsList `array`: List of Azure Dev Spaces Controller connection details.
    * items [ControllerConnectionDetails](#controllerconnectiondetails)

### ControllerList
* ControllerList `object`
  * nextLink `string`: The URI that can be used to request the next page for list of Azure Dev Spaces Controllers.
  * value `array`: List of Azure Dev Spaces Controllers.
    * items [Controller](#controller)

### ControllerProperties
* ControllerProperties `object`
  * dataPlaneFqdn `string`: DNS name for accessing DataPlane services
  * hostSuffix `string`: DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
  * provisioningState `string` (values: Succeeded, Failed, Canceled, Updating, Creating, Deleting, Deleted): Provisioning state of the Azure Dev Spaces Controller.
  * targetContainerHostCredentialsBase64 **required** `string`: Credentials of the target container host (base64).
  * targetContainerHostResourceId **required** `string`: Resource ID of the target container host

### ControllerUpdateParameters
* ControllerUpdateParameters `object`: Parameters for updating an Azure Dev Spaces Controller.

### ErrorDetails
* ErrorDetails `object`
  * code `string`: Status code for the error.
  * message `string`: Error message describing the error in detail.
  * target `string`: The target of the particular error.

### ErrorResponse
* ErrorResponse `object`: Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.
  * error [ErrorDetails](#errordetails)

### KubernetesConnectionDetails
* KubernetesConnectionDetails `object`: Contains information used to connect to a Kubernetes cluster
  * kubeConfig `string`: Gets the kubeconfig for the cluster.
  * instanceType `string`: Gets the Instance type.

### OrchestratorSpecificConnectionDetails
* OrchestratorSpecificConnectionDetails `object`: Base class for types that supply values used to connect to container orchestrators
  * instanceType `string`: Gets the Instance type.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ResourceProviderOperationDefinition
* ResourceProviderOperationDefinition `object`
  * display [ResourceProviderOperationDisplay](#resourceprovideroperationdisplay)
  * name `string`: Resource provider operation name.

### ResourceProviderOperationDisplay
* ResourceProviderOperationDisplay `object`
  * description `string`: Description of the resource provider operation.
  * operation `string`: Name of the resource provider operation.
  * provider `string`: Name of the resource provider.
  * resource `string`: Name of the resource type.

### ResourceProviderOperationList
* ResourceProviderOperationList `object`
  * nextLink `string`: The URI that can be used to request the next page for list of Azure operations.
  * value `array`: Resource provider operations list.
    * items [ResourceProviderOperationDefinition](#resourceprovideroperationdefinition)

### Sku
* Sku `object`: Model representing SKU for Azure Dev Spaces Controller.
  * name **required** `string` (values: S1): The name of the SKU for Azure Dev Spaces Controller.
  * tier `string` (values: Standard): The tier of the SKU for Azure Dev Spaces Controller.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource.
  * location `string`: Region where the Azure resource is located.
  * tags `object`: Tags for the Azure resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.


