# @datafire/google_doubleclickbidmanager

Client library for DoubleClick Bid Manager

## Installation and Usage
```bash
npm install --save @datafire/google_doubleclickbidmanager
```
```js
let google_doubleclickbidmanager = require('@datafire/google_doubleclickbidmanager').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_doubleclickbidmanager.sdf.download({}).then(data => {
  console.log(data);
});
```

## Description

API for viewing and managing your reports in DoubleClick Bid Manager.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_doubleclickbidmanager.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_doubleclickbidmanager.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### lineitems.downloadlineitems
Retrieves line items in CSV format. TrueView line items are not supported.


```js
google_doubleclickbidmanager.lineitems.downloadlineitems({}, context)
```

#### Input
* input `object`
  * body [DownloadLineItemsRequest](#downloadlineitemsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DownloadLineItemsResponse](#downloadlineitemsresponse)

### lineitems.uploadlineitems
Uploads line items in CSV format. TrueView line items are not supported.


```js
google_doubleclickbidmanager.lineitems.uploadlineitems({}, context)
```

#### Input
* input `object`
  * body [UploadLineItemsRequest](#uploadlineitemsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [UploadLineItemsResponse](#uploadlineitemsresponse)

### queries.listqueries
Retrieves stored queries.


```js
google_doubleclickbidmanager.queries.listqueries({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ListQueriesResponse](#listqueriesresponse)

### reports.listreports
Retrieves stored reports.


```js
google_doubleclickbidmanager.reports.listreports({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * queryId **required** `string`: Query ID with which the reports are associated.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ListReportsResponse](#listreportsresponse)

### queries.createquery
Creates a query.


```js
google_doubleclickbidmanager.queries.createquery({}, context)
```

#### Input
* input `object`
  * body [Query](#query)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Query](#query)

### queries.deletequery
Deletes a stored query as well as the associated stored reports.


```js
google_doubleclickbidmanager.queries.deletequery({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * queryId **required** `string`: Query ID to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### queries.getquery
Retrieves a stored query.


```js
google_doubleclickbidmanager.queries.getquery({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * queryId **required** `string`: Query ID to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Query](#query)

### queries.runquery
Runs a stored query to generate a report.


```js
google_doubleclickbidmanager.queries.runquery({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * body [RunQueryRequest](#runqueryrequest)
  * queryId **required** `string`: Query ID to run.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### sdf.download
Retrieves entities in SDF format.


```js
google_doubleclickbidmanager.sdf.download({}, context)
```

#### Input
* input `object`
  * body [DownloadRequest](#downloadrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DownloadResponse](#downloadresponse)



## Definitions

### DownloadLineItemsRequest
* DownloadLineItemsRequest `object`: Request to fetch stored line items.
  * fileSpec `string` (values: EWF): File specification (column names, types, order) in which the line items will be returned. Default to EWF.
  * filterIds `array`: Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned.
    * items `string`
  * filterType `string` (values: ADVERTISER_ID, INSERTION_ORDER_ID, LINE_ITEM_ID): Filter type used to filter line items to fetch.
  * format `string` (values: CSV): Format in which the line items will be returned. Default to CSV.

### DownloadLineItemsResponse
* DownloadLineItemsResponse `object`: Download line items response.
  * lineItems `string`: Retrieved line items in CSV format. For more information about file formats, see  Entity Write File Format.

### DownloadRequest
* DownloadRequest `object`: Request to fetch stored insertion orders, line items, TrueView ad groups and ads.
  * fileTypes `array`: File types that will be returned.
    * items `string` (values: AD, AD_GROUP, CAMPAIGN, INSERTION_ORDER, LINE_ITEM)
  * filterIds `array`: The IDs of the specified filter type. This is used to filter entities to fetch. At least one ID must be specified. Only one ID is allowed for the ADVERTISER_ID filter type. For INSERTION_ORDER_ID or LINE_ITEM_ID filter types, all IDs must be from the same Advertiser.
    * items `string`
  * filterType `string` (values: ADVERTISER_ID, CAMPAIGN_ID, INSERTION_ORDER_ID, LINE_ITEM_ID): Filter type used to filter line items to fetch.
  * version `string`: SDF Version (column names, types, order) in which the entities will be returned. Default to 3.

### DownloadResponse
* DownloadResponse `object`: Download response.
  * adGroups `string`: Retrieved ad groups in SDF format.
  * ads `string`: Retrieved ads in SDF format.
  * campaigns `string`: Retrieved campaigns in SDF format.
  * insertionOrders `string`: Retrieved insertion orders in SDF format.
  * lineItems `string`: Retrieved line items in SDF format.

### FilterPair
* FilterPair `object`: Filter used to match traffic data in your report.
  * type `string` (values: FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY, FILTER_ACTIVITY_ID, FILTER_ADVERTISER, FILTER_ADVERTISER_CURRENCY, FILTER_ADVERTISER_TIMEZONE, FILTER_AD_POSITION, FILTER_AGE, FILTER_BRANDSAFE_CHANNEL_ID, FILTER_BROWSER, FILTER_BUDGET_SEGMENT_DESCRIPTION, FILTER_CAMPAIGN_DAILY_FREQUENCY, FILTER_CARRIER, FILTER_CHANNEL_ID, FILTER_CITY, FILTER_COMPANION_CREATIVE_ID, FILTER_CONVERSION_DELAY, FILTER_COUNTRY, FILTER_CREATIVE_HEIGHT, FILTER_CREATIVE_ID, FILTER_CREATIVE_SIZE, FILTER_CREATIVE_TYPE, FILTER_CREATIVE_WIDTH, FILTER_DATA_PROVIDER, FILTER_DATE, FILTER_DAY_OF_WEEK, FILTER_DFP_ORDER_ID, FILTER_DMA, FILTER_EXCHANGE_ID, FILTER_FLOODLIGHT_PIXEL_ID, FILTER_GENDER, FILTER_INSERTION_ORDER, FILTER_INVENTORY_FORMAT, FILTER_INVENTORY_SOURCE, FILTER_INVENTORY_SOURCE_TYPE, FILTER_KEYWORD, FILTER_LINE_ITEM, FILTER_LINE_ITEM_DAILY_FREQUENCY, FILTER_LINE_ITEM_LIFETIME_FREQUENCY, FILTER_LINE_ITEM_TYPE, FILTER_MEDIA_PLAN, FILTER_MOBILE_DEVICE_MAKE, FILTER_MOBILE_DEVICE_MAKE_MODEL, FILTER_MOBILE_DEVICE_TYPE, FILTER_MOBILE_GEO, FILTER_MONTH, FILTER_MRAID_SUPPORT, FILTER_NIELSEN_AGE, FILTER_NIELSEN_COUNTRY_CODE, FILTER_NIELSEN_DEVICE_ID, FILTER_NIELSEN_GENDER, FILTER_NOT_SUPPORTED, FILTER_ORDER_ID, FILTER_OS, FILTER_PAGE_CATEGORY, FILTER_PAGE_LAYOUT, FILTER_PARTNER, FILTER_PARTNER_CURRENCY, FILTER_PUBLIC_INVENTORY, FILTER_QUARTER, FILTER_REGION, FILTER_REGULAR_CHANNEL_ID, FILTER_SITE_ID, FILTER_SITE_LANGUAGE, FILTER_SKIPPABLE_SUPPORT, FILTER_TARGETED_USER_LIST, FILTER_TIME_OF_DAY, FILTER_TRUEVIEW_AD_GROUP_AD_ID, FILTER_TRUEVIEW_AD_GROUP_ID, FILTER_TRUEVIEW_AGE, FILTER_TRUEVIEW_CATEGORY, FILTER_TRUEVIEW_CITY, FILTER_TRUEVIEW_CONVERSION_TYPE, FILTER_TRUEVIEW_COUNTRY, FILTER_TRUEVIEW_CUSTOM_AFFINITY, FILTER_TRUEVIEW_DMA, FILTER_TRUEVIEW_GENDER, FILTER_TRUEVIEW_IAR_AGE, FILTER_TRUEVIEW_IAR_CATEGORY, FILTER_TRUEVIEW_IAR_CITY, FILTER_TRUEVIEW_IAR_COUNTRY, FILTER_TRUEVIEW_IAR_GENDER, FILTER_TRUEVIEW_IAR_INTEREST, FILTER_TRUEVIEW_IAR_LANGUAGE, FILTER_TRUEVIEW_IAR_PARENTAL_STATUS, FILTER_TRUEVIEW_IAR_REGION, FILTER_TRUEVIEW_IAR_REMARKETING_LIST, FILTER_TRUEVIEW_IAR_TIME_OF_DAY, FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL, FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO, FILTER_TRUEVIEW_IAR_ZIPCODE, FILTER_TRUEVIEW_INTEREST, FILTER_TRUEVIEW_KEYWORD, FILTER_TRUEVIEW_PARENTAL_STATUS, FILTER_TRUEVIEW_PLACEMENT, FILTER_TRUEVIEW_REGION, FILTER_TRUEVIEW_REMARKETING_LIST, FILTER_TRUEVIEW_URL, FILTER_TRUEVIEW_ZIPCODE, FILTER_UNKNOWN, FILTER_USER_LIST, FILTER_USER_LIST_FIRST_PARTY, FILTER_USER_LIST_THIRD_PARTY, FILTER_VIDEO_AD_POSITION_IN_STREAM, FILTER_VIDEO_COMPANION_SIZE, FILTER_VIDEO_COMPANION_TYPE, FILTER_VIDEO_CREATIVE_DURATION, FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE, FILTER_VIDEO_DURATION_SECONDS, FILTER_VIDEO_FORMAT_SUPPORT, FILTER_VIDEO_INVENTORY_TYPE, FILTER_VIDEO_PLAYER_SIZE, FILTER_VIDEO_RATING_TIER, FILTER_VIDEO_SKIPPABLE_SUPPORT, FILTER_VIDEO_VPAID_SUPPORT, FILTER_WEEK, FILTER_YEAR, FILTER_YOUTUBE_VERTICAL, FILTER_ZIP_CODE): Filter type.
  * value `string`: Filter value.

### ListQueriesResponse
* ListQueriesResponse `object`: List queries response.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".
  * queries `array`: Retrieved queries.
    * items [Query](#query)

### ListReportsResponse
* ListReportsResponse `object`: List reports response.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
  * reports `array`: Retrieved reports.
    * items [Report](#report)

### Parameters
* Parameters `object`: Parameters of a query or report.
  * filters `array`: Filters used to match traffic data in your report.
    * items [FilterPair](#filterpair)
  * groupBys `array`: Data is grouped by the filters listed in this field.
    * items `string` (values: FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY, FILTER_ACTIVITY_ID, FILTER_ADVERTISER, FILTER_ADVERTISER_CURRENCY, FILTER_ADVERTISER_TIMEZONE, FILTER_AD_POSITION, FILTER_AGE, FILTER_BRANDSAFE_CHANNEL_ID, FILTER_BROWSER, FILTER_BUDGET_SEGMENT_DESCRIPTION, FILTER_CAMPAIGN_DAILY_FREQUENCY, FILTER_CARRIER, FILTER_CHANNEL_ID, FILTER_CITY, FILTER_COMPANION_CREATIVE_ID, FILTER_CONVERSION_DELAY, FILTER_COUNTRY, FILTER_CREATIVE_HEIGHT, FILTER_CREATIVE_ID, FILTER_CREATIVE_SIZE, FILTER_CREATIVE_TYPE, FILTER_CREATIVE_WIDTH, FILTER_DATA_PROVIDER, FILTER_DATE, FILTER_DAY_OF_WEEK, FILTER_DFP_ORDER_ID, FILTER_DMA, FILTER_EXCHANGE_ID, FILTER_FLOODLIGHT_PIXEL_ID, FILTER_GENDER, FILTER_INSERTION_ORDER, FILTER_INVENTORY_FORMAT, FILTER_INVENTORY_SOURCE, FILTER_INVENTORY_SOURCE_TYPE, FILTER_KEYWORD, FILTER_LINE_ITEM, FILTER_LINE_ITEM_DAILY_FREQUENCY, FILTER_LINE_ITEM_LIFETIME_FREQUENCY, FILTER_LINE_ITEM_TYPE, FILTER_MEDIA_PLAN, FILTER_MOBILE_DEVICE_MAKE, FILTER_MOBILE_DEVICE_MAKE_MODEL, FILTER_MOBILE_DEVICE_TYPE, FILTER_MOBILE_GEO, FILTER_MONTH, FILTER_MRAID_SUPPORT, FILTER_NIELSEN_AGE, FILTER_NIELSEN_COUNTRY_CODE, FILTER_NIELSEN_DEVICE_ID, FILTER_NIELSEN_GENDER, FILTER_NOT_SUPPORTED, FILTER_ORDER_ID, FILTER_OS, FILTER_PAGE_CATEGORY, FILTER_PAGE_LAYOUT, FILTER_PARTNER, FILTER_PARTNER_CURRENCY, FILTER_PUBLIC_INVENTORY, FILTER_QUARTER, FILTER_REGION, FILTER_REGULAR_CHANNEL_ID, FILTER_SITE_ID, FILTER_SITE_LANGUAGE, FILTER_SKIPPABLE_SUPPORT, FILTER_TARGETED_USER_LIST, FILTER_TIME_OF_DAY, FILTER_TRUEVIEW_AD_GROUP_AD_ID, FILTER_TRUEVIEW_AD_GROUP_ID, FILTER_TRUEVIEW_AGE, FILTER_TRUEVIEW_CATEGORY, FILTER_TRUEVIEW_CITY, FILTER_TRUEVIEW_CONVERSION_TYPE, FILTER_TRUEVIEW_COUNTRY, FILTER_TRUEVIEW_CUSTOM_AFFINITY, FILTER_TRUEVIEW_DMA, FILTER_TRUEVIEW_GENDER, FILTER_TRUEVIEW_IAR_AGE, FILTER_TRUEVIEW_IAR_CATEGORY, FILTER_TRUEVIEW_IAR_CITY, FILTER_TRUEVIEW_IAR_COUNTRY, FILTER_TRUEVIEW_IAR_GENDER, FILTER_TRUEVIEW_IAR_INTEREST, FILTER_TRUEVIEW_IAR_LANGUAGE, FILTER_TRUEVIEW_IAR_PARENTAL_STATUS, FILTER_TRUEVIEW_IAR_REGION, FILTER_TRUEVIEW_IAR_REMARKETING_LIST, FILTER_TRUEVIEW_IAR_TIME_OF_DAY, FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL, FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO, FILTER_TRUEVIEW_IAR_ZIPCODE, FILTER_TRUEVIEW_INTEREST, FILTER_TRUEVIEW_KEYWORD, FILTER_TRUEVIEW_PARENTAL_STATUS, FILTER_TRUEVIEW_PLACEMENT, FILTER_TRUEVIEW_REGION, FILTER_TRUEVIEW_REMARKETING_LIST, FILTER_TRUEVIEW_URL, FILTER_TRUEVIEW_ZIPCODE, FILTER_UNKNOWN, FILTER_USER_LIST, FILTER_USER_LIST_FIRST_PARTY, FILTER_USER_LIST_THIRD_PARTY, FILTER_VIDEO_AD_POSITION_IN_STREAM, FILTER_VIDEO_COMPANION_SIZE, FILTER_VIDEO_COMPANION_TYPE, FILTER_VIDEO_CREATIVE_DURATION, FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE, FILTER_VIDEO_DURATION_SECONDS, FILTER_VIDEO_FORMAT_SUPPORT, FILTER_VIDEO_INVENTORY_TYPE, FILTER_VIDEO_PLAYER_SIZE, FILTER_VIDEO_RATING_TIER, FILTER_VIDEO_SKIPPABLE_SUPPORT, FILTER_VIDEO_VPAID_SUPPORT, FILTER_WEEK, FILTER_YEAR, FILTER_YOUTUBE_VERTICAL, FILTER_ZIP_CODE)
  * includeInviteData `boolean`: Whether to include data from Invite Media.
  * metrics `array`: Metrics to include as columns in your report.
    * items `string` (values: METRIC_ACTIVE_VIEW_AUDIBLE_VISIBLE_ON_COMPLETE_IMPRESSIONS, METRIC_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME, METRIC_ACTIVE_VIEW_DISTRIBUTION_UNMEASURABLE, METRIC_ACTIVE_VIEW_DISTRIBUTION_UNVIEWABLE, METRIC_ACTIVE_VIEW_DISTRIBUTION_VIEWABLE, METRIC_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_PCT_MEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_PCT_VIEWABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_AT_START, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_FIRST_QUAR, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_ON_COMPLETE, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_SECOND_QUAR, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_THIRD_QUAR, METRIC_ACTIVE_VIEW_PERCENT_VIEWABLE_FOR_TIME_THRESHOLD, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_AT_START, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_FIRST_QUAR, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_ON_COMPLETE, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_SECOND_QUAR, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_THIRD_QUAR, METRIC_ACTIVE_VIEW_UNMEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_UNVIEWABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_VIEWABLE_FOR_TIME_THRESHOLD, METRIC_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS, METRIC_BID_REQUESTS, METRIC_BILLABLE_COST_ADVERTISER, METRIC_BILLABLE_COST_PARTNER, METRIC_BILLABLE_COST_USD, METRIC_CLICKS, METRIC_CLICK_TO_POST_CLICK_CONVERSION_RATE, METRIC_COMSCORE_VCE_AUDIENCE_AVG_FREQUENCY, METRIC_COMSCORE_VCE_AUDIENCE_IMPRESSIONS, METRIC_COMSCORE_VCE_AUDIENCE_IMPRESSIONS_SHARE, METRIC_COMSCORE_VCE_AUDIENCE_REACH_PCT, METRIC_COMSCORE_VCE_AUDIENCE_SHARE_PCT, METRIC_COMSCORE_VCE_GROSS_RATING_POINTS, METRIC_COMSCORE_VCE_POPULATION, METRIC_COMSCORE_VCE_UNIQUE_AUDIENCE, METRIC_CONVERSIONS_PER_MILLE, METRIC_COOKIE_REACH_AVERAGE_IMPRESSION_FREQUENCY, METRIC_COOKIE_REACH_IMPRESSION_REACH, METRIC_CPM_FEE1_ADVERTISER, METRIC_CPM_FEE1_PARTNER, METRIC_CPM_FEE1_USD, METRIC_CPM_FEE2_ADVERTISER, METRIC_CPM_FEE2_PARTNER, METRIC_CPM_FEE2_USD, METRIC_CPM_FEE3_ADVERTISER, METRIC_CPM_FEE3_PARTNER, METRIC_CPM_FEE3_USD, METRIC_CPM_FEE4_ADVERTISER, METRIC_CPM_FEE4_PARTNER, METRIC_CPM_FEE4_USD, METRIC_CPM_FEE5_ADVERTISER, METRIC_CPM_FEE5_PARTNER, METRIC_CPM_FEE5_USD, METRIC_CTR, METRIC_DATA_COST_ADVERTISER, METRIC_DATA_COST_PARTNER, METRIC_DATA_COST_USD, METRIC_FEE10_ADVERTISER, METRIC_FEE10_PARTNER, METRIC_FEE10_USD, METRIC_FEE11_ADVERTISER, METRIC_FEE11_PARTNER, METRIC_FEE11_USD, METRIC_FEE12_ADVERTISER, METRIC_FEE12_PARTNER, METRIC_FEE12_USD, METRIC_FEE13_ADVERTISER, METRIC_FEE13_PARTNER, METRIC_FEE13_USD, METRIC_FEE14_ADVERTISER, METRIC_FEE14_PARTNER, METRIC_FEE14_USD, METRIC_FEE15_ADVERTISER, METRIC_FEE15_PARTNER, METRIC_FEE15_USD, METRIC_FEE16_ADVERTISER, METRIC_FEE16_PARTNER, METRIC_FEE16_USD, METRIC_FEE17_ADVERTISER, METRIC_FEE17_PARTNER, METRIC_FEE17_USD, METRIC_FEE18_ADVERTISER, METRIC_FEE18_PARTNER, METRIC_FEE18_USD, METRIC_FEE19_ADVERTISER, METRIC_FEE19_PARTNER, METRIC_FEE19_USD, METRIC_FEE20_ADVERTISER, METRIC_FEE20_PARTNER, METRIC_FEE20_USD, METRIC_FEE21_ADVERTISER, METRIC_FEE21_PARTNER, METRIC_FEE21_USD, METRIC_FEE22_ADVERTISER, METRIC_FEE22_PARTNER, METRIC_FEE22_USD, METRIC_FEE2_ADVERTISER, METRIC_FEE2_PARTNER, METRIC_FEE2_USD, METRIC_FEE3_ADVERTISER, METRIC_FEE3_PARTNER, METRIC_FEE3_USD, METRIC_FEE4_ADVERTISER, METRIC_FEE4_PARTNER, METRIC_FEE4_USD, METRIC_FEE5_ADVERTISER, METRIC_FEE5_PARTNER, METRIC_FEE5_USD, METRIC_FEE6_ADVERTISER, METRIC_FEE6_PARTNER, METRIC_FEE6_USD, METRIC_FEE7_ADVERTISER, METRIC_FEE7_PARTNER, METRIC_FEE7_USD, METRIC_FEE8_ADVERTISER, METRIC_FEE8_PARTNER, METRIC_FEE8_USD, METRIC_FEE9_ADVERTISER, METRIC_FEE9_PARTNER, METRIC_FEE9_USD, METRIC_IMPRESSIONS, METRIC_IMPRESSIONS_TO_CONVERSION_RATE, METRIC_LAST_CLICKS, METRIC_LAST_IMPRESSIONS, METRIC_MEDIA_COST_ADVERTISER, METRIC_MEDIA_COST_ECPAPC_ADVERTISER, METRIC_MEDIA_COST_ECPAPC_PARTNER, METRIC_MEDIA_COST_ECPAPC_USD, METRIC_MEDIA_COST_ECPAPV_ADVERTISER, METRIC_MEDIA_COST_ECPAPV_PARTNER, METRIC_MEDIA_COST_ECPAPV_USD, METRIC_MEDIA_COST_ECPA_ADVERTISER, METRIC_MEDIA_COST_ECPA_PARTNER, METRIC_MEDIA_COST_ECPA_USD, METRIC_MEDIA_COST_ECPCV_ADVERTISER, METRIC_MEDIA_COST_ECPCV_PARTNER, METRIC_MEDIA_COST_ECPCV_USD, METRIC_MEDIA_COST_ECPC_ADVERTISER, METRIC_MEDIA_COST_ECPC_PARTNER, METRIC_MEDIA_COST_ECPC_USD, METRIC_MEDIA_COST_ECPM_ADVERTISER, METRIC_MEDIA_COST_ECPM_PARTNER, METRIC_MEDIA_COST_ECPM_USD, METRIC_MEDIA_COST_PARTNER, METRIC_MEDIA_COST_USD, METRIC_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER, METRIC_MEDIA_COST_VIEWABLE_ECPM_PARTNER, METRIC_MEDIA_COST_VIEWABLE_ECPM_USD, METRIC_MEDIA_FEE1_ADVERTISER, METRIC_MEDIA_FEE1_PARTNER, METRIC_MEDIA_FEE1_USD, METRIC_MEDIA_FEE2_ADVERTISER, METRIC_MEDIA_FEE2_PARTNER, METRIC_MEDIA_FEE2_USD, METRIC_MEDIA_FEE3_ADVERTISER, METRIC_MEDIA_FEE3_PARTNER, METRIC_MEDIA_FEE3_USD, METRIC_MEDIA_FEE4_ADVERTISER, METRIC_MEDIA_FEE4_PARTNER, METRIC_MEDIA_FEE4_USD, METRIC_MEDIA_FEE5_ADVERTISER, METRIC_MEDIA_FEE5_PARTNER, METRIC_MEDIA_FEE5_USD, METRIC_PIXEL_LOADS, METRIC_PLATFORM_FEE_ADVERTISER, METRIC_PLATFORM_FEE_PARTNER, METRIC_PLATFORM_FEE_USD, METRIC_POST_CLICK_DFA_REVENUE, METRIC_POST_VIEW_DFA_REVENUE, METRIC_PROFIT_ADVERTISER, METRIC_PROFIT_ECPAPC_ADVERTISER, METRIC_PROFIT_ECPAPC_PARTNER, METRIC_PROFIT_ECPAPC_USD, METRIC_PROFIT_ECPAPV_ADVERTISER, METRIC_PROFIT_ECPAPV_PARTNER, METRIC_PROFIT_ECPAPV_USD, METRIC_PROFIT_ECPA_ADVERTISER, METRIC_PROFIT_ECPA_PARTNER, METRIC_PROFIT_ECPA_USD, METRIC_PROFIT_ECPC_ADVERTISER, METRIC_PROFIT_ECPC_PARTNER, METRIC_PROFIT_ECPC_USD, METRIC_PROFIT_ECPM_ADVERTISER, METRIC_PROFIT_ECPM_PARTNER, METRIC_PROFIT_ECPM_USD, METRIC_PROFIT_MARGIN, METRIC_PROFIT_PARTNER, METRIC_PROFIT_USD, METRIC_PROFIT_VIEWABLE_ECPM_ADVERTISER, METRIC_PROFIT_VIEWABLE_ECPM_PARTNER, METRIC_PROFIT_VIEWABLE_ECPM_USD, METRIC_REACH_COOKIE_FREQUENCY, METRIC_REACH_COOKIE_REACH, METRIC_REVENUE_ADVERTISER, METRIC_REVENUE_ECPAPC_ADVERTISER, METRIC_REVENUE_ECPAPC_PARTNER, METRIC_REVENUE_ECPAPC_USD, METRIC_REVENUE_ECPAPV_ADVERTISER, METRIC_REVENUE_ECPAPV_PARTNER, METRIC_REVENUE_ECPAPV_USD, METRIC_REVENUE_ECPA_ADVERTISER, METRIC_REVENUE_ECPA_PARTNER, METRIC_REVENUE_ECPA_USD, METRIC_REVENUE_ECPCV_ADVERTISER, METRIC_REVENUE_ECPCV_PARTNER, METRIC_REVENUE_ECPCV_USD, METRIC_REVENUE_ECPC_ADVERTISER, METRIC_REVENUE_ECPC_PARTNER, METRIC_REVENUE_ECPC_USD, METRIC_REVENUE_ECPIAVC_ADVERTISER, METRIC_REVENUE_ECPM_ADVERTISER, METRIC_REVENUE_ECPM_PARTNER, METRIC_REVENUE_ECPM_USD, METRIC_REVENUE_PARTNER, METRIC_REVENUE_USD, METRIC_REVENUE_VIEWABLE_ECPM_ADVERTISER, METRIC_REVENUE_VIEWABLE_ECPM_PARTNER, METRIC_REVENUE_VIEWABLE_ECPM_USD, METRIC_RICH_MEDIA_VIDEO_COMPLETIONS, METRIC_RICH_MEDIA_VIDEO_FIRST_QUARTILE_COMPLETES, METRIC_RICH_MEDIA_VIDEO_FULL_SCREENS, METRIC_RICH_MEDIA_VIDEO_MIDPOINTS, METRIC_RICH_MEDIA_VIDEO_MUTES, METRIC_RICH_MEDIA_VIDEO_PAUSES, METRIC_RICH_MEDIA_VIDEO_PLAYS, METRIC_RICH_MEDIA_VIDEO_SKIPS, METRIC_RICH_MEDIA_VIDEO_THIRD_QUARTILE_COMPLETES, METRIC_TEA_TRUEVIEW_IMPRESSIONS, METRIC_TEA_TRUEVIEW_UNIQUE_COOKIES, METRIC_TEA_TRUEVIEW_UNIQUE_PEOPLE, METRIC_TOTAL_CONVERSIONS, METRIC_TOTAL_MEDIA_COST_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPAPC_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPAPC_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPAPC_USD, METRIC_TOTAL_MEDIA_COST_ECPAPV_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPAPV_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPAPV_USD, METRIC_TOTAL_MEDIA_COST_ECPA_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPA_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPA_USD, METRIC_TOTAL_MEDIA_COST_ECPCV_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPCV_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPCV_USD, METRIC_TOTAL_MEDIA_COST_ECPC_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPC_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPC_USD, METRIC_TOTAL_MEDIA_COST_ECPM_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPM_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPM_USD, METRIC_TOTAL_MEDIA_COST_PARTNER, METRIC_TOTAL_MEDIA_COST_USD, METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER, METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_PARTNER, METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_USD, METRIC_TRUEVIEW_AVERAGE_CPE_ADVERTISER, METRIC_TRUEVIEW_AVERAGE_CPE_PARTNER, METRIC_TRUEVIEW_AVERAGE_CPE_USD, METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_ADVERTISER, METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_PARTNER, METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_USD, METRIC_TRUEVIEW_CONVERSION_COST_ONE_PER_VIEW_ADVERTISER, METRIC_TRUEVIEW_CONVERSION_COST_ONE_PER_VIEW_PARTNER, METRIC_TRUEVIEW_CONVERSION_COST_ONE_PER_VIEW_USD, METRIC_TRUEVIEW_CONVERSION_MANY_PER_VIEW, METRIC_TRUEVIEW_CONVERSION_ONE_PER_VIEW, METRIC_TRUEVIEW_CONVERSION_RATE_ONE_PER_VIEW, METRIC_TRUEVIEW_CONVERSION_VALUE_MANY_PER_VIEW_ADVERTISER, METRIC_TRUEVIEW_CONVERSION_VALUE_MANY_PER_VIEW_PARTNER, METRIC_TRUEVIEW_CONVERSION_VALUE_MANY_PER_VIEW_USD, METRIC_TRUEVIEW_CONVERSION_VALUE_ONE_PER_VIEW_ADVERTISER, METRIC_TRUEVIEW_CONVERSION_VALUE_ONE_PER_VIEW_PARTNER, METRIC_TRUEVIEW_CONVERSION_VALUE_ONE_PER_VIEW_USD, METRIC_TRUEVIEW_COST_CONVERSION_MANY_PER_VIEW_RATIO, METRIC_TRUEVIEW_COST_CONVERSION_ONE_PER_VIEW_RATIO, METRIC_TRUEVIEW_CPV_ADVERTISER, METRIC_TRUEVIEW_CPV_PARTNER, METRIC_TRUEVIEW_CPV_USD, METRIC_TRUEVIEW_EARNED_LIKES, METRIC_TRUEVIEW_EARNED_PLAYLIST_ADDITIONS, METRIC_TRUEVIEW_EARNED_SHARES, METRIC_TRUEVIEW_EARNED_SUBSCRIBERS, METRIC_TRUEVIEW_EARNED_VIEWS, METRIC_TRUEVIEW_ENGAGEMENTS, METRIC_TRUEVIEW_ENGAGEMENT_RATE, METRIC_TRUEVIEW_IMPRESSION_SHARE, METRIC_TRUEVIEW_LOST_IS_BUDGET, METRIC_TRUEVIEW_LOST_IS_RANK, METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUE, METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_ADVERTISER, METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_PARTNER, METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_USD, METRIC_TRUEVIEW_UNIQUE_VIEWERS, METRIC_TRUEVIEW_VALUE_CONVERSION_MANY_PER_VIEW_RATIO, METRIC_TRUEVIEW_VALUE_CONVERSION_ONE_PER_VIEW_RATIO, METRIC_TRUEVIEW_VIEWS, METRIC_TRUEVIEW_VIEW_RATE, METRIC_TRUEVIEW_VIEW_THROUGH_CONVERSION, METRIC_UNIQUE_VISITORS_COOKIES, METRIC_UNKNOWN, METRIC_VIDEO_COMPANION_CLICKS, METRIC_VIDEO_COMPANION_IMPRESSIONS, METRIC_VIDEO_COMPLETION_RATE, METRIC_VIEWABLE_BID_REQUESTS)
  * type `string` (values: TYPE_ACTIVE_GRP, TYPE_AUDIENCE_COMPOSITION, TYPE_AUDIENCE_PERFORMANCE, TYPE_CLIENT_SAFE, TYPE_COMSCORE_VCE, TYPE_CROSS_FEE, TYPE_CROSS_PARTNER, TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER, TYPE_ESTIMATED_CONVERSION, TYPE_FEE, TYPE_GENERAL, TYPE_INVENTORY_AVAILABILITY, TYPE_KEYWORD, TYPE_LINEAR_TV_SEARCH_LIFT, TYPE_NIELSEN_AUDIENCE_PROFILE, TYPE_NIELSEN_DAILY_REACH_BUILD, TYPE_NIELSEN_ONLINE_GLOBAL_MARKET, TYPE_NIELSEN_SITE, TYPE_NOT_SUPPORTED, TYPE_ORDER_ID, TYPE_PAGE_CATEGORY, TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE, TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD, TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET, TYPE_PIXEL_LOAD, TYPE_REACH_AND_FREQUENCY, TYPE_REACH_AUDIENCE, TYPE_THIRD_PARTY_DATA_PROVIDER, TYPE_TRUEVIEW, TYPE_TRUEVIEW_IAR, TYPE_VERIFICATION, TYPE_YOUTUBE_VERTICAL): Report type.

### Query
* Query `object`: Represents a query.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".
  * metadata [QueryMetadata](#querymetadata)
  * params [Parameters](#parameters)
  * queryId `string`: Query ID.
  * reportDataEndTimeMs `string`: The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
  * reportDataStartTimeMs `string`: The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
  * schedule [QuerySchedule](#queryschedule)
  * timezoneCode `string`: Canonical timezone code for report data time. Defaults to America/New_York.

### QueryMetadata
* QueryMetadata `object`: Query metadata.
  * dataRange `string` (values: ALL_TIME, CURRENT_DAY, CUSTOM_DATES, LAST_14_DAYS, LAST_30_DAYS, LAST_365_DAYS, LAST_7_DAYS, LAST_90_DAYS, MONTH_TO_DATE, PREVIOUS_DAY, PREVIOUS_HALF_MONTH, PREVIOUS_MONTH, PREVIOUS_QUARTER, PREVIOUS_WEEK, PREVIOUS_YEAR, QUARTER_TO_DATE, TYPE_NOT_SUPPORTED, WEEK_TO_DATE, YEAR_TO_DATE): Range of report data.
  * format `string` (values: CSV, EXCEL_CSV, XLSX): Format of the generated report.
  * googleCloudStoragePathForLatestReport `string`: The path to the location in Google Cloud Storage where the latest report is stored.
  * googleDrivePathForLatestReport `string`: The path in Google Drive for the latest report.
  * latestReportRunTimeMs `string`: The time when the latest report started to run.
  * locale `string`: Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE
  * reportCount `integer`: Number of reports that have been generated for the query.
  * running `boolean`: Whether the latest report is currently running.
  * sendNotification `boolean`: Whether to send an email notification when a report is ready. Default to false.
  * shareEmailAddress `array`: List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.
    * items `string`
  * title `string`: Query title. It is used to name the reports generated from this query.

### QuerySchedule
* QuerySchedule `object`: Information on how frequently and when to run a query.
  * endTimeMs `string`: Datetime to periodically run the query until.
  * frequency `string` (values: DAILY, MONTHLY, ONE_TIME, QUARTERLY, SEMI_MONTHLY, WEEKLY): How often the query is run.
  * nextRunMinuteOfDay `integer`: Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.
  * nextRunTimezoneCode `string`: Canonical timezone code for report generation time. Defaults to America/New_York.

### Report
* Report `object`: Represents a report.
  * key [ReportKey](#reportkey)
  * metadata [ReportMetadata](#reportmetadata)
  * params [Parameters](#parameters)

### ReportFailure
* ReportFailure `object`: An explanation of a report failure.
  * errorCode `string` (values: AUTHENTICATION_ERROR, DEPRECATED_REPORTING_INVALID_QUERY, REPORTING_BUCKET_NOT_FOUND, REPORTING_CREATE_BUCKET_FAILED, REPORTING_DELETE_BUCKET_FAILED, REPORTING_FATAL_ERROR, REPORTING_ILLEGAL_FILENAME, REPORTING_IMCOMPATIBLE_METRICS, REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS, REPORTING_INVALID_QUERY_TITLE_MISSING, REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS, REPORTING_QUERY_NOT_FOUND, REPORTING_TRANSIENT_ERROR, REPORTING_UPDATE_BUCKET_PERMISSION_FAILED, REPORTING_WRITE_BUCKET_OBJECT_FAILED, SERVER_ERROR, UNAUTHORIZED_API_ACCESS, VALIDATION_ERROR): Error code that shows why the report was not created.

### ReportKey
* ReportKey `object`: Key used to identify a report.
  * queryId `string`: Query ID.
  * reportId `string`: Report ID.

### ReportMetadata
* ReportMetadata `object`: Report metadata.
  * googleCloudStoragePath `string`: The path to the location in Google Cloud Storage where the report is stored.
  * reportDataEndTimeMs `string`: The ending time for the data that is shown in the report.
  * reportDataStartTimeMs `string`: The starting time for the data that is shown in the report.
  * status [ReportStatus](#reportstatus)

### ReportStatus
* ReportStatus `object`: Report status.
  * failure [ReportFailure](#reportfailure)
  * finishTimeMs `string`: The time when this report either completed successfully or failed.
  * format `string` (values: CSV, EXCEL_CSV, XLSX): The file type of the report.
  * state `string` (values: DONE, FAILED, RUNNING): The state of the report.

### RowStatus
* RowStatus `object`: Represents the upload status of a row in the request.
  * changed `boolean`: Whether the stored entity is changed as a result of upload.
  * entityId `string`: Entity Id.
  * entityName `string`: Entity name.
  * errors `array`: Reasons why the entity can't be uploaded.
    * items `string`
  * persisted `boolean`: Whether the entity is persisted.
  * rowNumber `integer`: Row number.

### RunQueryRequest
* RunQueryRequest `object`: Request to run a stored query to generate a report.
  * dataRange `string` (values: ALL_TIME, CURRENT_DAY, CUSTOM_DATES, LAST_14_DAYS, LAST_30_DAYS, LAST_365_DAYS, LAST_7_DAYS, LAST_90_DAYS, MONTH_TO_DATE, PREVIOUS_DAY, PREVIOUS_HALF_MONTH, PREVIOUS_MONTH, PREVIOUS_QUARTER, PREVIOUS_WEEK, PREVIOUS_YEAR, QUARTER_TO_DATE, TYPE_NOT_SUPPORTED, WEEK_TO_DATE, YEAR_TO_DATE): Report data range used to generate the report.
  * reportDataEndTimeMs `string`: The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
  * reportDataStartTimeMs `string`: The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
  * timezoneCode `string`: Canonical timezone code for report data time. Defaults to America/New_York.

### UploadLineItemsRequest
* UploadLineItemsRequest `object`: Request to upload line items.
  * dryRun `boolean`: Set to true to get upload status without actually persisting the line items.
  * format `string` (values: CSV): Format the line items are in. Default to CSV.
  * lineItems `string`: Line items in CSV to upload. Refer to  Entity Write File Format for more information on file format.

### UploadLineItemsResponse
* UploadLineItemsResponse `object`: Upload line items response.
  * uploadStatus [UploadStatus](#uploadstatus)

### UploadStatus
* UploadStatus `object`: Represents the status of upload.
  * errors `array`: Reasons why upload can't be completed.
    * items `string`
  * rowStatus `array`: Per-row upload status.
    * items [RowStatus](#rowstatus)


