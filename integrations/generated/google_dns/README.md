# @datafire/google_dns

Client library for Google Cloud DNS

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

google_dns.projects.get({
  "project": ""
}).then(data => {
  console.log(data);
});
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

### projects.get
Fetch the representation of an existing Project.


```js
google_dns.projects.get({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Project](#project)

### managedZones.list
Enumerate ManagedZones that have been created but not yet deleted.


```js
google_dns.managedZones.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * dnsName `string`: Restricts the list to return only zones with this domain name.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedZonesListResponse](#managedzoneslistresponse)

### managedZones.create
Create a new ManagedZone.


```js
google_dns.managedZones.create({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [ManagedZone](#managedzone)
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedZone](#managedzone)

### managedZones.delete
Delete a previously created ManagedZone.


```js
google_dns.managedZones.delete({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### managedZones.get
Fetch the representation of an existing ManagedZone.


```js
google_dns.managedZones.get({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ManagedZone](#managedzone)

### changes.list
Enumerate Changes to a ResourceRecordSet collection.


```js
google_dns.changes.list({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * project **required** `string`: Identifies the project addressed by this request.
  * sortBy `string` (values: changeSequence): Sorting criterion. The only supported value is change sequence.
  * sortOrder `string`: Sorting order direction: 'ascending' or 'descending'.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ChangesListResponse](#changeslistresponse)

### changes.create
Atomically update the ResourceRecordSet collection.


```js
google_dns.changes.create({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Change](#change)
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Change](#change)

### changes.get
Fetch the representation of an existing Change.


```js
google_dns.changes.get({
  "changeId": "",
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * changeId **required** `string`: The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Change](#change)

### resourceRecordSets.list
Enumerate ResourceRecordSets that have been created but not yet deleted.


```js
google_dns.resourceRecordSets.list({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * name `string`: Restricts the list to return only records with this fully qualified domain name.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * project **required** `string`: Identifies the project addressed by this request.
  * type `string`: Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ResourceRecordSetsListResponse](#resourcerecordsetslistresponse)



## Definitions

### Change
* Change `object`: An atomic update to a collection of ResourceRecordSets.
  * additions `array`: Which ResourceRecordSets to add?
    * items [ResourceRecordSet](#resourcerecordset)
  * deletions `array`: Which ResourceRecordSets to remove? Must match existing data exactly.
    * items [ResourceRecordSet](#resourcerecordset)
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#change".
  * startTime `string`: The time that this operation was started by the server (output only). This is in RFC3339 text format.
  * status `string` (values: done, pending): Status of the operation (output only).

### ChangesListResponse
* ChangesListResponse `object`: The response to a request to enumerate Changes to a ResourceRecordSets collection.
  * changes `array`: The requested changes.
    * items [Change](#change)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.

### ManagedZone
* ManagedZone `object`: A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
  * creationTime `string`: The time that this resource was created on the server. This is in RFC3339 text format. Output only.
  * description `string`: A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
  * dnsName `string`: The DNS name of this managed zone, for instance "example.com.".
  * id `string`: Unique identifier for the resource; defined by the server (output only)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#managedZone".
  * name `string`: User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
  * nameServerSet `string`: Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users will leave this field unset.
  * nameServers `array`: Delegate your managed_zone to these virtual name servers; defined by the server (output only)
    * items `string`

### ManagedZonesListResponse
* ManagedZonesListResponse `object`
  * kind `string`: Type of resource.
  * managedZones `array`: The managed zone resources.
    * items [ManagedZone](#managedzone)
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.

### Project
* Project `object`: A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console.
  * id `string`: User assigned unique identifier for the resource (output only).
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#project".
  * number `string`: Unique numeric identifier for the resource; defined by the server (output only).
  * quota [Quota](#quota)

### Quota
* Quota `object`: Limits associated with a Project.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#quota".
  * managedZones `integer`: Maximum allowed number of managed zones in the project.
  * resourceRecordsPerRrset `integer`: Maximum allowed number of ResourceRecords per ResourceRecordSet.
  * rrsetAdditionsPerChange `integer`: Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
  * rrsetDeletionsPerChange `integer`: Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
  * rrsetsPerManagedZone `integer`: Maximum allowed number of ResourceRecordSets per zone in the project.
  * totalRrdataSizePerChange `integer`: Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.

### ResourceRecordSet
* ResourceRecordSet `object`: A unit of data that will be returned by the DNS servers.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#resourceRecordSet".
  * name `string`: For example, www.example.com.
  * rrdatas `array`: As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
    * items `string`
  * ttl `integer`: Number of seconds that this ResourceRecordSet can be cached by resolvers.
  * type `string`: The identifier of a supported record type, for example, A, AAAA, MX, TXT, and so on.

### ResourceRecordSetsListResponse
* ResourceRecordSetsListResponse `object`
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
  * rrsets `array`: The resource record set resources.
    * items [ResourceRecordSet](#resourcerecordset)


