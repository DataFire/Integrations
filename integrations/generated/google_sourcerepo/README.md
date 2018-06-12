# @datafire/google_sourcerepo

Client library for Cloud Source Repositories

## Installation and Usage
```bash
npm install --save @datafire/google_sourcerepo
```
```js
let google_sourcerepo = require('@datafire/google_sourcerepo').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_sourcerepo.projects.repos.delete({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

Access source code repositories hosted by Google.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_sourcerepo.oauthCallback({
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
google_sourcerepo.oauthRefresh(null, context)
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

### projects.repos.delete
Deletes a repo.


```js
google_sourcerepo.projects.repos.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the repo to delete. Values are of the form
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

### projects.repos.get
Returns information about a repo.


```js
google_sourcerepo.projects.repos.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the requested repository. Values are of the form
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
* output [Repo](#repo)

### projects.repos.patch
Updates information about a repo.


```js
google_sourcerepo.projects.repos.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateRepoRequest](#updatereporequest)
  * name **required** `string`: The name of the requested repository. Values are of the form
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
* output [Repo](#repo)

### projects.getConfig
Returns the Cloud Source Repositories configuration of the project.


```js
google_sourcerepo.projects.getConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the requested project. Values are of the form
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
* output [ProjectConfig](#projectconfig)

### projects.updateConfig
Updates the Cloud Source Repositories configuration of the project.


```js
google_sourcerepo.projects.updateConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateProjectConfigRequest](#updateprojectconfigrequest)
  * name **required** `string`: The name of the requested project. Values are of the form
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
* output [ProjectConfig](#projectconfig)

### projects.repos.list
Returns all repos belonging to a project. The sizes of the repos are
not set by ListRepos.  To get the size of a repo, use GetRepo.


```js
google_sourcerepo.projects.repos.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project ID whose repos should be listed. Values are of the form
  * pageSize `integer`: Maximum number of repositories to return; between 1 and 500.
  * pageToken `string`: Resume listing repositories where a prior ListReposResponse
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
* output [ListReposResponse](#listreposresponse)

### projects.repos.create
Creates a repo in the given project with the given name.

If the named repository already exists, `CreateRepo` returns
`ALREADY_EXISTS`.


```js
google_sourcerepo.projects.repos.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [Repo](#repo)
  * parent **required** `string`: The project in which to create the repo. Values are of the form
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
* output [Repo](#repo)

### projects.repos.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_sourcerepo.projects.repos.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
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
* output [Policy](#policy)

### projects.repos.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_sourcerepo.projects.repos.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
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
* output [Policy](#policy)

### projects.repos.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.


```js
google_sourcerepo.projects.repos.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ListReposResponse
* ListReposResponse `object`: Response for ListRepos.  The size is not set in the returned repositories.
  * nextPageToken `string`: If non-empty, additional repositories exist within the project. These
  * repos `array`: The listed repos.
    * items [Repo](#repo)

### MirrorConfig
* MirrorConfig `object`: Configuration to automatically mirror a repository from another
  * deployKeyId `string`: ID of the SSH deploy key at the other hosting service.
  * url `string`: URL of the main repository at the other hosting service.
  * webhookId `string`: ID of the webhook listening to updates to trigger mirroring.

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Deprecated.

### ProjectConfig
* ProjectConfig `object`: Cloud Source Repositories configuration of a project.
  * enablePrivateKeyCheck `boolean`: Reject a Git push that contains a private key.
  * name `string`: The name of the project. Values are of the form `projects/<project>`.
  * pubsubConfigs `object`: How this project publishes a change in the repositories through Cloud

### PubsubConfig
* PubsubConfig `object`: Configuration to publish a Cloud Pub/Sub message.
  * messageFormat `string` (values: MESSAGE_FORMAT_UNSPECIFIED, PROTOBUF, JSON): The format of the Cloud Pub/Sub messages.
  * serviceAccountEmail `string`: Email address of the service account used for publishing Cloud Pub/Sub
  * topic `string`: A topic of Cloud Pub/Sub. Values are of the form

### Repo
* Repo `object`: A repository (or repo) is a Git repository storing versioned source content.
  * mirrorConfig [MirrorConfig](#mirrorconfig)
  * name `string`: Resource name of the repository, of the form
  * pubsubConfigs `object`: How this repository publishes a change in the repository through Cloud
  * size `string`: The disk usage of the repo, in bytes. Read-only field. Size is only
  * url `string`: URL to clone the repository from Google Cloud Source Repositories.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### UpdateProjectConfigRequest
* UpdateProjectConfigRequest `object`: Request for UpdateProjectConfig.
  * projectConfig [ProjectConfig](#projectconfig)
  * updateMask `string`: A FieldMask specifying which fields of the project_config to modify. Only

### UpdateRepoRequest
* UpdateRepoRequest `object`: Request for UpdateRepo.
  * repo [Repo](#repo)
  * updateMask `string`: A FieldMask specifying which fields of the repo to modify. Only the fields


