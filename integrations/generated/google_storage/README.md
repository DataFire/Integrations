# @datafire/google_storage

Client library for Cloud Storage

## Installation and Usage
```bash
npm install --save @datafire/google_storage
```
```js
let google_storage = require('@datafire/google_storage').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_storage.channels.stop({}).then(data => {
  console.log(data);
});
```

## Description

Stores and retrieves potentially large, immutable data objects.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_storage.oauthCallback({
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
google_storage.oauthRefresh(null, context)
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

### buckets.list
Retrieves a list of buckets for a given project.


```js
google_storage.buckets.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
  * prefix `string`: Filter results to buckets whose names begin with this prefix.
  * project **required** `string`: A valid API project identifier.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl.
  * userProject `string`: The project to be billed for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Buckets](#buckets)

### buckets.insert
Creates a new bucket.


```js
google_storage.buckets.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Bucket](#bucket)
  * predefinedAcl `string` (values: authenticatedRead, private, projectPrivate, publicRead, publicReadWrite): Apply a predefined set of access controls to this bucket.
  * predefinedDefaultObjectAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of default object access controls to this bucket.
  * project **required** `string`: A valid API project identifier.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
  * userProject `string`: The project to be billed for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Bucket](#bucket)

### buckets.delete
Permanently deletes an empty bucket.


```js
google_storage.buckets.delete({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * ifMetagenerationMatch `string`: If set, only deletes the bucket if its metageneration matches this value.
  * ifMetagenerationNotMatch `string`: If set, only deletes the bucket if its metageneration does not match this value.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### buckets.get
Returns metadata for the specified bucket.


```js
google_storage.buckets.get({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * ifMetagenerationMatch `string`: Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Bucket](#bucket)

### buckets.patch
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method supports patch semantics.


```js
google_storage.buckets.patch({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body [Bucket](#bucket)
  * bucket **required** `string`: Name of a bucket.
  * ifMetagenerationMatch `string`: Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
  * predefinedAcl `string` (values: authenticatedRead, private, projectPrivate, publicRead, publicReadWrite): Apply a predefined set of access controls to this bucket.
  * predefinedDefaultObjectAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of default object access controls to this bucket.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to full.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Bucket](#bucket)

### buckets.update
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.


```js
google_storage.buckets.update({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body [Bucket](#bucket)
  * bucket **required** `string`: Name of a bucket.
  * ifMetagenerationMatch `string`: Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
  * predefinedAcl `string` (values: authenticatedRead, private, projectPrivate, publicRead, publicReadWrite): Apply a predefined set of access controls to this bucket.
  * predefinedDefaultObjectAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of default object access controls to this bucket.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to full.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Bucket](#bucket)

### bucketAccessControls.list
Retrieves ACL entries on the specified bucket.


```js
google_storage.bucketAccessControls.list({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BucketAccessControls](#bucketaccesscontrols)

### bucketAccessControls.insert
Creates a new ACL entry on the specified bucket.


```js
google_storage.bucketAccessControls.insert({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body [BucketAccessControl](#bucketaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BucketAccessControl](#bucketaccesscontrol)

### bucketAccessControls.delete
Permanently deletes the ACL entry for the specified entity on the specified bucket.


```js
google_storage.bucketAccessControls.delete({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### bucketAccessControls.get
Returns the ACL entry for the specified entity on the specified bucket.


```js
google_storage.bucketAccessControls.get({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BucketAccessControl](#bucketaccesscontrol)

### bucketAccessControls.patch
Updates an ACL entry on the specified bucket. This method supports patch semantics.


```js
google_storage.bucketAccessControls.patch({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * body [BucketAccessControl](#bucketaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BucketAccessControl](#bucketaccesscontrol)

### bucketAccessControls.update
Updates an ACL entry on the specified bucket.


```js
google_storage.bucketAccessControls.update({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * body [BucketAccessControl](#bucketaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BucketAccessControl](#bucketaccesscontrol)

### defaultObjectAccessControls.list
Retrieves default object ACL entries on the specified bucket.


```js
google_storage.defaultObjectAccessControls.list({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * ifMetagenerationMatch `string`: If present, only return default ACL listing if the bucket's current metageneration matches this value.
  * ifMetagenerationNotMatch `string`: If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControls](#objectaccesscontrols)

### defaultObjectAccessControls.insert
Creates a new default object ACL entry on the specified bucket.


```js
google_storage.defaultObjectAccessControls.insert({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body [ObjectAccessControl](#objectaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### defaultObjectAccessControls.delete
Permanently deletes the default object ACL entry for the specified entity on the specified bucket.


```js
google_storage.defaultObjectAccessControls.delete({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### defaultObjectAccessControls.get
Returns the default object ACL entry for the specified entity on the specified bucket.


```js
google_storage.defaultObjectAccessControls.get({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### defaultObjectAccessControls.patch
Updates a default object ACL entry on the specified bucket. This method supports patch semantics.


```js
google_storage.defaultObjectAccessControls.patch({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * body [ObjectAccessControl](#objectaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### defaultObjectAccessControls.update
Updates a default object ACL entry on the specified bucket.


```js
google_storage.defaultObjectAccessControls.update({
  "bucket": "",
  "entity": ""
}, context)
```

#### Input
* input `object`
  * body [ObjectAccessControl](#objectaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### buckets.getIamPolicy
Returns an IAM policy for the specified bucket.


```js
google_storage.buckets.getIamPolicy({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### buckets.setIamPolicy
Updates an IAM policy for the specified bucket.


```js
google_storage.buckets.setIamPolicy({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body [Policy](#policy)
  * bucket **required** `string`: Name of a bucket.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### buckets.testIamPermissions
Tests a set of permissions on the given bucket to see which, if any, are held by the caller.


```js
google_storage.buckets.testIamPermissions({
  "bucket": "",
  "permissions": []
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * permissions **required** `array`: Permissions to test.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)

### buckets.lockRetentionPolicy
Locks retention policy on a bucket.


```js
google_storage.buckets.lockRetentionPolicy({
  "bucket": "",
  "ifMetagenerationMatch": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * ifMetagenerationMatch **required** `string`: Makes the operation conditional on whether bucket's current metageneration matches the given value.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Bucket](#bucket)

### notifications.list
Retrieves a list of notification subscriptions for a given bucket.


```js
google_storage.notifications.list({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a Google Cloud Storage bucket.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Notifications](#notifications)

### notifications.insert
Creates a notification subscription for a given bucket.


```js
google_storage.notifications.insert({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body [Notification](#notification)
  * bucket **required** `string`: The parent bucket of the notification.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Notification](#notification)

### notifications.delete
Permanently deletes a notification subscription.


```js
google_storage.notifications.delete({
  "bucket": "",
  "notification": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: The parent bucket of the notification.
  * notification **required** `string`: ID of the notification to delete.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### notifications.get
View a notification configuration.


```js
google_storage.notifications.get({
  "bucket": "",
  "notification": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: The parent bucket of the notification.
  * notification **required** `string`: Notification ID
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Notification](#notification)

### objects.list
Retrieves a list of objects matching the criteria.


```js
google_storage.objects.list({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of the bucket in which to look for objects.
  * delimiter `string`: Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
  * maxResults `integer`: Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
  * prefix `string`: Filter results to objects whose names begin with this prefix.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * versions `boolean`: If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Objects](#objects)

### objects.insert
Stores a new object and metadata.


```js
google_storage.objects.insert({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * body [Object](#object)
  * bucket **required** `string`: Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
  * contentEncoding `string`: If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
  * ifGenerationMatch `string`: Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifGenerationNotMatch `string`: Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the object's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the operation conditional on whether the object's current metageneration does not match the given value.
  * kmsKeyName `string`: Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. Limited availability; usable only by enabled projects.
  * name `string`: Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * predefinedAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of access controls to this object.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Object](#object)

### objects.watchAll
Watch for changes on all objects in a bucket.


```js
google_storage.objects.watchAll({
  "bucket": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of the bucket in which to look for objects.
  * delimiter `string`: Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
  * maxResults `integer`: Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
  * prefix `string`: Filter results to objects whose names begin with this prefix.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl.
  * resource [Channel](#channel)
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * versions `boolean`: If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### objects.delete
Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.


```js
google_storage.objects.delete({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of the bucket in which the object resides.
  * generation `string`: If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
  * ifGenerationMatch `string`: Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifGenerationNotMatch `string`: Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the object's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the operation conditional on whether the object's current metageneration does not match the given value.
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### objects.get
Retrieves an object or its metadata.


```js
google_storage.objects.get({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of the bucket in which the object resides.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * ifGenerationMatch `string`: Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifGenerationNotMatch `string`: Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the object's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the operation conditional on whether the object's current metageneration does not match the given value.
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Object](#object)

### objects.patch
Patches an object's metadata.


```js
google_storage.objects.patch({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * body [Object](#object)
  * bucket **required** `string`: Name of the bucket in which the object resides.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * ifGenerationMatch `string`: Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifGenerationNotMatch `string`: Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the object's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the operation conditional on whether the object's current metageneration does not match the given value.
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * predefinedAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of access controls to this object.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to full.
  * userProject `string`: The project to be billed for this request, for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Object](#object)

### objects.update
Updates an object's metadata.


```js
google_storage.objects.update({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * body [Object](#object)
  * bucket **required** `string`: Name of the bucket in which the object resides.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * ifGenerationMatch `string`: Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifGenerationNotMatch `string`: Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the object's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the operation conditional on whether the object's current metageneration does not match the given value.
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * predefinedAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of access controls to this object.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to full.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Object](#object)

### objectAccessControls.list
Retrieves ACL entries on the specified object.


```js
google_storage.objectAccessControls.list({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControls](#objectaccesscontrols)

### objectAccessControls.insert
Creates a new ACL entry on the specified object.


```js
google_storage.objectAccessControls.insert({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * body [ObjectAccessControl](#objectaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### objectAccessControls.delete
Permanently deletes the ACL entry for the specified entity on the specified object.


```js
google_storage.objectAccessControls.delete({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### objectAccessControls.get
Returns the ACL entry for the specified entity on the specified object.


```js
google_storage.objectAccessControls.get({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### objectAccessControls.patch
Updates an ACL entry on the specified object. This method supports patch semantics.


```js
google_storage.objectAccessControls.patch({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * body [ObjectAccessControl](#objectaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### objectAccessControls.update
Updates an ACL entry on the specified object.


```js
google_storage.objectAccessControls.update({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * body [ObjectAccessControl](#objectaccesscontrol)
  * bucket **required** `string`: Name of a bucket.
  * entity **required** `string`: The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ObjectAccessControl](#objectaccesscontrol)

### objects.getIamPolicy
Returns an IAM policy for the specified object.


```js
google_storage.objects.getIamPolicy({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of the bucket in which the object resides.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### objects.setIamPolicy
Updates an IAM policy for the specified object.


```js
google_storage.objects.setIamPolicy({
  "bucket": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * body [Policy](#policy)
  * bucket **required** `string`: Name of the bucket in which the object resides.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Policy](#policy)

### objects.testIamPermissions
Tests a set of permissions on the given object to see which, if any, are held by the caller.


```js
google_storage.objects.testIamPermissions({
  "bucket": "",
  "object": "",
  "permissions": []
}, context)
```

#### Input
* input `object`
  * bucket **required** `string`: Name of the bucket in which the object resides.
  * generation `string`: If present, selects a specific revision of this object (as opposed to the latest version, the default).
  * object **required** `string`: Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * permissions **required** `array`: Permissions to test.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)

### objects.compose
Concatenates a list of existing objects into a new object in the same bucket.


```js
google_storage.objects.compose({
  "destinationBucket": "",
  "destinationObject": ""
}, context)
```

#### Input
* input `object`
  * body [ComposeRequest](#composerequest)
  * destinationBucket **required** `string`: Name of the bucket in which to store the new object.
  * destinationObject **required** `string`: Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * destinationPredefinedAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of access controls to the destination object.
  * ifGenerationMatch `string`: Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the object's current metageneration matches the given value.
  * kmsKeyName `string`: Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Object](#object)

### objects.copy
Copies a source object to a destination object. Optionally overrides metadata.


```js
google_storage.objects.copy({
  "destinationBucket": "",
  "destinationObject": "",
  "sourceBucket": "",
  "sourceObject": ""
}, context)
```

#### Input
* input `object`
  * body [Object](#object)
  * destinationBucket **required** `string`: Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * destinationObject **required** `string`: Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
  * destinationPredefinedAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of access controls to the destination object.
  * ifGenerationMatch `string`: Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifGenerationNotMatch `string`: Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the destination object's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
  * ifSourceGenerationMatch `string`: Makes the operation conditional on whether the source object's current generation matches the given value.
  * ifSourceGenerationNotMatch `string`: Makes the operation conditional on whether the source object's current generation does not match the given value.
  * ifSourceMetagenerationMatch `string`: Makes the operation conditional on whether the source object's current metageneration matches the given value.
  * ifSourceMetagenerationNotMatch `string`: Makes the operation conditional on whether the source object's current metageneration does not match the given value.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
  * sourceBucket **required** `string`: Name of the bucket in which to find the source object.
  * sourceGeneration `string`: If present, selects a specific revision of the source object (as opposed to the latest version, the default).
  * sourceObject **required** `string`: Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Object](#object)

### objects.rewrite
Rewrites a source object to a destination object. Optionally overrides metadata.


```js
google_storage.objects.rewrite({
  "destinationBucket": "",
  "destinationObject": "",
  "sourceBucket": "",
  "sourceObject": ""
}, context)
```

#### Input
* input `object`
  * body [Object](#object)
  * destinationBucket **required** `string`: Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
  * destinationKmsKeyName `string`: Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
  * destinationObject **required** `string`: Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * destinationPredefinedAcl `string` (values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead): Apply a predefined set of access controls to the destination object.
  * ifGenerationMatch `string`: Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
  * ifGenerationNotMatch `string`: Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
  * ifMetagenerationMatch `string`: Makes the operation conditional on whether the destination object's current metageneration matches the given value.
  * ifMetagenerationNotMatch `string`: Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
  * ifSourceGenerationMatch `string`: Makes the operation conditional on whether the source object's current generation matches the given value.
  * ifSourceGenerationNotMatch `string`: Makes the operation conditional on whether the source object's current generation does not match the given value.
  * ifSourceMetagenerationMatch `string`: Makes the operation conditional on whether the source object's current metageneration matches the given value.
  * ifSourceMetagenerationNotMatch `string`: Makes the operation conditional on whether the source object's current metageneration does not match the given value.
  * maxBytesRewrittenPerCall `string`: The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
  * projection `string` (values: full, noAcl): Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
  * rewriteToken `string`: Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
  * sourceBucket **required** `string`: Name of the bucket in which to find the source object.
  * sourceGeneration `string`: If present, selects a specific revision of the source object (as opposed to the latest version, the default).
  * sourceObject **required** `string`: Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
  * userProject `string`: The project to be billed for this request. Required for Requester Pays buckets.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RewriteResponse](#rewriteresponse)

### channels.stop
Stop watching resources through this channel


```js
google_storage.channels.stop({}, context)
```

#### Input
* input `object`
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### projects.serviceAccount.get
Get the email address of this project's Google Cloud Storage service account.


```js
google_storage.projects.serviceAccount.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID
  * userProject `string`: The project to be billed for this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ServiceAccount](#serviceaccount)



## Definitions

### Bucket
* Bucket `object`: A bucket.
  * acl `array`: Access controls on the bucket.
    * items [BucketAccessControl](#bucketaccesscontrol)
  * billing `object`: The bucket's billing configuration.
    * requesterPays `boolean`: When set to true, Requester Pays is enabled for this bucket.
  * cors `array`: The bucket's Cross-Origin Resource Sharing (CORS) configuration.
    * items `object`
      * maxAgeSeconds `integer`: The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.
      * method `array`: The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
        * items `string`
      * origin `array`: The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
        * items `string`
      * responseHeader `array`: The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
        * items `string`
  * defaultEventBasedHold `boolean`: Defines the default value for Event-Based hold on newly created objects in this bucket. Event-Based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here bucket-level retention is 3 years and the event is loan being paid in full. In this example these objects will be held intact for any number of years until the event has occurred (hold is released) and then 3 more years after that. Objects under Event-Based hold cannot be deleted, overwritten or archived until the hold is removed.
  * defaultObjectAcl `array`: Default access controls to apply to new objects when no ACL is provided.
    * items [ObjectAccessControl](#objectaccesscontrol)
  * encryption `object`: Encryption configuration used by default for newly inserted objects, when no encryption config is specified.
    * defaultKmsKeyName `string`: A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. Limited availability; usable only by enabled projects.
  * etag `string`: HTTP 1.1 Entity tag for the bucket.
  * id `string`: The ID of the bucket. For buckets, the id and name properties are the same.
  * kind `string`: The kind of item this is. For buckets, this is always storage#bucket.
  * labels `object`: User-provided labels, in key/value pairs.
  * lifecycle `object`: The bucket's lifecycle configuration. See lifecycle management for more information.
    * rule `array`: A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.
      * items `object`
        * action `object`: The action to take.
          * storageClass `string`: Target storage class. Required iff the type of the action is SetStorageClass.
          * type `string`: Type of the action. Currently, only Delete and SetStorageClass are supported.
        * condition `object`: The condition(s) under which the action will be taken.
          * age `integer`: Age of an object (in days). This condition is satisfied when an object reaches the specified age.
          * createdBefore `string`: A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC.
          * isLive `boolean`: Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.
          * matchesStorageClass `array`: Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, STANDARD, and DURABLE_REDUCED_AVAILABILITY.
            * items `string`
          * numNewerVersions `integer`: Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.
  * location `string`: The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.
  * logging `object`: The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
    * logBucket `string`: The destination bucket where the current bucket's logs should be placed.
    * logObjectPrefix `string`: A prefix for log object names.
  * metageneration `string`: The metadata generation of this bucket.
  * name `string`: The name of the bucket.
  * owner `object`: The owner of the bucket. This is always the project team's owner group.
    * entity `string`: The entity, in the form project-owner-projectId.
    * entityId `string`: The ID for the entity.
  * projectNumber `string`: The project number of the project the bucket belongs to.
  * retentionPolicy `object`: Defines the retention policy for a bucket. The Retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via the UpdateBucketMetadata RPC. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
    * effectiveTime `string`: The time from which policy was enforced and effective. RFC 3339 format.
    * isLocked `boolean`: Once locked, an object retention policy cannot be modified.
    * retentionPeriod `string`: Specifies the duration that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes.
  * selfLink `string`: The URI of this bucket.
  * storageClass `string`: The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.
  * timeCreated `string`: The creation time of the bucket in RFC 3339 format.
  * updated `string`: The modification time of the bucket in RFC 3339 format.
  * versioning `object`: The bucket's versioning configuration.
    * enabled `boolean`: While set to true, versioning is fully enabled for this bucket.
  * website `object`: The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.
    * mainPageSuffix `string`: If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.
    * notFoundPage `string`: If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.

### BucketAccessControl
* BucketAccessControl `object`: An access-control entry.
  * bucket `string`: The name of the bucket.
  * domain `string`: The domain associated with the entity, if any.
  * email `string`: The email address associated with the entity, if any.
  * entity `string`: The entity holding the permission, in one of the following forms: 
  * entityId `string`: The ID for the entity, if any.
  * etag `string`: HTTP 1.1 Entity tag for the access-control entry.
  * id `string`: The ID of the access-control entry.
  * kind `string`: The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
  * projectTeam `object`: The project team associated with the entity, if any.
    * projectNumber `string`: The project number.
    * team `string`: The team.
  * role `string`: The access permission for the entity.
  * selfLink `string`: The link to this access-control entry.

### BucketAccessControls
* BucketAccessControls `object`: An access-control list.
  * items `array`: The list of items.
    * items [BucketAccessControl](#bucketaccesscontrol)
  * kind `string`: The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.

### Buckets
* Buckets `object`: A list of buckets.
  * items `array`: The list of items.
    * items [Bucket](#bucket)
  * kind `string`: The kind of item this is. For lists of buckets, this is always storage#buckets.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.

### Channel
* Channel `object`: An notification channel used to watch for resource changes.
  * address `string`: The address where notifications are delivered for this channel.
  * expiration `string`: Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
  * id `string`: A UUID or similar unique string that identifies this channel.
  * kind `string`: Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
  * params `object`: Additional parameters controlling delivery channel behavior. Optional.
  * payload `boolean`: A Boolean value to indicate whether payload is wanted. Optional.
  * resourceId `string`: An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
  * resourceUri `string`: A version-specific identifier for the watched resource.
  * token `string`: An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
  * type `string`: The type of delivery mechanism used for this channel.

### ComposeRequest
* ComposeRequest `object`: A Compose request.
  * destination [Object](#object)
  * kind `string`: The kind of item this is.
  * sourceObjects `array`: The list of source objects that will be concatenated into a single object.
    * items `object`
      * generation `string`: The generation of this object to use as the source.
      * name `string`: The source object's name. The source object's bucket is implicitly the destination bucket.
      * objectPreconditions `object`: Conditions that must be met for this operation to execute.
        * ifGenerationMatch `string`: Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail.

### Notification
* Notification `object`: A subscription to receive Google PubSub notifications.
  * custom_attributes `object`: An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.
  * etag `string`: HTTP 1.1 Entity tag for this subscription notification.
  * event_types `array`: If present, only send notifications about listed event types. If empty, sent notifications for all event types.
    * items `string`
  * id `string`: The ID of the notification.
  * kind `string`: The kind of item this is. For notifications, this is always storage#notification.
  * object_name_prefix `string`: If present, only apply this notification configuration to object names that begin with this prefix.
  * payload_format `string`: The desired content of the Payload.
  * selfLink `string`: The canonical URL of this notification.
  * topic `string`: The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}'

### Notifications
* Notifications `object`: A list of notification subscriptions.
  * items `array`: The list of items.
    * items [Notification](#notification)
  * kind `string`: The kind of item this is. For lists of notifications, this is always storage#notifications.

### Object
* Object `object`: An object.
  * acl `array`: Access controls on the object.
    * items [ObjectAccessControl](#objectaccesscontrol)
  * bucket `string`: The name of the bucket containing this object.
  * cacheControl `string`: Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.
  * componentCount `integer`: Number of underlying components that make up this object. Components are accumulated by compose operations.
  * contentDisposition `string`: Content-Disposition of the object data.
  * contentEncoding `string`: Content-Encoding of the object data.
  * contentLanguage `string`: Content-Language of the object data.
  * contentType `string`: Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.
  * crc32c `string`: CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.
  * customerEncryption `object`: Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
    * encryptionAlgorithm `string`: The encryption algorithm.
    * keySha256 `string`: SHA256 hash value of the encryption key.
  * etag `string`: HTTP 1.1 Entity tag for the object.
  * eventBasedHold `boolean`: Defines the Event-Based hold for an object. Event-Based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here bucket-level retention is 3 years and the event is loan being paid in full. In this example these objects will be held intact for any number of years until the event has occurred (hold is released) and then 3 more years after that.
  * generation `string`: The content generation of this object. Used for object versioning.
  * id `string`: The ID of the object, including the bucket name, object name, and generation number.
  * kind `string`: The kind of item this is. For objects, this is always storage#object.
  * kmsKeyName `string`: Cloud KMS Key used to encrypt this object, if the object is encrypted by such a key. Limited availability; usable only by enabled projects.
  * md5Hash `string`: MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
  * mediaLink `string`: Media download link.
  * metadata `object`: User-provided metadata, in key/value pairs.
  * metageneration `string`: The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.
  * name `string`: The name of the object. Required if not specified by URL parameter.
  * owner `object`: The owner of the object. This will always be the uploader of the object.
    * entity `string`: The entity, in the form user-userId.
    * entityId `string`: The ID for the entity.
  * retentionExpirationTime `string`: Specifies the earliest time that the object's retention period expires. This value is server-determined and is in RFC 3339 format. Note 1: This field is not provided for objects with an active Event-Based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when TemporaryHold is set (so that the user can reason about policy without having to first unset the TemporaryHold).
  * selfLink `string`: The link to this object.
  * size `string`: Content-Length of the data in bytes.
  * storageClass `string`: Storage class of the object.
  * temporaryHold `boolean`: Defines the temporary hold for an object. This flag is used to enforce a temporary hold on an object. While it is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing.
  * timeCreated `string`: The creation time of the object in RFC 3339 format.
  * timeDeleted `string`: The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
  * timeStorageClassUpdated `string`: The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.
  * updated `string`: The modification time of the object metadata in RFC 3339 format.

### ObjectAccessControl
* ObjectAccessControl `object`: An access-control entry.
  * bucket `string`: The name of the bucket.
  * domain `string`: The domain associated with the entity, if any.
  * email `string`: The email address associated with the entity, if any.
  * entity `string`: The entity holding the permission, in one of the following forms: 
  * entityId `string`: The ID for the entity, if any.
  * etag `string`: HTTP 1.1 Entity tag for the access-control entry.
  * generation `string`: The content generation of the object, if applied to an object.
  * id `string`: The ID of the access-control entry.
  * kind `string`: The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
  * object `string`: The name of the object, if applied to an object.
  * projectTeam `object`: The project team associated with the entity, if any.
    * projectNumber `string`: The project number.
    * team `string`: The team.
  * role `string`: The access permission for the entity.
  * selfLink `string`: The link to this access-control entry.

### ObjectAccessControls
* ObjectAccessControls `object`: An access-control list.
  * items `array`: The list of items.
    * items [ObjectAccessControl](#objectaccesscontrol)
  * kind `string`: The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.

### Objects
* Objects `object`: A list of objects.
  * items `array`: The list of items.
    * items [Object](#object)
  * kind `string`: The kind of item this is. For lists of objects, this is always storage#objects.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * prefixes `array`: The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.
    * items `string`

### Policy
* Policy `object`: A bucket/object IAM policy.
  * bindings `array`: An association between a role, which comes with a set of permissions, and members who may assume that role.
    * items `object`
      * members `array`: A collection of identifiers for members who may assume the provided role. Recognized identifiers are as follows:  
        * items `string`
      * role `string`: The role to which members belong. Two types of roles are supported: new IAM roles, which grant permissions that do not map directly to those provided by ACLs, and legacy IAM roles, which do map directly to ACL permissions. All roles are of the format roles/storage.specificRole.
  * etag `string`: HTTP 1.1  Entity tag for the policy.
  * kind `string`: The kind of item this is. For policies, this is always storage#policy. This field is ignored on input.
  * resourceId `string`: The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, and projects/_/buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.

### RewriteResponse
* RewriteResponse `object`: A rewrite response.
  * done `boolean`: true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response.
  * kind `string`: The kind of item this is.
  * objectSize `string`: The total size of the object being copied in bytes. This property is always present in the response.
  * resource [Object](#object)
  * rewriteToken `string`: A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.
  * totalBytesRewritten `string`: The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.

### ServiceAccount
* ServiceAccount `object`: A subscription to receive Google PubSub notifications.
  * email_address `string`: The ID of the notification.
  * kind `string`: The kind of item this is. For notifications, this is always storage#notification.

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: A storage.(buckets|objects).testIamPermissions response.
  * kind `string`: The kind of item this is.
  * permissions `array`: The permissions held by the caller. Permissions are always of the format storage.resource.capability, where resource is one of buckets or objects. The supported permissions are as follows:  
    * items `string`


