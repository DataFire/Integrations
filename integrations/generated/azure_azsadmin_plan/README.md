# @datafire/azure_azsadmin_plan

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_plan
```
```js
let azure_azsadmin_plan = require('@datafire/azure_azsadmin_plan').create({
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

The Admin Subscriptions Management Client.

## Actions

### Plans_ListAll
List all plans across all subscriptions.


```js
azure_azsadmin_plan.Plans_ListAll({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PlanList](#planlist)

### Plans_List
Get the list of plans under a resource group.


```js
azure_azsadmin_plan.Plans_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PlanList](#planlist)

### Plans_Delete
Delete the specified plan.


```js
azure_azsadmin_plan.Plans_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "plan": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * plan **required** `string`: Name of the plan.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Plans_Get
Get the specified plan.


```js
azure_azsadmin_plan.Plans_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "plan": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * plan **required** `string`: Name of the plan.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Plan](#plan)

### Plans_CreateOrUpdate
Create or update the plan.


```js
azure_azsadmin_plan.Plans_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "plan": "",
  "api-version": "",
  "newPlan": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * plan **required** `string`: Name of the plan.
  * api-version **required** `string`: Client Api Version.
  * newPlan **required** [Plan](#plan)

#### Output
* output [Plan](#plan)

### Plans_ListMetricDefinitions
Get the metric definitions of the specified plan.


```js
azure_azsadmin_plan.Plans_ListMetricDefinitions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "plan": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * plan **required** `string`: Name of the plan.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: List of metric definitions.
  * nextLink `string`: Continuation token
  * value `array`: Array of metric definitions.
    * items `object`: Metric Definition
      * metricAvailabilities `array`: List of metric definitions.
        * items `object`: Metric Definition
          * retention `string`: the retention. Metrics may be queried for this interval.
          * timeGrain `string`: The time grain. Metrics will be available for this time grain.
      * name `string`: Metric definition name.
      * primaryAggregationType `string` (values: None, Average, Total, Minimum, Maximum, Last): The primary aggregation type for resource metric.
      * unit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond): The resource metric unit.

### Plans_ListMetrics
Get the metrics of the specified plan.


```js
azure_azsadmin_plan.Plans_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "plan": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * plan **required** `string`: Name of the plan.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: List of metrics.
  * nextLink `string`: Continuation token
  * value `array`: List of metrics.
    * items `object`: The resource metric set that represents the metrics for a particular resource.
      * endTime `string`: End time of the metric.
      * metricUnit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond): The resource metric unit.
      * metricValues `array`: List of metric values.
        * items `object`: Metric value
          * average `number`: Average value for metric sample period.
          * count `integer`: Number of measurements for metric sample period.
          * maximum `number`: Maximum value for metric sample period.
          * minimum `number`: Minimum value for metric sample period.
          * properties `object`: Extended properties.
          * timeStamp `string`: Timestamp of when the metric value was collected.
          * total `number`: Total value for metric sample period.
      * startTime `string`: Start time of the metric.
      * timeGrain `string`: Timespan of the metric.



## Definitions

### Plan
* Plan `object`: A plan represents a package of quotas and capabilities that are offered tenants. A tenant can acquire this plan through an offer to upgrade his access to underlying cloud services.
  * properties [PlanProperties](#planproperties)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### PlanList
* PlanList `object`: List of plans
  * nextLink `string`: Continuation token
  * value `array`: Array of plans.
    * items [Plan](#plan)

### PlanProperties
* PlanProperties `object`: Properties of a plan.
  * description `string`: Description of the plan.
  * displayName `string`: Display name.
  * externalReferenceId `string`: External reference identifier.
  * name `string`: Name of the plan.
  * quotaIds `array`: Quota identifiers under the plan.
    * items `string`
  * skuIds `array`: SKU identifiers.
    * items `string`
  * subscriptionCount `integer`: Subscription count.


