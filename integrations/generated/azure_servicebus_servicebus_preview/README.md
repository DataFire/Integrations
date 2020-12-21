# @datafire/azure_servicebus_servicebus_preview

Client library for ServiceBusManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_servicebus_servicebus_preview
```
```js
let azure_servicebus_servicebus_preview = require('@datafire/azure_servicebus_servicebus_preview').create({
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

Azure Service Bus client for managing Namespace, IPFilter Rules, VirtualNetworkRules and Zone Redundant

## Actions

### Operations_List
Lists all of the available ServiceBus REST API operations.


```js
azure_servicebus_servicebus_preview.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Namespaces_List
Gets all the available namespaces within the subscription, irrespective of the resource groups.


```js
azure_servicebus_servicebus_preview.Namespaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBNamespaceListResult](#sbnamespacelistresult)

### Namespaces_ListByResourceGroup
Gets the available namespaces within a resource group.


```js
azure_servicebus_servicebus_preview.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBNamespaceListResult](#sbnamespacelistresult)

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_Get
Gets a description for the specified namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBNamespace](#sbnamespace)

### Namespaces_Update
Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_servicebus_servicebus_preview.Namespaces_Update({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * parameters **required** [SBNamespaceUpdateParameters](#sbnamespaceupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBNamespace](#sbnamespace)

### Namespaces_CreateOrUpdate
Creates or updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_servicebus_servicebus_preview.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name.
  * parameters **required** [SBNamespace](#sbnamespace)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBNamespace](#sbnamespace)

### Namespaces_ListIpFilterRules
Gets a list of IP Filter rules for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_ListIpFilterRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpFilterRuleListResult](#ipfilterrulelistresult)

### Namespaces_DeleteIpFilterRule
Deletes an IpFilterRule for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_DeleteIpFilterRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "ipFilterRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * ipFilterRuleName **required** `string`: The IP Filter Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetIpFilterRule
Gets an IpFilterRule for a Namespace by rule name.


```js
azure_servicebus_servicebus_preview.Namespaces_GetIpFilterRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "ipFilterRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * ipFilterRuleName **required** `string`: The IP Filter Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpFilterRule](#ipfilterrule)

### Namespaces_CreateOrUpdateIpFilterRule
Creates or updates an IpFilterRule for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_CreateOrUpdateIpFilterRule({
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
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * ipFilterRuleName **required** `string`: The IP Filter Rule name.
  * parameters **required** [IpFilterRule](#ipfilterrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [IpFilterRule](#ipfilterrule)

### Namespaces_GetNetworkRuleSet
Gets NetworkRuleSet for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_GetNetworkRuleSet({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkRuleSet](#networkruleset)

### Namespaces_CreateOrUpdateNetworkRuleSet
Gets NetworkRuleSet for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_CreateOrUpdateNetworkRuleSet({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [NetworkRuleSet](#networkruleset)

#### Output
* output [NetworkRuleSet](#networkruleset)

### Namespaces_ListVirtualNetworkRules
Gets a list of VirtualNetwork rules for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_ListVirtualNetworkRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkRuleListResult](#virtualnetworkrulelistresult)

### Namespaces_DeleteVirtualNetworkRule
Deletes an VirtualNetworkRule for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_DeleteVirtualNetworkRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "virtualNetworkRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * virtualNetworkRuleName **required** `string`: The Virtual Network Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetVirtualNetworkRule
Gets an VirtualNetworkRule for a Namespace by rule name.


```js
azure_servicebus_servicebus_preview.Namespaces_GetVirtualNetworkRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "virtualNetworkRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * virtualNetworkRuleName **required** `string`: The Virtual Network Rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkRule](#virtualnetworkrule)

### Namespaces_CreateOrUpdateVirtualNetworkRule
Creates or updates an VirtualNetworkRule for a Namespace.


```js
azure_servicebus_servicebus_preview.Namespaces_CreateOrUpdateVirtualNetworkRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "virtualNetworkRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * virtualNetworkRuleName **required** `string`: The Virtual Network Rule name.
  * parameters **required** [VirtualNetworkRule](#virtualnetworkrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualNetworkRule](#virtualnetworkrule)



## Definitions

### Encryption
* Encryption `object`: Properties to configure Encryption
  * keySource `string` (values: Microsoft.KeyVault): Enumerates the possible value of keySource for Encryption
  * keyVaultProperties [KeyVaultProperties](#keyvaultproperties)

### ErrorResponse
* ErrorResponse `object`: Error response indicates ServiceBus service is not able to process the incoming request. The reason is provided in the error message.
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
* Operation `object`: A ServiceBus REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.ServiceBus
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list ServiceBus operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of ServiceBus operations supported by the Microsoft.ServiceBus resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: The Resource definition for other than namespace.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ResourceNamespacePatch
* ResourceNamespacePatch `object`: The Resource definition.
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBNamespace
* SBNamespace `object`: Description of a namespace resource.
  * properties [SBNamespaceProperties](#sbnamespaceproperties)
  * sku [SBSku](#sbsku)
  * location **required** `string`: The Geo-location where the resource lives
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBNamespaceListResult
* SBNamespaceListResult `object`: The response of the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Namespaces.
  * value `array`: Result of the List Namespace operation.
    * items [SBNamespace](#sbnamespace)

### SBNamespaceProperties
* SBNamespaceProperties `object`: Properties of the namespace.
  * createdAt `string`: The time the namespace was created.
  * encryption [Encryption](#encryption)
  * identity [Identity](#identity)
  * metricId `string`: Identifier for Azure Insights metrics
  * provisioningState `string`: Provisioning state of the namespace.
  * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
  * updatedAt `string`: The time the namespace was updated.
  * zoneRedundant `boolean`: Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.

### SBNamespaceUpdateParameters
* SBNamespaceUpdateParameters `object`: Description of a namespace resource.
  * properties [SBNamespaceProperties](#sbnamespaceproperties)
  * sku [SBSku](#sbsku)
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBSku
* SBSku `object`: SKU of the namespace.
  * capacity `integer`: The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
  * name **required** `string` (values: Basic, Standard, Premium): Name of this SKU.
  * tier `string` (values: Basic, Standard, Premium): The billing tier of this particular SKU.

### Subnet
* Subnet `object`: Properties supplied for Subnet
  * id `string`: Resource ID of Virtual Network Subnet

### TrackedResource
* TrackedResource `object`: The Resource definition.
  * location **required** `string`: The Geo-location where the resource lives
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### VirtualNetworkRule
* VirtualNetworkRule `object`: Single item in a List or Get VirtualNetworkRules operation
  * properties `object`: Properties supplied to create or update VirtualNetworkRules
    * virtualNetworkSubnetId `string`: Resource ID of Virtual Network Subnet
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### VirtualNetworkRuleListResult
* VirtualNetworkRuleListResult `object`: The response from the List namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains an incomplete list of VirtualNetwork Rules
  * value `array`: Result of the List VirtualNetwork Rules operation.
    * items [VirtualNetworkRule](#virtualnetworkrule)


