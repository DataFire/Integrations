# @datafire/google_cloudresourcemanager

Client library for Google Cloud Resource Manager

## Installation and Usage
```bash
npm install --save datafire @datafire/google_cloudresourcemanager
```

```js
let datafire = require('datafire');
let google_cloudresourcemanager = require('@datafire/google_cloudresourcemanager').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_cloudresourcemanager.projects.create({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudresourcemanager.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### liens.list
List all Liens applied to the `parent` resource.

Callers of this method will require permission on the `parent` resource.
For example, a Lien with a `parent` of `projects/1234` requires permission
`resourcemanager.projects.get`.


```js
google_cloudresourcemanager.liens.list({}, context)
```

#### Parameters
* pageToken (string) - The `next_page_token` value returned from a previous List request, if any.
* pageSize (integer) - The maximum number of items to return. This is a suggestion for the server.
* parent (string) - The name of the resource to list all attached Liens.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### liens.create
Create a Lien which applies to the resource denoted by the `parent` field.

Callers of this method will require permission on the `parent` resource.
For example, applying to `projects/1234` requires permission
`resourcemanager.projects.updateLiens`.

NOTE: Some resources may limit the number of Liens which may be applied.


```js
google_cloudresourcemanager.liens.create({}, context)
```

#### Parameters
* body (object) - A Lien represents an encumbrance on the actions that can be performed on a
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* body (object) - The request sent to the `SearchOrganizations` method.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.list
Lists Projects that are visible to the user and satisfy the
specified filter. This method returns Projects in an unspecified order.
New Projects do not necessarily appear at the end of the list.


```js
google_cloudresourcemanager.projects.list({}, context)
```

#### Parameters
* filter (string) - An expression for filtering the results of the request.  Filter rules are
* pageSize (integer) - The maximum number of Projects to return in the response.
* pageToken (string) - A pagination token returned from a previous call to ListProjects
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* body (object) - A Project is a high-level Google Cloud Platform entity.  It is a
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* projectId (string) **required** - The Project ID (for example, `foo-bar-123`).
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.get
Retrieves the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.


```js
google_cloudresourcemanager.projects.get({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The Project ID (for example, `my-project-123`).
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.update
Updates the attributes of the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have modify permissions for this Project.


```js
google_cloudresourcemanager.projects.update({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project ID (for example, `my-project-123`).
* body (object) - A Project is a high-level Google Cloud Platform entity.  It is a
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.getAncestry
Gets a list of ancestors in the resource hierarchy for the Project
identified by the specified `project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.


```js
google_cloudresourcemanager.projects.getAncestry({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The Project ID (for example, `my-project-123`).
* body (object) - The request sent to the
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* projectId (string) **required** - The project ID (for example, `foo-bar-123`).
* body (object) - The request sent to the UndeleteProject
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being requested.
* body (object) - Request message for `GetIamPolicy` method.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being specified.
* body (object) - Request message for `SetIamPolicy` method.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.testIamPermissions
Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.


```js
google_cloudresourcemanager.projects.testIamPermissions({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy detail is being requested.
* body (object) - Request message for `TestIamPermissions` method.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* name (string) **required** - The name/identifier of the Lien to delete.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_cloudresourcemanager.operations.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### folders.clearOrgPolicy
Clears a `Policy` from a resource.


```js
google_cloudresourcemanager.folders.clearOrgPolicy({
  "resource": ""
}, context)
```

#### Parameters
* body (object) - The request sent to the ClearOrgPolicy method.
* resource (string) **required** - Name of the resource for the `Policy` to clear.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### folders.getEffectiveOrgPolicy
Gets the effective `Policy` on a resource. This is the result of merging
`Policies` in the resource hierarchy. The returned `Policy` will not have
an `etag`set because it is a computed `Policy` across multiple resources.


```js
google_cloudresourcemanager.folders.getEffectiveOrgPolicy({
  "resource": ""
}, context)
```

#### Parameters
* body (object) - The request sent to the GetEffectiveOrgPolicy method.
* resource (string) **required** - The name of the resource to start computing the effective `Policy`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being requested.
* body (object) - Request message for `GetIamPolicy` method.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* body (object) - The request sent to the GetOrgPolicy method.
* resource (string) **required** - Name of the resource the `Policy` is set on.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### folders.listAvailableOrgPolicyConstraints
Lists `Constraints` that could be applied on the specified resource.


```js
google_cloudresourcemanager.folders.listAvailableOrgPolicyConstraints({
  "resource": ""
}, context)
```

#### Parameters
* body (object) - The request sent to the [ListAvailableOrgPolicyConstraints]
* resource (string) **required** - Name of the resource to list `Constraints` for.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### folders.listOrgPolicies
Lists all the `Policies` set for a particular resource.


```js
google_cloudresourcemanager.folders.listOrgPolicies({
  "resource": ""
}, context)
```

#### Parameters
* body (object) - The request sent to the ListOrgPolicies method.
* resource (string) **required** - Name of the resource to list Policies for.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being specified.
* body (object) - Request message for `SetIamPolicy` method.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

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

#### Parameters
* body (object) - The request sent to the SetOrgPolicyRequest method.
* resource (string) **required** - Resource name of the resource to attach the `Policy`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy detail is being requested.
* body (object) - Request message for `TestIamPermissions` method.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

