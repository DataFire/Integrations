# @datafire/google_cloudshell

Client library for Cloud Shell

## Installation and Usage
```bash
npm install --save @datafire/google_cloudshell
```
```js
let google_cloudshell = require('@datafire/google_cloudshell').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudshell.operations.delete({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

Allows users to start, configure, and connect to interactive shell sessions running in the cloud.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudshell.oauthCallback({
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
google_cloudshell.oauthRefresh(null, context)
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

### operations.delete
Deletes a long-running operation. This method indicates that the client is
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.


```js
google_cloudshell.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_cloudshell.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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

### operations.cancel
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.


```js
google_cloudshell.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CancelOperationRequest](#canceloperationrequest)
  * name **required** `string`: The name of the operation resource to be cancelled.
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



## Definitions

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Environment
* Environment `object`: A Cloud Shell environment, which is defined as the combination of a Docker
  * dockerImage `string`: Required. Full path to the Docker image used to run this environment, e.g.
  * id `string`: Output only. The environment's identifier, which is always "default".
  * name `string`: Output only. Full name of this resource, in the format
  * publicKeys `array`: Output only. Public keys associated with the environment. Clients can
    * items [PublicKey](#publickey)
  * sshHost `string`: Output only. Host to which clients can connect to initiate SSH sessions
  * sshPort `integer`: Output only. Port to which clients can connect to initiate SSH sessions
  * sshUsername `string`: Output only. Username that clients should use when initiating SSH sessions
  * state `string` (values: STATE_UNSPECIFIED, DISABLED, STARTING, RUNNING): Output only. Current execution state of this environment.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### PublicKey
* PublicKey `object`: A public SSH key, corresponding to a private SSH key held by the client.
  * format `string` (values: FORMAT_UNSPECIFIED, SSH_DSS, SSH_RSA, ECDSA_SHA2_NISTP256, ECDSA_SHA2_NISTP384, ECDSA_SHA2_NISTP521): Required. Format of this key's content.
  * key `string`: Required. Content of this key.
  * name `string`: Output only. Full name of this resource, in the format

### StartEnvironmentMetadata
* StartEnvironmentMetadata `object`: Message included in the metadata field of operations returned from
  * state `string` (values: STATE_UNSPECIFIED, STARTING, UNARCHIVING_DISK, FINISHED): Current state of the environment being started.

### StartEnvironmentResponse
* StartEnvironmentResponse `object`: Message included in the response field of operations returned from
  * environment [Environment](#environment)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any


