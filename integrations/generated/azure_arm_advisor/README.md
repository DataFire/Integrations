# @datafire/azure_arm_advisor
REST APIs for Azure Advisor

## Operation: Operations_List
Lists all the available Advisor REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
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
  "$ref": "#/definitions/OperationEntityListResult"
}
```
## Operation: Recommendations_Generate
Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
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
{}
```
## Operation: Recommendations_GetGenerateRecommendationsStatus
Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    },
    "operationId": {
      "type": "string",
      "format": "uuid",
      "description": "The operation ID, which can be found from the Location field in the generate recommendation response header."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "operationId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Recommendations_List
Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply to the recommendations."
    },
    "$top": {
      "type": "integer",
      "description": "The number of recommendations per page if a paged version of this API is being used."
    },
    "$skipToken": {
      "type": "string",
      "description": "The page-continuation token to use with a paged version of this API."
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
  "$ref": "#/definitions/ResourceRecommendationBaseListResult"
}
```
## Operation: Suppressions_List
Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
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
  "items": {
    "$ref": "#/definitions/SuppressionContract"
  },
  "type": "array"
}
```
## Operation: Recommendations_Get
Obtains details of a cached recommendation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies."
    },
    "recommendationId": {
      "type": "string",
      "description": "The recommendation ID."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceUri",
    "recommendationId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceRecommendationBase"
}
```
## Operation: Suppressions_Delete
Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies."
    },
    "recommendationId": {
      "type": "string",
      "description": "The recommendation ID."
    },
    "name": {
      "type": "string",
      "description": "The name of the suppression."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceUri",
    "recommendationId",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Suppressions_Get
Obtains the details of a suppression.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies."
    },
    "recommendationId": {
      "type": "string",
      "description": "The recommendation ID."
    },
    "name": {
      "type": "string",
      "description": "The name of the suppression."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceUri",
    "recommendationId",
    "name",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SuppressionContract"
}
```
## Operation: Suppressions_Create
Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of a recommendation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies."
    },
    "recommendationId": {
      "type": "string",
      "description": "The recommendation ID."
    },
    "name": {
      "type": "string",
      "description": "The name of the suppression."
    },
    "suppressionContract": {
      "$ref": "#/definitions/SuppressionContract"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceUri",
    "recommendationId",
    "name",
    "suppressionContract",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SuppressionContract"
}
```
