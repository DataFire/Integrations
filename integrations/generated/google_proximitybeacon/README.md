# @datafire/google_proximitybeacon
Registers, manages, indexes, and searches beacons.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: beaconinfo.getforobserved
Given one or more beacon observations, returns any beacon information
and attachments accessible to your application. Authorize by using the
[API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
for the application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/GetInfoForObservedBeaconsRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetInfoForObservedBeaconsResponse"
}
```
## Operation: beacons.list
Searches the beacon registry for beacons that match the given search
criteria. Only those beacons that the client has permission to list
will be returned.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project id to list beacons under. If not present then the project\ncredential that made the request is used as the project.\nOptional."
    },
    "pageToken": {
      "type": "string",
      "description": "A pagination token obtained from a previous request to list beacons."
    },
    "q": {
      "type": "string",
      "description": "Filter query string that supports the following field filters:\n\n* **description:`\"<string>\"`**\n  For example: **description:\"Room 3\"**\n  Returns beacons whose description matches tokens in the string \"Room 3\"\n  (not necessarily that exact string).\n  The string must be double-quoted.\n* **status:`<enum>`**\n  For example: **status:active**\n  Returns beacons whose status matches the given value. Values must be\n  one of the Beacon.Status enum values (case insensitive). Accepts\n  multiple filters which will be combined with OR logic.\n* **stability:`<enum>`**\n  For example: **stability:mobile**\n  Returns beacons whose expected stability matches the given value.\n  Values must be one of the Beacon.Stability enum values (case\n  insensitive). Accepts multiple filters which will be combined with\n  OR logic.\n* **place\\_id:`\"<string>\"`**\n  For example: **place\\_id:\"ChIJVSZzVR8FdkgRXGmmm6SslKw=\"**\n  Returns beacons explicitly registered at the given place, expressed as\n  a Place ID obtained from [Google Places API](/places/place-id). Does not\n  match places inside the given place. Does not consider the beacon's\n  actual location (which may be different from its registered place).\n  Accepts multiple filters that will be combined with OR logic. The place\n  ID must be double-quoted.\n* **registration\\_time`[<|>|<=|>=]<integer>`**\n  For example: **registration\\_time>=1433116800**\n  Returns beacons whose registration time matches the given filter.\n  Supports the operators: <, >, <=, and >=. Timestamp must be expressed as\n  an integer number of seconds since midnight January 1, 1970 UTC. Accepts\n  at most two filters that will be combined with AND logic, to support\n  \"between\" semantics. If more than two are supplied, the latter ones are\n  ignored.\n* **lat:`<double> lng:<double> radius:<integer>`**\n  For example: **lat:51.1232343 lng:-1.093852 radius:1000**\n  Returns beacons whose registered location is within the given circle.\n  When any of these fields are given, all are required. Latitude and\n  longitude must be decimal degrees between -90.0 and 90.0 and between\n  -180.0 and 180.0 respectively. Radius must be an integer number of\n  meters between 10 and 1,000,000 (1000 km).\n* **property:`\"<string>=<string>\"`**\n  For example: **property:\"battery-type=CR2032\"**\n  Returns beacons which have a property of the given name and value.\n  Supports multiple filters which will be combined with OR logic.\n  The entire name=value string must be double-quoted as one string.\n* **attachment\\_type:`\"<string>\"`**\n  For example: **attachment_type:\"my-namespace/my-type\"**\n  Returns beacons having at least one attachment of the given namespaced\n  type. Supports \"any within this namespace\" via the partial wildcard\n  syntax: \"my-namespace/*\". Supports multiple filters which will be\n  combined with OR logic. The string must be double-quoted.\n* **indoor\\_level:`\"<string>\"`**\n  For example: **indoor\\_level:\"1\"**\n  Returns beacons which are located on the given indoor level. Accepts\n  multiple filters that will be combined with OR logic.\n\nMultiple filters on the same field are combined with OR logic (except\nregistration_time which is combined with AND logic).\nMultiple filters on different fields are combined with AND logic.\nFilters should be separated by spaces.\n\nAs with any HTTP query string parameter, the whole filter expression must\nbe URL-encoded.\n\nExample REST request:\n`GET /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`"
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of records to return for this request, up to a\nserver-defined upper limit."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBeaconsResponse"
}
```
## Operation: beacons.register
Registers a previously unregistered beacon given its `advertisedId`.
These IDs are unique within the system. An ID can be registered only once.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project id of the project the beacon will be registered to. If\nthe project id is not specified then the project making the request\nis used.\nOptional."
    },
    "body": {
      "$ref": "#/definitions/Beacon"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Beacon"
}
```
## Operation: getEidparams
Gets the Proximity Beacon API's current public key and associated
parameters used to initiate the Diffie-Hellman key exchange required to
register a beacon that broadcasts the Eddystone-EID format. This key
changes periodically; clients may cache it and re-use the same public key
to provision and register multiple beacons. However, clients should be
prepared to refresh this key when they encounter an error registering an
Eddystone-EID beacon.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EphemeralIdRegistrationParams"
}
```
## Operation: namespaces.list
Lists all attachment namespaces owned by your Google Developers Console
project. Attachment data associated with a beacon must include a
namespaced type, and the namespace must be owned by your project.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project id to list namespaces under.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListNamespacesResponse"
}
```
## Operation: beacons.attachments.delete
Deletes the specified attachment for the given beacon. Each attachment has
a unique attachment name (`attachmentName`) which is returned when you
fetch the attachment data via this API. You specify this with the delete
request to control which attachment is removed. This operation cannot be
undone.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attachmentName": {
      "type": "string",
      "description": "The attachment name (`attachmentName`) of\nthe attachment to remove. For example:\n`beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738`. For\nEddystone-EID beacons, the beacon ID portion (`3!893737abc9`) may be the\nbeacon's current EID, or its \"stable\" Eddystone-UID.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the attachment to delete. If not provided, the project\nthat is making the request is used.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "attachmentName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: beacons.delete
Deletes the specified beacon including all diagnostics data for the beacon
as well as any attachments on the beacon (including those belonging to
other projects). This operation cannot be undone.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Beacon that should be deleted. A beacon name has the format\n\"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast by\nthe beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID or the beacon's \"stable\" UID.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the beacon to delete. If not provided, the project\nthat is making the request is used.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: beacons.get
Returns detailed information about the specified beacon.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.

Requests may supply an Eddystone-EID beacon name in the form:
`beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID
broadcast by the beacon. The returned `Beacon` object will contain the
beacon's stable Eddystone-UID. Clients not authorized to resolve the
beacon's ephemeral Eddystone-EID broadcast will receive an error.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Resource name of this beacon. A beacon name has the format\n\"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast by\nthe beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID or the beacon's \"stable\" UID.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the beacon to request. If the project id is not specified\nthen the project making the request is used. The project id must match the\nproject that owns the beacon.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Beacon"
}
```
## Operation: beacons.update
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Resource name of this beacon. A beacon name has the format\n\"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast by\nthe beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.\n\nThis field must be left empty when registering. After reading a beacon,\nclients can use the name for future operations."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the beacon to update. If the project id is not\nspecified then the project making the request is used. The project id\nmust match the project that owns the beacon.\nOptional."
    },
    "body": {
      "$ref": "#/definitions/Beacon"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Beacon"
}
```
## Operation: beacons.attachments.list
Returns the attachments for the specified beacon that match the specified
namespaced-type pattern.

To control which namespaced types are returned, you add the
`namespacedType` query parameter to the request. You must either use
`*/*`, to return all attachments, or the namespace must be one of
the ones returned from the  `namespaces` endpoint.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Beacon whose attachments should be fetched. A beacon name has the\nformat \"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast\nby the beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID or the beacon's \"stable\" UID.\nRequired."
    },
    "namespacedType": {
      "type": "string",
      "description": "Specifies the namespace and type of attachment to include in response in\n<var>namespace/type</var> format. Accepts `*/*` to specify\n\"all types in all namespaces\"."
    },
    "projectId": {
      "type": "string",
      "description": "The project id to list beacon attachments under. This field can be\nused when \"*\" is specified to mean all attachment namespaces. Projects\nmay have multiple attachments with multiple namespaces. If \"*\" is\nspecified and the projectId string is empty, then the project\nmaking the request is used.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBeaconAttachmentsResponse"
}
```
## Operation: beacons.attachments.create
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Beacon on which the attachment should be created. A beacon name has the\nformat \"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast\nby the beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID or the beacon's \"stable\" UID.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the project the attachment will belong to. If\nthe project id is not specified then the project making the request\nis used.\nOptional."
    },
    "body": {
      "$ref": "#/definitions/BeaconAttachment"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BeaconAttachment"
}
```
## Operation: beacons.attachments.batchDelete
Deletes multiple attachments on a given beacon. This operation is
permanent and cannot be undone.

You can optionally specify `namespacedType` to choose which attachments
should be deleted. If you do not specify `namespacedType`,  all your
attachments on the given beacon will be deleted. You also may explicitly
specify `*/*` to delete all.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "The beacon whose attachments should be deleted. A beacon name has the\nformat \"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast\nby the beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID or the beacon's \"stable\" UID.\nRequired."
    },
    "namespacedType": {
      "type": "string",
      "description": "Specifies the namespace and type of attachments to delete in\n`namespace/type` format. Accepts `*/*` to specify\n\"all types in all namespaces\".\nOptional."
    },
    "projectId": {
      "type": "string",
      "description": "The project id to delete beacon attachments under. This field can be\nused when \"*\" is specified to mean all attachment namespaces. Projects\nmay have multiple attachments with multiple namespaces. If \"*\" is\nspecified and the projectId string is empty, then the project\nmaking the request is used.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteAttachmentsResponse"
}
```
## Operation: beacons.diagnostics.list
List the diagnostics for a single beacon. You can also list diagnostics for
all the beacons owned by your Google Developers Console project by using
the beacon name `beacons/-`.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Beacon that the diagnostics are for."
    },
    "pageToken": {
      "type": "string",
      "description": "Requests results that occur after the `page_token`, obtained from the\nresponse to a previous request. Optional."
    },
    "pageSize": {
      "type": "integer",
      "description": "Specifies the maximum number of results to return. Defaults to\n10. Maximum 1000. Optional."
    },
    "alertFilter": {
      "type": "string",
      "description": "Requests only beacons that have the given alert. For example, to find\nbeacons that have low batteries use `alert_filter=LOW_BATTERY`.",
      "enum": [
        "ALERT_UNSPECIFIED",
        "WRONG_LOCATION",
        "LOW_BATTERY"
      ]
    },
    "projectId": {
      "type": "string",
      "description": "Requests only diagnostic records for the given project id. If not set,\nthen the project making the request will be used for looking up\ndiagnostic records. Optional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListDiagnosticsResponse"
}
```
## Operation: beacons.activate
Activates a beacon. A beacon that is active will return information
and attachment data when queried via `beaconinfo.getforobserved`.
Calling this method on an already active beacon will do nothing (but
will return a successful response code).

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Beacon that should be activated. A beacon name has the format\n\"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast by\nthe beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID or the beacon's \"stable\" UID.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the beacon to activate. If the project id is not\nspecified then the project making the request is used. The project id\nmust match the project that owns the beacon.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: beacons.deactivate
Deactivates a beacon. Once deactivated, the API will not return
information nor attachment data for the beacon when queried via
`beaconinfo.getforobserved`. Calling this method on an already inactive
beacon will do nothing (but will return a successful response code).

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Beacon that should be deactivated. A beacon name has the format\n\"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast by\nthe beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID or the beacon's \"stable\" UID.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the beacon to deactivate. If the project id is not\nspecified then the project making the request is used. The project id must\nmatch the project that owns the beacon.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: beacons.decommission
Decommissions the specified beacon in the service. This beacon will no
longer be returned from `beaconinfo.getforobserved`. This operation is
permanent -- you will not be able to re-register a beacon with this ID
again.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "beaconName": {
      "type": "string",
      "description": "Beacon that should be decommissioned. A beacon name has the format\n\"beacons/N!beaconId\" where the beaconId is the base16 ID broadcast by\nthe beacon and N is a code for the beacon's type. Possible values are\n`3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`\nfor AltBeacon. For Eddystone-EID beacons, you may use either the\ncurrent EID of the beacon's \"stable\" UID.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the beacon to decommission. If the project id is not\nspecified then the project making the request is used. The project id\nmust match the project that owns the beacon.\nOptional."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "beaconName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: namespaces.update
Updates the information about the specified namespace. Only the namespace
visibility can be updated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "namespaceName": {
      "type": "string",
      "description": "Resource name of this namespace. Namespaces names have the format:\n<code>namespaces/<var>namespace</var></code>."
    },
    "projectId": {
      "type": "string",
      "description": "The project id of the namespace to update. If the project id is not\nspecified then the project making the request is used. The project id\nmust match the project that owns the beacon.\nOptional."
    },
    "body": {
      "$ref": "#/definitions/Namespace"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "namespaceName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Namespace"
}
```
