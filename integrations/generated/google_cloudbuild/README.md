# @datafire/google_cloudbuild

Client library for Cloud Container Builder

## Installation and Usage
```bash
npm install --save @datafire/google_cloudbuild
```
```js
let google_cloudbuild = require('@datafire/google_cloudbuild').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudbuild.projects.builds.list({
  "projectId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Builds container images in the cloud.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudbuild.oauthCallback({
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
google_cloudbuild.oauthRefresh(null, context)
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

### projects.builds.list
Lists previously requested builds.

Previously requested builds may still be in-progress, or may have finished
successfully or unsuccessfully.


```js
google_cloudbuild.projects.builds.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: The raw filter text to constrain the results.
  * pageSize `integer`: Number of results to return in the list.
  * pageToken `string`: Token to provide to skip to a particular spot in the list.
  * projectId **required** `string`: ID of the project.
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
* output [ListBuildsResponse](#listbuildsresponse)

### projects.builds.create
Starts a build with the specified configuration.

This method returns a long-running `Operation`, which includes the build
ID. Pass the build ID to `GetBuild` to determine the build status (such as
`SUCCESS` or `FAILURE`).


```js
google_cloudbuild.projects.builds.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [Build](#build)
  * projectId **required** `string`: ID of the project.
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

### projects.builds.get
Returns information about a previously requested build.

The `Build` that is returned includes its status (such as `SUCCESS`,
`FAILURE`, or `WORKING`), and timing information.


```js
google_cloudbuild.projects.builds.get({
  "id": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the build.
  * projectId **required** `string`: ID of the project.
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
* output [Build](#build)

### projects.builds.cancel
Cancels a build in progress.


```js
google_cloudbuild.projects.builds.cancel({
  "id": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [CancelBuildRequest](#cancelbuildrequest)
  * id **required** `string`: ID of the build.
  * projectId **required** `string`: ID of the project.
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
* output [Build](#build)

### projects.builds.retry
Creates a new build based on the specified build.

This method creates a new build using the original build request, which may
or may not result in an identical build.

For triggered builds:

* Triggered builds resolve to a precise revision; therefore a retry of a
triggered build will result in a build that uses the same revision.

For non-triggered builds that specify `RepoSource`:

* If the original build built from the tip of a branch, the retried build
will build from the tip of that branch, which may not be the same revision
as the original build.
* If the original build specified a commit sha or revision ID, the retried
build will use the identical source.

For builds that specify `StorageSource`:

* If the original build pulled source from Google Cloud Storage without
specifying the generation of the object, the new build will use the current
object, which may be different from the original build source.
* If the original build pulled source from Cloud Storage and specified the
generation of the object, the new build will attempt to use the same
object, which may or may not be available depending on the bucket's
lifecycle management settings.


```js
google_cloudbuild.projects.builds.retry({
  "id": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [RetryBuildRequest](#retrybuildrequest)
  * id **required** `string`: Build ID of the original build.
  * projectId **required** `string`: ID of the project.
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

### projects.triggers.list
Lists existing `BuildTrigger`s.

This API is experimental.


```js
google_cloudbuild.projects.triggers.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: ID of the project for which to list BuildTriggers.
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
* output [ListBuildTriggersResponse](#listbuildtriggersresponse)

### projects.triggers.create
Creates a new `BuildTrigger`.

This API is experimental.


```js
google_cloudbuild.projects.triggers.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [BuildTrigger](#buildtrigger)
  * projectId **required** `string`: ID of the project for which to configure automatic builds.
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
* output [BuildTrigger](#buildtrigger)

### projects.triggers.delete
Deletes a `BuildTrigger` by its project ID and trigger ID.

This API is experimental.


```js
google_cloudbuild.projects.triggers.delete({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: ID of the project that owns the trigger.
  * triggerId **required** `string`: ID of the `BuildTrigger` to delete.
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

### projects.triggers.get
Returns information about a `BuildTrigger`.

This API is experimental.


```js
google_cloudbuild.projects.triggers.get({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: ID of the project that owns the trigger.
  * triggerId **required** `string`: ID of the `BuildTrigger` to get.
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
* output [BuildTrigger](#buildtrigger)

### projects.triggers.patch
Updates a `BuildTrigger` by its project ID and trigger ID.

This API is experimental.


```js
google_cloudbuild.projects.triggers.patch({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Input
* input `object`
  * body [BuildTrigger](#buildtrigger)
  * projectId **required** `string`: ID of the project that owns the trigger.
  * triggerId **required** `string`: ID of the `BuildTrigger` to update.
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
* output [BuildTrigger](#buildtrigger)

### projects.triggers.run
Runs a `BuildTrigger` at a particular source revision.


```js
google_cloudbuild.projects.triggers.run({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Input
* input `object`
  * body [RepoSource](#reposource)
  * projectId **required** `string`: ID of the project.
  * triggerId **required** `string`: ID of the trigger.
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

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_cloudbuild.operations.get({
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
google_cloudbuild.operations.cancel({
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

### ArtifactObjects
* ArtifactObjects `object`: Files in the workspace to upload to Cloud Storage upon successful
  * location `string`: Cloud Storage bucket and optional object path, in the form
  * paths `array`: Path globs used to match files in the build's workspace.
    * items `string`
  * timing [TimeSpan](#timespan)

### ArtifactResult
* ArtifactResult `object`: An artifact that was uploaded during a build. This
  * fileHash `array`: The file hash of the artifact.
    * items [FileHashes](#filehashes)
  * location `string`: The path of an artifact in a Google Cloud Storage bucket, with the

### Artifacts
* Artifacts `object`: Artifacts produced by a build that should be uploaded upon
  * images `array`: A list of images to be pushed upon the successful completion of all build
    * items `string`
  * objects [ArtifactObjects](#artifactobjects)

### Build
* Build `object`: A build resource in the Container Builder API.
  * artifacts [Artifacts](#artifacts)
  * buildTriggerId `string`: The ID of the `BuildTrigger` that triggered this build, if it was
  * createTime `string`: Time at which the request to create the build was received.
  * finishTime `string`: Time at which execution of the build was finished.
  * id `string`: Unique identifier of the build.
  * images `array`: A list of images to be pushed upon the successful completion of all build
    * items `string`
  * logUrl `string`: URL to logs for this build in Google Cloud Console.
  * logsBucket `string`: Google Cloud Storage bucket where logs should be written (see
  * options [BuildOptions](#buildoptions)
  * projectId `string`: ID of the project.
  * results [Results](#results)
  * secrets `array`: Secrets to decrypt using Cloud Key Management Service.
    * items [Secret](#secret)
  * source [Source](#source)
  * sourceProvenance [SourceProvenance](#sourceprovenance)
  * startTime `string`: Time at which execution of the build was started.
  * status `string` (values: STATUS_UNKNOWN, QUEUED, WORKING, SUCCESS, FAILURE, INTERNAL_ERROR, TIMEOUT, CANCELLED): Status of the build.
  * statusDetail `string`: Customer-readable message about the current status.
  * steps `array`: Required. The operations to be performed on the workspace.
    * items [BuildStep](#buildstep)
  * substitutions `object`: Substitutions data for `Build` resource.
  * tags `array`: Tags for annotation of a `Build`. These are not docker tags.
    * items `string`
  * timeout `string`: Amount of time that this build should be allowed to run, to second
  * timing `object`: Stores timing information for phases of the build. Valid keys are:

### BuildOperationMetadata
* BuildOperationMetadata `object`: Metadata for build operations.
  * build [Build](#build)

### BuildOptions
* BuildOptions `object`: Optional arguments to enable specific features of builds.
  * diskSizeGb `string`: Requested disk size for the VM that runs the build. Note that this is *NOT*
  * logStreamingOption `string` (values: STREAM_DEFAULT, STREAM_ON, STREAM_OFF): Option to define build log streaming behavior to Google Cloud
  * machineType `string` (values: UNSPECIFIED, N1_HIGHCPU_8, N1_HIGHCPU_32): Compute Engine machine type on which to run the build.
  * requestedVerifyOption `string` (values: NOT_VERIFIED, VERIFIED): Requested verifiability options.
  * sourceProvenanceHash `array`: Requested hash for SourceProvenance.
    * items `string` (values: NONE, SHA256, MD5)
  * substitutionOption `string` (values: MUST_MATCH, ALLOW_LOOSE): Option to specify behavior when there is an error in the substitution

### BuildStep
* BuildStep `object`: A step in the build pipeline.
  * args `array`: A list of arguments that will be presented to the step when it is started.
    * items `string`
  * dir `string`: Working directory to use when running this step's container.
  * entrypoint `string`: Entrypoint to be used instead of the build step image's default entrypoint.
  * env `array`: A list of environment variable definitions to be used when running a step.
    * items `string`
  * id `string`: Unique identifier for this build step, used in `wait_for` to
  * name `string`: Required. The name of the container image that will run this particular
  * secretEnv `array`: A list of environment variables which are encrypted using a Cloud Key
    * items `string`
  * status `string` (values: STATUS_UNKNOWN, QUEUED, WORKING, SUCCESS, FAILURE, INTERNAL_ERROR, TIMEOUT, CANCELLED): Status of the build step. At this time, build step status is only updated
  * timeout `string`: Time limit for executing this build step. If not defined, the step has no
  * timing [TimeSpan](#timespan)
  * volumes `array`: List of volumes to mount into the build step.
    * items [Volume](#volume)
  * waitFor `array`: The ID(s) of the step(s) that this build step depends on.
    * items `string`

### BuildTrigger
* BuildTrigger `object`: Configuration for an automated build in response to source repository
  * build [Build](#build)
  * createTime `string`: Time when the trigger was created.
  * description `string`: Human-readable description of this trigger.
  * disabled `boolean`: If true, the trigger will never result in a build.
  * filename `string`: Path, from the source root, to a file whose contents is used for the
  * id `string`: Unique identifier of the trigger.
  * substitutions `object`: Substitutions data for Build resource.
  * triggerTemplate [RepoSource](#reposource)

### BuiltImage
* BuiltImage `object`: An image built by the pipeline.
  * digest `string`: Docker Registry 2.0 digest.
  * name `string`: Name used to push the container image to Google Container Registry, as
  * pushTiming [TimeSpan](#timespan)

### CancelBuildRequest
* CancelBuildRequest `object`: Request to cancel an ongoing build.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### FileHashes
* FileHashes `object`: Container message for hashes of byte content of files, used in
  * fileHash `array`: Collection of file hashes.
    * items [Hash](#hash)

### Hash
* Hash `object`: Container message for hash values.
  * type `string` (values: NONE, SHA256, MD5): The type of hash that was performed.
  * value `string`: The hash value.

### ListBuildTriggersResponse
* ListBuildTriggersResponse `object`: Response containing existing `BuildTriggers`.
  * triggers `array`: `BuildTriggers` for the project, sorted by `create_time` descending.
    * items [BuildTrigger](#buildtrigger)

### ListBuildsResponse
* ListBuildsResponse `object`: Response including listed builds.
  * builds `array`: Builds will be sorted by `create_time`, descending.
    * items [Build](#build)
  * nextPageToken `string`: Token to receive the next page of results.

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

### RepoSource
* RepoSource `object`: Location of the source in a Google Cloud Source Repository.
  * branchName `string`: Name of the branch to build.
  * commitSha `string`: Explicit commit SHA to build.
  * dir `string`: Directory, relative to the source root, in which to run the build.
  * projectId `string`: ID of the project that owns the Cloud Source Repository. If omitted, the
  * repoName `string`: Name of the Cloud Source Repository. If omitted, the name "default" is
  * tagName `string`: Name of the tag to build.

### Results
* Results `object`: Artifacts created by the build pipeline.
  * artifactManifest `string`: Path to the artifact manifest. Only populated when artifacts are uploaded.
  * buildStepImages `array`: List of build step digests, in the order corresponding to build step
    * items `string`
  * images `array`: Container images that were built as a part of the build.
    * items [BuiltImage](#builtimage)
  * numArtifacts `string`: Number of artifacts uploaded. Only populated when artifacts are uploaded.

### RetryBuildRequest
* RetryBuildRequest `object`: Specifies a build to retry.

### Secret
* Secret `object`: Pairs a set of secret environment variables containing encrypted
  * kmsKeyName `string`: Cloud KMS key name to use to decrypt these envs.
  * secretEnv `object`: Map of environment variable name to its encrypted value.

### Source
* Source `object`: Location of the source in a supported storage service.
  * repoSource [RepoSource](#reposource)
  * storageSource [StorageSource](#storagesource)

### SourceProvenance
* SourceProvenance `object`: Provenance of the source. Ways to find the original source, or verify that
  * fileHashes `object`: Hash(es) of the build source, which can be used to verify that the original
  * resolvedRepoSource [RepoSource](#reposource)
  * resolvedStorageSource [StorageSource](#storagesource)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### StorageSource
* StorageSource `object`: Location of the source in an archive file in Google Cloud Storage.
  * bucket `string`: Google Cloud Storage bucket containing the source (see
  * generation `string`: Google Cloud Storage generation for the object. If the generation is
  * object `string`: Google Cloud Storage object containing the source.

### TimeSpan
* TimeSpan `object`: Start and end times for a build execution phase.
  * endTime `string`: End of time span.
  * startTime `string`: Start of time span.

### Volume
* Volume `object`: Volume describes a Docker container volume which is mounted into build steps
  * name `string`: Name of the volume to mount.
  * path `string`: Path at which to mount the volume.


