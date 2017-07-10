# @datafire/wikimedia
This API provides cacheable and straightforward access to Wikimedia content and data, in machine-readable formats. Each entry point has explicit stability markers to inform you about development status and change policy, according to [our API version policy](https://www.mediawiki.org/wiki/API_versioning).
See https://www.mediawiki.org/wiki/REST_API for background and details.
### High-volume access
  - Limit your clients to no more than 200 requests/s to this API.
  - Set a unique `User-Agent` or `Api-User-Agent` header that
    allows us to contact you quickly. Email addresses or URLs
    of contact pages work well.

By using this API, you agree to Wikimedia's  [Terms of Use](https://wikimediafoundation.org/wiki/Terms_of_Use) and [Privacy Policy](https://wikimediafoundation.org/wiki/Privacy_policy), and you irrevocably agree to release modifications or additions made through this API under the  [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)  License and the [GFDL](https://www.gnu.org/copyleft/fdl.html).


## Operation: media.math.check.type.post
Checks the supplied TeX formula for correctness and returns the
normalised formula representation as well as information about
identifiers. Available types are tex and inline-tex. The response
contains the `x-resource-location` header which can be used to retrieve
the render of the checked formula in one of the supported rendering
formats. Just append the value of the header to `/media/math/{format}/`
and perform a GET request against that URL.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The input type of the given formula; can be tex or inline-tex",
      "enum": [
        "tex",
        "inline-tex",
        "chem"
      ]
    },
    "q": {
      "type": "string",
      "description": "The formula to check"
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "q"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: media.math.formula.hash.get
Returns the previously-stored formula via `/media/math/check/{type}` for
the given hash.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hash": {
      "type": "string",
      "description": "The hash string of the previous POST data",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "hash"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: media.math.render.format.hash.get
Given a request hash, renders a TeX formula into its mathematic
representation in the given format. When a request is issued to the
`/media/math/check/{format}` POST endpoint, the response contains the
`x-resource-location` header denoting the hash ID of the POST data. Once
obtained, this endpoint has to be used to obtain the actual render.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "The output format; can be svg or mml",
      "enum": [
        "svg",
        "mml",
        "png"
      ]
    },
    "hash": {
      "type": "string",
      "description": "The hash string of the previous POST data",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "hash"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: metrics.legacy.get
This is the root of all legacy data endpoints. For the moment it only contains aggregated pagecounts.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/listing"
}
```
## Operation: metrics.legacy.pagecounts.aggregate.project.access_site.granularity.start.end.get
Given a project and a date range, returns a timeseries of pagecounts. You can filter by access site (mobile or desktop) and you can choose between monthly, daily and hourly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia."
    },
    "access-site": {
      "type": "string",
      "description": "If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.",
      "enum": [
        "all-sites",
        "desktop-site",
        "mobile-site"
      ]
    },
    "granularity": {
      "type": "string",
      "description": "The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily and monthly.",
      "enum": [
        "hourly",
        "daily",
        "monthly"
      ]
    },
    "start": {
      "type": "string",
      "description": "The timestamp of the first hour/day/month to include, in YYYYMMDDHH format."
    },
    "end": {
      "type": "string",
      "description": "The timestamp of the last hour/day/month to include, in YYYYMMDDHH format. In hourly and daily granularities this value is inclusive, in the monthly granularity this value is exclusive."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "access-site",
    "granularity",
    "start",
    "end"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pagecounts-project"
}
```
## Operation: metrics.pageviews.get
This is the root of all pageview data endpoints.  The list of paths that this returns includes ways to query by article, project, top articles, etc.  If browsing the interactive documentation, see the specifics for each endpoint below.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/listing"
}
```
## Operation: metrics.pageviews.aggregate.project.access.agent.granularity.start.end.get
Given a date range, returns a timeseries of pageview counts. You can filter by project, access method and/or agent type. You can choose between daily and hourly granularity as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'. If you are interested in all pageviews regardless of project, use all-projects."
    },
    "access": {
      "type": "string",
      "description": "If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access",
      "enum": [
        "all-access",
        "desktop",
        "mobile-app",
        "mobile-web"
      ]
    },
    "agent": {
      "type": "string",
      "description": "If you want to filter by agent type, use one of user or spider. If you are interested in pageviews regardless of agent type, use all-agents",
      "enum": [
        "all-agents",
        "user",
        "spider"
      ]
    },
    "granularity": {
      "type": "string",
      "description": "The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily, and monthly",
      "enum": [
        "hourly",
        "daily",
        "monthly"
      ]
    },
    "start": {
      "type": "string",
      "description": "The timestamp of the first hour/day/month to include, in YYYYMMDDHH format"
    },
    "end": {
      "type": "string",
      "description": "The timestamp of the last hour/day/month to include, in YYYYMMDDHH format"
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "access",
    "agent",
    "granularity",
    "start",
    "end"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pageview-project"
}
```
## Operation: metrics.pageviews.per_article.project.access.agent.article.granularity.start.end.get
Given a Mediawiki article and a date range, returns a daily timeseries of its pageview counts. You can also filter by access method and/or agent type.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'."
    },
    "access": {
      "type": "string",
      "description": "If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access",
      "enum": [
        "all-access",
        "desktop",
        "mobile-app",
        "mobile-web"
      ]
    },
    "agent": {
      "type": "string",
      "description": "If you want to filter by agent type, use one of user, bot or spider. If you are interested in pageviews regardless of agent type, use all-agents",
      "enum": [
        "all-agents",
        "user",
        "spider",
        "bot"
      ]
    },
    "article": {
      "type": "string",
      "description": "The title of any article in the specified project. Any spaces should be replaced with underscores. It also should be URI-encoded, so that non-URI-safe characters like %, / or ? are accepted. Example: Are_You_the_One%3F"
    },
    "granularity": {
      "type": "string",
      "description": "The time unit for the response data. As of today, the only supported granularity for this endpoint is daily and monthly.",
      "enum": [
        "daily",
        "monthly"
      ]
    },
    "start": {
      "type": "string",
      "description": "The date of the first day to include, in YYYYMMDD format"
    },
    "end": {
      "type": "string",
      "description": "The date of the last day to include, in YYYYMMDD format"
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "access",
    "agent",
    "article",
    "granularity",
    "start",
    "end"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pageview-article"
}
```
## Operation: metrics.pageviews.top.project.access.year.month.day.get
Lists the 1000 most viewed articles for a given project and timespan (month or day). You can filter by access method.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'."
    },
    "access": {
      "type": "string",
      "description": "If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access",
      "enum": [
        "all-access",
        "desktop",
        "mobile-app",
        "mobile-web"
      ]
    },
    "year": {
      "type": "string",
      "description": "The year of the date for which to retrieve top articles, in YYYY format."
    },
    "month": {
      "type": "string",
      "description": "The month of the date for which to retrieve top articles, in MM format. If you want to get the top articles of a whole month, the day parameter should be all-days."
    },
    "day": {
      "type": "string",
      "description": "The day of the date for which to retrieve top articles, in DD format."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "access",
    "year",
    "month",
    "day"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pageview-tops"
}
```
## Operation: metrics.unique_devices.project.access_site.granularity.start.end.get
Given a project and a date range, returns a timeseries of unique devices counts. You need to specify a project, and can filter by accessed site (mobile or desktop). You can choose between daily and hourly granularity as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'."
    },
    "access-site": {
      "type": "string",
      "description": "If you want to filter by accessed site, use one of desktop-site or mobile-site. If you are interested in unique devices regardless of accessed site, use or all-sites",
      "enum": [
        "all-sites",
        "desktop-site",
        "mobile-site"
      ]
    },
    "granularity": {
      "type": "string",
      "description": "The time unit for the response data. As of today, the supported granularities for this endpoint are daily and monthly",
      "enum": [
        "daily",
        "monthly"
      ]
    },
    "start": {
      "type": "string",
      "description": "The timestamp of the first day/month to include, in YYYYMMDD format"
    },
    "end": {
      "type": "string",
      "description": "The timestamp of the last day/month to include, in YYYYMMDD format"
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "access-site",
    "granularity",
    "start",
    "end"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/unique-devices"
}
```
