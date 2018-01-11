# @datafire/azure_arm_iothub

Client library for iotHubClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_iothub
```
```js
let azure_arm_iothub = require('@datafire/azure_arm_iothub').create();

azure_arm_iothub.IotHubResource_ListBySubscription({}).then(data => {
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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.

#### Output
* output [IotHubDescriptionListResult](#iothubdescriptionlistresult)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * operationInputs **required** [OperationInputs](#operationinputs)

#### Output
* output [IotHubNameAvailabilityInfo](#iothubnameavailabilityinfo)

### IotHubResource_ListByResourceGroup
Get all the IoT hubs in a resource group.


```js
azure_arm_iothub.IotHubResource_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hubs.

#### Output
* output [IotHubDescriptionListResult](#iothubdescriptionlistresult)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub to delete.

#### Output
* output [IotHubDescription](#iothubdescription)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.

#### Output
* output [IotHubDescription](#iothubdescription)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub to create or update.
  * iotHubDescription **required** [IotHubDescription](#iothubdescription)

#### Output
* output [IotHubDescription](#iothubdescription)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * keyName **required** `string`: The name of the shared access policy.

#### Output
* output [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.

#### Output
* output [RegistryStatistics](#registrystatistics)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * eventHubEndpointName **required** `string`: The name of the Event Hub-compatible endpoint.

#### Output
* output [EventHubConsumerGroupsListResult](#eventhubconsumergroupslistresult)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * eventHubEndpointName **required** `string`: The name of the Event Hub-compatible endpoint in the IoT hub.
  * name **required** `string`: The name of the consumer group to delete.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * eventHubEndpointName **required** `string`: The name of the Event Hub-compatible endpoint in the IoT hub.
  * name **required** `string`: The name of the consumer group to retrieve.

#### Output
* output [EventHubConsumerGroupInfo](#eventhubconsumergroupinfo)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * eventHubEndpointName **required** `string`: The name of the Event Hub-compatible endpoint in the IoT hub.
  * name **required** `string`: The name of the consumer group to add.

#### Output
* output [EventHubConsumerGroupInfo](#eventhubconsumergroupinfo)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * exportDevicesParameters **required** [ExportDevicesRequest](#exportdevicesrequest)

#### Output
* output [JobResponse](#jobresponse)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * importDevicesParameters **required** [ImportDevicesRequest](#importdevicesrequest)

#### Output
* output [JobResponse](#jobresponse)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.

#### Output
* output [JobResponseListResult](#jobresponselistresult)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * jobId **required** `string`: The job identifier.

#### Output
* output [JobResponse](#jobresponse)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.

#### Output
* output [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.

#### Output
* output [IotHubQuotaMetricInfoListResult](#iothubquotametricinfolistresult)

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

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.

#### Output
* output [IotHubSkuDescriptionListResult](#iothubskudescriptionlistresult)



## Definitions

### CloudToDeviceProperties
* CloudToDeviceProperties `object`: The IoT hub cloud-to-device messaging properties.
  * defaultTtlAsIso8601 `string`: The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
  * feedback [FeedbackProperties](#feedbackproperties)
  * maxDeliveryCount `integer`: The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

### ErrorDetails
* ErrorDetails `object`: Error details.
  * Code `string`: The error code.
  * Details `string`: The error details.
  * HttpStatusCode `string`: The HTTP status code.
  * Message `string`: The error message.

### EventHubConsumerGroupInfo
* EventHubConsumerGroupInfo `object`: The properties of the EventHubConsumerGroupInfo object.
  * id `string`: The Event Hub-compatible consumer group identifier.
  * name `string`: The Event Hub-compatible consumer group name.
  * tags `object`: The tags.

### EventHubConsumerGroupsListResult
* EventHubConsumerGroupsListResult `object`: The JSON-serialized array of Event Hub-compatible consumer group names with a next link.
  * nextLink `string`: The next link.
  * value `array`: The array of Event Hub-compatible consumer group names.
    * items `string`

### EventHubProperties
* EventHubProperties `object`: The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub.
  * endpoint `string`: The Event Hub-compatible endpoint.
  * partitionCount `integer`: The number of paritions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages.
  * partitionIds `array`: The partition ids in the Event Hub-compatible endpoint.
    * items `string`
  * path `string`: The Event Hub-compatible name.
  * retentionTimeInDays `integer`: The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages

### ExportDevicesRequest
* ExportDevicesRequest `object`: Use to provide parameters when requesting an export of all devices in the IoT hub.
  * ExcludeKeys **required** `boolean`: The value indicating whether keys should be excluded during export.
  * ExportBlobContainerUri **required** `string`: The export blob container URI.

### FeedbackProperties
* FeedbackProperties `object`: The properties of the feedback queue for cloud-to-device messages.
  * lockDurationAsIso8601 `string`: The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
  * maxDeliveryCount `integer`: The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
  * ttlAsIso8601 `string`: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

### ImportDevicesRequest
* ImportDevicesRequest `object`: Use to provide parameters when requesting an import of all devices in the hub.
  * InputBlobContainerUri **required** `string`: The input blob container URI.
  * OutputBlobContainerUri **required** `string`: The output blob container URI.

### IotHubCapacity
* IotHubCapacity `object`: IoT Hub capacity information.
  * default `integer`: The default number of units.
  * maximum `integer`: The maximum number of units.
  * minimum `integer`: The minimum number of units.
  * scaleType `string` (values: Automatic, Manual, None): The type of the scaling enabled.

### IotHubDescription
* IotHubDescription `object`: The description of the IoT hub.
  * etag `string`: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
  * properties [IotHubProperties](#iothubproperties)
  * resourcegroup **required** `string`: The name of the resource group that contains the IoT hub. A resource group name uniquely identifies the resource group within the subscription.
  * sku **required** [IotHubSkuInfo](#iothubskuinfo)
  * subscriptionid **required** `string`: The subscription identifier.
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### IotHubDescriptionListResult
* IotHubDescriptionListResult `object`: The JSON-serialized array of IotHubDescription objects with a next link.
  * nextLink `string`: The next link.
  * value `array`: The array of IotHubDescription objects.
    * items [IotHubDescription](#iothubdescription)

### IotHubNameAvailabilityInfo
* IotHubNameAvailabilityInfo `object`: The properties indicating whether a given IoT hub name is available.
  * message `string`: The detailed reason message.
  * nameAvailable `boolean`: The value which indicates whether the provided name is available.
  * reason `string` (values: Invalid, AlreadyExists): The reason for unavailability.

### IotHubProperties
* IotHubProperties `object`: The properties of an IoT hub.
  * authorizationPolicies `array`: The shared access policies you can use to secure a connection to the IoT hub.
    * items [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)
  * cloudToDevice [CloudToDeviceProperties](#cloudtodeviceproperties)
  * comments `string`: Comments.
  * enableFileUploadNotifications `boolean`: If True, file upload notifications are enabled.
  * eventHubEndpoints `object`: The Event Hub-compatible endpoint properties. The possible keys to this dictionary are events and operationsMonitoringEvents. Both of these keys have to be present in the dictionary while making create or update calls for the IoT hub.
  * features `string` (values: None, DeviceManagement): The capabilities and features enabled for the IoT hub.
  * hostName `string`: The name of the host.
  * ipFilterRules `array`: The IP filter rules.
    * items [IpFilterRule](#ipfilterrule)
  * messagingEndpoints `object`: The messaging endpoint properties for the file upload notification queue.
  * operationsMonitoringProperties [OperationsMonitoringProperties](#operationsmonitoringproperties)
  * provisioningState `string`: The provisioning state.
  * storageEndpoints `object`: The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.

### IotHubQuotaMetricInfo
* IotHubQuotaMetricInfo `object`: Quota metrics properties.
  * CurrentValue `integer`: The current value for the quota metric.
  * MaxValue `integer`: The maximum value of the quota metric.
  * Name `string`: The name of the quota metric.

### IotHubQuotaMetricInfoListResult
* IotHubQuotaMetricInfoListResult `object`: The JSON-serialized array of IotHubQuotaMetricInfo objects with a next link.
  * nextLink `string`: The next link.
  * value `array`: The array of quota metrics objects.
    * items [IotHubQuotaMetricInfo](#iothubquotametricinfo)

### IotHubSkuDescription
* IotHubSkuDescription `object`: SKU properties.
  * capacity **required** [IotHubCapacity](#iothubcapacity)
  * resourceType `string`: The type of the resource.
  * sku **required** [IotHubSkuInfo](#iothubskuinfo)

### IotHubSkuDescriptionListResult
* IotHubSkuDescriptionListResult `object`: The JSON-serialized array of IotHubSkuDescription objects with a next link.
  * nextLink `string`: The next link.
  * value `array`: The array of IotHubSkuDescription.
    * items [IotHubSkuDescription](#iothubskudescription)

### IotHubSkuInfo
* IotHubSkuInfo `object`: Information about the SKU of the IoT hub.
  * capacity **required** `integer`: The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
  * name **required** `string` (values: F1, S1, S2, S3): The name of the SKU.
  * tier `string` (values: Free, Standard): The billing tier for the IoT hub.

### IpFilterRule
* IpFilterRule `object`: The IP filter rules for the IoT hub.
  * action **required** `string` (values: Accept, Reject): The desired action for requests captured by this rule.
  * filterName **required** `string`: The name of the IP filter rule.
  * ipMask **required** `string`: A string that contains the IP address range in CIDR notation for the rule.

### JobResponse
* JobResponse `object`: The properties of the Job Response object.
  * endTimeUtc `string`: The time the job stopped processing.
  * failureReason `string`: If status == failed, this string containing the reason for the failure.
  * jobId `string`: The job identifier.
  * parentJobId `string`: The job identifier of the parent job, if any.
  * startTimeUtc `string`: The start time of the job.
  * status `string` (values: unknown, enqueued, running, completed, failed, cancelled): The status of the job.
  * statusMessage `string`: The status message for the job.
  * type `string` (values: unknown, export, import, backup, readDeviceProperties, writeDeviceProperties, updateDeviceConfiguration, rebootDevice, factoryResetDevice, firmwareUpdate): The type of the job.

### JobResponseListResult
* JobResponseListResult `object`: The JSON-serialized array of JobResponse objects with a next link.
  * nextLink `string`: The next link.
  * value `array`: The array of JobResponse objects.
    * items [JobResponse](#jobresponse)

### MessagingEndpointProperties
* MessagingEndpointProperties `object`: The properties of the messaging endpoints used by this IoT hub.
  * lockDurationAsIso8601 `string`: The lock duration. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload.
  * maxDeliveryCount `integer`: The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload.
  * ttlAsIso8601 `string`: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload.

### OperationInputs
* OperationInputs `object`: Input values.
  * Name **required** `string`: The name of the IoT hub to check.

### OperationsMonitoringProperties
* OperationsMonitoringProperties `object`: The operations monitoring properties for the IoT hub. The possible keys to the dictionary are Connections, DeviceTelemetry, C2DCommands, DeviceIdentityOperations, FileUploadOperations.
  * events `object`

### RegistryStatistics
* RegistryStatistics `object`: Identity registry statistics.
  * disabledDeviceCount `integer`: The count of disabled devices in the identity registry.
  * enabledDeviceCount `integer`: The count of enabled devices in the identity registry.
  * totalDeviceCount `integer`: The total count of devices in the identity registry.

### Resource
* Resource `object`: The common properties of an Azure resource.
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### SharedAccessSignatureAuthorizationRule
* SharedAccessSignatureAuthorizationRule `object`: The properties of an IoT hub shared access policy.
  * keyName **required** `string`: The name of the shared access policy.
  * primaryKey `string`: The primary key.
  * rights **required** `string` (values: RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect, RegistryRead, RegistryWrite, RegistryRead, ServiceConnect, RegistryRead, DeviceConnect, RegistryWrite, ServiceConnect, RegistryWrite, DeviceConnect, ServiceConnect, DeviceConnect, RegistryRead, RegistryWrite, ServiceConnect, RegistryRead, RegistryWrite, DeviceConnect, RegistryRead, ServiceConnect, DeviceConnect, RegistryWrite, ServiceConnect, DeviceConnect, RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect): The permissions assigned to the shared access policy.
  * secondaryKey `string`: The secondary key.

### SharedAccessSignatureAuthorizationRuleListResult
* SharedAccessSignatureAuthorizationRuleListResult `object`: The list of shared access policies with a next link.
  * nextLink `string`: The next link.
  * value `array`: The list of shared access policies.
    * items [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)

### StorageEndpointProperties
* StorageEndpointProperties `object`: The properties of the Azure Storage endpoint for file upload.
  * connectionString **required** `string`: The connection string for the Azure Storage account to which files are uploaded.
  * containerName **required** `string`: The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified.
  * sasTtlAsIso8601 `string`: The period of time for which the the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options.


