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

### accounts.products.delete
Deletes the product from a Manufacturer Center account.


```js
google_manufacturers.accounts.products.delete({
  "name": "",
  "parent": ""
}, context)
```

#### Parameters
* name (string) **required** - Name in the format `{target_country}:{content_language}:{product_id}`.
* parent (string) **required** - Parent ID in the format `accounts/{account_id}`.
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

A recently updated product takes around 15 minutes to process. Changes are
only visible after it has been processed. While some issues may be
available once the product has been processed, other issues may take days
to appear.


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

### accounts.products.update
Inserts or updates the product in a Manufacturer Center account.

The checks at upload time are minimal. All required attributes need to be
present for a product to be valid. Issues may show up later
after the API has accepted an update for a product and it is possible to
overwrite an existing valid product with an invalid product. To detect
this, you should retrieve the product and check it for issues once the
updated version is available.

Inserted or updated products first need to be processed before they can be
retrieved. Until then, new products will be unavailable, and retrieval
of updated products will return the original state of the product.


```js
google_manufacturers.accounts.products.update({
  "name": "",
  "parent": ""
}, context)
```

#### Parameters
* body (object) - Product data.
* name (string) **required** - Name in the format `{target_country}:{content_language}:{product_id}`.
* parent (string) **required** - Parent ID in the format `accounts/{account_id}`.
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

