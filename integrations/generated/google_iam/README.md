# @datafire/google_iam

Client library for Google Identity and Access Management (IAM)

## Installation and Usage
```bash
npm install --save datafire @datafire/google_iam
```

```js
let datafire = require('datafire');
let google_iam = require('@datafire/google_iam').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_iam.roles.queryGrantableRoles({}).then(data => {
  console.log(data);
})
```

## Description
Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_iam.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_iam.oauthRefresh(null, context)
```


### roles.queryGrantableRoles
Queries roles that can be granted on a particular resource.
A role is grantable if it can be used as the role in a binding for a policy
for that resource.


```js
google_iam.roles.queryGrantableRoles({}, context)
```

#### Parameters
* body (object) - The grantable role query request.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.keys.delete
Deletes a ServiceAccountKey.


```js
google_iam.projects.serviceAccounts.keys.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the service account key in the following format:
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.keys.get
Gets the ServiceAccountKey
by key id.


```js
google_iam.projects.serviceAccounts.keys.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the service account key in the following format:
* publicKeyType (string) - The output format of the public key requested.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.update
Updates a ServiceAccount.

Currently, only the following fields are updatable:
`display_name` .
The `etag` is mandatory.


```js
google_iam.projects.serviceAccounts.update({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the service account in the following format:
* body (object) - A service account in the Identity and Access Management API.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.keys.list
Lists ServiceAccountKeys.


```js
google_iam.projects.serviceAccounts.keys.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the service account in the following format:
* keyTypes (array) - Filters the types of keys the user wants to include in the list
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.keys.create
Creates a ServiceAccountKey
and returns it.


```js
google_iam.projects.serviceAccounts.keys.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the service account in the following format:
* body (object) - The service account key create request.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.list
Lists ServiceAccounts for a project.


```js
google_iam.projects.serviceAccounts.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Required. The resource name of the project associated with the service
* pageToken (string) - Optional pagination token returned in an earlier
* pageSize (integer) - Optional limit on the number of service accounts to include in the
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.create
Creates a ServiceAccount
and returns it.


```js
google_iam.projects.serviceAccounts.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Required. The resource name of the project associated with the service
* body (object) - The service account create request.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.signBlob
Signs a blob using a service account's system-managed private key.


```js
google_iam.projects.serviceAccounts.signBlob({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the service account in the following format:
* body (object) - The service account sign blob request.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.signJwt
Signs a JWT using a service account's system-managed private key.

If no expiry time (`exp`) is provided in the `SignJwtRequest`, IAM sets an
an expiry time of one hour by default. If you request an expiry time of
more than one hour, the request will fail.


```js
google_iam.projects.serviceAccounts.signJwt({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the service account in the following format:
* body (object) - The service account sign JWT request.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.getIamPolicy
Returns the IAM access control policy for a
ServiceAccount.


```js
google_iam.projects.serviceAccounts.getIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being requested.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.setIamPolicy
Sets the IAM access control policy for a
ServiceAccount.


```js
google_iam.projects.serviceAccounts.setIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* body (object) - Request message for `SetIamPolicy` method.
* resource (string) **required** - REQUIRED: The resource for which the policy is being specified.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### projects.serviceAccounts.testIamPermissions
Tests the specified permissions against the IAM access control policy
for a ServiceAccount.


```js
google_iam.projects.serviceAccounts.testIamPermissions({
  "resource": ""
}, context)
```

#### Parameters
* body (object) - Request message for `TestIamPermissions` method.
* resource (string) **required** - REQUIRED: The resource for which the policy detail is being requested.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

