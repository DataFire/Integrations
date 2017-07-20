# @datafire/google_proximitybeacon

Client library for Google Proximity Beacon

## Installation and Usage
```bash
npm install --save datafire @datafire/google_proximitybeacon
```

```js
let datafire = require('datafire');
let google_proximitybeacon = require('@datafire/google_proximitybeacon').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_proximitybeacon: account,
  }
})

google_proximitybeacon.namespaces.list({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_proximitybeacon.oauthRefresh(null, context)
```


### beaconinfo.getforobserved
Given one or more beacon observations, returns any beacon information
and attachments accessible to your application. Authorize by using the
[API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
for the application.


```js
google_proximitybeacon.beaconinfo.getforobserved({}, context)
```

#### Parameters
* body (object) - Request for beacon and attachment information about beacons that
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* projectId (string) - The project id to list beacons under. If not present then the project
* pageToken (string) - A pagination token obtained from a previous request to list beacons.
* q (string) - Filter query string that supports the following field filters:
* pageSize (integer) - The maximum number of records to return for this request, up to a
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### beacons.register
Registers a previously unregistered beacon given its `advertisedId`.
These IDs are unique within the system. An ID can be registered only once.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.


```js
google_proximitybeacon.beacons.register({}, context)
```

#### Parameters
* projectId (string) - The project id of the project the beacon will be registered to. If
* body (object) - Details of a beacon device.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* projectId (string) - The project id to list namespaces under.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* attachmentName (string) **required** - The attachment name (`attachmentName`) of
* projectId (string) - The project id of the attachment to delete. If not provided, the project
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Beacon that should be deleted. A beacon name has the format
* projectId (string) - The project id of the beacon to delete. If not provided, the project
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Resource name of this beacon. A beacon name has the format
* projectId (string) - The project id of the beacon to request. If the project id is not specified
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Resource name of this beacon. A beacon name has the format
* projectId (string) - The project id of the beacon to update. If the project id is not
* body (object) - Details of a beacon device.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Beacon whose attachments should be fetched. A beacon name has the
* namespacedType (string) - Specifies the namespace and type of attachment to include in response in
* projectId (string) - The project id to list beacon attachments under. This field can be
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Beacon on which the attachment should be created. A beacon name has the
* projectId (string) - The project id of the project the attachment will belong to. If
* body (object) - Project-specific data associated with a beacon.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - The beacon whose attachments should be deleted. A beacon name has the
* namespacedType (string) - Specifies the namespace and type of attachments to delete in
* projectId (string) - The project id to delete beacon attachments under. This field can be
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Beacon that the diagnostics are for.
* pageToken (string) - Requests results that occur after the `page_token`, obtained from the
* pageSize (integer) - Specifies the maximum number of results to return. Defaults to
* alertFilter (string) - Requests only beacons that have the given alert. For example, to find
* projectId (string) - Requests only diagnostic records for the given project id. If not set,
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Beacon that should be activated. A beacon name has the format
* projectId (string) - The project id of the beacon to activate. If the project id is not
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Beacon that should be deactivated. A beacon name has the format
* projectId (string) - The project id of the beacon to deactivate. If the project id is not
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* beaconName (string) **required** - Beacon that should be decommissioned. A beacon name has the format
* projectId (string) - The project id of the beacon to decommission. If the project id is not
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### namespaces.update
Updates the information about the specified namespace. Only the namespace
visibility can be updated.


```js
google_proximitybeacon.namespaces.update({
  "namespaceName": ""
}, context)
```

#### Parameters
* namespaceName (string) **required** - Resource name of this namespace. Namespaces names have the format:
* projectId (string) - The project id of the namespace to update. If the project id is not
* body (object) - An attachment namespace defines read and write access for all the attachments
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

