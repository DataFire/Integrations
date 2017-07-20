# @datafire/azure_arm_iothub
Use this API to manage the IoT hubs in your Azure subscription.

## Operation: IotHubResource_ListBySubscription
Get all the IoT hubs in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
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
  "$ref": "#/definitions/IotHubDescriptionListResult"
}
```
## Operation: IotHubResource_CheckNameAvailability
Check if an IoT hub name is available.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "operationInputs": {
      "$ref": "#/definitions/OperationInputs"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "operationInputs"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IotHubNameAvailabilityInfo"
}
```
## Operation: IotHubResource_ListByResourceGroup
Get all the IoT hubs in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hubs."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IotHubDescriptionListResult"
}
```
## Operation: IotHubResource_Delete
Delete an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IotHubDescription"
}
```
## Operation: IotHubResource_Get
Get the non-security related metadata of an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IotHubDescription"
}
```
## Operation: IotHubResource_CreateOrUpdate
Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub to create or update."
    },
    "iotHubDescription": {
      "$ref": "#/definitions/IotHubDescription"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "iotHubDescription"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IotHubDescription"
}
```
## Operation: IotHubResource_GetKeysForKeyName
Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "keyName": {
      "type": "string",
      "description": "The name of the shared access policy."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "keyName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SharedAccessSignatureAuthorizationRule"
}
```
## Operation: IotHubResource_GetStats
Get the statistics from an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegistryStatistics"
}
```
## Operation: IotHubResource_ListEventHubConsumerGroups
Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "eventHubEndpointName": {
      "type": "string",
      "description": "The name of the Event Hub-compatible endpoint."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "eventHubEndpointName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventHubConsumerGroupsListResult"
}
```
## Operation: IotHubResource_DeleteEventHubConsumerGroup
Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "eventHubEndpointName": {
      "type": "string",
      "description": "The name of the Event Hub-compatible endpoint in the IoT hub."
    },
    "name": {
      "type": "string",
      "description": "The name of the consumer group to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "eventHubEndpointName",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: IotHubResource_GetEventHubConsumerGroup
Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "eventHubEndpointName": {
      "type": "string",
      "description": "The name of the Event Hub-compatible endpoint in the IoT hub."
    },
    "name": {
      "type": "string",
      "description": "The name of the consumer group to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "eventHubEndpointName",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventHubConsumerGroupInfo"
}
```
## Operation: IotHubResource_CreateEventHubConsumerGroup
Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "eventHubEndpointName": {
      "type": "string",
      "description": "The name of the Event Hub-compatible endpoint in the IoT hub."
    },
    "name": {
      "type": "string",
      "description": "The name of the consumer group to add."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "eventHubEndpointName",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventHubConsumerGroupInfo"
}
```
## Operation: IotHubResource_ExportDevices
Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "exportDevicesParameters": {
      "$ref": "#/definitions/ExportDevicesRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "exportDevicesParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobResponse"
}
```
## Operation: IotHubResource_ImportDevices
Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "importDevicesParameters": {
      "$ref": "#/definitions/ImportDevicesRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "importDevicesParameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobResponse"
}
```
## Operation: IotHubResource_ListJobs
Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobResponseListResult"
}
```
## Operation: IotHubResource_GetJob
Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    },
    "jobId": {
      "type": "string",
      "description": "The job identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobResponse"
}
```
## Operation: IotHubResource_ListKeys
Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SharedAccessSignatureAuthorizationRuleListResult"
}
```
## Operation: IotHubResource_GetQuotaMetrics
Get the quota metrics for an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IotHubQuotaMetricInfoListResult"
}
```
## Operation: IotHubResource_GetValidSkus
Get the list of valid SKUs for an IoT hub.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The version of the API."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The subscription identifier."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the IoT hub."
    },
    "resourceName": {
      "type": "string",
      "description": "The name of the IoT hub."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId",
    "resourceGroupName",
    "resourceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IotHubSkuDescriptionListResult"
}
```
