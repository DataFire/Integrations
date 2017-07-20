# @datafire/google_adexperiencereport

Client library for Google Ad Experience Report

## Installation and Usage
```bash
npm install --save datafire @datafire/google_adexperiencereport
```

```js
let datafire = require('datafire');
let google_adexperiencereport = require('@datafire/google_adexperiencereport').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_adexperiencereport: account,
  }
})


google_adexperiencereport.violatingSites.list({}, context).then(data => {
  console.log(data);
})
```

## Description
View Ad Experience Report data, and get a list of sites that have a significant number of annoying ads.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adexperiencereport.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_adexperiencereport.oauthRefresh(null, context)
```


### violatingSites.list
Lists sites with Ad Experience Report statuses of "Failing" or "Warning".


```js
google_adexperiencereport.violatingSites.list({}, context)
```


### sites.get
Gets a summary of the ads rating of a site.


```js
google_adexperiencereport.sites.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The required site name. It should be a site property registered in Search
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

