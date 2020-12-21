# @datafire/botify

Client library for Botify

## Installation and Usage
```bash
npm install --save @datafire/botify
```
```js
let botify = require('@datafire/botify').create({
  DjangoRestToken: ""
});

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * only_success `boolean`: Return only successfully finished analyses
  * fields `string`: Which fields to return (comma-separated)
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [Analysis](#analysis)
  * size `integer`

### getAnalysisSummary
Get an Analysis detail


```js
botify.getAnalysisSummary({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * previous_crawl `string`: Previous analysis identifier
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [AnalysisDetail](#analysisdetail)

### updateAnalysis
Update an Analysis' attribute


```js
botify.updateAnalysis({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * AnalysisUpdate [AnalysisUpdate](#analysisupdate)
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [AnalysisUpdate](#analysisupdate)

### getCrawlStatistics
Return global statistics for an analysis


```js
botify.getCrawlStatistics({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [CrawlStatistics](#crawlstatistics)

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

#### Input
* input `object`
  * limit `integer`: max number of elements to retrieve
  * frequency **required** `string` (values: 1mn, 5mn, 60mn): Aggregation frequency
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [CrawlStatisticsTime](#crawlstatisticstime)

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

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier
  * list_type **required** `string` (values: crawled, errors): URLs list type (crawled URLs or error URLs)

#### Output
* output `array`
  * items [CrawlStatisticsUrls](#crawlstatisticsurls)

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

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier
  * medium **required** `string` (values: organic, social): Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
  * source **required** `string` (values: all, aol, ask, baidu, bing, facebook, google, google+, linkedin, naver, pinterest, reddit, tumblr, twitter, yahoo, yandex): Traffic source, value: name of the search engine or social network

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [CrawlOrphanURLs](#crawlorphanurls)
  * size `integer`

### getLinksPercentiles
Get inlinks percentiles


```js
botify.getLinksPercentiles({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [LinksPercentiles](#linkspercentiles)

### getPageRankLost
Lost pagerank


```js
botify.getPageRankLost({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [PageRankLost](#pageranklost)

### getScoring
Scoring summary


```js
botify.getScoring({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [ScoringSummary](#scoringsummary)

### getKeywordsStats
List clicks and impressions per day


```js
botify.getKeywordsStats({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [KeywordsStats](#keywordsstats)

### getSitemapsReport
Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)


```js
botify.getSitemapsReport({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [SitemapsReport](#sitemapsreport)

### getSitemapsSamplesOutOfConfig
Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.


```js
botify.getSitemapsSamplesOutOfConfig({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items `string`
  * size `integer`

### getSitemapsSamplesSitemapsOnly
Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.


```js
botify.getSitemapsSamplesSitemapsOnly({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items `string`
  * size `integer`

### getLinksTopDomains
Top domains


```js
botify.getLinksTopDomains({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [LinksTopDomains](#linkstopdomains)
  * size `integer`

### getLinksTopSubdomains
Top subddomains


```js
botify.getLinksTopSubdomains({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [LinksTopDomains](#linkstopdomains)
  * size `integer`

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

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier
  * medium **required** `string` (values: organic, social): Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
  * source **required** `string` (values: all, aol, ask, baidu, bing, facebook, google, google+, linkedin, naver, pinterest, reddit, tumblr, twitter, yahoo, yandex): Traffic source, value: name of the search engine or social network

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [CrawlOrphanURLs](#crawlorphanurls)
  * size `integer`

### getAnalysisSegments
Get the segments feature public metadata of an analysis.


```js
botify.getAnalysisSegments({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [AnalysisSegments](#analysissegments)
  * size `integer`

### getRobotsTxtIndexesView
Return a list of all robots.txt files found on the project's domains.


```js
botify.getRobotsTxtIndexesView({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [Default](#default)
  * size `integer`

### getRobotsTxtFileView
Return content of a robots.txt file.


```js
botify.getRobotsTxtFileView({
  "username": "",
  "project_slug": "",
  "analysis_slug": "",
  "robots_txt": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier
  * robots_txt **required** `string`: Filename

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [Default](#default)
  * size `integer`

### getUrls
Executes a query and returns a paginated response


```js
botify.getUrls({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * Query [Query](#query)
  * area `string` (values: current, disappeared, new, search_engines_orphans, gsc_keywords, gsc_keywords_by_country): Analysis context
  * page `integer`: Page Number
  * size `integer`: Page Size
  * previous_crawl `string`: Previous analysis identifier
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [UrlDetail](#urldetail)
  * size `integer`

### getUrlsAggs
Query aggregator. It accepts multiple queries and dispatches them on ES or BQ.


```js
botify.getUrlsAggs({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * AggsQueries [AggsQueries](#aggsqueries)
  * area `string` (values: current, disappeared, new, search_engines_orphans, gsc_keywords, gsc_keywords_by_country): Analysis context
  * previous_crawl `string`: Previous analysis identifier
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `array`
  * items [Aggs](#aggs)

### getUrlsDatamodel
Gets an Analysis datamodel


```js
botify.getUrlsDatamodel({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * area `string` (values: current, disappeared, new, search_engines_orphans, gsc_keywords, gsc_keywords_by_country): Analysis context
  * previous_crawl `string`: Previous analysis identifier
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [Datamodel](#datamodel)

### getUrlsDatasets
Gets Analysis Datasets


```js
botify.getUrlsDatasets({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * area `string` (values: current, disappeared, new, search_engines_orphans, gsc_keywords, gsc_keywords_by_country): Analysis context
  * previous_crawl `string`: Previous analysis identifier
  * deprecated_fields `boolean`: Include deprecated fields
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [Datasets](#datasets)

### getUrlsExports
A list of the CSV Exports requests and their current status


```js
botify.getUrlsExports({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [CsvExportStatus](#csvexportstatus)
  * size `integer`

### createUrlsExport
Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task


```js
botify.createUrlsExport({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * Query [Query](#query)
  * area `string` (values: current, disappeared, new, search_engines_orphans, gsc_keywords, gsc_keywords_by_country): Analysis context
  * previous_crawl `string`: Previous analysis identifier
  * export_size `integer`: Maximum size of the export (deprecated => size instead)
  * size `integer`: Maximum size of the export
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [CsvExportStatus](#csvexportstatus)

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

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier
  * url_export_id **required** `string`: Url Export ID

#### Output
* output [CsvExportStatus](#csvexportstatus)

### getUrlHTML
Gets the HTML of an URL for an analysis


```js
botify.getUrlHTML({
  "username": "",
  "project_slug": "",
  "analysis_slug": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier
  * url **required** `string`: (Urlencoded) Searched URL

#### Output
* output [UrlHTML](#urlhtml)

### getUrlsSuggestedFilters
Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.


```js
botify.getUrlsSuggestedFilters({
  "username": "",
  "project_slug": "",
  "analysis_slug": ""
}, context)
```

#### Input
* input `object`
  * AggsQuery [AggsQuery](#aggsquery)
  * area `string` (values: current, new): Analysis context
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier

#### Output
* output [AggsQuery](#aggsquery)

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

#### Input
* input `object`
  * fields `array`: comma separated list of fields to return (c.f. URLs Datamodel)
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * analysis_slug **required** `string`: Analysis' identifier
  * url **required** `string`: (Urlencoded) Searched URL

#### Output
* output [UrlDetail](#urldetail)

### getUserProjects
List all active projects for the user


```js
botify.getUserProjects({
  "username": ""
}, context)
```

#### Input
* input `object`
  * name `string`: Project's name
  * page `integer`: Page Number
  * size `integer`: Page Size
  * username **required** `string`: User's identifier

#### Output
* output `object`
  * count `integer`
  * next `string`
  * page `integer`
  * previous `string`
  * results `array`
    * items [Project](#project)
  * size `integer`

### postJobAutomation
Creates a new JobAutomation from data


```js
botify.postJobAutomation({
  "username": "",
  "project_slug": ""
}, context)
```

#### Input
* input `object`
  * JobAutomation [JobAutomation](#jobautomation)
  * username **required** `string`: user to which belongs the project
  * project_slug **required** `string`: identifies the project

#### Output
* output [JobAutomation](#jobautomation)

### postJobAutomationFromJob
Creates a new JobAutomation from an existing job


```js
botify.postJobAutomationFromJob({
  "username": "",
  "project_slug": "",
  "job_id": ""
}, context)
```

#### Input
* input `object`
  * JobAutomation [JobAutomation](#jobautomation)
  * username **required** `string`: user to which belongs the project
  * project_slug **required** `string`: identifies the project
  * job_id **required** `string`: the id of the existing job

#### Output
* output [JobAutomation](#jobautomation)

### getProjectCollections
List all collections for a project


```js
botify.getProjectCollections({
  "username": "",
  "project_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier

#### Output
* output [Collection](#collection)

### getCollectionDetail
Get the detail of a collection


```js
botify.getCollectionDetail({
  "username": "",
  "project_slug": "",
  "collection": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * collection **required** `string`: The collection to query

#### Output
* output [CollectionDatasets](#collectiondatasets)

### getDatasourcesDetails
List all datasources for a project


```js
botify.getDatasourcesDetails({
  "username": "",
  "project_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier

#### Output
* output [ProjectDatasource](#projectdatasource)

### getSavedFilters
List all the project's saved filters (each filter's name, ID and filter value)


```js
botify.getSavedFilters({
  "username": "",
  "project_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier

#### Output
* output [ProjectSavedFilter](#projectsavedfilter)

### getSavedFilter
Retrieves a specific saved filter's name, ID and filter value


```js
botify.getSavedFilter({
  "username": "",
  "project_slug": "",
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier
  * identifier **required** `string`

#### Output
* output [ProjectSavedFilter](#projectsavedfilter)

### getSavedExplorers
List all the project's Saved Explorers.


```js
botify.getSavedExplorers({
  "username": "",
  "project_slug": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier

#### Output
* output [SavedExplorer](#savedexplorer)

### getProjectUrlsAggs
Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project


```js
botify.getProjectUrlsAggs({
  "username": "",
  "project_slug": ""
}, context)
```

#### Input
* input `object`
  * AggsQueries [AggsQueries](#aggsqueries)
  * area `string` (values: current, disappeared, new, gsc_keywords, gsc_keywords_by_country): Analyses context
  * last_analysis_slug `string`: Last analysis on the trend
  * nb_analyses `integer`: Max number of analysis to return
  * username **required** `string`: User's identifier
  * project_slug **required** `string`: Project's identifier

#### Output
* output [Default](#default)

### getDatasourcesSummaryByProjects
Get the datasources details for all projects of a user


```js
botify.getDatasourcesSummaryByProjects({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier

#### Output
* output [ProjectDatasourceSummary](#projectdatasourcesummary)

### getAllUserProjects
List all active projects for the user


```js
botify.getAllUserProjects({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: User's identifier

#### Output
* output [Project](#project)



## Definitions

### AdvancedExportStatus
* AdvancedExportStatus `object`
  * advanced_export_type **required** `string`
  * date_created `string`
  * full_export `boolean`
  * job_id `string`
  * job_status `string`
  * job_url `string`
  * query `string`
  * results `string`
  * user `string`

### AdvancedExporter
* AdvancedExporter `object`
  * full_export `boolean`
  * group **required** `string`
  * lines **required** `integer`
  * name **required** `string`
  * type **required** `string`

### AdvancedExporters
* AdvancedExporters `object`
  * exporters **required** `array`
    * items [AdvancedExporter](#advancedexporter)

### Aggs
* Aggs `object`
  * error [ErrorAgg](#erroragg)
  * status **required** `integer`

### AggsQueries
* AggsQueries `array`
  * items [AggsQuery](#aggsquery)

### AggsQuery
* AggsQuery `object`: AggsQuery
  * aggs `array`
    * items `object`
  * filters `object`

### AnalysesUpdateLaunch
* AnalysesUpdateLaunch `object`: Launch Analyses Updates
  * analyses **required** `array`
    * items `string`
  * refresh_features **required** `array`
    * items `string`

### Analysis
* Analysis `object`
  * comparable `string`
  * computing_revision `string`
  * config `string`
  * crawl_launch_type `string`
  * date_created `string`
  * date_finished `string`
  * date_last_modified `string`: Date of last modified analysis
  * date_launched `string`
  * failures `string`
  * features `string`
  * friendly_name `string`
  * import_keywords_data `string`
  * import_keywords_data_by_country `boolean`
  * name `string`
  * owner `string`
  * pinned `boolean`
  * pins_balance `string`
  * pk `string`
  * red_button_domain `string`
  * slug `string`
  * status `string`
  * to_be_deleted_at `string`
  * url `string`
  * urls_done `string`
  * urls_in_queue `string`
  * user **required** [User](#user)

### AnalysisDetail
* AnalysisDetail `object`
  * comparable `string`
  * computing_revision `string`
  * config `string`
  * crawl_launch_type `string`
  * date_created `string`
  * date_finished `string`
  * date_last_modified `string`: Date of last modified analysis
  * date_launched `string`
  * failures `string`
  * features `string`
  * friendly_name `string`
  * import_keywords_data `string`
  * import_keywords_data_by_country `boolean`
  * name `string`
  * owner `string`
  * pinned `boolean`
  * pins_balance `string`
  * pk `string`
  * red_button_domain `string`
  * slug `string`
  * status `string`
  * to_be_deleted_at `string`
  * url `string`
  * urls_done `string`
  * urls_in_queue `string`
  * user **required** [User](#user)

### AnalysisSegments
* AnalysisSegments `object`: Analysis Segments
  * segments `string`

### AnalysisUpdate
* AnalysisUpdate `object`: Analysis Update
  * pinned `boolean`

### AnalysisUpdateLaunch
* AnalysisUpdateLaunch `object`: Launch Analysis Update
  * refresh_features **required** `array`
    * items `string`

### AnalysisUpdateSuggest
* AnalysisUpdateSuggest `object`
  * add_on_features **required** `array`
    * items [SuggestedUpdatesAddOnFeatures](#suggestedupdatesaddonfeatures)
  * features_to_update **required** `array`
    * items [SuggestedUpdatesFeaturesToUpdate](#suggestedupdatesfeaturestoupdate)

### BqlDryRun
* BqlDryRun `object`
  * error `object`
  * query **required** `string`

### CheckExternalStorageAccess
* CheckExternalStorageAccess `object`
  * access_ok `string`

### Collection
* Collection `object`
  * date `string`
  * date_end `string`
  * date_start `string`
  * id **required** `string`
  * name **required** `string`
  * timestamped **required** `boolean`

### CollectionDatasets
* CollectionDatasets `object`
  * datasets **required** `array`
    * items [Dataset](#dataset)
  * metadata [CollectionMetadata](#collectionmetadata)

### CollectionMetadata
* CollectionMetadata `object`
  * config `object`
  * date_end `string`
  * date_last_modified `string`
  * date_start `string`

### CrawlOrphanURLs
* CrawlOrphanURLs `object`
  * url **required** `string`
  * visits **required** `integer`

### CrawlStatistics
* CrawlStatistics `object`
  * crawler_ip `string`
  * depth_current **required** `integer`
  * last_upd_dt **required** `string`
  * pages_dones **required** `integer`
  * pages_dones_2xx **required** `integer`
  * pages_dones_3xx **required** `integer`
  * pages_dones_4xx **required** `integer`
  * pages_dones_5xx **required** `integer`
  * pages_dones_networkerror **required** `integer`
  * pages_dones_xxx **required** `integer`
  * pages_known **required** `integer`

### CrawlStatisticsTime
* CrawlStatisticsTime `object`
  * avg_delay **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)
  * avg_size **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)
  * frequency **required** `string`
  * http_code_2xx **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)
  * http_code_3xx **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)
  * http_code_4xx **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)
  * http_code_5xx **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)
  * http_code_xxx **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)
  * last_update_date **required** `string`
  * new_urls **required** `array`
    * items [CrawlStatisticsTimePoint](#crawlstatisticstimepoint)

### CrawlStatisticsTimePoint
* CrawlStatisticsTimePoint `object`
  * count **required** `integer`
  * datetime **required** `string`

### CrawlStatisticsUrls
* CrawlStatisticsUrls `object`
  * content_type **required** `string`
  * date **required** `string`
  * delay_first_byte **required** `integer`
  * delay_last_byte **required** `integer`
  * gzip **required** `boolean`
  * http **required** `integer`
  * length **required** `integer`
  * redirects_to `string`
  * url **required** `string`

### CsvExportStatus
* CsvExportStatus `object`
  * area `string`
  * date_created `string`
  * job_id `string`
  * job_status `string`
  * job_url `string`
  * nb_results `integer`
  * query **required** [Query](#query)
  * results `string`
  * size **required** `integer`
  * user `string`

### Datamodel
* Datamodel `object`
  * aliases `object`
  * fields **required** `array`
    * items [DatamodelField](#datamodelfield)
  * groups **required** `array`
    * items [DatamodelGroup](#datamodelgroup)
  * max_timeseries_fields `integer`

### DatamodelField
* DatamodelField `object`
  * aliases `array`
    * items `string`
  * group **required** `string`
  * id **required** `string`
  * multiple **required** `boolean`
  * name **required** `string`
  * optional **required** `boolean`
  * permissions **required** `array`
    * items `string`
  * subtype **required** `string`
  * suggestion `boolean`
  * type **required** `string`

### DatamodelGroup
* DatamodelGroup `object`
  * id **required** `string`
  * name **required** `string`

### Dataset
* Dataset `object`
  * fields **required** `array`
    * items [DatasetField](#datasetfield)
  * groups **required** `array`
    * items [DatasetGroup](#datasetgroup)
  * id **required** `string`
  * multiple `boolean`
  * name **required** `string`
  * suggested_operations `array`
    * items [SuggestedOperations](#suggestedoperations)

### DatasetField
* DatasetField `object`
  * aliases `array`
    * items `string`
  * deprecated `boolean`
  * group `string`
  * id **required** `string`
  * kind **required** `string`
  * meta `object`
  * multiple **required** `boolean`
  * name **required** `string`
  * optional **required** `boolean`
  * permissions **required** `array`
    * items `string`
  * settings `object`
  * subtype **required** `string`
  * suggestion `boolean`
  * type **required** `string`

### DatasetGroup
* DatasetGroup `object`
  * id **required** `string`
  * multiple `boolean`
  * name **required** `string`
  * parent `string`

### Datasets
* Datasets `object`
  * datasets **required** `array`
    * items [Dataset](#dataset)

### Datasource
* Datasource `object`

### Default
* Default `object`

### DefaultPayload
* DefaultPayload `object`: default payload for object for all HTTP codes that are not covered individually
  * error `object`
    * error_code `string`: Error Code
    * error_detail `object`: If available, detailed error
    * message `string`: Error Message

### ErrorAgg
* ErrorAgg `object`
  * error_code **required** `string`
  * message **required** `string`

### FieldValues
* FieldValues `object`
  * count **required** `integer`
  * results **required** `array`
    * items [FieldValuesResult](#fieldvaluesresult)

### FieldValuesResult
* FieldValuesResult `object`
  * nb_urls **required** `integer`
  * value **required** `string`

### HtmlExtract
* HtmlExtract `object`: Html Extract
  * config `object`
  * extract_type `string`
  * id `string`

### JobAutomation
* JobAutomation `object`: Job automation creation
  * description `string`
  * job_type **required** `string`
  * payload `object`

### KeywordsStat
* KeywordsStat `object`
  * data **required** `array`
    * items [KeywordsStatData](#keywordsstatdata)
  * type **required** `string`
  * url `string`

### KeywordsStatData
* KeywordsStatData `object`
  * all **required** [KeywordsStatDetail](#keywordsstatdetail)
  * date **required** `integer`
  * desktop **required** [KeywordsStatDetail](#keywordsstatdetail)
  * mobile **required** [KeywordsStatDetail](#keywordsstatdetail)
  * tablet **required** [KeywordsStatDetail](#keywordsstatdetail)

### KeywordsStatDetail
* KeywordsStatDetail `object`
  * clicks **required** `integer`
  * impressions **required** `integer`
  * sampled_clicks **required** `integer`
  * sampled_impressions **required** `integer`

### KeywordsStats
* KeywordsStats `object`
  * stats **required** `array`
    * items [KeywordsStat](#keywordsstat)

### LinksPercentiles
* LinksPercentiles `object`
  * domain **required** `string`
  * percentiles **required** `array`
    * items [LinksPercentilesItem](#linkspercentilesitem)

### LinksPercentilesItem
* LinksPercentilesItem `object`
  * avg **required** `integer`
  * id **required** `integer`
  * max **required** `integer`
  * metric_total **required** `integer`
  * min **required** `integer`
  * url_total **required** `integer`

### LinksTopDomains
* LinksTopDomains `object`
  * domain **required** `string`
  * follow_links **required** `integer`
  * follow_samples **required** `array`
    * items [LinksTopDomainsSamples](#linkstopdomainssamples)
  * nofollow_links **required** `integer`
  * nofollow_samples **required** `array`
    * items [LinksTopDomainsSamples](#linkstopdomainssamples)
  * unique_follow_links **required** `integer`
  * unique_nofollow_links **required** `integer`

### LinksTopDomainsSamples
* LinksTopDomainsSamples `object`
  * sources **required** `array`
    * items `string`
  * unique_links **required** `integer`
  * url **required** `string`

### OrganizationUser
* OrganizationUser `object`
  * is_organization `string`
  * name `string`
  * owner **required** [User](#user)
  * slug `string`

### PageRankLost
* PageRankLost `object`
  * external **required** `number`
  * non_crawled **required** `number`
  * robots_txt **required** `number`

### Project
* Project `object`
  * account_id `string`
  * current_settings **required** [ProjectSettings](#projectsettings)
  * date_created `string`
  * has_actionboard `string`
  * has_crawl `string`
  * has_keywords `string`
  * has_logs `string`
  * last_actionboard_revision `string`
  * last_crawls_revisions `string`
  * last_log_revision `string`
  * name **required** `string`
  * organization **required** [OrganizationUser](#organizationuser)
  * permissions `string`
  * pk `string`
  * public_id `integer`
  * roles `string`
  * slug **required** `string`
  * url `string`

### ProjectDatasource
* ProjectDatasource `object`
  * datasource **required** `string`
  * has_data `string`
  * last_revision_details `string`
  * last_revision_status `string`
  * webflow_url `string`

### ProjectDatasourceSummary
* ProjectDatasourceSummary `object`
  * datasource **required** `string`
  * date_last_successful_revision `string`
  * last_revision_status `string`
  * runnable `string`
  * segments `string`
  * stats `string`

### ProjectSavedFilter
* ProjectSavedFilter `object`: Project's saved UrlFilter
  * filters **required** `object`
  * identifier `string`
  * name **required** `string`

### ProjectSettings
* ProjectSettings `object`
  * allowed_domains **required** `array`
    * items `string`
  * blacklisted_domains **required** `array`
    * items `string`
  * pk `string`

### ProjectsPaths
* ProjectsPaths `object`: Projects paths
  * projects **required** `array`
    * items `string`

### Query
* Query `object`: Query
  * fields `array`
    * items `string`
  * filters `object`
  * sort `array`
    * items `string`

### QueryResponses
* QueryResponses `object`: Query Responses
  * results `array`
    * items `string`

### RegexConfig
* RegexConfig `object`: Regex config
  * aggregation **required** `string`
  * cast **required** `string`
  * date_format `string`
  * float_format `string`
  * ignore_case **required** `boolean`
  * match **required** `string`
  * name **required** `string`
  * regex **required** `string`
  * slug `string`

### RewritingRule
* RewritingRule `object`
  * ignore_case **required** `boolean`
  * regex **required** `string`
  * replace **required** `string`

### SavedExplorer
* SavedExplorer `object`: Project's saved explorer
  * created_by [User](#user)
  * created_date `string`
  * description `string`
  * modified_by [User](#user)
  * modified_date `string`
  * name **required** `string`
  * query **required** `object`
  * uuid `string`

### ScoringSummary
* ScoringSummary `object`
  * results **required** `object`

### SitemapsReport
* SitemapsReport `object`
  * count **required** `integer`
  * errors **required** `array`
    * items [SitemapsReportSitemap](#sitemapsreportsitemap)
  * sitemap_indexes **required** `array`
    * items [SitemapsReportSitemap](#sitemapsreportsitemap)
  * sitemap_only **required** [SitemapsReportOnly](#sitemapsreportonly)
  * sitemaps **required** `array`
    * items [SitemapsReportSitemap](#sitemapsreportsitemap)

### SitemapsReportOnly
* SitemapsReportOnly `object`
  * in_configuration **required** `integer`
  * out_of_configuration **required** `integer`

### SitemapsReportSitemap
* SitemapsReportSitemap `object`
  * error [SitemapsReportSitemapError](#sitemapsreportsitemaperror)
  * file_type `string`
  * invalid_urls `integer`
  * sitemap_indexes `array`
    * items `string`
  * url **required** `string`
  * valid_urls `integer`

### SitemapsReportSitemapError
* SitemapsReportSitemapError `object`
  * message **required** `string`
  * type **required** `string`

### SuggestedOperations
* SuggestedOperations `object`
  * group `string`
  * meta **required** `object`
  * name **required** `string`
  * operation **required** `object`

### SuggestedUpdatesAddOnFeatures
* SuggestedUpdatesAddOnFeatures `object`
  * name **required** `string`
  * options **required** `object`

### SuggestedUpdatesFeaturesToUpdate
* SuggestedUpdatesFeaturesToUpdate `object`
  * name **required** `string`
  * new_options **required** `object`
  * previous_options **required** `object`

### TestRegexExtractRule
* TestRegexExtractRule `object`: Test regex extract rule
  * content `string`
  * extract_type **required** `string`
  * rule **required** [RegexConfig](#regexconfig)
  * url `string`

### URLRewritingRules
* URLRewritingRules `object`
  * rules **required** `array`
    * items [RewritingRule](#rewritingrule)
  * urls **required** `array`
    * items `string`

### UrlDetail
* UrlDetail `object`

### UrlHTML
* UrlHTML `object`

### UrlKeywords
* UrlKeywords `object`

### User
* User `object`
  * email `string`
  * first_name `string`
  * full_name `string`
  * last_name `string`
  * username **required** `string`: Required. 30 characters or fewer. Letters, numbers and /-/_/. characters

### string
* string `object`


