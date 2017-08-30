# @datafire/google_deploymentmanager

Client library for Google Cloud Deployment Manager

## Installation and Usage
```bash
npm install --save datafire @datafire/google_deploymentmanager
```

```js
let datafire = require('datafire');
let google_deploymentmanager = require('@datafire/google_deploymentmanager').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_deploymentmanager.deployments.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_deploymentmanager.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### deployments.list
Lists all deployments for a given project.


```js
google_deploymentmanager.deployments.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.insert
Creates a deployment and all of the resources described by the deployment manifest.


```js
google_deploymentmanager.deployments.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* preview (boolean) - If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.delete
Deletes a deployment and all of the resources in the deployment.


```js
google_deploymentmanager.deployments.delete({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* deletePolicy (string) - Sets the policy to use for deleting resources.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.get
Gets information about a specific deployment.


```js
google_deploymentmanager.deployments.get({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.patch
Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.


```js
google_deploymentmanager.deployments.patch({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* createPolicy (string) - Sets the policy to use for creating new resources.
* deletePolicy (string) - Sets the policy to use for deleting resources.
* preview (boolean) - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.update
Updates a deployment and all of the resources described by the deployment manifest.


```js
google_deploymentmanager.deployments.update({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* createPolicy (string) - Sets the policy to use for creating new resources.
* deletePolicy (string) - Sets the policy to use for deleting resources.
* preview (boolean) - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.cancelPreview
Cancels and removes the preview currently associated with the deployment.


```js
google_deploymentmanager.deployments.cancelPreview({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### manifests.list
Lists all manifests for a given deployment.


```js
google_deploymentmanager.manifests.list({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### manifests.get
Gets information about a specific manifest.


```js
google_deploymentmanager.manifests.get({
  "project": "",
  "deployment": "",
  "manifest": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* manifest (string) **required** - The name of the manifest for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### resources.list
Lists all resources in a given deployment.


```js
google_deploymentmanager.resources.list({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### resources.get
Gets information about a single resource.


```js
google_deploymentmanager.resources.get({
  "project": "",
  "deployment": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* resource (string) **required** - The name of the resource for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.stop
Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.


```js
google_deploymentmanager.deployments.stop({
  "project": "",
  "deployment": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* deployment (string) **required** - The name of the deployment for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.getIamPolicy
Gets the access control policy for a resource. May be empty if no such policy or resource exists.


```js
google_deploymentmanager.deployments.getIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_deploymentmanager.deployments.setIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* body (object) - Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### deployments.testIamPermissions
Returns permissions that a caller has on the specified resource.


```js
google_deploymentmanager.deployments.testIamPermissions({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operations.list
Lists all operations for a project.


```js
google_deploymentmanager.operations.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operations.get
Gets information about a specific operation.


```js
google_deploymentmanager.operations.get({
  "project": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* operation (string) **required** - The name of the operation for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### types.list
Lists all resource types for Deployment Manager.


```js
google_deploymentmanager.types.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

