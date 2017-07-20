# @datafire/google_urlshortener

Client library for URL Shortener

## Installation and Usage
```bash
npm install --save datafire @datafire/google_urlshortener
```

```js
let datafire = require('datafire');
let google_urlshortener = require('@datafire/google_urlshortener').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_urlshortener: account,
  }
})

google_urlshortener.url.list({}, context).then(data => {
  console.log(data);
})
```

## Description
Lets you create, inspect, and manage goo.gl short URLs

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_urlshortener.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_urlshortener.oauthRefresh(null, context)
```


### url.get
Expands a short URL or gets creation time and analytics.


```js
google_urlshortener.url.get({
  "shortUrl": ""
}, context)
```

#### Parameters
* shortUrl (string) **required** - The short URL, including the protocol.
* projection (string) - Additional information to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### url.insert
Creates a new short URL.


```js
google_urlshortener.url.insert({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### url.list
Retrieves a list of URLs shortened by a user.


```js
google_urlshortener.url.list({}, context)
```

#### Parameters
* projection (string) - Additional information to return.
* start-token (string) - Token for requesting successive pages of results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

