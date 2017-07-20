# @datafire/google_analyticsreporting

Client library for Google Analytics Reporting

## Installation and Usage
```bash
npm install --save datafire @datafire/google_analyticsreporting
```

```js
let datafire = require('datafire');
let google_analyticsreporting = require('@datafire/google_analyticsreporting').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_analyticsreporting: account,
  }
})

google_analyticsreporting.reports.batchGet({}, context).then(data => {
  console.log(data);
})
```

## Description
Accesses Analytics report data.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_analyticsreporting.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_analyticsreporting.oauthRefresh(null, context)
```


### reports.batchGet
Returns the Analytics data.


```js
google_analyticsreporting.reports.batchGet({}, context)
```

#### Parameters
* body (object) - The batch request containing multiple report request.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

