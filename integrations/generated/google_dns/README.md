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
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ManagedZone](#managedzone)

### managedZones.patch
Apply a partial update to an existing ManagedZone.


```js
google_dns.managedZones.patch({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [ManagedZone](#managedzone)
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

### managedZones.update
Update an existing ManagedZone.


```js
google_dns.managedZones.update({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [ManagedZone](#managedzone)
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

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
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Change](#change)

### dnsKeys.list
Enumerate DnsKeys to a ResourceRecordSet collection.


```js
google_dns.dnsKeys.list({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * digestType `string`: An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DnsKeysListResponse](#dnskeyslistresponse)

### dnsKeys.get
Fetch the representation of an existing DnsKey.


```js
google_dns.dnsKeys.get({
  "dnsKeyId": "",
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * digestType `string`: An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
  * dnsKeyId **required** `string`: The identifier of the requested DnsKey.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DnsKey](#dnskey)

### managedZoneOperations.list
Enumerate Operations for the given ManagedZone.


```js
google_dns.managedZoneOperations.list({
  "managedZone": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * managedZone **required** `string`: Identifies the managed zone addressed by this request.
  * maxResults `integer`: Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
  * pageToken `string`: Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
  * project **required** `string`: Identifies the project addressed by this request.
  * sortBy `string` (values: id, startTime): Sorting criterion. The only supported values are START_TIME and ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ManagedZoneOperationsListResponse](#managedzoneoperationslistresponse)

### managedZoneOperations.get
Fetch the representation of an existing Operation.


```js
google_dns.managedZoneOperations.get({
  "managedZone": "",
  "operation": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * clientOperationId `string`: For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
  * managedZone **required** `string`: Identifies the managed zone addressed by this request.
  * operation **required** `string`: Identifies the operation addressed by this request.
  * project **required** `string`: Identifies the project addressed by this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

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
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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
  * isServing `boolean`: If the DNS queries for the zone will be served.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#change".
  * startTime `string`: The time that this operation was started by the server (output only). This is in RFC3339 text format.
  * status `string` (values: done, pending): Status of the operation (output only).

### ChangesListResponse
* ChangesListResponse `object`: The response to a request to enumerate Changes to a ResourceRecordSets collection.
  * changes `array`: The requested changes.
    * items [Change](#change)
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.

### DnsKey
* DnsKey `object`: A DNSSEC key pair.
  * algorithm `string` (values: ecdsap256sha256, ecdsap384sha384, rsasha1, rsasha256, rsasha512): String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time.
  * creationTime `string`: The time that this resource was created in the control plane. This is in RFC3339 text format. Output only.
  * description `string`: A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function.
  * digests `array`: Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only.
    * items [DnsKeyDigest](#dnskeydigest)
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * isActive `boolean`: Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures.
  * keyLength `integer`: Length of the key in bits. Specified at creation time then immutable.
  * keyTag `integer`: The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#dnsKey".
  * publicKey `string`: Base64 encoded public half of this key. Output only.
  * type `string` (values: keySigning, zoneSigning): One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, will be used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag will be cleared and this key will be used to sign only resource record sets of other types. Immutable after creation time.

### DnsKeyDigest
* DnsKeyDigest `object`
  * digest `string`: The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
  * type `string` (values: sha1, sha256, sha384): Specifies the algorithm used to calculate this digest.

### DnsKeySpec
* DnsKeySpec `object`: Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
  * algorithm `string` (values: ecdsap256sha256, ecdsap384sha384, rsasha1, rsasha256, rsasha512): String mnemonic specifying the DNSSEC algorithm of this key.
  * keyLength `integer`: Length of the keys in bits.
  * keyType `string` (values: keySigning, zoneSigning): One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, will be used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag will be cleared and this key will be used to sign only resource record sets of other types.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#dnsKeySpec".

### DnsKeysListResponse
* DnsKeysListResponse `object`: The response to a request to enumerate DnsKeys in a ManagedZone.
  * dnsKeys `array`: The requested resources.
    * items [DnsKey](#dnskey)
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.

### ManagedZone
* ManagedZone `object`: A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
  * creationTime `string`: The time that this resource was created on the server. This is in RFC3339 text format. Output only.
  * description `string`: A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
  * dnsName `string`: The DNS name of this managed zone, for instance "example.com.".
  * dnssecConfig [ManagedZoneDnsSecConfig](#managedzonednssecconfig)
  * id `string`: Unique identifier for the resource; defined by the server (output only)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#managedZone".
  * labels `object`: User labels.
  * name `string`: User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
  * nameServerSet `string`: Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users will leave this field unset.
  * nameServers `array`: Delegate your managed_zone to these virtual name servers; defined by the server (output only)
    * items `string`

### ManagedZoneDnsSecConfig
* ManagedZoneDnsSecConfig `object`
  * defaultKeySpecs `array`: Specifies parameters that will be used for generating initial DnsKeys for this ManagedZone. Output only while state is not OFF.
    * items [DnsKeySpec](#dnskeyspec)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneDnsSecConfig".
  * nonExistence `string` (values: nsec, nsec3): Specifies the mechanism used to provide authenticated denial-of-existence responses. Output only while state is not OFF.
  * state `string` (values: off, on, transfer): Specifies whether DNSSEC is enabled, and what mode it is in.

### ManagedZoneOperationsListResponse
* ManagedZoneOperationsListResponse `object`
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
  * operations `array`: The operation resources.
    * items [Operation](#operation)

### ManagedZonesListResponse
* ManagedZonesListResponse `object`
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * managedZones `array`: The managed zone resources.
    * items [ManagedZone](#managedzone)
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.

### Operation
* Operation `object`: An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
  * dnsKeyContext [OperationDnsKeyContext](#operationdnskeycontext)
  * id `string`: Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#operation".
  * startTime `string`: The time that this operation was started by the server. This is in RFC3339 text format (output only).
  * status `string` (values: done, pending): Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only).
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

### Project
* Project `object`: A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console.
  * id `string`: User assigned unique identifier for the resource (output only).
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#project".
  * number `string`: Unique numeric identifier for the resource; defined by the server (output only).
  * quota [Quota](#quota)

### Quota
* Quota `object`: Limits associated with a Project.
  * blackHoleHidesSystemZones `boolean`: Whether a black hole zone should suppress system zones for this project.
  * dnsKeysPerManagedZone `integer`: Maximum allowed number of DnsKeys per ManagedZone.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#quota".
  * managedZones `integer`: Maximum allowed number of managed zones in the project.
  * resourceRecordsPerRrset `integer`: Maximum allowed number of ResourceRecords per ResourceRecordSet.
  * rrsetAdditionsPerChange `integer`: Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
  * rrsetDeletionsPerChange `integer`: Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
  * rrsetsPerManagedZone `integer`: Maximum allowed number of ResourceRecordSets per zone in the project.
  * totalRrdataSizePerChange `integer`: Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
  * whitelistedKeySpecs `array`: DNSSEC algorithm and key length types that can be used for DnsKeys.
    * items [DnsKeySpec](#dnskeyspec)

### ResourceRecordSet
* ResourceRecordSet `object`: A unit of data that will be returned by the DNS servers.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dns#resourceRecordSet".
  * name `string`: For example, www.example.com.
  * rrdatas `array`: As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
    * items `string`
  * signatureRrdatas `array`: As defined in RFC 4034 (section 3.2).
    * items `string`
  * ttl `integer`: Number of seconds that this ResourceRecordSet can be cached by resolvers.
  * type `string`: The identifier of a supported record type, for example, A, AAAA, MX, TXT, and so on.

### ResourceRecordSetsListResponse
* ResourceRecordSetsListResponse `object`
  * header [ResponseHeader](#responseheader)
  * kind `string`: Type of resource.
  * nextPageToken `string`: The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
  * rrsets `array`: The resource record set resources.
    * items [ResourceRecordSet](#resourcerecordset)

### ResponseHeader
* ResponseHeader `object`: Elements common to every response.
  * operationId `string`: For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only).


