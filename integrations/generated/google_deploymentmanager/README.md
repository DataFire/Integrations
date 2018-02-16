# @datafire/google_deploymentmanager

Client library for Google Cloud Deployment Manager

## Installation and Usage
```bash
npm install --save @datafire/google_deploymentmanager
```
```js
let google_deploymentmanager = require('@datafire/google_deploymentmanager').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_deploymentmanager.deployments.list({
  "project": ""
}).then(data => {
  console.log(data);
});
```

## Description

Declares, configures, and deploys complex solutions on Google Cloud Platform.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_deploymentmanager.oauthCallback({
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
google_deploymentmanager.oauthRefresh(null, context)
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

### deployments.list
Lists all deployments for a given project.


```js
google_deploymentmanager.deployments.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DeploymentsListResponse](#deploymentslistresponse)

### deployments.insert
Creates a deployment and all of the resources described by the deployment manifest.


```js
google_deploymentmanager.deployments.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Deployment](#deployment)
  * preview `boolean`: If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### deployments.delete
Deletes a deployment and all of the resources in the deployment.


```js
google_deploymentmanager.deployments.delete({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * deletePolicy `string` (values: ABANDON, DELETE): Sets the policy to use for deleting resources.
  * deployment **required** `string`: The name of the deployment for this request.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### deployments.get
Gets information about a specific deployment.


```js
google_deploymentmanager.deployments.get({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * deployment **required** `string`: The name of the deployment for this request.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Deployment](#deployment)

### deployments.patch
Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.


```js
google_deploymentmanager.deployments.patch({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Deployment](#deployment)
  * createPolicy `string` (values: ACQUIRE, CREATE_OR_ACQUIRE): Sets the policy to use for creating new resources.
  * deletePolicy `string` (values: ABANDON, DELETE): Sets the policy to use for deleting resources.
  * deployment **required** `string`: The name of the deployment for this request.
  * preview `boolean`: If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### deployments.update
Updates a deployment and all of the resources described by the deployment manifest.


```js
google_deploymentmanager.deployments.update({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Deployment](#deployment)
  * createPolicy `string` (values: ACQUIRE, CREATE_OR_ACQUIRE): Sets the policy to use for creating new resources.
  * deletePolicy `string` (values: ABANDON, DELETE): Sets the policy to use for deleting resources.
  * deployment **required** `string`: The name of the deployment for this request.
  * preview `boolean`: If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### deployments.cancelPreview
Cancels and removes the preview currently associated with the deployment.


```js
google_deploymentmanager.deployments.cancelPreview({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [DeploymentsCancelPreviewRequest](#deploymentscancelpreviewrequest)
  * deployment **required** `string`: The name of the deployment for this request.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### manifests.list
Lists all manifests for a given deployment.


```js
google_deploymentmanager.manifests.list({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * deployment **required** `string`: The name of the deployment for this request.
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManifestsListResponse](#manifestslistresponse)

### manifests.get
Gets information about a specific manifest.


```js
google_deploymentmanager.manifests.get({
  "deployment": "",
  "manifest": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * deployment **required** `string`: The name of the deployment for this request.
  * manifest **required** `string`: The name of the manifest for this request.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Manifest](#manifest)

### resources.list
Lists all resources in a given deployment.


```js
google_deploymentmanager.resources.list({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * deployment **required** `string`: The name of the deployment for this request.
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ResourcesListResponse](#resourceslistresponse)

### resources.get
Gets information about a single resource.


```js
google_deploymentmanager.resources.get({
  "deployment": "",
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * deployment **required** `string`: The name of the deployment for this request.
  * project **required** `string`: The project ID for this request.
  * resource **required** `string`: The name of the resource for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Resource](#resource)

### deployments.stop
Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.


```js
google_deploymentmanager.deployments.stop({
  "deployment": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [DeploymentsStopRequest](#deploymentsstoprequest)
  * deployment **required** `string`: The name of the deployment for this request.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### deployments.getIamPolicy
Gets the access control policy for a resource. May be empty if no such policy or resource exists.


```js
google_deploymentmanager.deployments.getIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### deployments.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_deploymentmanager.deployments.setIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [Policy](#policy)
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### deployments.testIamPermissions
Returns permissions that a caller has on the specified resource.


```js
google_deploymentmanager.deployments.testIamPermissions({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [TestPermissionsRequest](#testpermissionsrequest)
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TestPermissionsResponse](#testpermissionsresponse)

### operations.list
Lists all operations for a project.


```js
google_deploymentmanager.operations.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationsListResponse](#operationslistresponse)

### operations.get
Gets information about a specific operation.


```js
google_deploymentmanager.operations.get({
  "operation": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: The name of the operation for this request.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### types.list
Lists all resource types for Deployment Manager.


```js
google_deploymentmanager.types.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: The project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TypesListResponse](#typeslistresponse)



## Definitions

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * exemptedMembers `array`
    * items `string`
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example:
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of [Binding.members][].
    * items `string`
  * logType `string`: The log type that this config enables.

### AuthorizationLoggingOptions
* AuthorizationLoggingOptions `object`: Authorization-related information used by Cloud Audit Logging.
  * permissionType `string`: The type of the permission that was checked.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### Condition
* Condition `object`: A condition to be met.
  * iam `string`: Trusted attributes supplied by the IAM system.
  * op `string`: An operator to apply the subject with.
  * svc `string`: Trusted attributes discharged by the service.
  * sys `string`: Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
  * value `string`: DEPRECATED. Use 'values' instead.
  * values `array`: The objects of the condition. This is mutually exclusive with 'value'.
    * items `string`

### ConfigFile
* ConfigFile `object`
  * content `string`: The contents of the file.

### Deployment
* Deployment `object`
  * description `string`: An optional user-provided description of the deployment.
  * fingerprint `string`: Provides a fingerprint to use in requests to modify a deployment, such as update(), stop(), and cancelPreview() requests. A fingerprint is a randomly generated value that must be provided with update(), stop(), and cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time.
  * id `string`: Output only. Unique identifier for the resource; defined by the server.
  * insertTime `string`: Output only. Timestamp when the deployment was created, in RFC3339 text format .
  * labels `array`: Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
    * items [DeploymentLabelEntry](#deploymentlabelentry)
  * manifest `string`: Output only. URL of the manifest representing the last manifest that was successfully deployed.
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * operation [Operation](#operation)
  * selfLink `string`: Output only. Self link for the deployment.
  * target [TargetConfiguration](#targetconfiguration)
  * update [DeploymentUpdate](#deploymentupdate)

### DeploymentLabelEntry
* DeploymentLabelEntry `object`
  * key `string`
  * value `string`

### DeploymentUpdate
* DeploymentUpdate `object`
  * description `string`: Output only. An optional user-provided description of the deployment after the current update has been applied.
  * labels `array`: Output only. Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
    * items [DeploymentUpdateLabelEntry](#deploymentupdatelabelentry)
  * manifest `string`: Output only. URL of the manifest representing the update configuration of this deployment.

### DeploymentUpdateLabelEntry
* DeploymentUpdateLabelEntry `object`
  * key `string`
  * value `string`

### DeploymentsCancelPreviewRequest
* DeploymentsCancelPreviewRequest `object`
  * fingerprint `string`: Specifies a fingerprint for cancelPreview() requests. A fingerprint is a randomly generated value that must be provided in cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests).

### DeploymentsListResponse
* DeploymentsListResponse `object`: A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
  * deployments `array`: Output only. The deployments contained in this response.
    * items [Deployment](#deployment)
  * nextPageToken `string`: Output only. A token used to continue a truncated list request.

### DeploymentsStopRequest
* DeploymentsStopRequest `object`
  * fingerprint `string`: Specifies a fingerprint for stop() requests. A fingerprint is a randomly generated value that must be provided in stop() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision).

### Expr
* Expr `object`: Represents an expression text. Example:
  * description `string`: An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### ImportFile
* ImportFile `object`
  * content `string`: The contents of the file.
  * name `string`: The name of the file.

### LogConfig
* LogConfig `object`: Specifies what kind of log the caller must write
  * cloudAudit [LogConfigCloudAuditOptions](#logconfigcloudauditoptions)
  * counter [LogConfigCounterOptions](#logconfigcounteroptions)
  * dataAccess [LogConfigDataAccessOptions](#logconfigdataaccessoptions)

### LogConfigCloudAuditOptions
* LogConfigCloudAuditOptions `object`: Write a Cloud Audit log
  * authorizationLoggingOptions [AuthorizationLoggingOptions](#authorizationloggingoptions)
  * logName `string`: The log_name to populate in the Cloud Audit Record.

### LogConfigCounterOptions
* LogConfigCounterOptions `object`: Increment a streamz counter with the specified metric and field names.
  * field `string`: The field value to attribute.
  * metric `string`: The metric to update.

### LogConfigDataAccessOptions
* LogConfigDataAccessOptions `object`: Write a Data Access (Gin) log
  * logMode `string`: Whether Gin logging should happen in a fail-closed manner at the caller. This is relevant only in the LocalIAM implementation, for now.

### Manifest
* Manifest `object`
  * config [ConfigFile](#configfile)
  * expandedConfig `string`: Output only. The fully-expanded configuration file, including any templates and references.
  * id `string`: Output only. Unique identifier for the resource; defined by the server.
  * imports `array`: Output only. The imported files for this manifest.
    * items [ImportFile](#importfile)
  * insertTime `string`: Output only. Timestamp when the manifest was created, in RFC3339 text format.
  * layout `string`: Output only. The YAML layout for this manifest.
  * name `string`: Output only.
  * selfLink `string`: Output only. Self link for the manifest.

### ManifestsListResponse
* ManifestsListResponse `object`: A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
  * manifests `array`: Output only. Manifests contained in this list response.
    * items [Manifest](#manifest)
  * nextPageToken `string`: Output only. A token used to continue a truncated list request.

### Operation
* Operation `object`: An Operation resource, used to manage asynchronous API requests. (== resource_for v1.globalOperations ==) (== resource_for beta.globalOperations ==) (== resource_for v1.regionOperations ==) (== resource_for beta.regionOperations ==) (== resource_for v1.zoneOperations ==) (== resource_for beta.zoneOperations ==)
  * clientOperationId `string`: [Output Only] Reserved for future use.
  * creationTimestamp `string`: [Deprecated] This field is deprecated.
  * description `string`: [Output Only] A textual description of the operation, which is set when the operation is created.
  * endTime `string`: [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
  * error `object`: [Output Only] If errors are generated during processing of the operation, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * httpErrorMessage `string`: [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
  * httpErrorStatusCode `integer`: [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * insertTime `string`: [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
  * kind `string`: [Output Only] Type of the resource. Always compute#operation for Operation resources.
  * name `string`: [Output Only] Name of the resource.
  * operationType `string`: [Output Only] The type of operation, such as insert, update, or delete, and so on.
  * progress `integer`: [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
  * region `string`: [Output Only] The URL of the region where the operation resides. Only available when performing regional operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * startTime `string`: [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
  * status `string`: [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the operation.
  * targetId `string`: [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
  * targetLink `string`: [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
  * user `string`: [Output Only] User who requested the operation, for example: user@example.com.
  * warnings `array`: [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
    * items `object`
      * code `string`: [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.
  * zone `string`: [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### OperationsListResponse
* OperationsListResponse `object`: A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
  * nextPageToken `string`: Output only. A token used to continue a truncated list request.
  * operations `array`: Output only. Operations contained in this list response.
    * items [Operation](#operation)

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.
  * iamOwned `boolean`
  * rules `array`: If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
    * items [Rule](#rule)
  * version `integer`: Deprecated.

### Resource
* Resource `object`
  * accessControl [ResourceAccessControl](#resourceaccesscontrol)
  * finalProperties `string`: Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.
  * id `string`: Output only. Unique identifier for the resource; defined by the server.
  * insertTime `string`: Output only. Timestamp when the resource was created or acquired, in RFC3339 text format .
  * manifest `string`: Output only. URL of the manifest representing the current configuration of this resource.
  * name `string`: Output only. The name of the resource as it appears in the YAML config.
  * properties `string`: Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.
  * type `string`: Output only. The type of the resource, for example compute.v1.instance, or cloudfunctions.v1beta1.function.
  * update [ResourceUpdate](#resourceupdate)
  * updateTime `string`: Output only. Timestamp when the resource was updated, in RFC3339 text format .
  * url `string`: Output only. The URL of the actual resource.
  * warnings `array`: Output only. If warning messages are generated during processing of this resource, this field will be populated.
    * items `object`
      * code `string`: [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.

### ResourceAccessControl
* ResourceAccessControl `object`: The access controls set on the resource.
  * gcpIamPolicy `string`: The GCP IAM Policy to set on the resource.

### ResourceUpdate
* ResourceUpdate `object`
  * accessControl [ResourceAccessControl](#resourceaccesscontrol)
  * error `object`: Output only. If errors are generated during update of the resource, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * finalProperties `string`: Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.
  * intent `string`: Output only. The intent of the resource: PREVIEW, UPDATE, or CANCEL.
  * manifest `string`: Output only. URL of the manifest representing the update configuration of this resource.
  * properties `string`: Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.
  * state `string`: Output only. The state of the resource.
  * warnings `array`: Output only. If warning messages are generated during processing of this resource, this field will be populated.
    * items `object`
      * code `string`: [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.

### ResourcesListResponse
* ResourcesListResponse `object`: A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
  * nextPageToken `string`: A token used to continue a truncated list request.
  * resources `array`: Resources contained in this list response.
    * items [Resource](#resource)

### Rule
* Rule `object`: A rule to be applied in a Policy.
  * action `string`: Required
  * conditions `array`: Additional restrictions that must be met. All conditions must pass for the rule to match.
    * items [Condition](#condition)
  * description `string`: Human-readable description of the rule.
  * ins `array`: If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
    * items `string`
  * logConfigs `array`: The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
    * items [LogConfig](#logconfig)
  * notIns `array`: If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
    * items `string`
  * permissions `array`: A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
    * items `string`

### TargetConfiguration
* TargetConfiguration `object`
  * config [ConfigFile](#configfile)
  * imports `array`: Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.
    * items [ImportFile](#importfile)

### TestPermissionsRequest
* TestPermissionsRequest `object`
  * permissions `array`: The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
    * items `string`

### TestPermissionsResponse
* TestPermissionsResponse `object`
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### Type
* Type `object`: A resource type supported by Deployment Manager.
  * id `string`: Output only. Unique identifier for the resource; defined by the server.
  * insertTime `string`: Output only. Timestamp when the type was created, in RFC3339 text format.
  * name `string`: Name of the type.
  * operation [Operation](#operation)
  * selfLink `string`: Output only. Self link for the type.

### TypesListResponse
* TypesListResponse `object`: A response that returns all Types supported by Deployment Manager
  * nextPageToken `string`: A token used to continue a truncated list request.
  * types `array`: Output only. A list of resource types supported by Deployment Manager.
    * items [Type](#type)


