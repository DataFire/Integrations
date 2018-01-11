# @datafire/google_adexperiencereport

Client library for Google Ad Experience Report

## Installation and Usage
```bash
npm install --save @datafire/google_adexperiencereport
```
```js
let google_adexperiencereport = require('@datafire/google_adexperiencereport').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_adexperiencereport.violatingSites.list({}).then(data => {
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
google_adexperiencereport.oauthRefresh(null, context)
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
Lists sites with Ad Experience Report statuses of "Failing" or "Warning".


```js
google_adexperiencereport.violatingSites.list({}, context)
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
Gets a summary of the ad experience rating of a site.


```js
google_adexperiencereport.sites.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The required site name. It should be the site property whose ad experiences
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

### PlatformSummary
* PlatformSummary `object`: Summary of the ad experience rating of a site for a specific platform.
  * betterAdsStatus `string` (values: UNKNOWN, PASSING, WARNING, FAILING): The status of the site reviewed for the Better Ads Standards.
  * enforcementTime `string`: The date on which ad filtering begins.
  * filterStatus `string` (values: UNKNOWN, ON, OFF, PAUSED, PENDING): The ad filtering status of the site.
  * lastChangeTime `string`: The last time that the site changed status.
  * region `array`: The assigned regions for the site and platform.
    * items `string` (values: REGION_UNKNOWN, REGION_A, REGION_B)
  * reportUrl `string`: A link that leads to a full ad experience report.
  * underReview `boolean`: Whether the site is currently under review.

### SiteSummaryResponse
* SiteSummaryResponse `object`: Response message for GetSiteSummary.
  * desktopSummary [PlatformSummary](#platformsummary)
  * mobileSummary [PlatformSummary](#platformsummary)
  * reviewedSite `string`: The name of the site reviewed.

### ViolatingSitesResponse
* ViolatingSitesResponse `object`: Response message for ListViolatingSites.
  * violatingSites `array`: A list of summaries of violating sites.
    * items [SiteSummaryResponse](#sitesummaryresponse)


