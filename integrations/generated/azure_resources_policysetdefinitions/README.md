# @datafire/azure_resources_policysetdefinitions

Client library for PolicyClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_policysetdefinitions
```
```js
let azure_resources_policysetdefinitions = require('@datafire/azure_resources_policysetdefinitions').create({
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

To manage and control access to your resources, you can define customized policies and assign them at a scope.

## Actions

### PolicySetDefinitions_ListBuiltIn
This operation retrieves a list of all the built-in policy set definitions.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_ListBuiltIn({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicySetDefinitionListResult](#policysetdefinitionlistresult)

### PolicySetDefinitions_GetBuiltIn
This operation retrieves the built-in policy set definition with the given name.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_GetBuiltIn({
  "policySetDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policySetDefinitionName **required** `string`: The name of the policy set definition to get.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicySetDefinition](#policysetdefinition)

### PolicySetDefinitions_ListByManagementGroup
This operation retrieves a list of all the a policy set definition in the given management group.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_ListByManagementGroup({
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
* output [PolicySetDefinitionListResult](#policysetdefinitionlistresult)

### PolicySetDefinitions_DeleteAtManagementGroup
This operation deletes the policy set definition in the given management group with the given name.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_DeleteAtManagementGroup({
  "policySetDefinitionName": "",
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * policySetDefinitionName **required** `string`: The name of the policy set definition to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
*Output schema unknown*

### PolicySetDefinitions_GetAtManagementGroup
This operation retrieves the policy set definition in the given management group with the given name.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_GetAtManagementGroup({
  "policySetDefinitionName": "",
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * policySetDefinitionName **required** `string`: The name of the policy set definition to get.
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
* output [PolicySetDefinition](#policysetdefinition)

### PolicySetDefinitions_CreateOrUpdateAtManagementGroup
This operation creates or updates a policy set definition in the given management group with the given name.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_CreateOrUpdateAtManagementGroup({
  "policySetDefinitionName": "",
  "parameters": null,
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * policySetDefinitionName **required** `string`: The name of the policy set definition to create.
  * parameters **required** [PolicySetDefinition](#policysetdefinition)
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
* output [PolicySetDefinition](#policysetdefinition)

### PolicySetDefinitions_List
This operation retrieves a list of all the policy set definitions in the given subscription.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicySetDefinitionListResult](#policysetdefinitionlistresult)

### PolicySetDefinitions_Delete
This operation deletes the policy set definition in the given subscription with the given name.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_Delete({
  "policySetDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policySetDefinitionName **required** `string`: The name of the policy set definition to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### PolicySetDefinitions_Get
This operation retrieves the policy set definition in the given subscription with the given name.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_Get({
  "policySetDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policySetDefinitionName **required** `string`: The name of the policy set definition to get.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicySetDefinition](#policysetdefinition)

### PolicySetDefinitions_CreateOrUpdate
This operation creates or updates a policy set definition in the given subscription with the given name.


```js
azure_resources_policysetdefinitions.PolicySetDefinitions_CreateOrUpdate({
  "policySetDefinitionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policySetDefinitionName **required** `string`: The name of the policy set definition to create.
  * parameters **required** [PolicySetDefinition](#policysetdefinition)
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicySetDefinition](#policysetdefinition)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error response indicates Azure Resource Manager is not able to process the incoming request. The reason is provided in the error message.
  * errorCode `string`: Error code.
  * errorMessage `string`: Error message indicating why the operation failed.
  * httpStatus `string`: Http status code.

### PolicyDefinitionReference
* PolicyDefinitionReference `object`: The policy definition reference.
  * parameters `object`: Required if a parameter is used in policy rule.
  * policyDefinitionId `string`: The ID of the policy definition or policy set definition.

### PolicySetDefinition
* PolicySetDefinition `object`: The policy set definition.
  * id `string`: The ID of the policy set definition.
  * name `string`: The name of the policy set definition.
  * properties [PolicySetDefinitionProperties](#policysetdefinitionproperties)
  * type `string`: The type of the resource (Microsoft.Authorization/policySetDefinitions).

### PolicySetDefinitionListResult
* PolicySetDefinitionListResult `object`: List of policy set definitions.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of policy set definitions.
    * items [PolicySetDefinition](#policysetdefinition)

### PolicySetDefinitionProperties
* PolicySetDefinitionProperties `object`: The policy set definition properties.
  * description `string`: The policy set definition description.
  * displayName `string`: The display name of the policy set definition.
  * metadata `object`: The policy set definition metadata.
  * parameters `object`: The policy set definition parameters that can be used in policy definition references.
  * policyDefinitions **required** `array`: An array of policy definition references.
    * items [PolicyDefinitionReference](#policydefinitionreference)
  * policyType `string` (values: NotSpecified, BuiltIn, Custom): The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.


