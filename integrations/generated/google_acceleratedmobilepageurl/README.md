# @datafire/google_acceleratedmobilepageurl

Client library for Accelerated Mobile Pages (AMP) URL

## Installation and Usage
```bash
npm install --save datafire @datafire/google_acceleratedmobilepageurl
```

```js
let datafire = require('datafire');
let google_acceleratedmobilepageurl = require('@datafire/google_acceleratedmobilepageurl').create();

google_acceleratedmobilepageurl.ampUrls.batchGet({}).then(data => {
  console.log(data);
})
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

#### Parameters
* body (object) - AMP URL request for a batch of URLs.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.

