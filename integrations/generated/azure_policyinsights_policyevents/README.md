# @datafire/azure_policyinsights_policyevents

Client library for PolicyEventsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_policyinsights_policyevents
```
```js
let azure_policyinsights_policyevents = require('@datafire/azure_policyinsights_policyevents').create({
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



## Actions

### PolicyEvents_ListQueryResultsForManagementGroup
Queries policy events for the resources under the management group.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForManagementGroup({
  "policyEventsResource": "",
  "managementGroupsNamespace": "",
  "managementGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_ListQueryResultsForSubscription
Queries policy events for the resources under the subscription.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForSubscription({
  "policyEventsResource": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_ListQueryResultsForSubscriptionLevelPolicyAssignment
Queries policy events for the subscription level policy assignment.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForSubscriptionLevelPolicyAssignment({
  "policyEventsResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_ListQueryResultsForPolicyDefinition
Queries policy events for the subscription level policy definition.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForPolicyDefinition({
  "policyEventsResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policyDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_ListQueryResultsForPolicySetDefinition
Queries policy events for the subscription level policy set definition.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForPolicySetDefinition({
  "policyEventsResource": "",
  "subscriptionId": "",
  "authorizationNamespace": "",
  "policySetDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_ListQueryResultsForResourceGroup
Queries policy events for the resources under the resource group.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForResourceGroup({
  "policyEventsResource": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_ListQueryResultsForResourceGroupLevelPolicyAssignment
Queries policy events for the resource group level policy assignment.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForResourceGroupLevelPolicyAssignment({
  "policyEventsResource": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "authorizationNamespace": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_ListQueryResultsForResource
Queries policy events for the resource.


```js
azure_policyinsights_policyevents.PolicyEvents_ListQueryResultsForResource({
  "policyEventsResource": "",
  "resourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyEventsResource **required** `string` (values: default): The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
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
* output [PolicyEventsQueryResults](#policyeventsqueryresults)

### PolicyEvents_GetMetadata
Gets OData metadata XML document.


```js
azure_policyinsights_policyevents.PolicyEvents_GetMetadata({
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

### PolicyEvent
* PolicyEvent `object`: Policy event record.
  * @odata.context `string`: OData context string; used by OData clients to resolve type information based on metadata.
  * @odata.id `string`: OData entity ID; always set to null since policy event records do not have an entity ID.
  * effectiveParameters `string`: Effective parameters for the policy assignment.
  * isCompliant `boolean`: Flag which states whether the resource is compliant against the policy assignment it was evaluated against.
  * managementGroupIds `string`: Comma separated list of management group IDs, which represent the hierarchy of the management groups the resource is under.
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
  * principalOid `string`: Principal object ID for the user who initiated the resource operation that triggered the policy event.
  * resourceGroup `string`: Resource group name.
  * resourceId `string`: Resource ID.
  * resourceLocation `string`: Resource location.
  * resourceTags `string`: List of resource tags.
  * resourceType `string`: Resource type.
  * subscriptionId `string`: Subscription ID.
  * tenantId `string`: Tenant ID for the policy event record.
  * timestamp `string`: Timestamp for the policy event record.

### PolicyEventsQueryResults
* PolicyEventsQueryResults `object`: Query results.
  * @odata.context `string`: OData context string; used by OData clients to resolve type information based on metadata.
  * @odata.count `integer`: OData entity count; represents the number of policy event records returned.
  * value `array`: Query results.
    * items [PolicyEvent](#policyevent)

### QueryFailure
* QueryFailure `object`: Error response.
  * error `object`: Error definition.
    * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
    * message `string`: Description of the error.


