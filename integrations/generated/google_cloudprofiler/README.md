# @datafire/google_cloudprofiler

Client library for Stackdriver Profiler API

## Installation and Usage
```bash
npm install --save @datafire/google_cloudprofiler
```
```js
let google_cloudprofiler = require('@datafire/google_cloudprofiler').create({
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

Manages continuous profiling information.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudprofiler.oauthCallback({
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
google_cloudprofiler.oauthRefresh(null, context)
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

### cloudprofiler.projects.profiles.patch
UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.


```js
google_cloudprofiler.cloudprofiler.projects.profiles.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. Opaque, server-assigned, unique ID for this profile.
  * updateMask `string`: Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.
  * body [Profile](#profile)
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
* output [Profile](#profile)

### cloudprofiler.projects.profiles.create
CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".


```js
google_cloudprofiler.cloudprofiler.projects.profiles.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent project to create the profile in.
  * body [CreateProfileRequest](#createprofilerequest)
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
* output [Profile](#profile)

### cloudprofiler.projects.profiles.createOffline
CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.


```js
google_cloudprofiler.cloudprofiler.projects.profiles.createOffline({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent project to create the profile in.
  * body [Profile](#profile)
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
* output [Profile](#profile)



## Definitions

### CreateProfileRequest
* CreateProfileRequest `object`: CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.
  * deployment [Deployment](#deployment)
  * profileType `array`: One or more profile types that the agent is capable of providing.
    * items `string` (values: PROFILE_TYPE_UNSPECIFIED, CPU, WALL, HEAP, THREADS, CONTENTION, PEAK_HEAP, HEAP_ALLOC)

### Deployment
* Deployment `object`: Deployment contains the deployment identification information.
  * labels `object`: Labels identify the deployment within the user universe and same target. Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`. Value for an individual label must be <= 512 bytes, the total size of all label names and values must be <= 1024 bytes. Label named "language" can be used to record the programming language of the profiled deployment. The standard choices for the value include "java", "go", "python", "ruby", "nodejs", "php", "dotnet". For deployments running on Google Cloud Platform, "zone" or "region" label should be present describing the deployment location. An example of a zone is "us-central1-a", an example of a region is "us-central1" or "us-central".
  * projectId `string`: Project ID is the ID of a cloud project. Validation regex: `^a-z{4,61}[a-z0-9]$`.
  * target `string`: Target is the service name used to group related deployments: * Service name for GAE Flex / Standard. * Cluster and container name for GKE. * User-specified string for direct GCE profiling (e.g. Java). * Job name for Dataflow. Validation regex: `^[a-z]([-a-z0-9_.]{0,253}[a-z0-9])?$`.

### Profile
* Profile `object`: Profile resource.
  * deployment [Deployment](#deployment)
  * duration `string`: Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).
  * labels `object`: Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.
  * name `string`: Output only. Opaque, server-assigned, unique ID for this profile.
  * profileBytes `string`: Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.
  * profileType `string` (values: PROFILE_TYPE_UNSPECIFIED, CPU, WALL, HEAP, THREADS, CONTENTION, PEAK_HEAP, HEAP_ALLOC): Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.


