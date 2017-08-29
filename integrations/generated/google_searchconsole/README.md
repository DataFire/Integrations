# @datafire/google_searchconsole

Client library for Google Search Console URL Testing Tools

## Installation and Usage
```bash
npm install --save datafire @datafire/google_searchconsole
```

```js
let datafire = require('datafire');
let google_searchconsole = require('@datafire/google_searchconsole').create();

google_searchconsole.urlTestingTools.mobileFriendlyTest.run({}).then(data => {
  console.log(data);
})
```

## Description
Provides tools for running validation tests against single URLs

## Actions
### urlTestingTools.mobileFriendlyTest.run
Runs Mobile-Friendly Test for a given URL.


```js
google_searchconsole.urlTestingTools.mobileFriendlyTest.run({}, context)
```

#### Parameters
* body (object) - Mobile-friendly test request.
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
* pp (boolean) - Pretty-print response.

