# @datafire/google_firebasedynamiclinks

Client library for Firebase Dynamic Links

## Installation and Usage
```bash
npm install --save datafire @datafire/google_firebasedynamiclinks
```

```js
let datafire = require('datafire');
let google_firebasedynamiclinks = require('@datafire/google_firebasedynamiclinks').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_firebasedynamiclinks.shortLinks.create({}).then(data => {
  console.log(data);
})
```

## Description
Programmatically creates and manages Firebase Dynamic Links.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_firebasedynamiclinks.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_firebasedynamiclinks.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### installAttribution
Get iOS strong/weak-match info for post-install attribution.


```js
google_firebasedynamiclinks.installAttribution({}, context)
```

#### Parameters
* body (object) - Request for iSDK to execute strong match flow for post-install attribution.
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

### shortLinks.create
Creates a short Dynamic Link given either a valid long Dynamic Link or
details such as Dynamic Link domain, Android and iOS app information.
The created short Dynamic Link will not expire.

Repeated calls with the same long Dynamic Link or Dynamic Link information
will produce the same short Dynamic Link.

The Dynamic Link domain in the request must be owned by requester's
Firebase project.


```js
google_firebasedynamiclinks.shortLinks.create({}, context)
```

#### Parameters
* body (object) - Request to create a short Dynamic Link.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### getLinkStats
Fetches analytics stats of a short Dynamic Link for a given
duration. Metrics include number of clicks, redirects, installs,
app first opens, and app reopens.


```js
google_firebasedynamiclinks.getLinkStats({
  "dynamicLink": ""
}, context)
```

#### Parameters
* durationDays (string) - The span of time requested in days.
* dynamicLink (string) **required** - Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
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

