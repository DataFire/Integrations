# @datafire/azure_arm_servicebus

Client library for ServiceBusManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_servicebus
```
```js
let azure_arm_servicebus = require('@datafire/azure_arm_servicebus').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Namespaces_CheckNameAvailability
Check the give namespace name availability.


```js
azure_arm_servicebus.Namespaces_CheckNameAvailability({
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

### Namespaces_ListBySubscription
Gets all the available namespaces within the subscription, irrespective of the resource groups.


```js
azure_arm_servicebus.Namespaces_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceListResult](#namespacelistresult)

### Namespaces_ListByResourceGroup
Gets the available namespaces within a resource group.


```js
azure_arm_servicebus.Namespaces_ListByResourceGroup({
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
* output [NamespaceListResult](#namespacelistresult)

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
azure_arm_servicebus.Namespaces_Get({
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
* output [NamespaceResource](#namespaceresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * parameters **required** [NamespaceUpdateParameters](#namespaceupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceResource](#namespaceresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name.
  * parameters **required** [NamespaceCreateOrUpdateParameters](#namespacecreateorupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceResource](#namespaceresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * parameters **required** [SharedAccessAuthorizationRuleCreateOrUpdateParameters](#sharedaccessauthorizationrulecreateorupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [QueueListResult](#queuelistresult)

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
azure_arm_servicebus.Queues_Get({
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
* output [QueueResource](#queueresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * parameters **required** [QueueCreateOrUpdateParameters](#queuecreateorupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [QueueResource](#queueresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * parameters **required** [SharedAccessAuthorizationRuleCreateOrUpdateParameters](#sharedaccessauthorizationrulecreateorupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * queueName **required** `string`: The queue name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TopicListResult](#topiclistresult)

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
azure_arm_servicebus.Topics_Get({
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
* output [TopicResource](#topicresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * parameters **required** [TopicCreateOrUpdateParameters](#topiccreateorupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TopicResource](#topicresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * parameters **required** [SharedAccessAuthorizationRuleCreateOrUpdateParameters](#sharedaccessauthorizationrulecreateorupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * authorizationRuleName **required** `string`: The authorizationrule name.
  * parameters **required** [RegenerateKeysParameters](#regeneratekeysparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubscriptionListResult](#subscriptionlistresult)

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
azure_arm_servicebus.Subscriptions_Get({
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
* output [SubscriptionResource](#subscriptionresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * namespaceName **required** `string`: The namespace name
  * topicName **required** `string`: The topic name.
  * subscriptionName **required** `string`: The subscription name.
  * parameters **required** [SubscriptionCreateOrUpdateParameters](#subscriptioncreateorupdateparameters)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SubscriptionResource](#subscriptionresource)



## Definitions

### CheckNameAvailability
* CheckNameAvailability `object`: Description of a Check Name availability request properties.
  * name **required** `string`: The Name to check the namespce name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: Description of a Check Name availability request properties.
  * message `string`: The detailed info regarding the reason associated with the namespace.
  * nameAvailable `boolean`: Value indicating namespace is availability, true if the namespace is available; otherwise, false.
  * reason [UnavailableReason](#unavailablereason)

### EntityAvailabilityStatus
* EntityAvailabilityStatus `string` (values: Available, Limited, Renaming, Restoring, Unknown): Entity availability status.

### EntityStatus
* EntityStatus `string` (values: Active, Creating, Deleting, Disabled, ReceiveDisabled, Renaming, Restoring, SendDisabled, Unknown): Entity status.

### MessageCountDetails
* MessageCountDetails `object`: Message Count Details.
  * activeMessageCount `integer`: Number of active messages in the queue, topic, or subscription.
  * deadLetterMessageCount `integer`: Number of messages that are dead lettered.
  * scheduledMessageCount `integer`: Number of scheduled messages.
  * transferDeadLetterMessageCount `integer`: Number of messages transferred into dead letters.
  * transferMessageCount `integer`: Number of messages transferred to another queue, topic, or subscription.

### NamespaceCreateOrUpdateParameters
* NamespaceCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Namespace operation.
  * location **required** `string`: Namespace location.
  * properties [NamespaceProperties](#namespaceproperties)
  * sku [Sku](#sku)
  * tags `object`: Namespace tags.

### NamespaceListResult
* NamespaceListResult `object`: The response of the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Namespaces.
  * value `array`: Result of the List Namespace operation.
    * items [NamespaceResource](#namespaceresource)

### NamespaceProperties
* NamespaceProperties `object`: Properties of the namespace.
  * createACSNamespace `boolean`: Indicates whether to create an ACS namespace.
  * createdAt `string`: The time the namespace was created.
  * enabled `boolean`: Specifies whether this instance is enabled.
  * provisioningState `string`: Provisioning state of the namespace.
  * serviceBusEndpoint `string`: Endpoint you can use to perform Service Bus operations.
  * status `string` (values: Unknown, Creating, Created, Activating, Enabling, Active, Disabling, Disabled, SoftDeleting, SoftDeleted, Removing, Removed, Failed): State of the namespace.
  * updatedAt `string`: The time the namespace was updated.

### NamespaceResource
* NamespaceResource `object`: Description of a namespace resource.
  * properties [NamespaceProperties](#namespaceproperties)
  * sku [Sku](#sku)
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * location `string`: Resource location.
  * name `string`: Resource name
  * type `string`: Resource type

### NamespaceUpdateParameters
* NamespaceUpdateParameters `object`: Parameters supplied to the Patch Namespace operation.
  * sku [Sku](#sku)
  * tags `object`: Resource tags

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

### QueueCreateOrUpdateParameters
* QueueCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Queue operation.
  * location **required** `string`: location of the resource.
  * name `string`: Queue name.
  * properties [QueueProperties](#queueproperties)

### QueueListResult
* QueueListResult `object`: The response to the List Queues operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of queues.
  * value `array`: Result of the List Queues operation.
    * items [QueueResource](#queueresource)

### QueueProperties
* QueueProperties `object`: The Queue Properties definition.
  * accessedAt `string`: Last time a message was sent, or the last time there was a receive request to this queue.
  * autoDeleteOnIdle `string`: the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
  * countDetails [MessageCountDetails](#messagecountdetails)
  * createdAt `string`: The exact time the message was created.
  * deadLetteringOnMessageExpiration `boolean`: A value that indicates whether this queue has dead letter support when a message expires.
  * defaultMessageTimeToLive `string`: The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
  * duplicateDetectionHistoryTimeWindow `string`: TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
  * enableBatchedOperations `boolean`: A value that indicates whether server-side batched operations are enabled.
  * enableExpress `boolean`: A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
  * enablePartitioning `boolean`: A value that indicates whether the queue is to be partitioned across multiple message brokers.
  * entityAvailabilityStatus [EntityAvailabilityStatus](#entityavailabilitystatus)
  * isAnonymousAccessible `boolean`: A value that indicates whether the message is accessible anonymously.
  * lockDuration `string`: The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
  * maxDeliveryCount `integer`: The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
  * maxSizeInMegabytes `integer`: The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
  * messageCount `integer`: The number of messages in the queue.
  * requiresDuplicateDetection `boolean`: A value indicating if this queue requires duplicate detection.
  * requiresSession `boolean`: A value that indicates whether the queue supports the concept of sessions.
  * sizeInBytes `integer`: The size of the queue, in bytes.
  * status [EntityStatus](#entitystatus)
  * supportOrdering `boolean`: A value that indicates whether the queue supports ordering.
  * updatedAt `string`: The exact time the message was updated.

### QueueResource
* QueueResource `object`: Description of queue Resource.
  * properties [QueueProperties](#queueproperties)
  * id `string`: Resource Id
  * location `string`: Resource location.
  * name `string`: Resource name
  * type `string`: Resource type

### RegenerateKeysParameters
* RegenerateKeysParameters `object`: Parameters supplied to the Regenerate Authorization Rule operation.
  * Policykey `string` (values: PrimaryKey, SecondaryKey): Key that needs to be regenerated.

### Resource
* Resource `object`: The Resource definition for other than namespace.
  * id `string`: Resource Id
  * location `string`: Resource location.
  * name `string`: Resource name
  * type `string`: Resource type

### ResourceListKeys
* ResourceListKeys `object`: Namespace/ServiceBus Connection String
  * keyName `string`: A string that describes the authorization rule.
  * primaryConnectionString `string`: Primary connection string of the created namespace authorization rule.
  * primaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.
  * secondaryConnectionString `string`: Secondary connection string of the created namespace authorization rule.
  * secondaryKey `string`: A base64-encoded 256-bit primary key for signing and validating the SAS token.

### SharedAccessAuthorizationRuleCreateOrUpdateParameters
* SharedAccessAuthorizationRuleCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Authorization Rules operation.
  * location `string`: data center location.
  * name `string`: Name of the authorization rule.
  * properties [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)

### SharedAccessAuthorizationRuleListResult
* SharedAccessAuthorizationRuleListResult `object`: The response to the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Authorization Rules.
  * value `array`: Result of the List Authorization Rules operation.
    * items [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### SharedAccessAuthorizationRuleProperties
* SharedAccessAuthorizationRuleProperties `object`: SharedAccessAuthorizationRule properties.
  * rights **required** `array`: The rights associated with the rule.
    * items `string` (values: Manage, Send, Listen)

### SharedAccessAuthorizationRuleResource
* SharedAccessAuthorizationRuleResource `object`: Description of a namespace authorization rule.
  * properties [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)
  * id `string`: Resource Id
  * location `string`: Resource location.
  * name `string`: Resource name
  * type `string`: Resource type

### Sku
* Sku `object`: SKU of the namespace.
  * capacity `integer`: The specified messaging units for the tier.
  * name `string` (values: Basic, Standard, Premium): Name of this SKU.
  * tier **required** `string` (values: Basic, Standard, Premium): The billing tier of this particular SKU.

### SubscriptionCreateOrUpdateParameters
* SubscriptionCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Subscription operation.
  * location **required** `string`: Subscription data center location.
  * properties [SubscriptionProperties](#subscriptionproperties)
  * type `string`: Resource manager type of the resource.

### SubscriptionListResult
* SubscriptionListResult `object`: The response to the List Subscriptions operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of subscriptions.
  * value `array`: Result of the List Subscriptions operation.
    * items [SubscriptionResource](#subscriptionresource)

### SubscriptionProperties
* SubscriptionProperties `object`: Description of Subscription Resource.
  * accessedAt `string`: Last time there was a receive request to this subscription.
  * autoDeleteOnIdle `string`: TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
  * countDetails [MessageCountDetails](#messagecountdetails)
  * createdAt `string`: Exact time the message was created.
  * deadLetteringOnFilterEvaluationExceptions `boolean`: Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
  * deadLetteringOnMessageExpiration `boolean`: Value that indicates whether a subscription has dead letter support when a message expires.
  * defaultMessageTimeToLive `string`: Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
  * enableBatchedOperations `boolean`: Value that indicates whether server-side batched operations are enabled.
  * entityAvailabilityStatus [EntityAvailabilityStatus](#entityavailabilitystatus)
  * isReadOnly `boolean`: Value that indicates whether the entity description is read-only.
  * lockDuration `string`: The lock duration time span for the subscription.
  * maxDeliveryCount `integer`: Number of maximum deliveries.
  * messageCount `integer`: Number of messages.
  * requiresSession `boolean`: Value indicating if a subscription supports the concept of sessions.
  * status [EntityStatus](#entitystatus)
  * updatedAt `string`: The exact time the message was updated.

### SubscriptionResource
* SubscriptionResource `object`: Description of subscription resource.
  * properties [SubscriptionProperties](#subscriptionproperties)
  * id `string`: Resource Id
  * location `string`: Resource location.
  * name `string`: Resource name
  * type `string`: Resource type

### TopicCreateOrUpdateParameters
* TopicCreateOrUpdateParameters `object`: Parameters supplied to the Create Or Update Topic operation.
  * location **required** `string`: Location of the resource.
  * name `string`: Topic name.
  * properties [TopicProperties](#topicproperties)

### TopicListResult
* TopicListResult `object`: The response to the List Topics operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of topics.
  * value `array`: Result of the List Topics operation.
    * items [TopicResource](#topicresource)

### TopicProperties
* TopicProperties `object`: The Tpoic Properties definition.
  * accessedAt `string`: Last time the message was sent, or a request was received, for this topic.
  * autoDeleteOnIdle `string`: TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
  * countDetails [MessageCountDetails](#messagecountdetails)
  * createdAt `string`: Exact time the message was created.
  * defaultMessageTimeToLive `string`: Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
  * duplicateDetectionHistoryTimeWindow `string`: TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
  * enableBatchedOperations `boolean`: Value that indicates whether server-side batched operations are enabled.
  * enableExpress `boolean`: Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
  * enablePartitioning `boolean`: Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
  * enableSubscriptionPartitioning `boolean`: Value that indicates whether partitioning is enabled or disabled. NOTE: This property is unsupported, and may be deprecated.
  * entityAvailabilityStatus [EntityAvailabilityStatus](#entityavailabilitystatus)
  * filteringMessagesBeforePublishing `boolean`: Whether messages should be filtered before publishing.
  * isAnonymousAccessible `boolean`: Value that indicates whether the message is accessible anonymously.
  * isExpress `boolean`
  * maxSizeInMegabytes `integer`: Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic.
  * requiresDuplicateDetection `boolean`: Value indicating if this topic requires duplicate detection.
  * sizeInBytes `integer`: Size of the topic, in bytes.
  * status [EntityStatus](#entitystatus)
  * subscriptionCount `integer`: Number of subscriptions.
  * supportOrdering `boolean`: Value that indicates whether the topic supports ordering.
  * updatedAt `string`: The exact time the message was updated.

### TopicResource
* TopicResource `object`: Description of topic resource.
  * properties [TopicProperties](#topicproperties)
  * id `string`: Resource Id
  * location `string`: Resource location.
  * name `string`: Resource name
  * type `string`: Resource type

### TrackedResource
* TrackedResource `object`: The Resource definition.
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * location `string`: Resource location.
  * name `string`: Resource name
  * type `string`: Resource type

### UnavailableReason
* UnavailableReason `string` (values: None, InvalidName, SubscriptionIsDisabled, NameInUse, NameInLockdown, TooManyNamespaceInCurrentSubscription): Specifies the reason for the unavailability of the service.


