# @datafire/azure_alertsmanagement_alertsmanagement

Client library for Azure Alerts Management Service Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_alertsmanagement_alertsmanagement
```
```js
let azure_alertsmanagement_alertsmanagement = require('@datafire/azure_alertsmanagement_alertsmanagement').create({
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

Azure Alerts Management Service provides a single pane of glass of alerts across Azure Monitor.

## Actions

### Alerts_MetaData
List alerts meta data information based on value of identifier parameter.


```js
azure_alertsmanagement_alertsmanagement.Alerts_MetaData({
  "api-version": "",
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-05-preview): client API version
  * identifier **required** `string` (values: MonitorServiceList): Identification of the information to be retrieved by API call.

#### Output
* output [alertsMetaData](#alertsmetadata)

### Operations_List
List all operations available through Azure Alerts Management Resource Provider.


```js
azure_alertsmanagement_alertsmanagement.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [operationsList](#operationslist)

### ActionRules_ListBySubscription
List all action rules of the subscription and given input filters


```js
azure_alertsmanagement_alertsmanagement.ActionRules_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * targetResourceGroup `string`: Filter by target resource group name. Default value is select all.
  * targetResourceType `string`: Filter by target resource type. Default value is select all.
  * targetResource `string`: Filter by target resource( which is full ARM ID) Default value is select all.
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): Filter by severity.  Default value is select all.
  * monitorService `string` (values: Application Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, Log Analytics, Nagios, Platform, SCOM, ServiceHealth, SmartDetector, VM Insights, Zabbix): Filter by monitor service which generates the alert instance. Default value is select all.
  * impactedScope `string`: filter by impacted/target scope (provide comma separated list for multiple scopes). The value should be an well constructed ARM id of the scope.
  * description `string`: filter by alert rule description
  * alertRuleId `string`: filter by alert rule id
  * actionGroup `string`: filter by action group configured as part of action rule
  * name `string`: filter by action rule name
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [ActionRulesList](#actionruleslist)

### Alerts_GetAll
List all existing alerts, where the results can be filtered on the basis of multiple parameters (e.g. time range). The results can then be sorted on the basis specific fields, with the default being lastModifiedDateTime. 


```js
azure_alertsmanagement_alertsmanagement.Alerts_GetAll({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * targetResource `string`: Filter by target resource( which is full ARM ID) Default value is select all.
  * targetResourceType `string`: Filter by target resource type. Default value is select all.
  * targetResourceGroup `string`: Filter by target resource group name. Default value is select all.
  * monitorService `string` (values: Application Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, Log Analytics, Nagios, Platform, SCOM, ServiceHealth, SmartDetector, VM Insights, Zabbix): Filter by monitor service which generates the alert instance. Default value is select all.
  * monitorCondition `string` (values: Fired, Resolved): Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): Filter by severity.  Default value is select all.
  * alertState `string` (values: New, Acknowledged, Closed): Filter by state of the alert instance. Default value is to select all.
  * alertRule `string`: Filter by specific alert rule.  Default value is to select all.
  * smartGroupId `string`: Filter the alerts list by the Smart Group Id. Default value is none.
  * includeContext `boolean`: Include context which has contextual data specific to the monitor service. Default value is false'
  * includeEgressConfig `boolean`: Include egress config which would be used for displaying the content in portal.  Default value is 'false'.
  * pageCount `integer`: Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the "includeContent"  filter is selected, maximum value allowed is 25. Default value is 25.
  * sortBy `string` (values: name, severity, alertState, monitorCondition, targetResource, targetResourceName, targetResourceGroup, targetResourceType, startDateTime, lastModifiedDateTime): Sort the query results by input field,  Default value is 'lastModifiedDateTime'.
  * sortOrder `string` (values: asc, desc): Sort the query results order in either ascending or descending.  Default value is 'desc' for time fields and 'asc' for others.
  * select `string`: This filter allows to selection of the fields(comma separated) which would  be part of the essential section. This would allow to project only the  required fields rather than getting entire content.  Default is to fetch all the fields in the essentials section.
  * timeRange `string` (values: 1h, 1d, 7d, 30d): Filter by time range by below listed values. Default value is 1 day.
  * customTimeRange `string`: Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none.
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [alertsList](#alertslist)

### Alerts_GetById
Get information related to a specific alert


```js
azure_alertsmanagement_alertsmanagement.Alerts_GetById({
  "subscriptionId": "",
  "alertId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * alertId **required** `string`: Unique ID of an alert instance.
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [alert](#alert)

### Alerts_ChangeState
Change the state of an alert.


```js
azure_alertsmanagement_alertsmanagement.Alerts_ChangeState({
  "subscriptionId": "",
  "alertId": "",
  "api-version": "",
  "newState": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * alertId **required** `string`: Unique ID of an alert instance.
  * api-version **required** `string` (values: 2019-05-05-preview): client API version
  * newState **required** `string` (values: New, Acknowledged, Closed): New state of the alert.

#### Output
* output [alert](#alert)

### Alerts_GetHistory
Get the history of an alert, which captures any monitor condition changes (Fired/Resolved) and alert state changes (New/Acknowledged/Closed).


```js
azure_alertsmanagement_alertsmanagement.Alerts_GetHistory({
  "subscriptionId": "",
  "alertId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * alertId **required** `string`: Unique ID of an alert instance.
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [alertModification](#alertmodification)

### Alerts_GetSummary
Get a summarized count of your alerts grouped by various parameters (e.g. grouping by 'Severity' returns the count of alerts for each severity).


```js
azure_alertsmanagement_alertsmanagement.Alerts_GetSummary({
  "subscriptionId": "",
  "groupby": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * groupby **required** `string` (values: severity, alertState, monitorCondition, monitorService, signalType, alertRule): This parameter allows the result set to be grouped by input fields (Maximum 2 comma separated fields supported). For example, groupby=severity or groupby=severity,alertstate.
  * includeSmartGroupsCount `boolean`: Include count of the SmartGroups as part of the summary. Default value is 'false'.
  * targetResource `string`: Filter by target resource( which is full ARM ID) Default value is select all.
  * targetResourceType `string`: Filter by target resource type. Default value is select all.
  * targetResourceGroup `string`: Filter by target resource group name. Default value is select all.
  * monitorService `string` (values: Application Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, Log Analytics, Nagios, Platform, SCOM, ServiceHealth, SmartDetector, VM Insights, Zabbix): Filter by monitor service which generates the alert instance. Default value is select all.
  * monitorCondition `string` (values: Fired, Resolved): Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): Filter by severity.  Default value is select all.
  * alertState `string` (values: New, Acknowledged, Closed): Filter by state of the alert instance. Default value is to select all.
  * alertRule `string`: Filter by specific alert rule.  Default value is to select all.
  * timeRange `string` (values: 1h, 1d, 7d, 30d): Filter by time range by below listed values. Default value is 1 day.
  * customTimeRange `string`: Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none.
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [alertsSummary](#alertssummary)

### SmartGroups_GetAll
List all the Smart Groups within a specified subscription. 


```js
azure_alertsmanagement_alertsmanagement.SmartGroups_GetAll({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * targetResource `string`: Filter by target resource( which is full ARM ID) Default value is select all.
  * targetResourceGroup `string`: Filter by target resource group name. Default value is select all.
  * targetResourceType `string`: Filter by target resource type. Default value is select all.
  * monitorService `string` (values: Application Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, Log Analytics, Nagios, Platform, SCOM, ServiceHealth, SmartDetector, VM Insights, Zabbix): Filter by monitor service which generates the alert instance. Default value is select all.
  * monitorCondition `string` (values: Fired, Resolved): Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): Filter by severity.  Default value is select all.
  * smartGroupState `string` (values: New, Acknowledged, Closed): Filter by state of the smart group. Default value is to select all.
  * timeRange `string` (values: 1h, 1d, 7d, 30d): Filter by time range by below listed values. Default value is 1 day.
  * pageCount `integer`: Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the "includeContent"  filter is selected, maximum value allowed is 25. Default value is 25.
  * sortBy `string` (values: alertsCount, state, severity, startDateTime, lastModifiedDateTime): Sort the query results by input field. Default value is sort by 'lastModifiedDateTime'.
  * sortOrder `string` (values: asc, desc): Sort the query results order in either ascending or descending.  Default value is 'desc' for time fields and 'asc' for others.
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [smartGroupsList](#smartgroupslist)

### SmartGroups_GetById
Get information related to a specific Smart Group.


```js
azure_alertsmanagement_alertsmanagement.SmartGroups_GetById({
  "subscriptionId": "",
  "smartGroupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * smartGroupId **required** `string`: Smart group unique id. 
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [smartGroup](#smartgroup)

### SmartGroups_ChangeState
Change the state of a Smart Group.


```js
azure_alertsmanagement_alertsmanagement.SmartGroups_ChangeState({
  "subscriptionId": "",
  "smartGroupId": "",
  "api-version": "",
  "newState": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * smartGroupId **required** `string`: Smart group unique id. 
  * api-version **required** `string` (values: 2019-05-05-preview): client API version
  * newState **required** `string` (values: New, Acknowledged, Closed): New state of the alert.

#### Output
* output [smartGroup](#smartgroup)

### SmartGroups_GetHistory
Get the history a smart group, which captures any Smart Group state changes (New/Acknowledged/Closed) .


```js
azure_alertsmanagement_alertsmanagement.SmartGroups_GetHistory({
  "subscriptionId": "",
  "smartGroupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * smartGroupId **required** `string`: Smart group unique id. 
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [smartGroupModification](#smartgroupmodification)

### ActionRules_ListByResourceGroup
List all action rules of the subscription, created in given resource group and given input filters


```js
azure_alertsmanagement_alertsmanagement.ActionRules_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: Resource group name where the resource is created.
  * targetResourceGroup `string`: Filter by target resource group name. Default value is select all.
  * targetResourceType `string`: Filter by target resource type. Default value is select all.
  * targetResource `string`: Filter by target resource( which is full ARM ID) Default value is select all.
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): Filter by severity.  Default value is select all.
  * monitorService `string` (values: Application Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, Log Analytics, Nagios, Platform, SCOM, ServiceHealth, SmartDetector, VM Insights, Zabbix): Filter by monitor service which generates the alert instance. Default value is select all.
  * impactedScope `string`: filter by impacted/target scope (provide comma separated list for multiple scopes). The value should be an well constructed ARM id of the scope.
  * description `string`: filter by alert rule description
  * alertRuleId `string`: filter by alert rule id
  * actionGroup `string`: filter by action group configured as part of action rule
  * name `string`: filter by action rule name
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [ActionRulesList](#actionruleslist)

### ActionRules_Delete
Deletes a given action rule


```js
azure_alertsmanagement_alertsmanagement.ActionRules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "actionRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: Resource group name where the resource is created.
  * actionRuleName **required** `string`: The name that needs to be deleted
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output `boolean`

### ActionRules_GetByName
Get a specific action rule


```js
azure_alertsmanagement_alertsmanagement.ActionRules_GetByName({
  "subscriptionId": "",
  "resourceGroupName": "",
  "actionRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: Resource group name where the resource is created.
  * actionRuleName **required** `string`: The name of action rule that needs to be fetched
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [ActionRule](#actionrule)

### ActionRules_Update
Update enabled flag and/or tags for the given action rule


```js
azure_alertsmanagement_alertsmanagement.ActionRules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "actionRuleName": "",
  "actionRulePatch": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: Resource group name where the resource is created.
  * actionRuleName **required** `string`: The name that needs to be updated
  * actionRulePatch **required** [PatchObject](#patchobject)
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [ActionRule](#actionrule)

### ActionRules_CreateUpdate
Creates/Updates a specific action rule


```js
azure_alertsmanagement_alertsmanagement.ActionRules_CreateUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "actionRuleName": "",
  "actionRule": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: Resource group name where the resource is created.
  * actionRuleName **required** `string`: The name of action rule that needs to be created/updated
  * actionRule **required** [ActionRule](#actionrule)
  * api-version **required** `string` (values: 2019-05-05-preview): client API version

#### Output
* output [ActionRule](#actionrule)



## Definitions

### ActionGroup
* Action Group based Action Rule `object`: Action rule with action group configuration
  * actionGroupId **required** `string`: Action group to trigger if action rule matches
  * conditions [Conditions](#conditions)
  * createdAt `string`: Creation time of action rule. Date-Time in ISO-8601 format.
  * createdBy `string`: Created by user name.
  * description `string`: Description of action rule
  * lastModifiedAt `string`: Last updated time of action rule. Date-Time in ISO-8601 format.
  * lastModifiedBy `string`: Last modified by user name.
  * scope [Scope](#scope)
  * status `string` (values: Enabled, Disabled): Indicates if the given action rule is enabled or disabled
  * type **required** `string` (values: Suppression, ActionGroup, Diagnostics): Indicates type of action rule

### ActionRule
* ActionRule `object`: Action rule object containing target scope, conditions and suppression logic
  * properties [ActionRuleProperties](#actionruleproperties)
  * location **required** `string`: Resource location
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ActionRuleProperties
* ActionRuleProperties `object`: Action rule properties defining scope, conditions, suppression logic for action rule
  * conditions [Conditions](#conditions)
  * createdAt `string`: Creation time of action rule. Date-Time in ISO-8601 format.
  * createdBy `string`: Created by user name.
  * description `string`: Description of action rule
  * lastModifiedAt `string`: Last updated time of action rule. Date-Time in ISO-8601 format.
  * lastModifiedBy `string`: Last modified by user name.
  * scope [Scope](#scope)
  * status `string` (values: Enabled, Disabled): Indicates if the given action rule is enabled or disabled
  * type **required** `string` (values: Suppression, ActionGroup, Diagnostics): Indicates type of action rule

### ActionRulesList
* ActionRulesList `object`: List of action rules
  * nextLink `string`: URL to fetch the next set of action rules
  * value `array`: List of action rules
    * items [ActionRule](#actionrule)

### Condition
* Condition `object`: condition to trigger an action rule
  * operator `string` (values: Equals, NotEquals, Contains, DoesNotContain): operator for a given condition
  * values `array`: list of values to match for a given condition.
    * items `string`

### Conditions
* Conditions `object`: Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
  * alertContext [Condition](#condition)
  * alertRuleId [Condition](#condition)
  * description [Condition](#condition)
  * monitorCondition [Condition](#condition)
  * monitorService [Condition](#condition)
  * severity [Condition](#condition)
  * targetResourceType [Condition](#condition)

### Diagnostics
* Diagnostics based Action Rule: Action rule with diagnostics configuration
  * conditions [Conditions](#conditions)
  * createdAt `string`: Creation time of action rule. Date-Time in ISO-8601 format.
  * createdBy `string`: Created by user name.
  * description `string`: Description of action rule
  * lastModifiedAt `string`: Last updated time of action rule. Date-Time in ISO-8601 format.
  * lastModifiedBy `string`: Last modified by user name.
  * scope [Scope](#scope)
  * status `string` (values: Enabled, Disabled): Indicates if the given action rule is enabled or disabled
  * type **required** `string` (values: Suppression, ActionGroup, Diagnostics): Indicates type of action rule

### ManagedResource
* ManagedResource `object`: An azure managed resource object
  * location **required** `string`: Resource location
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### MonitorServiceDetails
* MonitorServiceDetails `object`: Details of a monitor service
  * displayName `string`: Monitor service display name
  * name `string`: Monitor service name

### MonitorServiceList
* Monitor service details `object`: Monitor service details
  * data **required** `array`: Array of operations
    * items [MonitorServiceDetails](#monitorservicedetails)
  * metadataIdentifier **required** `string` (values: MonitorServiceList): Identification of the information to be retrieved by API call

### PatchObject
* PatchObject `object`: Data contract for patch
  * properties [PatchProperties](#patchproperties)
  * tags `object`: tags to be updated

### PatchProperties
* PatchProperties `object`: Action rule properties supported by patch
  * status `string` (values: Enabled, Disabled): Indicates if the given action rule is enabled or disabled

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### Scope
* Scope `object`: Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
  * scopeType `string` (values: ResourceGroup, Resource): type of target scope
  * values `array`: list of ARM IDs of the given scope type which will be the target of the given action rule.
    * items `string`

### Suppression
* Suppression based Action Rule `object`: Action rule with suppression configuration
  * suppressionConfig **required** [SuppressionConfig](#suppressionconfig)
  * conditions [Conditions](#conditions)
  * createdAt `string`: Creation time of action rule. Date-Time in ISO-8601 format.
  * createdBy `string`: Created by user name.
  * description `string`: Description of action rule
  * lastModifiedAt `string`: Last updated time of action rule. Date-Time in ISO-8601 format.
  * lastModifiedBy `string`: Last modified by user name.
  * scope [Scope](#scope)
  * status `string` (values: Enabled, Disabled): Indicates if the given action rule is enabled or disabled
  * type **required** `string` (values: Suppression, ActionGroup, Diagnostics): Indicates type of action rule

### SuppressionConfig
* SuppressionConfig `object`: Suppression logic for a given action rule
  * recurrenceType **required** `string` (values: Always, Once, Daily, Weekly, Monthly): Specifies when the suppression should be applied
  * schedule [SuppressionSchedule](#suppressionschedule)

### SuppressionSchedule
* SuppressionSchedule `object`: Schedule for a given suppression configuration.
  * endDate `string`: End date for suppression
  * endTime `string`: End date for suppression
  * recurrenceValues `array`: Specifies the values for recurrence pattern
    * items `integer`
  * startDate `string`: Start date for suppression
  * startTime `string`: Start time for suppression

### alert
* alert `object`: An alert created in alert management service.
  * properties [alertProperties](#alertproperties)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### alertContext
* alertContext `object`: Information specific to the monitor service that gives more contextual details about the alert.

### alertModification
* alertModification `object`: Alert Modification details
  * properties [alertModificationProperties](#alertmodificationproperties)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### alertModificationItem
* alertModificationItem `object`: Alert modification item.
  * comments `string`: Modification comments
  * description `string`: Description of the modification
  * modificationEvent `string` (values: AlertCreated, StateChange, MonitorConditionChange): Reason for the modification
  * modifiedAt `string`: Modified date and time
  * modifiedBy `string`: Modified user details (Principal client name)
  * newValue `string`: New value
  * oldValue `string`: Old value

### alertModificationProperties
* alertModificationProperties `object`: Properties of the alert modification item.
  * alertId `string`: Unique Id of the alert for which the history is being retrieved
  * modifications `array`: Modification details
    * items [alertModificationItem](#alertmodificationitem)

### alertProperties
* alertProperties `object`: Alert property bag
  * context [alertContext](#alertcontext)
  * egressConfig [egressConfig](#egressconfig)
  * essentials [essentials](#essentials)

### alertsList
* alertsList `object`: List the alerts.
  * nextLink `string`: URL to fetch the next set of alerts.
  * value `array`: List of alerts
    * items [alert](#alert)

### alertsMetaData
* alertsMetaData `object`: alert meta data information.
  * properties [alertsMetaDataProperties](#alertsmetadataproperties)

### alertsMetaDataProperties
* alertsMetaDataProperties `object`: alert meta data property bag
  * metadataIdentifier **required** `string` (values: MonitorServiceList): Identification of the information to be retrieved by API call

### alertsSummary
* alertsSummary `object`: Summary of alerts based on the input filters and 'groupby' parameters.
  * properties [alertsSummaryGroup](#alertssummarygroup)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### alertsSummaryGroup
* alertsSummaryGroup `object`: Group the result set.
  * groupedby `string`: Name of the field aggregated
  * smartGroupsCount `integer`: Total count of the smart groups.
  * total `integer`: Total count of the result set.
  * values `array`: List of the items
    * items [alertsSummaryGroupItem](#alertssummarygroupitem)

### alertsSummaryGroupItem
* alertsSummaryGroupItem `object`: Alerts summary group item
  * count `integer`: Count of the aggregated field
  * groupedby `string`: Name of the field aggregated
  * name `string`: Value of the aggregated field
  * values `array`: List of the items
    * items [alertsSummaryGroupItem](#alertssummarygroupitem)

### egressConfig
* egressConfig `object`: Config which would be used for displaying the data in portal.

### errorResponse
* errorResponse `object`: An error response from the service.
  * error [errorResponseBody](#errorresponsebody)

### errorResponseBody
* errorResponseBody `object`: Details of error response.
  * code `string`: Error code, intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [errorResponseBody](#errorresponsebody)
  * message `string`: Description of the error, intended for display in user interface.
  * target `string`: Target of the particular error, for example name of the property.

### essentials
* essentials `object`: This object contains consistent fields across different monitor services.
  * alertRule `string`: Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
  * alertState `string` (values: New, Acknowledged, Closed): Alert object state, which can be modified by the user.
  * lastModifiedDateTime `string`: Last modification time(ISO-8601 format) of alert instance.
  * lastModifiedUserName `string`: User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user.
  * monitorCondition `string` (values: Fired, Resolved): Condition of the rule at the monitor service. It represents whether the underlying conditions have crossed the defined alert rule thresholds.
  * monitorConditionResolvedDateTime `string`: Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met.
  * monitorService `string` (values: Application Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, Log Analytics, Nagios, Platform, SCOM, ServiceHealth, SmartDetector, VM Insights, Zabbix): Monitor service on which the rule(monitor) is set.
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): Severity of alert Sev0 being highest and Sev4 being lowest.
  * signalType `string` (values: Metric, Log, Unknown): The type of signal the alert is based on, which could be metrics, logs or activity logs.
  * smartGroupId `string`: Unique Id of the smart group
  * smartGroupingReason `string`: Verbose reason describing the reason why this alert instance is added to a smart group
  * sourceCreatedId `string`: Unique Id created by monitor service for each alert instance. This could be used to track the issue at the monitor service, in case of Nagios, Zabbix, SCOM etc.
  * startDateTime `string`: Creation time(ISO-8601 format) of alert instance.
  * targetResource `string`: Target ARM resource, on which alert got created.
  * targetResourceGroup `string`: Resource group of target ARM resource, on which alert got created.
  * targetResourceName `string`: Name of the target ARM resource name, on which alert got created.
  * targetResourceType `string`: Resource type of target ARM resource, on which alert got created.

### operation
* operation `object`: Operation provided by provider
  * display `object`: Properties of the operation
    * description `string`: Description of the operation
    * operation `string`: Operation name
    * provider `string`: Provider name
    * resource `string`: Resource name
  * name `string`: Name of the operation

### operationsList
* operationsList `object`: Lists the operations available in the AlertsManagement RP.
  * nextLink `string`: URL to fetch the next set of alerts.
  * value **required** `array`: Array of operations
    * items [operation](#operation)

### smartGroup
* smartGroup `object`: Set of related alerts grouped together smartly by AMS.
  * properties [smartGroupProperties](#smartgroupproperties)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### smartGroupAggregatedProperty
* smartGroupAggregatedProperty `object`: Aggregated property of each type
  * count `integer`: Total number of items of type.
  * name `string`: Name of the type.

### smartGroupModification
* smartGroupModification `object`: Alert Modification details
  * properties [smartGroupModificationProperties](#smartgroupmodificationproperties)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### smartGroupModificationItem
* smartGroupModificationItem `object`: smartGroup modification item.
  * comments `string`: Modification comments
  * description `string`: Description of the modification
  * modificationEvent `string` (values: SmartGroupCreated, StateChange, AlertAdded, AlertRemoved): Reason for the modification
  * modifiedAt `string`: Modified date and time
  * modifiedBy `string`: Modified user details (Principal client name)
  * newValue `string`: New value
  * oldValue `string`: Old value

### smartGroupModificationProperties
* smartGroupModificationProperties `object`: Properties of the smartGroup modification item.
  * modifications `array`: Modification details
    * items [smartGroupModificationItem](#smartgroupmodificationitem)
  * nextLink `string`: URL to fetch the next set of results.
  * smartGroupId `string`: Unique Id of the smartGroup for which the history is being retrieved

### smartGroupProperties
* smartGroupProperties `object`: Properties of smart group.
  * alertSeverities `array`: Summary of alertSeverities in the smart group
    * items [smartGroupAggregatedProperty](#smartgroupaggregatedproperty)
  * alertStates `array`: Summary of alertStates in the smart group
    * items [smartGroupAggregatedProperty](#smartgroupaggregatedproperty)
  * alertsCount `integer`: Total number of alerts in smart group
  * lastModifiedDateTime `string`: Last updated time of smart group. Date-Time in ISO-8601 format.
  * lastModifiedUserName `string`: Last modified by user name.
  * monitorConditions `array`: Summary of monitorConditions in the smart group
    * items [smartGroupAggregatedProperty](#smartgroupaggregatedproperty)
  * monitorServices `array`: Summary of monitorServices in the smart group
    * items [smartGroupAggregatedProperty](#smartgroupaggregatedproperty)
  * nextLink `string`: The URI to fetch the next page of alerts. Call ListNext() with this URI to fetch the next page alerts.
  * resourceGroups `array`: Summary of target resource groups in the smart group
    * items [smartGroupAggregatedProperty](#smartgroupaggregatedproperty)
  * resourceTypes `array`: Summary of target resource types in the smart group
    * items [smartGroupAggregatedProperty](#smartgroupaggregatedproperty)
  * resources `array`: Summary of target resources in the smart group
    * items [smartGroupAggregatedProperty](#smartgroupaggregatedproperty)
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): Severity of smart group is the highest(Sev0 >... > Sev4) severity of all the alerts in the group.
  * smartGroupState `string` (values: New, Acknowledged, Closed): Smart group state
  * startDateTime `string`: Creation time of smart group. Date-Time in ISO-8601 format.

### smartGroupsList
* smartGroupsList `object`: List the alerts.
  * nextLink `string`: URL to fetch the next set of alerts.
  * value `array`: List of alerts
    * items [smartGroup](#smartgroup)


