# @datafire/azure_resources_managedapplications

Client library for ApplicationClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_managedapplications
```
```js
let azure_resources_managedapplications = require('@datafire/azure_resources_managedapplications').create({
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

ARM applications

## Actions

### Applications_ListBySubscription
Gets all the applications within a subscription.


```js
azure_resources_managedapplications.Applications_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ApplicationListResult](#applicationlistresult)

### ApplicationDefinitions_ListByResourceGroup
Lists the managed application definitions in a resource group.


```js
azure_resources_managedapplications.ApplicationDefinitions_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ApplicationDefinitionListResult](#applicationdefinitionlistresult)

### ApplicationDefinitions_Delete
Deletes the managed application definition.


```js
azure_resources_managedapplications.ApplicationDefinitions_Delete({
  "resourceGroupName": "",
  "applicationDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * applicationDefinitionName **required** `string`: The name of the managed application definition to delete.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### ApplicationDefinitions_Get
Gets the managed application definition.


```js
azure_resources_managedapplications.ApplicationDefinitions_Get({
  "resourceGroupName": "",
  "applicationDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * applicationDefinitionName **required** `string`: The name of the managed application definition.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ApplicationDefinition](#applicationdefinition)

### ApplicationDefinitions_CreateOrUpdate
Creates a new managed application definition.


```js
azure_resources_managedapplications.ApplicationDefinitions_CreateOrUpdate({
  "resourceGroupName": "",
  "applicationDefinitionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * applicationDefinitionName **required** `string`: The name of the managed application definition.
  * parameters **required** [ApplicationDefinition](#applicationdefinition)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ApplicationDefinition](#applicationdefinition)

### Applications_ListByResourceGroup
Gets all the applications within a resource group.


```js
azure_resources_managedapplications.Applications_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ApplicationListResult](#applicationlistresult)

### Applications_Delete
Deletes the managed application.


```js
azure_resources_managedapplications.Applications_Delete({
  "resourceGroupName": "",
  "applicationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * applicationName **required** `string`: The name of the managed application.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Applications_Get
Gets the managed application.


```js
azure_resources_managedapplications.Applications_Get({
  "resourceGroupName": "",
  "applicationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * applicationName **required** `string`: The name of the managed application.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Application](#application)

### Applications_Update
Updates an existing managed application. The only value that can be updated via PATCH currently is the tags.


```js
azure_resources_managedapplications.Applications_Update({
  "resourceGroupName": "",
  "applicationName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * applicationName **required** `string`: The name of the managed application.
  * parameters [Application](#application)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Application](#application)

### Applications_CreateOrUpdate
Creates a new managed application.


```js
azure_resources_managedapplications.Applications_CreateOrUpdate({
  "resourceGroupName": "",
  "applicationName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * applicationName **required** `string`: The name of the managed application.
  * parameters **required** [Application](#application)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Application](#application)

### Applications_DeleteById
Deletes the managed application.


```js
azure_resources_managedapplications.Applications_DeleteById({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Applications_GetById
Gets the managed application.


```js
azure_resources_managedapplications.Applications_GetById({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [Application](#application)

### Applications_UpdateById
Updates an existing managed application. The only value that can be updated via PATCH currently is the tags.


```js
azure_resources_managedapplications.Applications_UpdateById({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
  * parameters [Application](#application)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [Application](#application)

### Applications_CreateOrUpdateById
Creates a new managed application.


```js
azure_resources_managedapplications.Applications_CreateOrUpdateById({
  "applicationId": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
  * parameters **required** [Application](#application)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [Application](#application)



## Definitions

### Application
* Application `object`: Information about managed application.
  * kind **required** `string`: The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
  * plan [Plan](#plan)
  * properties **required** [ApplicationProperties](#applicationproperties)
  * identity [Identity](#identity)
  * managedBy `string`: ID of the resource that manages this resource.
  * sku [Sku](#sku)
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ApplicationArtifact
* ApplicationArtifact `object`: Managed application artifact.
  * name `string`: The managed application artifact name.
  * type [ApplicationArtifactType](#applicationartifacttype)
  * uri `string`: The managed application artifact blob uri.

### ApplicationArtifactType
* ApplicationArtifactType `string` (values: Template, Custom): The managed application artifact type.

### ApplicationDefinition
* ApplicationDefinition `object`: Information about managed application definition.
  * properties **required** [ApplicationDefinitionProperties](#applicationdefinitionproperties)
  * identity [Identity](#identity)
  * managedBy `string`: ID of the resource that manages this resource.
  * sku [Sku](#sku)
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ApplicationDefinitionListResult
* ApplicationDefinitionListResult `object`: List of managed application definitions.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The array of managed application definitions.
    * items [ApplicationDefinition](#applicationdefinition)

### ApplicationDefinitionProperties
* ApplicationDefinitionProperties `object`: The managed application definition properties.
  * artifacts `array`: The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
    * items [ApplicationArtifact](#applicationartifact)
  * authorizations **required** `array`: The managed application provider authorizations.
    * items [ApplicationProviderAuthorization](#applicationproviderauthorization)
  * createUiDefinition `object`: The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
  * description `string`: The managed application definition description.
  * displayName `string`: The managed application definition display name.
  * isEnabled `string`: A value indicating whether the package is enabled or not.
  * lockLevel **required** [ApplicationLockLevel](#applicationlocklevel)
  * mainTemplate `object`: The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
  * packageFileUri `string`: The managed application definition package file Uri. Use this element

### ApplicationListResult
* ApplicationListResult `object`: List of managed applications.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The array of managed applications.
    * items [Application](#application)

### ApplicationLockLevel
* ApplicationLockLevel `string` (values: CanNotDelete, ReadOnly, None): The managed application lock level.

### ApplicationPatchable
* ApplicationPatchable `object`: Information about managed application.
  * kind `string`: The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
  * plan [PlanPatchable](#planpatchable)
  * properties [ApplicationPropertiesPatchable](#applicationpropertiespatchable)
  * identity [Identity](#identity)
  * managedBy `string`: ID of the resource that manages this resource.
  * sku [Sku](#sku)
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ApplicationProperties
* ApplicationProperties `object`: The managed application properties.
  * applicationDefinitionId `string`: The fully qualified path of managed application definition Id.
  * managedResourceGroupId **required** `string`: The managed resource group Id.
  * outputs `object`: Name and value pairs that define the managed application outputs.
  * parameters `object`: Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
  * provisioningState [ProvisioningState](#provisioningstate)

### ApplicationPropertiesPatchable
* ApplicationPropertiesPatchable `object`: The managed application properties.
  * applicationDefinitionId `string`: The fully qualified path of managed application definition Id.
  * managedResourceGroupId `string`: The managed resource group Id.
  * outputs `object`: Name and value pairs that define the managed application outputs.
  * parameters `object`: Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
  * provisioningState [ProvisioningState](#provisioningstate)

### ApplicationProviderAuthorization
* ApplicationProviderAuthorization `object`: The managed application provider authorization.
  * principalId **required** `string`: The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
  * roleDefinitionId **required** `string`: The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.

### ErrorResponse
* ErrorResponse `object`: Error response indicates managed application is not able to process the incoming request. The reason is provided in the error message.
  * errorCode `string`: Error code.
  * errorMessage `string`: Error message indicating why the operation failed.
  * httpStatus `string`: Http status code.

### GenericResource
* GenericResource `object`: Resource information.
  * identity [Identity](#identity)
  * managedBy `string`: ID of the resource that manages this resource.
  * sku [Sku](#sku)
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Identity
* Identity `object`: Identity for the resource.
  * principalId `string`: The principal ID of resource identity.
  * tenantId `string`: The tenant ID of resource.
  * type `string` (values: SystemAssigned): The identity type.

### Plan
* Plan `object`: Plan for the managed application.
  * name **required** `string`: The plan name.
  * product **required** `string`: The product code.
  * promotionCode `string`: The promotion code.
  * publisher **required** `string`: The publisher ID.
  * version **required** `string`: The plan's version.

### PlanPatchable
* PlanPatchable `object`: Plan for the managed application.
  * name `string`: The plan name.
  * product `string`: The product code.
  * promotionCode `string`: The promotion code.
  * publisher `string`: The publisher ID.
  * version `string`: The plan's version.

### ProvisioningState
* ProvisioningState `string` (values: Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Updating): Provisioning status of the managed application.

### Resource
* Resource `object`: Resource information.
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Sku
* Sku `object`: SKU for the resource.
  * capacity `integer`: The SKU capacity.
  * family `string`: The SKU family.
  * model `string`: The SKU model.
  * name **required** `string`: The SKU name.
  * size `string`: The SKU size.
  * tier `string`: The SKU tier.


