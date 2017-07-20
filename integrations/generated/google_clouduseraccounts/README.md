# @datafire/google_clouduseraccounts

Client library for Cloud User Accounts

## Installation and Usage
```bash
npm install --save datafire @datafire/google_clouduseraccounts
```

```js
let datafire = require('datafire');
let google_clouduseraccounts = require('@datafire/google_clouduseraccounts').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_clouduseraccounts: account,
  }
})


google_clouduseraccounts.groups.list({}, context).then(data => {
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_clouduseraccounts.oauthRefresh(null, context)
```


### groups.list
Retrieves the list of groups contained within the specified project.


```js
google_clouduseraccounts.groups.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.insert
Creates a Group resource in the specified project using the data included in the request.


```js
google_clouduseraccounts.groups.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A Group resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.delete
Deletes the specified Group resource.


```js
google_clouduseraccounts.groups.delete({
  "project": "",
  "groupName": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* groupName (string) **required** - Name of the Group resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.get
Returns the specified Group resource.


```js
google_clouduseraccounts.groups.get({
  "project": "",
  "groupName": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* groupName (string) **required** - Name of the Group resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.addMember
Adds users to the specified group.


```js
google_clouduseraccounts.groups.addMember({
  "project": "",
  "groupName": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* groupName (string) **required** - Name of the group for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.removeMember
Removes users from the specified group.


```js
google_clouduseraccounts.groups.removeMember({
  "project": "",
  "groupName": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* groupName (string) **required** - Name of the group for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.getIamPolicy
Gets the access control policy for a resource. May be empty if no such policy or resource exists.


```js
google_clouduseraccounts.groups.getIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_clouduseraccounts.groups.setIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* body (object) - Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.testIamPermissions
Returns permissions that a caller has on the specified resource.


```js
google_clouduseraccounts.groups.testIamPermissions({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalAccountsOperations.list
Retrieves the list of operation resources contained within the specified project.


```js
google_clouduseraccounts.globalAccountsOperations.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalAccountsOperations.delete
Deletes the specified operation resource.


```js
google_clouduseraccounts.globalAccountsOperations.delete({
  "project": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* operation (string) **required** - Name of the Operations resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### globalAccountsOperations.get
Retrieves the specified operation resource.


```js
google_clouduseraccounts.globalAccountsOperations.get({
  "project": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* operation (string) **required** - Name of the Operations resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.list
Retrieves a list of users contained within the specified project.


```js
google_clouduseraccounts.users.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.insert
Creates a User resource in the specified project using the data included in the request.


```js
google_clouduseraccounts.users.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* body (object) - A User resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.getIamPolicy
Gets the access control policy for a resource. May be empty if no such policy or resource exists.


```js
google_clouduseraccounts.users.getIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_clouduseraccounts.users.setIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* body (object) - Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.testIamPermissions
Returns permissions that a caller has on the specified resource.


```js
google_clouduseraccounts.users.testIamPermissions({
  "project": "",
  "resource": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* resource (string) **required** - Name of the resource for this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.delete
Deletes the specified User resource.


```js
google_clouduseraccounts.users.delete({
  "project": "",
  "user": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* user (string) **required** - Name of the user resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.get
Returns the specified User resource.


```js
google_clouduseraccounts.users.get({
  "project": "",
  "user": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* user (string) **required** - Name of the user resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.addPublicKey
Adds a public key to the specified User resource with the data included in the request.


```js
google_clouduseraccounts.users.addPublicKey({
  "project": "",
  "user": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* user (string) **required** - Name of the user for this request.
* body (object) - A public key for authenticating to guests.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.removePublicKey
Removes the specified public key from the user.


```js
google_clouduseraccounts.users.removePublicKey({
  "project": "",
  "user": "",
  "fingerprint": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* user (string) **required** - Name of the user for this request.
* fingerprint (string) **required** - The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which is defined by RFC4716 to be the MD5 digest of the public key.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* user (string) **required** - The user account for which you want to get a list of authorized public keys.
* instance (string) **required** - The fully-qualified URL of the virtual machine requesting the view.
* login (boolean) - Whether the view was requested as part of a user-initiated login.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### linux.getLinuxAccountViews
Retrieves a list of user accounts for an instance within a specific project.


```js
google_clouduseraccounts.linux.getLinuxAccountViews({
  "project": "",
  "zone": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID for this request.
* zone (string) **required** - Name of the zone for this request.
* instance (string) **required** - The fully-qualified URL of the virtual machine requesting the views.
* filter (string) - Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
* maxResults (integer) - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
* orderBy (string) - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
* pageToken (string) - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

