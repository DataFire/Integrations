# @datafire/google_networkmanagement

Client library for Network Management API

## Installation and Usage
```bash
npm install --save @datafire/google_networkmanagement
```
```js
let google_networkmanagement = require('@datafire/google_networkmanagement').create({
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

The Network Management API provides a collection of network performance monitoring and diagnostic capabilities.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_networkmanagement.oauthCallback({
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
google_networkmanagement.oauthRefresh(null, context)
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

### networkmanagement.projects.locations.global.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.


```js
google_networkmanagement.networkmanagement.projects.locations.global.operations.delete({
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

### networkmanagement.projects.locations.global.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_networkmanagement.networkmanagement.projects.locations.global.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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

### networkmanagement.projects.locations.global.connectivityTests.patch
Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.


```js
google_networkmanagement.networkmanagement.projects.locations.global.connectivityTests.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`
  * updateMask `string`: Required. Mask of fields to update. At least one path must be supplied in this field.
  * body [ConnectivityTest](#connectivitytest)
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

### networkmanagement.projects.locations.list
Lists information about the supported locations for this service.


```js
google_networkmanagement.networkmanagement.projects.locations.list({
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

### networkmanagement.projects.locations.global.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_networkmanagement.networkmanagement.projects.locations.global.operations.list({
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

### networkmanagement.projects.locations.global.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_networkmanagement.networkmanagement.projects.locations.global.operations.cancel({
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

### networkmanagement.projects.locations.global.connectivityTests.rerun
Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.


```js
google_networkmanagement.networkmanagement.projects.locations.global.connectivityTests.rerun({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`
  * body [RerunConnectivityTestRequest](#rerunconnectivitytestrequest)
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

### networkmanagement.projects.locations.global.connectivityTests.list
Lists all Connectivity Tests owned by a project.


```js
google_networkmanagement.networkmanagement.projects.locations.global.connectivityTests.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource of the Connectivity Tests: `projects/{project_id}/locations/global`
  * filter `string`: Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar
  * orderBy `string`: Field to use to sort the list.
  * pageSize `integer`: Number of `ConnectivityTests` to return.
  * pageToken `string`: Page token from an earlier query, as returned in `next_page_token`.
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
* output [ListConnectivityTestsResponse](#listconnectivitytestsresponse)

### networkmanagement.projects.locations.global.connectivityTests.create
Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.


```js
google_networkmanagement.networkmanagement.projects.locations.global.connectivityTests.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global`
  * testId `string`: Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project
  * body [ConnectivityTest](#connectivitytest)
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

### networkmanagement.projects.locations.global.connectivityTests.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_networkmanagement.networkmanagement.projects.locations.global.connectivityTests.getIamPolicy({
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

### networkmanagement.projects.locations.global.connectivityTests.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.


```js
google_networkmanagement.networkmanagement.projects.locations.global.connectivityTests.setIamPolicy({
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

### networkmanagement.projects.locations.global.connectivityTests.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_networkmanagement.networkmanagement.projects.locations.global.connectivityTests.testIamPermissions({
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

### AbortInfo
* AbortInfo `object`: Details of the final state "abort" and associated resource.
  * cause `string` (values: CAUSE_UNSPECIFIED, UNKNOWN_NETWORK, UNKNOWN_IP, UNKNOWN_PROJECT, PERMISSION_DENIED, NO_SOURCE_LOCATION, INVALID_ARGUMENT, NO_EXTERNAL_IP, UNINTENDED_DESTINATION, TRACE_TOO_LONG, INTERNAL_ERROR): Causes that the analysis is aborted.
  * resourceUri `string`: URI of the resource that caused the abort.

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * bindingId `string`
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### CloudSQLInstanceInfo
* CloudSQLInstanceInfo `object`: For display only. Metadata associated with a Cloud SQL instance.
  * displayName `string`: Name of a Cloud SQL instance.
  * externalIp `string`: External IP address of Cloud SQL instance.
  * internalIp `string`: Internal IP address of Cloud SQL instance.
  * networkUri `string`: URI of a Cloud SQL instance network or empty string if instance does not have one.
  * region `string`: Region in which the Cloud SQL instance is running.
  * uri `string`: URI of a Cloud SQL instance.

### ConnectivityTest
* ConnectivityTest `object`: A Connectivity Test for a network reachability analysis.
  * createTime `string`: Output only. The time the test was created.
  * description `string`: The user-supplied description of the Connectivity Test. Maximum of 512 characters.
  * destination [Endpoint](#endpoint)
  * displayName `string`: Output only. The display name of a Connectivity Test.
  * labels `object`: Resource labels to represent user-provided metadata.
  * name `string`: Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`
  * probingDetails [ProbingDetails](#probingdetails)
  * protocol `string`: IP Protocol of the test. When not provided, "TCP" is assumed.
  * reachabilityDetails [ReachabilityDetails](#reachabilitydetails)
  * relatedProjects `array`: Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.
    * items `string`
  * source [Endpoint](#endpoint)
  * updateTime `string`: Output only. The time the test's configuration was updated.

### DeliverInfo
* DeliverInfo `object`: Details of the final state "deliver" and associated resource.
  * resourceUri `string`: URI of the resource that the packet is delivered to.
  * target `string` (values: TARGET_UNSPECIFIED, INSTANCE, INTERNET, GOOGLE_API, GKE_MASTER, CLOUD_SQL_INSTANCE): Target type where the packet is delivered to.

### DropInfo
* DropInfo `object`: Details of the final state "drop" and associated resource.
  * cause `string` (values: CAUSE_UNSPECIFIED, UNKNOWN_EXTERNAL_ADDRESS, FOREIGN_IP_DISALLOWED, FIREWALL_RULE, NO_ROUTE, ROUTE_BLACKHOLE, ROUTE_WRONG_NETWORK, PRIVATE_TRAFFIC_TO_INTERNET, PRIVATE_GOOGLE_ACCESS_DISALLOWED, NO_EXTERNAL_ADDRESS, UNKNOWN_INTERNAL_ADDRESS, FORWARDING_RULE_MISMATCH, FORWARDING_RULE_NO_INSTANCES, FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK, INSTANCE_NOT_RUNNING, TRAFFIC_TYPE_BLOCKED, GKE_MASTER_UNAUTHORIZED_ACCESS, CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS, DROPPED_INSIDE_GKE_SERVICE, DROPPED_INSIDE_CLOUD_SQL_SERVICE): Cause that the packet is dropped.
  * resourceUri `string`: URI of the resource that caused the drop.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Endpoint
* Endpoint `object`: Source or destination of the Connectivity Test.
  * cloudSqlInstance `string`: A [Cloud SQL](https://cloud.google.com/sql) instance URI.
  * gkeMasterCluster `string`: A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).
  * instance `string`: A Compute Engine instance URI.
  * ipAddress `string`: The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](https://cloud.google.com/load-balancing/docs/load-balancing-overview).
  * network `string`: A Compute Engine network URI.
  * networkType `string` (values: NETWORK_TYPE_UNSPECIFIED, GCP_NETWORK, NON_GCP_NETWORK): Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.
  * port `integer`: The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.
  * projectId `string`: Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a GCP project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.

### EndpointInfo
* EndpointInfo `object`: For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
  * destinationIp `string`: Destination IP address.
  * destinationNetworkUri `string`: URI of the network where this packet is sent to.
  * destinationPort `integer`: Destination port. Only valid when protocol is TCP or UDP.
  * protocol `string`: IP protocol in string format, for example: "TCP", "UDP", "ICMP".
  * sourceIp `string`: Source IP address.
  * sourceNetworkUri `string`: URI of the network where this packet originates from.
  * sourcePort `integer`: Source port. Only valid when protocol is TCP or UDP.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### FirewallInfo
* FirewallInfo `object`: For display only. Metadata associated with a Compute Engine firewall rule.
  * action `string`: Possible values: ALLOW, DENY
  * direction `string`: Possible values: INGRESS, EGRESS
  * displayName `string`: Name of a Compute Engine firewall rule.
  * networkUri `string`: URI of a Compute Engine network.
  * priority `integer`: Priority of the firewall rule.
  * targetServiceAccounts `array`: Target service accounts of the firewall rule.
    * items `string`
  * targetTags `array`: Target tags of the firewall rule.
    * items `string`
  * uri `string`: URI of a Compute Engine firewall rule. Implied default rule does not have URI.

### ForwardInfo
* ForwardInfo `object`: Details of the final state "forward" and associated resource.
  * resourceUri `string`: URI of the resource that the packet is forwarded to.
  * target `string` (values: TARGET_UNSPECIFIED, PEERING_VPC, VPN_GATEWAY, INTERCONNECT, GKE_MASTER, IMPORTED_CUSTOM_ROUTE_NEXT_HOP, CLOUD_SQL_INSTANCE): Target type where this packet is forwarded to.

### ForwardingRuleInfo
* ForwardingRuleInfo `object`: For display only. Metadata associated with a Compute Engine forwarding rule.
  * displayName `string`: Name of a Compute Engine forwarding rule.
  * matchedPortRange `string`: Port range defined in the forwarding rule that matches the test.
  * matchedProtocol `string`: Protocol defined in the forwarding rule that matches the test.
  * networkUri `string`: Network URI. Only valid for Internal Load Balancer.
  * target `string`: Target type of the forwarding rule.
  * uri `string`: URI of a Compute Engine forwarding rule.
  * vip `string`: VIP of the forwarding rule.

### GKEMasterInfo
* GKEMasterInfo `object`: For display only. Metadata associated with a Google Kubernetes Engine cluster master.
  * clusterNetworkUri `string`: URI of a Google Kubernetes Engine cluster network.
  * clusterUri `string`: URI of a Google Kubernetes Engine cluster.
  * externalIp `string`: External IP address of a Google Kubernetes Engine cluster master.
  * internalIp `string`: Internal IP address of a Google Kubernetes Engine cluster master.

### InstanceInfo
* InstanceInfo `object`: For display only. Metadata associated with a Compute Engine instance.
  * displayName `string`: Name of a Compute Engine instance.
  * externalIp `string`: External IP address of the network interface.
  * interface `string`: Name of the network interface of a Compute Engine instance.
  * internalIp `string`: Internal IP address of the network interface.
  * networkTags `array`: Network tags configured on the instance.
    * items `string`
  * networkUri `string`: URI of a Compute Engine network.
  * serviceAccount `string`: Service account authorized for the instance.
  * uri `string`: URI of a Compute Engine instance.

### LatencyDistribution
* LatencyDistribution `object`: Describes measured latency distribution.
  * latencyPercentiles `array`: Representative latency percentiles.
    * items [LatencyPercentile](#latencypercentile)

### LatencyPercentile
* LatencyPercentile `object`: Latency percentile rank and value.
  * latencyMicros `string`: percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field.
  * percent `integer`: Percentage of samples this data point applies to.

### ListConnectivityTestsResponse
* ListConnectivityTestsResponse `object`: Response for the `ListConnectivityTests` method.
  * nextPageToken `string`: Page token to fetch the next set of Connectivity Tests.
  * resources `array`: List of Connectivity Tests.
    * items [ConnectivityTest](#connectivitytest)
  * unreachable `array`: Locations that could not be reached (when querying all locations with `-`).
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

### LoadBalancerBackend
* LoadBalancerBackend `object`: For display only. Metadata associated with a specific load balancer backend.
  * displayName `string`: Name of a Compute Engine instance or network endpoint.
  * healthCheckAllowingFirewallRules `array`: A list of firewall rule URIs allowing probes from health check IP ranges.
    * items `string`
  * healthCheckBlockingFirewallRules `array`: A list of firewall rule URIs blocking probes from health check IP ranges.
    * items `string`
  * healthCheckFirewallState `string` (values: HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED, CONFIGURED, MISCONFIGURED): State of the health check firewall configuration.
  * uri `string`: URI of a Compute Engine instance or network endpoint.

### LoadBalancerInfo
* LoadBalancerInfo `object`: For display only. Metadata associated with a load balancer.
  * backendType `string` (values: BACKEND_TYPE_UNSPECIFIED, BACKEND_SERVICE, TARGET_POOL): Type of load balancer's backend configuration.
  * backendUri `string`: Backend configuration URI.
  * backends `array`: Information for the loadbalancer backends.
    * items [LoadBalancerBackend](#loadbalancerbackend)
  * healthCheckUri `string`: URI of the health check for the load balancer.
  * loadBalancerType `string` (values: LOAD_BALANCER_TYPE_UNSPECIFIED, INTERNAL_TCP_UDP, NETWORK_TCP_UDP, HTTP_PROXY, TCP_PROXY, SSL_PROXY): Type of the load balancer.

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### NetworkInfo
* NetworkInfo `object`: For display only. Metadata associated with a Compute Engine network.
  * displayName `string`: Name of a Compute Engine network.
  * matchedIpRange `string`: The IP range that matches the test.
  * uri `string`: URI of a Compute Engine network.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationMetadata
* OperationMetadata `object`: Metadata describing an Operation
  * apiVersion `string`: API version.
  * cancelRequested `boolean`: Specifies if cancellation was requested for the operation.
  * createTime `string`: The time the operation was created.
  * endTime `string`: The time the operation finished running.
  * statusDetail `string`: Human-readable status of the operation, if any.
  * target `string`: Target of the operation - for example projects/project-1/locations/global/connectivityTests/test-1
  * verb `string`: Name of the verb executed by the operation.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### ProbingDetails
* ProbingDetails `object`: The details of probing from the latest run.
  * abortCause `string` (values: PROBING_ABORT_CAUSE_UNSPECIFIED, PERMISSION_DENIED, NO_SOURCE_LOCATION): Causes that the probing was aborted.
  * endpointInfo [EndpointInfo](#endpointinfo)
  * error [Status](#status)
  * probingLatency [LatencyDistribution](#latencydistribution)
  * result `string` (values: PROBING_RESULT_UNSPECIFIED, REACHABLE, UNREACHABLE, REACHABILITY_INCONSISTENT, UNDETERMINED): The overall reachability result of the test.
  * sentProbeCount `integer`: Number of probes sent.
  * successfulProbeCount `integer`: Number of probes that reached destination.
  * verifyTime `string`: The time the reachability state was verified.

### ReachabilityDetails
* ReachabilityDetails `object`: The details of reachability state from the latest run.
  * error [Status](#status)
  * result `string` (values: RESULT_UNSPECIFIED, REACHABLE, UNREACHABLE, AMBIGUOUS, UNDETERMINED): The overall reachability result of the test.
  * traces `array`: Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.
    * items [Trace](#trace)
  * verifyTime `string`: The time the reachability state was verified.

### RerunConnectivityTestRequest
* RerunConnectivityTestRequest `object`: Request for the `RerunConnectivityTest` method.

### RouteInfo
* RouteInfo `object`: For display only. Metadata associated with a Compute Engine route.
  * destIpRange `string`: Destination IP range of the route.
  * displayName `string`: Name of a Compute Engine route.
  * instanceTags `array`: Instance tags of the route.
    * items `string`
  * networkUri `string`: URI of a Compute Engine network.
  * nextHop `string`: Next hop of the route.
  * nextHopType `string` (values: NEXT_HOP_TYPE_UNSPECIFIED, NEXT_HOP_IP, NEXT_HOP_INSTANCE, NEXT_HOP_NETWORK, NEXT_HOP_PEERING, NEXT_HOP_INTERCONNECT, NEXT_HOP_VPN_TUNNEL, NEXT_HOP_VPN_GATEWAY, NEXT_HOP_INTERNET_GATEWAY, NEXT_HOP_BLACKHOLE, NEXT_HOP_ILB): Type of next hop.
  * priority `integer`: Priority of the route.
  * routeType `string` (values: ROUTE_TYPE_UNSPECIFIED, SUBNET, STATIC, DYNAMIC, PEERING_SUBNET, PEERING_STATIC, PEERING_DYNAMIC): Type of route.
  * uri `string`: URI of a Compute Engine route. Dynamic route from cloud router does not have a URI. Advertised route from Google Cloud VPC to on-premises network also does not have a URI.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### Step
* Step `object`: A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
  * abort [AbortInfo](#abortinfo)
  * causesDrop `boolean`: This is a step that leads to the final state Drop.
  * cloudSqlInstance [CloudSQLInstanceInfo](#cloudsqlinstanceinfo)
  * deliver [DeliverInfo](#deliverinfo)
  * description `string`: A description of the step. Usually this is a summary of the state.
  * drop [DropInfo](#dropinfo)
  * endpoint [EndpointInfo](#endpointinfo)
  * firewall [FirewallInfo](#firewallinfo)
  * forward [ForwardInfo](#forwardinfo)
  * forwardingRule [ForwardingRuleInfo](#forwardingruleinfo)
  * gkeMaster [GKEMasterInfo](#gkemasterinfo)
  * instance [InstanceInfo](#instanceinfo)
  * loadBalancer [LoadBalancerInfo](#loadbalancerinfo)
  * network [NetworkInfo](#networkinfo)
  * projectId `string`: Project ID that contains the configuration this step is validating.
  * route [RouteInfo](#routeinfo)
  * state `string` (values: STATE_UNSPECIFIED, START_FROM_INSTANCE, START_FROM_INTERNET, START_FROM_PRIVATE_NETWORK, START_FROM_GKE_MASTER, START_FROM_CLOUD_SQL_INSTANCE, APPLY_INGRESS_FIREWALL_RULE, APPLY_EGRESS_FIREWALL_RULE, APPLY_ROUTE, APPLY_FORWARDING_RULE, SPOOFING_APPROVED, ARRIVE_AT_INSTANCE, ARRIVE_AT_INTERNAL_LOAD_BALANCER, ARRIVE_AT_EXTERNAL_LOAD_BALANCER, ARRIVE_AT_VPN_GATEWAY, ARRIVE_AT_VPN_TUNNEL, NAT, PROXY_CONNECTION, DELIVER, DROP, FORWARD, ABORT, VIEWER_PERMISSION_MISSING): Each step is in one of the pre-defined states.
  * vpnGateway [VpnGatewayInfo](#vpngatewayinfo)
  * vpnTunnel [VpnTunnelInfo](#vpntunnelinfo)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### Trace
* Trace `object`: Trace represents one simulated packet forwarding path. - Each trace contains multiple ordered steps. - Each step is in a particular state and has an associated configuration. - State is categorized as a final or non-final state. - Each final state has a reason associated with it. - Each trace must end with a final state (the last step). |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) 
  * endpointInfo [EndpointInfo](#endpointinfo)
  * steps `array`: A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted). The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them.
    * items [Step](#step)

### VpnGatewayInfo
* VpnGatewayInfo `object`: For display only. Metadata associated with a Compute Engine VPN gateway.
  * displayName `string`: Name of a VPN gateway.
  * ipAddress `string`: IP address of the VPN gateway.
  * networkUri `string`: URI of a Compute Engine network where the VPN gateway is configured.
  * region `string`: Name of a GCP region where this VPN gateway is configured.
  * uri `string`: URI of a VPN gateway.
  * vpnTunnelUri `string`: A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed.

### VpnTunnelInfo
* VpnTunnelInfo `object`: For display only. Metadata associated with a Compute Engine VPN tunnel.
  * displayName `string`: Name of a VPN tunnel.
  * networkUri `string`: URI of a Compute Engine network where the VPN tunnel is configured.
  * region `string`: Name of a GCP region where this VPN tunnel is configured.
  * remoteGateway `string`: URI of a VPN gateway at remote end of the tunnel.
  * remoteGatewayIp `string`: Remote VPN gateway's IP address.
  * routingType `string` (values: ROUTING_TYPE_UNSPECIFIED, ROUTE_BASED, POLICY_BASED, DYNAMIC): Type of the routing policy.
  * sourceGateway `string`: URI of the VPN gateway at local end of the tunnel.
  * sourceGatewayIp `string`: Local VPN gateway's IP address.
  * uri `string`: URI of a VPN tunnel.


