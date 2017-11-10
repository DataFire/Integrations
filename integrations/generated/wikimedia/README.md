# @datafire/wikimedia

Client library for Wikimedia

## Installation and Usage
```bash
npm install --save datafire @datafire/wikimedia
```

```js
let datafire = require('datafire');
let wikimedia = require('@datafire/wikimedia').create({
  mediawiki_auth: "",
});

wikimedia.media.math.check.type.post({}).then(data => {
  console.log(data);
})
```

## Description
This API provides cacheable and straightforward access to Wikimedia content and data, in machine-readable formats.
### Global Rules
- Limit your clients to no more than 200 requests/s to this API.
  Each API endpoint's documentation may detail more specific usage limits.
- Set a unique `User-Agent` or `Api-User-Agent` header that
  allows us to contact you quickly. Email addresses or URLs
  of contact pages work well.

By using this API, you agree to Wikimedia's  [Terms of Use](https://wikimediafoundation.org/wiki/Terms_of_Use) and [Privacy Policy](https://wikimediafoundation.org/wiki/Privacy_policy). Unless otherwise specified in the endpoint documentation below, content accessed via this API is licensed under the [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)  and [GFDL](https://www.gnu.org/copyleft/fdl.html) licenses, and you irrevocably agree to release modifications or additions made through this API under these licenses.  See https://www.mediawiki.org/wiki/REST_API for background and details.
### Endpoint documentation
Please consult each endpoint's documentation for details on:
- Licensing information for the specific type of content
  and data served via the endpoint.
- Stability markers to inform you about development status and
  change policy, according to
  [our API version policy](https://www.mediawiki.org/wiki/API_versioning).
- Endpoint specific usage limits.


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

### metrics.bytes_difference.absolute.aggregate.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
name-bot, user) and page-type (all-page-types, content, non-content). You can choose
between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.bytes_difference.absolute.aggregate.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.bytes_difference.net.aggregate.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
user) and page-type (all-page-types, content or non-content). You can choose between
daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.bytes_difference.net.aggregate.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.edited_pages.aggregate.project.editor_type.page_type.activity_level.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.edited_pages.aggregate.project.editor_type.page_type.activity_level.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "activity-level": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edited-pages in content
* activity-level (string) **required** - If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
* granularity (string) **required** - The time unit for the response data. As of today, supported values are
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.edited_pages.new.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
or page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.
The new pages value is computed as follow:
  [number of created pages] - [number of deleted pages] + [number of restored pages]
for the chosen filters.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.edited_pages.new.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (new pages in content
* granularity (string) **required** - The time unit for the response data. As of today, supported values are
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.edited_pages.top_by_absolute_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 edited-pages
by absolute bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). You can
choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.edited_pages.top_by_absolute_bytes_difference.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.edited_pages.top_by_edits.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 edited-pages
by edits count. You can filter by editor-type (all-editor-types, anonymous, group-bot,
name-bot, user) or page-type (all-page-types, content or non-content). You can choose
between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.edited_pages.top_by_edits.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.edited_pages.top_by_net_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 edited-pages
by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). You can
choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.edited_pages.top_by_net_bytes_difference.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.editors.aggregate.project.editor_type.page_type.activity_level.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.editors.aggregate.project.editor_type.page_type.activity_level.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "activity-level": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits made in content
* activity-level (string) **required** - If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
* granularity (string) **required** - The time unit for the response data. As of today, supported values are
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.editors.top_by_absolute_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 editors by
absolute bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). You can
choose between daily and monthly granularity as well. The user_id returned is either the
mediawiki user_id if user is registered, or his/her IP if the user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.editors.top_by_absolute_bytes_difference.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.editors.top_by_edits.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 editors by
edits count. You can filter by editor-type (all-editor-types, anonymous, group-bot,
name-bot, user) or page-type (all-page-types, content or non-content). You can choose
between daily and monthly granularity as well. The user_id returned is either the
mediawiki user_id if user is registered, or his/her IP if the user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.editors.top_by_edits.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.editors.top_by_net_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 editors by
net bytes-difference. You can filter by editor-type (all-editor-types, anonymous, group-bot,
name-bot, user) or page-type (all-page-types, content or non-content). You can choose
between daily and monthly granularity as well. The user_id returned is either the mediawiki
user_id if user is registered, or his/her IP if the user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.editors.top_by_net_bytes_difference.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - Time unit for the response data. As of today, supported values are daily and monthly
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.edits.aggregate.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of edits counts.
You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.edits.aggregate.project.editor_type.page_type.granularity.start.end.get({
  "project": "",
  "editor-type": "",
  "page-type": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* editor-type (string) **required** - If you want to filter by editor-type, use one of anonymous, group-bot (registered
* page-type (string) **required** - If you want to filter by page-type, use one of content (edits on pages in content
* granularity (string) **required** - The time unit for the response data. As of today, supported values are
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.legacy.pagecounts.aggregate.project.access_site.granularity.start.end.get
Given a project and a date range, returns a timeseries of pagecounts.
You can filter by access site (mobile or desktop) and you can choose between monthly,
daily and hourly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



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
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* access-site (string) **required** - If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.
* granularity (string) **required** - The time unit for the response data. As of today, the supported granularities for
* start (string) **required** - The timestamp of the first hour/day/month to include, in YYYYMMDDHH format.
* end (string) **required** - The timestamp of the last hour/day/month to include, in YYYYMMDDHH format.

### metrics.pageviews.aggregate.project.access.agent.granularity.start.end.get
Given a date range, returns a timeseries of pageview counts. You can filter by project,
access method and/or agent type. You can choose between daily and hourly granularity
as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



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
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project,
* access (string) **required** - If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
* agent (string) **required** - If you want to filter by agent type, use one of user or spider. If you are interested
* granularity (string) **required** - The time unit for the response data. As of today, the supported granularities for this
* start (string) **required** - The timestamp of the first hour/day/month to include, in YYYYMMDDHH format
* end (string) **required** - The timestamp of the last hour/day/month to include, in YYYYMMDDHH format

### metrics.pageviews.per_article.project.access.agent.article.granularity.start.end.get
Given a Mediawiki article and a date range, returns a daily timeseries of its pageview
counts. You can also filter by access method and/or agent type.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



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
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project,
* access (string) **required** - If you want to filter by access method, use one of desktop, mobile-app
* agent (string) **required** - If you want to filter by agent type, use one of user, bot or spider. If you are
* article (string) **required** - 'The title of any article in the specified project. Any spaces should be replaced
* granularity (string) **required** - The time unit for the response data. As of today, the only supported granularity for
* start (string) **required** - The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format
* end (string) **required** - The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format

### metrics.pageviews.top.project.access.year.month.day.get
Lists the 1000 most viewed articles for a given project and timespan (month or day).
You can filter by access method.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



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
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project,
* access (string) **required** - If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
* year (string) **required** - The year of the date for which to retrieve top articles, in YYYY format.
* month (string) **required** - The month of the date for which to retrieve top articles, in MM format. If you want
* day (string) **required** - The day of the date for which to retrieve top articles, in DD format.

### metrics.registered_users.new.project.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its newly registered
users counts. You can choose between daily and monthly granularity. The newly registered
users value is computed with self-created users only, not auto-login created ones.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.registered_users.new.project.granularity.start.end.get({
  "project": "",
  "granularity": "",
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* project (string) **required** - The name of any Wikimedia project formatted like {language code}.{project name},
* granularity (string) **required** - The time unit for the response data. As of today, supported values are
* start (string) **required** - The date of the first day to include, in YYYYMMDD format
* end (string) **required** - The date of the last day to include, in YYYYMMDD format

### metrics.unique_devices.project.access_site.granularity.start.end.get
Given a project and a date range, returns a timeseries of unique devices counts.
You need to specify a project, and can filter by accessed site (mobile or desktop).
You can choose between daily and hourly granularity as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



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
* project (string) **required** - If you want to filter by project, use the domain of any Wikimedia project,
* access-site (string) **required** - If you want to filter by accessed site, use one of desktop-site or mobile-site.
* granularity (string) **required** - The time unit for the response data. As of today, the supported granularities
* start (string) **required** - The timestamp of the first day/month to include, in YYYYMMDD format
* end (string) **required** - The timestamp of the last day/month to include, in YYYYMMDD format

### transform.html.from.from_lang.to.to_lang.post
Fetches the machine translation for the posted content from the source
to the destination language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.html.from.from_lang.to.to_lang.post({
  "from_lang": "",
  "to_lang": "",
  "html": ""
}, context)
```

#### Parameters
* from_lang (string) **required** - The source language code
* to_lang (string) **required** - The target language code
* html (string) **required** - The HTML content to translate

### transform.html.from.from_lang.to.to_lang.provider.post
Fetches the machine translation for the posted content from the source
to the destination language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.html.from.from_lang.to.to_lang.provider.post({
  "from_lang": "",
  "to_lang": "",
  "provider": "",
  "html": ""
}, context)
```

#### Parameters
* from_lang (string) **required** - The source language code
* to_lang (string) **required** - The target language code
* provider (string) **required** - The machine translation provider id
* html (string) **required** - The HTML content to translate

### transform.list.languagepairs.get
Fetches the list of language pairs the back-end service can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.languagepairs.get(null, context)
```

#### Parameters
*This action has no parameters*

### transform.list.pair.from.to.get
Fetches the list of tools that are available for the given pair of languages.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.pair.from.to.get({
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* from (string) **required** - The source language code
* to (string) **required** - The target language code

### transform.list.tool.tool.get
Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.tool.tool.get({
  "tool": ""
}, context)
```

#### Parameters
* tool (string) **required** - The tool category to list tools and language pairs for

### transform.word.from.from_lang.to.to_lang.word.get
Fetches the dictionary meaning of a word from a language and displays
it in the target language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.word.from.from_lang.to.to_lang.word.get({
  "from_lang": "",
  "to_lang": "",
  "word": ""
}, context)
```

#### Parameters
* from_lang (string) **required** - The source language code
* to_lang (string) **required** - The target language code
* word (string) **required** - The word to lookup

### transform.word.from.from_lang.to.to_lang.word.provider.get
Fetches the dictionary meaning of a word from a language and displays
it in the target language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.word.from.from_lang.to.to_lang.word.provider.get({
  "from_lang": "",
  "to_lang": "",
  "word": "",
  "provider": ""
}, context)
```

#### Parameters
* from_lang (string) **required** - The source language code
* to_lang (string) **required** - The target language code
* word (string) **required** - The word to lookup
* provider (string) **required** - The dictionary provider id

