# @datafire/google_serviceuser

Client library for Google Service User

## Installation and Usage
```bash
npm install --save datafire @datafire/google_serviceuser
```

```js
let datafire = require('datafire');
let google_serviceuser = require('@datafire/google_serviceuser').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_serviceuser.services.search({}).then(data => {
  console.log(data);
})
```

## Description
Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_serviceuser.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_serviceuser.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### services.search
Search available services.

When no filter is specified, returns all accessible services. For
authenticated users, also returns all services the calling user has
"servicemanagement.services.bind" permission for.


```js
google_serviceuser.services.search({}, context)
```

#### Parameters
* pageToken (string) - Token identifying which result to start with; returned by a previous list
* pageSize (integer) - Requested size of the next page of data.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.services.disable
Disable a service so it can no longer be used with a
project. This prevents unintended usage that may cause unexpected billing
charges or security leaks.

Operation<response: google.protobuf.Empty>


```js
google_serviceuser.projects.services.disable({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Name of the consumer and the service to disable for that consumer.
* body (object) - Request message for DisableService method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.services.enable
Enable a service so it can be used with a project.
See [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for
more information.

Operation<response: google.protobuf.Empty>


```js
google_serviceuser.projects.services.enable({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Name of the consumer and the service to enable for that consumer.
* body (object) - Request message for EnableService method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.services.list
List enabled services for the specified consumer.


```js
google_serviceuser.projects.services.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - List enabled services for the specified parent.
* pageToken (string) - Token identifying which result to start with; returned by a previous list
* pageSize (integer) - Requested size of the next page of data.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

