# @datafire/google_abusiveexperiencereport

Client library for Google Abusive Experience Report

## Installation and Usage
```bash
npm install --save @datafire/google_abusiveexperiencereport
```
```js
let google_abusiveexperiencereport = require('@datafire/google_abusiveexperiencereport').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_abusiveexperiencereport.violatingSites.list({}).then(data => {
  console.log(data);
});
```

## Description

View Abusive Experience Report data, and get a list of sites that have a significant number of abusive experiences.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_abusiveexperiencereport.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_abusiveexperiencereport.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### violatingSites.list
Lists sites with Abusive Experience Report statuses of "Failing".


```js
google_abusiveexperiencereport.violatingSites.list({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ViolatingSitesResponse](#violatingsitesresponse)

### sites.get
Gets a summary of the abusive experience rating of a site.


```js
google_abusiveexperiencereport.sites.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The required site name. This is the site property whose abusive
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [SiteSummaryResponse](#sitesummaryresponse)



## Definitions

### SiteSummaryResponse
* SiteSummaryResponse `object`: Response message for GetSiteSummary.
  * abusiveStatus `string` (values: UNKNOWN, PASSING, FAILING): The status of the site reviewed for the abusive experiences.
  * enforcementTime `string`: The date on which enforcement begins.
  * filterStatus `string` (values: UNKNOWN, ON, OFF, PAUSED, PENDING): The abusive experience enforcement status of the site.
  * lastChangeTime `string`: The last time that the site changed status.
  * reportUrl `string`: A link that leads to a full abusive experience report.
  * reviewedSite `string`: The name of the site reviewed.
  * underReview `boolean`: Whether the site is currently under review.

### ViolatingSitesResponse
* ViolatingSitesResponse `object`: Response message for ListViolatingSites.
  * violatingSites `array`: A list of summaries of violating sites.
    * items [SiteSummaryResponse](#sitesummaryresponse)


