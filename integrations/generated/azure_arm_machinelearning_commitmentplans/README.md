# @datafire/azure_arm_machinelearning_commitmentplans
These APIs allow end users to operate on Azure Machine Learning Commitment Plans resources and their child Commitment Association resources. They support CRUD operations for commitment plans, get and list operations for commitment associations, moving commitment associations between commitment plans, and retrieving commitment plan usage history.

## Operation: CommitmentPlans_List
Retrieve all Azure ML commitment plans in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "$skipToken": {
      "type": "string",
      "description": "Continuation token for pagination."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
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
  "$ref": "#/definitions/CommitmentPlanListResult"
}
```
## Operation: CommitmentPlans_ListInResourceGroup
Retrieve all Azure ML commitment plans in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "$skipToken": {
      "type": "string",
      "description": "Continuation token for pagination."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
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
  "$ref": "#/definitions/CommitmentPlanListResult"
}
```
## Operation: CommitmentPlans_Remove
Remove an existing Azure ML commitment plan.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CommitmentPlans_Get
Retrieve an Azure ML commitment plan by its subscription, resource group and name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitmentPlan"
}
```
## Operation: CommitmentPlans_Patch
Patch an existing Azure ML commitment plan resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "patchPayload": {
      "$ref": "#/definitions/CommitmentPlanPatchPayload"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "patchPayload",
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitmentPlan"
}
```
## Operation: CommitmentPlans_CreateOrUpdate
Create a new Azure ML commitment plan resource or updates an existing one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "createOrUpdatePayload": {
      "$ref": "#/definitions/CommitmentPlan"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "createOrUpdatePayload",
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitmentPlan"
}
```
## Operation: CommitmentAssociations_List
Get all commitment associations for a parent commitment plan.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "$skipToken": {
      "type": "string",
      "description": "Continuation token for pagination."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitmentAssociationListResult"
}
```
## Operation: CommitmentAssociations_Get
Get a commitment association.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "commitmentAssociationName": {
      "type": "string",
      "description": "The commitment association name."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "commitmentAssociationName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitmentAssociation"
}
```
## Operation: CommitmentAssociations_Move
Re-parent a commitment association from one commitment plan to another.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "commitmentAssociationName": {
      "type": "string",
      "description": "The commitment association name."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "movePayload": {
      "$ref": "#/definitions/MoveCommitmentAssociationRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "commitmentAssociationName",
    "api-version",
    "movePayload"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitmentAssociation"
}
```
## Operation: UsageHistory_List
Retrieve the usage history for an Azure ML commitment plan.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "commitmentPlanName": {
      "type": "string",
      "description": "The Azure ML commitment plan name."
    },
    "$skipToken": {
      "type": "string",
      "description": "Continuation token for pagination."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "commitmentPlanName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlanUsageHistoryListResult"
}
```
