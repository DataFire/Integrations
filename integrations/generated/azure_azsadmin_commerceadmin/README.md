# @datafire/azure_azsadmin_commerceadmin

Client library for CommerceManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_commerceadmin
```
```js
let azure_azsadmin_commerceadmin = require('@datafire/azure_azsadmin_commerceadmin').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_commerceadmin.SubscriberUsageAggregates_List({
  "subscriptionId": "",
  "api-version": "",
  "reportedStartTime": "",
  "reportedEndTime": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Admin Commerce Management Client.

## Actions

### SubscriberUsageAggregates_List
Gets a collection of SubscriberUsageAggregates, which are UsageAggregates from direct tenants.


```js
azure_azsadmin_commerceadmin.SubscriberUsageAggregates_List({
  "subscriptionId": "",
  "api-version": "",
  "reportedStartTime": "",
  "reportedEndTime": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * reportedStartTime **required** `string`: The reported start time (inclusive).
  * reportedEndTime **required** `string`: The reported end time (exclusive).
  * aggregationGranularity `string`: The aggregation granularity.
  * subscriberId `string`: The tenant subscription identifier.
  * continuationToken `string`: The continuation token.

#### Output
* output [UsageAggregatePage](#usageaggregatepage)



## Definitions

### Resource
* Resource `object`: Base Resource Object
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### UsageAggregate
* UsageAggregate `object`: Aggregate usage values for resource.
  * properties [UsageAggregateModel](#usageaggregatemodel)
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### UsageAggregateModel
* UsageAggregateModel `object`: Properties for aggregate usage.
  * instanceData `string`: Key-value pairs of instance details represented as a string.
  * meterId `string`: Unique ID for the resource that was consumed (aka ResourceID).
  * quantity `string`: The amount of the resource consumption that occurred in this time frame.
  * subscriptionId `string`: Subscription id of tenant using plan.
  * usageEndTime `string`: UTC end time for the usage bucket to which this usage aggregate belongs.
  * usageStartTime `string`: UTC start time for the usage bucket to which this usage aggregate belongs.

### UsageAggregatePage
* UsageAggregatePage `object`: Holds an array of usage aggregates and the continuation token.
  * nextLink `string`: Continuation token
  * value `array`: Array of usage aggregates.
    * items [UsageAggregate](#usageaggregate)


