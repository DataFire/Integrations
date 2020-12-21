# @datafire/clickmeter

Client library for ClickMeter

## Installation and Usage
```bash
npm install --save @datafire/clickmeter
```
```js
let clickmeter = require('@datafire/clickmeter').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Api dashboard for ClickMeter API

## Actions

### account.get
Retrieve current account data


```js
clickmeter.account.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Api.Core.Dto.Accounting.User](#api.core.dto.accounting.user)

### account.post
Update current account data


```js
clickmeter.account.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Accounting.User](#api.core.dto.accounting.user)

#### Output
* output [Api.Core.Dto.Accounting.User](#api.core.dto.accounting.user)

### account.domainwhitelist.get
Retrieve list of a domains allowed to redirect in DDU mode


```js
clickmeter.account.domainwhitelist.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.DomainWhitelistEntry]](#api.core.responses.entitiesresponse[api.core.dto.accounting.domainwhitelistentry])

### account.domainwhitelist.post
Create an domain entry


```js
clickmeter.account.domainwhitelist.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Accounting.DomainWhitelistEntry](#api.core.dto.accounting.domainwhitelistentry)

#### Output
* output [Api.Core.Dto.Accounting.DomainWhitelistEntry](#api.core.dto.accounting.domainwhitelistentry)

### account.domainwhitelist.whitelistId.delete
Delete an domain entry


```js
clickmeter.account.domainwhitelist.whitelistId.delete({
  "whitelistId": ""
}, context)
```

#### Input
* input `object`
  * whitelistId **required** `string`: The id of the domain to delete

#### Output
* output [Api.Core.Dto.Accounting.DomainWhitelistEntry](#api.core.dto.accounting.domainwhitelistentry)

### account.guests.get
Retrieve list of a guest


```js
clickmeter.account.guests.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * textSearch `string`: Filter fields by this pattern

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### account.guests.post
Create a guest


```js
clickmeter.account.guests.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Accounting.Guest](#api.core.dto.accounting.guest)

#### Output
* output [Api.Core.Dto.Accounting.Guest](#api.core.dto.accounting.guest)

### account.guests.count.get
Retrieve count of guests


```js
clickmeter.account.guests.count.get({}, context)
```

#### Input
* input `object`
  * textSearch `string`: Filter fields by this pattern

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### account.guests.guestId.delete
Delete a guest


```js
clickmeter.account.guests.guestId.delete({
  "guestId": 0
}, context)
```

#### Input
* input `object`
  * guestId **required** `integer`: Id of the guest

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### account.guests.guestId.get
Retrieve a guest


```js
clickmeter.account.guests.guestId.get({
  "guestId": 0
}, context)
```

#### Input
* input `object`
  * guestId **required** `integer`: Id of the guest

#### Output
* output [Api.Core.Dto.Accounting.Guest](#api.core.dto.accounting.guest)

### account.guests.guestId.post
Update a guest


```js
clickmeter.account.guests.guestId.post({
  "guestId": 0,
  "value": {}
}, context)
```

#### Input
* input `object`
  * guestId **required** `integer`: Id of the guest
  * value **required** [Api.Core.Dto.Accounting.Guest](#api.core.dto.accounting.guest)

#### Output
* output [Api.Core.Dto.Accounting.Guest](#api.core.dto.accounting.guest)

### account.guests.guestId.permissions.get
Retrieve permissions for a guest


```js
clickmeter.account.guests.guestId.permissions.get({
  "guestId": 0
}, context)
```

#### Input
* input `object`
  * guestId **required** `integer`: Id of the guest
  * entityType `string` (values: datapoint, group): Can be "datapoint" or "group"
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * type `string` (values: r, w): Can be "w" or "r"
  * entityId `integer`: Optional id of the datapoint/group entity to filter by

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Grants.Grant]](#api.core.responses.entitiesresponse[api.core.dto.grants.grant])

### account.guests.guestId.permissions.count.get
Retrieve count of the permissions for a guest


```js
clickmeter.account.guests.guestId.permissions.count.get({
  "guestId": 0
}, context)
```

#### Input
* input `object`
  * guestId **required** `integer`: Id of the guest
  * entityType `string` (values: datapoint, group): Can be "datapoint" or "group"
  * type `string` (values: r, w): Can be "w" or "r"
  * entityId `integer`: Optional id of the datapoint/group entity to filter by

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### account.guests.guestId.type.permissions.patch.post
Change the permission on a shared object


```js
clickmeter.account.guests.guestId.type.permissions.patch.post({
  "guestId": 0,
  "type": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * guestId **required** `integer`: Id of the guest
  * type **required** `string` (values: datapoint, group): Can be "datapoint" or "group"
  * body **required** [Api.Core.Requests.PermissionPatchRequest](#api.core.requests.permissionpatchrequest)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### account.guests.guestId.type.permissions.patch.put
Change the permission on a shared object


```js
clickmeter.account.guests.guestId.type.permissions.patch.put({
  "guestId": 0,
  "type": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * guestId **required** `integer`: Id of the guest
  * type **required** `string` (values: datapoint, group): Can be "datapoint" or "group"
  * body **required** [Api.Core.Requests.PermissionPatchRequest](#api.core.requests.permissionpatchrequest)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### account.ipblacklist.get
Retrieve list of a ip to exclude from event tracking


```js
clickmeter.account.ipblacklist.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.IpBlacklistEntry]](#api.core.responses.entitiesresponse[api.core.dto.accounting.ipblacklistentry])

### account.ipblacklist.post
Create an ip blacklist entry


```js
clickmeter.account.ipblacklist.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Accounting.IpBlacklistEntry](#api.core.dto.accounting.ipblacklistentry)

#### Output
* output [Api.Core.Dto.Accounting.IpBlacklistEntry](#api.core.dto.accounting.ipblacklistentry)

### account.ipblacklist.blacklistId.delete
Delete an ip blacklist entry


```js
clickmeter.account.ipblacklist.blacklistId.delete({
  "blacklistId": ""
}, context)
```

#### Input
* input `object`
  * blacklistId **required** `string`: The id of the ip to delete

#### Output
* output [Api.Core.Dto.Accounting.IpBlacklistEntry](#api.core.dto.accounting.ipblacklistentry)

### account.plan.get
Retrieve current account plan


```js
clickmeter.account.plan.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Api.Core.Dto.Accounting.Plan](#api.core.dto.accounting.plan)

### aggregated.get
Retrieve statistics about this customer for a timeframe


```js
clickmeter.aggregated.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * hourly `boolean`: If using "yesterday" or "today" timeframe you can ask for the hourly detail
  * onlyFavorites `string`

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### aggregated.list.get
Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.aggregated.list.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * groupBy `string` (values: week, month): The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]](#api.core.responses.entitiesresponse[api.core.dto.aggregated.aggregatedresult])

### aggregated.summary.conversions.get
Retrieve statistics about a subset of conversions for a timeframe with conversions data


```js
clickmeter.aggregated.summary.conversions.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * status `string` (values: deleted, active): Status of conversion ("deleted"/"active")
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * textSearch `string`: Filter fields by this pattern

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedSummaryResult](#api.core.dto.aggregated.aggregatedsummaryresult)

### aggregated.summary.datapoints.get
Retrieve statistics about a subset of datapoints for a timeframe with datapoints data


```js
clickmeter.aggregated.summary.datapoints.get({
  "timeFrame": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * type **required** `string` (values: tp, tl): Type of datapoint ("tl"/"tp")
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * status `string` (values: deleted, active, paused, spam): Status of datapoint ("deleted"/"active"/"paused"/"spam")
  * tag `string`: A comma separated list of tags you want to filter with.
  * favourite `boolean`: Is the datapoint marked as favourite
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * groupId `integer`: Filter by this group id
  * textSearch `string`: Filter fields by this pattern

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedSummaryResult](#api.core.dto.aggregated.aggregatedsummaryresult)

### aggregated.summary.groups.get
Retrieve statistics about a subset of groups for a timeframe with groups data


```js
clickmeter.aggregated.summary.groups.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * status `string` (values: deleted, active): Status of group ("deleted"/"active")
  * tag `string`: A comma separated list of tags you want to filter with.
  * favourite `boolean`: Is the group marked as favourite
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * textSearch `string`: Filter fields by this pattern

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedSummaryResult](#api.core.dto.aggregated.aggregatedsummaryresult)

### clickstream.get
Retrieve the latest list of events of this account. Limited to last 100.


```js
clickmeter.clickstream.get({}, context)
```

#### Input
* input `object`
  * group `integer`: Filter by this group id (mutually exclusive with "datapoint" and "conversion")
  * datapoint `integer`: Filter by this datapoint id (mutually exclusive with "group" and "conversion")
  * conversion `integer`: Filter by this conversion id (mutually exclusive with "datapoint" and "group")
  * pageSize `integer`: Limit results to this number
  * filter `string` (values: , spiders, uniques, nonuniques, conversions): Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.ClickStream.Hit]](#api.core.responses.entitiesresponse[api.core.dto.clickstream.hit])

### conversions.get
Retrieve a list of conversions


```js
clickmeter.conversions.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * status `string` (values: deleted, active): Status of conversion ("deleted"/"active")
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude conversions created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude conversions created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### conversions.post
Create a conversion


```js
clickmeter.conversions.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Conversions.Conversion](#api.core.dto.conversions.conversion)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### conversions.aggregated.list.get
Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)


```js
clickmeter.conversions.aggregated.list.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * status `string` (values: deleted, active): Status of conversion ("deleted"/"active")
  * groupBy `string` (values: week, month): The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]](#api.core.responses.entitiesresponse[api.core.dto.aggregated.aggregatedresult])

### conversions.count.get
Retrieve a count of conversions


```js
clickmeter.conversions.count.get({}, context)
```

#### Input
* input `object`
  * status `string` (values: deleted, active): Status of conversion ("deleted"/"active")
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude conversions created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude conversions created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### conversions.conversionId.delete
Delete conversion specified by id


```js
clickmeter.conversions.conversionId.delete({
  "conversionId": 0
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### conversions.conversionId.get
Retrieve conversion specified by id


```js
clickmeter.conversions.conversionId.get({
  "conversionId": 0
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion

#### Output
* output [Api.Core.Dto.Conversions.Conversion](#api.core.dto.conversions.conversion)

### conversions.conversionId.post
Update conversion specified by id


```js
clickmeter.conversions.conversionId.post({
  "conversionId": 0,
  "value": {}
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * value **required** [Api.Core.Dto.Conversions.Conversion](#api.core.dto.conversions.conversion)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### conversions.conversionId.aggregated.get
Retrieve statistics about this conversion for a timeframe


```js
clickmeter.conversions.conversionId.aggregated.get({
  "conversionId": 0,
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * tag `string`: Filter by this tag name
  * favourite `boolean`: Is the datapoint marked as favourite
  * hourly `boolean`: If using "yesterday" or "today" timeframe you can ask for the hourly detail

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### conversions.conversionId.aggregated.list.get
Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.conversions.conversionId.aggregated.list.get({
  "conversionId": 0,
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * groupBy `string` (values: week, month): The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]](#api.core.responses.entitiesresponse[api.core.dto.aggregated.aggregatedresult])

### conversions.conversionId.datapoints.get
Retrieve a list of datapoints connected to this conversion


```js
clickmeter.conversions.conversionId.datapoints.get({
  "conversionId": 0
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * type `string` (values: tp, tl): Type of datapoint ("tl"/"tp")
  * status `string` (values: deleted, active, paused, spam): Status of datapoint ("deleted"/"active"/"paused"/"spam")
  * tags `string`: Filter by this tag name
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### conversions.conversionId.datapoints.batch.patch.put
Modify the association between a conversion and multiple datapoints


```js
clickmeter.conversions.conversionId.datapoints.batch.patch.put({
  "conversionId": 0,
  "data": {}
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * data **required** [Api.Core.Requests.PatchBodyBatch](#api.core.requests.patchbodybatch)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### conversions.conversionId.datapoints.count.get
Retrieve a count of datapoints connected to this conversion


```js
clickmeter.conversions.conversionId.datapoints.count.get({
  "conversionId": 0
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * type `string`: Type of datapoint ("tl"/"tp")
  * status `string`: Status of datapoint ("deleted"/"active"/"paused"/"spam")
  * tags `string`: Filter by this tag name
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### conversions.conversionId.datapoints.patch.put
Modify the association between a conversion and a datapoint


```js
clickmeter.conversions.conversionId.datapoints.patch.put({
  "conversionId": 0,
  "data": {}
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * data **required** [Api.Core.Requests.ConversionPatchBody](#api.core.requests.conversionpatchbody)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### conversions.conversionId.hits.get
Retrieve the list of events related to this conversion.


```js
clickmeter.conversions.conversionId.hits.get({
  "conversionId": 0,
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, custom): Timeframe of the request. See list at $timeframeList
  * limit `integer`: Limit results to this number
  * offset `string`: Offset where to start from (it's the lastKey field in the response object)
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * filter `string` (values: spiders, uniques, nonuniques, conversions): Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

#### Output
* output [Api.Core.Dto.ClickStream.HitListPage](#api.core.dto.clickstream.hitlistpage)

### conversions.conversionId.notes.put
Fast patch the "notes" field of a conversion


```js
clickmeter.conversions.conversionId.notes.put({
  "conversionId": 0,
  "note": {}
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * note **required** [Api.Core.Requests.GenericTextPatch](#api.core.requests.generictextpatch)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### conversions.conversionId.reports.get
Retrieve a top report connected to this conversion


```js
clickmeter.conversions.conversionId.reports.get({
  "conversionId": 0,
  "type": "",
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * conversionId **required** `integer`: Id of the conversion
  * type **required** `string` (values: datapoints, groups, browsers, browsersfamilies, platforms, cities, countries, keywords, referrers, convparameters, destinations, languages, params): Type of the report.
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, beginning, custom): Timeframe of the request. See list at $timeframeList
  * hittype `string` (values: clicks, views): Type of the event you want to filter this report with. By default no filter is applied.
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

#### Output
* output [Api.Core.Dto.Tops.Top](#api.core.dto.tops.top)

### datapoints.get
List of all the datapoints associated to the user


```js
clickmeter.datapoints.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.
  * type `string` (values: tp, tl): Type of the datapoint ("tp"/"tl")
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * onlyFavorites `boolean`: Filter fields by favourite status
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### datapoints.post
Create a datapoint


```js
clickmeter.datapoints.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Datapoints.Datapoint](#api.core.dto.datapoints.datapoint)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### datapoints.aggregated.get
Retrieve statistics about this customer for a timeframe by groups


```js
clickmeter.datapoints.aggregated.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * type `string` (values: tp, tl): Type of datapoint ("tl"/"tp")
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * hourly `boolean`: If using "yesterday" or "today" timeframe you can ask for the hourly detail
  * status `string` (values: deleted, active, paused, spam): Status of datapoint ("deleted"/"active"/"paused"/"spam")
  * tag `string`: A comma separated list of tags you want to filter with.
  * favourite `boolean`: Is the datapoint is marked as favourite

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### datapoints.aggregated.list.get
Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.datapoints.aggregated.list.get({
  "type": "",
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: tp, tl): Type of datapoint ("tl"/"tp")
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * status `string` (values: deleted, active, paused, spam): Status of datapoint ("deleted"/"active"/"paused"/"spam")
  * tag `string`: A comma separated list of tags you want to filter with.
  * favourite `boolean`: Is the datapoint is marked as favourite
  * groupBy `string` (values: week, month): The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]](#api.core.responses.entitiesresponse[api.core.dto.aggregated.aggregatedresult])

### datapoints.batch.delete
Delete multiple datapoints


```js
clickmeter.datapoints.batch.delete({
  "batch": {}
}, context)
```

#### Input
* input `object`
  * batch **required** [Api.Core.Requests.DeleteBatch](#api.core.requests.deletebatch)

#### Output
* output [Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64]](#api.core.responses.modifybatchitemresponce[api.core.dto.datapoints.datapoint,system.int64])

### datapoints.batch.post
Update multiple datapoints


```js
clickmeter.datapoints.batch.post({
  "batch": {}
}, context)
```

#### Input
* input `object`
  * batch **required** [Api.Core.Requests.DatapointsBatch](#api.core.requests.datapointsbatch)

#### Output
* output [Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64]](#api.core.responses.modifybatchitemresponce[api.core.dto.datapoints.datapoint,system.int64])

### datapoints.batch.put
Create multiple datapoints


```js
clickmeter.datapoints.batch.put({
  "batch": {}
}, context)
```

#### Input
* input `object`
  * batch **required** [Api.Core.Requests.DatapointsBatch](#api.core.requests.datapointsbatch)

#### Output
* output [Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64]](#api.core.responses.modifybatchitemresponce[api.core.dto.datapoints.datapoint,system.int64])

### datapoints.count.get
Count the datapoints associated to the user


```js
clickmeter.datapoints.count.get({}, context)
```

#### Input
* input `object`
  * type `string` (values: tp, tl): Type of the datapoint ("tp"/"tl")
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * onlyFavorites `boolean`: Filter fields by favourite status
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### datapoints.id.delete
Delete a datapoint


```js
clickmeter.datapoints.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the datapoint

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### datapoints.id.get
Get a datapoint


```js
clickmeter.datapoints.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the datapoint

#### Output
* output [Api.Core.Dto.Datapoints.Datapoint](#api.core.dto.datapoints.datapoint)

### datapoints.id.post
Update a datapoint


```js
clickmeter.datapoints.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the datapoint
  * value **required** [Api.Core.Dto.Datapoints.Datapoint](#api.core.dto.datapoints.datapoint)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### datapoints.id.aggregated.get
Retrieve statistics about this datapoint for a timeframe


```js
clickmeter.datapoints.id.aggregated.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the datapoint
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * hourly `boolean`: If using "yesterday" or "today" timeframe you can ask for the hourly detail

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### datapoints.id.aggregated.list.get
Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.datapoints.id.aggregated.list.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the datapoint
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * groupBy `string` (values: week, month): The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]](#api.core.responses.entitiesresponse[api.core.dto.aggregated.aggregatedresult])

### datapoints.id.favourite.put
Fast switch the "favourite" field of a datapoint


```js
clickmeter.datapoints.id.favourite.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the datapoint

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### datapoints.id.hits.get
Retrieve the list of events related to this datapoint.


```js
clickmeter.datapoints.id.hits.get({
  "id": 0,
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the datapoint
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, custom): Timeframe of the request. See list at $timeframeList
  * limit `integer`: Limit results to this number
  * offset `string`: Offset where to start from (it's the lastKey field in the response object)
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * filter `string` (values: spiders, uniques, nonuniques, conversions): Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

#### Output
* output [Api.Core.Dto.ClickStream.HitListPage](#api.core.dto.clickstream.hitlistpage)

### datapoints.id.notes.put
Fast patch the "notes" field of a datapoint


```js
clickmeter.datapoints.id.notes.put({
  "id": 0,
  "note": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the datapoint
  * note **required** [Api.Core.Requests.GenericTextPatch](#api.core.requests.generictextpatch)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### datapoints.id.reports.get
Retrieve a top report connected to this datapoint


```js
clickmeter.datapoints.id.reports.get({
  "id": 0,
  "type": "",
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the datapoint
  * type **required** `string` (values: browsers, browsersfamilies, platforms, cities, countries, isps, ips, oss, ossfamilies, keywords, referrers, destinations, languages, params): Type of the report.
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

#### Output
* output [Api.Core.Dto.Tops.Top](#api.core.dto.tops.top)

### domains.get
Retrieve a list of domains


```js
clickmeter.domains.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * type `string` (values: system, go, personal, dedicated): Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
  * name `string`: Filter domains with this anmen

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### domains.post
Create a domain


```js
clickmeter.domains.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Domains.Domain](#api.core.dto.domains.domain)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### domains.count.get
Retrieve count of domains


```js
clickmeter.domains.count.get({}, context)
```

#### Input
* input `object`
  * type `string` (values: system, go, personal, dedicated): Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
  * name `string`: Filter domains with this anmen

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### domains.id.delete
Delete a domain


```js
clickmeter.domains.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of domain

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### domains.id.get
Get a domain


```js
clickmeter.domains.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of domain

#### Output
* output [Api.Core.Dto.Domains.Domain](#api.core.dto.domains.domain)

### domains.id.post
Update a domain


```js
clickmeter.domains.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of domain
  * value **required** [Api.Core.Dto.Domains.Domain](#api.core.dto.domains.domain)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### groups.get
List of all the groups associated to the user.


```js
clickmeter.groups.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.
  * status `string` (values: deleted, active): Status of the group
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude groups created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude groups created after this date (YYYYMMDD)
  * write `boolean`: Write permission

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### groups.post
Create a group


```js
clickmeter.groups.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Groups.Group](#api.core.dto.groups.group)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### groups.aggregated.get
Retrieve statistics about this customer for a timeframe by groups


```js
clickmeter.groups.aggregated.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * hourly `boolean`: If using "yesterday" or "today" timeframe you can ask for the hourly detail
  * status `string` (values: deleted, active): Status of group ("deleted"/"active")
  * tag `string`: A comma separated list of tags you want to filter with.
  * favourite `boolean`: Is the group is marked as favourite

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### groups.aggregated.list.get
Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.groups.aggregated.list.get({
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * status `string`: Status of group ("deleted"/"active")
  * tag `string`: A comma separated list of tags you want to filter with.
  * favourite `boolean`: Is the group is marked as favourite
  * groupBy `string` (values: deleted, active): The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]](#api.core.responses.entitiesresponse[api.core.dto.aggregated.aggregatedresult])

### groups.count.get
Count the groups associated to the user.


```js
clickmeter.groups.count.get({}, context)
```

#### Input
* input `object`
  * status `string` (values: deleted, active): Status of the datapoint
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude groups created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude groups created after this date (YYYYMMDD)
  * write `boolean`: Write permission

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### groups.id.delete
Delete group specified by id


```js
clickmeter.groups.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### groups.id.get
Get a group


```js
clickmeter.groups.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the group

#### Output
* output [Api.Core.Dto.Groups.Group](#api.core.dto.groups.group)

### groups.id.post
Update a group


```js
clickmeter.groups.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the group
  * value **required** [Api.Core.Dto.Groups.Group](#api.core.dto.groups.group)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### groups.id.aggregated.get
Retrieve statistics about this group for a timeframe


```js
clickmeter.groups.id.aggregated.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * hourly `boolean`: If using "yesterday" or "today" timeframe you can ask for the hourly detail

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### groups.id.aggregated.list.get
Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.groups.id.aggregated.list.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * groupBy `string` (values: week, month): The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]](#api.core.responses.entitiesresponse[api.core.dto.aggregated.aggregatedresult])

### groups.id.aggregated.summary.get
Retrieve statistics about a subset of datapoints for a timeframe with datapoints data


```js
clickmeter.groups.id.aggregated.summary.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Filter by this group id
  * timeFrame **required** `string` (values: today, yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, last12months, lastyear, currentyear, beginning, custom): Timeframe of the request. See list at $timeframeList
  * type `string` (values: tp, tl): Type of datapoint ("tl"/"tp")
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * status `string` (values: deleted, active): Status of datapoint ("deleted"/"active"/"paused"/"spam")
  * tag `string`: A comma separated list of tags you want to filter with.
  * favourite `boolean`: Is the datapoint marked as favourite
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * offset `integer`: Offset where to start from
  * limit `integer`: Limit results to this number
  * textSearch `string`: Filter fields by this pattern

#### Output
* output [Api.Core.Dto.Aggregated.AggregatedSummaryResult](#api.core.dto.aggregated.aggregatedsummaryresult)

### groups.id.datapoints.get
List of all the datapoints associated to the user in this group.


```js
clickmeter.groups.id.datapoints.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.
  * type `string` (values: tp, tl): Type of the datapoint ("tp"/"tl")
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * onlyFavorites `boolean`: Filter fields by favourite status
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### groups.id.datapoints.post
Create a datapoint in this group


```js
clickmeter.groups.id.datapoints.post({
  "id": 0,
  "value": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the group
  * value **required** [Api.Core.Dto.Datapoints.Datapoint](#api.core.dto.datapoints.datapoint)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### groups.id.datapoints.count.get
Count the datapoints associated to the user in this group.


```js
clickmeter.groups.id.datapoints.count.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * type `string` (values: tp, tl): Type of the datapoint ("tp"/"tl")
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * onlyFavorites `boolean`: Filter fields by favourite status
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### groups.id.favourite.put
Fast switch the "favourite" field of a group


```js
clickmeter.groups.id.favourite.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### groups.id.hits.get
Retrieve the list of events related to this group.


```js
clickmeter.groups.id.hits.get({
  "id": 0,
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, custom): Timeframe of the request. See list at $timeframeList
  * limit `integer`: Limit results to this number
  * offset `string`: Offset where to start from (it's the lastKey field in the response object)
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * filter `string` (values: spiders, uniques, nonuniques, conversions): Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

#### Output
* output [Api.Core.Dto.ClickStream.HitListPage](#api.core.dto.clickstream.hitlistpage)

### groups.id.notes.put
Fast patch the "notes" field of a group


```js
clickmeter.groups.id.notes.put({
  "id": 0,
  "note": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * note **required** [Api.Core.Requests.GenericTextPatch](#api.core.requests.generictextpatch)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### groups.id.reports.get
Retrieve a top report connected to this group


```js
clickmeter.groups.id.reports.get({
  "id": 0,
  "type": "",
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * type **required** `string` (values: browsers, browsersfamilies, platforms, cities, countries, isps, ips, oss, ossfamilies, keywords, referrers, destinations, languages, params): Type of the report.
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, beginning, custom): Timeframe of the request. See list at $timeframeList
  * hittype `string` (values: clicks, views): Type of the event you want to filter this report with. By default no filter is applied.
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

#### Output
* output [Api.Core.Dto.Tops.Top](#api.core.dto.tops.top)

### hits.get
Retrieve the list of events related to this account.


```js
clickmeter.hits.get({
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, custom): Timeframe of the request. See list at $timeframeList
  * limit `integer`: Limit results to this number
  * offset `string`: Offset where to start from (it's the lastKey field in the response object)
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
  * filter `string` (values: spiders, uniques, nonuniques, conversions): Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

#### Output
* output [Api.Core.Dto.ClickStream.HitListPage](#api.core.dto.clickstream.hitlistpage)

### me.get
Retrieve current account data


```js
clickmeter.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Api.Core.Dto.Accounting.User](#api.core.dto.accounting.user)

### me.plan.get
Retrieve current account plan


```js
clickmeter.me.plan.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Api.Core.Dto.Accounting.Plan](#api.core.dto.accounting.plan)

### reports.get
Retrieve a top report


```js
clickmeter.reports.get({
  "type": "",
  "timeframe": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: browsers, browsersfamilies, platforms, cities, countries, isps, ips, oss, ossfamilies, keywords, referrers, destinations, languages, params): Type of the report.
  * timeframe **required** `string` (values: yesterday, last7, last30, lastmonth, currentmonth, previousmonth, last90, last120, last180, beginning, custom): Timeframe of the request. See list at $timeframeList
  * hittype `string`: Type of the event you want to filter this report with. By default no filter is applied.
  * group `integer`: Filter by this group id (mutually exclusive with "datapoint" and "conversion")
  * datapoint `integer`: Filter by this datapoint id (mutually exclusive with "group" and "conversion")
  * conversion `integer`: Filter by this conversion id (mutually exclusive with "datapoint" and "group")
  * fromDay `string`: If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
  * toDay `string`: If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

#### Output
* output [Api.Core.Dto.Tops.Top](#api.core.dto.tops.top)

### retargeting.get
List of all the retargeting scripts associated to the user


```js
clickmeter.retargeting.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### retargeting.post
Creates a retargeting script


```js
clickmeter.retargeting.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Retargeting.RetargetingScript](#api.core.dto.retargeting.retargetingscript)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### retargeting.count.get
Retrieve count of retargeting scripts


```js
clickmeter.retargeting.count.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### retargeting.id.delete
Deletes a retargeting script (and remove associations)


```js
clickmeter.retargeting.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the retargeting script

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### retargeting.id.get
Get a retargeting script object


```js
clickmeter.retargeting.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the retargeting script

#### Output
* output [Api.Core.Dto.Retargeting.RetargetingScript](#api.core.dto.retargeting.retargetingscript)

### retargeting.id.post
Updates a retargeting script


```js
clickmeter.retargeting.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the retargeting script
  * value **required** [Api.Core.Dto.Retargeting.RetargetingScript](#api.core.dto.retargeting.retargetingscript)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### retargeting.id.datapoints.get
List of all the datapoints associated to the retargeting script.


```js
clickmeter.retargeting.id.datapoints.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the retargeting script
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * onlyFavorites `boolean`: Filter fields by favourite status
  * sortBy `string`: Field to sort by
  * sortDirection `string` (values: asc, desc): Direction of sort "asc" or "desc"
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### retargeting.id.datapoints.count.get
Count the datapoints associated to the retargeting script.


```js
clickmeter.retargeting.id.datapoints.count.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of the group
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * tags `string`: A comma separated list of tags you want to filter with.
  * textSearch `string`: Filter fields by this pattern
  * onlyFavorites `boolean`: Filter fields by favourite status
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### tags.get
List of all the groups associated to the user filtered by this tag.


```js
clickmeter.tags.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.
  * name `string`: Name of the tag
  * datapoints `string`: Comma separated list of datapoints id to filter by
  * groups `string`: Comma separated list of groups id to filter by
  * type `string` (values: tp, tl, dp, gr): Type of entity related to the tag

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### tags.post
Create a tag


```js
clickmeter.tags.post({
  "value": {}
}, context)
```

#### Input
* input `object`
  * value **required** [Api.Core.Dto.Tags.Tag](#api.core.dto.tags.tag)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### tags.count.get
List of all the groups associated to the user filtered by this tag.


```js
clickmeter.tags.count.get({}, context)
```

#### Input
* input `object`
  * name `string`: Name of the tag
  * datapoints `string`: Comma separated list of datapoints id to filter by
  * groups `string`: Comma separated list of groups id to filter by
  * type `string` (values: tp, tl, dp, gr): Type of entity related to the tag

#### Output
* output [System.Object](#system.object)

### tags.tagId.delete
Delete a tag


```js
clickmeter.tags.tagId.delete({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag

#### Output
* output [System.Object](#system.object)

### tags.tagId.get
Retrieve a tag


```js
clickmeter.tags.tagId.get({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag

#### Output
* output [Api.Core.Dto.Tags.Tag](#api.core.dto.tags.tag)

### tags.tagId.datapoints.delete
Delete the association of this tag with all datapoints


```js
clickmeter.tags.tagId.datapoints.delete({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### tags.tagId.datapoints.get
List of all the datapoints associated to the user filtered by this tag


```js
clickmeter.tags.tagId.datapoints.get({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag.
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.
  * type `string` (values: tp, tl): Type of the datapoint ("tp"/"tl")
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### tags.tagId.datapoints.count.get
Count the datapoints associated to the user filtered by this tag


```js
clickmeter.tags.tagId.datapoints.count.get({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag.
  * type `string` (values: tp, tl): Type of the datapoint ("tp"/"tl")
  * status `string` (values: deleted, active, paused, spam): Status of the datapoint
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude datapoints created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude datapoints created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### tags.tagId.datapoints.patch.put
Associate/Deassociate a tag with a datapoint


```js
clickmeter.tags.tagId.datapoints.patch.put({
  "tagId": 0,
  "data": {}
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag
  * data **required** [Api.Core.Requests.PatchBody](#api.core.requests.patchbody)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### tags.tagId.groups.delete
Delete the association of this tag with all groups


```js
clickmeter.tags.tagId.groups.delete({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### tags.tagId.groups.get
List of all the groups associated to the user filtered by this tag.


```js
clickmeter.tags.tagId.groups.get({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag.
  * offset `integer`: Where to start when retrieving elements. Default is 0 if not specified.
  * limit `integer`: Maximum elements to retrieve. Default to 20 if not specified.
  * status `string` (values: deleted, active): Status of the datapoint
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude groups created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude groups created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]](#api.core.responses.entitiesresponse[api.core.responses.entityuri[system.int64]])

### tags.tagId.groups.count.get
Count the groups associated to the user filtered by this tag


```js
clickmeter.tags.tagId.groups.count.get({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag.
  * status `string` (values: deleted, active): Status of the datapoint
  * textSearch `string`: Filter fields by this pattern
  * createdAfter `string`: Exclude groups created before this date (YYYYMMDD)
  * createdBefore `string`: Exclude groups created after this date (YYYYMMDD)

#### Output
* output [Api.Core.Responses.CountResponce](#api.core.responses.countresponce)

### tags.tagId.groups.patch.put
Associate/Deassociate a tag with a group


```js
clickmeter.tags.tagId.groups.patch.put({
  "tagId": 0,
  "data": {}
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag
  * data **required** [Api.Core.Requests.PatchBody](#api.core.requests.patchbody)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### tags.tagId.name.put
Fast patch a tag name


```js
clickmeter.tags.tagId.name.put({
  "tagId": 0,
  "data": {}
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Id of the tag
  * data **required** [Api.Core.Requests.GenericTextPatch](#api.core.requests.generictextpatch)

#### Output
* output [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])



## Definitions

### Api.Core.Dto.Accounting.ConversionOptions
* Api.Core.Dto.Accounting.ConversionOptions `object`
  * hideComCost `boolean`
  * hideCost `boolean`
  * hideCount `boolean`
  * hideParams `boolean`
  * hideValue `boolean`
  * percentCommission `integer`
  * percentValue `integer`

### Api.Core.Dto.Accounting.DomainWhitelistEntry
* Api.Core.Dto.Accounting.DomainWhitelistEntry `object`
  * id `string`
  * name `string`

### Api.Core.Dto.Accounting.ExtendedGrants
* Api.Core.Dto.Accounting.ExtendedGrants `object`
  * allowAllGrants `boolean`
  * allowGroupCreation `boolean`

### Api.Core.Dto.Accounting.Guest
* Api.Core.Dto.Accounting.Guest `object`
  * apiKey `string`
  * conversionOptions [Api.Core.Dto.Accounting.ConversionOptions](#api.core.dto.accounting.conversionoptions)
  * creationDate `string`:  (A date in "YmdHis" format)
  * currentGrant [Api.Core.Dto.Grants.Grant](#api.core.dto.grants.grant)
  * dateFormat `string`
  * decimalSeparator `string`
  * email `string`
  * extendedGrants [Api.Core.Dto.Accounting.ExtendedGrants](#api.core.dto.accounting.extendedgrants)
  * groupGrants `integer`
  * hitOptions [Api.Core.Dto.Accounting.HitOptions](#api.core.dto.accounting.hitoptions)
  * id `integer`
  * key `string`
  * language `string`
  * loginCount `integer`
  * name `string`
  * notes `string`
  * numberGroupSeparator `string`
  * password `string`
  * timeFormat `string` (values: AmPm, H24)
  * timeZone `integer`
  * timeframeMinDate `string`:  (A date in "YmdHis" format)
  * timezonename `string`
  * tlGrants `integer`
  * tpGrants `integer`
  * userName `string`

### Api.Core.Dto.Accounting.HitOptions
* Api.Core.Dto.Accounting.HitOptions `object`
  * hideReferrer `boolean`

### Api.Core.Dto.Accounting.IpBlacklistEntry
* Api.Core.Dto.Accounting.IpBlacklistEntry `object`
  * id `string`
  * ip `string`

### Api.Core.Dto.Accounting.Plan
* Api.Core.Dto.Accounting.Plan `object`
  * allowedPersonalDomains `integer`
  * allowedPersonalUrls `integer`
  * billingPeriodEnd `string`:  (A date in "YmdHis" format)
  * billingPeriodStart `string`:  (A date in "YmdHis" format)
  * bonusMonthlyEvents `integer`
  * maximumDatapoints `integer`
  * maximumGuests `integer`
  * monthlyEvents `integer`
  * name `string`
  * price `number`
  * profileId `integer`
  * recurring `boolean`
  * recurringPeriod `integer`
  * usedDatapoints `integer`
  * usedMonthlyEvents `integer`

### Api.Core.Dto.Accounting.User
* Api.Core.Dto.Accounting.User `object`
  * boGoVal `string`
  * bonusClicks `integer`
  * companyName `string`
  * companyRole `string`
  * email `string`
  * firstName `string`
  * lastName `string`
  * phone `string`
  * redirectOnly `boolean`
  * registrationDate `string`:  (A date in "YmdHis" format)
  * timeframeMinDate `string`:  (A date in "YmdHis" format)
  * timezone `integer`
  * timezonename `string`

### Api.Core.Dto.Aggregated.AggregatedResult
* Api.Core.Dto.Aggregated.AggregatedResult `object`
  * activityDay `string`:  (A date in "YmdHis" format)
  * commissionsCost `number`
  * conversionsCost `number`
  * conversionsValue `number`
  * convertedClicks `integer`
  * entityData [System.Object](#system.object)
  * entityId `string`
  * fromDay `string`:  (A date in "YmdHis" format)
  * hourlyBreakDown `object`
  * lastHitDate `string`:  (A date in "YmdHis" format)
  * spiderHitsCount `integer`
  * toDay `string`:  (A date in "YmdHis" format)
  * totalClicks `integer`
  * totalViews `integer`
  * uniqueClicks `integer`
  * uniqueConversions `integer`
  * uniqueViews `integer`

### Api.Core.Dto.Aggregated.AggregatedSummaryResult
* Api.Core.Dto.Aggregated.AggregatedSummaryResult `object`
  * count `integer`
  * limit `integer`
  * offset `integer`
  * result `array`
    * items [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### Api.Core.Dto.ClickStream.Hit
* Api.Core.Dto.ClickStream.Hit `object`
  * accessTime `string`:  (A date in "YmdHis" format)
  * browser [Api.Core.Dto.ClickStream.HitBrowserInfo](#api.core.dto.clickstream.hitbrowserinfo)
  * clientLanguage `string`
  * conversion1 [Api.Core.Dto.ClickStream.HitConversionInfo](#api.core.dto.clickstream.hitconversioninfo)
  * conversion2 [Api.Core.Dto.ClickStream.HitConversionInfo](#api.core.dto.clickstream.hitconversioninfo)
  * conversion3 [Api.Core.Dto.ClickStream.HitConversionInfo](#api.core.dto.clickstream.hitconversioninfo)
  * conversion4 [Api.Core.Dto.ClickStream.HitConversionInfo](#api.core.dto.clickstream.hitconversioninfo)
  * conversion5 [Api.Core.Dto.ClickStream.HitConversionInfo](#api.core.dto.clickstream.hitconversioninfo)
  * conversions `array`
    * items [Api.Core.Dto.ClickStream.HitConversionInfo](#api.core.dto.clickstream.hitconversioninfo)
  * entity [Api.Core.Dto.ClickStream.HitDatapointInfo](#api.core.dto.clickstream.hitdatapointinfo)
  * ip `string`
  * isProxy `string`
  * isSpider `string`
  * isUnique `string`
  * location [Api.Core.Dto.ClickStream.HitLocationInfo](#api.core.dto.clickstream.hitlocationinfo)
  * org `string`
  * os [Api.Core.Dto.ClickStream.HitOsInfo](#api.core.dto.clickstream.hitosinfo)
  * queryParams `string`
  * realDestinationUrl `string`
  * referer `string`
  * source [Api.Core.Dto.ClickStream.HitSource](#api.core.dto.clickstream.hitsource)
  * type `string`

### Api.Core.Dto.ClickStream.HitBrowserInfo
* Api.Core.Dto.ClickStream.HitBrowserInfo `object`
  * browserType `string`
  * familyId `integer`
  * familyName `string`
  * id `integer`
  * name `string`

### Api.Core.Dto.ClickStream.HitConversionInfo
* Api.Core.Dto.ClickStream.HitConversionInfo `object`
  * accessTime `string`:  (A date in "YmdHis" format)
  * comcost `number`
  * cost `number`
  * date `string`:  (A date in "YmdHis" format)
  * deleted `boolean`
  * id `integer`
  * name `string`
  * parameter `string`
  * value `number`

### Api.Core.Dto.ClickStream.HitDatapointInfo
* Api.Core.Dto.ClickStream.HitDatapointInfo `object`
  * creationDate `string`:  (A date in "YmdHis" format)
  * datapointFavourite `boolean`
  * datapointId `integer`
  * datapointName `string`
  * datapointTitle `string`
  * datapointType `string`
  * destinationUrl `string`
  * groupId `integer`
  * groupName `string`
  * isABTest `boolean`
  * isPrivateShared `boolean`
  * isPublic `boolean`
  * notes `string`
  * status `string` (values: Active, Paused, Abuse, Deleted)
  * tags `array`
    * items [Api.Core.Dto.Tags.Tag](#api.core.dto.tags.tag)
  * trackingCode `string`

### Api.Core.Dto.ClickStream.HitListPage
* Api.Core.Dto.ClickStream.HitListPage `object`
  * hits `array`
    * items [Api.Core.Dto.ClickStream.Hit](#api.core.dto.clickstream.hit)
  * lastKey `string`

### Api.Core.Dto.ClickStream.HitLocationInfo
* Api.Core.Dto.ClickStream.HitLocationInfo `object`
  * areacode `string`
  * city `string`
  * country `string`
  * latitude `number`
  * longitude `number`
  * metrocode `string`
  * organization `string`
  * postalcode `string`
  * region `string`
  * regionName `string`

### Api.Core.Dto.ClickStream.HitOsInfo
* Api.Core.Dto.ClickStream.HitOsInfo `object`
  * familyId `integer`
  * familyName `string`
  * id `integer`
  * name `string`

### Api.Core.Dto.ClickStream.HitSource
* Api.Core.Dto.ClickStream.HitSource `object`
  * id `integer`
  * name `string`
  * param `string`

### Api.Core.Dto.Conversions.Conversion
* Api.Core.Dto.Conversions.Conversion `object`
  * code `string`
  * creationDate `string`:  (A date in "YmdHis" format)
  * deleted `boolean`
  * description `string`
  * id `integer`
  * name `string`
  * protocol `string` (values: Http, Https)
  * value `number`

### Api.Core.Dto.Datapoints.BrowserBaseDestinationItem
* Api.Core.Dto.Datapoints.BrowserBaseDestinationItem `object`
  * emailDestinationUrl `string`
  * mobileDestinationUrl `string`
  * spidersDestinationUrl `string`

### Api.Core.Dto.Datapoints.Datapoint
* Api.Core.Dto.Datapoints.Datapoint `object`
  * creationDate `string`:  (A date in "YmdHis" format)
  * encodeIp `boolean`
  * fifthConversionId `integer`
  * fifthConversionName `string`
  * firstConversionId `integer`
  * firstConversionName `string`
  * fourthConversionId `integer`
  * fourthConversionName `string`
  * groupId `integer`
  * groupName `string`
  * id `integer`
  * isPublic `boolean`
  * isSecured `boolean`
  * lightTracking `boolean`
  * name `string`
  * notes `string`
  * preferred `boolean`
  * redirectOnly `boolean`
  * secondConversionId `integer`
  * secondConversionName `string`
  * status `string` (values: Active, Paused, Abuse, Deleted)
  * tags `array`
    * items [Api.Core.Dto.Tags.Tag](#api.core.dto.tags.tag)
  * thirdConversionId `integer`
  * thirdConversionName `string`
  * title `string`
  * trackingCode `string`
  * type `string` (values: TrackingLink, TrackingPixel)
  * typeTL [Api.Core.Dto.Datapoints.TrackingLinkSpecifics](#api.core.dto.datapoints.trackinglinkspecifics)
  * typeTP [Api.Core.Dto.Datapoints.TrackingPixelSpecifics](#api.core.dto.datapoints.trackingpixelspecifics)
  * writePermited `boolean`

### Api.Core.Dto.Datapoints.DatapointRetargetingInfo
* Api.Core.Dto.Datapoints.DatapointRetargetingInfo `object`
  * id `integer`
  * name `string`

### Api.Core.Dto.Datapoints.MultipleDestinationItem
* Api.Core.Dto.Datapoints.MultipleDestinationItem `object`
  * url `string`

### Api.Core.Dto.Datapoints.TrackingLinkSpecifics
* Api.Core.Dto.Datapoints.TrackingLinkSpecifics `object`
  * appendQuery `boolean`
  * browserDestinationItem [Api.Core.Dto.Datapoints.BrowserBaseDestinationItem](#api.core.dto.datapoints.browserbasedestinationitem)
  * destinationMode `string` (values: Simple, RandomDestination, DestinationByLanguage, SpilloverDestination, DynamicUrl, BrowserDestination, DestinationByNation, UniqueDestination, SequentialDestination, WeightedDestination)
  * domainId `integer`
  * encodeUrl `boolean`
  * expirationClicks `integer`
  * expirationDate `string`:  (A date in "YmdHis" format)
  * firstUrl `string`
  * goDomainId `integer`
  * hideUrl `boolean`
  * hideUrlTitle `string`
  * isABTest `boolean`
  * password `string`
  * pauseAfterClicksExpiration `boolean`
  * pauseAfterDateExpiration `boolean`
  * randomDestinationItems `array`
    * items [Api.Core.Dto.Datapoints.MultipleDestinationItem](#api.core.dto.datapoints.multipledestinationitem)
  * redirectType `string` (values: PermanentRedirect, TemporaryRedirect)
  * referrerClean `string` (values: None, Clean, Myself)
  * scripts `array`
    * items [Api.Core.Dto.Datapoints.DatapointRetargetingInfo](#api.core.dto.datapoints.datapointretargetinginfo)
  * sequentialDestinationItems `array`
    * items [Api.Core.Dto.Datapoints.MultipleDestinationItem](#api.core.dto.datapoints.multipledestinationitem)
  * spilloverDestinationItems `array`
    * items [Api.Core.Dto.Datapoints.MultipleDestinationItem](#api.core.dto.datapoints.multipledestinationitem)
  * uniqueDestinationItem [Api.Core.Dto.Datapoints.UniqueDestinationItem](#api.core.dto.datapoints.uniquedestinationitem)
  * url `string`
  * urlAfterClicksExpiration `string`
  * urlAfterDateExpiration `string`
  * urlsByLanguage `array`
    * items [Api.Core.Dto.Datapoints.UrlByLanguageItem](#api.core.dto.datapoints.urlbylanguageitem)
  * urlsByNation `array`
    * items [Api.Core.Dto.Datapoints.UrlByNationItem](#api.core.dto.datapoints.urlbynationitem)
  * weightedDestinationItems `array`
    * items [Api.Core.Dto.Datapoints.WeightedDestinationItem](#api.core.dto.datapoints.weighteddestinationitem)

### Api.Core.Dto.Datapoints.TrackingPixelSpecifics
* Api.Core.Dto.Datapoints.TrackingPixelSpecifics `object`
  * parameterNote `string`

### Api.Core.Dto.Datapoints.UniqueDestinationItem
* Api.Core.Dto.Datapoints.UniqueDestinationItem `object`
  * firstDestinationUrl `string`

### Api.Core.Dto.Datapoints.UrlByLanguageItem
* Api.Core.Dto.Datapoints.UrlByLanguageItem `object`
  * languageCode `string`
  * url `string`

### Api.Core.Dto.Datapoints.UrlByNationItem
* Api.Core.Dto.Datapoints.UrlByNationItem `object`
  * nation `string`
  * url `string`

### Api.Core.Dto.Datapoints.WeightedDestinationItem
* Api.Core.Dto.Datapoints.WeightedDestinationItem `object`
  * url `string`
  * weight `integer`

### Api.Core.Dto.Domains.Domain
* Api.Core.Dto.Domains.Domain `object`
  * custom404 `string`
  * customHomepage `string`
  * id `integer`
  * name `string`
  * type `string` (values: System, Go, Dedicated, Personal)

### Api.Core.Dto.EntityUriLong
* Api.Core.Dto.EntityUriLong `object`
  * id `integer`
  * uri `string`

### Api.Core.Dto.Grants.Grant
* Api.Core.Dto.Grants.Grant `object`
  * DatapointType `string`
  * Entity [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])
  * EntityName `string`
  * EntityType `string`
  * Type `string`

### Api.Core.Dto.Groups.Group
* Api.Core.Dto.Groups.Group `object`
  * creationDate `string`:  (A date in "YmdHis" format)
  * deleted `boolean`
  * id `integer`
  * isPublic `boolean`
  * name `string`
  * notes `string`
  * preferred `boolean`
  * redirectOnly `boolean`
  * tags `array`
    * items [Api.Core.Dto.Tags.Tag](#api.core.dto.tags.tag)
  * writePermited `boolean`

### Api.Core.Dto.Retargeting.RetargetingScript
* Api.Core.Dto.Retargeting.RetargetingScript `object`
  * id `integer`
  * name `string`
  * script `string`

### Api.Core.Dto.Tags.Tag
* Api.Core.Dto.Tags.Tag `object`
  * datapoints `array`
    * items `integer`
  * groups `array`
    * items `integer`
  * id `integer`
  * name `string`

### Api.Core.Dto.Tops.Top
* Api.Core.Dto.Tops.Top `object`
  * createdAt `string`:  (A date in "YmdHis" format)
  * data `array`
    * items [Api.Core.Dto.Tops.TopItem](#api.core.dto.tops.topitem)
  * key `string`

### Api.Core.Dto.Tops.TopItem
* Api.Core.Dto.Tops.TopItem `object`
  * entityData [System.Object](#system.object)
  * id `string`
  * lastHitDate `string`:  (A date in "YmdHis" format)
  * spiderClicks `integer`
  * spiderHits `integer`
  * spiderViews `integer`
  * totalClicks `integer`
  * totalCommissionsCost `number`
  * totalConversions `integer`
  * totalConversionsCost `number`
  * totalConversionsValue `number`
  * totalHits `integer`
  * totalViews `integer`
  * uniqueClicks `integer`
  * uniqueHits `integer`
  * uniqueViews `integer`

### Api.Core.Requests.ConversionPatchBody
* Api.Core.Requests.ConversionPatchBody `object`
  * Action `string`
  * Id `integer`
  * ReplaceId `integer`

### Api.Core.Requests.DatapointsBatch
* Api.Core.Requests.DatapointsBatch `object`
  * List `array`
    * items [Api.Core.Dto.Datapoints.Datapoint](#api.core.dto.datapoints.datapoint)

### Api.Core.Requests.DeleteBatch
* Api.Core.Requests.DeleteBatch `object`
  * Entities `array`
    * items [Api.Core.Dto.EntityUriLong](#api.core.dto.entityurilong)

### Api.Core.Requests.GenericTextPatch
* Api.Core.Requests.GenericTextPatch `object`
  * Text `string`

### Api.Core.Requests.PatchBody
* Api.Core.Requests.PatchBody `object`
  * Action `string`
  * Id `integer`

### Api.Core.Requests.PatchBodyBatch
* Api.Core.Requests.PatchBodyBatch `object`
  * PatchRequests `array`
    * items [Api.Core.Requests.PatchBody](#api.core.requests.patchbody)

### Api.Core.Requests.PermissionPatchRequest
* Api.Core.Requests.PermissionPatchRequest `object`
  * Action `string`
  * Id `integer`
  * Verb `string`

### Api.Core.Responses.CountResponce
* Api.Core.Responses.CountResponce `object`
  * count `integer`

### Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.DomainWhitelistEntry]
* Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.DomainWhitelistEntry] `object`
  * entities `array`
    * items [Api.Core.Dto.Accounting.DomainWhitelistEntry](#api.core.dto.accounting.domainwhitelistentry)

### Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.IpBlacklistEntry]
* Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.IpBlacklistEntry] `object`
  * entities `array`
    * items [Api.Core.Dto.Accounting.IpBlacklistEntry](#api.core.dto.accounting.ipblacklistentry)

### Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]
* Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult] `object`
  * entities `array`
    * items [Api.Core.Dto.Aggregated.AggregatedResult](#api.core.dto.aggregated.aggregatedresult)

### Api.Core.Responses.EntitiesResponse[Api.Core.Dto.ClickStream.Hit]
* Api.Core.Responses.EntitiesResponse[Api.Core.Dto.ClickStream.Hit] `object`
  * entities `array`
    * items [Api.Core.Dto.ClickStream.Hit](#api.core.dto.clickstream.hit)

### Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Grants.Grant]
* Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Grants.Grant] `object`
  * entities `array`
    * items [Api.Core.Dto.Grants.Grant](#api.core.dto.grants.grant)

### Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]
* Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]] `object`
  * entities `array`
    * items [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])

### Api.Core.Responses.EntityUri[System.Int64]
* Api.Core.Responses.EntityUri[System.Int64] `object`
  * id `integer`
  * uri `string`

### Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64]
* Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64] `object`
  * entityData [Api.Core.Dto.Datapoints.Datapoint](#api.core.dto.datapoints.datapoint)
  * errors `array`
    * items [ClickMeter.Infrastructure.Validation.ValidationFailure](#clickmeter.infrastructure.validation.validationfailure)
  * result [Api.Core.Responses.EntityUri[System.Int64]](#api.core.responses.entityuri[system.int64])
  * status `string`

### ClickMeter.Infrastructure.Validation.ValidationFailure
* ClickMeter.Infrastructure.Validation.ValidationFailure `object`
  * code [System.Object](#system.object)
  * errorMessage `string`
  * errorValue [System.Object](#system.object)
  * property `string`

### System.Object
* System.Object `object`


