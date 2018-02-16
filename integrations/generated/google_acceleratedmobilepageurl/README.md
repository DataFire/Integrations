# @datafire/google_acceleratedmobilepageurl

Client library for Accelerated Mobile Pages (AMP) URL

## Installation and Usage
```bash
npm install --save @datafire/google_acceleratedmobilepageurl
```
```js
let google_acceleratedmobilepageurl = require('@datafire/google_acceleratedmobilepageurl').create();

google_acceleratedmobilepageurl.ampUrls.batchGet({}).then(data => {
  console.log(data);
});
```

## Description

Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).


## Actions

### ampUrls.batchGet
Returns AMP URL(s) and equivalent
[AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).


```js
google_acceleratedmobilepageurl.ampUrls.batchGet({}, context)
```

#### Input
* input `object`
  * body [BatchGetAmpUrlsRequest](#batchgetampurlsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchGetAmpUrlsResponse](#batchgetampurlsresponse)



## Definitions

### AmpUrl
* AmpUrl `object`: AMP URL response for a requested URL.
  * ampUrl `string`: The AMP URL pointing to the publisher's web server.
  * cdnAmpUrl `string`: The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
  * originalUrl `string`: The original non-AMP URL.

### AmpUrlError
* AmpUrlError `object`: AMP URL Error resource for a requested URL that couldn't be found.
  * errorCode `string` (values: ERROR_CODE_UNSPECIFIED, INPUT_URL_NOT_FOUND, NO_AMP_URL, APPLICATION_ERROR, URL_IS_VALID_AMP, URL_IS_INVALID_AMP): The error code of an API call.
  * errorMessage `string`: An optional descriptive error message.
  * originalUrl `string`: The original non-AMP URL.

### BatchGetAmpUrlsRequest
* BatchGetAmpUrlsRequest `object`: AMP URL request for a batch of URLs.
  * lookupStrategy `string` (values: FETCH_LIVE_DOC, IN_INDEX_DOC): The lookup_strategy being requested.
  * urls `array`: List of URLs to look up for the paired AMP URLs.
    * items `string`

### BatchGetAmpUrlsResponse
* BatchGetAmpUrlsResponse `object`: Batch AMP URL response.
  * ampUrls `array`: For each URL in BatchAmpUrlsRequest, the URL response. The response might
    * items [AmpUrl](#ampurl)
  * urlErrors `array`: The errors for requested URLs that have no AMP URL.
    * items [AmpUrlError](#ampurlerror)


