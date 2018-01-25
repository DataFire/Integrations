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
  * url **required** `string`: The URL to fetch and analyze
  * filter_third_party_resources `boolean`: Indicates if third party resources should be filtered out before PageSpeed analysis.
  * locale `string`: The locale used to localize formatted results
  * rule `array`: A PageSpeed rule to run; if none are given, all rules are run
  * screenshot `boolean`: Indicates if binary data containing a screenshot should be included
  * strategy `string` (values: desktop, mobile): The analysis strategy to use
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Result](#result)



## Definitions

### PagespeedApiFormatStringV2
* PagespeedApiFormatStringV2 `object`
  * args `array`: List of arguments for the format string.
    * items `object`
      * key `string`: The placeholder key for this arg, as a string.
      * rects `array`: The screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. If this is absent for a SNAPSHOT_RECT argument, it means that that argument refers to the entire snapshot.
        * items `object`
          * height `integer`: The height of the rect.
          * left `integer`: The left coordinate of the rect, in page coordinates.
          * top `integer`: The top coordinate of the rect, in page coordinates.
          * width `integer`: The width of the rect.
      * secondary_rects `array`: Secondary screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments.
        * items `object`
          * height `integer`: The height of the rect.
          * left `integer`: The left coordinate of the rect, in page coordinates.
          * top `integer`: The top coordinate of the rect, in page coordinates.
          * width `integer`: The width of the rect.
      * type `string`: Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT.
      * value `string`: Argument value, as a localized string.
  * format `string`: A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'.

### PagespeedApiImageV2
* PagespeedApiImageV2 `object`
  * data `string`: Image data base64 encoded.
  * height `integer`: Height of screenshot in pixels.
  * key `string`: Unique string key, if any, identifying this image.
  * mime_type `string`: Mime type of image data (e.g. "image/jpeg").
  * page_rect `object`: The region of the page that is captured by this image, with dimensions measured in CSS pixels.
    * height `integer`: The height of the rect.
    * left `integer`: The left coordinate of the rect, in page coordinates.
    * top `integer`: The top coordinate of the rect, in page coordinates.
    * width `integer`: The width of the rect.
  * width `integer`: Width of screenshot in pixels.

### Result
* Result `object`
  * formattedResults `object`: Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
    * locale `string`: The locale of the formattedResults, e.g. "en_US".
    * ruleResults `object`: Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server.
  * id `string`: Canonicalized and final URL for the document, after following page redirects (if any).
  * invalidRules `array`: List of rules that were specified in the request, but which the server did not know how to instantiate.
    * items `string`
  * kind `string`: Kind of result.
  * pageStats `object`: Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
    * cssResponseBytes `string`: Number of uncompressed response bytes for CSS resources on the page.
    * flashResponseBytes `string`: Number of response bytes for flash resources on the page.
    * htmlResponseBytes `string`: Number of uncompressed response bytes for the main HTML document and all iframes on the page.
    * imageResponseBytes `string`: Number of response bytes for image resources on the page.
    * javascriptResponseBytes `string`: Number of uncompressed response bytes for JS resources on the page.
    * numberCssResources `integer`: Number of CSS resources referenced by the page.
    * numberHosts `integer`: Number of unique hosts referenced by the page.
    * numberJsResources `integer`: Number of JavaScript resources referenced by the page.
    * numberResources `integer`: Number of HTTP resources loaded by the page.
    * numberStaticResources `integer`: Number of static (i.e. cacheable) resources on the page.
    * otherResponseBytes `string`: Number of response bytes for other resources on the page.
    * textResponseBytes `string`: Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page.
    * totalRequestBytes `string`: Total size of all request bytes sent by the page.
  * responseCode `integer`: Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
  * ruleGroups `object`: A map with one entry for each rule group in these results.
  * screenshot [PagespeedApiImageV2](#pagespeedapiimagev2)
  * title `string`: Title of the page, as displayed in the browser's title bar.
  * version `object`: The version of PageSpeed used to generate these results.
    * major `integer`: The major version number of PageSpeed used to generate these results.
    * minor `integer`: The minor version number of PageSpeed used to generate these results.


