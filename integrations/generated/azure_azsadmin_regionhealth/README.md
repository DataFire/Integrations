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

.then(data => {
  console.log(data);
});
```

## Description

Region health operation endpoints and objects.

## Actions

### RegionHealths_List
Returns the list of all health status for the region.


```js
azure_azsadmin_regionhealth.RegionHealths_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [RegionHealthList](#regionhealthlist)

### RegionHealths_Get
Returns the requested health status of a region.


```js
azure_azsadmin_regionhealth.RegionHealths_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * api-version **required** `string`: Client API Version.

#### Output
* output [RegionHealth](#regionhealth)



## Definitions

### RegionHealth
* RegionHealth `object`: Contains information related to the health of a region.
  * properties [RegionHealthModel](#regionhealthmodel)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### RegionHealthList
* RegionHealthList `object`: Pageable list of region health items.
  * nextLink `string`: URI to next page.
  * value `array`: Array of region health items
    * items [RegionHealth](#regionhealth)

### RegionHealthModel
* RegionHealthModel `object`: Contains information related to the health of a region.
  * alertSummary `object`: Summary of the alerts.
    * criticalAlertCount `integer`: The number of critical alerts for the service.
    * warningAlertCount `integer`: The number of warning alerts for the service.
  * usageMetrics `array`: List of usage metrics for the region.
    * items `object`: Metrics of resource usage.
      * metricsValue `array`: List of usage metrics.
        * items `object`: Metrics for a source.
          * maCounterName `string`: Name of the counter.
          * name `string`: Name of the usage metric.
          * observedTimestamp `string`: Time counter was observed.
          * sourceName `string` (values: PhysicalNode, VirtualMachine, ResourceProvider): The origin of the metric.
          * sourceType `string`: Type of the source.
          * unit `string` (values: One, Percentage, B, KB, MB, GB, TB): The unit of the metric.
          * value `number`: Name of the usage metric.
      * name `string`: Name of the usage metric.


