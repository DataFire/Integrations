# @datafire/azure_servicebus

Client library for ServiceBusManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_servicebus
```
```js
let azure_servicebus = require('@datafire/azure_servicebus').create({
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

Azure Service Bus client

## Actions

### Operations_List
Lists all of the available ServiceBus REST API operations.


```js
azure_servicebus.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Namespaces_CheckNameAvailability
Check the give namespace name availability.


```js
azure_servicebus.Namespaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [CheckNameAvailability](#checknameavailability)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Namespaces_List
Gets all the available namespaces within the subscription, irrespective of the resource groups.


```js
azure_servicebus.Namespaces_List({
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

### PremiumMessagingRegions_List
Gets the available premium messaging regions for servicebus 


```js
azure_servicebus.PremiumMessagingRegions_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PremiumMessagingRegionsListResult](#premiummessagingregionslistresult)

### Regions_ListBySku
Gets the available Regions for a given sku


```js
azure_servicebus.Regions_ListBySku({
  "api-version": "",
  "subscriptionId": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * sku **required** `string`: The sku type.

#### Output
* output [PremiumMessagingRegionsListResult](#premiummessagingregionslistresult)

### Namespaces_ListByResourceGroup
Gets the available namespaces within a resource group.


```js
azure_servicebus.Namespaces_ListByResourceGroup({
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
azure_servicebus.Namespaces_Delete({
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
azure_servicebus.Namespaces_Get({
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
azure_servicebus.Namespaces_Update({
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
azure_servicebus.Namespaces_CreateOrUpdate({
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

### Namespaces_ListAuthorizationRules
Gets the authorization rules for a namespace.


```js
azure_servicebus.Namespaces_ListAuthorizationRules({
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
* output [SBAuthorizationRuleListResult](#sbauthorizationrulelistresult)

### Namespaces_DeleteAuthorizationRule
Deletes a namespace authorization rule.


```js
azure_servicebus.Namespaces_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetAuthorizationRule
Gets an authorization rule for a namespace by rule name.


```js
azure_servicebus.Namespaces_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRule](#sbauthorizationrule)

### Namespaces_CreateOrUpdateAuthorizationRule
Creates or updates an authorization rule for a namespace.


```js
azure_servicebus.Namespaces_CreateOrUpdateAuthorizationRule({
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
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [SBAuthorizationRule](#sbauthorizationrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRule](#sbauthorizationrule)

### Namespaces_ListKeys
Gets the primary and secondary connection strings for the namespace.


```js
azure_servicebus.Namespaces_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### Namespaces_RegenerateKeys
Regenerates the primary or secondary connection strings for the namespace.


```js
azure_servicebus.Namespaces_RegenerateKeys({
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
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### DisasterRecoveryConfigs_List
Gets all Alias(Disaster Recovery configurations)


```js
azure_servicebus.DisasterRecoveryConfigs_List({
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
* output [ArmDisasterRecoveryListResult](#armdisasterrecoverylistresult)

### DisasterRecoveryConfigs_CheckNameAvailability
Check the give namespace name availability.


```js
azure_servicebus.DisasterRecoveryConfigs_CheckNameAvailability({
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
  * parameters **required** [CheckNameAvailability](#checknameavailability)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### DisasterRecoveryConfigs_Delete
Deletes an Alias(Disaster Recovery configuration)


```js
azure_servicebus.DisasterRecoveryConfigs_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DisasterRecoveryConfigs_Get
Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace


```js
azure_servicebus.DisasterRecoveryConfigs_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ArmDisasterRecovery](#armdisasterrecovery)

### DisasterRecoveryConfigs_CreateOrUpdate
Creates or updates a new Alias(Disaster Recovery configuration)


```js
azure_servicebus.DisasterRecoveryConfigs_CreateOrUpdate({
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
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * parameters **required** [ArmDisasterRecovery](#armdisasterrecovery)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ArmDisasterRecovery](#armdisasterrecovery)

### DisasterRecoveryConfigs_ListAuthorizationRules
Gets the authorization rules for a namespace.


```js
azure_servicebus.DisasterRecoveryConfigs_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRuleListResult](#sbauthorizationrulelistresult)

### DisasterRecoveryConfigs_GetAuthorizationRule
Gets an authorization rule for a namespace by rule name.


```js
azure_servicebus.DisasterRecoveryConfigs_GetAuthorizationRule({
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
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRule](#sbauthorizationrule)

### DisasterRecoveryConfigs_ListKeys
Gets the primary and secondary connection strings for the namespace.


```js
azure_servicebus.DisasterRecoveryConfigs_ListKeys({
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
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### DisasterRecoveryConfigs_BreakPairing
This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces


```js
azure_servicebus.DisasterRecoveryConfigs_BreakPairing({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DisasterRecoveryConfigs_FailOver
Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace


```js
azure_servicebus.DisasterRecoveryConfigs_FailOver({
  "resourceGroupName": "",
  "namespaceName": "",
  "alias": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * alias **required** `string`: The Disaster Recovery configuration name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### EventHubs_ListByNamespace
Gets all the Event Hubs in a service bus Namespace.


```js
azure_servicebus.EventHubs_ListByNamespace({
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
* output [EventHubListResult](#eventhublistresult)

### Namespaces_Migrate
This operation Migrate the given namespace to provided name type


```js
azure_servicebus.Namespaces_Migrate({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": {
    "targetNamespaceType": ""
  }
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * parameters **required** [SBNamespaceMigrate](#sbnamespacemigrate)

#### Output
*Output schema unknown*

### MigrationConfigs_List
Gets all migrationConfigurations


```js
azure_servicebus.MigrationConfigs_List({
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
* output [MigrationConfigListResult](#migrationconfiglistresult)

### MigrationConfigs_Delete
Deletes a MigrationConfiguration


```js
azure_servicebus.MigrationConfigs_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "configName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * configName **required** `string` (values: $default): The configuration name. Should always be "$default".
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### MigrationConfigs_Get
Retrieves Migration Config


```js
azure_servicebus.MigrationConfigs_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "configName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * configName **required** `string` (values: $default): The configuration name. Should always be "$default".
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [MigrationConfigProperties](#migrationconfigproperties)

### MigrationConfigs_CreateAndStartMigration
Creates Migration configuration and starts migration of entities from Standard to Premium namespace


```js
azure_servicebus.MigrationConfigs_CreateAndStartMigration({
  "resourceGroupName": "",
  "namespaceName": "",
  "configName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * configName **required** `string` (values: $default): The configuration name. Should always be "$default".
  * parameters **required** [MigrationConfigProperties](#migrationconfigproperties)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [MigrationConfigProperties](#migrationconfigproperties)

### MigrationConfigs_Revert
This operation reverts Migration


```js
azure_servicebus.MigrationConfigs_Revert({
  "resourceGroupName": "",
  "namespaceName": "",
  "configName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * configName **required** `string` (values: $default): The configuration name. Should always be "$default".
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### MigrationConfigs_CompleteMigration
This operation Completes Migration of entities by pointing the connection strings to Premium namespace and any entities created after the operation will be under Premium Namespace. CompleteMigration operation will fail when entity migration is in-progress.


```js
azure_servicebus.MigrationConfigs_CompleteMigration({
  "resourceGroupName": "",
  "namespaceName": "",
  "configName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * configName **required** `string` (values: $default): The configuration name. Should always be "$default".
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_ListNetworkRuleSets
Gets list of NetworkRuleSet for a Namespace.


```js
azure_servicebus.Namespaces_ListNetworkRuleSets({
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
* output [NetworkRuleSetListResult](#networkrulesetlistresult)

### Namespaces_GetNetworkRuleSet
Gets NetworkRuleSet for a Namespace.


```js
azure_servicebus.Namespaces_GetNetworkRuleSet({
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
Create or update NetworkRuleSet for a Namespace.


```js
azure_servicebus.Namespaces_CreateOrUpdateNetworkRuleSet({
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

### Queues_ListByNamespace
Gets the queues within a namespace.


```js
azure_servicebus.Queues_ListByNamespace({
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
  * $skip `integer`: Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.

#### Output
* output [SBQueueListResult](#sbqueuelistresult)

### Queues_Delete
Deletes a queue from the specified namespace in a resource group.


```js
azure_servicebus.Queues_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Queues_Get
Returns a description for the specified queue.


```js
azure_servicebus.Queues_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBQueue](#sbqueue)

### Queues_CreateOrUpdate
Creates or updates a Service Bus queue. This operation is idempotent.


```js
azure_servicebus.Queues_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * parameters **required** [SBQueue](#sbqueue)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBQueue](#sbqueue)

### Queues_ListAuthorizationRules
Gets all authorization rules for a queue.


```js
azure_servicebus.Queues_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRuleListResult](#sbauthorizationrulelistresult)

### Queues_DeleteAuthorizationRule
Deletes a queue authorization rule.


```js
azure_servicebus.Queues_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Queues_GetAuthorizationRule
Gets an authorization rule for a queue by rule name.


```js
azure_servicebus.Queues_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRule](#sbauthorizationrule)

### Queues_CreateOrUpdateAuthorizationRule
Creates an authorization rule for a queue.


```js
azure_servicebus.Queues_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [SBAuthorizationRule](#sbauthorizationrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRule](#sbauthorizationrule)

### Queues_ListKeys
Primary and secondary connection strings to the queue.


```js
azure_servicebus.Queues_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### Queues_RegenerateKeys
Regenerates the primary or secondary connection strings to the queue.


```js
azure_servicebus.Queues_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### Topics_ListByNamespace
Gets all the topics in a namespace.


```js
azure_servicebus.Topics_ListByNamespace({
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
  * $skip `integer`: Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.

#### Output
* output [SBTopicListResult](#sbtopiclistresult)

### Topics_Delete
Deletes a topic from the specified namespace and resource group.


```js
azure_servicebus.Topics_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Topics_Get
Returns a description for the specified topic.


```js
azure_servicebus.Topics_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBTopic](#sbtopic)

### Topics_CreateOrUpdate
Creates a topic in the specified namespace.


```js
azure_servicebus.Topics_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * parameters **required** [SBTopic](#sbtopic)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBTopic](#sbtopic)

### Topics_ListAuthorizationRules
Gets authorization rules for a topic.


```js
azure_servicebus.Topics_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRuleListResult](#sbauthorizationrulelistresult)

### Topics_DeleteAuthorizationRule
Deletes a topic authorization rule.


```js
azure_servicebus.Topics_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Topics_GetAuthorizationRule
Returns the specified authorization rule.


```js
azure_servicebus.Topics_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRule](#sbauthorizationrule)

### Topics_CreateOrUpdateAuthorizationRule
Creates an authorization rule for the specified topic.


```js
azure_servicebus.Topics_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [SBAuthorizationRule](#sbauthorizationrule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBAuthorizationRule](#sbauthorizationrule)

### Topics_ListKeys
Gets the primary and secondary connection strings for the topic.


```js
azure_servicebus.Topics_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### Topics_RegenerateKeys
Regenerates primary or secondary connection strings for the topic.


```js
azure_servicebus.Topics_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorization rule name.
  * parameters **required** [RegenerateAccessKeyParameters](#regenerateaccesskeyparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AccessKeys](#accesskeys)

### Subscriptions_ListByTopic
List all the subscriptions under a specified topic.


```js
azure_servicebus.Subscriptions_ListByTopic({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $skip `integer`: Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.

#### Output
* output [SBSubscriptionListResult](#sbsubscriptionlistresult)

### Subscriptions_Delete
Deletes a subscription from the specified topic.


```js
azure_servicebus.Subscriptions_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Subscriptions_Get
Returns a subscription description for the specified topic.


```js
azure_servicebus.Subscriptions_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBSubscription](#sbsubscription)

### Subscriptions_CreateOrUpdate
Creates a topic subscription.


```js
azure_servicebus.Subscriptions_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * parameters **required** [SBSubscription](#sbsubscription)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SBSubscription](#sbsubscription)

### Rules_ListBySubscriptions
List all the rules within given topic-subscription


```js
azure_servicebus.Rules_ListBySubscriptions({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $skip `integer`: Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: May be used to limit the number of results to the most recent N usageDetails.

#### Output
* output [RuleListResult](#rulelistresult)

### Rules_Delete
Deletes an existing rule.


```js
azure_servicebus.Rules_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * ruleName **required** `string`: The rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Rules_Get
Retrieves the description for the specified rule.


```js
azure_servicebus.Rules_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * ruleName **required** `string`: The rule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Rule](#rule)

### Rules_CreateOrUpdate
Creates a new rule and updates an existing rule


```js
azure_servicebus.Rules_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "ruleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * ruleName **required** `string`: The rule name.
  * parameters **required** [Rule](#rule)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Rule](#rule)



## Definitions

### AccessKeys
* AccessKeys `object`: Namespace/ServiceBus Connection String
  * aliasPrimaryConnectionString `string`: Primary connection string of the alias if GEO DR is enabled
  * aliasSecondaryConnectionString `string`: Secondary  connection string of the alias if GEO DR is enabled
  * keyName `string`: A string that describes the authorization rule.
  * primaryConnectionString `string`: Primary connection string of the created namespace authorization rule.
  * primaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.
  * secondaryConnectionString `string`: Secondary connection string of the created namespace authorization rule.
  * secondaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.

### Action
* Action `object`: Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
  * compatibilityLevel `integer`: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
  * requiresPreprocessing `boolean`: Value that indicates whether the rule action requires preprocessing.
  * sqlExpression `string`: SQL expression. e.g. MyProperty='ABC'

### ArmDisasterRecovery
* ArmDisasterRecovery `object`: Single item in List or Get Alias(Disaster Recovery configuration) operation
  * properties `object`: Properties required to the Create Or Update Alias(Disaster Recovery configurations)
    * alternateName `string`: Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
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

### AuthorizationRuleProperties
* AuthorizationRuleProperties `object`: AuthorizationRule properties.
  * rights **required** `array`: The rights associated with the rule.
    * items `string` (values: Manage, Send, Listen)

### CaptureDescription
* CaptureDescription `object`: Properties to configure capture description for eventhub
  * destination [Destination](#destination)
  * enabled `boolean`: A value that indicates whether capture description is enabled. 
  * encoding `string` (values: Avro, AvroDeflate): Enumerates the possible values for the encoding format of capture description.
  * intervalInSeconds `integer`: The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
  * sizeLimitInBytes `integer`: The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 and 524288000 bytes

### CheckNameAvailability
* CheckNameAvailability `object`: Description of a Check Name availability request properties.
  * name **required** `string`: The Name to check the namespace name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: Description of a Check Name availability request properties.
  * message `string`: The detailed info regarding the reason associated with the namespace.
  * nameAvailable `boolean`: Value indicating namespace is availability, true if the namespace is available; otherwise, false.
  * reason [UnavailableReason](#unavailablereason)

### CorrelationFilter
* CorrelationFilter `object`: Represents the correlation filter expression.
  * contentType `string`: Content type of the message.
  * correlationId `string`: Identifier of the correlation.
  * label `string`: Application specific label.
  * messageId `string`: Identifier of the message.
  * properties `object`: dictionary object for custom filters
  * replyTo `string`: Address of the queue to reply to.
  * replyToSessionId `string`: Session identifier to reply to.
  * requiresPreprocessing `boolean`: Value that indicates whether the rule action requires preprocessing.
  * sessionId `string`: Session identifier.
  * to `string`: Address to send to.

### Destination
* Destination `object`: Capture storage details for capture description
  * name `string`: Name for capture destination
  * properties `object`: Properties describing the storage account, blob container and archive name format for capture destination
    * archiveNameFormat `string`: Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
    * blobContainer `string`: Blob container Name
    * storageAccountResourceId `string`: Resource id of the storage account to be used to create the blobs

### EntityStatus
* EntityStatus `string` (values: Active, Disabled, Restoring, SendDisabled, ReceiveDisabled, Creating, Deleting, Renaming, Unknown): Entity status.

### ErrorResponse
* ErrorResponse `object`: Error response indicates ServiceBus service is not able to process the incoming request. The reason is provided in the error message.
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

### FilterType
* FilterType `string` (values: SqlFilter, CorrelationFilter): Rule filter types

### MessageCountDetails
* MessageCountDetails `object`: Message Count Details.
  * activeMessageCount `integer`: Number of active messages in the queue, topic, or subscription.
  * deadLetterMessageCount `integer`: Number of messages that are dead lettered.
  * scheduledMessageCount `integer`: Number of scheduled messages.
  * transferDeadLetterMessageCount `integer`: Number of messages transferred into dead letters.
  * transferMessageCount `integer`: Number of messages transferred to another queue, topic, or subscription.

### MigrationConfigListResult
* MigrationConfigListResult `object`: The result of the List migrationConfigurations operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of migrationConfigurations
  * value `array`: List of Migration Configs
    * items [MigrationConfigProperties](#migrationconfigproperties)

### MigrationConfigProperties
* MigrationConfigProperties `object`: Single item in List or Get Migration Config operation
  * properties `object`: Properties required to the Create Migration Configuration
    * migrationState `string`: State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
    * pendingReplicationOperationsCount `integer`: Number of entities pending to be replicated.
    * postMigrationName **required** `string`: Name to access Standard Namespace after migration
    * provisioningState `string`: Provisioning state of Migration Configuration 
    * targetNamespace **required** `string`: Existing premium Namespace ARM Id name which has no entities, will be used for migration
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

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
* NetworkRuleSetListResult `object`: The response of the List NetworkRuleSet operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of NetworkRuleSet.
  * value `array`: Result of the List NetworkRuleSet operation.
    * items [NetworkRuleSet](#networkruleset)

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

### PremiumMessagingRegions
* PremiumMessagingRegions `object`: Premium Messaging Region
  * properties `object`
    * code `string`: Region code
    * fullName `string`: Full name of the region
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### PremiumMessagingRegionsListResult
* PremiumMessagingRegionsListResult `object`: The response of the List PremiumMessagingRegions operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of PremiumMessagingRegions.
  * value `array`: Result of the List PremiumMessagingRegions type.
    * items [PremiumMessagingRegions](#premiummessagingregions)

### RegenerateAccessKeyParameters
* RegenerateAccessKeyParameters `object`: Parameters supplied to the Regenerate Authorization Rule operation, specifies which key needs to be reset.
  * key `string`: Optional, if the key value provided, is reset for KeyType value or autogenerate Key value set for keyType
  * keyType **required** `string` (values: PrimaryKey, SecondaryKey): The access key to regenerate.

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

### Rule
* Rule `object`: Description of Rule Resource.
  * properties [Ruleproperties](#ruleproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### RuleListResult
* RuleListResult `object`: The response of the List rule operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of rules
  * value `array`: Result of the List Rules operation.
    * items [Rule](#rule)

### Ruleproperties
* Ruleproperties `object`: Description of Rule Resource.
  * action [Action](#action)
  * correlationFilter [CorrelationFilter](#correlationfilter)
  * filterType [FilterType](#filtertype)
  * sqlFilter [SqlFilter](#sqlfilter)

### SBAuthorizationRule
* SBAuthorizationRule `object`: Description of a namespace authorization rule.
  * properties `object`: AuthorizationRule properties.
    * rights **required** `array`: The rights associated with the rule.
      * items `string` (values: Manage, Send, Listen)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBAuthorizationRuleListResult
* SBAuthorizationRuleListResult `object`: The response to the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Authorization Rules.
  * value `array`: Result of the List Authorization Rules operation.
    * items [SBAuthorizationRule](#sbauthorizationrule)

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

### SBNamespaceMigrate
* SBNamespaceMigrate `object`: Namespace Migrate Object
  * targetNamespaceType **required** `string` (values: Messaging, NotificationHub, Mixed, EventHub, Relay): Type of namespaces

### SBNamespaceProperties
* SBNamespaceProperties `object`: Properties of the namespace.
  * createdAt `string`: The time the namespace was created.
  * metricId `string`: Identifier for Azure Insights metrics
  * provisioningState `string`: Provisioning state of the namespace.
  * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
  * updatedAt `string`: The time the namespace was updated.

### SBNamespaceUpdateParameters
* SBNamespaceUpdateParameters `object`: Description of a namespace resource.
  * properties [SBNamespaceProperties](#sbnamespaceproperties)
  * sku [SBSku](#sbsku)
  * location `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBQueue
* SBQueue `object`: Description of queue Resource.
  * properties [SBQueueProperties](#sbqueueproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBQueueListResult
* SBQueueListResult `object`: The response to the List Queues operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of queues.
  * value `array`: Result of the List Queues operation.
    * items [SBQueue](#sbqueue)

### SBQueueProperties
* SBQueueProperties `object`: The Queue Properties definition.
  * accessedAt `string`: Last time a message was sent, or the last time there was a receive request to this queue.
  * autoDeleteOnIdle `string`: ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
  * countDetails [MessageCountDetails](#messagecountdetails)
  * createdAt `string`: The exact time the message was created.
  * deadLetteringOnMessageExpiration `boolean`: A value that indicates whether this queue has dead letter support when a message expires.
  * defaultMessageTimeToLive `string`: ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
  * duplicateDetectionHistoryTimeWindow `string`: ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
  * enableBatchedOperations `boolean`: Value that indicates whether server-side batched operations are enabled.
  * enableExpress `boolean`: A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
  * enablePartitioning `boolean`: A value that indicates whether the queue is to be partitioned across multiple message brokers.
  * forwardDeadLetteredMessagesTo `string`: Queue/Topic name to forward the Dead Letter message
  * forwardTo `string`: Queue/Topic name to forward the messages
  * lockDuration `string`: ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
  * maxDeliveryCount `integer`: The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10.
  * maxSizeInMegabytes `integer`: The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024.
  * messageCount `integer`: The number of messages in the queue.
  * requiresDuplicateDetection `boolean`: A value indicating if this queue requires duplicate detection.
  * requiresSession `boolean`: A value that indicates whether the queue supports the concept of sessions.
  * sizeInBytes `integer`: The size of the queue, in bytes.
  * status [EntityStatus](#entitystatus)
  * updatedAt `string`: The exact time the message was updated.

### SBSku
* SBSku `object`: SKU of the namespace.
  * capacity `integer`: The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
  * name **required** `string` (values: Basic, Standard, Premium): Name of this SKU.
  * tier `string` (values: Basic, Standard, Premium): The billing tier of this particular SKU.

### SBSubscription
* SBSubscription `object`: Description of subscription resource.
  * properties [SBSubscriptionProperties](#sbsubscriptionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBSubscriptionListResult
* SBSubscriptionListResult `object`: The response to the List Subscriptions operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of subscriptions.
  * value `array`: Result of the List Subscriptions operation.
    * items [SBSubscription](#sbsubscription)

### SBSubscriptionProperties
* SBSubscriptionProperties `object`: Description of Subscription Resource.
  * accessedAt `string`: Last time there was a receive request to this subscription.
  * autoDeleteOnIdle `string`: ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
  * countDetails [MessageCountDetails](#messagecountdetails)
  * createdAt `string`: Exact time the message was created.
  * deadLetteringOnFilterEvaluationExceptions `boolean`: Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
  * deadLetteringOnMessageExpiration `boolean`: Value that indicates whether a subscription has dead letter support when a message expires.
  * defaultMessageTimeToLive `string`: ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
  * duplicateDetectionHistoryTimeWindow `string`: ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
  * enableBatchedOperations `boolean`: Value that indicates whether server-side batched operations are enabled.
  * forwardDeadLetteredMessagesTo `string`: Queue/Topic name to forward the Dead Letter message
  * forwardTo `string`: Queue/Topic name to forward the messages
  * lockDuration `string`: ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
  * maxDeliveryCount `integer`: Number of maximum deliveries.
  * messageCount `integer`: Number of messages.
  * requiresSession `boolean`: Value indicating if a subscription supports the concept of sessions.
  * status [EntityStatus](#entitystatus)
  * updatedAt `string`: The exact time the message was updated.

### SBTopic
* SBTopic `object`: Description of topic resource.
  * properties [SBTopicProperties](#sbtopicproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SBTopicListResult
* SBTopicListResult `object`: The response to the List Topics operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of topics.
  * value `array`: Result of the List Topics operation.
    * items [SBTopic](#sbtopic)

### SBTopicProperties
* SBTopicProperties `object`: The Topic Properties definition.
  * accessedAt `string`: Last time the message was sent, or a request was received, for this topic.
  * autoDeleteOnIdle `string`: ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
  * countDetails [MessageCountDetails](#messagecountdetails)
  * createdAt `string`: Exact time the message was created.
  * defaultMessageTimeToLive `string`: ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
  * duplicateDetectionHistoryTimeWindow `string`: ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
  * enableBatchedOperations `boolean`: Value that indicates whether server-side batched operations are enabled.
  * enableExpress `boolean`: Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
  * enablePartitioning `boolean`: Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
  * maxSizeInMegabytes `integer`: Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
  * requiresDuplicateDetection `boolean`: Value indicating if this topic requires duplicate detection.
  * sizeInBytes `integer`: Size of the topic, in bytes.
  * status [EntityStatus](#entitystatus)
  * subscriptionCount `integer`: Number of subscriptions.
  * supportOrdering `boolean`: Value that indicates whether the topic supports ordering.
  * updatedAt `string`: The exact time the message was updated.

### SqlFilter
* SqlFilter `object`: Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.
  * compatibilityLevel `integer`: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
  * requiresPreprocessing `boolean`: Value that indicates whether the rule action requires preprocessing.
  * sqlExpression `string`: The SQL expression. e.g. MyProperty='ABC'

### SqlRuleAction
* SqlRuleAction `object`: Represents set of actions written in SQL language-based syntax that is performed against a ServiceBus.Messaging.BrokeredMessage 
  * compatibilityLevel `integer`: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
  * requiresPreprocessing `boolean`: Value that indicates whether the rule action requires preprocessing.
  * sqlExpression `string`: SQL expression. e.g. MyProperty='ABC'
  * compatibilityLevel `integer`: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
  * requiresPreprocessing `boolean`: Value that indicates whether the rule action requires preprocessing.
  * sqlExpression `string`: SQL expression. e.g. MyProperty='ABC'

### Subnet
* Subnet `object`: Properties supplied for Subnet
  * id **required** `string`: Resource ID of Virtual Network Subnet

### TrackedResource
* TrackedResource `object`: The Resource definition.
  * location **required** `string`: The Geo-location where the resource lives
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### UnavailableReason
* UnavailableReason `string` (values: None, InvalidName, SubscriptionIsDisabled, NameInUse, NameInLockdown, TooManyNamespaceInCurrentSubscription): Specifies the reason for the unavailability of the service.


