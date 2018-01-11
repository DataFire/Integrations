# @datafire/google_androiddeviceprovisioning

Client library for Android Device Provisioning Partner

## Installation and Usage
```bash
npm install --save @datafire/google_androiddeviceprovisioning
```
```js
let google_androiddeviceprovisioning = require('@datafire/google_androiddeviceprovisioning').create();

google_androiddeviceprovisioning.partners.devices.metadata({}).then(data => {
  console.log(data);
})
```

## Description

Automates reseller integration into zero-touch enrollment by assigning devices to customers and creating device reports.

## Actions

### partners.devices.metadata
Update the metadata.


```js
google_androiddeviceprovisioning.partners.devices.metadata({
  "deviceId": "",
  "metadataOwnerId": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateDeviceMetadataRequest](#updatedevicemetadatarequest)
  * deviceId **required** `string`: ID of the partner.
  * metadataOwnerId **required** `string`: The owner of the newly set metadata. Set this to the partner ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [DeviceMetadata](#devicemetadata)

### partners.customers.list
Lists the customers that are enrolled to the reseller identified by the
`partnerId` argument. This list includes customers that the reseller
created and customers that enrolled themselves using the portal.


```js
google_androiddeviceprovisioning.partners.customers.list({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: The ID of the partner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListCustomersResponse](#listcustomersresponse)

### partners.devices.claim
Claim the device identified by device identifier.


```js
google_androiddeviceprovisioning.partners.devices.claim({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * body [ClaimDeviceRequest](#claimdevicerequest)
  * partnerId **required** `string`: ID of the partner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ClaimDeviceResponse](#claimdeviceresponse)

### partners.devices.claimAsync
Claim devices asynchronously.


```js
google_androiddeviceprovisioning.partners.devices.claimAsync({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * body [ClaimDevicesRequest](#claimdevicesrequest)
  * partnerId **required** `string`: Partner ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### partners.devices.findByIdentifier
Find devices by device identifier.


```js
google_androiddeviceprovisioning.partners.devices.findByIdentifier({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * body [FindDevicesByDeviceIdentifierRequest](#finddevicesbydeviceidentifierrequest)
  * partnerId **required** `string`: ID of the partner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [FindDevicesByDeviceIdentifierResponse](#finddevicesbydeviceidentifierresponse)

### partners.devices.findByOwner
Find devices by ownership.


```js
google_androiddeviceprovisioning.partners.devices.findByOwner({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * body [FindDevicesByOwnerRequest](#finddevicesbyownerrequest)
  * partnerId **required** `string`: ID of the partner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [FindDevicesByOwnerResponse](#finddevicesbyownerresponse)

### partners.devices.unclaim
Unclaim the device identified by the `device_id` or the `deviceIdentifier`.


```js
google_androiddeviceprovisioning.partners.devices.unclaim({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * body [UnclaimDeviceRequest](#unclaimdevicerequest)
  * partnerId **required** `string`: ID of the partner.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### partners.devices.unclaimAsync
Unclaim devices asynchronously.


```js
google_androiddeviceprovisioning.partners.devices.unclaimAsync({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * body [UnclaimDevicesRequest](#unclaimdevicesrequest)
  * partnerId **required** `string`: Partner ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### partners.devices.updateMetadataAsync
Set metadata in batch asynchronously.


```js
google_androiddeviceprovisioning.partners.devices.updateMetadataAsync({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateDeviceMetadataInBatchRequest](#updatedevicemetadatainbatchrequest)
  * partnerId **required** `string`: Partner ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### partners.devices.get
Get a device.


```js
google_androiddeviceprovisioning.partners.devices.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name in `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Device](#device)

### partners.customers.create
Creates a customer for zero-touch enrollment. After the method returns
successfully, admin and owner roles can manage devices and EMM configs
by calling API methods or using their zero-touch enrollment portal. The API
doesn't notify the customer that they have access.


```js
google_androiddeviceprovisioning.partners.customers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [CreateCustomerRequest](#createcustomerrequest)
  * parent **required** `string`: Required. The parent resource ID in format `partners/[PARTNER_ID]` that
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Company](#company)



## Definitions

### ClaimDeviceRequest
* ClaimDeviceRequest `object`: Request message to claim a device on behalf of a customer.
  * customerId `string`: The customer to claim for.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_ZERO_TOUCH): The section to claim.

### ClaimDeviceResponse
* ClaimDeviceResponse `object`: Response message containing device id of the claim.
  * deviceId `string`: The device ID of the claimed device.
  * deviceName `string`: The resource name of the device in the format

### ClaimDevicesRequest
* ClaimDevicesRequest `object`: Request to claim devices asynchronously in batch.
  * claims `array`: List of claims.
    * items [PartnerClaim](#partnerclaim)

### Company
* Company `object`: A customer resource in the zero-touch enrollment API.
  * adminEmails `array`: Input only. Optional. Email address of customer's users in the admin role.
    * items `string`
  * companyId `string`: Output only. The ID of the company. Assigned by the server.
  * companyName `string`: Required. The name of the company. For example _XYZ Corp_. Characters
  * name `string`: Output only. The API resource name of the company in the format
  * ownerEmails `array`: Input only. Email address of customer's users in the owner role. At least
    * items `string`

### CreateCustomerRequest
* CreateCustomerRequest `object`: Request message to create a customer.
  * customer [Company](#company)

### Device
* Device `object`: An Android device.
  * claims `array`: Claims.
    * items [DeviceClaim](#deviceclaim)
  * configuration `string`: The resource name of the configuration.
  * deviceId `string`: Device ID.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * deviceMetadata [DeviceMetadata](#devicemetadata)
  * name `string`: Resource name in `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.

### DeviceClaim
* DeviceClaim `object`: Information about a device claimed for a partner.
  * ownerCompanyId `string`: Owner ID.
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_ZERO_TOUCH): Section type of the device claim.

### DeviceIdentifier
* DeviceIdentifier `object`: Identifies a unique device.
  * imei `string`: IMEI number.
  * manufacturer `string`: Manufacturer name to match `android.os.Build.MANUFACTURER` (required).
  * meid `string`: MEID number.
  * serialNumber `string`: Serial number (optional).

### DeviceMetadata
* DeviceMetadata `object`: A key-value pair of the device metadata.
  * entries `object`: Metadata entries

### DevicesLongRunningOperationMetadata
* DevicesLongRunningOperationMetadata `object`: Long running operation metadata.
  * devicesCount `integer`: Number of devices parsed in your requests.
  * processingStatus `string` (values: BATCH_PROCESS_STATUS_UNSPECIFIED, BATCH_PROCESS_PENDING, BATCH_PROCESS_IN_PROGRESS, BATCH_PROCESS_PROCESSED): The overall processing status.
  * progress `integer`: Processing progress from 0 to 100.

### DevicesLongRunningOperationResponse
* DevicesLongRunningOperationResponse `object`: Long running operation response.
  * perDeviceStatus `array`: Processing status for each device.
    * items [OperationPerDevice](#operationperdevice)
  * successCount `integer`: Number of succeesfully processed ones.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### FindDevicesByDeviceIdentifierRequest
* FindDevicesByDeviceIdentifierRequest `object`: Request to find devices.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * limit `string`: Number of devices to show.
  * pageToken `string`: Page token.

### FindDevicesByDeviceIdentifierResponse
* FindDevicesByDeviceIdentifierResponse `object`: Response containing found devices.
  * devices `array`: Found devices.
    * items [Device](#device)
  * nextPageToken `string`: Page token of the next page.

### FindDevicesByOwnerRequest
* FindDevicesByOwnerRequest `object`: Request to find devices by customers.
  * customerId `array`: List of customer IDs to search for.
    * items `string`
  * limit `string`: The number of devices to show in the result.
  * pageToken `string`: Page token.
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_ZERO_TOUCH): The section type.

### FindDevicesByOwnerResponse
* FindDevicesByOwnerResponse `object`: Response containing found devices.
  * devices `array`: Devices found.
    * items [Device](#device)
  * nextPageToken `string`: Page token of the next page.

### ListCustomersResponse
* ListCustomersResponse `object`: Response message of all customers related to this partner.
  * customers `array`: List of customers related to this partner.
    * items [Company](#company)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.

### OperationPerDevice
* OperationPerDevice `object`: Operation the server received for every device.
  * claim [PartnerClaim](#partnerclaim)
  * result [PerDeviceStatusInBatch](#perdevicestatusinbatch)
  * unclaim [PartnerUnclaim](#partnerunclaim)
  * updateMetadata [UpdateMetadataArguments](#updatemetadataarguments)

### PartnerClaim
* PartnerClaim `object`: Identifies one claim request.
  * customerId `string`: Customer ID to claim for.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * deviceMetadata [DeviceMetadata](#devicemetadata)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_ZERO_TOUCH): Section type to claim.

### PartnerUnclaim
* PartnerUnclaim `object`: Identifies one unclaim request.
  * deviceId `string`: Device ID of the device.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_ZERO_TOUCH): Section type to unclaim.

### PerDeviceStatusInBatch
* PerDeviceStatusInBatch `object`: Stores the processing result for each device.
  * deviceId `string`: Device ID of the device if process succeeds.
  * errorIdentifier `string`: Error identifier.
  * errorMessage `string`: Error message.
  * status `string` (values: SINGLE_DEVICE_STATUS_UNSPECIFIED, SINGLE_DEVICE_STATUS_UNKNOWN_ERROR, SINGLE_DEVICE_STATUS_OTHER_ERROR, SINGLE_DEVICE_STATUS_SUCCESS, SINGLE_DEVICE_STATUS_PERMISSION_DENIED, SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER, SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE, SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS): Process result.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### UnclaimDeviceRequest
* UnclaimDeviceRequest `object`: Request message to unclaim a device.
  * deviceId `string`: The device ID returned by `ClaimDevice`.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_ZERO_TOUCH): The section type to unclaim for.

### UnclaimDevicesRequest
* UnclaimDevicesRequest `object`: Request to unclaim devices asynchronously in batch.
  * unclaims `array`: List of devices to unclaim.
    * items [PartnerUnclaim](#partnerunclaim)

### UpdateDeviceMetadataInBatchRequest
* UpdateDeviceMetadataInBatchRequest `object`: Request to update device metadata in batch.
  * updates `array`: List of metadata updates.
    * items [UpdateMetadataArguments](#updatemetadataarguments)

### UpdateDeviceMetadataRequest
* UpdateDeviceMetadataRequest `object`: Request to set metadata for a device.
  * deviceMetadata [DeviceMetadata](#devicemetadata)

### UpdateMetadataArguments
* UpdateMetadataArguments `object`: Identifies metdata updates to one device.
  * deviceId `string`: Device ID of the device.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * deviceMetadata [DeviceMetadata](#devicemetadata)


