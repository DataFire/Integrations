# @datafire/google_clouduseraccounts

Client library for Cloud User Accounts

## Installation and Usage
```bash
npm install --save @datafire/google_clouduseraccounts
```
```js
let google_clouduseraccounts = require('@datafire/google_clouduseraccounts').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_clouduseraccounts.groups.list({}).then(data => {
  console.log(data);
})
```

## Description

Creates and manages users and groups for accessing Google Compute Engine virtual machines.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_clouduseraccounts.oauthCallback({
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
google_clouduseraccounts.oauthRefresh(null, context)
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

### groups.list
Retrieves the list of groups contained within the specified project.


```js
google_clouduseraccounts.groups.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * filter `string`: Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GroupList](#grouplist)

### groups.insert
Creates a Group resource in the specified project using the data included in the request.


```js
google_clouduseraccounts.groups.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * body [Group](#group)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### groups.delete
Deletes the specified Group resource.


```js
google_clouduseraccounts.groups.delete({
  "project": "",
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * groupName **required** `string`: Name of the Group resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### groups.get
Returns the specified Group resource.


```js
google_clouduseraccounts.groups.get({
  "project": "",
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * groupName **required** `string`: Name of the Group resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Group](#group)

### groups.addMember
Adds users to the specified group.


```js
google_clouduseraccounts.groups.addMember({
  "project": "",
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * groupName **required** `string`: Name of the group for this request.
  * body [GroupsAddMemberRequest](#groupsaddmemberrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### groups.removeMember
Removes users from the specified group.


```js
google_clouduseraccounts.groups.removeMember({
  "project": "",
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * groupName **required** `string`: Name of the group for this request.
  * body [GroupsRemoveMemberRequest](#groupsremovememberrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### groups.getIamPolicy
Gets the access control policy for a resource. May be empty if no such policy or resource exists.


```js
google_clouduseraccounts.groups.getIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### groups.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_clouduseraccounts.groups.setIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * body [Policy](#policy)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### groups.testIamPermissions
Returns permissions that a caller has on the specified resource.


```js
google_clouduseraccounts.groups.testIamPermissions({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * body [TestPermissionsRequest](#testpermissionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TestPermissionsResponse](#testpermissionsresponse)

### globalAccountsOperations.list
Retrieves the list of operation resources contained within the specified project.


```js
google_clouduseraccounts.globalAccountsOperations.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * filter `string`: Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationList](#operationlist)

### globalAccountsOperations.delete
Deletes the specified operation resource.


```js
google_clouduseraccounts.globalAccountsOperations.delete({
  "project": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * operation **required** `string`: Name of the Operations resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### globalAccountsOperations.get
Retrieves the specified operation resource.


```js
google_clouduseraccounts.globalAccountsOperations.get({
  "project": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * operation **required** `string`: Name of the Operations resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### users.list
Retrieves a list of users contained within the specified project.


```js
google_clouduseraccounts.users.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * filter `string`: Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UserList](#userlist)

### users.insert
Creates a User resource in the specified project using the data included in the request.


```js
google_clouduseraccounts.users.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * body [User](#user)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### users.getIamPolicy
Gets the access control policy for a resource. May be empty if no such policy or resource exists.


```js
google_clouduseraccounts.users.getIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### users.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_clouduseraccounts.users.setIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * body [Policy](#policy)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### users.testIamPermissions
Returns permissions that a caller has on the specified resource.


```js
google_clouduseraccounts.users.testIamPermissions({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name of the resource for this request.
  * body [TestPermissionsRequest](#testpermissionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TestPermissionsResponse](#testpermissionsresponse)

### users.delete
Deletes the specified User resource.


```js
google_clouduseraccounts.users.delete({
  "project": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * user **required** `string`: Name of the user resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### users.get
Returns the specified User resource.


```js
google_clouduseraccounts.users.get({
  "project": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * user **required** `string`: Name of the user resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [User](#user)

### users.addPublicKey
Adds a public key to the specified User resource with the data included in the request.


```js
google_clouduseraccounts.users.addPublicKey({
  "project": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * user **required** `string`: Name of the user for this request.
  * body [PublicKey](#publickey)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### users.removePublicKey
Removes the specified public key from the user.


```js
google_clouduseraccounts.users.removePublicKey({
  "project": "",
  "user": "",
  "fingerprint": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * user **required** `string`: Name of the user for this request.
  * fingerprint **required** `string`: The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which is defined by RFC4716 to be the MD5 digest of the public key.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### linux.getAuthorizedKeysView
Returns a list of authorized public keys for a specific user account.


```js
google_clouduseraccounts.linux.getAuthorizedKeysView({
  "project": "",
  "zone": "",
  "user": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone for this request.
  * user **required** `string`: The user account for which you want to get a list of authorized public keys.
  * instance **required** `string`: The fully-qualified URL of the virtual machine requesting the view.
  * login `boolean`: Whether the view was requested as part of a user-initiated login.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LinuxGetAuthorizedKeysViewResponse](#linuxgetauthorizedkeysviewresponse)

### linux.getLinuxAccountViews
Retrieves a list of user accounts for an instance within a specific project.


```js
google_clouduseraccounts.linux.getLinuxAccountViews({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * zone **required** `string`: Name of the zone for this request.
  * instance **required** `string`: The fully-qualified URL of the virtual machine requesting the views.
  * filter `string`: Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
  * pageToken `string`: Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LinuxGetLinuxAccountViewsResponse](#linuxgetlinuxaccountviewsresponse)



## Definitions

### AuditConfig
* AuditConfig `object`: Enables "data access" audit logging for a service and specifies a list of members that are log-exempted.
  * exemptedMembers `array`: Specifies the identities that are exempted from "data access" audit logging for the `service` specified above. Follows the same format of Binding.members.
    * items `string`
  * service `string`: Specifies a service that will be enabled for "data access" audit logging. For example, `resourcemanager`, `storage`, `compute`. `allServices` is a special value that covers all services.

### AuthorizedKeysView
* AuthorizedKeysView `object`: A list of authorized public keys for a user account.
  * keys `array`: [Output Only] The list of authorized public keys in SSH format.
    * items `string`
  * sudoer `boolean`: [Output Only] Whether the user has the ability to elevate on the instance that requested the authorized keys.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### Condition
* Condition `object`: A condition to be met.
  * iam `string` (values: ATTRIBUTION, AUTHORITY, NO_ATTR): Trusted attributes supplied by the IAM system.
  * op `string` (values: DISCHARGED, EQUALS, IN, NOT_EQUALS, NOT_IN, NO_OP): An operator to apply the subject with.
  * svc `string`: Trusted attributes discharged by the service.
  * sys `string` (values: IP, NAME, NO_ATTR, REGION, SERVICE): Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
  * value `string`: The object of the condition. Exactly one of these must be set.
  * values `array`: The objects of the condition. This is mutually exclusive with 'value'.
    * items `string`

### Group
* Group `object`: A Group resource.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always clouduseraccounts#group for groups.
  * members `array`: [Output Only] A list of URLs to User resources who belong to the group. Users may only be members of groups in the same project.
    * items `string`
  * name `string`: Name of the resource; provided by the client when the resource is created.
  * selfLink `string`: [Output Only] Server defined URL for the resource.

### GroupList
* GroupList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: [Output Only] A list of Group resources.
    * items [Group](#group)
  * kind `string`: [Output Only] Type of resource. Always clouduseraccounts#groupList for lists of groups.
  * nextPageToken `string`: [Output Only] A token used to continue a truncated list request.
  * selfLink `string`: [Output Only] Server defined URL for this resource.

### GroupsAddMemberRequest
* GroupsAddMemberRequest `object`
  * users `array`: Fully-qualified URLs of the User resources to add.
    * items `string`

### GroupsRemoveMemberRequest
* GroupsRemoveMemberRequest `object`
  * users `array`: Fully-qualified URLs of the User resources to remove.
    * items `string`

### LinuxAccountViews
* LinuxAccountViews `object`: A list of all Linux accounts for this project. This API is only used by Compute Engine virtual machines to get information about user accounts for a project or instance. Linux resources are read-only views into users and groups managed by the Compute Engine Accounts API.
  * groupViews `array`: [Output Only] A list of all groups within a project.
    * items [LinuxGroupView](#linuxgroupview)
  * kind `string`: [Output Only] Type of the resource. Always clouduseraccounts#linuxAccountViews for Linux resources.
  * userViews `array`: [Output Only] A list of all users within a project.
    * items [LinuxUserView](#linuxuserview)

### LinuxGetAuthorizedKeysViewResponse
* LinuxGetAuthorizedKeysViewResponse `object`
  * resource [AuthorizedKeysView](#authorizedkeysview)

### LinuxGetLinuxAccountViewsResponse
* LinuxGetLinuxAccountViewsResponse `object`
  * resource [LinuxAccountViews](#linuxaccountviews)

### LinuxGroupView
* LinuxGroupView `object`: A detailed view of a Linux group.
  * gid `integer`: [Output Only] The Group ID.
  * groupName `string`: [Output Only] Group name.
  * members `array`: [Output Only] List of user accounts that belong to the group.
    * items `string`

### LinuxUserView
* LinuxUserView `object`: A detailed view of a Linux user account.
  * gecos `string`: [Output Only] The GECOS (user information) entry for this account.
  * gid `integer`: [Output Only] User's default group ID.
  * homeDirectory `string`: [Output Only] The path to the home directory for this account.
  * shell `string`: [Output Only] The path to the login shell for this account.
  * uid `integer`: [Output Only] User ID.
  * username `string`: [Output Only] The username of the account.

### LogConfig
* LogConfig `object`: Specifies what kind of log the caller must write
  * counter [LogConfigCounterOptions](#logconfigcounteroptions)

### LogConfigCounterOptions
* LogConfigCounterOptions `object`: Options for counters
  * field `string`: The field value to attribute.
  * metric `string`: The metric to update.

### Operation
* Operation `object`: An Operation resource, used to manage asynchronous API requests.
  * clientOperationId `string`: [Output Only] Reserved for future use.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: [Output Only] A textual description of the operation, which is set when the operation is created.
  * endTime `string`: [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
  * error `object`: [Output Only] If errors are generated during processing of the operation, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * httpErrorMessage `string`: [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
  * httpErrorStatusCode `integer`: [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * insertTime `string`: [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
  * kind `string`: [Output Only] Type of the resource. Always compute#operation for Operation resources.
  * name `string`: [Output Only] Name of the resource.
  * operationType `string`: [Output Only] The type of operation, such as insert, update, or delete, and so on.
  * progress `integer`: [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
  * region `string`: [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * startTime `string`: [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
  * status `string` (values: DONE, PENDING, RUNNING): [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the operation.
  * targetId `string`: [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
  * targetLink `string`: [Output Only] The URL of the resource that the operation modifies.
  * user `string`: [Output Only] User who requested the operation, for example: user@example.com.
  * warnings `array`: [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
    * items `object`
      * code `string` (values: CLEANUP_FAILED, DEPRECATED_RESOURCE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, INJECTED_KERNELS_DEPRECATED, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NOT_CRITICAL_ERROR, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_NOT_DELETED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNREACHABLE): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example:
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.
  * zone `string`: [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.

### OperationList
* OperationList `object`: Contains a list of Operation resources.
  * id `string`: [Output Only] The unique identifier for the resource. This identifier is defined by the server.
  * items `array`: [Output Only] A list of Operation resources.
    * items [Operation](#operation)
  * kind `string`: [Output Only] Type of resource. Always compute#operations for Operations resource.
  * nextPageToken `string`: [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
  * selfLink `string`: [Output Only] Server-defined URL for this resource.

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.
  * auditConfigs `array`: Specifies audit logging configs for "data access". "data access": generally refers to data reads/writes and admin reads. "admin activity": generally refers to admin writes.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Multiple `bindings` must not be specified for the same `role`. `bindings` with no members will result in an error.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.
  * iamOwned `boolean`
  * rules `array`: If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
    * items [Rule](#rule)
  * version `integer`: Version of the `Policy`. The default version is 0.

### PublicKey
* PublicKey `object`: A public key for authenticating to guests.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * expirationTimestamp `string`: Optional expiration timestamp. If provided, the timestamp must be in RFC3339 text format. If not provided, the public key never expires.
  * fingerprint `string`: [Output Only] The fingerprint of the key is defined by RFC4716 to be the MD5 digest of the public key.
  * key `string`: Public key text in SSH format, defined by RFC4253 section 6.6.

### Rule
* Rule `object`: A rule to be applied in a Policy.
  * action `string` (values: ALLOW, ALLOW_WITH_LOG, DENY, DENY_WITH_LOG, LOG, NO_ACTION): Required
  * conditions `array`: Additional restrictions that must be met
    * items [Condition](#condition)
  * description `string`: Human-readable description of the rule.
  * ins `array`: The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in this set of entries.
    * items `string`
  * logConfigs `array`: The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
    * items [LogConfig](#logconfig)
  * notIns `array`: The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is not in this set of entries.
    * items `string`
  * permissions `array`: A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
    * items `string`

### TestPermissionsRequest
* TestPermissionsRequest `object`
  * permissions `array`: The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
    * items `string`

### TestPermissionsResponse
* TestPermissionsResponse `object`
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### User
* User `object`: A User resource.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * groups `array`: [Output Only] A list of URLs to Group resources who contain the user. Users are only members of groups in the same project.
    * items `string`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * kind `string`: [Output Only] Type of the resource. Always clouduseraccounts#user for users.
  * name `string`: Name of the resource; provided by the client when the resource is created.
  * owner `string`: Email address of account's owner. This account will be validated to make sure it exists. The email can belong to any domain, but it must be tied to a Google account.
  * publicKeys `array`: [Output Only] Public keys that this user may use to login.
    * items [PublicKey](#publickey)
  * selfLink `string`: [Output Only] Server defined URL for the resource.

### UserList
* UserList `object`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: [Output Only] A list of User resources.
    * items [User](#user)
  * kind `string`: [Output Only] Type of resource. Always clouduseraccounts#userList for lists of users.
  * nextPageToken `string`: [Output Only] A token used to continue a truncated list request.
  * selfLink `string`: [Output Only] Server defined URL for this resource.


