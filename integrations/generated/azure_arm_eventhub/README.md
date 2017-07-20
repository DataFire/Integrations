# @datafire/azure_arm_eventhub

Client library for EventHubManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_eventhub
```

```js
let datafire = require('datafire');
let azure_arm_eventhub = require('@datafire/azure_arm_eventhub').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_eventhub: account,
  }
})

azure_arm_eventhub.Operations_List({}, context).then(data => {
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

#### Parameters
* api-version (string) **required** - Client API Version.

### Namespaces_CheckNameAvailability
Check the give Namespace name availability.


```js
azure_arm_eventhub.Namespaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* parameters (undefined) **required** - Parameter supplied to check Namespace name availability operation 

### Namespaces_ListBySubscription
Lists all the available Namespaces within a subscription, irrespective of the resource groups.


```js
azure_arm_eventhub.Namespaces_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListByResourceGroup
Lists the available Namespaces within a resource group.


```js
azure_arm_eventhub.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* parameters (undefined) **required** - Parameters supplied to the Patch/update Namespace operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Namespace operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* authorizationRuleName (string) **required** - The authorization rule name.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* authorizationRuleName (string) **required** - The authorization rule name.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* authorizationRuleName (string) **required** - The authorization rule name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Authorization Rules operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* authorizationRuleName (string) **required** - The authorization rule name.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* authorizationRuleName (string) **required** - The authorization rule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule keys operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Event Hub operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* authorizationRuleName (string) **required** - The authorization rule name.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* authorizationRuleName (string) **required** - The authorization rule name.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* authorizationRuleName (string) **required** - The authorization rule name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Authorization Rules operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* authorizationRuleName (string) **required** - The authorization rule name.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* authorizationRuleName (string) **required** - The authorization rule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule keys operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* consumerGroupName (string) **required** - The consumer group name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* consumerGroupName (string) **required** - The consumer group name
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the azure subscription.
* namespaceName (string) **required** - The Namespace name
* eventHubName (string) **required** - The Event Hub name
* consumerGroupName (string) **required** - The consumer group name
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Consumer Group operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

