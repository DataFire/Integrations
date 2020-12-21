# @datafire/google_cloudshell

Client library for Cloud Shell API

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

.then(data => {
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

### cloudshell.users.environments.publicKeys.delete
Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key.


```js
google_cloudshell.cloudshell.users.environments.publicKeys.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the resource to be deleted, e.g. `users/me/environments/default/publicKeys/my-key`.
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

### cloudshell.users.environments.get
Gets an environment. Returns NOT_FOUND if the environment does not exist.


```js
google_cloudshell.cloudshell.users.environments.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
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
* output [Environment](#environment)

### cloudshell.users.environments.patch
Updates an existing environment.


```js
google_cloudshell.cloudshell.users.environments.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the resource to be updated, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
  * updateMask `string`: Mask specifying which fields in the environment should be updated.
  * body [Environment](#environment)
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
* output [Environment](#environment)

### cloudshell.users.environments.authorize
Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.


```js
google_cloudshell.cloudshell.users.environments.authorize({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the resource that should receive the credentials, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
  * body [AuthorizeEnvironmentRequest](#authorizeenvironmentrequest)
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

### cloudshell.users.environments.start
Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.


```js
google_cloudshell.cloudshell.users.environments.start({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
  * body [StartEnvironmentRequest](#startenvironmentrequest)
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

### cloudshell.users.environments.publicKeys.create
Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same format and content already exists, this will return the existing key.


```js
google_cloudshell.cloudshell.users.environments.publicKeys.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent resource name, e.g. `users/me/environments/default`.
  * body [CreatePublicKeyRequest](#createpublickeyrequest)
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
* output [PublicKey](#publickey)



## Definitions

### AuthorizeEnvironmentRequest
* AuthorizeEnvironmentRequest `object`: Request message for AuthorizeEnvironment.
  * accessToken `string`: The OAuth access token that should be sent to the environment.
  * expireTime `string`: The time when the credentials expire. If not set, defaults to one hour from when the server received the request.
  * idToken `string`: The OAuth ID token that should be sent to the environment.

### CreatePublicKeyRequest
* CreatePublicKeyRequest `object`: Request message for CreatePublicKey.
  * key [PublicKey](#publickey)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Environment
* Environment `object`: A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has a single environment with the ID "default".
  * dockerImage `string`: Required. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest".
  * id `string`: Output only. The environment's identifier, unique among the user's environments.
  * name `string`: Output only. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`.
  * publicKeys `array`: Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the CreatePublicKey and DeletePublicKey methods.
    * items [PublicKey](#publickey)
  * size `string` (values: VM_SIZE_UNSPECIFIED, DEFAULT, BOOSTED): Indicates the size of the backing VM running the environment. If set to something other than DEFAULT, it will be reverted to the default VM size after vm_size_expire_time.
  * sshHost `string`: Output only. Host to which clients can connect to initiate SSH sessions with the environment.
  * sshPort `integer`: Output only. Port to which clients can connect to initiate SSH sessions with the environment.
  * sshUsername `string`: Output only. Username that clients should use when initiating SSH sessions with the environment.
  * state `string` (values: STATE_UNSPECIFIED, DISABLED, STARTING, RUNNING, DELETING): Output only. Current execution state of this environment.
  * vmSizeExpireTime `string`: Output only. The time when the Environment will expire back to the default VM size.
  * webHost `string`: Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment.
  * webPorts `array`: Output only. Ports to which clients can connect to initiate HTTPS or WSS connections with the environment.
    * items `integer`

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### PublicKey
* PublicKey `object`: A public SSH key, corresponding to a private SSH key held by the client.
  * format `string` (values: FORMAT_UNSPECIFIED, SSH_DSS, SSH_RSA, ECDSA_SHA2_NISTP256, ECDSA_SHA2_NISTP384, ECDSA_SHA2_NISTP521): Required. Format of this key's content.
  * key `string`: Required. Content of this key.
  * name `string`: Output only. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`. `{owner_email}` is the email address of the user to whom the key belongs. `{environment_id}` is the identifier of the environment to which the key grants access. `{key_id}` is the unique identifier of the key. For example, `users/someone@example.com/environments/default/publicKeys/myKey`.

### StartEnvironmentMetadata
* StartEnvironmentMetadata `object`: Message included in the metadata field of operations returned from StartEnvironment.
  * state `string` (values: STATE_UNSPECIFIED, STARTING, UNARCHIVING_DISK, AWAITING_VM, AWAITING_COMPUTE_RESOURCES, FINISHED): Current state of the environment being started.

### StartEnvironmentRequest
* StartEnvironmentRequest `object`: Request message for StartEnvironment.
  * accessToken `string`: The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment.
  * publicKeys `array`: Public keys that should be added to the environment before it is started.
    * items [PublicKey](#publickey)

### StartEnvironmentResponse
* StartEnvironmentResponse `object`: Message included in the response field of operations returned from StartEnvironment once the operation is complete.
  * environment [Environment](#environment)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


