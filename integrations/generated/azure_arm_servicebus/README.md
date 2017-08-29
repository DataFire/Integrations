# @datafire/azure_arm_servicebus

Client library for ServiceBusManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_servicebus
```

```js
let datafire = require('datafire');
let azure_arm_servicebus = require('@datafire/azure_arm_servicebus').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_servicebus.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description
Azure Service Bus client

## Actions
### Operations_List
Lists all of the available ServiceBus REST API operations.


```js
azure_arm_servicebus.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.

### Namespaces_CheckNameAvailability
Check the give namespace name availability.


```js
azure_arm_servicebus.Namespaces_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* parameters (undefined) **required** - Description of a Check Name availability request properties.

### Namespaces_ListBySubscription
Gets all the available namespaces within the subscription, irrespective of the resource groups.


```js
azure_arm_servicebus.Namespaces_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListByResourceGroup
Gets the available namespaces within a resource group.


```js
azure_arm_servicebus.Namespaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated resources under the namespace.


```js
azure_arm_servicebus.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Get
Gets a description for the specified namespace.


```js
azure_arm_servicebus.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Update
Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_arm_servicebus.Namespaces_Update({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* parameters (undefined) **required** - Parameters supplied to the Patch Namespace operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_CreateOrUpdate
Creates or updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_arm_servicebus.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Namespace operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListAuthorizationRules
Gets the authorization rules for a namespace.


```js
azure_arm_servicebus.Namespaces_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_DeleteAuthorizationRule
Deletes a namespace authorization rule.


```js
azure_arm_servicebus.Namespaces_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_GetAuthorizationRule
Gets an authorization rule for a namespace by rule name.


```js
azure_arm_servicebus.Namespaces_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_CreateOrUpdateAuthorizationRule
Creates or updates an authorization rule for a namespace.


```js
azure_arm_servicebus.Namespaces_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* authorizationRuleName (string) **required** - The authorizationrule name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Authorization Rules operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListKeys
Gets the primary and secondary connection strings for the namespace.


```js
azure_arm_servicebus.Namespaces_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_RegenerateKeys
Regenerates the primary or secondary connection strings for the namespace.


```js
azure_arm_servicebus.Namespaces_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* authorizationRuleName (string) **required** - The authorizationrule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_ListAll
Gets the queues within a namespace.


```js
azure_arm_servicebus.Queues_ListAll({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_Delete
Deletes a queue from the specified namespace in a resource group.


```js
azure_arm_servicebus.Queues_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_Get
Returns a description for the specified queue.


```js
azure_arm_servicebus.Queues_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_CreateOrUpdate
Creates or updates a Service Bus queue. This operation is idempotent.


```js
azure_arm_servicebus.Queues_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Queue operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_ListAuthorizationRules
Gets all authorization rules for a queue.


```js
azure_arm_servicebus.Queues_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_DeleteAuthorizationRule
Deletes a queue authorization rule.


```js
azure_arm_servicebus.Queues_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_GetAuthorizationRule
Gets an authorization rule for a queue by rule name.


```js
azure_arm_servicebus.Queues_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_CreateOrUpdateAuthorizationRule
Creates an authorization rule for a queue.


```js
azure_arm_servicebus.Queues_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Authorization Rules operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_ListKeys
Primary and secondary connection strings to the queue.


```js
azure_arm_servicebus.Queues_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Queues_RegenerateKeys
Regenerates the primary or secondary connection strings to the queue.


```js
azure_arm_servicebus.Queues_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "queueName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* queueName (string) **required** - The queue name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_ListAll
Gets all the topics in a namespace.


```js
azure_arm_servicebus.Topics_ListAll({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_Delete
Deletes a topic from the specified namespace and resource group.


```js
azure_arm_servicebus.Topics_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_Get
Returns a description for the specified topic.


```js
azure_arm_servicebus.Topics_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_CreateOrUpdate
Creates a topic in the specified namespace.


```js
azure_arm_servicebus.Topics_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Topic operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_ListAuthorizationRules
Gets authorization rules for a topic.


```js
azure_arm_servicebus.Topics_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_DeleteAuthorizationRule
Deletes a topic authorization rule.


```js
azure_arm_servicebus.Topics_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_GetAuthorizationRule
Returns the specified authorization rule.


```js
azure_arm_servicebus.Topics_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_CreateOrUpdateAuthorizationRule
Creates an authorizatio rule for the specified topic.


```js
azure_arm_servicebus.Topics_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Authorization Rules operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_ListKeys
Gets the primary and secondary connection strings for the topic.


```js
azure_arm_servicebus.Topics_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Topics_RegenerateKeys
Regenerates primary or secondary connection strings for the topic.


```js
azure_arm_servicebus.Topics_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* authorizationRuleName (string) **required** - The authorizationrule name.
* parameters (undefined) **required** - Parameters supplied to the Regenerate Authorization Rule operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Subscriptions_ListAll
List all the subscriptions under a specified topic.


```js
azure_arm_servicebus.Subscriptions_ListAll({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Subscriptions_Delete
Deletes a subscription from the specified topic.


```js
azure_arm_servicebus.Subscriptions_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* subscriptionName (string) **required** - The subscription name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Subscriptions_Get
Returns a subscription description for the specified topic.


```js
azure_arm_servicebus.Subscriptions_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* subscriptionName (string) **required** - The subscription name.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Subscriptions_CreateOrUpdate
Creates a topic subscription.


```js
azure_arm_servicebus.Subscriptions_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "topicName": "",
  "subscriptionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* namespaceName (string) **required** - The namespace name
* topicName (string) **required** - The topic name.
* subscriptionName (string) **required** - The subscription name.
* parameters (undefined) **required** - Parameters supplied to the Create Or Update Subscription operation.
* api-version (string) **required** - Client API version.
* subscriptionId (string) **required** - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

