# @datafire/google_webmasters

Client library for Search Console

## Installation and Usage
```bash
npm install --save datafire @datafire/google_webmasters
```

```js
let datafire = require('datafire');
let google_webmasters = require('@datafire/google_webmasters').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_webmasters.sites.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_webmasters.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### sites.list
Lists the user's Search Console sites.


```js
google_webmasters.sites.list({}, context)
```

#### Parameters
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.delete
Removes a site from the set of the user's Search Console sites.


```js
google_webmasters.sites.delete({
  "siteUrl": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.get
Retrieves information about specific site.


```js
google_webmasters.sites.get({
  "siteUrl": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.add
Adds a site to the set of the user's sites in Search Console.


```js
google_webmasters.sites.add({
  "siteUrl": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The URL of the site to add.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### searchanalytics.query
Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.


```js
google_webmasters.searchanalytics.query({
  "siteUrl": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sitemaps.list
Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).


```js
google_webmasters.sitemaps.list({
  "siteUrl": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* sitemapIndex (string) - A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sitemaps.delete
Deletes a sitemap from this site.


```js
google_webmasters.sitemaps.delete({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* feedpath (string) **required** - The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sitemaps.get
Retrieves information about a specific sitemap.


```js
google_webmasters.sitemaps.get({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* feedpath (string) **required** - The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sitemaps.submit
Submits a sitemap for a site.


```js
google_webmasters.sitemaps.submit({
  "siteUrl": "",
  "feedpath": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* feedpath (string) **required** - The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlcrawlerrorscounts.query
Retrieves a time series of the number of URL crawl errors per error category and platform.


```js
google_webmasters.urlcrawlerrorscounts.query({
  "siteUrl": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* category (string) - The crawl error category. For example: serverError. If not specified, returns results for all categories.
* latestCountsOnly (boolean) - If true, returns only the latest crawl error counts.
* platform (string) - The user agent type (platform) that made the request. For example: web. If not specified, returns results for all platforms.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlcrawlerrorssamples.list
Lists a site's sample URLs for the specified crawl error category and platform.


```js
google_webmasters.urlcrawlerrorssamples.list({
  "siteUrl": "",
  "category": "",
  "platform": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* category (string) **required** - The crawl error category. For example: authPermissions
* platform (string) **required** - The user agent type (platform) that made the request. For example: web
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlcrawlerrorssamples.markAsFixed
Marks the provided site's sample URL as fixed, and removes it from the samples list.


```js
google_webmasters.urlcrawlerrorssamples.markAsFixed({
  "siteUrl": "",
  "url": "",
  "category": "",
  "platform": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* url (string) **required** - The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
* category (string) **required** - The crawl error category. For example: authPermissions
* platform (string) **required** - The user agent type (platform) that made the request. For example: web
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlcrawlerrorssamples.get
Retrieves details about crawl errors for a site's sample URL.


```js
google_webmasters.urlcrawlerrorssamples.get({
  "siteUrl": "",
  "url": "",
  "category": "",
  "platform": ""
}, context)
```

#### Parameters
* siteUrl (string) **required** - The site's URL, including protocol. For example: http://www.example.com/
* url (string) **required** - The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
* category (string) **required** - The crawl error category. For example: authPermissions
* platform (string) **required** - The user agent type (platform) that made the request. For example: web
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

