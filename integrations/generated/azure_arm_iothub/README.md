# @datafire/azure_arm_iothub

Client library for iotHubClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_iothub
```

```js
let datafire = require('datafire');
let azure_arm_iothub = require('@datafire/azure_arm_iothub').actions;
let context = new datafire.Context();

azure_arm_iothub.IotHubResource_ListBySubscription({}, context).then(data => {
  console.log(data);
})
```

## Description
Use this API to manage the IoT hubs in your Azure subscription.

## Actions
### IotHubResource_ListBySubscription
Get all the IoT hubs in a subscription.


```js
azure_arm_iothub.IotHubResource_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.

### IotHubResource_CheckNameAvailability
Check if an IoT hub name is available.


```js
azure_arm_iothub.IotHubResource_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "operationInputs": {
    "Name": ""
  }
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* operationInputs (object) **required** - Input values.

### IotHubResource_ListByResourceGroup
Get all the IoT hubs in a resource group.


```js
azure_arm_iothub.IotHubResource_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hubs.

### IotHubResource_Delete
Delete an IoT hub.


```js
azure_arm_iothub.IotHubResource_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub to delete.

### IotHubResource_Get
Get the non-security related metadata of an IoT hub.


```js
azure_arm_iothub.IotHubResource_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.

### IotHubResource_CreateOrUpdate
Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub.


```js
azure_arm_iothub.IotHubResource_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "iotHubDescription": {
    "subscriptionid": "",
    "resourcegroup": "",
    "sku": {
      "name": "",
      "capacity": 0
    }
  }
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub to create or update.
* iotHubDescription (object) **required** - The description of the IoT hub.

### IotHubResource_GetKeysForKeyName
Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.


```js
azure_arm_iothub.IotHubResource_GetKeysForKeyName({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "keyName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* keyName (string) **required** - The name of the shared access policy.

### IotHubResource_GetStats
Get the statistics from an IoT hub.


```js
azure_arm_iothub.IotHubResource_GetStats({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.

### IotHubResource_ListEventHubConsumerGroups
Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.


```js
azure_arm_iothub.IotHubResource_ListEventHubConsumerGroups({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "eventHubEndpointName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* eventHubEndpointName (string) **required** - The name of the Event Hub-compatible endpoint.

### IotHubResource_DeleteEventHubConsumerGroup
Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.


```js
azure_arm_iothub.IotHubResource_DeleteEventHubConsumerGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "eventHubEndpointName": "",
  "name": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* eventHubEndpointName (string) **required** - The name of the Event Hub-compatible endpoint in the IoT hub.
* name (string) **required** - The name of the consumer group to delete.

### IotHubResource_GetEventHubConsumerGroup
Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.


```js
azure_arm_iothub.IotHubResource_GetEventHubConsumerGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "eventHubEndpointName": "",
  "name": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* eventHubEndpointName (string) **required** - The name of the Event Hub-compatible endpoint in the IoT hub.
* name (string) **required** - The name of the consumer group to retrieve.

### IotHubResource_CreateEventHubConsumerGroup
Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.


```js
azure_arm_iothub.IotHubResource_CreateEventHubConsumerGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "eventHubEndpointName": "",
  "name": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* eventHubEndpointName (string) **required** - The name of the Event Hub-compatible endpoint in the IoT hub.
* name (string) **required** - The name of the consumer group to add.

### IotHubResource_ExportDevices
Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.


```js
azure_arm_iothub.IotHubResource_ExportDevices({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "exportDevicesParameters": {
    "ExportBlobContainerUri": "",
    "ExcludeKeys": true
  }
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* exportDevicesParameters (object) **required** - Use to provide parameters when requesting an export of all devices in the IoT hub.

### IotHubResource_ImportDevices
Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.


```js
azure_arm_iothub.IotHubResource_ImportDevices({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "importDevicesParameters": {
    "InputBlobContainerUri": "",
    "OutputBlobContainerUri": ""
  }
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* importDevicesParameters (object) **required** - Use to provide parameters when requesting an import of all devices in the hub.

### IotHubResource_ListJobs
Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.


```js
azure_arm_iothub.IotHubResource_ListJobs({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.

### IotHubResource_GetJob
Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.


```js
azure_arm_iothub.IotHubResource_GetJob({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "jobId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.
* jobId (string) **required** - The job identifier.

### IotHubResource_ListKeys
Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.


```js
azure_arm_iothub.IotHubResource_ListKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.

### IotHubResource_GetQuotaMetrics
Get the quota metrics for an IoT hub.


```js
azure_arm_iothub.IotHubResource_GetQuotaMetrics({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.

### IotHubResource_GetValidSkus
Get the list of valid SKUs for an IoT hub.


```js
azure_arm_iothub.IotHubResource_GetValidSkus({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API.
* subscriptionId (string) **required** - The subscription identifier.
* resourceGroupName (string) **required** - The name of the resource group that contains the IoT hub.
* resourceName (string) **required** - The name of the IoT hub.

