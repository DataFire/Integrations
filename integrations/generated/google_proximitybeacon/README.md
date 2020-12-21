# @datafire/google_proximitybeacon

Client library for Proximity Beacon API

## Installation and Usage
```bash
npm install --save @datafire/google_proximitybeacon
```
```js
let google_proximitybeacon = require('@datafire/google_proximitybeacon').create({
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

Registers, manages, indexes, and searches beacons.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_proximitybeacon.oauthCallback({
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
google_proximitybeacon.oauthRefresh(null, context)
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

### proximitybeacon.beaconinfo.getforobserved
Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key) for the application.


```js
google_proximitybeacon.proximitybeacon.beaconinfo.getforobserved({}, context)
```

#### Input
* input `object`
  * body [GetInfoForObservedBeaconsRequest](#getinfoforobservedbeaconsrequest)
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
* output [GetInfoForObservedBeaconsResponse](#getinfoforobservedbeaconsresponse)

### proximitybeacon.beacons.list
Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of records to return for this request, up to a server-defined upper limit.
  * pageToken `string`: A pagination token obtained from a previous request to list beacons.
  * projectId `string`: The project id to list beacons under. If not present then the project credential that made the request is used as the project. Optional.
  * q `string`: Filter query string that supports the following field filters: * **description:`""`** For example: **description:"Room 3"** Returns beacons whose description matches tokens in the string "Room 3" (not necessarily that exact string). The string must be double-quoted. * **status:``** For example: **status:active** Returns beacons whose status matches the given value. Values must be one of the Beacon.Status enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * **stability:``** For example: **stability:mobile** Returns beacons whose expected stability matches the given value. Values must be one of the Beacon.Stability enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * **place\_id:`""`** For example: **place\_id:"ChIJVSZzVR8FdkgRXGmmm6SslKw="** Returns beacons explicitly registered at the given place, expressed as a Place ID obtained from [Google Places API](/places/place-id). Does not match places inside the given place. Does not consider the beacon's actual location (which may be different from its registered place). Accepts multiple filters that will be combined with OR logic. The place ID must be double-quoted. * **registration\_time`[<|>|<=|>=]`** For example: **registration\_time>=1433116800** Returns beacons whose registration time matches the given filter. Supports the operators: <, >, <=, and >=. Timestamp must be expressed as an integer number of seconds since midnight January 1, 1970 UTC. Accepts at most two filters that will be combined with AND logic, to support "between" semantics. If more than two are supplied, the latter ones are ignored. * **lat:` lng: radius:`** For example: **lat:51.1232343 lng:-1.093852 radius:1000** Returns beacons whose registered location is within the given circle. When any of these fields are given, all are required. Latitude and longitude must be decimal degrees between -90.0 and 90.0 and between -180.0 and 180.0 respectively. Radius must be an integer number of meters between 10 and 1,000,000 (1000 km). * **property:`"="`** For example: **property:"battery-type=CR2032"** Returns beacons which have a property of the given name and value. Supports multiple filters which will be combined with OR logic. The entire name=value string must be double-quoted as one string. * **attachment\_type:`""`** For example: **attachment_type:"my-namespace/my-type"** Returns beacons having at least one attachment of the given namespaced type. Supports "any within this namespace" via the partial wildcard syntax: "my-namespace/*". Supports multiple filters which will be combined with OR logic. The string must be double-quoted. * **indoor\_level:`""`** For example: **indoor\_level:"1"** Returns beacons which are located on the given indoor level. Accepts multiple filters that will be combined with OR logic. Multiple filters on the same field are combined with OR logic (except registration_time which is combined with AND logic). Multiple filters on different fields are combined with AND logic. Filters should be separated by spaces. As with any HTTP query string parameter, the whole filter expression must be URL-encoded. Example REST request: `GET /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`
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
* output [ListBeaconsResponse](#listbeaconsresponse)

### proximitybeacon.beacons.register
Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.register({}, context)
```

#### Input
* input `object`
  * projectId `string`: The project id of the project the beacon will be registered to. If the project id is not specified then the project making the request is used. Optional.
  * body [Beacon](#beacon)
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
* output [Beacon](#beacon)

### proximitybeacon.getEidparams
Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.


```js
google_proximitybeacon.proximitybeacon.getEidparams({}, context)
```

#### Input
* input `object`
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
* output [EphemeralIdRegistrationParams](#ephemeralidregistrationparams)

### proximitybeacon.namespaces.list
Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.namespaces.list({}, context)
```

#### Input
* input `object`
  * projectId `string`: The project id to list namespaces under. Optional.
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
* output [ListNamespacesResponse](#listnamespacesresponse)

### proximitybeacon.beacons.attachments.delete
Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.attachments.delete({
  "attachmentName": ""
}, context)
```

#### Input
* input `object`
  * attachmentName **required** `string`: The attachment name (`attachmentName`) of the attachment to remove. For example: `beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738`. For Eddystone-EID beacons, the beacon ID portion (`3!893737abc9`) may be the beacon's current EID, or its "stable" Eddystone-UID. Required.
  * projectId `string`: The project id of the attachment to delete. If not provided, the project that is making the request is used. Optional.
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

### proximitybeacon.beacons.delete
Deletes the specified beacon including all diagnostics data for the beacon as well as any attachments on the beacon (including those belonging to other projects). This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.delete({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
  * projectId `string`: The project id of the beacon to delete. If not provided, the project that is making the request is used. Optional.
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

### proximitybeacon.beacons.get
Returns detailed information about the specified beacon. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project. Requests may supply an Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will receive an error.


```js
google_proximitybeacon.proximitybeacon.beacons.get({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
  * projectId `string`: The project id of the beacon to request. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
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
* output [Beacon](#beacon)

### proximitybeacon.beacons.update
Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for activation, deactivation, and decommissioning. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.update({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.
  * projectId `string`: The project id of the beacon to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
  * body [Beacon](#beacon)
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
* output [Beacon](#beacon)

### proximitybeacon.beacons.attachments.list
Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `*/*`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.attachments.list({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon whose attachments should be fetched. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
  * namespacedType `string`: Specifies the namespace and type of attachment to include in response in namespace/type format. Accepts `*/*` to specify "all types in all namespaces".
  * projectId `string`: The project id to list beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.
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
* output [ListBeaconAttachmentsResponse](#listbeaconattachmentsresponse)

### proximitybeacon.beacons.attachments.create
Associates the given data with the specified beacon. Attachment data must contain two parts: - A namespaced type. - The actual attachment data itself. The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.attachments.create({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon on which the attachment should be created. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
  * projectId `string`: The project id of the project the attachment will belong to. If the project id is not specified then the project making the request is used. Optional.
  * body [BeaconAttachment](#beaconattachment)
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
* output [BeaconAttachment](#beaconattachment)

### proximitybeacon.beacons.attachments.batchDelete
Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `*/*` to delete all. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.attachments.batchDelete({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: The beacon whose attachments should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
  * namespacedType `string`: Specifies the namespace and type of attachments to delete in `namespace/type` format. Accepts `*/*` to specify "all types in all namespaces". Optional.
  * projectId `string`: The project id to delete beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.
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
* output [DeleteAttachmentsResponse](#deleteattachmentsresponse)

### proximitybeacon.beacons.diagnostics.list
List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.diagnostics.list({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that the diagnostics are for.
  * alertFilter `string` (values: ALERT_UNSPECIFIED, WRONG_LOCATION, LOW_BATTERY, LOW_ACTIVITY): Requests only beacons that have the given alert. For example, to find beacons that have low batteries use `alert_filter=LOW_BATTERY`.
  * pageSize `integer`: Specifies the maximum number of results to return. Defaults to 10. Maximum 1000. Optional.
  * pageToken `string`: Requests results that occur after the `page_token`, obtained from the response to a previous request. Optional.
  * projectId `string`: Requests only diagnostic records for the given project id. If not set, then the project making the request will be used for looking up diagnostic records. Optional.
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
* output [ListDiagnosticsResponse](#listdiagnosticsresponse)

### proximitybeacon.beacons.activate
Activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.activate({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be activated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
  * projectId `string`: The project id of the beacon to activate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
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

### proximitybeacon.beacons.deactivate
Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.deactivate({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be deactivated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
  * projectId `string`: The project id of the beacon to deactivate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
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

### proximitybeacon.beacons.decommission
Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.


```js
google_proximitybeacon.proximitybeacon.beacons.decommission({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be decommissioned. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID of the beacon's "stable" UID. Required.
  * projectId `string`: The project id of the beacon to decommission. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
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

### proximitybeacon.namespaces.update
Updates the information about the specified namespace. Only the namespace visibility can be updated.


```js
google_proximitybeacon.proximitybeacon.namespaces.update({
  "namespaceName": ""
}, context)
```

#### Input
* input `object`
  * namespaceName **required** `string`: Resource name of this namespace. Namespaces names have the format: namespaces/namespace.
  * projectId `string`: The project id of the namespace to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
  * body [Namespace](#namespace)
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
* output [Namespace](#namespace)



## Definitions

### AdvertisedId
* AdvertisedId `object`: Defines a unique identifier of a beacon as broadcast by the device.
  * id `string`: The actual beacon identifier, as broadcast by the beacon hardware. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. The base64 encoding should be of the binary byte-stream and not any textual (such as hex) representation thereof. Required.
  * type `string` (values: TYPE_UNSPECIFIED, EDDYSTONE, IBEACON, ALTBEACON, EDDYSTONE_EID): Specifies the identifier type. Required.

### AttachmentInfo
* AttachmentInfo `object`: A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.
  * data `string`: An opaque data container for client-provided data.
  * maxDistanceMeters `number`: The distance away from the beacon at which this attachment should be delivered to a mobile app. Setting this to a value greater than zero indicates that the app should behave as if the beacon is "seen" when the mobile device is less than this distance away from the beacon. Different attachments on the same beacon can have different max distances. Note that even though this value is expressed with fractional meter precision, real-world behavior is likley to be much less precise than one meter, due to the nature of current Bluetooth radio technology. Optional. When not set or zero, the attachment should be delivered at the beacon's outer limit of detection.
  * namespacedType `string`: Specifies what kind of attachment this is. Tells a client how to interpret the `data` field. Format is namespace/type, for example scrupulous-wombat-12345/welcome-message

### Beacon
* Beacon `object`: Details of a beacon device.
  * advertisedId [AdvertisedId](#advertisedid)
  * beaconName `string`: Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.
  * description `string`: Free text used to identify and describe the beacon. Maximum length 140 characters. Optional.
  * ephemeralIdRegistration [EphemeralIdRegistration](#ephemeralidregistration)
  * expectedStability `string` (values: STABILITY_UNSPECIFIED, STABLE, PORTABLE, MOBILE, ROVING): Expected location stability. This is set when the beacon is registered or updated, not automatically detected in any way. Optional.
  * indoorLevel [IndoorLevel](#indoorlevel)
  * latLng [LatLng](#latlng)
  * placeId `string`: The [Google Places API](/places/place-id) Place ID of the place where the beacon is deployed. This is given when the beacon is registered or updated, not automatically detected in any way. Optional.
  * properties `object`: Properties of the beacon device, for example battery type or firmware version. Optional.
  * provisioningKey `string`: Some beacons may require a user to provide an authorization key before changing any of its configuration (e.g. broadcast frames, transmit power). This field provides a place to store and control access to that key. This field is populated in responses to `GET /v1beta1/beacons/3!beaconId` from users with write access to the given beacon. That is to say: If the user is authorized to write the beacon's confidential data in the service, the service considers them authorized to configure the beacon. Note that this key grants nothing on the service, only on the beacon itself.
  * status `string` (values: STATUS_UNSPECIFIED, ACTIVE, DECOMMISSIONED, INACTIVE): Current status of the beacon. Required.

### BeaconAttachment
* BeaconAttachment `object`: Project-specific data associated with a beacon.
  * attachmentName `string`: Resource name of this attachment. Attachment names have the format: beacons/ beacon_id/attachments/attachment_id. Leave this empty on creation.
  * creationTimeMs `string`: The UTC time when this attachment was created, in milliseconds since the UNIX epoch.
  * data `string`: An opaque data container for client-provided data. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. Required.
  * maxDistanceMeters `number`: The distance away from the beacon at which this attachment should be delivered to a mobile app. Setting this to a value greater than zero indicates that the app should behave as if the beacon is "seen" when the mobile device is less than this distance away from the beacon. Different attachments on the same beacon can have different max distances. Note that even though this value is expressed with fractional meter precision, real-world behavior is likley to be much less precise than one meter, due to the nature of current Bluetooth radio technology. Optional. When not set or zero, the attachment should be delivered at the beacon's outer limit of detection. Negative values are invalid and return an error.
  * namespacedType `string`: Specifies what kind of attachment this is. Tells a client how to interpret the `data` field. Format is namespace/type. Namespace provides type separation between clients. Type describes the type of `data`, for use by the client when parsing the `data` field. Required.

### BeaconInfo
* BeaconInfo `object`: A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.
  * advertisedId [AdvertisedId](#advertisedid)
  * attachments `array`: Attachments matching the type(s) requested. May be empty if no attachment types were requested.
    * items [AttachmentInfo](#attachmentinfo)
  * beaconName `string`: The name under which the beacon is registered.

### Date
* Date `object`: Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent: * A full date, with non-zero year, month and day values * A month and day value, with a zero year, e.g. an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, e.g. a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant.
  * month `integer`: Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.

### DeleteAttachmentsResponse
* DeleteAttachmentsResponse `object`: Response for a request to delete attachments.
  * numDeleted `integer`: The number of attachments that were deleted.

### Diagnostics
* Diagnostics `object`: Diagnostics for a single beacon.
  * alerts `array`: An unordered list of Alerts that the beacon has.
    * items `string` (values: ALERT_UNSPECIFIED, WRONG_LOCATION, LOW_BATTERY, LOW_ACTIVITY)
  * beaconName `string`: Resource name of the beacon. For Eddystone-EID beacons, this may be the beacon's current EID, or the beacon's "stable" Eddystone-UID.
  * estimatedLowBatteryDate [Date](#date)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### EphemeralIdRegistration
* EphemeralIdRegistration `object`: Write-only registration parameters for beacons using Eddystone-EID format. Two ways of securely registering an Eddystone-EID beacon with the service are supported: 1. Perform an ECDH key exchange via this API, including a previous call to `GET /v1beta1/eidparams`. In this case the fields `beacon_ecdh_public_key` and `service_ecdh_public_key` should be populated and `beacon_identity_key` should not be populated. This method ensures that only the two parties in the ECDH key exchange can compute the identity key, which becomes a secret between them. 2. Derive or obtain the beacon's identity key via other secure means (perhaps an ECDH key exchange between the beacon and a mobile device or any other secure method), and then submit the resulting identity key to the service. In this case `beacon_identity_key` field should be populated, and neither of `beacon_ecdh_public_key` nor `service_ecdh_public_key` fields should be. The security of this method depends on how securely the parties involved (in particular the bluetooth client) handle the identity key, and obviously on how securely the identity key was generated. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
  * beaconEcdhPublicKey `string`: The beacon's public key used for the Elliptic curve Diffie-Hellman key exchange. When this field is populated, `service_ecdh_public_key` must also be populated, and `beacon_identity_key` must not be.
  * beaconIdentityKey `string`: The private key of the beacon. If this field is populated, `beacon_ecdh_public_key` and `service_ecdh_public_key` must not be populated.
  * initialClockValue `string`: The initial clock value of the beacon. The beacon's clock must have begun counting at this value immediately prior to transmitting this value to the resolving service. Significant delay in transmitting this value to the service risks registration or resolution failures. If a value is not provided, the default is zero.
  * initialEid `string`: An initial ephemeral ID calculated using the clock value submitted as `initial_clock_value`, and the secret key generated by the Diffie-Hellman key exchange using `service_ecdh_public_key` and `service_ecdh_public_key`. This initial EID value will be used by the service to confirm that the key exchange process was successful.
  * rotationPeriodExponent `integer`: Indicates the nominal period between each rotation of the beacon's ephemeral ID. "Nominal" because the beacon should randomize the actual interval. See [the spec at github](https://github.com/google/eddystone/tree/master/eddystone-eid) for details. This value corresponds to a power-of-two scaler on the beacon's clock: when the scaler value is K, the beacon will begin broadcasting a new ephemeral ID on average every 2^K seconds.
  * serviceEcdhPublicKey `string`: The service's public key used for the Elliptic curve Diffie-Hellman key exchange. When this field is populated, `beacon_ecdh_public_key` must also be populated, and `beacon_identity_key` must not be.

### EphemeralIdRegistrationParams
* EphemeralIdRegistrationParams `object`: Information a client needs to provision and register beacons that broadcast Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key exchange. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
  * maxRotationPeriodExponent `integer`: Indicates the maximum rotation period supported by the service. See EddystoneEidRegistration.rotation_period_exponent
  * minRotationPeriodExponent `integer`: Indicates the minimum rotation period supported by the service. See EddystoneEidRegistration.rotation_period_exponent
  * serviceEcdhPublicKey `string`: The beacon service's public key for use by a beacon to derive its Identity Key using Elliptic Curve Diffie-Hellman key exchange.

### GetInfoForObservedBeaconsRequest
* GetInfoForObservedBeaconsRequest `object`: Request for beacon and attachment information about beacons that a mobile client has encountered "in the wild".
  * namespacedTypes `array`: Specifies what kind of attachments to include in the response. When given, the response will include only attachments of the given types. When empty, no attachments will be returned. Must be in the format namespace/type. Accepts `*` to specify all types in all namespaces owned by the client. Optional.
    * items `string`
  * observations `array`: The beacons that the client has encountered. At least one must be given.
    * items [Observation](#observation)

### GetInfoForObservedBeaconsResponse
* GetInfoForObservedBeaconsResponse `object`: Information about the requested beacons, optionally including attachment data.
  * beacons `array`: Public information about beacons. May be empty if the request matched no beacons.
    * items [BeaconInfo](#beaconinfo)

### IndoorLevel
* IndoorLevel `object`: Indoor level, a human-readable string as returned by Google Maps APIs, useful to indicate which floor of a building a beacon is located on.
  * name `string`: The name of this level.

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair of doubles representing degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### ListBeaconAttachmentsResponse
* ListBeaconAttachmentsResponse `object`: Response to `ListBeaconAttachments` that contains the requested attachments.
  * attachments `array`: The attachments that corresponded to the request params.
    * items [BeaconAttachment](#beaconattachment)

### ListBeaconsResponse
* ListBeaconsResponse `object`: Response that contains list beacon results and pagination help.
  * beacons `array`: The beacons that matched the search criteria.
    * items [Beacon](#beacon)
  * nextPageToken `string`: An opaque pagination token that the client may provide in their next request to retrieve the next page of results.
  * totalCount `string`: Estimate of the total number of beacons matched by the query. Higher values may be less accurate.

### ListDiagnosticsResponse
* ListDiagnosticsResponse `object`: Response that contains the requested diagnostics.
  * diagnostics `array`: The diagnostics matching the given request.
    * items [Diagnostics](#diagnostics)
  * nextPageToken `string`: Token that can be used for pagination. Returned only if the request matches more beacons than can be returned in this response.

### ListNamespacesResponse
* ListNamespacesResponse `object`: Response to ListNamespacesRequest that contains all the project's namespaces.
  * namespaces `array`: The attachments that corresponded to the request params.
    * items [Namespace](#namespace)

### Namespace
* Namespace `object`: An attachment namespace defines read and write access for all the attachments created under it. Each namespace is globally unique, and owned by one project which is the only project that can create attachments under it.
  * namespaceName `string`: Resource name of this namespace. Namespaces names have the format: namespaces/namespace.
  * servingVisibility `string` (values: VISIBILITY_UNSPECIFIED, UNLISTED, PUBLIC): Specifies what clients may receive attachments under this namespace via `beaconinfo.getforobserved`.

### Observation
* Observation `object`: Represents one beacon observed once.
  * advertisedId [AdvertisedId](#advertisedid)
  * telemetry `string`: The array of telemetry bytes received from the beacon. The server is responsible for parsing it. This field may frequently be empty, as with a beacon that transmits telemetry only occasionally.
  * timestampMs `string`: Time when the beacon was observed.


