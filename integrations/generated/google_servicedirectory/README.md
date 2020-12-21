# @datafire/google_servicedirectory

Client library for Service Directory API

## Installation and Usage
```bash
npm install --save @datafire/google_servicedirectory
```
```js
let google_servicedirectory = require('@datafire/google_servicedirectory').create({
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

Service Directory is a platform for discovering, publishing, and connecting services. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_servicedirectory.oauthCallback({
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
google_servicedirectory.oauthRefresh(null, context)
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

### servicedirectory.projects.locations.namespaces.services.endpoints.delete
Deletes a endpoint.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.endpoints.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the endpoint to delete.
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

### servicedirectory.projects.locations.namespaces.services.endpoints.get
Gets a endpoint.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.endpoints.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the endpoint to get.
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
* output [Endpoint](#endpoint)

### servicedirectory.projects.locations.namespaces.services.endpoints.patch
Updates a endpoint.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.endpoints.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Immutable. The resource name for the endpoint in the format 'projects/*/locations/*/namespaces/*/services/*/endpoints/*'.
  * updateMask `string`: Required. List of fields to be updated in this request.
  * body [Endpoint](#endpoint)
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
* output [Endpoint](#endpoint)

### servicedirectory.projects.locations.list
Lists information about the supported locations for this service.


```js
google_servicedirectory.servicedirectory.projects.locations.list({
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

### servicedirectory.projects.locations.namespaces.services.resolve
Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.resolve({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the service to resolve.
  * body [ResolveServiceRequest](#resolveservicerequest)
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
* output [ResolveServiceResponse](#resolveserviceresponse)

### servicedirectory.projects.locations.namespaces.services.endpoints.list
Lists all endpoints.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.endpoints.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the service whose endpoints we'd like to list.
  * filter `string`: Optional. The filter to list result by. General filter string syntax: () can be "name", "address", "port" or "metadata." for map field. can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". must be the same data type as field. can be "AND, OR, NOT". Examples of valid filters: * "metadata.owner" returns Endpoints that have a label with the key "owner" this is the same as "metadata:owner". * "metadata.protocol=gRPC" returns Endpoints that have key/value "protocol=gRPC". * "address=192.108.1.105" returns Endpoints that have this address. * "port>8080" returns Endpoints that have port number larger than 8080. * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/my-service/endpoints/endpoint-c" returns Endpoints that have name that is alphabetically later than the string, so "endpoint-e" will be returned but "endpoint-a" will not be. * "metadata.owner!=sd AND metadata.foo=bar" returns Endpoints that have "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Endpoint doesn't have a field called "doesnotexist". Since the filter does not match any Endpoints, it returns no results.
  * orderBy `string`: Optional. The order to list result by.
  * pageSize `integer`: Optional. The maximum number of items to return.
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
* output [ListEndpointsResponse](#listendpointsresponse)

### servicedirectory.projects.locations.namespaces.services.endpoints.create
Creates a endpoint, and returns the new Endpoint.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.endpoints.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the service that this endpoint provides.
  * endpointId `string`: Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * body [Endpoint](#endpoint)
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
* output [Endpoint](#endpoint)

### servicedirectory.projects.locations.namespaces.list
Lists all namespaces.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the project and location whose namespaces we'd like to list.
  * filter `string`: Optional. The filter to list result by. General filter string syntax: () can be "name", or "labels." for map field. can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". must be the same data type as field. can be "AND, OR, NOT". Examples of valid filters: * "labels.owner" returns Namespaces that have a label with the key "owner" this is the same as "labels:owner". * "labels.protocol=gRPC" returns Namespaces that have key/value "protocol=gRPC". * "name>projects/my-project/locations/us-east/namespaces/namespace-c" returns Namespaces that have name that is alphabetically later than the string, so "namespace-e" will be returned but "namespace-a" will not be. * "labels.owner!=sd AND labels.foo=bar" returns Namespaces that have "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Namespace doesn't have a field called "doesnotexist". Since the filter does not match any Namespaces, it returns no results.
  * orderBy `string`: Optional. The order to list result by. General order by string syntax: () (,) allows values {"name"} ascending or descending order by . If this is left blank, "asc" is used. Note that an empty order_by string result in default order, which is order by name in ascending order.
  * pageSize `integer`: Optional. The maximum number of items to return.
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
* output [ListNamespacesResponse](#listnamespacesresponse)

### servicedirectory.projects.locations.namespaces.create
Creates a namespace, and returns the new Namespace.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the project and location the namespace will be created in.
  * namespaceId `string`: Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * body [Namespace](#namespace)
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
* output [Namespace](#namespace)

### servicedirectory.projects.locations.namespaces.services.list
Lists all services belonging to a namespace.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the namespace whose services we'd like to list.
  * filter `string`: Optional. The filter to list result by. General filter string syntax: () can be "name", or "metadata." for map field. can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". must be the same data type as field. can be "AND, OR, NOT". Examples of valid filters: * "metadata.owner" returns Services that have a label with the key "owner" this is the same as "metadata:owner". * "metadata.protocol=gRPC" returns Services that have key/value "protocol=gRPC". * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/service-c" returns Services that have name that is alphabetically later than the string, so "service-e" will be returned but "service-a" will not be. * "metadata.owner!=sd AND metadata.foo=bar" returns Services that have "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Service doesn't have a field called "doesnotexist". Since the filter does not match any Services, it returns no results.
  * orderBy `string`: Optional. The order to list result by.
  * pageSize `integer`: Optional. The maximum number of items to return.
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
* output [ListServicesResponse](#listservicesresponse)

### servicedirectory.projects.locations.namespaces.services.create
Creates a service, and returns the new Service.


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the namespace this service will belong to.
  * serviceId `string`: Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * body [Service](#service)
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
* output [Service](#service)

### servicedirectory.projects.locations.namespaces.services.getIamPolicy
Gets the IAM Policy for a resource (namespace or service only).


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
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

### servicedirectory.projects.locations.namespaces.services.setIamPolicy
Sets the IAM Policy for a resource (namespace or service only).


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.setIamPolicy({
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

### servicedirectory.projects.locations.namespaces.services.testIamPermissions
Tests IAM permissions for a resource (namespace or service only).


```js
google_servicedirectory.servicedirectory.projects.locations.namespaces.services.testIamPermissions({
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

### Endpoint
* Endpoint `object`: An individual endpoint that provides a service. The service must already exist to create an endpoint.
  * address `string`: Optional. An IPv4 or IPv6 address. Service Directory will reject bad addresses like: "8.8.8" "8.8.8.8:53" "test:bad:address" "[::1]" "[::1]:8080" Limited to 45 characters.
  * metadata `object`: Optional. Metadata for the endpoint. This data can be consumed by service clients. Restrictions: - The entire metadata dictionary may contain up to 512 characters, spread accoss all key-value pairs. Metadata that goes beyond any these limits will be rejected. - Valid metadata keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Metadata that fails to meet these requirements will be rejected. - The '(*.)google.com/' and '(*.)googleapis.com/' prefixes are reserved for system metadata managed by Service Directory. If the user tries to write to these keyspaces, those entries will be silently ignored by the system.
  * name `string`: Immutable. The resource name for the endpoint in the format 'projects/*/locations/*/namespaces/*/services/*/endpoints/*'.
  * port `integer`: Optional. Service Directory will reject values outside of [0, 65535].

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.
  * options [GetPolicyOptions](#getpolicyoptions)

### GetPolicyOptions
* GetPolicyOptions `object`: Encapsulates settings provided to GetIamPolicy.
  * requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### ListEndpointsResponse
* ListEndpointsResponse `object`: The response message for RegistrationService.ListEndpoints.
  * endpoints `array`: The list of endpoints.
    * items [Endpoint](#endpoint)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListNamespacesResponse
* ListNamespacesResponse `object`: The response message for RegistrationService.ListNamespaces.
  * namespaces `array`: The list of namespaces.
    * items [Namespace](#namespace)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListServicesResponse
* ListServicesResponse `object`: The response message for RegistrationService.ListServices.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * services `array`: The list of services.
    * items [Service](#service)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### Namespace
* Namespace `object`: A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
  * labels `object`: Optional. Resource labels associated with this Namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters.
  * name `string`: Immutable. The resource name for the namespace in the format 'projects/*/locations/*/namespaces/*'.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### ResolveServiceRequest
* ResolveServiceRequest `object`: The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
  * endpointFilter `string`: Optional. The filter applied to the endpoints of the resolved service. General filter string syntax: () can be "name" or "metadata." for map field. can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS and is roughly the same as "=". must be the same data type as the field. can be "AND, OR, NOT". Examples of valid filters: * "metadata.owner" returns Endpoints that have a label with the key "owner", this is the same as "metadata:owner" * "metadata.protocol=gRPC" returns Endpoints that have key/value "protocol=gRPC" * "metadata.owner!=sd AND metadata.foo=bar" returns Endpoints that have "owner" field in metadata with a value that is not "sd" AND have the key/value foo=bar.
  * maxEndpoints `integer`: Optional. The maximum number of endpoints to return. Defaults to 25. Maximum is 100. If a value less than one is specified, the Default is used. If a value greater than the Maximum is specified, the Maximum is used.

### ResolveServiceResponse
* ResolveServiceResponse `object`: The response message for LookupService.ResolveService.
  * service [Service](#service)

### Service
* Service `object`: An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
  * endpoints `array`: Output only. Endpoints associated with this service. Returned on LookupService.Resolve. Control plane clients should use RegistrationService.ListEndpoints.
    * items [Endpoint](#endpoint)
  * metadata `object`: Optional. Metadata for the service. This data can be consumed by service clients. Restrictions: - The entire metadata dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Metadata that goes beyond any these limits will be rejected. - Valid metadata keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Metadata that fails to meet these requirements will be rejected. - The '(*.)google.com/' and '(*.)googleapis.com/' prefixes are reserved for system metadata managed by Service Directory. If the user tries to write to these keyspaces, those entries will be silently ignored by the system.
  * name `string`: Immutable. The resource name for the service in the format 'projects/*/locations/*/namespaces/*/services/*'.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`


