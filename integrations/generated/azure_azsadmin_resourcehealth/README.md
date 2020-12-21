# @datafire/azure_azsadmin_resourcehealth

Client library for InfrastructureInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_resourcehealth
```
```js
let azure_azsadmin_resourcehealth = require('@datafire/azure_azsadmin_resourcehealth').create({
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

Resource health operation endpoints and objects.

## Actions

### ResourceHealths_List
Returns a list of each resource's health under a service.


```js
azure_azsadmin_resourcehealth.ResourceHealths_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "serviceRegistrationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * serviceRegistrationId **required** `string`: Service registration ID.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [ResourceHealthList](#resourcehealthlist)

### ResourceHealths_Get
Returns the requested health information about a resource.


```js
azure_azsadmin_resourcehealth.ResourceHealths_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "serviceRegistrationId": "",
  "resourceRegistrationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * location **required** `string`: Name of the region
  * serviceRegistrationId **required** `string`: Service registration ID.
  * resourceRegistrationId **required** `string`: Resource registration ID.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [ResourceHealth](#resourcehealth)



## Definitions

### ResourceHealth
* ResourceHealth `object`: Health information related to a resource.
  * properties [ResourceHealthModel](#resourcehealthmodel)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### ResourceHealthList
* ResourceHealthList `object`: Pageable list of resource health objects.
  * nextLink `string`: URI to next page.
  * value `array`: List of resource health objects.
    * items [ResourceHealth](#resourcehealth)

### ResourceHealthModel
* ResourceHealthModel `object`: Health information related to a resource.
  * resourceDisplayName `string`: Resource display name.
  * resourceLocation `string`: Resource location.
  * resourceName `string`: Resource name.
  * resourceType `string`: Resource type.
  * resourceURI `string`: Gets or sets the resource URI.
  * rpRegistrationId `string`: Gets or sets the resource provider registration ID.
  * usageMetrics `array`: Usage metrics.
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
  * alertSummary `object`: Summary of the alerts.
    * criticalAlertCount `integer`: The number of critical alerts for the service.
    * warningAlertCount `integer`: The number of warning alerts for the service.
  * healthState `string`: Health state.
  * namespace `string`: Namespace of the health resource.
  * registrationId `string`: Registration ID.
  * routePrefix `string`: Route prefix.


