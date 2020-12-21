# @datafire/azure_resources_policydefinitions

Client library for PolicyClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_policydefinitions
```
```js
let azure_resources_policydefinitions = require('@datafire/azure_resources_policydefinitions').create({
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

### PolicyDefinitions_ListBuiltIn
This operation retrieves a list of all the built-in policy definitions.


```js
azure_resources_policydefinitions.PolicyDefinitions_ListBuiltIn({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyDefinitionListResult](#policydefinitionlistresult)

### PolicyDefinitions_GetBuiltIn
This operation retrieves the built-in policy definition with the given name.


```js
azure_resources_policydefinitions.PolicyDefinitions_GetBuiltIn({
  "policyDefinitionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the built-in policy definition to get.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyDefinition](#policydefinition)

### PolicyDefinitions_ListByManagementGroup
This operation retrieves a list of all the policy definitions in a given management group.


```js
azure_resources_policydefinitions.PolicyDefinitions_ListByManagementGroup({
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
* output [PolicyDefinitionListResult](#policydefinitionlistresult)

### PolicyDefinitions_DeleteAtManagementGroup
This operation deletes the policy definition in the given management group with the given name.


```js
azure_resources_policydefinitions.PolicyDefinitions_DeleteAtManagementGroup({
  "policyDefinitionName": "",
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
*Output schema unknown*

### PolicyDefinitions_GetAtManagementGroup
This operation retrieves the policy definition in the given management group with the given name.


```js
azure_resources_policydefinitions.PolicyDefinitions_GetAtManagementGroup({
  "policyDefinitionName": "",
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to get.
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
* output [PolicyDefinition](#policydefinition)

### PolicyDefinitions_CreateOrUpdateAtManagementGroup
This operation creates or updates a policy definition in the given management group with the given name.


```js
azure_resources_policydefinitions.PolicyDefinitions_CreateOrUpdateAtManagementGroup({
  "policyDefinitionName": "",
  "parameters": null,
  "api-version": "",
  "managementGroupId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to create.
  * parameters **required** [PolicyDefinition](#policydefinition)
  * api-version **required** `string`: The API version to use for the operation.
  * managementGroupId **required** `string`: The ID of the management group.

#### Output
* output [PolicyDefinition](#policydefinition)

### PolicyDefinitions_List
This operation retrieves a list of all the policy definitions in a given subscription.


```js
azure_resources_policydefinitions.PolicyDefinitions_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyDefinitionListResult](#policydefinitionlistresult)

### PolicyDefinitions_Delete
This operation deletes the policy definition in the given subscription with the given name.


```js
azure_resources_policydefinitions.PolicyDefinitions_Delete({
  "policyDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### PolicyDefinitions_Get
This operation retrieves the policy definition in the given subscription with the given name.


```js
azure_resources_policydefinitions.PolicyDefinitions_Get({
  "policyDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to get.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyDefinition](#policydefinition)

### PolicyDefinitions_CreateOrUpdate
This operation creates or updates a policy definition in the given subscription with the given name.


```js
azure_resources_policydefinitions.PolicyDefinitions_CreateOrUpdate({
  "policyDefinitionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to create.
  * parameters **required** [PolicyDefinition](#policydefinition)
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyDefinition](#policydefinition)



## Definitions

### PolicyDefinition
* PolicyDefinition `object`: The policy definition.
  * id `string`: The ID of the policy definition.
  * name `string`: The name of the policy definition.
  * properties [PolicyDefinitionProperties](#policydefinitionproperties)
  * type `string`: The type of the resource (Microsoft.Authorization/policyDefinitions).

### PolicyDefinitionListResult
* PolicyDefinitionListResult `object`: List of policy definitions.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of policy definitions.
    * items [PolicyDefinition](#policydefinition)

### PolicyDefinitionProperties
* PolicyDefinitionProperties `object`: The policy definition properties.
  * description `string`: The policy definition description.
  * displayName `string`: The display name of the policy definition.
  * metadata `object`: The policy definition metadata.
  * mode `string`: The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
  * parameters `object`: Required if a parameter is used in policy rule.
  * policyRule `object`: The policy rule.
  * policyType `string` (values: NotSpecified, BuiltIn, Custom): The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.


