# @datafire/google_videointelligence

Client library for Google Cloud Video Intelligence

## Installation and Usage
```bash
npm install --save datafire @datafire/google_videointelligence
```

```js
let datafire = require('datafire');
let google_videointelligence = require('@datafire/google_videointelligence').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_videointelligence.videos.annotate({}).then(data => {
  console.log(data);
})
```

## Description
Google Cloud Video Intelligence API.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_videointelligence.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_videointelligence.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### videos.annotate
Performs asynchronous video annotation. Progress and results can be
retrieved through the `google.longrunning.Operations` interface.
`Operation.metadata` contains `AnnotateVideoProgress` (progress).
`Operation.response` contains `AnnotateVideoResponse` (results).


```js
google_videointelligence.videos.annotate({}, context)
```

#### Parameters
* body (object) - Video annotation request.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

