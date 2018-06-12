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

azure_azsadmin_resourcehealth.ResourceHealths_List({
  "subscriptionId": "",
  "location": "",
  "serviceRegistrationId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Resource health operation endpoints and objects.

## Actions

### ResourceHealths_List
Get a list of resources?.


```js
azure_azsadmin_resourcehealth.ResourceHealths_List({
  "subscriptionId": "",
  "location": "",
  "serviceRegistrationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * serviceRegistrationId **required** `string`: Service registration id.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [ResourceHealthList](#resourcehealthlist)

### ResourceHealths_Get
Get health information about a resources.


```js
azure_azsadmin_resourcehealth.ResourceHealths_Get({
  "subscriptionId": "",
  "location": "",
  "serviceRegistrationId": "",
  "resourceRegistrationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location name.
  * serviceRegistrationId **required** `string`: Service registration id.
  * resourceRegistrationId **required** `string`: Resource registration id.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [ResourceHealth](#resourcehealth)



## Definitions

### ResourceHealth
* ResourceHealth `object`: Health information related to a resource.
  * properties [ResourceHealthModel](#resourcehealthmodel)
  * id `string`: URI of the resource.
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### ResourceHealthList
* ResourceHealthList `object`: Pageable list of resource healths.
  * nextLink `string`: URI to next page.
  * value `array`: Array of of resource healths
    * items [ResourceHealth](#resourcehealth)

### ResourceHealthModel
* ResourceHealthModel `object`: Health information related to a resource.
  * resourceDisplayName `string`: Gets or sets the resource display name.
  * resourceLocation `string`: Gets or sets the resource location.
  * resourceName `string`: Gets or sets the resource name.
  * resourceType `string`: Gets or sets the resource type.
  * resourceURI `string`: Gets or sets the resource uri.
  * rpRegistrationId `string`: Gets or sets the resource provider registration id.
  * usageMetrics `array`: Gets or sets the usage metrics.
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
  * alertSummary `object`: Summary of the alerts.
    * criticalAlertCount `integer`: How many critical alerts this service has.
    * warningAlertCount `integer`: How many warning alerts this service has.
  * healthState `string`: Gets or sets the health status.
  * namespace `string`: Gets or sets the name space.
  * registrationId `string`: Gets or sets the registration id.
  * routePrefix `string`: Gets or sets the route prefix.


