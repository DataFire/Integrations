# @datafire/google_androiddeviceprovisioning

Client library for Android Device Provisioning Partner API

## Installation and Usage
```bash
npm install --save @datafire/google_androiddeviceprovisioning
```
```js
let google_androiddeviceprovisioning = require('@datafire/google_androiddeviceprovisioning').create();

.then(data => {
  console.log(data);
});
```

## Description

Automates Android zero-touch enrollment for device resellers, customers, and EMMs.

## Actions

### androiddeviceprovisioning.customers.list
Lists the user's customer accounts.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).
  * pageToken `string`: A token specifying which result page to return.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CustomerListCustomersResponse](#customerlistcustomersresponse)

### androiddeviceprovisioning.partners.devices.metadata
Updates reseller metadata associated with the device.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.metadata({
  "metadataOwnerId": "",
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * metadataOwnerId **required** `string`: Required. The owner of the newly set metadata. Set this to the partner ID.
  * deviceId **required** `string`: Required. The ID of the device.
  * body [UpdateDeviceMetadataRequest](#updatedevicemetadatarequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DeviceMetadata](#devicemetadata)

### androiddeviceprovisioning.partners.customers.list
Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.customers.list({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The ID of the reseller partner.
  * pageSize `integer`: The maximum number of results to be returned. If not specified or 0, all the records are returned.
  * pageToken `string`: A token identifying a page of results returned by the server.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListCustomersResponse](#listcustomersresponse)

### androiddeviceprovisioning.partners.devices.claim
Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.claim({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The ID of the reseller partner.
  * body [ClaimDeviceRequest](#claimdevicerequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ClaimDeviceResponse](#claimdeviceresponse)

### androiddeviceprovisioning.partners.devices.claimAsync
Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.claimAsync({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The ID of the reseller partner.
  * body [ClaimDevicesRequest](#claimdevicesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### androiddeviceprovisioning.partners.devices.findByIdentifier
Finds devices by hardware identifiers, such as IMEI.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.findByIdentifier({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The ID of the reseller partner.
  * body [FindDevicesByDeviceIdentifierRequest](#finddevicesbydeviceidentifierrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [FindDevicesByDeviceIdentifierResponse](#finddevicesbydeviceidentifierresponse)

### androiddeviceprovisioning.partners.devices.findByOwner
Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.findByOwner({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The ID of the reseller partner.
  * body [FindDevicesByOwnerRequest](#finddevicesbyownerrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [FindDevicesByOwnerResponse](#finddevicesbyownerresponse)

### androiddeviceprovisioning.partners.devices.unclaim
Unclaims a device from a customer and removes it from zero-touch enrollment.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.unclaim({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The ID of the reseller partner.
  * body [UnclaimDeviceRequest](#unclaimdevicerequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### androiddeviceprovisioning.partners.devices.unclaimAsync
Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.unclaimAsync({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The reseller partner ID.
  * body [UnclaimDevicesRequest](#unclaimdevicesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### androiddeviceprovisioning.partners.devices.updateMetadataAsync
Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.updateMetadataAsync({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Required. The reseller partner ID.
  * body [UpdateDeviceMetadataInBatchRequest](#updatedevicemetadatainbatchrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### androiddeviceprovisioning.customers.configurations.delete
Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.configurations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### androiddeviceprovisioning.partners.devices.get
Gets a device.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.devices.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Device](#device)

### androiddeviceprovisioning.customers.configurations.patch
Updates a configuration's field values.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.configurations.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
  * updateMask `string`: Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.
  * body [Configuration](#configuration)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Configuration](#configuration)

### androiddeviceprovisioning.customers.configurations.list
Lists a customer's configurations.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.configurations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CustomerListConfigurationsResponse](#customerlistconfigurationsresponse)

### androiddeviceprovisioning.customers.configurations.create
Creates a new configuration. Once created, a customer can apply the configuration to devices.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.configurations.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`.
  * body [Configuration](#configuration)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Configuration](#configuration)

### androiddeviceprovisioning.partners.vendors.customers.list
Lists the customers of the vendor.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.vendors.customers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.
  * pageSize `integer`: The maximum number of results to be returned.
  * pageToken `string`: A token identifying a page of results returned by the server.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListVendorCustomersResponse](#listvendorcustomersresponse)

### androiddeviceprovisioning.partners.customers.create
Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.customers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.
  * body [CreateCustomerRequest](#createcustomerrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Company](#company)

### androiddeviceprovisioning.customers.devices.list
Lists a customer's devices.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.devices.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.
  * pageSize `string`: The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
  * pageToken `string`: A token specifying which result page to return.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CustomerListDevicesResponse](#customerlistdevicesresponse)

### androiddeviceprovisioning.customers.devices.applyConfiguration
Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.devices.applyConfiguration({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
  * body [CustomerApplyConfigurationRequest](#customerapplyconfigurationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### androiddeviceprovisioning.customers.devices.removeConfiguration
Removes a configuration from device.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.devices.removeConfiguration({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.
  * body [CustomerRemoveConfigurationRequest](#customerremoveconfigurationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### androiddeviceprovisioning.customers.devices.unclaim
Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.devices.unclaim({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
  * body [CustomerUnclaimDeviceRequest](#customerunclaimdevicerequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### androiddeviceprovisioning.customers.dpcs.list
Lists the DPCs (device policy controllers) that support zero-touch enrollment.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.customers.dpcs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CustomerListDpcsResponse](#customerlistdpcsresponse)

### androiddeviceprovisioning.partners.vendors.list
Lists the vendors of the partner.


```js
google_androiddeviceprovisioning.androiddeviceprovisioning.partners.vendors.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name in the format `partners/[PARTNER_ID]`.
  * pageSize `integer`: The maximum number of results to be returned.
  * pageToken `string`: A token identifying a page of results returned by the server.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListVendorsResponse](#listvendorsresponse)



## Definitions

### ClaimDeviceRequest
* ClaimDeviceRequest `object`: Request message to claim a device on behalf of a customer.
  * customerId `string`: Required. The ID of the customer for whom the device is being claimed.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * deviceMetadata [DeviceMetadata](#devicemetadata)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_SIM_LOCK, SECTION_TYPE_ZERO_TOUCH): Required. The section type of the device's provisioning record.

### ClaimDeviceResponse
* ClaimDeviceResponse `object`: Response message containing device id of the claim.
  * deviceId `string`: The device ID of the claimed device.
  * deviceName `string`: The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.

### ClaimDevicesRequest
* ClaimDevicesRequest `object`: Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
  * claims `array`: Required. A list of device claims.
    * items [PartnerClaim](#partnerclaim)

### Company
* Company `object`: A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
  * adminEmails `array`: Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account.
    * items `string`
  * companyId `string`: Output only. The ID of the company. Assigned by the server.
  * companyName `string`: Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal.
  * name `string`: Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server.
  * ownerEmails `array`: Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Each email address must be associated with a Google Account. Owners share the same access as admins but can also add, delete, and edit your organization's portal users.
    * items `string`
  * termsStatus `string` (values: TERMS_STATUS_UNSPECIFIED, TERMS_STATUS_NOT_ACCEPTED, TERMS_STATUS_ACCEPTED, TERMS_STATUS_STALE): Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus.

### Configuration
* Configuration `object`: A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
  * companyName `string`: Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.
  * configurationId `string`: Output only. The ID of the configuration. Assigned by the server.
  * configurationName `string`: Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.
  * contactEmail `string`: Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.
  * contactPhone `string`: Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.
  * customMessage `string`: A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.
  * dpcExtras `string`: The JSON-formatted EMM provisioning extras that are passed to the DPC.
  * dpcResourcePath `string`: Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`.
  * isDefault `boolean`: Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.
  * name `string`: Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.

### CreateCustomerRequest
* CreateCustomerRequest `object`: Request message to create a customer.
  * customer [Company](#company)

### CustomerApplyConfigurationRequest
* CustomerApplyConfigurationRequest `object`: Request message for customer to assign a configuration to device.
  * configuration `string`: Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
  * device [DeviceReference](#devicereference)

### CustomerListConfigurationsResponse
* CustomerListConfigurationsResponse `object`: Response message of customer's listing configuration.
  * configurations `array`: The configurations.
    * items [Configuration](#configuration)

### CustomerListCustomersResponse
* CustomerListCustomersResponse `object`: Response message for listing my customers.
  * customers `array`: The customer accounts the calling user is a member of.
    * items [Company](#company)
  * nextPageToken `string`: A token used to access the next page of results. Omitted if no further results are available.

### CustomerListDevicesResponse
* CustomerListDevicesResponse `object`: Response message of customer's liting devices.
  * devices `array`: The customer's devices.
    * items [Device](#device)
  * nextPageToken `string`: A token used to access the next page of results. Omitted if no further results are available.

### CustomerListDpcsResponse
* CustomerListDpcsResponse `object`: Response message of customer's listing DPCs.
  * dpcs `array`: The list of DPCs available to the customer that support zero-touch enrollment.
    * items [Dpc](#dpc)

### CustomerRemoveConfigurationRequest
* CustomerRemoveConfigurationRequest `object`: Request message for customer to remove the configuration from device.
  * device [DeviceReference](#devicereference)

### CustomerUnclaimDeviceRequest
* CustomerUnclaimDeviceRequest `object`: Request message for customer to unclaim a device.
  * device [DeviceReference](#devicereference)

### Device
* Device `object`: An Android device registered for zero-touch enrollment.
  * claims `array`: Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment.
    * items [DeviceClaim](#deviceclaim)
  * configuration `string`: Not available to resellers.
  * deviceId `string`: Output only. The ID of the device. Assigned by the server.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * deviceMetadata [DeviceMetadata](#devicemetadata)
  * name `string`: Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.

### DeviceClaim
* DeviceClaim `object`: A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
  * ownerCompanyId `string`: The ID of the Customer that purchased the device.
  * resellerId `string`: The ID of the reseller that claimed the device.
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_SIM_LOCK, SECTION_TYPE_ZERO_TOUCH): Output only. The type of claim made on the device.
  * vacationModeExpireTime `string`: The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'.
  * vacationModeStartTime `string`: The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'.

### DeviceIdentifier
* DeviceIdentifier `object`: Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
  * imei `string`: The device’s IMEI number. Validated on input.
  * manufacturer `string`: The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names).
  * meid `string`: The device’s MEID number.
  * model `string`: The device model's name. Matches the device's built-in value returned from `android.os.Build.MODEL`. Allowed values are listed in [models](/zero-touch/resources/manufacturer-names#model-names).
  * serialNumber `string`: The manufacturer's serial number for the device. This value might not be unique across different device models.

### DeviceMetadata
* DeviceMetadata `object`: Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
  * entries `object`: Metadata entries recorded as key-value pairs.

### DeviceReference
* DeviceReference `object`: A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
  * deviceId `string`: The ID of the device.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)

### DevicesLongRunningOperationMetadata
* DevicesLongRunningOperationMetadata `object`: Tracks the status of a long-running operation to asynchronously update a batch of reseller metadata attached to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
  * devicesCount `integer`: The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can't parse some of the updates.
  * processingStatus `string` (values: BATCH_PROCESS_STATUS_UNSPECIFIED, BATCH_PROCESS_PENDING, BATCH_PROCESS_IN_PROGRESS, BATCH_PROCESS_PROCESSED): The processing status of the operation.
  * progress `integer`: The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesnt always mean the operation completed—check for the inclusion of a `done` field.

### DevicesLongRunningOperationResponse
* DevicesLongRunningOperationResponse `object`: Tracks the status of a long-running operation to claim, unclaim, or attach metadata to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
  * perDeviceStatus `array`: The processing status for each device in the operation. One `PerDeviceStatus` per device. The list order matches the items in the original request.
    * items [OperationPerDevice](#operationperdevice)
  * successCount `integer`: A summary of how many items in the operation the server processed successfully. Updated as the operation progresses.

### Dpc
* Dpc `object`: An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.
  * dpcName `string`: Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application's user interface.
  * name `string`: Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`).
  * packageName `string`: Output only. The DPC's Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### FindDevicesByDeviceIdentifierRequest
* FindDevicesByDeviceIdentifierRequest `object`: Request to find devices.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * limit `string`: Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
  * pageToken `string`: A token specifying which result page to return.

### FindDevicesByDeviceIdentifierResponse
* FindDevicesByDeviceIdentifierResponse `object`: Response containing found devices.
  * devices `array`: Found devices.
    * items [Device](#device)
  * nextPageToken `string`: A token used to access the next page of results. Omitted if no further results are available.
  * totalSize `integer`: The total count of items in the list irrespective of pagination.

### FindDevicesByOwnerRequest
* FindDevicesByOwnerRequest `object`: Request to find devices by customers.
  * customerId `array`: Required. The list of customer IDs to search for.
    * items `string`
  * limit `string`: Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
  * pageToken `string`: A token specifying which result page to return.
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_SIM_LOCK, SECTION_TYPE_ZERO_TOUCH): Required. The section type of the device's provisioning record.

### FindDevicesByOwnerResponse
* FindDevicesByOwnerResponse `object`: Response containing found devices.
  * devices `array`: The customer's devices.
    * items [Device](#device)
  * nextPageToken `string`: A token used to access the next page of results. Omitted if no further results are available.
  * totalSize `integer`: The total count of items in the list irrespective of pagination.

### ListCustomersResponse
* ListCustomersResponse `object`: Response message of all customers related to this partner.
  * customers `array`: List of customers related to this reseller partner.
    * items [Company](#company)
  * nextPageToken `string`: A token to retrieve the next page of results. Omitted if no further results are available.
  * totalSize `integer`: The total count of items in the list irrespective of pagination.

### ListVendorCustomersResponse
* ListVendorCustomersResponse `object`: Response message to list customers of the vendor.
  * customers `array`: List of customers of the vendor.
    * items [Company](#company)
  * nextPageToken `string`: A token to retrieve the next page of results. Omitted if no further results are available.
  * totalSize `integer`: The total count of items in the list irrespective of pagination.

### ListVendorsResponse
* ListVendorsResponse `object`: Response message to list vendors of the partner.
  * nextPageToken `string`: A token to retrieve the next page of results. Omitted if no further results are available.
  * totalSize `integer`: The total count of items in the list irrespective of pagination.
  * vendors `array`: List of vendors of the reseller partner. Fields `name`, `companyId` and `companyName` are populated to the Company object.
    * items [Company](#company)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.

### OperationPerDevice
* OperationPerDevice `object`: A task for each device in the operation. Corresponds to each device change in the request.
  * claim [PartnerClaim](#partnerclaim)
  * result [PerDeviceStatusInBatch](#perdevicestatusinbatch)
  * unclaim [PartnerUnclaim](#partnerunclaim)
  * updateMetadata [UpdateMetadataArguments](#updatemetadataarguments)

### PartnerClaim
* PartnerClaim `object`: Identifies one claim request.
  * customerId `string`: Required. The ID of the customer for whom the device is being claimed.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * deviceMetadata [DeviceMetadata](#devicemetadata)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_SIM_LOCK, SECTION_TYPE_ZERO_TOUCH): Required. The section type of the device's provisioning record.

### PartnerUnclaim
* PartnerUnclaim `object`: Identifies one unclaim request.
  * deviceId `string`: Required. Device ID of the device.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_SIM_LOCK, SECTION_TYPE_ZERO_TOUCH): Required. The section type of the device's provisioning record.
  * vacationModeDays `integer`: Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)
  * vacationModeExpireTime `string`: Optional. The expiration time of the vacation unlock.

### PerDeviceStatusInBatch
* PerDeviceStatusInBatch `object`: Captures the processing status for each device in the operation.
  * deviceId `string`: If processing succeeds, the device ID of the device.
  * errorIdentifier `string`: If processing fails, the error type.
  * errorMessage `string`: If processing fails, a developer message explaining what went wrong.
  * status `string` (values: SINGLE_DEVICE_STATUS_UNSPECIFIED, SINGLE_DEVICE_STATUS_UNKNOWN_ERROR, SINGLE_DEVICE_STATUS_OTHER_ERROR, SINGLE_DEVICE_STATUS_SUCCESS, SINGLE_DEVICE_STATUS_PERMISSION_DENIED, SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER, SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE, SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS): The result status of the device after processing.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### UnclaimDeviceRequest
* UnclaimDeviceRequest `object`: Request message to unclaim a device.
  * deviceId `string`: Required. The device ID returned by `ClaimDevice`.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * sectionType `string` (values: SECTION_TYPE_UNSPECIFIED, SECTION_TYPE_SIM_LOCK, SECTION_TYPE_ZERO_TOUCH): Required. The section type of the device's provisioning record.
  * vacationModeDays `integer`: The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)
  * vacationModeExpireTime `string`: The expiration time of the vacation unlock.

### UnclaimDevicesRequest
* UnclaimDevicesRequest `object`: Request to unclaim devices asynchronously in batch.
  * unclaims `array`: Required. The list of devices to unclaim.
    * items [PartnerUnclaim](#partnerunclaim)

### UpdateDeviceMetadataInBatchRequest
* UpdateDeviceMetadataInBatchRequest `object`: Request to update device metadata in batch.
  * updates `array`: Required. The list of metadata updates.
    * items [UpdateMetadataArguments](#updatemetadataarguments)

### UpdateDeviceMetadataRequest
* UpdateDeviceMetadataRequest `object`: Request to set metadata for a device.
  * deviceMetadata [DeviceMetadata](#devicemetadata)

### UpdateMetadataArguments
* UpdateMetadataArguments `object`: Identifies metadata updates to one device.
  * deviceId `string`: Required. Device ID of the device.
  * deviceIdentifier [DeviceIdentifier](#deviceidentifier)
  * deviceMetadata [DeviceMetadata](#devicemetadata)


