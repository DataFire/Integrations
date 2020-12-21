# @datafire/google_cloudiot

Client library for Cloud IoT API

## Installation and Usage
```bash
npm install --save @datafire/google_cloudiot
```
```js
let google_cloudiot = require('@datafire/google_cloudiot').create({
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

Registers and manages IoT (Internet of Things) devices that connect to the Google Cloud Platform. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudiot.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudiot.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### cloudiot.projects.locations.registries.devices.delete
Deletes a device.


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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

### cloudiot.projects.locations.registries.devices.get
Gets details about a device.


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
  * fieldMask `string`: The fields of the `Device` resource to be returned in the response. If the field mask is unset or empty, all fields are returned.
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

### cloudiot.projects.locations.registries.devices.patch
Updates a device.


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
  * updateMask `string`: Required. Only updates the `device` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `credentials`, `blocked`, and `metadata`
  * body [Device](#device)
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

### cloudiot.projects.locations.registries.devices.configVersions.list
Lists the last few versions of the device configuration in descending order (i.e.: newest first).


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.configVersions.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
  * numVersions `integer`: The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
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
* output [ListDeviceConfigVersionsResponse](#listdeviceconfigversionsresponse)

### cloudiot.projects.locations.registries.devices.states.list
Lists the last few versions of the device state in descending order (i.e.: newest first).


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.states.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
  * numStates `integer`: The number of states to list. States are listed in descending order of update time. The maximum number of states retained is 10. If this value is zero, it will return all the states available.
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
* output [ListDeviceStatesResponse](#listdevicestatesresponse)

### cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
  * body [ModifyCloudToDeviceConfigRequest](#modifycloudtodeviceconfigrequest)
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
* output [DeviceConfig](#deviceconfig)

### cloudiot.projects.locations.registries.devices.sendCommandToDevice
Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.sendCommandToDevice({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
  * body [SendCommandToDeviceRequest](#sendcommandtodevicerequest)
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
* output [SendCommandToDeviceResponse](#sendcommandtodeviceresponse)

### cloudiot.projects.locations.registries.groups.devices.list
List devices in a device registry.


```js
google_cloudiot.cloudiot.projects.locations.registries.groups.devices.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The device registry path. Required. For example, `projects/my-project/locations/us-central1/registries/my-registry`.
  * deviceIds `array`: A list of device string IDs. For example, `['device0', 'device12']`. If empty, this field is ignored. Maximum IDs: 10,000
  * deviceNumIds `array`: A list of device numeric IDs. If empty, this field is ignored. Maximum IDs: 10,000.
  * fieldMask `string`: The fields of the `Device` resource to be returned in the response. The fields `id` and `num_id` are always returned, along with any other fields specified.
  * gatewayListOptions.associationsDeviceId `string`: If set, returns only the gateways with which the specified device is associated. The device ID can be numeric (`num_id`) or the user-defined string (`id`). For example, if `456` is specified, returns only the gateways to which the device with `num_id` 456 is bound.
  * gatewayListOptions.associationsGatewayId `string`: If set, only devices associated with the specified gateway are returned. The gateway ID can be numeric (`num_id`) or the user-defined string (`id`). For example, if `123` is specified, only devices bound to the gateway with `num_id` 123 are returned.
  * gatewayListOptions.gatewayType `string` (values: GATEWAY_TYPE_UNSPECIFIED, GATEWAY, NON_GATEWAY): If `GATEWAY` is specified, only gateways are returned. If `NON_GATEWAY` is specified, only non-gateway devices are returned. If `GATEWAY_TYPE_UNSPECIFIED` is specified, all devices are returned.
  * pageSize `integer`: The maximum number of devices to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
  * pageToken `string`: The value returned by the last `ListDevicesResponse`; indicates that this is a continuation of a prior `ListDevices` call and the system should return the next page of data.
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
* output [ListDevicesResponse](#listdevicesresponse)

### cloudiot.projects.locations.registries.devices.create
Creates a device in a device registry.


```js
google_cloudiot.cloudiot.projects.locations.registries.devices.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the device registry where this device should be created. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
  * body [Device](#device)
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

### cloudiot.projects.locations.registries.list
Lists device registries.


```js
google_cloudiot.cloudiot.projects.locations.registries.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project and cloud region path. For example, `projects/example-project/locations/us-central1`.
  * pageSize `integer`: The maximum number of registries to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
  * pageToken `string`: The value returned by the last `ListDeviceRegistriesResponse`; indicates that this is a continuation of a prior `ListDeviceRegistries` call and the system should return the next page of data.
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
* output [ListDeviceRegistriesResponse](#listdeviceregistriesresponse)

### cloudiot.projects.locations.registries.create
Creates a device registry that contains devices.


```js
google_cloudiot.cloudiot.projects.locations.registries.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project and cloud region where this device registry must be created. For example, `projects/example-project/locations/us-central1`.
  * body [DeviceRegistry](#deviceregistry)
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
* output [DeviceRegistry](#deviceregistry)

### cloudiot.projects.locations.registries.bindDeviceToGateway
Associates the device with the gateway.


```js
google_cloudiot.cloudiot.projects.locations.registries.bindDeviceToGateway({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
  * body [BindDeviceToGatewayRequest](#binddevicetogatewayrequest)
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
* output [BindDeviceToGatewayResponse](#binddevicetogatewayresponse)

### cloudiot.projects.locations.registries.unbindDeviceFromGateway
Deletes the association between the device and the gateway.


```js
google_cloudiot.cloudiot.projects.locations.registries.unbindDeviceFromGateway({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
  * body [UnbindDeviceFromGatewayRequest](#unbinddevicefromgatewayrequest)
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
* output [UnbindDeviceFromGatewayResponse](#unbinddevicefromgatewayresponse)

### cloudiot.projects.locations.registries.groups.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_cloudiot.cloudiot.projects.locations.registries.groups.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
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
* output [Policy](#policy)

### cloudiot.projects.locations.registries.groups.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_cloudiot.cloudiot.projects.locations.registries.groups.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
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
* output [Policy](#policy)

### cloudiot.projects.locations.registries.groups.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.


```js
google_cloudiot.cloudiot.projects.locations.registries.groups.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### BindDeviceToGatewayRequest
* BindDeviceToGatewayRequest `object`: Request for `BindDeviceToGateway`.
  * deviceId `string`: Required. The device to associate with the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.
  * gatewayId `string`: Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.

### BindDeviceToGatewayResponse
* BindDeviceToGatewayResponse `object`: Response for `BindDeviceToGateway`.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### Device
* Device `object`: The device resource.
  * blocked `boolean`: If a device is blocked, connections or requests from this device will fail. Can be used to temporarily prevent the device from connecting if, for example, the sensor is generating bad data and needs maintenance.
  * config [DeviceConfig](#deviceconfig)
  * credentials `array`: The credentials used to authenticate this device. To allow credential rotation without interruption, multiple device credentials can be bound to this device. No more than 3 credentials can be bound to a single device at a time. When new credentials are added to a device, they are verified against the registry credentials. For details, see the description of the `DeviceRegistry.credentials` field.
    * items [DeviceCredential](#devicecredential)
  * gatewayConfig [GatewayConfig](#gatewayconfig)
  * id `string`: The user-defined device identifier. The device ID must be unique within a device registry.
  * lastConfigAckTime `string`: [Output only] The last time a cloud-to-device config version acknowledgment was received from the device. This field is only for configurations sent through MQTT.
  * lastConfigSendTime `string`: [Output only] The last time a cloud-to-device config version was sent to the device.
  * lastErrorStatus [Status](#status)
  * lastErrorTime `string`: [Output only] The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub. This field is the timestamp of 'last_error_status'.
  * lastEventTime `string`: [Output only] The last time a telemetry event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
  * lastHeartbeatTime `string`: [Output only] The last time an MQTT `PINGREQ` was received. This field applies only to devices connecting through MQTT. MQTT clients usually only send `PINGREQ` messages if the connection is idle, and no other messages have been sent. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
  * lastStateTime `string`: [Output only] The last time a state event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
  * logLevel `string` (values: LOG_LEVEL_UNSPECIFIED, NONE, ERROR, INFO, DEBUG): **Beta Feature** The logging verbosity for device activity. If unspecified, DeviceRegistry.log_level will be used.
  * metadata `object`: The metadata key-value pairs assigned to the device. This metadata is not interpreted or indexed by Cloud IoT Core. It can be used to add contextual information for the device. Keys must conform to the regular expression a-zA-Z+ and be less than 128 bytes in length. Values are free-form strings. Each value must be less than or equal to 32 KB in size. The total size of all keys and values must be less than 256 KB, and the maximum number of key-value pairs is 500.
  * name `string`: The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
  * numId `string`: [Output only] A server-defined unique numeric ID for the device. This is a more compact way to identify devices, and it is globally unique.
  * state [DeviceState](#devicestate)

### DeviceConfig
* DeviceConfig `object`: The device configuration. Eventually delivered to devices.
  * binaryData `string`: The device configuration data.
  * cloudUpdateTime `string`: [Output only] The time at which this configuration version was updated in Cloud IoT Core. This timestamp is set by the server.
  * deviceAckTime `string`: [Output only] The time at which Cloud IoT Core received the acknowledgment from the device, indicating that the device has received this configuration version. If this field is not present, the device has not yet acknowledged that it received this version. Note that when the config was sent to the device, many config versions may have been available in Cloud IoT Core while the device was disconnected, and on connection, only the latest version is sent to the device. Some versions may never be sent to the device, and therefore are never acknowledged. This timestamp is set by Cloud IoT Core.
  * version `string`: [Output only] The version of this update. The version number is assigned by the server, and is always greater than 0 after device creation. The version must be 0 on the `CreateDevice` request if a `config` is specified; the response of `CreateDevice` will always have a value of 1.

### DeviceCredential
* DeviceCredential `object`: A server-stored device credential used for authentication.
  * expirationTime `string`: [Optional] The time at which this credential becomes invalid. This credential will be ignored for new client authentication requests after this timestamp; however, it will not be automatically deleted.
  * publicKey [PublicKeyCredential](#publickeycredential)

### DeviceRegistry
* DeviceRegistry `object`: A container for a group of devices.
  * credentials `array`: The credentials used to verify the device credentials. No more than 10 credentials can be bound to a single registry at a time. The verification process occurs at the time of device creation or update. If this field is empty, no verification is performed. Otherwise, the credentials of a newly created device or added credentials of an updated device should be signed with one of these registry credentials. Note, however, that existing devices will never be affected by modifications to this list of credentials: after a device has been successfully created in a registry, it should be able to connect even if its registry credentials are revoked, deleted, or modified.
    * items [RegistryCredential](#registrycredential)
  * eventNotificationConfigs `array`: The configuration for notification of telemetry events received from the device. All telemetry events that were successfully published by the device and acknowledged by Cloud IoT Core are guaranteed to be delivered to Cloud Pub/Sub. If multiple configurations match a message, only the first matching configuration is used. If you try to publish a device telemetry event using MQTT without specifying a Cloud Pub/Sub topic for the device's registry, the connection closes automatically. If you try to do so using an HTTP connection, an error is returned. Up to 10 configurations may be provided.
    * items [EventNotificationConfig](#eventnotificationconfig)
  * httpConfig [HttpConfig](#httpconfig)
  * id `string`: The identifier of this device registry. For example, `myRegistry`.
  * logLevel `string` (values: LOG_LEVEL_UNSPECIFIED, NONE, ERROR, INFO, DEBUG): **Beta Feature** The default logging verbosity for activity from devices in this registry. The verbosity level can be overridden by Device.log_level.
  * mqttConfig [MqttConfig](#mqttconfig)
  * name `string`: The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
  * stateNotificationConfig [StateNotificationConfig](#statenotificationconfig)

### DeviceState
* DeviceState `object`: The device state, as reported by the device.
  * binaryData `string`: The device state data.
  * updateTime `string`: [Output only] The time at which this state version was updated in Cloud IoT Core.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### EventNotificationConfig
* EventNotificationConfig `object`: The configuration for forwarding telemetry events.
  * pubsubTopicName `string`: A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.
  * subfolderMatches `string`: If the subfolder name matches this string exactly, this configuration will be used. The string must not include the leading '/' character. If empty, all strings are matched. This field is used only for telemetry events; subfolders are not supported for state changes.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### GatewayConfig
* GatewayConfig `object`: Gateway-related configuration and state.
  * gatewayAuthMethod `string` (values: GATEWAY_AUTH_METHOD_UNSPECIFIED, ASSOCIATION_ONLY, DEVICE_AUTH_TOKEN_ONLY, ASSOCIATION_AND_DEVICE_AUTH_TOKEN): Indicates how to authorize and/or authenticate devices to access the gateway.
  * gatewayType `string` (values: GATEWAY_TYPE_UNSPECIFIED, GATEWAY, NON_GATEWAY): Indicates whether the device is a gateway.
  * lastAccessedGatewayId `string`: [Output only] The ID of the gateway the device accessed most recently.
  * lastAccessedGatewayTime `string`: [Output only] The most recent time at which the device accessed the gateway specified in `last_accessed_gateway`.

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.
  * options [GetPolicyOptions](#getpolicyoptions)

### GetPolicyOptions
* GetPolicyOptions `object`: Encapsulates settings provided to GetIamPolicy.
  * requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### HttpConfig
* HttpConfig `object`: The configuration of the HTTP bridge for a device registry.
  * httpEnabledState `string` (values: HTTP_STATE_UNSPECIFIED, HTTP_ENABLED, HTTP_DISABLED): If enabled, allows devices to use DeviceService via the HTTP protocol. Otherwise, any requests to DeviceService will fail for this registry.

### ListDeviceConfigVersionsResponse
* ListDeviceConfigVersionsResponse `object`: Response for `ListDeviceConfigVersions`.
  * deviceConfigs `array`: The device configuration for the last few versions. Versions are listed in decreasing order, starting from the most recent one.
    * items [DeviceConfig](#deviceconfig)

### ListDeviceRegistriesResponse
* ListDeviceRegistriesResponse `object`: Response for `ListDeviceRegistries`.
  * deviceRegistries `array`: The registries that matched the query.
    * items [DeviceRegistry](#deviceregistry)
  * nextPageToken `string`: If not empty, indicates that there may be more registries that match the request; this value should be passed in a new `ListDeviceRegistriesRequest`.

### ListDeviceStatesResponse
* ListDeviceStatesResponse `object`: Response for `ListDeviceStates`.
  * deviceStates `array`: The last few device states. States are listed in descending order of server update time, starting from the most recent one.
    * items [DeviceState](#devicestate)

### ListDevicesResponse
* ListDevicesResponse `object`: Response for `ListDevices`.
  * devices `array`: The devices that match the request.
    * items [Device](#device)
  * nextPageToken `string`: If not empty, indicates that there may be more devices that match the request; this value should be passed in a new `ListDevicesRequest`.

### ModifyCloudToDeviceConfigRequest
* ModifyCloudToDeviceConfigRequest `object`: Request for `ModifyCloudToDeviceConfig`.
  * binaryData `string`: Required. The configuration data for the device.
  * versionToUpdate `string`: The version number to update. If this value is zero, it will not check the version number of the server and will always update the current version; otherwise, this update will fail if the version number found on the server does not match this version number. This is used to support multiple simultaneous updates without losing data.

### MqttConfig
* MqttConfig `object`: The configuration of MQTT for a device registry.
  * mqttEnabledState `string` (values: MQTT_STATE_UNSPECIFIED, MQTT_ENABLED, MQTT_DISABLED): If enabled, allows connections using the MQTT protocol. Otherwise, MQTT connections to this registry will fail.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### PublicKeyCertificate
* PublicKeyCertificate `object`: A public key certificate format and data.
  * certificate `string`: The certificate data.
  * format `string` (values: UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT, X509_CERTIFICATE_PEM): The certificate format.
  * x509Details [X509CertificateDetails](#x509certificatedetails)

### PublicKeyCredential
* PublicKeyCredential `object`: A public key format and data.
  * format `string` (values: UNSPECIFIED_PUBLIC_KEY_FORMAT, RSA_PEM, RSA_X509_PEM, ES256_PEM, ES256_X509_PEM): The format of the key.
  * key `string`: The key data.

### RegistryCredential
* RegistryCredential `object`: A server-stored registry credential used to validate device credentials.
  * publicKeyCertificate [PublicKeyCertificate](#publickeycertificate)

### SendCommandToDeviceRequest
* SendCommandToDeviceRequest `object`: Request for `SendCommandToDevice`.
  * binaryData `string`: Required. The command data to send to the device.
  * subfolder `string`: Optional subfolder for the command. If empty, the command will be delivered to the /devices/{device-id}/commands topic, otherwise it will be delivered to the /devices/{device-id}/commands/{subfolder} topic. Multi-level subfolders are allowed. This field must not have more than 256 characters, and must not contain any MQTT wildcards ("+" or "#") or null characters.

### SendCommandToDeviceResponse
* SendCommandToDeviceResponse `object`: Response for `SendCommandToDevice`.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### StateNotificationConfig
* StateNotificationConfig `object`: The configuration for notification of new states received from the device.
  * pubsubTopicName `string`: A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### UnbindDeviceFromGatewayRequest
* UnbindDeviceFromGatewayRequest `object`: Request for `UnbindDeviceFromGateway`.
  * deviceId `string`: Required. The device to disassociate from the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.
  * gatewayId `string`: Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.

### UnbindDeviceFromGatewayResponse
* UnbindDeviceFromGatewayResponse `object`: Response for `UnbindDeviceFromGateway`.

### X509CertificateDetails
* X509CertificateDetails `object`: Details of an X.509 certificate. For informational purposes only.
  * expiryTime `string`: The time the certificate becomes invalid.
  * issuer `string`: The entity that signed the certificate.
  * publicKeyType `string`: The type of public key in the certificate.
  * signatureAlgorithm `string`: The algorithm used to sign the certificate.
  * startTime `string`: The time the certificate becomes valid.
  * subject `string`: The entity the certificate and public key belong to.


