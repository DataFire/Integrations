# @datafire/google_managedidentities

Client library for Managed Service for Microsoft Active Directory API

## Installation and Usage
```bash
npm install --save @datafire/google_managedidentities
```
```js
let google_managedidentities = require('@datafire/google_managedidentities').create({
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

The Managed Service for Microsoft Active Directory API is used for managing a highly available, hardened service running Microsoft Active Directory (AD).

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_managedidentities.oauthCallback({
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
google_managedidentities.oauthRefresh(null, context)
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

### managedidentities.projects.locations.global.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.


```js
google_managedidentities.managedidentities.projects.locations.global.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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

### managedidentities.projects.locations.global.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_managedidentities.managedidentities.projects.locations.global.operations.list({
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

### managedidentities.projects.locations.global.domains.patch
Updates the metadata and configuration of a domain.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The unique name of the domain using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.
  * updateMask `string`: Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include fields from Domain: * `labels` * `locations` * `authorized_networks` * `audit_logs_enabled`
  * body [Domain](#domain)
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

### managedidentities.projects.locations.list
Lists information about the supported locations for this service.


```js
google_managedidentities.managedidentities.projects.locations.list({
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

### managedidentities.projects.locations.global.domains.attachTrust
Adds an AD trust to a domain.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.attachTrust({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
  * body [AttachTrustRequest](#attachtrustrequest)
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

### managedidentities.projects.locations.global.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_managedidentities.managedidentities.projects.locations.global.operations.cancel({
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

### managedidentities.projects.locations.global.domains.detachTrust
Removes an AD trust.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.detachTrust({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
  * body [DetachTrustRequest](#detachtrustrequest)
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

### managedidentities.projects.locations.global.domains.reconfigureTrust
Updates the DNS conditional forwarder.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.reconfigureTrust({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
  * body [ReconfigureTrustRequest](#reconfiguretrustrequest)
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

### managedidentities.projects.locations.global.domains.resetAdminPassword
Resets a domain's administrator password.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.resetAdminPassword({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
  * body [ResetAdminPasswordRequest](#resetadminpasswordrequest)
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
* output [ResetAdminPasswordResponse](#resetadminpasswordresponse)

### managedidentities.projects.locations.global.domains.validateTrust
Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.validateTrust({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
  * body [ValidateTrustRequest](#validatetrustrequest)
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

### managedidentities.projects.locations.global.domains.list
Lists domains in a project.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`
  * filter `string`: Optional. A filter specifying constraints of a list operation. For example, `Domain.fqdn="mydomain.myorginization"`.
  * orderBy `string`: Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
  * pageSize `integer`: Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used. Regardless of the page_size value, the response may include a partial list. Callers should rely on a response's next_page_token to determine if there are additional results to list.
  * pageToken `string`: The `next_page_token` value returned from a previous ListDomainsRequest request, if any.
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
* output [ListDomainsResponse](#listdomainsresponse)

### managedidentities.projects.locations.global.domains.create
Creates a Microsoft AD domain.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource project name and location using the form: `projects/{project_id}/locations/global`
  * domainName `string`: Required. A domain name, e.g. mydomain.myorg.com, with the following restrictions: * Must contain only lowercase letters, numbers, periods and hyphens. * Must start with a letter. * Must contain between 2-64 characters. * Must end with a number or a letter. * Must not start with period. * First segement length (mydomain form example above) shouldn't exceed 15 chars. * The last segment cannot be fully numeric. * Must be unique within the customer project.
  * body [Domain](#domain)
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

### managedidentities.projects.locations.global.domains.sqlIntegrations.list
Lists SQLIntegrations in a given domain.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.sqlIntegrations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the SQLIntegrations using the form: `projects/{project_id}/locations/global/domains/*`
  * filter `string`: Optional. Filter specifying constraints of a list operation. For example, `SQLIntegration.name="sql"`.
  * orderBy `string`: Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
  * pageSize `integer`: Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response'ANIZATIONs next_page_token to determine if there are more instances left to be queried.
  * pageToken `string`: Optional. The next_page_token value returned from a previous List request, if any.
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
* output [ListSQLIntegrationsResponse](#listsqlintegrationsresponse)

### managedidentities.projects.locations.global.domains.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.getIamPolicy({
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

### managedidentities.projects.locations.global.domains.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.setIamPolicy({
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

### managedidentities.projects.locations.global.domains.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_managedidentities.managedidentities.projects.locations.global.domains.testIamPermissions({
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

### AttachTrustRequest
* AttachTrustRequest `object`: Request message for AttachTrust
  * trust [Trust](#trust)

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### DailyCycle
* DailyCycle `object`: Time window specified for daily operations.
  * duration `string`: Output only. Duration of the time window, set by service producer.
  * startTime [TimeOfDay](#timeofday)

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DenyMaintenancePeriod
* DenyMaintenancePeriod `object`: DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.
  * endDate [Date](#date)
  * startDate [Date](#date)
  * time [TimeOfDay](#timeofday)

### DetachTrustRequest
* DetachTrustRequest `object`: Request message for DetachTrust
  * trust [Trust](#trust)

### Domain
* Domain `object`: If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. Represents a managed Microsoft Active Directory domain.
  * admin `string`: Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, `setupadmin` will be used.
  * authorizedNetworks `array`: Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) the domain instance is connected to. Networks can be added using UpdateDomain. The domain is only available on networks listed in `authorized_networks`. If CIDR subnets overlap between networks, domain creation will fail.
    * items `string`
  * createTime `string`: Output only. The time the instance was created.
  * fqdn `string`: Output only. The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory set up on an internal network.
  * labels `object`: Optional. Resource labels that can contain user-provided metadata.
  * locations `array`: Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
    * items `string`
  * name `string`: Output only. The unique name of the domain using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.
  * reservedIpRange `string`: Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, UPDATING, DELETING, REPAIRING, PERFORMING_MAINTENANCE, UNAVAILABLE): Output only. The current state of this domain.
  * statusMessage `string`: Output only. Additional information about the current status of this domain, if available.
  * trusts `array`: Output only. The current trusts associated with the domain.
    * items [Trust](#trust)
  * updateTime `string`: Output only. The last update time.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### GoogleCloudManagedidentitiesV1OpMetadata
* GoogleCloudManagedidentitiesV1OpMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: Output only. API version used to start the operation.
  * createTime `string`: Output only. The time the operation was created.
  * endTime `string`: Output only. The time the operation finished running.
  * requestedCancellation `boolean`: Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * target `string`: Output only. Server-defined resource path for the target of the operation.
  * verb `string`: Output only. Name of the verb executed by the operation.

### GoogleCloudManagedidentitiesV1alpha1OpMetadata
* GoogleCloudManagedidentitiesV1alpha1OpMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: Output only. API version used to start the operation.
  * createTime `string`: Output only. The time the operation was created.
  * endTime `string`: Output only. The time the operation finished running.
  * requestedCancellation `boolean`: Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * target `string`: Output only. Server-defined resource path for the target of the operation.
  * verb `string`: Output only. Name of the verb executed by the operation.

### GoogleCloudManagedidentitiesV1beta1OpMetadata
* GoogleCloudManagedidentitiesV1beta1OpMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: Output only. API version used to start the operation.
  * createTime `string`: Output only. The time the operation was created.
  * endTime `string`: Output only. The time the operation finished running.
  * requestedCancellation `boolean`: Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * target `string`: Output only. Server-defined resource path for the target of the operation.
  * verb `string`: Output only. Name of the verb executed by the operation.

### GoogleCloudSaasacceleratorManagementProvidersV1Instance
* GoogleCloudSaasacceleratorManagementProvidersV1Instance `object`
  * consumerDefinedName `string`: consumer_defined_name is the name that is set by the consumer. On the other hand Name field represents system-assigned id of an instance so consumers are not necessarily aware of it. consumer_defined_name is used for notification/UI purposes for consumer to recognize their instances.
  * createTime `string`: Output only. Timestamp when the resource was created.
  * labels `object`: Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
  * maintenancePolicyNames `object`: Deprecated. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug.
  * maintenanceSchedules `object`: The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.
  * maintenanceSettings [GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings](#googlecloudsaasacceleratormanagementprovidersv1maintenancesettings)
  * name `string`: Unique name of the resource. It uses the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
  * producerMetadata `object`: Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.
  * provisionedResources `array`: Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource](#googlecloudsaasacceleratormanagementprovidersv1provisionedresource)
  * slmInstanceTemplate `string`: Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.
  * sloMetadata [GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata](#googlecloudsaasacceleratormanagementprovidersv1slometadata)
  * softwareVersions `object`: Software versions that are used to deploy this instance. This can be mutated by rollout services.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, UPDATING, REPAIRING, DELETING, ERROR): Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).
  * tenantProjectId `string`: Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.
  * updateTime `string`: Output only. Timestamp when the resource was last modified.

### GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule
* GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule `object`: Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule
  * canReschedule `boolean`: Can this scheduled update be rescheduled? By default, it's true and API needs to do explicitly check whether it's set, if it's set as false explicitly, it's false
  * endTime `string`: The scheduled end time for the maintenance.
  * rolloutManagementPolicy `string`: The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.
  * startTime `string`: The scheduled start time for the maintenance.

### GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings
* GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings `object`: Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.
  * exclude `boolean`: Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.
  * maintenancePolicies `object`: Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug. If only the name is needed (like in the deprecated Instance.maintenance_policy_names field) then only populate MaintenancePolicy.name.

### GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata
* GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata `object`: Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.
  * exclusions `array`: By default node is eligible if instance is eligible. But individual node might be excluded from SLO by adding entry here. For semantic see SloMetadata.exclusions. If both instance and node level exclusions are present for time period, the node level's reason will be reported by Eligibility Exporter.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion](#googlecloudsaasacceleratormanagementprovidersv1sloexclusion)
  * location `string`: The location of the node, if different from instance location.
  * nodeId `string`: The id of the node. This should be equal to SaasInstanceNode.node_id.

### GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource
* GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource `object`: Describes provisioned dataplane resources.
  * resourceType `string`: Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.
  * resourceUrl `string`: URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".

### GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility
* GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility `object`: SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.
  * eligible `boolean`: Whether an instance is eligible or ineligible.
  * reason `string`: User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.

### GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion
* GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion `object`: SloExclusion represents an exclusion in SLI calculation applies to all SLOs.
  * duration `string`: Exclusion duration. No restrictions on the possible values. When an ongoing operation is taking longer than initially expected, an existing entry in the exclusion list can be updated by extending the duration. This is supported by the subsystem exporting eligibility data as long as such extension is committed at least 10 minutes before the original exclusion expiration - otherwise it is possible that there will be "gaps" in the exclusion application in the exported timeseries.
  * reason `string`: Human-readable reason for the exclusion. This should be a static string (e.g. "Disruptive update in progress") and should not contain dynamically generated data (e.g. instance name). Can be left empty.
  * sliName `string`: Name of an SLI that this exclusion applies to. Can be left empty, signaling that the instance should be excluded from all SLIs defined in the service SLO configuration.
  * startTime `string`: Start time of the exclusion. No alignment (e.g. to a full minute) needed.

### GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata
* GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata `object`: SloMetadata contains resources required for proper SLO classification of the instance.
  * eligibility [GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility](#googlecloudsaasacceleratormanagementprovidersv1sloeligibility)
  * exclusions `array`: List of SLO exclusion windows. When multiple entries in the list match (matching the exclusion time-window against current time point) the exclusion reason used in the first matching entry will be published. It is not needed to include expired exclusion in this list, as only the currently applicable exclusions are taken into account by the eligibility exporting subsystem (the historical state of exclusions will be reflected in the historically produced timeseries regardless of the current state). This field can be used to mark the instance as temporary ineligible for the purpose of SLO calculation. For permanent instance SLO exclusion, use of custom instance eligibility is recommended. See 'eligibility' field below.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion](#googlecloudsaasacceleratormanagementprovidersv1sloexclusion)
  * nodes `array`: Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata](#googlecloudsaasacceleratormanagementprovidersv1nodeslometadata)
  * tier `string`: Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.

### ListDomainsResponse
* ListDomainsResponse `object`: Response message for ListDomains
  * domains `array`: A list of Managed Identities Service domains in the project.
    * items [Domain](#domain)
  * nextPageToken `string`: A token to retrieve the next page of results, or empty if there are no more results in the list.
  * unreachable `array`: A list of locations that could not be reached.
    * items `string`

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

### ListSQLIntegrationsResponse
* ListSQLIntegrationsResponse `object`: ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * sqlIntegrations `array`: A list of SQLIntegrations of a domain.
    * items [SQLIntegration](#sqlintegration)
  * unreachable `array`: A list of locations that could not be reached.
    * items `string`

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### MaintenancePolicy
* MaintenancePolicy `object`: Defines policies to service maintenance events.
  * createTime `string`: Output only. The time when the resource was created.
  * description `string`: Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
  * labels `object`: Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
  * name `string`: Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.
  * state `string` (values: STATE_UNSPECIFIED, READY, DELETING): Optional. The state of the policy.
  * updatePolicy [UpdatePolicy](#updatepolicy)
  * updateTime `string`: Output only. The time when the resource was updated.

### MaintenanceWindow
* MaintenanceWindow `object`: MaintenanceWindow definition.
  * dailyCycle [DailyCycle](#dailycycle)
  * weeklyCycle [WeeklyCycle](#weeklycycle)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationMetadata
* OperationMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: [Output only] API version used to start the operation.
  * cancelRequested `boolean`: [Output only] Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * createTime `string`: [Output only] The time the operation was created.
  * endTime `string`: [Output only] The time the operation finished running.
  * statusDetail `string`: [Output only] Human-readable status of the operation, if any.
  * target `string`: [Output only] Server-defined resource path for the target of the operation.
  * verb `string`: [Output only] Name of the verb executed by the operation.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### ReconfigureTrustRequest
* ReconfigureTrustRequest `object`: Request message for ReconfigureTrust
  * targetDnsIpAddresses `array`: Required. The target DNS server IP addresses to resolve the remote domain involved in the trust.
    * items `string`
  * targetDomainName `string`: Required. The fully-qualified target domain name which will be in trust with current domain.

### ResetAdminPasswordRequest
* ResetAdminPasswordRequest `object`: Request message for ResetAdminPassword

### ResetAdminPasswordResponse
* ResetAdminPasswordResponse `object`: Response message for ResetAdminPassword
  * password `string`: A random password. See admin for more information.

### SQLIntegration
* SQLIntegration `object`: Represents the SQL instance integrated with AD.
  * createTime `string`: Output only. The time sql integration was created. Synthetic field is populated automatically by CCFE.
  * name `string`: The unique name of the sql integration in the form of `projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}`
  * sqlInstance `string`: The full resource name of an integrated sql instance TODO(b/161918255) Add resource type annotation post CloudSQL API fix.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, DELETING, READY): Output only. The current state of the sql integration.
  * updateTime `string`: Output only. The time sql integration was updated. Synthetic field is populated automatically by CCFE.

### Schedule
* Schedule `object`: Configure the schedule.
  * day `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY): Allows to define schedule that runs specified day of the week.
  * duration `string`: Output only. Duration of the time window, set by service producer.
  * startTime [TimeOfDay](#timeofday)

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

### Trust
* Trust `object`: Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
  * createTime `string`: Output only. The time the instance was created.
  * lastTrustHeartbeatTime `string`: Output only. The last heartbeat time when the trust was known to be connected.
  * selectiveAuthentication `boolean`: The trust authentication type, which decides whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, UPDATING, DELETING, CONNECTED, DISCONNECTED): Output only. The current state of the trust.
  * stateDescription `string`: Output only. Additional information about the current state of the trust, if available.
  * targetDnsIpAddresses `array`: The target DNS server IP addresses which can resolve the remote domain involved in the trust.
    * items `string`
  * targetDomainName `string`: The fully qualified target domain name which will be in trust with the current domain.
  * trustDirection `string` (values: TRUST_DIRECTION_UNSPECIFIED, INBOUND, OUTBOUND, BIDIRECTIONAL): The trust direction, which decides if the current domain is trusted, trusting, or both.
  * trustHandshakeSecret `string`: Input only. The trust secret used for the handshake with the target domain. It will not be stored.
  * trustType `string` (values: TRUST_TYPE_UNSPECIFIED, FOREST, EXTERNAL): The type of trust represented by the trust resource.
  * updateTime `string`: Output only. The last update time.

### UpdatePolicy
* UpdatePolicy `object`: Maintenance policy applicable to instance updates.
  * channel `string` (values: UPDATE_CHANNEL_UNSPECIFIED, EARLIER, LATER): Optional. Relative scheduling channel applied to resource.
  * denyMaintenancePeriods `array`: Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. User can specify zero or more non-overlapping deny periods. For V1, Maximum number of deny_maintenance_periods is expected to be one.
    * items [DenyMaintenancePeriod](#denymaintenanceperiod)
  * window [MaintenanceWindow](#maintenancewindow)

### ValidateTrustRequest
* ValidateTrustRequest `object`: Request message for ValidateTrust
  * trust [Trust](#trust)

### WeeklyCycle
* WeeklyCycle `object`: Time window specified for weekly operations.
  * schedule `array`: User can specify multiple windows in a week. Minimum of 1 window.
    * items [Schedule](#schedule)


