# @datafire/google_pagespeedonline

Client library for PageSpeed Insights API

## Installation and Usage
```bash
npm install --save @datafire/google_pagespeedonline
```
```js
let google_pagespeedonline = require('@datafire/google_pagespeedonline').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The PageSpeed Insights API lets you analyze the performance of your website with a simple API. It offers tailored suggestions for how you can optimize your site, and lets you easily integrate PageSpeed Insights analysis into your development tools and workflow. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_pagespeedonline.oauthCallback({
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
google_pagespeedonline.oauthRefresh(null, context)
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

### pagespeedonline.pagespeedapi.runpagespeed
Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.


```js
google_pagespeedonline.pagespeedonline.pagespeedapi.runpagespeed({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: Required. The URL to fetch and analyze
  * captchaToken `string`: The captcha token passed when filling out a captcha.
  * category `array`: A Lighthouse category to run; if none are given, only Performance category will be run
  * locale `string`: The locale used to localize formatted results
  * strategy `string` (values: STRATEGY_UNSPECIFIED, DESKTOP, MOBILE): The analysis strategy (desktop or mobile) to use, and desktop is the default
  * utm_campaign `string`: Campaign name for analytics.
  * utm_source `string`: Campaign source for analytics.
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
* output [PagespeedApiPagespeedResponseV5](#pagespeedapipagespeedresponsev5)



## Definitions

### AuditRefs
* AuditRefs `object`: A light reference to an audit by id, used to group and weight audits in a given category.
  * group `string`: The category group that the audit belongs to (optional).
  * id `string`: The audit ref id.
  * weight `number`: The weight this audit's score has on the overall category score.

### Bucket
* Bucket `object`: A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.
  * max `integer`: Upper bound for a bucket's range.
  * min `integer`: Lower bound for a bucket's range.
  * proportion `number`: The proportion of data in this bucket.

### Categories
* Categories `object`: The categories in a Lighthouse run.
  * accessibility [LighthouseCategoryV5](#lighthousecategoryv5)
  * best-practices [LighthouseCategoryV5](#lighthousecategoryv5)
  * performance [LighthouseCategoryV5](#lighthousecategoryv5)
  * pwa [LighthouseCategoryV5](#lighthousecategoryv5)
  * seo [LighthouseCategoryV5](#lighthousecategoryv5)

### CategoryGroupV5
* CategoryGroupV5 `object`: Message containing a category
  * description `string`: The description of what the category is grouping
  * title `string`: The human readable title of the group

### ConfigSettings
* ConfigSettings `object`: Message containing the configuration settings for the Lighthouse run.
  * channel `string`: How Lighthouse was run, e.g. from the Chrome extension or from the npm module.
  * emulatedFormFactor `string`: The form factor the emulation should use.
  * locale `string`: The locale setting.

### Environment
* Environment `object`: Message containing environment configuration for a Lighthouse run.
  * benchmarkIndex `number`: The benchmark index number that indicates rough device class.
  * hostUserAgent `string`: The user agent string of the version of Chrome used.
  * networkUserAgent `string`: The user agent string that was sent over the network.

### I18n
* I18n `object`: Message containing the i18n data for the LHR - Version 1.
  * rendererFormattedStrings [RendererFormattedStrings](#rendererformattedstrings)

### LighthouseAuditResultV5
* LighthouseAuditResultV5 `object`: An audit's result object in a Lighthouse result.
  * description `string`: The description of the audit.
  * details `object`: Freeform details section of the audit.
  * displayValue `string`: The value that should be displayed on the UI for this audit.
  * errorMessage `string`: An error message from a thrown error inside the audit.
  * explanation `string`: An explanation of the errors in the audit.
  * id `string`: The audit's id.
  * numericValue `number`: A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present.
  * scoreDisplayMode `string`: The enumerated score display mode.
  * title `string`: The human readable title.

### LighthouseCategoryV5
* LighthouseCategoryV5 `object`: A Lighthouse category.
  * auditRefs `array`: An array of references to all the audit members of this category.
    * items [AuditRefs](#auditrefs)
  * description `string`: A more detailed description of the category and its importance.
  * id `string`: The string identifier of the category.
  * manualDescription `string`: A description for the manual audits in the category.
  * title `string`: The human-friendly name of the category.

### LighthouseResultV5
* LighthouseResultV5 `object`: The Lighthouse result object.
  * audits `object`: Map of audits in the LHR.
  * categories [Categories](#categories)
  * categoryGroups `object`: Map of category groups in the LHR.
  * configSettings [ConfigSettings](#configsettings)
  * environment [Environment](#environment)
  * fetchTime `string`: The time that this run was fetched.
  * finalUrl `string`: The final resolved url that was audited.
  * i18n [I18n](#i18n)
  * lighthouseVersion `string`: The lighthouse version that was used to generate this LHR.
  * requestedUrl `string`: The original requested url.
  * runWarnings `array`: List of all run warnings in the LHR. Will always output to at least `[]`.
  * runtimeError [RuntimeError](#runtimeerror)
  * stackPacks `array`: The Stack Pack advice strings.
    * items [StackPack](#stackpack)
  * timing [Timing](#timing)
  * userAgent `string`: The user agent that was used to run this LHR.

### PagespeedApiLoadingExperienceV5
* PagespeedApiLoadingExperienceV5 `object`: The CrUX loading experience object that contains CrUX data breakdowns.
  * id `string`: The url, pattern or origin which the metrics are on.
  * initial_url `string`: The requested URL, which may differ from the resolved "id".
  * metrics `object`: The map of .
  * origin_fallback `boolean`: True if the result is an origin fallback from a page, false otherwise.
  * overall_category `string`: The human readable speed "category" of the id.

### PagespeedApiPagespeedResponseV5
* PagespeedApiPagespeedResponseV5 `object`: The Pagespeed API response object.
  * analysisUTCTimestamp `string`: The UTC timestamp of this analysis.
  * captchaResult `string`: The captcha verify result
  * id `string`: Canonicalized and final URL for the document, after following page redirects (if any).
  * kind `string`: Kind of result.
  * lighthouseResult [LighthouseResultV5](#lighthouseresultv5)
  * loadingExperience [PagespeedApiLoadingExperienceV5](#pagespeedapiloadingexperiencev5)
  * originLoadingExperience [PagespeedApiLoadingExperienceV5](#pagespeedapiloadingexperiencev5)
  * version [PagespeedVersion](#pagespeedversion)

### PagespeedVersion
* PagespeedVersion `object`: The Pagespeed Version object.
  * major `string`: The major version number of PageSpeed used to generate these results.
  * minor `string`: The minor version number of PageSpeed used to generate these results.

### RendererFormattedStrings
* RendererFormattedStrings `object`: Message holding the formatted strings used in the renderer.
  * auditGroupExpandTooltip `string`: The tooltip text on an expandable chevron icon.
  * crcInitialNavigation `string`: The label for the initial request in a critical request chain.
  * crcLongestDurationLabel `string`: The label for values shown in the summary of critical request chains.
  * errorLabel `string`: The label shown next to an audit or metric that has had an error.
  * errorMissingAuditInfo `string`: The error string shown next to an erroring audit.
  * labDataTitle `string`: The title of the lab data performance category.
  * lsPerformanceCategoryDescription `string`: The disclaimer shown under performance explaning that the network can vary.
  * manualAuditsGroupTitle `string`: The heading shown above a list of audits that were not computerd in the run.
  * notApplicableAuditsGroupTitle `string`: The heading shown above a list of audits that do not apply to a page.
  * opportunityResourceColumnLabel `string`: The heading for the estimated page load savings opportunity of an audit.
  * opportunitySavingsColumnLabel `string`: The heading for the estimated page load savings of opportunity audits.
  * passedAuditsGroupTitle `string`: The heading that is shown above a list of audits that are passing.
  * scorescaleLabel `string`: The label that explains the score gauges scale (0-49, 50-89, 90-100).
  * toplevelWarningsMessage `string`: The label shown preceding important warnings that may have invalidated an entire report.
  * varianceDisclaimer `string`: The disclaimer shown below a performance metric value.
  * warningHeader `string`: The label shown above a bulleted list of warnings.

### RuntimeError
* RuntimeError `object`: Message containing a runtime error config.
  * code `string`: The enumerated Lighthouse Error code.
  * message `string`: A human readable message explaining the error code.

### StackPack
* StackPack `object`: Message containing Stack Pack information.
  * descriptions `object`: The stack pack advice strings.
  * iconDataURL `string`: The stack pack icon data uri.
  * id `string`: The stack pack id.
  * title `string`: The stack pack title.

### Timing
* Timing `object`: Message containing the performance timing data for the Lighthouse run.
  * total `number`: The total duration of Lighthouse's run.

### UserPageLoadMetricV5
* UserPageLoadMetricV5 `object`: A CrUX metric object for a single metric and form factor.
  * category `string`: The category of the specific time metric.
  * distributions `array`: Metric distributions. Proportions should sum up to 1.
    * items [Bucket](#bucket)
  * formFactor `string`: Identifies the form factor of the metric being collected.
  * median `integer`: The median number of the metric, in millisecond.
  * metricId `string`: Identifies the type of the metric.
  * percentile `integer`: We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90.


