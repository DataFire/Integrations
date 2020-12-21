# @datafire/google_resourceviews

Client library for Google Compute Engine Instance Groups

## Installation and Usage
```bash
npm install --save @datafire/google_resourceviews
```
```js
let google_resourceviews = require('@datafire/google_resourceviews').create({
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

The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_resourceviews.oauthCallback({
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
google_resourceviews.oauthRefresh(null, context)
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

### zoneOperations.list
Retrieves the list of operation resources contained within the specified zone.


```js
google_resourceviews.zoneOperations.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Filter expression for filtering listed resources.
  * maxResults `integer`: Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
  * pageToken `string`: Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
  * project **required** `string`: Name of the project scoping this request.
  * zone **required** `string`: Name of the zone scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationList](#operationlist)

### zoneOperations.get
Retrieves the specified zone-specific operation resource.


```js
google_resourceviews.zoneOperations.get({
  "operation": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the operation resource to return.
  * project **required** `string`: Name of the project scoping this request.
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

### zoneViews.list
List resource views.


```js
google_resourceviews.zoneViews.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
  * pageToken `string`: Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
  * project **required** `string`: The project name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ZoneViewsList](#zoneviewslist)

### zoneViews.insert
Create a resource view.


```js
google_resourceviews.zoneViews.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [ResourceView](#resourceview)
  * project **required** `string`: The project name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### zoneViews.delete
Delete a resource view.


```js
google_resourceviews.zoneViews.delete({
  "project": "",
  "resourceView": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project name of the resource view.
  * resourceView **required** `string`: The name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### zoneViews.get
Get the information of a zonal resource view.


```js
google_resourceviews.zoneViews.get({
  "project": "",
  "resourceView": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project name of the resource view.
  * resourceView **required** `string`: The name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ResourceView](#resourceview)

### zoneViews.addResources
Add resources to the view.


```js
google_resourceviews.zoneViews.addResources({
  "project": "",
  "resourceView": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [ZoneViewsAddResourcesRequest](#zoneviewsaddresourcesrequest)
  * project **required** `string`: The project name of the resource view.
  * resourceView **required** `string`: The name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### zoneViews.getService
Get the service information of a resource view or a resource.


```js
google_resourceviews.zoneViews.getService({
  "project": "",
  "resourceView": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project name of the resource view.
  * resourceName `string`: The name of the resource if user wants to get the service information of the resource.
  * resourceView **required** `string`: The name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ZoneViewsGetServiceResponse](#zoneviewsgetserviceresponse)

### zoneViews.removeResources
Remove resources from the view.


```js
google_resourceviews.zoneViews.removeResources({
  "project": "",
  "resourceView": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [ZoneViewsRemoveResourcesRequest](#zoneviewsremoveresourcesrequest)
  * project **required** `string`: The project name of the resource view.
  * resourceView **required** `string`: The name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### zoneViews.listResources
List the resources of the resource view.


```js
google_resourceviews.zoneViews.listResources({
  "project": "",
  "resourceView": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * format `string` (values: NONE, URL, URL_PORT): The requested format of the return value. It can be URL or URL_PORT. A JSON object will be included in the response based on the format. The default format is NONE, which results in no JSON in the response.
  * listState `string` (values: ALL, RUNNING): The state of the instance to list. By default, it lists all instances.
  * maxResults `integer`: Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
  * pageToken `string`: Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
  * project **required** `string`: The project name of the resource view.
  * resourceView **required** `string`: The name of the resource view.
  * serviceName `string`: The service name to return in the response. It is optional and if it is not set, all the service end points will be returned.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ZoneViewsListResourcesResponse](#zoneviewslistresourcesresponse)

### zoneViews.setService
Update the service information of a resource view or a resource.


```js
google_resourceviews.zoneViews.setService({
  "project": "",
  "resourceView": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [ZoneViewsSetServiceRequest](#zoneviewssetservicerequest)
  * project **required** `string`: The project name of the resource view.
  * resourceView **required** `string`: The name of the resource view.
  * zone **required** `string`: The zone name of the resource view.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)



## Definitions

### Label
* Label `object`: The Label to be applied to the resource views.
  * key `string`: Key of the label.
  * value `string`: Value of the label.

### ListResourceResponseItem
* ListResourceResponseItem `object`: The list response item that contains the resource and end points information.
  * endpoints `object`: The list of service end points on the resource.
  * resource `string`: The full URL of the resource.

### Operation
* Operation `object`: An operation resource, used to manage asynchronous API requests.
  * clientOperationId `string`: [Output only] An optional identifier specified by the client when the mutation was initiated. Must be unique for all operation resources in the project.
  * creationTimestamp `string`: [Output Only] The time that this operation was requested, in RFC3339 text format.
  * endTime `string`: [Output Only] The time that this operation was completed, in RFC3339 text format.
  * error `object`: [Output Only] If errors occurred during processing of this operation, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request which caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * httpErrorMessage `string`: [Output only] If operation fails, the HTTP error message returned.
  * httpErrorStatusCode `integer`: [Output only] If operation fails, the HTTP error status code returned.
  * id `string`: [Output Only] Unique identifier for the resource, generated by the server.
  * insertTime `string`: [Output Only] The time that this operation was requested, in RFC3339 text format.
  * kind `string`: [Output only] Type of the resource.
  * name `string`: [Output Only] Name of the resource.
  * operationType `string`: [Output only] Type of the operation. Operations include insert, update, and delete.
  * progress `integer`: [Output only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess at when the operation will be complete. This number should be monotonically increasing as the operation progresses.
  * region `string`: [Output Only] URL of the region where the operation resides. Only available when performing regional operations.
  * selfLink `string`: [Output Only] Server-defined fully-qualified URL for this resource.
  * startTime `string`: [Output Only] The time that this operation was started by the server, in RFC3339 text format.
  * status `string`: [Output Only] Status of the operation.
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the operation.
  * targetId `string`: [Output Only] Unique target ID which identifies a particular incarnation of the target.
  * targetLink `string`: [Output only] URL of the resource the operation is mutating.
  * user `string`: [Output Only] User who requested the operation, for example: user@example.com.
  * warnings `array`: [Output Only] If there are issues with this operation, a warning is returned.
    * items `object`
      * code `string`: [Output only] The warning type identifier for this warning.
      * data `array`: [Output only] Metadata for this warning in key:value format.
        * items `object`
          * key `string`: [Output Only] Metadata key for this warning.
          * value `string`: [Output Only] Metadata value for this warning.
      * message `string`: [Output only] Optional human-readable details for this warning.
  * zone `string`: [Output Only] URL of the zone where the operation resides. Only available when performing per-zone operations.

### OperationList
* OperationList `object`
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * items `array`: The operation resources.
    * items [Operation](#operation)
  * kind `string`: Type of resource.
  * nextPageToken `string`: A token used to continue a truncated list request (output only).
  * selfLink `string`: Server defined URL for this resource (output only).

### ResourceView
* ResourceView `object`: The resource view object.
  * creationTimestamp `string`: The creation time of the resource view.
  * description `string`: The detailed description of the resource view.
  * endpoints `array`: Services endpoint information.
    * items [ServiceEndpoint](#serviceendpoint)
  * fingerprint `string`: The fingerprint of the service endpoint information.
  * id `string`: [Output Only] The ID of the resource view.
  * kind `string`: Type of the resource.
  * labels `array`: The labels for events.
    * items [Label](#label)
  * name `string`: The name of the resource view.
  * network `string`: The URL of a Compute Engine network to which the resources in the view belong.
  * resources `array`: A list of all resources in the resource view.
    * items `string`
  * selfLink `string`: [Output Only] A self-link to the resource view.
  * size `integer`: The total number of resources in the resource view.

### ServiceEndpoint
* ServiceEndpoint `object`: The service endpoint that may be started in a VM.
  * name `string`: The name of the service endpoint.
  * port `integer`: The port of the service endpoint.

### ZoneViewsAddResourcesRequest
* ZoneViewsAddResourcesRequest `object`: The request to add resources to the resource view.
  * resources `array`: The list of resources to be added.
    * items `string`

### ZoneViewsGetServiceResponse
* ZoneViewsGetServiceResponse `object`
  * endpoints `array`: The service information.
    * items [ServiceEndpoint](#serviceendpoint)
  * fingerprint `string`: The fingerprint of the service information.

### ZoneViewsList
* ZoneViewsList `object`: The response to a list request.
  * items `array`: The result that contains all resource views that meet the criteria.
    * items [ResourceView](#resourceview)
  * kind `string`: Type of resource.
  * nextPageToken `string`: A token used for pagination.
  * selfLink `string`: Server defined URL for this resource (output only).

### ZoneViewsListResourcesResponse
* ZoneViewsListResourcesResponse `object`: The response to a list resource request.
  * items `array`: The formatted JSON that is requested by the user.
    * items [ListResourceResponseItem](#listresourceresponseitem)
  * network `string`: The URL of a Compute Engine network to which the resources in the view belong.
  * nextPageToken `string`: A token used for pagination.

### ZoneViewsRemoveResourcesRequest
* ZoneViewsRemoveResourcesRequest `object`: The request to remove resources from the resource view.
  * resources `array`: The list of resources to be removed.
    * items `string`

### ZoneViewsSetServiceRequest
* ZoneViewsSetServiceRequest `object`
  * endpoints `array`: The service information to be updated.
    * items [ServiceEndpoint](#serviceendpoint)
  * fingerprint `string`: Fingerprint of the service information; a hash of the contents. This field is used for optimistic locking when updating the service entries.
  * resourceName `string`: The name of the resource if user wants to update the service information of the resource.


