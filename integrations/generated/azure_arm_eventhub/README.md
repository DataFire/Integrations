# @datafire/azure_arm_eventhub

Client library for EventHubManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_eventhub
```
```js
let azure_arm_eventhub = require('@datafire/azure_arm_eventhub').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_eventhub.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description

Azure Event Hubs client

## Actions

### Operations_List
Lists all of the available Event Hub REST API operations.


```js
azure_arm_eventhub.Operations_List({
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
azure_arm_eventhub.Namespaces_CheckNameAvailability({
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

### Namespaces_ListBySubscription
Lists all the available Namespaces within a subscription, irrespective of the resource groups.


```js
azure_arm_eventhub.Namespaces_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceListResult](#namespacelistresult)

### Namespaces_ListByResourceGroup
Lists the available Namespaces within a resource group.


```js
azure_arm_eventhub.Namespaces_ListByResourceGroup({
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
* output [NamespaceListResult](#namespacelistresult)

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.


```js
azure_arm_eventhub.Namespaces_Delete({
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
azure_arm_eventhub.Namespaces_Get({
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
* output [NamespaceResource](#namespaceresource)

### Namespaces_Update
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_arm_eventhub.Namespaces_Update({
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
  * parameters **required** [NamespaceUpdateParameter](#namespaceupdateparameter)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceResource](#namespaceresource)

### Namespaces_CreateOrUpdate
Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_arm_eventhub.Namespaces_CreateOrUpdate({
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
  * parameters **required** [NamespaceCreateOrUpdateParameters](#namespacecreateorupdateparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceResource](#namespaceresource)

### Namespaces_ListAuthorizationRules
Gets a list of authorization rules for a Namespace.


```js
azure_arm_eventhub.Namespaces_ListAuthorizationRules({
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
* output [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

### Namespaces_DeleteAuthorizationRule
Deletes an AuthorizationRule for a Namespace.


```js
azure_arm_eventhub.Namespaces_DeleteAuthorizationRule({
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
azure_arm_eventhub.Namespaces_GetAuthorizationRule({
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
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### Namespaces_CreateOrUpdateAuthorizationRule
Creates or updates an AuthorizationRule for a Namespace.


```js
azure_arm_eventhub.Namespaces_CreateOrUpdateAuthorizationRule({
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
  * parameters **required** [SharedAccessAuthorizationRuleCreateOrUpdateParameters](#sharedaccessauthorizationrulecreateorupdateparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### Namespaces_ListKeys
Gets the primary and secondary connection strings for the Namespace.


```js
azure_arm_eventhub.Namespaces_ListKeys({
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
* output [ResourceListKeys](#resourcelistkeys)

### Namespaces_RegenerateKeys
Regenerates the primary or secondary connection strings for the specified Namespace.


```js
azure_arm_eventhub.Namespaces_RegenerateKeys({
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
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

### EventHubs_ListAll
Gets all the Event Hubs in a Namespace.


```js
azure_arm_eventhub.EventHubs_ListAll({
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
* output [EventHubListResult](#eventhublistresult)

### EventHubs_Delete
Deletes an Event Hub from the specified Namespace and resource group.


```js
azure_arm_eventhub.EventHubs_Delete({
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
azure_arm_eventhub.EventHubs_Get({
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
* output [EventHubResource](#eventhubresource)

### EventHubs_CreateOrUpdate
Creates or updates a new Event Hub as a nested resource within a Namespace.


```js
azure_arm_eventhub.EventHubs_CreateOrUpdate({
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
  * parameters **required** [EventHubCreateOrUpdateParameters](#eventhubcreateorupdateparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EventHubResource](#eventhubresource)

### EventHubs_ListAuthorizationRules
Gets the authorization rules for an Event Hub.


```js
azure_arm_eventhub.EventHubs_ListAuthorizationRules({
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
* output [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

### EventHubs_DeleteAuthorizationRule
Deletes an Event Hub AuthorizationRule.


```js
azure_arm_eventhub.EventHubs_DeleteAuthorizationRule({
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
azure_arm_eventhub.EventHubs_GetAuthorizationRule({
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
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### EventHubs_CreateOrUpdateAuthorizationRule
Creates or updates an AuthorizationRule for the specified Event Hub.


```js
azure_arm_eventhub.EventHubs_CreateOrUpdateAuthorizationRule({
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
  * parameters **required** [SharedAccessAuthorizationRuleCreateOrUpdateParameters](#sharedaccessauthorizationrulecreateorupdateparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### EventHubs_ListKeys
Gets the ACS and SAS connection strings for the Event Hub.


```js
azure_arm_eventhub.EventHubs_ListKeys({
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
* output [ResourceListKeys](#resourcelistkeys)

### EventHubs_RegenerateKeys
Regenerates the ACS and SAS connection strings for the Event Hub.


```js
azure_arm_eventhub.EventHubs_RegenerateKeys({
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
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

### ConsumerGroups_ListAll
Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace.


```js
azure_arm_eventhub.ConsumerGroups_ListAll({
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
* output [ConsumerGroupListResult](#consumergrouplistresult)

### ConsumerGroups_Delete
Deletes a consumer group from the specified Event Hub and resource group.


```js
azure_arm_eventhub.ConsumerGroups_Delete({
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
azure_arm_eventhub.ConsumerGroups_Get({
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
* output [ConsumerGroupResource](#consumergroupresource)

### ConsumerGroups_CreateOrUpdate
Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.


```js
azure_arm_eventhub.ConsumerGroups_CreateOrUpdate({
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
  * parameters **required** [ConsumerGroupCreateOrUpdateParameters](#consumergroupcreateorupdateparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConsumerGroupResource](#consumergroupresource)



## Definitions

### CheckNameAvailabilityParameter
* CheckNameAvailabilityParameter `object`: Parameter supplied to check Namespace name availability operation 
  * name **required** `string`: Name to check the namespace name availability

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The Result of the CheckNameAvailability operation
  * message `string`: The detailed info regarding the reason associated with the Namespace.
  * nameAvailable `boolean`: Value indicating Namespace is availability, true if the Namespace is available; otherwise, false.
  * reason [UnavailableReason](#unavailablereason)

### ConsumerGroupCreateOrUpdateParameters
* ConsumerGroupCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Consumer Group operation.
  * location **required** `string`: Location of the resource.
  * name `string`: Name of the consumer group.
  * properties [ConsumerGroupProperties](#consumergroupproperties)
  * type `string`: ARM type of the Namespace.

### ConsumerGroupListResult
* ConsumerGroupListResult `object`: The result to the List Consumer Group operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Consumer Group
  * value `array`: Result of the List Consumer Group operation.
    * items [ConsumerGroupResource](#consumergroupresource)

### ConsumerGroupProperties
* ConsumerGroupProperties `object`: Properties supplied to the Create Or Update Consumer Group operation.
  * createdAt `string`: Exact time the message was created.
  * eventHubPath `string`: The path of the Event Hub.
  * updatedAt `string`: The exact time the message was updated.
  * userMetadata `string`: The user metadata.

### ConsumerGroupResource
* ConsumerGroupResource `object`: Single item in List or Get Consumer group operation
  * properties [ConsumerGroupProperties](#consumergroupproperties)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * type `string`: Resource type

### EventHubCreateOrUpdateParameters
* EventHubCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Event Hub operation.
  * location **required** `string`: Location of the resource.
  * name `string`: Name of the Event Hub.
  * properties [EventHubProperties](#eventhubproperties)
  * type `string`: ARM type of the Namespace.

### EventHubListResult
* EventHubListResult `object`: The result of the List EventHubs operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of EventHubs.
  * value `array`: Result of the List EventHubs operation.
    * items [EventHubResource](#eventhubresource)

### EventHubProperties
* EventHubProperties `object`: Properties supplied to the Create Or Update Event Hub operation.
  * createdAt `string`: Exact time the Event Hub was created.
  * messageRetentionInDays `integer`: Number of days to retain the events for this Event Hub.
  * partitionCount `integer`: Number of partitions created for the Event Hub.
  * partitionIds `array`: Current number of shards on the Event Hub.
    * items `string`
  * status `string` (values: Active, Disabled, Restoring, SendDisabled, ReceiveDisabled, Creating, Deleting, Renaming, Unknown): Enumerates the possible values for the status of the Event Hub.
  * updatedAt `string`: The exact time the message was updated.

### EventHubResource
* EventHubResource `object`: Single item in List or Get Event Hub operation
  * properties [EventHubProperties](#eventhubproperties)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * type `string`: Resource type

### NamespaceCreateOrUpdateParameters
* NamespaceCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Namespace operation.
  * location **required** `string`: Namespace location.
  * properties [NamespaceProperties](#namespaceproperties)
  * sku [Sku](#sku)
  * tags `object`: Namespace tags.

### NamespaceListResult
* NamespaceListResult `object`: The response of the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of namespaces.
  * value `array`: Result of the List Namespace operation.
    * items [NamespaceResource](#namespaceresource)

### NamespaceProperties
* NamespaceProperties `object`: Properties of the Namespace supplied for create or update Namespace operation
  * createdAt `string`: The time the Namespace was created.
  * enabled `boolean`: Specifies whether this instance is enabled.
  * metricId `string`: Identifier for Azure Insights metrics
  * provisioningState `string`: Provisioning state of the Namespace.
  * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
  * status `string` (values: Unknown, Creating, Created, Activating, Enabling, Active, Disabling, Disabled, SoftDeleting, SoftDeleted, Removing, Removed, Failed): State of the Namespace.
  * updatedAt `string`: The time the Namespace was updated.

### NamespaceResource
* NamespaceResource `object`: Single Namespace item in List or Get Operation
  * properties [NamespaceProperties](#namespaceproperties)
  * sku [Sku](#sku)
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * type `string`: Resource type

### NamespaceUpdateParameter
* NamespaceUpdateParameter `object`: Parameters supplied to the Patch/update Namespace operation.
  * sku [Sku](#sku)
  * tags `object`: Resource tags

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

### RegenerateKeysParameters
* RegenerateKeysParameters `object`: Parameters supplied to the Regenerate Authorization Rule keys operation.
  * policykey `string` (values: PrimaryKey, SecondaryKey): Key that needs to be regenerated.

### Resource
* Resource `object`: The Resource definition
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * type `string`: Resource type

### ResourceListKeys
* ResourceListKeys `object`: Namespace/EventHub Connection String
  * keyName `string`: A string that describes the AuthorizationRule.
  * primaryConnectionString `string`: Primary connection string of the created Namespace AuthorizationRule.
  * primaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.
  * secondaryConnectionString `string`: Secondary connection string of the created Namespace AuthorizationRule.
  * secondaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.

### SharedAccessAuthorizationRuleCreateOrUpdateParameters
* SharedAccessAuthorizationRuleCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Authorization Rules operation.
  * location `string`: Data center location.
  * name `string`: Name of the AuthorizationRule.
  * properties [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)

### SharedAccessAuthorizationRuleListResult
* SharedAccessAuthorizationRuleListResult `object`: The response from the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains an incomplete list of Authorization Rules
  * value `array`: Result of the List Authorization Rules operation.
    * items [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### SharedAccessAuthorizationRuleProperties
* SharedAccessAuthorizationRuleProperties `object`: Properties supplied to create or update SharedAccessAuthorizationRule
  * rights **required** `array`: The rights associated with the rule.
    * items `string` (values: Manage, Send, Listen)

### SharedAccessAuthorizationRuleResource
* SharedAccessAuthorizationRuleResource `object`: Single item in a List or Get AuthorizationRule operation
  * properties [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * type `string`: Resource type

### Sku
* Sku `object`: SKU parameters supplied to the create Namespace operation
  * capacity `integer`: The Event Hubs throughput units.
  * name `string` (values: Basic, Standard): Name of this SKU.
  * tier **required** `string` (values: Basic, Standard, Premium): The billing tier of this particular SKU.

### TrackedResource
* TrackedResource `object`: Definition of Resource
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * type `string`: Resource type

### UnavailableReason
* UnavailableReason `string` (values: None, InvalidName, SubscriptionIsDisabled, NameInUse, NameInLockdown, TooManyNamespaceInCurrentSubscription): Specifies the reason for the unavailability of the service.


