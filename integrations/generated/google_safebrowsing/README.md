# @datafire/google_safebrowsing

Client library for Google Safe Browsing

## Installation and Usage
```bash
npm install --save datafire @datafire/google_safebrowsing
```

```js
let datafire = require('datafire');
let google_safebrowsing = require('@datafire/google_safebrowsing').actions;
let context = new datafire.Context();

google_safebrowsing.threatMatches.find({}, context).then(data => {
  console.log(data);
})
```

## Description
The Safe Browsing API is an experimental API that allows client applications to check URLs against Google's constantly-updated blacklists of suspected phishing and malware pages. Your client application can use the API to download an encrypted table for local, client-side lookups of URLs.

## Actions
### encodedFullHashes.get



```js
google_safebrowsing.encodedFullHashes.get({
  "encodedRequest": ""
}, context)
```

#### Parameters
* encodedRequest (string) **required** - A serialized FindFullHashesRequest proto.
* clientId (string) - A client ID that (hopefully) uniquely identifies the client implementation
* clientVersion (string) - The version of the client implementation.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

### encodedUpdates.get



```js
google_safebrowsing.encodedUpdates.get({
  "encodedRequest": ""
}, context)
```

#### Parameters
* encodedRequest (string) **required** - A serialized FetchThreatListUpdatesRequest proto.
* clientId (string) - A client ID that uniquely identifies the client implementation of the Safe
* clientVersion (string) - The version of the client implementation.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

### fullHashes.find
Finds the full hashes that match the requested hash prefixes.


```js
google_safebrowsing.fullHashes.find({}, context)
```


### threatListUpdates.fetch
Fetches the most recent threat list updates. A client can request updates
for multiple lists at once.


```js
google_safebrowsing.threatListUpdates.fetch({}, context)
```


### threatLists.list
Lists the Safe Browsing threat lists available for download.


```js
google_safebrowsing.threatLists.list({}, context)
```


### threatMatches.find
Finds the threat entries that match the Safe Browsing lists.


```js
google_safebrowsing.threatMatches.find({}, context)
```


