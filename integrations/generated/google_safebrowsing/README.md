# @datafire/google_safebrowsing

Client library for Safe Browsing API

## Installation and Usage
```bash
npm install --save @datafire/google_safebrowsing
```
```js
let google_safebrowsing = require('@datafire/google_safebrowsing').create();

.then(data => {
  console.log(data);
});
```

## Description

Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources. The Safe Browsing APIs are for non-commercial use only. If you need to use APIs to detect malicious URLs for commercial purposes – meaning “for sale or revenue-generating purposes” – please refer to the Web Risk API.

## Actions

### safebrowsing.encodedFullHashes.get



```js
google_safebrowsing.safebrowsing.encodedFullHashes.get({
  "encodedRequest": ""
}, context)
```

#### Input
* input `object`
  * encodedRequest **required** `string`: A serialized FindFullHashesRequest proto.
  * clientId `string`: A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
  * clientVersion `string`: The version of the client implementation.
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
* output [FindFullHashesResponse](#findfullhashesresponse)

### safebrowsing.encodedUpdates.get



```js
google_safebrowsing.safebrowsing.encodedUpdates.get({
  "encodedRequest": ""
}, context)
```

#### Input
* input `object`
  * encodedRequest **required** `string`: A serialized FetchThreatListUpdatesRequest proto.
  * clientId `string`: A client ID that uniquely identifies the client implementation of the Safe Browsing API.
  * clientVersion `string`: The version of the client implementation.
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
* output [FetchThreatListUpdatesResponse](#fetchthreatlistupdatesresponse)

### safebrowsing.fullHashes.find
Finds the full hashes that match the requested hash prefixes.


```js
google_safebrowsing.safebrowsing.fullHashes.find({}, context)
```

#### Input
* input `object`
  * body [FindFullHashesRequest](#findfullhashesrequest)
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
* output [FindFullHashesResponse](#findfullhashesresponse)

### safebrowsing.threatHits.create
Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.


```js
google_safebrowsing.safebrowsing.threatHits.create({}, context)
```

#### Input
* input `object`
  * body [ThreatHit](#threathit)
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
* output [Empty](#empty)

### safebrowsing.threatListUpdates.fetch
Fetches the most recent threat list updates. A client can request updates for multiple lists at once.


```js
google_safebrowsing.safebrowsing.threatListUpdates.fetch({}, context)
```

#### Input
* input `object`
  * body [FetchThreatListUpdatesRequest](#fetchthreatlistupdatesrequest)
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
* output [FetchThreatListUpdatesResponse](#fetchthreatlistupdatesresponse)

### safebrowsing.threatLists.list
Lists the Safe Browsing threat lists available for download.


```js
google_safebrowsing.safebrowsing.threatLists.list({}, context)
```

#### Input
* input `object`
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
* output [ListThreatListsResponse](#listthreatlistsresponse)

### safebrowsing.threatMatches.find
Finds the threat entries that match the Safe Browsing lists.


```js
google_safebrowsing.safebrowsing.threatMatches.find({}, context)
```

#### Input
* input `object`
  * body [FindThreatMatchesRequest](#findthreatmatchesrequest)
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
* output [FindThreatMatchesResponse](#findthreatmatchesresponse)



## Definitions

### Checksum
* Checksum `object`: The expected state of a client's local database.
  * sha256 `string`: The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database.

### ClientInfo
* ClientInfo `object`: The client metadata associated with Safe Browsing API requests.
  * clientId `string`: A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
  * clientVersion `string`: The version of the client implementation.

### Constraints
* Constraints `object`: The constraints for this update.
  * deviceLocation `string`: A client's physical location, expressed as a ISO 31166-1 alpha-2 region code.
  * language `string`: Requests the lists for a specific language. Expects ISO 639 alpha-2 format.
  * maxDatabaseEntries `integer`: Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set.
  * maxUpdateEntries `integer`: The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set.
  * region `string`: Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format.
  * supportedCompressions `array`: The compression types supported by the client.
    * items `string` (values: COMPRESSION_TYPE_UNSPECIFIED, RAW, RICE)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### FetchThreatListUpdatesRequest
* FetchThreatListUpdatesRequest `object`: Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. NOTE: Field index 2 is unused. NEXT: 5
  * client [ClientInfo](#clientinfo)
  * listUpdateRequests `array`: The requested threat list updates.
    * items [ListUpdateRequest](#listupdaterequest)

### FetchThreatListUpdatesResponse
* FetchThreatListUpdatesResponse `object`
  * listUpdateResponses `array`: The list updates requested by the clients.
    * items [ListUpdateResponse](#listupdateresponse)
  * minimumWaitDuration `string`: The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want.

### FindFullHashesRequest
* FindFullHashesRequest `object`: Request to return full hashes matched by the provided hash prefixes.
  * apiClient [ClientInfo](#clientinfo)
  * client [ClientInfo](#clientinfo)
  * clientStates `array`: The current client states for each of the client's local threat lists.
    * items `string`
  * threatInfo [ThreatInfo](#threatinfo)

### FindFullHashesResponse
* FindFullHashesResponse `object`
  * matches `array`: The full hashes that matched the requested prefixes.
    * items [ThreatMatch](#threatmatch)
  * minimumWaitDuration `string`: The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want.
  * negativeCacheDuration `string`: For requested entities that did not match the threat list, how long to cache the response.

### FindThreatMatchesRequest
* FindThreatMatchesRequest `object`: Request to check entries against lists.
  * client [ClientInfo](#clientinfo)
  * threatInfo [ThreatInfo](#threatinfo)

### FindThreatMatchesResponse
* FindThreatMatchesResponse `object`
  * matches `array`: The threat list matches.
    * items [ThreatMatch](#threatmatch)

### ListThreatListsResponse
* ListThreatListsResponse `object`
  * threatLists `array`: The lists available for download by the client.
    * items [ThreatListDescriptor](#threatlistdescriptor)

### ListUpdateRequest
* ListUpdateRequest `object`: A single list update request.
  * constraints [Constraints](#constraints)
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The type of platform at risk by entries present in the list.
  * state `string`: The current state of the client for the requested list (the encrypted client state that was received from the last successful list update).
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The types of entries present in the list.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER, SUSPICIOUS, TRICK_TO_BILL, HIGH_CONFIDENCE_ALLOWLIST): The type of threat posed by entries present in the list.

### ListUpdateResponse
* ListUpdateResponse `object`: An update to an individual list.
  * additions `array`: A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response.
    * items [ThreatEntrySet](#threatentryset)
  * checksum [Checksum](#checksum)
  * newClientState `string`: The new client state, in encrypted format. Opaque to clients.
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The platform type for which data is returned.
  * removals `array`: A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet.
    * items [ThreatEntrySet](#threatentryset)
  * responseType `string` (values: RESPONSE_TYPE_UNSPECIFIED, PARTIAL_UPDATE, FULL_UPDATE): The type of response. This may indicate that an action is required by the client when the response is received.
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The format of the threats.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER, SUSPICIOUS, TRICK_TO_BILL, HIGH_CONFIDENCE_ALLOWLIST): The threat type for which data is returned.

### MetadataEntry
* MetadataEntry `object`: A single metadata entry.
  * key `string`: The metadata entry key. For JSON requests, the key is base64-encoded.
  * value `string`: The metadata entry value. For JSON requests, the value is base64-encoded.

### RawHashes
* RawHashes `object`: The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
  * prefixSize `integer`: The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
  * rawHashes `string`: The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded.

### RawIndices
* RawIndices `object`: A set of raw indices to remove from a local list.
  * indices `array`: The indices to remove from a lexicographically-sorted local list.
    * items `integer`

### RiceDeltaEncoding
* RiceDeltaEncoding `object`: The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
  * encodedData `string`: The encoded deltas that are encoded using the Golomb-Rice coder.
  * firstValue `string`: The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero.
  * numEntries `integer`: The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.
  * riceParameter `integer`: The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero.

### ThreatEntry
* ThreatEntry `object`: An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
  * digest `string`: The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded.
  * hash `string`: A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.
  * url `string`: A URL.

### ThreatEntryMetadata
* ThreatEntryMetadata `object`: The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
  * entries `array`: The metadata entries.
    * items [MetadataEntry](#metadataentry)

### ThreatEntrySet
* ThreatEntrySet `object`: A set of threats that should be added or removed from a client's local database.
  * compressionType `string` (values: COMPRESSION_TYPE_UNSPECIFIED, RAW, RICE): The compression type for the entries in this set.
  * rawHashes [RawHashes](#rawhashes)
  * rawIndices [RawIndices](#rawindices)
  * riceHashes [RiceDeltaEncoding](#ricedeltaencoding)
  * riceIndices [RiceDeltaEncoding](#ricedeltaencoding)

### ThreatHit
* ThreatHit `object`
  * clientInfo [ClientInfo](#clientinfo)
  * entry [ThreatEntry](#threatentry)
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The platform type reported.
  * resources `array`: The resources related to the threat hit.
    * items [ThreatSource](#threatsource)
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER, SUSPICIOUS, TRICK_TO_BILL, HIGH_CONFIDENCE_ALLOWLIST): The threat type reported.
  * userInfo [UserInfo](#userinfo)

### ThreatInfo
* ThreatInfo `object`: The information regarding one or more threats that a client submits when checking for matches in threat lists.
  * platformTypes `array`: The platform types to be checked.
    * items `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME)
  * threatEntries `array`: The threat entries to be checked.
    * items [ThreatEntry](#threatentry)
  * threatEntryTypes `array`: The entry types to be checked.
    * items `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT)
  * threatTypes `array`: The threat types to be checked.
    * items `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER, SUSPICIOUS, TRICK_TO_BILL, HIGH_CONFIDENCE_ALLOWLIST)

### ThreatListDescriptor
* ThreatListDescriptor `object`: Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The platform type targeted by the list's entries.
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The entry types contained in the list.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER, SUSPICIOUS, TRICK_TO_BILL, HIGH_CONFIDENCE_ALLOWLIST): The threat type posed by the list's entries.

### ThreatMatch
* ThreatMatch `object`: A match when checking a threat entry in the Safe Browsing threat lists.
  * cacheDuration `string`: The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives.
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The platform type matching this threat.
  * threat [ThreatEntry](#threatentry)
  * threatEntryMetadata [ThreatEntryMetadata](#threatentrymetadata)
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The threat entry type matching this threat.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER, SUSPICIOUS, TRICK_TO_BILL, HIGH_CONFIDENCE_ALLOWLIST): The threat type matching this threat.

### ThreatSource
* ThreatSource `object`: A single resource related to a threat hit.
  * referrer `string`: Referrer of the resource. Only set if the referrer is available.
  * remoteIp `string`: The remote IP of the resource in ASCII format. Either IPv4 or IPv6.
  * type `string` (values: THREAT_SOURCE_TYPE_UNSPECIFIED, MATCHING_URL, TAB_URL, TAB_REDIRECT, TAB_RESOURCE): The type of source reported.
  * url `string`: The URL of the resource.

### UserInfo
* UserInfo `object`: Details about the user that encountered the threat.
  * regionCode `string`: The UN M.49 region code associated with the user's location.
  * userId `string`: Unique user identifier defined by the client.


