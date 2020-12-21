# @datafire/google_webmasters

Client library for Search Console API

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

.then(data => {
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

### webmasters.sites.list
Lists the user's Search Console sites.


```js
google_webmasters.webmasters.sites.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SitesListResponse](#siteslistresponse)

### webmasters.sites.delete
Removes a site from the set of the user's Search Console sites.


```js
google_webmasters.webmasters.sites.delete({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### webmasters.sites.get
Retrieves information about specific site.


```js
google_webmasters.webmasters.sites.get({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [WmxSite](#wmxsite)

### webmasters.sites.add
Adds a site to the set of the user's sites in Search Console.


```js
google_webmasters.webmasters.sites.add({
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
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### webmasters.searchanalytics.query
Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.


```js
google_webmasters.webmasters.searchanalytics.query({
  "siteUrl": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * body [SearchAnalyticsQueryRequest](#searchanalyticsqueryrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SearchAnalyticsQueryResponse](#searchanalyticsqueryresponse)

### webmasters.sitemaps.list
Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).


```js
google_webmasters.webmasters.sitemaps.list({
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
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SitemapsListResponse](#sitemapslistresponse)

### webmasters.sitemaps.delete
Deletes a sitemap from this site.


```js
google_webmasters.webmasters.sitemaps.delete({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * feedpath **required** `string`: The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### webmasters.sitemaps.get
Retrieves information about a specific sitemap.


```js
google_webmasters.webmasters.sitemaps.get({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * feedpath **required** `string`: The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [WmxSitemap](#wmxsitemap)

### webmasters.sitemaps.submit
Submits a sitemap for a site.


```js
google_webmasters.webmasters.sitemaps.submit({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Input
* input `object`
  * siteUrl **required** `string`: The site's URL, including protocol. For example: http://www.example.com/
  * feedpath **required** `string`: The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

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


