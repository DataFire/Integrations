# @datafire/google_sasportal

Client library for SAS Portal API

## Installation and Usage
```bash
npm install --save @datafire/google_sasportal
```
```js
let google_sasportal = require('@datafire/google_sasportal').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_sasportal.oauthCallback({
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
google_sasportal.oauthRefresh(null, context)
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

### sasportal.customers.list
Returns a list of requested customers.


```js
google_sasportal.sasportal.customers.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of customers to return in the response.
  * pageToken `string`: A pagination token returned from a previous call to ListCustomers method that indicates where this listing should continue from.
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
* output [SasPortalListCustomersResponse](#sasportallistcustomersresponse)

### sasportal.installer.generateSecret
Generates a secret to be used with the ValidateInstaller method


```js
google_sasportal.sasportal.installer.generateSecret({}, context)
```

#### Input
* input `object`
  * body [SasPortalGenerateSecretRequest](#sasportalgeneratesecretrequest)
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
* output [SasPortalGenerateSecretResponse](#sasportalgeneratesecretresponse)

### sasportal.installer.validate
Validates the identity of a Certified Professional Installer (CPI).


```js
google_sasportal.sasportal.installer.validate({}, context)
```

#### Input
* input `object`
  * body [SasPortalValidateInstallerRequest](#sasportalvalidateinstallerrequest)
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
* output [SasPortalValidateInstallerResponse](#sasportalvalidateinstallerresponse)

### sasportal.policies.get
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_sasportal.sasportal.policies.get({}, context)
```

#### Input
* input `object`
  * body [SasPortalGetPolicyRequest](#sasportalgetpolicyrequest)
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
* output [SasPortalPolicy](#sasportalpolicy)

### sasportal.policies.set
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_sasportal.sasportal.policies.set({}, context)
```

#### Input
* input `object`
  * body [SasPortalSetPolicyRequest](#sasportalsetpolicyrequest)
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
* output [SasPortalPolicy](#sasportalpolicy)

### sasportal.policies.test
Returns permissions that a caller has on the specified resource.


```js
google_sasportal.sasportal.policies.test({}, context)
```

#### Input
* input `object`
  * body [SasPortalTestPermissionsRequest](#sasportaltestpermissionsrequest)
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
* output [SasPortalTestPermissionsResponse](#sasportaltestpermissionsresponse)

### sasportal.nodes.nodes.delete
Deletes a node.


```js
google_sasportal.sasportal.nodes.nodes.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the node.
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
* output [SasPortalEmpty](#sasportalempty)

### sasportal.nodes.nodes.get
Returns a requested node.


```js
google_sasportal.sasportal.nodes.nodes.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the node.
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
* output [SasPortalNode](#sasportalnode)

### sasportal.nodes.nodes.patch
Updates an existing node.


```js
google_sasportal.sasportal.nodes.nodes.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. Resource name.
  * updateMask `string`: Fields to be updated.
  * body [SasPortalNode](#sasportalnode)
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
* output [SasPortalNode](#sasportalnode)

### sasportal.nodes.nodes.move
Moves a node under another node or customer.


```js
google_sasportal.sasportal.nodes.nodes.move({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the node to move.
  * body [SasPortalMoveNodeRequest](#sasportalmovenoderequest)
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
* output [SasPortalOperation](#sasportaloperation)

### sasportal.nodes.devices.signDevice
Signs a device.


```js
google_sasportal.sasportal.nodes.devices.signDevice({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The resource path name.
  * body [SasPortalSignDeviceRequest](#sasportalsigndevicerequest)
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
* output [SasPortalEmpty](#sasportalempty)

### sasportal.nodes.devices.updateSigned
Updates a signed device.


```js
google_sasportal.sasportal.nodes.devices.updateSigned({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the device to update.
  * body [SasPortalUpdateSignedDeviceRequest](#sasportalupdatesigneddevicerequest)
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
* output [SasPortalDevice](#sasportaldevice)

### sasportal.nodes.nodes.devices.list
Lists devices under a node or customer.


```js
google_sasportal.sasportal.nodes.nodes.devices.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent resource.
  * filter `string`: The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial_number of the device. The filter is case insensitive.
  * pageSize `integer`: The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
  * pageToken `string`: A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
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
* output [SasPortalListDevicesResponse](#sasportallistdevicesresponse)

### sasportal.nodes.nodes.devices.create
Creates a device under a node or customer.


```js
google_sasportal.sasportal.nodes.nodes.devices.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent resource.
  * body [SasPortalDevice](#sasportaldevice)
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
* output [SasPortalDevice](#sasportaldevice)

### sasportal.nodes.nodes.devices.bulk
Creates a device under a node or customer. Returned devices are unordered.


```js
google_sasportal.sasportal.nodes.nodes.devices.bulk({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent resource.
  * body [SasPortalBulkCreateDeviceRequest](#sasportalbulkcreatedevicerequest)
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
* output [SasPortalBulkCreateDeviceResponse](#sasportalbulkcreatedeviceresponse)

### sasportal.nodes.nodes.devices.createSigned
Creates a signed device under a node or customer.


```js
google_sasportal.sasportal.nodes.nodes.devices.createSigned({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent resource.
  * body [SasPortalCreateSignedDeviceRequest](#sasportalcreatesigneddevicerequest)
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
* output [SasPortalDevice](#sasportaldevice)

### sasportal.nodes.nodes.nodes.list
Lists nodes.


```js
google_sasportal.sasportal.nodes.nodes.nodes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, for example, "nodes/1".
  * pageSize `integer`: The maximum number of nodes to return in the response.
  * pageToken `string`: A pagination token returned from a previous call to ListNodes method that indicates where this listing should continue from.
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
* output [SasPortalListNodesResponse](#sasportallistnodesresponse)

### sasportal.nodes.nodes.nodes.create
Creates a new node.


```js
google_sasportal.sasportal.nodes.nodes.nodes.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name where the node is to be created.
  * body [SasPortalNode](#sasportalnode)
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
* output [SasPortalNode](#sasportalnode)



## Definitions

### SasPortalAssignment
* SasPortalAssignment `object`: Associates `members` with a `role`.
  * members `array`: The identities the role is assigned to. It can have the following values: * `{user_email}`: An email address that represents a specific Google account. For example: `alice@gmail.com`. * `{group_email}`: An email address that represents a Google group. For example, `viewers@gmail.com`.
    * items `string`
  * role `string`: Required. Role that is assigned to `members`.

### SasPortalBulkCreateDeviceRequest
* SasPortalBulkCreateDeviceRequest `object`: Request for BulkCreateDevice method.
  * csv `string`: Required. A csv with each row representing a [device]. Each row must conform to the regulations described on CreateDeviceRequest's device field.

### SasPortalBulkCreateDeviceResponse
* SasPortalBulkCreateDeviceResponse `object`: Response for BulkCreateDevice method.
  * devices `array`: Required. The devices that were imported.
    * items [SasPortalDevice](#sasportaldevice)

### SasPortalCreateSignedDeviceRequest
* SasPortalCreateSignedDeviceRequest `object`: Request for CreateSignedDevice method.
  * encodedDevice `string`: Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the [Device]. The user_id field must be set.
  * installerId `string`: Required. Unique installer id (cpiId) from the Certified Professional Installers database.

### SasPortalCustomer
* SasPortalCustomer `object`: Entity representing a SAS customer.
  * displayName `string`: Required. Name of the organization that the customer entity represents.
  * name `string`: Output only. Resource name of the customer.
  * sasUserIds `array`: User IDs used by the devices belonging to this customer.
    * items `string`

### SasPortalDevice
* SasPortalDevice `object`
  * activeConfig [SasPortalDeviceConfig](#sasportaldeviceconfig)
  * deviceMetadata [SasPortalDeviceMetadata](#sasportaldevicemetadata)
  * displayName `string`: Device display name.
  * fccId `string`: The FCC identifier of the device.
  * grants `array`: Output only. Grants held by the device.
    * items [SasPortalDeviceGrant](#sasportaldevicegrant)
  * name `string`: Output only. The resource path name.
  * preloadedConfig [SasPortalDeviceConfig](#sasportaldeviceconfig)
  * serialNumber `string`: A serial number assigned to the device by the device manufacturer.
  * state `string` (values: DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED): Output only. Device state.

### SasPortalDeviceAirInterface
* SasPortalDeviceAirInterface `object`: Information about the device's air interface.
  * radioTechnology `string` (values: RADIO_TECHNOLOGY_UNSPECIFIED, E_UTRA, CAMBIUM_NETWORKS, FOUR_G_BBW_SAA_1, NR, DOODLE_CBRS, CW, REDLINE, TARANA_WIRELESS): This field specifies the radio access technology that is used for the CBSD. Conditional
  * supportedSpec `string`: This field is related to the radioTechnology field and provides the air interface specification that the CBSD is compliant with at the time of registration. Optional

### SasPortalDeviceConfig
* SasPortalDeviceConfig `object`: Information about the device configuration.
  * airInterface [SasPortalDeviceAirInterface](#sasportaldeviceairinterface)
  * callSign `string`: The call sign of the device operator.
  * category `string` (values: DEVICE_CATEGORY_UNSPECIFIED, DEVICE_CATEGORY_A, DEVICE_CATEGORY_B): FCC category of the device.
  * installationParams [SasPortalInstallationParams](#sasportalinstallationparams)
  * isSigned `boolean`: Output-only. Whether the configuration has been signed by a CPI.
  * measurementCapabilities `array`: Measurement reporting capabilities of the device.
    * items `string` (values: MEASUREMENT_CAPABILITY_UNSPECIFIED, MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT, MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT)
  * model [SasPortalDeviceModel](#sasportaldevicemodel)
  * state `string` (values: DEVICE_CONFIG_STATE_UNSPECIFIED, DRAFT, FINAL): State of the configuration.
  * updateTime `string`: Output-only. The last time the device configuration was edited.
  * userId `string`: The identifier of a device user.

### SasPortalDeviceGrant
* SasPortalDeviceGrant `object`: Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
  * channelType `string` (values: CHANNEL_TYPE_UNSPECIFIED, CHANNEL_TYPE_GAA, CHANNEL_TYPE_PAL): Type of channel used.
  * expireTime `string`: The expiration time of the grant.
  * frequencyRange [SasPortalFrequencyRange](#sasportalfrequencyrange)
  * grantId `string`: Grant Id.
  * maxEirp `number`: Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of maxEirp represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3).
  * moveList `array`: The DPA move lists on which this grant appears.
    * items [SasPortalDpaMoveList](#sasportaldpamovelist)
  * state `string` (values: GRANT_STATE_UNSPECIFIED, GRANT_STATE_GRANTED, GRANT_STATE_TERMINATED, GRANT_STATE_SUSPENDED, GRANT_STATE_AUTHORIZED, GRANT_STATE_EXPIRED): State of the grant.
  * suspensionReason `array`: If the grant is suspended, the reason(s) for suspension.
    * items `string`

### SasPortalDeviceMetadata
* SasPortalDeviceMetadata `object`: Device data overridable by both SAS Portal and registration requests.

### SasPortalDeviceModel
* SasPortalDeviceModel `object`: Information about the model of the device.
  * firmwareVersion `string`: The firmware version of the device.
  * hardwareVersion `string`: The hardware version of the device.
  * name `string`: The name of the device model.
  * softwareVersion `string`: The software version of the device.
  * vendor `string`: The name of the device vendor.

### SasPortalDpaMoveList
* SasPortalDpaMoveList `object`: An entry in a DPA's move list.
  * dpaId `string`: The ID of the DPA.
  * frequencyRange [SasPortalFrequencyRange](#sasportalfrequencyrange)

### SasPortalEmpty
* SasPortalEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### SasPortalFrequencyRange
* SasPortalFrequencyRange `object`: Frequency range from `low_frequency` to `high_frequency`.
  * highFrequencyMhz `number`: The highest frequency of the frequency range in MHz.
  * lowFrequencyMhz `number`: The lowest frequency of the frequency range in MHz.

### SasPortalGenerateSecretRequest
* SasPortalGenerateSecretRequest `object`: Request for GenerateSecret method] [spectrum.sas.portal.v1alpha1.DeviceManager.GenerateSecret].

### SasPortalGenerateSecretResponse
* SasPortalGenerateSecretResponse `object`: Response for GenerateSecret method.
  * secret `string`: The secret generated by the string and used by [ValidateInstaller] method.

### SasPortalGetPolicyRequest
* SasPortalGetPolicyRequest `object`: Request message for `GetPolicy` method.
  * resource `string`: Required. The resource for which the policy is being requested.

### SasPortalInstallationParams
* SasPortalInstallationParams `object`: Information about the device installation parameters.
  * antennaAzimuth `integer`: Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices.
  * antennaBeamwidth `integer`: 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices.
  * antennaDowntilt `integer`: Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices.
  * antennaGain `integer`: Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive.
  * antennaModel `string`: If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets.
  * cpeCbsdIndication `boolean`: If present, this parameter specifies whether the CBSD is a CPE-CBSD or not.
  * eirpCapability `integer`: This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category.
  * height `number`: Device antenna height in meters. When the heightType parameter value is "AGL", the antenna height should be given relative to ground level. When the heightType parameter value is "AMSL", it is given with respect to WGS84 datum.
  * heightType `string` (values: HEIGHT_TYPE_UNSPECIFIED, HEIGHT_TYPE_AGL, HEIGHT_TYPE_AMSL): Specifies how the height is measured.
  * horizontalAccuracy `number`: A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters.
  * indoorDeployment `boolean`: Whether the device antenna is indoor or not. True: indoor. False: outdoor.
  * latitude `number`: Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator.
  * longitude `number`: Longitude of the device antenna location. in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian.
  * verticalAccuracy `number`: A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters.

### SasPortalListCustomersResponse
* SasPortalListCustomersResponse `object`: Response for `ListCustomers`.
  * customers `array`: The list of customers that match the request.
    * items [SasPortalCustomer](#sasportalcustomer)
  * nextPageToken `string`: A pagination token returned from a previous call to ListCustomers method that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers.

### SasPortalListDevicesResponse
* SasPortalListDevicesResponse `object`: Response for ListDevices method.
  * devices `array`: The devices that match the request.
    * items [SasPortalDevice](#sasportaldevice)
  * nextPageToken `string`: A pagination token returned from a previous call to ListDevices method that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices.

### SasPortalListNodesResponse
* SasPortalListNodesResponse `object`: Response for ListNodes method.
  * nextPageToken `string`: A pagination token returned from a previous call to ListNodes method that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.
  * nodes `array`: The nodes that match the request.
    * items [SasPortalNode](#sasportalnode)

### SasPortalMoveDeploymentRequest
* SasPortalMoveDeploymentRequest `object`: Request for MoveDeployment method.
  * destination `string`: Required. The name of the new parent resource Node or Customer to reparent the deployment under.

### SasPortalMoveDeviceRequest
* SasPortalMoveDeviceRequest `object`: Request for MoveDevice method.
  * destination `string`: Required. The name of the new parent resource (Node or Customer) to reparent the device under.

### SasPortalMoveNodeRequest
* SasPortalMoveNodeRequest `object`: Request for MoveNode method.
  * destination `string`: Required. The name of the new parent resource node or Customer) to reparent the node under.

### SasPortalNode
* SasPortalNode `object`: The Node.
  * displayName `string`: The node's display name.
  * name `string`: Output only. Resource name.
  * sasUserIds `array`: User ids used by the devices belonging to this node.
    * items `string`

### SasPortalOperation
* SasPortalOperation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [SasPortalStatus](#sasportalstatus)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### SasPortalPolicy
* SasPortalPolicy `object`: Defines an access control policy to the resources.
  * assignments `array`
    * items [SasPortalAssignment](#sasportalassignment)
  * etag `string`: The [etag] is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the [etag] in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An [etag] is returned in the response to [GetPolicy], and systems are expected to put that etag in the request to [SetPolicy] to ensure that their change will be applied to the same version of the policy. If no [etag] is provided in the call to [SetPolicy], then the existing policy is overwritten blindly.

### SasPortalSetPolicyRequest
* SasPortalSetPolicyRequest `object`: Request message for `SetPolicy` method.
  * policy [SasPortalPolicy](#sasportalpolicy)
  * resource `string`: Required. The resource for which the policy is being specified. This policy replaces any existing policy.

### SasPortalSignDeviceRequest
* SasPortalSignDeviceRequest `object`: Request for SignDevice method.
  * device [SasPortalDevice](#sasportaldevice)

### SasPortalStatus
* SasPortalStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### SasPortalTestPermissionsRequest
* SasPortalTestPermissionsRequest `object`: Request message for `TestPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`.
    * items `string`
  * resource `string`: Required. The resource for which the permissions are being requested.

### SasPortalTestPermissionsResponse
* SasPortalTestPermissionsResponse `object`: Response message for `TestPermissions` method.
  * permissions `array`: A set of permissions that the caller is allowed.
    * items `string`

### SasPortalUpdateSignedDeviceRequest
* SasPortalUpdateSignedDeviceRequest `object`: Request for UpdateSignedDevice method.
  * encodedDevice `string`: Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.
  * installerId `string`: Required. Unique installer ID (CPI ID) from the Certified Professional Installers database.

### SasPortalValidateInstallerRequest
* SasPortalValidateInstallerRequest `object`: Request for ValidateInstaller method.
  * encodedSecret `string`: Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret.
  * installerId `string`: Required. Unique installer id (cpiId) from the Certified Professional Installers database.
  * secret `string`: Required. Secret returned by the GenerateSecret method.

### SasPortalValidateInstallerResponse
* SasPortalValidateInstallerResponse `object`: Response for ValidateInstaller method] [spectrum.sas.portal.v1alpha1.DeviceManager.ValidateInstaller].


