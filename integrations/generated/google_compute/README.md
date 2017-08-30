# @datafire/google_compute

Client library for Compute Engine

## Installation and Usage
```bash
npm install --save datafire @datafire/google_compute
```

```js
let datafire = require('datafire');
let google_compute = require('@datafire/google_compute').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_compute.projects.get({}).then(data => {
  console.log(data);
})
```

## Description
Creates and runs virtual machines on Google Cloud Platform.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_compute.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_compute.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.get
Returns the specified Project resource.


```js
google_compute.projects.get({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### addresses.aggregatedList
Retrieves an aggregated list of addresses.


```js
google_compute.addresses.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### autoscalers.aggregatedList
Retrieves an aggregated list of autoscalers.


```js
google_compute.autoscalers.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### backendServices.aggregatedList
Retrieves the list of all BackendService resources, regional and global, available to the specified project.


```js
google_compute.backendServices.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Name of the project scoping this request.
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

### diskTypes.aggregatedList
Retrieves an aggregated list of disk types.


```js
google_compute.diskTypes.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### disks.aggregatedList
Retrieves an aggregated list of persistent disks.


```js
google_compute.disks.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### forwardingRules.aggregatedList
Retrieves an aggregated list of forwarding rules.


```js
google_compute.forwardingRules.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### instanceGroupManagers.aggregatedList
Retrieves the list of managed instance groups and groups them by zone.


```js
google_compute.instanceGroupManagers.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### instanceGroups.aggregatedList
Retrieves the list of instance groups and sorts them by zone.


```js
google_compute.instanceGroups.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### instances.aggregatedList
Retrieves aggregated list of instances.


```js
google_compute.instances.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### machineTypes.aggregatedList
Retrieves an aggregated list of machine types.


```js
google_compute.machineTypes.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### globalOperations.aggregatedList
Retrieves an aggregated list of all operations.


```js
google_compute.globalOperations.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### routers.aggregatedList
Retrieves an aggregated list of routers.


```js
google_compute.routers.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### subnetworks.aggregatedList
Retrieves an aggregated list of subnetworks.


```js
google_compute.subnetworks.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### targetInstances.aggregatedList
Retrieves an aggregated list of target instances.


```js
google_compute.targetInstances.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### targetPools.aggregatedList
Retrieves an aggregated list of target pools.


```js
google_compute.targetPools.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### targetVpnGateways.aggregatedList
Retrieves an aggregated list of target VPN gateways.


```js
google_compute.targetVpnGateways.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### vpnTunnels.aggregatedList
Retrieves an aggregated list of VPN tunnels.


```js
google_compute.vpnTunnels.aggregatedList({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### globalAddresses.list
Retrieves a list of global addresses.


```js
google_compute.globalAddresses.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### globalAddresses.insert
Creates an address resource in the specified project using the data included in the request.


```js
google_compute.globalAddresses.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A reserved address resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalAddresses.delete
Deletes the specified address resource.


```js
google_compute.globalAddresses.delete({
  "project": "",
  "address": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* address (string) **required** - Name of the address resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalAddresses.get
Returns the specified address resource. Get a list of available addresses by making a list() request.


```js
google_compute.globalAddresses.get({
  "project": "",
  "address": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* address (string) **required** - Name of the address resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendBuckets.list
Retrieves the list of BackendBucket resources available to the specified project.


```js
google_compute.backendBuckets.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### backendBuckets.insert
Creates a BackendBucket resource in the specified project using the data included in the request.


```js
google_compute.backendBuckets.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A BackendBucket resource. This resource defines a Cloud Storage bucket.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendBuckets.delete
Deletes the specified BackendBucket resource.


```js
google_compute.backendBuckets.delete({
  "project": "",
  "backendBucket": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* backendBucket (string) **required** - Name of the BackendBucket resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendBuckets.get
Returns the specified BackendBucket resource. Get a list of available backend buckets by making a list() request.


```js
google_compute.backendBuckets.get({
  "project": "",
  "backendBucket": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* backendBucket (string) **required** - Name of the BackendBucket resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendBuckets.patch
Updates the specified BackendBucket resource with the data included in the request. This method supports patch semantics.


```js
google_compute.backendBuckets.patch({
  "backendBucket": "",
  "project": ""
}, context)
```

#### Parameters
* backendBucket (string) **required** - Name of the BackendBucket resource to patch.
* body (object) - A BackendBucket resource. This resource defines a Cloud Storage bucket.
* project (string) **required** - Project ID for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendBuckets.update
Updates the specified BackendBucket resource with the data included in the request.


```js
google_compute.backendBuckets.update({
  "project": "",
  "backendBucket": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* backendBucket (string) **required** - Name of the BackendBucket resource to update.
* body (object) - A BackendBucket resource. This resource defines a Cloud Storage bucket.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendServices.list
Retrieves the list of BackendService resources available to the specified project.


```js
google_compute.backendServices.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### backendServices.insert
Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.backendServices.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A BackendService resource. This resource defines a group of backend virtual machines and their serving capacity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendServices.delete
Deletes the specified BackendService resource.


```js
google_compute.backendServices.delete({
  "project": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* backendService (string) **required** - Name of the BackendService resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendServices.get
Returns the specified BackendService resource. Get a list of available backend services by making a list() request.


```js
google_compute.backendServices.get({
  "project": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* backendService (string) **required** - Name of the BackendService resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendServices.patch
Patches the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports patch semantics.


```js
google_compute.backendServices.patch({
  "backendService": "",
  "project": ""
}, context)
```

#### Parameters
* backendService (string) **required** - Name of the BackendService resource to patch.
* body (object) - A BackendService resource. This resource defines a group of backend virtual machines and their serving capacity.
* project (string) **required** - Project ID for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendServices.update
Updates the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.backendServices.update({
  "project": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* backendService (string) **required** - Name of the BackendService resource to update.
* body (object) - A BackendService resource. This resource defines a group of backend virtual machines and their serving capacity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backendServices.getHealth
Gets the most recent health check results for this BackendService.


```js
google_compute.backendServices.getHealth({
  "project": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required**
* backendService (string) **required** - Name of the BackendService resource to which the queried instance belongs.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### firewalls.list
Retrieves the list of firewall rules available to the specified project.


```js
google_compute.firewalls.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### firewalls.insert
Creates a firewall rule in the specified project using the data included in the request.


```js
google_compute.firewalls.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - Represents a Firewall resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### firewalls.delete
Deletes the specified firewall.


```js
google_compute.firewalls.delete({
  "project": "",
  "firewall": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* firewall (string) **required** - Name of the firewall rule to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### firewalls.get
Returns the specified firewall.


```js
google_compute.firewalls.get({
  "project": "",
  "firewall": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* firewall (string) **required** - Name of the firewall rule to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### firewalls.patch
Updates the specified firewall rule with the data included in the request. Using PUT method, can only update following fields of firewall rule: allowed, description, sourceRanges, sourceTags, targetTags. This method supports patch semantics.


```js
google_compute.firewalls.patch({
  "project": "",
  "firewall": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* firewall (string) **required** - Name of the firewall rule to update.
* body (object) - Represents a Firewall resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### firewalls.update
Updates the specified firewall rule with the data included in the request. Using PUT method, can only update following fields of firewall rule: allowed, description, sourceRanges, sourceTags, targetTags.


```js
google_compute.firewalls.update({
  "project": "",
  "firewall": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* firewall (string) **required** - Name of the firewall rule to update.
* body (object) - Represents a Firewall resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalForwardingRules.list
Retrieves a list of GlobalForwardingRule resources available to the specified project.


```js
google_compute.globalForwardingRules.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### globalForwardingRules.insert
Creates a GlobalForwardingRule resource in the specified project using the data included in the request.


```js
google_compute.globalForwardingRules.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A ForwardingRule resource. A ForwardingRule resource specifies which pool of target virtual machines to forward a packet to if it matches the given [IPAddress, IPProtocol, ports] tuple.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalForwardingRules.delete
Deletes the specified GlobalForwardingRule resource.


```js
google_compute.globalForwardingRules.delete({
  "project": "",
  "forwardingRule": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* forwardingRule (string) **required** - Name of the ForwardingRule resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalForwardingRules.get
Returns the specified GlobalForwardingRule resource. Get a list of available forwarding rules by making a list() request.


```js
google_compute.globalForwardingRules.get({
  "project": "",
  "forwardingRule": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* forwardingRule (string) **required** - Name of the ForwardingRule resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalForwardingRules.setTarget
Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.


```js
google_compute.globalForwardingRules.setTarget({
  "project": "",
  "forwardingRule": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* forwardingRule (string) **required** - Name of the ForwardingRule resource in which target is to be set.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### healthChecks.list
Retrieves the list of HealthCheck resources available to the specified project.


```js
google_compute.healthChecks.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### healthChecks.insert
Creates a HealthCheck resource in the specified project using the data included in the request.


```js
google_compute.healthChecks.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - An HealthCheck resource. This resource defines a template for how individual virtual machines should be checked for health, via one of the supported protocols.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### healthChecks.delete
Deletes the specified HealthCheck resource.


```js
google_compute.healthChecks.delete({
  "project": "",
  "healthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* healthCheck (string) **required** - Name of the HealthCheck resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### healthChecks.get
Returns the specified HealthCheck resource. Get a list of available health checks by making a list() request.


```js
google_compute.healthChecks.get({
  "project": "",
  "healthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* healthCheck (string) **required** - Name of the HealthCheck resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### healthChecks.patch
Updates a HealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.


```js
google_compute.healthChecks.patch({
  "healthCheck": "",
  "project": ""
}, context)
```

#### Parameters
* body (object) - An HealthCheck resource. This resource defines a template for how individual virtual machines should be checked for health, via one of the supported protocols.
* healthCheck (string) **required** - Name of the HealthCheck resource to patch.
* project (string) **required** - Project ID for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### healthChecks.update
Updates a HealthCheck resource in the specified project using the data included in the request.


```js
google_compute.healthChecks.update({
  "project": "",
  "healthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* healthCheck (string) **required** - Name of the HealthCheck resource to update.
* body (object) - An HealthCheck resource. This resource defines a template for how individual virtual machines should be checked for health, via one of the supported protocols.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpHealthChecks.list
Retrieves the list of HttpHealthCheck resources available to the specified project.


```js
google_compute.httpHealthChecks.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### httpHealthChecks.insert
Creates a HttpHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpHealthChecks.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - An HttpHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTP.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpHealthChecks.delete
Deletes the specified HttpHealthCheck resource.


```js
google_compute.httpHealthChecks.delete({
  "project": "",
  "httpHealthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* httpHealthCheck (string) **required** - Name of the HttpHealthCheck resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpHealthChecks.get
Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.


```js
google_compute.httpHealthChecks.get({
  "project": "",
  "httpHealthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* httpHealthCheck (string) **required** - Name of the HttpHealthCheck resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpHealthChecks.patch
Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.


```js
google_compute.httpHealthChecks.patch({
  "httpHealthCheck": "",
  "project": ""
}, context)
```

#### Parameters
* body (object) - An HttpHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTP.
* httpHealthCheck (string) **required** - Name of the HttpHealthCheck resource to patch.
* project (string) **required** - Project ID for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpHealthChecks.update
Updates a HttpHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpHealthChecks.update({
  "project": "",
  "httpHealthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* httpHealthCheck (string) **required** - Name of the HttpHealthCheck resource to update.
* body (object) - An HttpHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTP.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpsHealthChecks.list
Retrieves the list of HttpsHealthCheck resources available to the specified project.


```js
google_compute.httpsHealthChecks.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### httpsHealthChecks.insert
Creates a HttpsHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpsHealthChecks.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - An HttpsHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTPS.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpsHealthChecks.delete
Deletes the specified HttpsHealthCheck resource.


```js
google_compute.httpsHealthChecks.delete({
  "project": "",
  "httpsHealthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* httpsHealthCheck (string) **required** - Name of the HttpsHealthCheck resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpsHealthChecks.get
Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.


```js
google_compute.httpsHealthChecks.get({
  "project": "",
  "httpsHealthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* httpsHealthCheck (string) **required** - Name of the HttpsHealthCheck resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpsHealthChecks.patch
Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.


```js
google_compute.httpsHealthChecks.patch({
  "httpsHealthCheck": "",
  "project": ""
}, context)
```

#### Parameters
* body (object) - An HttpsHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTPS.
* httpsHealthCheck (string) **required** - Name of the HttpsHealthCheck resource to patch.
* project (string) **required** - Project ID for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### httpsHealthChecks.update
Updates a HttpsHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpsHealthChecks.update({
  "project": "",
  "httpsHealthCheck": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* httpsHealthCheck (string) **required** - Name of the HttpsHealthCheck resource to update.
* body (object) - An HttpsHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTPS.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### images.list
Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.


```js
google_compute.images.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### images.insert
Creates an image in the specified project using the data included in the request.


```js
google_compute.images.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - An Image resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### images.getFromFamily
Returns the latest image that is part of an image family and is not deprecated.


```js
google_compute.images.getFromFamily({
  "project": "",
  "family": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* family (string) **required** - Name of the image family to search for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### images.delete
Deletes the specified image.


```js
google_compute.images.delete({
  "project": "",
  "image": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* image (string) **required** - Name of the image resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### images.get
Returns the specified image. Get a list of available images by making a list() request.


```js
google_compute.images.get({
  "project": "",
  "image": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* image (string) **required** - Name of the image resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### images.deprecate
Sets the deprecation status of an image.

If an empty request body is given, clears the deprecation status instead.


```js
google_compute.images.deprecate({
  "project": "",
  "image": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* image (string) **required** - Image name.
* body (object) - Deprecation status for a public resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceTemplates.list
Retrieves a list of instance templates that are contained within the specified project and zone.


```js
google_compute.instanceTemplates.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### instanceTemplates.insert
Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.


```js
google_compute.instanceTemplates.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - An Instance Template resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceTemplates.delete
Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.


```js
google_compute.instanceTemplates.delete({
  "project": "",
  "instanceTemplate": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* instanceTemplate (string) **required** - The name of the instance template to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceTemplates.get
Returns the specified instance template. Get a list of available instance templates by making a list() request.


```js
google_compute.instanceTemplates.get({
  "project": "",
  "instanceTemplate": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* instanceTemplate (string) **required** - The name of the instance template.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### licenses.get
Returns the specified License resource. Get a list of available licenses by making a list() request.


```js
google_compute.licenses.get({
  "project": "",
  "license": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* license (string) **required** - Name of the License resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### networks.list
Retrieves the list of networks available to the specified project.


```js
google_compute.networks.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### networks.insert
Creates a network in the specified project using the data included in the request.


```js
google_compute.networks.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - Represents a Network resource. Read Networks and Firewalls for more information.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### networks.delete
Deletes the specified network.


```js
google_compute.networks.delete({
  "project": "",
  "network": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* network (string) **required** - Name of the network to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### networks.get
Returns the specified network. Get a list of available networks by making a list() request.


```js
google_compute.networks.get({
  "project": "",
  "network": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* network (string) **required** - Name of the network to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### networks.switchToCustomMode
Switches the network mode from auto subnet mode to custom subnet mode.


```js
google_compute.networks.switchToCustomMode({
  "project": "",
  "network": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* network (string) **required** - Name of the network to be updated.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalOperations.list
Retrieves a list of Operation resources contained within the specified project.


```js
google_compute.globalOperations.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### globalOperations.delete
Deletes the specified Operations resource.


```js
google_compute.globalOperations.delete({
  "project": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* operation (string) **required** - Name of the Operations resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalOperations.get
Retrieves the specified Operations resource. Get a list of operations by making a list() request.


```js
google_compute.globalOperations.get({
  "project": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* operation (string) **required** - Name of the Operations resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routes.list
Retrieves the list of Route resources available to the specified project.


```js
google_compute.routes.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### routes.insert
Creates a Route resource in the specified project using the data included in the request.


```js
google_compute.routes.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - Represents a Route resource. A route specifies how certain packets should be handled by the network. Routes are associated with instances by tags and the set of routes for a particular instance is called its routing table.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routes.delete
Deletes the specified Route resource.


```js
google_compute.routes.delete({
  "project": "",
  "route": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* route (string) **required** - Name of the Route resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routes.get
Returns the specified Route resource. Get a list of available routes by making a list() request.


```js
google_compute.routes.get({
  "project": "",
  "route": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* route (string) **required** - Name of the Route resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### snapshots.list
Retrieves the list of Snapshot resources contained within the specified project.


```js
google_compute.snapshots.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### snapshots.delete
Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.

For more information, see Deleting snaphots.


```js
google_compute.snapshots.delete({
  "project": "",
  "snapshot": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* snapshot (string) **required** - Name of the Snapshot resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### snapshots.get
Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.


```js
google_compute.snapshots.get({
  "project": "",
  "snapshot": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* snapshot (string) **required** - Name of the Snapshot resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCertificates.list
Retrieves the list of SslCertificate resources available to the specified project.


```js
google_compute.sslCertificates.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### sslCertificates.insert
Creates a SslCertificate resource in the specified project using the data included in the request.


```js
google_compute.sslCertificates.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - An SslCertificate resource. This resource provides a mechanism to upload an SSL key and certificate to the load balancer to serve secure connections from the user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCertificates.delete
Deletes the specified SslCertificate resource.


```js
google_compute.sslCertificates.delete({
  "project": "",
  "sslCertificate": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* sslCertificate (string) **required** - Name of the SslCertificate resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCertificates.get
Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.


```js
google_compute.sslCertificates.get({
  "project": "",
  "sslCertificate": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* sslCertificate (string) **required** - Name of the SslCertificate resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpProxies.list
Retrieves the list of TargetHttpProxy resources available to the specified project.


```js
google_compute.targetHttpProxies.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### targetHttpProxies.insert
Creates a TargetHttpProxy resource in the specified project using the data included in the request.


```js
google_compute.targetHttpProxies.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A TargetHttpProxy resource. This resource defines an HTTP proxy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpProxies.delete
Deletes the specified TargetHttpProxy resource.


```js
google_compute.targetHttpProxies.delete({
  "project": "",
  "targetHttpProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetHttpProxy (string) **required** - Name of the TargetHttpProxy resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpProxies.get
Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.


```js
google_compute.targetHttpProxies.get({
  "project": "",
  "targetHttpProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetHttpProxy (string) **required** - Name of the TargetHttpProxy resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpsProxies.list
Retrieves the list of TargetHttpsProxy resources available to the specified project.


```js
google_compute.targetHttpsProxies.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### targetHttpsProxies.insert
Creates a TargetHttpsProxy resource in the specified project using the data included in the request.


```js
google_compute.targetHttpsProxies.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A TargetHttpsProxy resource. This resource defines an HTTPS proxy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpsProxies.delete
Deletes the specified TargetHttpsProxy resource.


```js
google_compute.targetHttpsProxies.delete({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetHttpsProxy (string) **required** - Name of the TargetHttpsProxy resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpsProxies.get
Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.


```js
google_compute.targetHttpsProxies.get({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetHttpsProxy (string) **required** - Name of the TargetHttpsProxy resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetSslProxies.list
Retrieves the list of TargetSslProxy resources available to the specified project.


```js
google_compute.targetSslProxies.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### targetSslProxies.insert
Creates a TargetSslProxy resource in the specified project using the data included in the request.


```js
google_compute.targetSslProxies.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A TargetSslProxy resource. This resource defines an SSL proxy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetSslProxies.delete
Deletes the specified TargetSslProxy resource.


```js
google_compute.targetSslProxies.delete({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetSslProxy (string) **required** - Name of the TargetSslProxy resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetSslProxies.get
Returns the specified TargetSslProxy resource. Get a list of available target SSL proxies by making a list() request.


```js
google_compute.targetSslProxies.get({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetSslProxy (string) **required** - Name of the TargetSslProxy resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetSslProxies.setBackendService
Changes the BackendService for TargetSslProxy.


```js
google_compute.targetSslProxies.setBackendService({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetSslProxy (string) **required** - Name of the TargetSslProxy resource whose BackendService resource is to be set.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetSslProxies.setProxyHeader
Changes the ProxyHeaderType for TargetSslProxy.


```js
google_compute.targetSslProxies.setProxyHeader({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetSslProxy (string) **required** - Name of the TargetSslProxy resource whose ProxyHeader is to be set.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetSslProxies.setSslCertificates
Changes SslCertificates for TargetSslProxy.


```js
google_compute.targetSslProxies.setSslCertificates({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetSslProxy (string) **required** - Name of the TargetSslProxy resource whose SslCertificate resource is to be set.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlMaps.list
Retrieves the list of UrlMap resources available to the specified project.


```js
google_compute.urlMaps.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### urlMaps.insert
Creates a UrlMap resource in the specified project using the data included in the request.


```js
google_compute.urlMaps.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A UrlMap resource. This resource defines the mapping from URL to the BackendService resource, based on the "longest-match" of the URL's host and path.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlMaps.delete
Deletes the specified UrlMap resource.


```js
google_compute.urlMaps.delete({
  "project": "",
  "urlMap": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* urlMap (string) **required** - Name of the UrlMap resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlMaps.get
Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.


```js
google_compute.urlMaps.get({
  "project": "",
  "urlMap": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* urlMap (string) **required** - Name of the UrlMap resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlMaps.patch
Patches the specified UrlMap resource with the data included in the request. This method supports patch semantics.


```js
google_compute.urlMaps.patch({
  "project": "",
  "urlMap": ""
}, context)
```

#### Parameters
* body (object) - A UrlMap resource. This resource defines the mapping from URL to the BackendService resource, based on the "longest-match" of the URL's host and path.
* project (string) **required** - Project ID for this request.
* urlMap (string) **required** - Name of the UrlMap resource to patch.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlMaps.update
Updates the specified UrlMap resource with the data included in the request.


```js
google_compute.urlMaps.update({
  "project": "",
  "urlMap": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* urlMap (string) **required** - Name of the UrlMap resource to update.
* body (object) - A UrlMap resource. This resource defines the mapping from URL to the BackendService resource, based on the "longest-match" of the URL's host and path.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlMaps.invalidateCache
Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.


```js
google_compute.urlMaps.invalidateCache({
  "project": "",
  "urlMap": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* urlMap (string) **required** - Name of the UrlMap scoping this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlMaps.validate
Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.


```js
google_compute.urlMaps.validate({
  "project": "",
  "urlMap": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* urlMap (string) **required** - Name of the UrlMap resource to be validated as.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.moveDisk
Moves a persistent disk from one zone to another.


```js
google_compute.projects.moveDisk({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.moveInstance
Moves an instance and its attached persistent disks from one zone to another.


```js
google_compute.projects.moveInstance({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regions.list
Retrieves the list of region resources available to the specified project.


```js
google_compute.regions.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### regions.get
Returns the specified Region resource. Get a list of available regions by making a list() request.


```js
google_compute.regions.get({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### addresses.list
Retrieves a list of addresses contained within the specified region.


```js
google_compute.addresses.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
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

### addresses.insert
Creates an address resource in the specified project using the data included in the request.


```js
google_compute.addresses.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* body (object) - A reserved address resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### addresses.delete
Deletes the specified address resource.


```js
google_compute.addresses.delete({
  "project": "",
  "region": "",
  "address": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* address (string) **required** - Name of the address resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### addresses.get
Returns the specified address resource.


```js
google_compute.addresses.get({
  "project": "",
  "region": "",
  "address": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* address (string) **required** - Name of the address resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionAutoscalers.list
Retrieves a list of autoscalers contained within the specified region.


```js
google_compute.regionAutoscalers.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
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

### regionAutoscalers.patch
Updates an autoscaler in the specified project using the data included in the request. This method supports patch semantics.


```js
google_compute.regionAutoscalers.patch({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* autoscaler (string) - Name of the autoscaler to patch.
* body (object) - Represents an Autoscaler resource. Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define. For more information, read Autoscaling Groups of Instances.
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionAutoscalers.insert
Creates an autoscaler in the specified project using the data included in the request.


```js
google_compute.regionAutoscalers.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* body (object) - Represents an Autoscaler resource. Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define. For more information, read Autoscaling Groups of Instances.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionAutoscalers.update
Updates an autoscaler in the specified project using the data included in the request.


```js
google_compute.regionAutoscalers.update({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* autoscaler (string) - Name of the autoscaler to update.
* body (object) - Represents an Autoscaler resource. Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define. For more information, read Autoscaling Groups of Instances.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionAutoscalers.delete
Deletes the specified autoscaler.


```js
google_compute.regionAutoscalers.delete({
  "project": "",
  "region": "",
  "autoscaler": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* autoscaler (string) **required** - Name of the autoscaler to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionAutoscalers.get
Returns the specified autoscaler.


```js
google_compute.regionAutoscalers.get({
  "project": "",
  "region": "",
  "autoscaler": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* autoscaler (string) **required** - Name of the autoscaler to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionBackendServices.list
Retrieves the list of regional BackendService resources available to the specified project in the given region.


```js
google_compute.regionBackendServices.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
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

### regionBackendServices.insert
Creates a regional BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a regional backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.regionBackendServices.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* body (object) - A BackendService resource. This resource defines a group of backend virtual machines and their serving capacity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionBackendServices.delete
Deletes the specified regional BackendService resource.


```js
google_compute.regionBackendServices.delete({
  "project": "",
  "region": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* backendService (string) **required** - Name of the BackendService resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionBackendServices.get
Returns the specified regional BackendService resource.


```js
google_compute.regionBackendServices.get({
  "project": "",
  "region": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* backendService (string) **required** - Name of the BackendService resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionBackendServices.patch
Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports patch semantics.


```js
google_compute.regionBackendServices.patch({
  "backendService": "",
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* backendService (string) **required** - Name of the BackendService resource to patch.
* body (object) - A BackendService resource. This resource defines a group of backend virtual machines and their serving capacity.
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionBackendServices.update
Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.regionBackendServices.update({
  "project": "",
  "region": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* backendService (string) **required** - Name of the BackendService resource to update.
* body (object) - A BackendService resource. This resource defines a group of backend virtual machines and their serving capacity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionBackendServices.getHealth
Gets the most recent health check results for this regional BackendService.


```js
google_compute.regionBackendServices.getHealth({
  "project": "",
  "region": "",
  "backendService": ""
}, context)
```

#### Parameters
* project (string) **required**
* region (string) **required** - Name of the region scoping this request.
* backendService (string) **required** - Name of the BackendService resource to which the queried instance belongs.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### forwardingRules.list
Retrieves a list of ForwardingRule resources available to the specified project and region.


```js
google_compute.forwardingRules.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
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

### forwardingRules.insert
Creates a ForwardingRule resource in the specified project and region using the data included in the request.


```js
google_compute.forwardingRules.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* body (object) - A ForwardingRule resource. A ForwardingRule resource specifies which pool of target virtual machines to forward a packet to if it matches the given [IPAddress, IPProtocol, ports] tuple.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### forwardingRules.delete
Deletes the specified ForwardingRule resource.


```js
google_compute.forwardingRules.delete({
  "project": "",
  "region": "",
  "forwardingRule": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* forwardingRule (string) **required** - Name of the ForwardingRule resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### forwardingRules.get
Returns the specified ForwardingRule resource.


```js
google_compute.forwardingRules.get({
  "project": "",
  "region": "",
  "forwardingRule": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* forwardingRule (string) **required** - Name of the ForwardingRule resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### forwardingRules.setTarget
Changes target URL for forwarding rule. The new target should be of the same type as the old target.


```js
google_compute.forwardingRules.setTarget({
  "project": "",
  "region": "",
  "forwardingRule": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* forwardingRule (string) **required** - Name of the ForwardingRule resource in which target is to be set.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.list
Retrieves the list of managed instance groups that are contained within the specified region.


```js
google_compute.regionInstanceGroupManagers.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
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

### regionInstanceGroupManagers.insert
Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A regional managed instance group can contain up to 2000 instances.


```js
google_compute.regionInstanceGroupManagers.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* body (object) - An Instance Group Manager resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.delete
Deletes the specified managed instance group and all of the instances in that group.


```js
google_compute.regionInstanceGroupManagers.delete({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - Name of the managed instance group to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.get
Returns all of the details about the specified managed instance group.


```js
google_compute.regionInstanceGroupManagers.get({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - Name of the managed instance group to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.abandonInstances
Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.regionInstanceGroupManagers.abandonInstances({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - Name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.deleteInstances
Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.regionInstanceGroupManagers.deleteInstances({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - Name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.listManagedInstances
Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances.


```js
google_compute.regionInstanceGroupManagers.listManagedInstances({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* filter (string)
* maxResults (integer)
* order_by (string)
* pageToken (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.recreateInstances
Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.regionInstanceGroupManagers.recreateInstances({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - Name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.resize
Changes the intended size for the managed instance group. If you increase the size, the group schedules actions to create new instances using the current instance template. If you decrease the size, the group schedules delete actions on one or more instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.


```js
google_compute.regionInstanceGroupManagers.resize({
  "project": "",
  "region": "",
  "instanceGroupManager": "",
  "size": 0
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - Name of the managed instance group.
* size (integer) **required** - Number of instances that should exist in this instance group manager.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.setInstanceTemplate
Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.


```js
google_compute.regionInstanceGroupManagers.setInstanceTemplate({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroupManagers.setTargetPools
Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.


```js
google_compute.regionInstanceGroupManagers.setTargetPools({
  "project": "",
  "region": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroupManager (string) **required** - Name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroups.list
Retrieves the list of instance group resources contained within the specified region.


```js
google_compute.regionInstanceGroups.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
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

### regionInstanceGroups.get
Returns the specified instance group resource.


```js
google_compute.regionInstanceGroups.get({
  "project": "",
  "region": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroup (string) **required** - Name of the instance group resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroups.listInstances
Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running.


```js
google_compute.regionInstanceGroups.listInstances({
  "project": "",
  "region": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroup (string) **required** - Name of the regional instance group for which we want to list the instances.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionInstanceGroups.setNamedPorts
Sets the named ports for the specified regional instance group.


```js
google_compute.regionInstanceGroups.setNamedPorts({
  "project": "",
  "region": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* instanceGroup (string) **required** - The name of the regional instance group where the named ports are updated.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionOperations.list
Retrieves a list of Operation resources contained within the specified region.


```js
google_compute.regionOperations.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
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

### regionOperations.delete
Deletes the specified region-specific Operations resource.


```js
google_compute.regionOperations.delete({
  "project": "",
  "region": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* operation (string) **required** - Name of the Operations resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regionOperations.get
Retrieves the specified region-specific Operations resource.


```js
google_compute.regionOperations.get({
  "project": "",
  "region": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* operation (string) **required** - Name of the Operations resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routers.list
Retrieves a list of Router resources available to the specified project.


```js
google_compute.routers.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
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

### routers.insert
Creates a Router resource in the specified project and region using the data included in the request.


```js
google_compute.routers.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* body (object) - Router resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routers.delete
Deletes the specified Router resource.


```js
google_compute.routers.delete({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* router (string) **required** - Name of the Router resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routers.get
Returns the specified Router resource. Get a list of available routers by making a list() request.


```js
google_compute.routers.get({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* router (string) **required** - Name of the Router resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routers.patch
Patches the specified Router resource with the data included in the request. This method supports patch semantics.


```js
google_compute.routers.patch({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Parameters
* body (object) - Router resource.
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* router (string) **required** - Name of the Router resource to patch.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routers.update
Updates the specified Router resource with the data included in the request.


```js
google_compute.routers.update({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* router (string) **required** - Name of the Router resource to update.
* body (object) - Router resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routers.getRouterStatus
Retrieves runtime information of the specified router.


```js
google_compute.routers.getRouterStatus({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* router (string) **required** - Name of the Router resource to query.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### routers.preview
Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.


```js
google_compute.routers.preview({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* router (string) **required** - Name of the Router resource to query.
* body (object) - Router resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subnetworks.list
Retrieves a list of subnetworks available to the specified project.


```js
google_compute.subnetworks.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
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

### subnetworks.insert
Creates a subnetwork in the specified project using the data included in the request.


```js
google_compute.subnetworks.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* body (object) - A Subnetwork resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subnetworks.delete
Deletes the specified subnetwork.


```js
google_compute.subnetworks.delete({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* subnetwork (string) **required** - Name of the Subnetwork resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subnetworks.get
Returns the specified subnetwork. Get a list of available subnetworks list() request.


```js
google_compute.subnetworks.get({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* subnetwork (string) **required** - Name of the Subnetwork resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subnetworks.expandIpCidrRange
Expands the IP CIDR range of the subnetwork to a specified value.


```js
google_compute.subnetworks.expandIpCidrRange({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* subnetwork (string) **required** - Name of the Subnetwork resource to update.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subnetworks.setPrivateIpGoogleAccess
Set whether VMs in this subnet can access Google services without assigning external IP addresses through Cloudpath.


```js
google_compute.subnetworks.setPrivateIpGoogleAccess({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Parameters
* body (object)
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* subnetwork (string) **required** - Name of the Subnetwork resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.list
Retrieves a list of target pools available to the specified project and region.


```js
google_compute.targetPools.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
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

### targetPools.insert
Creates a target pool in the specified project and region using the data included in the request.


```js
google_compute.targetPools.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* body (object) - A TargetPool resource. This resource defines a pool of instances, an associated HttpHealthCheck resource, and the fallback target pool.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.delete
Deletes the specified target pool.


```js
google_compute.targetPools.delete({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* targetPool (string) **required** - Name of the TargetPool resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.get
Returns the specified target pool. Get a list of available target pools by making a list() request.


```js
google_compute.targetPools.get({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* targetPool (string) **required** - Name of the TargetPool resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.addHealthCheck
Adds health check URLs to a target pool.


```js
google_compute.targetPools.addHealthCheck({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* targetPool (string) **required** - Name of the target pool to add a health check to.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.addInstance
Adds an instance to a target pool.


```js
google_compute.targetPools.addInstance({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* targetPool (string) **required** - Name of the TargetPool resource to add instances to.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.getHealth
Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.


```js
google_compute.targetPools.getHealth({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* targetPool (string) **required** - Name of the TargetPool resource to which the queried instance belongs.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.removeHealthCheck
Removes health check URL from a target pool.


```js
google_compute.targetPools.removeHealthCheck({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* targetPool (string) **required** - Name of the target pool to remove health checks from.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.removeInstance
Removes instance URL from a target pool.


```js
google_compute.targetPools.removeInstance({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* targetPool (string) **required** - Name of the TargetPool resource to remove instances from.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetPools.setBackup
Changes a backup target pool's configurations.


```js
google_compute.targetPools.setBackup({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region scoping this request.
* targetPool (string) **required** - Name of the TargetPool resource to set a backup pool for.
* failoverRatio (number) - New failoverRatio value for the target pool.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetVpnGateways.list
Retrieves a list of target VPN gateways available to the specified project and region.


```js
google_compute.targetVpnGateways.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
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

### targetVpnGateways.insert
Creates a target VPN gateway in the specified project and region using the data included in the request.


```js
google_compute.targetVpnGateways.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* body (object) - Represents a Target VPN gateway resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetVpnGateways.delete
Deletes the specified target VPN gateway.


```js
google_compute.targetVpnGateways.delete({
  "project": "",
  "region": "",
  "targetVpnGateway": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* targetVpnGateway (string) **required** - Name of the target VPN gateway to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetVpnGateways.get
Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.


```js
google_compute.targetVpnGateways.get({
  "project": "",
  "region": "",
  "targetVpnGateway": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* targetVpnGateway (string) **required** - Name of the target VPN gateway to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### vpnTunnels.list
Retrieves a list of VpnTunnel resources contained in the specified project and region.


```js
google_compute.vpnTunnels.list({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
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

### vpnTunnels.insert
Creates a VpnTunnel resource in the specified project and region using the data included in the request.


```js
google_compute.vpnTunnels.insert({
  "project": "",
  "region": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### vpnTunnels.delete
Deletes the specified VpnTunnel resource.


```js
google_compute.vpnTunnels.delete({
  "project": "",
  "region": "",
  "vpnTunnel": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* vpnTunnel (string) **required** - Name of the VpnTunnel resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### vpnTunnels.get
Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.


```js
google_compute.vpnTunnels.get({
  "project": "",
  "region": "",
  "vpnTunnel": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* region (string) **required** - Name of the region for this request.
* vpnTunnel (string) **required** - Name of the VpnTunnel resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.setCommonInstanceMetadata
Sets metadata common to all instances within the specified project using the data included in the request.


```js
google_compute.projects.setCommonInstanceMetadata({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A metadata key/value entry.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.setUsageExportBucket
Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.


```js
google_compute.projects.setUsageExportBucket({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - The location in Cloud Storage and naming method of the daily usage report. Contains bucket_name and report_name prefix.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpProxies.setUrlMap
Changes the URL map for TargetHttpProxy.


```js
google_compute.targetHttpProxies.setUrlMap({
  "project": "",
  "targetHttpProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetHttpProxy (string) **required** - Name of the TargetHttpProxy to set a URL map for.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpsProxies.setSslCertificates
Replaces SslCertificates for TargetHttpsProxy.


```js
google_compute.targetHttpsProxies.setSslCertificates({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetHttpsProxy (string) **required** - Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetHttpsProxies.setUrlMap
Changes the URL map for TargetHttpsProxy.


```js
google_compute.targetHttpsProxies.setUrlMap({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* targetHttpsProxy (string) **required** - Name of the TargetHttpsProxy resource whose URL map is to be set.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zones.list
Retrieves the list of Zone resources available to the specified project.


```js
google_compute.zones.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
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

### zones.get
Returns the specified Zone resource. Get a list of available zones by making a list() request.


```js
google_compute.zones.get({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### autoscalers.list
Retrieves a list of autoscalers contained within the specified zone.


```js
google_compute.autoscalers.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
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

### autoscalers.patch
Updates an autoscaler in the specified project using the data included in the request. This method supports patch semantics.


```js
google_compute.autoscalers.patch({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* autoscaler (string) - Name of the autoscaler to patch.
* body (object) - Represents an Autoscaler resource. Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define. For more information, read Autoscaling Groups of Instances.
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### autoscalers.insert
Creates an autoscaler in the specified project using the data included in the request.


```js
google_compute.autoscalers.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* body (object) - Represents an Autoscaler resource. Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define. For more information, read Autoscaling Groups of Instances.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### autoscalers.update
Updates an autoscaler in the specified project using the data included in the request.


```js
google_compute.autoscalers.update({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* autoscaler (string) - Name of the autoscaler to update.
* body (object) - Represents an Autoscaler resource. Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define. For more information, read Autoscaling Groups of Instances.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### autoscalers.delete
Deletes the specified autoscaler.


```js
google_compute.autoscalers.delete({
  "project": "",
  "zone": "",
  "autoscaler": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* autoscaler (string) **required** - Name of the autoscaler to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### autoscalers.get
Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.


```js
google_compute.autoscalers.get({
  "project": "",
  "zone": "",
  "autoscaler": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* autoscaler (string) **required** - Name of the autoscaler to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### diskTypes.list
Retrieves a list of disk types available to the specified project.


```js
google_compute.diskTypes.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
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

### diskTypes.get
Returns the specified disk type. Get a list of available disk types by making a list() request.


```js
google_compute.diskTypes.get({
  "project": "",
  "zone": "",
  "diskType": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* diskType (string) **required** - Name of the disk type to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### disks.list
Retrieves a list of persistent disks contained within the specified zone.


```js
google_compute.disks.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
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

### disks.insert
Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.


```js
google_compute.disks.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* sourceImage (string) - Optional. Source image to restore onto a disk.
* body (object) - A Disk resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### disks.delete
Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.


```js
google_compute.disks.delete({
  "project": "",
  "zone": "",
  "disk": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* disk (string) **required** - Name of the persistent disk to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### disks.get
Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.


```js
google_compute.disks.get({
  "project": "",
  "zone": "",
  "disk": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* disk (string) **required** - Name of the persistent disk to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### disks.createSnapshot
Creates a snapshot of a specified persistent disk.


```js
google_compute.disks.createSnapshot({
  "project": "",
  "zone": "",
  "disk": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* disk (string) **required** - Name of the persistent disk to snapshot.
* guestFlush (boolean)
* body (object) - A persistent disk snapshot resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### disks.resize
Resizes the specified persistent disk.


```js
google_compute.disks.resize({
  "project": "",
  "zone": "",
  "disk": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* disk (string) **required** - The name of the persistent disk.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.list
Retrieves a list of managed instance groups that are contained within the specified project and zone.


```js
google_compute.instanceGroupManagers.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
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

### instanceGroupManagers.insert
Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A managed instance group can have up to 1000 VM instances per group.


```js
google_compute.instanceGroupManagers.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where you want to create the managed instance group.
* body (object) - An Instance Group Manager resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.delete
Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.


```js
google_compute.instanceGroupManagers.delete({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.get
Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.


```js
google_compute.instanceGroupManagers.get({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.abandonInstances
Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.instanceGroupManagers.abandonInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.deleteInstances
Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.instanceGroupManagers.deleteInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.listManagedInstances
Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.


```js
google_compute.instanceGroupManagers.listManagedInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* filter (string)
* maxResults (integer)
* order_by (string)
* pageToken (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.recreateInstances
Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.instanceGroupManagers.recreateInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.resize
Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.


```js
google_compute.instanceGroupManagers.resize({
  "project": "",
  "zone": "",
  "instanceGroupManager": "",
  "size": 0
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* size (integer) **required** - The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to maintain the number of instances specified by this parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.setInstanceTemplate
Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.


```js
google_compute.instanceGroupManagers.setInstanceTemplate({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.setTargetPools
Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.


```js
google_compute.instanceGroupManagers.setTargetPools({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the managed instance group is located.
* instanceGroupManager (string) **required** - The name of the managed instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroups.list
Retrieves the list of instance groups that are located in the specified project and zone.


```js
google_compute.instanceGroups.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the instance group is located.
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

### instanceGroups.insert
Creates an instance group in the specified project using the parameters that are included in the request.


```js
google_compute.instanceGroups.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where you want to create the instance group.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroups.delete
Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.


```js
google_compute.instanceGroups.delete({
  "project": "",
  "zone": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the instance group is located.
* instanceGroup (string) **required** - The name of the instance group to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroups.get
Returns the specified instance group. Get a list of available instance groups by making a list() request.


```js
google_compute.instanceGroups.get({
  "project": "",
  "zone": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the instance group is located.
* instanceGroup (string) **required** - The name of the instance group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroups.addInstances
Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.


```js
google_compute.instanceGroups.addInstances({
  "project": "",
  "zone": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the instance group is located.
* instanceGroup (string) **required** - The name of the instance group where you are adding instances.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroups.listInstances
Lists the instances in the specified instance group.


```js
google_compute.instanceGroups.listInstances({
  "project": "",
  "zone": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the instance group is located.
* instanceGroup (string) **required** - The name of the instance group from which you want to generate a list of included instances.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroups.removeInstances
Removes one or more instances from the specified instance group, but does not delete those instances.


```js
google_compute.instanceGroups.removeInstances({
  "project": "",
  "zone": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the instance group is located.
* instanceGroup (string) **required** - The name of the instance group where the specified instances will be removed.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroups.setNamedPorts
Sets the named ports for the specified instance group.


```js
google_compute.instanceGroups.setNamedPorts({
  "project": "",
  "zone": "",
  "instanceGroup": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone where the instance group is located.
* instanceGroup (string) **required** - The name of the instance group where the named ports are updated.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.list
Retrieves the list of instances contained within the specified zone.


```js
google_compute.instances.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
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

### instances.insert
Creates an instance resource in the specified project using the data included in the request.


```js
google_compute.instances.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* body (object) - An Instance resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.delete
Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.


```js
google_compute.instances.delete({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.get
Returns the specified Instance resource. Get a list of available instances by making a list() request.


```js
google_compute.instances.get({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.addAccessConfig
Adds an access config to an instance's network interface.


```js
google_compute.instances.addAccessConfig({
  "project": "",
  "zone": "",
  "instance": "",
  "networkInterface": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - The instance name for this request.
* networkInterface (string) **required** - The name of the network interface to add to this instance.
* body (object) - An access configuration attached to an instance's network interface. Only one access config per instance is supported.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.attachDisk
Attaches a Disk resource to an instance.


```js
google_compute.instances.attachDisk({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - The instance name for this request.
* body (object) - An instance-attached disk resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.deleteAccessConfig
Deletes an access config from an instance's network interface.


```js
google_compute.instances.deleteAccessConfig({
  "project": "",
  "zone": "",
  "instance": "",
  "accessConfig": "",
  "networkInterface": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - The instance name for this request.
* accessConfig (string) **required** - The name of the access config to delete.
* networkInterface (string) **required** - The name of the network interface.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.detachDisk
Detaches a disk from an instance.


```js
google_compute.instances.detachDisk({
  "project": "",
  "zone": "",
  "instance": "",
  "deviceName": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Instance name.
* deviceName (string) **required** - Disk device name to detach.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.reset
Performs a reset on the instance. For more information, see Resetting an instance.


```js
google_compute.instances.reset({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance scoping this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.getSerialPortOutput
Returns the specified instance's serial port output.


```js
google_compute.instances.getSerialPortOutput({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance scoping this request.
* port (integer) - Specifies which COM or serial port to retrieve data from.
* start (string) - Returns output starting from a specific byte position. Use this to page through output when the output is too large to return in a single request. For the initial request, leave this field unspecified. For subsequent calls, this field should be set to the next value returned in the previous call.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.setDiskAutoDelete
Sets the auto-delete flag for a disk attached to an instance.


```js
google_compute.instances.setDiskAutoDelete({
  "project": "",
  "zone": "",
  "instance": "",
  "autoDelete": true,
  "deviceName": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - The instance name.
* autoDelete (boolean) **required** - Whether to auto-delete the disk when the instance is deleted.
* deviceName (string) **required** - The device name of the disk to modify.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.setMachineType
Changes the machine type for a stopped instance to the machine type specified in the request.


```js
google_compute.instances.setMachineType({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance scoping this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.setMetadata
Sets metadata for the specified instance to the data included in the request.


```js
google_compute.instances.setMetadata({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance scoping this request.
* body (object) - A metadata key/value entry.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.setScheduling
Sets an instance's scheduling options.


```js
google_compute.instances.setScheduling({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Instance name.
* body (object) - Sets the scheduling options for an Instance.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.setServiceAccount
Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.


```js
google_compute.instances.setServiceAccount({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance resource to start.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.setTags
Sets tags for the specified instance to the data included in the request.


```js
google_compute.instances.setTags({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance scoping this request.
* body (object) - A set of instance tags.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.start
Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.


```js
google_compute.instances.start({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance resource to start.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.startWithEncryptionKey
Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.


```js
google_compute.instances.startWithEncryptionKey({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance resource to start.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.stop
Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute, virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.


```js
google_compute.instances.stop({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* instance (string) **required** - Name of the instance resource to stop.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### machineTypes.list
Retrieves a list of machine types available to the specified project.


```js
google_compute.machineTypes.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
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

### machineTypes.get
Returns the specified machine type. Get a list of available machine types by making a list() request.


```js
google_compute.machineTypes.get({
  "project": "",
  "zone": "",
  "machineType": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - The name of the zone for this request.
* machineType (string) **required** - Name of the machine type to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneOperations.list
Retrieves a list of Operation resources contained within the specified zone.


```js
google_compute.zoneOperations.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for request.
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

### zoneOperations.delete
Deletes the specified zone-specific Operations resource.


```js
google_compute.zoneOperations.delete({
  "project": "",
  "zone": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* operation (string) **required** - Name of the Operations resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneOperations.get
Retrieves the specified zone-specific Operations resource.


```js
google_compute.zoneOperations.get({
  "project": "",
  "zone": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* operation (string) **required** - Name of the Operations resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetInstances.list
Retrieves a list of TargetInstance resources available to the specified project and zone.


```js
google_compute.targetInstances.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone scoping this request.
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

### targetInstances.insert
Creates a TargetInstance resource in the specified project and zone using the data included in the request.


```js
google_compute.targetInstances.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone scoping this request.
* body (object) - A TargetInstance resource. This resource defines an endpoint instance that terminates traffic of certain protocols.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetInstances.delete
Deletes the specified TargetInstance resource.


```js
google_compute.targetInstances.delete({
  "project": "",
  "zone": "",
  "targetInstance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone scoping this request.
* targetInstance (string) **required** - Name of the TargetInstance resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetInstances.get
Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.


```js
google_compute.targetInstances.get({
  "project": "",
  "zone": "",
  "targetInstance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone scoping this request.
* targetInstance (string) **required** - Name of the TargetInstance resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

