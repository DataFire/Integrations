# @datafire/google_appengine

Client library for Google App Engine Admin

## Installation and Usage
```bash
npm install --save @datafire/google_appengine
```
```js
let google_appengine = require('@datafire/google_appengine').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_appengine.apps.authorizedCertificates.list({
  "appsId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The App Engine Admin API enables developers to provision and manage their App Engine applications.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_appengine.oauthCallback({
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
google_appengine.oauthRefresh(null, context)
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

### apps.authorizedCertificates.list
Lists all SSL certificates the user is authorized to administer.


```js
google_appengine.apps.authorizedCertificates.list({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
  * pageSize `integer`: Maximum results to return per page.
  * pageToken `string`: Continuation token for fetching the next page of results.
  * view `string` (values: BASIC_CERTIFICATE, FULL_CERTIFICATE): Controls the set of fields returned in the LIST response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListAuthorizedCertificatesResponse](#listauthorizedcertificatesresponse)

### apps.authorizedCertificates.create
Uploads the specified SSL certificate.


```js
google_appengine.apps.authorizedCertificates.create({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
  * body [AuthorizedCertificate](#authorizedcertificate)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [AuthorizedCertificate](#authorizedcertificate)

### apps.authorizedCertificates.delete
Deletes the specified SSL certificate.


```js
google_appengine.apps.authorizedCertificates.delete({
  "appsId": "",
  "authorizedCertificatesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
  * authorizedCertificatesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### apps.authorizedCertificates.get
Gets the specified SSL certificate.


```js
google_appengine.apps.authorizedCertificates.get({
  "appsId": "",
  "authorizedCertificatesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
  * authorizedCertificatesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * view `string` (values: BASIC_CERTIFICATE, FULL_CERTIFICATE): Controls the set of fields returned in the GET response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [AuthorizedCertificate](#authorizedcertificate)

### apps.authorizedCertificates.patch
Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.


```js
google_appengine.apps.authorizedCertificates.patch({
  "appsId": "",
  "authorizedCertificatesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
  * authorizedCertificatesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * body [AuthorizedCertificate](#authorizedcertificate)
  * updateMask `string`: Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [AuthorizedCertificate](#authorizedcertificate)

### apps.authorizedDomains.list
Lists all domains the user is authorized to administer.


```js
google_appengine.apps.authorizedDomains.list({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
  * pageSize `integer`: Maximum results to return per page.
  * pageToken `string`: Continuation token for fetching the next page of results.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListAuthorizedDomainsResponse](#listauthorizeddomainsresponse)

### apps.domainMappings.list
Lists the domain mappings on an application.


```js
google_appengine.apps.domainMappings.list({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
  * pageSize `integer`: Maximum results to return per page.
  * pageToken `string`: Continuation token for fetching the next page of results.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListDomainMappingsResponse](#listdomainmappingsresponse)

### apps.domainMappings.create
Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.


```js
google_appengine.apps.domainMappings.create({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
  * body [DomainMapping](#domainmapping)
  * noManagedCertificate `boolean`: Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
  * overrideStrategy `string` (values: UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY, STRICT, OVERRIDE): Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### apps.domainMappings.delete
Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.


```js
google_appengine.apps.domainMappings.delete({
  "appsId": "",
  "domainMappingsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
  * domainMappingsId **required** `string`: Part of `name`. See documentation of `appsId`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### apps.domainMappings.get
Gets the specified domain mapping.


```js
google_appengine.apps.domainMappings.get({
  "appsId": "",
  "domainMappingsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
  * domainMappingsId **required** `string`: Part of `name`. See documentation of `appsId`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [DomainMapping](#domainmapping)

### apps.domainMappings.patch
Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.


```js
google_appengine.apps.domainMappings.patch({
  "appsId": "",
  "domainMappingsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
  * body [DomainMapping](#domainmapping)
  * domainMappingsId **required** `string`: Part of `name`. See documentation of `appsId`.
  * noManagedCertificate `boolean`: Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask.
  * updateMask `string`: Standard field mask for the set of fields to be updated.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### apps.locations.list
Lists information about the supported locations for this service.


```js
google_appengine.apps.locations.list({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. The resource that owns the locations collection, if applicable.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListLocationsResponse](#listlocationsresponse)

### apps.locations.get
Get information about a location.


```js
google_appengine.apps.locations.get({
  "appsId": "",
  "locationsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Resource name for the location.
  * locationsId **required** `string`: Part of `name`. See documentation of `appsId`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Location](#location)

### apps.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_appengine.apps.operations.list({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. The name of the operation's parent resource.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### apps.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_appengine.apps.operations.get({
  "appsId": "",
  "operationsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. The name of the operation resource.
  * operationsId **required** `string`: Part of `name`. See documentation of `appsId`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)



## Definitions

### AuthorizedCertificate
* AuthorizedCertificate `object`: An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
  * certificateRawData [CertificateRawData](#certificaterawdata)
  * displayName `string`: The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.
  * domainMappingsCount `integer`: Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly
  * domainNames `array`: Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly
    * items `string`
  * expireTime `string`: The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly
  * id `string`: Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly
  * managedCertificate [ManagedCertificate](#managedcertificate)
  * name `string`: Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly
  * visibleDomainMappings `array`: The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly
    * items `string`

### AuthorizedDomain
* AuthorizedDomain `object`: A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Webmaster Central (https://www.google.com/webmasters/verification/home).
  * id `string`: Fully qualified domain name of the domain authorized for use. Example: example.com.
  * name `string`: Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly

### CertificateRawData
* CertificateRawData `object`: An SSL certificate obtained from a certificate authority.
  * privateKey `string`: Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: <pre> -----BEGIN RSA PRIVATE KEY----- <unencrypted_key_value> -----END RSA PRIVATE KEY----- </pre> @InputOnly
  * publicCertificate `string`: PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: <pre> -----BEGIN CERTIFICATE----- <certificate_value> -----END CERTIFICATE----- </pre>

### DomainMapping
* DomainMapping `object`: A domain serving an App Engine application.
  * id `string`: Relative name of the domain serving the application. Example: example.com.
  * name `string`: Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
  * resourceRecords `array`: The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly
    * items [ResourceRecord](#resourcerecord)
  * sslSettings [SslSettings](#sslsettings)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:

### ListAuthorizedCertificatesResponse
* ListAuthorizedCertificatesResponse `object`: Response message for AuthorizedCertificates.ListAuthorizedCertificates.
  * certificates `array`: The SSL certificates the user is authorized to administer.
    * items [AuthorizedCertificate](#authorizedcertificate)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListAuthorizedDomainsResponse
* ListAuthorizedDomainsResponse `object`: Response message for AuthorizedDomains.ListAuthorizedDomains.
  * domains `array`: The authorized domains belonging to the user.
    * items [AuthorizedDomain](#authorizeddomain)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListDomainMappingsResponse
* ListDomainMappingsResponse `object`: Response message for DomainMappings.ListDomainMappings.
  * domainMappings `array`: The domain mappings for the application.
    * items [DomainMapping](#domainmapping)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

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

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * labels `object`: Cross-service attributes for the location. For example
  * locationId `string`: The canonical id for this location. For example: "us-east1".
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"

### LocationMetadata
* LocationMetadata `object`: Metadata for the given google.cloud.location.Location.
  * flexibleEnvironmentAvailable `boolean`: App Engine Flexible Environment is available in the given location.@OutputOnly
  * standardEnvironmentAvailable `boolean`: App Engine Standard Environment is available in the given location.@OutputOnly

### ManagedCertificate
* ManagedCertificate `object`: A certificate managed by App Engine.
  * lastRenewalTime `string`: Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly
  * status `string` (values: UNSPECIFIED_STATUS, OK, PENDING, FAILED_RETRYING_INTERNAL, FAILED_RETRYING_NOT_VISIBLE, FAILED_PERMANENTLY_NOT_VISIBLE, FAILED_RETRYING_CAA_FORBIDDEN, FAILED_RETRYING_CAA_CHECKING): Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.

### OperationMetadata
* OperationMetadata `object`: Metadata for the given google.longrunning.Operation.
  * endTime `string`: Timestamp that this operation completed.@OutputOnly
  * insertTime `string`: Timestamp that this operation was created.@OutputOnly
  * method `string`: API method that initiated this operation. Example: google.appengine.v1beta4.Version.CreateVersion.@OutputOnly
  * operationType `string`: Type of this operation. Deprecated, use method field instead. Example: "create_version".@OutputOnly
  * target `string`: Name of the resource that this operation is acting on. Example: apps/myapp/modules/default.@OutputOnly
  * user `string`: User who requested this operation.@OutputOnly

### OperationMetadataV1
* OperationMetadataV1 `object`: Metadata for the given google.longrunning.Operation.
  * endTime `string`: Time that this operation completed.@OutputOnly
  * ephemeralMessage `string`: Ephemeral message that may change every time the operation is polled. @OutputOnly
  * insertTime `string`: Time that this operation was created.@OutputOnly
  * method `string`: API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly
  * target `string`: Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
  * user `string`: User who requested this operation.@OutputOnly
  * warning `array`: Durable messages that persist on every operation poll. @OutputOnly
    * items `string`

### OperationMetadataV1Alpha
* OperationMetadataV1Alpha `object`: Metadata for the given google.longrunning.Operation.
  * endTime `string`: Time that this operation completed.@OutputOnly
  * ephemeralMessage `string`: Ephemeral message that may change every time the operation is polled. @OutputOnly
  * insertTime `string`: Time that this operation was created.@OutputOnly
  * method `string`: API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly
  * target `string`: Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
  * user `string`: User who requested this operation.@OutputOnly
  * warning `array`: Durable messages that persist on every operation poll. @OutputOnly
    * items `string`

### OperationMetadataV1Beta
* OperationMetadataV1Beta `object`: Metadata for the given google.longrunning.Operation.
  * endTime `string`: Time that this operation completed.@OutputOnly
  * ephemeralMessage `string`: Ephemeral message that may change every time the operation is polled. @OutputOnly
  * insertTime `string`: Time that this operation was created.@OutputOnly
  * method `string`: API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
  * target `string`: Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
  * user `string`: User who requested this operation.@OutputOnly
  * warning `array`: Durable messages that persist on every operation poll. @OutputOnly
    * items `string`

### OperationMetadataV1Beta5
* OperationMetadataV1Beta5 `object`: Metadata for the given google.longrunning.Operation.
  * endTime `string`: Timestamp that this operation completed.@OutputOnly
  * insertTime `string`: Timestamp that this operation was created.@OutputOnly
  * method `string`: API method name that initiated this operation. Example: google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
  * target `string`: Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
  * user `string`: User who requested this operation.@OutputOnly

### ResourceRecord
* ResourceRecord `object`: A DNS resource record.
  * name `string`: Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
  * rrdata `string`: Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
  * type `string` (values: A, AAAA, CNAME): Resource record type. Example: AAAA.

### SslSettings
* SslSettings `object`: SSL configuration for a DomainMapping resource.
  * certificateId `string`: ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify no_managed_certificate on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345.
  * isManagedCertificate `boolean`: Whether the mapped certificate is an App Engine managed certificate. Managed certificates are created by default with a domain mapping. To opt out, specify no_managed_certificate on a CREATE or UPDATE request.@OutputOnly

### Status
* Status `object`: The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). The error model is designed to be:
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


