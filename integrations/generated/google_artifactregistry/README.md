# @datafire/google_artifactregistry

Client library for Artifact Registry API

## Installation and Usage
```bash
npm install --save @datafire/google_artifactregistry
```
```js
let google_artifactregistry = require('@datafire/google_artifactregistry').create({
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

Store and manage build artifacts in a scalable and integrated service built on Google infrastructure.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_artifactregistry.oauthCallback({
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
google_artifactregistry.oauthRefresh(null, context)
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

### artifactregistry.projects.locations.repositories.packages.versions.delete
Deletes a version and all of its content. The returned operation will complete once the version has been deleted.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.packages.versions.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the version to delete.
  * force `boolean`: By default, a version that is tagged may not be deleted. If force=true, the version and any tags pointing to the version are deleted.
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

### artifactregistry.projects.locations.repositories.packages.versions.get
Gets a version


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.packages.versions.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the version to retrieve.
  * view `string` (values: VERSION_VIEW_UNSPECIFIED, BASIC, FULL): The view that should be returned in the response.
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
* output [Version](#version)

### artifactregistry.projects.locations.repositories.packages.tags.patch
Updates a tag.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.packages.tags.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1".
  * updateMask `string`: The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
  * body [Tag](#tag)
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
* output [Tag](#tag)

### artifactregistry.projects.locations.list
Lists information about the supported locations for this service.


```js
google_artifactregistry.artifactregistry.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListLocationsResponse](#listlocationsresponse)

### artifactregistry.projects.locations.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_artifactregistry.artifactregistry.projects.locations.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation's parent resource.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListOperationsResponse](#listoperationsresponse)

### artifactregistry.projects.locations.repositories.files.list
Lists files.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.files.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the parent resource whose files will be listed.
  * filter `string`: An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `owner` An example of using a filter: * `name="projects/p1/locations/us-central1/repositories/repo1/files/a/b/*"` --> Files with an ID starting with "a/b/". * `owner="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --> Files owned by the version `1.0` in package `pkg1`.
  * pageSize `integer`: The maximum number of files to return.
  * pageToken `string`: The next_page_token value returned from a previous list request, if any.
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
* output [ListFilesResponse](#listfilesresponse)

### artifactregistry.projects.locations.repositories.packages.list
Lists packages.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.packages.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the parent resource whose packages will be listed.
  * pageSize `integer`: The maximum number of packages to return. Maximum page size is 10,000.
  * pageToken `string`: The next_page_token value returned from a previous list request, if any.
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
* output [ListPackagesResponse](#listpackagesresponse)

### artifactregistry.projects.locations.repositories.list
Lists repositories.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the parent resource whose repositories will be listed.
  * pageSize `integer`: The maximum number of repositories to return. Maximum page size is 10,000.
  * pageToken `string`: The next_page_token value returned from a previous list request, if any.
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
* output [ListRepositoriesResponse](#listrepositoriesresponse)

### artifactregistry.projects.locations.repositories.create
Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the parent resource where the repository will be created.
  * repositoryId `string`: The repository id to use for this repository.
  * body [Repository](#repository)
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

### artifactregistry.projects.locations.repositories.packages.tags.list
Lists tags.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.packages.tags.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the parent resource whose tags will be listed.
  * filter `string`: An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `version` An example of using a filter: * `version="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --> Tags that are applied to the version `1.0` in package `pkg1`.
  * pageSize `integer`: The maximum number of tags to return. Maximum page size is 10,000.
  * pageToken `string`: The next_page_token value returned from a previous list request, if any.
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
* output [ListTagsResponse](#listtagsresponse)

### artifactregistry.projects.locations.repositories.packages.tags.create
Creates a tag.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.packages.tags.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the parent resource where the tag will be created.
  * tagId `string`: The tag id to use for this repository.
  * body [Tag](#tag)
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
* output [Tag](#tag)

### artifactregistry.projects.locations.repositories.packages.versions.list
Lists versions.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.packages.versions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the parent resource whose versions will be listed.
  * orderBy `string`: Optional. Sorting field and order
  * pageSize `integer`: The maximum number of versions to return. Maximum page size is 10,000.
  * pageToken `string`: The next_page_token value returned from a previous list request, if any.
  * view `string` (values: VERSION_VIEW_UNSPECIFIED, BASIC, FULL): The view that should be returned in the response.
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
* output [ListVersionsResponse](#listversionsresponse)

### artifactregistry.projects.locations.repositories.getIamPolicy
Gets the IAM policy for a given resource.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * options.requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
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
* output [Policy](#policy)

### artifactregistry.projects.locations.repositories.setIamPolicy
Updates the IAM policy for a given resource.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
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
* output [Policy](#policy)

### artifactregistry.projects.locations.repositories.testIamPermissions
Tests if the caller has a list of permissions on a resource.


```js
google_artifactregistry.artifactregistry.projects.locations.repositories.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### File
* File `object`: Files store content that is potentially associated with Packages or Versions.
  * createTime `string`: The time when the File was created.
  * hashes `array`: The hashes of the file content.
    * items [Hash](#hash)
  * name `string`: The name of the file, for example: "projects/p1/locations/us-central1/repositories/repo1/files/a/b/c.txt".
  * owner `string`: The name of the Package or Version that owns this file, if any.
  * sizeBytes `string`: The size of the File in bytes.
  * updateTime `string`: The time when the File was last updated.

### GoogleDevtoolsArtifactregistryV1alpha1ErrorInfo
* GoogleDevtoolsArtifactregistryV1alpha1ErrorInfo `object`: Error information explaining why a package was not imported.
  * error [Status](#status)
  * gcsSource [GoogleDevtoolsArtifactregistryV1alpha1GcsSource](#googledevtoolsartifactregistryv1alpha1gcssource)

### GoogleDevtoolsArtifactregistryV1alpha1GcsSource
* GoogleDevtoolsArtifactregistryV1alpha1GcsSource `object`: Google Cloud Storage location where the artifacts currently reside.
  * uris `array`: Cloud Storage paths URI (e.g., gs://my_bucket//my_object).
    * items `string`
  * useWildcards `boolean`: Supports URI wildcards for matching multiple objects from a single URI.

### GoogleDevtoolsArtifactregistryV1alpha1ImportArtifactsResponse
* GoogleDevtoolsArtifactregistryV1alpha1ImportArtifactsResponse `object`: The response message from importing artifacts.
  * errors `array`: Detailed error info for packages that were not imported.
    * items [GoogleDevtoolsArtifactregistryV1alpha1ErrorInfo](#googledevtoolsartifactregistryv1alpha1errorinfo)
  * packages `array`: The packages updated.
    * items [GoogleDevtoolsArtifactregistryV1alpha1Package](#googledevtoolsartifactregistryv1alpha1package)

### GoogleDevtoolsArtifactregistryV1alpha1Package
* GoogleDevtoolsArtifactregistryV1alpha1Package `object`: Packages are named collections of versions.
  * createTime `string`: The time when the package was created.
  * displayName `string`: The display name of the package.
  * name `string`: The name of the package, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1".
  * updateTime `string`: The time when the package was last updated. This includes publishing a new version of the package.

### Hash
* Hash `object`: A hash of file content.
  * type `string` (values: HASH_TYPE_UNSPECIFIED, SHA256): The algorithm used to compute the hash value.
  * value `string`: The hash value.

### ListFilesResponse
* ListFilesResponse `object`: The response from listing files.
  * files `array`: The files returned.
    * items [File](#file)
  * nextPageToken `string`: The token to retrieve the next page of files, or empty if there are no more files to return.

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListPackagesResponse
* ListPackagesResponse `object`: The response from listing packages.
  * nextPageToken `string`: The token to retrieve the next page of packages, or empty if there are no more packages to return.
  * packages `array`: The packages returned.
    * items [Package](#package)

### ListRepositoriesResponse
* ListRepositoriesResponse `object`: The response from listing repositories.
  * nextPageToken `string`: The token to retrieve the next page of repositories, or empty if there are no more repositories to return.
  * repositories `array`: The repositories returned.
    * items [Repository](#repository)

### ListTagsResponse
* ListTagsResponse `object`: The response from listing tags.
  * tags `array`: The tags returned.
    * items [Tag](#tag)
  * nextPageToken `string`: The token to retrieve the next page of tags, or empty if there are no more tags to return.

### ListVersionsResponse
* ListVersionsResponse `object`: The response from listing versions.
  * nextPageToken `string`: The token to retrieve the next page of versions, or empty if there are no more versions to return.
  * versions `array`: The versions returned.
    * items [Version](#version)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### Package
* Package `object`: Packages are named collections of versions.
  * createTime `string`: The time when the package was created.
  * displayName `string`: The display name of the package.
  * name `string`: The name of the package, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1".
  * updateTime `string`: The time when the package was last updated. This includes publishing a new version of the package.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### Repository
* Repository `object`: A Repository for storing artifacts with a specific format.
  * createTime `string`: The time when the repository was created.
  * description `string`: The user-provided description of the repository.
  * format `string` (values: FORMAT_UNSPECIFIED, DOCKER): The format of packages that are stored in the repository.
  * kmsKeyName `string`: The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.
  * labels `object`: Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.
  * name `string`: The name of the repository, for example: "projects/p1/locations/us-central1/repositories/repo1".
  * updateTime `string`: The time when the repository was last updated.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### Tag
* Tag `object`: Tags point to a version and represent an alternative name that can be used to access the version.
  * name `string`: The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1".
  * version `string`: The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811"

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### Version
* Version `object`: The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
  * createTime `string`: The time when the version was created.
  * description `string`: Optional. Description of the version, as specified in its metadata.
  * name `string`: The name of the version, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1".
  * relatedTags `array`: Output only. A list of related tags. Will contain up to 100 tags that reference this version.
    * items [Tag](#tag)
  * updateTime `string`: The time when the version was last updated.


