# @datafire/azure_blueprint_blueprintassignment

Client library for BlueprintClient

## Installation and Usage
```bash
npm install --save @datafire/azure_blueprint_blueprintassignment
```
```js
let azure_blueprint_blueprintassignment = require('@datafire/azure_blueprint_blueprintassignment').create({
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

Azure Blueprints Client provides access to blueprint definitions, assignments, and artifacts, and related blueprint operations.

## Actions

### Assignments_List
List blueprint assignments within a subscription.


```js
azure_blueprint_blueprintassignment.Assignments_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.

#### Output
* output [AssignmentList](#assignmentlist)

### Assignments_Delete
Delete a blueprint assignment.


```js
azure_blueprint_blueprintassignment.Assignments_Delete({
  "api-version": "",
  "scope": "",
  "assignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * assignmentName **required** `string`: Name of the blueprint assignment.

#### Output
* output [Assignment](#assignment)

### Assignments_Get
Get a blueprint assignment.


```js
azure_blueprint_blueprintassignment.Assignments_Get({
  "api-version": "",
  "scope": "",
  "assignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * assignmentName **required** `string`: Name of the blueprint assignment.

#### Output
* output [Assignment](#assignment)

### Assignments_CreateOrUpdate
Create or update a blueprint assignment.


```js
azure_blueprint_blueprintassignment.Assignments_CreateOrUpdate({
  "api-version": "",
  "scope": "",
  "assignmentName": "",
  "assignment": {
    "identity": {
      "type": ""
    },
    "properties": {
      "parameters": {},
      "resourceGroups": {}
    },
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * assignmentName **required** `string`: Name of the blueprint assignment.
  * assignment **required** [Assignment](#assignment)

#### Output
* output [Assignment](#assignment)

### Assignments_WhoIsBlueprint
Get Blueprints service SPN objectId


```js
azure_blueprint_blueprintassignment.Assignments_WhoIsBlueprint({
  "api-version": "",
  "scope": "",
  "assignmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * scope **required** `string`: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
  * assignmentName **required** `string`: Name of the blueprint assignment.

#### Output
* output [WhoIsBlueprintContract](#whoisblueprintcontract)



## Definitions

### Assignment
* Assignment `object`: Represents a blueprint assignment.
  * identity **required** [ManagedServiceIdentity](#managedserviceidentity)
  * properties **required** [AssignmentProperties](#assignmentproperties)
  * location **required** `string`: The location of this blueprint assignment.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### AssignmentList
* AssignmentList `object`: List of blueprint assignments
  * nextLink `string`: Link to the next page of results.
  * value `array`: List of blueprint assignments.
    * items [Assignment](#assignment)

### AssignmentLockSettings
* AssignmentLockSettings `object`: Defines how resources deployed by a blueprint assignment are locked.
  * excludedPrincipals `array`: List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted.
    * items `string`
  * mode `string` (values: None, AllResourcesReadOnly, AllResourcesDoNotDelete): Lock mode.

### AssignmentProperties
* AssignmentProperties `object`: Detailed properties for a blueprint assignment.
  * blueprintId `string`: ID of the published version of a blueprint definition.
  * locks [AssignmentLockSettings](#assignmentlocksettings)
  * parameters **required** [ParameterValueCollection](#parametervaluecollection)
  * provisioningState `string` (values: creating, validating, waiting, deploying, cancelling, locking, succeeded, failed, canceled, deleting): State of the blueprint assignment.
  * resourceGroups **required** [ResourceGroupValueCollection](#resourcegroupvaluecollection)
  * status [AssignmentStatus](#assignmentstatus)
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.

### AssignmentStatus
* AssignmentStatus `object`: The status of a blueprint assignment. This field is readonly.
  * managedResources `array`: List of resources that were created by the blueprint assignment.
    * items `string`
  * lastModified `string`: Last modified time of this blueprint definition.
  * timeCreated `string`: Creation time of this blueprint definition.

### AzureResourceBase
* AzureResourceBase `object`: Common properties for all Azure resources.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### BlueprintResourcePropertiesBase
* BlueprintResourcePropertiesBase `object`: Shared properties between all blueprint resources.
  * description `string`: Multi-line explain this resource.
  * displayName `string`: One-liner string explain this resource.

### BlueprintResourceStatusBase
* BlueprintResourceStatusBase `object`: Shared status properties between all blueprint resources.
  * lastModified `string`: Last modified time of this blueprint definition.
  * timeCreated `string`: Creation time of this blueprint definition.

### ManagedServiceIdentity
* ManagedServiceIdentity `object`: Managed identity generic object.
  * principalId `string`: Azure Active Directory principal ID associated with this Identity.
  * tenantId `string`: ID of the Azure Active Directory.
  * type **required** `string` (values: None, SystemAssigned, UserAssigned): Type of the managed identity.
  * userAssignedIdentities `object`: The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.

### ParameterValue
* ParameterValue `object`: Value for the specified parameter. Can be either 'value' or 'reference' but not both.
  * reference [SecretValueReference](#secretvaluereference)

### ParameterValueCollection
* ParameterValueCollection `object`: A dictionary for parameters and their corresponding values.

### ResourceGroupValue
* ResourceGroupValue `object`: Represents an Azure resource group.
  * location `string`: Location of the resource group.
  * name `string`: Name of the resource group.

### ResourceGroupValueCollection
* ResourceGroupValueCollection `object`: A dictionary which maps resource group placeholders to the resource groups which will be created.

### SecretValueReference
* SecretValueReference `object`: Reference to a Key Vault secret.
  * keyVault **required** [keyVaultReference](#keyvaultreference)
  * secretName **required** `string`: Name of the secret.
  * secretVersion `string`: The version of the secret to use. If left blank, the latest version of the secret is used.

### TrackedResource
* TrackedResource `object`: Common properties for all Azure tracked resources.
  * location **required** `string`: The location of this blueprint assignment.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### UserAssignedIdentity
* UserAssignedIdentity `object`: User-assigned managed identity.
  * clientId `string`: Client App Id associated with this identity.
  * principalId `string`: Azure Active Directory principal ID associated with this Identity.

### WhoIsBlueprintContract
* WhoIsBlueprintContract `object`: Response schema for querying the Azure Blueprints service principal in the tenant.
  * objectId `string`: AAD object Id of the Azure Blueprints service principal in the tenant.

### keyVaultReference
* keyVaultReference `object`: Specifies the link to a Key Vault.
  * id **required** `string`: Azure resource ID of the Key Vault.


