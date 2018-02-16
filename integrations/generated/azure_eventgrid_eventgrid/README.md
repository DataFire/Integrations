# @datafire/azure_eventgrid_eventgrid

Client library for EventGridManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_eventgrid_eventgrid
```
```js
let azure_eventgrid_eventgrid = require('@datafire/azure_eventgrid_eventgrid').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_eventgrid_eventgrid.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure EventGrid Management Client

## Actions

### Operations_List
List the available operations supported by the Microsoft.EventGrid resource provider


```js
azure_eventgrid_eventgrid.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationsListResult](#operationslistresult)

### TopicTypes_List
List all registered topic types


```js
azure_eventgrid_eventgrid.TopicTypes_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicTypesListResult](#topictypeslistresult)

### TopicTypes_Get
Get information about a topic type


```js
azure_eventgrid_eventgrid.TopicTypes_Get({
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * topicTypeName **required** `string`: Name of the topic type
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicTypeInfo](#topictypeinfo)

### TopicTypes_ListEventTypes
List event types for a topic type


```js
azure_eventgrid_eventgrid.TopicTypes_ListEventTypes({
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * topicTypeName **required** `string`: Name of the topic type
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventTypesListResult](#eventtypeslistresult)

### EventSubscriptions_ListGlobalBySubscription
List all aggregated global event subscriptions under a specific Azure subscription


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListGlobalBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListRegionalBySubscription
List all event subscriptions from the given location under a specific Azure subscription


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListRegionalBySubscription({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Name of the location
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListRegionalBySubscriptionForTopicType
List all event subscriptions from the given location under a specific Azure subscription and topic type.


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListRegionalBySubscriptionForTopicType({
  "subscriptionId": "",
  "location": "",
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Name of the location
  * topicTypeName **required** `string`: Name of the topic type
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListGlobalBySubscriptionForTopicType
List all global event subscriptions under an Azure subscription for a topic type.


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListGlobalBySubscriptionForTopicType({
  "subscriptionId": "",
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * topicTypeName **required** `string`: Name of the topic type
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### Topics_ListBySubscription
List all the topics under an Azure subscription


```js
azure_eventgrid_eventgrid.Topics_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicsListResult](#topicslistresult)

### EventSubscriptions_ListGlobalByResourceGroup
List all global event subscriptions under a specific Azure subscription and resource group


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListGlobalByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListRegionalByResourceGroup
List all event subscriptions from the given location under a specific Azure subscription and resource group


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListRegionalByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * location **required** `string`: Name of the location
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListRegionalByResourceGroupForTopicType
List all event subscriptions from the given location under a specific Azure subscription and resource group and topic type


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListRegionalByResourceGroupForTopicType({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * location **required** `string`: Name of the location
  * topicTypeName **required** `string`: Name of the topic type
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListGlobalByResourceGroupForTopicType
List all global event subscriptions under a resource group for a specific topic type.


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListGlobalByResourceGroupForTopicType({
  "subscriptionId": "",
  "resourceGroupName": "",
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * topicTypeName **required** `string`: Name of the topic type
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### Topics_ListByResourceGroup
List all the topics under a resource group


```js
azure_eventgrid_eventgrid.Topics_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicsListResult](#topicslistresult)

### Topics_Delete
Delete existing topic


```js
azure_eventgrid_eventgrid.Topics_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "topicName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * topicName **required** `string`: Name of the topic
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Topics_Get
Get properties of a topic


```js
azure_eventgrid_eventgrid.Topics_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "topicName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * topicName **required** `string`: Name of the topic
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [Topic](#topic)

### Topics_Update
Asynchronously updates a topic with the specified parameters.


```js
azure_eventgrid_eventgrid.Topics_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "topicName": "",
  "topicUpdateParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * topicName **required** `string`: Name of the topic
  * topicUpdateParameters **required** [TopicUpdateParameters](#topicupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [Topic](#topic)

### Topics_CreateOrUpdate
Asynchronously creates a new topic with the specified parameters.


```js
azure_eventgrid_eventgrid.Topics_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "topicName": "",
  "topicInfo": {
    "location": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * topicName **required** `string`: Name of the topic
  * topicInfo **required** [Topic](#topic)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [Topic](#topic)

### Topics_ListSharedAccessKeys
List the two keys used to publish to a topic


```js
azure_eventgrid_eventgrid.Topics_ListSharedAccessKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "topicName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * topicName **required** `string`: Name of the topic
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicSharedAccessKeys](#topicsharedaccesskeys)

### Topics_RegenerateKey
Regenerate a shared access key for a topic


```js
azure_eventgrid_eventgrid.Topics_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "topicName": "",
  "regenerateKeyRequest": {
    "keyName": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * topicName **required** `string`: Name of the topic
  * regenerateKeyRequest **required** [TopicRegenerateKeyRequest](#topicregeneratekeyrequest)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicSharedAccessKeys](#topicsharedaccesskeys)

### EventSubscriptions_ListByResource
List all event subscriptions that have been created for a specific topic


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListByResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerNamespace": "",
  "resourceTypeName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * providerNamespace **required** `string`: Namespace of the provider of the topic
  * resourceTypeName **required** `string`: Name of the resource type
  * resourceName **required** `string`: Name of the resource
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### Topics_ListEventTypes
List event types for a topic


```js
azure_eventgrid_eventgrid.Topics_ListEventTypes({
  "subscriptionId": "",
  "resourceGroupName": "",
  "providerNamespace": "",
  "resourceTypeName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * providerNamespace **required** `string`: Namespace of the provider of the topic
  * resourceTypeName **required** `string`: Name of the topic type
  * resourceName **required** `string`: Name of the topic
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventTypesListResult](#eventtypeslistresult)

### EventSubscriptions_Delete
Delete an existing event subscription


```js
azure_eventgrid_eventgrid.EventSubscriptions_Delete({
  "scope": "",
  "eventSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
  * eventSubscriptionName **required** `string`: Name of the event subscription
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### EventSubscriptions_Get
Get properties of an event subscription


```js
azure_eventgrid_eventgrid.EventSubscriptions_Get({
  "scope": "",
  "eventSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
  * eventSubscriptionName **required** `string`: Name of the event subscription
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscription](#eventsubscription)

### EventSubscriptions_Update
Asynchronously updates an existing event subscription.


```js
azure_eventgrid_eventgrid.EventSubscriptions_Update({
  "scope": "",
  "eventSubscriptionName": "",
  "eventSubscriptionUpdateParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of existing event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
  * eventSubscriptionName **required** `string`: Name of the event subscription to be created
  * eventSubscriptionUpdateParameters **required** [EventSubscriptionUpdateParameters](#eventsubscriptionupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscription](#eventsubscription)

### EventSubscriptions_Create
Asynchronously creates a new event subscription to the specified scope. Existing event subscriptions cannot be updated with this API and should instead use the Update event subscription API.


```js
azure_eventgrid_eventgrid.EventSubscriptions_Create({
  "scope": "",
  "eventSubscriptionName": "",
  "eventSubscriptionInfo": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the resource to which the event subscription needs to be created. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
  * eventSubscriptionName **required** `string`: Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and use alphanumeric letters only.
  * eventSubscriptionInfo **required** [EventSubscription](#eventsubscription)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscription](#eventsubscription)

### EventSubscriptions_GetFullUrl
Get the full endpoint URL for an event subscription


```js
azure_eventgrid_eventgrid.EventSubscriptions_GetFullUrl({
  "scope": "",
  "eventSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
  * eventSubscriptionName **required** `string`: Name of the event subscription
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionFullUrl](#eventsubscriptionfullurl)



## Definitions

### EventHubEventSubscriptionDestination
* EventHubEventSubscriptionDestination `object`: Information about the event hub destination for an event subscription
  * properties [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)
  * endpointType **required** `string` (values: WebHook, EventHub): Type of the endpoint for the event subscription destination

### EventHubEventSubscriptionDestinationProperties
* EventHubEventSubscriptionDestinationProperties `object`: The properties for a event hub destination.
  * resourceId `string`: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.

### EventSubscription
* EventSubscription `object`: Event Subscription
  * properties [EventSubscriptionProperties](#eventsubscriptionproperties)
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### EventSubscriptionDestination
* EventSubscriptionDestination `object`: Information about the destination for an event subscription
  * endpointType **required** `string` (values: WebHook, EventHub): Type of the endpoint for the event subscription destination

### EventSubscriptionFilter
* EventSubscriptionFilter `object`: Filter for the Event Subscription
  * includedEventTypes `array`: A list of applicable event types that need to be part of the event subscription. 
    * items `string`
  * isSubjectCaseSensitive `boolean`: Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter 
  * subjectBeginsWith `string`: An optional string to filter events for an event subscription based on a resource path prefix.
  * subjectEndsWith `string`: An optional string to filter events for an event subscription based on a resource path suffix.

### EventSubscriptionFullUrl
* EventSubscriptionFullUrl `object`: Full endpoint url of an event subscription
  * endpointUrl `string`: The URL that represents the endpoint of the destination of an event subscription.

### EventSubscriptionProperties
* EventSubscriptionProperties `object`: Properties of the Event Subscription
  * destination [EventSubscriptionDestination](#eventsubscriptiondestination)
  * filter [EventSubscriptionFilter](#eventsubscriptionfilter)
  * labels `array`: List of user defined labels.
    * items `string`
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Canceled, Failed): Provisioning state of the event subscription.
  * topic `string`: Name of the topic of the event subscription.

### EventSubscriptionUpdateParameters
* EventSubscriptionUpdateParameters `object`: Properties of the Event Subscription update
  * destination [EventSubscriptionDestination](#eventsubscriptiondestination)
  * filter [EventSubscriptionFilter](#eventsubscriptionfilter)
  * labels `array`: List of user defined labels.
    * items `string`

### EventSubscriptionsListResult
* EventSubscriptionsListResult `object`: Result of the List EventSubscriptions operation
  * value `array`: A collection of EventSubscriptions
    * items [EventSubscription](#eventsubscription)

### EventType
* EventType `object`: Event Type for a subject under a topic
  * properties [EventTypeProperties](#eventtypeproperties)
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### EventTypeProperties
* EventTypeProperties `object`: Properties of the event type
  * description `string`: Description of the event type.
  * displayName `string`: Display name of the event type.
  * schemaUrl `string`: Url of the schema for this event type.

### EventTypesListResult
* EventTypesListResult `object`: Result of the List Event Types operation
  * value `array`: A collection of event types
    * items [EventType](#eventtype)

### Operation
* Operation `object`: Represents an operation returned by the GetOperations request
  * display [OperationInfo](#operationinfo)
  * name `string`: Name of the operation
  * origin `string` (values: User, System, UserAndSystem): Origin of the operation
  * properties `object`: Properties of the operation

### OperationInfo
* OperationInfo `object`: Information about an operation
  * description `string`: Description of the operation
  * operation `string`: Name of the operation
  * provider `string`: Name of the provider
  * resource `string`: Name of the resource type

### OperationsListResult
* OperationsListResult `object`: Result of the List Operations operation
  * value `array`: A collection of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: Definition of a Resource
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### Topic
* Topic `object`: EventGrid Topic
  * properties [TopicProperties](#topicproperties)
  * location **required** `string`: Location of the resource
  * tags `object`: Tags of the resource
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### TopicProperties
* TopicProperties `object`: Properties of the Topic
  * endpoint `string`: Endpoint for the topic.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Canceled, Failed): Provisioning state of the topic.

### TopicRegenerateKeyRequest
* TopicRegenerateKeyRequest `object`: Topic regenerate share access key key request
  * keyName **required** `string`: Key name to regenerate key1 or key2

### TopicSharedAccessKeys
* TopicSharedAccessKeys `object`: Shared access keys of the Topic
  * key1 `string`: Shared access key1 for the topic.
  * key2 `string`: Shared access key2 for the topic.

### TopicTypeInfo
* TopicTypeInfo `object`: Properties of a topic type info.
  * properties [TopicTypeProperties](#topictypeproperties)
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### TopicTypeProperties
* TopicTypeProperties `object`: Properties of a topic type.
  * description `string`: Description of the topic type.
  * displayName `string`: Display Name for the topic type.
  * provider `string`: Namespace of the provider of the topic type.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Canceled, Failed): Provisioning state of the topic type
  * resourceRegionType `string` (values: RegionalResource, GlobalResource): Region type of the resource.
  * supportedLocations `array`: List of locations supported by this topic type.
    * items `string`

### TopicTypesListResult
* TopicTypesListResult `object`: Result of the List Topic Types operation
  * value `array`: A collection of topic types
    * items [TopicTypeInfo](#topictypeinfo)

### TopicUpdateParameters
* TopicUpdateParameters `object`: Properties of the Topic update
  * tags `object`: Tags of the resource

### TopicsListResult
* TopicsListResult `object`: Result of the List Topics operation
  * value `array`: A collection of Topics
    * items [Topic](#topic)

### TrackedResource
* TrackedResource `object`: Definition of a Tracked Resource
  * location **required** `string`: Location of the resource
  * tags `object`: Tags of the resource
  * id `string`: Fully qualified identifier of the resource
  * name `string`: Name of the resource
  * type `string`: Type of the resource

### WebHookEventSubscriptionDestination
* WebHookEventSubscriptionDestination `object`: Information about the webhook destination for an event subscription
  * properties [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)
  * endpointType **required** `string` (values: WebHook, EventHub): Type of the endpoint for the event subscription destination

### WebHookEventSubscriptionDestinationProperties
* WebHookEventSubscriptionDestinationProperties `object`: Information about the webhook destination properties for an event subscription
  * endpointBaseUrl `string`: The base URL that represents the endpoint of the destination of an event subscription.
  * endpointUrl `string`: The URL that represents the endpoint of the destination of an event subscription.


