# @datafire/azure_azsadmin_infrastructureinsights

Client library for InfrastructureInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_infrastructureinsights
```
```js
let azure_azsadmin_infrastructureinsights = require('@datafire/azure_azsadmin_infrastructureinsights').create({
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

The Admin Infrastructure Insights Management Client.

## Actions

### Operations_List
Returns a list of support REST operations.


```js
azure_azsadmin_infrastructureinsights.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### AlertSummary
* AlertSummary `object`: Summary of the alerts.
  * criticalAlertCount `integer`: The number of critical alerts for the service.
  * warningAlertCount `integer`: The number of warning alerts for the service.

### BaseHealth
* BaseHealth `object`: Models the base properties for health resource.
  * alertSummary [AlertSummary](#alertsummary)
  * healthState `string`: Health state.
  * namespace `string`: Namespace of the health resource.
  * registrationId `string`: Registration ID.
  * routePrefix `string`: Route prefix.

### Dictionary
* Dictionary `object`: Dictionary of string key-value pairs.

### Display
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will be displayed to the user.
  * provider `string`: The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute".
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### Metrics
* Metrics `object`: Metrics for a source.
  * maCounterName `string`: Name of the counter.
  * name `string`: Name of the usage metric.
  * observedTimestamp `string`: Time counter was observed.
  * sourceName [MetricsSourceType](#metricssourcetype)
  * sourceType `string`: Type of the source.
  * unit [MetricsUnit](#metricsunit)
  * value `number`: Name of the usage metric.

### MetricsSourceType
* MetricsSourceType `string` (values: PhysicalNode, VirtualMachine, ResourceProvider): The origin of the metric.

### MetricsUnit
* MetricsUnit `string` (values: One, Percentage, B, KB, MB, GB, TB): The unit of the metric.

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
* Resource `object`: The core properties of ARM resources
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### UsageMetrics
* UsageMetrics `object`: Metrics of resource usage.
  * metricsValue `array`: List of usage metrics.
    * items [Metrics](#metrics)
  * name `string`: Name of the usage metric.


