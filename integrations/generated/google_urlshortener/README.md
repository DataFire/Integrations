# @datafire/google_urlshortener

Client library for URL Shortener

## Installation and Usage
```bash
npm install --save @datafire/google_urlshortener
```
```js
let google_urlshortener = require('@datafire/google_urlshortener').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_urlshortener.url.list({}).then(data => {
  console.log(data);
});
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
google_urlshortener.oauthRefresh(null, context)
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

### url.get
Expands a short URL or gets creation time and analytics.


```js
google_urlshortener.url.get({
  "shortUrl": ""
}, context)
```

#### Input
* input `object`
  * projection `string` (values: ANALYTICS_CLICKS, ANALYTICS_TOP_STRINGS, FULL): Additional information to return.
  * shortUrl **required** `string`: The short URL, including the protocol.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Url](#url)

### url.insert
Creates a new short URL.


```js
google_urlshortener.url.insert({}, context)
```

#### Input
* input `object`
  * body [Url](#url)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Url](#url)

### url.list
Retrieves a list of URLs shortened by a user.


```js
google_urlshortener.url.list({}, context)
```

#### Input
* input `object`
  * projection `string` (values: ANALYTICS_CLICKS, FULL): Additional information to return.
  * start-token `string`: Token for requesting successive pages of results.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [UrlHistory](#urlhistory)



## Definitions

### AnalyticsSnapshot
* AnalyticsSnapshot `object`
  * browsers `array`: Top browsers, e.g. "Chrome"; sorted by (descending) click counts. Only present if this data is available.
    * items [StringCount](#stringcount)
  * countries `array`: Top countries (expressed as country codes), e.g. "US" or "DE"; sorted by (descending) click counts. Only present if this data is available.
    * items [StringCount](#stringcount)
  * longUrlClicks `string`: Number of clicks on all goo.gl short URLs pointing to this long URL.
  * platforms `array`: Top platforms or OSes, e.g. "Windows"; sorted by (descending) click counts. Only present if this data is available.
    * items [StringCount](#stringcount)
  * referrers `array`: Top referring hosts, e.g. "www.google.com"; sorted by (descending) click counts. Only present if this data is available.
    * items [StringCount](#stringcount)
  * shortUrlClicks `string`: Number of clicks on this short URL.

### AnalyticsSummary
* AnalyticsSummary `object`
  * allTime [AnalyticsSnapshot](#analyticssnapshot)
  * day [AnalyticsSnapshot](#analyticssnapshot)
  * month [AnalyticsSnapshot](#analyticssnapshot)
  * twoHours [AnalyticsSnapshot](#analyticssnapshot)
  * week [AnalyticsSnapshot](#analyticssnapshot)

### StringCount
* StringCount `object`
  * count `string`: Number of clicks for this top entry, e.g. for this particular country or browser.
  * id `string`: Label assigned to this top entry, e.g. "US" or "Chrome".

### Url
* Url `object`
  * analytics [AnalyticsSummary](#analyticssummary)
  * created `string`: Time the short URL was created; ISO 8601 representation using the yyyy-MM-dd'T'HH:mm:ss.SSSZZ format, e.g. "2010-10-14T19:01:24.944+00:00".
  * id `string`: Short URL, e.g. "http://goo.gl/l6MS".
  * kind `string`: The fixed string "urlshortener#url".
  * longUrl `string`: Long URL, e.g. "http://www.google.com/". Might not be present if the status is "REMOVED".
  * status `string`: Status of the target URL. Possible values: "OK", "MALWARE", "PHISHING", or "REMOVED". A URL might be marked "REMOVED" if it was flagged as spam, for example.

### UrlHistory
* UrlHistory `object`
  * items `array`: A list of URL resources.
    * items [Url](#url)
  * itemsPerPage `integer`: Number of items returned with each full "page" of results. Note that the last page could have fewer items than the "itemsPerPage" value.
  * kind `string`: The fixed string "urlshortener#urlHistory".
  * nextPageToken `string`: A token to provide to get the next page of results.
  * totalItems `integer`: Total number of short URLs associated with this user (may be approximate).


