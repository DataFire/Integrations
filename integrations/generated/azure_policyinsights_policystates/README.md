# @datafire/azure_policyinsights_policystates

Client library for PolicyStatesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_policyinsights_policystates
```
```js
let azure_policyinsights_policystates = require('@datafire/azure_policyinsights_policystates').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_policyinsights_policystates.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Operations_List
Lists available operations.


```js
azure_policyinsights_policystates.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version to use with the client requests.

#### Output
* output [OperationsListResults](#operationslistresults)

### PolicyStates_ListQueryResultsForManagementGroup
Queries policy states for the resources under the management group.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForManagementGroup({
  "policyStatesResource": "",
  "managementGroupsNamespace": "",
  "managementGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupName **required** `string`: Management group name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForManagementGroup
Summarizes policy states for the resources under the management group.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForManagementGroup({
  "policyStatesSummaryResource": "",
  "managementGroupsNamespace": "",
  "managementGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupName **required** `string`: Management group name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_ListQueryResultsForSubscription
Queries policy states for the resources under the subscription.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForSubscription({
  "policyStatesResource": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForSubscription
Summarizes policy states for the resources under the subscription.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForSubscription({
  "policyStatesSummaryResource": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_ListQueryResultsForSubscriptionLevelPolicyAssignment
Queries policy states for the subscription level policy assignment.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForSubscriptionLevelPolicyAssignment({
  "policyStatesResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policyAssignmentName **required** `string`: Policy assignment name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForSubscriptionLevelPolicyAssignment
Summarizes policy states for the subscription level policy assignment.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForSubscriptionLevelPolicyAssignment({
  "policyStatesSummaryResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policyAssignmentName **required** `string`: Policy assignment name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_ListQueryResultsForPolicyDefinition
Queries policy states for the subscription level policy definition.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForPolicyDefinition({
  "policyStatesResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policyDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policyDefinitionName **required** `string`: Policy definition name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForPolicyDefinition
Summarizes policy states for the subscription level policy definition.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForPolicyDefinition({
  "policyStatesSummaryResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policyDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policyDefinitionName **required** `string`: Policy definition name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_ListQueryResultsForPolicySetDefinition
Queries policy states for the subscription level policy set definition.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForPolicySetDefinition({
  "policyStatesResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policySetDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policySetDefinitionName **required** `string`: Policy set definition name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForPolicySetDefinition
Summarizes policy states for the subscription level policy set definition.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForPolicySetDefinition({
  "policyStatesSummaryResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policySetDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policySetDefinitionName **required** `string`: Policy set definition name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_ListQueryResultsForResourceGroup
Queries policy states for the resources under the resource group.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForResourceGroup({
  "policyStatesResource": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForResourceGroup
Summarizes policy states for the resources under the resource group.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForResourceGroup({
  "policyStatesSummaryResource": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_ListQueryResultsForResourceGroupLevelPolicyAssignment
Queries policy states for the resource group level policy assignment.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForResourceGroupLevelPolicyAssignment({
  "policyStatesResource": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "authorizationNamespace": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policyAssignmentName **required** `string`: Policy assignment name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForResourceGroupLevelPolicyAssignment
Summarizes policy states for the resource group level policy assignment.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForResourceGroupLevelPolicyAssignment({
  "policyStatesSummaryResource": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "authorizationNamespace": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * authorizationNamespace **required** `string` (values: Microsoft.Authorization): The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
  * policyAssignmentName **required** `string`: Policy assignment name.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_ListQueryResultsForResource
Queries policy states for the resource.


```js
azure_policyinsights_policystates.PolicyStates_ListQueryResultsForResource({
  "policyStatesResource": "",
  "resourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesResource **required** `string` (values: default, latest): The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
  * resourceId **required** `string`: Resource ID.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $orderby `string`: Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
  * $select `string`: Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.
  * $apply `string`: OData apply expression for aggregations.

#### Output
* output [PolicyStatesQueryResults](#policystatesqueryresults)

### PolicyStates_SummarizeForResource
Summarizes policy states for the resource.


```js
azure_policyinsights_policystates.PolicyStates_SummarizeForResource({
  "policyStatesSummaryResource": "",
  "resourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyStatesSummaryResource **required** `string` (values: latest): The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
  * resourceId **required** `string`: Resource ID.
  * api-version **required** `string`: API version to use with the client requests.
  * $top `integer`: Maximum number of records to return.
  * $from `string`: ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
  * $to `string`: ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
  * $filter `string`: OData filter expression.

#### Output
* output [SummarizeResults](#summarizeresults)

### PolicyStates_GetMetadata
Gets OData metadata XML document.


```js
azure_policyinsights_policystates.PolicyStates_GetMetadata({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: A valid scope, i.e. management group, subscription, resource group, or resource ID. Scope used has no effect on metadata returned.
  * api-version **required** `string`: API version to use with the client requests.

#### Output
* output [MetadataDocument](#metadatadocument)



## Definitions

### MetadataDocument
* MetadataDocument `string`: Metadata XML document.

### Operation
* Operation `object`: Operation definition.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Operation description.
    * operation `string`: Operation name.
    * provider `string`: Resource provider name.
    * resource `string`: Resource name on which the operation is performed.
  * name `string`: Operation name.

### OperationsListResults
* OperationsListResults `object`: List of available operations.
  * @odata.count `integer`: OData entity count; represents the number of operations returned.
  * value `array`: List of available operations.
    * items [Operation](#operation)

### PolicyAssignmentSummary
* PolicyAssignmentSummary `object`: Policy assignment summary.
  * policyAssignmentId `string`: Policy assignment ID.
  * policyDefinitions `array`: Policy definitions summary.
    * items [PolicyDefinitionSummary](#policydefinitionsummary)
  * policySetDefinitionId `string`: Policy set definition ID, if the policy assignment is for a policy set.
  * results [SummaryResults](#summaryresults)

### PolicyDefinitionSummary
* PolicyDefinitionSummary `object`: Policy definition summary.
  * effect `string`: Policy effect, i.e. policy definition action.
  * policyDefinitionId `string`: Policy definition ID.
  * results [SummaryResults](#summaryresults)

### PolicyState
* PolicyState `object`: Policy state record.
  * @odata.context `string`: OData context string; used by OData clients to resolve type information based on metadata.
  * @odata.id `string`: OData entity ID; always set to null since policy state records do not have an entity ID.
  * effectiveParameters `string`: Effective parameters for the policy assignment.
  * isCompliant `boolean`: Flag which states whether the resource is compliant against the policy assignment it was evaluated against.
  * managementGroupIds `string`: Comma seperated list of management group IDs, which represent the hierarchy of the management groups the resource is under.
  * policyAssignmentId `string`: Policy assignment ID.
  * policyAssignmentName `string`: Policy assignment name.
  * policyAssignmentOwner `string`: Policy assignment owner.
  * policyAssignmentParameters `string`: Policy assignment parameters.
  * policyAssignmentScope `string`: Policy assignment scope.
  * policyDefinitionAction `string`: Policy definition action, i.e. effect.
  * policyDefinitionCategory `string`: Policy definition category.
  * policyDefinitionId `string`: Policy definition ID.
  * policyDefinitionName `string`: Policy definition name.
  * policyDefinitionReferenceId `string`: Reference ID for the policy definition inside the policy set, if the policy assignment is for a policy set.
  * policySetDefinitionCategory `string`: Policy set definition category, if the policy assignment is for a policy set.
  * policySetDefinitionId `string`: Policy set definition ID, if the policy assignment is for a policy set.
  * policySetDefinitionName `string`: Policy set definition name, if the policy assignment is for a policy set.
  * policySetDefinitionOwner `string`: Policy set definition owner, if the policy assignment is for a policy set.
  * policySetDefinitionParameters `string`: Policy set definition parameters, if the policy assignment is for a policy set.
  * resourceGroup `string`: Resource group name.
  * resourceId `string`: Resource ID.
  * resourceLocation `string`: Resource location.
  * resourceTags `string`: List of resource tags.
  * resourceType `string`: Resource type.
  * subscriptionId `string`: Subscription ID.
  * timestamp `string`: Timestamp for the policy state record.

### PolicyStatesQueryResults
* PolicyStatesQueryResults `object`: Query results.
  * @odata.context `string`: OData context string; used by OData clients to resolve type information based on metadata.
  * @odata.count `integer`: OData entity count; represents the number of policy state records returned.
  * value `array`: Query results.
    * items [PolicyState](#policystate)

### QueryFailure
* QueryFailure `object`: Error response.
  * error `object`: Error definition.
    * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
    * message `string`: Description of the error.

### SummarizeResults
* SummarizeResults `object`: Summarize action results.
  * @odata.context `string`: OData context string; used by OData clients to resolve type information based on metadata.
  * @odata.count `integer`: OData entity count; represents the number of summaries returned; always set to 1.
  * value `array`: Summarize action results.
    * items [Summary](#summary)

### Summary
* Summary `object`: Summary results.
  * @odata.context `string`: OData context string; used by OData clients to resolve type information based on metadata.
  * @odata.id `string`: OData entity ID; always set to null since summaries do not have an entity ID.
  * policyAssignments `array`: Policy assignments summary.
    * items [PolicyAssignmentSummary](#policyassignmentsummary)
  * results [SummaryResults](#summaryresults)

### SummaryResults
* SummaryResults `object`: Non-compliance summary on a particular summary level.
  * nonCompliantPolicies `integer`: Number of non-compliant policies.
  * nonCompliantResources `integer`: Number of non-compliant resources.
  * queryResultsUri `string`: HTTP POST URI for queryResults action on Microsoft.PolicyInsights to retrieve raw results for the non-compliance summary.


