# @datafire/azure_azsadmin_regionhealth

Client library for InfrastructureInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_regionhealth
```
```js
let azure_azsadmin_regionhealth = require('@datafire/azure_azsadmin_regionhealth').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_regionhealth.RegionHealths_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Region health operation endpoints and objects.

## Actions

### RegionHealths_List
Get the list of all regions health status.


```js
azure_azsadmin_regionhealth.RegionHealths_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [RegionHealthList](#regionhealthlist)

### RegionHealths_Get
Get health status of a region.


```js
azure_azsadmin_regionhealth.RegionHealths_Get({
  "subscriptionId": "",
  "location": "",
  "region": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * region **required** `string`: Name of the region
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RegionHealth](#regionhealth)



## Definitions

### RegionHealth
* RegionHealth `object`: Contains information related to a regions health.
  * properties [RegionHealthModel](#regionhealthmodel)
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### RegionHealthList
* RegionHealthList `object`: Pageable list of region health items.
  * nextLink `string`: URI to next page.
  * value `array`: Array of region health items
    * items [RegionHealth](#regionhealth)

### RegionHealthModel
* RegionHealthModel `object`: Contains information related to a regions health.
  * alertSummary `object`: Summary of the alerts.
    * criticalAlertCount `integer`: How many critical alerts this service has.
    * warningAlertCount `integer`: How many warning alerts this service has.
  * usageMetrics `array`: List of usage metrics for this region.
    * items `object`: Metrics of resource usage.
      * metricsValue `array`: List of usage metrics.
        * items `object`: Metrics for a source.
          * maCounterName `string`: Name of the usage metric.
          * name `string`: Name of the usage metric.
          * observedTimestamp `string`: Name of the usage metric.
          * sourceName `string` (values: PhysicalNode, VirtualMachine, ResourceProvider): What created the metric.
          * sourceType `string`: Name of the usage metric.
          * unit `string` (values: One, Percentage, B, KB, MB, GB, TB): The unit of the metric.
          * value `number`: Name of the usage metric.
      * name `string`: Name of the usage metric.


