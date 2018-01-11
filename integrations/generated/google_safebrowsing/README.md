# @datafire/google_safebrowsing

Client library for Google Safe Browsing

## Installation and Usage
```bash
npm install --save @datafire/google_safebrowsing
```
```js
let google_safebrowsing = require('@datafire/google_safebrowsing').create();

google_safebrowsing.threatMatches.find({}).then(data => {
  console.log(data);
})
```

## Description

Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources.

## Actions

### encodedFullHashes.get



```js
google_safebrowsing.encodedFullHashes.get({
  "encodedRequest": ""
}, context)
```

#### Input
* input `object`
  * encodedRequest **required** `string`: A serialized FindFullHashesRequest proto.
  * clientId `string`: A client ID that (hopefully) uniquely identifies the client implementation
  * clientVersion `string`: The version of the client implementation.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [FindFullHashesResponse](#findfullhashesresponse)

### encodedUpdates.get



```js
google_safebrowsing.encodedUpdates.get({
  "encodedRequest": ""
}, context)
```

#### Input
* input `object`
  * encodedRequest **required** `string`: A serialized FetchThreatListUpdatesRequest proto.
  * clientId `string`: A client ID that uniquely identifies the client implementation of the Safe
  * clientVersion `string`: The version of the client implementation.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [FetchThreatListUpdatesResponse](#fetchthreatlistupdatesresponse)

### fullHashes.find
Finds the full hashes that match the requested hash prefixes.


```js
google_safebrowsing.fullHashes.find({}, context)
```

#### Input
* input `object`
  * body [FindFullHashesRequest](#findfullhashesrequest)
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [FindFullHashesResponse](#findfullhashesresponse)

### threatListUpdates.fetch
Fetches the most recent threat list updates. A client can request updates
for multiple lists at once.


```js
google_safebrowsing.threatListUpdates.fetch({}, context)
```

#### Input
* input `object`
  * body [FetchThreatListUpdatesRequest](#fetchthreatlistupdatesrequest)
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [FetchThreatListUpdatesResponse](#fetchthreatlistupdatesresponse)

### threatLists.list
Lists the Safe Browsing threat lists available for download.


```js
google_safebrowsing.threatLists.list({}, context)
```

#### Input
* input `object`
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [ListThreatListsResponse](#listthreatlistsresponse)

### threatMatches.find
Finds the threat entries that match the Safe Browsing lists.


```js
google_safebrowsing.threatMatches.find({}, context)
```

#### Input
* input `object`
  * body [FindThreatMatchesRequest](#findthreatmatchesrequest)
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Output
* output [FindThreatMatchesResponse](#findthreatmatchesresponse)



## Definitions

### Checksum
* Checksum `object`: The expected state of a client's local database.
  * sha256 `string`: The SHA256 hash of the client state; that is, of the sorted list of all

### ClientInfo
* ClientInfo `object`: The client metadata associated with Safe Browsing API requests.
  * clientId `string`: A client ID that (hopefully) uniquely identifies the client implementation
  * clientVersion `string`: The version of the client implementation.

### Constraints
* Constraints `object`: The constraints for this update.
  * maxDatabaseEntries `integer`: Sets the maximum number of entries that the client is willing to have
  * maxUpdateEntries `integer`: The maximum size in number of entries. The update will not contain more
  * region `string`: Requests the list for a specific geographic location. If not set the
  * supportedCompressions `array`: The compression types supported by the client.
    * items `string` (values: COMPRESSION_TYPE_UNSPECIFIED, RAW, RICE)

### FetchThreatListUpdatesRequest
* FetchThreatListUpdatesRequest `object`: Describes a Safe Browsing API update request. Clients can request updates for
  * client [ClientInfo](#clientinfo)
  * listUpdateRequests `array`: The requested threat list updates.
    * items [ListUpdateRequest](#listupdaterequest)

### FetchThreatListUpdatesResponse
* FetchThreatListUpdatesResponse `object`
  * listUpdateResponses `array`: The list updates requested by the clients.
    * items [ListUpdateResponse](#listupdateresponse)
  * minimumWaitDuration `string`: The minimum duration the client must wait before issuing any update

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
  * minimumWaitDuration `string`: The minimum duration the client must wait before issuing any find hashes
  * negativeCacheDuration `string`: For requested entities that did not match the threat list, how long to

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
  * state `string`: The current state of the client for the requested list (the encrypted
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The types of entries present in the list.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER): The type of threat posed by entries present in the list.

### ListUpdateResponse
* ListUpdateResponse `object`: An update to an individual list.
  * additions `array`: A set of entries to add to a local threat type's list. Repeated to allow
    * items [ThreatEntrySet](#threatentryset)
  * checksum [Checksum](#checksum)
  * newClientState `string`: The new client state, in encrypted format. Opaque to clients.
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The platform type for which data is returned.
  * removals `array`: A set of entries to remove from a local threat type's list. In practice,
    * items [ThreatEntrySet](#threatentryset)
  * responseType `string` (values: RESPONSE_TYPE_UNSPECIFIED, PARTIAL_UPDATE, FULL_UPDATE): The type of response. This may indicate that an action is required by the
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The format of the threats.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER): The threat type for which data is returned.

### MetadataEntry
* MetadataEntry `object`: A single metadata entry.
  * key `string`: The metadata entry key. For JSON requests, the key is base64-encoded.
  * value `string`: The metadata entry value. For JSON requests, the value is base64-encoded.

### RawHashes
* RawHashes `object`: The uncompressed threat entries in hash format of a particular prefix length.
  * prefixSize `integer`: The number of bytes for each prefix encoded below.  This field can be
  * rawHashes `string`: The hashes, in binary format, concatenated into one long string. Hashes are

### RawIndices
* RawIndices `object`: A set of raw indices to remove from a local list.
  * indices `array`: The indices to remove from a lexicographically-sorted local list.
    * items `integer`

### RiceDeltaEncoding
* RiceDeltaEncoding `object`: The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or
  * encodedData `string`: The encoded deltas that are encoded using the Golomb-Rice coder.
  * firstValue `string`: The offset of the first entry in the encoded data, or, if only a single
  * numEntries `integer`: The number of entries that are delta encoded in the encoded data. If only a
  * riceParameter `integer`: The Golomb-Rice parameter, which is a number between 2 and 28. This field

### ThreatEntry
* ThreatEntry `object`: An individual threat; for example, a malicious URL or its hash
  * digest `string`: The digest of an executable in SHA256 format. The API supports both
  * hash `string`: A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
  * url `string`: A URL.

### ThreatEntryMetadata
* ThreatEntryMetadata `object`: The metadata associated with a specific threat entry. The client is expected
  * entries `array`: The metadata entries.
    * items [MetadataEntry](#metadataentry)

### ThreatEntrySet
* ThreatEntrySet `object`: A set of threats that should be added or removed from a client's local
  * compressionType `string` (values: COMPRESSION_TYPE_UNSPECIFIED, RAW, RICE): The compression type for the entries in this set.
  * rawHashes [RawHashes](#rawhashes)
  * rawIndices [RawIndices](#rawindices)
  * riceHashes [RiceDeltaEncoding](#ricedeltaencoding)
  * riceIndices [RiceDeltaEncoding](#ricedeltaencoding)

### ThreatInfo
* ThreatInfo `object`: The information regarding one or more threats that a client submits when
  * platformTypes `array`: The platform types to be checked.
    * items `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME)
  * threatEntries `array`: The threat entries to be checked.
    * items [ThreatEntry](#threatentry)
  * threatEntryTypes `array`: The entry types to be checked.
    * items `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT)
  * threatTypes `array`: The threat types to be checked.
    * items `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER)

### ThreatListDescriptor
* ThreatListDescriptor `object`: Describes an individual threat list. A list is defined by three parameters:
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The platform type targeted by the list's entries.
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The entry types contained in the list.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER): The threat type posed by the list's entries.

### ThreatMatch
* ThreatMatch `object`: A match when checking a threat entry in the Safe Browsing threat lists.
  * cacheDuration `string`: The cache lifetime for the returned match. Clients must not cache this
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, WINDOWS, LINUX, ANDROID, OSX, IOS, ANY_PLATFORM, ALL_PLATFORMS, CHROME): The platform type matching this threat.
  * threat [ThreatEntry](#threatentry)
  * threatEntryMetadata [ThreatEntryMetadata](#threatentrymetadata)
  * threatEntryType `string` (values: THREAT_ENTRY_TYPE_UNSPECIFIED, URL, EXECUTABLE, IP_RANGE, CHROME_EXTENSION, FILENAME, CERT): The threat entry type matching this threat.
  * threatType `string` (values: THREAT_TYPE_UNSPECIFIED, MALWARE, SOCIAL_ENGINEERING, UNWANTED_SOFTWARE, POTENTIALLY_HARMFUL_APPLICATION, SOCIAL_ENGINEERING_INTERNAL, API_ABUSE, MALICIOUS_BINARY, CSD_WHITELIST, CSD_DOWNLOAD_WHITELIST, CLIENT_INCIDENT, CLIENT_INCIDENT_WHITELIST, APK_MALWARE_OFFLINE, SUBRESOURCE_FILTER): The threat type matching this threat.


