# @datafire/transitfeeds

Client library for TransitFeeds

## Installation and Usage
```bash
npm install --save @datafire/transitfeeds
```
```js
let transitfeeds = require('@datafire/transitfeeds').create();

transitfeeds.getFeedVersions({
  "key": ""
}).then(data => {
  console.log(data);
});
```

## Description

API to view feed information and download feeds from TransitFeeds.com


## Actions

### getFeedVersions
This API call allows you to easily see every single feed update in the TranstiFeeds.com system. Since this can be quite
long, it's also possible to filter this list by a single feed ID.



```js
transitfeeds.getFeedVersions({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your personal API key, used for authentication.
  * feed `string`: If you only want to retrieve feed versions for a particular feed, include its ID here. You can use the `/getFeeds` call to discover feed IDs.
  * page `integer`: The page number of results to return. For example, if you specify a `page` of `2` with a `limit` of 10, then results 11-20 are returned.
  * limit `integer`: The maximum number of results to return..
  * err `integer` (values: 0, 1): To include any errors detected when importing this feed in the response, specify a valud of `1`.
  * warn `integer` (values: 0, 1): To include any warnings detected when importing this feed in the response, specify a valud of `1`.

#### Output
* output [GetFeedVersionsResponse](#getfeedversionsresponse)

### getFeeds
Used this API to retrieve a list of feeds in the system. Doing so can be usedful to discover feed IDs that
can be used in other API calls.



```js
transitfeeds.getFeeds({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your personal API key, used for authentication.
  * location `integer`: This is the unique ID of a location. If specified, feeds will only be returned that belong to this location
  * descendants `integer` (values: 0, 1): If a location is specified in `location`, this flag can be used to control if returned feeds must be assigned directly to the location, or if feeds belonging to sub-locations can also be returned. If `0`, then feeds must be assigned directly to the specified location.
  * page `integer`: The page number of results to return. For example, if you specify a `page` of `2` with a `limit` of 10, then results 11-20 are returned.
  * limit `integer`: The maximum number of results to return..
  * type `string` (values: gtfs, gtfsrealtime): The type of feeds to return. If unspecified, feeds of all types are returned.

#### Output
* output [GetFeedsResponse](#getfeedsresponse)

### getLatestFeedVersion
Once you have used `/getFeeds` to discover a feed's URL, you can use this endpoint to download its latest version from TranstiFeeds.
It will be unmodified in the original format from the provider.



```js
transitfeeds.getLatestFeedVersion({
  "key": "",
  "feed": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your personal API key, used for authentication.
  * feed **required** `string`: The ID of the feed to retrieve the latest feed version for. You can use the `/getFeeds` call to discover feed IDs.

#### Output
* output [GetLatestFeedVersionResponse](#getlatestfeedversionresponse)

### getLocations
Retrieve a list of locations. Each location (except for the root) has a parent location, and each
location has zero or more child locations. This hierarchy is generally structured so countries contain
states, states contain cities (although this typically depends on the country).



```js
transitfeeds.getLocations({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Your personal API key, used for authentication.

#### Output
* output [GetLocationsResponse](#getlocationsresponse)



## Definitions

### API401Response
* API401Response `object`: This eleent contains information about a 401 Unauthorized error.
  * msg `string`: Description of the error.
  * status `string` (values: INVALIDKEY, PERMISSIONDENIED): Indicates the status of this request.
  * ts `integer`: Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).

### API404Response
* API404Response `object`: This eleent contains information about a 404 File Not Found error.
  * msg `string`: Description of the error.
  * status `string` (values: INVALIDMETHOD): Indicates the status of this request.
  * ts `integer`: Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).

### Feed
* Feed `object`: Contains the information about a single feed.
  * id **required** `string`: The unique ID for this feed. This is constructed using the ID of the feed's provider and an internal ID. This ID
  * l **required** [Location](#location)
  * latest `object`: If available, contains information about the latest version of this feed. This can help to determine if you need to call
    * ts `integer`: Indicates the timestamp of the latest feed version (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).
  * t **required** `string`: The title of the feed as it appears on TransitFeeds.com
  * ty **required** `string` (values: gtfs, gtfsrealtime): The type of feed (such as GTFS or GTFS-realtime).
  * u `object`: Contains URLs with additional information about this feed.
    * d `string`: If available, this contains a URL to download the feed directly from the provider (as opposed to downloading from TransitFeeds.com).
    * i `string`: If available, this contains a URL with additional information about registering or downloading the feed from the provider.

### FeedVersion
* FeedVersion `object`: Contains the information about a single feed version.
  * d `object`: Contains the start/finish dates for this feed version, if available.
    * f `string`: The start date of the feed version, in `YYYYMMDD` format.
    * s `string`: The start date of the feed version, in `YYYYMMDD` format.
  * err `array`: If you have included an `err` value of `1` in your request, then any errors detected when importing this feed version are included.
    * items [FeedVersionIssue](#feedversionissue)
  * f **required** [Feed](#feed)
  * id **required** `string`: The unique ID for this feed. This is constructed using the feed ID and an internal ID (generally the date it was imported, but not always, so do not rely on this).
  * size **required** `integer`: The filesize in bytes of the feed version when compressed.
  * ts **required** `integer`: The timestamp of when this feed version was registered in the TransitFeeds.com system (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).
  * url **required** `string`: This is the URL to directly download the feed version via the TranstiFeeds.com web site (and not via the API). In other words,
  * warn `array`: If you have included a `warn` value of `1` in your request, then any warnings detected when importing this feed version are included.
    * items [FeedVersionIssue](#feedversionissue)

### FeedVersionIssue
* FeedVersionIssue `object`: Contains the information about a single error or warning associated with a feed version.
  * c `string`: The column name (if referring to a GTFS file / CSV file) associated with the issue.
  * f `string`: The filename associated with this issue.
  * l `string`: The line number in the given file associated with the issue.
  * m `string`: A description of the issue.

### GetFeedVersionsResponse
* GetFeedVersionsResponse `object`: This element contains the response for a `/getFeedVersions` request.
  * msg `string`: Description of the error, if the `status` value was not `OK`.
  * results `object`: Contains requested data for a valid request.
    * feeds `array`: An array of zero or more feed versions.
      * items [FeedVersion](#feedversion)
    * input `string`: If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field.
    * limit `integer`: The maximum number of feed versions that can be returned in this response. If the final page is being
    * numPages `integer`: The number of pages available, based on the `total` and `limit`.
    * page `integer`: The page number being requested, based on the maximum number than can be returned from in `limit`.
    * total `integer`: The total number of feed versions found based on the request input. Note that this number may be larger
  * status `string` (values: OK, EMPTYKEY, MISSINGINPUT, INVALIDINPUT): Indicates the success status of this request. The following values are possible:
  * ts `integer`: Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).

### GetFeedsResponse
* GetFeedsResponse `object`: This element contains the response for a `/getFeeds` request.
  * msg `string`: Description of the error, if the `status` value was not `OK`.
  * results `object`: Contains requested data for a valid request.
    * feeds `array`: An array of zero or more feeds.
      * items [Feed](#feed)
    * input `string`: If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field.
    * limit `integer`: The maximum number of feeds that can be returned in this response. If the final page is being
    * numPages `integer`: The number of pages available, based on the `total` and `limit`.
    * page `integer`: The page number being requested, based on the maximum number than can be returned from in `limit`.
    * total `integer`: The total number of feeds found based on the request input. Note that this number may be larger
  * status `string` (values: OK, EMPTYKEY, MISSINGINPUT, INVALIDINPUT): Indicates the success status of this request. The following values are possible:
  * ts `integer`: Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).

### GetLatestFeedVersionResponse
* GetLatestFeedVersionResponse `object`: This element contains the response for a `/getLatestFeedVersion` request.
  * msg `string`: Description of the error, if the `status` value was not `OK`.
  * results `object`: Contains requested data for a valid request.
    * feeds `array`: An array of zero or more feed versions.
      * items [FeedVersion](#feedversion)
    * input `string`: If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field.
    * limit `integer`: The maximum number of feed versions that can be returned in this response. If the final page is being
    * numPages `integer`: The number of pages available, based on the `total` and `limit`.
    * page `integer`: The page number being requested, based on the maximum number than can be returned from in `limit`.
    * total `integer`: The total number of feed versions found based on the request input. Note that this number may be larger
  * status `string` (values: OK, EMPTYKEY, MISSINGINPUT, INVALIDINPUT, OTHER): Indicates the success status of this request. The following values are possible:
  * ts `integer`: Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).

### GetLocationsResponse
* GetLocationsResponse `object`: This element contains the response for a `/getLocations` request.
  * msg `string`: Description of the error, if the `status` value was not `OK`.
  * results `object`: Contains requested data for a valid request.
    * input `string`: If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field.
    * locations `array`: An array of zero or more locations.
      * items [Location](#location)
  * status `string` (values: OK, EMPTYKEY, MISSINGINPUT, INVALIDINPUT): Indicates the success status of this request. The following values are possible:
  * ts `integer`: Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).

### Location
* Location `object`: Contains the information about a single location.
  * id **required** `integer`: The unique ID for this location.
  * lat **required** `number`: The latitude of the approximate point of this location.
  * lng **required** `number`: The longitude of the approximate point of this location.
  * n **required** `string`: The title of this location on its own (i.e. without any state or country information).
  * pid **required** `integer`: The ID for the parent location. If a location has no parent this value is `0`.
  * t **required** `string`: The title of this location. This may include state/province and country, depending


