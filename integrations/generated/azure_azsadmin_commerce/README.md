# @datafire/azure_azsadmin_commerce

Client library for CommerceManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_commerce
```
```js
let azure_azsadmin_commerce = require('@datafire/azure_azsadmin_commerce').create({
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

The Admin Commerce Management Client.

## Actions

### Operations_List
Returns the list of supported REST operations.


```js
azure_azsadmin_commerce.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationList](#operationlist)

### SubscriberUsageAggregates_List
Gets a collection of SubscriberUsageAggregates, which are UsageAggregates from users.


```js
azure_azsadmin_commerce.SubscriberUsageAggregates_List({
  "subscriptionId": "",
  "api-version": "",
  "reportedStartTime": "",
  "reportedEndTime": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * reportedStartTime **required** `string`: The reported start time (inclusive).
  * reportedEndTime **required** `string`: The reported end time (exclusive).
  * aggregationGranularity `string`: The aggregation granularity.
  * subscriberId `string`: The tenant subscription identifier.
  * continuationToken `string`: The continuation token.

#### Output
* output [UsageAggregatePage](#usageaggregatepage)

### UpdateEncryption
Update the encryption.


```js
azure_azsadmin_commerce.UpdateEncryption({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### Display
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will be displayed to the user.
  * provider `string`: The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute".
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation performed on the object. The name should match the action name that appears in RBAC or the event service.

### OperationList
* OperationList `object`: List of Operations
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: Base Resource Object
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### UsageAggregate
* UsageAggregate `object`: Aggregate usage values for resource.
  * properties [UsageAggregateModel](#usageaggregatemodel)
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### UsageAggregateModel
* UsageAggregateModel `object`: Properties for aggregate usage.
  * instanceData `string`: Key-value pairs of instance details represented as a string.
  * meterId `string`: Unique ID for the resource that was consumed, for example, the Resource ID.
  * quantity `string`: The amount of the resource consumption that occurred in this time frame.
  * subscriptionId `string`: Subscription ID of tenant using plan.
  * usageEndTime `string`: UTC end time for the usage category to which this usage aggregate belongs.
  * usageStartTime `string`: UTC start time for the usage category to which this usage aggregate belongs.

### UsageAggregatePage
* UsageAggregatePage `object`: Pageable list of usage aggregates
  * nextLink `string`: URI to the next page.
  * value `array`: List of usage aggregates.
    * items [UsageAggregate](#usageaggregate)


