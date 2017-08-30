# @datafire/google_manufacturers

Client library for Manufacturer Center

## Installation and Usage
```bash
npm install --save datafire @datafire/google_manufacturers
```

```js
let datafire = require('datafire');
let google_manufacturers = require('@datafire/google_manufacturers').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_manufacturers.accounts.products.list({}).then(data => {
  console.log(data);
})
```

## Description
Public API for managing Manufacturer Center related data.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_manufacturers.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_manufacturers.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### accounts.products.list
Lists all the products in a Manufacturer Center account.


```js
google_manufacturers.accounts.products.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Parent ID in the format `accounts/{account_id}`.
* pageToken (string) - The token returned by the previous request.
* pageSize (integer) - Maximum number of product statuses to return in the response, used for
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### accounts.products.get
Gets the product from a Manufacturer Center account, including product
issues.


```js
google_manufacturers.accounts.products.get({
  "parent": "",
  "name": ""
}, context)
```

#### Parameters
* parent (string) **required** - Parent ID in the format `accounts/{account_id}`.
* name (string) **required** - Name in the format `{target_country}:{content_language}:{product_id}`.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

