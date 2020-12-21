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

.then(data => {
  console.log(data);
});
```

## Description

Azure EventGrid Management Client

## Actions

### Operations_List
List the available operations supported by the Microsoft.EventGrid resource provider.


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
List all registered topic types.


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
Get information about a topic type.


```js
azure_eventgrid_eventgrid.TopicTypes_Get({
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * topicTypeName **required** `string`: Name of the topic type.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicTypeInfo](#topictypeinfo)

### TopicTypes_ListEventTypes
List event types for a topic type.


```js
azure_eventgrid_eventgrid.TopicTypes_ListEventTypes({
  "topicTypeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * topicTypeName **required** `string`: Name of the topic type.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventTypesListResult](#eventtypeslistresult)

### Domains_ListBySubscription
List all the domains under an Azure subscription.


```js
azure_eventgrid_eventgrid.Domains_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [DomainsListResult](#domainslistresult)

### EventSubscriptions_ListGlobalBySubscription
List all aggregated global event subscriptions under a specific Azure subscription.


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
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListRegionalBySubscription
List all event subscriptions from the given location under a specific Azure subscription.


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
  * location **required** `string`: Name of the location.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

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
  * location **required** `string`: Name of the location.
  * topicTypeName **required** `string`: Name of the topic type.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

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
  * topicTypeName **required** `string`: Name of the topic type.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### Topics_ListBySubscription
List all the topics under an Azure subscription.


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
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [TopicsListResult](#topicslistresult)

### Domains_ListByResourceGroup
List all the domains under a resource group.


```js
azure_eventgrid_eventgrid.Domains_ListByResourceGroup({
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
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [DomainsListResult](#domainslistresult)

### Domains_Delete
Delete existing domain.


```js
azure_eventgrid_eventgrid.Domains_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Domains_Get
Get properties of a domain.


```js
azure_eventgrid_eventgrid.Domains_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [Domain](#domain)

### Domains_Update
Asynchronously updates a domain with the specified parameters.


```js
azure_eventgrid_eventgrid.Domains_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "domainUpdateParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * domainUpdateParameters **required** [DomainUpdateParameters](#domainupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [Domain](#domain)

### Domains_CreateOrUpdate
Asynchronously creates or updates a new domain with the specified parameters.


```js
azure_eventgrid_eventgrid.Domains_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "domainInfo": {
    "location": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * domainInfo **required** [Domain](#domain)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [Domain](#domain)

### Domains_ListSharedAccessKeys
List the two keys used to publish to a domain.


```js
azure_eventgrid_eventgrid.Domains_ListSharedAccessKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [DomainSharedAccessKeys](#domainsharedaccesskeys)

### Domains_RegenerateKey
Regenerate a shared access key for a domain.


```js
azure_eventgrid_eventgrid.Domains_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
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
  * domainName **required** `string`: Name of the domain.
  * regenerateKeyRequest **required** [DomainRegenerateKeyRequest](#domainregeneratekeyrequest)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [DomainSharedAccessKeys](#domainsharedaccesskeys)

### DomainTopics_ListByDomain
List all the topics in a domain.


```js
azure_eventgrid_eventgrid.DomainTopics_ListByDomain({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Domain name.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [DomainTopicsListResult](#domaintopicslistresult)

### DomainTopics_Delete
Delete existing domain topic.


```js
azure_eventgrid_eventgrid.DomainTopics_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "domainTopicName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * domainTopicName **required** `string`: Name of the domain topic.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### DomainTopics_Get
Get properties of a domain topic.


```js
azure_eventgrid_eventgrid.DomainTopics_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "domainTopicName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * domainTopicName **required** `string`: Name of the topic.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [DomainTopic](#domaintopic)

### DomainTopics_CreateOrUpdate
Asynchronously creates or updates a new domain topic with the specified parameters.


```js
azure_eventgrid_eventgrid.DomainTopics_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "domainTopicName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the domain.
  * domainTopicName **required** `string`: Name of the domain topic.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [DomainTopic](#domaintopic)

### EventSubscriptions_ListByDomainTopic
List all event subscriptions that have been created for a specific domain topic.


```js
azure_eventgrid_eventgrid.EventSubscriptions_ListByDomainTopic({
  "subscriptionId": "",
  "resourceGroupName": "",
  "domainName": "",
  "topicName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription.
  * domainName **required** `string`: Name of the top level domain.
  * topicName **required** `string`: Name of the domain topic.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListGlobalByResourceGroup
List all global event subscriptions under a specific Azure subscription and resource group.


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
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListRegionalByResourceGroup
List all event subscriptions from the given location under a specific Azure subscription and resource group.


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
  * location **required** `string`: Name of the location.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### EventSubscriptions_ListRegionalByResourceGroupForTopicType
List all event subscriptions from the given location under a specific Azure subscription and resource group and topic type.


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
  * location **required** `string`: Name of the location.
  * topicTypeName **required** `string`: Name of the topic type.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

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
  * topicTypeName **required** `string`: Name of the topic type.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### Topics_ListByResourceGroup
List all the topics under a resource group.


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
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [TopicsListResult](#topicslistresult)

### Topics_Delete
Delete existing topic.


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
  * topicName **required** `string`: Name of the topic.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Topics_Get
Get properties of a topic.


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
  * topicName **required** `string`: Name of the topic.
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
  * topicName **required** `string`: Name of the topic.
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
  * topicName **required** `string`: Name of the topic.
  * topicInfo **required** [Topic](#topic)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [Topic](#topic)

### Topics_ListSharedAccessKeys
List the two keys used to publish to a topic.


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
  * topicName **required** `string`: Name of the topic.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicSharedAccessKeys](#topicsharedaccesskeys)

### Topics_RegenerateKey
Regenerate a shared access key for a topic.


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
  * topicName **required** `string`: Name of the topic.
  * regenerateKeyRequest **required** [TopicRegenerateKeyRequest](#topicregeneratekeyrequest)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [TopicSharedAccessKeys](#topicsharedaccesskeys)

### EventSubscriptions_ListByResource
List all event subscriptions that have been created for a specific topic.


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
  * providerNamespace **required** `string`: Namespace of the provider of the topic.
  * resourceTypeName **required** `string`: Name of the resource type.
  * resourceName **required** `string`: Name of the resource.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * $filter `string`: The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
  * $top `integer`: The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.

#### Output
* output [EventSubscriptionsListResult](#eventsubscriptionslistresult)

### Topics_ListEventTypes
List event types for a topic.


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
  * providerNamespace **required** `string`: Namespace of the provider of the topic.
  * resourceTypeName **required** `string`: Name of the topic type.
  * resourceName **required** `string`: Name of the topic.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventTypesListResult](#eventtypeslistresult)

### EventSubscriptions_Delete
Delete an existing event subscription.


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
  * eventSubscriptionName **required** `string`: Name of the event subscription.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### EventSubscriptions_Get
Get properties of an event subscription.


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
  * eventSubscriptionName **required** `string`: Name of the event subscription.
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
  * eventSubscriptionName **required** `string`: Name of the event subscription to be updated.
  * eventSubscriptionUpdateParameters **required** [EventSubscriptionUpdateParameters](#eventsubscriptionupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscription](#eventsubscription)

### EventSubscriptions_CreateOrUpdate
Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.


```js
azure_eventgrid_eventgrid.EventSubscriptions_CreateOrUpdate({
  "scope": "",
  "eventSubscriptionName": "",
  "eventSubscriptionInfo": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The identifier of the resource to which the event subscription needs to be created or updated. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
  * eventSubscriptionName **required** `string`: Name of the event subscription. Event subscription names must be between 3 and 64 characters in length and should use alphanumeric letters only.
  * eventSubscriptionInfo **required** [EventSubscription](#eventsubscription)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscription](#eventsubscription)

### EventSubscriptions_GetFullUrl
Get the full endpoint URL for an event subscription.


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
  * eventSubscriptionName **required** `string`: Name of the event subscription.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSubscriptionFullUrl](#eventsubscriptionfullurl)



## Definitions

### AdvancedFilter
* AdvancedFilter `object`: This is the base type that represents an advanced filter. To configure an advanced filter, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class such as BoolEqualsAdvancedFilter, NumberInAdvancedFilter, StringEqualsAdvancedFilter etc. depending on the type of the key based on which you want to filter.
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### BoolEqualsAdvancedFilter
* BoolEqualsAdvancedFilter `object`: BoolEquals Advanced Filter.
  * value `boolean`: The boolean filter value.
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### DeadLetterDestination
* DeadLetterDestination `object`: Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class.
  * endpointType **required** `string` (values: StorageBlob): Type of the endpoint for the dead letter destination

### Domain
* Domain `object`: EventGrid Domain.
  * properties [DomainProperties](#domainproperties)
  * location **required** `string`: Location of the resource.
  * tags `object`: Tags of the resource.
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

### DomainProperties
* DomainProperties `object`: Properties of the Domain.
  * endpoint `string`: Endpoint for the domain.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Canceled, Failed): Provisioning state of the domain.

### DomainRegenerateKeyRequest
* DomainRegenerateKeyRequest `object`: Domain regenerate share access key request.
  * keyName **required** `string`: Key name to regenerate key1 or key2.

### DomainSharedAccessKeys
* DomainSharedAccessKeys `object`: Shared access keys of the Domain.
  * key1 `string`: Shared access key1 for the domain.
  * key2 `string`: Shared access key2 for the domain.

### DomainTopic
* DomainTopic `object`: Domain Topic.
  * properties [DomainTopicProperties](#domaintopicproperties)
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

### DomainTopicProperties
* DomainTopicProperties `object`: Properties of the Domain Topic.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Canceled, Failed): Provisioning state of the domain topic.

### DomainTopicsListResult
* DomainTopicsListResult `object`: Result of the List Domain Topics operation.
  * nextLink `string`: A link for the next page of domain topics.
  * value `array`: A collection of Domain Topics.
    * items [DomainTopic](#domaintopic)

### DomainUpdateParameters
* DomainUpdateParameters `object`: Properties of the Domain update.
  * tags `object`: Tags of the domains resource.

### DomainsListResult
* DomainsListResult `object`: Result of the List Domains operation.
  * nextLink `string`: A link for the next page of domains.
  * value `array`: A collection of Domains.
    * items [Domain](#domain)

### EventHubEventSubscriptionDestination
* EventHubEventSubscriptionDestination `object`: Information about the event hub destination for an event subscription
  * properties [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)
  * endpointType **required** `string` (values: WebHook, EventHub, StorageQueue, HybridConnection, ServiceBusQueue): Type of the endpoint for the event subscription destination

### EventHubEventSubscriptionDestinationProperties
* EventHubEventSubscriptionDestinationProperties `object`: The properties for a event hub destination.
  * resourceId `string`: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.

### EventSubscription
* EventSubscription `object`: Event Subscription
  * properties [EventSubscriptionProperties](#eventsubscriptionproperties)
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

### EventSubscriptionDestination
* EventSubscriptionDestination `object`: Information about the destination for an event subscription
  * endpointType **required** `string` (values: WebHook, EventHub, StorageQueue, HybridConnection, ServiceBusQueue): Type of the endpoint for the event subscription destination

### EventSubscriptionFilter
* EventSubscriptionFilter `object`: Filter for the Event Subscription.
  * advancedFilters `array`: An array of advanced filters that are used for filtering event subscriptions.
    * items [AdvancedFilter](#advancedfilter)
  * includedEventTypes `array`: A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
    * items `string`
  * isSubjectCaseSensitive `boolean`: Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter 
  * subjectBeginsWith `string`: An optional string to filter events for an event subscription based on a resource path prefix.
  * subjectEndsWith `string`: An optional string to filter events for an event subscription based on a resource path suffix.

### EventSubscriptionFullUrl
* EventSubscriptionFullUrl `object`: Full endpoint url of an event subscription
  * endpointUrl `string`: The URL that represents the endpoint of the destination of an event subscription.

### EventSubscriptionProperties
* EventSubscriptionProperties `object`: Properties of the Event Subscription
  * deadLetterDestination [DeadLetterDestination](#deadletterdestination)
  * destination [EventSubscriptionDestination](#eventsubscriptiondestination)
  * expirationTimeUtc `string`: Expiration time of the event subscription.
  * filter [EventSubscriptionFilter](#eventsubscriptionfilter)
  * labels `array`: List of user defined labels.
    * items `string`
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Canceled, Failed, AwaitingManualAction): Provisioning state of the event subscription.
  * retryPolicy [RetryPolicy](#retrypolicy)
  * topic `string`: Name of the topic of the event subscription.

### EventSubscriptionUpdateParameters
* EventSubscriptionUpdateParameters `object`: Properties of the Event Subscription update
  * deadLetterDestination [DeadLetterDestination](#deadletterdestination)
  * destination [EventSubscriptionDestination](#eventsubscriptiondestination)
  * expirationTimeUtc `string`: Information about the expiration time for the event subscription.
  * filter [EventSubscriptionFilter](#eventsubscriptionfilter)
  * labels `array`: List of user defined labels.
    * items `string`
  * retryPolicy [RetryPolicy](#retrypolicy)

### EventSubscriptionsListResult
* EventSubscriptionsListResult `object`: Result of the List EventSubscriptions operation
  * nextLink `string`: A link for the next page of event subscriptions
  * value `array`: A collection of EventSubscriptions
    * items [EventSubscription](#eventsubscription)

### EventType
* EventType `object`: Event Type for a subject under a topic
  * properties [EventTypeProperties](#eventtypeproperties)
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

### EventTypeProperties
* EventTypeProperties `object`: Properties of the event type
  * description `string`: Description of the event type.
  * displayName `string`: Display name of the event type.
  * isInDefaultSet `boolean`: IsInDefaultSet flag of the event type.
  * schemaUrl `string`: Url of the schema for this event type.

### EventTypesListResult
* EventTypesListResult `object`: Result of the List Event Types operation
  * value `array`: A collection of event types
    * items [EventType](#eventtype)

### HybridConnectionEventSubscriptionDestination
* HybridConnectionEventSubscriptionDestination `object`: Information about the HybridConnection destination for an event subscription.
  * properties [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties)
  * endpointType **required** `string` (values: WebHook, EventHub, StorageQueue, HybridConnection, ServiceBusQueue): Type of the endpoint for the event subscription destination

### HybridConnectionEventSubscriptionDestinationProperties
* HybridConnectionEventSubscriptionDestinationProperties `object`: The properties for a hybrid connection destination.
  * resourceId `string`: The Azure Resource ID of an hybrid connection that is the destination of an event subscription.

### NumberGreaterThanAdvancedFilter
* NumberGreaterThanAdvancedFilter `object`: NumberGreaterThan Advanced Filter.
  * value `number`: The filter value.
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### NumberGreaterThanOrEqualsAdvancedFilter
* NumberGreaterThanOrEqualsAdvancedFilter `object`: NumberGreaterThanOrEquals Advanced Filter.
  * value `number`: The filter value.
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### NumberInAdvancedFilter
* NumberInAdvancedFilter `object`: NumberIn Advanced Filter.
  * values `array`: The set of filter values.
    * items `number`
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### NumberLessThanAdvancedFilter
* NumberLessThanAdvancedFilter `object`: NumberLessThan Advanced Filter.
  * value `number`: The filter value.
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### NumberLessThanOrEqualsAdvancedFilter
* NumberLessThanOrEqualsAdvancedFilter `object`: NumberLessThanOrEquals Advanced Filter.
  * value `number`: The filter value.
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### NumberNotInAdvancedFilter
* NumberNotInAdvancedFilter `object`: NumberNotIn Advanced Filter.
  * values `array`: The set of filter values.
    * items `number`
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### Operation
* Operation `object`: Represents an operation returned by the GetOperations request
  * display [OperationInfo](#operationinfo)
  * name `string`: Name of the operation
  * origin `string`: Origin of the operation
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
* Resource `object`: Definition of a Resource.
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

### RetryPolicy
* RetryPolicy `object`: Information about the retry policy for an event subscription.
  * eventTimeToLiveInMinutes `integer`: Time To Live (in minutes) for events.
  * maxDeliveryAttempts `integer`: Maximum number of delivery retry attempts for events.

### ServiceBusQueueEventSubscriptionDestination
* ServiceBusQueueEventSubscriptionDestination `object`: Information about the service bus destination for an event subscription
  * properties [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties)
  * endpointType **required** `string` (values: WebHook, EventHub, StorageQueue, HybridConnection, ServiceBusQueue): Type of the endpoint for the event subscription destination

### ServiceBusQueueEventSubscriptionDestinationProperties
* ServiceBusQueueEventSubscriptionDestinationProperties `object`: The properties that represent the Service Bus destination of an event subscription.
  * resourceId `string`: The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.

### StorageBlobDeadLetterDestination
* StorageBlobDeadLetterDestination `object`: Information about the storage blob based dead letter destination.
  * properties [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties)
  * endpointType **required** `string` (values: StorageBlob): Type of the endpoint for the dead letter destination

### StorageBlobDeadLetterDestinationProperties
* StorageBlobDeadLetterDestinationProperties `object`: Properties of the storage blob based dead letter destination.
  * blobContainerName `string`: The name of the Storage blob container that is the destination of the deadletter events
  * resourceId `string`: The Azure Resource ID of the storage account that is the destination of the deadletter events

### StorageQueueEventSubscriptionDestination
* StorageQueueEventSubscriptionDestination `object`: Information about the storage queue destination for an event subscription.
  * properties [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties)
  * endpointType **required** `string` (values: WebHook, EventHub, StorageQueue, HybridConnection, ServiceBusQueue): Type of the endpoint for the event subscription destination

### StorageQueueEventSubscriptionDestinationProperties
* StorageQueueEventSubscriptionDestinationProperties `object`: The properties for a storage queue destination.
  * queueName `string`: The name of the Storage queue under a storage account that is the destination of an event subscription.
  * resourceId `string`: The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.

### StringBeginsWithAdvancedFilter
* StringBeginsWithAdvancedFilter `object`: StringBeginsWith Advanced Filter.
  * values `array`: The set of filter values.
    * items `string`
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### StringContainsAdvancedFilter
* StringContainsAdvancedFilter `object`: StringContains Advanced Filter.
  * values `array`: The set of filter values.
    * items `string`
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### StringEndsWithAdvancedFilter
* StringEndsWithAdvancedFilter `object`: StringEndsWith Advanced Filter.
  * values `array`: The set of filter values.
    * items `string`
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### StringInAdvancedFilter
* StringInAdvancedFilter `object`: StringIn Advanced Filter.
  * values `array`: The set of filter values.
    * items `string`
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### StringNotInAdvancedFilter
* StringNotInAdvancedFilter `object`: StringNotIn Advanced Filter.
  * values `array`: The set of filter values.
    * items `string`
  * key `string`: The field/property in the event based on which you want to filter.
  * operatorType **required** `string` (values: NumberIn, NumberNotIn, NumberLessThan, NumberGreaterThan, NumberLessThanOrEquals, NumberGreaterThanOrEquals, BoolEquals, StringIn, StringNotIn, StringBeginsWith, StringEndsWith, StringContains): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### Topic
* Topic `object`: EventGrid Topic
  * properties [TopicProperties](#topicproperties)
  * location **required** `string`: Location of the resource.
  * tags `object`: Tags of the resource.
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

### TopicProperties
* TopicProperties `object`: Properties of the Topic
  * endpoint `string`: Endpoint for the topic.
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Canceled, Failed): Provisioning state of the topic.

### TopicRegenerateKeyRequest
* TopicRegenerateKeyRequest `object`: Topic regenerate share access key request
  * keyName **required** `string`: Key name to regenerate key1 or key2

### TopicSharedAccessKeys
* TopicSharedAccessKeys `object`: Shared access keys of the Topic
  * key1 `string`: Shared access key1 for the topic.
  * key2 `string`: Shared access key2 for the topic.

### TopicTypeInfo
* TopicTypeInfo `object`: Properties of a topic type info.
  * properties [TopicTypeProperties](#topictypeproperties)
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

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
  * nextLink `string`: A link for the next page of topics
  * value `array`: A collection of Topics
    * items [Topic](#topic)

### TrackedResource
* TrackedResource `object`: Definition of a Tracked Resource.
  * location **required** `string`: Location of the resource.
  * tags `object`: Tags of the resource.
  * id `string`: Fully qualified identifier of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of the resource.

### WebHookEventSubscriptionDestination
* WebHookEventSubscriptionDestination `object`: Information about the webhook destination for an event subscription
  * properties [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)
  * endpointType **required** `string` (values: WebHook, EventHub, StorageQueue, HybridConnection, ServiceBusQueue): Type of the endpoint for the event subscription destination

### WebHookEventSubscriptionDestinationProperties
* WebHookEventSubscriptionDestinationProperties `object`: Information about the webhook destination properties for an event subscription.
  * endpointBaseUrl `string`: The base URL that represents the endpoint of the destination of an event subscription.
  * endpointUrl `string`: The URL that represents the endpoint of the destination of an event subscription.


