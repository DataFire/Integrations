# @datafire/google_playmoviespartner

Client library for Google Play Movies Partner

## Installation and Usage
```bash
npm install --save datafire @datafire/google_playmoviespartner
```

```js
let datafire = require('datafire');
let google_playmoviespartner = require('@datafire/google_playmoviespartner').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_playmoviespartner.accounts.avails.list({}).then(data => {
  console.log(data);
})
```

## Description
Gets the delivery status of titles for Google Play Movies Partners.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_playmoviespartner.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_playmoviespartner.oauthRefresh(null, context)
```


### accounts.avails.list
List Avails owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.avails.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - REQUIRED. See _General rules_ for more information about this field.
* title (string) - Filter that matches Avails with a `title_internal_alias`,
* videoIds (array) - Filter Avails that match any of the given `video_id`s.
* pageToken (string) - See _List methods rules_ for info about this field.
* pageSize (integer) - See _List methods rules_ for info about this field.
* altIds (array) - Filter Avails that match (case-insensitive) any of the given partner-specific custom ids.
* pphNames (array) - See _List methods rules_ for info about this field.
* altId (string) - Filter Avails that match a case-insensitive, partner-specific custom id.
* studioNames (array) - See _List methods rules_ for info about this field.
* territories (array) - Filter Avails that match (case-insensitive) any of the given country codes,
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
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### accounts.avails.get
Get an Avail given its avail group id and avail id.


```js
google_playmoviespartner.accounts.avails.get({
  "accountId": "",
  "availId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - REQUIRED. See _General rules_ for more information about this field.
* availId (string) **required** - REQUIRED. Avail ID.
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
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### accounts.orders.list
List Orders owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.orders.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - REQUIRED. See _General rules_ for more information about this field.
* pageToken (string) - See _List methods rules_ for info about this field.
* customId (string) - Filter Orders that match a case-insensitive, partner-specific custom id.
* videoIds (array) - Filter Orders that match any of the given `video_id`s.
* pageSize (integer) - See _List methods rules_ for info about this field.
* pphNames (array) - See _List methods rules_ for info about this field.
* status (array) - Filter Orders that match one of the given status.
* name (string) - Filter that matches Orders with a `name`, `show`, `season` or `episode`
* studioNames (array) - See _List methods rules_ for info about this field.
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
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### accounts.orders.get
Get an Order given its id.

See _Authentication and Authorization rules_ and
_Get methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.orders.get({
  "accountId": "",
  "orderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - REQUIRED. See _General rules_ for more information about this field.
* orderId (string) **required** - REQUIRED. Order ID.
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
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### accounts.storeInfos.list
List StoreInfos owned or managed by the partner.

See _Authentication and Authorization rules_ and
_List methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.storeInfos.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - REQUIRED. See _General rules_ for more information about this field.
* seasonIds (array) - Filter StoreInfos that match any of the given `season_id`s.
* pageToken (string) - See _List methods rules_ for info about this field.
* videoId (string) - Filter StoreInfos that match a given `video_id`.
* videoIds (array) - Filter StoreInfos that match any of the given `video_id`s.
* pageSize (integer) - See _List methods rules_ for info about this field.
* mids (array) - Filter StoreInfos that match any of the given `mid`s.
* pphNames (array) - See _List methods rules_ for info about this field.
* countries (array) - Filter StoreInfos that match (case-insensitive) any of the given country
* name (string) - Filter that matches StoreInfos with a `name` or `show_name`
* studioNames (array) - See _List methods rules_ for info about this field.
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
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### accounts.storeInfos.country.get
Get a StoreInfo given its video id and country.

See _Authentication and Authorization rules_ and
_Get methods rules_ for more information about this method.


```js
google_playmoviespartner.accounts.storeInfos.country.get({
  "accountId": "",
  "videoId": "",
  "country": ""
}, context)
```

#### Parameters
* accountId (string) **required** - REQUIRED. See _General rules_ for more information about this field.
* videoId (string) **required** - REQUIRED. Video ID.
* country (string) **required** - REQUIRED. Edit country.
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
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

