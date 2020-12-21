# @datafire/azure_monitor_metricalert_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_metricalert_api
```
```js
let azure_monitor_metricalert_api = require('@datafire/azure_monitor_metricalert_api').create({
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

Azure Monitor client to create/update/delete metric based alerts.

## Actions

### MetricAlerts_ListBySubscription
Retrieve alert rule definitions in a subscription.


```js
azure_monitor_metricalert_api.MetricAlerts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricAlertResourceCollection](#metricalertresourcecollection)

### MetricAlerts_ListByResourceGroup
Retrieve alert rule definitions in a resource group.


```js
azure_monitor_metricalert_api.MetricAlerts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricAlertResourceCollection](#metricalertresourcecollection)

### MetricAlerts_Delete
Delete an alert rule definition.


```js
azure_monitor_metricalert_api.MetricAlerts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### MetricAlerts_Get
Retrieve an alert rule definition.


```js
azure_monitor_metricalert_api.MetricAlerts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricAlertResource](#metricalertresource)

### MetricAlerts_Update
Update an metric alert definition.


```js
azure_monitor_metricalert_api.MetricAlerts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [MetricAlertResourcePatch](#metricalertresourcepatch)

#### Output
* output [MetricAlertResource](#metricalertresource)

### MetricAlerts_CreateOrUpdate
Create or update an metric alert definition.


```js
azure_monitor_metricalert_api.MetricAlerts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "parameters": {
    "properties": null
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [MetricAlertResource](#metricalertresource)

#### Output
* output [MetricAlertResource](#metricalertresource)

### MetricAlertsStatus_List
Retrieve an alert rule status.


```js
azure_monitor_metricalert_api.MetricAlertsStatus_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricAlertStatusCollection](#metricalertstatuscollection)

### MetricAlertsStatus_ListByName
Retrieve an alert rule status.


```js
azure_monitor_metricalert_api.MetricAlertsStatus_ListByName({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ruleName": "",
  "statusName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * statusName **required** `string`: The name of the status.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [MetricAlertStatusCollection](#metricalertstatuscollection)



## Definitions

### DynamicMetricCriteria
* DynamicMetricCriteria `object`: Criterion for dynamic threshold.
  * alertSensitivity **required** `string` (values: Low, Medium, High): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
  * failingPeriods **required** [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods)
  * ignoreDataBefore `string`: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
  * operator **required** `string` (values: GreaterThan, LessThan, GreaterOrLessThan): The operator used to compare the metric value against the threshold.
  * criterionType **required** `string` (values: StaticThresholdCriterion, DynamicThresholdCriterion): Specifies the type of threshold criteria
  * dimensions `array`: List of dimension conditions.
    * items [MetricDimension](#metricdimension)
  * metricName **required** `string`: Name of the metric.
  * metricNamespace `string`: Namespace of the metric.
  * name **required** `string`: Name of the criteria.
  * timeAggregation **required** `string` (values: Average, Minimum, Maximum, Total): the criteria time aggregation types.

### DynamicThresholdFailingPeriods
* DynamicThresholdFailingPeriods `object`: The minimum number of violations required within the selected lookback time window required to raise an alert.
  * minFailingPeriodsToAlert **required** `number`: The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
  * numberOfEvaluationPeriods **required** `number`: The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.

### MetricAlertAction
* MetricAlertAction `object`: An alert action.
  * actionGroupId `string`: the id of the action group to use.
  * webhookProperties `object`: The properties of a webhook object.

### MetricAlertCriteria
* MetricAlertCriteria `object`: The rule criteria that defines the conditions of the alert rule.
  * odata.type **required** `string` (values: Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria, Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria): specifies the type of the alert criteria.

### MetricAlertMultipleResourceMultipleMetricCriteria
* MetricAlertMultipleResourceMultipleMetricCriteria `object`: Specifies the metric alert criteria for multiple resource that has multiple metric criteria.
  * allOf `array`: the list of multiple metric criteria for this 'all of' operation. 
    * items [MultiMetricCriteria](#multimetriccriteria)
  * odata.type **required** `string` (values: Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria, Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria): specifies the type of the alert criteria.

### MetricAlertProperties
* MetricAlertProperties `object`: An alert rule.
  * actions `array`: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
    * items [MetricAlertAction](#metricalertaction)
  * autoMitigate `boolean`: the flag that indicates whether the alert should be auto resolved or not.
  * criteria **required** [MetricAlertCriteria](#metricalertcriteria)
  * description **required** `string`: the description of the metric alert that will be included in the alert email.
  * enabled **required** `boolean`: the flag that indicates whether the metric alert is enabled.
  * evaluationFrequency **required** `string`: how often the metric alert is evaluated represented in ISO 8601 duration format.
  * lastUpdatedTime `string`: Last time the rule was updated in ISO8601 format.
  * scopes `array`: the list of resource id's that this metric alert is scoped to.
    * items `string`
  * severity **required** `integer`: Alert severity {0, 1, 2, 3, 4}
  * targetResourceRegion `string`: the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
  * targetResourceType `string`: the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
  * windowSize **required** `string`: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.

### MetricAlertResource
* MetricAlertResource `object`: The metric alert resource.
  * properties **required** [MetricAlertProperties](#metricalertproperties)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### MetricAlertResourceCollection
* MetricAlertResourceCollection `object`: Represents a collection of alert rule resources.
  * value `array`: the values for the alert rule resources.
    * items [MetricAlertResource](#metricalertresource)

### MetricAlertResourcePatch
* MetricAlertResourcePatch `object`: The metric alert resource for patch operations.
  * properties [MetricAlertProperties](#metricalertproperties)

### MetricAlertSingleResourceMultipleMetricCriteria
* MetricAlertSingleResourceMultipleMetricCriteria `object`: Specifies the metric alert criteria for a single resource that has multiple metric criteria.
  * allOf `array`: The list of metric criteria for this 'all of' operation. 
    * items [MetricCriteria](#metriccriteria)
  * odata.type **required** `string` (values: Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria, Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria): specifies the type of the alert criteria.

### MetricAlertStatus
* MetricAlertStatus `object`: An alert status.
  * id `string`: The alert rule arm id.
  * name `string`: The status name.
  * properties [MetricAlertStatusProperties](#metricalertstatusproperties)
  * type `string`: The extended resource type name.

### MetricAlertStatusCollection
* MetricAlertStatusCollection `object`: Represents a collection of alert rule resources.
  * value `array`: the values for the alert rule resources.
    * items [MetricAlertStatus](#metricalertstatus)

### MetricAlertStatusProperties
* MetricAlertStatusProperties `object`: An alert status properties.
  * dimensions `object`: An object describing the type of the dimensions.
  * status `string`: status value
  * timestamp `string`: UTC time when the status was checked.

### MetricCriteria
* MetricCriteria `object`: Criterion to filter metrics.
  * operator **required** `string` (values: Equals, NotEquals, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual): the criteria operator.
  * threshold **required** `number`: the criteria threshold value that activates the alert.
  * criterionType **required** `string` (values: StaticThresholdCriterion, DynamicThresholdCriterion): Specifies the type of threshold criteria
  * dimensions `array`: List of dimension conditions.
    * items [MetricDimension](#metricdimension)
  * metricName **required** `string`: Name of the metric.
  * metricNamespace `string`: Namespace of the metric.
  * name **required** `string`: Name of the criteria.
  * timeAggregation **required** `string` (values: Average, Minimum, Maximum, Total): the criteria time aggregation types.

### MetricDimension
* MetricDimension `object`: Specifies a metric dimension.
  * name **required** `string`: Name of the dimension.
  * operator **required** `string`: the dimension operator. Only 'Include' and 'Exclude' are supported
  * values **required** `array`: list of dimension values.
    * items `string`

### MultiMetricCriteria
* MultiMetricCriteria `object`: The types of conditions for a multi resource alert.
  * criterionType **required** `string` (values: StaticThresholdCriterion, DynamicThresholdCriterion): Specifies the type of threshold criteria
  * dimensions `array`: List of dimension conditions.
    * items [MetricDimension](#metricdimension)
  * metricName **required** `string`: Name of the metric.
  * metricNamespace `string`: Namespace of the metric.
  * name **required** `string`: Name of the criteria.
  * timeAggregation **required** `string` (values: Average, Minimum, Maximum, Total): the criteria time aggregation types.

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type


