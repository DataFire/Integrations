# @datafire/botify

Client library for Botify

## Installation and Usage
```bash
npm install --save datafire @datafire/botify
```

```js
let datafire = require('datafire');
let botify = require('@datafire/botify').actions;

let account = {
  DjangoRestToken: "",
}
let context = new datafire.Context({
  accounts: {
    botify: account,
  }
})

botify.getProjectAnalyses({}, context).then(data => {
  console.log(data);
})
```

## Description
Botify Saas API

## Actions
### getProjectAnalyses
List all analyses for a project


```js
botify.getProjectAnalyses({
  "username": "",
  "project_slug": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* only_success (boolean) - Return only successfully finished analyses
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier

### getAnalysisSummary
Get an Analysis detail


```js
botify.getAnalysisSummary({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getCrawlStatistics
Return global statistics for an analysis


```js
botify.getCrawlStatistics({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getCrawlStatisticsByFrequency
Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis


```js
botify.getCrawlStatisticsByFrequency({
  "frequency": "",
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* limit (integer) - max number of elements to retrieve
* frequency (string) **required** - Aggregation frequency
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getCrawlStatisticsUrls
Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)


```js
botify.getCrawlStatisticsUrls({
  "username": "",
  "project_slug": "",
  "analysis_slug": "",
  "list_type": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier
* list_type (string) **required** - URLs list type (crawled URLs or error URLs)

### getGanalyticsOrphanURLs
Legacy    List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)


```js
botify.getGanalyticsOrphanURLs({
  "username": "",
  "project_slug": "",
  "analysis_slug": "",
  "medium": "",
  "source": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier
* medium (string) **required** - Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
* source (string) **required** - Traffic source, value: name of the search engine or social network

### getLinksPercentiles
Get inlinks percentiles


```js
botify.getLinksPercentiles({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getPageRankLost
Lost pagerank


```js
botify.getPageRankLost({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getSitemapsReport
Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)


```js
botify.getSitemapsReport({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getSitemapsSamplesOutOfConfig
Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.


```js
botify.getSitemapsSamplesOutOfConfig({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getSitemapsSamplesSitemapsOnly
Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.


```js
botify.getSitemapsSamplesSitemapsOnly({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getLinksTopDomains
Top domains


```js
botify.getLinksTopDomains({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getLinksTopSubdomains
Top subddomains


```js
botify.getLinksTopSubdomains({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getVisitsOrphanURLs
List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)


```js
botify.getVisitsOrphanURLs({
  "username": "",
  "project_slug": "",
  "analysis_slug": "",
  "medium": "",
  "source": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier
* medium (string) **required** - Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
* source (string) **required** - Traffic source, value: name of the search engine or social network

### getUrls
Executes a query and returns a paginated response


```js
botify.getUrls({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* UrlsQuery (object) - Urls query
* area (string) - Analysis context
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getUrlsAggs
Query aggregator. It accepts multiple queries


```js
botify.getUrlsAggs({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* UrlsAggsQueries (array)
* area (string) - Analysis context
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getUrlsDatamodel
Gets an Analysis datamodel


```js
botify.getUrlsDatamodel({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* area (string) - Analysis context
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getUrlsExports
A list of the CSV Exports requests and their current status


```js
botify.getUrlsExports({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### createUrlsExport
Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task


```js
botify.createUrlsExport({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* UrlsQuery (object) - Urls query
* area (string) - Analysis context
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getUrlsExportStatus
Checks the status of an CSVUrlExportJob object. Returns json object with the status.


```js
botify.getUrlsExportStatus({
  "username": "",
  "project_slug": "",
  "analysis_slug": "",
  "url_export_id": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier
* url_export_id (string) **required** - Url Export ID

### getUrlsSuggestedFilters
Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.


```js
botify.getUrlsSuggestedFilters({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Parameters
* UrlsAggsQuery (object) - UrlsAggs query
* area (string) - Analysis context
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier

### getUrlDetail
Gets the detail of an URL for an analysis


```js
botify.getUrlDetail({
  "username": "",
  "project_slug": "",
  "analysis_slug": "",
  "url": ""
}, context)
```

#### Parameters
* fields (array) - comma separated list of fields to return (c.f. URLs Datamodel)
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* analysis_slug (string) **required** - Analysis' identifier
* url (string) **required** - (Urlencoded) Searched URL

### getUserProjects
List all active projects for the user


```js
botify.getUserProjects({
  "username": ""
}, context)
```

#### Parameters
* name (string) - Project's name
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier

### getSavedFilters
List all the project's saved filters (each filter's name, ID and filter value)


```js
botify.getSavedFilters({
  "username": "",
  "project_slug": ""
}, context)
```

#### Parameters
* page (integer) - Page Number
* size (integer) - Page Size
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier

### getSavedFilter
Retrieves a specific saved filter's name, ID and filter value


```js
botify.getSavedFilter({
  "username": "",
  "project_slug": "",
  "identifier": ""
}, context)
```

#### Parameters
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier
* identifier (string) **required**

### getProjectUrlsAggs
Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project


```js
botify.getProjectUrlsAggs({
  "username": "",
  "project_slug": ""
}, context)
```

#### Parameters
* UrlsAggsQueries (array)
* area (string) - Analyses context
* last_analysis_slug (string) - Last analysis on the trend
* nb_analyses (integer) - Max number of analysis to return
* username (string) **required** - User's identifier
* project_slug (string) **required** - Project's identifier

