# @datafire/google_proximitybeacon

Client library for Proximity Beacon

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

google_proximitybeacon.namespaces.list({}).then(data => {
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

### beaconinfo.getforobserved
Given one or more beacon observations, returns any beacon information
and attachments accessible to your application. Authorize by using the
[API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
for the application.


```js
google_proximitybeacon.beaconinfo.getforobserved({}, context)
```

#### Input
* input `object`
  * body [GetInfoForObservedBeaconsRequest](#getinfoforobservedbeaconsrequest)
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
* output [GetInfoForObservedBeaconsResponse](#getinfoforobservedbeaconsresponse)

### beacons.list
Searches the beacon registry for beacons that match the given search
criteria. Only those beacons that the client has permission to list
will be returned.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.


```js
google_proximitybeacon.beacons.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of records to return for this request, up to a
  * pageToken `string`: A pagination token obtained from a previous request to list beacons.
  * projectId `string`: The project id to list beacons under. If not present then the project
  * q `string`: Filter query string that supports the following field filters:
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
* output [ListBeaconsResponse](#listbeaconsresponse)

### beacons.register
Registers a previously unregistered beacon given its `advertisedId`.
These IDs are unique within the system. An ID can be registered only once.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.register({}, context)
```

#### Input
* input `object`
  * body [Beacon](#beacon)
  * projectId `string`: The project id of the project the beacon will be registered to. If
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
* output [Beacon](#beacon)

### getEidparams
Gets the Proximity Beacon API's current public key and associated
parameters used to initiate the Diffie-Hellman key exchange required to
register a beacon that broadcasts the Eddystone-EID format. This key
changes periodically; clients may cache it and re-use the same public key
to provision and register multiple beacons. However, clients should be
prepared to refresh this key when they encounter an error registering an
Eddystone-EID beacon.


```js
google_proximitybeacon.getEidparams({}, context)
```

#### Input
* input `object`
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
* output [EphemeralIdRegistrationParams](#ephemeralidregistrationparams)

### namespaces.list
Lists all attachment namespaces owned by your Google Developers Console
project. Attachment data associated with a beacon must include a
namespaced type, and the namespace must be owned by your project.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.


```js
google_proximitybeacon.namespaces.list({}, context)
```

#### Input
* input `object`
  * projectId `string`: The project id to list namespaces under.
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
* output [ListNamespacesResponse](#listnamespacesresponse)

### beacons.attachments.delete
Deletes the specified attachment for the given beacon. Each attachment has
a unique attachment name (`attachmentName`) which is returned when you
fetch the attachment data via this API. You specify this with the delete
request to control which attachment is removed. This operation cannot be
undone.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.attachments.delete({
  "attachmentName": ""
}, context)
```

#### Input
* input `object`
  * attachmentName **required** `string`: The attachment name (`attachmentName`) of
  * projectId `string`: The project id of the attachment to delete. If not provided, the project
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

### beacons.delete
Deletes the specified beacon including all diagnostics data for the beacon
as well as any attachments on the beacon (including those belonging to
other projects). This operation cannot be undone.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.delete({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be deleted. A beacon name has the format
  * projectId `string`: The project id of the beacon to delete. If not provided, the project
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

### beacons.get
Returns detailed information about the specified beacon.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.

Requests may supply an Eddystone-EID beacon name in the form:
`beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID
broadcast by the beacon. The returned `Beacon` object will contain the
beacon's stable Eddystone-UID. Clients not authorized to resolve the
beacon's ephemeral Eddystone-EID broadcast will receive an error.


```js
google_proximitybeacon.beacons.get({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Resource name of this beacon. A beacon name has the format
  * projectId `string`: The project id of the beacon to request. If the project id is not specified
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
* output [Beacon](#beacon)

### beacons.update
Updates the information about the specified beacon. **Any field that you do
not populate in the submitted beacon will be permanently erased**, so you
should follow the "read, modify, write" pattern to avoid inadvertently
destroying data.

Changes to the beacon status via this method will be  silently ignored.
To update beacon status, use the separate methods on this API for
activation, deactivation, and decommissioning.
Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.update({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Resource name of this beacon. A beacon name has the format
  * body [Beacon](#beacon)
  * projectId `string`: The project id of the beacon to update. If the project id is not
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
* output [Beacon](#beacon)

### beacons.attachments.list
Returns the attachments for the specified beacon that match the specified
namespaced-type pattern.

To control which namespaced types are returned, you add the
`namespacedType` query parameter to the request. You must either use
`*/*`, to return all attachments, or the namespace must be one of
the ones returned from the  `namespaces` endpoint.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.


```js
google_proximitybeacon.beacons.attachments.list({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon whose attachments should be fetched. A beacon name has the
  * namespacedType `string`: Specifies the namespace and type of attachment to include in response in
  * projectId `string`: The project id to list beacon attachments under. This field can be
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
* output [ListBeaconAttachmentsResponse](#listbeaconattachmentsresponse)

### beacons.attachments.create
Associates the given data with the specified beacon. Attachment data must
contain two parts:
<ul>
<li>A namespaced type.</li>
<li>The actual attachment data itself.</li>
</ul>
The namespaced type consists of two parts, the namespace and the type.
The namespace must be one of the values returned by the `namespaces`
endpoint, while the type can be a string of any characters except for the
forward slash (`/`) up to 100 characters in length.

Attachment data can be up to 1024 bytes long.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.attachments.create({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon on which the attachment should be created. A beacon name has the
  * body [BeaconAttachment](#beaconattachment)
  * projectId `string`: The project id of the project the attachment will belong to. If
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
* output [BeaconAttachment](#beaconattachment)

### beacons.attachments.batchDelete
Deletes multiple attachments on a given beacon. This operation is
permanent and cannot be undone.

You can optionally specify `namespacedType` to choose which attachments
should be deleted. If you do not specify `namespacedType`,  all your
attachments on the given beacon will be deleted. You also may explicitly
specify `*/*` to delete all.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.attachments.batchDelete({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: The beacon whose attachments should be deleted. A beacon name has the
  * namespacedType `string`: Specifies the namespace and type of attachments to delete in
  * projectId `string`: The project id to delete beacon attachments under. This field can be
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
* output [DeleteAttachmentsResponse](#deleteattachmentsresponse)

### beacons.diagnostics.list
List the diagnostics for a single beacon. You can also list diagnostics for
all the beacons owned by your Google Developers Console project by using
the beacon name `beacons/-`.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.


```js
google_proximitybeacon.beacons.diagnostics.list({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * alertFilter `string` (values: ALERT_UNSPECIFIED, WRONG_LOCATION, LOW_BATTERY, LOW_ACTIVITY): Requests only beacons that have the given alert. For example, to find
  * beaconName **required** `string`: Beacon that the diagnostics are for.
  * pageSize `integer`: Specifies the maximum number of results to return. Defaults to
  * pageToken `string`: Requests results that occur after the `page_token`, obtained from the
  * projectId `string`: Requests only diagnostic records for the given project id. If not set,
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
* output [ListDiagnosticsResponse](#listdiagnosticsresponse)

### beacons.activate
Activates a beacon. A beacon that is active will return information
and attachment data when queried via `beaconinfo.getforobserved`.
Calling this method on an already active beacon will do nothing (but
will return a successful response code).

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.activate({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be activated. A beacon name has the format
  * projectId `string`: The project id of the beacon to activate. If the project id is not
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

### beacons.deactivate
Deactivates a beacon. Once deactivated, the API will not return
information nor attachment data for the beacon when queried via
`beaconinfo.getforobserved`. Calling this method on an already inactive
beacon will do nothing (but will return a successful response code).

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.deactivate({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be deactivated. A beacon name has the format
  * projectId `string`: The project id of the beacon to deactivate. If the project id is not
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

### beacons.decommission
Decommissions the specified beacon in the service. This beacon will no
longer be returned from `beaconinfo.getforobserved`. This operation is
permanent -- you will not be able to re-register a beacon with this ID
again.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.decommission({
  "beaconName": ""
}, context)
```

#### Input
* input `object`
  * beaconName **required** `string`: Beacon that should be decommissioned. A beacon name has the format
  * projectId `string`: The project id of the beacon to decommission. If the project id is not
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

### namespaces.update
Updates the information about the specified namespace. Only the namespace
visibility can be updated.


```js
google_proximitybeacon.namespaces.update({
  "namespaceName": ""
}, context)
```

#### Input
* input `object`
  * body [Namespace](#namespace)
  * namespaceName **required** `string`: Resource name of this namespace. Namespaces names have the format:
  * projectId `string`: The project id of the namespace to update. If the project id is not
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
* output [Namespace](#namespace)



## Definitions

### AdvertisedId
* AdvertisedId `object`: Defines a unique identifier of a beacon as broadcast by the device.
  * id `string`: The actual beacon identifier, as broadcast by the beacon hardware. Must be
  * type `string` (values: TYPE_UNSPECIFIED, EDDYSTONE, IBEACON, ALTBEACON, EDDYSTONE_EID): Specifies the identifier type.

### AttachmentInfo
* AttachmentInfo `object`: A subset of attachment information served via the
  * data `string`: An opaque data container for client-provided data.
  * maxDistanceMeters `number`: The distance away from the beacon at which this attachment should be
  * namespacedType `string`: Specifies what kind of attachment this is. Tells a client how to

### Beacon
* Beacon `object`: Details of a beacon device.
  * advertisedId [AdvertisedId](#advertisedid)
  * beaconName `string`: Resource name of this beacon. A beacon name has the format
  * description `string`: Free text used to identify and describe the beacon. Maximum length 140
  * ephemeralIdRegistration [EphemeralIdRegistration](#ephemeralidregistration)
  * expectedStability `string` (values: STABILITY_UNSPECIFIED, STABLE, PORTABLE, MOBILE, ROVING): Expected location stability. This is set when the beacon is registered or
  * indoorLevel [IndoorLevel](#indoorlevel)
  * latLng [LatLng](#latlng)
  * placeId `string`: The [Google Places API](/places/place-id) Place ID of the place where
  * properties `object`: Properties of the beacon device, for example battery type or firmware
  * provisioningKey `string`: Some beacons may require a user to provide an authorization key before
  * status `string` (values: STATUS_UNSPECIFIED, ACTIVE, DECOMMISSIONED, INACTIVE): Current status of the beacon.

### BeaconAttachment
* BeaconAttachment `object`: Project-specific data associated with a beacon.
  * attachmentName `string`: Resource name of this attachment. Attachment names have the format:
  * creationTimeMs `string`: The UTC time when this attachment was created, in milliseconds since the
  * data `string`: An opaque data container for client-provided data. Must be
  * maxDistanceMeters `number`: The distance away from the beacon at which this attachment should be
  * namespacedType `string`: Specifies what kind of attachment this is. Tells a client how to

### BeaconInfo
* BeaconInfo `object`: A subset of beacon information served via the `beaconinfo.getforobserved`
  * advertisedId [AdvertisedId](#advertisedid)
  * attachments `array`: Attachments matching the type(s) requested.
    * items [AttachmentInfo](#attachmentinfo)
  * beaconName `string`: The name under which the beacon is registered.

### Date
* Date `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12, or 0 if specifying a date without a
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### DeleteAttachmentsResponse
* DeleteAttachmentsResponse `object`: Response for a request to delete attachments.
  * numDeleted `integer`: The number of attachments that were deleted.

### Diagnostics
* Diagnostics `object`: Diagnostics for a single beacon.
  * alerts `array`: An unordered list of Alerts that the beacon has.
    * items `string` (values: ALERT_UNSPECIFIED, WRONG_LOCATION, LOW_BATTERY, LOW_ACTIVITY)
  * beaconName `string`: Resource name of the beacon. For Eddystone-EID beacons, this may
  * estimatedLowBatteryDate [Date](#date)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### EphemeralIdRegistration
* EphemeralIdRegistration `object`: Write-only registration parameters for beacons using Eddystone-EID format.
  * beaconEcdhPublicKey `string`: The beacon's public key used for the Elliptic curve Diffie-Hellman
  * beaconIdentityKey `string`: The private key of the beacon. If this field is populated,
  * initialClockValue `string`: The initial clock value of the beacon. The beacon's clock must have
  * initialEid `string`: An initial ephemeral ID calculated using the clock value submitted as
  * rotationPeriodExponent `integer`: Indicates the nominal period between each rotation of the beacon's
  * serviceEcdhPublicKey `string`: The service's public key used for the Elliptic curve Diffie-Hellman

### EphemeralIdRegistrationParams
* EphemeralIdRegistrationParams `object`: Information a client needs to provision and register beacons that
  * maxRotationPeriodExponent `integer`: Indicates the maximum rotation period supported by the service.
  * minRotationPeriodExponent `integer`: Indicates the minimum rotation period supported by the service.
  * serviceEcdhPublicKey `string`: The beacon service's public key for use by a beacon to derive its

### GetInfoForObservedBeaconsRequest
* GetInfoForObservedBeaconsRequest `object`: Request for beacon and attachment information about beacons that
  * namespacedTypes `array`: Specifies what kind of attachments to include in the response.
    * items `string`
  * observations `array`: The beacons that the client has encountered.
    * items [Observation](#observation)

### GetInfoForObservedBeaconsResponse
* GetInfoForObservedBeaconsResponse `object`: Information about the requested beacons, optionally including attachment
  * beacons `array`: Public information about beacons.
    * items [BeaconInfo](#beaconinfo)

### IndoorLevel
* IndoorLevel `object`: Indoor level, a human-readable string as returned by Google Maps APIs,
  * name `string`: The name of this level.

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair
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
  * nextPageToken `string`: An opaque pagination token that the client may provide in their next
  * totalCount `string`: Estimate of the total number of beacons matched by the query. Higher

### ListDiagnosticsResponse
* ListDiagnosticsResponse `object`: Response that contains the requested diagnostics.
  * diagnostics `array`: The diagnostics matching the given request.
    * items [Diagnostics](#diagnostics)
  * nextPageToken `string`: Token that can be used for pagination. Returned only if the

### ListNamespacesResponse
* ListNamespacesResponse `object`: Response to ListNamespacesRequest that contains all the project's namespaces.
  * namespaces `array`: The attachments that corresponded to the request params.
    * items [Namespace](#namespace)

### Namespace
* Namespace `object`: An attachment namespace defines read and write access for all the attachments
  * namespaceName `string`: Resource name of this namespace. Namespaces names have the format:
  * servingVisibility `string` (values: VISIBILITY_UNSPECIFIED, UNLISTED, PUBLIC): Specifies what clients may receive attachments under this namespace

### Observation
* Observation `object`: Represents one beacon observed once.
  * advertisedId [AdvertisedId](#advertisedid)
  * telemetry `string`: The array of telemetry bytes received from the beacon. The server is
  * timestampMs `string`: Time when the beacon was observed.


