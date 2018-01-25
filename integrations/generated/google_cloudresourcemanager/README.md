# @datafire/google_cloudresourcemanager

Client library for Google Cloud Resource Manager

## Installation and Usage
```bash
npm install --save @datafire/google_cloudresourcemanager
```
```js
let google_cloudresourcemanager = require('@datafire/google_cloudresourcemanager').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudresourcemanager.projects.create({}).then(data => {
  console.log(data);
});
```

## Description

The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudresourcemanager.oauthCallback({
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
google_cloudresourcemanager.oauthRefresh(null, context)
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

### liens.list
List all Liens applied to the `parent` resource.

Callers of this method will require permission on the `parent` resource.
For example, a Lien with a `parent` of `projects/1234` requires permission
`resourcemanager.projects.get`.


```js
google_cloudresourcemanager.liens.list({}, context)
```

#### Input
* input `object`
  * pageToken `string`: The `next_page_token` value returned from a previous List request, if any.
  * pageSize `integer`: The maximum number of items to return. This is a suggestion for the server.
  * parent `string`: The name of the resource to list all attached Liens.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListLiensResponse](#listliensresponse)

### liens.create
Create a Lien which applies to the resource denoted by the `parent` field.

Callers of this method will require permission on the `parent` resource.
For example, applying to `projects/1234` requires permission
`resourcemanager.projects.updateLiens`.

NOTE: Some resources may limit the number of Liens which may be applied.


```js
google_cloudresourcemanager.liens.create({}, context)
```

#### Input
* input `object`
  * body [Lien](#lien)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Lien](#lien)

### organizations.search
Searches Organization resources that are visible to the user and satisfy
the specified filter. This method returns Organizations in an unspecified
order. New Organizations do not necessarily appear at the end of the
results.

Search will only return organizations on which the user has the permission
`resourcemanager.organizations.get`


```js
google_cloudresourcemanager.organizations.search({}, context)
```

#### Input
* input `object`
  * body [SearchOrganizationsRequest](#searchorganizationsrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [SearchOrganizationsResponse](#searchorganizationsresponse)

### projects.list
Lists Projects that are visible to the user and satisfy the
specified filter. This method returns Projects in an unspecified order.
New Projects do not necessarily appear at the end of the list.


```js
google_cloudresourcemanager.projects.list({}, context)
```

#### Input
* input `object`
  * filter `string`: An expression for filtering the results of the request.  Filter rules are
  * pageSize `integer`: The maximum number of Projects to return in the response.
  * pageToken `string`: A pagination token returned from a previous call to ListProjects
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListProjectsResponse](#listprojectsresponse)

### projects.create
Request that a new Project be created. The result is an Operation which
can be used to track the creation process. It is automatically deleted
after a few hours, so there is no need to call DeleteOperation.

Our SLO permits Project creation to take up to 30 seconds at the 90th
percentile. As of 2016-08-29, we are observing 6 seconds 50th percentile
latency. 95th percentile latency is around 11 seconds. We recommend
polling at the 5th second with an exponential backoff.

Authorization requires the Google IAM permission
`resourcemanager.projects.create` on the specified parent for the new
project.


```js
google_cloudresourcemanager.projects.create({}, context)
```

#### Input
* input `object`
  * body [Project](#project)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Operation](#operation)

### projects.delete
Marks the Project identified by the specified
`project_id` (for example, `my-project-123`) for deletion.
This method will only affect the Project if the following criteria are met:

+ The Project does not have a billing account associated with it.
+ The Project has a lifecycle state of
ACTIVE.

This method changes the Project's lifecycle state from
ACTIVE
to DELETE_REQUESTED.
The deletion starts at an unspecified time,
at which point the Project is no longer accessible.

Until the deletion completes, you can check the lifecycle state
checked by retrieving the Project with GetProject,
and the Project remains visible to ListProjects.
However, you cannot update the project.

After the deletion completes, the Project is not retrievable by
the  GetProject and
ListProjects methods.

The caller must have modify permissions for this Project.


```js
google_cloudresourcemanager.projects.delete({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The Project ID (for example, `foo-bar-123`).
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Empty](#empty)

### projects.get
Retrieves the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.


```js
google_cloudresourcemanager.projects.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The Project ID (for example, `my-project-123`).
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Project](#project)

### projects.update
Updates the attributes of the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have modify permissions for this Project.


```js
google_cloudresourcemanager.projects.update({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project ID (for example, `my-project-123`).
  * body [Project](#project)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Project](#project)

### projects.getAncestry
Gets a list of ancestors in the resource hierarchy for the Project
identified by the specified `project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.


```js
google_cloudresourcemanager.projects.getAncestry({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The Project ID (for example, `my-project-123`).
  * body [GetAncestryRequest](#getancestryrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [GetAncestryResponse](#getancestryresponse)

### projects.undelete
Restores the Project identified by the specified
`project_id` (for example, `my-project-123`).
You can only use this method for a Project that has a lifecycle state of
DELETE_REQUESTED.
After deletion starts, the Project cannot be restored.

The caller must have modify permissions for this Project.


```js
google_cloudresourcemanager.projects.undelete({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project ID (for example, `foo-bar-123`).
  * body [UndeleteProjectRequest](#undeleteprojectrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Empty](#empty)

### projects.getIamPolicy
Returns the IAM access control policy for the specified Project.
Permission is denied if the policy or the resource does not exist.

Authorization requires the Google IAM permission
`resourcemanager.projects.getIamPolicy` on the project


```js
google_cloudresourcemanager.projects.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Policy](#policy)

### projects.setIamPolicy
Sets the IAM access control policy for the specified Project. Replaces
any existing policy.

The following constraints apply when using `setIamPolicy()`:

+ Project does not support `allUsers` and `allAuthenticatedUsers` as
`members` in a `Binding` of a `Policy`.

+ The owner role can be granted only to `user` and `serviceAccount`.

+ Service accounts can be made owners of a project directly
without any restrictions. However, to be added as an owner, a user must be
invited via Cloud Platform console and must accept the invitation.

+ A user cannot be granted the owner role using `setIamPolicy()`. The user
must be granted the owner role using the Cloud Platform Console and must
explicitly accept the invitation.

+ Invitations to grant the owner role cannot be sent using
`setIamPolicy()`;
they must be sent only using the Cloud Platform Console.

+ Membership changes that leave the project without any owners that have
accepted the Terms of Service (ToS) will be rejected.

+ If the project is not part of an organization, there must be at least
one owner who has accepted the Terms of Service (ToS) agreement in the
policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner
from the policy will fail. This restriction also applies to legacy
projects that no longer have owners who have accepted the ToS. Edits to
IAM policies will be rejected until the lack of a ToS-accepting owner is
rectified.

+ Calling this method requires enabling the App Engine Admin API.

Note: Removing service accounts from policies or changing their roles
can render services completely inoperable. It is important to understand
how the service account is being used before removing or updating its
roles.

Authorization requires the Google IAM permission
`resourcemanager.projects.setIamPolicy` on the project


```js
google_cloudresourcemanager.projects.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Policy](#policy)

### projects.testIamPermissions
Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.


```js
google_cloudresourcemanager.projects.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)

### liens.delete
Delete a Lien by `name`.

Callers of this method will require permission on the `parent` resource.
For example, a Lien with a `parent` of `projects/1234` requires permission
`resourcemanager.projects.updateLiens`.


```js
google_cloudresourcemanager.liens.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name/identifier of the Lien to delete.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Empty](#empty)

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_cloudresourcemanager.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Operation](#operation)

### folders.clearOrgPolicy
Clears a `Policy` from a resource.


```js
google_cloudresourcemanager.folders.clearOrgPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [ClearOrgPolicyRequest](#clearorgpolicyrequest)
  * resource **required** `string`: Name of the resource for the `Policy` to clear.
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

### folders.getEffectiveOrgPolicy
Gets the effective `Policy` on a resource. This is the result of merging
`Policies` in the resource hierarchy. The returned `Policy` will not have
an `etag`set because it is a computed `Policy` across multiple resources.


```js
google_cloudresourcemanager.folders.getEffectiveOrgPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GetEffectiveOrgPolicyRequest](#geteffectiveorgpolicyrequest)
  * resource **required** `string`: The name of the resource to start computing the effective `Policy`.
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
* output [OrgPolicy](#orgpolicy)

### organizations.getIamPolicy
Gets the access control policy for an Organization resource. May be empty
if no such policy or resource exists. The `resource` field should be the
organization's resource name, e.g. "organizations/123".

Authorization requires the Google IAM permission
`resourcemanager.organizations.getIamPolicy` on the specified organization


```js
google_cloudresourcemanager.organizations.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Policy](#policy)

### folders.getOrgPolicy
Gets a `Policy` on a resource.

If no `Policy` is set on the resource, a `Policy` is returned with default
values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The
`etag` value can be used with `SetOrgPolicy()` to create or update a
`Policy` during read-modify-write.


```js
google_cloudresourcemanager.folders.getOrgPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GetOrgPolicyRequest](#getorgpolicyrequest)
  * resource **required** `string`: Name of the resource the `Policy` is set on.
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
* output [OrgPolicy](#orgpolicy)

### folders.listAvailableOrgPolicyConstraints
Lists `Constraints` that could be applied on the specified resource.


```js
google_cloudresourcemanager.folders.listAvailableOrgPolicyConstraints({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [ListAvailableOrgPolicyConstraintsRequest](#listavailableorgpolicyconstraintsrequest)
  * resource **required** `string`: Name of the resource to list `Constraints` for.
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
* output [ListAvailableOrgPolicyConstraintsResponse](#listavailableorgpolicyconstraintsresponse)

### folders.listOrgPolicies
Lists all the `Policies` set for a particular resource.


```js
google_cloudresourcemanager.folders.listOrgPolicies({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [ListOrgPoliciesRequest](#listorgpoliciesrequest)
  * resource **required** `string`: Name of the resource to list Policies for.
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
* output [ListOrgPoliciesResponse](#listorgpoliciesresponse)

### organizations.setIamPolicy
Sets the access control policy on an Organization resource. Replaces any
existing policy. The `resource` field should be the organization's resource
name, e.g. "organizations/123".

Authorization requires the Google IAM permission
`resourcemanager.organizations.setIamPolicy` on the specified organization


```js
google_cloudresourcemanager.organizations.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Policy](#policy)

### folders.setOrgPolicy
Updates the specified `Policy` on the resource. Creates a new `Policy` for
that `Constraint` on the resource if one does not exist.

Not supplying an `etag` on the request `Policy` results in an unconditional
write of the `Policy`.


```js
google_cloudresourcemanager.folders.setOrgPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [SetOrgPolicyRequest](#setorgpolicyrequest)
  * resource **required** `string`: Resource name of the resource to attach the `Policy`.
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
* output [OrgPolicy](#orgpolicy)

### organizations.testIamPermissions
Returns permissions that a caller has on the specified Organization.
The `resource` field should be the organization's resource name,
e.g. "organizations/123".

There are no permissions required for making this API call.


```js
google_cloudresourcemanager.organizations.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### Ancestor
* Ancestor `object`: Identifying information for a single ancestor of a project.
  * resourceId [ResourceId](#resourceid)

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

### BooleanConstraint
* BooleanConstraint `object`: A `Constraint` that is either enforced or not.

### BooleanPolicy
* BooleanPolicy `object`: Used in `policy_type` to specify how `boolean_policy` will behave at this
  * enforced `boolean`: If `true`, then the `Policy` is enforced. If `false`, then any

### ClearOrgPolicyRequest
* ClearOrgPolicyRequest `object`: The request sent to the ClearOrgPolicy method.
  * constraint `string`: Name of the `Constraint` of the `Policy` to clear.
  * etag `string`: The current version, for concurrency control. Not sending an `etag`

### Constraint
* Constraint `object`: A `Constraint` describes a way in which a resource's configuration can be
  * booleanConstraint [BooleanConstraint](#booleanconstraint)
  * constraintDefault `string` (values: CONSTRAINT_DEFAULT_UNSPECIFIED, ALLOW, DENY): The evaluation behavior of this constraint in the absense of 'Policy'.
  * description `string`: Detailed description of what this `Constraint` controls as well as how and
  * displayName `string`: The human readable name.
  * listConstraint [ListConstraint](#listconstraint)
  * name `string`: Immutable value, required to globally be unique. For example,
  * version `integer`: Version of the `Constraint`. Default version is 0;

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### FolderOperation
* FolderOperation `object`: Metadata describing a long running folder operation
  * destinationParent `string`: The resource name of the folder or organization we are either creating
  * displayName `string`: The display name of the folder.
  * operationType `string` (values: OPERATION_TYPE_UNSPECIFIED, CREATE, MOVE): The type of this operation.
  * sourceParent `string`: The resource name of the folder's parent.

### FolderOperationError
* FolderOperationError `object`: A classification of the Folder Operation error.
  * errorMessageId `string` (values: ERROR_TYPE_UNSPECIFIED, ACTIVE_FOLDER_HEIGHT_VIOLATION, MAX_CHILD_FOLDERS_VIOLATION, FOLDER_NAME_UNIQUENESS_VIOLATION, RESOURCE_DELETED_VIOLATION, PARENT_DELETED_VIOLATION, CYCLE_INTRODUCED_VIOLATION, FOLDER_BEING_MOVED_VIOLATION, FOLDER_TO_DELETE_NON_EMPTY_VIOLATION, DELETED_FOLDER_HEIGHT_VIOLATION): The type of operation error experienced.

### GetAncestryRequest
* GetAncestryRequest `object`: The request sent to the

### GetAncestryResponse
* GetAncestryResponse `object`: Response from the GetAncestry method.
  * ancestor `array`: Ancestors are ordered from bottom to top of the resource hierarchy. The
    * items [Ancestor](#ancestor)

### GetEffectiveOrgPolicyRequest
* GetEffectiveOrgPolicyRequest `object`: The request sent to the GetEffectiveOrgPolicy method.
  * constraint `string`: The name of the `Constraint` to compute the effective `Policy`.

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.

### GetOrgPolicyRequest
* GetOrgPolicyRequest `object`: The request sent to the GetOrgPolicy method.
  * constraint `string`: Name of the `Constraint` to get the `Policy`.

### Lien
* Lien `object`: A Lien represents an encumbrance on the actions that can be performed on a
  * createTime `string`: The creation time of this Lien.
  * name `string`: A system-generated unique identifier for this Lien.
  * origin `string`: A stable, user-visible/meaningful string identifying the origin of the
  * parent `string`: A reference to the resource this Lien is attached to. The server will
  * reason `string`: Concise user-visible strings indicating why an action cannot be performed
  * restrictions `array`: The types of operations which should be blocked as a result of this Lien.
    * items `string`

### ListAvailableOrgPolicyConstraintsRequest
* ListAvailableOrgPolicyConstraintsRequest `object`: The request sent to the [ListAvailableOrgPolicyConstraints]
  * pageSize `integer`: Size of the pages to be returned. This is currently unsupported and will
  * pageToken `string`: Page token used to retrieve the next page. This is currently unsupported

### ListAvailableOrgPolicyConstraintsResponse
* ListAvailableOrgPolicyConstraintsResponse `object`: The response returned from the ListAvailableOrgPolicyConstraints method.
  * constraints `array`: The collection of constraints that are settable on the request resource.
    * items [Constraint](#constraint)
  * nextPageToken `string`: Page token used to retrieve the next page. This is currently not used.

### ListConstraint
* ListConstraint `object`: A `Constraint` that allows or disallows a list of string values, which are
  * suggestedValue `string`: Optional. The Google Cloud Console will try to default to a configuration

### ListLiensResponse
* ListLiensResponse `object`: The response message for Liens.ListLiens.
  * liens `array`: A list of Liens.
    * items [Lien](#lien)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more

### ListOrgPoliciesRequest
* ListOrgPoliciesRequest `object`: The request sent to the ListOrgPolicies method.
  * pageSize `integer`: Size of the pages to be returned. This is currently unsupported and will
  * pageToken `string`: Page token used to retrieve the next page. This is currently unsupported

### ListOrgPoliciesResponse
* ListOrgPoliciesResponse `object`: The response returned from the ListOrgPolicies method. It will be empty
  * nextPageToken `string`: Page token used to retrieve the next page. This is currently not used, but
  * policies `array`: The `Policies` that are set on the resource. It will be empty if no
    * items [OrgPolicy](#orgpolicy)

### ListPolicy
* ListPolicy `object`: Used in `policy_type` to specify how `list_policy` behaves at this
  * allValues `string` (values: ALL_VALUES_UNSPECIFIED, ALLOW, DENY): The policy all_values state.
  * allowedValues `array`: List of values allowed  at this resource. Can only be set if no values
    * items `string`
  * deniedValues `array`: List of values denied at this resource. Can only be set if no values are
    * items `string`
  * inheritFromParent `boolean`: Determines the inheritance behavior for this `Policy`.
  * suggestedValue `string`: Optional. The Google Cloud Console will try to default to a configuration

### ListProjectsResponse
* ListProjectsResponse `object`: A page of the response received from the
  * nextPageToken `string`: Pagination token.
  * projects `array`: The list of Projects that matched the list filter. This list can
    * items [Project](#project)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### OrgPolicy
* OrgPolicy `object`: Defines a Cloud Organization `Policy` which is used to specify `Constraints`
  * booleanPolicy [BooleanPolicy](#booleanpolicy)
  * constraint `string`: The name of the `Constraint` the `Policy` is configuring, for example,
  * etag `string`: An opaque tag indicating the current version of the `Policy`, used for
  * listPolicy [ListPolicy](#listpolicy)
  * restoreDefault [RestoreDefault](#restoredefault)
  * updateTime `string`: The time stamp the `Policy` was previously updated. This is set by the
  * version `integer`: Version of the `Policy`. Default version is 0;

### Organization
* Organization `object`: The root node in the resource hierarchy to which a particular entity's
  * creationTime `string`: Timestamp when the Organization was created. Assigned by the server.
  * displayName `string`: A friendly string to be used to refer to the Organization in the UI.
  * lifecycleState `string` (values: LIFECYCLE_STATE_UNSPECIFIED, ACTIVE, DELETE_REQUESTED): The organization's current lifecycle state. Assigned by the server.
  * name `string`: Output Only. The resource name of the organization. This is the
  * owner [OrganizationOwner](#organizationowner)

### OrganizationOwner
* OrganizationOwner `object`: The entity that owns an Organization. The lifetime of the Organization and
  * directoryCustomerId `string`: The Google for Work customer id used in the Directory API.

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Version of the `Policy`. The default version is 0.

### Project
* Project `object`: A Project is a high-level Google Cloud Platform entity.  It is a
  * createTime `string`: Creation time.
  * labels `object`: The labels associated with this Project.
  * lifecycleState `string` (values: LIFECYCLE_STATE_UNSPECIFIED, ACTIVE, DELETE_REQUESTED, DELETE_IN_PROGRESS): The Project lifecycle state.
  * name `string`: The user-assigned display name of the Project.
  * parent [ResourceId](#resourceid)
  * projectId `string`: The unique, user-assigned ID of the Project.
  * projectNumber `string`: The number uniquely identifying the project.

### ProjectCreationStatus
* ProjectCreationStatus `object`: A status object which is used as the `metadata` field for the Operation
  * createTime `string`: Creation time of the project creation workflow.
  * gettable `boolean`: True if the project can be retrieved using GetProject. No other operations
  * ready `boolean`: True if the project creation process is complete.

### ResourceId
* ResourceId `object`: A container to reference an id for any resource type. A `resource` in Google
  * id `string`: Required field for the type-specific id. This should correspond to the id
  * type `string`: Required field representing the resource type this id is for.

### RestoreDefault
* RestoreDefault `object`: Ignores policies set above this resource and restores the

### SearchOrganizationsRequest
* SearchOrganizationsRequest `object`: The request sent to the `SearchOrganizations` method.
  * filter `string`: An optional query string used to filter the Organizations to return in
  * pageSize `integer`: The maximum number of Organizations to return in the response.
  * pageToken `string`: A pagination token returned from a previous call to `SearchOrganizations`

### SearchOrganizationsResponse
* SearchOrganizationsResponse `object`: The response returned from the `SearchOrganizations` method.
  * nextPageToken `string`: A pagination token to be used to retrieve the next page of results. If the
  * organizations `array`: The list of Organizations that matched the search query, possibly
    * items [Organization](#organization)

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only

### SetOrgPolicyRequest
* SetOrgPolicyRequest `object`: The request sent to the SetOrgPolicyRequest method.
  * policy [OrgPolicy](#orgpolicy)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### UndeleteProjectRequest
* UndeleteProjectRequest `object`: The request sent to the UndeleteProject


