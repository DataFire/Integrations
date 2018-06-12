# @datafire/google_pagespeedonline

Client library for PageSpeed Insights

## Installation and Usage
```bash
npm install --save @datafire/google_pagespeedonline
```
```js
let google_pagespeedonline = require('@datafire/google_pagespeedonline').create();

google_pagespeedonline.pagespeedapi.runpagespeed({
  "url": ""
}).then(data => {
  console.log(data);
});
```

## Description

Analyzes the performance of a web page and provides tailored suggestions to make that page faster.

## Actions

### pagespeedapi.runpagespeed
Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.


```js
google_pagespeedonline.pagespeedapi.runpagespeed({
  "url": ""
}, context)
```

#### Input
* input `object`
  * filter_third_party_resources `boolean`: Indicates if third party resources should be filtered out before PageSpeed analysis.
  * locale `string`: The locale used to localize formatted results
  * rule `array`: A PageSpeed rule to run; if none are given, all rules are run
  * screenshot `boolean`: Indicates if binary data containing a screenshot should be included
  * snapshots `boolean`: Indicates if binary data containing snapshot images should be included
  * strategy `string` (values: desktop, mobile): The analysis strategy (desktop or mobile) to use, and desktop is the default
  * url **required** `string`: The URL to fetch and analyze
  * utm_campaign `string`: Campaign name for analytics.
  * utm_source `string`: Campaign source for analytics.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PagespeedApiPagespeedResponseV4](#pagespeedapipagespeedresponsev4)



## Definitions

### PagespeedApiFormatStringV4
* PagespeedApiFormatStringV4 `object`
  * args `array`: List of arguments for the format string.
    * items `object`
      * key `string`: The placeholder key for this arg, as a string.
      * rects `array`: The screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. If this is absent for a SNAPSHOT_RECT argument, it means that that argument refers to the entire snapshot.
        * items `object`
          * height `integer`
          * left `integer`
          * top `integer`
          * width `integer`
      * secondary_rects `array`: Secondary screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments.
        * items `object`
          * height `integer`
          * left `integer`
          * top `integer`
          * width `integer`
      * type `string`: Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT.
      * value `string`: Argument value, as a localized string.
  * format `string`: A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'.

### PagespeedApiImageV4
* PagespeedApiImageV4 `object`
  * data `string`: Image data base64 encoded.
  * height `integer`: Height of screenshot in pixels.
  * key `string`: Unique string key, if any, identifying this image.
  * mime_type `string`: Mime type of image data (e.g. "image/jpeg").
  * page_rect `object`
    * height `integer`
    * left `integer`
    * top `integer`
    * width `integer`
  * width `integer`: Width of screenshot in pixels.

### PagespeedApiPagespeedResponseV4
* PagespeedApiPagespeedResponseV4 `object`
  * captchaResult `string`: The captcha verify result
  * formattedResults `object`: Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
    * locale `string`: The locale of the formattedResults, e.g. "en_US".
    * ruleResults `object`: Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server.
  * id `string`: Canonicalized and final URL for the document, after following page redirects (if any).
  * invalidRules `array`: List of rules that were specified in the request, but which the server did not know how to instantiate.
    * items `string`
  * kind `string`: Kind of result.
  * loadingExperience `object`: Metrics of end users' page loading experience.
    * id `string`: The url, pattern or origin which the metrics are on.
    * initial_url `string`
    * metrics `object`
    * overall_category `string`
  * pageStats `object`: Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
    * cms `string`: Content management system (CMS) used for the page.
    * cssResponseBytes `string`: Number of uncompressed response bytes for CSS resources on the page.
    * flashResponseBytes `string`: Number of response bytes for flash resources on the page.
    * htmlResponseBytes `string`: Number of uncompressed response bytes for the main HTML document and all iframes on the page.
    * imageResponseBytes `string`: Number of response bytes for image resources on the page.
    * javascriptResponseBytes `string`: Number of uncompressed response bytes for JS resources on the page.
    * numRenderBlockingRoundTrips `integer`: The needed round trips to load render blocking resources
    * numTotalRoundTrips `integer`: The needed round trips to load the full page
    * numberCssResources `integer`: Number of CSS resources referenced by the page.
    * numberHosts `integer`: Number of unique hosts referenced by the page.
    * numberJsResources `integer`: Number of JavaScript resources referenced by the page.
    * numberResources `integer`: Number of HTTP resources loaded by the page.
    * numberRobotedResources `integer`: Number of roboted resources.
    * numberStaticResources `integer`: Number of static (i.e. cacheable) resources on the page.
    * numberTransientFetchFailureResources `integer`: Number of transient-failed resources.
    * otherResponseBytes `string`: Number of response bytes for other resources on the page.
    * overTheWireResponseBytes `string`: Number of over-the-wire bytes, uses the default gzip compression strategy as an estimation.
    * robotedUrls `array`: List of roboted urls.
      * items `string`
    * textResponseBytes `string`: Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page.
    * totalRequestBytes `string`: Total size of all request bytes sent by the page.
    * transientFetchFailureUrls `array`: List of transient fetch failure urls.
      * items `string`
  * responseCode `integer`: Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
  * ruleGroups `object`: A map with one entry for each rule group in these results.
  * screenshot [PagespeedApiImageV4](#pagespeedapiimagev4)
  * snapshots `array`: Additional base64-encoded screenshots of the page, in various partial render states.
    * items [PagespeedApiImageV4](#pagespeedapiimagev4)
  * title `string`: Title of the page, as displayed in the browser's title bar.
  * version `object`: The version of PageSpeed used to generate these results.
    * major `integer`: The major version number of PageSpeed used to generate these results.
    * minor `integer`: The minor version number of PageSpeed used to generate these results.


