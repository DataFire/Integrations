# @datafire/azure_policyinsights_policytrackedresources

Client library for PolicyTrackedResourcesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_policyinsights_policytrackedresources
```
```js
let azure_policyinsights_policytrackedresources = require('@datafire/azure_policyinsights_policytrackedresources').create({
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

### PolicyTrackedResources_ListQueryResultsForManagementGroup
Queries policy tracked resources under the management group.


```js
azure_policyinsights_policytrackedresources.PolicyTrackedResources_ListQueryResultsForManagementGroup({
  "managementGroupsNamespace": "",
  "managementGroupName": "",
  "policyTrackedResourcesResource": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupName **required** `string`: Management group name.
  * policyTrackedResourcesResource **required** `string` (values: default): The name of the virtual resource under PolicyTrackedResources resource type; only "default" is allowed.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PolicyTrackedResourcesQueryResults](#policytrackedresourcesqueryresults)

### PolicyTrackedResources_ListQueryResultsForSubscription
Queries policy tracked resources under the subscription.


```js
azure_policyinsights_policytrackedresources.PolicyTrackedResources_ListQueryResultsForSubscription({
  "policyTrackedResourcesResource": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyTrackedResourcesResource **required** `string` (values: default): The name of the virtual resource under PolicyTrackedResources resource type; only "default" is allowed.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PolicyTrackedResourcesQueryResults](#policytrackedresourcesqueryresults)

### PolicyTrackedResources_ListQueryResultsForResourceGroup
Queries policy tracked resources under the resource group.


```js
azure_policyinsights_policytrackedresources.PolicyTrackedResources_ListQueryResultsForResourceGroup({
  "resourceGroupName": "",
  "policyTrackedResourcesResource": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Resource group name.
  * policyTrackedResourcesResource **required** `string` (values: default): The name of the virtual resource under PolicyTrackedResources resource type; only "default" is allowed.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PolicyTrackedResourcesQueryResults](#policytrackedresourcesqueryresults)

### PolicyTrackedResources_ListQueryResultsForResource
Queries policy tracked resources under the resource.


```js
azure_policyinsights_policytrackedresources.PolicyTrackedResources_ListQueryResultsForResource({
  "resourceId": "",
  "policyTrackedResourcesResource": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: Resource ID.
  * policyTrackedResourcesResource **required** `string` (values: default): The name of the virtual resource under PolicyTrackedResources resource type; only "default" is allowed.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PolicyTrackedResourcesQueryResults](#policytrackedresourcesqueryresults)



## Definitions

### PolicyDetails
* PolicyDetails `object`: The policy details.
  * policyAssignmentDisplayName `string`: The display name of the policy assignment.
  * policyAssignmentId `string`: The ID of the policy assignment.
  * policyAssignmentScope `string`: The scope of the policy assignment.
  * policyDefinitionId `string`: The ID of the policy definition.
  * policyDefinitionReferenceId `string`: The policy definition reference ID within the policy set definition.
  * policySetDefinitionId `string`: The ID of the policy set definition.

### PolicyTrackedResource
* PolicyTrackedResource `object`: Policy tracked resource record.
  * createdBy [TrackedResourceModificationDetails](#trackedresourcemodificationdetails)
  * lastModifiedBy [TrackedResourceModificationDetails](#trackedresourcemodificationdetails)
  * lastUpdateUtc `string`: Timestamp of the last update to the tracked resource.
  * policyDetails [PolicyDetails](#policydetails)
  * trackedResourceId `string`: The ID of the policy tracked resource.

### PolicyTrackedResourcesQueryResults
* PolicyTrackedResourcesQueryResults `object`: Query results.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Query results.
    * items [PolicyTrackedResource](#policytrackedresource)

### QueryFailure
* QueryFailure `object`: Error response.
  * error `object`: Error definition.
    * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
    * message `string`: Description of the error.

### TrackedResourceModificationDetails
* TrackedResourceModificationDetails `object`: The details of the policy triggered deployment that created or modified the tracked resource.
  * deploymentId `string`: The ID of the deployment that created or modified the tracked resource.
  * deploymentTime `string`: Timestamp of the deployment that created or modified the tracked resource.
  * policyDetails [PolicyDetails](#policydetails)


