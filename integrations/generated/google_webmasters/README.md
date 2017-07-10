# @datafire/google_webmasters
View Google Search Console data for your verified sites.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: sites.list
Lists the user's Search Console sites.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SitesListResponse"
}
```
## Operation: sites.delete
Removes a site from the set of the user's Search Console sites.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sites.get
Retrieves information about specific site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WmxSite"
}
```
## Operation: sites.add
Adds a site to the set of the user's sites in Search Console.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The URL of the site to add."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: searchanalytics.query
Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "body": {
      "$ref": "#/definitions/SearchAnalyticsQueryRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchAnalyticsQueryResponse"
}
```
## Operation: sitemaps.list
Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "sitemapIndex": {
      "type": "string",
      "description": "A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SitemapsListResponse"
}
```
## Operation: sitemaps.delete
Deletes a sitemap from this site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "feedpath": {
      "type": "string",
      "description": "The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl",
    "feedpath"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sitemaps.get
Retrieves information about a specific sitemap.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "feedpath": {
      "type": "string",
      "description": "The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl",
    "feedpath"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WmxSitemap"
}
```
## Operation: sitemaps.submit
Submits a sitemap for a site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "feedpath": {
      "type": "string",
      "description": "The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl",
    "feedpath"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: urlcrawlerrorscounts.query
Retrieves a time series of the number of URL crawl errors per error category and platform.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "category": {
      "type": "string",
      "description": "The crawl error category. For example: serverError. If not specified, returns results for all categories.",
      "enum": [
        "authPermissions",
        "flashContent",
        "manyToOneRedirect",
        "notFollowed",
        "notFound",
        "other",
        "roboted",
        "serverError",
        "soft404"
      ]
    },
    "latestCountsOnly": {
      "type": "boolean",
      "description": "If true, returns only the latest crawl error counts."
    },
    "platform": {
      "type": "string",
      "description": "The user agent type (platform) that made the request. For example: web. If not specified, returns results for all platforms.",
      "enum": [
        "mobile",
        "smartphoneOnly",
        "web"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlCrawlErrorsCountsQueryResponse"
}
```
## Operation: urlcrawlerrorssamples.list
Lists a site's sample URLs for the specified crawl error category and platform.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "category": {
      "type": "string",
      "description": "The crawl error category. For example: authPermissions",
      "enum": [
        "authPermissions",
        "flashContent",
        "manyToOneRedirect",
        "notFollowed",
        "notFound",
        "other",
        "roboted",
        "serverError",
        "soft404"
      ]
    },
    "platform": {
      "type": "string",
      "description": "The user agent type (platform) that made the request. For example: web",
      "enum": [
        "mobile",
        "smartphoneOnly",
        "web"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl",
    "category",
    "platform"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlCrawlErrorsSamplesListResponse"
}
```
## Operation: urlcrawlerrorssamples.markAsFixed
Marks the provided site's sample URL as fixed, and removes it from the samples list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "url": {
      "type": "string",
      "description": "The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename"
    },
    "category": {
      "type": "string",
      "description": "The crawl error category. For example: authPermissions",
      "enum": [
        "authPermissions",
        "flashContent",
        "manyToOneRedirect",
        "notFollowed",
        "notFound",
        "other",
        "roboted",
        "serverError",
        "soft404"
      ]
    },
    "platform": {
      "type": "string",
      "description": "The user agent type (platform) that made the request. For example: web",
      "enum": [
        "mobile",
        "smartphoneOnly",
        "web"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl",
    "url",
    "category",
    "platform"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: urlcrawlerrorssamples.get
Retrieves details about crawl errors for a site's sample URL.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site's URL, including protocol. For example: http://www.example.com/"
    },
    "url": {
      "type": "string",
      "description": "The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename"
    },
    "category": {
      "type": "string",
      "description": "The crawl error category. For example: authPermissions",
      "enum": [
        "authPermissions",
        "flashContent",
        "manyToOneRedirect",
        "notFollowed",
        "notFound",
        "other",
        "roboted",
        "serverError",
        "soft404"
      ]
    },
    "platform": {
      "type": "string",
      "description": "The user agent type (platform) that made the request. For example: web",
      "enum": [
        "mobile",
        "smartphoneOnly",
        "web"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "siteUrl",
    "url",
    "category",
    "platform"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlCrawlErrorsSample"
}
```
