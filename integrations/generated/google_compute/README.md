# @datafire/google_compute

Client library for Compute Engine

## Installation and Usage
```bash
npm install --save @datafire/google_compute
```
```js
let google_compute = require('@datafire/google_compute').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_compute.projects.get({
  "project": ""
}).then(data => {
  console.log(data);
});
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
google_compute.oauthRefresh(null, context)
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

### projects.get
Returns the specified Project resource.


```js
google_compute.projects.get({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Project](#project)

### acceleratorTypes.aggregatedList
Retrieves an aggregated list of accelerator types.


```js
google_compute.acceleratorTypes.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AcceleratorTypeAggregatedList](#acceleratortypeaggregatedlist)

### addresses.aggregatedList
Retrieves an aggregated list of addresses.


```js
google_compute.addresses.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AddressAggregatedList](#addressaggregatedlist)

### autoscalers.aggregatedList
Retrieves an aggregated list of autoscalers.


```js
google_compute.autoscalers.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AutoscalerAggregatedList](#autoscaleraggregatedlist)

### backendServices.aggregatedList
Retrieves the list of all BackendService resources, regional and global, available to the specified project.


```js
google_compute.backendServices.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Name of the project scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendServiceAggregatedList](#backendserviceaggregatedlist)

### regionCommitments.aggregatedList
Retrieves an aggregated list of commitments.


```js
google_compute.regionCommitments.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CommitmentAggregatedList](#commitmentaggregatedlist)

### diskTypes.aggregatedList
Retrieves an aggregated list of disk types.


```js
google_compute.diskTypes.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DiskTypeAggregatedList](#disktypeaggregatedlist)

### disks.aggregatedList
Retrieves an aggregated list of persistent disks.


```js
google_compute.disks.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DiskAggregatedList](#diskaggregatedlist)

### forwardingRules.aggregatedList
Retrieves an aggregated list of forwarding rules.


```js
google_compute.forwardingRules.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ForwardingRuleAggregatedList](#forwardingruleaggregatedlist)

### instanceGroupManagers.aggregatedList
Retrieves the list of managed instance groups and groups them by zone.


```js
google_compute.instanceGroupManagers.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupManagerAggregatedList](#instancegroupmanageraggregatedlist)

### instanceGroups.aggregatedList
Retrieves the list of instance groups and sorts them by zone.


```js
google_compute.instanceGroups.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupAggregatedList](#instancegroupaggregatedlist)

### instances.aggregatedList
Retrieves aggregated list of instances.


```js
google_compute.instances.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceAggregatedList](#instanceaggregatedlist)

### interconnectAttachments.aggregatedList
Retrieves an aggregated list of interconnect attachments.


```js
google_compute.interconnectAttachments.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InterconnectAttachmentAggregatedList](#interconnectattachmentaggregatedlist)

### machineTypes.aggregatedList
Retrieves an aggregated list of machine types.


```js
google_compute.machineTypes.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MachineTypeAggregatedList](#machinetypeaggregatedlist)

### globalOperations.aggregatedList
Retrieves an aggregated list of all operations.


```js
google_compute.globalOperations.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationAggregatedList](#operationaggregatedlist)

### routers.aggregatedList
Retrieves an aggregated list of routers.


```js
google_compute.routers.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RouterAggregatedList](#routeraggregatedlist)

### subnetworks.aggregatedList
Retrieves an aggregated list of subnetworks.


```js
google_compute.subnetworks.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SubnetworkAggregatedList](#subnetworkaggregatedlist)

### targetInstances.aggregatedList
Retrieves an aggregated list of target instances.


```js
google_compute.targetInstances.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetInstanceAggregatedList](#targetinstanceaggregatedlist)

### targetPools.aggregatedList
Retrieves an aggregated list of target pools.


```js
google_compute.targetPools.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetPoolAggregatedList](#targetpoolaggregatedlist)

### targetVpnGateways.aggregatedList
Retrieves an aggregated list of target VPN gateways.


```js
google_compute.targetVpnGateways.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetVpnGatewayAggregatedList](#targetvpngatewayaggregatedlist)

### vpnTunnels.aggregatedList
Retrieves an aggregated list of VPN tunnels.


```js
google_compute.vpnTunnels.aggregatedList({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VpnTunnelAggregatedList](#vpntunnelaggregatedlist)

### projects.disableXpnHost
Disable this project as a shared VPC host project.


```js
google_compute.projects.disableXpnHost({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### projects.disableXpnResource
Disable a serivce resource (a.k.a service project) associated with this host project.


```js
google_compute.projects.disableXpnResource({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [ProjectsDisableXpnResourceRequest](#projectsdisablexpnresourcerequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### projects.enableXpnHost
Enable this project as a shared VPC host project.


```js
google_compute.projects.enableXpnHost({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### projects.enableXpnResource
Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.


```js
google_compute.projects.enableXpnResource({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [ProjectsEnableXpnResourceRequest](#projectsenablexpnresourcerequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### projects.getXpnHost
Get the shared VPC host project that this project links to. May be empty if no link exists.


```js
google_compute.projects.getXpnHost({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Project](#project)

### projects.getXpnResources
Get service resources (a.k.a service project) associated with this host project.


```js
google_compute.projects.getXpnResources({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`
  * maxResults `integer`
  * order_by `string`
  * pageToken `string`
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProjectsGetXpnResources](#projectsgetxpnresources)

### globalAddresses.list
Retrieves a list of global addresses.


```js
google_compute.globalAddresses.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AddressList](#addresslist)

### globalAddresses.insert
Creates an address resource in the specified project using the data included in the request.


```js
google_compute.globalAddresses.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Address](#address)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### globalAddresses.delete
Deletes the specified address resource.


```js
google_compute.globalAddresses.delete({
  "address": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Name of the address resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### globalAddresses.get
Returns the specified address resource. Get a list of available addresses by making a list() request.


```js
google_compute.globalAddresses.get({
  "address": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Name of the address resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Address](#address)

### backendBuckets.list
Retrieves the list of BackendBucket resources available to the specified project.


```js
google_compute.backendBuckets.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendBucketList](#backendbucketlist)

### backendBuckets.insert
Creates a BackendBucket resource in the specified project using the data included in the request.


```js
google_compute.backendBuckets.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [BackendBucket](#backendbucket)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendBuckets.delete
Deletes the specified BackendBucket resource.


```js
google_compute.backendBuckets.delete({
  "backendBucket": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendBucket **required** `string`: Name of the BackendBucket resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendBuckets.get
Returns the specified BackendBucket resource. Get a list of available backend buckets by making a list() request.


```js
google_compute.backendBuckets.get({
  "backendBucket": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendBucket **required** `string`: Name of the BackendBucket resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendBucket](#backendbucket)

### backendBuckets.patch
Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.backendBuckets.patch({
  "backendBucket": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendBucket **required** `string`: Name of the BackendBucket resource to patch.
  * body [BackendBucket](#backendbucket)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendBuckets.update
Updates the specified BackendBucket resource with the data included in the request.


```js
google_compute.backendBuckets.update({
  "backendBucket": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendBucket **required** `string`: Name of the BackendBucket resource to update.
  * body [BackendBucket](#backendbucket)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendServices.list
Retrieves the list of BackendService resources available to the specified project.


```js
google_compute.backendServices.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendServiceList](#backendservicelist)

### backendServices.insert
Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.backendServices.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [BackendService](#backendservice)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendServices.delete
Deletes the specified BackendService resource.


```js
google_compute.backendServices.delete({
  "backendService": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendServices.get
Returns the specified BackendService resource. Get a list of available backend services by making a list() request.


```js
google_compute.backendServices.get({
  "backendService": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendService](#backendservice)

### backendServices.patch
Patches the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.backendServices.patch({
  "backendService": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to patch.
  * body [BackendService](#backendservice)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendServices.update
Updates the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.backendServices.update({
  "backendService": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to update.
  * body [BackendService](#backendservice)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backendServices.getHealth
Gets the most recent health check results for this BackendService.


```js
google_compute.backendServices.getHealth({
  "backendService": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to which the queried instance belongs.
  * body [ResourceGroupReference](#resourcegroupreference)
  * project **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendServiceGroupHealth](#backendservicegrouphealth)

### firewalls.list
Retrieves the list of firewall rules available to the specified project.


```js
google_compute.firewalls.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FirewallList](#firewalllist)

### firewalls.insert
Creates a firewall rule in the specified project using the data included in the request.


```js
google_compute.firewalls.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Firewall](#firewall)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### firewalls.delete
Deletes the specified firewall.


```js
google_compute.firewalls.delete({
  "firewall": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * firewall **required** `string`: Name of the firewall rule to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### firewalls.get
Returns the specified firewall.


```js
google_compute.firewalls.get({
  "firewall": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * firewall **required** `string`: Name of the firewall rule to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Firewall](#firewall)

### firewalls.patch
Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.firewalls.patch({
  "firewall": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Firewall](#firewall)
  * firewall **required** `string`: Name of the firewall rule to patch.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### firewalls.update
Updates the specified firewall rule with the data included in the request. The PUT method can only update the following fields of firewall rule: allowed, description, sourceRanges, sourceTags, targetTags.


```js
google_compute.firewalls.update({
  "firewall": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Firewall](#firewall)
  * firewall **required** `string`: Name of the firewall rule to update.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### globalForwardingRules.list
Retrieves a list of GlobalForwardingRule resources available to the specified project.


```js
google_compute.globalForwardingRules.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ForwardingRuleList](#forwardingrulelist)

### globalForwardingRules.insert
Creates a GlobalForwardingRule resource in the specified project using the data included in the request.


```js
google_compute.globalForwardingRules.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [ForwardingRule](#forwardingrule)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### globalForwardingRules.delete
Deletes the specified GlobalForwardingRule resource.


```js
google_compute.globalForwardingRules.delete({
  "forwardingRule": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * forwardingRule **required** `string`: Name of the ForwardingRule resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### globalForwardingRules.get
Returns the specified GlobalForwardingRule resource. Get a list of available forwarding rules by making a list() request.


```js
google_compute.globalForwardingRules.get({
  "forwardingRule": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * forwardingRule **required** `string`: Name of the ForwardingRule resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ForwardingRule](#forwardingrule)

### globalForwardingRules.setTarget
Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.


```js
google_compute.globalForwardingRules.setTarget({
  "forwardingRule": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [TargetReference](#targetreference)
  * forwardingRule **required** `string`: Name of the ForwardingRule resource in which target is to be set.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### healthChecks.list
Retrieves the list of HealthCheck resources available to the specified project.


```js
google_compute.healthChecks.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HealthCheckList](#healthchecklist)

### healthChecks.insert
Creates a HealthCheck resource in the specified project using the data included in the request.


```js
google_compute.healthChecks.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HealthCheck](#healthcheck)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### healthChecks.delete
Deletes the specified HealthCheck resource.


```js
google_compute.healthChecks.delete({
  "healthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * healthCheck **required** `string`: Name of the HealthCheck resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### healthChecks.get
Returns the specified HealthCheck resource. Get a list of available health checks by making a list() request.


```js
google_compute.healthChecks.get({
  "healthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * healthCheck **required** `string`: Name of the HealthCheck resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HealthCheck](#healthcheck)

### healthChecks.patch
Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.healthChecks.patch({
  "healthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HealthCheck](#healthcheck)
  * healthCheck **required** `string`: Name of the HealthCheck resource to patch.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### healthChecks.update
Updates a HealthCheck resource in the specified project using the data included in the request.


```js
google_compute.healthChecks.update({
  "healthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HealthCheck](#healthcheck)
  * healthCheck **required** `string`: Name of the HealthCheck resource to update.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpHealthChecks.list
Retrieves the list of HttpHealthCheck resources available to the specified project.


```js
google_compute.httpHealthChecks.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HttpHealthCheckList](#httphealthchecklist)

### httpHealthChecks.insert
Creates a HttpHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpHealthChecks.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HttpHealthCheck](#httphealthcheck)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpHealthChecks.delete
Deletes the specified HttpHealthCheck resource.


```js
google_compute.httpHealthChecks.delete({
  "httpHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * httpHealthCheck **required** `string`: Name of the HttpHealthCheck resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpHealthChecks.get
Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.


```js
google_compute.httpHealthChecks.get({
  "httpHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * httpHealthCheck **required** `string`: Name of the HttpHealthCheck resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HttpHealthCheck](#httphealthcheck)

### httpHealthChecks.patch
Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.httpHealthChecks.patch({
  "httpHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HttpHealthCheck](#httphealthcheck)
  * httpHealthCheck **required** `string`: Name of the HttpHealthCheck resource to patch.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpHealthChecks.update
Updates a HttpHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpHealthChecks.update({
  "httpHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HttpHealthCheck](#httphealthcheck)
  * httpHealthCheck **required** `string`: Name of the HttpHealthCheck resource to update.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpsHealthChecks.list
Retrieves the list of HttpsHealthCheck resources available to the specified project.


```js
google_compute.httpsHealthChecks.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HttpsHealthCheckList](#httpshealthchecklist)

### httpsHealthChecks.insert
Creates a HttpsHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpsHealthChecks.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HttpsHealthCheck](#httpshealthcheck)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpsHealthChecks.delete
Deletes the specified HttpsHealthCheck resource.


```js
google_compute.httpsHealthChecks.delete({
  "httpsHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * httpsHealthCheck **required** `string`: Name of the HttpsHealthCheck resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpsHealthChecks.get
Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.


```js
google_compute.httpsHealthChecks.get({
  "httpsHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * httpsHealthCheck **required** `string`: Name of the HttpsHealthCheck resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HttpsHealthCheck](#httpshealthcheck)

### httpsHealthChecks.patch
Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.httpsHealthChecks.patch({
  "httpsHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HttpsHealthCheck](#httpshealthcheck)
  * httpsHealthCheck **required** `string`: Name of the HttpsHealthCheck resource to patch.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### httpsHealthChecks.update
Updates a HttpsHealthCheck resource in the specified project using the data included in the request.


```js
google_compute.httpsHealthChecks.update({
  "httpsHealthCheck": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [HttpsHealthCheck](#httpshealthcheck)
  * httpsHealthCheck **required** `string`: Name of the HttpsHealthCheck resource to update.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### images.list
Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.


```js
google_compute.images.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ImageList](#imagelist)

### images.insert
Creates an image in the specified project using the data included in the request.


```js
google_compute.images.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Image](#image)
  * forceCreate `boolean`: Force image creation if true.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### images.getFromFamily
Returns the latest image that is part of an image family and is not deprecated.


```js
google_compute.images.getFromFamily({
  "family": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * family **required** `string`: Name of the image family to search for.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Image](#image)

### images.delete
Deletes the specified image.


```js
google_compute.images.delete({
  "image": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * image **required** `string`: Name of the image resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### images.get
Returns the specified image. Get a list of available images by making a list() request.


```js
google_compute.images.get({
  "image": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * image **required** `string`: Name of the image resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Image](#image)

### images.deprecate
Sets the deprecation status of an image.

If an empty request body is given, clears the deprecation status instead.


```js
google_compute.images.deprecate({
  "image": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [DeprecationStatus](#deprecationstatus)
  * image **required** `string`: Image name.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### images.setLabels
Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.


```js
google_compute.images.setLabels({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GlobalSetLabelsRequest](#globalsetlabelsrequest)
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
* output [Operation](#operation)

### instanceTemplates.list
Retrieves a list of instance templates that are contained within the specified project and zone.


```js
google_compute.instanceTemplates.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceTemplateList](#instancetemplatelist)

### instanceTemplates.insert
Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.


```js
google_compute.instanceTemplates.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceTemplate](#instancetemplate)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceTemplates.delete
Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It's not possible to delete templates which are in use by an instance group.


```js
google_compute.instanceTemplates.delete({
  "instanceTemplate": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instanceTemplate **required** `string`: The name of the instance template to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceTemplates.get
Returns the specified instance template. Get a list of available instance templates by making a list() request.


```js
google_compute.instanceTemplates.get({
  "instanceTemplate": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instanceTemplate **required** `string`: The name of the instance template.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceTemplate](#instancetemplate)

### interconnectLocations.list
Retrieves the list of interconnect locations available to the specified project.


```js
google_compute.interconnectLocations.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InterconnectLocationList](#interconnectlocationlist)

### interconnectLocations.get
Returns the details for the specified interconnect location. Get a list of available interconnect locations by making a list() request.


```js
google_compute.interconnectLocations.get({
  "interconnectLocation": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * interconnectLocation **required** `string`: Name of the interconnect location to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InterconnectLocation](#interconnectlocation)

### interconnects.list
Retrieves the list of interconnect available to the specified project.


```js
google_compute.interconnects.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InterconnectList](#interconnectlist)

### interconnects.insert
Creates a Interconnect in the specified project using the data included in the request.


```js
google_compute.interconnects.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Interconnect](#interconnect)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### interconnects.delete
Deletes the specified interconnect.


```js
google_compute.interconnects.delete({
  "interconnect": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * interconnect **required** `string`: Name of the interconnect to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### interconnects.get
Returns the specified interconnect. Get a list of available interconnects by making a list() request.


```js
google_compute.interconnects.get({
  "interconnect": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * interconnect **required** `string`: Name of the interconnect to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Interconnect](#interconnect)

### interconnects.patch
Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.interconnects.patch({
  "interconnect": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Interconnect](#interconnect)
  * interconnect **required** `string`: Name of the interconnect to update.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### licenses.get
Returns the specified License resource.


```js
google_compute.licenses.get({
  "license": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Name of the License resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [License](#license)

### networks.list
Retrieves the list of networks available to the specified project.


```js
google_compute.networks.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [NetworkList](#networklist)

### networks.insert
Creates a network in the specified project using the data included in the request.


```js
google_compute.networks.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Network](#network)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### networks.delete
Deletes the specified network.


```js
google_compute.networks.delete({
  "network": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * network **required** `string`: Name of the network to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### networks.get
Returns the specified network. Get a list of available networks by making a list() request.


```js
google_compute.networks.get({
  "network": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * network **required** `string`: Name of the network to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Network](#network)

### networks.patch
Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.


```js
google_compute.networks.patch({
  "network": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Network](#network)
  * network **required** `string`: Name of the network to update.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### networks.addPeering
Adds a peering to the specified network.


```js
google_compute.networks.addPeering({
  "network": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [NetworksAddPeeringRequest](#networksaddpeeringrequest)
  * network **required** `string`: Name of the network resource to add peering to.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### networks.removePeering
Removes a peering from the specified network.


```js
google_compute.networks.removePeering({
  "network": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [NetworksRemovePeeringRequest](#networksremovepeeringrequest)
  * network **required** `string`: Name of the network resource to remove peering from.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### networks.switchToCustomMode
Switches the network mode from auto subnet mode to custom subnet mode.


```js
google_compute.networks.switchToCustomMode({
  "network": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * network **required** `string`: Name of the network to be updated.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### globalOperations.list
Retrieves a list of Operation resources contained within the specified project.


```js
google_compute.globalOperations.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationList](#operationlist)

### globalOperations.delete
Deletes the specified Operations resource.


```js
google_compute.globalOperations.delete({
  "operation": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the Operations resource to delete.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### globalOperations.get
Retrieves the specified Operations resource. Get a list of operations by making a list() request.


```js
google_compute.globalOperations.get({
  "operation": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the Operations resource to return.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routes.list
Retrieves the list of Route resources available to the specified project.


```js
google_compute.routes.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RouteList](#routelist)

### routes.insert
Creates a Route resource in the specified project using the data included in the request.


```js
google_compute.routes.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Route](#route)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routes.delete
Deletes the specified Route resource.


```js
google_compute.routes.delete({
  "project": "",
  "route": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * route **required** `string`: Name of the Route resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routes.get
Returns the specified Route resource. Get a list of available routes by making a list() request.


```js
google_compute.routes.get({
  "project": "",
  "route": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * route **required** `string`: Name of the Route resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Route](#route)

### snapshots.list
Retrieves the list of Snapshot resources contained within the specified project.


```js
google_compute.snapshots.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SnapshotList](#snapshotlist)

### snapshots.setLabels
Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.


```js
google_compute.snapshots.setLabels({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GlobalSetLabelsRequest](#globalsetlabelsrequest)
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
* output [Operation](#operation)

### snapshots.delete
Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.

For more information, see Deleting snaphots.


```js
google_compute.snapshots.delete({
  "project": "",
  "snapshot": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * snapshot **required** `string`: Name of the Snapshot resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### snapshots.get
Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.


```js
google_compute.snapshots.get({
  "project": "",
  "snapshot": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * snapshot **required** `string`: Name of the Snapshot resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Snapshot](#snapshot)

### sslCertificates.list
Retrieves the list of SslCertificate resources available to the specified project.


```js
google_compute.sslCertificates.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SslCertificateList](#sslcertificatelist)

### sslCertificates.insert
Creates a SslCertificate resource in the specified project using the data included in the request.


```js
google_compute.sslCertificates.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [SslCertificate](#sslcertificate)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### sslCertificates.delete
Deletes the specified SslCertificate resource.


```js
google_compute.sslCertificates.delete({
  "project": "",
  "sslCertificate": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * sslCertificate **required** `string`: Name of the SslCertificate resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### sslCertificates.get
Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.


```js
google_compute.sslCertificates.get({
  "project": "",
  "sslCertificate": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * sslCertificate **required** `string`: Name of the SslCertificate resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SslCertificate](#sslcertificate)

### targetHttpProxies.list
Retrieves the list of TargetHttpProxy resources available to the specified project.


```js
google_compute.targetHttpProxies.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetHttpProxyList](#targethttpproxylist)

### targetHttpProxies.insert
Creates a TargetHttpProxy resource in the specified project using the data included in the request.


```js
google_compute.targetHttpProxies.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [TargetHttpProxy](#targethttpproxy)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetHttpProxies.delete
Deletes the specified TargetHttpProxy resource.


```js
google_compute.targetHttpProxies.delete({
  "project": "",
  "targetHttpProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetHttpProxy **required** `string`: Name of the TargetHttpProxy resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetHttpProxies.get
Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.


```js
google_compute.targetHttpProxies.get({
  "project": "",
  "targetHttpProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * targetHttpProxy **required** `string`: Name of the TargetHttpProxy resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetHttpProxy](#targethttpproxy)

### targetHttpsProxies.list
Retrieves the list of TargetHttpsProxy resources available to the specified project.


```js
google_compute.targetHttpsProxies.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetHttpsProxyList](#targethttpsproxylist)

### targetHttpsProxies.insert
Creates a TargetHttpsProxy resource in the specified project using the data included in the request.


```js
google_compute.targetHttpsProxies.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [TargetHttpsProxy](#targethttpsproxy)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetHttpsProxies.delete
Deletes the specified TargetHttpsProxy resource.


```js
google_compute.targetHttpsProxies.delete({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetHttpsProxy **required** `string`: Name of the TargetHttpsProxy resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetHttpsProxies.get
Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.


```js
google_compute.targetHttpsProxies.get({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * targetHttpsProxy **required** `string`: Name of the TargetHttpsProxy resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetHttpsProxy](#targethttpsproxy)

### targetSslProxies.list
Retrieves the list of TargetSslProxy resources available to the specified project.


```js
google_compute.targetSslProxies.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetSslProxyList](#targetsslproxylist)

### targetSslProxies.insert
Creates a TargetSslProxy resource in the specified project using the data included in the request.


```js
google_compute.targetSslProxies.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [TargetSslProxy](#targetsslproxy)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetSslProxies.delete
Deletes the specified TargetSslProxy resource.


```js
google_compute.targetSslProxies.delete({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetSslProxy **required** `string`: Name of the TargetSslProxy resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetSslProxies.get
Returns the specified TargetSslProxy resource. Get a list of available target SSL proxies by making a list() request.


```js
google_compute.targetSslProxies.get({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * targetSslProxy **required** `string`: Name of the TargetSslProxy resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetSslProxy](#targetsslproxy)

### targetSslProxies.setBackendService
Changes the BackendService for TargetSslProxy.


```js
google_compute.targetSslProxies.setBackendService({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Input
* input `object`
  * body [TargetSslProxiesSetBackendServiceRequest](#targetsslproxiessetbackendservicerequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetSslProxy **required** `string`: Name of the TargetSslProxy resource whose BackendService resource is to be set.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetSslProxies.setProxyHeader
Changes the ProxyHeaderType for TargetSslProxy.


```js
google_compute.targetSslProxies.setProxyHeader({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Input
* input `object`
  * body [TargetSslProxiesSetProxyHeaderRequest](#targetsslproxiessetproxyheaderrequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetSslProxy **required** `string`: Name of the TargetSslProxy resource whose ProxyHeader is to be set.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetSslProxies.setSslCertificates
Changes SslCertificates for TargetSslProxy.


```js
google_compute.targetSslProxies.setSslCertificates({
  "project": "",
  "targetSslProxy": ""
}, context)
```

#### Input
* input `object`
  * body [TargetSslProxiesSetSslCertificatesRequest](#targetsslproxiessetsslcertificatesrequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetSslProxy **required** `string`: Name of the TargetSslProxy resource whose SslCertificate resource is to be set.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetTcpProxies.list
Retrieves the list of TargetTcpProxy resources available to the specified project.


```js
google_compute.targetTcpProxies.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetTcpProxyList](#targettcpproxylist)

### targetTcpProxies.insert
Creates a TargetTcpProxy resource in the specified project using the data included in the request.


```js
google_compute.targetTcpProxies.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [TargetTcpProxy](#targettcpproxy)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetTcpProxies.delete
Deletes the specified TargetTcpProxy resource.


```js
google_compute.targetTcpProxies.delete({
  "project": "",
  "targetTcpProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetTcpProxy **required** `string`: Name of the TargetTcpProxy resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetTcpProxies.get
Returns the specified TargetTcpProxy resource. Get a list of available target TCP proxies by making a list() request.


```js
google_compute.targetTcpProxies.get({
  "project": "",
  "targetTcpProxy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * targetTcpProxy **required** `string`: Name of the TargetTcpProxy resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetTcpProxy](#targettcpproxy)

### targetTcpProxies.setBackendService
Changes the BackendService for TargetTcpProxy.


```js
google_compute.targetTcpProxies.setBackendService({
  "project": "",
  "targetTcpProxy": ""
}, context)
```

#### Input
* input `object`
  * body [TargetTcpProxiesSetBackendServiceRequest](#targettcpproxiessetbackendservicerequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetTcpProxy **required** `string`: Name of the TargetTcpProxy resource whose BackendService resource is to be set.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetTcpProxies.setProxyHeader
Changes the ProxyHeaderType for TargetTcpProxy.


```js
google_compute.targetTcpProxies.setProxyHeader({
  "project": "",
  "targetTcpProxy": ""
}, context)
```

#### Input
* input `object`
  * body [TargetTcpProxiesSetProxyHeaderRequest](#targettcpproxiessetproxyheaderrequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetTcpProxy **required** `string`: Name of the TargetTcpProxy resource whose ProxyHeader is to be set.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### urlMaps.list
Retrieves the list of UrlMap resources available to the specified project.


```js
google_compute.urlMaps.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UrlMapList](#urlmaplist)

### urlMaps.insert
Creates a UrlMap resource in the specified project using the data included in the request.


```js
google_compute.urlMaps.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [UrlMap](#urlmap)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### urlMaps.delete
Deletes the specified UrlMap resource.


```js
google_compute.urlMaps.delete({
  "project": "",
  "urlMap": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * urlMap **required** `string`: Name of the UrlMap resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### urlMaps.get
Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.


```js
google_compute.urlMaps.get({
  "project": "",
  "urlMap": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * urlMap **required** `string`: Name of the UrlMap resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UrlMap](#urlmap)

### urlMaps.patch
Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.urlMaps.patch({
  "project": "",
  "urlMap": ""
}, context)
```

#### Input
* input `object`
  * body [UrlMap](#urlmap)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * urlMap **required** `string`: Name of the UrlMap resource to patch.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### urlMaps.update
Updates the specified UrlMap resource with the data included in the request.


```js
google_compute.urlMaps.update({
  "project": "",
  "urlMap": ""
}, context)
```

#### Input
* input `object`
  * body [UrlMap](#urlmap)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * urlMap **required** `string`: Name of the UrlMap resource to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### urlMaps.invalidateCache
Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.


```js
google_compute.urlMaps.invalidateCache({
  "project": "",
  "urlMap": ""
}, context)
```

#### Input
* input `object`
  * body [CacheInvalidationRule](#cacheinvalidationrule)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * urlMap **required** `string`: Name of the UrlMap scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### urlMaps.validate
Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.


```js
google_compute.urlMaps.validate({
  "project": "",
  "urlMap": ""
}, context)
```

#### Input
* input `object`
  * body [UrlMapsValidateRequest](#urlmapsvalidaterequest)
  * project **required** `string`: Project ID for this request.
  * urlMap **required** `string`: Name of the UrlMap resource to be validated as.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UrlMapsValidateResponse](#urlmapsvalidateresponse)

### projects.listXpnHosts
List all shared VPC host projects visible to the user in an organization.


```js
google_compute.projects.listXpnHosts({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [ProjectsListXpnHostsRequest](#projectslistxpnhostsrequest)
  * filter `string`
  * maxResults `integer`
  * order_by `string`
  * pageToken `string`
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [XpnHostList](#xpnhostlist)

### projects.moveDisk
Moves a persistent disk from one zone to another.


```js
google_compute.projects.moveDisk({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [DiskMoveRequest](#diskmoverequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### projects.moveInstance
Moves an instance and its attached persistent disks from one zone to another.


```js
google_compute.projects.moveInstance({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceMoveRequest](#instancemoverequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regions.list
Retrieves the list of region resources available to the specified project.


```js
google_compute.regions.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RegionList](#regionlist)

### regions.get
Returns the specified Region resource. Get a list of available regions by making a list() request.


```js
google_compute.regions.get({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Region](#region)

### addresses.list
Retrieves a list of addresses contained within the specified region.


```js
google_compute.addresses.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AddressList](#addresslist)

### addresses.insert
Creates an address resource in the specified project using the data included in the request.


```js
google_compute.addresses.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Address](#address)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### addresses.delete
Deletes the specified address resource.


```js
google_compute.addresses.delete({
  "address": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Name of the address resource to delete.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### addresses.get
Returns the specified address resource.


```js
google_compute.addresses.get({
  "address": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Name of the address resource to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Address](#address)

### regionAutoscalers.list
Retrieves a list of autoscalers contained within the specified region.


```js
google_compute.regionAutoscalers.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RegionAutoscalerList](#regionautoscalerlist)

### regionAutoscalers.patch
Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.regionAutoscalers.patch({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * autoscaler `string`: Name of the autoscaler to patch.
  * body [Autoscaler](#autoscaler)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionAutoscalers.insert
Creates an autoscaler in the specified project using the data included in the request.


```js
google_compute.regionAutoscalers.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Autoscaler](#autoscaler)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionAutoscalers.update
Updates an autoscaler in the specified project using the data included in the request.


```js
google_compute.regionAutoscalers.update({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * autoscaler `string`: Name of the autoscaler to update.
  * body [Autoscaler](#autoscaler)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionAutoscalers.delete
Deletes the specified autoscaler.


```js
google_compute.regionAutoscalers.delete({
  "autoscaler": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * autoscaler **required** `string`: Name of the autoscaler to delete.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionAutoscalers.get
Returns the specified autoscaler.


```js
google_compute.regionAutoscalers.get({
  "autoscaler": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * autoscaler **required** `string`: Name of the autoscaler to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Autoscaler](#autoscaler)

### regionBackendServices.list
Retrieves the list of regional BackendService resources available to the specified project in the given region.


```js
google_compute.regionBackendServices.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendServiceList](#backendservicelist)

### regionBackendServices.insert
Creates a regional BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a regional backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.regionBackendServices.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [BackendService](#backendservice)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionBackendServices.delete
Deletes the specified regional BackendService resource.


```js
google_compute.regionBackendServices.delete({
  "backendService": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to delete.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionBackendServices.get
Returns the specified regional BackendService resource.


```js
google_compute.regionBackendServices.get({
  "backendService": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendService](#backendservice)

### regionBackendServices.patch
Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.regionBackendServices.patch({
  "backendService": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to patch.
  * body [BackendService](#backendservice)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionBackendServices.update
Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.


```js
google_compute.regionBackendServices.update({
  "backendService": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource to update.
  * body [BackendService](#backendservice)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionBackendServices.getHealth
Gets the most recent health check results for this regional BackendService.


```js
google_compute.regionBackendServices.getHealth({
  "backendService": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * backendService **required** `string`: Name of the BackendService resource for which to get health.
  * body [ResourceGroupReference](#resourcegroupreference)
  * project **required** `string`
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackendServiceGroupHealth](#backendservicegrouphealth)

### regionCommitments.list
Retrieves a list of commitments contained within the specified region.


```js
google_compute.regionCommitments.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CommitmentList](#commitmentlist)

### regionCommitments.insert
Creates a commitment in the specified project using the data included in the request.


```js
google_compute.regionCommitments.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Commitment](#commitment)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionCommitments.get
Returns the specified commitment resource. Get a list of available commitments by making a list() request.


```js
google_compute.regionCommitments.get({
  "commitment": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * commitment **required** `string`: Name of the commitment to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Commitment](#commitment)

### forwardingRules.list
Retrieves a list of ForwardingRule resources available to the specified project and region.


```js
google_compute.forwardingRules.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ForwardingRuleList](#forwardingrulelist)

### forwardingRules.insert
Creates a ForwardingRule resource in the specified project and region using the data included in the request.


```js
google_compute.forwardingRules.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [ForwardingRule](#forwardingrule)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### forwardingRules.delete
Deletes the specified ForwardingRule resource.


```js
google_compute.forwardingRules.delete({
  "forwardingRule": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * forwardingRule **required** `string`: Name of the ForwardingRule resource to delete.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### forwardingRules.get
Returns the specified ForwardingRule resource.


```js
google_compute.forwardingRules.get({
  "forwardingRule": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * forwardingRule **required** `string`: Name of the ForwardingRule resource to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ForwardingRule](#forwardingrule)

### forwardingRules.setTarget
Changes target URL for forwarding rule. The new target should be of the same type as the old target.


```js
google_compute.forwardingRules.setTarget({
  "forwardingRule": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [TargetReference](#targetreference)
  * forwardingRule **required** `string`: Name of the ForwardingRule resource in which target is to be set.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.list
Retrieves the list of managed instance groups that are contained within the specified region.


```js
google_compute.regionInstanceGroupManagers.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RegionInstanceGroupManagerList](#regioninstancegroupmanagerlist)

### regionInstanceGroupManagers.insert
Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A regional managed instance group can contain up to 2000 instances.


```js
google_compute.regionInstanceGroupManagers.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupManager](#instancegroupmanager)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.delete
Deletes the specified managed instance group and all of the instances in that group.


```js
google_compute.regionInstanceGroupManagers.delete({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * instanceGroupManager **required** `string`: Name of the managed instance group to delete.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.get
Returns all of the details about the specified managed instance group.


```js
google_compute.regionInstanceGroupManagers.get({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * instanceGroupManager **required** `string`: Name of the managed instance group to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupManager](#instancegroupmanager)

### regionInstanceGroupManagers.abandonInstances
Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.regionInstanceGroupManagers.abandonInstances({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [RegionInstanceGroupManagersAbandonInstancesRequest](#regioninstancegroupmanagersabandoninstancesrequest)
  * instanceGroupManager **required** `string`: Name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.deleteInstances
Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.regionInstanceGroupManagers.deleteInstances({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [RegionInstanceGroupManagersDeleteInstancesRequest](#regioninstancegroupmanagersdeleteinstancesrequest)
  * instanceGroupManager **required** `string`: Name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.listManagedInstances
Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances.


```js
google_compute.regionInstanceGroupManagers.listManagedInstances({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * maxResults `integer`
  * order_by `string`
  * pageToken `string`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RegionInstanceGroupManagersListInstancesResponse](#regioninstancegroupmanagerslistinstancesresponse)

### regionInstanceGroupManagers.recreateInstances
Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.regionInstanceGroupManagers.recreateInstances({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [RegionInstanceGroupManagersRecreateRequest](#regioninstancegroupmanagersrecreaterequest)
  * instanceGroupManager **required** `string`: Name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.resize
Changes the intended size for the managed instance group. If you increase the size, the group schedules actions to create new instances using the current instance template. If you decrease the size, the group schedules delete actions on one or more instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.


```js
google_compute.regionInstanceGroupManagers.resize({
  "instanceGroupManager": "",
  "project": "",
  "region": "",
  "size": 0
}, context)
```

#### Input
* input `object`
  * instanceGroupManager **required** `string`: Name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * size **required** `integer`: Number of instances that should exist in this instance group manager.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.setInstanceTemplate
Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.


```js
google_compute.regionInstanceGroupManagers.setInstanceTemplate({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [RegionInstanceGroupManagersSetTemplateRequest](#regioninstancegroupmanagerssettemplaterequest)
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroupManagers.setTargetPools
Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.


```js
google_compute.regionInstanceGroupManagers.setTargetPools({
  "instanceGroupManager": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [RegionInstanceGroupManagersSetTargetPoolsRequest](#regioninstancegroupmanagerssettargetpoolsrequest)
  * instanceGroupManager **required** `string`: Name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### regionInstanceGroups.list
Retrieves the list of instance group resources contained within the specified region.


```js
google_compute.regionInstanceGroups.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RegionInstanceGroupList](#regioninstancegrouplist)

### regionInstanceGroups.get
Returns the specified instance group resource.


```js
google_compute.regionInstanceGroups.get({
  "instanceGroup": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * instanceGroup **required** `string`: Name of the instance group resource to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroup](#instancegroup)

### regionInstanceGroups.listInstances
Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running.


```js
google_compute.regionInstanceGroups.listInstances({
  "instanceGroup": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [RegionInstanceGroupsListInstancesRequest](#regioninstancegroupslistinstancesrequest)
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * instanceGroup **required** `string`: Name of the regional instance group for which we want to list the instances.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RegionInstanceGroupsListInstances](#regioninstancegroupslistinstances)

### regionInstanceGroups.setNamedPorts
Sets the named ports for the specified regional instance group.


```js
google_compute.regionInstanceGroups.setNamedPorts({
  "instanceGroup": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [RegionInstanceGroupsSetNamedPortsRequest](#regioninstancegroupssetnamedportsrequest)
  * instanceGroup **required** `string`: The name of the regional instance group where the named ports are updated.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### interconnectAttachments.list
Retrieves the list of interconnect attachments contained within the specified region.


```js
google_compute.interconnectAttachments.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InterconnectAttachmentList](#interconnectattachmentlist)

### interconnectAttachments.insert
Creates an InterconnectAttachment in the specified project using the data included in the request.


```js
google_compute.interconnectAttachments.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [InterconnectAttachment](#interconnectattachment)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### interconnectAttachments.delete
Deletes the specified interconnect attachment.


```js
google_compute.interconnectAttachments.delete({
  "interconnectAttachment": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * interconnectAttachment **required** `string`: Name of the interconnect attachment to delete.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### interconnectAttachments.get
Returns the specified interconnect attachment.


```js
google_compute.interconnectAttachments.get({
  "interconnectAttachment": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * interconnectAttachment **required** `string`: Name of the interconnect attachment to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InterconnectAttachment](#interconnectattachment)

### regionOperations.list
Retrieves a list of Operation resources contained within the specified region.


```js
google_compute.regionOperations.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationList](#operationlist)

### regionOperations.delete
Deletes the specified region-specific Operations resource.


```js
google_compute.regionOperations.delete({
  "operation": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the Operations resource to delete.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### regionOperations.get
Retrieves the specified region-specific Operations resource.


```js
google_compute.regionOperations.get({
  "operation": "",
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the Operations resource to return.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routers.list
Retrieves a list of Router resources available to the specified project.


```js
google_compute.routers.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RouterList](#routerlist)

### routers.insert
Creates a Router resource in the specified project and region using the data included in the request.


```js
google_compute.routers.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Router](#router)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routers.delete
Deletes the specified Router resource.


```js
google_compute.routers.delete({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * router **required** `string`: Name of the Router resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routers.get
Returns the specified Router resource. Get a list of available routers by making a list() request.


```js
google_compute.routers.get({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * router **required** `string`: Name of the Router resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Router](#router)

### routers.patch
Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.


```js
google_compute.routers.patch({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Input
* input `object`
  * body [Router](#router)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * router **required** `string`: Name of the Router resource to patch.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routers.update
Updates the specified Router resource with the data included in the request.


```js
google_compute.routers.update({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Input
* input `object`
  * body [Router](#router)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * router **required** `string`: Name of the Router resource to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### routers.getRouterStatus
Retrieves runtime information of the specified router.


```js
google_compute.routers.getRouterStatus({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * router **required** `string`: Name of the Router resource to query.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RouterStatusResponse](#routerstatusresponse)

### routers.preview
Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.


```js
google_compute.routers.preview({
  "project": "",
  "region": "",
  "router": ""
}, context)
```

#### Input
* input `object`
  * body [Router](#router)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * router **required** `string`: Name of the Router resource to query.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RoutersPreviewResponse](#routerspreviewresponse)

### subnetworks.list
Retrieves a list of subnetworks available to the specified project.


```js
google_compute.subnetworks.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SubnetworkList](#subnetworklist)

### subnetworks.insert
Creates a subnetwork in the specified project using the data included in the request.


```js
google_compute.subnetworks.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Subnetwork](#subnetwork)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### subnetworks.delete
Deletes the specified subnetwork.


```js
google_compute.subnetworks.delete({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * subnetwork **required** `string`: Name of the Subnetwork resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### subnetworks.get
Returns the specified subnetwork. Get a list of available subnetworks list() request.


```js
google_compute.subnetworks.get({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * subnetwork **required** `string`: Name of the Subnetwork resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Subnetwork](#subnetwork)

### subnetworks.expandIpCidrRange
Expands the IP CIDR range of the subnetwork to a specified value.


```js
google_compute.subnetworks.expandIpCidrRange({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Input
* input `object`
  * body [SubnetworksExpandIpCidrRangeRequest](#subnetworksexpandipcidrrangerequest)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * subnetwork **required** `string`: Name of the Subnetwork resource to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### subnetworks.setPrivateIpGoogleAccess
Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.


```js
google_compute.subnetworks.setPrivateIpGoogleAccess({
  "project": "",
  "region": "",
  "subnetwork": ""
}, context)
```

#### Input
* input `object`
  * body [SubnetworksSetPrivateIpGoogleAccessRequest](#subnetworkssetprivateipgoogleaccessrequest)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * subnetwork **required** `string`: Name of the Subnetwork resource.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetPools.list
Retrieves a list of target pools available to the specified project and region.


```js
google_compute.targetPools.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetPoolList](#targetpoollist)

### targetPools.insert
Creates a target pool in the specified project and region using the data included in the request.


```js
google_compute.targetPools.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [TargetPool](#targetpool)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetPools.delete
Deletes the specified target pool.


```js
google_compute.targetPools.delete({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetPool **required** `string`: Name of the TargetPool resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetPools.get
Returns the specified target pool. Get a list of available target pools by making a list() request.


```js
google_compute.targetPools.get({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * targetPool **required** `string`: Name of the TargetPool resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetPool](#targetpool)

### targetPools.addHealthCheck
Adds health check URLs to a target pool.


```js
google_compute.targetPools.addHealthCheck({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * body [TargetPoolsAddHealthCheckRequest](#targetpoolsaddhealthcheckrequest)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetPool **required** `string`: Name of the target pool to add a health check to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetPools.addInstance
Adds an instance to a target pool.


```js
google_compute.targetPools.addInstance({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * body [TargetPoolsAddInstanceRequest](#targetpoolsaddinstancerequest)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetPool **required** `string`: Name of the TargetPool resource to add instances to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetPools.getHealth
Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.


```js
google_compute.targetPools.getHealth({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceReference](#instancereference)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * targetPool **required** `string`: Name of the TargetPool resource to which the queried instance belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetPoolInstanceHealth](#targetpoolinstancehealth)

### targetPools.removeHealthCheck
Removes health check URL from a target pool.


```js
google_compute.targetPools.removeHealthCheck({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * body [TargetPoolsRemoveHealthCheckRequest](#targetpoolsremovehealthcheckrequest)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetPool **required** `string`: Name of the target pool to remove health checks from.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetPools.removeInstance
Removes instance URL from a target pool.


```js
google_compute.targetPools.removeInstance({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * body [TargetPoolsRemoveInstanceRequest](#targetpoolsremoveinstancerequest)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetPool **required** `string`: Name of the TargetPool resource to remove instances from.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetPools.setBackup
Changes a backup target pool's configurations.


```js
google_compute.targetPools.setBackup({
  "project": "",
  "region": "",
  "targetPool": ""
}, context)
```

#### Input
* input `object`
  * body [TargetReference](#targetreference)
  * failoverRatio `number`: New failoverRatio value for the target pool.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region scoping this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetPool **required** `string`: Name of the TargetPool resource to set a backup pool for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetVpnGateways.list
Retrieves a list of target VPN gateways available to the specified project and region.


```js
google_compute.targetVpnGateways.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetVpnGatewayList](#targetvpngatewaylist)

### targetVpnGateways.insert
Creates a target VPN gateway in the specified project and region using the data included in the request.


```js
google_compute.targetVpnGateways.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [TargetVpnGateway](#targetvpngateway)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetVpnGateways.delete
Deletes the specified target VPN gateway.


```js
google_compute.targetVpnGateways.delete({
  "project": "",
  "region": "",
  "targetVpnGateway": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetVpnGateway **required** `string`: Name of the target VPN gateway to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetVpnGateways.get
Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.


```js
google_compute.targetVpnGateways.get({
  "project": "",
  "region": "",
  "targetVpnGateway": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * targetVpnGateway **required** `string`: Name of the target VPN gateway to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetVpnGateway](#targetvpngateway)

### vpnTunnels.list
Retrieves a list of VpnTunnel resources contained in the specified project and region.


```js
google_compute.vpnTunnels.list({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VpnTunnelList](#vpntunnellist)

### vpnTunnels.insert
Creates a VpnTunnel resource in the specified project and region using the data included in the request.


```js
google_compute.vpnTunnels.insert({
  "project": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [VpnTunnel](#vpntunnel)
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### vpnTunnels.delete
Deletes the specified VpnTunnel resource.


```js
google_compute.vpnTunnels.delete({
  "project": "",
  "region": "",
  "vpnTunnel": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * vpnTunnel **required** `string`: Name of the VpnTunnel resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### vpnTunnels.get
Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.


```js
google_compute.vpnTunnels.get({
  "project": "",
  "region": "",
  "vpnTunnel": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * region **required** `string`: Name of the region for this request.
  * vpnTunnel **required** `string`: Name of the VpnTunnel resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VpnTunnel](#vpntunnel)

### projects.setCommonInstanceMetadata
Sets metadata common to all instances within the specified project using the data included in the request.


```js
google_compute.projects.setCommonInstanceMetadata({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Metadata](#metadata)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### projects.setUsageExportBucket
Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.


```js
google_compute.projects.setUsageExportBucket({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [UsageExportLocation](#usageexportlocation)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetHttpProxies.setUrlMap
Changes the URL map for TargetHttpProxy.


```js
google_compute.targetHttpProxies.setUrlMap({
  "project": "",
  "targetHttpProxy": ""
}, context)
```

#### Input
* input `object`
  * body [UrlMapReference](#urlmapreference)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetHttpProxy **required** `string`: Name of the TargetHttpProxy to set a URL map for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetHttpsProxies.setSslCertificates
Replaces SslCertificates for TargetHttpsProxy.


```js
google_compute.targetHttpsProxies.setSslCertificates({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Input
* input `object`
  * body [TargetHttpsProxiesSetSslCertificatesRequest](#targethttpsproxiessetsslcertificatesrequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetHttpsProxy **required** `string`: Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetHttpsProxies.setUrlMap
Changes the URL map for TargetHttpsProxy.


```js
google_compute.targetHttpsProxies.setUrlMap({
  "project": "",
  "targetHttpsProxy": ""
}, context)
```

#### Input
* input `object`
  * body [UrlMapReference](#urlmapreference)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetHttpsProxy **required** `string`: Name of the TargetHttpsProxy resource whose URL map is to be set.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### zones.list
Retrieves the list of Zone resources available to the specified project.


```js
google_compute.zones.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ZoneList](#zonelist)

### zones.get
Returns the specified Zone resource. Get a list of available zones by making a list() request.


```js
google_compute.zones.get({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Zone](#zone)

### acceleratorTypes.list
Retrieves a list of accelerator types available to the specified project.


```js
google_compute.acceleratorTypes.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AcceleratorTypeList](#acceleratortypelist)

### acceleratorTypes.get
Returns the specified accelerator type. Get a list of available accelerator types by making a list() request.


```js
google_compute.acceleratorTypes.get({
  "acceleratorType": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * acceleratorType **required** `string`: Name of the accelerator type to return.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AcceleratorType](#acceleratortype)

### autoscalers.list
Retrieves a list of autoscalers contained within the specified zone.


```js
google_compute.autoscalers.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AutoscalerList](#autoscalerlist)

### autoscalers.patch
Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.autoscalers.patch({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * autoscaler `string`: Name of the autoscaler to patch.
  * body [Autoscaler](#autoscaler)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### autoscalers.insert
Creates an autoscaler in the specified project using the data included in the request.


```js
google_compute.autoscalers.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [Autoscaler](#autoscaler)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### autoscalers.update
Updates an autoscaler in the specified project using the data included in the request.


```js
google_compute.autoscalers.update({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * autoscaler `string`: Name of the autoscaler to update.
  * body [Autoscaler](#autoscaler)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### autoscalers.delete
Deletes the specified autoscaler.


```js
google_compute.autoscalers.delete({
  "autoscaler": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * autoscaler **required** `string`: Name of the autoscaler to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### autoscalers.get
Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.


```js
google_compute.autoscalers.get({
  "autoscaler": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * autoscaler **required** `string`: Name of the autoscaler to return.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Autoscaler](#autoscaler)

### diskTypes.list
Retrieves a list of disk types available to the specified project.


```js
google_compute.diskTypes.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DiskTypeList](#disktypelist)

### diskTypes.get
Returns the specified disk type. Get a list of available disk types by making a list() request.


```js
google_compute.diskTypes.get({
  "diskType": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * diskType **required** `string`: Name of the disk type to return.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DiskType](#disktype)

### disks.list
Retrieves a list of persistent disks contained within the specified zone.


```js
google_compute.disks.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DiskList](#disklist)

### disks.insert
Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.


```js
google_compute.disks.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [Disk](#disk)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * sourceImage `string`: Optional. Source image to restore onto a disk.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### disks.delete
Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.


```js
google_compute.disks.delete({
  "disk": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * disk **required** `string`: Name of the persistent disk to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### disks.get
Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.


```js
google_compute.disks.get({
  "disk": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * disk **required** `string`: Name of the persistent disk to return.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Disk](#disk)

### disks.createSnapshot
Creates a snapshot of a specified persistent disk.


```js
google_compute.disks.createSnapshot({
  "disk": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [Snapshot](#snapshot)
  * disk **required** `string`: Name of the persistent disk to snapshot.
  * guestFlush `boolean`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### disks.resize
Resizes the specified persistent disk. You can only increase the size of the disk.


```js
google_compute.disks.resize({
  "disk": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [DisksResizeRequest](#disksresizerequest)
  * disk **required** `string`: The name of the persistent disk.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### disks.setLabels
Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.


```js
google_compute.disks.setLabels({
  "project": "",
  "resource": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [ZoneSetLabelsRequest](#zonesetlabelsrequest)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * resource **required** `string`: Name of the resource for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.list
Retrieves a list of managed instance groups that are contained within the specified project and zone.


```js
google_compute.instanceGroupManagers.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupManagerList](#instancegroupmanagerlist)

### instanceGroupManagers.insert
Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.


```js
google_compute.instanceGroupManagers.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupManager](#instancegroupmanager)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where you want to create the managed instance group.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.delete
Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.


```js
google_compute.instanceGroupManagers.delete({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instanceGroupManager **required** `string`: The name of the managed instance group to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.get
Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.


```js
google_compute.instanceGroupManagers.get({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupManager](#instancegroupmanager)

### instanceGroupManagers.abandonInstances
Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.instanceGroupManagers.abandonInstances({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupManagersAbandonInstancesRequest](#instancegroupmanagersabandoninstancesrequest)
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.deleteInstances
Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.instanceGroupManagers.deleteInstances({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupManagersDeleteInstancesRequest](#instancegroupmanagersdeleteinstancesrequest)
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.listManagedInstances
Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.


```js
google_compute.instanceGroupManagers.listManagedInstances({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * maxResults `integer`
  * order_by `string`
  * pageToken `string`
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupManagersListManagedInstancesResponse](#instancegroupmanagerslistmanagedinstancesresponse)

### instanceGroupManagers.recreateInstances
Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.


```js
google_compute.instanceGroupManagers.recreateInstances({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupManagersRecreateInstancesRequest](#instancegroupmanagersrecreateinstancesrequest)
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.resize
Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.


```js
google_compute.instanceGroupManagers.resize({
  "instanceGroupManager": "",
  "project": "",
  "size": 0,
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * size **required** `integer`: The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to maintain the number of instances specified by this parameter.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.setInstanceTemplate
Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.


```js
google_compute.instanceGroupManagers.setInstanceTemplate({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupManagersSetInstanceTemplateRequest](#instancegroupmanagerssetinstancetemplaterequest)
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.setTargetPools
Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.


```js
google_compute.instanceGroupManagers.setTargetPools({
  "instanceGroupManager": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupManagersSetTargetPoolsRequest](#instancegroupmanagerssettargetpoolsrequest)
  * instanceGroupManager **required** `string`: The name of the managed instance group.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the managed instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroups.list
Retrieves the list of instance groups that are located in the specified project and zone.


```js
google_compute.instanceGroups.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone where the instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupList](#instancegrouplist)

### instanceGroups.insert
Creates an instance group in the specified project using the parameters that are included in the request.


```js
google_compute.instanceGroups.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroup](#instancegroup)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where you want to create the instance group.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroups.delete
Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.


```js
google_compute.instanceGroups.delete({
  "instanceGroup": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instanceGroup **required** `string`: The name of the instance group to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroups.get
Returns the specified instance group. Get a list of available instance groups by making a list() request.


```js
google_compute.instanceGroups.get({
  "instanceGroup": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instanceGroup **required** `string`: The name of the instance group.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone where the instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroup](#instancegroup)

### instanceGroups.addInstances
Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.


```js
google_compute.instanceGroups.addInstances({
  "instanceGroup": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupsAddInstancesRequest](#instancegroupsaddinstancesrequest)
  * instanceGroup **required** `string`: The name of the instance group where you are adding instances.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroups.listInstances
Lists the instances in the specified instance group.


```js
google_compute.instanceGroups.listInstances({
  "instanceGroup": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupsListInstancesRequest](#instancegroupslistinstancesrequest)
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * instanceGroup **required** `string`: The name of the instance group from which you want to generate a list of included instances.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone where the instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupsListInstances](#instancegroupslistinstances)

### instanceGroups.removeInstances
Removes one or more instances from the specified instance group, but does not delete those instances.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.


```js
google_compute.instanceGroups.removeInstances({
  "instanceGroup": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupsRemoveInstancesRequest](#instancegroupsremoveinstancesrequest)
  * instanceGroup **required** `string`: The name of the instance group where the specified instances will be removed.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroups.setNamedPorts
Sets the named ports for the specified instance group.


```js
google_compute.instanceGroups.setNamedPorts({
  "instanceGroup": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstanceGroupsSetNamedPortsRequest](#instancegroupssetnamedportsrequest)
  * instanceGroup **required** `string`: The name of the instance group where the named ports are updated.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone where the instance group is located.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.list
Retrieves the list of instances contained within the specified zone.


```js
google_compute.instances.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceList](#instancelist)

### instances.insert
Creates an instance resource in the specified project using the data included in the request.


```js
google_compute.instances.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [Instance](#instance)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.delete
Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.


```js
google_compute.instances.delete({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Name of the instance resource to delete.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.get
Returns the specified Instance resource. Get a list of available instances by making a list() request.


```js
google_compute.instances.get({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Name of the instance resource to return.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Instance](#instance)

### instances.addAccessConfig
Adds an access config to an instance's network interface.


```js
google_compute.instances.addAccessConfig({
  "instance": "",
  "networkInterface": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [AccessConfig](#accessconfig)
  * instance **required** `string`: The instance name for this request.
  * networkInterface **required** `string`: The name of the network interface to add to this instance.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.attachDisk
Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.


```js
google_compute.instances.attachDisk({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [AttachedDisk](#attacheddisk)
  * instance **required** `string`: The instance name for this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.deleteAccessConfig
Deletes an access config from an instance's network interface.


```js
google_compute.instances.deleteAccessConfig({
  "accessConfig": "",
  "instance": "",
  "networkInterface": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * accessConfig **required** `string`: The name of the access config to delete.
  * instance **required** `string`: The instance name for this request.
  * networkInterface **required** `string`: The name of the network interface.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.detachDisk
Detaches a disk from an instance.


```js
google_compute.instances.detachDisk({
  "deviceName": "",
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: Disk device name to detach.
  * instance **required** `string`: Instance name.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.listReferrers
Retrieves the list of referrers to instances contained within the specified zone.


```js
google_compute.instances.listReferrers({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * instance **required** `string`: Name of the target instance scoping this request, or '-' if the request should span over all instances in the container.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceListReferrers](#instancelistreferrers)

### instances.reset
Performs a reset on the instance. For more information, see Resetting an instance.


```js
google_compute.instances.reset({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Name of the instance scoping this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.getSerialPortOutput
Returns the specified instance's serial port output.


```js
google_compute.instances.getSerialPortOutput({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Name of the instance scoping this request.
  * port `integer`: Specifies which COM or serial port to retrieve data from.
  * project **required** `string`: Project ID for this request.
  * start `string`: Returns output starting from a specific byte position. Use this to page through output when the output is too large to return in a single request. For the initial request, leave this field unspecified. For subsequent calls, this field should be set to the next value returned in the previous call.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SerialPortOutput](#serialportoutput)

### instances.setDiskAutoDelete
Sets the auto-delete flag for a disk attached to an instance.


```js
google_compute.instances.setDiskAutoDelete({
  "autoDelete": true,
  "deviceName": "",
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * autoDelete **required** `boolean`: Whether to auto-delete the disk when the instance is deleted.
  * deviceName **required** `string`: The device name of the disk to modify.
  * instance **required** `string`: The instance name.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setLabels
Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.


```js
google_compute.instances.setLabels({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesSetLabelsRequest](#instancessetlabelsrequest)
  * instance **required** `string`: Name of the instance scoping this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setMachineResources
Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.


```js
google_compute.instances.setMachineResources({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesSetMachineResourcesRequest](#instancessetmachineresourcesrequest)
  * instance **required** `string`: Name of the instance scoping this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setMachineType
Changes the machine type for a stopped instance to the machine type specified in the request.


```js
google_compute.instances.setMachineType({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesSetMachineTypeRequest](#instancessetmachinetyperequest)
  * instance **required** `string`: Name of the instance scoping this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setMetadata
Sets metadata for the specified instance to the data included in the request.


```js
google_compute.instances.setMetadata({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [Metadata](#metadata)
  * instance **required** `string`: Name of the instance scoping this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setMinCpuPlatform
Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.


```js
google_compute.instances.setMinCpuPlatform({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesSetMinCpuPlatformRequest](#instancessetmincpuplatformrequest)
  * instance **required** `string`: Name of the instance scoping this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setScheduling
Sets an instance's scheduling options.


```js
google_compute.instances.setScheduling({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [Scheduling](#scheduling)
  * instance **required** `string`: Instance name.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setServiceAccount
Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.


```js
google_compute.instances.setServiceAccount({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesSetServiceAccountRequest](#instancessetserviceaccountrequest)
  * instance **required** `string`: Name of the instance resource to start.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setTags
Sets tags for the specified instance to the data included in the request.


```js
google_compute.instances.setTags({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [Tags](#tags)
  * instance **required** `string`: Name of the instance scoping this request.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.start
Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.


```js
google_compute.instances.start({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Name of the instance resource to start.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.startWithEncryptionKey
Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.


```js
google_compute.instances.startWithEncryptionKey({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesStartWithEncryptionKeyRequest](#instancesstartwithencryptionkeyrequest)
  * instance **required** `string`: Name of the instance resource to start.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.stop
Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.


```js
google_compute.instances.stop({
  "instance": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Name of the instance resource to stop.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.updateAccessConfig
Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.


```js
google_compute.instances.updateAccessConfig({
  "instance": "",
  "networkInterface": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [AccessConfig](#accessconfig)
  * instance **required** `string`: The instance name for this request.
  * networkInterface **required** `string`: The name of the network interface where the access config is attached.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.setDeletionProtection
Sets deletion protection on the instance.


```js
google_compute.instances.setDeletionProtection({
  "project": "",
  "resource": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * deletionProtection `boolean`: Whether the resource should be protected against deletion.
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * resource **required** `string`: Name of the resource for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### machineTypes.list
Retrieves a list of machine types available to the specified project.


```js
google_compute.machineTypes.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MachineTypeList](#machinetypelist)

### machineTypes.get
Returns the specified machine type. Get a list of available machine types by making a list() request.


```js
google_compute.machineTypes.get({
  "machineType": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * machineType **required** `string`: Name of the machine type to return.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: The name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MachineType](#machinetype)

### zoneOperations.list
Retrieves a list of Operation resources contained within the specified zone.


```js
google_compute.zoneOperations.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone for request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationList](#operationlist)

### zoneOperations.delete
Deletes the specified zone-specific Operations resource.


```js
google_compute.zoneOperations.delete({
  "operation": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the Operations resource to delete.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### zoneOperations.get
Retrieves the specified zone-specific Operations resource.


```js
google_compute.zoneOperations.get({
  "operation": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the Operations resource to return.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetInstances.list
Retrieves a list of TargetInstance resources available to the specified project and zone.


```js
google_compute.targetInstances.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetInstanceList](#targetinstancelist)

### targetInstances.insert
Creates a TargetInstance resource in the specified project and zone using the data included in the request.


```js
google_compute.targetInstances.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [TargetInstance](#targetinstance)
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * zone **required** `string`: Name of the zone scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetInstances.delete
Deletes the specified TargetInstance resource.


```js
google_compute.targetInstances.delete({
  "project": "",
  "targetInstance": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * requestId `string`: An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
  * targetInstance **required** `string`: Name of the TargetInstance resource to delete.
  * zone **required** `string`: Name of the zone scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### targetInstances.get
Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.


```js
google_compute.targetInstances.get({
  "project": "",
  "targetInstance": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * targetInstance **required** `string`: Name of the TargetInstance resource to return.
  * zone **required** `string`: Name of the zone scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TargetInstance](#targetinstance)



## Definitions

### AcceleratorConfig
* AcceleratorConfig `object`: A specification of the type and number of accelerator cards attached to the instance.
  * acceleratorCount `integer`: The number of the guest accelerator cards exposed to this instance.
  * acceleratorType `string`: Full or partial URL of the accelerator type resource to attach to this instance. If you are creating an instance template, specify only the accelerator name.

### AcceleratorType
* AcceleratorType `object`: An Accelerator Type resource. (== resource_for beta.acceleratorTypes ==) (== resource_for v1.acceleratorTypes ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * deprecated [DeprecationStatus](#deprecationstatus)
  * description `string`: [Output Only] An optional textual description of the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] The type of the resource. Always compute#acceleratorType for accelerator types.
  * maximumCardsPerInstance `integer`: [Output Only] Maximum accelerator cards allowed per instance.
  * name `string`: [Output Only] Name of the resource.
  * selfLink `string`: [Output Only] Server-defined fully-qualified URL for this resource.
  * zone `string`: [Output Only] The name of the zone where the accelerator type resides, such as us-central1-a. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### AcceleratorTypeAggregatedList
* AcceleratorTypeAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of AcceleratorTypesScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#acceleratorTypeAggregatedList for aggregated lists of accelerator types.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AcceleratorTypeList
* AcceleratorTypeList `object`: Contains a list of accelerator types.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of AcceleratorType resources.
    * items [AcceleratorType](#acceleratortype)
  * kind `string`: [Output Only] Type of resource. Always compute#acceleratorTypeList for lists of accelerator types.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AcceleratorTypesScopedList
* AcceleratorTypesScopedList `object`
  * acceleratorTypes `array`: [Output Only] List of accelerator types contained in this scope.
    * items [AcceleratorType](#acceleratortype)
  * warning `object`: [Output Only] An informational warning that appears when the accelerator types list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AccessConfig
* AccessConfig `object`: An access configuration attached to an instance's network interface. Only one access config per instance is supported.
  * kind `string`: [Output Only] Type of the resource. Always compute#accessConfig for access configs.
  * name `string`: The name of this access configuration. The default and recommended name is External NAT but you can use any arbitrary string you would like. For example, My external IP or Network Access.
  * natIP `string`: An external IP address associated with this instance. Specify an unused static external IP address available to the project or leave this field undefined to use an IP from a shared ephemeral IP address pool. If you specify a static external IP address, it must live in the same region as the zone of the instance.
  * publicPtrDomainName `string`: The DNS domain name for the public PTR record. This field can only be set when the set_public_ptr field is enabled.
  * setPublicPtr `boolean`: Specifies whether a public DNS ?PTR? record should be created to map the external IP address of the instance to a DNS domain name.
  * type `string` (values: ONE_TO_ONE_NAT): The type of configuration. The default and only option is ONE_TO_ONE_NAT.

### Address
* Address `object`: A reserved address resource. (== resource_for beta.addresses ==) (== resource_for v1.addresses ==) (== resource_for beta.globalAddresses ==) (== resource_for v1.globalAddresses ==)
  * address `string`: The static IP address represented by this resource.
  * addressType `string` (values: EXTERNAL, INTERNAL, UNSPECIFIED_TYPE): The type of address to reserve, either INTERNAL or EXTERNAL. If unspecified, defaults to EXTERNAL.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * ipVersion `string` (values: IPV4, IPV6, UNSPECIFIED_VERSION): The IP Version that will be used by this address. Valid options are IPV4 or IPV6. This can only be specified for a global address.
  * kind `string`: [Output Only] Type of the resource. Always compute#address for addresses.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * region `string`: [Output Only] URL of the region where the regional address resides. This field is not applicable to global addresses. You must specify this field as part of the HTTP request URL. You cannot set this field in the request body.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * status `string` (values: IN_USE, RESERVED): [Output Only] The status of the address, which can be one of RESERVING, RESERVED, or IN_USE. An address that is RESERVING is currently in the process of being reserved. A RESERVED address is currently reserved and available to use. An IN_USE address is currently being used by another resource and is not available.
  * subnetwork `string`: The URL of the subnetwork in which to reserve the address. If an IP address is specified, it must be within the subnetwork's IP range. This field can only be used with INTERNAL type with GCE_ENDPOINT/DNS_RESOLVER purposes.
  * users `array`: [Output Only] The URLs of the resources that are using this address.
    * items `string`

### AddressAggregatedList
* AddressAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of AddressesScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#addressAggregatedList for aggregated lists of addresses.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AddressList
* AddressList `object`: Contains a list of addresses.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Address resources.
    * items [Address](#address)
  * kind `string`: [Output Only] Type of resource. Always compute#addressList for lists of addresses.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AddressesScopedList
* AddressesScopedList `object`
  * addresses `array`: [Output Only] List of addresses contained in this scope.
    * items [Address](#address)
  * warning `object`: [Output Only] Informational warning which replaces the list of addresses when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AliasIpRange
* AliasIpRange `object`: An alias IP range attached to an instance's network interface.
  * ipCidrRange `string`: The IP CIDR range represented by this alias IP range. This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. This range may be a single IP address (e.g. 10.2.3.4), a netmask (e.g. /24) or a CIDR format string (e.g. 10.1.2.0/24).
  * subnetworkRangeName `string`: Optional subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. If left unspecified, the primary range of the subnetwork will be used.

### AttachedDisk
* AttachedDisk `object`: An instance-attached disk resource.
  * autoDelete `boolean`: Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
  * boot `boolean`: Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
  * deviceName `string`: Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance.
  * diskEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * index `integer`: [Output Only] A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
  * initializeParams [AttachedDiskInitializeParams](#attacheddiskinitializeparams)
  * interface `string` (values: NVME, SCSI): Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance.
  * kind `string`: [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
  * licenses `array`: [Output Only] Any valid publicly visible licenses.
    * items `string`
  * mode `string` (values: READ_ONLY, READ_WRITE): The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
  * source `string`: Specifies a valid partial or full URL to an existing Persistent Disk resource. When creating a new instance, one of initializeParams.sourceImage or disks.source is required except for local SSD.
  * type `string` (values: PERSISTENT, SCRATCH): Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

### AttachedDiskInitializeParams
* AttachedDiskInitializeParams `object`: [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance.
  * diskName `string`: Specifies the disk name. If not specified, the default is to use the name of the instance.
  * diskSizeGb `string`: Specifies the size of the disk in base-2 GB.
  * diskType `string`: Specifies the disk type to use to create the instance. If not specified, the default is pd-standard, specified using the full URL. For example:
  * labels `object`: Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks.
  * sourceImage `string`: The source image to create this disk. When creating a new instance, one of initializeParams.sourceImage or disks.source is required except for local SSD.
  * sourceImageEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)

### Autoscaler
* Autoscaler `object`: Represents an Autoscaler resource. Autoscalers allow you to automatically scale virtual machine instances in managed instance groups according to an autoscaling policy that you define. For more information, read Autoscaling Groups of Instances. (== resource_for beta.autoscalers ==) (== resource_for v1.autoscalers ==) (== resource_for beta.regionAutoscalers ==) (== resource_for v1.regionAutoscalers ==)
  * autoscalingPolicy [AutoscalingPolicy](#autoscalingpolicy)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#autoscaler for autoscalers.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * region `string`: [Output Only] URL of the region where the instance group resides (for autoscalers living in regional scope).
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * status `string` (values: ACTIVE, DELETING, ERROR, PENDING): [Output Only] The status of the autoscaler configuration.
  * statusDetails `array`: [Output Only] Human-readable details about the current state of the autoscaler. Read the documentation for Commonly returned status messages for examples of status messages you might encounter.
    * items [AutoscalerStatusDetails](#autoscalerstatusdetails)
  * target `string`: URL of the managed instance group that this autoscaler will scale.
  * zone `string`: [Output Only] URL of the zone where the instance group resides (for autoscalers living in zonal scope).

### AutoscalerAggregatedList
* AutoscalerAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of AutoscalersScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#autoscalerAggregatedList for aggregated lists of autoscalers.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AutoscalerList
* AutoscalerList `object`: Contains a list of Autoscaler resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Autoscaler resources.
    * items [Autoscaler](#autoscaler)
  * kind `string`: [Output Only] Type of resource. Always compute#autoscalerList for lists of autoscalers.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AutoscalerStatusDetails
* AutoscalerStatusDetails `object`
  * message `string`: The status message.
  * type `string` (values: ALL_INSTANCES_UNHEALTHY, BACKEND_SERVICE_DOES_NOT_EXIST, CAPPED_AT_MAX_NUM_REPLICAS, CUSTOM_METRIC_DATA_POINTS_TOO_SPARSE, CUSTOM_METRIC_INVALID, MIN_EQUALS_MAX, MISSING_CUSTOM_METRIC_DATA_POINTS, MISSING_LOAD_BALANCING_DATA_POINTS, MORE_THAN_ONE_BACKEND_SERVICE, NOT_ENOUGH_QUOTA_AVAILABLE, REGION_RESOURCE_STOCKOUT, SCALING_TARGET_DOES_NOT_EXIST, UNKNOWN, UNSUPPORTED_MAX_RATE_LOAD_BALANCING_CONFIGURATION, ZONE_RESOURCE_STOCKOUT): The type of error returned.

### AutoscalersScopedList
* AutoscalersScopedList `object`
  * autoscalers `array`: [Output Only] List of autoscalers contained in this scope.
    * items [Autoscaler](#autoscaler)
  * warning `object`: [Output Only] Informational warning which replaces the list of autoscalers when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### AutoscalingPolicy
* AutoscalingPolicy `object`: Cloud Autoscaler policy.
  * coolDownPeriodSec `integer`: The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. The default time autoscaler waits is 60 seconds.
  * cpuUtilization [AutoscalingPolicyCpuUtilization](#autoscalingpolicycpuutilization)
  * customMetricUtilizations `array`: Configuration parameters of autoscaling based on a custom metric.
    * items [AutoscalingPolicyCustomMetricUtilization](#autoscalingpolicycustommetricutilization)
  * loadBalancingUtilization [AutoscalingPolicyLoadBalancingUtilization](#autoscalingpolicyloadbalancingutilization)
  * maxNumReplicas `integer`: The maximum number of instances that the autoscaler can scale up to. This is required when creating or updating an autoscaler. The maximum number of replicas should not be lower than minimal number of replicas.
  * minNumReplicas `integer`: The minimum number of replicas that the autoscaler can scale down to. This cannot be less than 0. If not provided, autoscaler will choose a default value depending on maximum number of instances allowed.

### AutoscalingPolicyCpuUtilization
* AutoscalingPolicyCpuUtilization `object`: CPU utilization policy.
  * utilizationTarget `number`: The target CPU utilization that the autoscaler should maintain. Must be a float value in the range (0, 1]. If not specified, the default is 0.6.

### AutoscalingPolicyCustomMetricUtilization
* AutoscalingPolicyCustomMetricUtilization `object`: Custom utilization metric policy.
  * metric `string`: The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.
  * utilizationTarget `number`: The target value of the metric that autoscaler should maintain. This must be a positive value. A utilization metric scales number of virtual machines handling requests to increase or decrease proportionally to the metric.
  * utilizationTargetType `string` (values: DELTA_PER_MINUTE, DELTA_PER_SECOND, GAUGE): Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Either GAUGE, DELTA_PER_SECOND, or DELTA_PER_MINUTE. If not specified, the default is GAUGE.

### AutoscalingPolicyLoadBalancingUtilization
* AutoscalingPolicyLoadBalancingUtilization `object`: Configuration parameters of autoscaling based on load balancing.
  * utilizationTarget `number`: Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. Must be a positive float value. If not defined, the default is 0.8.

### Backend
* Backend `object`: Message containing information of one individual backend.
  * balancingMode `string` (values: CONNECTION, RATE, UTILIZATION): Specifies the balancing mode for this backend. For global HTTP(S) or TCP/SSL load balancing, the default is UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S)) and CONNECTION (for TCP/SSL).
  * capacityScaler `number`: A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). Default value is 1, which means the group will serve up to 100% of its configured capacity (depending on balancingMode). A setting of 0 means the group is completely drained, offering 0% of its available Capacity. Valid range is [0.0,1.0].
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * group `string`: The fully-qualified URL of a Instance Group resource. This instance group defines the list of instances that serve traffic. Member virtual machine instances from each instance group must live in the same zone as the instance group itself. No two backends in a backend service are allowed to use same Instance Group resource.
  * maxConnections `integer`: The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. For CONNECTION mode, either maxConnections or maxConnectionsPerInstance must be set.
  * maxConnectionsPerInstance `integer`: The max number of simultaneous connections that a single backend instance can handle. This is used to calculate the capacity of the group. Can be used in either CONNECTION or UTILIZATION balancing modes. For CONNECTION mode, either maxConnections or maxConnectionsPerInstance must be set.
  * maxRate `integer`: The max requests per second (RPS) of the group. Can be used with either RATE or UTILIZATION balancing modes, but required if RATE mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
  * maxRatePerInstance `number`: The max requests per second (RPS) that a single backend instance can handle. This is used to calculate the capacity of the group. Can be used in either balancing mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
  * maxUtilization `number`: Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. The default is 0.8. Valid range is [0.0, 1.0].

### BackendBucket
* BackendBucket `object`: A BackendBucket resource. This resource defines a Cloud Storage bucket.
  * bucketName `string`: Cloud Storage bucket name.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * enableCdn `boolean`: If true, enable Cloud CDN for this BackendBucket.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * kind `string`: Type of the resource.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.

### BackendBucketList
* BackendBucketList `object`: Contains a list of BackendBucket resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of BackendBucket resources.
    * items [BackendBucket](#backendbucket)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### BackendService
* BackendService `object`: A BackendService resource. This resource defines a group of backend virtual machines and their serving capacity. (== resource_for v1.backendService ==) (== resource_for beta.backendService ==)
  * affinityCookieTtlSec `integer`: Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value for TTL is one day.
  * backends `array`: The list of backends that serve this BackendService.
    * items [Backend](#backend)
  * cdnPolicy [BackendServiceCdnPolicy](#backendservicecdnpolicy)
  * connectionDraining [ConnectionDraining](#connectiondraining)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * enableCDN `boolean`: If true, enable Cloud CDN for this BackendService.
  * fingerprint `string`: Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService.
  * healthChecks `array`: The list of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. Currently at most one health check can be specified, and a health check is required for Compute Engine backend services. A health check must not be specified for App Engine backend and Cloud Function backend.
    * items `string`
  * iap [BackendServiceIAP](#backendserviceiap)
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of resource. Always compute#backendService for backend services.
  * loadBalancingScheme `string` (values: EXTERNAL, INTERNAL, INVALID_LOAD_BALANCING_SCHEME): Indicates whether the backend service will be used with internal or external load balancing. A backend service created for one type of load balancing cannot be used with the other. Possible values are INTERNAL and EXTERNAL.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * port `integer`: Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80.
  * portName `string`: Name of backend port. The same name should appear in the instance groups referenced by this service. Required when the load balancing scheme is EXTERNAL.
  * protocol `string` (values: HTTP, HTTPS, SSL, TCP, UDP): The protocol this BackendService uses to communicate with backends.
  * region `string`: [Output Only] URL of the region where the regional backend service resides. This field is not applicable to global backend services. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * sessionAffinity `string` (values: CLIENT_IP, CLIENT_IP_PORT_PROTO, CLIENT_IP_PROTO, GENERATED_COOKIE, NONE): Type of session affinity to use. The default is NONE.
  * timeoutSec `integer`: How many seconds to wait for the backend before considering it a failed request. Default is 30 seconds.

### BackendServiceAggregatedList
* BackendServiceAggregatedList `object`: Contains a list of BackendServicesScopedList.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of BackendServicesScopedList resources.
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### BackendServiceCdnPolicy
* BackendServiceCdnPolicy `object`: Message containing Cloud CDN configuration for a backend service.
  * cacheKeyPolicy [CacheKeyPolicy](#cachekeypolicy)

### BackendServiceGroupHealth
* BackendServiceGroupHealth `object`
  * healthStatus `array`
    * items [HealthStatus](#healthstatus)
  * kind `string`: [Output Only] Type of resource. Always compute#backendServiceGroupHealth for the health of backend services.

### BackendServiceIAP
* BackendServiceIAP `object`: Identity-Aware Proxy
  * enabled `boolean`
  * oauth2ClientId `string`
  * oauth2ClientSecret `string`
  * oauth2ClientSecretSha256 `string`: [Output Only] SHA256 hash value for the field oauth2_client_secret above.

### BackendServiceList
* BackendServiceList `object`: Contains a list of BackendService resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of BackendService resources.
    * items [BackendService](#backendservice)
  * kind `string`: [Output Only] Type of resource. Always compute#backendServiceList for lists of backend services.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### BackendServicesScopedList
* BackendServicesScopedList `object`
  * backendServices `array`: List of BackendServices contained in this scope.
    * items [BackendService](#backendservice)
  * warning `object`: Informational warning which replaces the list of backend services when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### CacheInvalidationRule
* CacheInvalidationRule `object`
  * host `string`: If set, this invalidation rule will only apply to requests with a Host header matching host.
  * path `string`

### CacheKeyPolicy
* CacheKeyPolicy `object`: Message containing what to include in the cache key for a request for Cloud CDN.
  * includeHost `boolean`: If true, requests to different hosts will be cached separately.
  * includeProtocol `boolean`: If true, http and https requests will be cached separately.
  * includeQueryString `boolean`: If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. If neither is set, the entire query string will be included. If false, the query string will be excluded from the cache key entirely.
  * queryStringBlacklist `array`: Names of query string parameters to exclude in cache keys. All other parameters will be included. Either specify query_string_whitelist or query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
    * items `string`
  * queryStringWhitelist `array`: Names of query string parameters to include in cache keys. All other parameters will be excluded. Either specify query_string_whitelist or query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
    * items `string`

### Commitment
* Commitment `object`: Represents a Commitment resource. Creating a Commitment resource means that you are purchasing a committed use contract with an explicit start and end time. You can create commitments based on vCPUs and memory usage and receive discounted rates. For full details, read Signing Up for Committed Use Discounts.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * endTimestamp `string`: [Output Only] Commitment end time in RFC3339 text format.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#commitment for commitments.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * plan `string` (values: INVALID, THIRTY_SIX_MONTH, TWELVE_MONTH): The plan for this commitment, which determines duration and discount rate. The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
  * region `string`: [Output Only] URL of the region where this commitment may be used.
  * resources `array`: List of commitment amounts for particular resources. Note that VCPU and MEMORY resource commitments must occur together.
    * items [ResourceCommitment](#resourcecommitment)
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * startTimestamp `string`: [Output Only] Commitment start time in RFC3339 text format.
  * status `string` (values: ACTIVE, CREATING, EXPIRED, NOT_YET_ACTIVE): [Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). One of the following values: NOT_YET_ACTIVE, ACTIVE, EXPIRED.
  * statusMessage `string`: [Output Only] An optional, human-readable explanation of the status.

### CommitmentAggregatedList
* CommitmentAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of CommitmentsScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#commitmentAggregatedList for aggregated lists of commitments.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### CommitmentList
* CommitmentList `object`: Contains a list of Commitment resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Commitment resources.
    * items [Commitment](#commitment)
  * kind `string`: [Output Only] Type of resource. Always compute#commitmentList for lists of commitments.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### CommitmentsScopedList
* CommitmentsScopedList `object`
  * commitments `array`: [Output Only] List of commitments contained in this scope.
    * items [Commitment](#commitment)
  * warning `object`: [Output Only] Informational warning which replaces the list of commitments when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### ConnectionDraining
* ConnectionDraining `object`: Message containing connection draining configuration.
  * drainingTimeoutSec `integer`: Time for which instance will be drained (not accept new connections, but still work to finish started).

### CustomerEncryptionKey
* CustomerEncryptionKey `object`: Represents a customer-supplied encryption key
  * rawKey `string`: Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.
  * sha256 `string`: [Output only] The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.

### CustomerEncryptionKeyProtectedDisk
* CustomerEncryptionKeyProtectedDisk `object`
  * diskEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * source `string`: Specifies a valid partial or full URL to an existing Persistent Disk resource. This field is only applicable for persistent disks.

### DeprecationStatus
* DeprecationStatus `object`: Deprecation status for a public resource.
  * deleted `string`: An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DELETED. This is only informational and the status will not change unless the client explicitly changes it.
  * deprecated `string`: An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DEPRECATED. This is only informational and the status will not change unless the client explicitly changes it.
  * obsolete `string`: An optional RFC3339 timestamp on or after which the state of this resource is intended to change to OBSOLETE. This is only informational and the status will not change unless the client explicitly changes it.
  * replacement `string`: The URL of the suggested replacement for a deprecated resource. The suggested replacement resource must be the same kind of resource as the deprecated resource.
  * state `string` (values: DELETED, DEPRECATED, OBSOLETE): The deprecation state of this resource. This can be DEPRECATED, OBSOLETE, or DELETED. Operations which create a new resource using a DEPRECATED resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use OBSOLETE or DELETED resources will be rejected and result in an error.

### Disk
* Disk `object`: A Disk resource. (== resource_for beta.disks ==) (== resource_for v1.disks ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * diskEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#disk for disks.
  * labelFingerprint `string`: A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels.
  * labels `object`: Labels to apply to this disk. These can be later modified by the setLabels method.
  * lastAttachTimestamp `string`: [Output Only] Last attach timestamp in RFC3339 text format.
  * lastDetachTimestamp `string`: [Output Only] Last detach timestamp in RFC3339 text format.
  * licenses `array`: Any applicable publicly visible licenses.
    * items `string`
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * options `string`: Internal use only.
  * selfLink `string`: [Output Only] Server-defined fully-qualified URL for this resource.
  * sizeGb `string`: Size of the persistent disk, specified in GB. You can specify this field when creating a persistent disk using the sourceImage or sourceSnapshot parameter, or specify it alone to create an empty persistent disk.
  * sourceImage `string`: The source image used to create this disk. If the source image is deleted, this field will not be set.
  * sourceImageEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * sourceImageId `string`: [Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.
  * sourceSnapshot `string`: The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values:  
  * sourceSnapshotEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * sourceSnapshotId `string`: [Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.
  * status `string` (values: CREATING, FAILED, READY, RESTORING): [Output Only] The status of disk creation.
  * type `string`: URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk.
  * users `array`: [Output Only] Links to the users of the disk (attached instances) in form: project/zones/zone/instances/instance
    * items `string`
  * zone `string`: [Output Only] URL of the zone where the disk resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### DiskAggregatedList
* DiskAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of DisksScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#diskAggregatedList for aggregated lists of persistent disks.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### DiskList
* DiskList `object`: A list of Disk resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Disk resources.
    * items [Disk](#disk)
  * kind `string`: [Output Only] Type of resource. Always compute#diskList for lists of disks.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### DiskMoveRequest
* DiskMoveRequest `object`
  * destinationZone `string`: The URL of the destination zone to move the disk. This can be a full or partial URL. For example, the following are all valid URLs to a zone:  
  * targetDisk `string`: The URL of the target disk to move. This can be a full or partial URL. For example, the following are all valid URLs to a disk:  

### DiskType
* DiskType `object`: A DiskType resource. (== resource_for beta.diskTypes ==) (== resource_for v1.diskTypes ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * defaultDiskSizeGb `string`: [Output Only] Server-defined default disk size in GB.
  * deprecated [DeprecationStatus](#deprecationstatus)
  * description `string`: [Output Only] An optional description of this resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#diskType for disk types.
  * name `string`: [Output Only] Name of the resource.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * validDiskSize `string`: [Output Only] An optional textual description of the valid disk size, such as "10GB-10TB".
  * zone `string`: [Output Only] URL of the zone where the disk type resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### DiskTypeAggregatedList
* DiskTypeAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of DiskTypesScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#diskTypeAggregatedList.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### DiskTypeList
* DiskTypeList `object`: Contains a list of disk types.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of DiskType resources.
    * items [DiskType](#disktype)
  * kind `string`: [Output Only] Type of resource. Always compute#diskTypeList for disk types.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### DiskTypesScopedList
* DiskTypesScopedList `object`
  * diskTypes `array`: [Output Only] List of disk types contained in this scope.
    * items [DiskType](#disktype)
  * warning `object`: [Output Only] Informational warning which replaces the list of disk types when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### DisksResizeRequest
* DisksResizeRequest `object`
  * sizeGb `string`: The new size of the persistent disk, which is specified in GB.

### DisksScopedList
* DisksScopedList `object`
  * disks `array`: [Output Only] List of disks contained in this scope.
    * items [Disk](#disk)
  * warning `object`: [Output Only] Informational warning which replaces the list of disks when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### Firewall
* Firewall `object`: Represents a Firewall resource.
  * allowed `array`: The list of ALLOW rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a permitted connection.
    * items `object`
      * IPProtocol `string`: The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.
      * ports `array`: An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
        * items `string`
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * denied `array`: The list of DENY rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a denied connection.
    * items `object`
      * IPProtocol `string`: The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.
      * ports `array`: An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
        * items `string`
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * destinationRanges `array`: If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. These ranges must be expressed in CIDR format. Only IPv4 is supported.
    * items `string`
  * direction `string` (values: EGRESS, INGRESS): Direction of traffic to which this firewall applies; default is INGRESS. Note: For INGRESS traffic, it is NOT supported to specify destinationRanges; For EGRESS traffic, it is NOT supported to specify sourceRanges OR sourceTags.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#firewall for firewall rules.
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * network `string`: URL of the network resource for this firewall rule. If not specified when creating a firewall rule, the default network is used:
  * priority `integer`: Priority for this rule. This is an integer between 0 and 65535, both inclusive. When not specified, the value assumed is 1000. Relative priorities determine precedence of conflicting rules. Lower value of priority implies higher precedence (eg, a rule with priority 0 has higher precedence than a rule with priority 1). DENY rules take precedence over ALLOW rules having equal priority.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * sourceRanges `array`: If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. These ranges must be expressed in CIDR format. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply. Only IPv4 is supported.
    * items `string`
  * sourceServiceAccounts `array`: If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. Source service accounts cannot be used to control traffic to an instance's external IP address because service accounts are associated with an instance, not an IP address. sourceRanges can be set at the same time as sourceServiceAccounts. If both are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP belongs to an instance with service account listed in sourceServiceAccount. The connection does not need to match both properties for the firewall to apply. sourceServiceAccounts cannot be used at the same time as sourceTags or targetTags.
    * items `string`
  * sourceTags `array`: If source tags are specified, the firewall rule applies only to traffic with source IPs that match the primary network interfaces of VM instances that have the tag and are in the same VPC network. Source tags cannot be used to control traffic to an instance's external IP address, it only applies to traffic between instances in the same virtual network. Because tags are associated with instances, not IP addresses. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply.
    * items `string`
  * targetServiceAccounts `array`: A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. targetServiceAccounts cannot be used at the same time as targetTags or sourceTags. If neither targetServiceAccounts nor targetTags are specified, the firewall rule applies to all instances on the specified network.
    * items `string`
  * targetTags `array`: A list of tags that controls which instances the firewall rule applies to. If targetTags are specified, then the firewall rule applies only to instances in the VPC network that have one of those tags. If no targetTags are specified, the firewall rule applies to all instances on the specified network.
    * items `string`

### FirewallList
* FirewallList `object`: Contains a list of firewalls.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Firewall resources.
    * items [Firewall](#firewall)
  * kind `string`: [Output Only] Type of resource. Always compute#firewallList for lists of firewalls.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### ForwardingRule
* ForwardingRule `object`: A ForwardingRule resource. A ForwardingRule resource specifies which pool of target virtual machines to forward a packet to if it matches the given [IPAddress, IPProtocol, ports] tuple. (== resource_for beta.forwardingRules ==) (== resource_for v1.forwardingRules ==) (== resource_for beta.globalForwardingRules ==) (== resource_for v1.globalForwardingRules ==) (== resource_for beta.regionForwardingRules ==) (== resource_for v1.regionForwardingRules ==)
  * IPAddress `string`: The IP address that this forwarding rule is serving on behalf of.
  * IPProtocol `string` (values: AH, ESP, ICMP, SCTP, TCP, UDP): The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP.
  * backendService `string`: This field is not used for external load balancing.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * ipVersion `string` (values: IPV4, IPV6, UNSPECIFIED_VERSION): The IP Version that will be used by this forwarding rule. Valid options are IPV4 or IPV6. This can only be specified for a global forwarding rule.
  * kind `string`: [Output Only] Type of the resource. Always compute#forwardingRule for Forwarding Rule resources.
  * loadBalancingScheme `string` (values: EXTERNAL, INTERNAL, INVALID): This signifies what the ForwardingRule will be used for and can only take the following values: INTERNAL, EXTERNAL The value of INTERNAL means that this will be used for Internal Network Load Balancing (TCP, UDP). The value of EXTERNAL means that this will be used for External Load Balancing (HTTP(S) LB, External TCP/UDP LB, SSL Proxy)
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * network `string`: This field is not used for external load balancing.
  * portRange `string`: This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway, TargetPool, TargetInstance.
  * ports `array`: This field is used along with the backend_service field for internal load balancing.
    * items `string`
  * region `string`: [Output Only] URL of the region where the regional forwarding rule resides. This field is not applicable to global forwarding rules. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * subnetwork `string`: This field is not used for external load balancing.
  * target `string`: The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate to the target object.

### ForwardingRuleAggregatedList
* ForwardingRuleAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of ForwardingRulesScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#forwardingRuleAggregatedList for lists of forwarding rules.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### ForwardingRuleList
* ForwardingRuleList `object`: Contains a list of ForwardingRule resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of ForwardingRule resources.
    * items [ForwardingRule](#forwardingrule)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### ForwardingRulesScopedList
* ForwardingRulesScopedList `object`
  * forwardingRules `array`: List of forwarding rules contained in this scope.
    * items [ForwardingRule](#forwardingrule)
  * warning `object`: Informational warning which replaces the list of forwarding rules when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### GlobalSetLabelsRequest
* GlobalSetLabelsRequest `object`
  * labelFingerprint `string`: The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a get() request to the resource to get the latest fingerprint.
  * labels `object`: A list of labels to apply for this resource. Each label key & value must comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. For example, "webserver-frontend": "images". A label value can also be empty (e.g. "my-label": "").

### GuestOsFeature
* GuestOsFeature `object`: Guest OS features.
  * type `string` (values: FEATURE_TYPE_UNSPECIFIED, MULTI_IP_SUBNET, VIRTIO_SCSI_MULTIQUEUE, WINDOWS): The ID of a supported feature. Read  Enabling guest operating system features to see a list of available options.

### HTTPHealthCheck
* HTTPHealthCheck `object`
  * host `string`: The value of the host header in the HTTP health check request. If left empty (default value), the IP on behalf of which this health check is performed will be used.
  * port `integer`: The TCP port number for the health check request. The default value is 80. Valid values are 1 through 65535.
  * portName `string`: Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
  * proxyHeader `string` (values: NONE, PROXY_V1): Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
  * requestPath `string`: The request path of the HTTP health check request. The default value is /.

### HTTPSHealthCheck
* HTTPSHealthCheck `object`
  * host `string`: The value of the host header in the HTTPS health check request. If left empty (default value), the IP on behalf of which this health check is performed will be used.
  * port `integer`: The TCP port number for the health check request. The default value is 443. Valid values are 1 through 65535.
  * portName `string`: Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
  * proxyHeader `string` (values: NONE, PROXY_V1): Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
  * requestPath `string`: The request path of the HTTPS health check request. The default value is /.

### HealthCheck
* HealthCheck `object`: An HealthCheck resource. This resource defines a template for how individual virtual machines should be checked for health, via one of the supported protocols.
  * checkIntervalSec `integer`: How often (in seconds) to send a health check. The default value is 5 seconds.
  * creationTimestamp `string`: [Output Only] Creation timestamp in 3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * healthyThreshold `integer`: A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
  * httpHealthCheck [HTTPHealthCheck](#httphealthcheck)
  * httpsHealthCheck [HTTPSHealthCheck](#httpshealthcheck)
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: Type of the resource.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * sslHealthCheck [SSLHealthCheck](#sslhealthcheck)
  * tcpHealthCheck [TCPHealthCheck](#tcphealthcheck)
  * timeoutSec `integer`: How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
  * type `string` (values: HTTP, HTTPS, INVALID, SSL, TCP): Specifies the type of the healthCheck, either TCP, SSL, HTTP or HTTPS. If not specified, the default is TCP. Exactly one of the protocol-specific health check field must be specified, which must match type field.
  * unhealthyThreshold `integer`: A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

### HealthCheckList
* HealthCheckList `object`: Contains a list of HealthCheck resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of HealthCheck resources.
    * items [HealthCheck](#healthcheck)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### HealthCheckReference
* HealthCheckReference `object`: A full or valid partial URL to a health check. For example, the following are valid URLs:  
  * healthCheck `string`

### HealthStatus
* HealthStatus `object`
  * healthState `string` (values: HEALTHY, UNHEALTHY): Health state of the instance.
  * instance `string`: URL of the instance resource.
  * ipAddress `string`: The IP address represented by this resource.
  * port `integer`: The port on the instance.

### HostRule
* HostRule `object`: UrlMaps A host-matching rule for a URL. If matched, will use the named PathMatcher to select the BackendService.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * hosts `array`: The list of host patterns to match. They must be valid hostnames, except * will match any string of ([a-z0-9-.]*). In that case, * must be the first character and must be followed in the pattern by either - or ..
    * items `string`
  * pathMatcher `string`: The name of the PathMatcher to use to match the path portion of the URL if the hostRule matches the URL's host portion.

### HttpHealthCheck
* HttpHealthCheck `object`: An HttpHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTP.
  * checkIntervalSec `integer`: How often (in seconds) to send a health check. The default value is 5 seconds.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * healthyThreshold `integer`: A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
  * host `string`: The value of the host header in the HTTP health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#httpHealthCheck for HTTP health checks.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * port `integer`: The TCP port number for the HTTP health check request. The default value is 80.
  * requestPath `string`: The request path of the HTTP health check request. The default value is /.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * timeoutSec `integer`: How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
  * unhealthyThreshold `integer`: A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

### HttpHealthCheckList
* HttpHealthCheckList `object`: Contains a list of HttpHealthCheck resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of HttpHealthCheck resources.
    * items [HttpHealthCheck](#httphealthcheck)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### HttpsHealthCheck
* HttpsHealthCheck `object`: An HttpsHealthCheck resource. This resource defines a template for how individual instances should be checked for health, via HTTPS.
  * checkIntervalSec `integer`: How often (in seconds) to send a health check. The default value is 5 seconds.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * healthyThreshold `integer`: A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
  * host `string`: The value of the host header in the HTTPS health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: Type of the resource.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * port `integer`: The TCP port number for the HTTPS health check request. The default value is 443.
  * requestPath `string`: The request path of the HTTPS health check request. The default value is "/".
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * timeoutSec `integer`: How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have a greater value than checkIntervalSec.
  * unhealthyThreshold `integer`: A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

### HttpsHealthCheckList
* HttpsHealthCheckList `object`: Contains a list of HttpsHealthCheck resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of HttpsHealthCheck resources.
    * items [HttpsHealthCheck](#httpshealthcheck)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### Image
* Image `object`: An Image resource. (== resource_for beta.images ==) (== resource_for v1.images ==)
  * archiveSizeBytes `string`: Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * deprecated [DeprecationStatus](#deprecationstatus)
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * diskSizeGb `string`: Size of the image when restored onto a persistent disk (in GB).
  * family `string`: The name of the image family to which this image belongs. You can create disks by specifying an image family instead of a specific image name. The image family always returns its latest image that is not deprecated. The name of the image family must comply with RFC1035.
  * guestOsFeatures `array`: A list of features to enable on the guest operating system. Applicable only for bootable images. Read  Enabling guest operating system features to see a list of available options.
    * items [GuestOsFeature](#guestosfeature)
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * imageEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * kind `string`: [Output Only] Type of the resource. Always compute#image for images.
  * labelFingerprint `string`: A fingerprint for the labels being applied to this image, which is essentially a hash of the labels used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels.
  * labels `object`: Labels to apply to this image. These can be later modified by the setLabels method.
  * licenses `array`: Any applicable license URI.
    * items `string`
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * rawDisk `object`: The parameters of the raw disk image.
    * containerType `string` (values: TAR): The format used to encode and transmit the block device, which should be TAR. This is just a container and transmission format and not a runtime format. Provided by the client when the disk image is created.
    * sha1Checksum `string`: An optional SHA1 checksum of the disk image before unpackaging; provided by the client when the disk image is created.
    * source `string`: The full Google Cloud Storage URL where the disk image is stored. You must provide either this property or the sourceDisk property but not both.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * sourceDisk `string`: URL of the source disk used to create this image. This can be a full or valid partial URL. You must provide either this property or the rawDisk.source property but not both to create an image. For example, the following are valid values:  
  * sourceDiskEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * sourceDiskId `string`: The ID value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given disk name.
  * sourceImage `string`: URL of the source image used to create this image. This can be a full or valid partial URL. You must provide exactly one of:  
  * sourceImageEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * sourceImageId `string`: [Output Only] The ID value of the image used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given image name.
  * sourceType `string` (values: RAW): The type of the image used to create this disk. The default and only value is RAW
  * status `string` (values: FAILED, PENDING, READY): [Output Only] The status of the image. An image can be used to create other resources, such as instances, only after the image has been successfully created and the status is set to READY. Possible values are FAILED, PENDING, or READY.

### ImageList
* ImageList `object`: Contains a list of images.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Image resources.
    * items [Image](#image)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### Instance
* Instance `object`: An Instance resource. (== resource_for beta.instances ==) (== resource_for v1.instances ==)
  * canIpForward `boolean`: Allows this instance to send and receive packets with non-matching destination or source IPs. This is required if you plan to use this instance to forward routes. For more information, see Enabling IP Forwarding.
  * cpuPlatform `string`: [Output Only] The CPU platform used by this instance.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * deletionProtection `boolean`: Whether the resource should be protected against deletion.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * disks `array`: Array of disks associated with this instance. Persistent disks must be created before you can assign them.
    * items [AttachedDisk](#attacheddisk)
  * guestAccelerators `array`: List of the type and count of accelerator cards attached to the instance.
    * items [AcceleratorConfig](#acceleratorconfig)
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#instance for instances.
  * labelFingerprint `string`: A fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
  * labels `object`: Labels to apply to this instance. These can be later modified by the setLabels method.
  * machineType `string`: Full or partial URL of the machine type resource to use for this instance, in the format: zones/zone/machineTypes/machine-type. This is provided by the client when the instance is created. For example, the following is a valid partial url to a predefined machine type:
  * metadata [Metadata](#metadata)
  * minCpuPlatform `string`: Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: "Intel Haswell" or minCpuPlatform: "Intel Sandy Bridge".
  * name `string`: The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * networkInterfaces `array`: An array of network configurations for this instance. These specify how interfaces are configured to interact with other network services, such as connecting to the internet. Multiple interfaces are supported per instance.
    * items [NetworkInterface](#networkinterface)
  * scheduling [Scheduling](#scheduling)
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * serviceAccounts `array`: A list of service accounts, with their specified scopes, authorized for this instance. Only one service account per VM instance is supported.
    * items [ServiceAccount](#serviceaccount)
  * startRestricted `boolean`: [Output Only] Whether a VM has been restricted for start because Compute Engine has detected suspicious activity.
  * status `string` (values: PROVISIONING, RUNNING, STAGING, STOPPED, STOPPING, SUSPENDED, SUSPENDING, TERMINATED): [Output Only] The status of the instance. One of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, STOPPED, SUSPENDING, SUSPENDED, and TERMINATED.
  * statusMessage `string`: [Output Only] An optional, human-readable explanation of the status.
  * tags [Tags](#tags)
  * zone `string`: [Output Only] URL of the zone where the instance resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### InstanceAggregatedList
* InstanceAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of InstancesScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#instanceAggregatedList for aggregated lists of Instance resources.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroup
* InstanceGroup `object`: InstanceGroups (== resource_for beta.instanceGroups ==) (== resource_for v1.instanceGroups ==) (== resource_for beta.regionInstanceGroups ==) (== resource_for v1.regionInstanceGroups ==)
  * creationTimestamp `string`: [Output Only] The creation timestamp for this instance group in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * fingerprint `string`: [Output Only] The fingerprint of the named ports. The system uses this fingerprint to detect conflicts when multiple users change the named ports concurrently.
  * id `string`: [Output Only] A unique identifier for this instance group, generated by the server.
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroup for instance groups.
  * name `string`: The name of the instance group. The name must be 1-63 characters long, and comply with RFC1035.
  * namedPorts `array`: Assigns a name to a port number. For example: {name: "http", port: 80}
    * items [NamedPort](#namedport)
  * network `string`: The URL of the network to which all instances in the instance group belong.
  * region `string`: The URL of the region where the instance group is located (for regional resources).
  * selfLink `string`: [Output Only] The URL for this instance group. The server generates this URL.
  * size `integer`: [Output Only] The total number of instances in the instance group.
  * subnetwork `string`: The URL of the subnetwork to which all instances in the instance group belong.
  * zone `string`: [Output Only] The URL of the zone where the instance group is located (for zonal resources).

### InstanceGroupAggregatedList
* InstanceGroupAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of InstanceGroupsScopedList resources.
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroupAggregatedList for aggregated lists of instance groups.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroupList
* InstanceGroupList `object`: A list of InstanceGroup resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InstanceGroup resources.
    * items [InstanceGroup](#instancegroup)
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroupList for instance group lists.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroupManager
* InstanceGroupManager `object`: An Instance Group Manager resource. (== resource_for beta.instanceGroupManagers ==) (== resource_for v1.instanceGroupManagers ==) (== resource_for beta.regionInstanceGroupManagers ==) (== resource_for v1.regionInstanceGroupManagers ==)
  * baseInstanceName `string`: The base instance name to use for instances in this group. The value must be 1-58 characters long. Instances are named by appending a hyphen and a random four-character string to the base instance name. The base instance name must comply with RFC1035.
  * creationTimestamp `string`: [Output Only] The creation timestamp for this managed instance group in RFC3339 text format.
  * currentActions [InstanceGroupManagerActionsSummary](#instancegroupmanageractionssummary)
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * fingerprint `string`: [Output Only] The fingerprint of the resource data. You can use this optional field for optimistic locking when you update the resource.
  * id `string`: [Output Only] A unique identifier for this resource type. The server generates this identifier.
  * instanceGroup `string`: [Output Only] The URL of the Instance Group resource.
  * instanceTemplate `string`: The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups.
  * name `string`: The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035.
  * namedPorts `array`: Named ports configured for the Instance Groups complementary to this Instance Group Manager.
    * items [NamedPort](#namedport)
  * region `string`: [Output Only] The URL of the region where the managed instance group resides (for regional resources).
  * selfLink `string`: [Output Only] The URL for this managed instance group. The server defines this URL.
  * targetPools `array`: The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
    * items `string`
  * targetSize `integer`: The target number of running instances for this managed instance group. Deleting or abandoning instances reduces this number. Resizing the group changes this number.
  * zone `string`: [Output Only] The URL of the zone where the managed instance group is located (for zonal resources).

### InstanceGroupManagerActionsSummary
* InstanceGroupManagerActionsSummary `object`
  * abandoning `integer`: [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
  * creating `integer`: [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create any of these instances, it tries again until it creates the instance successfully.
  * creatingWithoutRetries `integer`: [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If the group fails to create any of these instances, it decreases the group's targetSize value accordingly.
  * deleting `integer`: [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
  * none `integer`: [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
  * recreating `integer`: [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
  * refreshing `integer`: [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
  * restarting `integer`: [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.

### InstanceGroupManagerAggregatedList
* InstanceGroupManagerAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of InstanceGroupManagersScopedList resources.
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroupManagerAggregatedList for an aggregated list of managed instance groups.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroupManagerList
* InstanceGroupManagerList `object`: [Output Only] A list of managed instance groups.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InstanceGroupManager resources.
    * items [InstanceGroupManager](#instancegroupmanager)
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroupManagersAbandonInstancesRequest
* InstanceGroupManagersAbandonInstancesRequest `object`
  * instances `array`: The URLs of one or more instances to abandon. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
    * items `string`

### InstanceGroupManagersDeleteInstancesRequest
* InstanceGroupManagersDeleteInstancesRequest `object`
  * instances `array`: The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
    * items `string`

### InstanceGroupManagersListManagedInstancesResponse
* InstanceGroupManagersListManagedInstancesResponse `object`
  * managedInstances `array`: [Output Only] The list of instances in the managed instance group.
    * items [ManagedInstance](#managedinstance)

### InstanceGroupManagersRecreateInstancesRequest
* InstanceGroupManagersRecreateInstancesRequest `object`
  * instances `array`: The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
    * items `string`

### InstanceGroupManagersScopedList
* InstanceGroupManagersScopedList `object`
  * instanceGroupManagers `array`: [Output Only] The list of managed instance groups that are contained in the specified project and zone.
    * items [InstanceGroupManager](#instancegroupmanager)
  * warning `object`: [Output Only] The warning that replaces the list of managed instance groups when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroupManagersSetInstanceTemplateRequest
* InstanceGroupManagersSetInstanceTemplateRequest `object`
  * instanceTemplate `string`: The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.

### InstanceGroupManagersSetTargetPoolsRequest
* InstanceGroupManagersSetTargetPoolsRequest `object`
  * fingerprint `string`: The fingerprint of the target pools information. Use this optional property to prevent conflicts when multiple users change the target pools settings concurrently. Obtain the fingerprint with the instanceGroupManagers.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
  * targetPools `array`: The list of target pool URLs that instances in this managed instance group belong to. The managed instance group applies these target pools to all of the instances in the group. Existing instances and new instances in the group all receive these target pool settings.
    * items `string`

### InstanceGroupsAddInstancesRequest
* InstanceGroupsAddInstancesRequest `object`
  * instances `array`: The list of instances to add to the instance group.
    * items [InstanceReference](#instancereference)

### InstanceGroupsListInstances
* InstanceGroupsListInstances `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InstanceWithNamedPorts resources.
    * items [InstanceWithNamedPorts](#instancewithnamedports)
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroupsListInstances for the list of instances in the specified instance group.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroupsListInstancesRequest
* InstanceGroupsListInstancesRequest `object`
  * instanceState `string` (values: ALL, RUNNING): A filter for the state of the instances in the instance group. Valid options are ALL or RUNNING. If you do not specify this parameter the list includes all instances regardless of their state.

### InstanceGroupsRemoveInstancesRequest
* InstanceGroupsRemoveInstancesRequest `object`
  * instances `array`: The list of instances to remove from the instance group.
    * items [InstanceReference](#instancereference)

### InstanceGroupsScopedList
* InstanceGroupsScopedList `object`
  * instanceGroups `array`: [Output Only] The list of instance groups that are contained in this scope.
    * items [InstanceGroup](#instancegroup)
  * warning `object`: [Output Only] An informational warning that replaces the list of instance groups when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceGroupsSetNamedPortsRequest
* InstanceGroupsSetNamedPortsRequest `object`
  * fingerprint `string`: The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
  * namedPorts `array`: The list of named ports to set for this instance group.
    * items [NamedPort](#namedport)

### InstanceList
* InstanceList `object`: Contains a list of instances.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Instance resources.
    * items [Instance](#instance)
  * kind `string`: [Output Only] Type of resource. Always compute#instanceList for lists of Instance resources.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceListReferrers
* InstanceListReferrers `object`: Contains a list of instance referrers.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Reference resources.
    * items [Reference](#reference)
  * kind `string`: [Output Only] Type of resource. Always compute#instanceListReferrers for lists of Instance referrers.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceMoveRequest
* InstanceMoveRequest `object`
  * destinationZone `string`: The URL of the destination zone to move the instance. This can be a full or partial URL. For example, the following are all valid URLs to a zone:  
  * targetInstance `string`: The URL of the target instance to move. This can be a full or partial URL. For example, the following are all valid URLs to an instance:  

### InstanceProperties
* InstanceProperties `object`
  * canIpForward `boolean`: Enables instances created based on this template to send packets with source IP addresses other than their own and receive packets with destination IP addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify true. If unsure, leave this set to false. See the Enable IP forwarding documentation for more information.
  * description `string`: An optional text description for the instances that are created from this instance template.
  * disks `array`: An array of disks that are associated with the instances that are created from this template.
    * items [AttachedDisk](#attacheddisk)
  * guestAccelerators `array`: A list of guest accelerator cards' type and count to use for instances created from the instance template.
    * items [AcceleratorConfig](#acceleratorconfig)
  * labels `object`: Labels to apply to instances that are created from this template.
  * machineType `string`: The machine type to use for instances that are created from this template.
  * metadata [Metadata](#metadata)
  * minCpuPlatform `string`: Minimum cpu/platform to be used by this instance. The instance may be scheduled on the specified or newer cpu/platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: "Intel Haswell" or minCpuPlatform: "Intel Sandy Bridge". For more information, read Specifying a Minimum CPU Platform.
  * networkInterfaces `array`: An array of network access configurations for this interface.
    * items [NetworkInterface](#networkinterface)
  * scheduling [Scheduling](#scheduling)
  * serviceAccounts `array`: A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from this template. Use metadata queries to obtain the access tokens for these instances.
    * items [ServiceAccount](#serviceaccount)
  * tags [Tags](#tags)

### InstanceReference
* InstanceReference `object`
  * instance `string`: The URL for a specific instance.

### InstanceTemplate
* InstanceTemplate `object`: An Instance Template resource. (== resource_for beta.instanceTemplates ==) (== resource_for v1.instanceTemplates ==)
  * creationTimestamp `string`: [Output Only] The creation timestamp for this instance template in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] A unique identifier for this instance template. The server defines this identifier.
  * kind `string`: [Output Only] The resource type, which is always compute#instanceTemplate for instance templates.
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * properties [InstanceProperties](#instanceproperties)
  * selfLink `string`: [Output Only] The URL for this instance template. The server defines this URL.

### InstanceTemplateList
* InstanceTemplateList `object`: A list of instance templates.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InstanceTemplate resources.
    * items [InstanceTemplate](#instancetemplate)
  * kind `string`: [Output Only] The resource type, which is always compute#instanceTemplatesListResponse for instance template lists.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstanceWithNamedPorts
* InstanceWithNamedPorts `object`
  * instance `string`: [Output Only] The URL of the instance.
  * namedPorts `array`: [Output Only] The named ports that belong to this instance group.
    * items [NamedPort](#namedport)
  * status `string` (values: PROVISIONING, RUNNING, STAGING, STOPPED, STOPPING, SUSPENDED, SUSPENDING, TERMINATED): [Output Only] The status of the instance.

### InstancesScopedList
* InstancesScopedList `object`
  * instances `array`: [Output Only] List of instances contained in this scope.
    * items [Instance](#instance)
  * warning `object`: [Output Only] Informational warning which replaces the list of instances when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InstancesSetLabelsRequest
* InstancesSetLabelsRequest `object`
  * labelFingerprint `string`: Fingerprint of the previous set of labels for this resource, used to prevent conflicts. Provide the latest fingerprint value when making a request to add or change labels.
  * labels `object`

### InstancesSetMachineResourcesRequest
* InstancesSetMachineResourcesRequest `object`
  * guestAccelerators `array`: List of the type and count of accelerator cards attached to the instance.
    * items [AcceleratorConfig](#acceleratorconfig)

### InstancesSetMachineTypeRequest
* InstancesSetMachineTypeRequest `object`
  * machineType `string`: Full or partial URL of the machine type resource. See Machine Types for a full list of machine types. For example: zones/us-central1-f/machineTypes/n1-standard-1

### InstancesSetMinCpuPlatformRequest
* InstancesSetMinCpuPlatformRequest `object`
  * minCpuPlatform `string`: Minimum cpu/platform this instance should be started at.

### InstancesSetServiceAccountRequest
* InstancesSetServiceAccountRequest `object`
  * email `string`: Email address of the service account.
  * scopes `array`: The list of scopes to be made available for this service account.
    * items `string`

### InstancesStartWithEncryptionKeyRequest
* InstancesStartWithEncryptionKeyRequest `object`
  * disks `array`: Array of disks associated with this instance that are protected with a customer-supplied encryption key.
    * items [CustomerEncryptionKeyProtectedDisk](#customerencryptionkeyprotecteddisk)

### Interconnect
* Interconnect `object`: Represents an Interconnects resource. The Interconnects resource is a dedicated connection between Google's network and your on-premises network. For more information, see the  Dedicated overview page. (== resource_for v1.interconnects ==) (== resource_for beta.interconnects ==)
  * adminEnabled `boolean`: Administrative status of the interconnect. When this is set to true, the Interconnect is functional and can carry traffic. When set to false, no packets can be carried over the interconnect and no BGP routes are exchanged over it. By default, the status is set to true.
  * circuitInfos `array`: [Output Only] List of CircuitInfo objects, that describe the individual circuits in this LAG.
    * items [InterconnectCircuitInfo](#interconnectcircuitinfo)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * customerName `string`: Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * expectedOutages `array`: [Output Only] List of outages expected for this Interconnect.
    * items [InterconnectOutageNotification](#interconnectoutagenotification)
  * googleIpAddress `string`: [Output Only] IP address configured on the Google side of the Interconnect link. This can be used only for ping tests.
  * googleReferenceId `string`: [Output Only] Google reference ID; to be used when raising support tickets with Google or otherwise to debug backend connectivity issues.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * interconnectAttachments `array`: [Output Only] A list of the URLs of all InterconnectAttachments configured to use this Interconnect.
    * items `string`
  * interconnectType `string` (values: DEDICATED, IT_PRIVATE): Type of interconnect. Note that "IT_PRIVATE" has been deprecated in favor of "DEDICATED"
  * kind `string`: [Output Only] Type of the resource. Always compute#interconnect for interconnects.
  * linkType `string` (values: LINK_TYPE_ETHERNET_10G_LR): Type of link requested. This field indicates speed of each of the links in the bundle, not the entire bundle. Only 10G per link is allowed for a dedicated interconnect. Options: Ethernet_10G_LR
  * location `string`: URL of the InterconnectLocation object that represents where this connection is to be provisioned.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * nocContactEmail `string`: Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. If specified, this will be used for notifications in addition to all other forms described, such as Stackdriver logs alerting and Cloud Notifications.
  * operationalStatus `string` (values: OS_ACTIVE, OS_UNPROVISIONED): [Output Only] The current status of whether or not this Interconnect is functional.
  * peerIpAddress `string`: [Output Only] IP address configured on the customer side of the Interconnect link. The customer should configure this IP address during turnup when prompted by Google NOC. This can be used only for ping tests.
  * provisionedLinkCount `integer`: [Output Only] Number of links actually provisioned in this interconnect.
  * requestedLinkCount `integer`: Target number of physical links in the link bundle, as requested by the customer.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.

### InterconnectAttachment
* InterconnectAttachment `object`: Represents an InterconnectAttachment (VLAN attachment) resource. For more information, see  Creating VLAN Attachments. (== resource_for beta.interconnectAttachments ==) (== resource_for v1.interconnectAttachments ==)
  * cloudRouterIpAddress `string`: [Output Only] IPv4 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * customerRouterIpAddress `string`: [Output Only] IPv4 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.
  * description `string`: An optional description of this resource.
  * googleReferenceId `string`: [Output Only] Google reference ID, to be used when raising support tickets with Google or otherwise to debug backend connectivity issues.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * interconnect `string`: URL of the underlying Interconnect object that this attachment's traffic will traverse through.
  * kind `string`: [Output Only] Type of the resource. Always compute#interconnectAttachment for interconnect attachments.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * operationalStatus `string` (values: OS_ACTIVE, OS_UNPROVISIONED): [Output Only] The current status of whether or not this interconnect attachment is functional.
  * privateInterconnectInfo [InterconnectAttachmentPrivateInfo](#interconnectattachmentprivateinfo)
  * region `string`: [Output Only] URL of the region where the regional interconnect attachment resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  * router `string`: URL of the cloud router to be used for dynamic routing. This router must be in the same region as this InterconnectAttachment. The InterconnectAttachment will automatically connect the Interconnect to the network & region within which the Cloud Router is configured.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.

### InterconnectAttachmentAggregatedList
* InterconnectAttachmentAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of InterconnectAttachmentsScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#interconnectAttachmentAggregatedList for aggregated lists of interconnect attachments.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InterconnectAttachmentList
* InterconnectAttachmentList `object`: Response to the list request, and contains a list of interconnect attachments.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InterconnectAttachment resources.
    * items [InterconnectAttachment](#interconnectattachment)
  * kind `string`: [Output Only] Type of resource. Always compute#interconnectAttachmentList for lists of interconnect attachments.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InterconnectAttachmentPrivateInfo
* InterconnectAttachmentPrivateInfo `object`: Information for an interconnect attachment when this belongs to an interconnect of type DEDICATED.
  * tag8021q `integer`: [Output Only] 802.1q encapsulation tag to be used for traffic between Google and the customer, going to and from this network and region.

### InterconnectAttachmentsScopedList
* InterconnectAttachmentsScopedList `object`
  * interconnectAttachments `array`: List of interconnect attachments contained in this scope.
    * items [InterconnectAttachment](#interconnectattachment)
  * warning `object`: Informational warning which replaces the list of addresses when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InterconnectCircuitInfo
* InterconnectCircuitInfo `object`: Describes a single physical circuit between the Customer and Google. CircuitInfo objects are created by Google, so all fields are output only. Next id: 4
  * customerDemarcId `string`: Customer-side demarc ID for this circuit.
  * googleCircuitId `string`: Google-assigned unique ID for this circuit. Assigned at circuit turn-up.
  * googleDemarcId `string`: Google-side demarc ID for this circuit. Assigned at circuit turn-up and provided by Google to the customer in the LOA.

### InterconnectList
* InterconnectList `object`: Response to the list request, and contains a list of interconnects.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Interconnect resources.
    * items [Interconnect](#interconnect)
  * kind `string`: [Output Only] Type of resource. Always compute#interconnectList for lists of interconnects.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InterconnectLocation
* InterconnectLocation `object`: Represents an InterconnectLocations resource. The InterconnectLocations resource describes the locations where you can connect to Google's networks. For more information, see  Colocation Facilities.
  * address `string`: [Output Only] The postal address of the Point of Presence, each line in the address is separated by a newline character.
  * availabilityZone `string`: [Output Only] Availability zone for this location. Within a metropolitan area (metro), maintenance will not be simultaneously scheduled in more than one availability zone. Example: "zone1" or "zone2".
  * city `string`: [Output Only] Metropolitan area designator that indicates which city an interconnect is located. For example: "Chicago, IL", "Amsterdam, Netherlands".
  * continent `string` (values: AFRICA, ASIA_PAC, C_AFRICA, C_ASIA_PAC, C_EUROPE, C_NORTH_AMERICA, C_SOUTH_AMERICA, EUROPE, NORTH_AMERICA, SOUTH_AMERICA): [Output Only] Continent for this location.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: [Output Only] An optional description of the resource.
  * facilityProvider `string`: [Output Only] The name of the provider for this facility (e.g., EQUINIX).
  * facilityProviderFacilityId `string`: [Output Only] A provider-assigned Identifier for this facility (e.g., Ashburn-DC1).
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#interconnectLocation for interconnect locations.
  * name `string`: [Output Only] Name of the resource.
  * peeringdbFacilityId `string`: [Output Only] The peeringdb identifier for this facility (corresponding with a netfac type in peeringdb).
  * regionInfos `array`: [Output Only] A list of InterconnectLocation.RegionInfo objects, that describe parameters pertaining to the relation between this InterconnectLocation and various Google Cloud regions.
    * items [InterconnectLocationRegionInfo](#interconnectlocationregioninfo)
  * selfLink `string`: [Output Only] Server-defined URL for the resource.

### InterconnectLocationList
* InterconnectLocationList `object`: Response to the list request, and contains a list of interconnect locations.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InterconnectLocation resources.
    * items [InterconnectLocation](#interconnectlocation)
  * kind `string`: [Output Only] Type of resource. Always compute#interconnectLocationList for lists of interconnect locations.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### InterconnectLocationRegionInfo
* InterconnectLocationRegionInfo `object`: Information about any potential InterconnectAttachments between an Interconnect at a specific InterconnectLocation, and a specific Cloud Region.
  * expectedRttMs `string`: Expected round-trip time in milliseconds, from this InterconnectLocation to a VM in this region.
  * locationPresence `string` (values: GLOBAL, LOCAL_REGION, LP_GLOBAL, LP_LOCAL_REGION): Identifies the network presence of this location.
  * region `string`: URL for the region of this location.

### InterconnectOutageNotification
* InterconnectOutageNotification `object`: Description of a planned outage on this Interconnect. Next id: 9
  * affectedCircuits `array`: Iff issue_type is IT_PARTIAL_OUTAGE, a list of the Google-side circuit IDs that will be affected.
    * items `string`
  * description `string`: A description about the purpose of the outage.
  * endTime `string`: Scheduled end time for the outage (milliseconds since Unix epoch).
  * issueType `string` (values: IT_OUTAGE, IT_PARTIAL_OUTAGE, OUTAGE, PARTIAL_OUTAGE): Form this outage is expected to take. Note that the "IT_" versions of this enum have been deprecated in favor of the unprefixed values.
  * name `string`: Unique identifier for this outage notification.
  * source `string` (values: GOOGLE, NSRC_GOOGLE): The party that generated this notification. Note that "NSRC_GOOGLE" has been deprecated in favor of "GOOGLE"
  * startTime `string`: Scheduled start time for the outage (milliseconds since Unix epoch).
  * state `string` (values: ACTIVE, CANCELLED, NS_ACTIVE, NS_CANCELED): State of this notification. Note that the "NS_" versions of this enum have been deprecated in favor of the unprefixed values.

### License
* License `object`: A license resource.
  * chargesUseFee `boolean`: [Output Only] Deprecated. This field no longer reflects whether a license charges a usage fee.
  * kind `string`: [Output Only] Type of resource. Always compute#license for licenses.
  * name `string`: [Output Only] Name of the resource. The name is 1-63 characters long and complies with RFC1035.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.

### MachineType
* MachineType `object`: A Machine Type resource. (== resource_for v1.machineTypes ==) (== resource_for beta.machineTypes ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * deprecated [DeprecationStatus](#deprecationstatus)
  * description `string`: [Output Only] An optional textual description of the resource.
  * guestCpus `integer`: [Output Only] The number of virtual CPUs that are available to the instance.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * imageSpaceGb `integer`: [Deprecated] This property is deprecated and will never be populated with any relevant values.
  * isSharedCpu `boolean`: [Output Only] Whether this machine type has a shared CPU. See Shared-core machine types for more information.
  * kind `string`: [Output Only] The type of the resource. Always compute#machineType for machine types.
  * maximumPersistentDisks `integer`: [Output Only] Maximum persistent disks allowed.
  * maximumPersistentDisksSizeGb `string`: [Output Only] Maximum total persistent disks size (GB) allowed.
  * memoryMb `integer`: [Output Only] The amount of physical memory available to the instance, defined in MB.
  * name `string`: [Output Only] Name of the resource.
  * scratchDisks `array`: [Output Only] List of extended scratch disks assigned to the instance.
    * items `object`
      * diskGb `integer`: Size of the scratch disk, defined in GB.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * zone `string`: [Output Only] The name of the zone where the machine type resides, such as us-central1-a.

### MachineTypeAggregatedList
* MachineTypeAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of MachineTypesScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#machineTypeAggregatedList for aggregated lists of machine types.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### MachineTypeList
* MachineTypeList `object`: Contains a list of machine types.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of MachineType resources.
    * items [MachineType](#machinetype)
  * kind `string`: [Output Only] Type of resource. Always compute#machineTypeList for lists of machine types.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### MachineTypesScopedList
* MachineTypesScopedList `object`
  * machineTypes `array`: [Output Only] List of machine types contained in this scope.
    * items [MachineType](#machinetype)
  * warning `object`: [Output Only] An informational warning that appears when the machine types list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### ManagedInstance
* ManagedInstance `object`
  * currentAction `string` (values: ABANDONING, CREATING, CREATING_WITHOUT_RETRIES, DELETING, NONE, RECREATING, REFRESHING, RESTARTING): [Output Only] The current action that the managed instance group has scheduled for the instance. Possible values: 
  * id `string`: [Output only] The unique identifier for this resource. This field is empty when instance does not exist.
  * instance `string`: [Output Only] The URL of the instance. The URL can exist even if the instance has not yet been created.
  * instanceStatus `string` (values: PROVISIONING, RUNNING, STAGING, STOPPED, STOPPING, SUSPENDED, SUSPENDING, TERMINATED): [Output Only] The status of the instance. This field is empty when the instance does not exist.
  * lastAttempt [ManagedInstanceLastAttempt](#managedinstancelastattempt)

### ManagedInstanceLastAttempt
* ManagedInstanceLastAttempt `object`
  * errors `object`: [Output Only] Encountered errors during the last attempt to create or delete the instance.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.

### Metadata
* Metadata `object`: A metadata key/value entry.
  * fingerprint `string`: Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
  * items `array`: Array of key/value pairs. The total size of all keys and values must be less than 512 KB.
    * items `object`
      * key `string`: Key for the metadata entry. Keys must conform to the following regexp: [a-zA-Z0-9-_]+, and be less than 128 bytes in length. This is reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project.
      * value `string`: Value for the metadata entry. These are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on values is that their size must be less than or equal to 262144 bytes (256 KiB).
  * kind `string`: [Output Only] Type of the resource. Always compute#metadata for metadata.

### NamedPort
* NamedPort `object`: The named port. For example: .
  * name `string`: The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
  * port `integer`: The port number, which can be a value between 1 and 65535.

### Network
* Network `object`: Represents a Network resource. Read Networks and Firewalls for more information. (== resource_for v1.networks ==) (== resource_for beta.networks ==)
  * IPv4Range `string`: The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16. Provided by the client when the network is created.
  * autoCreateSubnetworks `boolean`: When set to true, the network is created in "auto subnet mode". When set to false, the network is in "custom subnet mode".
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * gatewayIPv4 `string`: A gateway address for default routing to other networks. This value is read only and is selected by the Google Compute Engine, typically as the first usable address in the IPv4Range.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#network for networks.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * peerings `array`: [Output Only] List of network peerings for the resource.
    * items [NetworkPeering](#networkpeering)
  * routingConfig [NetworkRoutingConfig](#networkroutingconfig)
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * subnetworks `array`: [Output Only] Server-defined fully-qualified URLs for all subnetworks in this network.
    * items `string`

### NetworkInterface
* NetworkInterface `object`: A network interface resource attached to an instance.
  * accessConfigs `array`: An array of configurations for this interface. Currently, only one access config, ONE_TO_ONE_NAT, is supported. If there are no accessConfigs specified, then this instance will have no external internet access.
    * items [AccessConfig](#accessconfig)
  * aliasIpRanges `array`: An array of alias IP ranges for this network interface. Can only be specified for network interfaces on subnet-mode networks.
    * items [AliasIpRange](#aliasiprange)
  * kind `string`: [Output Only] Type of the resource. Always compute#networkInterface for network interfaces.
  * name `string`: [Output Only] The name of the network interface, generated by the server. For network devices, these are eth0, eth1, etc.
  * network `string`: URL of the network resource for this instance. When creating an instance, if neither the network nor the subnetwork is specified, the default network global/networks/default is used; if the network is not specified but the subnetwork is specified, the network is inferred.
  * networkIP `string`: An IPv4 internal network address to assign to the instance for this network interface. If not specified by the user, an unused internal IP is assigned by the system.
  * subnetwork `string`: The URL of the Subnetwork resource for this instance. If the network resource is in legacy mode, do not provide this property. If the network is in auto subnet mode, providing the subnetwork is optional. If the network is in custom subnet mode, then this field should be specified. If you specify this property, you can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs:  

### NetworkList
* NetworkList `object`: Contains a list of networks.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Network resources.
    * items [Network](#network)
  * kind `string`: [Output Only] Type of resource. Always compute#networkList for lists of networks.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### NetworkPeering
* NetworkPeering `object`: A network peering attached to a network resource. The message includes the peering name, peer network, peering state, and a flag indicating whether Google Compute Engine should automatically create routes for the peering.
  * autoCreateRoutes `boolean`: Whether full mesh connectivity is created and managed automatically. When it is set to true, Google Compute Engine will automatically create and manage the routes between two networks when the state is ACTIVE. Otherwise, user needs to create routes manually to route packets to peer network.
  * name `string`: Name of this peering. Provided by the client when the peering is created. The name must comply with RFC1035. Specifically, the name must be 1-63 characters long and match regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all the following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * network `string`: The URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not contain project, it is assumed that the peer network is in the same project as the current network.
  * state `string` (values: ACTIVE, INACTIVE): [Output Only] State for the peering.
  * stateDetails `string`: [Output Only] Details about the current state of the peering.

### NetworkRoutingConfig
* NetworkRoutingConfig `object`: A routing configuration attached to a network resource. The message includes the list of routers associated with the network, and a flag indicating the type of routing behavior to enforce network-wide.
  * routingMode `string` (values: GLOBAL, REGIONAL): The network-wide routing mode to use. If set to REGIONAL, this network's cloud routers will only advertise routes with subnetworks of this network in the same region as the router. If set to GLOBAL, this network's cloud routers will advertise routes with all subnetworks of this network, across regions.

### NetworksAddPeeringRequest
* NetworksAddPeeringRequest `object`
  * autoCreateRoutes `boolean`: Whether Google Compute Engine manages the routes automatically.
  * name `string`: Name of the peering, which should conform to RFC1035.
  * peerNetwork `string`: URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not contain project, it is assumed that the peer network is in the same project as the current network.

### NetworksRemovePeeringRequest
* NetworksRemovePeeringRequest `object`
  * name `string`: Name of the peering, which should conform to RFC1035.

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
  * status `string` (values: DONE, PENDING, RUNNING): [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the operation.
  * targetId `string`: [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
  * targetLink `string`: [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
  * user `string`: [Output Only] User who requested the operation, for example: user@example.com.
  * warnings `array`: [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
    * items `object`
      * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.
  * zone `string`: [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### OperationAggregatedList
* OperationAggregatedList `object`
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * items `object`: [Output Only] A map of scoped operation lists.
  * kind `string`: [Output Only] Type of resource. Always compute#operationAggregatedList for aggregated lists of operations.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### OperationList
* OperationList `object`: Contains a list of Operation resources.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * items `array`: [Output Only] A list of Operation resources.
    * items [Operation](#operation)
  * kind `string`: [Output Only] Type of resource. Always compute#operations for Operations resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### OperationsScopedList
* OperationsScopedList `object`
  * operations `array`: [Output Only] List of operations contained in this scope.
    * items [Operation](#operation)
  * warning `object`: [Output Only] Informational warning which replaces the list of operations when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### PathMatcher
* PathMatcher `object`: A matcher for the path portion of the URL. The BackendService from the longest-matched rule will serve the URL. If no rule was matched, the default service will be used.
  * defaultService `string`: The full or partial URL to the BackendService resource. This will be used if none of the pathRules defined by this PathMatcher is matched by the URL's path portion. For example, the following are all valid URLs to a BackendService resource:  
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * name `string`: The name to which this PathMatcher is referred by the HostRule.
  * pathRules `array`: The list of path rules.
    * items [PathRule](#pathrule)

### PathRule
* PathRule `object`: A path-matching rule for a URL. If matched, will use the specified BackendService to handle the traffic arriving at this URL.
  * paths `array`: The list of path patterns to match. Each must start with / and the only place a * is allowed is at the end following a /. The string fed to the path matcher does not include any text after the first ? or #, and those chars are not allowed here.
    * items `string`
  * service `string`: The URL of the BackendService resource if this rule is matched.

### Project
* Project `object`: A Project resource. For an overview of projects, see  Cloud Platform Resource Hierarchy. (== resource_for v1.projects ==) (== resource_for beta.projects ==)
  * commonInstanceMetadata [Metadata](#metadata)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * defaultServiceAccount `string`: [Output Only] Default service account used by VMs running in this project.
  * description `string`: An optional textual description of the resource.
  * enabledFeatures `array`: Restricted features enabled for use on this project.
    * items `string`
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server. This is not the project ID, and is just a unique ID used by Compute Engine to identify resources.
  * kind `string`: [Output Only] Type of the resource. Always compute#project for projects.
  * name `string`: The project ID. For example: my-example-project. Use the project ID to make requests to Compute Engine.
  * quotas `array`: [Output Only] Quotas assigned to this project.
    * items [Quota](#quota)
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * usageExportLocation [UsageExportLocation](#usageexportlocation)
  * xpnProjectStatus `string` (values: HOST, UNSPECIFIED_XPN_PROJECT_STATUS): [Output Only] The role this project has in a shared VPC configuration. Currently only HOST projects are differentiated.

### ProjectsDisableXpnResourceRequest
* ProjectsDisableXpnResourceRequest `object`
  * xpnResource [XpnResourceId](#xpnresourceid)

### ProjectsEnableXpnResourceRequest
* ProjectsEnableXpnResourceRequest `object`
  * xpnResource [XpnResourceId](#xpnresourceid)

### ProjectsGetXpnResources
* ProjectsGetXpnResources `object`
  * kind `string`: [Output Only] Type of resource. Always compute#projectsGetXpnResources for lists of service resources (a.k.a service projects)
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * resources `array`: Service resources (a.k.a service projects) attached to this project as their shared VPC host.
    * items [XpnResourceId](#xpnresourceid)

### ProjectsListXpnHostsRequest
* ProjectsListXpnHostsRequest `object`
  * organization `string`: Optional organization ID managed by Cloud Resource Manager, for which to list shared VPC host projects. If not specified, the organization will be inferred from the project.

### Quota
* Quota `object`: A quotas entry.
  * limit `number`: [Output Only] Quota limit for this metric.
  * metric `string` (values: AUTOSCALERS, BACKEND_BUCKETS, BACKEND_SERVICES, COMMITMENTS, CPUS, CPUS_ALL_REGIONS, DISKS_TOTAL_GB, FIREWALLS, FORWARDING_RULES, HEALTH_CHECKS, IMAGES, INSTANCES, INSTANCE_GROUPS, INSTANCE_GROUP_MANAGERS, INSTANCE_TEMPLATES, INTERCONNECTS, INTERNAL_ADDRESSES, IN_USE_ADDRESSES, LOCAL_SSD_TOTAL_GB, NETWORKS, NVIDIA_K80_GPUS, NVIDIA_P100_GPUS, PREEMPTIBLE_CPUS, PREEMPTIBLE_LOCAL_SSD_GB, PREEMPTIBLE_NVIDIA_K80_GPUS, PREEMPTIBLE_NVIDIA_P100_GPUS, REGIONAL_AUTOSCALERS, REGIONAL_INSTANCE_GROUP_MANAGERS, ROUTERS, ROUTES, SECURITY_POLICIES, SECURITY_POLICY_RULES, SNAPSHOTS, SSD_TOTAL_GB, SSL_CERTIFICATES, STATIC_ADDRESSES, SUBNETWORKS, TARGET_HTTPS_PROXIES, TARGET_HTTP_PROXIES, TARGET_INSTANCES, TARGET_POOLS, TARGET_SSL_PROXIES, TARGET_TCP_PROXIES, TARGET_VPN_GATEWAYS, URL_MAPS, VPN_TUNNELS): [Output Only] Name of the quota metric.
  * usage `number`: [Output Only] Current usage of this metric.

### Reference
* Reference `object`: Represents a reference to a resource.
  * kind `string`: [Output Only] Type of the resource. Always compute#reference for references.
  * referenceType `string`: A description of the reference type with no implied semantics. Possible values include:  
  * referrer `string`: URL of the resource which refers to the target.
  * target `string`: URL of the resource to which this reference points.

### Region
* Region `object`: Region resource. (== resource_for beta.regions ==) (== resource_for v1.regions ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * deprecated [DeprecationStatus](#deprecationstatus)
  * description `string`: [Output Only] Textual description of the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#region for regions.
  * name `string`: [Output Only] Name of the resource.
  * quotas `array`: [Output Only] Quotas assigned to this region.
    * items [Quota](#quota)
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * status `string` (values: DOWN, UP): [Output Only] Status of the region, either UP or DOWN.
  * zones `array`: [Output Only] A list of zones available in this region, in the form of resource URLs.
    * items `string`

### RegionAutoscalerList
* RegionAutoscalerList `object`: Contains a list of autoscalers.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Autoscaler resources.
    * items [Autoscaler](#autoscaler)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### RegionInstanceGroupList
* RegionInstanceGroupList `object`: Contains a list of InstanceGroup resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InstanceGroup resources.
    * items [InstanceGroup](#instancegroup)
  * kind `string`: The resource type.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### RegionInstanceGroupManagerList
* RegionInstanceGroupManagerList `object`: Contains a list of managed instance groups.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InstanceGroupManager resources.
    * items [InstanceGroupManager](#instancegroupmanager)
  * kind `string`: [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups that exist in th regional scope.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### RegionInstanceGroupManagersAbandonInstancesRequest
* RegionInstanceGroupManagersAbandonInstancesRequest `object`
  * instances `array`: The URLs of one or more instances to abandon. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
    * items `string`

### RegionInstanceGroupManagersDeleteInstancesRequest
* RegionInstanceGroupManagersDeleteInstancesRequest `object`
  * instances `array`: The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
    * items `string`

### RegionInstanceGroupManagersListInstancesResponse
* RegionInstanceGroupManagersListInstancesResponse `object`
  * managedInstances `array`: List of managed instances.
    * items [ManagedInstance](#managedinstance)

### RegionInstanceGroupManagersRecreateRequest
* RegionInstanceGroupManagersRecreateRequest `object`
  * instances `array`: The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
    * items `string`

### RegionInstanceGroupManagersSetTargetPoolsRequest
* RegionInstanceGroupManagersSetTargetPoolsRequest `object`
  * fingerprint `string`: Fingerprint of the target pools information, which is a hash of the contents. This field is used for optimistic locking when you update the target pool entries. This field is optional.
  * targetPools `array`: The URL of all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
    * items `string`

### RegionInstanceGroupManagersSetTemplateRequest
* RegionInstanceGroupManagersSetTemplateRequest `object`
  * instanceTemplate `string`: URL of the InstanceTemplate resource from which all new instances will be created.

### RegionInstanceGroupsListInstances
* RegionInstanceGroupsListInstances `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of InstanceWithNamedPorts resources.
    * items [InstanceWithNamedPorts](#instancewithnamedports)
  * kind `string`: The resource type.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### RegionInstanceGroupsListInstancesRequest
* RegionInstanceGroupsListInstancesRequest `object`
  * instanceState `string` (values: ALL, RUNNING): Instances in which state should be returned. Valid options are: 'ALL', 'RUNNING'. By default, it lists all instances.
  * portName `string`: Name of port user is interested in. It is optional. If it is set, only information about this ports will be returned. If it is not set, all the named ports will be returned. Always lists all instances.

### RegionInstanceGroupsSetNamedPortsRequest
* RegionInstanceGroupsSetNamedPortsRequest `object`
  * fingerprint `string`: The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
  * namedPorts `array`: The list of named ports to set for this instance group.
    * items [NamedPort](#namedport)

### RegionList
* RegionList `object`: Contains a list of region resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Region resources.
    * items [Region](#region)
  * kind `string`: [Output Only] Type of resource. Always compute#regionList for lists of regions.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### ResourceCommitment
* ResourceCommitment `object`: Commitment for a particular resource (a Commitment is composed of one or more of these).
  * amount `string`: The amount of the resource purchased (in a type-dependent unit, such as bytes). For vCPUs, this can just be an integer. For memory, this must be provided in MB. Memory must be a multiple of 256 MB, with up to 6.5GB of memory per every vCPU.
  * type `string` (values: MEMORY, UNSPECIFIED, VCPU): Type of resource for which this commitment applies. Possible values are VCPU and MEMORY

### ResourceGroupReference
* ResourceGroupReference `object`
  * group `string`: A URI referencing one of the instance groups listed in the backend service.

### Route
* Route `object`: Represents a Route resource. A route specifies how certain packets should be handled by the network. Routes are associated with instances by tags and the set of routes for a particular instance is called its routing table.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * destRange `string`: The destination range of outgoing packets that this route applies to. Only IPv4 is supported.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of this resource. Always compute#routes for Route resources.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * network `string`: Fully-qualified URL of the network that this route applies to.
  * nextHopGateway `string`: The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL:  projects/<project-id>/global/gateways/default-internet-gateway
  * nextHopInstance `string`: The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example:
  * nextHopIp `string`: The network IP address of an instance that should handle matching packets. Only IPv4 is supported.
  * nextHopNetwork `string`: The URL of the local network if it should handle matching packets.
  * nextHopPeering `string`: [Output Only] The network peering name that should handle matching packets, which should conform to RFC1035.
  * nextHopVpnTunnel `string`: The URL to a VpnTunnel that should handle matching packets.
  * priority `integer`: The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In the case of two routes with equal prefix length, the one with the lowest-numbered priority value wins. Default value is 1000. Valid range is 0 through 65535.
  * selfLink `string`: [Output Only] Server-defined fully-qualified URL for this resource.
  * tags `array`: A list of instance tags to which this route applies.
    * items `string`
  * warnings `array`: [Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.
    * items `object`
      * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.

### RouteList
* RouteList `object`: Contains a list of Route resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Route resources.
    * items [Route](#route)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### Router
* Router `object`: Router resource.
  * bgp [RouterBgp](#routerbgp)
  * bgpPeers `array`: BGP information that needs to be configured into the routing stack to establish the BGP peering. It must specify peer ASN and either interface name, IP, or peer IP. Please refer to RFC4273.
    * items [RouterBgpPeer](#routerbgppeer)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * interfaces `array`: Router interfaces. Each interface requires either one linked resource (e.g. linkedVpnTunnel), or IP address and IP address range (e.g. ipRange), or both.
    * items [RouterInterface](#routerinterface)
  * kind `string`: [Output Only] Type of resource. Always compute#router for routers.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * network `string`: URI of the network to which this router belongs.
  * region `string`: [Output Only] URI of the region where the router resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.

### RouterAggregatedList
* RouterAggregatedList `object`: Contains a list of routers.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of Router resources.
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### RouterBgp
* RouterBgp `object`
  * asn `integer`: Local BGP Autonomous System Number (ASN). Must be an RFC6996 private ASN, either 16-bit or 32-bit. The value will be fixed for this router resource. All VPN tunnels that link to this router will have the same local ASN.

### RouterBgpPeer
* RouterBgpPeer `object`
  * advertisedRoutePriority `integer`: The priority of routes advertised to this BGP peer. In the case where there is more than one matching route of maximum length, the routes with lowest priority value win.
  * interfaceName `string`: Name of the interface the BGP peer is associated with.
  * ipAddress `string`: IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.
  * name `string`: Name of this BGP peer. The name must be 1-63 characters long and comply with RFC1035.
  * peerAsn `integer`: Peer BGP Autonomous System Number (ASN). For VPN use case, this value can be different for every tunnel.
  * peerIpAddress `string`: IP address of the BGP interface outside Google cloud. Only IPv4 is supported.

### RouterInterface
* RouterInterface `object`
  * ipRange `string`: IP address and range of the interface. The IP range must be in the RFC3927 link-local IP space. The value must be a CIDR-formatted string, for example: 169.254.0.1/30. NOTE: Do not truncate the address as it represents the IP address of the interface.
  * linkedInterconnectAttachment `string`: URI of the linked interconnect attachment. It must be in the same region as the router. Each interface can have at most one linked resource and it could either be a VPN Tunnel or an interconnect attachment.
  * linkedVpnTunnel `string`: URI of the linked VPN tunnel. It must be in the same region as the router. Each interface can have at most one linked resource and it could either be a VPN Tunnel or an interconnect attachment.
  * name `string`: Name of this interface entry. The name must be 1-63 characters long and comply with RFC1035.

### RouterList
* RouterList `object`: Contains a list of Router resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Router resources.
    * items [Router](#router)
  * kind `string`: [Output Only] Type of resource. Always compute#router for routers.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### RouterStatus
* RouterStatus `object`
  * bestRoutes `array`: Best routes for this router's network.
    * items [Route](#route)
  * bestRoutesForRouter `array`: Best routes learned by this router.
    * items [Route](#route)
  * bgpPeerStatus `array`
    * items [RouterStatusBgpPeerStatus](#routerstatusbgppeerstatus)
  * network `string`: URI of the network to which this router belongs.

### RouterStatusBgpPeerStatus
* RouterStatusBgpPeerStatus `object`
  * advertisedRoutes `array`: Routes that were advertised to the remote BGP peer
    * items [Route](#route)
  * ipAddress `string`: IP address of the local BGP interface.
  * linkedVpnTunnel `string`: URL of the VPN tunnel that this BGP peer controls.
  * name `string`: Name of this BGP peer. Unique within the Routers resource.
  * numLearnedRoutes `integer`: Number of routes learned from the remote BGP Peer.
  * peerIpAddress `string`: IP address of the remote BGP interface.
  * state `string`: BGP state as specified in RFC1771.
  * status `string` (values: DOWN, UNKNOWN, UP): Status of the BGP peer: {UP, DOWN}
  * uptime `string`: Time this session has been up. Format: 14 years, 51 weeks, 6 days, 23 hours, 59 minutes, 59 seconds
  * uptimeSeconds `string`: Time this session has been up, in seconds. Format: 145

### RouterStatusResponse
* RouterStatusResponse `object`
  * kind `string`: Type of resource.
  * result [RouterStatus](#routerstatus)

### RoutersPreviewResponse
* RoutersPreviewResponse `object`
  * resource [Router](#router)

### RoutersScopedList
* RoutersScopedList `object`
  * routers `array`: List of routers contained in this scope.
    * items [Router](#router)
  * warning `object`: Informational warning which replaces the list of routers when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### SSLHealthCheck
* SSLHealthCheck `object`
  * port `integer`: The TCP port number for the health check request. The default value is 443. Valid values are 1 through 65535.
  * portName `string`: Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
  * proxyHeader `string` (values: NONE, PROXY_V1): Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
  * request `string`: The application data to send once the SSL connection has been established (default value is empty). If both request and response are empty, the connection establishment alone will indicate health. The request data can only be ASCII.
  * response `string`: The bytes to match against the beginning of the response data. If left empty (the default value), any response will indicate health. The response data can only be ASCII.

### Scheduling
* Scheduling `object`: Sets the scheduling options for an Instance.
  * automaticRestart `boolean`: Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). You can only set the automatic restart option for standard instances. Preemptible instances cannot be automatically restarted.
  * onHostMaintenance `string` (values: MIGRATE, TERMINATE): Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and only possible behavior is TERMINATE. For more information, see Setting Instance Scheduling Options.
  * preemptible `boolean`: Defines whether the instance is preemptible. This can only be set during instance creation, it cannot be set or changed after the instance has been created.

### SerialPortOutput
* SerialPortOutput `object`: An instance's serial console output.
  * contents `string`: [Output Only] The contents of the console output.
  * kind `string`: [Output Only] Type of the resource. Always compute#serialPortOutput for serial port output.
  * next `string`: [Output Only] The position of the next byte of content from the serial console output. Use this value in the next request as the start parameter.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * start `string`: The starting byte position of the output that was returned. This should match the start parameter sent with the request. If the serial console output exceeds the size of the buffer, older output will be overwritten by newer content and the start values will be mismatched.

### ServiceAccount
* ServiceAccount `object`: A service account.
  * email `string`: Email address of the service account.
  * scopes `array`: The list of scopes to be made available for this service account.
    * items `string`

### Snapshot
* Snapshot `object`: A persistent disk snapshot resource. (== resource_for beta.snapshots ==) (== resource_for v1.snapshots ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * diskSizeGb `string`: [Output Only] Size of the snapshot, specified in GB.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#snapshot for Snapshot resources.
  * labelFingerprint `string`: A fingerprint for the labels being applied to this snapshot, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels.
  * labels `object`: Labels to apply to this snapshot. These can be later modified by the setLabels method. Label values may be empty.
  * licenses `array`: [Output Only] A list of public visible licenses that apply to this snapshot. This can be because the original image had licenses attached (such as a Windows image).
    * items `string`
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * snapshotEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * sourceDisk `string`: [Output Only] The source disk used to create this snapshot.
  * sourceDiskEncryptionKey [CustomerEncryptionKey](#customerencryptionkey)
  * sourceDiskId `string`: [Output Only] The ID value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given disk name.
  * status `string` (values: CREATING, DELETING, FAILED, READY, UPLOADING): [Output Only] The status of the snapshot. This can be CREATING, DELETING, FAILED, READY, or UPLOADING.
  * storageBytes `string`: [Output Only] A size of the storage used by the snapshot. As snapshots share storage, this number is expected to change with snapshot creation/deletion.
  * storageBytesStatus `string` (values: UPDATING, UP_TO_DATE): [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.

### SnapshotList
* SnapshotList `object`: Contains a list of Snapshot resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Snapshot resources.
    * items [Snapshot](#snapshot)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### SslCertificate
* SslCertificate `object`: An SslCertificate resource. This resource provides a mechanism to upload an SSL key and certificate to the load balancer to serve secure connections from the user. (== resource_for beta.sslCertificates ==) (== resource_for v1.sslCertificates ==)
  * certificate `string`: A local certificate file. The certificate must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at least one intermediate cert.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#sslCertificate for SSL certificates.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * privateKey `string`: A write-only private key in PEM format. Only insert requests will include this field.
  * selfLink `string`: [Output only] Server-defined URL for the resource.

### SslCertificateList
* SslCertificateList `object`: Contains a list of SslCertificate resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of SslCertificate resources.
    * items [SslCertificate](#sslcertificate)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### Subnetwork
* Subnetwork `object`: A Subnetwork resource. (== resource_for beta.subnetworks ==) (== resource_for v1.subnetworks ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.
  * gatewayAddress `string`: [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * ipCidrRange `string`: The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field can be set only at resource creation time.
  * kind `string`: [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources.
  * name `string`: The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * network `string`: The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. Only networks that are in the distributed mode can have subnetworks. This field can be set only at resource creation time.
  * privateIpGoogleAccess `boolean`: Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time and updated using setPrivateIpGoogleAccess.
  * region `string`: URL of the region where the Subnetwork resides. This field can be set only at resource creation time.
  * secondaryIpRanges `array`: An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. The primary IP of such VM must belong to the primary ipCidrRange of the subnetwork. The alias IPs may belong to either primary or secondary ranges.
    * items [SubnetworkSecondaryRange](#subnetworksecondaryrange)
  * selfLink `string`: [Output Only] Server-defined URL for the resource.

### SubnetworkAggregatedList
* SubnetworkAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of SubnetworksScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#subnetworkAggregatedList for aggregated lists of subnetworks.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### SubnetworkList
* SubnetworkList `object`: Contains a list of Subnetwork resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Subnetwork resources.
    * items [Subnetwork](#subnetwork)
  * kind `string`: [Output Only] Type of resource. Always compute#subnetworkList for lists of subnetworks.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### SubnetworkSecondaryRange
* SubnetworkSecondaryRange `object`: Represents a secondary IP range of a subnetwork.
  * ipCidrRange `string`: The range of IP addresses belonging to this subnetwork secondary range. Provide this property when you create the subnetwork. Ranges must be unique and non-overlapping with all primary and secondary IP ranges within a network. Only IPv4 is supported.
  * rangeName `string`: The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. The name must be 1-63 characters long, and comply with RFC1035. The name must be unique within the subnetwork.

### SubnetworksExpandIpCidrRangeRequest
* SubnetworksExpandIpCidrRangeRequest `object`
  * ipCidrRange `string`: The IP (in CIDR format or netmask) of internal addresses that are legal on this Subnetwork. This range should be disjoint from other subnetworks within this network. This range can only be larger than (i.e. a superset of) the range previously defined before the update.

### SubnetworksScopedList
* SubnetworksScopedList `object`
  * subnetworks `array`: List of subnetworks contained in this scope.
    * items [Subnetwork](#subnetwork)
  * warning `object`: An informational warning that appears when the list of addresses is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### SubnetworksSetPrivateIpGoogleAccessRequest
* SubnetworksSetPrivateIpGoogleAccessRequest `object`
  * privateIpGoogleAccess `boolean`

### TCPHealthCheck
* TCPHealthCheck `object`
  * port `integer`: The TCP port number for the health check request. The default value is 80. Valid values are 1 through 65535.
  * portName `string`: Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
  * proxyHeader `string` (values: NONE, PROXY_V1): Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
  * request `string`: The application data to send once the TCP connection has been established (default value is empty). If both request and response are empty, the connection establishment alone will indicate health. The request data can only be ASCII.
  * response `string`: The bytes to match against the beginning of the response data. If left empty (the default value), any response will indicate health. The response data can only be ASCII.

### Tags
* Tags `object`: A set of instance tags.
  * fingerprint `string`: Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
  * items `array`: An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035.
    * items `string`

### TargetHttpProxy
* TargetHttpProxy `object`: A TargetHttpProxy resource. This resource defines an HTTP proxy. (== resource_for beta.targetHttpProxies ==) (== resource_for v1.targetHttpProxies ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of resource. Always compute#targetHttpProxy for target HTTP proxies.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * urlMap `string`: URL to the UrlMap resource that defines the mapping from URL to the BackendService.

### TargetHttpProxyList
* TargetHttpProxyList `object`: A list of TargetHttpProxy resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of TargetHttpProxy resources.
    * items [TargetHttpProxy](#targethttpproxy)
  * kind `string`: Type of resource. Always compute#targetHttpProxyList for lists of target HTTP proxies.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetHttpsProxiesSetSslCertificatesRequest
* TargetHttpsProxiesSetSslCertificatesRequest `object`
  * sslCertificates `array`: New set of SslCertificate resources to associate with this TargetHttpsProxy resource. Currently exactly one SslCertificate resource must be specified.
    * items `string`

### TargetHttpsProxy
* TargetHttpsProxy `object`: A TargetHttpsProxy resource. This resource defines an HTTPS proxy. (== resource_for beta.targetHttpsProxies ==) (== resource_for v1.targetHttpsProxies ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * sslCertificates `array`: URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. Currently, exactly one SSL certificate must be specified.
    * items `string`
  * urlMap `string`: A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map:  

### TargetHttpsProxyList
* TargetHttpsProxyList `object`: Contains a list of TargetHttpsProxy resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of TargetHttpsProxy resources.
    * items [TargetHttpsProxy](#targethttpsproxy)
  * kind `string`: Type of resource. Always compute#targetHttpsProxyList for lists of target HTTPS proxies.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetInstance
* TargetInstance `object`: A TargetInstance resource. This resource defines an endpoint instance that terminates traffic of certain protocols. (== resource_for beta.targetInstances ==) (== resource_for v1.targetInstances ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * instance `string`: A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs: 
  * kind `string`: [Output Only] The type of the resource. Always compute#targetInstance for target instances.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * natPolicy `string` (values: NO_NAT): NAT option controlling how IPs are NAT'ed to the instance. Currently only NO_NAT (default value) is supported.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * zone `string`: [Output Only] URL of the zone where the target instance resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### TargetInstanceAggregatedList
* TargetInstanceAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of TargetInstance resources.
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetInstanceList
* TargetInstanceList `object`: Contains a list of TargetInstance resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of TargetInstance resources.
    * items [TargetInstance](#targetinstance)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetInstancesScopedList
* TargetInstancesScopedList `object`
  * targetInstances `array`: List of target instances contained in this scope.
    * items [TargetInstance](#targetinstance)
  * warning `object`: Informational warning which replaces the list of addresses when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetPool
* TargetPool `object`: A TargetPool resource. This resource defines a pool of instances, an associated HttpHealthCheck resource, and the fallback target pool. (== resource_for beta.targetPools ==) (== resource_for v1.targetPools ==)
  * backupPool `string`: This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool, and its failoverRatio field is properly set to a value between [0, 1].
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * failoverRatio `number`: This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool (i.e., not as a backup pool to some other target pool). The value of the field must be in [0, 1].
  * healthChecks `array`: The URL of the HttpHealthCheck resource. A member instance in this pool is considered healthy if and only if the health checks pass. An empty list means all member instances will be considered healthy at all times. Only HttpHealthChecks are supported. Only one health check may be specified.
    * items `string`
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * instances `array`: A list of resource URLs to the virtual machine instances serving this pool. They must live in zones contained in the same region as this pool.
    * items `string`
  * kind `string`: [Output Only] Type of the resource. Always compute#targetPool for target pools.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * region `string`: [Output Only] URL of the region where the target pool resides.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * sessionAffinity `string` (values: CLIENT_IP, CLIENT_IP_PORT_PROTO, CLIENT_IP_PROTO, GENERATED_COOKIE, NONE): Sesssion affinity option, must be one of the following values:

### TargetPoolAggregatedList
* TargetPoolAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of TargetPool resources.
  * kind `string`: [Output Only] Type of resource. Always compute#targetPoolAggregatedList for aggregated lists of target pools.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetPoolInstanceHealth
* TargetPoolInstanceHealth `object`
  * healthStatus `array`
    * items [HealthStatus](#healthstatus)
  * kind `string`: [Output Only] Type of resource. Always compute#targetPoolInstanceHealth when checking the health of an instance.

### TargetPoolList
* TargetPoolList `object`: Contains a list of TargetPool resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of TargetPool resources.
    * items [TargetPool](#targetpool)
  * kind `string`: [Output Only] Type of resource. Always compute#targetPoolList for lists of target pools.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetPoolsAddHealthCheckRequest
* TargetPoolsAddHealthCheckRequest `object`
  * healthChecks `array`: The HttpHealthCheck to add to the target pool.
    * items [HealthCheckReference](#healthcheckreference)

### TargetPoolsAddInstanceRequest
* TargetPoolsAddInstanceRequest `object`
  * instances `array`: A full or partial URL to an instance to add to this target pool. This can be a full or partial URL. For example, the following are valid URLs:  
    * items [InstanceReference](#instancereference)

### TargetPoolsRemoveHealthCheckRequest
* TargetPoolsRemoveHealthCheckRequest `object`
  * healthChecks `array`: Health check URL to be removed. This can be a full or valid partial URL. For example, the following are valid URLs:  
    * items [HealthCheckReference](#healthcheckreference)

### TargetPoolsRemoveInstanceRequest
* TargetPoolsRemoveInstanceRequest `object`
  * instances `array`: URLs of the instances to be removed from target pool.
    * items [InstanceReference](#instancereference)

### TargetPoolsScopedList
* TargetPoolsScopedList `object`
  * targetPools `array`: List of target pools contained in this scope.
    * items [TargetPool](#targetpool)
  * warning `object`: Informational warning which replaces the list of addresses when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetReference
* TargetReference `object`
  * target `string`

### TargetSslProxiesSetBackendServiceRequest
* TargetSslProxiesSetBackendServiceRequest `object`
  * service `string`: The URL of the new BackendService resource for the targetSslProxy.

### TargetSslProxiesSetProxyHeaderRequest
* TargetSslProxiesSetProxyHeaderRequest `object`
  * proxyHeader `string` (values: NONE, PROXY_V1): The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.

### TargetSslProxiesSetSslCertificatesRequest
* TargetSslProxiesSetSslCertificatesRequest `object`
  * sslCertificates `array`: New set of URLs to SslCertificate resources to associate with this TargetSslProxy. Currently exactly one ssl certificate must be specified.
    * items `string`

### TargetSslProxy
* TargetSslProxy `object`: A TargetSslProxy resource. This resource defines an SSL proxy. (== resource_for beta.targetSslProxies ==) (== resource_for v1.targetSslProxies ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#targetSslProxy for target SSL proxies.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * proxyHeader `string` (values: NONE, PROXY_V1): Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * service `string`: URL to the BackendService resource.
  * sslCertificates `array`: URLs to SslCertificate resources that are used to authenticate connections to Backends. Currently exactly one SSL certificate must be specified.
    * items `string`

### TargetSslProxyList
* TargetSslProxyList `object`: Contains a list of TargetSslProxy resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of TargetSslProxy resources.
    * items [TargetSslProxy](#targetsslproxy)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetTcpProxiesSetBackendServiceRequest
* TargetTcpProxiesSetBackendServiceRequest `object`
  * service `string`: The URL of the new BackendService resource for the targetTcpProxy.

### TargetTcpProxiesSetProxyHeaderRequest
* TargetTcpProxiesSetProxyHeaderRequest `object`
  * proxyHeader `string` (values: NONE, PROXY_V1): The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.

### TargetTcpProxy
* TargetTcpProxy `object`: A TargetTcpProxy resource. This resource defines a TCP proxy. (== resource_for beta.targetTcpProxies ==) (== resource_for v1.targetTcpProxies ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#targetTcpProxy for target TCP proxies.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * proxyHeader `string` (values: NONE, PROXY_V1): Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * service `string`: URL to the BackendService resource.

### TargetTcpProxyList
* TargetTcpProxyList `object`: Contains a list of TargetTcpProxy resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of TargetTcpProxy resources.
    * items [TargetTcpProxy](#targettcpproxy)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetVpnGateway
* TargetVpnGateway `object`: Represents a Target VPN gateway resource. (== resource_for beta.targetVpnGateways ==) (== resource_for v1.targetVpnGateways ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * forwardingRules `array`: [Output Only] A list of URLs to the ForwardingRule resources. ForwardingRules are created using compute.forwardingRules.insert and associated to a VPN gateway.
    * items `string`
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * network `string`: URL of the network to which this VPN gateway is attached. Provided by the client when the VPN gateway is created.
  * region `string`: [Output Only] URL of the region where the target VPN gateway resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * status `string` (values: CREATING, DELETING, FAILED, READY): [Output Only] The status of the VPN gateway.
  * tunnels `array`: [Output Only] A list of URLs to VpnTunnel resources. VpnTunnels are created using compute.vpntunnels.insert method and associated to a VPN gateway.
    * items `string`

### TargetVpnGatewayAggregatedList
* TargetVpnGatewayAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of TargetVpnGateway resources.
  * kind `string`: [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetVpnGatewayList
* TargetVpnGatewayList `object`: Contains a list of TargetVpnGateway resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of TargetVpnGateway resources.
    * items [TargetVpnGateway](#targetvpngateway)
  * kind `string`: [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TargetVpnGatewaysScopedList
* TargetVpnGatewaysScopedList `object`
  * targetVpnGateways `array`: [Output Only] List of target vpn gateways contained in this scope.
    * items [TargetVpnGateway](#targetvpngateway)
  * warning `object`: [Output Only] Informational warning which replaces the list of addresses when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### TestFailure
* TestFailure `object`
  * actualService `string`
  * expectedService `string`
  * host `string`
  * path `string`

### UrlMap
* UrlMap `object`: A UrlMap resource. This resource defines the mapping from URL to the BackendService resource, based on the "longest-match" of the URL's host and path.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * defaultService `string`: The URL of the BackendService resource if none of the hostRules match.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * fingerprint `string`: Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap.
  * hostRules `array`: The list of HostRules to use against the URL.
    * items [HostRule](#hostrule)
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#urlMaps for url maps.
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * pathMatchers `array`: The list of named PathMatchers to use against the URL.
    * items [PathMatcher](#pathmatcher)
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * tests `array`: The list of expected URL mapping tests. Request to update this UrlMap will succeed only if all of the test cases pass. You can specify a maximum of 100 tests per UrlMap.
    * items [UrlMapTest](#urlmaptest)

### UrlMapList
* UrlMapList `object`: Contains a list of UrlMap resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of UrlMap resources.
    * items [UrlMap](#urlmap)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### UrlMapReference
* UrlMapReference `object`
  * urlMap `string`

### UrlMapTest
* UrlMapTest `object`: Message for the expected URL mappings.
  * description `string`: Description of this test case.
  * host `string`: Host portion of the URL.
  * path `string`: Path portion of the URL.
  * service `string`: Expected BackendService resource the given URL should be mapped to.

### UrlMapValidationResult
* UrlMapValidationResult `object`: Message representing the validation result for a UrlMap.
  * loadErrors `array`
    * items `string`
  * loadSucceeded `boolean`: Whether the given UrlMap can be successfully loaded. If false, 'loadErrors' indicates the reasons.
  * testFailures `array`
    * items [TestFailure](#testfailure)
  * testPassed `boolean`: If successfully loaded, this field indicates whether the test passed. If false, 'testFailures's indicate the reason of failure.

### UrlMapsValidateRequest
* UrlMapsValidateRequest `object`
  * resource [UrlMap](#urlmap)

### UrlMapsValidateResponse
* UrlMapsValidateResponse `object`
  * result [UrlMapValidationResult](#urlmapvalidationresult)

### UsageExportLocation
* UsageExportLocation `object`: The location in Cloud Storage and naming method of the daily usage report. Contains bucket_name and report_name prefix.
  * bucketName `string`: The name of an existing bucket in Cloud Storage where the usage report object is stored. The Google Service Account is granted write access to this bucket. This can either be the bucket name by itself, such as example-bucket, or the bucket name with gs:// or https://storage.googleapis.com/ in front of it, such as gs://example-bucket.
  * reportNamePrefix `string`: An optional prefix for the name of the usage report object stored in bucketName. If not supplied, defaults to usage. The report is stored as a CSV file named report_name_prefix_gce_YYYYMMDD.csv where YYYYMMDD is the day of the usage according to Pacific Time. If you supply a prefix, it should conform to Cloud Storage object naming conventions.

### VpnTunnel
* VpnTunnel `object`: VPN tunnel resource. (== resource_for beta.vpnTunnels ==) (== resource_for v1.vpnTunnels ==)
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional description of this resource. Provide this property when you create the resource.
  * detailedStatus `string`: [Output Only] Detailed status message for the VPN tunnel.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * ikeVersion `integer`: IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. Acceptable IKE versions are 1 or 2. Default version is 2.
  * kind `string`: [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
  * localTrafficSelector `array`: Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example: 192.168.0.0/16. The ranges should be disjoint. Only IPv4 is supported.
    * items `string`
  * name `string`: Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * peerIp `string`: IP address of the peer VPN gateway. Only IPv4 is supported.
  * region `string`: [Output Only] URL of the region where the VPN tunnel resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
  * remoteTrafficSelector `array`: Remote traffic selectors to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example: 192.168.0.0/16. The ranges should be disjoint. Only IPv4 is supported.
    * items `string`
  * router `string`: URL of router resource to be used for dynamic routing.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * sharedSecret `string`: Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.
  * sharedSecretHash `string`: Hash of the shared secret.
  * status `string` (values: ALLOCATING_RESOURCES, AUTHORIZATION_ERROR, DEPROVISIONING, ESTABLISHED, FAILED, FIRST_HANDSHAKE, NEGOTIATION_FAILURE, NETWORK_ERROR, NO_INCOMING_PACKETS, PROVISIONING, REJECTED, WAITING_FOR_FULL_CONFIG): [Output Only] The status of the VPN tunnel.
  * targetVpnGateway `string`: URL of the Target VPN gateway with which this VPN tunnel is associated. Provided by the client when the VPN tunnel is created.

### VpnTunnelAggregatedList
* VpnTunnelAggregatedList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `object`: A list of VpnTunnelsScopedList resources.
  * kind `string`: [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### VpnTunnelList
* VpnTunnelList `object`: Contains a list of VpnTunnel resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of VpnTunnel resources.
    * items [VpnTunnel](#vpntunnel)
  * kind `string`: [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### VpnTunnelsScopedList
* VpnTunnelsScopedList `object`
  * vpnTunnels `array`: List of vpn tunnels contained in this scope.
    * items [VpnTunnel](#vpntunnel)
  * warning `object`: Informational warning which replaces the list of addresses when the list is empty.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### XpnHostList
* XpnHostList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: [Output Only] A list of shared VPC host project URLs.
    * items [Project](#project)
  * kind `string`: [Output Only] Type of resource. Always compute#xpnHostList for lists of shared VPC hosts.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### XpnResourceId
* XpnResourceId `object`: Service resource (a.k.a service project) ID.
  * id `string`: The ID of the service resource. In the case of projects, this field matches the project ID (e.g., my-project), not the project number (e.g., 12345678).
  * type `string` (values: PROJECT, XPN_RESOURCE_TYPE_UNSPECIFIED): The type of the service resource.

### Zone
* Zone `object`: A Zone resource. (== resource_for beta.zones ==) (== resource_for v1.zones ==)
  * availableCpuPlatforms `array`: [Output Only] Available cpu/platform selections for the zone.
    * items `string`
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * deprecated [DeprecationStatus](#deprecationstatus)
  * description `string`: [Output Only] Textual description of the resource.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always compute#zone for zones.
  * name `string`: [Output Only] Name of the resource.
  * region `string`: [Output Only] Full URL reference to the region which hosts the zone.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * status `string` (values: DOWN, UP): [Output Only] Status of the zone, either UP or DOWN.

### ZoneList
* ZoneList `object`: Contains a list of zone resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: A list of Zone resources.
    * items [Zone](#zone)
  * kind `string`: Type of resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.
  * warning `object`: [Output Only] Informational warning message.
    * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DEPRECATED_TYPE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, EXPERIMENTAL_TYPE_USED, EXTERNAL_API_WARNING, FIELD_VALUE_OVERRIDEN, INJECTED_KERNELS_DEPRECATED, MISSING_TYPE_DEPENDENCY, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, RESOURCE_NOT_DELETED, SCHEMA_VALIDATION_IGNORED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNDECLARED_PROPERTIES, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
    * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
      * items `object`
        * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
        * value `string`: [Output Only] A warning data value corresponding to the key.
    * message `string`: [Output Only] A human-readable description of the warning code.

### ZoneSetLabelsRequest
* ZoneSetLabelsRequest `object`
  * labelFingerprint `string`: The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels. Make a get() request to the resource to get the latest fingerprint.
  * labels `object`: The labels to set for this resource.


