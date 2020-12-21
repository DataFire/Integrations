# @datafire/google_remotebuildexecution

Client library for Remote Build Execution API

## Installation and Usage
```bash
npm install --save @datafire/google_remotebuildexecution
```
```js
let google_remotebuildexecution = require('@datafire/google_remotebuildexecution').create({
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

Supplies a Remote Execution API service for tools such as bazel.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_remotebuildexecution.oauthCallback({
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
google_remotebuildexecution.oauthRefresh(null, context)
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

### remotebuildexecution.actionResults.get
Retrieve a cached execution result. Implementations SHOULD ensure that any blobs referenced from the ContentAddressableStorage are available at the time of returning the ActionResult and will be for some period of time afterwards. The TTLs of the referenced blobs SHOULD be increased if necessary and applicable. Errors: * `NOT_FOUND`: The requested `ActionResult` is not in the cache.


```js
google_remotebuildexecution.remotebuildexecution.actionResults.get({
  "instanceName": "",
  "hash": "",
  "sizeBytes": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
  * hash **required** `string`: The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
  * sizeBytes **required** `string`: The size of the blob, in bytes.
  * inlineOutputFiles `array`: A hint to the server to inline the contents of the listed output files. Each path needs to exactly match one path in `output_files` in the Command message.
  * inlineStderr `boolean`: A hint to the server to request inlining stderr in the ActionResult message.
  * inlineStdout `boolean`: A hint to the server to request inlining stdout in the ActionResult message.
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
* output [BuildBazelRemoteExecutionV2ActionResult](#buildbazelremoteexecutionv2actionresult)

### remotebuildexecution.actionResults.update
Upload a new execution result. In order to allow the server to perform access control based on the type of action, and to assist with client debugging, the client MUST first upload the Action that produced the result, along with its Command, into the `ContentAddressableStorage`. Errors: * `INVALID_ARGUMENT`: One or more arguments are invalid. * `FAILED_PRECONDITION`: One or more errors occurred in updating the action result, such as a missing command or action. * `RESOURCE_EXHAUSTED`: There is insufficient storage space to add the entry to the cache.


```js
google_remotebuildexecution.remotebuildexecution.actionResults.update({
  "instanceName": "",
  "hash": "",
  "sizeBytes": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
  * hash **required** `string`: The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
  * sizeBytes **required** `string`: The size of the blob, in bytes.
  * resultsCachePolicy.priority `integer`: The priority (relative importance) of this content in the overall cache. Generally, a lower value means a longer retention time or other advantage, but the interpretation of a given value is server-dependent. A priority of 0 means a *default* value, decided by the server. The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into retention/eviction policy.
  * body [BuildBazelRemoteExecutionV2ActionResult](#buildbazelremoteexecutionv2actionresult)
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
* output [BuildBazelRemoteExecutionV2ActionResult](#buildbazelremoteexecutionv2actionresult)

### remotebuildexecution.actions.execute
Execute an action remotely. In order to execute an action, the client must first upload all of the inputs, the Command to run, and the Action into the ContentAddressableStorage. It then calls `Execute` with an `action_digest` referring to them. The server will run the action and eventually return the result. The input `Action`'s fields MUST meet the various canonicalization requirements specified in the documentation for their types so that it has the same digest as other logically equivalent `Action`s. The server MAY enforce the requirements and return errors if a non-canonical input is received. It MAY also proceed without verifying some or all of the requirements, such as for performance reasons. If the server does not verify the requirement, then it will treat the `Action` as distinct from another logically equivalent action if they hash differently. Returns a stream of google.longrunning.Operation messages describing the resulting execution, with eventual `response` ExecuteResponse. The `metadata` on the operation is of type ExecuteOperationMetadata. If the client remains connected after the first response is returned after the server, then updates are streamed as if the client had called WaitExecution until the execution completes or the request reaches an error. The operation can also be queried using Operations API. The server NEED NOT implement other methods or functionality of the Operations API. Errors discovered during creation of the `Operation` will be reported as gRPC Status errors, while errors that occurred while running the action will be reported in the `status` field of the `ExecuteResponse`. The server MUST NOT set the `error` field of the `Operation` proto. The possible errors include: * `INVALID_ARGUMENT`: One or more arguments are invalid. * `FAILED_PRECONDITION`: One or more errors occurred in setting up the action requested, such as a missing input or command or no worker being available. The client may be able to fix the errors and retry. * `RESOURCE_EXHAUSTED`: There is insufficient quota of some resource to run the action. * `UNAVAILABLE`: Due to a transient condition, such as all workers being occupied (and the server does not support a queue), the action could not be started. The client should retry. * `INTERNAL`: An internal error occurred in the execution engine or the worker. * `DEADLINE_EXCEEDED`: The execution timed out. * `CANCELLED`: The operation was cancelled by the client. This status is only possible if the server implements the Operations API CancelOperation method, and it was called for the current execution. In the case of a missing input or command, the server SHOULD additionally send a PreconditionFailure error detail where, for each requested blob not present in the CAS, there is a `Violation` with a `type` of `MISSING` and a `subject` of `"blobs/{hash}/{size}"` indicating the digest of the missing blob.


```js
google_remotebuildexecution.remotebuildexecution.actions.execute({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
  * body [BuildBazelRemoteExecutionV2ExecuteRequest](#buildbazelremoteexecutionv2executerequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### remotebuildexecution.blobs.getTree
Fetch the entire directory tree rooted at a node. This request must be targeted at a Directory stored in the ContentAddressableStorage (CAS). The server will enumerate the `Directory` tree recursively and return every node descended from the root. The GetTreeRequest.page_token parameter can be used to skip ahead in the stream (e.g. when retrying a partially completed and aborted request), by setting it to a value taken from GetTreeResponse.next_page_token of the last successfully processed GetTreeResponse). The exact traversal order is unspecified and, unless retrieving subsequent pages from an earlier request, is not guaranteed to be stable across multiple invocations of `GetTree`. If part of the tree is missing from the CAS, the server will return the portion present and omit the rest. Errors: * `NOT_FOUND`: The requested tree root is not present in the CAS.


```js
google_remotebuildexecution.remotebuildexecution.blobs.getTree({
  "instanceName": "",
  "hash": "",
  "sizeBytes": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
  * hash **required** `string`: The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
  * sizeBytes **required** `string`: The size of the blob, in bytes.
  * pageSize `integer`: A maximum page size to request. If present, the server will request no more than this many items. Regardless of whether a page size is specified, the server may place its own limit on the number of items to be returned and require the client to retrieve more items using a subsequent request.
  * pageToken `string`: A page token, which must be a value received in a previous GetTreeResponse. If present, the server will use that token as an offset, returning only that page and the ones that succeed it.
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
* output [BuildBazelRemoteExecutionV2GetTreeResponse](#buildbazelremoteexecutionv2gettreeresponse)

### remotebuildexecution.blobs.batchRead
Download many blobs at once. The server may enforce a limit of the combined total size of blobs to be downloaded using this API. This limit may be obtained using the Capabilities API. Requests exceeding the limit should either be split into smaller chunks or downloaded using the ByteStream API, as appropriate. This request is equivalent to calling a Bytestream `Read` request on each individual blob, in parallel. The requests may succeed or fail independently. Errors: * `INVALID_ARGUMENT`: The client attempted to read more than the server supported limit. Every error on individual read will be returned in the corresponding digest status.


```js
google_remotebuildexecution.remotebuildexecution.blobs.batchRead({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
  * body [BuildBazelRemoteExecutionV2BatchReadBlobsRequest](#buildbazelremoteexecutionv2batchreadblobsrequest)
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
* output [BuildBazelRemoteExecutionV2BatchReadBlobsResponse](#buildbazelremoteexecutionv2batchreadblobsresponse)

### remotebuildexecution.blobs.batchUpdate
Upload many blobs at once. The server may enforce a limit of the combined total size of blobs to be uploaded using this API. This limit may be obtained using the Capabilities API. Requests exceeding the limit should either be split into smaller chunks or uploaded using the ByteStream API, as appropriate. This request is equivalent to calling a Bytestream `Write` request on each individual blob, in parallel. The requests may succeed or fail independently. Errors: * `INVALID_ARGUMENT`: The client attempted to upload more than the server supported limit. Individual requests may return the following errors, additionally: * `RESOURCE_EXHAUSTED`: There is insufficient disk quota to store the blob. * `INVALID_ARGUMENT`: The Digest does not match the provided data.


```js
google_remotebuildexecution.remotebuildexecution.blobs.batchUpdate({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
  * body [BuildBazelRemoteExecutionV2BatchUpdateBlobsRequest](#buildbazelremoteexecutionv2batchupdateblobsrequest)
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
* output [BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse](#buildbazelremoteexecutionv2batchupdateblobsresponse)

### remotebuildexecution.blobs.findMissing
Determine if blobs are present in the CAS. Clients can use this API before uploading blobs to determine which ones are already present in the CAS and do not need to be uploaded again. Servers SHOULD increase the TTLs of the referenced blobs if necessary and applicable. There are no method-specific errors.


```js
google_remotebuildexecution.remotebuildexecution.blobs.findMissing({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
  * body [BuildBazelRemoteExecutionV2FindMissingBlobsRequest](#buildbazelremoteexecutionv2findmissingblobsrequest)
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
* output [BuildBazelRemoteExecutionV2FindMissingBlobsResponse](#buildbazelremoteexecutionv2findmissingblobsresponse)

### remotebuildexecution.getCapabilities
GetCapabilities returns the server capabilities configuration of the remote endpoint. Only the capabilities of the services supported by the endpoint will be returned: * Execution + CAS + Action Cache endpoints should return both CacheCapabilities and ExecutionCapabilities. * Execution only endpoints should return ExecutionCapabilities. * CAS + Action Cache only endpoints should return CacheCapabilities.


```js
google_remotebuildexecution.remotebuildexecution.getCapabilities({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** `string`: The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
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
* output [BuildBazelRemoteExecutionV2ServerCapabilities](#buildbazelremoteexecutionv2servercapabilities)

### remotebuildexecution.operations.waitExecution
Wait for an execution operation to complete. When the client initially makes the request, the server immediately responds with the current status of the execution. The server will leave the request stream open until the operation completes, and then respond with the completed operation. The server MAY choose to stream additional updates as execution progresses, such as to provide an update as to the state of the execution.


```js
google_remotebuildexecution.remotebuildexecution.operations.waitExecution({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the Operation returned by Execute.
  * body [BuildBazelRemoteExecutionV2WaitExecutionRequest](#buildbazelremoteexecutionv2waitexecutionrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)



## Definitions

### BuildBazelRemoteExecutionV2Action
* BuildBazelRemoteExecutionV2Action `object`: An `Action` captures all the information about an execution which is required to reproduce it. `Action`s are the core component of the [Execution] service. A single `Action` represents a repeatable action that can be performed by the execution service. `Action`s can be succinctly identified by the digest of their wire format encoding and, once an `Action` has been executed, will be cached in the action cache. Future requests can then use the cached result rather than needing to run afresh. When a server completes execution of an Action, it MAY choose to cache the result in the ActionCache unless `do_not_cache` is `true`. Clients SHOULD expect the server to do so. By default, future calls to Execute the same `Action` will also serve their results from the cache. Clients must take care to understand the caching behaviour. Ideally, all `Action`s will be reproducible so that serving a result from cache is always desirable and correct.
  * commandDigest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * doNotCache `boolean`: If true, then the `Action`'s result cannot be cached, and in-flight requests for the same `Action` may not be merged.
  * inputRootDigest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * outputNodeProperties `array`: List of required supported NodeProperty keys. In order to ensure that equivalent `Action`s always hash to the same value, the supported node properties MUST be lexicographically sorted by name. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes. The interpretation of these properties is server-dependent. If a property is not recognized by the server, the server will return an `INVALID_ARGUMENT` error.
    * items `string`
  * timeout `string`: A timeout after which the execution should be killed. If the timeout is absent, then the client is specifying that the execution should continue as long as the server will let it. The server SHOULD impose a timeout if the client does not specify one, however, if the client does specify a timeout that is longer than the server's maximum timeout, the server MUST reject the request. The timeout is a part of the Action message, and therefore two `Actions` with different timeouts are different, even if they are otherwise identical. This is because, if they were not, running an `Action` with a lower timeout than is required might result in a cache hit from an execution run with a longer timeout, hiding the fact that the timeout is too short. By encoding it directly in the `Action`, a lower timeout will result in a cache miss and the execution timeout will fail immediately, rather than whenever the cache entry gets evicted.

### BuildBazelRemoteExecutionV2ActionCacheUpdateCapabilities
* BuildBazelRemoteExecutionV2ActionCacheUpdateCapabilities `object`: Describes the server/instance capabilities for updating the action cache.
  * updateEnabled `boolean`

### BuildBazelRemoteExecutionV2ActionResult
* BuildBazelRemoteExecutionV2ActionResult `object`: An ActionResult represents the result of an Action being run.
  * executionMetadata [BuildBazelRemoteExecutionV2ExecutedActionMetadata](#buildbazelremoteexecutionv2executedactionmetadata)
  * exitCode `integer`: The exit code of the command.
  * outputDirectories `array`: The output directories of the action. For each output directory requested in the `output_directories` or `output_paths` field of the Action, if the corresponding directory existed after the action completed, a single entry will be present in the output list, which will contain the digest of a Tree message containing the directory tree, and the path equal exactly to the corresponding Action output_directories member. As an example, suppose the Action had an output directory `a/b/dir` and the execution produced the following contents in `a/b/dir`: a file named `bar` and a directory named `foo` with an executable file named `baz`. Then, output_directory will contain (hashes shortened for readability): ```json // OutputDirectory proto: { path: "a/b/dir" tree_digest: { hash: "4a73bc9d03...", size: 55 } } // Tree proto with hash "4a73bc9d03..." and size 55: { root: { files: [ { name: "bar", digest: { hash: "4a73bc9d03...", size: 65534 } } ], directories: [ { name: "foo", digest: { hash: "4cf2eda940...", size: 43 } } ] } children : { // (Directory proto with hash "4cf2eda940..." and size 43) files: [ { name: "baz", digest: { hash: "b2c941073e...", size: 1294, }, is_executable: true } ] } } ``` If an output of the same name as listed in `output_files` of the Command was found in `output_directories`, but was not a directory, the server will return a FAILED_PRECONDITION.
    * items [BuildBazelRemoteExecutionV2OutputDirectory](#buildbazelremoteexecutionv2outputdirectory)
  * outputDirectorySymlinks `array`: The output directories of the action that are symbolic links to other directories. Those may be links to other output directories, or input directories, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. For each output directory requested in the `output_directories` field of the Action, if the directory existed after the action completed, a single entry will be present either in this field, or in the `output_directories` field, if the directory was not a symbolic link. If an output of the same name was found, but was a symbolic link to a file instead of a directory, the server will return a FAILED_PRECONDITION. If the action does not produce the requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted. DEPRECATED as of v2.1. Servers that wish to be compatible with v2.0 API should still populate this field in addition to `output_symlinks`.
    * items [BuildBazelRemoteExecutionV2OutputSymlink](#buildbazelremoteexecutionv2outputsymlink)
  * outputFileSymlinks `array`: The output files of the action that are symbolic links to other files. Those may be links to other output files, or input files, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. For each output file requested in the `output_files` or `output_paths` field of the Action, if the corresponding file existed after the action completed, a single entry will be present either in this field, or in the `output_files` field, if the file was not a symbolic link. If an output symbolic link of the same name as listed in `output_files` of the Command was found, but its target type was not a regular file, the server will return a FAILED_PRECONDITION. If the action does not produce the requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted. DEPRECATED as of v2.1. Servers that wish to be compatible with v2.0 API should still populate this field in addition to `output_symlinks`.
    * items [BuildBazelRemoteExecutionV2OutputSymlink](#buildbazelremoteexecutionv2outputsymlink)
  * outputFiles `array`: The output files of the action. For each output file requested in the `output_files` or `output_paths` field of the Action, if the corresponding file existed after the action completed, a single entry will be present either in this field, or the `output_file_symlinks` field if the file was a symbolic link to another file (`output_symlinks` field after v2.1). If an output listed in `output_files` was found, but was a directory rather than a regular file, the server will return a FAILED_PRECONDITION. If the action does not produce the requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted.
    * items [BuildBazelRemoteExecutionV2OutputFile](#buildbazelremoteexecutionv2outputfile)
  * outputSymlinks `array`: New in v2.1: this field will only be populated if the command `output_paths` field was used, and not the pre v2.1 `output_files` or `output_directories` fields. The output paths of the action that are symbolic links to other paths. Those may be links to other outputs, or inputs, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. A single entry for each output requested in `output_paths` field of the Action, if the corresponding path existed after the action completed and was a symbolic link. If the action does not produce a requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted.
    * items [BuildBazelRemoteExecutionV2OutputSymlink](#buildbazelremoteexecutionv2outputsymlink)
  * stderrDigest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * stderrRaw `string`: The standard error buffer of the action. The server SHOULD NOT inline stderr unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits.
  * stdoutDigest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * stdoutRaw `string`: The standard output buffer of the action. The server SHOULD NOT inline stdout unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits.

### BuildBazelRemoteExecutionV2BatchReadBlobsRequest
* BuildBazelRemoteExecutionV2BatchReadBlobsRequest `object`: A request message for ContentAddressableStorage.BatchReadBlobs.
  * digests `array`: The individual blob digests.
    * items [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)

### BuildBazelRemoteExecutionV2BatchReadBlobsResponse
* BuildBazelRemoteExecutionV2BatchReadBlobsResponse `object`: A response message for ContentAddressableStorage.BatchReadBlobs.
  * responses `array`: The responses to the requests.
    * items [BuildBazelRemoteExecutionV2BatchReadBlobsResponseResponse](#buildbazelremoteexecutionv2batchreadblobsresponseresponse)

### BuildBazelRemoteExecutionV2BatchReadBlobsResponseResponse
* BuildBazelRemoteExecutionV2BatchReadBlobsResponseResponse `object`: A response corresponding to a single blob that the client tried to download.
  * data `string`: The raw binary data.
  * digest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * status [GoogleRpcStatus](#googlerpcstatus)

### BuildBazelRemoteExecutionV2BatchUpdateBlobsRequest
* BuildBazelRemoteExecutionV2BatchUpdateBlobsRequest `object`: A request message for ContentAddressableStorage.BatchUpdateBlobs.
  * requests `array`: The individual upload requests.
    * items [BuildBazelRemoteExecutionV2BatchUpdateBlobsRequestRequest](#buildbazelremoteexecutionv2batchupdateblobsrequestrequest)

### BuildBazelRemoteExecutionV2BatchUpdateBlobsRequestRequest
* BuildBazelRemoteExecutionV2BatchUpdateBlobsRequestRequest `object`: A request corresponding to a single blob that the client wants to upload.
  * data `string`: The raw binary data.
  * digest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)

### BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
* BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse `object`: A response message for ContentAddressableStorage.BatchUpdateBlobs.
  * responses `array`: The responses to the requests.
    * items [BuildBazelRemoteExecutionV2BatchUpdateBlobsResponseResponse](#buildbazelremoteexecutionv2batchupdateblobsresponseresponse)

### BuildBazelRemoteExecutionV2BatchUpdateBlobsResponseResponse
* BuildBazelRemoteExecutionV2BatchUpdateBlobsResponseResponse `object`: A response corresponding to a single blob that the client tried to upload.
  * digest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * status [GoogleRpcStatus](#googlerpcstatus)

### BuildBazelRemoteExecutionV2CacheCapabilities
* BuildBazelRemoteExecutionV2CacheCapabilities `object`: Capabilities of the remote cache system.
  * actionCacheUpdateCapabilities [BuildBazelRemoteExecutionV2ActionCacheUpdateCapabilities](#buildbazelremoteexecutionv2actioncacheupdatecapabilities)
  * cachePriorityCapabilities [BuildBazelRemoteExecutionV2PriorityCapabilities](#buildbazelremoteexecutionv2prioritycapabilities)
  * digestFunction `array`: All the digest functions supported by the remote cache. Remote cache may support multiple digest functions simultaneously.
    * items `string` (values: UNKNOWN, SHA256, SHA1, MD5, VSO, SHA384, SHA512)
  * maxBatchTotalSizeBytes `string`: Maximum total size of blobs to be uploaded/downloaded using batch methods. A value of 0 means no limit is set, although in practice there will always be a message size limitation of the protocol in use, e.g. GRPC.
  * symlinkAbsolutePathStrategy `string` (values: UNKNOWN, DISALLOWED, ALLOWED): Whether absolute symlink targets are supported.

### BuildBazelRemoteExecutionV2Command
* BuildBazelRemoteExecutionV2Command `object`: A `Command` is the actual command executed by a worker running an Action and specifications of its environment. Except as otherwise required, the environment (such as which system libraries or binaries are available, and what filesystems are mounted where) is defined by and specific to the implementation of the remote execution API.
  * arguments `array`: The arguments to the command. The first argument must be the path to the executable, which must be either a relative path, in which case it is evaluated with respect to the input root, or an absolute path.
    * items `string`
  * environmentVariables `array`: The environment variables to set when running the program. The worker may provide its own default environment variables; these defaults can be overridden using this field. Additional variables can also be specified. In order to ensure that equivalent Commands always hash to the same value, the environment variables MUST be lexicographically sorted by name. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes.
    * items [BuildBazelRemoteExecutionV2CommandEnvironmentVariable](#buildbazelremoteexecutionv2commandenvironmentvariable)
  * outputDirectories `array`: A list of the output directories that the client expects to retrieve from the action. Only the listed directories will be returned (an entire directory structure will be returned as a Tree message digest, see OutputDirectory), as well as files listed in `output_files`. Other files or directories that may be created during command execution are discarded. The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path. The special value of empty string is allowed, although not recommended, and can be used to capture the entire working directory tree, including inputs. In order to ensure consistent hashing of the same Action, the output paths MUST be sorted lexicographically by code point (or, equivalently, by UTF-8 bytes). An output directory cannot be duplicated or have the same path as any of the listed output files. An output directory is allowed to be a parent of another output directory. Directories leading up to the output directories (but not the output directories themselves) are created by the worker prior to execution, even if they are not explicitly part of the input root. DEPRECATED since 2.1: Use `output_paths` instead.
    * items `string`
  * outputFiles `array`: A list of the output files that the client expects to retrieve from the action. Only the listed files, as well as directories listed in `output_directories`, will be returned to the client as output. Other files or directories that may be created during command execution are discarded. The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path. In order to ensure consistent hashing of the same Action, the output paths MUST be sorted lexicographically by code point (or, equivalently, by UTF-8 bytes). An output file cannot be duplicated, be a parent of another output file, or have the same path as any of the listed output directories. Directories leading up to the output files are created by the worker prior to execution, even if they are not explicitly part of the input root. DEPRECATED since v2.1: Use `output_paths` instead.
    * items `string`
  * outputPaths `array`: A list of the output paths that the client expects to retrieve from the action. Only the listed paths will be returned to the client as output. The type of the output (file or directory) is not specified, and will be determined by the server after action execution. If the resulting path is a file, it will be returned in an OutputFile) typed field. If the path is a directory, the entire directory structure will be returned as a Tree message digest, see OutputDirectory) Other files or directories that may be created during command execution are discarded. The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path. In order to ensure consistent hashing of the same Action, the output paths MUST be deduplicated and sorted lexicographically by code point (or, equivalently, by UTF-8 bytes). Directories leading up to the output paths are created by the worker prior to execution, even if they are not explicitly part of the input root. New in v2.1: this field supersedes the DEPRECATED `output_files` and `output_directories` fields. If `output_paths` is used, `output_files` and `output_directories` will be ignored!
    * items `string`
  * platform [BuildBazelRemoteExecutionV2Platform](#buildbazelremoteexecutionv2platform)
  * workingDirectory `string`: The working directory, relative to the input root, for the command to run in. It must be a directory which exists in the input tree. If it is left empty, then the action is run in the input root.

### BuildBazelRemoteExecutionV2CommandEnvironmentVariable
* BuildBazelRemoteExecutionV2CommandEnvironmentVariable `object`: An `EnvironmentVariable` is one variable to set in the running program's environment.
  * name `string`: The variable name.
  * value `string`: The variable value.

### BuildBazelRemoteExecutionV2Digest
* BuildBazelRemoteExecutionV2Digest `object`: A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields.
  * hash `string`: The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
  * sizeBytes `string`: The size of the blob, in bytes.

### BuildBazelRemoteExecutionV2Directory
* BuildBazelRemoteExecutionV2Directory `object`: A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes, DirectoryNodes and SymlinkNodes. Each `Node` contains its name in the directory, either the digest of its content (either a file blob or a `Directory` proto) or a symlink target, as well as possibly some metadata about the file or directory. In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`: * Every child in the directory must have a path of exactly one segment. Multiple levels of directory hierarchy may not be collapsed. * Each child in the directory must have a unique path segment (file name). Note that while the API itself is case-sensitive, the environment where the Action is executed may or may not be case-sensitive. That is, it is legal to call the API with a Directory that has both "Foo" and "foo" as children, but the Action may be rejected by the remote system upon execution. * The files, directories and symlinks in the directory must each be sorted in lexicographical order by path. The path strings must be sorted by code point, equivalently, by UTF-8 bytes. * The NodeProperties of files, directories, and symlinks must be sorted in lexicographical order by property name. A `Directory` that obeys the restrictions is said to be in canonical form. As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability): ```json // (Directory proto) { files: [ { name: "bar", digest: { hash: "4a73bc9d03...", size: 65534 }, node_properties: [ { "name": "MTime", "value": "2017-01-15T01:30:15.01Z" } ] } ], directories: [ { name: "foo", digest: { hash: "4cf2eda940...", size: 43 } } ] } // (Directory proto with hash "4cf2eda940..." and size 43) { files: [ { name: "baz", digest: { hash: "b2c941073e...", size: 1294, }, is_executable: true } ] } ```
  * directories `array`: The subdirectories in the directory.
    * items [BuildBazelRemoteExecutionV2DirectoryNode](#buildbazelremoteexecutionv2directorynode)
  * files `array`: The files in the directory.
    * items [BuildBazelRemoteExecutionV2FileNode](#buildbazelremoteexecutionv2filenode)
  * nodeProperties `array`: The node properties of the Directory.
    * items [BuildBazelRemoteExecutionV2NodeProperty](#buildbazelremoteexecutionv2nodeproperty)
  * symlinks `array`: The symlinks in the directory.
    * items [BuildBazelRemoteExecutionV2SymlinkNode](#buildbazelremoteexecutionv2symlinknode)

### BuildBazelRemoteExecutionV2DirectoryNode
* BuildBazelRemoteExecutionV2DirectoryNode `object`: A `DirectoryNode` represents a child of a Directory which is itself a `Directory` and its associated metadata.
  * digest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * name `string`: The name of the directory.

### BuildBazelRemoteExecutionV2ExecuteOperationMetadata
* BuildBazelRemoteExecutionV2ExecuteOperationMetadata `object`: Metadata about an ongoing execution, which will be contained in the metadata field of the Operation.
  * actionDigest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * stage `string` (values: UNKNOWN, CACHE_CHECK, QUEUED, EXECUTING, COMPLETED): The current stage of execution.
  * stderrStreamName `string`: If set, the client can use this name with ByteStream.Read to stream the standard error.
  * stdoutStreamName `string`: If set, the client can use this name with ByteStream.Read to stream the standard output.

### BuildBazelRemoteExecutionV2ExecuteRequest
* BuildBazelRemoteExecutionV2ExecuteRequest `object`: A request message for Execution.Execute.
  * actionDigest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * executionPolicy [BuildBazelRemoteExecutionV2ExecutionPolicy](#buildbazelremoteexecutionv2executionpolicy)
  * resultsCachePolicy [BuildBazelRemoteExecutionV2ResultsCachePolicy](#buildbazelremoteexecutionv2resultscachepolicy)
  * skipCacheLookup `boolean`: If true, the action will be executed even if its result is already present in the ActionCache. The execution is still allowed to be merged with other in-flight executions of the same action, however - semantically, the service MUST only guarantee that the results of an execution with this field set were not visible before the corresponding execution request was sent. Note that actions from execution requests setting this field set are still eligible to be entered into the action cache upon completion, and services SHOULD overwrite any existing entries that may exist. This allows skip_cache_lookup requests to be used as a mechanism for replacing action cache entries that reference outputs no longer available or that are poisoned in any way. If false, the result may be served from the action cache.

### BuildBazelRemoteExecutionV2ExecuteResponse
* BuildBazelRemoteExecutionV2ExecuteResponse `object`: The response message for Execution.Execute, which will be contained in the response field of the Operation.
  * cachedResult `boolean`: True if the result was served from cache, false if it was executed.
  * message `string`: Freeform informational message with details on the execution of the action that may be displayed to the user upon failure or when requested explicitly.
  * result [BuildBazelRemoteExecutionV2ActionResult](#buildbazelremoteexecutionv2actionresult)
  * serverLogs `object`: An optional list of additional log outputs the server wishes to provide. A server can use this to return execution-specific logs however it wishes. This is intended primarily to make it easier for users to debug issues that may be outside of the actual job execution, such as by identifying the worker executing the action or by providing logs from the worker's setup phase. The keys SHOULD be human readable so that a client can display them to a user.
  * status [GoogleRpcStatus](#googlerpcstatus)

### BuildBazelRemoteExecutionV2ExecutedActionMetadata
* BuildBazelRemoteExecutionV2ExecutedActionMetadata `object`: ExecutedActionMetadata contains details about a completed execution.
  * executionCompletedTimestamp `string`: When the worker completed executing the action command.
  * executionStartTimestamp `string`: When the worker started executing the action command.
  * inputFetchCompletedTimestamp `string`: When the worker finished fetching action inputs.
  * inputFetchStartTimestamp `string`: When the worker started fetching action inputs.
  * outputUploadCompletedTimestamp `string`: When the worker finished uploading action outputs.
  * outputUploadStartTimestamp `string`: When the worker started uploading action outputs.
  * queuedTimestamp `string`: When was the action added to the queue.
  * worker `string`: The name of the worker which ran the execution.
  * workerCompletedTimestamp `string`: When the worker completed the action, including all stages.
  * workerStartTimestamp `string`: When the worker received the action.

### BuildBazelRemoteExecutionV2ExecutionCapabilities
* BuildBazelRemoteExecutionV2ExecutionCapabilities `object`: Capabilities of the remote execution system.
  * digestFunction `string` (values: UNKNOWN, SHA256, SHA1, MD5, VSO, SHA384, SHA512): Remote execution may only support a single digest function.
  * execEnabled `boolean`: Whether remote execution is enabled for the particular server/instance.
  * executionPriorityCapabilities [BuildBazelRemoteExecutionV2PriorityCapabilities](#buildbazelremoteexecutionv2prioritycapabilities)
  * supportedNodeProperties `array`: Supported node properties.
    * items `string`

### BuildBazelRemoteExecutionV2ExecutionPolicy
* BuildBazelRemoteExecutionV2ExecutionPolicy `object`: An `ExecutionPolicy` can be used to control the scheduling of the action.
  * priority `integer`: The priority (relative importance) of this action. Generally, a lower value means that the action should be run sooner than actions having a greater priority value, but the interpretation of a given value is server- dependent. A priority of 0 means the *default* priority. Priorities may be positive or negative, and such actions should run later or sooner than actions having the default priority, respectively. The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into scheduling policy.

### BuildBazelRemoteExecutionV2FileNode
* BuildBazelRemoteExecutionV2FileNode `object`: A `FileNode` represents a single file and associated metadata.
  * digest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * isExecutable `boolean`: True if file is executable, false otherwise.
  * name `string`: The name of the file.
  * nodeProperties `array`: The node properties of the FileNode.
    * items [BuildBazelRemoteExecutionV2NodeProperty](#buildbazelremoteexecutionv2nodeproperty)

### BuildBazelRemoteExecutionV2FindMissingBlobsRequest
* BuildBazelRemoteExecutionV2FindMissingBlobsRequest `object`: A request message for ContentAddressableStorage.FindMissingBlobs.
  * blobDigests `array`: A list of the blobs to check.
    * items [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)

### BuildBazelRemoteExecutionV2FindMissingBlobsResponse
* BuildBazelRemoteExecutionV2FindMissingBlobsResponse `object`: A response message for ContentAddressableStorage.FindMissingBlobs.
  * missingBlobDigests `array`: A list of the blobs requested *not* present in the storage.
    * items [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)

### BuildBazelRemoteExecutionV2GetTreeResponse
* BuildBazelRemoteExecutionV2GetTreeResponse `object`: A response message for ContentAddressableStorage.GetTree.
  * directories `array`: The directories descended from the requested root.
    * items [BuildBazelRemoteExecutionV2Directory](#buildbazelremoteexecutionv2directory)
  * nextPageToken `string`: If present, signifies that there are more results which the client can retrieve by passing this as the page_token in a subsequent request. If empty, signifies that this is the last page of results.

### BuildBazelRemoteExecutionV2LogFile
* BuildBazelRemoteExecutionV2LogFile `object`: A `LogFile` is a log stored in the CAS.
  * digest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * humanReadable `boolean`: This is a hint as to the purpose of the log, and is set to true if the log is human-readable text that can be usefully displayed to a user, and false otherwise. For instance, if a command-line client wishes to print the server logs to the terminal for a failed action, this allows it to avoid displaying a binary file.

### BuildBazelRemoteExecutionV2NodeProperty
* BuildBazelRemoteExecutionV2NodeProperty `object`: A single property for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the property `name`s that it accepts. If permitted by the server, the same `name` may occur multiple times.
  * name `string`: The property name.
  * value `string`: The property value.

### BuildBazelRemoteExecutionV2OutputDirectory
* BuildBazelRemoteExecutionV2OutputDirectory `object`: An `OutputDirectory` is the output in an `ActionResult` corresponding to a directory's full contents rather than a single file.
  * path `string`: The full path of the directory relative to the working directory. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. The empty string value is allowed, and it denotes the entire working directory.
  * treeDigest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)

### BuildBazelRemoteExecutionV2OutputFile
* BuildBazelRemoteExecutionV2OutputFile `object`: An `OutputFile` is similar to a FileNode, but it is used as an output in an `ActionResult`. It allows a full file path rather than only a name.
  * contents `string`: The contents of the file if inlining was requested. The server SHOULD NOT inline file contents unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits.
  * digest [BuildBazelRemoteExecutionV2Digest](#buildbazelremoteexecutionv2digest)
  * isExecutable `boolean`: True if file is executable, false otherwise.
  * nodeProperties `array`: The supported node properties of the OutputFile, if requested by the Action.
    * items [BuildBazelRemoteExecutionV2NodeProperty](#buildbazelremoteexecutionv2nodeproperty)
  * path `string`: The full path of the file relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash.

### BuildBazelRemoteExecutionV2OutputSymlink
* BuildBazelRemoteExecutionV2OutputSymlink `object`: An `OutputSymlink` is similar to a Symlink, but it is used as an output in an `ActionResult`. `OutputSymlink` is binary-compatible with `SymlinkNode`.
  * nodeProperties `array`: The supported node properties of the OutputSymlink, if requested by the Action.
    * items [BuildBazelRemoteExecutionV2NodeProperty](#buildbazelremoteexecutionv2nodeproperty)
  * path `string`: The full path of the symlink relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash.
  * target `string`: The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. The canonical form forbids the substrings `/./` and `//` in the target path. `..` components are allowed anywhere in the target path.

### BuildBazelRemoteExecutionV2Platform
* BuildBazelRemoteExecutionV2Platform `object`: A `Platform` is a set of requirements, such as hardware, operating system, or compiler toolchain, for an Action's execution environment. A `Platform` is represented as a series of key-value pairs representing the properties that are required of the platform.
  * properties `array`: The properties that make up this platform. In order to ensure that equivalent `Platform`s always hash to the same value, the properties MUST be lexicographically sorted by name, and then by value. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes.
    * items [BuildBazelRemoteExecutionV2PlatformProperty](#buildbazelremoteexecutionv2platformproperty)

### BuildBazelRemoteExecutionV2PlatformProperty
* BuildBazelRemoteExecutionV2PlatformProperty `object`: A single property for the environment. The server is responsible for specifying the property `name`s that it accepts. If an unknown `name` is provided in the requirements for an Action, the server SHOULD reject the execution request. If permitted by the server, the same `name` may occur multiple times. The server is also responsible for specifying the interpretation of property `value`s. For instance, a property describing how much RAM must be available may be interpreted as allowing a worker with 16GB to fulfill a request for 8GB, while a property describing the OS environment on which the action must be performed may require an exact match with the worker's OS. The server MAY use the `value` of one or more properties to determine how it sets up the execution environment, such as by making specific system files available to the worker.
  * name `string`: The property name.
  * value `string`: The property value.

### BuildBazelRemoteExecutionV2PriorityCapabilities
* BuildBazelRemoteExecutionV2PriorityCapabilities `object`: Allowed values for priority in ResultsCachePolicy Used for querying both cache and execution valid priority ranges.
  * priorities `array`
    * items [BuildBazelRemoteExecutionV2PriorityCapabilitiesPriorityRange](#buildbazelremoteexecutionv2prioritycapabilitiespriorityrange)

### BuildBazelRemoteExecutionV2PriorityCapabilitiesPriorityRange
* BuildBazelRemoteExecutionV2PriorityCapabilitiesPriorityRange `object`: Supported range of priorities, including boundaries.
  * maxPriority `integer`
  * minPriority `integer`

### BuildBazelRemoteExecutionV2RequestMetadata
* BuildBazelRemoteExecutionV2RequestMetadata `object`: An optional Metadata to attach to any RPC request to tell the server about an external context of the request. The server may use this for logging or other purposes. To use it, the client attaches the header to the call using the canonical proto serialization: * name: `build.bazel.remote.execution.v2.requestmetadata-bin` * contents: the base64 encoded binary `RequestMetadata` message. Note: the gRPC library serializes binary headers encoded in base 64 by default (https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#requests). Therefore, if the gRPC library is used to pass/retrieve this metadata, the user may ignore the base64 encoding and assume it is simply serialized as a binary message.
  * actionId `string`: An identifier that ties multiple requests to the same action. For example, multiple requests to the CAS, Action Cache, and Execution API are used in order to compile foo.cc.
  * correlatedInvocationsId `string`: An identifier to tie multiple tool invocations together. For example, runs of foo_test, bar_test and baz_test on a post-submit of a given patch.
  * toolDetails [BuildBazelRemoteExecutionV2ToolDetails](#buildbazelremoteexecutionv2tooldetails)
  * toolInvocationId `string`: An identifier that ties multiple actions together to a final result. For example, multiple actions are required to build and run foo_test.

### BuildBazelRemoteExecutionV2ResultsCachePolicy
* BuildBazelRemoteExecutionV2ResultsCachePolicy `object`: A `ResultsCachePolicy` is used for fine-grained control over how action outputs are stored in the CAS and Action Cache.
  * priority `integer`: The priority (relative importance) of this content in the overall cache. Generally, a lower value means a longer retention time or other advantage, but the interpretation of a given value is server-dependent. A priority of 0 means a *default* value, decided by the server. The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into retention/eviction policy.

### BuildBazelRemoteExecutionV2ServerCapabilities
* BuildBazelRemoteExecutionV2ServerCapabilities `object`: A response message for Capabilities.GetCapabilities.
  * cacheCapabilities [BuildBazelRemoteExecutionV2CacheCapabilities](#buildbazelremoteexecutionv2cachecapabilities)
  * deprecatedApiVersion [BuildBazelSemverSemVer](#buildbazelsemversemver)
  * executionCapabilities [BuildBazelRemoteExecutionV2ExecutionCapabilities](#buildbazelremoteexecutionv2executioncapabilities)
  * highApiVersion [BuildBazelSemverSemVer](#buildbazelsemversemver)
  * lowApiVersion [BuildBazelSemverSemVer](#buildbazelsemversemver)

### BuildBazelRemoteExecutionV2SymlinkNode
* BuildBazelRemoteExecutionV2SymlinkNode `object`: A `SymlinkNode` represents a symbolic link.
  * name `string`: The name of the symlink.
  * nodeProperties `array`: The node properties of the SymlinkNode.
    * items [BuildBazelRemoteExecutionV2NodeProperty](#buildbazelremoteexecutionv2nodeproperty)
  * target `string`: The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. The canonical form forbids the substrings `/./` and `//` in the target path. `..` components are allowed anywhere in the target path.

### BuildBazelRemoteExecutionV2ToolDetails
* BuildBazelRemoteExecutionV2ToolDetails `object`: Details for the tool used to call the API.
  * toolName `string`: Name of the tool, e.g. bazel.
  * toolVersion `string`: Version of the tool used for the request, e.g. 5.0.3.

### BuildBazelRemoteExecutionV2Tree
* BuildBazelRemoteExecutionV2Tree `object`: A `Tree` contains all the Directory protos in a single directory Merkle tree, compressed into one message.
  * children `array`: All the child directories: the directories referred to by the root and, recursively, all its children. In order to reconstruct the directory tree, the client must take the digests of each of the child directories and then build up a tree starting from the `root`.
    * items [BuildBazelRemoteExecutionV2Directory](#buildbazelremoteexecutionv2directory)
  * root [BuildBazelRemoteExecutionV2Directory](#buildbazelremoteexecutionv2directory)

### BuildBazelRemoteExecutionV2WaitExecutionRequest
* BuildBazelRemoteExecutionV2WaitExecutionRequest `object`: A request message for WaitExecution.

### BuildBazelSemverSemVer
* BuildBazelSemverSemVer `object`: The full version of a given tool.
  * major `integer`: The major version, e.g 10 for 10.2.3.
  * minor `integer`: The minor version, e.g. 2 for 10.2.3.
  * patch `integer`: The patch version, e.g 3 for 10.2.3.
  * prerelease `string`: The pre-release version. Either this field or major/minor/patch fields must be filled. They are mutually exclusive. Pre-release versions are assumed to be earlier than any released versions.

### GoogleDevtoolsRemotebuildbotCommandDurations
* GoogleDevtoolsRemotebuildbotCommandDurations `object`: CommandDuration contains the various duration metrics tracked when a bot performs a command.
  * dockerPrep `string`: The time spent preparing the command to be run in a Docker container (includes pulling the Docker image, if necessary).
  * dockerPrepStartTime `string`: The timestamp when docker preparation begins.
  * download `string`: The time spent downloading the input files and constructing the working directory.
  * downloadStartTime `string`: The timestamp when downloading the input files begins.
  * execStartTime `string`: The timestamp when execution begins.
  * execution `string`: The time spent executing the command (i.e., doing useful work).
  * isoPrepDone `string`: The timestamp when preparation is done and bot starts downloading files.
  * overall `string`: The time spent completing the command, in total.
  * stdout `string`: The time spent uploading the stdout logs.
  * upload `string`: The time spent uploading the output files.
  * uploadStartTime `string`: The timestamp when uploading the output files begins.

### GoogleDevtoolsRemotebuildbotCommandEvents
* GoogleDevtoolsRemotebuildbotCommandEvents `object`: CommandEvents contains counters for the number of warnings and errors that occurred during the execution of a command.
  * dockerCacheHit `boolean`: Indicates whether we are using a cached Docker image (true) or had to pull the Docker image (false) for this command.
  * dockerImageName `string`: Docker Image name.
  * inputCacheMiss `number`: The input cache miss ratio.
  * numErrors `string`: The number of errors reported.
  * numWarnings `string`: The number of warnings reported.

### GoogleDevtoolsRemotebuildbotCommandStatus
* GoogleDevtoolsRemotebuildbotCommandStatus `object`: The internal status of the command result.
  * code `string` (values: OK, INVALID_ARGUMENT, DEADLINE_EXCEEDED, NOT_FOUND, PERMISSION_DENIED, INTERNAL, ABORTED, FAILED_PRECONDITION, CLEANUP_ERROR, DOWNLOAD_INPUTS_ERROR, UNKNOWN, UPLOAD_OUTPUTS_ERROR, UPLOAD_OUTPUTS_BYTES_LIMIT_EXCEEDED, DOCKER_LOGIN_ERROR, DOCKER_IMAGE_PULL_ERROR, DOCKER_IMAGE_EXIST_ERROR, DUPLICATE_INPUTS, DOCKER_IMAGE_PERMISSION_DENIED, DOCKER_IMAGE_NOT_FOUND, WORKING_DIR_NOT_FOUND, WORKING_DIR_NOT_IN_BASE_DIR, DOCKER_UNAVAILABLE, NO_CUDA_CAPABLE_DEVICE, REMOTE_CAS_DOWNLOAD_ERROR, REMOTE_CAS_UPLOAD_ERROR, LOCAL_CASPROXY_NOT_RUNNING, DOCKER_CREATE_CONTAINER_ERROR, DOCKER_INVALID_ULIMIT, DOCKER_UNKNOWN_RUNTIME, DOCKER_UNKNOWN_CAPABILITY, DOCKER_UNKNOWN_ERROR, DOCKER_CREATE_COMPUTE_SYSTEM_ERROR, DOCKER_PREPARELAYER_ERROR, DOCKER_INCOMPATIBLE_OS_ERROR, DOCKER_CREATE_RUNTIME_FILE_NOT_FOUND, DOCKER_CREATE_RUNTIME_PERMISSION_DENIED, DOCKER_CREATE_PROCESS_FILE_NOT_FOUND, DOCKER_CREATE_COMPUTE_SYSTEM_INCORRECT_PARAMETER_ERROR, DOCKER_TOO_MANY_SYMBOLIC_LINK_LEVELS): The status code.
  * message `string`: The error message.

### GoogleDevtoolsRemotebuildbotResourceUsage
* GoogleDevtoolsRemotebuildbotResourceUsage `object`: ResourceUsage is the system resource usage of the host machine.
  * cpuUsedPercent `number`
  * diskUsage [GoogleDevtoolsRemotebuildbotResourceUsageStat](#googledevtoolsremotebuildbotresourceusagestat)
  * memoryUsage [GoogleDevtoolsRemotebuildbotResourceUsageStat](#googledevtoolsremotebuildbotresourceusagestat)

### GoogleDevtoolsRemotebuildbotResourceUsageStat
* GoogleDevtoolsRemotebuildbotResourceUsageStat `object`
  * total `string`
  * used `string`

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig `object`: AcceleratorConfig defines the accelerator cards to attach to the VM.
  * acceleratorCount `string`: The number of guest accelerator cards exposed to each VM.
  * acceleratorType `string`: The type of accelerator to attach to each VM, e.g. "nvidia-tesla-k80" for nVidia Tesla K80.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale `object`: Autoscale defines the autoscaling policy of a worker pool.
  * maxSize `string`: The maximal number of workers. Must be equal to or greater than min_size.
  * minSize `string`: The minimal number of workers. Must be greater than 0.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest `object`: The request used for `CreateInstance`.
  * instance [GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance](#googledevtoolsremotebuildexecutionadminv1alphainstance)
  * instanceId `string`: ID of the created instance. A valid `instance_id` must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit.
  * parent `string`: Resource name of the project containing the instance. Format: `projects/[PROJECT_ID]`.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest `object`: The request used for `CreateWorkerPool`.
  * parent `string`: Resource name of the instance in which to create the new worker pool. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
  * poolId `string`: ID of the created worker pool. A valid pool ID must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit.
  * workerPool [GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool](#googledevtoolsremotebuildexecutionadminv1alphaworkerpool)

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest `object`: The request used for `DeleteInstance`.
  * name `string`: Name of the instance to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest `object`: The request used for DeleteWorkerPool.
  * name `string`: Name of the worker pool to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy `object`: FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
  * containerImageSources [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * dockerAddCapabilities [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * dockerChrootPath [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * dockerNetwork [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * dockerPrivileged [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * dockerRunAsRoot [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * dockerRuntime [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * dockerSiblingContainers [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature)
  * linuxIsolation `string` (values: LINUX_ISOLATION_UNSPECIFIED, GVISOR, OFF): linux_isolation allows overriding the docker runtime used for containers started on Linux.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature `object`: Defines whether a feature can be used or what values are accepted.
  * allowedValues `array`: A list of acceptable values. Only effective when the policy is `RESTRICTED`.
    * items `string`
  * policy `string` (values: POLICY_UNSPECIFIED, ALLOWED, FORBIDDEN, RESTRICTED): The policy of the feature.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest `object`: The request used for `GetInstance`.
  * name `string`: Name of the instance to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequest `object`: The request used for GetWorkerPool.
  * name `string`: Name of the worker pool to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance `object`: Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
  * featurePolicy [GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy](#googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy)
  * location `string`: The location is a GCP region. Currently only `us-central1` is supported.
  * loggingEnabled `boolean`: Output only. Whether stack driver logging is enabled for the instance.
  * name `string`: Output only. Instance resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. Name should not be populated when creating an instance since it is provided in the `instance_id` field.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, RUNNING, INACTIVE): Output only. State of the instance.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest `object`
  * parent `string`: Resource name of the project. Format: `projects/[PROJECT_ID]`.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse `object`
  * instances `array`: The list of instances in a given project.
    * items [GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance](#googledevtoolsremotebuildexecutionadminv1alphainstance)

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest `object`
  * filter `string`: Optional. A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. String values are case-insensitive. The comparison operator must be either `:`, `=`, `!=`, `>`, `>=`, `<=` or `<`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. You can also filter on nested fields. To filter on multiple expressions, you can separate expression using `AND` and `OR` operators, using parentheses to specify precedence. If neither operator is specified, `AND` is assumed. Examples: Include only pools with more than 100 reserved workers: `(worker_count > 100) (worker_config.reserved = true)` Include only pools with a certain label or machines of the n1-standard family: `worker_config.labels.key1 : * OR worker_config.machine_type: n1-standard`
  * parent `string`: Resource name of the instance. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse `object`
  * workerPools `array`: The list of worker pools in a given instance.
    * items [GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool](#googledevtoolsremotebuildexecutionadminv1alphaworkerpool)

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest `object`: The request used for `UpdateInstance`.
  * instance [GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance](#googledevtoolsremotebuildexecutionadminv1alphainstance)
  * loggingEnabled `boolean`: Deprecated, use instance.logging_enabled instead. Whether to enable Stackdriver logging for this instance.
  * name `string`: Deprecated, use instance.Name instead. Name of the instance to update. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
  * updateMask `string`: The update mask applies to instance. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest `object`: The request used for UpdateWorkerPool.
  * updateMask `string`: The update mask applies to worker_pool. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided.
  * workerPool [GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool](#googledevtoolsremotebuildexecutionadminv1alphaworkerpool)

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig `object`: Defines the configuration to be used for creating workers in the worker pool.
  * accelerator [GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig](#googledevtoolsremotebuildexecutionadminv1alphaacceleratorconfig)
  * diskSizeGb `string`: Required. Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/
  * diskType `string`: Required. Disk Type to use for the worker. See [Storage options](https://cloud.google.com/compute/docs/disks/#introduction). Currently only `pd-standard` and `pd-ssd` are supported.
  * labels `object`: Labels associated with the workers. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International letters are permitted. Label keys must start with a letter. Label values are optional. There can not be more than 64 labels per resource.
  * machineType `string`: Required. Machine type of the worker, such as `n1-standard-2`. See https://cloud.google.com/compute/docs/machine-types for a list of supported machine types. Note that `f1-micro` and `g1-small` are not yet supported.
  * maxConcurrentActions `string`: The maximum number of actions a worker can execute concurrently.
  * minCpuPlatform `string`: Minimum CPU platform to use when creating the worker. See [CPU Platforms](https://cloud.google.com/compute/docs/cpu-platforms).
  * networkAccess `string`: Determines the type of network access granted to workers. Possible values: - "public": Workers can connect to the public internet. - "private": Workers can only connect to Google APIs and services. - "restricted-private": Workers can only connect to Google APIs that are reachable through `restricted.googleapis.com` (`199.36.153.4/30`).
  * reserved `boolean`: Determines whether the worker is reserved (equivalent to a Compute Engine on-demand VM and therefore won't be preempted). See [Preemptible VMs](https://cloud.google.com/preemptible-vms/) for more details.
  * soleTenantNodeType `string`: The node type name to be used for sole-tenant nodes.
  * vmImage `string`: The name of the image used by each VM.

### GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool
* GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool `object`: A worker pool resource in the Remote Build Execution API.
  * autoscale [GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale](#googledevtoolsremotebuildexecutionadminv1alphaautoscale)
  * channel `string`: Channel specifies the release channel of the pool.
  * name `string`: WorkerPool resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. name should not be populated when creating a worker pool since it is provided in the `poolId` field.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, RUNNING, UPDATING, DELETING, INACTIVE): Output only. State of the worker pool.
  * workerConfig [GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig](#googledevtoolsremotebuildexecutionadminv1alphaworkerconfig)
  * workerCount `string`: The desired number of workers in the worker pool. Must be a value between 0 and 15000.

### GoogleDevtoolsRemoteworkersV1test2AdminTemp
* GoogleDevtoolsRemoteworkersV1test2AdminTemp `object`: AdminTemp is a prelimiary set of administration tasks. It's called "Temp" because we do not yet know the best way to represent admin tasks; it's possible that this will be entirely replaced in later versions of this API. If this message proves to be sufficient, it will be renamed in the alpha or beta release of this API. This message (suitably marshalled into a protobuf.Any) can be used as the inline_assignment field in a lease; the lease assignment field should simply be `"admin"` in these cases. This message is heavily based on Swarming administration tasks from the LUCI project (http://github.com/luci/luci-py/appengine/swarming).
  * arg `string`: The argument to the admin action; see `Command` for semantics.
  * command `string` (values: UNSPECIFIED, BOT_UPDATE, BOT_RESTART, BOT_TERMINATE, HOST_RESTART): The admin action; see `Command` for legal values.

### GoogleDevtoolsRemoteworkersV1test2Blob
* GoogleDevtoolsRemoteworkersV1test2Blob `object`: Describes a blob of binary content with its digest.
  * contents `string`: The contents of the blob.
  * digest [GoogleDevtoolsRemoteworkersV1test2Digest](#googledevtoolsremoteworkersv1test2digest)

### GoogleDevtoolsRemoteworkersV1test2CommandOutputs
* GoogleDevtoolsRemoteworkersV1test2CommandOutputs `object`: DEPRECATED - use CommandResult instead. Describes the actual outputs from the task.
  * exitCode `integer`: exit_code is only fully reliable if the status' code is OK. If the task exceeded its deadline or was cancelled, the process may still produce an exit code as it is cancelled, and this will be populated, but a successful (zero) is unlikely to be correct unless the status code is OK.
  * outputs [GoogleDevtoolsRemoteworkersV1test2Digest](#googledevtoolsremoteworkersv1test2digest)

### GoogleDevtoolsRemoteworkersV1test2CommandOverhead
* GoogleDevtoolsRemoteworkersV1test2CommandOverhead `object`: DEPRECATED - use CommandResult instead. Can be used as part of CompleteRequest.metadata, or are part of a more sophisticated message.
  * duration `string`: The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time.
  * overhead `string`: The amount of time *not* spent executing the command (ie uploading/downloading files).

### GoogleDevtoolsRemoteworkersV1test2CommandResult
* GoogleDevtoolsRemoteworkersV1test2CommandResult `object`: All information about the execution of a command, suitable for providing as the Bots interface's `Lease.result` field.
  * duration `string`: The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time.
  * exitCode `integer`: The exit code of the process. An exit code of "0" should only be trusted if `status` has a code of OK (otherwise it may simply be unset).
  * metadata `array`: Implementation-dependent metadata about the task. Both servers and bots may define messages which can be encoded here; bots are free to provide metadata in multiple formats, and servers are free to choose one or more of the values to process and ignore others. In particular, it is *not* considered an error for the bot to provide the server with a field that it doesn't know about.
    * items `object`
  * outputs [GoogleDevtoolsRemoteworkersV1test2Digest](#googledevtoolsremoteworkersv1test2digest)
  * overhead `string`: The amount of time *not* spent executing the command (ie uploading/downloading files).
  * status [GoogleRpcStatus](#googlerpcstatus)

### GoogleDevtoolsRemoteworkersV1test2CommandTask
* GoogleDevtoolsRemoteworkersV1test2CommandTask `object`: Describes a shell-style task to execute, suitable for providing as the Bots interface's `Lease.payload` field.
  * expectedOutputs [GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs](#googledevtoolsremoteworkersv1test2commandtaskoutputs)
  * inputs [GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs](#googledevtoolsremoteworkersv1test2commandtaskinputs)
  * timeouts [GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts](#googledevtoolsremoteworkersv1test2commandtasktimeouts)

### GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs
* GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs `object`: Describes the inputs to a shell-style task.
  * arguments `array`: The command itself to run (e.g., argv). This field should be passed directly to the underlying operating system, and so it must be sensible to that operating system. For example, on Windows, the first argument might be "C:\Windows\System32\ping.exe" - that is, using drive letters and backslashes. A command for a *nix system, on the other hand, would use forward slashes. All other fields in the RWAPI must consistently use forward slashes, since those fields may be interpretted by both the service and the bot.
    * items `string`
  * environmentVariables `array`: All environment variables required by the task.
    * items [GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable](#googledevtoolsremoteworkersv1test2commandtaskinputsenvironmentvariable)
  * files `array`: The input filesystem to be set up prior to the task beginning. The contents should be a repeated set of FileMetadata messages though other formats are allowed if better for the implementation (eg, a LUCI-style .isolated file). This field is repeated since implementations might want to cache the metadata, in which case it may be useful to break up portions of the filesystem that change frequently (eg, specific input files) from those that don't (eg, standard header files).
    * items [GoogleDevtoolsRemoteworkersV1test2Digest](#googledevtoolsremoteworkersv1test2digest)
  * inlineBlobs `array`: Inline contents for blobs expected to be needed by the bot to execute the task. For example, contents of entries in `files` or blobs that are indirectly referenced by an entry there. The bot should check against this list before downloading required task inputs to reduce the number of communications between itself and the remote CAS server.
    * items [GoogleDevtoolsRemoteworkersV1test2Blob](#googledevtoolsremoteworkersv1test2blob)
  * workingDirectory `string`: Directory from which a command is executed. It is a relative directory with respect to the bot's working directory (i.e., "./"). If it is non-empty, then it must exist under "./". Otherwise, "./" will be used.

### GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable
* GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable `object`: An environment variable required by this task.
  * name `string`: The envvar name.
  * value `string`: The envvar value.

### GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs
* GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs `object`: Describes the expected outputs of the command.
  * directories `array`: A list of expected directories, relative to the execution root. All paths MUST be delimited by forward slashes.
    * items `string`
  * files `array`: A list of expected files, relative to the execution root. All paths MUST be delimited by forward slashes.
    * items `string`
  * stderrDestination `string`: The destination to which any stderr should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API.
  * stdoutDestination `string`: The destination to which any stdout should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API.

### GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts
* GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts `object`: Describes the timeouts associated with this task.
  * execution `string`: This specifies the maximum time that the task can run, excluding the time required to download inputs or upload outputs. That is, the worker will terminate the task if it runs longer than this.
  * idle `string`: This specifies the maximum amount of time the task can be idle - that is, go without generating some output in either stdout or stderr. If the process is silent for more than the specified time, the worker will terminate the task.
  * shutdown `string`: If the execution or IO timeouts are exceeded, the worker will try to gracefully terminate the task and return any existing logs. However, tasks may be hard-frozen in which case this process will fail. This timeout specifies how long to wait for a terminated task to shut down gracefully (e.g. via SIGTERM) before we bring down the hammer (e.g. SIGKILL on *nix, CTRL_BREAK_EVENT on Windows).

### GoogleDevtoolsRemoteworkersV1test2Digest
* GoogleDevtoolsRemoteworkersV1test2Digest `object`: The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message.
  * hash `string`: A string-encoded hash (eg "1a2b3c", not the byte array [0x1a, 0x2b, 0x3c]) using an implementation-defined hash algorithm (eg SHA-256).
  * sizeBytes `string`: The size of the contents. While this is not strictly required as part of an identifier (after all, any given hash will have exactly one canonical size), it's useful in almost all cases when one might want to send or retrieve blobs of content and is included here for this reason.

### GoogleDevtoolsRemoteworkersV1test2Directory
* GoogleDevtoolsRemoteworkersV1test2Directory `object`: The contents of a directory. Similar to the equivalent message in the Remote Execution API.
  * directories `array`: Any subdirectories
    * items [GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata](#googledevtoolsremoteworkersv1test2directorymetadata)
  * files `array`: The files in this directory
    * items [GoogleDevtoolsRemoteworkersV1test2FileMetadata](#googledevtoolsremoteworkersv1test2filemetadata)

### GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata
* GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata `object`: The metadata for a directory. Similar to the equivalent message in the Remote Execution API.
  * digest [GoogleDevtoolsRemoteworkersV1test2Digest](#googledevtoolsremoteworkersv1test2digest)
  * path `string`: The path of the directory, as in FileMetadata.path.

### GoogleDevtoolsRemoteworkersV1test2FileMetadata
* GoogleDevtoolsRemoteworkersV1test2FileMetadata `object`: The metadata for a file. Similar to the equivalent message in the Remote Execution API.
  * contents `string`: If the file is small enough, its contents may also or alternatively be listed here.
  * digest [GoogleDevtoolsRemoteworkersV1test2Digest](#googledevtoolsremoteworkersv1test2digest)
  * isExecutable `boolean`: Properties of the file
  * path `string`: The path of this file. If this message is part of the CommandOutputs.outputs fields, the path is relative to the execution root and must correspond to an entry in CommandTask.outputs.files. If this message is part of a Directory message, then the path is relative to the root of that directory. All paths MUST be delimited by forward slashes.

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [GoogleRpcStatus](#googlerpcstatus)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


