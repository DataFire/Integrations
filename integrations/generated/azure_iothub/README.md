# @datafire/azure_iothub

Client library for iotHubClient

## Installation and Usage
```bash
npm install --save @datafire/azure_iothub
```
```js
let azure_iothub = require('@datafire/azure_iothub').create({
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

Use this API to manage the IoT hubs in your Azure subscription.

## Actions

### Operations_List
Lists all of the available IoT Hub REST API operations.


```js
azure_iothub.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.

#### Output
* output [OperationListResult](#operationlistresult)

### IotHubResource_ListBySubscription
Get all the IoT hubs in a subscription.


```js
azure_iothub.IotHubResource_ListBySubscription({
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
azure_iothub.IotHubResource_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "operationInputs": {
    "name": ""
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

### ResourceProviderCommon_GetSubscriptionQuota
Get the number of free and paid iot hubs in the subscription


```js
azure_iothub.ResourceProviderCommon_GetSubscriptionQuota({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * api-version **required** `string`: The version of the API.

#### Output
* output [UserSubscriptionQuotaListResult](#usersubscriptionquotalistresult)

### IotHubResource_ListByResourceGroup
Get all the IoT hubs in a resource group.


```js
azure_iothub.IotHubResource_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.

#### Output
* output [IotHubDescriptionListResult](#iothubdescriptionlistresult)

### IotHub_ManualFailover
Perform manual fail over of given hub


```js
azure_iothub.IotHub_ManualFailover({
  "iotHubName": "",
  "failoverInput": {
    "failoverRegion": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * iotHubName **required** `string`: IotHub to fail over
  * failoverInput **required** [FailoverInput](#failoverinput)
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: resource group which Iot Hub belongs to
  * api-version **required** `string`: The version of the API.

#### Output
*Output schema unknown*

### IotHubResource_TestAllRoutes
Test all routes configured in this Iot Hub


```js
azure_iothub.IotHubResource_TestAllRoutes({
  "input": {},
  "iotHubName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * input **required** [TestAllRoutesInput](#testallroutesinput)
  * iotHubName **required** `string`: IotHub to be tested
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: resource group which Iot Hub belongs to
  * api-version **required** `string`: The version of the API.

#### Output
* output [TestAllRoutesResult](#testallroutesresult)

### IotHubResource_TestRoute
Test the new route for this Iot Hub


```js
azure_iothub.IotHubResource_TestRoute({
  "input": {
    "route": {
      "name": "",
      "endpointNames": [],
      "source": "",
      "isEnabled": true
    }
  },
  "iotHubName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * input **required** [TestRouteInput](#testrouteinput)
  * iotHubName **required** `string`: IotHub to be tested
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: resource group which Iot Hub belongs to
  * api-version **required** `string`: The version of the API.

#### Output
* output [TestRouteResult](#testrouteresult)

### IotHubResource_GetEndpointHealth
Get the health for routing endpoints.


```js
azure_iothub.IotHubResource_GetEndpointHealth({
  "subscriptionId": "",
  "resourceGroupName": "",
  "iotHubName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`
  * iotHubName **required** `string`
  * api-version **required** `string`: The version of the API.

#### Output
* output [EndpointHealthDataListResult](#endpointhealthdatalistresult)

### IotHubResource_Delete
Delete an IoT hub.


```js
azure_iothub.IotHubResource_Delete({
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

### IotHubResource_Get
Get the non-security related metadata of an IoT hub.


```js
azure_iothub.IotHubResource_Get({
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

### IotHubResource_Update
Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method


```js
azure_iothub.IotHubResource_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "IotHubTags": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: Resource group identifier.
  * resourceName **required** `string`: Name of iot hub to update.
  * IotHubTags **required** [TagsResource](#tagsresource)
  * api-version **required** `string`: The version of the API.

#### Output
* output [IotHubDescription](#iothubdescription)

### IotHubResource_CreateOrUpdate
Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub.


```js
azure_iothub.IotHubResource_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "iotHubDescription": {
    "sku": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * iotHubDescription **required** [IotHubDescription](#iothubdescription)
  * If-Match `string`: ETag of the IoT Hub. Do not specify for creating a brand new IoT Hub. Required to update an existing IoT Hub.

#### Output
* output [IotHubDescription](#iothubdescription)

### IotHubResource_GetKeysForKeyName
Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.


```js
azure_iothub.IotHubResource_GetKeysForKeyName({
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
azure_iothub.IotHubResource_GetStats({
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

### Certificates_ListByIotHub
Returns the list of certificates.


```js
azure_iothub.Certificates_ListByIotHub({
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
* output [CertificateListDescription](#certificatelistdescription)

### Certificates_Delete
Deletes an existing X509 certificate or does nothing if it does not exist.


```js
azure_iothub.Certificates_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "certificateName": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * certificateName **required** `string`: The name of the certificate
  * If-Match **required** `string`: ETag of the Certificate.

#### Output
*Output schema unknown*

### Certificates_Get
Returns the certificate.


```js
azure_iothub.Certificates_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "certificateName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * certificateName **required** `string`: The name of the certificate

#### Output
* output [CertificateDescription](#certificatedescription)

### Certificates_CreateOrUpdate
Adds new or replaces existing certificate.


```js
azure_iothub.Certificates_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "certificateName": "",
  "certificateDescription": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * certificateName **required** `string`: The name of the certificate
  * certificateDescription **required** [CertificateBodyDescription](#certificatebodydescription)
  * If-Match `string`: ETag of the Certificate. Do not specify for creating a brand new certificate. Required to update an existing certificate.

#### Output
* output [CertificateDescription](#certificatedescription)

### Certificates_GenerateVerificationCode
Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate.


```js
azure_iothub.Certificates_GenerateVerificationCode({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "certificateName": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * certificateName **required** `string`: The name of the certificate
  * If-Match **required** `string`: ETag of the Certificate.

#### Output
* output [CertificateWithNonceDescription](#certificatewithnoncedescription)

### Certificates_Verify
Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.


```js
azure_iothub.Certificates_Verify({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "certificateName": "",
  "certificateVerificationBody": {},
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the IoT hub.
  * resourceName **required** `string`: The name of the IoT hub.
  * certificateName **required** `string`: The name of the certificate
  * certificateVerificationBody **required** [CertificateVerificationDescription](#certificateverificationdescription)
  * If-Match **required** `string`: ETag of the Certificate.

#### Output
* output [CertificateDescription](#certificatedescription)

### IotHubResource_ListEventHubConsumerGroups
Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.


```js
azure_iothub.IotHubResource_ListEventHubConsumerGroups({
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
azure_iothub.IotHubResource_DeleteEventHubConsumerGroup({
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
azure_iothub.IotHubResource_GetEventHubConsumerGroup({
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
azure_iothub.IotHubResource_CreateEventHubConsumerGroup({
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
azure_iothub.IotHubResource_ExportDevices({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "exportDevicesParameters": {
    "exportBlobContainerUri": "",
    "excludeKeys": true
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
azure_iothub.IotHubResource_ImportDevices({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "importDevicesParameters": {
    "inputBlobContainerUri": "",
    "outputBlobContainerUri": ""
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
azure_iothub.IotHubResource_ListJobs({
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
azure_iothub.IotHubResource_GetJob({
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
azure_iothub.IotHubResource_ListKeys({
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
azure_iothub.IotHubResource_GetQuotaMetrics({
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
azure_iothub.IotHubResource_GetValidSkus({
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

### CertificateBodyDescription
* CertificateBodyDescription `object`: The JSON-serialized X509 Certificate.
  * certificate `string`: base-64 representation of the X509 leaf certificate .cer file or just .pem file content.

### CertificateDescription
* CertificateDescription `object`: The X509 Certificate.
  * etag `string`: The entity tag.
  * id `string`: The resource identifier.
  * name `string`: The name of the certificate.
  * properties [CertificateProperties](#certificateproperties)
  * type `string`: The resource type.

### CertificateListDescription
* CertificateListDescription `object`: The JSON-serialized array of Certificate objects.
  * value `array`: The array of Certificate objects.
    * items [CertificateDescription](#certificatedescription)

### CertificateProperties
* CertificateProperties `object`: The description of an X509 CA Certificate.
  * certificate `string`: The certificate content
  * created `string`: The certificate's create date and time.
  * expiry `string`: The certificate's expiration date and time.
  * isVerified `boolean`: Determines whether certificate has been verified.
  * subject `string`: The certificate's subject name.
  * thumbprint `string`: The certificate's thumbprint.
  * updated `string`: The certificate's last update date and time.

### CertificatePropertiesWithNonce
* CertificatePropertiesWithNonce `object`: The description of an X509 CA Certificate including the challenge nonce issued for the Proof-Of-Possession flow.
  * certificate `string`: The certificate content
  * created `string`: The certificate's create date and time.
  * expiry `string`: The certificate's expiration date and time.
  * isVerified `boolean`: Determines whether certificate has been verified.
  * subject `string`: The certificate's subject name.
  * thumbprint `string`: The certificate's thumbprint.
  * updated `string`: The certificate's last update date and time.
  * verificationCode `string`: The certificate's verification code that will be used for proof of possession.

### CertificateVerificationDescription
* CertificateVerificationDescription `object`: The JSON-serialized leaf certificate
  * certificate `string`: base-64 representation of X509 certificate .cer file or just .pem file content.

### CertificateWithNonceDescription
* CertificateWithNonceDescription `object`: The X509 Certificate.
  * etag `string`: The entity tag.
  * id `string`: The resource identifier.
  * name `string`: The name of the certificate.
  * properties [CertificatePropertiesWithNonce](#certificatepropertieswithnonce)
  * type `string`: The resource type.

### CloudToDeviceProperties
* CloudToDeviceProperties `object`: The IoT hub cloud-to-device messaging properties.
  * defaultTtlAsIso8601 `string`: The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
  * feedback [FeedbackProperties](#feedbackproperties)
  * maxDeliveryCount `integer`: The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

### EndpointHealthData
* EndpointHealthData `object`: The health data for an endpoint
  * endpointId `string`: Id of the endpoint
  * healthStatus `string` (values: unknown, healthy, unhealthy, dead): Health statuses have following meanings. The 'healthy' status shows that the endpoint is accepting messages as expected. The 'unhealthy' status shows that the endpoint is not accepting messages as expected and IoT Hub is retrying to send data to this endpoint. The status of an unhealthy endpoint will be updated to healthy when IoT Hub has established an eventually consistent state of health. The 'dead' status shows that the endpoint is not accepting messages, after IoT Hub retried sending messages for the retrial period. See IoT Hub metrics to identify errors and monitor issues with endpoints. The 'unknown' status shows that the IoT Hub has not established a connection with the endpoint. No messages have been delivered to or rejected from this endpoint

### EndpointHealthDataListResult
* EndpointHealthDataListResult `object`: The JSON-serialized array of EndpointHealthData objects with a next link.
  * nextLink `string`: Link to more results
  * value `array`: JSON-serialized array of Endpoint health data
    * items [EndpointHealthData](#endpointhealthdata)

### EnrichmentProperties
* EnrichmentProperties `object`: The properties of an enrichment that your IoT hub applies to messages delivered to endpoints.
  * endpointNames **required** `array`: The list of endpoints for which the enrichment is applied to the message.
    * items `string`
  * key **required** `string`: The key or name for the enrichment property.
  * value **required** `string`: The value for the enrichment property.

### ErrorDetails
* ErrorDetails `object`: Error details.
  * code `string`: The error code.
  * details `string`: The error details.
  * httpStatusCode `string`: The HTTP status code.
  * message `string`: The error message.

### EventHubConsumerGroupInfo
* EventHubConsumerGroupInfo `object`: The properties of the EventHubConsumerGroupInfo object.
  * etag `string`: The etag.
  * id `string`: The Event Hub-compatible consumer group identifier.
  * name `string`: The Event Hub-compatible consumer group name.
  * properties `object`: The tags.
  * type `string`: the resource type.

### EventHubConsumerGroupsListResult
* EventHubConsumerGroupsListResult `object`: The JSON-serialized array of Event Hub-compatible consumer group names with a next link.
  * nextLink `string`: The next link.
  * value `array`: List of consumer groups objects
    * items [EventHubConsumerGroupInfo](#eventhubconsumergroupinfo)

### EventHubProperties
* EventHubProperties `object`: The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub.
  * endpoint `string`: The Event Hub-compatible endpoint.
  * partitionCount `integer`: The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages.
  * partitionIds `array`: The partition ids in the Event Hub-compatible endpoint.
    * items `string`
  * path `string`: The Event Hub-compatible name.
  * retentionTimeInDays `integer`: The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages

### ExportDevicesRequest
* ExportDevicesRequest `object`: Use to provide parameters when requesting an export of all devices in the IoT hub.
  * excludeKeys **required** `boolean`: The value indicating whether keys should be excluded during export.
  * exportBlobContainerUri **required** `string`: The export blob container URI.

### FailoverInput
* FailoverInput `object`: Use to provide failover region when requesting manual Failover for a hub.
  * failoverRegion **required** `string`: Region the hub will be failed over to

### FallbackRouteProperties
* FallbackRouteProperties `object`: The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint.
  * condition `string`: The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
  * endpointNames **required** `array`: The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed.
    * items `string`
  * isEnabled **required** `boolean`: Used to specify whether the fallback route is enabled.
  * name `string`: The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
  * source **required** `string` (values: DeviceMessages): The source to which the routing rule is to be applied to. For example, DeviceMessages

### FeedbackProperties
* FeedbackProperties `object`: The properties of the feedback queue for cloud-to-device messages.
  * lockDurationAsIso8601 `string`: The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
  * maxDeliveryCount `integer`: The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
  * ttlAsIso8601 `string`: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

### ImportDevicesRequest
* ImportDevicesRequest `object`: Use to provide parameters when requesting an import of all devices in the hub.
  * inputBlobContainerUri **required** `string`: The input blob container URI.
  * outputBlobContainerUri **required** `string`: The output blob container URI.

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
  * sku **required** [IotHubSkuInfo](#iothubskuinfo)
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

### IotHubLocationDescription
* IotHubLocationDescription `object`: Public representation of one of the locations where a resource is provisioned.
  * location `string`: Azure Geo Regions
  * role `string` (values: primary, secondary): Specific Role assigned to this location

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
  * comments `string`: IoT hub comments.
  * deviceStreams `object`: The device streams properties of iothub.
    * streamingEndpoints `array`: List of Device Streams Endpoints.
      * items `string`
  * enableFileUploadNotifications `boolean`: If True, file upload notifications are enabled.
  * eventHubEndpoints `object`: The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
  * features `string` (values: None, DeviceManagement): The capabilities and features enabled for the IoT hub.
  * hostName `string`: The name of the host.
  * ipFilterRules `array`: The IP filter rules.
    * items [IpFilterRule](#ipfilterrule)
  * locations `array`: Primary and secondary location for iot hub
    * items [IotHubLocationDescription](#iothublocationdescription)
  * messagingEndpoints `object`: The messaging endpoint properties for the file upload notification queue.
  * provisioningState `string`: The provisioning state.
  * routing [RoutingProperties](#routingproperties)
  * state `string`: The hub state.
  * storageEndpoints `object`: The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.

### IotHubQuotaMetricInfo
* IotHubQuotaMetricInfo `object`: Quota metrics properties.
  * currentValue `integer`: The current value for the quota metric.
  * maxValue `integer`: The maximum value of the quota metric.
  * name `string`: The name of the quota metric.

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
  * capacity `integer`: The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
  * name **required** `string` (values: F1, S1, S2, S3, B1, B2, B3): The name of the SKU.
  * tier `string` (values: Free, Standard, Basic): The billing tier for the IoT hub.

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

### MatchedRoute
* MatchedRoute `object`: Routes that matched
  * properties [RouteProperties](#routeproperties)

### MessagingEndpointProperties
* MessagingEndpointProperties `object`: The properties of the messaging endpoints used by this IoT hub.
  * lockDurationAsIso8601 `string`: The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
  * maxDeliveryCount `integer`: The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
  * ttlAsIso8601 `string`: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.

### Name
* Name `object`: Name of Iot Hub type
  * localizedValue `string`: Localized value of name
  * value `string`: IotHub type

### Operation
* Operation `object`: IoT Hub REST API operation
  * display `object`: The object that represents the operation.
    * description `string`: Description of the operation
    * operation `string`: Name of the operation
    * provider `string`: Service provider: Microsoft Devices
    * resource `string`: Resource Type: IotHubs
  * name `string`: Operation name: {provider}/{resource}/{read | write | action | delete}

### OperationInputs
* OperationInputs `object`: Input values.
  * name **required** `string`: The name of the IoT hub to check.

### OperationListResult
* OperationListResult `object`: Result of the request to list IoT Hub operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of IoT Hub operations supported by the Microsoft.Devices resource provider.
    * items [Operation](#operation)

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

### RouteCompilationError
* RouteCompilationError `object`: Compilation error when evaluating route
  * location [RouteErrorRange](#routeerrorrange)
  * message `string`: Route error message
  * severity `string` (values: error, warning): Severity of the route error

### RouteErrorPosition
* RouteErrorPosition `object`: Position where the route error happened
  * column `integer`: Column where the route error happened
  * line `integer`: Line where the route error happened

### RouteErrorRange
* RouteErrorRange `object`: Range of route errors
  * end [RouteErrorPosition](#routeerrorposition)
  * start [RouteErrorPosition](#routeerrorposition)

### RouteProperties
* RouteProperties `object`: The properties of a routing rule that your IoT hub uses to route messages to endpoints.
  * condition `string`: The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
  * endpointNames **required** `array`: The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
    * items `string`
  * isEnabled **required** `boolean`: Used to specify whether a route is enabled.
  * name **required** `string`: The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
  * source **required** `string` (values: Invalid, DeviceMessages, TwinChangeEvents, DeviceLifecycleEvents, DeviceJobLifecycleEvents, DigitalTwinChangeEvents): The source that the routing rule is to be applied to, such as DeviceMessages.

### RoutingEndpoints
* RoutingEndpoints `object`: The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.
  * eventHubs `array`: The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
    * items [RoutingEventHubProperties](#routingeventhubproperties)
  * serviceBusQueues `array`: The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
    * items [RoutingServiceBusQueueEndpointProperties](#routingservicebusqueueendpointproperties)
  * serviceBusTopics `array`: The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
    * items [RoutingServiceBusTopicEndpointProperties](#routingservicebustopicendpointproperties)
  * storageContainers `array`: The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
    * items [RoutingStorageContainerProperties](#routingstoragecontainerproperties)

### RoutingEventHubProperties
* RoutingEventHubProperties `object`: The properties related to an event hub endpoint.
  * connectionString **required** `string`: The connection string of the event hub endpoint. 
  * name **required** `string`: The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
  * resourceGroup `string`: The name of the resource group of the event hub endpoint.
  * subscriptionId `string`: The subscription identifier of the event hub endpoint.

### RoutingMessage
* RoutingMessage `object`: Routing message
  * appProperties `object`: App properties
  * body `string`: Body of routing message
  * systemProperties `object`: System properties

### RoutingProperties
* RoutingProperties `object`: The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
  * endpoints [RoutingEndpoints](#routingendpoints)
  * enrichments `array`: The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/iotmsgenrich
    * items [EnrichmentProperties](#enrichmentproperties)
  * fallbackRoute [FallbackRouteProperties](#fallbackrouteproperties)
  * routes `array`: The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
    * items [RouteProperties](#routeproperties)

### RoutingServiceBusQueueEndpointProperties
* RoutingServiceBusQueueEndpointProperties `object`: The properties related to service bus queue endpoint types.
  * connectionString **required** `string`: The connection string of the service bus queue endpoint.
  * name **required** `string`: The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name.
  * resourceGroup `string`: The name of the resource group of the service bus queue endpoint.
  * subscriptionId `string`: The subscription identifier of the service bus queue endpoint.

### RoutingServiceBusTopicEndpointProperties
* RoutingServiceBusTopicEndpointProperties `object`: The properties related to service bus topic endpoint types.
  * connectionString **required** `string`: The connection string of the service bus topic endpoint.
  * name **required** `string`: The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name.
  * resourceGroup `string`: The name of the resource group of the service bus topic endpoint.
  * subscriptionId `string`: The subscription identifier of the service bus topic endpoint.

### RoutingStorageContainerProperties
* RoutingStorageContainerProperties `object`: The properties related to a storage container endpoint.
  * batchFrequencyInSeconds `integer`: Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
  * connectionString **required** `string`: The connection string of the storage account.
  * containerName **required** `string`: The name of storage container in the storage account.
  * encoding `string` (values: Avro, AvroDeflate, JSON): Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'.
  * fileNameFormat `string`: File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered.
  * maxChunkSizeInBytes `integer`: Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
  * name **required** `string`: The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
  * resourceGroup `string`: The name of the resource group of the storage account.
  * subscriptionId `string`: The subscription identifier of the storage account.

### RoutingTwin
* RoutingTwin `object`: Twin reference input parameter. This is an optional parameter
  * properties `object`
    * desired `object`: Twin desired properties
    * reported `object`: Twin desired properties
  * tags `object`: Twin Tags

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
  * sasTtlAsIso8601 `string`: The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options.

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags on an IoT Hub instance.

### TestAllRoutesInput
* TestAllRoutesInput `object`: Input for testing all routes
  * message [RoutingMessage](#routingmessage)
  * routingSource `string` (values: Invalid, DeviceMessages, TwinChangeEvents, DeviceLifecycleEvents, DeviceJobLifecycleEvents, DigitalTwinChangeEvents): Routing source
  * twin [RoutingTwin](#routingtwin)

### TestAllRoutesResult
* TestAllRoutesResult `object`: Result of testing all routes
  * routes `array`: JSON-serialized array of matched routes
    * items [MatchedRoute](#matchedroute)

### TestRouteInput
* TestRouteInput `object`: Input for testing route
  * message [RoutingMessage](#routingmessage)
  * route **required** [RouteProperties](#routeproperties)
  * twin [RoutingTwin](#routingtwin)

### TestRouteResult
* TestRouteResult `object`: Result of testing one route
  * details [TestRouteResultDetails](#testrouteresultdetails)
  * result `string` (values: undefined, false, true): Result of testing route

### TestRouteResultDetails
* TestRouteResultDetails `object`: Detailed result of testing a route
  * compilationErrors `array`: JSON-serialized list of route compilation errors
    * items [RouteCompilationError](#routecompilationerror)

### UserSubscriptionQuota
* UserSubscriptionQuota `object`: User subscription quota response
  * currentValue `integer`: Current number of IotHub type
  * id `string`: IotHub type id
  * limit `integer`: Numerical limit on IotHub type
  * name [Name](#name)
  * type `string`: Response type
  * unit `string`: Unit of IotHub type

### UserSubscriptionQuotaListResult
* UserSubscriptionQuotaListResult `object`: Json-serialized array of User subscription quota response
  * nextLink `string`
  * value `array`
    * items [UserSubscriptionQuota](#usersubscriptionquota)


