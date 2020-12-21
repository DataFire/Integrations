# @datafire/google_chromeuxreport

Client library for Chrome UX Report API

## Installation and Usage
```bash
npm install --save @datafire/google_chromeuxreport
```
```js
let google_chromeuxreport = require('@datafire/google_chromeuxreport').create();

.then(data => {
  console.log(data);
});
```

## Description

The Chrome UX Report API lets you view real user experience data for millions of websites. 

## Actions

### chromeuxreport.records.queryRecord
Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.


```js
google_chromeuxreport.chromeuxreport.records.queryRecord({}, context)
```

#### Input
* input `object`
  * body [QueryRequest](#queryrequest)
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
* output [QueryResponse](#queryresponse)



## Definitions

### Bin
* Bin `object`: A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.
  * density `number`: The proportion of users that experienced this bin's value for the given metric.

### Key
* Key `object`: Key defines all the dimensions that identify this record as unique.
  * effectiveConnectionType `string`: The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned.
  * formFactor `string` (values: ALL_FORM_FACTORS, PHONE, DESKTOP, TABLET): The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.
  * origin `string`: Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.
  * url `string`: Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated.

### Metric
* Metric `object`: A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.
  * histogram `array`: The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1.
    * items [Bin](#bin)
  * percentiles [Percentiles](#percentiles)

### Percentiles
* Percentiles `object`: Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.

### QueryRequest
* QueryRequest `object`: Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
  * effectiveConnectionType `string`: The effective connection type is a query dimension that specifies the effective network class that the record's data should belong to. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record with aggregated data over all effective connection types will be returned.
  * formFactor `string` (values: ALL_FORM_FACTORS, PHONE, DESKTOP, TABLET): The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.
  * metrics `array`: The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift"]
    * items `string`
  * origin `string`: The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"
  * url `string`: The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"

### QueryResponse
* QueryResponse `object`: Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
  * record [Record](#record)
  * urlNormalizationDetails [UrlNormalization](#urlnormalization)

### Record
* Record `object`: Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
  * key [Key](#key)
  * metrics `object`: Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift"]

### UrlNormalization
* UrlNormalization `object`: Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
  * normalizedUrl `string`: The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up.
  * originalUrl `string`: The original requested URL prior to any normalization actions.


