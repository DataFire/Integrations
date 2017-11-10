# @datafire/google_storage

Client library for Cloud Storage

## Installation and Usage
```bash
npm install --save datafire @datafire/google_storage
```

```js
let datafire = require('datafire');
let google_storage = require('@datafire/google_storage').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_storage.channels.stop({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_storage.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### buckets.list
Retrieves a list of buckets for a given project.


```js
google_storage.buckets.list({
  "project": ""
}, context)
```

#### Parameters
* maxResults (integer) - Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
* pageToken (string) - A previously-returned page token representing part of the larger set of results to view.
* prefix (string) - Filter results to buckets whose names begin with this prefix.
* project (string) **required** - A valid API project identifier.
* projection (string) - Set of properties to return. Defaults to noAcl.
* userProject (string) - The project to be billed for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.insert
Creates a new bucket.


```js
google_storage.buckets.insert({
  "project": ""
}, context)
```

#### Parameters
* body (object) - A bucket.
* predefinedAcl (string) - Apply a predefined set of access controls to this bucket.
* predefinedDefaultObjectAcl (string) - Apply a predefined set of default object access controls to this bucket.
* project (string) **required** - A valid API project identifier.
* projection (string) - Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
* userProject (string) - The project to be billed for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.delete
Permanently deletes an empty bucket.


```js
google_storage.buckets.delete({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* ifMetagenerationMatch (string) - If set, only deletes the bucket if its metageneration matches this value.
* ifMetagenerationNotMatch (string) - If set, only deletes the bucket if its metageneration does not match this value.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.get
Returns metadata for the specified bucket.


```js
google_storage.buckets.get({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* ifMetagenerationMatch (string) - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
* projection (string) - Set of properties to return. Defaults to noAcl.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.patch
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method supports patch semantics.


```js
google_storage.buckets.patch({
  "bucket": ""
}, context)
```

#### Parameters
* body (object) - A bucket.
* bucket (string) **required** - Name of a bucket.
* ifMetagenerationMatch (string) - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
* predefinedAcl (string) - Apply a predefined set of access controls to this bucket.
* predefinedDefaultObjectAcl (string) - Apply a predefined set of default object access controls to this bucket.
* projection (string) - Set of properties to return. Defaults to full.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.update
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.


```js
google_storage.buckets.update({
  "bucket": ""
}, context)
```

#### Parameters
* body (object) - A bucket.
* bucket (string) **required** - Name of a bucket.
* ifMetagenerationMatch (string) - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
* predefinedAcl (string) - Apply a predefined set of access controls to this bucket.
* predefinedDefaultObjectAcl (string) - Apply a predefined set of default object access controls to this bucket.
* projection (string) - Set of properties to return. Defaults to full.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bucketAccessControls.list
Retrieves ACL entries on the specified bucket.


```js
google_storage.bucketAccessControls.list({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bucketAccessControls.insert
Creates a new ACL entry on the specified bucket.


```js
google_storage.bucketAccessControls.insert({
  "bucket": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bucketAccessControls.delete
Permanently deletes the ACL entry for the specified entity on the specified bucket.


```js
google_storage.bucketAccessControls.delete({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bucketAccessControls.get
Returns the ACL entry for the specified entity on the specified bucket.


```js
google_storage.bucketAccessControls.get({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bucketAccessControls.patch
Updates an ACL entry on the specified bucket. This method supports patch semantics.


```js
google_storage.bucketAccessControls.patch({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bucketAccessControls.update
Updates an ACL entry on the specified bucket.


```js
google_storage.bucketAccessControls.update({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### defaultObjectAccessControls.list
Retrieves default object ACL entries on the specified bucket.


```js
google_storage.defaultObjectAccessControls.list({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* ifMetagenerationMatch (string) - If present, only return default ACL listing if the bucket's current metageneration matches this value.
* ifMetagenerationNotMatch (string) - If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### defaultObjectAccessControls.insert
Creates a new default object ACL entry on the specified bucket.


```js
google_storage.defaultObjectAccessControls.insert({
  "bucket": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### defaultObjectAccessControls.delete
Permanently deletes the default object ACL entry for the specified entity on the specified bucket.


```js
google_storage.defaultObjectAccessControls.delete({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### defaultObjectAccessControls.get
Returns the default object ACL entry for the specified entity on the specified bucket.


```js
google_storage.defaultObjectAccessControls.get({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### defaultObjectAccessControls.patch
Updates a default object ACL entry on the specified bucket. This method supports patch semantics.


```js
google_storage.defaultObjectAccessControls.patch({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### defaultObjectAccessControls.update
Updates a default object ACL entry on the specified bucket.


```js
google_storage.defaultObjectAccessControls.update({
  "bucket": "",
  "entity": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.getIamPolicy
Returns an IAM policy for the specified bucket.


```js
google_storage.buckets.getIamPolicy({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.setIamPolicy
Updates an IAM policy for the specified bucket.


```js
google_storage.buckets.setIamPolicy({
  "bucket": ""
}, context)
```

#### Parameters
* body (object) - A bucket/object IAM policy.
* bucket (string) **required** - Name of a bucket.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### buckets.testIamPermissions
Tests a set of permissions on the given bucket to see which, if any, are held by the caller.


```js
google_storage.buckets.testIamPermissions({
  "bucket": "",
  "permissions": []
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* permissions (array) **required** - Permissions to test.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### notifications.list
Retrieves a list of notification subscriptions for a given bucket.


```js
google_storage.notifications.list({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a Google Cloud Storage bucket.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### notifications.insert
Creates a notification subscription for a given bucket.


```js
google_storage.notifications.insert({
  "bucket": ""
}, context)
```

#### Parameters
* body (object) - A subscription to receive Google PubSub notifications.
* bucket (string) **required** - The parent bucket of the notification.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### notifications.delete
Permanently deletes a notification subscription.


```js
google_storage.notifications.delete({
  "bucket": "",
  "notification": ""
}, context)
```

#### Parameters
* bucket (string) **required** - The parent bucket of the notification.
* notification (string) **required** - ID of the notification to delete.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### notifications.get
View a notification configuration.


```js
google_storage.notifications.get({
  "bucket": "",
  "notification": ""
}, context)
```

#### Parameters
* bucket (string) **required** - The parent bucket of the notification.
* notification (string) **required** - Notification ID
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.list
Retrieves a list of objects matching the criteria.


```js
google_storage.objects.list({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of the bucket in which to look for objects.
* delimiter (string) - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
* maxResults (integer) - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
* pageToken (string) - A previously-returned page token representing part of the larger set of results to view.
* prefix (string) - Filter results to objects whose names begin with this prefix.
* projection (string) - Set of properties to return. Defaults to noAcl.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* versions (boolean) - If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.insert
Stores a new object and metadata.


```js
google_storage.objects.insert({
  "bucket": ""
}, context)
```

#### Parameters
* body (object) - An object.
* bucket (string) **required** - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
* contentEncoding (string) - If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
* ifGenerationMatch (string) - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifGenerationNotMatch (string) - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the object's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* kmsKeyName (string) - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
* name (string) - Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* predefinedAcl (string) - Apply a predefined set of access controls to this object.
* projection (string) - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.watchAll
Watch for changes on all objects in a bucket.


```js
google_storage.objects.watchAll({
  "bucket": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of the bucket in which to look for objects.
* delimiter (string) - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
* maxResults (integer) - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
* pageToken (string) - A previously-returned page token representing part of the larger set of results to view.
* prefix (string) - Filter results to objects whose names begin with this prefix.
* projection (string) - Set of properties to return. Defaults to noAcl.
* resource (object) - An notification channel used to watch for resource changes.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* versions (boolean) - If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.delete
Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.


```js
google_storage.objects.delete({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of the bucket in which the object resides.
* generation (string) - If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
* ifGenerationMatch (string) - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifGenerationNotMatch (string) - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the object's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.get
Retrieves an object or its metadata.


```js
google_storage.objects.get({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of the bucket in which the object resides.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* ifGenerationMatch (string) - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifGenerationNotMatch (string) - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the object's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* projection (string) - Set of properties to return. Defaults to noAcl.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.patch
Updates an object's metadata. This method supports patch semantics.


```js
google_storage.objects.patch({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* body (object) - An object.
* bucket (string) **required** - Name of the bucket in which the object resides.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* ifGenerationMatch (string) - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifGenerationNotMatch (string) - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the object's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* predefinedAcl (string) - Apply a predefined set of access controls to this object.
* projection (string) - Set of properties to return. Defaults to full.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.update
Updates an object's metadata.


```js
google_storage.objects.update({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* body (object) - An object.
* bucket (string) **required** - Name of the bucket in which the object resides.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* ifGenerationMatch (string) - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifGenerationNotMatch (string) - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the object's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* predefinedAcl (string) - Apply a predefined set of access controls to this object.
* projection (string) - Set of properties to return. Defaults to full.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objectAccessControls.list
Retrieves ACL entries on the specified object.


```js
google_storage.objectAccessControls.list({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objectAccessControls.insert
Creates a new ACL entry on the specified object.


```js
google_storage.objectAccessControls.insert({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objectAccessControls.delete
Permanently deletes the ACL entry for the specified entity on the specified object.


```js
google_storage.objectAccessControls.delete({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objectAccessControls.get
Returns the ACL entry for the specified entity on the specified object.


```js
google_storage.objectAccessControls.get({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objectAccessControls.patch
Updates an ACL entry on the specified object. This method supports patch semantics.


```js
google_storage.objectAccessControls.patch({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objectAccessControls.update
Updates an ACL entry on the specified object.


```js
google_storage.objectAccessControls.update({
  "bucket": "",
  "entity": "",
  "object": ""
}, context)
```

#### Parameters
* body (object) - An access-control entry.
* bucket (string) **required** - Name of a bucket.
* entity (string) **required** - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.getIamPolicy
Returns an IAM policy for the specified object.


```js
google_storage.objects.getIamPolicy({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* bucket (string) **required** - Name of the bucket in which the object resides.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.setIamPolicy
Updates an IAM policy for the specified object.


```js
google_storage.objects.setIamPolicy({
  "bucket": "",
  "object": ""
}, context)
```

#### Parameters
* body (object) - A bucket/object IAM policy.
* bucket (string) **required** - Name of the bucket in which the object resides.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.testIamPermissions
Tests a set of permissions on the given object to see which, if any, are held by the caller.


```js
google_storage.objects.testIamPermissions({
  "bucket": "",
  "object": "",
  "permissions": []
}, context)
```

#### Parameters
* bucket (string) **required** - Name of the bucket in which the object resides.
* generation (string) - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* object (string) **required** - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* permissions (array) **required** - Permissions to test.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### objects.compose
Concatenates a list of existing objects into a new object in the same bucket.


```js
google_storage.objects.compose({
  "destinationBucket": "",
  "destinationObject": ""
}, context)
```

#### Parameters
* body (object) - A Compose request.
* destinationBucket (string) **required** - Name of the bucket in which to store the new object.
* destinationObject (string) **required** - Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* destinationPredefinedAcl (string) - Apply a predefined set of access controls to the destination object.
* ifGenerationMatch (string) - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the object's current metageneration matches the given value.
* kmsKeyName (string) - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* body (object) - An object.
* destinationBucket (string) **required** - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* destinationObject (string) **required** - Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
* destinationPredefinedAcl (string) - Apply a predefined set of access controls to the destination object.
* ifGenerationMatch (string) - Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifGenerationNotMatch (string) - Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
* ifSourceGenerationMatch (string) - Makes the operation conditional on whether the source object's current generation matches the given value.
* ifSourceGenerationNotMatch (string) - Makes the operation conditional on whether the source object's current generation does not match the given value.
* ifSourceMetagenerationMatch (string) - Makes the operation conditional on whether the source object's current metageneration matches the given value.
* ifSourceMetagenerationNotMatch (string) - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
* projection (string) - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
* sourceBucket (string) **required** - Name of the bucket in which to find the source object.
* sourceGeneration (string) - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
* sourceObject (string) **required** - Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* body (object) - An object.
* destinationBucket (string) **required** - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
* destinationKmsKeyName (string) - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
* destinationObject (string) **required** - Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* destinationPredefinedAcl (string) - Apply a predefined set of access controls to the destination object.
* ifGenerationMatch (string) - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* ifGenerationNotMatch (string) - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* ifMetagenerationMatch (string) - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
* ifMetagenerationNotMatch (string) - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
* ifSourceGenerationMatch (string) - Makes the operation conditional on whether the source object's current generation matches the given value.
* ifSourceGenerationNotMatch (string) - Makes the operation conditional on whether the source object's current generation does not match the given value.
* ifSourceMetagenerationMatch (string) - Makes the operation conditional on whether the source object's current metageneration matches the given value.
* ifSourceMetagenerationNotMatch (string) - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
* maxBytesRewrittenPerCall (string) - The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
* projection (string) - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
* rewriteToken (string) - Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
* sourceBucket (string) **required** - Name of the bucket in which to find the source object.
* sourceGeneration (string) - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
* sourceObject (string) **required** - Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* userProject (string) - The project to be billed for this request. Required for Requester Pays buckets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channels.stop
Stop watching resources through this channel


```js
google_storage.channels.stop({}, context)
```

#### Parameters
* resource (object) - An notification channel used to watch for resource changes.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.serviceAccount.get
Get the email address of this project's Google Cloud Storage service account.


```js
google_storage.projects.serviceAccount.get({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID
* userProject (string) - The project to be billed for this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

