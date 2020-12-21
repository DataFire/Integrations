# @datafire/azure_managednetwork_managednetwork

Client library for ManagedNetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_managednetwork_managednetwork
```
```js
let azure_managednetwork_managednetwork = require('@datafire/azure_managednetwork_managednetwork').create({
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

The Microsoft Azure Managed Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to programmatically view, control, change, and monitor your entire Azure network centrally and with ease.

## Actions

### Operations_List
Lists all of the available MNC operations.


```js
azure_managednetwork_managednetwork.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### ManagedNetworks_ListBySubscription
The ListBySubscription  ManagedNetwork operation retrieves all the Managed Network Resources in the current subscription in a paginated format.


```js
azure_managednetwork_managednetwork.ManagedNetworks_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $top `integer`: May be used to limit the number of results in a page for list queries.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ManagedNetworkListResult](#managednetworklistresult)

### ManagedNetworks_ListByResourceGroup
The ListByResourceGroup ManagedNetwork operation retrieves all the Managed Network resources in a resource group in a paginated format.


```js
azure_managednetwork_managednetwork.ManagedNetworks_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * $top `integer`: May be used to limit the number of results in a page for list queries.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ManagedNetworkListResult](#managednetworklistresult)

### ManagedNetworks_Delete
The Delete ManagedNetworks operation deletes a Managed Network Resource, specified by the  resource group and Managed Network name


```js
azure_managednetwork_managednetwork.ManagedNetworks_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.

#### Output
*Output schema unknown*

### ManagedNetworks_Get
The Get ManagedNetworks operation gets a Managed Network Resource, specified by the resource group and Managed Network name


```js
azure_managednetwork_managednetwork.ManagedNetworks_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.

#### Output
* output [ManagedNetwork](#managednetwork)

### ManagedNetworks_Update
Updates the specified Managed Network resource tags.


```js
azure_managednetwork_managednetwork.ManagedNetworks_Update({
  "parameters": {},
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ManagedNetworkUpdate](#managednetworkupdate)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.

#### Output
* output [ManagedNetwork](#managednetwork)

### ManagedNetworks_CreateOrUpdate
The Put ManagedNetworks operation creates/updates a Managed Network Resource, specified by resource group and Managed Network name


```js
azure_managednetwork_managednetwork.ManagedNetworks_CreateOrUpdate({
  "managedNetwork": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": ""
}, context)
```

#### Input
* input `object`
  * managedNetwork **required** [ManagedNetwork](#managednetwork)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.

#### Output
* output [ManagedNetwork](#managednetwork)

### ManagedNetworkGroups_ListByManagedNetwork
The ListByManagedNetwork ManagedNetworkGroup operation retrieves all the Managed Network Groups in a specified Managed Networks in a paginated format.


```js
azure_managednetwork_managednetwork.ManagedNetworkGroups_ListByManagedNetwork({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * $top `integer`: May be used to limit the number of results in a page for list queries.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ManagedNetworkGroupListResult](#managednetworkgrouplistresult)

### ManagedNetworkGroups_Delete
The Delete ManagedNetworkGroups operation deletes a Managed Network Group specified by the resource group, Managed Network name, and group name


```js
azure_managednetwork_managednetwork.ManagedNetworkGroups_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": "",
  "managedNetworkGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * managedNetworkGroupName **required** `string`: The name of the Managed Network Group.

#### Output
*Output schema unknown*

### ManagedNetworkGroups_Get
The Get ManagedNetworkGroups operation gets a Managed Network Group specified by the resource group, Managed Network name, and group name


```js
azure_managednetwork_managednetwork.ManagedNetworkGroups_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": "",
  "managedNetworkGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * managedNetworkGroupName **required** `string`: The name of the Managed Network Group.

#### Output
* output [ManagedNetworkGroup](#managednetworkgroup)

### ManagedNetworkGroups_CreateOrUpdate
The Put ManagedNetworkGroups operation creates or updates a Managed Network Group resource


```js
azure_managednetwork_managednetwork.ManagedNetworkGroups_CreateOrUpdate({
  "managedNetworkGroup": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": "",
  "managedNetworkGroupName": ""
}, context)
```

#### Input
* input `object`
  * managedNetworkGroup **required** [ManagedNetworkGroup](#managednetworkgroup)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * managedNetworkGroupName **required** `string`: The name of the Managed Network Group.

#### Output
* output [ManagedNetworkGroup](#managednetworkgroup)

### ManagedNetworkPeeringPolicies_ListByManagedNetwork
The ListByManagedNetwork PeeringPolicies operation retrieves all the Managed Network Peering Policies in a specified Managed Network, in a paginated format.


```js
azure_managednetwork_managednetwork.ManagedNetworkPeeringPolicies_ListByManagedNetwork({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * $top `integer`: May be used to limit the number of results in a page for list queries.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ManagedNetworkPeeringPolicyListResult](#managednetworkpeeringpolicylistresult)

### ManagedNetworkPeeringPolicies_Delete
The Delete ManagedNetworkPeeringPolicies operation deletes a Managed Network Peering Policy, specified by the  resource group, Managed Network name, and peering policy name


```js
azure_managednetwork_managednetwork.ManagedNetworkPeeringPolicies_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": "",
  "managedNetworkPeeringPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * managedNetworkPeeringPolicyName **required** `string`: The name of the Managed Network Peering Policy.

#### Output
*Output schema unknown*

### ManagedNetworkPeeringPolicies_Get
The Get ManagedNetworkPeeringPolicies operation gets a Managed Network Peering Policy resource, specified by the  resource group, Managed Network name, and peering policy name


```js
azure_managednetwork_managednetwork.ManagedNetworkPeeringPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": "",
  "managedNetworkPeeringPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * managedNetworkPeeringPolicyName **required** `string`: The name of the Managed Network Peering Policy.

#### Output
* output [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)

### ManagedNetworkPeeringPolicies_CreateOrUpdate
The Put ManagedNetworkPeeringPolicies operation creates/updates a new Managed Network Peering Policy


```js
azure_managednetwork_managednetwork.ManagedNetworkPeeringPolicies_CreateOrUpdate({
  "managedNetworkPolicy": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "managedNetworkName": "",
  "managedNetworkPeeringPolicyName": ""
}, context)
```

#### Input
* input `object`
  * managedNetworkPolicy **required** [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * managedNetworkName **required** `string`: The name of the Managed Network.
  * managedNetworkPeeringPolicyName **required** `string`: The name of the Managed Network Peering Policy.

#### Output
* output [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)

### ScopeAssignments_List
Get the specified scope assignment.


```js
azure_managednetwork_managednetwork.ScopeAssignments_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The base resource of the scope assignment.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ScopeAssignmentListResult](#scopeassignmentlistresult)

### ScopeAssignments_Delete
Deletes a scope assignment.


```js
azure_managednetwork_managednetwork.ScopeAssignments_Delete({
  "scope": "",
  "scopeAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the scope assignment to delete.
  * scopeAssignmentName **required** `string`: The name of the scope assignment to delete.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ScopeAssignments_Get
Get the specified scope assignment.


```js
azure_managednetwork_managednetwork.ScopeAssignments_Get({
  "scope": "",
  "scopeAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The base resource of the scope assignment.
  * scopeAssignmentName **required** `string`: The name of the scope assignment to get.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ScopeAssignment](#scopeassignment)

### ScopeAssignments_CreateOrUpdate
Creates a scope assignment.


```js
azure_managednetwork_managednetwork.ScopeAssignments_CreateOrUpdate({
  "parameters": null,
  "scope": "",
  "scopeAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ScopeAssignment](#scopeassignment)
  * scope **required** `string`: The base resource of the scope assignment to create. The scope can be any REST resource instance. For example, use 'subscriptions/{subscription-id}' for a subscription, 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
  * scopeAssignmentName **required** `string`: The name of the scope assignment to create.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ScopeAssignment](#scopeassignment)



## Definitions

### ConnectivityCollection
* ConnectivityCollection `object`: The collection of Connectivity related groups and policies within the Managed Network
  * groups `array`: The collection of connectivity related Managed Network Groups within the Managed Network
    * items [ManagedNetworkGroup](#managednetworkgroup)
  * peerings `array`: The collection of Managed Network Peering Policies within the Managed Network
    * items [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)

### ErrorResponse
* ErrorResponse `object`: The error response that indicates why an operation has failed.
  * code `string`: The error code.
  * message `string`: The error message.

### HubAndSpokePeeringPolicyProperties
* HubAndSpokePeeringPolicyProperties `object`: Properties of a Hub and Spoke Peering Policy
  * hub [ResourceId](#resourceid)
  * spokes `array`: Gets or sets the spokes group IDs
    * items [ResourceId](#resourceid)
  * hub [ResourceId](#resourceid)
  * mesh `array`: Gets or sets the mesh group IDs
    * items [ResourceId](#resourceid)
  * spokes `array`: Gets or sets the spokes group IDs
    * items [ResourceId](#resourceid)
  * type **required** `string` (values: HubAndSpokeTopology, MeshTopology): Gets or sets the connectivity type of a network structure policy
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * provisioningState `string` (values: Updating, Deleting, Failed, Succeeded): Provisioning state of the ManagedNetwork resource.

### ManagedNetwork
* ManagedNetwork `object`: The Managed Network resource
  * properties [ManagedNetworkProperties](#managednetworkproperties)
  * tags `object`: Resource tags
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * location `string`: The geo-location where the resource lives
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ManagedNetworkGroup
* ManagedNetworkGroup `object`: The Managed Network Group resource
  * kind `string` (values: Connectivity): Responsibility role under which this Managed Network Group will be created
  * properties [ManagedNetworkGroupProperties](#managednetworkgroupproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * location `string`: The geo-location where the resource lives
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ManagedNetworkGroupListResult
* ManagedNetworkGroupListResult `object`: Result of the request to list Managed Network Groups. It contains a list of groups and a URL link to get the next set of results.
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets a page of ManagedNetworkGroup
    * items [ManagedNetworkGroup](#managednetworkgroup)

### ManagedNetworkGroupProperties
* ManagedNetworkGroupProperties `object`: Properties of a Managed Network Group
  * managementGroups `array`: The collection of management groups covered by the Managed Network
    * items [ResourceId](#resourceid)
  * subnets `array`: The collection of  subnets covered by the Managed Network
    * items [ResourceId](#resourceid)
  * subscriptions `array`: The collection of subscriptions covered by the Managed Network
    * items [ResourceId](#resourceid)
  * virtualNetworks `array`: The collection of virtual nets covered by the Managed Network
    * items [ResourceId](#resourceid)
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * provisioningState `string` (values: Updating, Deleting, Failed, Succeeded): Provisioning state of the ManagedNetwork resource.

### ManagedNetworkListResult
* ManagedNetworkListResult `object`: Result of the request to list Managed Network. It contains a list of Managed Networks and a URL link to get the next set of results.
  * nextLink `string`: Gets the URL to get the next page of results.
  * value `array`: Gets a page of ManagedNetworks
    * items [ManagedNetwork](#managednetwork)

### ManagedNetworkPeeringPolicy
* ManagedNetworkPeeringPolicy `object`: The Managed Network Peering Policy resource
  * properties [ManagedNetworkPeeringPolicyProperties](#managednetworkpeeringpolicyproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * location `string`: The geo-location where the resource lives
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ManagedNetworkPeeringPolicyListResult
* ManagedNetworkPeeringPolicyListResult `object`: Result of the request to list Managed Network Peering Policies. It contains a list of policies and a URL link to get the next set of results.
  * nextLink `string`: Gets the URL to get the next page of results.
  * value `array`: Gets a page of Peering Policies
    * items [ManagedNetworkPeeringPolicy](#managednetworkpeeringpolicy)

### ManagedNetworkPeeringPolicyProperties
* ManagedNetworkPeeringPolicyProperties `object`: Properties of a Managed Network Peering Policy
  * hub [ResourceId](#resourceid)
  * mesh `array`: Gets or sets the mesh group IDs
    * items [ResourceId](#resourceid)
  * spokes `array`: Gets or sets the spokes group IDs
    * items [ResourceId](#resourceid)
  * type **required** `string` (values: HubAndSpokeTopology, MeshTopology): Gets or sets the connectivity type of a network structure policy
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * provisioningState `string` (values: Updating, Deleting, Failed, Succeeded): Provisioning state of the ManagedNetwork resource.

### ManagedNetworkProperties
* ManagedNetworkProperties `object`: Properties of Managed Network
  * connectivity [ConnectivityCollection](#connectivitycollection)
  * scope [Scope](#scope)
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * provisioningState `string` (values: Updating, Deleting, Failed, Succeeded): Provisioning state of the ManagedNetwork resource.

### ManagedNetworkUpdate
* ManagedNetworkUpdate `object`: Update Tags of Managed Network
  * tags `object`: Resource tags

### MeshPeeringPolicyProperties
* MeshPeeringPolicyProperties `object`: Properties of a Mesh Peering Policy
  * mesh `array`: Gets or sets the mesh group IDs
    * items [ResourceId](#resourceid)
  * hub [ResourceId](#resourceid)
  * mesh `array`: Gets or sets the mesh group IDs
    * items [ResourceId](#resourceid)
  * spokes `array`: Gets or sets the spokes group IDs
    * items [ResourceId](#resourceid)
  * type **required** `string` (values: HubAndSpokeTopology, MeshTopology): Gets or sets the connectivity type of a network structure policy
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * provisioningState `string` (values: Updating, Deleting, Failed, Succeeded): Provisioning state of the ManagedNetwork resource.

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.ManagedNetwork
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Managed Network operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Resource Provider operations supported by the Managed Network resource provider.
    * items [Operation](#operation)

### ProxyResource
* ProxyResource: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * location `string`: The geo-location where the resource lives
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### Resource
* Resource `object`: The general resource model definition
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * location `string`: The geo-location where the resource lives
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ResourceId
* ResourceId `object`: Generic pointer to a resource
  * id `string`: Resource Id

### ResourceProperties
* ResourceProperties `object`: Base for resource properties.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * provisioningState `string` (values: Updating, Deleting, Failed, Succeeded): Provisioning state of the ManagedNetwork resource.

### Scope
* Scope `object`: Scope of a Managed Network
  * managementGroups `array`: The collection of management groups covered by the Managed Network
    * items [ResourceId](#resourceid)
  * subnets `array`: The collection of  subnets covered by the Managed Network
    * items [ResourceId](#resourceid)
  * subscriptions `array`: The collection of subscriptions covered by the Managed Network
    * items [ResourceId](#resourceid)
  * virtualNetworks `array`: The collection of virtual nets covered by the Managed Network
    * items [ResourceId](#resourceid)

### ScopeAssignment
* ScopeAssignment `object`: The Managed Network resource
  * properties [ScopeAssignmentProperties](#scopeassignmentproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * location `string`: The geo-location where the resource lives
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ScopeAssignmentListResult
* ScopeAssignmentListResult `object`: Result of the request to list ScopeAssignment. It contains a list of groups and a URL link to get the next set of results.
  * nextLink `string`: Gets the URL to get the next set of results.
  * value `array`: Gets a page of ScopeAssignment
    * items [ScopeAssignment](#scopeassignment)

### ScopeAssignmentProperties
* ScopeAssignmentProperties `object`: Properties of Managed Network
  * assignedManagedNetwork `string`: The managed network ID with scope will be assigned to.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * provisioningState `string` (values: Updating, Deleting, Failed, Succeeded): Provisioning state of the ManagedNetwork resource.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * tags `object`: Resource tags
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * location `string`: The geo-location where the resource lives
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.


