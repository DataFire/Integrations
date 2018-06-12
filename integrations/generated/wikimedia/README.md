# @datafire/wikimedia

Client library for Wikimedia

## Installation and Usage
```bash
npm install --save @datafire/wikimedia
```
```js
let wikimedia = require('@datafire/wikimedia').create({
  mediawiki_auth: ""
});

wikimedia.media.math.check.type.post({
  "type": "",
  "q": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * type **required** `string` (values: tex, inline-tex, chem): The input type of the given formula; can be tex or inline-tex
  * q **required** `string`: The formula to check

#### Output
*Output schema unknown*

### media.math.formula.hash.get
Returns the previously-stored formula via `/media/math/check/{type}` for
the given hash.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).



```js
wikimedia.media.math.formula.hash.get({
  "hash": ""
}, context)
```

#### Input
* input `object`
  * hash **required** `string`: The hash string of the previous POST data

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * format **required** `string` (values: svg, mml, png): The output format; can be svg or mml
  * hash **required** `string`: The hash string of the previous POST data

#### Output
*Output schema unknown*

### metrics.bytes_difference.absolute.aggregate.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
name-bot, user) and page-type (all-page-types, content, non-content). You can choose
between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [absolute-bytes-difference](#absolute-bytes-difference)

### metrics.bytes_difference.net.aggregate.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
user) and page-type (all-page-types, content or non-content). You can choose between
daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [net-bytes-difference](#net-bytes-difference)

### metrics.edited_pages.aggregate.project.editor_type.page_type.activity_level.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edited-pages in content
  * activity-level **required** `string` (values: all-activity-levels, 1..4-edits, 5..24-edits, 25..99-edits, 100..-edits): If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
  * granularity **required** `string` (values: daily, monthly): The time unit for the response data. As of today, supported values are
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [edited-pages](#edited-pages)

### metrics.edited_pages.new.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
or page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.
The new pages value is computed as follow:
  [number of created pages] - [number of deleted pages] + [number of restored pages]
for the chosen filters.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (new pages in content
  * granularity **required** `string` (values: daily, monthly): The time unit for the response data. As of today, supported values are
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [new-pages](#new-pages)

### metrics.edited_pages.top_by_absolute_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 edited-pages
by absolute bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). You can
choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [top-edited-pages-by-abs-bytes-diff](#top-edited-pages-by-abs-bytes-diff)

### metrics.edited_pages.top_by_edits.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 edited-pages
by edits count. You can filter by editor-type (all-editor-types, anonymous, group-bot,
name-bot, user) or page-type (all-page-types, content or non-content). You can choose
between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [top-edited-pages-by-edits](#top-edited-pages-by-edits)

### metrics.edited_pages.top_by_net_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 edited-pages
by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). You can
choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [top-edited-pages-by-net-bytes-diff](#top-edited-pages-by-net-bytes-diff)

### metrics.editors.aggregate.project.editor_type.page_type.activity_level.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits made in content
  * activity-level **required** `string` (values: all-activity-levels, 1..4-edits, 5..24-edits, 25..99-edits, 100..-edits): If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
  * granularity **required** `string` (values: daily, monthly): The time unit for the response data. As of today, supported values are
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [editors](#editors)

### metrics.editors.top_by_absolute_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 editors by
absolute bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). You can
choose between daily and monthly granularity as well. The user_id returned is either the
mediawiki user_id if user is registered, or his/her IP if the user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [top-editors-by-abs-bytes-diff](#top-editors-by-abs-bytes-diff)

### metrics.editors.top_by_edits.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 editors by
edits count. You can filter by editor-type (all-editor-types, anonymous, group-bot,
name-bot, user) or page-type (all-page-types, content or non-content). You can choose
between daily and monthly granularity as well. The user_id returned is either the
mediawiki user_id if user is registered, or his/her IP if the user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [top-editors-by-edits](#top-editors-by-edits)

### metrics.editors.top_by_net_bytes_difference.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of the top 100 editors by
net bytes-difference. You can filter by editor-type (all-editor-types, anonymous, group-bot,
name-bot, user) or page-type (all-page-types, content or non-content). You can choose
between daily and monthly granularity as well. The user_id returned is either the mediawiki
user_id if user is registered, or his/her IP if the user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): Time unit for the response data. As of today, supported values are daily and monthly
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [top-editors-by-net-bytes-diff](#top-editors-by-net-bytes-diff)

### metrics.edits.aggregate.project.editor_type.page_type.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of edits counts.
You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * editor-type **required** `string` (values: all-editor-types, anonymous, group-bot, name-bot, user): If you want to filter by editor-type, use one of anonymous, group-bot (registered
  * page-type **required** `string` (values: all-page-types, content, non-content): If you want to filter by page-type, use one of content (edits on pages in content
  * granularity **required** `string` (values: daily, monthly): The time unit for the response data. As of today, supported values are
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [edits](#edits)

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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * access-site **required** `string` (values: all-sites, desktop-site, mobile-site): If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.
  * granularity **required** `string` (values: hourly, daily, monthly): The time unit for the response data. As of today, the supported granularities for
  * start **required** `string`: The timestamp of the first hour/day/month to include, in YYYYMMDDHH format.
  * end **required** `string`: The timestamp of the last hour/day/month to include, in YYYYMMDDHH format.

#### Output
* output [pagecounts-project](#pagecounts-project)

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

#### Input
* input `object`
  * project **required** `string`: If you want to filter by project, use the domain of any Wikimedia project,
  * access **required** `string` (values: all-access, desktop, mobile-app, mobile-web): If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
  * agent **required** `string` (values: all-agents, user, spider): If you want to filter by agent type, use one of user or spider. If you are interested
  * granularity **required** `string` (values: hourly, daily, monthly): The time unit for the response data. As of today, the supported granularities for this
  * start **required** `string`: The timestamp of the first hour/day/month to include, in YYYYMMDDHH format
  * end **required** `string`: The timestamp of the last hour/day/month to include, in YYYYMMDDHH format

#### Output
* output [pageview-project](#pageview-project)

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

#### Input
* input `object`
  * project **required** `string`: If you want to filter by project, use the domain of any Wikimedia project,
  * access **required** `string` (values: all-access, desktop, mobile-app, mobile-web): If you want to filter by access method, use one of desktop, mobile-app
  * agent **required** `string` (values: all-agents, user, spider, bot): If you want to filter by agent type, use one of user, bot or spider. If you are
  * article **required** `string`: 'The title of any article in the specified project. Any spaces should be replaced
  * granularity **required** `string` (values: daily, monthly): The time unit for the response data. As of today, the only supported granularity for
  * start **required** `string`: The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format

#### Output
* output [pageview-article](#pageview-article)

### metrics.pageviews.top_by_country.project.access.year.month.get
Lists the pageviews to this project, split by country of origin for a given month.
Because of privacy reasons, pageviews are given in a bucketed format, and countries
with less than 100 views do not get reported.
Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).



```js
wikimedia.metrics.pageviews.top_by_country.project.access.year.month.get({
  "project": "",
  "access": "",
  "year": "",
  "month": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: If you want to filter by project, use the domain of any Wikimedia project,
  * access **required** `string` (values: all-access, desktop, mobile-app, mobile-web): If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
  * year **required** `string`: The year of the date for which to retrieve top countries, in YYYY format.
  * month **required** `string`: The month of the date for which to retrieve top countries, in MM format.

#### Output
* output [by-country](#by-country)

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

#### Input
* input `object`
  * project **required** `string`: If you want to filter by project, use the domain of any Wikimedia project,
  * access **required** `string` (values: all-access, desktop, mobile-app, mobile-web): If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
  * year **required** `string`: The year of the date for which to retrieve top articles, in YYYY format.
  * month **required** `string`: The month of the date for which to retrieve top articles, in MM format. If you want
  * day **required** `string`: The day of the date for which to retrieve top articles, in DD format.

#### Output
* output [pageview-tops](#pageview-tops)

### metrics.registered_users.new.project.granularity.start.end.get
Given a Mediawiki project and a date range, returns a timeseries of its newly registered
users counts. You can choose between daily and monthly granularity. The newly registered
users value is computed with self-created users only, not auto-login created ones.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
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

#### Input
* input `object`
  * project **required** `string`: The name of any Wikimedia project formatted like {language code}.{project name},
  * granularity **required** `string` (values: daily, monthly): The time unit for the response data. As of today, supported values are
  * start **required** `string`: The date of the first day to include, in YYYYMMDD format
  * end **required** `string`: The date of the last day to include, in YYYYMMDD format

#### Output
* output [new-registered-users](#new-registered-users)

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

#### Input
* input `object`
  * project **required** `string`: If you want to filter by project, use the domain of any Wikimedia project,
  * access-site **required** `string` (values: all-sites, desktop-site, mobile-site): If you want to filter by accessed site, use one of desktop-site or mobile-site.
  * granularity **required** `string` (values: daily, monthly): The time unit for the response data. As of today, the supported granularities
  * start **required** `string`: The timestamp of the first day/month to include, in YYYYMMDD format
  * end **required** `string`: The timestamp of the last day/month to include, in YYYYMMDD format

#### Output
* output [unique-devices](#unique-devices)

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

#### Input
* input `object`
  * from_lang **required** `string`: The source language code
  * to_lang **required** `string`: The target language code
  * html **required** `string`: The HTML content to translate

#### Output
* output [cx_mt](#cx_mt)

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

#### Input
* input `object`
  * from_lang **required** `string`: The source language code
  * to_lang **required** `string`: The target language code
  * provider **required** `string` (values: Apertium, Yandex, Youdao): The machine translation provider id
  * html **required** `string`: The HTML content to translate

#### Output
* output [cx_mt](#cx_mt)

### transform.list.languagepairs.get
Fetches the list of language pairs the back-end service can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.languagepairs.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [cx_languagepairs](#cx_languagepairs)

### transform.list.pair.from.to.get
Fetches the list of tools that are available for the given pair of languages.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.pair.from.to.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: The source language code
  * to **required** `string`: The target language code

#### Output
* output [cx_list_tools](#cx_list_tools)

### transform.list.tool.tool.get
Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.tool.tool.get({
  "tool": ""
}, context)
```

#### Input
* input `object`
  * tool **required** `string` (values: mt, dictionary): The tool category to list tools and language pairs for

#### Output
* output [cx_list_pairs_for_tool](#cx_list_pairs_for_tool)

### transform.list.tool.tool.from.get
Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.tool.tool.from.get({
  "tool": "",
  "from": ""
}, context)
```

#### Input
* input `object`
  * tool **required** `string` (values: mt, dictionary): The tool category to list tools and language pairs for
  * from **required** `string`: The source language code

#### Output
* output [cx_list_pairs_for_tool](#cx_list_pairs_for_tool)

### transform.list.tool.tool.from.to.get
Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)



```js
wikimedia.transform.list.tool.tool.from.to.get({
  "tool": "",
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * tool **required** `string` (values: mt, dictionary): The tool category to list tools and language pairs for
  * from **required** `string`: The source language code
  * to **required** `string`: The target language code

#### Output
* output [cx_list_pairs_for_tool](#cx_list_pairs_for_tool)

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

#### Input
* input `object`
  * from_lang **required** `string`: The source language code
  * to_lang **required** `string`: The target language code
  * word **required** `string`: The word to lookup

#### Output
* output [cx_dict](#cx_dict)

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

#### Input
* input `object`
  * from_lang **required** `string`: The source language code
  * to_lang **required** `string`: The target language code
  * word **required** `string`: The word to lookup
  * provider **required** `string` (values: JsonDict, Dictd): The dictionary provider id

#### Output
* output [cx_dict](#cx_dict)



## Definitions

### absolute-bytes-difference
* absolute-bytes-difference `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * abs_bytes_diff `integer`
          * timestamp `string`

### by-country
* by-country `object`
  * items `array`
    * items `object`
      * access `string`
      * countries `array`
        * items `object`
          * country `string`
          * rank `integer`
          * views `integer`
      * month `string`
      * project `string`
      * year `string`

### cx_dict
* cx_dict `object`
  * source `string`: the original word to look up
  * translations `array`: the translations found
    * items `object`
      * info `string`: extra information about the phrase
      * phrase `string`: the translated phrase
      * sources `string`: the source dictionary used for the translation

### cx_languagepairs
* cx_languagepairs `object`
  * source `array`: the list of available source languages
    * items `string`: one source language
  * target `array`: the list of available destination languages
    * items `string`: one destination language

### cx_list_pairs_for_tool
* cx_list_pairs_for_tool `object`

### cx_list_tools
* cx_list_tools `object`
  * tools `array`: the list of tools available for the given language pair
    * items `string`: the tool available

### cx_mt
* cx_mt `object`
  * contents `string`: the translated content

### edited-pages
* edited-pages `object`
  * items `array`
    * items `object`
      * activity-level `string`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * edited_pages `integer`
          * timestamp `string`

### editors
* editors `object`
  * items `array`
    * items `object`
      * activity-level `string`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * editors `integer`
          * timestamp `string`

### edits
* edits `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * edits `integer`
          * timestamp `string`

### listing
* listing `object`: The result format for listings
  * items **required** `array`
    * items `string`

### net-bytes-difference
* net-bytes-difference `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * net_bytes_diff `integer`
          * timestamp `string`

### new-pages
* new-pages `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * new_pages `integer`
          * timestamp `string`

### new-registered-users
* new-registered-users `object`
  * items `array`
    * items `object`
      * granularity `string`
      * project `string`
      * results `array`
        * items `object`
          * new_registered_users `integer`
          * timestamp `string`

### originalimage
* originalimage `object`
  * height **required** `integer`: Original image height
  * source **required** `string`: Original image URI
  * width **required** `integer`: Original image width

### pagecounts-project
* pagecounts-project `object`
  * items `array`
    * items `object`
      * access-site `string`
      * count `integer`
      * granularity `string`
      * project `string`
      * timestamp `string`

### pageview-article
* pageview-article `object`
  * items `array`
    * items `object`
      * access `string`
      * agent `string`
      * article `string`
      * granularity `string`
      * project `string`
      * timestamp `string`
      * views `integer`

### pageview-project
* pageview-project `object`
  * items `array`
    * items `object`
      * access `string`
      * agent `string`
      * granularity `string`
      * project `string`
      * timestamp `string`
      * views `integer`

### pageview-tops
* pageview-tops `object`
  * items `array`
    * items `object`
      * access `string`
      * articles `array`
        * items `object`
          * article `string`
          * rank `integer`
          * views `integer`
      * day `string`
      * month `string`
      * project `string`
      * year `string`

### problem
* problem `object`
  * detail `string`
  * instance `string`
  * title `string`
  * type **required** `string`

### summary
* summary `object`
  * coordinates `object`: The coordinates of the item
    * lat **required** `number`: The latitude
    * lon **required** `number`: The longitude
  * description `string`: Wikidata description for the page
  * dir **required** `string`: The page language direction code
  * displaytitle `string`: The page title how it should be shown to the user
  * extract **required** `string`: First several sentences of an article in plain text
  * extract_html `string`: First several sentences of an article in simple HTML format
  * lang **required** `string`: The page language code
  * originalimage [originalimage](#originalimage)
  * pageid `integer`: The page ID
  * thumbnail [thumbnail](#thumbnail)
  * timestamp `string`: The time when the page was last editted in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
  * title **required** `string`: The page title

### thumbnail
* thumbnail `object`
  * height **required** `integer`: Thumnail height
  * source **required** `string`: Thumbnail image URI
  * width **required** `integer`: Thumbnail width

### top-edited-pages-by-abs-bytes-diff
* top-edited-pages-by-abs-bytes-diff `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * timestamp `string`
          * top `array`
            * items `object`
              * abs_bytes_diff `integer`
              * page_id `string`

### top-edited-pages-by-edits
* top-edited-pages-by-edits `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * timestamp `string`
          * top `array`
            * items `object`
              * edits `integer`
              * page_id `string`

### top-edited-pages-by-net-bytes-diff
* top-edited-pages-by-net-bytes-diff `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * timestamp `string`
          * top `array`
            * items `object`
              * net_bytes_diff `integer`
              * page_id `string`

### top-editors-by-abs-bytes-diff
* top-editors-by-abs-bytes-diff `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * timestamp `string`
          * top `array`
            * items `object`
              * abs_bytes_diff `integer`
              * user_id `string`

### top-editors-by-edits
* top-editors-by-edits `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * timestamp `string`
          * top `array`
            * items `object`
              * edits `integer`
              * user_id `string`

### top-editors-by-net-bytes-diff
* top-editors-by-net-bytes-diff `object`
  * items `array`
    * items `object`
      * editor-type `string`
      * granularity `string`
      * page-type `string`
      * project `string`
      * results `array`
        * items `object`
          * timestamp `string`
          * top `array`
            * items `object`
              * net_bytes_diff `integer`
              * user_id `string`

### unique-devices
* unique-devices `object`
  * items `array`
    * items `object`
      * access-site `string`
      * devices `integer`
      * granularity `string`
      * project `string`
      * timestamp `string`


