# @datafire/botify
Botify Saas API

## Operation: getProjectAnalyses
List all analyses for a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "only_success": {
      "type": "boolean",
      "description": "Return only successfully finished analyses"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/Analysis"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getAnalysisSummary
Get an Analysis detail

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AnalysisDetail"
}
```
## Operation: getCrawlStatistics
Return global statistics for an analysis

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CrawlStatistics"
}
```
## Operation: getCrawlStatisticsByFrequency
Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "max number of elements to retrieve"
    },
    "frequency": {
      "type": "string",
      "description": "Aggregation frequency",
      "enum": [
        "1mn",
        "5mn",
        "60mn"
      ]
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "frequency",
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CrawlStatisticsTime"
}
```
## Operation: getCrawlStatisticsUrls
Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    },
    "list_type": {
      "type": "string",
      "description": "URLs list type (crawled URLs or error URLs)",
      "enum": [
        "organic",
        "social"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug",
    "list_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CrawlStatisticsUrls"
  },
  "type": "array"
}
```
## Operation: getGanalyticsOrphanURLs
Legacy    List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    },
    "medium": {
      "type": "string",
      "description": "Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)",
      "enum": [
        "organic",
        "social"
      ]
    },
    "source": {
      "type": "string",
      "description": "Traffic source, value: name of the search engine or social network",
      "enum": [
        "all",
        "aol",
        "ask",
        "baidu",
        "bing",
        "facebook",
        "google",
        "google+",
        "linkedin",
        "naver",
        "pinterest",
        "reddit",
        "tumblr",
        "twitter",
        "yahoo",
        "yandex"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug",
    "medium",
    "source"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/CrawlOrphanURLs"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getLinksPercentiles
Get inlinks percentiles

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LinksPercentiles"
}
```
## Operation: getPageRankLost
Lost pagerank

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PageRankLost"
}
```
## Operation: getSitemapsReport
Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SitemapsReport"
}
```
## Operation: getSitemapsSamplesOutOfConfig
Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getSitemapsSamplesSitemapsOnly
Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getLinksTopDomains
Top domains

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/LinksTopDomains"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getLinksTopSubdomains
Top subddomains

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/LinksTopDomains"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getVisitsOrphanURLs
List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    },
    "medium": {
      "type": "string",
      "description": "Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)",
      "enum": [
        "organic",
        "social"
      ]
    },
    "source": {
      "type": "string",
      "description": "Traffic source, value: name of the search engine or social network",
      "enum": [
        "all",
        "aol",
        "ask",
        "baidu",
        "bing",
        "facebook",
        "google",
        "google+",
        "linkedin",
        "naver",
        "pinterest",
        "reddit",
        "tumblr",
        "twitter",
        "yahoo",
        "yandex"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug",
    "medium",
    "source"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/CrawlOrphanURLs"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getUrls
Executes a query and returns a paginated response

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "UrlsQuery": {
      "$ref": "#/definitions/UrlsQuery"
    },
    "area": {
      "type": "string",
      "description": "Analysis context",
      "enum": [
        "current",
        "disappeared",
        "new",
        "search_engines_orphans"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "format": "int32",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/UrlDetail"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getUrlsAggs
Query aggregator. It accepts multiple queries

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "UrlsAggsQueries": {
      "$ref": "#/definitions/UrlsAggsQueries"
    },
    "area": {
      "type": "string",
      "description": "Analysis context",
      "enum": [
        "current",
        "disappeared",
        "new",
        "search_engines_orphans"
      ]
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UrlsAggs"
  },
  "type": "array"
}
```
## Operation: getUrlsDatamodel
Gets an Analysis datamodel

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "area": {
      "type": "string",
      "description": "Analysis context",
      "enum": [
        "current",
        "disappeared",
        "new",
        "search_engines_orphans"
      ]
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Datamodel"
}
```
## Operation: getUrlsExports
A list of the CSV Exports requests and their current status

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/CsvExportStatus"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: createUrlsExport
Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "UrlsQuery": {
      "$ref": "#/definitions/UrlsQuery"
    },
    "area": {
      "type": "string",
      "description": "Analysis context",
      "enum": [
        "current",
        "disappeared",
        "new",
        "search_engines_orphans"
      ]
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CsvExportStatus"
}
```
## Operation: getUrlsExportStatus
Checks the status of an CSVUrlExportJob object. Returns json object with the status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    },
    "url_export_id": {
      "type": "string",
      "description": "Url Export ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug",
    "url_export_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CsvExportStatus"
}
```
## Operation: getUrlsSuggestedFilters
Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "UrlsAggsQuery": {
      "$ref": "#/definitions/UrlsAggsQuery"
    },
    "area": {
      "type": "string",
      "description": "Analysis context",
      "enum": [
        "current",
        "new"
      ]
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlsAggsQuery"
}
```
## Operation: getUrlDetail
Gets the detail of an URL for an analysis

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "array",
      "description": "comma separated list of fields to return (c.f. URLs Datamodel)"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "analysis_slug": {
      "type": "string",
      "description": "Analysis' identifier"
    },
    "url": {
      "type": "string",
      "description": "(Urlencoded) Searched URL"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "analysis_slug",
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlDetail"
}
```
## Operation: getUserProjects
List all active projects for the user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Project's name"
    },
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/Project"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getSavedFilters
List all the project's saved filters (each filter's name, ID and filter value)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page Number"
    },
    "size": {
      "type": "integer",
      "description": "Page Size"
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "count": {
      "type": "integer"
    },
    "next": {
      "type": "string"
    },
    "page": {
      "type": "integer"
    },
    "previous": {
      "type": "string"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/ProjectSavedFilter"
      },
      "type": "array"
    },
    "size": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: getSavedFilter
Retrieves a specific saved filter's name, ID and filter value

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    },
    "identifier": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug",
    "identifier"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectSavedFilter"
}
```
## Operation: getProjectUrlsAggs
Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "UrlsAggsQueries": {
      "$ref": "#/definitions/UrlsAggsQueries"
    },
    "area": {
      "type": "string",
      "description": "Analyses context",
      "enum": [
        "current",
        "disappeared",
        "new"
      ]
    },
    "last_analysis_slug": {
      "type": "string",
      "description": "Last analysis on the trend"
    },
    "nb_analyses": {
      "type": "integer",
      "format": "int32",
      "description": "Max number of analysis to return",
      "maximum": 20,
      "minimum": 1
    },
    "username": {
      "type": "string",
      "description": "User's identifier"
    },
    "project_slug": {
      "type": "string",
      "description": "Project's identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Default"
}
```
