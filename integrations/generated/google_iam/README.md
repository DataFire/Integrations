# @datafire/google_iam

Client library for Google Identity and Access Management (IAM)

## Installation and Usage
```bash
npm install --save @datafire/google_iam
```
```js
let google_iam = require('@datafire/google_iam').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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
google_iam.oauthRefresh(null, context)
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

### permissions.queryTestablePermissions
Lists the permissions testable on a resource.
A permission is testable if it can be tested for an identity on a resource.


```js
google_iam.permissions.queryTestablePermissions({}, context)
```

#### Input
* input `object`
  * body [QueryTestablePermissionsRequest](#querytestablepermissionsrequest)
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
* output [QueryTestablePermissionsResponse](#querytestablepermissionsresponse)

### roles.list
Lists the Roles defined on a resource.


```js
google_iam.roles.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional limit on the number of roles to include in the response.
  * pageToken `string`: Optional pagination token returned in an earlier ListRolesResponse.
  * parent `string`: The resource name of the parent resource in one of the following formats:
  * showDeleted `boolean`: Include Roles that have been deleted.
  * view `string` (values: BASIC, FULL): Optional view for the returned Role objects.
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
* output [ListRolesResponse](#listrolesresponse)

### roles.queryGrantableRoles
Queries roles that can be granted on a particular resource.
A role is grantable if it can be used as the role in a binding for a policy
for that resource.


```js
google_iam.roles.queryGrantableRoles({}, context)
```

#### Input
* input `object`
  * body [QueryGrantableRolesRequest](#querygrantablerolesrequest)
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [QueryGrantableRolesResponse](#querygrantablerolesresponse)

### organizations.roles.delete
Soft deletes a role. The role is suspended and cannot be used to create new
IAM Policy Bindings.
The Role will not be included in `ListRoles()` unless `show_deleted` is set
in the `ListRolesRequest`. The Role contains the deleted boolean set.
Existing Bindings remains, but are inactive. The Role can be undeleted
within 7 days. After 7 days the Role is deleted and all Bindings associated
with the role are removed.


```js
google_iam.organizations.roles.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * etag `string`: Used to perform a consistent read-modify-write.
  * name **required** `string`: The resource name of the role in one of the following formats:
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Role](#role)

### organizations.roles.get
Gets a Role definition.


```js
google_iam.organizations.roles.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the role in one of the following formats:
  * publicKeyType `string` (values: TYPE_NONE, TYPE_X509_PEM_FILE, TYPE_RAW_PUBLIC_KEY): The output format of the public key requested.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Role](#role)

### organizations.roles.patch
Updates a Role definition.


```js
google_iam.organizations.roles.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Role](#role)
  * name **required** `string`: The resource name of the role in one of the following formats:
  * updateMask `string`: A mask describing which fields in the Role have changed.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Role](#role)

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

#### Input
* input `object`
  * body [ServiceAccount](#serviceaccount)
  * name **required** `string`: The resource name of the service account in the following format:
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ServiceAccount](#serviceaccount)

### projects.serviceAccounts.keys.list
Lists ServiceAccountKeys.


```js
google_iam.projects.serviceAccounts.keys.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * keyTypes `array`: Filters the types of keys the user wants to include in the list
  * name **required** `string`: The resource name of the service account in the following format:
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListServiceAccountKeysResponse](#listserviceaccountkeysresponse)

### projects.serviceAccounts.keys.create
Creates a ServiceAccountKey
and returns it.


```js
google_iam.projects.serviceAccounts.keys.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CreateServiceAccountKeyRequest](#createserviceaccountkeyrequest)
  * name **required** `string`: The resource name of the service account in the following format:
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ServiceAccountKey](#serviceaccountkey)

### projects.serviceAccounts.list
Lists ServiceAccounts for a project.


```js
google_iam.projects.serviceAccounts.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the project associated with the service
  * pageToken `string`: Optional pagination token returned in an earlier
  * pageSize `integer`: Optional limit on the number of service accounts to include in the
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ListServiceAccountsResponse](#listserviceaccountsresponse)

### projects.serviceAccounts.create
Creates a ServiceAccount
and returns it.


```js
google_iam.projects.serviceAccounts.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the project associated with the service
  * body [CreateServiceAccountRequest](#createserviceaccountrequest)
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [ServiceAccount](#serviceaccount)

### projects.serviceAccounts.signBlob
Signs a blob using a service account's system-managed private key.


```js
google_iam.projects.serviceAccounts.signBlob({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [SignBlobRequest](#signblobrequest)
  * name **required** `string`: The resource name of the service account in the following format:
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [SignBlobResponse](#signblobresponse)

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

#### Input
* input `object`
  * body [SignJwtRequest](#signjwtrequest)
  * name **required** `string`: The resource name of the service account in the following format:
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [SignJwtResponse](#signjwtresponse)

### organizations.roles.undelete
Undelete a Role, bringing it back in its previous state.


```js
google_iam.organizations.roles.undelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UndeleteRoleRequest](#undeleterolerequest)
  * name **required** `string`: The resource name of the role in one of the following formats:
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
* output [Role](#role)

### organizations.roles.list
Lists the Roles defined on a resource.


```js
google_iam.organizations.roles.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional limit on the number of roles to include in the response.
  * pageToken `string` (values: BASIC, FULL): Optional pagination token returned in an earlier ListRolesResponse.
  * parent **required** `string`: The resource name of the parent resource in one of the following formats:
  * showDeleted `boolean`: Include Roles that have been deleted.
  * view `string` (values: BASIC, FULL): Optional view for the returned Role objects.
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
* output [ListRolesResponse](#listrolesresponse)

### organizations.roles.create
Creates a new Role.


```js
google_iam.organizations.roles.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [CreateRoleRequest](#createrolerequest)
  * parent **required** `string`: The resource name of the parent resource in one of the following formats:
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
* output [Role](#role)

### projects.serviceAccounts.getIamPolicy
Returns the IAM access control policy for a
ServiceAccount.


```js
google_iam.projects.serviceAccounts.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Policy](#policy)

### projects.serviceAccounts.setIamPolicy
Sets the IAM access control policy for a
ServiceAccount.


```js
google_iam.projects.serviceAccounts.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [Policy](#policy)

### projects.serviceAccounts.testIamPermissions
Tests the specified permissions against the IAM access control policy
for a ServiceAccount.


```js
google_iam.projects.serviceAccounts.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### AuditData
* AuditData `object`: Audit log information specific to Cloud IAM. This message is serialized
  * policyDelta [PolicyDelta](#policydelta)

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### BindingDelta
* BindingDelta `object`: One delta entry for Binding. Each individual change (only one member in each
  * action `string` (values: ACTION_UNSPECIFIED, ADD, REMOVE): The action that was performed on a Binding.
  * condition [Expr](#expr)
  * member `string`: A single identity requesting access for a Cloud Platform resource.
  * role `string`: Role that is assigned to `members`.

### CreateRoleRequest
* CreateRoleRequest `object`: The request to create a new role.
  * role [Role](#role)
  * roleId `string`: The role id to use for this role.

### CreateServiceAccountKeyRequest
* CreateServiceAccountKeyRequest `object`: The service account key create request.
  * keyAlgorithm `string` (values: KEY_ALG_UNSPECIFIED, KEY_ALG_RSA_1024, KEY_ALG_RSA_2048, KEY_ALG_GCS_SYMMETRIC_HMAC): Which type of key and algorithm to use for the key.
  * privateKeyType `string` (values: TYPE_UNSPECIFIED, TYPE_PKCS12_FILE, TYPE_GOOGLE_CREDENTIALS_FILE): The output format of the private key. `GOOGLE_CREDENTIALS_FILE` is the

### CreateServiceAccountRequest
* CreateServiceAccountRequest `object`: The service account create request.
  * accountId `string`: Required. The account id that is used to generate the service account
  * serviceAccount [ServiceAccount](#serviceaccount)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Expr
* Expr `object`: Represents an expression text. Example:
  * description `string`: An optional description of the expression. This is a longer text which
  * expression `string`: Textual representation of an expression in
  * location `string`: An optional string indicating the location of the expression for error
  * title `string`: An optional title for the expression, i.e. a short string describing

### ListRolesResponse
* ListRolesResponse `object`: The response containing the roles defined under a resource.
  * nextPageToken `string`: To retrieve the next page of results, set
  * roles `array`: The Roles defined on this resource.
    * items [Role](#role)

### ListServiceAccountKeysResponse
* ListServiceAccountKeysResponse `object`: The service account keys list response.
  * keys `array`: The public keys for the service account.
    * items [ServiceAccountKey](#serviceaccountkey)

### ListServiceAccountsResponse
* ListServiceAccountsResponse `object`: The service account list response.
  * accounts `array`: The list of matching service accounts.
    * items [ServiceAccount](#serviceaccount)
  * nextPageToken `string`: To retrieve the next page of results, set

### Permission
* Permission `object`: A permission which can be included by a role.
  * customRolesSupportLevel `string` (values: SUPPORTED, TESTING, NOT_SUPPORTED): The current custom role support level.
  * description `string`: A brief description of what this Permission is used for.
  * name `string`: The name of this Permission.
  * onlyInPredefinedRoles `boolean`: This permission can ONLY be used in predefined roles.
  * stage `string` (values: ALPHA, BETA, GA, DEPRECATED): The current launch stage of the permission.
  * title `string`: The title of this Permission.

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Version of the `Policy`. The default version is 0.

### PolicyDelta
* PolicyDelta `object`: The difference delta between two policies.
  * bindingDeltas `array`: The delta for Bindings between two policies.
    * items [BindingDelta](#bindingdelta)

### QueryGrantableRolesRequest
* QueryGrantableRolesRequest `object`: The grantable role query request.
  * fullResourceName `string`: Required. The full resource name to query from the list of grantable roles.
  * pageSize `integer`: Optional limit on the number of roles to include in the response.
  * pageToken `string`: Optional pagination token returned in an earlier
  * view `string` (values: BASIC, FULL)

### QueryGrantableRolesResponse
* QueryGrantableRolesResponse `object`: The grantable role query response.
  * nextPageToken `string`: To retrieve the next page of results, set
  * roles `array`: The list of matching roles.
    * items [Role](#role)

### QueryTestablePermissionsRequest
* QueryTestablePermissionsRequest `object`: A request to get permissions which can be tested on a resource.
  * fullResourceName `string`: Required. The full resource name to query from the list of testable
  * pageSize `integer`: Optional limit on the number of permissions to include in the response.
  * pageToken `string`: Optional pagination token returned in an earlier

### QueryTestablePermissionsResponse
* QueryTestablePermissionsResponse `object`: The response containing permissions which can be tested on a resource.
  * nextPageToken `string`: To retrieve the next page of results, set
  * permissions `array`: The Permissions testable on the requested resource.
    * items [Permission](#permission)

### Role
* Role `object`: A role in the Identity and Access Management API.
  * deleted `boolean`: The current deleted state of the role. This field is read only.
  * description `string`: Optional.  A human-readable description for the role.
  * etag `string`: Used to perform a consistent read-modify-write.
  * includedPermissions `array`: The names of the permissions this role grants when bound in an IAM policy.
    * items `string`
  * name `string`: The name of the role.
  * stage `string` (values: ALPHA, BETA, GA, DEPRECATED, DISABLED, EAP): The current launch stage of the role.
  * title `string`: Optional.  A human-readable title for the role.  Typically this

### ServiceAccount
* ServiceAccount `object`: A service account in the Identity and Access Management API.
  * displayName `string`: Optional. A user-specified description of the service account.  Must be
  * email `string`: @OutputOnly The email address of the service account.
  * etag `string`: Used to perform a consistent read-modify-write.
  * name `string`: The resource name of the service account in the following format:
  * oauth2ClientId `string`: @OutputOnly. The OAuth2 client id for the service account.
  * projectId `string`: @OutputOnly The id of the project that owns the service account.
  * uniqueId `string`: @OutputOnly The unique and stable id of the service account.

### ServiceAccountKey
* ServiceAccountKey `object`: Represents a service account key.
  * keyAlgorithm `string` (values: KEY_ALG_UNSPECIFIED, KEY_ALG_RSA_1024, KEY_ALG_RSA_2048, KEY_ALG_GCS_SYMMETRIC_HMAC): Specifies the algorithm (and possibly key size) for the key.
  * name `string`: The resource name of the service account key in the following format
  * privateKeyData `string`: The private key data. Only provided in `CreateServiceAccountKey`
  * privateKeyType `string` (values: TYPE_UNSPECIFIED, TYPE_PKCS12_FILE, TYPE_GOOGLE_CREDENTIALS_FILE): The output format for the private key.
  * publicKeyData `string`: The public key data. Only provided in `GetServiceAccountKey` responses.
  * validAfterTime `string`: The key can be used after this timestamp.
  * validBeforeTime `string`: The key can be used before this timestamp.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### SignBlobRequest
* SignBlobRequest `object`: The service account sign blob request.
  * bytesToSign `string`: The bytes to sign.

### SignBlobResponse
* SignBlobResponse `object`: The service account sign blob response.
  * keyId `string`: The id of the key used to sign the blob.
  * signature `string`: The signed blob.

### SignJwtRequest
* SignJwtRequest `object`: The service account sign JWT request.
  * payload `string`: The JWT payload to sign, a JSON JWT Claim set.

### SignJwtResponse
* SignJwtResponse `object`: The service account sign JWT response.
  * keyId `string`: The id of the key used to sign the JWT.
  * signedJwt `string`: The signed JWT.

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### UndeleteRoleRequest
* UndeleteRoleRequest `object`: The request to undelete an existing role.
  * etag `string`: Used to perform a consistent read-modify-write.


