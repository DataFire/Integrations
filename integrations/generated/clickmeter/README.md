# @datafire/clickmeter

Client library for ClickMeter

## Installation and Usage
```bash
npm install --save datafire @datafire/clickmeter
```

```js
let datafire = require('datafire');
let clickmeter = require('@datafire/clickmeter').create({
  api_key: "",
});

clickmeter.tags.count.get({}).then(data => {
  console.log(data);
})
```

## Description
Api dashboard for ClickMeter API

## Actions
### account.get
Retrieve current account data


```js
clickmeter.account.get(null, context)
```

#### Parameters
*This action has no parameters*

### account.post
Update current account data


```js
clickmeter.account.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### account.domainwhitelist.get
Retrieve list of a domains allowed to redirect in DDU mode


```js
clickmeter.account.domainwhitelist.get({}, context)
```

#### Parameters
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number

### account.domainwhitelist.post
Create an domain entry


```js
clickmeter.account.domainwhitelist.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### account.domainwhitelist.whitelistId.delete
Delete an domain entry


```js
clickmeter.account.domainwhitelist.whitelistId.delete({
  "whitelistId": ""
}, context)
```

#### Parameters
* whitelistId (string) **required** - The id of the domain to delete

### account.guests.get
Retrieve list of a guest


```js
clickmeter.account.guests.get({}, context)
```

#### Parameters
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* textSearch (string) - Filter fields by this pattern

### account.guests.post
Create a guest


```js
clickmeter.account.guests.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### account.guests.count.get
Retrieve count of guests


```js
clickmeter.account.guests.count.get({}, context)
```

#### Parameters
* textSearch (string) - Filter fields by this pattern

### account.guests.guestId.delete
Delete a guest


```js
clickmeter.account.guests.guestId.delete({
  "guestId": 0
}, context)
```

#### Parameters
* guestId (integer) **required** - Id of the guest

### account.guests.guestId.get
Retrieve a guest


```js
clickmeter.account.guests.guestId.get({
  "guestId": 0
}, context)
```

#### Parameters
* guestId (integer) **required** - Id of the guest

### account.guests.guestId.post
Update a guest


```js
clickmeter.account.guests.guestId.post({
  "guestId": 0,
  "value": {}
}, context)
```

#### Parameters
* guestId (integer) **required** - Id of the guest
* value (object) **required**

### account.guests.guestId.permissions.get
Retrieve permissions for a guest


```js
clickmeter.account.guests.guestId.permissions.get({
  "guestId": 0
}, context)
```

#### Parameters
* guestId (integer) **required** - Id of the guest
* entityType (string) - Can be "datapoint" or "group"
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* type (string) - Can be "w" or "r"
* entityId (integer) - Optional id of the datapoint/group entity to filter by

### account.guests.guestId.permissions.count.get
Retrieve count of the permissions for a guest


```js
clickmeter.account.guests.guestId.permissions.count.get({
  "guestId": 0
}, context)
```

#### Parameters
* guestId (integer) **required** - Id of the guest
* entityType (string) - Can be "datapoint" or "group"
* type (string) - Can be "w" or "r"
* entityId (integer) - Optional id of the datapoint/group entity to filter by

### account.guests.guestId.type.permissions.patch.post
Change the permission on a shared object


```js
clickmeter.account.guests.guestId.type.permissions.patch.post({
  "guestId": 0,
  "type": "",
  "body": {}
}, context)
```

#### Parameters
* guestId (integer) **required** - Id of the guest
* type (string) **required** - Can be "datapoint" or "group"
* body (object) **required**

### account.guests.guestId.type.permissions.patch.put
Change the permission on a shared object


```js
clickmeter.account.guests.guestId.type.permissions.patch.put({
  "guestId": 0,
  "type": "",
  "body": {}
}, context)
```

#### Parameters
* guestId (integer) **required** - Id of the guest
* type (string) **required** - Can be "datapoint" or "group"
* body (object) **required**

### account.ipblacklist.get
Retrieve list of a ip to exclude from event tracking


```js
clickmeter.account.ipblacklist.get({}, context)
```

#### Parameters
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number

### account.ipblacklist.post
Create an ip blacklist entry


```js
clickmeter.account.ipblacklist.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### account.ipblacklist.blacklistId.delete
Delete an ip blacklist entry


```js
clickmeter.account.ipblacklist.blacklistId.delete({
  "blacklistId": ""
}, context)
```

#### Parameters
* blacklistId (string) **required** - The id of the ip to delete

### account.plan.get
Retrieve current account plan


```js
clickmeter.account.plan.get(null, context)
```

#### Parameters
*This action has no parameters*

### aggregated.get
Retrieve statistics about this customer for a timeframe


```js
clickmeter.aggregated.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* hourly (boolean) - If using "yesterday" or "today" timeframe you can ask for the hourly detail
* onlyFavorites (string)

### aggregated.list.get
Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.aggregated.list.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* groupBy (string) - The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

### aggregated.summary.conversions.get
Retrieve statistics about a subset of conversions for a timeframe with conversions data


```js
clickmeter.aggregated.summary.conversions.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* status (string) - Status of conversion ("deleted"/"active")
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* textSearch (string) - Filter fields by this pattern

### aggregated.summary.datapoints.get
Retrieve statistics about a subset of datapoints for a timeframe with datapoints data


```js
clickmeter.aggregated.summary.datapoints.get({
  "timeFrame": "",
  "type": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* type (string) **required** - Type of datapoint ("tl"/"tp")
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* status (string) - Status of datapoint ("deleted"/"active"/"paused"/"spam")
* tag (string) - A comma separated list of tags you want to filter with.
* favourite (boolean) - Is the datapoint marked as favourite
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* groupId (integer) - Filter by this group id
* textSearch (string) - Filter fields by this pattern

### aggregated.summary.groups.get
Retrieve statistics about a subset of groups for a timeframe with groups data


```js
clickmeter.aggregated.summary.groups.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* status (string) - Status of group ("deleted"/"active")
* tag (string) - A comma separated list of tags you want to filter with.
* favourite (boolean) - Is the group marked as favourite
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* textSearch (string) - Filter fields by this pattern

### clickstream.get
Retrieve the latest list of events of this account. Limited to last 100.


```js
clickmeter.clickstream.get({}, context)
```

#### Parameters
* group (integer) - Filter by this group id (mutually exclusive with "datapoint" and "conversion")
* datapoint (integer) - Filter by this datapoint id (mutually exclusive with "group" and "conversion")
* conversion (integer) - Filter by this conversion id (mutually exclusive with "datapoint" and "group")
* pageSize (integer) - Limit results to this number
* filter (string) - Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

### conversions.get
Retrieve a list of conversions


```js
clickmeter.conversions.get({}, context)
```

#### Parameters
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* status (string) - Status of conversion ("deleted"/"active")
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude conversions created before this date (YYYYMMDD)
* createdBefore (string) - Exclude conversions created after this date (YYYYMMDD)

### conversions.post
Create a conversion


```js
clickmeter.conversions.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### conversions.aggregated.list.get
Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)


```js
clickmeter.conversions.aggregated.list.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* status (string) - Status of conversion ("deleted"/"active")
* groupBy (string) - The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

### conversions.count.get
Retrieve a count of conversions


```js
clickmeter.conversions.count.get({}, context)
```

#### Parameters
* status (string) - Status of conversion ("deleted"/"active")
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude conversions created before this date (YYYYMMDD)
* createdBefore (string) - Exclude conversions created after this date (YYYYMMDD)

### conversions.conversionId.delete
Delete conversion specified by id


```js
clickmeter.conversions.conversionId.delete({
  "conversionId": 0
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion

### conversions.conversionId.get
Retrieve conversion specified by id


```js
clickmeter.conversions.conversionId.get({
  "conversionId": 0
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion

### conversions.conversionId.post
Update conversion specified by id


```js
clickmeter.conversions.conversionId.post({
  "conversionId": 0,
  "value": {}
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* value (object) **required**

### conversions.conversionId.aggregated.get
Retrieve statistics about this conversion for a timeframe


```js
clickmeter.conversions.conversionId.aggregated.get({
  "conversionId": 0,
  "timeFrame": ""
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* tag (string) - Filter by this tag name
* favourite (boolean) - Is the datapoint marked as favourite
* hourly (boolean) - If using "yesterday" or "today" timeframe you can ask for the hourly detail

### conversions.conversionId.aggregated.list.get
Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.conversions.conversionId.aggregated.list.get({
  "conversionId": 0,
  "timeFrame": ""
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* groupBy (string) - The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

### conversions.conversionId.datapoints.get
Retrieve a list of datapoints connected to this conversion


```js
clickmeter.conversions.conversionId.datapoints.get({
  "conversionId": 0
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* type (string) - Type of datapoint ("tl"/"tp")
* status (string) - Status of datapoint ("deleted"/"active"/"paused"/"spam")
* tags (string) - Filter by this tag name
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### conversions.conversionId.datapoints.batch.patch.put
Modify the association between a conversion and multiple datapoints


```js
clickmeter.conversions.conversionId.datapoints.batch.patch.put({
  "conversionId": 0,
  "data": {}
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* data (object) **required**

### conversions.conversionId.datapoints.count.get
Retrieve a count of datapoints connected to this conversion


```js
clickmeter.conversions.conversionId.datapoints.count.get({
  "conversionId": 0
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* type (string) - Type of datapoint ("tl"/"tp")
* status (string) - Status of datapoint ("deleted"/"active"/"paused"/"spam")
* tags (string) - Filter by this tag name
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### conversions.conversionId.datapoints.patch.put
Modify the association between a conversion and a datapoint


```js
clickmeter.conversions.conversionId.datapoints.patch.put({
  "conversionId": 0,
  "data": {}
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* data (object) **required**

### conversions.conversionId.hits.get
Retrieve the list of events related to this conversion.


```js
clickmeter.conversions.conversionId.hits.get({
  "conversionId": 0,
  "timeframe": ""
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* limit (integer) - Limit results to this number
* offset (string) - Offset where to start from (it's the lastKey field in the response object)
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* filter (string) - Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

### conversions.conversionId.notes.put
Fast patch the "notes" field of a conversion


```js
clickmeter.conversions.conversionId.notes.put({
  "conversionId": 0,
  "note": {}
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* note (object) **required**

### conversions.conversionId.reports.get
Retrieve a top report connected to this conversion


```js
clickmeter.conversions.conversionId.reports.get({
  "conversionId": 0,
  "type": "",
  "timeframe": ""
}, context)
```

#### Parameters
* conversionId (integer) **required** - Id of the conversion
* type (string) **required** - Type of the report.
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* hittype (string) - Type of the event you want to filter this report with. By default no filter is applied.
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

### datapoints.get
List of all the datapoints associated to the user


```js
clickmeter.datapoints.get({}, context)
```

#### Parameters
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.
* type (string) - Type of the datapoint ("tp"/"tl")
* status (string) - Status of the datapoint
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* onlyFavorites (boolean) - Filter fields by favourite status
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### datapoints.post
Create a datapoint


```js
clickmeter.datapoints.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### datapoints.aggregated.get
Retrieve statistics about this customer for a timeframe by groups


```js
clickmeter.datapoints.aggregated.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* type (string) - Type of datapoint ("tl"/"tp")
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* hourly (boolean) - If using "yesterday" or "today" timeframe you can ask for the hourly detail
* status (string) - Status of datapoint ("deleted"/"active"/"paused"/"spam")
* tag (string) - A comma separated list of tags you want to filter with.
* favourite (boolean) - Is the datapoint is marked as favourite

### datapoints.aggregated.list.get
Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.datapoints.aggregated.list.get({
  "type": "",
  "timeFrame": ""
}, context)
```

#### Parameters
* type (string) **required** - Type of datapoint ("tl"/"tp")
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* status (string) - Status of datapoint ("deleted"/"active"/"paused"/"spam")
* tag (string) - A comma separated list of tags you want to filter with.
* favourite (boolean) - Is the datapoint is marked as favourite
* groupBy (string) - The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

### datapoints.batch.delete
Delete multiple datapoints


```js
clickmeter.datapoints.batch.delete({
  "batch": {}
}, context)
```

#### Parameters
* batch (object) **required**

### datapoints.batch.post
Update multiple datapoints


```js
clickmeter.datapoints.batch.post({
  "batch": {}
}, context)
```

#### Parameters
* batch (object) **required**

### datapoints.batch.put
Create multiple datapoints


```js
clickmeter.datapoints.batch.put({
  "batch": {}
}, context)
```

#### Parameters
* batch (object) **required**

### datapoints.count.get
Count the datapoints associated to the user


```js
clickmeter.datapoints.count.get({}, context)
```

#### Parameters
* type (string) - Type of the datapoint ("tp"/"tl")
* status (string) - Status of the datapoint
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* onlyFavorites (boolean) - Filter fields by favourite status
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### datapoints.id.delete
Delete a datapoint


```js
clickmeter.datapoints.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the datapoint

### datapoints.id.get
Get a datapoint


```js
clickmeter.datapoints.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the datapoint

### datapoints.id.post
Update a datapoint


```js
clickmeter.datapoints.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Parameters
* id (integer) **required** - The id of the datapoint
* value (object) **required**

### datapoints.id.aggregated.get
Retrieve statistics about this datapoint for a timeframe


```js
clickmeter.datapoints.id.aggregated.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the datapoint
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* hourly (boolean) - If using "yesterday" or "today" timeframe you can ask for the hourly detail

### datapoints.id.aggregated.list.get
Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.datapoints.id.aggregated.list.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the datapoint
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* groupBy (string) - The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

### datapoints.id.favourite.put
Fast switch the "favourite" field of a datapoint


```js
clickmeter.datapoints.id.favourite.put({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of the datapoint

### datapoints.id.hits.get
Retrieve the list of events related to this datapoint.


```js
clickmeter.datapoints.id.hits.get({
  "id": 0,
  "timeframe": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the datapoint
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* limit (integer) - Limit results to this number
* offset (string) - Offset where to start from (it's the lastKey field in the response object)
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* filter (string) - Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

### datapoints.id.notes.put
Fast patch the "notes" field of a datapoint


```js
clickmeter.datapoints.id.notes.put({
  "id": 0,
  "note": {}
}, context)
```

#### Parameters
* id (integer) **required** - Id of the datapoint
* note (object) **required**

### datapoints.id.reports.get
Retrieve a top report connected to this datapoint


```js
clickmeter.datapoints.id.reports.get({
  "id": 0,
  "type": "",
  "timeframe": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the datapoint
* type (string) **required** - Type of the report.
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

### domains.get
Retrieve a list of domains


```js
clickmeter.domains.get({}, context)
```

#### Parameters
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* type (string) - Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
* name (string) - Filter domains with this anmen

### domains.post
Create a domain


```js
clickmeter.domains.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### domains.count.get
Retrieve count of domains


```js
clickmeter.domains.count.get({}, context)
```

#### Parameters
* type (string) - Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
* name (string) - Filter domains with this anmen

### domains.id.delete
Delete a domain


```js
clickmeter.domains.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of domain

### domains.id.get
Get a domain


```js
clickmeter.domains.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of domain

### domains.id.post
Update a domain


```js
clickmeter.domains.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Parameters
* id (integer) **required** - Id of domain
* value (object) **required**

### groups.get
List of all the groups associated to the user.


```js
clickmeter.groups.get({}, context)
```

#### Parameters
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.
* status (string) - Status of the group
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude groups created before this date (YYYYMMDD)
* createdBefore (string) - Exclude groups created after this date (YYYYMMDD)
* write (boolean) - Write permission

### groups.post
Create a group


```js
clickmeter.groups.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### groups.aggregated.get
Retrieve statistics about this customer for a timeframe by groups


```js
clickmeter.groups.aggregated.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* hourly (boolean) - If using "yesterday" or "today" timeframe you can ask for the hourly detail
* status (string) - Status of group ("deleted"/"active")
* tag (string) - A comma separated list of tags you want to filter with.
* favourite (boolean) - Is the group is marked as favourite

### groups.aggregated.list.get
Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.groups.aggregated.list.get({
  "timeFrame": ""
}, context)
```

#### Parameters
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* status (string) - Status of group ("deleted"/"active")
* tag (string) - A comma separated list of tags you want to filter with.
* favourite (boolean) - Is the group is marked as favourite
* groupBy (string) - The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

### groups.count.get
Count the groups associated to the user.


```js
clickmeter.groups.count.get({}, context)
```

#### Parameters
* status (string) - Status of the datapoint
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude groups created before this date (YYYYMMDD)
* createdBefore (string) - Exclude groups created after this date (YYYYMMDD)
* write (boolean) - Write permission

### groups.id.delete
Delete group specified by id


```js
clickmeter.groups.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group

### groups.id.get
Get a group


```js
clickmeter.groups.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the group

### groups.id.post
Update a group


```js
clickmeter.groups.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Parameters
* id (integer) **required** - The id of the group
* value (object) **required**

### groups.id.aggregated.get
Retrieve statistics about this group for a timeframe


```js
clickmeter.groups.id.aggregated.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* hourly (boolean) - If using "yesterday" or "today" timeframe you can ask for the hourly detail

### groups.id.aggregated.list.get
Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)


```js
clickmeter.groups.id.aggregated.list.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* groupBy (string) - The temporal entity you want to group by ("week"/"month"). If unspecified is "day".

### groups.id.aggregated.summary.get
Retrieve statistics about a subset of datapoints for a timeframe with datapoints data


```js
clickmeter.groups.id.aggregated.summary.get({
  "id": 0,
  "timeFrame": ""
}, context)
```

#### Parameters
* id (integer) **required** - Filter by this group id
* timeFrame (string) **required** - Timeframe of the request. See list at $timeframeList
* type (string) - Type of datapoint ("tl"/"tp")
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* status (string) - Status of datapoint ("deleted"/"active"/"paused"/"spam")
* tag (string) - A comma separated list of tags you want to filter with.
* favourite (boolean) - Is the datapoint marked as favourite
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* offset (integer) - Offset where to start from
* limit (integer) - Limit results to this number
* textSearch (string) - Filter fields by this pattern

### groups.id.datapoints.get
List of all the datapoints associated to the user in this group.


```js
clickmeter.groups.id.datapoints.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.
* type (string) - Type of the datapoint ("tp"/"tl")
* status (string) - Status of the datapoint
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* onlyFavorites (boolean) - Filter fields by favourite status
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### groups.id.datapoints.post
Create a datapoint in this group


```js
clickmeter.groups.id.datapoints.post({
  "id": 0,
  "value": {}
}, context)
```

#### Parameters
* id (integer) **required** - The id of the group
* value (object) **required**

### groups.id.datapoints.count.get
Count the datapoints associated to the user in this group.


```js
clickmeter.groups.id.datapoints.count.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* type (string) - Type of the datapoint ("tp"/"tl")
* status (string) - Status of the datapoint
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* onlyFavorites (boolean) - Filter fields by favourite status
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### groups.id.favourite.put
Fast switch the "favourite" field of a group


```js
clickmeter.groups.id.favourite.put({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group

### groups.id.hits.get
Retrieve the list of events related to this group.


```js
clickmeter.groups.id.hits.get({
  "id": 0,
  "timeframe": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* limit (integer) - Limit results to this number
* offset (string) - Offset where to start from (it's the lastKey field in the response object)
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* filter (string) - Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

### groups.id.notes.put
Fast patch the "notes" field of a group


```js
clickmeter.groups.id.notes.put({
  "id": 0,
  "note": {}
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* note (object) **required**

### groups.id.reports.get
Retrieve a top report connected to this group


```js
clickmeter.groups.id.reports.get({
  "id": 0,
  "type": "",
  "timeframe": ""
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* type (string) **required** - Type of the report.
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* hittype (string) - Type of the event you want to filter this report with. By default no filter is applied.
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

### hits.get
Retrieve the list of events related to this account.


```js
clickmeter.hits.get({
  "timeframe": ""
}, context)
```

#### Parameters
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* limit (integer) - Limit results to this number
* offset (string) - Offset where to start from (it's the lastKey field in the response object)
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
* filter (string) - Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")

### me.get
Retrieve current account data


```js
clickmeter.me.get(null, context)
```

#### Parameters
*This action has no parameters*

### me.plan.get
Retrieve current account plan


```js
clickmeter.me.plan.get(null, context)
```

#### Parameters
*This action has no parameters*

### reports.get
Retrieve a top report


```js
clickmeter.reports.get({
  "type": "",
  "timeframe": ""
}, context)
```

#### Parameters
* type (string) **required** - Type of the report.
* timeframe (string) **required** - Timeframe of the request. See list at $timeframeList
* hittype (string) - Type of the event you want to filter this report with. By default no filter is applied.
* group (integer) - Filter by this group id (mutually exclusive with "datapoint" and "conversion")
* datapoint (integer) - Filter by this datapoint id (mutually exclusive with "group" and "conversion")
* conversion (integer) - Filter by this conversion id (mutually exclusive with "datapoint" and "group")
* fromDay (string) - If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
* toDay (string) - If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)

### retargeting.get
List of all the retargeting scripts associated to the user


```js
clickmeter.retargeting.get({}, context)
```

#### Parameters
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.

### retargeting.post
Creates a retargeting script


```js
clickmeter.retargeting.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### retargeting.count.get
Retrieve count of retargeting scripts


```js
clickmeter.retargeting.count.get(null, context)
```

#### Parameters
*This action has no parameters*

### retargeting.id.delete
Deletes a retargeting script (and remove associations)


```js
clickmeter.retargeting.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the retargeting script

### retargeting.id.get
Get a retargeting script object


```js
clickmeter.retargeting.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the retargeting script

### retargeting.id.post
Updates a retargeting script


```js
clickmeter.retargeting.id.post({
  "id": 0,
  "value": {}
}, context)
```

#### Parameters
* id (integer) **required** - The id of the retargeting script
* value (object) **required**

### retargeting.id.datapoints.get
List of all the datapoints associated to the retargeting script.


```js
clickmeter.retargeting.id.datapoints.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of the retargeting script
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.
* status (string) - Status of the datapoint
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* onlyFavorites (boolean) - Filter fields by favourite status
* sortBy (string) - Field to sort by
* sortDirection (string) - Direction of sort "asc" or "desc"
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### retargeting.id.datapoints.count.get
Count the datapoints associated to the retargeting script.


```js
clickmeter.retargeting.id.datapoints.count.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of the group
* status (string) - Status of the datapoint
* tags (string) - A comma separated list of tags you want to filter with.
* textSearch (string) - Filter fields by this pattern
* onlyFavorites (boolean) - Filter fields by favourite status
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### tags.get
List of all the groups associated to the user filtered by this tag.


```js
clickmeter.tags.get({}, context)
```

#### Parameters
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.
* name (string) - Name of the tag
* datapoints (string) - Comma separated list of datapoints id to filter by
* groups (string) - Comma separated list of groups id to filter by
* type (string) - Type of entity related to the tag

### tags.post
Create a tag


```js
clickmeter.tags.post({
  "value": {}
}, context)
```

#### Parameters
* value (object) **required**

### tags.count.get
List of all the groups associated to the user filtered by this tag.


```js
clickmeter.tags.count.get({}, context)
```

#### Parameters
* name (string) - Name of the tag
* datapoints (string) - Comma separated list of datapoints id to filter by
* groups (string) - Comma separated list of groups id to filter by
* type (string) - Type of entity related to the tag

### tags.tagId.delete
Delete a tag


```js
clickmeter.tags.tagId.delete({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag

### tags.tagId.get
Retrieve a tag


```js
clickmeter.tags.tagId.get({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag

### tags.tagId.datapoints.delete
Delete the association of this tag with all datapoints


```js
clickmeter.tags.tagId.datapoints.delete({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag

### tags.tagId.datapoints.get
List of all the datapoints associated to the user filtered by this tag


```js
clickmeter.tags.tagId.datapoints.get({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag.
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.
* type (string) - Type of the datapoint ("tp"/"tl")
* status (string) - Status of the datapoint
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### tags.tagId.datapoints.count.get
Count the datapoints associated to the user filtered by this tag


```js
clickmeter.tags.tagId.datapoints.count.get({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag.
* type (string) - Type of the datapoint ("tp"/"tl")
* status (string) - Status of the datapoint
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude datapoints created before this date (YYYYMMDD)
* createdBefore (string) - Exclude datapoints created after this date (YYYYMMDD)

### tags.tagId.datapoints.patch.put
Associate/Deassociate a tag with a datapoint


```js
clickmeter.tags.tagId.datapoints.patch.put({
  "tagId": 0,
  "data": {}
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag
* data (object) **required**

### tags.tagId.groups.delete
Delete the association of this tag with all groups


```js
clickmeter.tags.tagId.groups.delete({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag

### tags.tagId.groups.get
List of all the groups associated to the user filtered by this tag.


```js
clickmeter.tags.tagId.groups.get({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag.
* offset (integer) - Where to start when retrieving elements. Default is 0 if not specified.
* limit (integer) - Maximum elements to retrieve. Default to 20 if not specified.
* status (string) - Status of the datapoint
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude groups created before this date (YYYYMMDD)
* createdBefore (string) - Exclude groups created after this date (YYYYMMDD)

### tags.tagId.groups.count.get
Count the groups associated to the user filtered by this tag


```js
clickmeter.tags.tagId.groups.count.get({
  "tagId": 0
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag.
* status (string) - Status of the datapoint
* textSearch (string) - Filter fields by this pattern
* createdAfter (string) - Exclude groups created before this date (YYYYMMDD)
* createdBefore (string) - Exclude groups created after this date (YYYYMMDD)

### tags.tagId.groups.patch.put
Associate/Deassociate a tag with a group


```js
clickmeter.tags.tagId.groups.patch.put({
  "tagId": 0,
  "data": {}
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag
* data (object) **required**

### tags.tagId.name.put
Fast patch a tag name


```js
clickmeter.tags.tagId.name.put({
  "tagId": 0,
  "data": {}
}, context)
```

#### Parameters
* tagId (integer) **required** - Id of the tag
* data (object) **required**

