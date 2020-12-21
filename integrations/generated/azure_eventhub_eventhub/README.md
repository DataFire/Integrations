# @datafire/azure_eventhub_eventhub

Client library for EventHubManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_eventhub_eventhub
```
```js
let azure_eventhub_eventhub = require('@datafire/azure_eventhub_eventhub').create({
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

Azure Event Hubs client

## Actions

### Operations_List
Lists all of the available Event Hub REST API operations.


```js
azure_eventhub_eventhub.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Namespaces_CheckNameAvailability
Check the give Namespace name availability.


```js
azure_eventhub_eventhub.Namespaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [CheckNameAvailabilityParameter](#checknameavailabilityparameter)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Namespaces_List
Lists all the available Namespaces within a subscription, irrespective of the resource groups.


```js
azure_eventhub_eventhub.Namespaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespaceListResult](#ehnamespacelistresult)

### Regions_ListBySku
Gets the available Regions for a given sku


```js
azure_eventhub_eventhub.Regions_ListBySku({
  "api-version": "",
  "subscriptionId": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * sku **required** `string`: The sku type.

#### Output
* output [MessagingRegionsListResult](#messagingregionslistresult)

### Namespaces_ListByResourceGroup
Lists the available Namespaces within a resource group.


```js
azure_eventhub_eventhub.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespaceListResult](#ehnamespacelistresult)

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.


```js
azure_eventhub_eventhub.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_Get
Gets the description of the specified namespace.


```js
azure_eventhub_eventhub.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespace](#ehnamespace)

### Namespaces_Update
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_eventhub_eventhub.Namespaces_Update({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * parameters **required** [EHNamespace](#ehnamespace)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespace](#ehnamespace)

### Namespaces_CreateOrUpdate
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_eventhub_eventhub.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * parameters **required** [EHNamespace](#ehnamespace)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EHNamespace](#ehnamespace)

### Namespaces_ListAuthorizationRules
Gets a list of authorization rules for a Namespace.


```js
azure_eventhub_eventhub.Namespaces_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

### Namespaces_DeleteAuthorizationRule
Deletes an AuthorizationRule for a Namespace.


```js
azure_eventhub_eventhub.Namespaces_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetAuthorizationRule
Gets an AuthorizationRule for a Namespace by rule name.


```js
azure_eventhub_eventhub.Namespaces_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### Namespaces_CreateOrUpdateAuthorizationRule
Creates or updates an AuthorizationRule for a Namespace.


```js
azure_eventhub_eventhub.Namespaces_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### Namespaces_ListKeys
Gets the primary and secondary connection strings for the Namespace.


```js
azure_eventhub_eventhub.Namespaces_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### Namespaces_RegenerateKeys
Regenerates the primary or secondary connection strings for the specified Namespace.


```js
azure_eventhub_eventhub.Namespaces_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### DisasterRecoveryConfigs_List
Gets all Alias(Disaster Recovery configurations)


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_List({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ArmDisasterRecoveryListResult](#armdisasterrecoverylistresult)

### DisasterRecoveryConfigs_CheckNameAvailability
Check the give Namespace name availability.


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * parameters **required** [CheckNameAvailabilityParameter](#checknameavailabilityparameter)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### DisasterRecoveryConfigs_Delete
Deletes an Alias(Disaster Recovery configuration)


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DisasterRecoveryConfigs_Get
Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ArmDisasterRecovery](#armdisasterrecovery)

### DisasterRecoveryConfigs_CreateOrUpdate
Creates or updates a new Alias(Disaster Recovery configuration)


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * parameters **required** [ArmDisasterRecovery](#armdisasterrecovery)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ArmDisasterRecovery](#armdisasterrecovery)

### DisasterRecoveryConfigs_ListAuthorizationRules
Gets a list of authorization rules for a Namespace.


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

### DisasterRecoveryConfigs_GetAuthorizationRule
Gets an AuthorizationRule for a Namespace by rule name.


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### DisasterRecoveryConfigs_ListKeys
Gets the primary and secondary connection strings for the Namespace.


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### DisasterRecoveryConfigs_BreakPairing
This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_BreakPairing({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DisasterRecoveryConfigs_FailOver
Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace


```js
azure_eventhub_eventhub.DisasterRecoveryConfigs_FailOver({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### EventHubs_ListByNamespace
Gets all the Event Hubs in a Namespace.


```js
azure_eventhub_eventhub.EventHubs_ListByNamespace({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $skip `integer`: Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.

#### Output
* output [EventHubListResult](#eventhublistresult)

### EventHubs_Delete
Deletes an Event Hub from the specified Namespace and resource group.


```js
azure_eventhub_eventhub.EventHubs_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### EventHubs_Get
Gets an Event Hubs description for the specified Event Hub.


```js
azure_eventhub_eventhub.EventHubs_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Eventhub](#eventhub)

### EventHubs_CreateOrUpdate
Creates or updates a new Event Hub as a nested resource within a Namespace.


```js
azure_eventhub_eventhub.EventHubs_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * parameters **required** [Eventhub](#eventhub)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Eventhub](#eventhub)

### EventHubs_ListAuthorizationRules
Gets the authorization rules for an Event Hub.


```js
azure_eventhub_eventhub.EventHubs_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRuleListResult](#authorizationrulelistresult)

### EventHubs_DeleteAuthorizationRule
Deletes an Event Hub AuthorizationRule.


```js
azure_eventhub_eventhub.EventHubs_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### EventHubs_GetAuthorizationRule
Gets an AuthorizationRule for an Event Hub by rule name.


```js
azure_eventhub_eventhub.EventHubs_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### EventHubs_CreateOrUpdateAuthorizationRule
Creates or updates an AuthorizationRule for the specified Event Hub.


```js
azure_eventhub_eventhub.EventHubs_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [AuthorizationRule](#authorizationrule)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationRule](#authorizationrule)

### EventHubs_ListKeys
Gets the ACS and SAS connection strings for the Event Hub.


```js
azure_eventhub_eventhub.EventHubs_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### EventHubs_RegenerateKeys
Regenerates the ACS and SAS connection strings for the Event Hub.


```js
azure_eventhub_eventhub.EventHubs_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### ConsumerGroups_ListByEventHub
Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace.


```js
azure_eventhub_eventhub.ConsumerGroups_ListByEventHub({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $skip `integer`: Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.

#### Output
* output [ConsumerGroupListResult](#consumergrouplistresult)

### ConsumerGroups_Delete
Deletes a consumer group from the specified Event Hub and resource group.


```js
azure_eventhub_eventhub.ConsumerGroups_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "consumerGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * consumerGroupName **required** `string`: The consumer group name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ConsumerGroups_Get
Gets a description for the specified consumer group.


```js
azure_eventhub_eventhub.ConsumerGroups_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "consumerGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * consumerGroupName **required** `string`: The consumer group name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConsumerGroup](#consumergroup)

### ConsumerGroups_CreateOrUpdate
Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.


```js
azure_eventhub_eventhub.ConsumerGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "eventHubName": "",
  "consumerGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * eventHubName **required** `string`: The Event Hub name
  * consumerGroupName **required** `string`: The consumer group name
  * parameters **required** [ConsumerGroup](#consumergroup)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConsumerGroup](#consumergroup)

### Namespaces_GetMessagingPlan
Gets messaging plan for specified namespace.


```js
azure_eventhub_eventhub.Namespaces_GetMessagingPlan({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [MessagingPlan](#messagingplan)

### Namespaces_ListNetworkRuleSets
Gets list of NetworkRuleSet for a Namespace.


```js
azure_eventhub_eventhub.Namespaces_ListNetworkRuleSets({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkRuleSetListResult](#networkrulesetlistresult)

### Namespaces_GetNetworkRuleSet
Gets NetworkRuleSet for a Namespace.


```js
azure_eventhub_eventhub.Namespaces_GetNetworkRuleSet({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NetworkRuleSet](#networkruleset)

### Namespaces_CreateOrUpdateNetworkRuleSet
Create or update NetworkRuleSet for a Namespace.


```js
azure_eventhub_eventhub.Namespaces_CreateOrUpdateNetworkRuleSet({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the azure subscription.
  * namespaceName **required** `string`: The Namespace name
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [NetworkRuleSet](#networkruleset)

#### Output
* output [NetworkRuleSet](#networkruleset)



## Definitions

### AccessKeys
* AccessKeys `object`: Namespace/EventHub Connection String
  * aliasPrimaryConnectionString `string`: Primary connection string of the alias if GEO DR is enabled
  * aliasSecondaryConnectionString `string`: Secondary  connection string of the alias if GEO DR is enabled
  * keyName `string`: A string that describes the AuthorizationRule.
  * primaryConnectionString `string`: Primary connection string of the created namespace AuthorizationRule.
  * primaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.
  * secondaryConnectionString `string`: Secondary connection string of the created namespace AuthorizationRule.
  * secondaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.

### ArmDisasterRecovery
* ArmDisasterRecovery `object`: Single item in List or Get Alias(Disaster Recovery configuration) operation
  * properties `object`: Properties required to the Create Or Update Alias(Disaster Recovery configurations)
    * alternateName `string`: Alternate name specified when alias and namespace names are same.
    * partnerNamespace `string`: ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
    * pendingReplicationOperationsCount `integer`: Number of entities pending to be replicated.
    * provisioningState `string` (values: Accepted, Succeeded, Failed): Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
    * role `string` (values: Primary, PrimaryNotReplicating, Secondary): role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ArmDisasterRecoveryListResult
* ArmDisasterRecoveryListResult `object`: The result of the List Alias(Disaster Recovery configuration) operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Alias(Disaster Recovery configuration)
  * value `array`: List of Alias(Disaster Recovery configurations)
    * items [ArmDisasterRecovery](#armdisasterrecovery)

### AuthorizationRule
* AuthorizationRule `object`: Single item in a List or Get AuthorizationRule operation
  * properties `object`: Properties supplied to create or update AuthorizationRule
    * rights **required** `array`: The rights associated with the rule.
      * items `string` (values: Manage, Send, Listen)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AuthorizationRuleListResult
* AuthorizationRuleListResult `object`: The response from the List namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains an incomplete list of Authorization Rules
  * value `array`: Result of the List Authorization Rules operation.
    * items [AuthorizationRule](#authorizationrule)

### CaptureDescription
* CaptureDescription `object`: Properties to configure capture description for eventhub
  * destination [Destination](#destination)
  * enabled `boolean`: A value that indicates whether capture description is enabled. 
  * encoding `string` (values: Avro, AvroDeflate): Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
  * intervalInSeconds `integer`: The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
  * sizeLimitInBytes `integer`: The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
  * skipEmptyArchives `boolean`: A value that indicates whether to Skip Empty Archives

### CheckNameAvailabilityParameter
* CheckNameAvailabilityParameter `object`: Parameter supplied to check Namespace name availability operation 
  * name **required** `string`: Name to check the namespace name availability

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The Result of the CheckNameAvailability operation
  * message `string`: The detailed info regarding the reason associated with the Namespace.
  * nameAvailable `boolean`: Value indicating Namespace is availability, true if the Namespace is available; otherwise, false.
  * reason [UnavailableReason](#unavailablereason)

### ConsumerGroup
* ConsumerGroup `object`: Single item in List or Get Consumer group operation
  * properties `object`: Single item in List or Get Consumer group operation
    * createdAt `string`: Exact time the message was created.
    * updatedAt `string`: The exact time the message was updated.
    * userMetadata `string`: User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ConsumerGroupListResult
* ConsumerGroupListResult `object`: The result to the List Consumer Group operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Consumer Group
  * value `array`: Result of the List Consumer Group operation.
    * items [ConsumerGroup](#consumergroup)

### Destination
* Destination `object`: Capture storage details for capture description
  * name `string`: Name for capture destination
  * properties `object`: Properties describing the storage account, blob container and archive name format for capture destination
    * archiveNameFormat `string`: Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
    * blobContainer `string`: Blob container Name
    * storageAccountResourceId `string`: Resource id of the storage account to be used to create the blobs

### EHNamespace
* EHNamespace `object`: Single Namespace item in List or Get Operation
  * properties `object`: Namespace properties supplied for create namespace operation.
    * createdAt `string`: The time the Namespace was created.
    * isAutoInflateEnabled `boolean`: Value that indicates whether AutoInflate is enabled for eventhub namespace.
    * kafkaEnabled `boolean`: Value that indicates whether Kafka is enabled for eventhub namespace.
    * maximumThroughputUnits `integer`: Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
    * metricId `string`: Identifier for Azure Insights metrics.
    * provisioningState `string`: Provisioning state of the Namespace.
    * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
    * updatedAt `string`: The time the Namespace was updated.
  * sku [Sku](#sku)
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### EHNamespaceListResult
* EHNamespaceListResult `object`: The response of the List Namespace operation
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of namespaces.
  * value `array`: Result of the List Namespace operation
    * items [EHNamespace](#ehnamespace)

### ErrorResponse
* ErrorResponse `object`: Error response indicates EventHub service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### EventHubListResult
* EventHubListResult `object`: The result of the List EventHubs operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of EventHubs.
  * value `array`: Result of the List EventHubs operation.
    * items [Eventhub](#eventhub)

### Eventhub
* Eventhub `object`: Single item in List or Get Event Hub operation
  * properties `object`: Properties supplied to the Create Or Update Event Hub operation.
    * captureDescription [CaptureDescription](#capturedescription)
    * createdAt `string`: Exact time the Event Hub was created.
    * messageRetentionInDays `integer`: Number of days to retain the events for this Event Hub, value should be 1 to 7 days
    * partitionCount `integer`: Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
    * partitionIds `array`: Current number of shards on the Event Hub.
      * items `string`
    * status `string` (values: Active, Disabled, Restoring, SendDisabled, ReceiveDisabled, Creating, Deleting, Renaming, Unknown): Enumerates the possible values for the status of the Event Hub.
    * updatedAt `string`: The exact time the message was updated.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### MessagingPlan
* MessagingPlan `object`: Messaging Plan for the namespace
  * properties `object`
    * revision `integer`: revision number
    * selectedEventHubUnit `integer`: Selected event hub unit
    * sku `integer`: Sku type
    * updatedAt `string`: The exact time the messaging plan was updated.
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### MessagingRegions
* MessagingRegions `object`: Messaging Region
  * properties `object`
    * code `string`: Region code
    * fullName `string`: Full name of the region
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### MessagingRegionsListResult
* MessagingRegionsListResult `object`: The response of the List MessagingRegions operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of MessagingRegions.
  * value `array`: Result of the List MessagingRegions type.
    * items [MessagingRegions](#messagingregions)

### NWRuleSetIpRules
* NWRuleSetIpRules `object`: Description of NetWorkRuleSet - IpRules resource.
  * action `string` (values: Allow): The IP Filter Action
  * ipMask `string`: IP Mask

### NWRuleSetVirtualNetworkRules
* NWRuleSetVirtualNetworkRules `object`: Description of VirtualNetworkRules - NetworkRules resource.
  * ignoreMissingVnetServiceEndpoint `boolean`: Value that indicates whether to ignore missing VNet Service Endpoint
  * subnet [Subnet](#subnet)

### NetworkRuleSet
* NetworkRuleSet `object`: Description of NetworkRuleSet resource.
  * properties `object`: NetworkRuleSet properties
    * defaultAction `string` (values: Allow, Deny): Default Action for Network Rule Set
    * ipRules `array`: List of IpRules
      * items [NWRuleSetIpRules](#nwrulesetiprules)
    * virtualNetworkRules `array`: List VirtualNetwork Rules
      * items [NWRuleSetVirtualNetworkRules](#nwrulesetvirtualnetworkrules)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### NetworkRuleSetListResult
* NetworkRuleSetListResult `object`: The response of the List NetworkRuleSet operation
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of NetworkRuleSet.
  * value `array`: Result of the List NetworkRuleSet operation.
    * items [NetworkRuleSet](#networkruleset)

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

### RegenerateAccessKeyParameters
* RegenerateAccessKeyParameters `object`: Parameters supplied to the Regenerate Authorization Rule operation, specifies which key needs to be reset.
  * key `string`: Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType
  * keyType **required** `string` (values: PrimaryKey, SecondaryKey): The access key to regenerate.

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
  * id **required** `string`: Resource ID of Virtual Network Subnet

### TrackedResource
* TrackedResource `object`: Definition of Resource
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### UnavailableReason
* UnavailableReason `string` (values: None, InvalidName, SubscriptionIsDisabled, NameInUse, NameInLockdown, TooManyNamespaceInCurrentSubscription): Specifies the reason for the unavailability of the service.


