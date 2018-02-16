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

google_appengine.apps.create({}).then(data => {
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

### apps.create
Creates an App Engine application for a Google Cloud Platform project. Required fields:
id - The ID of the target Cloud Platform project.
location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/python/console/).


```js
google_appengine.apps.create({}, context)
```

#### Input
* input `object`
  * body [Application](#application)
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

### apps.get
Gets information about an application.


```js
google_appengine.apps.get({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the Application resource to get. Example: apps/myapp.
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
* output [Application](#application)

### apps.patch
Updates the specified Application resource. You can update the following fields:
auth_domain - Google authentication domain for controlling user access to the application.
default_cookie_expiration - Cookie expiration policy for the application.


```js
google_appengine.apps.patch({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the Application resource to update. Example: apps/myapp.
  * body [Application](#application)
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

### apps.firewall.ingressRules.list
Lists the firewall rules of an application.


```js
google_appengine.apps.firewall.ingressRules.list({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.
  * matchingAddress `string`: A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.
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
* output [ListIngressRulesResponse](#listingressrulesresponse)

### apps.firewall.ingressRules.create
Creates a firewall rule for the application.


```js
google_appengine.apps.firewall.ingressRules.create({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.
  * body [FirewallRule](#firewallrule)
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
* output [FirewallRule](#firewallrule)

### apps.firewall.ingressRules.delete
Deletes the specified firewall rule.


```js
google_appengine.apps.firewall.ingressRules.delete({
  "appsId": "",
  "ingressRulesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.
  * ingressRulesId **required** `string`: Part of `name`. See documentation of `appsId`.
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

### apps.firewall.ingressRules.get
Gets the specified firewall rule.


```js
google_appengine.apps.firewall.ingressRules.get({
  "appsId": "",
  "ingressRulesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.
  * ingressRulesId **required** `string`: Part of `name`. See documentation of `appsId`.
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
* output [FirewallRule](#firewallrule)

### apps.firewall.ingressRules.patch
Updates the specified firewall rule.


```js
google_appengine.apps.firewall.ingressRules.patch({
  "appsId": "",
  "ingressRulesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.
  * body [FirewallRule](#firewallrule)
  * ingressRulesId **required** `string`: Part of `name`. See documentation of `appsId`.
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
* output [FirewallRule](#firewallrule)

### apps.firewall.ingressRules.batchUpdate
Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.


```js
google_appengine.apps.firewall.ingressRules.batchUpdate({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
  * body [BatchUpdateIngressRulesRequest](#batchupdateingressrulesrequest)
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
* output [BatchUpdateIngressRulesResponse](#batchupdateingressrulesresponse)

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

### apps.services.list
Lists all the services in the application.


```js
google_appengine.apps.services.list({
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
* output [ListServicesResponse](#listservicesresponse)

### apps.services.delete
Deletes the specified service and all enclosed versions.


```js
google_appengine.apps.services.delete({
  "appsId": "",
  "servicesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
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

### apps.services.get
Gets the current configuration of the specified service.


```js
google_appengine.apps.services.get({
  "appsId": "",
  "servicesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
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
* output [Service](#service)

### apps.services.patch
Updates the configuration of the specified service.


```js
google_appengine.apps.services.patch({
  "appsId": "",
  "servicesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
  * body [Service](#service)
  * migrateTraffic `boolean`: Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#inboundservicetype) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#automaticscaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#shardby) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
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

### apps.services.versions.list
Lists the versions of a service.


```js
google_appengine.apps.services.versions.list({
  "appsId": "",
  "servicesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.
  * pageSize `integer`: Maximum results to return per page.
  * pageToken `string`: Continuation token for fetching the next page of results.
  * servicesId **required** `string`: Part of `parent`. See documentation of `appsId`.
  * view `string` (values: BASIC, FULL): Controls the set of fields returned in the List response.
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
* output [ListVersionsResponse](#listversionsresponse)

### apps.services.versions.create
Deploys code and resource files to a new version.


```js
google_appengine.apps.services.versions.create({
  "appsId": "",
  "servicesId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
  * body [Version](#version)
  * servicesId **required** `string`: Part of `parent`. See documentation of `appsId`.
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

### apps.services.versions.delete
Deletes an existing Version resource.


```js
google_appengine.apps.services.versions.delete({
  "appsId": "",
  "servicesId": "",
  "versionsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * versionsId **required** `string`: Part of `name`. See documentation of `appsId`.
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

### apps.services.versions.get
Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.


```js
google_appengine.apps.services.versions.get({
  "appsId": "",
  "servicesId": "",
  "versionsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * versionsId **required** `string`: Part of `name`. See documentation of `appsId`.
  * view `string` (values: BASIC, FULL): Controls the set of fields returned in the Get response.
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
* output [Version](#version)

### apps.services.versions.patch
Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:
serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status):  For Version resources that use basic scaling, manual scaling, or run in  the App Engine flexible environment.
instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class):  For Version resources that run in the App Engine standard environment.
automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment.
automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment.
automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine Flexible environment.
automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine Flexible environment.
automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine Flexible environment.
automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine Flexible environment.


```js
google_appengine.apps.services.versions.patch({
  "appsId": "",
  "servicesId": "",
  "versionsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
  * body [Version](#version)
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * updateMask `string`: Standard field mask for the set of fields to be updated.
  * versionsId **required** `string`: Part of `name`. See documentation of `appsId`.
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

### apps.services.versions.instances.list
Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).


```js
google_appengine.apps.services.versions.instances.list({
  "appsId": "",
  "servicesId": "",
  "versionsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
  * pageSize `integer`: Maximum results to return per page.
  * pageToken `string`: Continuation token for fetching the next page of results.
  * servicesId **required** `string`: Part of `parent`. See documentation of `appsId`.
  * versionsId **required** `string`: Part of `parent`. See documentation of `appsId`.
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
* output [ListInstancesResponse](#listinstancesresponse)

### apps.services.versions.instances.delete
Stops a running instance.


```js
google_appengine.apps.services.versions.instances.delete({
  "appsId": "",
  "instancesId": "",
  "servicesId": "",
  "versionsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
  * instancesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * versionsId **required** `string`: Part of `name`. See documentation of `appsId`.
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

### apps.services.versions.instances.get
Gets instance information.


```js
google_appengine.apps.services.versions.instances.get({
  "appsId": "",
  "instancesId": "",
  "servicesId": "",
  "versionsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
  * instancesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * versionsId **required** `string`: Part of `name`. See documentation of `appsId`.
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
* output [Instance](#instance)

### apps.services.versions.instances.debug
Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.


```js
google_appengine.apps.services.versions.instances.debug({
  "appsId": "",
  "instancesId": "",
  "servicesId": "",
  "versionsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
  * body [DebugInstanceRequest](#debuginstancerequest)
  * instancesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * servicesId **required** `string`: Part of `name`. See documentation of `appsId`.
  * versionsId **required** `string`: Part of `name`. See documentation of `appsId`.
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

### apps.repair
Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account.


```js
google_appengine.apps.repair({
  "appsId": ""
}, context)
```

#### Input
* input `object`
  * appsId **required** `string`: Part of `name`. Name of the application to repair. Example: apps/myapp
  * body [RepairApplicationRequest](#repairapplicationrequest)
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

### ApiConfigHandler
* ApiConfigHandler `object`: Google Cloud Endpoints (https://cloud.google.com/appengine/docs/python/endpoints/) configuration for API handlers.
  * authFailAction `string` (values: AUTH_FAIL_ACTION_UNSPECIFIED, AUTH_FAIL_ACTION_REDIRECT, AUTH_FAIL_ACTION_UNAUTHORIZED): Action to take when users access resources that require authentication. Defaults to redirect.
  * login `string` (values: LOGIN_UNSPECIFIED, LOGIN_OPTIONAL, LOGIN_ADMIN, LOGIN_REQUIRED): Level of login required to access this resource. Defaults to optional.
  * script `string`: Path to the script from the application root directory.
  * securityLevel `string` (values: SECURE_UNSPECIFIED, SECURE_DEFAULT, SECURE_NEVER, SECURE_OPTIONAL, SECURE_ALWAYS): Security (HTTPS) enforcement for this URL.
  * url `string`: URL to serve the endpoint at.

### ApiEndpointHandler
* ApiEndpointHandler `object`: Uses Google Cloud Endpoints to handle requests.
  * scriptPath `string`: Path to the script from the application root directory.

### Application
* Application `object`: An Application resource contains the top-level configuration of an App Engine application.
  * authDomain `string`: Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.
  * codeBucket `string`: Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly
  * defaultBucket `string`: Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly
  * defaultCookieExpiration `string`: Cookie expiration policy for this application.
  * defaultHostname `string`: Hostname used to reach this application, as resolved by App Engine.@OutputOnly
  * dispatchRules `array`: HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.@OutputOnly
    * items [UrlDispatchRule](#urldispatchrule)
  * featureSettings [FeatureSettings](#featuresettings)
  * gcrDomain `string`: The Google Container Registry domain used for storing managed build docker images for this application.
  * iap [IdentityAwareProxy](#identityawareproxy)
  * id `string`: Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.
  * locationId `string`: Location from which this application will be run. Application instances will run out of data centers in the chosen location, which is also where all of the application's end user content is stored.Defaults to us-central.Options are:us-central - Central USeurope-west - Western Europeus-east1 - Eastern US
  * name `string`: Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly
  * servingStatus `string` (values: UNSPECIFIED, SERVING, USER_DISABLED, SYSTEM_DISABLED): Serving status of this application.

### AuthorizedCertificate
* AuthorizedCertificate `object`: An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
  * certificateRawData [CertificateRawData](#certificaterawdata)
  * displayName `string`: The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.
  * domainMappingsCount `integer`: Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly
  * domainNames `array`: Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly
    * items `string`
  * expireTime `string`: The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly
  * id `string`: Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly
  * name `string`: Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly
  * visibleDomainMappings `array`: The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly
    * items `string`

### AuthorizedDomain
* AuthorizedDomain `object`: A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Webmaster Central (https://www.google.com/webmasters/verification/home).
  * id `string`: Fully qualified domain name of the domain authorized for use. Example: example.com.
  * name `string`: Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly

### AutomaticScaling
* AutomaticScaling `object`: Automatic scaling is based on request rate, response latencies, and other application metrics.
  * coolDownPeriod `string`: Amount of time that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait between changes to the number of virtual machines. Only applicable in the App Engine flexible environment.
  * cpuUtilization [CpuUtilization](#cpuutilization)
  * diskUtilization [DiskUtilization](#diskutilization)
  * maxConcurrentRequests `integer`: Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value.
  * maxIdleInstances `integer`: Maximum number of idle instances that should be maintained for this version.
  * maxPendingLatency `string`: Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
  * maxTotalInstances `integer`: Maximum number of instances that should be started to handle requests.
  * minIdleInstances `integer`: Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  * minPendingLatency `string`: Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
  * minTotalInstances `integer`: Minimum number of instances that should be maintained for this version.
  * networkUtilization [NetworkUtilization](#networkutilization)
  * requestUtilization [RequestUtilization](#requestutilization)
  * standardSchedulerSettings [StandardSchedulerSettings](#standardschedulersettings)

### BasicScaling
* BasicScaling `object`: A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
  * idleTimeout `string`: Duration of time after the last request that an instance must wait before the instance is shut down.
  * maxInstances `integer`: Maximum number of instances to create for this version.

### BatchUpdateIngressRulesRequest
* BatchUpdateIngressRulesRequest `object`: Request message for Firewall.BatchUpdateIngressRules.
  * ingressRules `array`: A list of FirewallRules to replace the existing set.
    * items [FirewallRule](#firewallrule)

### BatchUpdateIngressRulesResponse
* BatchUpdateIngressRulesResponse `object`: Response message for Firewall.UpdateAllIngressRules.
  * ingressRules `array`: The full list of ingress FirewallRules for this application.
    * items [FirewallRule](#firewallrule)

### CertificateRawData
* CertificateRawData `object`: An SSL certificate obtained from a certificate authority.
  * privateKey `string`: Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: <pre> -----BEGIN RSA PRIVATE KEY----- <unencrypted_key_value> -----END RSA PRIVATE KEY----- </pre> @InputOnly
  * publicCertificate `string`: PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: <pre> -----BEGIN CERTIFICATE----- <certificate_value> -----END CERTIFICATE----- </pre>

### ContainerInfo
* ContainerInfo `object`: Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.
  * image `string`: URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

### CpuUtilization
* CpuUtilization `object`: Target scaling by CPU usage.
  * aggregationWindowLength `string`: Period of time over which CPU utilization is calculated.
  * targetUtilization `number`: Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

### CreateVersionMetadataV1Alpha
* CreateVersionMetadataV1Alpha `object`: Metadata for the given google.longrunning.Operation during a google.appengine.v1alpha.CreateVersionRequest.
  * cloudBuildId `string`: The Cloud Build ID if one was created as part of the version create. @OutputOnly

### CreateVersionMetadataV1Beta
* CreateVersionMetadataV1Beta `object`: Metadata for the given google.longrunning.Operation during a google.appengine.v1beta.CreateVersionRequest.
  * cloudBuildId `string`: The Cloud Build ID if one was created as part of the version create. @OutputOnly

### DebugInstanceRequest
* DebugInstanceRequest `object`: Request message for Instances.DebugInstance.
  * sshKey `string`: Public SSH key to add to the instance. Examples:

### Deployment
* Deployment `object`: Code and application artifacts used to deploy a version to App Engine.
  * container [ContainerInfo](#containerinfo)
  * files `object`: Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call.
  * zip [ZipInfo](#zipinfo)

### DiskUtilization
* DiskUtilization `object`: Target scaling by disk usage. Only applicable in the App Engine flexible environment.
  * targetReadBytesPerSecond `integer`: Target bytes read per second.
  * targetReadOpsPerSecond `integer`: Target ops read per seconds.
  * targetWriteBytesPerSecond `integer`: Target bytes written per second.
  * targetWriteOpsPerSecond `integer`: Target ops written per second.

### DomainMapping
* DomainMapping `object`: A domain serving an App Engine application.
  * id `string`: Relative name of the domain serving the application. Example: example.com.
  * name `string`: Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
  * resourceRecords `array`: The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly
    * items [ResourceRecord](#resourcerecord)
  * sslSettings [SslSettings](#sslsettings)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:

### EndpointsApiService
* EndpointsApiService `object`: Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy.The fields here refer to the name and configuration id of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).
  * configId `string`: Endpoints service configuration id as specified by the Service Management API. For example "2016-09-19r1"
  * name `string`: Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog"

### ErrorHandler
* ErrorHandler `object`: Custom static error page to be served when an error occurs.
  * errorCode `string` (values: ERROR_CODE_UNSPECIFIED, ERROR_CODE_DEFAULT, ERROR_CODE_OVER_QUOTA, ERROR_CODE_DOS_API_DENIAL, ERROR_CODE_TIMEOUT): Error condition this handler applies to.
  * mimeType `string`: MIME type of file. Defaults to text/html.
  * staticFile `string`: Static file content to be served for this error.

### FeatureSettings
* FeatureSettings `object`: The feature specific settings to be used in the application. These define behaviors that are user configurable.
  * splitHealthChecks `boolean`: Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to 'readiness_check' and 'liveness_check' values instead of 'health_check' ones. Once the legacy 'health_check' behavior is deprecated, and this value is always true, this setting can be removed.

### FileInfo
* FileInfo `object`: Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.
  * mimeType `string`: The MIME type of the file.Defaults to the value from Google Cloud Storage.
  * sha1Sum `string`: The SHA1 hash of the file, in hex.
  * sourceUrl `string`: URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/<bucket>/<object>'.

### FirewallRule
* FirewallRule `object`: A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.
  * action `string` (values: UNSPECIFIED_ACTION, ALLOW, DENY): The action to take on matched requests.
  * description `string`: An optional string description of this rule. This field has a maximum length of 100 characters.
  * priority `integer`: A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.
  * sourceRange `string`: IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32  or 2001:0db8:0000:0042:0000:8a2e:0370:7334.<p>Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.

### HealthCheck
* HealthCheck `object`: Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
  * checkInterval `string`: Interval between health checks.
  * disableHealthCheck `boolean`: Whether to explicitly disable health checks for this instance.
  * healthyThreshold `integer`: Number of consecutive successful health checks required before receiving traffic.
  * host `string`: Host header to send when performing an HTTP health check. Example: "myapp.appspot.com"
  * restartThreshold `integer`: Number of consecutive failed health checks required before an instance is restarted.
  * timeout `string`: Time before the health check is considered failed.
  * unhealthyThreshold `integer`: Number of consecutive failed health checks required before removing traffic.

### IdentityAwareProxy
* IdentityAwareProxy `object`: Identity-Aware Proxy
  * enabled `boolean`: Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.
  * oauth2ClientId `string`: OAuth2 client ID to use for the authentication flow.
  * oauth2ClientSecret `string`: OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly
  * oauth2ClientSecretSha256 `string`: Hex-encoded SHA-256 hash of the client secret.@OutputOnly

### Instance
* Instance `object`: An Instance resource is the computing unit that App Engine uses to automatically scale an application.
  * appEngineRelease `string`: App Engine release this instance is running on.@OutputOnly
  * availability `string` (values: UNSPECIFIED, RESIDENT, DYNAMIC): Availability of the instance.@OutputOnly
  * averageLatency `integer`: Average latency (ms) over the last minute.@OutputOnly
  * errors `integer`: Number of errors since this instance was started.@OutputOnly
  * id `string`: Relative name of the instance within the version. Example: instance-1.@OutputOnly
  * memoryUsage `string`: Total memory in use (bytes).@OutputOnly
  * name `string`: Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.@OutputOnly
  * qps `number`: Average queries per second (QPS) over the last minute.@OutputOnly
  * requests `integer`: Number of requests since this instance was started.@OutputOnly
  * startTime `string`: Time that this instance was started.@OutputOnly
  * vmDebugEnabled `boolean`: Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.@OutputOnly
  * vmId `string`: Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly
  * vmIp `string`: The IP address of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly
  * vmName `string`: Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
  * vmStatus `string`: Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
  * vmZoneName `string`: Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.@OutputOnly

### Library
* Library `object`: Third-party Python runtime library that is required by the application.
  * name `string`: Name of the library. Example: "django".
  * version `string`: Version of the library to select, or "latest".

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

### ListIngressRulesResponse
* ListIngressRulesResponse `object`: Response message for Firewall.ListIngressRules.
  * ingressRules `array`: The ingress FirewallRules for this application.
    * items [FirewallRule](#firewallrule)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListInstancesResponse
* ListInstancesResponse `object`: Response message for Instances.ListInstances.
  * instances `array`: The instances belonging to the requested version.
    * items [Instance](#instance)
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

### ListServicesResponse
* ListServicesResponse `object`: Response message for Services.ListServices.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * services `array`: The services belonging to the requested application.
    * items [Service](#service)

### ListVersionsResponse
* ListVersionsResponse `object`: Response message for Versions.ListVersions.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * versions `array`: The versions belonging to the requested service.
    * items [Version](#version)

### LivenessCheck
* LivenessCheck `object`: Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
  * checkInterval `string`: Interval between health checks.
  * failureThreshold `integer`: Number of consecutive failed checks required before considering the VM unhealthy.
  * host `string`: Host header to send when performing a HTTP Liveness check. Example: "myapp.appspot.com"
  * initialDelay `string`: The initial delay before starting to execute the checks.
  * path `string`: The request path.
  * successThreshold `integer`: Number of consecutive successful checks required before considering the VM healthy.
  * timeout `string`: Time before the check is considered failed.

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

### ManualScaling
* ManualScaling `object`: A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
  * instances `integer`: Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function.

### Network
* Network `object`: Extra network settings. Only applicable in the App Engine flexible environment.
  * forwardedPorts `array`: List of ports, or port pairs, to forward from the virtual machine to the application container. Only applicable in the App Engine flexible environment.
    * items `string`
  * instanceTag `string`: Tag to apply to the VM instance during creation. for Only applicable in the App Engine flexible environment.
  * name `string`: Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.Defaults to default.
  * subnetworkName `string`: Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.If a subnetwork name is specified, a network name will also be required unless it is for the default network.

### NetworkUtilization
* NetworkUtilization `object`: Target scaling by network usage. Only applicable in the App Engine flexible environment.
  * targetReceivedBytesPerSecond `integer`: Target bytes received per second.
  * targetReceivedPacketsPerSecond `integer`: Target packets received per second.
  * targetSentBytesPerSecond `integer`: Target bytes sent per second.
  * targetSentPacketsPerSecond `integer`: Target packets sent per second.

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
  * createVersionMetadata [CreateVersionMetadataV1Alpha](#createversionmetadatav1alpha)
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
  * createVersionMetadata [CreateVersionMetadataV1Beta](#createversionmetadatav1beta)
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

### ReadinessCheck
* ReadinessCheck `object`: Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
  * appStartTimeout `string`: A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.
  * checkInterval `string`: Interval between health checks.
  * failureThreshold `integer`: Number of consecutive failed checks required before removing traffic.
  * host `string`: Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  * path `string`: The request path.
  * successThreshold `integer`: Number of consecutive successful checks required before receiving traffic.
  * timeout `string`: Time before the check is considered failed.

### RepairApplicationRequest
* RepairApplicationRequest `object`: Request message for 'Applications.RepairApplication'.

### RequestUtilization
* RequestUtilization `object`: Target scaling by request utilization. Only applicable in the App Engine flexible environment.
  * targetConcurrentRequests `integer`: Target number of concurrent requests.
  * targetRequestCountPerSecond `integer`: Target requests per second.

### ResourceRecord
* ResourceRecord `object`: A DNS resource record.
  * name `string`: Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
  * rrdata `string`: Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
  * type `string` (values: RECORD_TYPE_UNSPECIFIED, A, AAAA, CNAME): Resource record type. Example: AAAA.

### Resources
* Resources `object`: Machine resources for a version.
  * cpu `number`: Number of CPU cores needed.
  * diskGb `number`: Disk size (GB) needed.
  * memoryGb `number`: Memory (GB) needed.
  * volumes `array`: User specified volumes.
    * items [Volume](#volume)

### ScriptHandler
* ScriptHandler `object`: Executes a script to handle the request that matches the URL pattern.
  * scriptPath `string`: Path to the script from the application root directory.

### Service
* Service `object`: A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.
  * id `string`: Relative name of the service within the application. Example: default.@OutputOnly
  * name `string`: Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly
  * split [TrafficSplit](#trafficsplit)

### SslSettings
* SslSettings `object`: SSL configuration for a DomainMapping resource.
  * certificateId `string`: ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support. Example: 12345.

### StandardSchedulerSettings
* StandardSchedulerSettings `object`: Scheduler settings for standard environment.
  * maxInstances `integer`: Maximum number of instances for an app version. Set to zero to disable max_instances configuration.
  * minInstances `integer`: Minimum number of instances for an app version. Set to zero to disable min_instances configuration.
  * targetCpuUtilization `number`: Target CPU utilization ratio to maintain when scaling.
  * targetThroughputUtilization `number`: Target throughput utilization ratio to maintain when scaling

### StaticFilesHandler
* StaticFilesHandler `object`: Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
  * applicationReadable `boolean`: Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas.
  * expiration `string`: Time a static file served by this handler should be cached by web proxies and browsers.
  * httpHeaders `object`: HTTP headers to use for all responses from these URLs.
  * mimeType `string`: MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file's filename extension.
  * path `string`: Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
  * requireMatchingFile `boolean`: Whether this handler should match the request if the file referenced by the handler does not exist.
  * uploadPathRegex `string`: Regular expression that matches the file paths for all files that should be referenced by this handler.

### Status
* Status `object`: The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). The error model is designed to be:
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TrafficSplit
* TrafficSplit `object`: Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
  * allocations `object`: Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.
  * shardBy `string` (values: UNSPECIFIED, COOKIE, IP, RANDOM): Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed.

### UrlDispatchRule
* UrlDispatchRule `object`: Rules to match an HTTP request and dispatch that request to a service.
  * domain `string`: Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".Defaults to matching all domains: "*".
  * path `string`: Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters.
  * service `string`: Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default.

### UrlMap
* UrlMap `object`: URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.
  * apiEndpoint [ApiEndpointHandler](#apiendpointhandler)
  * authFailAction `string` (values: AUTH_FAIL_ACTION_UNSPECIFIED, AUTH_FAIL_ACTION_REDIRECT, AUTH_FAIL_ACTION_UNAUTHORIZED): Action to take when users access resources that require authentication. Defaults to redirect.
  * login `string` (values: LOGIN_UNSPECIFIED, LOGIN_OPTIONAL, LOGIN_ADMIN, LOGIN_REQUIRED): Level of login required to access this resource.
  * redirectHttpResponseCode `string` (values: REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED, REDIRECT_HTTP_RESPONSE_CODE_301, REDIRECT_HTTP_RESPONSE_CODE_302, REDIRECT_HTTP_RESPONSE_CODE_303, REDIRECT_HTTP_RESPONSE_CODE_307): 30x code to use when performing redirects for the secure field. Defaults to 302.
  * script [ScriptHandler](#scripthandler)
  * securityLevel `string` (values: SECURE_UNSPECIFIED, SECURE_DEFAULT, SECURE_NEVER, SECURE_OPTIONAL, SECURE_ALWAYS): Security (HTTPS) enforcement for this URL.
  * staticFiles [StaticFilesHandler](#staticfileshandler)
  * urlRegex `string`: URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

### Version
* Version `object`: A Version resource is a specific set of source code and configuration files that are deployed into a service.
  * apiConfig [ApiConfigHandler](#apiconfighandler)
  * automaticScaling [AutomaticScaling](#automaticscaling)
  * basicScaling [BasicScaling](#basicscaling)
  * betaSettings `object`: Metadata settings that are supplied to this version to enable beta runtime features.
  * createTime `string`: Time that this version was created.@OutputOnly
  * createdBy `string`: Email address of the user who created this version.@OutputOnly
  * defaultExpiration `string`: Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#staticfileshandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.
  * deployment [Deployment](#deployment)
  * diskUsageBytes `string`: Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly
  * endpointsApiService [EndpointsApiService](#endpointsapiservice)
  * env `string`: App Engine execution environment for this version.Defaults to standard.
  * envVariables `object`: Environment variables available to the application.Only returned in GET requests if view=FULL is set.
  * errorHandlers `array`: Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.
    * items [ErrorHandler](#errorhandler)
  * handlers `array`: An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.
    * items [UrlMap](#urlmap)
  * healthCheck [HealthCheck](#healthcheck)
  * id `string`: Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".
  * inboundServices `array`: Before an application can receive email or XMPP messages, the application must be configured to enable the service.
    * items `string` (values: INBOUND_SERVICE_UNSPECIFIED, INBOUND_SERVICE_MAIL, INBOUND_SERVICE_MAIL_BOUNCE, INBOUND_SERVICE_XMPP_ERROR, INBOUND_SERVICE_XMPP_MESSAGE, INBOUND_SERVICE_XMPP_SUBSCRIBE, INBOUND_SERVICE_XMPP_PRESENCE, INBOUND_SERVICE_CHANNEL_PRESENCE, INBOUND_SERVICE_WARMUP)
  * instanceClass `string`: Instance class that is used to run this version. Valid values are:
  * libraries `array`: Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.
    * items [Library](#library)
  * livenessCheck [LivenessCheck](#livenesscheck)
  * manualScaling [ManualScaling](#manualscaling)
  * name `string`: Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly
  * network [Network](#network)
  * nobuildFilesRegex `string`: Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.
  * readinessCheck [ReadinessCheck](#readinesscheck)
  * resources [Resources](#resources)
  * runtime `string`: Desired runtime. Example: python27.
  * runtimeApiVersion `string`: The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard/<language>/config/appref
  * runtimeChannel `string`: The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.
  * servingStatus `string` (values: SERVING_STATUS_UNSPECIFIED, SERVING, STOPPED): Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.
  * threadsafe `boolean`: Whether multiple requests can be dispatched to this version at once.
  * versionUrl `string`: Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly
  * vm `boolean`: Whether to deploy this version in a container on a virtual machine.
  * zones `array`: The choice of gce zones to use for this App Engine Flexible version.
    * items `string`

### Volume
* Volume `object`: Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
  * name `string`: Unique name for the volume.
  * sizeGb `number`: Volume size in gigabytes.
  * volumeType `string`: Underlying volume type, e.g. 'tmpfs'.

### ZipInfo
* ZipInfo `object`: The zip file information for a zip deployment.
  * filesCount `integer`: An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow.
  * sourceUrl `string`: URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/<bucket>/<object>'.


