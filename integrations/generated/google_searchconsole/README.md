# @datafire/google_searchconsole

Client library for Google Search Console API

## Installation and Usage
```bash
npm install --save @datafire/google_searchconsole
```
```js
let google_searchconsole = require('@datafire/google_searchconsole').create({
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

The Search Console API provides access to both Search Console data (verified users only) and to public information on an URL basis (anyone)

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_searchconsole.oauthCallback({
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
google_searchconsole.oauthRefresh(null, context)
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

### searchconsole.urlTestingTools.mobileFriendlyTest.run
Runs Mobile-Friendly Test for a given URL.


```js
google_searchconsole.searchconsole.urlTestingTools.mobileFriendlyTest.run({}, context)
```

#### Input
* input `object`
  * body [RunMobileFriendlyTestRequest](#runmobilefriendlytestrequest)
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
* output [RunMobileFriendlyTestResponse](#runmobilefriendlytestresponse)

### webmasters.sites.list
 Lists the user's Search Console sites.


```js
google_searchconsole.webmasters.sites.list({}, context)
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
* output [SitesListResponse](#siteslistresponse)

### webmasters.sites.delete
 Removes a site from the set of the user's Search Console sites.


```js
google_searchconsole.webmasters.sites.delete({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.
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
*Output schema unknown*

### webmasters.sites.get
 Retrieves information about specific site.


```js
google_searchconsole.webmasters.sites.get({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.
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
* output [WmxSite](#wmxsite)

### webmasters.sites.add
 Adds a site to the set of the user's sites in Search Console.


```js
google_searchconsole.webmasters.sites.add({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URL of the site to add.
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
*Output schema unknown*

### webmasters.searchanalytics.query
Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.


```js
google_searchconsole.webmasters.searchanalytics.query({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: `http://www.example.com/`.
  * body [SearchAnalyticsQueryRequest](#searchanalyticsqueryrequest)
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
* output [SearchAnalyticsQueryResponse](#searchanalyticsqueryresponse)

### webmasters.sitemaps.list
 Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).


```js
google_searchconsole.webmasters.sitemaps.list({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: `http://www.example.com/`.
  * sitemapIndex `string`:  A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`.
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
* output [SitemapsListResponse](#sitemapslistresponse)

### webmasters.sitemaps.delete
Deletes a sitemap from this site.


```js
google_searchconsole.webmasters.sitemaps.delete({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: `http://www.example.com/`.
  * feedpath **required** `string`: The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
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
*Output schema unknown*

### webmasters.sitemaps.get
Retrieves information about a specific sitemap.


```js
google_searchconsole.webmasters.sitemaps.get({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: `http://www.example.com/`.
  * feedpath **required** `string`: The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
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
* output [WmxSitemap](#wmxsitemap)

### webmasters.sitemaps.submit
Submits a sitemap for a site.


```js
google_searchconsole.webmasters.sitemaps.submit({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: `http://www.example.com/`.
  * feedpath **required** `string`: The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
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
*Output schema unknown*



## Definitions

### ApiDataRow
* ApiDataRow `object`
  * clicks `number`
  * ctr `number`
  * impressions `number`
  * keys `array`
    * items `string`
  * position `number`

### ApiDimensionFilter
* ApiDimensionFilter `object`: A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.
  * dimension `string` (values: QUERY, PAGE, COUNTRY, DEVICE, SEARCH_APPEARANCE)
  * expression `string`
  * operator `string` (values: EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS)

### ApiDimensionFilterGroup
* ApiDimensionFilterGroup `object`: A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
  * filters `array`
    * items [ApiDimensionFilter](#apidimensionfilter)
  * groupType `string` (values: AND)

### BlockedResource
* BlockedResource `object`: Blocked resource.
  * url `string`: URL of the blocked resource.

### Image
* Image `object`: Describe image data.
  * data `string`: Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future.
  * mimeType `string`: The mime-type of the image data.

### MobileFriendlyIssue
* MobileFriendlyIssue `object`: Mobile-friendly issue.
  * rule `string` (values: MOBILE_FRIENDLY_RULE_UNSPECIFIED, USES_INCOMPATIBLE_PLUGINS, CONFIGURE_VIEWPORT, FIXED_WIDTH_VIEWPORT, SIZE_CONTENT_TO_VIEWPORT, USE_LEGIBLE_FONT_SIZES, TAP_TARGETS_TOO_CLOSE): Rule violated.

### ResourceIssue
* ResourceIssue `object`: Information about a resource with issue.
  * blockedResource [BlockedResource](#blockedresource)

### RunMobileFriendlyTestRequest
* RunMobileFriendlyTestRequest `object`: Mobile-friendly test request.
  * requestScreenshot `boolean`: Whether or not screenshot is requested. Default is false.
  * url `string`: URL for inspection.

### RunMobileFriendlyTestResponse
* RunMobileFriendlyTestResponse `object`: Mobile-friendly test response, including mobile-friendly issues and resource issues.
  * mobileFriendliness `string` (values: MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED, MOBILE_FRIENDLY, NOT_MOBILE_FRIENDLY): Test verdict, whether the page is mobile friendly or not.
  * mobileFriendlyIssues `array`: List of mobile-usability issues.
    * items [MobileFriendlyIssue](#mobilefriendlyissue)
  * resourceIssues `array`: Information about embedded resources issues.
    * items [ResourceIssue](#resourceissue)
  * screenshot [Image](#image)
  * testStatus [TestStatus](#teststatus)

### SearchAnalyticsQueryRequest
* SearchAnalyticsQueryRequest `object`
  * aggregationType `string` (values: AUTO, BY_PROPERTY, BY_PAGE): [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.
  * dataState `string` (values: DATA_STATE_UNSPECIFIED, FINAL, ALL): The data state to be fetched, can be full or all, the latter including full and partial data.
  * dimensionFilterGroups `array`: [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"' to see only data where the query string contains the substring \"buy\" (not case-sensitive). You can filter by a dimension without grouping by it.
    * items [ApiDimensionFilterGroup](#apidimensionfiltergroup)
  * dimensions `array`: [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.
    * items `string` (values: DATE, QUERY, PAGE, COUNTRY, DEVICE, SEARCH_APPEARANCE)
  * endDate `string`: [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.
  * rowLimit `integer`: [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive).
  * searchType `string` (values: WEB, IMAGE, VIDEO, NEWS): [Optional; Default is \"web\"] The search type to filter for.
  * startDate `string`:  [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.
  * startRow `integer`: [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.

### SearchAnalyticsQueryResponse
* SearchAnalyticsQueryResponse `object`: A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
  * responseAggregationType `string` (values: AUTO, BY_PROPERTY, BY_PAGE): How the results were aggregated.
  * rows `array`: A list of rows grouped by the key values in the order given in the query.
    * items [ApiDataRow](#apidatarow)

### SitemapsListResponse
* SitemapsListResponse `object`: List of sitemaps.
  * sitemap `array`: Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
    * items [WmxSitemap](#wmxsitemap)

### SitesListResponse
* SitesListResponse `object`: List of sites with access level information.
  * siteEntry `array`: Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
    * items [WmxSite](#wmxsite)

### TestStatus
* TestStatus `object`: Final state of the test, including error details if necessary.
  * details `string`: Error details if applicable.
  * status `string` (values: TEST_STATUS_UNSPECIFIED, COMPLETE, INTERNAL_ERROR, PAGE_UNREACHABLE): Status of the test.

### WmxSite
* WmxSite `object`: Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
  * permissionLevel `string` (values: SITE_PERMISSION_LEVEL_UNSPECIFIED, SITE_OWNER, SITE_FULL_USER, SITE_RESTRICTED_USER, SITE_UNVERIFIED_USER): The user's permission level for the site.
  * siteUrl `string`: The URL of the site.

### WmxSitemap
* WmxSitemap `object`: Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
  * contents `array`: The various content types in the sitemap.
    * items [WmxSitemapContent](#wmxsitemapcontent)
  * errors `string`: Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.
  * isPending `boolean`: If true, the sitemap has not been processed.
  * isSitemapsIndex `boolean`: If true, the sitemap is a collection of sitemaps.
  * lastDownloaded `string`: Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).
  * lastSubmitted `string`: Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).
  * path `string`: The url of the sitemap.
  * type `string` (values: NOT_SITEMAP, URL_LIST, SITEMAP, RSS_FEED, ATOM_FEED, PATTERN_SITEMAP, OCEANFRONT): The type of the sitemap. For example: `rssFeed`.
  * warnings `string`: Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.

### WmxSitemapContent
* WmxSitemapContent `object`: Information about the various content types in the sitemap.
  * indexed `string`: The number of URLs from the sitemap that were indexed (of the content type).
  * submitted `string`: The number of URLs in the sitemap (of the content type).
  * type `string` (values: WEB, IMAGE, VIDEO, NEWS, MOBILE, ANDROID_APP, PATTERN, IOS_APP, DATA_FEED_ELEMENT): The specific type of content in this sitemap. For example: `web`.


