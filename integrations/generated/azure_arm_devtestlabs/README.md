# @datafire/azure_arm_devtestlabs
Azure DevTest Labs REST API.

## Operation: Lab_ListBySubscription
List labs in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[Lab]"
}
```
## Operation: Lab_ListByResourceGroup
List labs in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[Lab]"
}
```
## Operation: ArtifactSource_List
List artifact sources in a given lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[ArtifactSource]"
}
```
## Operation: Artifact_List
List artifacts in a given artifact source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "artifactSourceName": {
      "type": "string",
      "description": "The name of the artifact source."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "artifactSourceName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[Artifact]"
}
```
## Operation: Artifact_GetResource
Get artifact.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "artifactSourceName": {
      "type": "string",
      "description": "The name of the artifact source."
    },
    "name": {
      "type": "string",
      "description": "The name of the artifact."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "artifactSourceName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Artifact"
}
```
## Operation: Artifact_GenerateArmTemplate
Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "artifactSourceName": {
      "type": "string",
      "description": "The name of the artifact source."
    },
    "name": {
      "type": "string",
      "description": "The name of the artifact."
    },
    "generateArmTemplateRequest": {
      "$ref": "#/definitions/GenerateArmTemplateRequest"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "artifactSourceName",
    "name",
    "generateArmTemplateRequest",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArmTemplateInfo"
}
```
## Operation: ArtifactSource_DeleteResource
Delete artifact source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the artifact source."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ArtifactSource_GetResource
Get artifact source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the artifact source."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArtifactSource"
}
```
## Operation: ArtifactSource_PatchResource
Modify properties of artifact sources.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the artifact source."
    },
    "artifactSource": {
      "$ref": "#/definitions/ArtifactSource"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "artifactSource",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArtifactSource"
}
```
## Operation: ArtifactSource_CreateOrUpdateResource
Create or replace an existing artifact source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the artifact source."
    },
    "artifactSource": {
      "$ref": "#/definitions/ArtifactSource"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "artifactSource",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArtifactSource"
}
```
## Operation: Cost_GetResource
Get cost.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the cost."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Cost"
}
```
## Operation: CustomImage_List
List custom images in a given lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[CustomImage]"
}
```
## Operation: CustomImage_DeleteResource
Delete custom image. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the custom image."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CustomImage_GetResource
Get custom image.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the custom image."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomImage"
}
```
## Operation: CustomImage_CreateOrUpdateResource
Create or replace an existing custom image. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the custom image."
    },
    "customImage": {
      "$ref": "#/definitions/CustomImage"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "customImage",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomImage"
}
```
## Operation: Formula_List
List formulas in a given lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[Formula]"
}
```
## Operation: Formula_DeleteResource
Delete formula.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the formula."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Formula_GetResource
Get formula.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the formula."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Formula"
}
```
## Operation: Formula_CreateOrUpdateResource
Create or replace an existing Formula. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the formula."
    },
    "formula": {
      "$ref": "#/definitions/Formula"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "formula",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Formula"
}
```
## Operation: GalleryImage_List
List gallery images in a given lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[GalleryImage]"
}
```
## Operation: PolicySet_EvaluatePolicies
Evaluates Lab Policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the policy set."
    },
    "evaluatePoliciesRequest": {
      "$ref": "#/definitions/EvaluatePoliciesRequest"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "evaluatePoliciesRequest",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EvaluatePoliciesResponse"
}
```
## Operation: Policy_List
List policies in a given policy set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "policySetName": {
      "type": "string",
      "description": "The name of the policy set."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "policySetName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[Policy]"
}
```
## Operation: Policy_DeleteResource
Delete policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "policySetName": {
      "type": "string",
      "description": "The name of the policy set."
    },
    "name": {
      "type": "string",
      "description": "The name of the policy."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "policySetName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Policy_GetResource
Get policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "policySetName": {
      "type": "string",
      "description": "The name of the policy set."
    },
    "name": {
      "type": "string",
      "description": "The name of the policy."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "policySetName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Policy"
}
```
## Operation: Policy_PatchResource
Modify properties of policies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "policySetName": {
      "type": "string",
      "description": "The name of the policy set."
    },
    "name": {
      "type": "string",
      "description": "The name of the policy."
    },
    "policy": {
      "$ref": "#/definitions/Policy"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "policySetName",
    "name",
    "policy",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Policy"
}
```
## Operation: Policy_CreateOrUpdateResource
Create or replace an existing policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "policySetName": {
      "type": "string",
      "description": "The name of the policy set."
    },
    "name": {
      "type": "string",
      "description": "The name of the policy."
    },
    "policy": {
      "$ref": "#/definitions/Policy"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "policySetName",
    "name",
    "policy",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Policy"
}
```
## Operation: Schedule_List
List schedules in a given lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[Schedule]"
}
```
## Operation: Schedule_DeleteResource
Delete schedule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the schedule."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Schedule_GetResource
Get schedule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the schedule."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Schedule"
}
```
## Operation: Schedule_PatchResource
Modify properties of schedules.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the schedule."
    },
    "schedule": {
      "$ref": "#/definitions/Schedule"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "schedule",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Schedule"
}
```
## Operation: Schedule_CreateOrUpdateResource
Create or replace an existing schedule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the schedule."
    },
    "schedule": {
      "$ref": "#/definitions/Schedule"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "schedule",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Schedule"
}
```
## Operation: Schedule_Execute
Execute a schedule. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the schedule."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualMachine_List
List virtual machines in a given lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[LabVirtualMachine]"
}
```
## Operation: VirtualMachine_DeleteResource
Delete virtual machine. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual Machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualMachine_GetResource
Get virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual Machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LabVirtualMachine"
}
```
## Operation: VirtualMachine_PatchResource
Modify properties of virtual machines.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual Machine."
    },
    "labVirtualMachine": {
      "$ref": "#/definitions/LabVirtualMachine"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "labVirtualMachine",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LabVirtualMachine"
}
```
## Operation: VirtualMachine_CreateOrUpdateResource
Create or replace an existing Virtual Machine. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual Machine."
    },
    "labVirtualMachine": {
      "$ref": "#/definitions/LabVirtualMachine"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "labVirtualMachine",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LabVirtualMachine"
}
```
## Operation: VirtualMachine_ApplyArtifacts
Apply artifacts to Lab VM. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual Machine."
    },
    "applyArtifactsRequest": {
      "$ref": "#/definitions/ApplyArtifactsRequest"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "applyArtifactsRequest",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualMachine_Start
Start a Lab VM. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual Machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualMachine_Stop
Stop a Lab VM. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual Machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualNetwork_List
List virtual networks in a given lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of resources to return from the operation."
    },
    "$orderBy": {
      "type": "string",
      "description": "The ordering expression for the results, using OData notation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[VirtualNetwork]"
}
```
## Operation: VirtualNetwork_DeleteResource
Delete virtual network. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualNetwork_GetResource
Get virtual network.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetwork"
}
```
## Operation: VirtualNetwork_PatchResource
Modify properties of virtual networks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "virtualNetwork": {
      "$ref": "#/definitions/VirtualNetwork"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "virtualNetwork",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetwork"
}
```
## Operation: VirtualNetwork_CreateOrUpdateResource
Create or replace an existing virtual network. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "labName": {
      "type": "string",
      "description": "The name of the lab."
    },
    "name": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "virtualNetwork": {
      "$ref": "#/definitions/VirtualNetwork"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "labName",
    "name",
    "virtualNetwork",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetwork"
}
```
## Operation: Lab_DeleteResource
Delete lab. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the lab."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Lab_GetResource
Get lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the lab."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Lab"
}
```
## Operation: Lab_PatchResource
Modify properties of labs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the lab."
    },
    "lab": {
      "$ref": "#/definitions/Lab"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "lab",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Lab"
}
```
## Operation: Lab_CreateOrUpdateResource
Create or replace an existing Lab. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the lab."
    },
    "lab": {
      "$ref": "#/definitions/Lab"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "lab",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Lab"
}
```
## Operation: Lab_CreateEnvironment
Create virtual machines in a Lab. This operation can take a while to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the lab."
    },
    "labVirtualMachine": {
      "$ref": "#/definitions/LabVirtualMachine"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "labVirtualMachine",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Lab_GenerateUploadUri
Generate a URI for uploading custom disk images to a Lab.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the lab."
    },
    "generateUploadUriParameter": {
      "$ref": "#/definitions/GenerateUploadUriParameter"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "generateUploadUriParameter",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GenerateUploadUriResponse"
}
```
## Operation: Lab_ListVhds
List disk images available for custom image creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the lab."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseWithContinuation[LabVhd]"
}
```
