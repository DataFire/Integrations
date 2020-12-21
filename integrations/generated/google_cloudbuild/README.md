# @datafire/google_cloudbuild

Client library for Cloud Build API

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

.then(data => {
  console.log(data);
});
```

## Description

Creates and manages builds on Google Cloud Platform.

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

### cloudbuild.projects.workerPools.delete
Deletes a `WorkerPool`.


```js
google_cloudbuild.cloudbuild.projects.workerPools.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the `WorkerPool` to delete. Format: projects/{project}/workerPools/{workerPool}
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

### cloudbuild.projects.workerPools.get
Returns details of a `WorkerPool`.


```js
google_cloudbuild.cloudbuild.projects.workerPools.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the `WorkerPool` to retrieve. Format: projects/{project}/workerPools/{workerPool}
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
* output [WorkerPool](#workerpool)

### cloudbuild.projects.workerPools.patch
Updates a `WorkerPool`.


```js
google_cloudbuild.cloudbuild.projects.workerPools.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The resource name of the `WorkerPool`. Format of the name is `projects/{project_id}/workerPools/{worker_pool_id}`, where the value of {worker_pool_id} is provided in the CreateWorkerPool request.
  * updateMask `string`: A mask specifying which fields in `WorkerPool` should be updated.
  * body [WorkerPool](#workerpool)
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
* output [WorkerPool](#workerpool)

### cloudbuild.projects.locations.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_cloudbuild.cloudbuild.projects.locations.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [CancelOperationRequest](#canceloperationrequest)
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

### cloudbuild.projects.workerPools.list
Lists `WorkerPool`s by project.


```js
google_cloudbuild.cloudbuild.projects.workerPools.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent, which owns this collection of `WorkerPools`. Format: projects/{project}
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
* output [ListWorkerPoolsResponse](#listworkerpoolsresponse)

### cloudbuild.projects.workerPools.create
Creates a `WorkerPool` to run the builds, and returns the new worker pool.


```js
google_cloudbuild.cloudbuild.projects.workerPools.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource where this book will be created. Format: projects/{project}
  * workerPoolId `string`: Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
  * body [WorkerPool](#workerpool)
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
* output [WorkerPool](#workerpool)



## Definitions

### ArtifactObjects
* ArtifactObjects `object`: Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
  * paths `array`: Path globs used to match files in the build's workspace.
    * items `string`
  * location `string`: Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.
  * timing [TimeSpan](#timespan)

### ArtifactResult
* ArtifactResult `object`: An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file.
  * fileHash `array`: The file hash of the artifact.
    * items [FileHashes](#filehashes)
  * location `string`: The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`.

### Artifacts
* Artifacts `object`: Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
  * images `array`: A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.
    * items `string`
  * objects [ArtifactObjects](#artifactobjects)

### Build
* Build `object`: A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
  * tags `array`: Tags for annotation of a `Build`. These are not docker tags.
    * items `string`
  * artifacts [Artifacts](#artifacts)
  * buildTriggerId `string`: Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.
  * createTime `string`: Output only. Time at which the request to create the build was received.
  * finishTime `string`: Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.
  * id `string`: Output only. Unique identifier of the build.
  * images `array`: A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.
    * items `string`
  * logUrl `string`: Output only. URL to logs for this build in Google Cloud Console.
  * logsBucket `string`: Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
  * name `string`: Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service.
  * options [BuildOptions](#buildoptions)
  * projectId `string`: Output only. ID of the project.
  * queueTtl `string`: TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.
  * results [Results](#results)
  * secrets `array`: Secrets to decrypt using Cloud Key Management Service.
    * items [Secret](#secret)
  * serviceAccount `string`: IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. This field is in alpha and is not publicly available.
  * source [Source](#source)
  * sourceProvenance [SourceProvenance](#sourceprovenance)
  * startTime `string`: Output only. Time at which execution of the build was started.
  * status `string` (values: STATUS_UNKNOWN, QUEUED, WORKING, SUCCESS, FAILURE, INTERNAL_ERROR, TIMEOUT, CANCELLED, EXPIRED): Output only. Status of the build.
  * statusDetail `string`: Output only. Customer-readable message about the current status.
  * steps `array`: Required. The operations to be performed on the workspace.
    * items [BuildStep](#buildstep)
  * substitutions `object`: Substitutions data for `Build` resource.
  * timeout `string`: Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is ten minutes.
  * timing `object`: Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps * PUSH: time to push all specified images. * FETCHSOURCE: time to fetch source. If the build does not specify source or images, these keys will not be included.

### BuildOperationMetadata
* BuildOperationMetadata `object`: Metadata for build operations.
  * build [Build](#build)

### BuildOptions
* BuildOptions `object`: Optional arguments to enable specific features of builds.
  * diskSizeGb `string`: Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 1000GB; builds that request more than the maximum are rejected with an error.
  * dynamicSubstitutions `boolean`: Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.
  * env `array`: A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
    * items `string`
  * logStreamingOption `string` (values: STREAM_DEFAULT, STREAM_ON, STREAM_OFF): Option to define build log streaming behavior to Google Cloud Storage.
  * logging `string` (values: LOGGING_UNSPECIFIED, LEGACY, GCS_ONLY, STACKDRIVER_ONLY, CLOUD_LOGGING_ONLY, NONE): Option to specify the logging mode, which determines if and where build logs are stored.
  * machineType `string` (values: UNSPECIFIED, N1_HIGHCPU_8, N1_HIGHCPU_32, E2_HIGHCPU_8, E2_HIGHCPU_32): Compute Engine machine type on which to run the build.
  * requestedVerifyOption `string` (values: NOT_VERIFIED, VERIFIED): Requested verifiability options.
  * secretEnv `array`: A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.
    * items `string`
  * sourceProvenanceHash `array`: Requested hash for SourceProvenance.
    * items `string` (values: NONE, SHA256, MD5)
  * substitutionOption `string` (values: MUST_MATCH, ALLOW_LOOSE): Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.
  * volumes `array`: Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.
    * items [Volume](#volume)
  * workerPool `string`: Option to specify a `WorkerPool` for the build. Format: projects/{project}/locations/{location}/workerPools/{workerPool} This field is experimental.

### BuildStep
* BuildStep `object`: A step in the build pipeline.
  * args `array`: A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
    * items `string`
  * dir `string`: Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.
  * entrypoint `string`: Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.
  * env `array`: A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
    * items `string`
  * id `string`: Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.
  * name `string`: Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.
  * pullTiming [TimeSpan](#timespan)
  * secretEnv `array`: A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.
    * items `string`
  * status `string` (values: STATUS_UNKNOWN, QUEUED, WORKING, SUCCESS, FAILURE, INTERNAL_ERROR, TIMEOUT, CANCELLED, EXPIRED): Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.
  * timeout `string`: Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.
  * timing [TimeSpan](#timespan)
  * volumes `array`: List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
    * items [Volume](#volume)
  * waitFor `array`: The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.
    * items `string`

### BuiltImage
* BuiltImage `object`: An image built by the pipeline.
  * digest `string`: Docker Registry 2.0 digest.
  * name `string`: Name used to push the container image to Google Container Registry, as presented to `docker push`.
  * pushTiming [TimeSpan](#timespan)

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### FileHashes
* FileHashes `object`: Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
  * fileHash `array`: Collection of file hashes.
    * items [Hash](#hash)

### HTTPDelivery
* HTTPDelivery `object`: HTTPDelivery is the delivery configuration for an HTTP notification.
  * uri `string`: The URI to which JSON-containing HTTP POST requests should be sent.

### Hash
* Hash `object`: Container message for hash values.
  * type `string` (values: NONE, SHA256, MD5): The type of hash that was performed.
  * value `string`: The hash value.

### ListWorkerPoolsResponse
* ListWorkerPoolsResponse `object`: Response containing existing `WorkerPools`.
  * workerPools `array`: `WorkerPools` for the specified project.
    * items [WorkerPool](#workerpool)

### NetworkConfig
* NetworkConfig `object`: Network describes the network configuration for a `WorkerPool`.
  * peeredNetwork `string`: Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to WorkerPool.project_id on the default network. Must be in the format `projects/{project}/global/networks/{network}`, where {project} is a project number, such as `12345`, and {network} is the name of a VPC network in the project.

### Notification
* Notification `object`: Notification is the container which holds the data that is relevant to this particular notification.
  * filter `string`: The filter string to use for notification filtering. Currently, this is assumed to be a CEL program. See https://opensource.google/projects/cel for more.
  * httpDelivery [HTTPDelivery](#httpdelivery)
  * slackDelivery [SlackDelivery](#slackdelivery)
  * smtpDelivery [SMTPDelivery](#smtpdelivery)
  * structDelivery `object`: Escape hatch for users to supply custom delivery configs.

### NotifierConfig
* NotifierConfig `object`: NotifierConfig is the top-level configuration message.
  * apiVersion `string`: The API version of this configuration format.
  * kind `string`: The type of notifier to use (e.g. SMTPNotifier).
  * metadata [NotifierMetadata](#notifiermetadata)
  * spec [NotifierSpec](#notifierspec)

### NotifierMetadata
* NotifierMetadata `object`: NotifierMetadata contains the data which can be used to reference or describe this notifier.
  * name `string`: The human-readable and user-given name for the notifier. For example: "repo-merge-email-notifier".
  * notifier `string`: The string representing the name and version of notifier to deploy. Expected to be of the form of "/:". For example: "gcr.io/my-project/notifiers/smtp:1.2.34".

### NotifierSecret
* NotifierSecret `object`: NotifierSecret is the container that maps a secret name (reference) to its Google Cloud Secret Manager resource path.
  * name `string`: Name is the local name of the secret, such as the verbatim string "my-smtp-password".
  * value `string`: Value is interpreted to be a resource path for fetching the actual (versioned) secret data for this secret. For example, this would be a Google Cloud Secret Manager secret version resource path like: "projects/my-project/secrets/my-secret/versions/latest".

### NotifierSecretRef
* NotifierSecretRef `object`: NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec.
  * secretRef `string`: The value of `secret_ref` should be a `name` that is registered in a `Secret` in the `secrets` list of the `Spec`.

### NotifierSpec
* NotifierSpec `object`: NotifierSpec is the configuration container for notifications.
  * notification [Notification](#notification)
  * secrets `array`: Configurations for secret resources used by this particular notifier.
    * items [NotifierSecret](#notifiersecret)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### RepoSource
* RepoSource `object`: Location of the source in a Google Cloud Source Repository.
  * branchName `string`: Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
  * commitSha `string`: Explicit commit SHA to build.
  * dir `string`: Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.
  * invertRegex `boolean`: Only trigger a build if the revision regex does NOT match the revision regex.
  * projectId `string`: ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
  * repoName `string`: Required. Name of the Cloud Source Repository.
  * substitutions `object`: Substitutions to use in a triggered build. Should only be used with RunBuildTrigger
  * tagName `string`: Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax

### Results
* Results `object`: Artifacts created by the build pipeline.
  * artifactManifest `string`: Path to the artifact manifest. Only populated when artifacts are uploaded.
  * artifactTiming [TimeSpan](#timespan)
  * buildStepImages `array`: List of build step digests, in the order corresponding to build step indices.
    * items `string`
  * buildStepOutputs `array`: List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.
    * items `string`
  * images `array`: Container images that were built as a part of the build.
    * items [BuiltImage](#builtimage)
  * numArtifacts `string`: Number of artifacts uploaded. Only populated when artifacts are uploaded.

### SMTPDelivery
* SMTPDelivery `object`: SMTPDelivery is the delivery configuration for an SMTP (email) notification.
  * fromAddress `string`: This is the SMTP account/email that appears in the `From:` of the email. If empty, it is assumed to be sender.
  * password [NotifierSecretRef](#notifiersecretref)
  * port `string`: The SMTP port of the server.
  * recipientAddresses `array`: This is the list of addresses to which we send the email (i.e. in the `To:` of the email).
    * items `string`
  * senderAddress `string`: This is the SMTP account/email that is used to send the message.
  * server `string`: The address of the SMTP server.

### Secret
* Secret `object`: Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value.
  * kmsKeyName `string`: Cloud KMS key name to use to decrypt these envs.
  * secretEnv `object`: Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.

### SlackDelivery
* SlackDelivery `object`: SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks.
  * webhookUri [NotifierSecretRef](#notifiersecretref)

### Source
* Source `object`: Location of the source in a supported storage service.
  * repoSource [RepoSource](#reposource)
  * storageSource [StorageSource](#storagesource)

### SourceProvenance
* SourceProvenance `object`: Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
  * fileHashes `object`: Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.
  * resolvedRepoSource [RepoSource](#reposource)
  * resolvedStorageSource [StorageSource](#storagesource)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### StorageSource
* StorageSource `object`: Location of the source in an archive file in Google Cloud Storage.
  * bucket `string`: Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
  * generation `string`: Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
  * object `string`: Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build.

### TimeSpan
* TimeSpan `object`: Start and end times for a build execution phase.
  * endTime `string`: End of time span.
  * startTime `string`: Start of time span.

### Volume
* Volume `object`: Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
  * name `string`: Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
  * path `string`: Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.

### WorkerConfig
* WorkerConfig `object`: WorkerConfig defines the configuration to be used for a creating workers in the pool.
  * diskSizeGb `string`: Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If `0` is specified, Cloud Build will use a standard disk size.
  * machineType `string`: Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool.

### WorkerPool
* WorkerPool `object`: Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
  * createTime `string`: Output only. Time at which the request to create the `WorkerPool` was received.
  * deleteTime `string`: Output only. Time at which the request to delete the `WorkerPool` was received.
  * name `string`: Output only. The resource name of the `WorkerPool`. Format of the name is `projects/{project_id}/workerPools/{worker_pool_id}`, where the value of {worker_pool_id} is provided in the CreateWorkerPool request.
  * networkConfig [NetworkConfig](#networkconfig)
  * region `string`: Required. Immutable. The region where the `WorkerPool` runs. Only "us-central1" is currently supported. Note that `region` cannot be changed once the `WorkerPool` is created.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, RUNNING, DELETING, DELETED): Output only. WorkerPool state.
  * updateTime `string`: Output only. Time at which the request to update the `WorkerPool` was received.
  * workerConfig [WorkerConfig](#workerconfig)


