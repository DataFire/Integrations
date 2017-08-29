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

google_appengine.apps.locations.list({}).then(data => {
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
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/*/operations.


```js
google_appengine.apps.operations.list({
  "appsId": ""
}, context)
```

#### Parameters
* appsId (string) **required** - Part of `name`. The name of the operation collection.
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

