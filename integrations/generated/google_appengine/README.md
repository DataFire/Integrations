# @datafire/google_appengine

Client library for Google App Engine Admin

## Installation and Usage
```bash
npm install --save datafire @datafire/google_appengine
```

```js
let datafire = require('datafire');
let google_appengine = require('@datafire/google_appengine').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_appengine.apps.authorizedCertificates.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_appengine.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### apps.authorizedCertificates.list
Lists all SSL certificates the user is authorized to administer.


```js
google_appengine.apps.authorizedCertificates.list({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
* pageSize (integer) - Maximum results to return per page.
* pageToken (string) - Continuation token for fetching the next page of results.
* view (string) - Controls the set of fields returned in the LIST response.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.authorizedCertificates.create
Uploads the specified SSL certificate.


```js
google_appengine.apps.authorizedCertificates.create({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
* body (object) - An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.authorizedCertificates.delete
Deletes the specified SSL certificate.


```js
google_appengine.apps.authorizedCertificates.delete({
  "appsId": "",
  "authorizedCertificatesId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
* authorizedCertificatesId (string) **required** - Part of `name`. See documentation of `appsId`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.authorizedCertificates.get
Gets the specified SSL certificate.


```js
google_appengine.apps.authorizedCertificates.get({
  "appsId": "",
  "authorizedCertificatesId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
* authorizedCertificatesId (string) **required** - Part of `name`. See documentation of `appsId`.
* view (string) - Controls the set of fields returned in the GET response.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.authorizedCertificates.patch
Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.


```js
google_appengine.apps.authorizedCertificates.patch({
  "appsId": "",
  "authorizedCertificatesId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
* authorizedCertificatesId (string) **required** - Part of `name`. See documentation of `appsId`.
* body (object) - An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
* updateMask (string) - Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.authorizedDomains.list
Lists all domains the user is authorized to administer.


```js
google_appengine.apps.authorizedDomains.list({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
* pageSize (integer) - Maximum results to return per page.
* pageToken (string) - Continuation token for fetching the next page of results.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.domainMappings.list
Lists the domain mappings on an application.


```js
google_appengine.apps.domainMappings.list({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
* pageSize (integer) - Maximum results to return per page.
* pageToken (string) - Continuation token for fetching the next page of results.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.domainMappings.create
Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.


```js
google_appengine.apps.domainMappings.create({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
* body (object) - A domain serving an App Engine application.
* noManagedCertificate (boolean) - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
* overrideStrategy (string) - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.domainMappings.delete
Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.


```js
google_appengine.apps.domainMappings.delete({
  "appsId": "",
  "domainMappingsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
* domainMappingsId (string) **required** - Part of `name`. See documentation of `appsId`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.domainMappings.get
Gets the specified domain mapping.


```js
google_appengine.apps.domainMappings.get({
  "appsId": "",
  "domainMappingsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
* domainMappingsId (string) **required** - Part of `name`. See documentation of `appsId`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.domainMappings.patch
Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.


```js
google_appengine.apps.domainMappings.patch({
  "appsId": "",
  "domainMappingsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
* body (object) - A domain serving an App Engine application.
* domainMappingsId (string) **required** - Part of `name`. See documentation of `appsId`.
* noManagedCertificate (boolean) - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask.
* updateMask (string) - Standard field mask for the set of fields to be updated.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.locations.list
Lists information about the supported locations for this service.


```js
google_appengine.apps.locations.list({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. The resource that owns the locations collection, if applicable.
* filter (string) - The standard list filter.
* pageSize (integer) - The standard list page size.
* pageToken (string) - The standard list page token.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.locations.get
Get information about a location.


```js
google_appengine.apps.locations.get({
  "appsId": "",
  "locationsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. Resource name for the location.
* locationsId (string) **required** - Part of `name`. See documentation of `appsId`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_appengine.apps.operations.list({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. The name of the operation's parent resource.
* filter (string) - The standard list filter.
* pageSize (integer) - The standard list page size.
* pageToken (string) - The standard list page token.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### apps.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_appengine.apps.operations.get({
  "appsId": "",
  "operationsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. The name of the operation resource.
* operationsId (string) **required** - Part of `name`. See documentation of `appsId`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

