# @datafire/google_dns

Client library for Cloud DNS API

## Installation and Usage
```bash
npm install --save @datafire/google_dns
```
```js
let google_dns = require('@datafire/google_dns').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dns.oauthCallback({
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
google_dns.oauthRefresh(null, context)
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

### dns.projects.get
Fetch the representation of an existing Project.


```js
google_dns.dns.projects.get({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Project](#project)

### dns.managedZones.list
Enumerate ManagedZones that have been created but not yet deleted.


```js
google_dns.dns.managedZones.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * dnsName `string`: Restricts the list to return only zones with this domain name.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedZonesListResponse](#managedzoneslistresponse)

### dns.managedZones.create
Create a new ManagedZone.


```js
google_dns.dns.managedZones.create({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [ManagedZone](#managedzone)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedZone](#managedzone)

### dns.managedZones.delete
Delete a previously created ManagedZone.


```js
google_dns.dns.managedZones.delete({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### dns.managedZones.get
Fetch the representation of an existing ManagedZone.


```js
google_dns.dns.managedZones.get({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedZone](#managedzone)

### dns.managedZones.patch
Apply a partial update to an existing ManagedZone.


```js
google_dns.dns.managedZones.patch({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [ManagedZone](#managedzone)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dns.managedZones.update
Update an existing ManagedZone.


```js
google_dns.dns.managedZones.update({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [ManagedZone](#managedzone)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dns.changes.list
Enumerate Changes to a ResourceRecordSet collection.


```js
google_dns.dns.changes.list({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * sortBy `string` (values: changeSequence): Sorting criterion. The only supported value is change sequence.
  * sortOrder `string`: Sorting order direction: 'ascending' or 'descending'.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ChangesListResponse](#changeslistresponse)

### dns.changes.create
Atomically update the ResourceRecordSet collection.


```js
google_dns.dns.changes.create({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [Change](#change)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Change](#change)

### dns.changes.get
Fetch the representation of an existing Change.


```js
google_dns.dns.changes.get({
  "project": "",
  "managedZone": "",
  "changeId": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * changeId **required** `string`: The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Change](#change)

### dns.dnsKeys.list
Enumerate DnsKeys to a ResourceRecordSet collection.


```js
google_dns.dns.dnsKeys.list({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * digestType `string`: An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DnsKeysListResponse](#dnskeyslistresponse)

### dns.dnsKeys.get
Fetch the representation of an existing DnsKey.


```js
google_dns.dns.dnsKeys.get({
  "project": "",
  "managedZone": "",
  "dnsKeyId": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * dnsKeyId **required** `string`: The identifier of the requested DnsKey.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * digestType `string`: An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DnsKey](#dnskey)

### dns.managedZoneOperations.list
Enumerate Operations for the given ManagedZone.


```js
google_dns.dns.managedZoneOperations.list({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * sortBy `string` (values: startTime, id): Sorting criterion. The only supported values are START_TIME and ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ManagedZoneOperationsListResponse](#managedzoneoperationslistresponse)

### dns.managedZoneOperations.get
Fetch the representation of an existing Operation.


```js
google_dns.dns.managedZoneOperations.get({
  "project": "",
  "managedZone": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request.
  * operation **required** `string`: Identifies the operation addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dns.resourceRecordSets.list
Enumerate ResourceRecordSets that have been created but not yet deleted.


```js
google_dns.dns.resourceRecordSets.list({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * name `string`: Restricts the list to return only records with this fully qualified domain name.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * type `string`: Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ResourceRecordSetsListResponse](#resourcerecordsetslistresponse)

### dns.projects.managedZones.rrsets.create
Create a new ResourceRecordSet.


```js
google_dns.dns.projects.managedZones.rrsets.create({
  "project": "",
  "managedZone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [ResourceRecordSet](#resourcerecordset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ResourceRecordSet](#resourcerecordset)

### dns.projects.managedZones.rrsets.delete
Delete a previously created ResourceRecordSet.


```js
google_dns.dns.projects.managedZones.rrsets.delete({
  "project": "",
  "managedZone": "",
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * name **required** `string`: Fully qualified domain name.
  * type **required** `string`: RRSet type.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ResourceRecordSetsDeleteResponse](#resourcerecordsetsdeleteresponse)

### dns.projects.managedZones.rrsets.get
Fetch the representation of an existing ResourceRecordSet.


```js
google_dns.dns.projects.managedZones.rrsets.get({
  "project": "",
  "managedZone": "",
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * name **required** `string`: Fully qualified domain name.
  * type **required** `string`: RRSet type.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ResourceRecordSet](#resourcerecordset)

### dns.projects.managedZones.rrsets.patch
Apply a partial update to an existing ResourceRecordSet.


```js
google_dns.dns.projects.managedZones.rrsets.patch({
  "project": "",
  "managedZone": "",
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
  * name **required** `string`: Fully qualified domain name.
  * type **required** `string`: RRSet type.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [ResourceRecordSet](#resourcerecordset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ResourceRecordSet](#resourcerecordset)

### dns.policies.list
Enumerate all Policies associated with a project.


```js
google_dns.dns.policies.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PoliciesListResponse](#policieslistresponse)

### dns.policies.create
Create a new Policy


```js
google_dns.dns.policies.create({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [Policy](#policy)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Policy](#policy)

### dns.policies.delete
Delete a previously created Policy. Will fail if the policy is still being referenced by a network.


```js
google_dns.dns.policies.delete({
  "project": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * policy **required** `string`: User given friendly name of the policy addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### dns.policies.get
Fetch the representation of an existing Policy.


```js
google_dns.dns.policies.get({
  "project": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * policy **required** `string`: User given friendly name of the policy addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Policy](#policy)

### dns.policies.patch
Apply a partial update to an existing Policy.


```js
google_dns.dns.policies.patch({
  "project": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * policy **required** `string`: User given friendly name of the policy addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [Policy](#policy)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PoliciesPatchResponse](#policiespatchresponse)

### dns.policies.update
Update an existing Policy.


```js
google_dns.dns.policies.update({
  "project": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * policy **required** `string`: User given friendly name of the policy addressed by this request.
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * body [Policy](#policy)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PoliciesUpdateResponse](#policiesupdateresponse)



## Definitions

### Change
* Change `object`: A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
  * additions `array`: Which ResourceRecordSets to add?
    * items [ResourceRecordSet](#resourcerecordset)
  * deletions `array`: Which ResourceRecordSets to remove? Must match existing data exactly.
    * items [ResourceRecordSet](#resourcerecordset)
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * isServing `boolean`: If the DNS queries for the zone will be served.
  * kind `string`
  * startTime `string`: The time that this operation was started by the server (output only). This is in RFC3339 text format.
  * status `string` (values: pending, done): Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent but the servers might not be updated yet.

### ChangesListResponse
* ChangesListResponse `object`: The response to a request to enumerate Changes to a ResourceRecordSets collection.
  * changes `array`: The requested changes.
    * items [Change](#change)
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.

### DnsKey
* DnsKey `object`: A DNSSEC key pair.
  * algorithm `string` (values: rsasha1, rsasha256, rsasha512, ecdsap256sha256, ecdsap384sha384): String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time.
  * creationTime `string`: The time that this resource was created in the control plane. This is in RFC3339 text format. Output only.
  * description `string`: A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function.
  * digests `array`: Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only.
    * items [DnsKeyDigest](#dnskeydigest)
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * isActive `boolean`: Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures.
  * keyLength `integer`: Length of the key in bits. Specified at creation time then immutable.
  * keyTag `integer`: The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.
  * kind `string`
  * publicKey `string`: Base64 encoded public half of this key. Output only.
  * type `string` (values: keySigning, zoneSigning): One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, will be used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag will be cleared and this key will be used to sign only resource record sets of other types. Immutable after creation time.

### DnsKeyDigest
* DnsKeyDigest `object`
  * digest `string`: The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
  * type `string` (values: sha1, sha256, sha384): Specifies the algorithm used to calculate this digest.

### DnsKeySpec
* DnsKeySpec `object`: Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
  * algorithm `string` (values: rsasha1, rsasha256, rsasha512, ecdsap256sha256, ecdsap384sha384): String mnemonic specifying the DNSSEC algorithm of this key.
  * keyLength `integer`: Length of the keys in bits.
  * keyType `string` (values: keySigning, zoneSigning): Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, will only be used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and will be used to sign all other types of resource record sets.
  * kind `string`

### DnsKeysListResponse
* DnsKeysListResponse `object`: The response to a request to enumerate DnsKeys in a ManagedZone.
  * dnsKeys `array`: The requested resources.
    * items [DnsKey](#dnskey)
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.

### ManagedZone
* ManagedZone `object`: A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
  * creationTime `string`: The time that this resource was created on the server. This is in RFC3339 text format. Output only.
  * description `string`: A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
  * dnsName `string`: The DNS name of this managed zone, for instance "example.com.".
  * dnssecConfig [ManagedZoneDnsSecConfig](#managedzonednssecconfig)
  * forwardingConfig [ManagedZoneForwardingConfig](#managedzoneforwardingconfig)
  * id `string`: Unique identifier for the resource; defined by the server (output only)
  * kind `string`
  * labels `object`: User labels.
  * name `string`: User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
  * nameServerSet `string`: Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users will leave this field unset.
  * nameServers `array`: Delegate your managed_zone to these virtual name servers; defined by the server (output only)
    * items `string`
  * peeringConfig [ManagedZonePeeringConfig](#managedzonepeeringconfig)
  * privateVisibilityConfig [ManagedZonePrivateVisibilityConfig](#managedzoneprivatevisibilityconfig)
  * reverseLookupConfig [ManagedZoneReverseLookupConfig](#managedzonereverselookupconfig)
  * serviceDirectoryConfig [ManagedZoneServiceDirectoryConfig](#managedzoneservicedirectoryconfig)
  * visibility `string` (values: public, private): The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

### ManagedZoneDnsSecConfig
* ManagedZoneDnsSecConfig `object`
  * defaultKeySpecs `array`: Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF.
    * items [DnsKeySpec](#dnskeyspec)
  * kind `string`
  * nonExistence `string` (values: nsec, nsec3): Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF.
  * state `string` (values: off, on, transfer): Specifies whether DNSSEC is enabled, and what mode it is in.

### ManagedZoneForwardingConfig
* ManagedZoneForwardingConfig `object`
  * kind `string`
  * targetNameServers `array`: List of target name servers to forward to. Cloud DNS will select the best available name server if more than one target is given.
    * items [ManagedZoneForwardingConfigNameServerTarget](#managedzoneforwardingconfignameservertarget)

### ManagedZoneForwardingConfigNameServerTarget
* ManagedZoneForwardingConfigNameServerTarget `object`
  * forwardingPath `string` (values: default, private): Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS will make forwarding decision based on address ranges, i.e. RFC1918 addresses go to the VPC, non-RFC1918 addresses go to the Internet. When set to PRIVATE, Cloud DNS will always send queries through VPC for this target.
  * ipv4Address `string`: IPv4 address of a target name server.
  * kind `string`

### ManagedZoneOperationsListResponse
* ManagedZoneOperationsListResponse `object`
  * header [ResponseHeader](#responseheader)
  * kind `string`
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
  * operations `array`: The operation resources.
    * items [Operation](#operation)

### ManagedZonePeeringConfig
* ManagedZonePeeringConfig `object`
  * kind `string`
  * targetNetwork [ManagedZonePeeringConfigTargetNetwork](#managedzonepeeringconfigtargetnetwork)

### ManagedZonePeeringConfigTargetNetwork
* ManagedZonePeeringConfigTargetNetwork `object`
  * deactivateTime `string`: The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only.
  * kind `string`
  * networkUrl `string`: The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}

### ManagedZonePrivateVisibilityConfig
* ManagedZonePrivateVisibilityConfig `object`
  * kind `string`
  * networks `array`: The list of VPC networks that can see this zone.
    * items [ManagedZonePrivateVisibilityConfigNetwork](#managedzoneprivatevisibilityconfignetwork)

### ManagedZonePrivateVisibilityConfigNetwork
* ManagedZonePrivateVisibilityConfigNetwork `object`
  * kind `string`
  * networkUrl `string`: The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}

### ManagedZoneReverseLookupConfig
* ManagedZoneReverseLookupConfig `object`
  * kind `string`

### ManagedZoneServiceDirectoryConfig
* ManagedZoneServiceDirectoryConfig `object`: Contains information about Service Directory-backed zones.
  * kind `string`
  * namespace [ManagedZoneServiceDirectoryConfigNamespace](#managedzoneservicedirectoryconfignamespace)

### ManagedZoneServiceDirectoryConfigNamespace
* ManagedZoneServiceDirectoryConfigNamespace `object`
  * deletionTime `string`: The time that the namespace backing this zone was deleted, empty string if it still exists. This is in RFC3339 text format. Output only.
  * kind `string`
  * namespaceUrl `string`: The fully qualified URL of the namespace associated with the zone. This should be formatted like https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace}

### ManagedZonesListResponse
* ManagedZonesListResponse `object`
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * managedZones `array`: The managed zone resources.
    * items [ManagedZone](#managedzone)
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.

### Operation
* Operation `object`: An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
  * dnsKeyContext [OperationDnsKeyContext](#operationdnskeycontext)
  * id `string`: Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only)
  * kind `string`
  * startTime `string`: The time that this operation was started by the server. This is in RFC3339 text format (output only).
  * status `string` (values: pending, done): Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only). A status of "DONE" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.
  * type `string`: Type of the operation. Operations include insert, update, and delete (output only).
  * user `string`: User who requested the operation, for example: user@example.com. cloud-dns-system for operations automatically done by the system. (output only)
  * zoneContext [OperationManagedZoneContext](#operationmanagedzonecontext)

### OperationDnsKeyContext
* OperationDnsKeyContext `object`
  * newValue [DnsKey](#dnskey)
  * oldValue [DnsKey](#dnskey)

### OperationManagedZoneContext
* OperationManagedZoneContext `object`
  * newValue [ManagedZone](#managedzone)
  * oldValue [ManagedZone](#managedzone)

### PoliciesListResponse
* PoliciesListResponse `object`
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
  * policies `array`: The policy resources.
    * items [Policy](#policy)

### PoliciesPatchResponse
* PoliciesPatchResponse `object`
  * header [ResponseHeader](#responseheader)
  * policy [Policy](#policy)

### PoliciesUpdateResponse
* PoliciesUpdateResponse `object`
  * header [ResponseHeader](#responseheader)
  * policy [Policy](#policy)

### Policy
* Policy `object`: A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
  * alternativeNameServerConfig [PolicyAlternativeNameServerConfig](#policyalternativenameserverconfig)
  * description `string`: A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.
  * enableInboundForwarding `boolean`: Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address will be allocated from each of the sub-networks that are bound to this policy.
  * enableLogging `boolean`: Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * kind `string`
  * name `string`: User assigned name for this policy.
  * networks `array`: List of network names specifying networks to which this policy is applied.
    * items [PolicyNetwork](#policynetwork)

### PolicyAlternativeNameServerConfig
* PolicyAlternativeNameServerConfig `object`
  * kind `string`
  * targetNameServers `array`: Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.
    * items [PolicyAlternativeNameServerConfigTargetNameServer](#policyalternativenameserverconfigtargetnameserver)

### PolicyAlternativeNameServerConfigTargetNameServer
* PolicyAlternativeNameServerConfigTargetNameServer `object`
  * forwardingPath `string` (values: default, private): Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS will make forwarding decision based on address ranges, i.e. RFC1918 addresses go to the VPC, non-RFC1918 addresses go to the Internet. When set to PRIVATE, Cloud DNS will always send queries through VPC for this target.
  * ipv4Address `string`: IPv4 address to forward to.
  * kind `string`

### PolicyNetwork
* PolicyNetwork `object`
  * kind `string`
  * networkUrl `string`: The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}

### Project
* Project `object`: A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console.
  * id `string`: User assigned unique identifier for the resource (output only).
  * kind `string`
  * number `string`: Unique numeric identifier for the resource; defined by the server (output only).
  * quota [Quota](#quota)

### Quota
* Quota `object`: Limits associated with a Project.
  * dnsKeysPerManagedZone `integer`: Maximum allowed number of DnsKeys per ManagedZone.
  * gkeClustersPerPolicy `integer`: Maximum allowed number of GKE clusters per policy.
  * kind `string`
  * managedZones `integer`: Maximum allowed number of managed zones in the project.
  * managedZonesPerNetwork `integer`: Maximum allowed number of managed zones which can be attached to a network.
  * networksPerManagedZone `integer`: Maximum allowed number of networks to which a privately scoped zone can be attached.
  * networksPerPolicy `integer`: Maximum allowed number of networks per policy.
  * policies `integer`: Maximum allowed number of policies per project.
  * resourceRecordsPerRrset `integer`: Maximum allowed number of ResourceRecords per ResourceRecordSet.
  * rrsetAdditionsPerChange `integer`: Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
  * rrsetDeletionsPerChange `integer`: Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
  * rrsetsPerManagedZone `integer`: Maximum allowed number of ResourceRecordSets per zone in the project.
  * targetNameServersPerManagedZone `integer`: Maximum allowed number of target name servers per managed forwarding zone.
  * targetNameServersPerPolicy `integer`: Maximum allowed number of alternative target name servers per policy.
  * totalRrdataSizePerChange `integer`: Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
  * whitelistedKeySpecs `array`: DNSSEC algorithm and key length types that can be used for DnsKeys.
    * items [DnsKeySpec](#dnskeyspec)

### RRSetRoutingPolicy
* RRSetRoutingPolicy `object`: A RRSetRoutingPolicy represents ResourceRecordSet data that will be returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
  * geoPolicy [RRSetRoutingPolicyGeoPolicy](#rrsetroutingpolicygeopolicy)
  * kind `string`
  * wrrPolicy [RRSetRoutingPolicyWrrPolicy](#rrsetroutingpolicywrrpolicy)

### RRSetRoutingPolicyGeoPolicy
* RRSetRoutingPolicyGeoPolicy `object`
  * failovers `array`: If the health check for the primary target for a geo location returns an unhealthy status, the failover target is returned instead. This failover configuration is not mandatory. If a failover is not provided, the primary target won't be healthchecked - we'll return the primarily configured rrdata irrespective of whether it is healthy or not.
    * items [RRSetRoutingPolicyGeoPolicyGeoPolicyItem](#rrsetroutingpolicygeopolicygeopolicyitem)
  * items `array`: The primary geo routing configuration. If there are multiple items with the same location, an error is returned instead.
    * items [RRSetRoutingPolicyGeoPolicyGeoPolicyItem](#rrsetroutingpolicygeopolicygeopolicyitem)
  * kind `string`

### RRSetRoutingPolicyGeoPolicyGeoPolicyItem
* RRSetRoutingPolicyGeoPolicyGeoPolicyItem `object`
  * kind `string`
  * location `string`: The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g "us-east1", "southamerica-east1", "asia-east1", etc.
  * rrdatas `array`
    * items `string`
  * signatureRrdatas `array`: DNSSEC generated signatures for the above geo_rrdata.
    * items `string`

### RRSetRoutingPolicyWrrPolicy
* RRSetRoutingPolicyWrrPolicy `object`
  * items `array`
    * items [RRSetRoutingPolicyWrrPolicyWrrPolicyItem](#rrsetroutingpolicywrrpolicywrrpolicyitem)
  * kind `string`

### RRSetRoutingPolicyWrrPolicyWrrPolicyItem
* RRSetRoutingPolicyWrrPolicyWrrPolicyItem `object`
  * kind `string`
  * rrdatas `array`
    * items `string`
  * signatureRrdatas `array`: DNSSEC generated signatures for the above wrr_rrdata.
    * items `string`
  * weight `number`: The weight corresponding to this subset of rrdata. When multiple WeightedRoundRobinPolicyItems are configured, the probability of returning an rrset is proportional to its weight relative to the sum of weights configured for all items. This weight should be a decimal in the range [0,1].

### ResourceRecordSet
* ResourceRecordSet `object`: A unit of data that will be returned by the DNS servers.
  * kind `string`
  * name `string`: For example, www.example.com.
  * routingPolicy [RRSetRoutingPolicy](#rrsetroutingpolicy)
  * rrdatas `array`: As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.
    * items `string`
  * signatureRrdatas `array`: As defined in RFC 4034 (section 3.2).
    * items `string`
  * ttl `integer`: Number of seconds that this ResourceRecordSet can be cached by resolvers.
  * type `string`: The identifier of a supported record type. See the list of Supported DNS record types.

### ResourceRecordSetsDeleteResponse
* ResourceRecordSetsDeleteResponse `object`

### ResourceRecordSetsListResponse
* ResourceRecordSetsListResponse `object`
  * header [ResponseHeader](#responseheader)
  * kind `string`
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
  * rrsets `array`: The resource record set resources.
    * items [ResourceRecordSet](#resourcerecordset)

### ResponseHeader
* ResponseHeader `object`: Elements common to every response.
  * operationId `string`: For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only).


