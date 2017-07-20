# @datafire/google_vision

Client library for Google Cloud Vision

## Installation and Usage
```bash
npm install --save datafire @datafire/google_vision
```

```js
let datafire = require('datafire');
let google_vision = require('@datafire/google_vision').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_vision: account,
  }
})

google_vision.images.annotate({}, context).then(data => {
  console.log(data);
})
```

## Description
Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_vision.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_vision.oauthRefresh(null, context)
```


### images.annotate
Run image detection and annotation for a batch of images.


```js
google_vision.images.annotate({}, context)
```

#### Parameters
* body (object) - Multiple image annotation requests are batched into a single service call.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

