# @datafire/azure_eventhub_eventhub_preview

Client library for EventHub2018PreviewManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_eventhub_eventhub_preview
```
```js
let azure_eventhub_eventhub_preview = require('@datafire/azure_eventhub_eventhub_preview').create({
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

Azure Event Hubs client for managing Event Hubs Cluster, IPFilter Rules and VirtualNetworkRules resources.

## Actions

### Operations_List
Lists all of the available Event Hub REST API operations.


```js
azure_eventhub_eventhub_preview.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Clusters_ListAvailableClusters
List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.


```js
azure_eventhub_eventhub_preview.Clusters_ListAvailableClusters({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [AvailableClustersList](#availableclusterslist)

### Namespaces_List
Lists all the available Namespaces within a subscription, irrespective of the resource groups.


```js
azure_eventhub_eventhub_preview.Namespaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespaceListResult](#ehnamespacelistresult)

### Clusters_ListByResourceGroup
Lists the available Event Hubs Clusters within an ARM resource group.


```js
azure_eventhub_eventhub_preview.Clusters_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * api-version **required** `string`: Client API version.

#### Output
* output [ClusterListResult](#clusterlistresult)

### Clusters_Delete
Deletes an existing Event Hubs Cluster. This operation is idempotent.


```js
azure_eventhub_eventhub_preview.Clusters_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * clusterName **required** `string`: The name of the Event Hubs Cluster.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Clusters_Get
Gets the resource description of the specified Event Hubs Cluster.


```js
azure_eventhub_eventhub_preview.Clusters_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * clusterName **required** `string`: The name of the Event Hubs Cluster.
  * api-version **required** `string`: Client API version.

#### Output
* output [Cluster](#cluster)

### Clusters_Patch
Modifies mutable properties on the Event Hubs Cluster. This operation is idempotent.


```js
azure_eventhub_eventhub_preview.Clusters_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * clusterName **required** `string`: The name of the Event Hubs Cluster.
  * api-version **required** `string`: Client API version.
  * parameters **required** [Cluster](#cluster)

#### Output
* output [Cluster](#cluster)

### Clusters_Put
Creates or updates an instance of an Event Hubs Cluster.


```js
azure_eventhub_eventhub_preview.Clusters_Put({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * clusterName **required** `string`: The name of the Event Hubs Cluster.
  * api-version **required** `string`: Client API version.

#### Output
* output [Cluster](#cluster)

### Clusters_ListNamespaces
List all Event Hubs Namespace IDs in an Event Hubs Dedicated Cluster.


```js
azure_eventhub_eventhub_preview.Clusters_ListNamespaces({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * clusterName **required** `string`: The name of the Event Hubs Cluster.
  * api-version **required** `string`: Client API version.

#### Output
* output [EHNamespaceIdListResult](#ehnamespaceidlistresult)

### Configuration_Get
Get all Event Hubs Cluster settings - a collection of key/value pairs which represent the quotas and settings imposed on the cluster.


```js
azure_eventhub_eventhub_preview.Configuration_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * clusterName **required** `string`: The name of the Event Hubs Cluster.
  * api-version **required** `string`: Client API version.

#### Output
* output [ClusterQuotaConfigurationProperties](#clusterquotaconfigurationproperties)

### Configuration_Patch
Replace all specified Event Hubs Cluster settings with those contained in the request body. Leaves the settings not specified in the request body unmodified.


```js
azure_eventhub_eventhub_preview.Configuration_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * clusterName **required** `string`: The name of the Event Hubs Cluster.
  * api-version **required** `string`: Client API version.
  * parameters **required** [ClusterQuotaConfigurationProperties](#clusterquotaconfigurationproperties)

#### Output
* output [ClusterQuotaConfigurationProperties](#clusterquotaconfigurationproperties)

### Namespaces_ListByResourceGroup
Lists the available Namespaces within a resource group.


```js
azure_eventhub_eventhub_preview.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespaceListResult](#ehnamespacelistresult)

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_Get
Gets the description of the specified namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespace](#ehnamespace)

### Namespaces_Update
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_eventhub_eventhub_preview.Namespaces_Update({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * parameters **required** [EHNamespace](#ehnamespace)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespace](#ehnamespace)

### Namespaces_CreateOrUpdate
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_eventhub_eventhub_preview.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * parameters **required** [EHNamespace](#ehnamespace)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespace](#ehnamespace)

### Namespaces_ListIPFilterRules
Gets a list of IP Filter rules for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_ListIPFilterRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpFilterRuleListResult](#ipfilterrulelistresult)

### Namespaces_DeleteIpFilterRule
Deletes an IpFilterRule for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_DeleteIpFilterRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "ipFilterRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * ipFilterRuleName **required** `string`: The IP Filter Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetIpFilterRule
Gets an IpFilterRule for a Namespace by rule name.


```js
azure_eventhub_eventhub_preview.Namespaces_GetIpFilterRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "ipFilterRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * ipFilterRuleName **required** `string`: The IP Filter Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpFilterRule](#ipfilterrule)

### Namespaces_CreateOrUpdateIpFilterRule
Creates or updates an IpFilterRule for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_CreateOrUpdateIpFilterRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "ipFilterRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * ipFilterRuleName **required** `string`: The IP Filter Rule name.
  * parameters **required** [IpFilterRule](#ipfilterrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpFilterRule](#ipfilterrule)

### Namespaces_GetNetworkRuleSet
Gets NetworkRuleSet for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_GetNetworkRuleSet({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkRuleSet](#networkruleset)

### Namespaces_CreateOrUpdateNetworkRuleSet
Create or update NetworkRuleSet for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_CreateOrUpdateNetworkRuleSet({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [NetworkRuleSet](#networkruleset)

#### Output
* output [NetworkRuleSet](#networkruleset)

### Namespaces_ListVirtualNetworkRules
Gets a list of VirtualNetwork rules for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_ListVirtualNetworkRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkRuleListResult](#virtualnetworkrulelistresult)

### Namespaces_DeleteVirtualNetworkRule
Deletes an VirtualNetworkRule for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_DeleteVirtualNetworkRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "virtualNetworkRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * virtualNetworkRuleName **required** `string`: The Virtual Network Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetVirtualNetworkRule
Gets an VirtualNetworkRule for a Namespace by rule name.


```js
azure_eventhub_eventhub_preview.Namespaces_GetVirtualNetworkRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "virtualNetworkRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * virtualNetworkRuleName **required** `string`: The Virtual Network Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkRule](#virtualnetworkrule)

### Namespaces_CreateOrUpdateVirtualNetworkRule
Creates or updates an VirtualNetworkRule for a Namespace.


```js
azure_eventhub_eventhub_preview.Namespaces_CreateOrUpdateVirtualNetworkRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "virtualNetworkRuleName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * virtualNetworkRuleName **required** `string`: The Virtual Network Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [VirtualNetworkRule](#virtualnetworkrule)

#### Output
* output [VirtualNetworkRule](#virtualnetworkrule)



## Definitions

### AvailableCluster
* AvailableCluster `object`: Pre-provisioned and readily available Event Hubs Cluster count per region.
  * location `string`: Location fo the Available Cluster

### AvailableClustersList
* AvailableClustersList `object`: The response of the List Available Clusters operation.
  * value `array`: The count of readily available and pre-provisioned Event Hubs Clusters per region.
    * items [AvailableCluster](#availablecluster)

### Cluster
* Cluster `object`: Single Event Hubs Cluster resource in List or Get operations.
  * properties `object`: Event Hubs Cluster properties supplied in responses in List or Get operations.
    * created `string`: The UTC time when the Event Hubs Cluster was created.
    * metricId `string`: The metric ID of the cluster resource. Provided by the service and not modifiable by the user.
    * status `string`: Status of the Cluster resource
    * updated `string`: The UTC time when the Event Hubs Cluster was last updated.
  * sku [ClusterSku](#clustersku)
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ClusterListResult
* ClusterListResult `object`: The response of the List Event Hubs Clusters operation.
  * nextLink `string`: Link to the next set of results. Empty unless the value parameter contains an incomplete list of Event Hubs Clusters.
  * value `array`: The Event Hubs Clusters present in the List Event Hubs operation results.
    * items [Cluster](#cluster)

### ClusterQuotaConfigurationProperties
* ClusterQuotaConfigurationProperties `object`: Contains all settings for the cluster.
  * settings `object`: All possible Cluster settings - a collection of key/value paired settings which apply to quotas and configurations imposed on the cluster.

### ClusterSku
* ClusterSku `object`: SKU parameters particular to a cluster instance.
  * capacity `integer`: The quantity of Event Hubs Cluster Capacity Units contained in this cluster.
  * name **required** `string` (values: Dedicated): Name of this SKU.

### EHNamespace
* EHNamespace `object`: Single Namespace item in List or Get Operation
  * properties `object`: Namespace properties supplied for create namespace operation.
    * clusterArmId `string`: Cluster ARM ID of the Namespace.
    * createdAt `string`: The time the Namespace was created.
    * encryption [Encryption](#encryption)
    * identity [Identity](#identity)
    * isAutoInflateEnabled `boolean`: Value that indicates whether AutoInflate is enabled for eventhub namespace.
    * kafkaEnabled `boolean`: Value that indicates whether Kafka is enabled for eventhub namespace.
    * maximumThroughputUnits `integer`: Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
    * metricId `string`: Identifier for Azure Insights metrics.
    * provisioningState `string`: Provisioning state of the Namespace.
    * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
    * updatedAt `string`: The time the Namespace was updated.
    * zoneRedundant `boolean`: Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones.
  * sku [Sku](#sku)
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### EHNamespaceIdContainer
* EHNamespaceIdContainer `object`: The full ARM ID of an Event Hubs Namespace
  * id `string`: id parameter

### EHNamespaceIdListResult
* EHNamespaceIdListResult `object`: The response of the List Namespace IDs operation
  * value `array`: Result of the List Namespace IDs operation
    * items [EHNamespaceIdContainer](#ehnamespaceidcontainer)

### EHNamespaceListResult
* EHNamespaceListResult `object`: The response of the List Namespace operation
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of namespaces.
  * value `array`: Result of the List Namespace operation
    * items [EHNamespace](#ehnamespace)

### Encryption
* Encryption `object`: Properties to configure Encryption
  * keySource `string` (values: Microsoft.KeyVault): Enumerates the possible value of keySource for Encryption
  * keyVaultProperties [KeyVaultProperties](#keyvaultproperties)

### ErrorResponse
* ErrorResponse `object`: Error response that indicates the service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### Identity
* Identity `object`: Properties to configure Identity for Bring your Own Keys
  * principalId `string`: ObjectId from the KeyVault
  * tenantId `string`: TenantId from the KeyVault
  * type `string` (values: SystemAssigned): Enumerates the possible value Identity type, which currently supports only 'SystemAssigned'

### IpFilterRule
* IpFilterRule `object`: Single item in a List or Get IpFilterRules operation
  * properties `object`: Properties supplied to create or update IpFilterRules
    * action `string` (values: Accept, Reject): The IP Filter Action
    * filterName `string`: IP Filter name
    * ipMask `string`: IP Mask
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### IpFilterRuleListResult
* IpFilterRuleListResult `object`: The response from the List namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains an incomplete list of IpFilter Rules
  * value `array`: Result of the List IpFilter Rules operation.
    * items [IpFilterRule](#ipfilterrule)

### KeyVaultProperties
* KeyVaultProperties `object`: Properties to configure keyVault Properties
  * keyName `string`: Name of the Key from KeyVault
  * keyVaultUri `string`: Uri of KeyVault

### NWRuleSetIpRules
* NWRuleSetIpRules `object`: The response from the List namespace operation.
  * action `string` (values: Allow): The IP Filter Action
  * ipMask `string`: IP Mask

### NWRuleSetVirtualNetworkRules
* NWRuleSetVirtualNetworkRules `object`: The response from the List namespace operation.
  * ignoreMissingVnetServiceEndpoint `boolean`: Value that indicates whether to ignore missing Vnet Service Endpoint
  * subnet [Subnet](#subnet)

### NetworkRuleSet
* NetworkRuleSet `object`: Description of topic resource.
  * properties `object`: NetworkRuleSet properties
    * defaultAction `string` (values: Allow, Deny): Default Action for Network Rule Set
    * ipRules `array`: List of IpRules
      * items [NWRuleSetIpRules](#nwrulesetiprules)
    * virtualNetworkRules `array`: List VirtualNetwork Rules
      * items [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### Operation
* Operation `object`: A Event Hub REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.EventHub
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Event Hub operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Event Hub operations supported by the Microsoft.EventHub resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: The Resource definition
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### Sku
* Sku `object`: SKU parameters supplied to the create namespace operation
  * capacity `integer`: The Event Hubs throughput units, value should be 0 to 20 throughput units.
  * name **required** `string` (values: Basic, Standard): Name of this SKU.
  * tier `string` (values: Basic, Standard): The billing tier of this particular SKU.

### Subnet
* Subnet `object`: Properties supplied for Subnet
  * id `string`: Resource ID of Virtual Network Subnet

### TrackedResource
* TrackedResource `object`: Definition of an Azure resource.
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### VirtualNetworkRule
* VirtualNetworkRule `object`: Single item in a List or Get VirtualNetworkRules operation
  * properties `object`: Properties supplied to create or update VirtualNetworkRules
    * virtualNetworkSubnetId `string`: ARM ID of Virtual Network Subnet
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### VirtualNetworkRuleListResult
* VirtualNetworkRuleListResult `object`: The response from the List namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains an incomplete list of VirtualNetwork Rules
  * value `array`: Result of the List VirtualNetwork Rules operation.
    * items [VirtualNetworkRule](#virtualnetworkrule)


