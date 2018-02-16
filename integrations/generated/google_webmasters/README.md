# @datafire/google_webmasters

Client library for Search Console

## Installation and Usage
```bash
npm install --save @datafire/google_webmasters
```
```js
let google_webmasters = require('@datafire/google_webmasters').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_webmasters.sites.list({}).then(data => {
  console.log(data);
});
```

## Description

View Google Search Console data for your verified sites.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_webmasters.oauthCallback({
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
google_webmasters.oauthRefresh(null, context)
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

### sites.list
Lists the user's Search Console sites.


```js
google_webmasters.sites.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SitesListResponse](#siteslistresponse)

### sites.delete
Removes a site from the set of the user's Search Console sites.


```js
google_webmasters.sites.delete({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### sites.get
Retrieves information about specific site.


```js
google_webmasters.sites.get({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WmxSite](#wmxsite)

### sites.add
Adds a site to the set of the user's sites in Search Console.


```js
google_webmasters.sites.add({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URL of the site to add.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### searchanalytics.query
Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.


```js
google_webmasters.searchanalytics.query({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * body [SearchAnalyticsQueryRequest](#searchanalyticsqueryrequest)
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SearchAnalyticsQueryResponse](#searchanalyticsqueryresponse)

### sitemaps.list
Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).


```js
google_webmasters.sitemaps.list({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * sitemapIndex `string`: A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SitemapsListResponse](#sitemapslistresponse)

### sitemaps.delete
Deletes a sitemap from this site.


```js
google_webmasters.sitemaps.delete({
  "feedpath": "",
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * feedpath **required** `string`: The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### sitemaps.get
Retrieves information about a specific sitemap.


```js
google_webmasters.sitemaps.get({
  "feedpath": "",
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * feedpath **required** `string`: The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WmxSitemap](#wmxsitemap)

### sitemaps.submit
Submits a sitemap for a site.


```js
google_webmasters.sitemaps.submit({
  "feedpath": "",
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * feedpath **required** `string`: The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### urlcrawlerrorscounts.query
Retrieves a time series of the number of URL crawl errors per error category and platform.


```js
google_webmasters.urlcrawlerrorscounts.query({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * category `string` (values: authPermissions, flashContent, manyToOneRedirect, notFollowed, notFound, other, roboted, serverError, soft404): The crawl error category. For example: serverError. If not specified, returns results for all categories.
  * latestCountsOnly `boolean`: If true, returns only the latest crawl error counts.
  * platform `string` (values: mobile, smartphoneOnly, web): The user agent type (platform) that made the request. For example: web. If not specified, returns results for all platforms.
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UrlCrawlErrorsCountsQueryResponse](#urlcrawlerrorscountsqueryresponse)

### urlcrawlerrorssamples.list
Lists a site's sample URLs for the specified crawl error category and platform.


```js
google_webmasters.urlcrawlerrorssamples.list({
  "category": "",
  "platform": "",
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string` (values: authPermissions, flashContent, manyToOneRedirect, notFollowed, notFound, other, roboted, serverError, soft404): The crawl error category. For example: authPermissions
  * platform **required** `string` (values: mobile, smartphoneOnly, web): The user agent type (platform) that made the request. For example: web
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UrlCrawlErrorsSamplesListResponse](#urlcrawlerrorssampleslistresponse)

### urlcrawlerrorssamples.markAsFixed
Marks the provided site's sample URL as fixed, and removes it from the samples list.


```js
google_webmasters.urlcrawlerrorssamples.markAsFixed({
  "category": "",
  "platform": "",
  "siteUrl": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string` (values: authPermissions, flashContent, manyToOneRedirect, notFollowed, notFound, other, roboted, serverError, soft404): The crawl error category. For example: authPermissions
  * platform **required** `string` (values: mobile, smartphoneOnly, web): The user agent type (platform) that made the request. For example: web
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * url **required** `string`: The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### urlcrawlerrorssamples.get
Retrieves details about crawl errors for a site's sample URL.


```js
google_webmasters.urlcrawlerrorssamples.get({
  "category": "",
  "platform": "",
  "siteUrl": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string` (values: authPermissions, flashContent, manyToOneRedirect, notFollowed, notFound, other, roboted, serverError, soft404): The crawl error category. For example: authPermissions
  * platform **required** `string` (values: mobile, smartphoneOnly, web): The user agent type (platform) that made the request. For example: web
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * url **required** `string`: The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UrlCrawlErrorsSample](#urlcrawlerrorssample)



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
* ApiDimensionFilter `object`
  * dimension `string`
  * expression `string`
  * operator `string`

### ApiDimensionFilterGroup
* ApiDimensionFilterGroup `object`
  * filters `array`
    * items [ApiDimensionFilter](#apidimensionfilter)
  * groupType `string`

### SearchAnalyticsQueryRequest
* SearchAnalyticsQueryRequest `object`
  * aggregationType `string`: [Optional; Default is "auto"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.
  * dimensionFilterGroups `array`: [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains "buy"' to see only data where the query string contains the substring "buy" (not case-sensitive). You can filter by a dimension without grouping by it.
    * items [ApiDimensionFilterGroup](#apidimensionfiltergroup)
  * dimensions `array`: [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.
    * items `string`
  * endDate `string`: [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.
  * rowLimit `integer`: [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 5,000 (inclusive).
  * searchType `string`: [Optional; Default is "web"] The search type to filter for.
  * startDate `string`: [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.
  * startRow `integer`: [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.

### SearchAnalyticsQueryResponse
* SearchAnalyticsQueryResponse `object`: A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
  * responseAggregationType `string`: How the results were aggregated.
  * rows `array`: A list of rows grouped by the key values in the order given in the query.
    * items [ApiDataRow](#apidatarow)

### SitemapsListResponse
* SitemapsListResponse `object`: List of sitemaps.
  * sitemap `array`: Contains detailed information about a specific URL submitted as a sitemap.
    * items [WmxSitemap](#wmxsitemap)

### SitesListResponse
* SitesListResponse `object`: List of sites with access level information.
  * siteEntry `array`: Contains permission level information about a Search Console site. For more information, see Permissions in Search Console.
    * items [WmxSite](#wmxsite)

### UrlCrawlErrorCount
* UrlCrawlErrorCount `object`: An entry in a URL crawl errors time series.
  * count `string`: The error count at the given timestamp.
  * timestamp `string`: The date and time when the crawl attempt took place, in RFC 3339 format.

### UrlCrawlErrorCountsPerType
* UrlCrawlErrorCountsPerType `object`: Number of errors per day for a specific error type (defined by platform and category).
  * category `string`: The crawl error type.
  * entries `array`: The error count entries time series.
    * items [UrlCrawlErrorCount](#urlcrawlerrorcount)
  * platform `string`: The general type of Googlebot that made the request (see list of Googlebot user-agents for the user-agents used).

### UrlCrawlErrorsCountsQueryResponse
* UrlCrawlErrorsCountsQueryResponse `object`: A time series of the number of URL crawl errors per error category and platform.
  * countPerTypes `array`: The time series of the number of URL crawl errors per error category and platform.
    * items [UrlCrawlErrorCountsPerType](#urlcrawlerrorcountspertype)

### UrlCrawlErrorsSample
* UrlCrawlErrorsSample `object`: Contains information about specific crawl errors.
  * first_detected `string`: The time the error was first detected, in RFC 3339 format.
  * last_crawled `string`: The time when the URL was last crawled, in RFC 3339 format.
  * pageUrl `string`: The URL of an error, relative to the site.
  * responseCode `integer`: The HTTP response code, if any.
  * urlDetails [UrlSampleDetails](#urlsampledetails)

### UrlCrawlErrorsSamplesListResponse
* UrlCrawlErrorsSamplesListResponse `object`: List of crawl error samples.
  * urlCrawlErrorSample `array`: Information about the sample URL and its crawl error.
    * items [UrlCrawlErrorsSample](#urlcrawlerrorssample)

### UrlSampleDetails
* UrlSampleDetails `object`: Additional details about the URL, set only when calling get().
  * containingSitemaps `array`: List of sitemaps pointing at this URL.
    * items `string`
  * linkedFromUrls `array`: A sample set of URLs linking to this URL.
    * items `string`

### WmxSite
* WmxSite `object`: Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.
  * permissionLevel `string`: The user's permission level for the site.
  * siteUrl `string`: The URL of the site.

### WmxSitemap
* WmxSitemap `object`: Contains detailed information about a specific URL submitted as a sitemap.
  * contents `array`: The various content types in the sitemap.
    * items [WmxSitemapContent](#wmxsitemapcontent)
  * errors `string`: Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.
  * isPending `boolean`: If true, the sitemap has not been processed.
  * isSitemapsIndex `boolean`: If true, the sitemap is a collection of sitemaps.
  * lastDownloaded `string`: Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).
  * lastSubmitted `string`: Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).
  * path `string`: The url of the sitemap.
  * type `string`: The type of the sitemap. For example: rssFeed.
  * warnings `string`: Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.

### WmxSitemapContent
* WmxSitemapContent `object`: Information about the various content types in the sitemap.
  * indexed `string`: The number of URLs from the sitemap that were indexed (of the content type).
  * submitted `string`: The number of URLs in the sitemap (of the content type).
  * type `string`: The specific type of content in this sitemap. For example: web.


