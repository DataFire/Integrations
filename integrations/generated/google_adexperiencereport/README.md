# @datafire/google_adexperiencereport

Client library for Ad Experience Report API

## Installation and Usage
```bash
npm install --save @datafire/google_adexperiencereport
```
```js
let google_adexperiencereport = require('@datafire/google_adexperiencereport').create();

.then(data => {
  console.log(data);
});
```

## Description

Views Ad Experience Report data, and gets a list of sites that have a significant number of annoying ads.

## Actions

### adexperiencereport.violatingSites.list
Lists sites that are failing in the Ad Experience Report on at least one platform.


```js
google_adexperiencereport.adexperiencereport.violatingSites.list({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ViolatingSitesResponse](#violatingsitesresponse)

### adexperiencereport.sites.get
Gets a site's Ad Experience Report summary.


```js
google_adexperiencereport.adexperiencereport.sites.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SiteSummaryResponse](#sitesummaryresponse)



## Definitions

### PlatformSummary
* PlatformSummary `object`: A site's Ad Experience Report summary on a single platform.
  * betterAdsStatus `string` (values: UNKNOWN, PASSING, WARNING, FAILING): The site's Ad Experience Report status on this platform.
  * enforcementTime `string`: The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF.
  * filterStatus `string` (values: UNKNOWN, ON, OFF, PAUSED, PENDING): The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform.
  * lastChangeTime `string`: The time at which the site's status last changed on this platform.
  * region `array`: The site's regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions.
    * items `string` (values: REGION_UNKNOWN, REGION_A, REGION_B, REGION_C)
  * reportUrl `string`: A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.
  * underReview `boolean`: Whether the site is currently under review on this platform.

### SiteSummaryResponse
* SiteSummaryResponse `object`: Response message for GetSiteSummary.
  * desktopSummary [PlatformSummary](#platformsummary)
  * mobileSummary [PlatformSummary](#platformsummary)
  * reviewedSite `string`: The name of the reviewed site, e.g. `google.com`.

### ViolatingSitesResponse
* ViolatingSitesResponse `object`: Response message for ListViolatingSites.
  * violatingSites `array`: The list of violating sites.
    * items [SiteSummaryResponse](#sitesummaryresponse)


