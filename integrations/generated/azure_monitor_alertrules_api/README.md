# @datafire/azure_monitor_alertrules_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_alertrules_api
```
```js
let azure_monitor_alertrules_api = require('@datafire/azure_monitor_alertrules_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor_alertrules_api.AlertRules_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AlertRules_ListByResourceGroup
List the alert rules within a resource group.


```js
azure_monitor_alertrules_api.AlertRules_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [AlertRuleResourceCollection](#alertruleresourcecollection)

### AlertRules_Delete
Deletes an alert rule


```js
azure_monitor_alertrules_api.AlertRules_Delete({
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
*Output schema unknown*

### AlertRules_Get
Gets an alert rule


```js
azure_monitor_alertrules_api.AlertRules_Get({
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [AlertRuleResource](#alertruleresource)

### AlertRules_Update
Updates an existing AlertRuleResource. To update other fields use the CreateOrUpdate method.


```js
azure_monitor_alertrules_api.AlertRules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "alertRulesResource": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.
  * alertRulesResource **required** [AlertRuleResourcePatch](#alertruleresourcepatch)

#### Output
* output [AlertRuleResource](#alertruleresource)

### AlertRules_CreateOrUpdate
Creates or updates an alert rule.


```js
azure_monitor_alertrules_api.AlertRules_CreateOrUpdate({
  "resourceGroupName": "",
  "ruleName": "",
  "api-version": "",
  "parameters": {
    "properties": null
  },
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ruleName **required** `string`: The name of the rule.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [AlertRuleResource](#alertruleresource)
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [AlertRuleResource](#alertruleresource)



## Definitions

### AlertRule
* AlertRule `object`: An alert rule.
  * actions `array`: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
    * items [RuleAction](#ruleaction)
  * condition **required** [RuleCondition](#rulecondition)
  * description `string`: the description of the alert rule that will be included in the alert email.
  * isEnabled **required** `boolean`: the flag that indicates whether the alert rule is enabled.
  * lastUpdatedTime `string`: Last time the rule was updated in ISO8601 format.
  * name **required** `string`: the name of the alert rule.

### AlertRuleResource
* AlertRuleResource `object`: The alert rule resource.
  * properties **required** [AlertRule](#alertrule)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### AlertRuleResourceCollection
* AlertRuleResourceCollection `object`: Represents a collection of alert rule resources.
  * value `array`: the values for the alert rule resources.
    * items [AlertRuleResource](#alertruleresource)

### AlertRuleResourcePatch
* AlertRuleResourcePatch `object`: The alert rule object for patch operations.
  * properties [AlertRule](#alertrule)

### ConditionOperator
* ConditionOperator `string` (values: GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual): Operators allowed in the rule condition.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LocationThresholdRuleCondition
* LocationThresholdRuleCondition `object`: A rule condition based on a certain number of locations failing.
  * failedLocationCount **required** `integer`: the number of locations that must fail to activate the alert.
  * windowSize `string`: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
  * dataSource [RuleDataSource](#ruledatasource)
  * odata.type **required** `string`: specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).

### ManagementEventAggregationCondition
* ManagementEventAggregationCondition `object`: How the data that is collected should be combined over time.
  * operator [ConditionOperator](#conditionoperator)
  * threshold `number`: The threshold value that activates the alert.
  * windowSize `string`: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.

### ManagementEventRuleCondition
* ManagementEventRuleCondition `object`: A management event rule condition.
  * aggregation [ManagementEventAggregationCondition](#managementeventaggregationcondition)
  * dataSource [RuleDataSource](#ruledatasource)
  * odata.type **required** `string`: specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### RuleAction
* RuleAction `object`: The action that is performed when the alert rule becomes active, and when an alert condition is resolved.
  * odata.type **required** `string`: specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.

### RuleCondition
* RuleCondition `object`: The condition that results in the alert rule being activated.
  * dataSource [RuleDataSource](#ruledatasource)
  * odata.type **required** `string`: specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).

### RuleDataSource
* RuleDataSource `object`: The resource from which the rule collects its data.
  * odata.type **required** `string`: specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
  * resourceUri `string`: the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.

### RuleEmailAction
* RuleEmailAction `object`: Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case.
  * customEmails `array`: the list of administrator's custom email addresses to notify of the activation of the alert.
    * items `string`
  * sendToServiceOwners `boolean`: Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.
  * odata.type **required** `string`: specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.

### RuleManagementEventClaimsDataSource
* RuleManagementEventClaimsDataSource `object`: The claims for a rule management event data source.
  * emailAddress `string`: the email address.

### RuleManagementEventDataSource
* RuleManagementEventDataSource `object`: A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case.
  * claims [RuleManagementEventClaimsDataSource](#rulemanagementeventclaimsdatasource)
  * eventName `string`: the event name.
  * eventSource `string`: the event source.
  * level `string`: the level.
  * operationName `string`: The name of the operation that should be checked for. If no name is provided, any operation will match.
  * resourceGroupName `string`: the resource group name.
  * resourceProviderName `string`: the resource provider name.
  * status `string`: The status of the operation that should be checked for. If no status is provided, any status will match.
  * subStatus `string`: the substatus.
  * odata.type **required** `string`: specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
  * resourceUri `string`: the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.

### RuleMetricDataSource
* RuleMetricDataSource `object`: A rule metric data source. The discriminator value is always RuleMetricDataSource in this case.
  * metricName `string`: the name of the metric that defines what the rule monitors.
  * odata.type **required** `string`: specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
  * resourceUri `string`: the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.

### RuleWebhookAction
* RuleWebhookAction `object`: Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case.
  * properties `object`: the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
  * serviceUri `string`: the service uri to Post the notification when the alert activates or resolves.
  * odata.type **required** `string`: specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.

### ThresholdRuleCondition
* ThresholdRuleCondition `object`: A rule condition based on a metric crossing a threshold.
  * operator **required** [ConditionOperator](#conditionoperator)
  * threshold **required** `number`: the threshold value that activates the alert.
  * timeAggregation [TimeAggregationOperator](#timeaggregationoperator)
  * windowSize `string`: the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
  * dataSource [RuleDataSource](#ruledatasource)
  * odata.type **required** `string`: specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).

### TimeAggregationOperator
* TimeAggregationOperator `string` (values: Average, Minimum, Maximum, Total, Last): Aggregation operators allowed in a rule.


