# @datafire/google_cloudiot

Client library for Google Cloud IoT

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

google_cloudiot.projects.locations.registries.devices.delete({}).then(data => {
  console.log(data);
})
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

### projects.locations.registries.devices.delete
Deletes a device.


```js
google_cloudiot.projects.locations.registries.devices.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the device. For example,
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

### projects.locations.registries.devices.get
Gets details about a device.


```js
google_cloudiot.projects.locations.registries.devices.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the device. For example,
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

### projects.locations.registries.devices.patch
Updates a device.


```js
google_cloudiot.projects.locations.registries.devices.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Device](#device)
  * name **required** `string`: The resource path name. For example,
  * updateMask `string`: Only updates the `device` fields indicated by this mask.
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

### projects.locations.registries.devices.configVersions.list
Lists the last few versions of the device configuration in descending
order (i.e.: newest first).


```js
google_cloudiot.projects.locations.registries.devices.configVersions.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the device. For example,
  * numVersions `integer`: The number of versions to list. Versions are listed in decreasing order of
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
* output [ListDeviceConfigVersionsResponse](#listdeviceconfigversionsresponse)

### projects.locations.registries.devices.states.list
Lists the last few versions of the device state in descending order (i.e.:
newest first).


```js
google_cloudiot.projects.locations.registries.devices.states.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the device. For example,
  * numStates `integer`: The number of states to list. States are listed in descending order of
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
* output [ListDeviceStatesResponse](#listdevicestatesresponse)

### projects.locations.registries.devices.modifyCloudToDeviceConfig
Modifies the configuration for the device, which is eventually sent from
the Cloud IoT Core servers. Returns the modified configuration version and
its metadata.


```js
google_cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ModifyCloudToDeviceConfigRequest](#modifycloudtodeviceconfigrequest)
  * name **required** `string`: The name of the device. For example,
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
* output [DeviceConfig](#deviceconfig)

### projects.locations.registries.devices.list
List devices in a device registry.


```js
google_cloudiot.projects.locations.registries.devices.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * deviceIds `array`: A list of device string identifiers. If empty, it will ignore this field.
  * deviceNumIds `array`: A list of device numerical ids. If empty, it will ignore this field. This
  * fieldMask `string`: The fields of the `Device` resource to be returned in the response. The
  * pageSize `integer`: The maximum number of devices to return in the response. If this value
  * pageToken `string`: The value returned by the last `ListDevicesResponse`; indicates
  * parent **required** `string`: The device registry path. Required. For example,
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
* output [ListDevicesResponse](#listdevicesresponse)

### projects.locations.registries.devices.create
Creates a device in a device registry.


```js
google_cloudiot.projects.locations.registries.devices.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [Device](#device)
  * parent **required** `string`: The name of the device registry where this device should be created.
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

### projects.locations.registries.list
Lists device registries.


```js
google_cloudiot.projects.locations.registries.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of registries to return in the response. If this value
  * pageToken `string`: The value returned by the last `ListDeviceRegistriesResponse`; indicates
  * parent **required** `string`: The project and cloud region path. For example,
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
* output [ListDeviceRegistriesResponse](#listdeviceregistriesresponse)

### projects.locations.registries.create
Creates a device registry that contains devices.


```js
google_cloudiot.projects.locations.registries.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [DeviceRegistry](#deviceregistry)
  * parent **required** `string`: The project and cloud region where this device registry must be created.
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
* output [DeviceRegistry](#deviceregistry)

### projects.locations.registries.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_cloudiot.projects.locations.registries.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GetIamPolicyRequest](#getiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
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
* output [Policy](#policy)

### projects.locations.registries.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_cloudiot.projects.locations.registries.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
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
* output [Policy](#policy)

### projects.locations.registries.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.


```js
google_cloudiot.projects.locations.registries.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * exemptedMembers `array`
    * items `string`
  * service `string`: Specifies a service that will be enabled for audit logging.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### Device
* Device `object`: The device resource.
  * blocked `boolean`: If a device is blocked, connections or requests from this device will fail.
  * config [DeviceConfig](#deviceconfig)
  * credentials `array`: The credentials used to authenticate this device. To allow credential
    * items [DeviceCredential](#devicecredential)
  * id `string`: The user-defined device identifier. The device ID must be unique
  * lastConfigAckTime `string`: [Output only] The last time a cloud-to-device config version acknowledgment
  * lastConfigSendTime `string`: [Output only] The last time a cloud-to-device config version was sent to
  * lastErrorStatus [Status](#status)
  * lastErrorTime `string`: [Output only] The time the most recent error occurred, such as a failure to
  * lastEventTime `string`: [Output only] The last time a telemetry event was received. Timestamps are
  * lastHeartbeatTime `string`: [Output only] The last time a heartbeat was received. Timestamps are
  * lastStateTime `string`: [Output only] The last time a state event was received. Timestamps are
  * metadata `object`: The metadata key-value pairs assigned to the device. This metadata is not
  * name `string`: The resource path name. For example,
  * numId `string`: [Output only] A server-defined unique numeric ID for the device. This is a
  * state [DeviceState](#devicestate)

### DeviceConfig
* DeviceConfig `object`: The device configuration. Eventually delivered to devices.
  * binaryData `string`: The device configuration data.
  * cloudUpdateTime `string`: [Output only] The time at which this configuration version was updated in
  * deviceAckTime `string`: [Output only] The time at which Cloud IoT Core received the
  * version `string`: [Output only] The version of this update. The version number is assigned by

### DeviceCredential
* DeviceCredential `object`: A server-stored device credential used for authentication.
  * expirationTime `string`: [Optional] The time at which this credential becomes invalid. This
  * publicKey [PublicKeyCredential](#publickeycredential)

### DeviceRegistry
* DeviceRegistry `object`: A container for a group of devices.
  * credentials `array`: The credentials used to verify the device credentials. No more than 10
    * items [RegistryCredential](#registrycredential)
  * eventNotificationConfigs `array`: The configuration for notification of telemetry events received from the
    * items [EventNotificationConfig](#eventnotificationconfig)
  * httpConfig [HttpConfig](#httpconfig)
  * id `string`: The identifier of this device registry. For example, `myRegistry`.
  * mqttConfig [MqttConfig](#mqttconfig)
  * name `string`: The resource path name. For example,
  * stateNotificationConfig [StateNotificationConfig](#statenotificationconfig)

### DeviceState
* DeviceState `object`: The device state, as reported by the device.
  * binaryData `string`: The device state data.
  * updateTime `string`: [Output only] The time at which this state version was updated in Cloud

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### EventNotificationConfig
* EventNotificationConfig `object`: The configuration to forward telemetry events.
  * pubsubTopicName `string`: A Cloud Pub/Sub topic name. For example,

### Expr
* Expr `object`: Represents an expression text. Example:
  * description `string`: An optional description of the expression. This is a longer text which
  * expression `string`: Textual representation of an expression in
  * location `string`: An optional string indicating the location of the expression for error
  * title `string`: An optional title for the expression, i.e. a short string describing

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.

### HttpConfig
* HttpConfig `object`: The configuration of the HTTP bridge for a device registry.
  * httpEnabledState `string` (values: HTTP_STATE_UNSPECIFIED, HTTP_ENABLED, HTTP_DISABLED): If enabled, allows devices to use DeviceService via the HTTP protocol.

### ListDeviceConfigVersionsResponse
* ListDeviceConfigVersionsResponse `object`: Response for `ListDeviceConfigVersions`.
  * deviceConfigs `array`: The device configuration for the last few versions. Versions are listed
    * items [DeviceConfig](#deviceconfig)

### ListDeviceRegistriesResponse
* ListDeviceRegistriesResponse `object`: Response for `ListDeviceRegistries`.
  * deviceRegistries `array`: The registries that matched the query.
    * items [DeviceRegistry](#deviceregistry)
  * nextPageToken `string`: If not empty, indicates that there may be more registries that match the

### ListDeviceStatesResponse
* ListDeviceStatesResponse `object`: Response for `ListDeviceStates`.
  * deviceStates `array`: The last few device states. States are listed in descending order of server
    * items [DeviceState](#devicestate)

### ListDevicesResponse
* ListDevicesResponse `object`: Response for `ListDevices`.
  * devices `array`: The devices that match the request.
    * items [Device](#device)
  * nextPageToken `string`: If not empty, indicates that there may be more devices that match the

### ModifyCloudToDeviceConfigRequest
* ModifyCloudToDeviceConfigRequest `object`: Request for `ModifyCloudToDeviceConfig`.
  * binaryData `string`: The configuration data for the device.
  * versionToUpdate `string`: The version number to update. If this value is zero, it will not check the

### MqttConfig
* MqttConfig `object`: The configuration of MQTT for a device registry.
  * mqttEnabledState `string` (values: MQTT_STATE_UNSPECIFIED, MQTT_ENABLED, MQTT_DISABLED): If enabled, allows connections using the MQTT protocol. Otherwise, MQTT

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * iamOwned `boolean`
  * version `integer`: Version of the `Policy`. The default version is 0.

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

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only

### StateNotificationConfig
* StateNotificationConfig `object`: The configuration for notification of new states received from the device.
  * pubsubTopicName `string`: A Cloud Pub/Sub topic name. For example,

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### X509CertificateDetails
* X509CertificateDetails `object`: Details of an X.509 certificate. For informational purposes only.
  * expiryTime `string`: The time the certificate becomes invalid.
  * issuer `string`: The entity that signed the certificate.
  * publicKeyType `string`: The type of public key in the certificate.
  * signatureAlgorithm `string`: The algorithm used to sign the certificate.
  * startTime `string`: The time the certificate becomes valid.
  * subject `string`: The entity the certificate and public key belong to.


