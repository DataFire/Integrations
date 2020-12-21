# @datafire/azure_policyinsights_remediations

Client library for RemediationsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_policyinsights_remediations
```
```js
let azure_policyinsights_remediations = require('@datafire/azure_policyinsights_remediations').create({
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

### Remediations_ListForManagementGroup
Gets all remediations for the management group.


```js
azure_policyinsights_remediations.Remediations_ListForManagementGroup({
  "managementGroupsNamespace": "",
  "managementGroupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupId **required** `string`: Management group ID.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationListResult](#remediationlistresult)

### Remediations_DeleteAtManagementGroup
Deletes an existing remediation at management group scope.


```js
azure_policyinsights_remediations.Remediations_DeleteAtManagementGroup({
  "managementGroupsNamespace": "",
  "managementGroupId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupId **required** `string`: Management group ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_GetAtManagementGroup
Gets an existing remediation at management group scope.


```js
azure_policyinsights_remediations.Remediations_GetAtManagementGroup({
  "managementGroupsNamespace": "",
  "managementGroupId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupId **required** `string`: Management group ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_CreateOrUpdateAtManagementGroup
Creates or updates a remediation at management group scope.


```js
azure_policyinsights_remediations.Remediations_CreateOrUpdateAtManagementGroup({
  "managementGroupsNamespace": "",
  "managementGroupId": "",
  "remediationName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupId **required** `string`: Management group ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [Remediation](#remediation)

#### Output
* output [Remediation](#remediation)

### Remediations_CancelAtManagementGroup
Cancels a remediation at management group scope.


```js
azure_policyinsights_remediations.Remediations_CancelAtManagementGroup({
  "managementGroupsNamespace": "",
  "managementGroupId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupId **required** `string`: Management group ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_ListDeploymentsAtManagementGroup
Gets all deployments for a remediation at management group scope.


```js
azure_policyinsights_remediations.Remediations_ListDeploymentsAtManagementGroup({
  "managementGroupsNamespace": "",
  "managementGroupId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * managementGroupsNamespace **required** `string` (values: Microsoft.Management): The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
  * managementGroupId **required** `string`: Management group ID.
  * remediationName **required** `string`: The name of the remediation.
  * $top `integer`: Maximum number of records to return.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationDeploymentsListResult](#remediationdeploymentslistresult)

### Remediations_ListForSubscription
Gets all remediations for the subscription.


```js
azure_policyinsights_remediations.Remediations_ListForSubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationListResult](#remediationlistresult)

### Remediations_DeleteAtSubscription
Deletes an existing remediation at subscription scope.


```js
azure_policyinsights_remediations.Remediations_DeleteAtSubscription({
  "subscriptionId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_GetAtSubscription
Gets an existing remediation at subscription scope.


```js
azure_policyinsights_remediations.Remediations_GetAtSubscription({
  "subscriptionId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_CreateOrUpdateAtSubscription
Creates or updates a remediation at subscription scope.


```js
azure_policyinsights_remediations.Remediations_CreateOrUpdateAtSubscription({
  "subscriptionId": "",
  "remediationName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [Remediation](#remediation)

#### Output
* output [Remediation](#remediation)

### Remediations_CancelAtSubscription
Cancels a remediation at subscription scope.


```js
azure_policyinsights_remediations.Remediations_CancelAtSubscription({
  "subscriptionId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_ListDeploymentsAtSubscription
Gets all deployments for a remediation at subscription scope.


```js
azure_policyinsights_remediations.Remediations_ListDeploymentsAtSubscription({
  "subscriptionId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * remediationName **required** `string`: The name of the remediation.
  * $top `integer`: Maximum number of records to return.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationDeploymentsListResult](#remediationdeploymentslistresult)

### Remediations_ListForResourceGroup
Gets all remediations for the subscription.


```js
azure_policyinsights_remediations.Remediations_ListForResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationListResult](#remediationlistresult)

### Remediations_DeleteAtResourceGroup
Deletes an existing remediation at resource group scope.


```js
azure_policyinsights_remediations.Remediations_DeleteAtResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_GetAtResourceGroup
Gets an existing remediation at resource group scope.


```js
azure_policyinsights_remediations.Remediations_GetAtResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_CreateOrUpdateAtResourceGroup
Creates or updates a remediation at resource group scope.


```js
azure_policyinsights_remediations.Remediations_CreateOrUpdateAtResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "remediationName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [Remediation](#remediation)

#### Output
* output [Remediation](#remediation)

### Remediations_CancelAtResourceGroup
Cancels a remediation at resource group scope.


```js
azure_policyinsights_remediations.Remediations_CancelAtResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_ListDeploymentsAtResourceGroup
Gets all deployments for a remediation at resource group scope.


```js
azure_policyinsights_remediations.Remediations_ListDeploymentsAtResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: Resource group name.
  * remediationName **required** `string`: The name of the remediation.
  * $top `integer`: Maximum number of records to return.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationDeploymentsListResult](#remediationdeploymentslistresult)

### Remediations_ListForResource
Gets all remediations for a resource.


```js
azure_policyinsights_remediations.Remediations_ListForResource({
  "resourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: Resource ID.
  * $top `integer`: Maximum number of records to return.
  * $filter `string`: OData filter expression.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationListResult](#remediationlistresult)

### Remediations_DeleteAtResource
Deletes an existing remediation at individual resource scope.


```js
azure_policyinsights_remediations.Remediations_DeleteAtResource({
  "resourceId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: Resource ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_GetAtResource
Gets an existing remediation at resource scope.


```js
azure_policyinsights_remediations.Remediations_GetAtResource({
  "resourceId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: Resource ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_CreateOrUpdateAtResource
Creates or updates a remediation at resource scope.


```js
azure_policyinsights_remediations.Remediations_CreateOrUpdateAtResource({
  "resourceId": "",
  "remediationName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: Resource ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [Remediation](#remediation)

#### Output
* output [Remediation](#remediation)

### Remediations_CancelAtResource
Cancel a remediation at resource scope.


```js
azure_policyinsights_remediations.Remediations_CancelAtResource({
  "resourceId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: Resource ID.
  * remediationName **required** `string`: The name of the remediation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Remediation](#remediation)

### Remediations_ListDeploymentsAtResource
Gets all deployments for a remediation at resource scope.


```js
azure_policyinsights_remediations.Remediations_ListDeploymentsAtResource({
  "resourceId": "",
  "remediationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: Resource ID.
  * remediationName **required** `string`: The name of the remediation.
  * $top `integer`: Maximum number of records to return.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RemediationDeploymentsListResult](#remediationdeploymentslistresult)



## Definitions

### ErrorDefinition
* ErrorDefinition `object`: Error definition.
  * additionalInfo `array`: Additional scenario specific error details.
    * items [TypedErrorInfo](#typederrorinfo)
  * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
  * details `array`: Internal error details.
    * items [ErrorDefinition](#errordefinition)
  * message `string`: Description of the error.
  * target `string`: The target of the error.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error [ErrorDefinition](#errordefinition)

### Remediation
* Remediation `object`: The remediation definition.
  * id `string`: The ID of the remediation.
  * name `string`: The name of the remediation.
  * properties [RemediationProperties](#remediationproperties)
  * type `string`: The type of the remediation.

### RemediationDeployment
* RemediationDeployment `object`: Details of a single deployment created by the remediation.
  * createdOn `string`: The time at which the remediation was created.
  * deploymentId `string`: Resource ID of the template deployment that will remediate the resource.
  * error [ErrorDefinition](#errordefinition)
  * lastUpdatedOn `string`: The time at which the remediation deployment was last updated.
  * remediatedResourceId `string`: Resource ID of the resource that is being remediated by the deployment.
  * resourceLocation `string`: Location of the resource that is being remediated.
  * status `string`: Status of the remediation deployment.

### RemediationDeploymentSummary
* RemediationDeploymentSummary `object`: The deployment status summary for all deployments created by the remediation.
  * failedDeployments `integer`: The number of deployments required by the remediation that have failed.
  * successfulDeployments `integer`: The number of deployments required by the remediation that have succeeded.
  * totalDeployments `integer`: The number of deployments required by the remediation.

### RemediationDeploymentsListResult
* RemediationDeploymentsListResult `object`: List of deployments for a remediation.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Array of deployments for the remediation.
    * items [RemediationDeployment](#remediationdeployment)

### RemediationFilters
* RemediationFilters `object`: The filters that will be applied to determine which resources to remediate.
  * locations `array`: The resource locations that will be remediated.
    * items `string`

### RemediationListResult
* RemediationListResult `object`: List of remediations.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Array of remediation definitions.
    * items [Remediation](#remediation)

### RemediationProperties
* RemediationProperties `object`: The remediation properties.
  * createdOn `string`: The time at which the remediation was created.
  * deploymentStatus [RemediationDeploymentSummary](#remediationdeploymentsummary)
  * filters [RemediationFilters](#remediationfilters)
  * lastUpdatedOn `string`: The time at which the remediation was last updated.
  * policyAssignmentId `string`: The resource ID of the policy assignment that should be remediated.
  * policyDefinitionReferenceId `string`: The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
  * provisioningState `string`: The status of the remediation.
  * resourceDiscoveryMode `string` (values: ExistingNonCompliant, ReEvaluateCompliance): The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.

### TypedErrorInfo
* TypedErrorInfo `object`: Scenario specific error details.
  * type `string`: The type of included error details.


