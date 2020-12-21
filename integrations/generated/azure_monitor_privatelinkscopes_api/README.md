# @datafire/azure_monitor_privatelinkscopes_api

Client library for Azure Monitor Private Link Scopes

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_privatelinkscopes_api
```
```js
let azure_monitor_privatelinkscopes_api = require('@datafire/azure_monitor_privatelinkscopes_api').create({
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

Azure Monitor API reference for Private Links Scopes management.

## Actions

### PrivateLinkScopes_List
Gets a list of all Azure Monitor PrivateLinkScopes within a subscription.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopes_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [AzureMonitorPrivateLinkScopeListResult](#azuremonitorprivatelinkscopelistresult)

### PrivateEndpointConnections_ListByPrivateLinkScope
Gets all private endpoint connections on a private link scope.


```js
azure_monitor_privatelinkscopes_api.PrivateEndpointConnections_ListByPrivateLinkScope({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource

#### Output
* output [PrivateEndpointConnectionListResult](#privateendpointconnectionlistresult)

### PrivateEndpointConnections_Delete
Deletes a private endpoint connection with a given name.


```js
azure_monitor_privatelinkscopes_api.PrivateEndpointConnections_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": "",
  "privateEndpointConnectionName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource
  * privateEndpointConnectionName **required** `string`: The name of the private endpoint connection.

#### Output
*Output schema unknown*

### PrivateEndpointConnections_Get
Gets a private endpoint connection.


```js
azure_monitor_privatelinkscopes_api.PrivateEndpointConnections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": "",
  "privateEndpointConnectionName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource
  * privateEndpointConnectionName **required** `string`: The name of the private endpoint connection.

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnections_CreateOrUpdate
Approve or reject a private endpoint connection with a given name.


```js
azure_monitor_privatelinkscopes_api.PrivateEndpointConnections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": "",
  "privateEndpointConnectionName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource
  * privateEndpointConnectionName **required** `string`: The name of the private endpoint connection.
  * parameters **required** [PrivateEndpointConnection](#privateendpointconnection)

#### Output
* output [PrivateEndpointConnection](#privateendpointconnection)

### PrivateLinkResources_ListByPrivateLinkScope
Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkResources_ListByPrivateLinkScope({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource

#### Output
* output [PrivateLinkResourceListResult](#privatelinkresourcelistresult)

### PrivateLinkResources_Get
Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkResources_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": "",
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource
  * groupName **required** `string`: The name of the private link resource.

#### Output
* output [PrivateLinkResource](#privatelinkresource)

### PrivateLinkScopedResources_ListByPrivateLinkScope
Gets all private endpoint connections on a private link scope.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopedResources_ListByPrivateLinkScope({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource

#### Output
* output [ScopedResourceListResult](#scopedresourcelistresult)

### PrivateLinkScopedResources_Delete
Deletes a private endpoint connection with a given name.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopedResources_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource
  * name **required** `string`: The name of the scoped resource object.

#### Output
*Output schema unknown*

### PrivateLinkScopedResources_Get
Gets a scoped resource in a private link scope.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopedResources_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource
  * name **required** `string`: The name of the scoped resource object.

#### Output
* output [ScopedResource](#scopedresource)

### PrivateLinkScopedResources_CreateOrUpdate
Approve or reject a private endpoint connection with a given name.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopedResources_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "scopeName": "",
  "name": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * scopeName **required** `string`: Name of the Azure Monitor PrivateLinkScope that will contain the datasource
  * name **required** `string`: The name of the scoped resource object.
  * parameters **required** [ScopedResource](#scopedresource)

#### Output
* output [ScopedResource](#scopedresource)

### PrivateLinkScopes_ListByResourceGroup
Gets a list of Azure Monitor PrivateLinkScopes within a resource group.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopes_ListByResourceGroup({
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
* output [AzureMonitorPrivateLinkScopeListResult](#azuremonitorprivatelinkscopelistresult)

### PrivateLinkScopes_Delete
Deletes a Azure Monitor PrivateLinkScope.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopes_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "scopeName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * scopeName **required** `string`: The name of the Azure Monitor PrivateLinkScope resource.

#### Output
*Output schema unknown*

### PrivateLinkScopes_Get
Returns a Azure Monitor PrivateLinkScope.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopes_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "scopeName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * scopeName **required** `string`: The name of the Azure Monitor PrivateLinkScope resource.

#### Output
* output [AzureMonitorPrivateLinkScope](#azuremonitorprivatelinkscope)

### PrivateLinkScopes_UpdateTags
Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopes_UpdateTags({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "scopeName": "",
  "PrivateLinkScopeTags": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * scopeName **required** `string`: The name of the Azure Monitor PrivateLinkScope resource.
  * PrivateLinkScopeTags **required** [TagsResource](#tagsresource)

#### Output
* output [AzureMonitorPrivateLinkScope](#azuremonitorprivatelinkscope)

### PrivateLinkScopes_CreateOrUpdate
Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.


```js
azure_monitor_privatelinkscopes_api.PrivateLinkScopes_CreateOrUpdate({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "scopeName": "",
  "AzureMonitorPrivateLinkScopePayload": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * scopeName **required** `string`: The name of the Azure Monitor PrivateLinkScope resource.
  * AzureMonitorPrivateLinkScopePayload **required** [AzureMonitorPrivateLinkScope](#azuremonitorprivatelinkscope)

#### Output
* output [AzureMonitorPrivateLinkScope](#azuremonitorprivatelinkscope)



## Definitions

### AzureMonitorPrivateLinkScope
* AzureMonitorPrivateLinkScope `object`: An Azure Monitor PrivateLinkScope definition.
  * properties **required** [AzureMonitorPrivateLinkScopeProperties](#azuremonitorprivatelinkscopeproperties)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### AzureMonitorPrivateLinkScopeListResult
* AzureMonitorPrivateLinkScopeListResult `object`: Describes the list of Azure Monitor PrivateLinkScope resources.
  * nextLink `string`: The URI to get the next set of Azure Monitor PrivateLinkScope definitions if too many PrivateLinkScopes where returned in the result set.
  * value **required** `array`: List of Azure Monitor PrivateLinkScope definitions.
    * items [AzureMonitorPrivateLinkScope](#azuremonitorprivatelinkscope)

### AzureMonitorPrivateLinkScopeProperties
* AzureMonitorPrivateLinkScopeProperties `object`: Properties that define a Azure Monitor PrivateLinkScope resource.
  * provisioningState `string`: Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.

### ErrorResponse
* ErrorResponse `object`: Describe the format of an Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### PrivateEndpointConnection
* PrivateEndpointConnection `object`: A private endpoint connection
  * properties [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### PrivateEndpointConnectionListResult
* PrivateEndpointConnectionListResult `object`: A list of private endpoint connections.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [PrivateEndpointConnection](#privateendpointconnection)

### PrivateEndpointConnectionProperties
* PrivateEndpointConnectionProperties `object`: Properties of a private endpoint connection.
  * privateEndpoint [PrivateEndpointProperty](#privateendpointproperty)
  * privateLinkServiceConnectionState [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)
  * provisioningState `string`: State of the private endpoint connection.

### PrivateEndpointProperty
* PrivateEndpointProperty `object`: Private endpoint which the connection belongs to.
  * id `string`: Resource id of the private endpoint.

### PrivateLinkResource
* PrivateLinkResource `object`: A private link resource
  * properties [PrivateLinkResourceProperties](#privatelinkresourceproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### PrivateLinkResourceListResult
* PrivateLinkResourceListResult `object`: A list of private link resources
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [PrivateLinkResource](#privatelinkresource)

### PrivateLinkResourceProperties
* PrivateLinkResourceProperties `object`: Properties of a private link resource.
  * groupId `string`: The private link resource group id.
  * requiredMembers `array`: The private link resource required member names.
    * items `string`

### PrivateLinkScopesResource
* PrivateLinkScopesResource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### PrivateLinkServiceConnectionStateProperty
* PrivateLinkServiceConnectionStateProperty `object`: State of the private endpoint connection.
  * actionsRequired `string`: The actions required for private link service connection.
  * description **required** `string`: The private link service connection description.
  * status **required** `string`: The private link service connection status.

### ProxyResource
* ProxyResource `object`: Common properties of proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### ScopedResource
* ScopedResource `object`: A private link scoped resource
  * properties [ScopedResourceProperties](#scopedresourceproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * tags `object`: Resource tags
  * type `string`: Resource type.

### ScopedResourceListResult
* ScopedResourceListResult `object`: A list of scoped resources in a private link scope.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ScopedResource](#scopedresource)

### ScopedResourceProperties
* ScopedResourceProperties `object`: Properties of a private link scoped resource.
  * linkedResourceId `string`: The resource id of the scoped Azure monitor resource.
  * provisioningState `string`: State of the private endpoint connection.

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkScope instance.


