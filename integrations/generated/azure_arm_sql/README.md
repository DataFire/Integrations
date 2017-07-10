# @datafire/azure_arm_sql
Provides create, read, update and delete functionality for Azure SQL Database resources including servers, databases, elastic pools, recommendations, operations, and usage metrics.

## Operation: Databases_ListRestorePoints
Returns a list of database restore points.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The API version to use for the request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription ID that identifies an Azure subscription."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "serverName": {
      "type": "string",
      "description": "The name of the server."
    },
    "databaseName": {
      "type": "string",
      "description": "The name of the database from which to retrieve available restore points."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "serverName",
    "databaseName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestorePointListResult"
}
```
