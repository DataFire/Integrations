# @datafire/azure_customproviders

Client library for customproviders

## Installation and Usage
```bash
npm install --save @datafire/azure_customproviders
```
```js
let azure_customproviders = require('@datafire/azure_customproviders').create({
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

Allows extension of ARM control plane with custom resource providers.

## Actions

### Operations_List
The list of operations provided by Microsoft CustomProviders.


```js
azure_customproviders.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [ResourceProviderOperationList](#resourceprovideroperationlist)

### CustomResourceProvider_ListBySubscription
Gets all the custom resource providers within a subscription.


```js
azure_customproviders.CustomResourceProvider_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [ListByCustomRPManifest](#listbycustomrpmanifest)

### CustomResourceProvider_ListByResourceGroup
Gets all the custom resource providers within a resource group.


```js
azure_customproviders.CustomResourceProvider_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [ListByCustomRPManifest](#listbycustomrpmanifest)

### CustomResourceProvider_Delete
Deletes the custom resource provider.


```js
azure_customproviders.CustomResourceProvider_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceProviderName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceProviderName **required** `string`: The name of the resource provider.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
*Output schema unknown*

### CustomResourceProvider_Get
Gets the custom resource provider manifest.


```js
azure_customproviders.CustomResourceProvider_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceProviderName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceProviderName **required** `string`: The name of the resource provider.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [CustomRPManifest](#customrpmanifest)

### CustomResourceProvider_Update
Updates an existing custom resource provider. The only value that can be updated via PATCH currently is the tags.


```js
azure_customproviders.CustomResourceProvider_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceProviderName": "",
  "api-version": "",
  "patchableResource": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceProviderName **required** `string`: The name of the resource provider.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * patchableResource **required** [ResourceProvidersUpdate](#resourceprovidersupdate)

#### Output
* output [CustomRPManifest](#customrpmanifest)

### CustomResourceProvider_CreateOrUpdate
Creates or updates the custom resource provider.


```js
azure_customproviders.CustomResourceProvider_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceProviderName": "",
  "api-version": "",
  "resourceProvider": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceProviderName **required** `string`: The name of the resource provider.
  * api-version **required** `string`: The API version to be used with the HTTP request.
  * resourceProvider **required** [CustomRPManifest](#customrpmanifest)

#### Output
* output [CustomRPManifest](#customrpmanifest)

### Associations_ListAll
Gets all association for the given scope.


```js
azure_customproviders.Associations_ListAll({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the association.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [AssociationsList](#associationslist)

### Associations_Delete
Delete an association.


```js
azure_customproviders.Associations_Delete({
  "scope": "",
  "associationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the association.
  * associationName **required** `string`: The name of the association.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
*Output schema unknown*

### Associations_Get
Get an association.


```js
azure_customproviders.Associations_Get({
  "scope": "",
  "associationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the association.
  * associationName **required** `string`: The name of the association.
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [Association](#association)

### Associations_CreateOrUpdate
Create or update an association.


```js
azure_customproviders.Associations_CreateOrUpdate({
  "scope": "",
  "associationName": "",
  "association": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the association. The scope can be any valid REST resource instance. For example, use '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/Microsoft.Compute/virtualMachines/{vm-name}' for a virtual machine resource.
  * associationName **required** `string`: The name of the association.
  * association **required** [Association](#association)
  * api-version **required** `string`: The API version to be used with the HTTP request.

#### Output
* output [Association](#association)



## Definitions

### Association
* Association `object`: The resource definition of this association.
  * id `string`: The association id.
  * name `string`: The association name.
  * properties `object`: The properties of the association.
    * provisioningState `string` (values: Accepted, Deleting, Running, Succeeded, Failed): The provisioning state of the association.
    * targetResourceId `string`: The REST resource instance of the target resource for this association.
  * type `string`: The association type.

### AssociationsList
* AssociationsList `object`: List of associations.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The array of associations.
    * items [Association](#association)

### CustomRPActionRouteDefinition
* CustomRPActionRouteDefinition `object`: The route definition for an action implemented by the custom resource provider.
  * routingType `string` (values: Proxy): The routing types that are supported for action requests.
  * endpoint **required** `string`: The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
  * name **required** `string`: The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')

### CustomRPManifest
* CustomRPManifest `object`: A manifest file that defines the custom resource provider resources.
  * properties `object`: The manifest for the custom resource provider
    * actions `array`: A list of actions that the custom resource provider implements.
      * items [CustomRPActionRouteDefinition](#customrpactionroutedefinition)
    * provisioningState `string` (values: Accepted, Deleting, Running, Succeeded, Failed): The provisioning state of the resource provider.
    * resourceTypes `array`: A list of resource types that the custom resource provider implements.
      * items [CustomRPResourceTypeRouteDefinition](#customrpresourcetyperoutedefinition)
    * validations `array`: A list of validations to run on the custom resource provider's requests.
      * items [CustomRPValidations](#customrpvalidations)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### CustomRPResourceTypeRouteDefinition
* CustomRPResourceTypeRouteDefinition `object`: The route definition for a resource implemented by the custom resource provider.
  * routingType `string` (values: Proxy, Proxy,Cache): The routing types that are supported for resource requests.
  * endpoint **required** `string`: The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
  * name **required** `string`: The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')

### CustomRPRouteDefinition
* CustomRPRouteDefinition `object`: A route definition that defines an action or resource that can be interacted with through the custom resource provider.
  * endpoint **required** `string`: The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
  * name **required** `string`: The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')

### CustomRPValidations
* CustomRPValidations `object`: A validation to apply on custom resource provider requests.
  * specification **required** `string`: A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
  * validationType `string` (values: Swagger): The type of validation to run against a matching request.

### ErrorDefinition
* ErrorDefinition `object`: Error definition.
  * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
  * details `array`: Internal error details.
    * items [ErrorDefinition](#errordefinition)
  * message `string`: Description of the error.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error [ErrorDefinition](#errordefinition)

### ListByCustomRPManifest
* ListByCustomRPManifest `object`: List of custom resource providers.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The array of custom resource provider manifests.
    * items [CustomRPManifest](#customrpmanifest)

### Resource
* Resource `object`: The resource definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResourceProviderOperation
* ResourceProviderOperation `object`: Supported operations of this resource provider.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Description of this operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Resource provider: Microsoft Custom Providers.
    * resource `string`: Resource on which the operation is performed.
  * name `string`: Operation name, in format of {provider}/{resource}/{operation}

### ResourceProviderOperationList
* ResourceProviderOperationList `object`: Results of the request to list operations.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: List of operations supported by this resource provider.
    * items [ResourceProviderOperation](#resourceprovideroperation)

### ResourceProvidersUpdate
* ResourceProvidersUpdate `object`: custom resource provider update information.
  * tags `object`: Resource tags


