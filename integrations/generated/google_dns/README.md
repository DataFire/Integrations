# @datafire/google_dns

Client library for Google Cloud DNS

## Installation and Usage
```bash
npm install --save datafire @datafire/google_dns
```

```js
let datafire = require('datafire');
let google_dns = require('@datafire/google_dns').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_dns.projects.get({}).then(data => {
  console.log(data);
})
```

## Description
Configures and serves authoritative DNS records.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dns.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_dns.oauthRefresh(null, context)
```


### projects.get
Fetch the representation of an existing Project.


```js
google_dns.projects.get({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedZones.list
Enumerate ManagedZones that have been created but not yet deleted.


```js
google_dns.managedZones.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* dnsName (string) - Restricts the list to return only zones with this domain name.
* maxResults (integer) - Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
* pageToken (string) - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedZones.create
Create a new ManagedZone.


```js
google_dns.managedZones.create({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* body (object) - A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedZones.delete
Delete a previously created ManagedZone.


```js
google_dns.managedZones.delete({
  "project": "",
  "managedZone": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* managedZone (string) **required** - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### managedZones.get
Fetch the representation of an existing ManagedZone.


```js
google_dns.managedZones.get({
  "project": "",
  "managedZone": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* managedZone (string) **required** - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changes.list
Enumerate Changes to a ResourceRecordSet collection.


```js
google_dns.changes.list({
  "project": "",
  "managedZone": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* managedZone (string) **required** - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
* maxResults (integer) - Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
* pageToken (string) - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
* sortBy (string) - Sorting criterion. The only supported value is change sequence.
* sortOrder (string) - Sorting order direction: 'ascending' or 'descending'.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changes.create
Atomically update the ResourceRecordSet collection.


```js
google_dns.changes.create({
  "project": "",
  "managedZone": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* managedZone (string) **required** - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
* body (object) - An atomic update to a collection of ResourceRecordSets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changes.get
Fetch the representation of an existing Change.


```js
google_dns.changes.get({
  "project": "",
  "managedZone": "",
  "changeId": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* managedZone (string) **required** - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
* changeId (string) **required** - The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### resourceRecordSets.list
Enumerate ResourceRecordSets that have been created but not yet deleted.


```js
google_dns.resourceRecordSets.list({
  "project": "",
  "managedZone": ""
}, context)
```

#### Parameters
* project (string) **required** - Identifies the project addressed by this request.
* managedZone (string) **required** - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
* maxResults (integer) - Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
* name (string) - Restricts the list to return only records with this fully qualified domain name.
* pageToken (string) - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
* type (string) - Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

