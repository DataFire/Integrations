# @datafire/azure_monitor_scheduledqueryrule_api

Client library for Microsoft Insights

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_scheduledqueryrule_api
```
```js
let azure_monitor_scheduledqueryrule_api = require('@datafire/azure_monitor_scheduledqueryrule_api').create({
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

Azure Monitor client to create/update/delete Scheduled Query Rules

## Actions

### ScheduledQueryRules_ListBySubscription
List the Log Search rules within a subscription group.


```js
azure_monitor_scheduledqueryrule_api.ScheduledQueryRules_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [LogSearchRuleResourceCollection](#logsearchruleresourcecollection)

### ScheduledQueryRules_ListByResourceGroup
List the Log Search rules within a resource group.


```js
azure_monitor_scheduledqueryrule_api.ScheduledQueryRules_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
  * subscriptionId **required** `string`: The Azure subscription Id.

#### Output
* output [LogSearchRuleResourceCollection](#logsearchruleresourcecollection)

### ScheduledQueryRules_Delete
Deletes a Log Search rule


```js
azure_monitor_scheduledqueryrule_api.ScheduledQueryRules_Delete({
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

### ScheduledQueryRules_Get
Gets an Log Search rule


```js
azure_monitor_scheduledqueryrule_api.ScheduledQueryRules_Get({
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
* output [LogSearchRuleResource](#logsearchruleresource)

### ScheduledQueryRules_Update
Update log search Rule.


```js
azure_monitor_scheduledqueryrule_api.ScheduledQueryRules_Update({
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
  * parameters **required** [LogSearchRuleResourcePatch](#logsearchruleresourcepatch)

#### Output
* output [LogSearchRuleResource](#logsearchruleresource)

### ScheduledQueryRules_CreateOrUpdate
Creates or updates an log search rule.


```js
azure_monitor_scheduledqueryrule_api.ScheduledQueryRules_CreateOrUpdate({
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
  * parameters **required** [LogSearchRuleResource](#logsearchruleresource)

#### Output
* output [LogSearchRuleResource](#logsearchruleresource)



## Definitions

### Action
* Action `object`: Action descriptor.
  * odata.type **required** `string`: Specifies the action. Supported values - AlertingAction, LogToMetricAction

### AlertSeverity
* AlertSeverity `string` (values: 0, 1, 2, 3, 4): Severity Level of Alert

### AlertingAction
* AlertingAction `object`: Specify action need to be taken when rule type is Alert
  * aznsAction [AzNsActionGroup](#aznsactiongroup)
  * severity **required** [AlertSeverity](#alertseverity)
  * throttlingInMin `integer`: time (in minutes) for which Alerts should be throttled or suppressed.
  * trigger **required** [TriggerCondition](#triggercondition)
  * odata.type **required** `string`: Specifies the action. Supported values - AlertingAction, LogToMetricAction

### AzNsActionGroup
* AzNsActionGroup `object`: Azure action group
  * actionGroup `array`: Azure Action Group reference.
    * items `string`
  * customWebhookPayload `string`: Custom payload to be sent for all webhook URI in Azure action group
  * emailSubject `string`: Custom subject override for all email ids in Azure action group

### ConditionalOperator
* ConditionalOperator `string` (values: GreaterThan, LessThan, Equal): Result Condition Evaluation criteria. Supported Values - 'GreaterThan' or 'LessThan' or 'Equal'.

### Criteria
* Criteria `object`: Specifies the criteria for converting log to metric.
  * dimensions `array`: List of Dimensions for creating metric
    * items [Dimension](#dimension)
  * metricName **required** `string`: Name of the metric

### Dimension
* Dimension `object`: Specifies the criteria for converting log to metric.
  * name **required** `string`: Name of the dimension
  * operator **required** `string` (values: Include): Operator for dimension values
  * values **required** `array`: List of dimension values
    * items `string`

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LogMetricTrigger
* LogMetricTrigger `object`: A log metrics trigger descriptor.
  * metricColumn `string`: Evaluation of metric on a particular column
  * metricTriggerType [MetricTriggerType](#metrictriggertype)
  * threshold `number`: The threshold of the metric trigger.
  * thresholdOperator [ConditionalOperator](#conditionaloperator)

### LogSearchRule
* LogSearchRule `object`: Log Search Rule Definition
  * action **required** [Action](#action)
  * description `string`: The description of the Log Search rule.
  * enabled `string` (values: true, false): The flag which indicates whether the Log Search rule is enabled. Value should be true or false
  * lastUpdatedTime `string`: Last time the rule was updated in IS08601 format.
  * provisioningState `string` (values: Succeeded, Deploying, Canceled, Failed): Provisioning state of the scheduled query rule
  * schedule [Schedule](#schedule)
  * source **required** [Source](#source)

### LogSearchRulePatch
* LogSearchRulePatch `object`: Log Search Rule Definition for Patching
  * enabled `string` (values: true, false): The flag which indicates whether the Log Search rule is enabled. Value should be true or false

### LogSearchRuleResource
* LogSearchRuleResource `object`: The Log Search Rule resource.
  * properties **required** [LogSearchRule](#logsearchrule)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### LogSearchRuleResourceCollection
* LogSearchRuleResourceCollection `object`: Represents a collection of Log Search rule resources.
  * value `array`: The values for the Log Search Rule resources.
    * items [LogSearchRuleResource](#logsearchruleresource)

### LogSearchRuleResourcePatch
* LogSearchRuleResourcePatch `object`: The log search rule resource for patch operations.
  * properties [LogSearchRulePatch](#logsearchrulepatch)

### LogToMetricAction
* LogToMetricAction `object`: Specify action need to be taken when rule type is converting log to metric
  * criteria **required** `array`: Criteria of Metric
    * items [Criteria](#criteria)
  * odata.type **required** `string`: Specifies the action. Supported values - AlertingAction, LogToMetricAction

### MetricTriggerType
* MetricTriggerType `string` (values: Consecutive, Total): Metric Trigger Evaluation Type

### QueryType
* QueryType `string` (values: ResultCount): Set value to 'ResultAccount'

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### Schedule
* Schedule `object`: Defines how often to run the search and the time interval.
  * frequencyInMinutes **required** `integer`: frequency (in minutes) at which rule condition should be evaluated.
  * timeWindowInMinutes **required** `integer`: Time window for which data needs to be fetched for query (should be greater than or equal to frequencyInMinutes).

### Source
* Source `object`: Specifies the log search query.
  * authorizedResources `array`: List of  Resource referred into query
    * items `string`
  * dataSourceId **required** `string`: The resource uri over which log search query is to be run.
  * query `string`: Log search query. Required for action type - AlertingAction
  * queryType [QueryType](#querytype)

### TriggerCondition
* TriggerCondition `object`: The condition that results in the Log Search rule.
  * metricTrigger [LogMetricTrigger](#logmetrictrigger)
  * threshold **required** `number`: Result or count threshold based on which rule should be triggered.
  * thresholdOperator **required** [ConditionalOperator](#conditionaloperator)


