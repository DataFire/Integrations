# @datafire/azure_arm_authorization
Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These operations enable you to manage role definitions and role assignments. A role definition describes the set of actions that can be performed on resources. A role assignment grants access to Azure Active Directory users.

## Operation: ProviderOperationsMetadata_List
Gets provider operations metadata for all resource providers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    },
    "$expand": {
      "type": "string",
      "description": "Specifies whether to expand the values."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProviderOperationsMetadataListResult"
}
```
## Operation: ProviderOperationsMetadata_Get
Gets provider operations metadata for the specified resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceProviderNamespace": {
      "type": "string",
      "description": "The namespace of the resource provider."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for the operation."
    },
    "$expand": {
      "type": "string",
      "description": "Specifies whether to expand the values."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceProviderNamespace",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProviderOperationsMetadata"
}
```
## Operation: ClassicAdministrators_List
Gets service administrator, account administrator, and co-administrators for the subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The ID of the target subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClassicAdministratorListResult"
}
```
## Operation: RoleAssignments_List
Gets all role assignments for the subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The ID of the target subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignmentListResult"
}
```
## Operation: RoleAssignments_ListForResourceGroup
Gets role assignments for a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The ID of the target subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignmentListResult"
}
```
## Operation: Permissions_ListForResourceGroup
Gets all permissions the caller has for a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group to get the permissions for. The name is case insensitive."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The ID of the target subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PermissionGetResult"
}
```
## Operation: Permissions_ListForResource
Gets all permissions the caller has for a resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group containing the resource. The name is case insensitive."
    },
    "resourceProviderNamespace": {
      "type": "string",
      "description": "The namespace of the resource provider."
    },
    "parentResourcePath": {
      "type": "string",
      "description": "The parent resource identity."
    },
    "resourceType": {
      "type": "string",
      "description": "The resource type of the resource."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the resource to get the permissions for."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The ID of the target subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "resourceProviderNamespace",
    "parentResourcePath",
    "resourceType",
    "resourceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PermissionGetResult"
}
```
## Operation: RoleAssignments_ListForResource
Gets role assignments for a resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "resourceProviderNamespace": {
      "type": "string",
      "description": "The namespace of the resource provider."
    },
    "parentResourcePath": {
      "type": "string",
      "description": "The parent resource identity."
    },
    "resourceType": {
      "type": "string",
      "description": "The resource type of the resource."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the resource to get role assignments for."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The ID of the target subscription."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "resourceProviderNamespace",
    "parentResourcePath",
    "resourceType",
    "resourceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignmentListResult"
}
```
## Operation: RoleAssignments_DeleteById
Deletes a role assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roleAssignmentId": {
      "type": "string",
      "description": "The ID of the role assignment to delete."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "roleAssignmentId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignment"
}
```
## Operation: RoleAssignments_GetById
Gets a role assignment by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roleAssignmentId": {
      "type": "string",
      "description": "The ID of the role assignment to get."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "roleAssignmentId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignment"
}
```
## Operation: RoleAssignments_CreateById
Creates a role assignment by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roleAssignmentId": {
      "type": "string",
      "description": "The ID of the role assignment to create."
    },
    "parameters": {
      "$ref": "#/definitions/RoleAssignmentCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "roleAssignmentId",
    "parameters",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignment"
}
```
## Operation: RoleDefinitions_GetById
Gets a role definition by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roleDefinitionId": {
      "type": "string",
      "description": "The fully qualified role definition ID to get."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "roleDefinitionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleDefinition"
}
```
## Operation: RoleAssignments_ListForScope
Gets role assignments for a scope.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role assignments."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignmentListResult"
}
```
## Operation: RoleAssignments_Delete
Deletes a role assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role assignment to delete."
    },
    "roleAssignmentName": {
      "type": "string",
      "description": "The name of the role assignment to delete."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "roleAssignmentName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignment"
}
```
## Operation: RoleAssignments_Get
Get the specified role assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role assignment."
    },
    "roleAssignmentName": {
      "type": "string",
      "description": "The name of the role assignment to get."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "roleAssignmentName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignment"
}
```
## Operation: RoleAssignments_Create
Creates a role assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource."
    },
    "roleAssignmentName": {
      "type": "string",
      "description": "The name of the role assignment to create. It can be any valid GUID."
    },
    "parameters": {
      "$ref": "#/definitions/RoleAssignmentCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "roleAssignmentName",
    "parameters",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleAssignment"
}
```
## Operation: RoleDefinitions_List
Get all role definitions that are applicable at scope and above.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role definition."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleDefinitionListResult"
}
```
## Operation: RoleDefinitions_Delete
Deletes a role definition.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role definition."
    },
    "roleDefinitionId": {
      "type": "string",
      "description": "The ID of the role definition to delete."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "roleDefinitionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleDefinition"
}
```
## Operation: RoleDefinitions_Get
Get role definition by name (GUID).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role definition."
    },
    "roleDefinitionId": {
      "type": "string",
      "description": "The ID of the role definition."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "roleDefinitionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleDefinition"
}
```
## Operation: RoleDefinitions_CreateOrUpdate
Creates or updates a role definition.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the role definition."
    },
    "roleDefinitionId": {
      "type": "string",
      "description": "The ID of the role definition."
    },
    "roleDefinition": {
      "$ref": "#/definitions/RoleDefinition"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for this operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "roleDefinitionId",
    "roleDefinition",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleDefinition"
}
```
