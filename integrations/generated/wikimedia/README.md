# @datafire/wikimedia

Client library for Wikimedia

## Installation and Usage
```bash
npm install --save datafire @datafire/wikimedia
```

```js
let datafire = require('datafire');
let wikimedia = require('@datafire/wikimedia').actions;

let account = {
  mediawiki_auth: "",
}
let context = new datafire.Context({
  accounts: {
    wikimedia: account,
  }
})

wikimedia.media.math.check.type.post({}, context).then(data => {
  console.log(data);
})
```

## Description
This API provides cacheable and straightforward access to Wikimedia content and data, in machine-readable formats. Each entry point has explicit stability markers to inform you about development status and change policy, according to [our API version policy](https://www.mediawiki.org/wiki/API_versioning).
See https://www.mediawiki.org/wiki/REST_API for background and details.
### High-volume access
  - Limit your clients to no more than 200 requests/s to this API.
  - Set a unique `User-Agent` or `Api-User-Agent` header that
    allows us to contact you quickly. Email addresses or URLs
    of contact pages work well.

By using this API, you agree to Wikimedia's  [Terms of Use](https://wikimediafoundation.org/wiki/Terms_of_Use) and [Privacy Policy](https://wikimediafoundation.org/wiki/Privacy_policy), and you irrevocably agree to release modifications or additions made through this API under the  [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)  License and the [GFDL](https://www.gnu.org/copyleft/fdl.html).


## Actions
### media.math.check.type.post
Checks the supplied TeX formula for correctness and returns the
normalised formula representation as well as information about
identifiers. Available types are tex and inline-tex. The response
contains the `x-resource-location` header which can be used to retrieve
the render of the checked formula in one of the supported rendering
formats. Just append the value of the header to `/media/math/{format}/`
and perform a GET request against that URL.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).



```js
wikimedia.media.math.check.type.post({
  "type": "",
  "q": ""
}, context)
```

#### Parameters
* type (string) **required** - The input type of the given formula; can be tex or inline-tex
* q (string) **required** - The formula to check

### media.math.formula.hash.get
Returns the previously-stored formula via `/media/math/check/{type}` for
the given hash.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).



```js
wikimedia.media.math.formula.hash.get({
  "hash": ""
}, context)
```

#### Parameters
* hash (string) **required** - The hash string of the previous POST data

### media.math.render.format.hash.get
Given a request hash, renders a TeX formula into its mathematic
representation in the given format. When a request is issued to the
`/media/math/check/{format}` POST endpoint, the response contains the
`x-resource-location` header denoting the hash ID of the POST data. Once
obtained, this endpoint has to be used to obtain the actual render.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).



```js
wikimedia.media.math.render.format.hash.get({
  "format": "",
  "hash": ""
}, context)
```

#### Parameters
* format (string) **required** - The output format; can be svg or mml
* hash (string) **required** - The hash string of the previous POST data

### metrics.legacy.get
This is the root of all legacy data endpoints. For the moment it only contains aggregated pagecounts.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s



```js
wikimedia.metrics.legacy.get(null, context)
```


### metrics.legacy.pagecounts.aggregate.project.access_site.granularity.start.end.get
Given a project and a date range, returns a timeseries of pagecounts. You can filter by access site (mobile or desktop) and you can choose between monthly, daily and hourly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s



```js
wikimedia.metrics.legacy.pagecounts.aggregate.project.access_site.granularity.start.end.get({
  "project": "",
  "access-site": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia.
* access-site (string) **required** - If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.
* granularity (string) **required** - The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily and monthly.
* start (string) **required** - The timestamp of the first hour/day/month to include, in YYYYMMDDHH format.
* end (string) **required** - The timestamp of the last hour/day/month to include, in YYYYMMDDHH format. In hourly and daily granularities this value is inclusive, in the monthly granularity this value is exclusive.

### metrics.pageviews.get
This is the root of all pageview data endpoints.  The list of paths that this returns includes ways to query by article, project, top articles, etc.  If browsing the interactive documentation, see the specifics for each endpoint below.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s



```js
wikimedia.metrics.pageviews.get(null, context)
```


### metrics.pageviews.aggregate.project.access.agent.granularity.start.end.get
Given a date range, returns a timeseries of pageview counts. You can filter by project, access method and/or agent type. You can choose between daily and hourly granularity as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s



```js
wikimedia.metrics.pageviews.aggregate.project.access.agent.granularity.start.end.get({
  "project": "",
  "access": "",
  "agent": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'. If you are interested in all pageviews regardless of project, use all-projects.
* access (string) **required** - If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access
* agent (string) **required** - If you want to filter by agent type, use one of user or spider. If you are interested in pageviews regardless of agent type, use all-agents
* granularity (string) **required** - The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily, and monthly
* start (string) **required** - The timestamp of the first hour/day/month to include, in YYYYMMDDHH format
* end (string) **required** - The timestamp of the last hour/day/month to include, in YYYYMMDDHH format

### metrics.pageviews.per_article.project.access.agent.article.granularity.start.end.get
Given a Mediawiki article and a date range, returns a daily timeseries of its pageview counts. You can also filter by access method and/or agent type.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s



```js
wikimedia.metrics.pageviews.per_article.project.access.agent.article.granularity.start.end.get({
  "project": "",
  "access": "",
  "agent": "",
  "article": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
* access (string) **required** - If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access
* agent (string) **required** - If you want to filter by agent type, use one of user, bot or spider. If you are interested in pageviews regardless of agent type, use all-agents
* article (string) **required** - The title of any article in the specified project. Any spaces should be replaced with underscores. It also should be URI-encoded, so that non-URI-safe characters like %, / or ? are accepted. Example: Are_You_the_One%3F
* granularity (string) **required** - The time unit for the response data. As of today, the only supported granularity for this endpoint is daily and monthly.
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.pageviews.top.project.access.year.month.day.get
Lists the 1000 most viewed articles for a given project and timespan (month or day). You can filter by access method.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s



```js
wikimedia.metrics.pageviews.top.project.access.year.month.day.get({
  "project": "",
  "access": "",
  "year": "",
  "month": "",
  "day": ""
}, context)
```

#### Parameters
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
* access (string) **required** - If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access
* year (string) **required** - The year of the date for which to retrieve top articles, in YYYY format.
* month (string) **required** - The month of the date for which to retrieve top articles, in MM format. If you want to get the top articles of a whole month, the day parameter should be all-days.
* day (string) **required** - The day of the date for which to retrieve top articles, in DD format.

### metrics.unique_devices.project.access_site.granularity.start.end.get
Given a project and a date range, returns a timeseries of unique devices counts. You need to specify a project, and can filter by accessed site (mobile or desktop). You can choose between daily and hourly granularity as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s



```js
wikimedia.metrics.unique_devices.project.access_site.granularity.start.end.get({
  "project": "",
  "access-site": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
* access-site (string) **required** - If you want to filter by accessed site, use one of desktop-site or mobile-site. If you are interested in unique devices regardless of accessed site, use or all-sites
* granularity (string) **required** - The time unit for the response data. As of today, the supported granularities for this endpoint are daily and monthly
* start (string) **required** - The timestamp of the first day/month to include, in YYYYMMDD format
* end (string) **required** - The timestamp of the last day/month to include, in YYYYMMDD format

