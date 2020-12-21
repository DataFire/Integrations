# @datafire/google_privateca

Client library for Certificate Authority API

## Installation and Usage
```bash
npm install --save @datafire/google_privateca
```
```js
let google_privateca = require('@datafire/google_privateca').create({
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

The Certificate Authority Service API is a highly-available, scalable service that enables you to simplify and automate the management of private certificate authorities (CAs) while staying in control of your private keys." 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_privateca.oauthCallback({
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
google_privateca.oauthRefresh(null, context)
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

### privateca.projects.locations.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.


```js
google_privateca.privateca.projects.locations.operations.delete({
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

### privateca.projects.locations.reusableConfigs.get
Returns a ReusableConfig.


```js
google_privateca.privateca.projects.locations.reusableConfigs.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the ReusableConfigs to get.
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
* output [ReusableConfig](#reusableconfig)

### privateca.projects.locations.certificateAuthorities.certificates.patch
Update a Certificate. Currently, the only field you can update is the labels field.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.certificates.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The resource path for this Certificate in the format `projects/*/locations/*/certificateAuthorities/*/certificates/*`.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
  * updateMask `string`: Required. A list of fields to be updated in this request.
  * body [Certificate](#certificate)
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
* output [Certificate](#certificate)

### privateca.projects.locations.list
Lists information about the supported locations for this service.


```js
google_privateca.privateca.projects.locations.list({
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

### privateca.projects.locations.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_privateca.privateca.projects.locations.operations.list({
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

### privateca.projects.locations.certificateAuthorities.activate
Activate a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.activate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.
  * body [ActivateCertificateAuthorityRequest](#activatecertificateauthorityrequest)
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

### privateca.projects.locations.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_privateca.privateca.projects.locations.operations.cancel({
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

### privateca.projects.locations.certificateAuthorities.disable
Disable a CertificateAuthority.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.disable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.
  * body [DisableCertificateAuthorityRequest](#disablecertificateauthorityrequest)
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

### privateca.projects.locations.certificateAuthorities.enable
Enable a CertificateAuthority.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.enable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.
  * body [EnableCertificateAuthorityRequest](#enablecertificateauthorityrequest)
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

### privateca.projects.locations.certificateAuthorities.fetch
Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.fetch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.
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
* output [FetchCertificateAuthorityCsrResponse](#fetchcertificateauthoritycsrresponse)

### privateca.projects.locations.certificateAuthorities.restore
Restore a CertificateAuthority that is scheduled for deletion.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.restore({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.
  * body [RestoreCertificateAuthorityRequest](#restorecertificateauthorityrequest)
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

### privateca.projects.locations.certificateAuthorities.certificates.revoke
Revoke a Certificate.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.certificates.revoke({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for this Certificate in the format `projects/*/locations/*/certificateAuthorities/*/certificates/*`.
  * body [RevokeCertificateRequest](#revokecertificaterequest)
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
* output [Certificate](#certificate)

### privateca.projects.locations.certificateAuthorities.scheduleDelete
Schedule a CertificateAuthority for deletion.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.scheduleDelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.
  * body [ScheduleDeleteCertificateAuthorityRequest](#scheduledeletecertificateauthorityrequest)
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

### privateca.projects.locations.certificateAuthorities.list
Lists CertificateAuthorities.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the location associated with the CertificateAuthorities, in the format `projects/*/locations/*`.
  * filter `string`: Optional. Only include resources that match the filter in the response.
  * orderBy `string`: Optional. Specify how the results should be sorted.
  * pageSize `integer`: Optional. Limit on the number of CertificateAuthorities to include in the response. Further CertificateAuthorities can subsequently be obtained by including the ListCertificateAuthoritiesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: Optional. Pagination token, returned earlier via ListCertificateAuthoritiesResponse.next_page_token.
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
* output [ListCertificateAuthoritiesResponse](#listcertificateauthoritiesresponse)

### privateca.projects.locations.certificateAuthorities.create
Create a new CertificateAuthority in a given Project and Location.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the location associated with the CertificateAuthorities, in the format `projects/*/locations/*`.
  * certificateAuthorityId `string`: Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
  * body [CertificateAuthority](#certificateauthority)
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

### privateca.projects.locations.certificateAuthorities.certificateRevocationLists.list
Lists CertificateRevocationLists.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.certificateRevocationLists.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the location associated with the CertificateRevocationLists, in the format `projects/*/locations/*/certificateauthorities/*`.
  * filter `string`: Optional. Only include resources that match the filter in the response.
  * orderBy `string`: Optional. Specify how the results should be sorted.
  * pageSize `integer`: Optional. Limit on the number of CertificateRevocationLists to include in the response. Further CertificateRevocationLists can subsequently be obtained by including the ListCertificateRevocationListsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: Optional. Pagination token, returned earlier via ListCertificateRevocationListsResponse.next_page_token.
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
* output [ListCertificateRevocationListsResponse](#listcertificaterevocationlistsresponse)

### privateca.projects.locations.certificateAuthorities.certificates.list
Lists Certificates.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.certificates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the location associated with the Certificates, in the format `projects/*/locations/*/certificateauthorities/*`.
  * filter `string`: Optional. Only include resources that match the filter in the response. For details on supported filters and syntax, see [Certificates Filtering documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#filtering_support).
  * orderBy `string`: Optional. Specify how the results should be sorted. For details on supported fields and syntax, see [Certificates Sorting documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#sorting_support).
  * pageSize `integer`: Optional. Limit on the number of Certificates to include in the response. Further Certificates can subsequently be obtained by including the ListCertificatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: Optional. Pagination token, returned earlier via ListCertificatesResponse.next_page_token.
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
* output [ListCertificatesResponse](#listcertificatesresponse)

### privateca.projects.locations.certificateAuthorities.certificates.create
Create a new Certificate in a given Project, Location from a particular CertificateAuthority.


```js
google_privateca.privateca.projects.locations.certificateAuthorities.certificates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the location and CertificateAuthority associated with the Certificate, in the format `projects/*/locations/*/certificateAuthorities/*`.
  * certificateId `string`: Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`. This field is required when using a CertificateAuthority in the Enterprise CertificateAuthority.Tier, but is optional and its value is ignored otherwise.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
  * body [Certificate](#certificate)
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
* output [Certificate](#certificate)

### privateca.projects.locations.reusableConfigs.list
Lists ReusableConfigs.


```js
google_privateca.privateca.projects.locations.reusableConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the location associated with the ReusableConfigs, in the format `projects/*/locations/*`.
  * filter `string`: Optional. Only include resources that match the filter in the response.
  * orderBy `string`: Optional. Specify how the results should be sorted.
  * pageSize `integer`: Optional. Limit on the number of ReusableConfigs to include in the response. Further ReusableConfigs can subsequently be obtained by including the ListReusableConfigsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: Optional. Pagination token, returned earlier via ListReusableConfigsResponse.next_page_token.
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
* output [ListReusableConfigsResponse](#listreusableconfigsresponse)

### privateca.projects.locations.reusableConfigs.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_privateca.privateca.projects.locations.reusableConfigs.getIamPolicy({
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

### privateca.projects.locations.reusableConfigs.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.


```js
google_privateca.privateca.projects.locations.reusableConfigs.setIamPolicy({
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

### privateca.projects.locations.reusableConfigs.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_privateca.privateca.projects.locations.reusableConfigs.testIamPermissions({
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

### AccessUrls
* AccessUrls `object`: URLs where a CertificateAuthority will publish content.
  * caCertificateAccessUrl `string`: The URL where this CertificateAuthority's CA certificate is published. This will only be set for CAs that have been activated.
  * crlAccessUrl `string`: The URL where this CertificateAuthority's CRLs are published. This will only be set for CAs that have been activated.

### ActivateCertificateAuthorityRequest
* ActivateCertificateAuthorityRequest `object`: Request message for CertificateAuthorityService.ActivateCertificateAuthority.
  * pemCaCertificate `string`: Required. The signed CA certificate issued from FetchCertificateAuthorityCsrResponse.pem_csr.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
  * subordinateConfig [SubordinateConfig](#subordinateconfig)

### AllowedConfigList
* AllowedConfigList `object`
  * allowedConfigValues `array`: Required. All Certificates issued by the CertificateAuthority must match at least one listed ReusableConfigWrapper. If a ReusableConfigWrapper has an empty field, any value will be allowed for that field.
    * items [ReusableConfigWrapper](#reusableconfigwrapper)

### AllowedSubjectAltNames
* AllowedSubjectAltNames `object`: AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
  * allowCustomSans `boolean`: Optional. Specifies if to allow custom X509Extension values.
  * allowGlobbingDnsWildcards `boolean`: Optional. Specifies if glob patterns used for allowed_dns_names allow wildcard certificates. If this is set, certificate requests with wildcard domains will be permitted to match a glob pattern specified in allowed_dns_names. Otherwise, certificate requests with wildcard domains will be permitted only if allowed_dns_names contains a literal wildcard.
  * allowedDnsNames `array`: Optional. Contains valid, fully-qualified host names. Glob patterns are also supported. To allow an explicit wildcard certificate, escape with backlash (i.e. "\*"). E.g. for globbed entries: '*bar.com' will allow 'foo.bar.com', but not '*.bar.com', unless the allow_globbing_dns_wildcards field is set. E.g. for wildcard entries: '\*.bar.com' will allow '*.bar.com', but not 'foo.bar.com'.
    * items `string`
  * allowedEmailAddresses `array`: Optional. Contains valid RFC 2822 E-mail addresses. Glob patterns are also supported.
    * items `string`
  * allowedIps `array`: Optional. Contains valid 32-bit IPv4 addresses and subnet ranges or RFC 4291 IPv6 addresses and subnet ranges. Subnet ranges are specified using the '/' notation (e.g. 10.0.0.0/8, 2001:700:300:1800::/64). Glob patterns are supported only for ip address entries (i.e. not for subnet ranges).
    * items `string`
  * allowedUris `array`: Optional. Contains valid RFC 3986 URIs. Glob patterns are also supported. To match across path seperators (i.e. '/') use the double star glob pattern (i.e. '**').
    * items `string`

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
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### CaOptions
* CaOptions `object`: Describes values that are relevant in a CA certificate.
  * isCa `boolean`: Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.
  * maxIssuerPathLength `integer`: Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### Certificate
* Certificate `object`: A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
  * certificateDescription [CertificateDescription](#certificatedescription)
  * config [CertificateConfig](#certificateconfig)
  * createTime `string`: Output only. The time at which this Certificate was created.
  * labels `object`: Optional. Labels with user-defined metadata.
  * lifetime `string`: Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain.
  * name `string`: Output only. The resource path for this Certificate in the format `projects/*/locations/*/certificateAuthorities/*/certificates/*`.
  * pemCertificate `string`: Output only. The pem-encoded, signed X.509 certificate.
  * pemCertificateChain `array`: Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.
    * items `string`
  * pemCsr `string`: Immutable. A pem-encoded X.509 certificate signing request (CSR).
  * revocationDetails [RevocationDetails](#revocationdetails)
  * updateTime `string`: Output only. The time at which this Certificate was updated.

### CertificateAuthority
* CertificateAuthority `object`: A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
  * accessUrls [AccessUrls](#accessurls)
  * caCertificateDescriptions `array`: Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.
    * items [CertificateDescription](#certificatedescription)
  * certificatePolicy [CertificateAuthorityPolicy](#certificateauthoritypolicy)
  * config [CertificateConfig](#certificateconfig)
  * createTime `string`: Output only. The time at which this CertificateAuthority was created.
  * deleteTime `string`: Output only. The time at which this CertificateAuthority will be deleted, if scheduled for deletion.
  * gcsBucket `string`: Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
  * issuingOptions [IssuingOptions](#issuingoptions)
  * keySpec [KeyVersionSpec](#keyversionspec)
  * labels `object`: Optional. Labels with user-defined metadata.
  * lifetime `string`: Required. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.
  * name `string`: Output only. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.
  * pemCaCertificates `array`: Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.
    * items `string`
  * state `string` (values: STATE_UNSPECIFIED, ENABLED, DISABLED, PENDING_ACTIVATION, PENDING_DELETION): Output only. The State for this CertificateAuthority.
  * subordinateConfig [SubordinateConfig](#subordinateconfig)
  * tier `string` (values: TIER_UNSPECIFIED, ENTERPRISE, DEVOPS): Required. Immutable. The Tier of this CertificateAuthority.
  * type `string` (values: TYPE_UNSPECIFIED, SELF_SIGNED, SUBORDINATE): Required. Immutable. The Type of this CertificateAuthority.
  * updateTime `string`: Output only. The time at which this CertificateAuthority was updated.

### CertificateAuthorityPolicy
* CertificateAuthorityPolicy `object`: The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
  * allowedCommonNames `array`: Optional. If any value is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed value. If no value is specified, all values will be allowed for this fied. Glob patterns are also supported.
    * items `string`
  * allowedConfigList [AllowedConfigList](#allowedconfiglist)
  * allowedIssuanceModes [IssuanceModes](#issuancemodes)
  * allowedLocationsAndOrganizations `array`: Optional. If any Subject is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed Subject. If a Subject has an empty field, any value will be allowed for that field.
    * items [Subject](#subject)
  * allowedSans [AllowedSubjectAltNames](#allowedsubjectaltnames)
  * maximumLifetime `string`: Optional. The maximum lifetime allowed by the CertificateAuthority. Note that if the any part if the issuing chain expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated.
  * overwriteConfigValues [ReusableConfigWrapper](#reusableconfigwrapper)

### CertificateConfig
* CertificateConfig `object`: A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
  * publicKey [PublicKey](#publickey)
  * reusableConfig [ReusableConfigWrapper](#reusableconfigwrapper)
  * subjectConfig [SubjectConfig](#subjectconfig)

### CertificateDescription
* CertificateDescription `object`: A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
  * aiaIssuingCertificateUrls `array`: Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.
    * items `string`
  * authorityKeyId [KeyId](#keyid)
  * certFingerprint [CertificateFingerprint](#certificatefingerprint)
  * configValues [ReusableConfigValues](#reusableconfigvalues)
  * crlDistributionPoints `array`: Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13
    * items `string`
  * publicKey [PublicKey](#publickey)
  * subjectDescription [SubjectDescription](#subjectdescription)
  * subjectKeyId [KeyId](#keyid)

### CertificateFingerprint
* CertificateFingerprint `object`: A group of fingerprints for the x509 certificate.
  * sha256Hash `string`: The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.

### CertificateRevocationList
* CertificateRevocationList `object`: A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
  * accessUrl `string`: Output only. The location where 'pem_crl' can be accessed.
  * createTime `string`: Output only. The time at which this CertificateRevocationList was created.
  * labels `object`: Optional. Labels with user-defined metadata.
  * name `string`: Output only. The resource path for this CertificateRevocationList in the format `projects/*/locations/*/certificateAuthorities/*/ certificateRevocationLists/*`.
  * pemCrl `string`: Output only. The PEM-encoded X.509 CRL.
  * revokedCertificates `array`: Output only. The revoked serial numbers that appear in pem_crl.
    * items [RevokedCertificate](#revokedcertificate)
  * sequenceNumber `string`: Output only. The CRL sequence number that appears in pem_crl.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, SUPERSEDED): Output only. The State for this CertificateRevocationList.
  * updateTime `string`: Output only. The time at which this CertificateRevocationList was updated.

### DisableCertificateAuthorityRequest
* DisableCertificateAuthorityRequest `object`: Request message for CertificateAuthorityService.DisableCertificateAuthority.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### EnableCertificateAuthorityRequest
* EnableCertificateAuthorityRequest `object`: Request message for CertificateAuthorityService.EnableCertificateAuthority.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### ExtendedKeyUsageOptions
* ExtendedKeyUsageOptions `object`: KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
  * clientAuth `boolean`: Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * codeSigning `boolean`: Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * emailProtection `boolean`: Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * ocspSigning `boolean`: Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * serverAuth `boolean`: Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * timeStamping `boolean`: Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

### FetchCertificateAuthorityCsrResponse
* FetchCertificateAuthorityCsrResponse `object`: Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.
  * pemCsr `string`: Output only. The PEM-encoded signed certificate signing request (CSR).

### IssuanceModes
* IssuanceModes `object`: IssuanceModes specifies the allowed ways in which Certificates may be requested from this CertificateAuthority.
  * allowConfigBasedIssuance `boolean`: Required. When true, allows callers to create Certificates by specifying a CertificateConfig.
  * allowCsrBasedIssuance `boolean`: Required. When true, allows callers to create Certificates by specifying a CSR.

### IssuingOptions
* IssuingOptions `object`: Options that affect all certificates issued by a CertificateAuthority.
  * includeCaCertUrl `boolean`: Required. When true, includes a URL to the issuing CA certificate in the "authority information access" X.509 extension.
  * includeCrlAccessUrl `boolean`: Required. When true, includes a URL to the CRL corresponding to certificates issued from a CertificateAuthority. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.

### KeyId
* KeyId `object`: A KeyId identifies a specific public key, usually by hashing the public key.
  * keyId `string`: Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key.

### KeyUsage
* KeyUsage `object`: A KeyUsage describes key usage values that may appear in an X.509 certificate.
  * baseKeyUsage [KeyUsageOptions](#keyusageoptions)
  * extendedKeyUsage [ExtendedKeyUsageOptions](#extendedkeyusageoptions)
  * unknownExtendedKeyUsages `array`: Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
    * items [ObjectId](#objectid)

### KeyUsageOptions
* KeyUsageOptions `object`: KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
  * certSign `boolean`: The key may be used to sign certificates.
  * contentCommitment `boolean`: The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * crlSign `boolean`: The key may be used sign certificate revocation lists.
  * dataEncipherment `boolean`: The key may be used to encipher data.
  * decipherOnly `boolean`: The key may be used to decipher only.
  * digitalSignature `boolean`: The key may be used for digital signatures.
  * encipherOnly `boolean`: The key may be used to encipher only.
  * keyAgreement `boolean`: The key may be used in a key agreement protocol.
  * keyEncipherment `boolean`: The key may be used to encipher other keys.

### KeyVersionSpec
* KeyVersionSpec `object`: A Cloud KMS key configuration that a CertificateAuthority will use.
  * algorithm `string` (values: SIGN_HASH_ALGORITHM_UNSPECIFIED, RSA_PSS_2048_SHA256, RSA_PSS_3072_SHA256, RSA_PSS_4096_SHA256, RSA_PKCS1_2048_SHA256, RSA_PKCS1_3072_SHA256, RSA_PKCS1_4096_SHA256, EC_P256_SHA256, EC_P384_SHA384): Required. The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`.
  * cloudKmsKeyVersion `string`: Required. The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`. This option enables full flexibility in the key's capabilities and properties.

### ListCertificateAuthoritiesResponse
* ListCertificateAuthoritiesResponse `object`: Response message for CertificateAuthorityService.ListCertificateAuthorities.
  * certificateAuthorities `array`: The list of CertificateAuthorities.
    * items [CertificateAuthority](#certificateauthority)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results.
  * unreachable `array`: A list of locations (e.g. "us-west1") that could not be reached.
    * items `string`

### ListCertificateRevocationListsResponse
* ListCertificateRevocationListsResponse `object`: Response message for CertificateAuthorityService.ListCertificateRevocationLists.
  * certificateRevocationLists `array`: The list of CertificateRevocationLists.
    * items [CertificateRevocationList](#certificaterevocationlist)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.next_page_token to retrieve the next page of results.
  * unreachable `array`: A list of locations (e.g. "us-west1") that could not be reached.
    * items `string`

### ListCertificatesResponse
* ListCertificatesResponse `object`: Response message for CertificateAuthorityService.ListCertificates.
  * certificates `array`: The list of Certificates.
    * items [Certificate](#certificate)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in ListCertificatesRequest.next_page_token to retrieve the next page of results.
  * unreachable `array`: A list of locations (e.g. "us-west1") that could not be reached.
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

### ListReusableConfigsResponse
* ListReusableConfigsResponse `object`: Response message for CertificateAuthorityService.ListReusableConfigs.
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in ListReusableConfigsRequest.next_page_token to retrieve the next page of results.
  * reusableConfigs `array`: The list of ReusableConfigs.
    * items [ReusableConfig](#reusableconfig)
  * unreachable `array`: A list of locations (e.g. "us-west1") that could not be reached.
    * items `string`

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### ObjectId
* ObjectId `object`: An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * objectIdPath `array`: Required. The parts of an OID path. The most significant parts of the path come first.
    * items `integer`

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationMetadata
* OperationMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: Output only. API version used to start the operation.
  * createTime `string`: Output only. The time the operation was created.
  * endTime `string`: Output only. The time the operation finished running.
  * requestedCancellation `boolean`: Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * statusMessage `string`: Output only. Human-readable status of the operation, if any.
  * target `string`: Output only. Server-defined resource path for the target of the operation.
  * verb `string`: Output only. Name of the verb executed by the operation.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### PublicKey
* PublicKey `object`: A PublicKey describes a public key.
  * key `string`: Required. A public key. When this is specified in a request, the padding and encoding can be any of the options described by the respective 'KeyType' value. When this is generated by the service, it will always be an RFC 5280 [SubjectPublicKeyInfo](https://tools.ietf.org/html/rfc5280#section-4.1) structure containing an algorithm identifier and a key.
  * type `string` (values: KEY_TYPE_UNSPECIFIED, PEM_RSA_KEY, PEM_EC_KEY): Optional. The type of public key. If specified, it must match the public key used for the`key` field.

### RestoreCertificateAuthorityRequest
* RestoreCertificateAuthorityRequest `object`: Request message for CertificateAuthorityService.RestoreCertificateAuthority.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### ReusableConfig
* ReusableConfig `object`: A ReusableConfig refers to a managed ReusableConfigValues. Those, in turn, are used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
  * createTime `string`: Output only. The time at which this ReusableConfig was created.
  * description `string`: Optional. A human-readable description of scenarios these ReusableConfigValues may be compatible with.
  * labels `object`: Optional. Labels with user-defined metadata.
  * name `string`: Output only. The resource path for this ReusableConfig in the format `projects/*/locations/*/reusableConfigs/*`.
  * updateTime `string`: Output only. The time at which this ReusableConfig was updated.
  * values [ReusableConfigValues](#reusableconfigvalues)

### ReusableConfigValues
* ReusableConfigValues `object`: A ReusableConfigValues is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
  * additionalExtensions `array`: Optional. Describes custom X.509 extensions.
    * items [X509Extension](#x509extension)
  * aiaOcspServers `array`: Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
    * items `string`
  * caOptions [CaOptions](#caoptions)
  * keyUsage [KeyUsage](#keyusage)
  * policyIds `array`: Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
    * items [ObjectId](#objectid)

### ReusableConfigWrapper
* ReusableConfigWrapper `object`: A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
  * reusableConfig `string`: Required. A resource path to a ReusableConfig in the format `projects/*/locations/*/reusableConfigs/*`.
  * reusableConfigValues [ReusableConfigValues](#reusableconfigvalues)

### RevocationDetails
* RevocationDetails `object`: Describes fields that are relavent to the revocation of a Certificate.
  * revocationState `string` (values: REVOCATION_REASON_UNSPECIFIED, KEY_COMPROMISE, CERTIFICATE_AUTHORITY_COMPROMISE, AFFILIATION_CHANGED, SUPERSEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, PRIVILEGE_WITHDRAWN, ATTRIBUTE_AUTHORITY_COMPROMISE): Indicates why a Certificate was revoked.
  * revocationTime `string`: The time at which this Certificate was revoked.

### RevokeCertificateRequest
* RevokeCertificateRequest `object`: Request message for CertificateAuthorityService.RevokeCertificate.
  * reason `string` (values: REVOCATION_REASON_UNSPECIFIED, KEY_COMPROMISE, CERTIFICATE_AUTHORITY_COMPROMISE, AFFILIATION_CHANGED, SUPERSEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, PRIVILEGE_WITHDRAWN, ATTRIBUTE_AUTHORITY_COMPROMISE): Required. The RevocationReason for revoking this certificate.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### RevokedCertificate
* RevokedCertificate `object`: Describes a revoked Certificate.
  * certificate `string`: The resource path for the Certificate in the format `projects/*/locations/*/certificateAuthorities/*/certificates/*`.
  * hexSerialNumber `string`: The serial number of the Certificate.
  * revocationReason `string` (values: REVOCATION_REASON_UNSPECIFIED, KEY_COMPROMISE, CERTIFICATE_AUTHORITY_COMPROMISE, AFFILIATION_CHANGED, SUPERSEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, PRIVILEGE_WITHDRAWN, ATTRIBUTE_AUTHORITY_COMPROMISE): The reason the Certificate was revoked.

### ScheduleDeleteCertificateAuthorityRequest
* ScheduleDeleteCertificateAuthorityRequest `object`: Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
  * requestId `string`: Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

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

### Subject
* Subject `object`: Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
  * countryCode `string`: The country code of the subject.
  * locality `string`: The locality or city of the subject.
  * organization `string`: The organization of the subject.
  * organizationalUnit `string`: The organizational_unit of the subject.
  * postalCode `string`: The postal code of the subject.
  * province `string`: The province, territory, or regional state of the subject.
  * streetAddress `string`: The street address of the subject.

### SubjectAltNames
* SubjectAltNames `object`: SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
  * customSans `array`: Contains additional subject alternative name values.
    * items [X509Extension](#x509extension)
  * dnsNames `array`: Contains only valid, fully-qualified host names.
    * items `string`
  * emailAddresses `array`: Contains only valid RFC 2822 E-mail addresses.
    * items `string`
  * ipAddresses `array`: Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
    * items `string`
  * uris `array`: Contains only valid RFC 3986 URIs.
    * items `string`

### SubjectConfig
* SubjectConfig `object`: These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
  * commonName `string`: Optional. The "common name" of the distinguished name.
  * subject [Subject](#subject)
  * subjectAltName [SubjectAltNames](#subjectaltnames)

### SubjectDescription
* SubjectDescription `object`: These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
  * commonName `string`: The "common name" of the distinguished name.
  * hexSerialNumber `string`: The serial number encoded in lowercase hexadecimal.
  * lifetime `string`: For convenience, the actual lifetime of an issued certificate. Corresponds to 'not_after_time' - 'not_before_time'.
  * notAfterTime `string`: The time at which the certificate expires.
  * notBeforeTime `string`: The time at which the certificate becomes valid.
  * subject [Subject](#subject)
  * subjectAltName [SubjectAltNames](#subjectaltnames)

### SubordinateConfig
* SubordinateConfig `object`: Describes a subordinate CA's issuers. This is either a resource path to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
  * certificateAuthority `string`: Required. This can refer to a CertificateAuthority in the same project that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format `projects/*/locations/*/certificateAuthorities/*`.
  * pemIssuerChain [SubordinateConfigChain](#subordinateconfigchain)

### SubordinateConfigChain
* SubordinateConfigChain `object`: This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
  * pemCertificates `array`: Required. Expected to be in leaf-to-root order according to RFC 5246.
    * items `string`

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### X509Extension
* X509Extension `object`: An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
  * critical `boolean`: Required. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
  * objectId [ObjectId](#objectid)
  * value `string`: Required. The value of this X.509 extension.


