# @datafire/google_abusiveexperiencereport

Client library for Abusive Experience Report API

## Installation and Usage
```bash
npm install --save @datafire/google_abusiveexperiencereport
```
```js
let google_abusiveexperiencereport = require('@datafire/google_abusiveexperiencereport').create();

.then(data => {
  console.log(data);
});
```

## Description

Views Abusive Experience Report data, and gets a list of sites that have a significant number of abusive experiences.

## Actions

### abusiveexperiencereport.violatingSites.list
Lists sites that are failing in the Abusive Experience Report.


```js
google_abusiveexperiencereport.abusiveexperiencereport.violatingSites.list({}, context)
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

### abusiveexperiencereport.sites.get
Gets a site's Abusive Experience Report summary.


```js
google_abusiveexperiencereport.abusiveexperiencereport.sites.get({
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

### SiteSummaryResponse
* SiteSummaryResponse `object`: Response message for GetSiteSummary.
  * abusiveStatus `string` (values: UNKNOWN, PASSING, FAILING): The site's Abusive Experience Report status.
  * enforcementTime `string`: The time at which [enforcement](https://support.google.com/webtools/answer/7538608) against the site began or will begin. Not set when the filter_status is OFF.
  * filterStatus `string` (values: UNKNOWN, ON, OFF, PAUSED, PENDING): The site's [enforcement status](https://support.google.com/webtools/answer/7538608).
  * lastChangeTime `string`: The time at which the site's status last changed.
  * reportUrl `string`: A link to the full Abusive Experience Report for the site. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.
  * reviewedSite `string`: The name of the reviewed site, e.g. `google.com`.
  * underReview `boolean`: Whether the site is currently under review.

### ViolatingSitesResponse
* ViolatingSitesResponse `object`: Response message for ListViolatingSites.
  * violatingSites `array`: The list of violating sites.
    * items [SiteSummaryResponse](#sitesummaryresponse)


