# @datafire/google_doubleclickbidmanager

Client library for DoubleClick Bid Manager API

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

.then(data => {
  console.log(data);
});
```

## Description

DoubleClick Bid Manager API allows users to manage and create campaigns and reports.

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

### doubleclickbidmanager.lineitems.downloadlineitems
Retrieves line items in CSV format. YouTube & partners line items are not supported.


```js
google_doubleclickbidmanager.doubleclickbidmanager.lineitems.downloadlineitems({}, context)
```

#### Input
* input `object`
  * body [DownloadLineItemsRequest](#downloadlineitemsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DownloadLineItemsResponse](#downloadlineitemsresponse)

### doubleclickbidmanager.lineitems.uploadlineitems
Uploads line items in CSV format. YouTube & partners line items are not supported.


```js
google_doubleclickbidmanager.doubleclickbidmanager.lineitems.uploadlineitems({}, context)
```

#### Input
* input `object`
  * body [UploadLineItemsRequest](#uploadlineitemsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [UploadLineItemsResponse](#uploadlineitemsresponse)

### doubleclickbidmanager.queries.listqueries
Retrieves stored queries.


```js
google_doubleclickbidmanager.doubleclickbidmanager.queries.listqueries({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
  * pageToken `string`: Optional pagination token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListQueriesResponse](#listqueriesresponse)

### doubleclickbidmanager.reports.listreports
Retrieves stored reports.


```js
google_doubleclickbidmanager.doubleclickbidmanager.reports.listreports({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * queryId **required** `string`: Query ID with which the reports are associated.
  * pageSize `integer`: Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
  * pageToken `string`: Optional pagination token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListReportsResponse](#listreportsresponse)

### doubleclickbidmanager.queries.createquery
Creates a query.


```js
google_doubleclickbidmanager.doubleclickbidmanager.queries.createquery({}, context)
```

#### Input
* input `object`
  * asynchronous `boolean`: If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME.
  * body [Query](#query)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Query](#query)

### doubleclickbidmanager.queries.deletequery
Deletes a stored query as well as the associated stored reports.


```js
google_doubleclickbidmanager.doubleclickbidmanager.queries.deletequery({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * queryId **required** `string`: Query ID to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### doubleclickbidmanager.queries.getquery
Retrieves a stored query.


```js
google_doubleclickbidmanager.doubleclickbidmanager.queries.getquery({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * queryId **required** `string`: Query ID to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Query](#query)

### doubleclickbidmanager.queries.runquery
Runs a stored query to generate a report.


```js
google_doubleclickbidmanager.doubleclickbidmanager.queries.runquery({
  "queryId": ""
}, context)
```

#### Input
* input `object`
  * queryId **required** `string`: Query ID to run.
  * asynchronous `boolean`: If true, tries to run the query asynchronously.
  * body [RunQueryRequest](#runqueryrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### doubleclickbidmanager.sdf.download
Retrieves entities in SDF format.


```js
google_doubleclickbidmanager.doubleclickbidmanager.sdf.download({}, context)
```

#### Input
* input `object`
  * body [DownloadRequest](#downloadrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DownloadResponse](#downloadresponse)



## Definitions

### ChannelGrouping
* ChannelGrouping `object`: A channel grouping defines a set of rules that can be used to categorize events in a path report.
  * fallbackName `string`: The name to apply to an event that does not match any of the rules in the channel grouping.
  * name `string`: Channel Grouping name.
  * rules `array`: Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping.
    * items [Rule](#rule)

### DisjunctiveMatchStatement
* DisjunctiveMatchStatement `object`: DisjunctiveMatchStatement that OR's all contained filters.
  * eventFilters `array`: Filters. There is a limit of 100 filters that can be set per disjunctive match statement.
    * items [EventFilter](#eventfilter)

### DownloadLineItemsRequest
* DownloadLineItemsRequest `object`: Request to fetch stored line items.
  * fileSpec `string` (values: EWF): File specification (column names, types, order) in which the line items will be returned. Default to EWF.
  * filterIds `array`: Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned.
    * items `string`
  * filterType `string` (values: ADVERTISER_ID, INSERTION_ORDER_ID, LINE_ITEM_ID): Filter type used to filter line items to fetch.
  * format `string` (values: CSV): Format in which the line items will be returned. Default to CSV.

### DownloadLineItemsResponse
* DownloadLineItemsResponse `object`: Download line items response.
  * lineItems `string`: Retrieved line items in CSV format. For more information about file formats, see Entity Write File Format.

### DownloadRequest
* DownloadRequest `object`: Request to fetch stored inventory sources, campaigns, insertion orders, line items, YouTube ad groups and ads.
  * fileTypes `array`: File types that will be returned. If INVENTORY_SOURCE is requested, no other file types may be requested. Acceptable values are: - "AD" - "AD_GROUP" - "CAMPAIGN" - "INSERTION_ORDER" - "INVENTORY_SOURCE" - "LINE_ITEM" 
    * items `string` (values: INSERTION_ORDER, LINE_ITEM, AD_GROUP, AD, CAMPAIGN, INVENTORY_SOURCE)
  * filterIds `array`: The IDs of the specified filter type. This is used to filter entities to fetch. At least one ID must be specified.
    * items `string`
  * filterType `string` (values: ADVERTISER_ID, INSERTION_ORDER_ID, LINE_ITEM_ID, CAMPAIGN_ID, INVENTORY_SOURCE_ID, PARTNER_ID): Filter type used to filter entities to fetch. PARTNER_ID and INVENTORY_SOURCE_ID may only be used when downloading inventory sources.
  * version `string`: SDF Version (column names, types, order) in which the entities will be returned. Default to 5.

### DownloadResponse
* DownloadResponse `object`: Download response.
  * adGroups `string`: Retrieved ad groups in SDF format.
  * ads `string`: Retrieved ads in SDF format.
  * campaigns `string`: Retrieved campaigns in SDF format.
  * insertionOrders `string`: Retrieved insertion orders in SDF format.
  * inventorySources `string`
  * lineItems `string`: Retrieved line items in SDF format.

### EventFilter
* EventFilter `object`: Defines the type of filter to be applied to the path, a DV360 event dimension filter.
  * dimensionFilter [PathQueryOptionsFilter](#pathqueryoptionsfilter)

### FilterPair
* FilterPair `object`: Filter used to match traffic data in your report.
  * type `string` (values: FILTER_UNKNOWN, FILTER_DATE, FILTER_DAY_OF_WEEK, FILTER_WEEK, FILTER_MONTH, FILTER_YEAR, FILTER_TIME_OF_DAY, FILTER_CONVERSION_DELAY, FILTER_CREATIVE_ID, FILTER_CREATIVE_SIZE, FILTER_CREATIVE_TYPE, FILTER_EXCHANGE_ID, FILTER_AD_POSITION, FILTER_PUBLIC_INVENTORY, FILTER_INVENTORY_SOURCE, FILTER_CITY, FILTER_REGION, FILTER_DMA, FILTER_COUNTRY, FILTER_SITE_ID, FILTER_CHANNEL_ID, FILTER_PARTNER, FILTER_ADVERTISER, FILTER_INSERTION_ORDER, FILTER_LINE_ITEM, FILTER_PARTNER_CURRENCY, FILTER_ADVERTISER_CURRENCY, FILTER_ADVERTISER_TIMEZONE, FILTER_LINE_ITEM_TYPE, FILTER_USER_LIST, FILTER_USER_LIST_FIRST_PARTY, FILTER_USER_LIST_THIRD_PARTY, FILTER_TARGETED_USER_LIST, FILTER_DATA_PROVIDER, FILTER_ORDER_ID, FILTER_VIDEO_PLAYER_SIZE, FILTER_VIDEO_DURATION_SECONDS, FILTER_KEYWORD, FILTER_PAGE_CATEGORY, FILTER_CAMPAIGN_DAILY_FREQUENCY, FILTER_LINE_ITEM_DAILY_FREQUENCY, FILTER_LINE_ITEM_LIFETIME_FREQUENCY, FILTER_OS, FILTER_BROWSER, FILTER_CARRIER, FILTER_SITE_LANGUAGE, FILTER_INVENTORY_FORMAT, FILTER_ZIP_CODE, FILTER_VIDEO_RATING_TIER, FILTER_VIDEO_FORMAT_SUPPORT, FILTER_VIDEO_SKIPPABLE_SUPPORT, FILTER_VIDEO_VPAID_SUPPORT, FILTER_VIDEO_CREATIVE_DURATION, FILTER_PAGE_LAYOUT, FILTER_VIDEO_AD_POSITION_IN_STREAM, FILTER_AGE, FILTER_GENDER, FILTER_QUARTER, FILTER_TRUEVIEW_CONVERSION_TYPE, FILTER_MOBILE_GEO, FILTER_MRAID_SUPPORT, FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY, FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE, FILTER_NIELSEN_COUNTRY_CODE, FILTER_NIELSEN_DEVICE_ID, FILTER_NIELSEN_GENDER, FILTER_NIELSEN_AGE, FILTER_INVENTORY_SOURCE_TYPE, FILTER_CREATIVE_WIDTH, FILTER_CREATIVE_HEIGHT, FILTER_DFP_ORDER_ID, FILTER_TRUEVIEW_AGE, FILTER_TRUEVIEW_GENDER, FILTER_TRUEVIEW_PARENTAL_STATUS, FILTER_TRUEVIEW_REMARKETING_LIST, FILTER_TRUEVIEW_INTEREST, FILTER_TRUEVIEW_AD_GROUP_ID, FILTER_TRUEVIEW_AD_GROUP_AD_ID, FILTER_TRUEVIEW_IAR_LANGUAGE, FILTER_TRUEVIEW_IAR_GENDER, FILTER_TRUEVIEW_IAR_AGE, FILTER_TRUEVIEW_IAR_CATEGORY, FILTER_TRUEVIEW_IAR_COUNTRY, FILTER_TRUEVIEW_IAR_CITY, FILTER_TRUEVIEW_IAR_REGION, FILTER_TRUEVIEW_IAR_ZIPCODE, FILTER_TRUEVIEW_IAR_REMARKETING_LIST, FILTER_TRUEVIEW_IAR_INTEREST, FILTER_TRUEVIEW_IAR_PARENTAL_STATUS, FILTER_TRUEVIEW_IAR_TIME_OF_DAY, FILTER_TRUEVIEW_CUSTOM_AFFINITY, FILTER_TRUEVIEW_CATEGORY, FILTER_TRUEVIEW_KEYWORD, FILTER_TRUEVIEW_PLACEMENT, FILTER_TRUEVIEW_URL, FILTER_TRUEVIEW_COUNTRY, FILTER_TRUEVIEW_REGION, FILTER_TRUEVIEW_CITY, FILTER_TRUEVIEW_DMA, FILTER_TRUEVIEW_ZIPCODE, FILTER_NOT_SUPPORTED, FILTER_MEDIA_PLAN, FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL, FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO, FILTER_SKIPPABLE_SUPPORT, FILTER_COMPANION_CREATIVE_ID, FILTER_BUDGET_SEGMENT_DESCRIPTION, FILTER_FLOODLIGHT_ACTIVITY_ID, FILTER_DEVICE_MODEL, FILTER_DEVICE_MAKE, FILTER_DEVICE_TYPE, FILTER_CREATIVE_ATTRIBUTE, FILTER_INVENTORY_COMMITMENT_TYPE, FILTER_INVENTORY_RATE_TYPE, FILTER_INVENTORY_DELIVERY_METHOD, FILTER_INVENTORY_SOURCE_EXTERNAL_ID, FILTER_AUTHORIZED_SELLER_STATE, FILTER_VIDEO_DURATION_SECONDS_RANGE, FILTER_PARTNER_NAME, FILTER_PARTNER_STATUS, FILTER_ADVERTISER_NAME, FILTER_ADVERTISER_INTEGRATION_CODE, FILTER_ADVERTISER_INTEGRATION_STATUS, FILTER_CARRIER_NAME, FILTER_CHANNEL_NAME, FILTER_CITY_NAME, FILTER_COMPANION_CREATIVE_NAME, FILTER_USER_LIST_FIRST_PARTY_NAME, FILTER_USER_LIST_THIRD_PARTY_NAME, FILTER_NIELSEN_RESTATEMENT_DATE, FILTER_NIELSEN_DATE_RANGE, FILTER_INSERTION_ORDER_NAME, FILTER_REGION_NAME, FILTER_DMA_NAME, FILTER_TRUEVIEW_IAR_REGION_NAME, FILTER_TRUEVIEW_DMA_NAME, FILTER_TRUEVIEW_REGION_NAME, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME, FILTER_AD_TYPE, FILTER_ALGORITHM, FILTER_ALGORITHM_ID, FILTER_AMP_PAGE_REQUEST, FILTER_ANONYMOUS_INVENTORY_MODELING, FILTER_APP_URL, FILTER_APP_URL_EXCLUDED, FILTER_ATTRIBUTED_USERLIST, FILTER_ATTRIBUTED_USERLIST_COST, FILTER_ATTRIBUTED_USERLIST_TYPE, FILTER_ATTRIBUTION_MODEL, FILTER_AUDIENCE_LIST, FILTER_AUDIENCE_LIST_COST, FILTER_AUDIENCE_LIST_TYPE, FILTER_AUDIENCE_NAME, FILTER_AUDIENCE_TYPE, FILTER_BILLABLE_OUTCOME, FILTER_BRAND_LIFT_TYPE, FILTER_CHANNEL_TYPE, FILTER_CM_PLACEMENT_ID, FILTER_CONVERSION_SOURCE, FILTER_CONVERSION_SOURCE_ID, FILTER_COUNTRY_ID, FILTER_CREATIVE, FILTER_CREATIVE_ASSET, FILTER_CREATIVE_INTEGRATION_CODE, FILTER_CREATIVE_RENDERED_IN_AMP, FILTER_CREATIVE_SOURCE, FILTER_CREATIVE_STATUS, FILTER_DATA_PROVIDER_NAME, FILTER_DETAILED_DEMOGRAPHICS, FILTER_DETAILED_DEMOGRAPHICS_ID, FILTER_DEVICE, FILTER_GAM_INSERTION_ORDER, FILTER_GAM_LINE_ITEM, FILTER_GAM_LINE_ITEM_ID, FILTER_DIGITAL_CONTENT_LABEL, FILTER_DOMAIN, FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST, FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST, FILTER_EXCHANGE, FILTER_EXCHANGE_CODE, FILTER_EXTENSION, FILTER_EXTENSION_STATUS, FILTER_EXTENSION_TYPE, FILTER_FIRST_PARTY_AUDIENCE_LIST_COST, FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE, FILTER_FLOODLIGHT_ACTIVITY, FILTER_FORMAT, FILTER_GMAIL_AGE, FILTER_GMAIL_CITY, FILTER_GMAIL_COUNTRY, FILTER_GMAIL_COUNTRY_NAME, FILTER_GMAIL_DEVICE_TYPE, FILTER_GMAIL_DEVICE_TYPE_NAME, FILTER_GMAIL_GENDER, FILTER_GMAIL_REGION, FILTER_GMAIL_REMARKETING_LIST, FILTER_HOUSEHOLD_INCOME, FILTER_IMPRESSION_COUNTING_METHOD, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER, FILTER_INSERTION_ORDER_INTEGRATION_CODE, FILTER_INSERTION_ORDER_STATUS, FILTER_INTEREST, FILTER_INVENTORY_SOURCE_GROUP, FILTER_INVENTORY_SOURCE_GROUP_ID, FILTER_INVENTORY_SOURCE_ID, FILTER_INVENTORY_SOURCE_NAME, FILTER_LIFE_EVENT, FILTER_LIFE_EVENTS, FILTER_LINE_ITEM_INTEGRATION_CODE, FILTER_LINE_ITEM_NAME, FILTER_LINE_ITEM_STATUS, FILTER_MATCH_RATIO, FILTER_MEASUREMENT_SOURCE, FILTER_MEDIA_PLAN_NAME, FILTER_PARENTAL_STATUS, FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS, FILTER_PLATFORM, FILTER_PLAYBACK_METHOD, FILTER_POSITION_IN_CONTENT, FILTER_PUBLISHER_PROPERTY, FILTER_PUBLISHER_PROPERTY_ID, FILTER_PUBLISHER_PROPERTY_SECTION, FILTER_PUBLISHER_PROPERTY_SECTION_ID, FILTER_REFUND_REASON, FILTER_REMARKETING_LIST, FILTER_REWARDED, FILTER_SENSITIVE_CATEGORY, FILTER_SERVED_PIXEL_DENSITY, FILTER_TARGETED_DATA_PROVIDERS, FILTER_THIRD_PARTY_AUDIENCE_LIST_COST, FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE, FILTER_TRUEVIEW_AD, FILTER_TRUEVIEW_AD_GROUP, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID, FILTER_TRUEVIEW_HOUSEHOLD_INCOME, FILTER_TRUEVIEW_IAR_COUNTRY_NAME, FILTER_TRUEVIEW_REMARKETING_LIST_NAME, FILTER_VARIANT_ID, FILTER_VARIANT_NAME, FILTER_VARIANT_VERSION, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE, FILTER_VERIFICATION_VIDEO_POSITION, FILTER_VIDEO_COMPANION_CREATIVE_SIZE, FILTER_VIDEO_CONTINUOUS_PLAY, FILTER_VIDEO_DURATION, FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST, FILTER_YOUTUBE_AD_VIDEO, FILTER_YOUTUBE_AD_VIDEO_ID, FILTER_YOUTUBE_CHANNEL, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER, FILTER_YOUTUBE_VIDEO, FILTER_ZIP_POSTAL_CODE, FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS, FILTER_TRUEVIEW_PLACEMENT_ID, FILTER_PATH_PATTERN_ID, FILTER_PATH_EVENT_INDEX, FILTER_EVENT_TYPE, FILTER_CHANNEL_GROUPING, FILTER_OM_SDK_AVAILABLE, FILTER_DATA_SOURCE): Filter type.
  * value `string`: Filter value.

### ListQueriesResponse
* ListQueriesResponse `object`: List queries response.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".
  * nextPageToken `string`: Next page's pagination token if one exists.
  * queries `array`: Retrieved queries.
    * items [Query](#query)

### ListReportsResponse
* ListReportsResponse `object`: List reports response.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
  * nextPageToken `string`: Next page's pagination token if one exists.
  * reports `array`: Retrieved reports.
    * items [Report](#report)

### Options
* Options `object`: Additional query options.
  * includeOnlyTargetedUserLists `boolean`: Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items.
  * pathQueryOptions [PathQueryOptions](#pathqueryoptions)

### Parameters
* Parameters `object`: Parameters of a query or report.
  * filters `array`: Filters used to match traffic data in your report.
    * items [FilterPair](#filterpair)
  * groupBys `array`: Data is grouped by the filters listed in this field.
    * items `string` (values: FILTER_UNKNOWN, FILTER_DATE, FILTER_DAY_OF_WEEK, FILTER_WEEK, FILTER_MONTH, FILTER_YEAR, FILTER_TIME_OF_DAY, FILTER_CONVERSION_DELAY, FILTER_CREATIVE_ID, FILTER_CREATIVE_SIZE, FILTER_CREATIVE_TYPE, FILTER_EXCHANGE_ID, FILTER_AD_POSITION, FILTER_PUBLIC_INVENTORY, FILTER_INVENTORY_SOURCE, FILTER_CITY, FILTER_REGION, FILTER_DMA, FILTER_COUNTRY, FILTER_SITE_ID, FILTER_CHANNEL_ID, FILTER_PARTNER, FILTER_ADVERTISER, FILTER_INSERTION_ORDER, FILTER_LINE_ITEM, FILTER_PARTNER_CURRENCY, FILTER_ADVERTISER_CURRENCY, FILTER_ADVERTISER_TIMEZONE, FILTER_LINE_ITEM_TYPE, FILTER_USER_LIST, FILTER_USER_LIST_FIRST_PARTY, FILTER_USER_LIST_THIRD_PARTY, FILTER_TARGETED_USER_LIST, FILTER_DATA_PROVIDER, FILTER_ORDER_ID, FILTER_VIDEO_PLAYER_SIZE, FILTER_VIDEO_DURATION_SECONDS, FILTER_KEYWORD, FILTER_PAGE_CATEGORY, FILTER_CAMPAIGN_DAILY_FREQUENCY, FILTER_LINE_ITEM_DAILY_FREQUENCY, FILTER_LINE_ITEM_LIFETIME_FREQUENCY, FILTER_OS, FILTER_BROWSER, FILTER_CARRIER, FILTER_SITE_LANGUAGE, FILTER_INVENTORY_FORMAT, FILTER_ZIP_CODE, FILTER_VIDEO_RATING_TIER, FILTER_VIDEO_FORMAT_SUPPORT, FILTER_VIDEO_SKIPPABLE_SUPPORT, FILTER_VIDEO_VPAID_SUPPORT, FILTER_VIDEO_CREATIVE_DURATION, FILTER_PAGE_LAYOUT, FILTER_VIDEO_AD_POSITION_IN_STREAM, FILTER_AGE, FILTER_GENDER, FILTER_QUARTER, FILTER_TRUEVIEW_CONVERSION_TYPE, FILTER_MOBILE_GEO, FILTER_MRAID_SUPPORT, FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY, FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE, FILTER_NIELSEN_COUNTRY_CODE, FILTER_NIELSEN_DEVICE_ID, FILTER_NIELSEN_GENDER, FILTER_NIELSEN_AGE, FILTER_INVENTORY_SOURCE_TYPE, FILTER_CREATIVE_WIDTH, FILTER_CREATIVE_HEIGHT, FILTER_DFP_ORDER_ID, FILTER_TRUEVIEW_AGE, FILTER_TRUEVIEW_GENDER, FILTER_TRUEVIEW_PARENTAL_STATUS, FILTER_TRUEVIEW_REMARKETING_LIST, FILTER_TRUEVIEW_INTEREST, FILTER_TRUEVIEW_AD_GROUP_ID, FILTER_TRUEVIEW_AD_GROUP_AD_ID, FILTER_TRUEVIEW_IAR_LANGUAGE, FILTER_TRUEVIEW_IAR_GENDER, FILTER_TRUEVIEW_IAR_AGE, FILTER_TRUEVIEW_IAR_CATEGORY, FILTER_TRUEVIEW_IAR_COUNTRY, FILTER_TRUEVIEW_IAR_CITY, FILTER_TRUEVIEW_IAR_REGION, FILTER_TRUEVIEW_IAR_ZIPCODE, FILTER_TRUEVIEW_IAR_REMARKETING_LIST, FILTER_TRUEVIEW_IAR_INTEREST, FILTER_TRUEVIEW_IAR_PARENTAL_STATUS, FILTER_TRUEVIEW_IAR_TIME_OF_DAY, FILTER_TRUEVIEW_CUSTOM_AFFINITY, FILTER_TRUEVIEW_CATEGORY, FILTER_TRUEVIEW_KEYWORD, FILTER_TRUEVIEW_PLACEMENT, FILTER_TRUEVIEW_URL, FILTER_TRUEVIEW_COUNTRY, FILTER_TRUEVIEW_REGION, FILTER_TRUEVIEW_CITY, FILTER_TRUEVIEW_DMA, FILTER_TRUEVIEW_ZIPCODE, FILTER_NOT_SUPPORTED, FILTER_MEDIA_PLAN, FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL, FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO, FILTER_SKIPPABLE_SUPPORT, FILTER_COMPANION_CREATIVE_ID, FILTER_BUDGET_SEGMENT_DESCRIPTION, FILTER_FLOODLIGHT_ACTIVITY_ID, FILTER_DEVICE_MODEL, FILTER_DEVICE_MAKE, FILTER_DEVICE_TYPE, FILTER_CREATIVE_ATTRIBUTE, FILTER_INVENTORY_COMMITMENT_TYPE, FILTER_INVENTORY_RATE_TYPE, FILTER_INVENTORY_DELIVERY_METHOD, FILTER_INVENTORY_SOURCE_EXTERNAL_ID, FILTER_AUTHORIZED_SELLER_STATE, FILTER_VIDEO_DURATION_SECONDS_RANGE, FILTER_PARTNER_NAME, FILTER_PARTNER_STATUS, FILTER_ADVERTISER_NAME, FILTER_ADVERTISER_INTEGRATION_CODE, FILTER_ADVERTISER_INTEGRATION_STATUS, FILTER_CARRIER_NAME, FILTER_CHANNEL_NAME, FILTER_CITY_NAME, FILTER_COMPANION_CREATIVE_NAME, FILTER_USER_LIST_FIRST_PARTY_NAME, FILTER_USER_LIST_THIRD_PARTY_NAME, FILTER_NIELSEN_RESTATEMENT_DATE, FILTER_NIELSEN_DATE_RANGE, FILTER_INSERTION_ORDER_NAME, FILTER_REGION_NAME, FILTER_DMA_NAME, FILTER_TRUEVIEW_IAR_REGION_NAME, FILTER_TRUEVIEW_DMA_NAME, FILTER_TRUEVIEW_REGION_NAME, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME, FILTER_AD_TYPE, FILTER_ALGORITHM, FILTER_ALGORITHM_ID, FILTER_AMP_PAGE_REQUEST, FILTER_ANONYMOUS_INVENTORY_MODELING, FILTER_APP_URL, FILTER_APP_URL_EXCLUDED, FILTER_ATTRIBUTED_USERLIST, FILTER_ATTRIBUTED_USERLIST_COST, FILTER_ATTRIBUTED_USERLIST_TYPE, FILTER_ATTRIBUTION_MODEL, FILTER_AUDIENCE_LIST, FILTER_AUDIENCE_LIST_COST, FILTER_AUDIENCE_LIST_TYPE, FILTER_AUDIENCE_NAME, FILTER_AUDIENCE_TYPE, FILTER_BILLABLE_OUTCOME, FILTER_BRAND_LIFT_TYPE, FILTER_CHANNEL_TYPE, FILTER_CM_PLACEMENT_ID, FILTER_CONVERSION_SOURCE, FILTER_CONVERSION_SOURCE_ID, FILTER_COUNTRY_ID, FILTER_CREATIVE, FILTER_CREATIVE_ASSET, FILTER_CREATIVE_INTEGRATION_CODE, FILTER_CREATIVE_RENDERED_IN_AMP, FILTER_CREATIVE_SOURCE, FILTER_CREATIVE_STATUS, FILTER_DATA_PROVIDER_NAME, FILTER_DETAILED_DEMOGRAPHICS, FILTER_DETAILED_DEMOGRAPHICS_ID, FILTER_DEVICE, FILTER_GAM_INSERTION_ORDER, FILTER_GAM_LINE_ITEM, FILTER_GAM_LINE_ITEM_ID, FILTER_DIGITAL_CONTENT_LABEL, FILTER_DOMAIN, FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST, FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST, FILTER_EXCHANGE, FILTER_EXCHANGE_CODE, FILTER_EXTENSION, FILTER_EXTENSION_STATUS, FILTER_EXTENSION_TYPE, FILTER_FIRST_PARTY_AUDIENCE_LIST_COST, FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE, FILTER_FLOODLIGHT_ACTIVITY, FILTER_FORMAT, FILTER_GMAIL_AGE, FILTER_GMAIL_CITY, FILTER_GMAIL_COUNTRY, FILTER_GMAIL_COUNTRY_NAME, FILTER_GMAIL_DEVICE_TYPE, FILTER_GMAIL_DEVICE_TYPE_NAME, FILTER_GMAIL_GENDER, FILTER_GMAIL_REGION, FILTER_GMAIL_REMARKETING_LIST, FILTER_HOUSEHOLD_INCOME, FILTER_IMPRESSION_COUNTING_METHOD, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER, FILTER_INSERTION_ORDER_INTEGRATION_CODE, FILTER_INSERTION_ORDER_STATUS, FILTER_INTEREST, FILTER_INVENTORY_SOURCE_GROUP, FILTER_INVENTORY_SOURCE_GROUP_ID, FILTER_INVENTORY_SOURCE_ID, FILTER_INVENTORY_SOURCE_NAME, FILTER_LIFE_EVENT, FILTER_LIFE_EVENTS, FILTER_LINE_ITEM_INTEGRATION_CODE, FILTER_LINE_ITEM_NAME, FILTER_LINE_ITEM_STATUS, FILTER_MATCH_RATIO, FILTER_MEASUREMENT_SOURCE, FILTER_MEDIA_PLAN_NAME, FILTER_PARENTAL_STATUS, FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS, FILTER_PLATFORM, FILTER_PLAYBACK_METHOD, FILTER_POSITION_IN_CONTENT, FILTER_PUBLISHER_PROPERTY, FILTER_PUBLISHER_PROPERTY_ID, FILTER_PUBLISHER_PROPERTY_SECTION, FILTER_PUBLISHER_PROPERTY_SECTION_ID, FILTER_REFUND_REASON, FILTER_REMARKETING_LIST, FILTER_REWARDED, FILTER_SENSITIVE_CATEGORY, FILTER_SERVED_PIXEL_DENSITY, FILTER_TARGETED_DATA_PROVIDERS, FILTER_THIRD_PARTY_AUDIENCE_LIST_COST, FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE, FILTER_TRUEVIEW_AD, FILTER_TRUEVIEW_AD_GROUP, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID, FILTER_TRUEVIEW_HOUSEHOLD_INCOME, FILTER_TRUEVIEW_IAR_COUNTRY_NAME, FILTER_TRUEVIEW_REMARKETING_LIST_NAME, FILTER_VARIANT_ID, FILTER_VARIANT_NAME, FILTER_VARIANT_VERSION, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE, FILTER_VERIFICATION_VIDEO_POSITION, FILTER_VIDEO_COMPANION_CREATIVE_SIZE, FILTER_VIDEO_CONTINUOUS_PLAY, FILTER_VIDEO_DURATION, FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST, FILTER_YOUTUBE_AD_VIDEO, FILTER_YOUTUBE_AD_VIDEO_ID, FILTER_YOUTUBE_CHANNEL, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER, FILTER_YOUTUBE_VIDEO, FILTER_ZIP_POSTAL_CODE, FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS, FILTER_TRUEVIEW_PLACEMENT_ID, FILTER_PATH_PATTERN_ID, FILTER_PATH_EVENT_INDEX, FILTER_EVENT_TYPE, FILTER_CHANNEL_GROUPING, FILTER_OM_SDK_AVAILABLE, FILTER_DATA_SOURCE)
  * includeInviteData `boolean`: Deprecated. This field is no longer in use.
  * metrics `array`: Metrics to include as columns in your report.
    * items `string` (values: METRIC_UNKNOWN, METRIC_IMPRESSIONS, METRIC_CLICKS, METRIC_LAST_IMPRESSIONS, METRIC_LAST_CLICKS, METRIC_TOTAL_CONVERSIONS, METRIC_MEDIA_COST_ADVERTISER, METRIC_MEDIA_COST_USD, METRIC_MEDIA_COST_PARTNER, METRIC_DATA_COST_ADVERTISER, METRIC_DATA_COST_USD, METRIC_DATA_COST_PARTNER, METRIC_CPM_FEE1_ADVERTISER, METRIC_CPM_FEE1_USD, METRIC_CPM_FEE1_PARTNER, METRIC_CPM_FEE2_ADVERTISER, METRIC_CPM_FEE2_USD, METRIC_CPM_FEE2_PARTNER, METRIC_MEDIA_FEE1_ADVERTISER, METRIC_MEDIA_FEE1_USD, METRIC_MEDIA_FEE1_PARTNER, METRIC_MEDIA_FEE2_ADVERTISER, METRIC_MEDIA_FEE2_USD, METRIC_MEDIA_FEE2_PARTNER, METRIC_REVENUE_ADVERTISER, METRIC_REVENUE_USD, METRIC_REVENUE_PARTNER, METRIC_PROFIT_ADVERTISER, METRIC_PROFIT_USD, METRIC_PROFIT_PARTNER, METRIC_PROFIT_MARGIN, METRIC_TOTAL_MEDIA_COST_USD, METRIC_TOTAL_MEDIA_COST_PARTNER, METRIC_TOTAL_MEDIA_COST_ADVERTISER, METRIC_BILLABLE_COST_USD, METRIC_BILLABLE_COST_PARTNER, METRIC_BILLABLE_COST_ADVERTISER, METRIC_PLATFORM_FEE_USD, METRIC_PLATFORM_FEE_PARTNER, METRIC_PLATFORM_FEE_ADVERTISER, METRIC_VIDEO_COMPLETION_RATE, METRIC_PROFIT_ECPM_ADVERTISER, METRIC_PROFIT_ECPM_USD, METRIC_PROFIT_ECPM_PARTNER, METRIC_REVENUE_ECPM_ADVERTISER, METRIC_REVENUE_ECPM_USD, METRIC_REVENUE_ECPM_PARTNER, METRIC_REVENUE_ECPC_ADVERTISER, METRIC_REVENUE_ECPC_USD, METRIC_REVENUE_ECPC_PARTNER, METRIC_REVENUE_ECPA_ADVERTISER, METRIC_REVENUE_ECPA_USD, METRIC_REVENUE_ECPA_PARTNER, METRIC_REVENUE_ECPAPV_ADVERTISER, METRIC_REVENUE_ECPAPV_USD, METRIC_REVENUE_ECPAPV_PARTNER, METRIC_REVENUE_ECPAPC_ADVERTISER, METRIC_REVENUE_ECPAPC_USD, METRIC_REVENUE_ECPAPC_PARTNER, METRIC_MEDIA_COST_ECPM_ADVERTISER, METRIC_MEDIA_COST_ECPM_USD, METRIC_MEDIA_COST_ECPM_PARTNER, METRIC_MEDIA_COST_ECPC_ADVERTISER, METRIC_MEDIA_COST_ECPC_USD, METRIC_MEDIA_COST_ECPC_PARTNER, METRIC_MEDIA_COST_ECPA_ADVERTISER, METRIC_MEDIA_COST_ECPA_USD, METRIC_MEDIA_COST_ECPA_PARTNER, METRIC_MEDIA_COST_ECPAPV_ADVERTISER, METRIC_MEDIA_COST_ECPAPV_USD, METRIC_MEDIA_COST_ECPAPV_PARTNER, METRIC_MEDIA_COST_ECPAPC_ADVERTISER, METRIC_MEDIA_COST_ECPAPC_USD, METRIC_MEDIA_COST_ECPAPC_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPM_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPM_USD, METRIC_TOTAL_MEDIA_COST_ECPM_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPC_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPC_USD, METRIC_TOTAL_MEDIA_COST_ECPC_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPA_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPA_USD, METRIC_TOTAL_MEDIA_COST_ECPA_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPAPV_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPAPV_USD, METRIC_TOTAL_MEDIA_COST_ECPAPV_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPAPC_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPAPC_USD, METRIC_TOTAL_MEDIA_COST_ECPAPC_PARTNER, METRIC_RICH_MEDIA_VIDEO_PLAYS, METRIC_RICH_MEDIA_VIDEO_COMPLETIONS, METRIC_RICH_MEDIA_VIDEO_PAUSES, METRIC_RICH_MEDIA_VIDEO_MUTES, METRIC_RICH_MEDIA_VIDEO_MIDPOINTS, METRIC_RICH_MEDIA_VIDEO_FULL_SCREENS, METRIC_RICH_MEDIA_VIDEO_FIRST_QUARTILE_COMPLETES, METRIC_RICH_MEDIA_VIDEO_THIRD_QUARTILE_COMPLETES, METRIC_CLICK_TO_POST_CLICK_CONVERSION_RATE, METRIC_IMPRESSIONS_TO_CONVERSION_RATE, METRIC_CONVERSIONS_PER_MILLE, METRIC_CTR, METRIC_BID_REQUESTS, METRIC_UNIQUE_VISITORS_COOKIES, METRIC_REVENUE_ECPCV_ADVERTISER, METRIC_REVENUE_ECPCV_USD, METRIC_REVENUE_ECPCV_PARTNER, METRIC_MEDIA_COST_ECPCV_ADVERTISER, METRIC_MEDIA_COST_ECPCV_USD, METRIC_MEDIA_COST_ECPCV_PARTNER, METRIC_TOTAL_MEDIA_COST_ECPCV_ADVERTISER, METRIC_TOTAL_MEDIA_COST_ECPCV_USD, METRIC_TOTAL_MEDIA_COST_ECPCV_PARTNER, METRIC_RICH_MEDIA_VIDEO_SKIPS, METRIC_FEE2_ADVERTISER, METRIC_FEE2_USD, METRIC_FEE2_PARTNER, METRIC_FEE3_ADVERTISER, METRIC_FEE3_USD, METRIC_FEE3_PARTNER, METRIC_FEE4_ADVERTISER, METRIC_FEE4_USD, METRIC_FEE4_PARTNER, METRIC_FEE5_ADVERTISER, METRIC_FEE5_USD, METRIC_FEE5_PARTNER, METRIC_FEE6_ADVERTISER, METRIC_FEE6_USD, METRIC_FEE6_PARTNER, METRIC_FEE7_ADVERTISER, METRIC_FEE7_USD, METRIC_FEE7_PARTNER, METRIC_FEE8_ADVERTISER, METRIC_FEE8_USD, METRIC_FEE8_PARTNER, METRIC_FEE9_ADVERTISER, METRIC_FEE9_USD, METRIC_FEE9_PARTNER, METRIC_FEE10_ADVERTISER, METRIC_FEE10_USD, METRIC_FEE10_PARTNER, METRIC_FEE11_ADVERTISER, METRIC_FEE11_USD, METRIC_FEE11_PARTNER, METRIC_FEE12_ADVERTISER, METRIC_FEE12_USD, METRIC_FEE12_PARTNER, METRIC_FEE13_ADVERTISER, METRIC_FEE13_USD, METRIC_FEE13_PARTNER, METRIC_FEE14_ADVERTISER, METRIC_FEE14_USD, METRIC_FEE14_PARTNER, METRIC_FEE15_ADVERTISER, METRIC_FEE15_USD, METRIC_FEE15_PARTNER, METRIC_CPM_FEE3_ADVERTISER, METRIC_CPM_FEE3_USD, METRIC_CPM_FEE3_PARTNER, METRIC_CPM_FEE4_ADVERTISER, METRIC_CPM_FEE4_USD, METRIC_CPM_FEE4_PARTNER, METRIC_CPM_FEE5_ADVERTISER, METRIC_CPM_FEE5_USD, METRIC_CPM_FEE5_PARTNER, METRIC_MEDIA_FEE3_ADVERTISER, METRIC_MEDIA_FEE3_USD, METRIC_MEDIA_FEE3_PARTNER, METRIC_MEDIA_FEE4_ADVERTISER, METRIC_MEDIA_FEE4_USD, METRIC_MEDIA_FEE4_PARTNER, METRIC_MEDIA_FEE5_ADVERTISER, METRIC_MEDIA_FEE5_USD, METRIC_MEDIA_FEE5_PARTNER, METRIC_VIDEO_COMPANION_IMPRESSIONS, METRIC_VIDEO_COMPANION_CLICKS, METRIC_FEE16_ADVERTISER, METRIC_FEE16_USD, METRIC_FEE16_PARTNER, METRIC_FEE17_ADVERTISER, METRIC_FEE17_USD, METRIC_FEE17_PARTNER, METRIC_FEE18_ADVERTISER, METRIC_FEE18_USD, METRIC_FEE18_PARTNER, METRIC_TRUEVIEW_VIEWS, METRIC_TRUEVIEW_UNIQUE_VIEWERS, METRIC_TRUEVIEW_EARNED_VIEWS, METRIC_TRUEVIEW_EARNED_SUBSCRIBERS, METRIC_TRUEVIEW_EARNED_PLAYLIST_ADDITIONS, METRIC_TRUEVIEW_EARNED_LIKES, METRIC_TRUEVIEW_EARNED_SHARES, METRIC_TRUEVIEW_IMPRESSION_SHARE, METRIC_TRUEVIEW_LOST_IS_BUDGET, METRIC_TRUEVIEW_LOST_IS_RANK, METRIC_TRUEVIEW_VIEW_THROUGH_CONVERSION, METRIC_TRUEVIEW_CONVERSION_MANY_PER_VIEW, METRIC_TRUEVIEW_VIEW_RATE, METRIC_TRUEVIEW_CONVERSION_RATE_ONE_PER_VIEW, METRIC_TRUEVIEW_CPV_ADVERTISER, METRIC_TRUEVIEW_CPV_USD, METRIC_TRUEVIEW_CPV_PARTNER, METRIC_FEE19_ADVERTISER, METRIC_FEE19_USD, METRIC_FEE19_PARTNER, METRIC_TEA_TRUEVIEW_IMPRESSIONS, METRIC_TEA_TRUEVIEW_UNIQUE_COOKIES, METRIC_FEE20_ADVERTISER, METRIC_FEE20_USD, METRIC_FEE20_PARTNER, METRIC_FEE21_ADVERTISER, METRIC_FEE21_USD, METRIC_FEE21_PARTNER, METRIC_FEE22_ADVERTISER, METRIC_FEE22_USD, METRIC_FEE22_PARTNER, METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_ADVERTISER, METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_USD, METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_PARTNER, METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_ADVERTISER, METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_USD, METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_PARTNER, METRIC_PROFIT_VIEWABLE_ECPM_ADVERTISER, METRIC_PROFIT_VIEWABLE_ECPM_USD, METRIC_PROFIT_VIEWABLE_ECPM_PARTNER, METRIC_REVENUE_VIEWABLE_ECPM_ADVERTISER, METRIC_REVENUE_VIEWABLE_ECPM_USD, METRIC_REVENUE_VIEWABLE_ECPM_PARTNER, METRIC_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER, METRIC_MEDIA_COST_VIEWABLE_ECPM_USD, METRIC_MEDIA_COST_VIEWABLE_ECPM_PARTNER, METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER, METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_USD, METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_PARTNER, METRIC_TRUEVIEW_ENGAGEMENTS, METRIC_TRUEVIEW_ENGAGEMENT_RATE, METRIC_TRUEVIEW_AVERAGE_CPE_ADVERTISER, METRIC_TRUEVIEW_AVERAGE_CPE_USD, METRIC_TRUEVIEW_AVERAGE_CPE_PARTNER, METRIC_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_PCT_MEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_PCT_VIEWABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME, METRIC_ACTIVE_VIEW_UNMEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_UNVIEWABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_DISTRIBUTION_UNMEASURABLE, METRIC_ACTIVE_VIEW_DISTRIBUTION_UNVIEWABLE, METRIC_ACTIVE_VIEW_DISTRIBUTION_VIEWABLE, METRIC_ACTIVE_VIEW_PERCENT_VIEWABLE_FOR_TIME_THRESHOLD, METRIC_ACTIVE_VIEW_VIEWABLE_FOR_TIME_THRESHOLD, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_AT_START, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_FIRST_QUAR, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_SECOND_QUAR, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_THIRD_QUAR, METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_ON_COMPLETE, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_AT_START, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_FIRST_QUAR, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_SECOND_QUAR, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_THIRD_QUAR, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_ON_COMPLETE, METRIC_ACTIVE_VIEW_AUDIBLE_VISIBLE_ON_COMPLETE_IMPRESSIONS, METRIC_VIEWABLE_BID_REQUESTS, METRIC_COOKIE_REACH_IMPRESSION_REACH, METRIC_COOKIE_REACH_AVERAGE_IMPRESSION_FREQUENCY, METRIC_DBM_ENGAGEMENT_RATE, METRIC_RICH_MEDIA_SCROLLS, METRIC_CM_POST_VIEW_REVENUE, METRIC_CM_POST_CLICK_REVENUE, METRIC_FLOODLIGHT_IMPRESSIONS, METRIC_BILLABLE_IMPRESSIONS, METRIC_NIELSEN_AVERAGE_FREQUENCY, METRIC_NIELSEN_IMPRESSIONS, METRIC_NIELSEN_UNIQUE_AUDIENCE, METRIC_NIELSEN_GRP, METRIC_NIELSEN_IMPRESSION_INDEX, METRIC_NIELSEN_IMPRESSIONS_SHARE, METRIC_NIELSEN_POPULATION, METRIC_NIELSEN_POPULATION_REACH, METRIC_NIELSEN_POPULATION_SHARE, METRIC_NIELSEN_REACH_INDEX, METRIC_NIELSEN_REACH_SHARE, METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_IMPRESSIONS, METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_MEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_RATE, METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_IMPRESSIONS, METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_MEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_RATE, METRIC_ACTIVE_VIEW_CUSTOM_METRIC_MEASURABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_CUSTOM_METRIC_VIEWABLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_CUSTOM_METRIC_VIEWABLE_RATE, METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_IMPRESSIONS, METRIC_ACTIVE_VIEW_PERCENT_FULLY_ON_SCREEN_2_SEC, METRIC_ACTIVE_VIEW_PERCENT_FULL_SCREEN, METRIC_ACTIVE_VIEW_PERCENT_IN_BACKGROUND, METRIC_ACTIVE_VIEW_PERCENT_OF_AD_PLAYED, METRIC_ACTIVE_VIEW_PERCENT_OF_COMPLETED_IMPRESSIONS_AUDIBLE_AND_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_OF_COMPLETED_IMPRESSIONS_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_OF_FIRST_QUARTILE_IMPRESSIONS_AUDIBLE_AND_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_OF_FIRST_QUARTILE_IMPRESSIONS_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_OF_MIDPOINT_IMPRESSIONS_AUDIBLE_AND_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_OF_MIDPOINT_IMPRESSIONS_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_OF_THIRD_QUARTILE_IMPRESSIONS_AUDIBLE_AND_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_OF_THIRD_QUARTILE_IMPRESSIONS_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_AUDIBLE, METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_AUDIBLE_AND_VISIBLE, METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_VISIBLE, METRIC_ADAPTED_AUDIENCE_FREQUENCY, METRIC_ADLINGO_FEE_ADVERTISER_CURRENCY, METRIC_AUDIO_CLIENT_COST_ECPCL_ADVERTISER_CURRENCY, METRIC_AUDIO_MEDIA_COST_ECPCL_ADVERTISER_CURRENCY, METRIC_AUDIO_MUTES_AUDIO, METRIC_AUDIO_REVENUE_ECPCL_ADVERTISER_CURRENCY, METRIC_AUDIO_UNMUTES_AUDIO, METRIC_AUDIO_UNMUTES_VIDEO, METRIC_AVERAGE_DISPLAY_TIME, METRIC_AVERAGE_IMPRESSION_FREQUENCY_PER_USER, METRIC_AVERAGE_INTERACTION_TIME, METRIC_AVERAGE_WATCH_TIME_PER_IMPRESSION, METRIC_BEGIN_TO_RENDER_ELIGIBLE_IMPRESSIONS, METRIC_BEGIN_TO_RENDER_IMPRESSIONS, METRIC_BENCHMARK_FREQUENCY, METRIC_BRAND_LIFT_ABSOLUTE_BRAND_LIFT, METRIC_BRAND_LIFT_ALL_SURVEY_RESPONSES, METRIC_BRAND_LIFT_BASELINE_POSITIVE_RESPONSE_RATE, METRIC_BRAND_LIFT_BASELINE_SURVEY_RESPONSES, METRIC_BRAND_LIFT_COST_PER_LIFTED_USER, METRIC_BRAND_LIFT_EXPOSED_SURVEY_RESPONSES, METRIC_BRAND_LIFT_HEADROOM_BRAND_LIFT, METRIC_BRAND_LIFT_RELATIVE_BRAND_LIFT, METRIC_BRAND_LIFT_USERS, METRIC_CARD_CLICKS, METRIC_CLIENT_COST_ADVERTISER_CURRENCY, METRIC_CLIENT_COST_ECPA_ADVERTISER_CURRENCY, METRIC_CLIENT_COST_ECPA_PC_ADVERTISER_CURRENCY, METRIC_CLIENT_COST_ECPA_PV_ADVERTISER_CURRENCY, METRIC_CLIENT_COST_ECPC_ADVERTISER_CURRENCY, METRIC_CLIENT_COST_ECPM_ADVERTISER_CURRENCY, METRIC_CLIENT_COST_VIEWABLE_ECPM_ADVERTISER_CURRENCY, METRIC_CM_POST_CLICK_REVENUE_CROSS_ENVIRONMENT, METRIC_CM_POST_VIEW_REVENUE_CROSS_ENVIRONMENT, METRIC_COMPANION_CLICKS_AUDIO, METRIC_COMPANION_IMPRESSIONS_AUDIO, METRIC_COMPLETE_LISTENS_AUDIO, METRIC_COMPLETION_RATE_AUDIO, METRIC_COUNTERS, METRIC_CUSTOM_FEE_1_ADVERTISER_CURRENCY, METRIC_CUSTOM_FEE_2_ADVERTISER_CURRENCY, METRIC_CUSTOM_FEE_3_ADVERTISER_CURRENCY, METRIC_CUSTOM_FEE_4_ADVERTISER_CURRENCY, METRIC_CUSTOM_FEE_5_ADVERTISER_CURRENCY, METRIC_CUSTOM_VALUE_PER_1000_IMPRESSIONS, METRIC_ENGAGEMENTS, METRIC_ESTIMATED_CPM_FOR_IMPRESSIONS_WITH_CUSTOM_VALUE_ADVERTISER_CURRENCY, METRIC_ESTIMATED_TOTAL_COST_FOR_IMPRESSIONS_WITH_CUSTOM_VALUE_ADVERTISER_CURRENCY, METRIC_EXITS, METRIC_EXPANSIONS, METRIC_FIRST_QUARTILE_AUDIO, METRIC_GENERAL_INVALID_TRAFFIC_GIVT_IMPRESSIONS, METRIC_GENERAL_INVALID_TRAFFIC_GIVT_TRACKED_ADS, METRIC_GIVT_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS, METRIC_GIVT_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS, METRIC_GIVT_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS, METRIC_GIVT_BEGIN_TO_RENDER_IMPRESSIONS, METRIC_GIVT_CLICKS, METRIC_GMAIL_CONVERSIONS, METRIC_GMAIL_POST_CLICK_CONVERSIONS, METRIC_GMAIL_POST_VIEW_CONVERSIONS, METRIC_GMAIL_POTENTIAL_VIEWS, METRIC_IMPRESSIONS_WITH_CUSTOM_VALUE, METRIC_IMPRESSIONS_WITH_POSITIVE_CUSTOM_VALUE, METRIC_IMPRESSION_CUSTOM_VALUE_COST, METRIC_INTERACTIVE_IMPRESSIONS, METRIC_INVALID_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS, METRIC_INVALID_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS, METRIC_INVALID_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS, METRIC_INVALID_BEGIN_TO_RENDER_IMPRESSIONS, METRIC_INVALID_CLICKS, METRIC_INVALID_IMPRESSIONS, METRIC_INVALID_TRACKED_ADS, METRIC_MEDIA_COST_ADVERTISER_CURRENCY_PER_STORE_VISIT_ADX_ONLY, METRIC_MIDPOINT_AUDIO, METRIC_ORIGINAL_AUDIENCE_FREQUENCY, METRIC_PAUSES_AUDIO, METRIC_PERCENT_IMPRESSIONS_WITH_POSITIVE_CUSTOM_VALUE, METRIC_PLATFORM_FEE_RATE, METRIC_POST_CLICK_CONVERSIONS_CROSS_ENVIRONMENT, METRIC_POST_VIEW_CONVERSIONS_CROSS_ENVIRONMENT, METRIC_POTENTIAL_IMPRESSIONS, METRIC_POTENTIAL_VIEWS, METRIC_PREMIUM_FEE_ADVERTISER_CURRENCY, METRIC_PROGRAMMATIC_GUARANTEED_IMPRESSIONS_PASSED_DUE_TO_FREQUENCY, METRIC_PROGRAMMATIC_GUARANTEED_SAVINGS_RE_INVESTED_DUE_TO_FREQUENCY_ADVERTISER_CURRENCY, METRIC_REFUND_BILLABLE_COST_ADVERTISER_CURRENCY, METRIC_REFUND_MEDIA_COST_ADVERTISER_CURRENCY, METRIC_REFUND_PLATFORM_FEE_ADVERTISER_CURRENCY, METRIC_REVENUE_ADVERTISER_CURRENCY_PER_STORE_VISIT_ADX_ONLY, METRIC_RICH_MEDIA_ENGAGEMENTS, METRIC_STARTS_AUDIO, METRIC_STOPS_AUDIO, METRIC_STORE_VISITS_ADX_ONLY, METRIC_STORE_VISIT_CONVERSIONS, METRIC_THIRD_QUARTILE_AUDIO, METRIC_TIMERS, METRIC_TOTAL_AUDIO_MEDIA_COST_ECPCL_ADVERTISER_CURRENCY, METRIC_TOTAL_CONVERSIONS_CROSS_ENVIRONMENT, METRIC_TOTAL_DISPLAY_TIME, METRIC_TOTAL_IMPRESSION_CUSTOM_VALUE, METRIC_TOTAL_INTERACTION_TIME, METRIC_TOTAL_MEDIA_COST_ADVERTISER_CURRENCY_PER_STORE_VISIT_ADX_ONLY, METRIC_TOTAL_USERS, METRIC_TRACKED_ADS, METRIC_TRUEVIEW_GENERAL_INVALID_TRAFFIC_GIVT_VIEWS, METRIC_TRUEVIEW_INVALID_VIEWS, METRIC_UNIQUE_COOKIES_WITH_IMPRESSIONS, METRIC_UNIQUE_REACH_AVERAGE_IMPRESSION_FREQUENCY, METRIC_UNIQUE_REACH_CLICK_REACH, METRIC_UNIQUE_REACH_IMPRESSION_REACH, METRIC_UNIQUE_REACH_TOTAL_REACH, METRIC_VERIFIABLE_IMPRESSIONS, METRIC_VIDEO_CLIENT_COST_ECPCV_ADVERTISER_CURRENCY, METRIC_WATCH_TIME, METRIC_LAST_TOUCH_TOTAL_CONVERSIONS, METRIC_LAST_TOUCH_CLICK_THROUGH_CONVERSIONS, METRIC_LAST_TOUCH_VIEW_THROUGH_CONVERSIONS, METRIC_TOTAL_PATHS, METRIC_TOTAL_EXPOSURES, METRIC_PATH_CONVERSION_RATE, METRIC_CONVERTING_PATHS, METRIC_ACTIVITY_REVENUE, METRIC_PERCENT_INVALID_IMPRESSIONS_PREBID, METRIC_GRP_CORRECTED_IMPRESSIONS, METRIC_DEMO_CORRECTED_CLICKS, METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_BY_DEMO, METRIC_VIRTUAL_PEOPLE_CLICK_REACH_BY_DEMO, METRIC_VIRTUAL_PEOPLE_AVERAGE_IMPRESSION_FREQUENCY_BY_DEMO, METRIC_DEMO_COMPOSITION_IMPRESSION, METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_SHARE_PERCENT, METRIC_DEMO_POPULATION, METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_PERCENT, METRIC_TARGET_RATING_POINTS, METRIC_PROVISIONAL_IMPRESSIONS, METRIC_VENDOR_BLOCKED_ADS)
  * options [Options](#options)
  * type `string` (values: TYPE_GENERAL, TYPE_AUDIENCE_PERFORMANCE, TYPE_INVENTORY_AVAILABILITY, TYPE_KEYWORD, TYPE_PIXEL_LOAD, TYPE_AUDIENCE_COMPOSITION, TYPE_CROSS_PARTNER, TYPE_PAGE_CATEGORY, TYPE_THIRD_PARTY_DATA_PROVIDER, TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER, TYPE_CLIENT_SAFE, TYPE_ORDER_ID, TYPE_FEE, TYPE_CROSS_FEE, TYPE_ACTIVE_GRP, TYPE_YOUTUBE_VERTICAL, TYPE_COMSCORE_VCE, TYPE_TRUEVIEW, TYPE_NIELSEN_AUDIENCE_PROFILE, TYPE_NIELSEN_DAILY_REACH_BUILD, TYPE_NIELSEN_SITE, TYPE_REACH_AND_FREQUENCY, TYPE_ESTIMATED_CONVERSION, TYPE_VERIFICATION, TYPE_TRUEVIEW_IAR, TYPE_NIELSEN_ONLINE_GLOBAL_MARKET, TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE, TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD, TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET, TYPE_NOT_SUPPORTED, TYPE_REACH_AUDIENCE, TYPE_LINEAR_TV_SEARCH_LIFT, TYPE_PATH, TYPE_PATH_ATTRIBUTION): Report type.

### PathFilter
* PathFilter `object`: Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
  * eventFilters `array`: Filter on an event to be applied to some part of the path.
    * items [EventFilter](#eventfilter)
  * pathMatchPosition `string` (values: ANY, FIRST, LAST): Indicates the position of the path the filter should match to (first, last, or any event in path).

### PathQueryOptions
* PathQueryOptions `object`: Path Query Options for Report Options.
  * channelGrouping [ChannelGrouping](#channelgrouping)
  * pathFilters `array`: Path Filters. There is a limit of 100 path filters that can be set per report.
    * items [PathFilter](#pathfilter)

### PathQueryOptionsFilter
* PathQueryOptionsFilter `object`: Dimension Filter on path events.
  * filter `string` (values: FILTER_UNKNOWN, FILTER_DATE, FILTER_DAY_OF_WEEK, FILTER_WEEK, FILTER_MONTH, FILTER_YEAR, FILTER_TIME_OF_DAY, FILTER_CONVERSION_DELAY, FILTER_CREATIVE_ID, FILTER_CREATIVE_SIZE, FILTER_CREATIVE_TYPE, FILTER_EXCHANGE_ID, FILTER_AD_POSITION, FILTER_PUBLIC_INVENTORY, FILTER_INVENTORY_SOURCE, FILTER_CITY, FILTER_REGION, FILTER_DMA, FILTER_COUNTRY, FILTER_SITE_ID, FILTER_CHANNEL_ID, FILTER_PARTNER, FILTER_ADVERTISER, FILTER_INSERTION_ORDER, FILTER_LINE_ITEM, FILTER_PARTNER_CURRENCY, FILTER_ADVERTISER_CURRENCY, FILTER_ADVERTISER_TIMEZONE, FILTER_LINE_ITEM_TYPE, FILTER_USER_LIST, FILTER_USER_LIST_FIRST_PARTY, FILTER_USER_LIST_THIRD_PARTY, FILTER_TARGETED_USER_LIST, FILTER_DATA_PROVIDER, FILTER_ORDER_ID, FILTER_VIDEO_PLAYER_SIZE, FILTER_VIDEO_DURATION_SECONDS, FILTER_KEYWORD, FILTER_PAGE_CATEGORY, FILTER_CAMPAIGN_DAILY_FREQUENCY, FILTER_LINE_ITEM_DAILY_FREQUENCY, FILTER_LINE_ITEM_LIFETIME_FREQUENCY, FILTER_OS, FILTER_BROWSER, FILTER_CARRIER, FILTER_SITE_LANGUAGE, FILTER_INVENTORY_FORMAT, FILTER_ZIP_CODE, FILTER_VIDEO_RATING_TIER, FILTER_VIDEO_FORMAT_SUPPORT, FILTER_VIDEO_SKIPPABLE_SUPPORT, FILTER_VIDEO_VPAID_SUPPORT, FILTER_VIDEO_CREATIVE_DURATION, FILTER_PAGE_LAYOUT, FILTER_VIDEO_AD_POSITION_IN_STREAM, FILTER_AGE, FILTER_GENDER, FILTER_QUARTER, FILTER_TRUEVIEW_CONVERSION_TYPE, FILTER_MOBILE_GEO, FILTER_MRAID_SUPPORT, FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY, FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE, FILTER_NIELSEN_COUNTRY_CODE, FILTER_NIELSEN_DEVICE_ID, FILTER_NIELSEN_GENDER, FILTER_NIELSEN_AGE, FILTER_INVENTORY_SOURCE_TYPE, FILTER_CREATIVE_WIDTH, FILTER_CREATIVE_HEIGHT, FILTER_DFP_ORDER_ID, FILTER_TRUEVIEW_AGE, FILTER_TRUEVIEW_GENDER, FILTER_TRUEVIEW_PARENTAL_STATUS, FILTER_TRUEVIEW_REMARKETING_LIST, FILTER_TRUEVIEW_INTEREST, FILTER_TRUEVIEW_AD_GROUP_ID, FILTER_TRUEVIEW_AD_GROUP_AD_ID, FILTER_TRUEVIEW_IAR_LANGUAGE, FILTER_TRUEVIEW_IAR_GENDER, FILTER_TRUEVIEW_IAR_AGE, FILTER_TRUEVIEW_IAR_CATEGORY, FILTER_TRUEVIEW_IAR_COUNTRY, FILTER_TRUEVIEW_IAR_CITY, FILTER_TRUEVIEW_IAR_REGION, FILTER_TRUEVIEW_IAR_ZIPCODE, FILTER_TRUEVIEW_IAR_REMARKETING_LIST, FILTER_TRUEVIEW_IAR_INTEREST, FILTER_TRUEVIEW_IAR_PARENTAL_STATUS, FILTER_TRUEVIEW_IAR_TIME_OF_DAY, FILTER_TRUEVIEW_CUSTOM_AFFINITY, FILTER_TRUEVIEW_CATEGORY, FILTER_TRUEVIEW_KEYWORD, FILTER_TRUEVIEW_PLACEMENT, FILTER_TRUEVIEW_URL, FILTER_TRUEVIEW_COUNTRY, FILTER_TRUEVIEW_REGION, FILTER_TRUEVIEW_CITY, FILTER_TRUEVIEW_DMA, FILTER_TRUEVIEW_ZIPCODE, FILTER_NOT_SUPPORTED, FILTER_MEDIA_PLAN, FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL, FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO, FILTER_SKIPPABLE_SUPPORT, FILTER_COMPANION_CREATIVE_ID, FILTER_BUDGET_SEGMENT_DESCRIPTION, FILTER_FLOODLIGHT_ACTIVITY_ID, FILTER_DEVICE_MODEL, FILTER_DEVICE_MAKE, FILTER_DEVICE_TYPE, FILTER_CREATIVE_ATTRIBUTE, FILTER_INVENTORY_COMMITMENT_TYPE, FILTER_INVENTORY_RATE_TYPE, FILTER_INVENTORY_DELIVERY_METHOD, FILTER_INVENTORY_SOURCE_EXTERNAL_ID, FILTER_AUTHORIZED_SELLER_STATE, FILTER_VIDEO_DURATION_SECONDS_RANGE, FILTER_PARTNER_NAME, FILTER_PARTNER_STATUS, FILTER_ADVERTISER_NAME, FILTER_ADVERTISER_INTEGRATION_CODE, FILTER_ADVERTISER_INTEGRATION_STATUS, FILTER_CARRIER_NAME, FILTER_CHANNEL_NAME, FILTER_CITY_NAME, FILTER_COMPANION_CREATIVE_NAME, FILTER_USER_LIST_FIRST_PARTY_NAME, FILTER_USER_LIST_THIRD_PARTY_NAME, FILTER_NIELSEN_RESTATEMENT_DATE, FILTER_NIELSEN_DATE_RANGE, FILTER_INSERTION_ORDER_NAME, FILTER_REGION_NAME, FILTER_DMA_NAME, FILTER_TRUEVIEW_IAR_REGION_NAME, FILTER_TRUEVIEW_DMA_NAME, FILTER_TRUEVIEW_REGION_NAME, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME, FILTER_AD_TYPE, FILTER_ALGORITHM, FILTER_ALGORITHM_ID, FILTER_AMP_PAGE_REQUEST, FILTER_ANONYMOUS_INVENTORY_MODELING, FILTER_APP_URL, FILTER_APP_URL_EXCLUDED, FILTER_ATTRIBUTED_USERLIST, FILTER_ATTRIBUTED_USERLIST_COST, FILTER_ATTRIBUTED_USERLIST_TYPE, FILTER_ATTRIBUTION_MODEL, FILTER_AUDIENCE_LIST, FILTER_AUDIENCE_LIST_COST, FILTER_AUDIENCE_LIST_TYPE, FILTER_AUDIENCE_NAME, FILTER_AUDIENCE_TYPE, FILTER_BILLABLE_OUTCOME, FILTER_BRAND_LIFT_TYPE, FILTER_CHANNEL_TYPE, FILTER_CM_PLACEMENT_ID, FILTER_CONVERSION_SOURCE, FILTER_CONVERSION_SOURCE_ID, FILTER_COUNTRY_ID, FILTER_CREATIVE, FILTER_CREATIVE_ASSET, FILTER_CREATIVE_INTEGRATION_CODE, FILTER_CREATIVE_RENDERED_IN_AMP, FILTER_CREATIVE_SOURCE, FILTER_CREATIVE_STATUS, FILTER_DATA_PROVIDER_NAME, FILTER_DETAILED_DEMOGRAPHICS, FILTER_DETAILED_DEMOGRAPHICS_ID, FILTER_DEVICE, FILTER_GAM_INSERTION_ORDER, FILTER_GAM_LINE_ITEM, FILTER_GAM_LINE_ITEM_ID, FILTER_DIGITAL_CONTENT_LABEL, FILTER_DOMAIN, FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST, FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST, FILTER_EXCHANGE, FILTER_EXCHANGE_CODE, FILTER_EXTENSION, FILTER_EXTENSION_STATUS, FILTER_EXTENSION_TYPE, FILTER_FIRST_PARTY_AUDIENCE_LIST_COST, FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE, FILTER_FLOODLIGHT_ACTIVITY, FILTER_FORMAT, FILTER_GMAIL_AGE, FILTER_GMAIL_CITY, FILTER_GMAIL_COUNTRY, FILTER_GMAIL_COUNTRY_NAME, FILTER_GMAIL_DEVICE_TYPE, FILTER_GMAIL_DEVICE_TYPE_NAME, FILTER_GMAIL_GENDER, FILTER_GMAIL_REGION, FILTER_GMAIL_REMARKETING_LIST, FILTER_HOUSEHOLD_INCOME, FILTER_IMPRESSION_COUNTING_METHOD, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER, FILTER_INSERTION_ORDER_INTEGRATION_CODE, FILTER_INSERTION_ORDER_STATUS, FILTER_INTEREST, FILTER_INVENTORY_SOURCE_GROUP, FILTER_INVENTORY_SOURCE_GROUP_ID, FILTER_INVENTORY_SOURCE_ID, FILTER_INVENTORY_SOURCE_NAME, FILTER_LIFE_EVENT, FILTER_LIFE_EVENTS, FILTER_LINE_ITEM_INTEGRATION_CODE, FILTER_LINE_ITEM_NAME, FILTER_LINE_ITEM_STATUS, FILTER_MATCH_RATIO, FILTER_MEASUREMENT_SOURCE, FILTER_MEDIA_PLAN_NAME, FILTER_PARENTAL_STATUS, FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS, FILTER_PLATFORM, FILTER_PLAYBACK_METHOD, FILTER_POSITION_IN_CONTENT, FILTER_PUBLISHER_PROPERTY, FILTER_PUBLISHER_PROPERTY_ID, FILTER_PUBLISHER_PROPERTY_SECTION, FILTER_PUBLISHER_PROPERTY_SECTION_ID, FILTER_REFUND_REASON, FILTER_REMARKETING_LIST, FILTER_REWARDED, FILTER_SENSITIVE_CATEGORY, FILTER_SERVED_PIXEL_DENSITY, FILTER_TARGETED_DATA_PROVIDERS, FILTER_THIRD_PARTY_AUDIENCE_LIST_COST, FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE, FILTER_TRUEVIEW_AD, FILTER_TRUEVIEW_AD_GROUP, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID, FILTER_TRUEVIEW_HOUSEHOLD_INCOME, FILTER_TRUEVIEW_IAR_COUNTRY_NAME, FILTER_TRUEVIEW_REMARKETING_LIST_NAME, FILTER_VARIANT_ID, FILTER_VARIANT_NAME, FILTER_VARIANT_VERSION, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE, FILTER_VERIFICATION_VIDEO_POSITION, FILTER_VIDEO_COMPANION_CREATIVE_SIZE, FILTER_VIDEO_CONTINUOUS_PLAY, FILTER_VIDEO_DURATION, FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST, FILTER_YOUTUBE_AD_VIDEO, FILTER_YOUTUBE_AD_VIDEO_ID, FILTER_YOUTUBE_CHANNEL, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER, FILTER_YOUTUBE_VIDEO, FILTER_ZIP_POSTAL_CODE, FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS, FILTER_TRUEVIEW_PLACEMENT_ID, FILTER_PATH_PATTERN_ID, FILTER_PATH_EVENT_INDEX, FILTER_EVENT_TYPE, FILTER_CHANNEL_GROUPING, FILTER_OM_SDK_AVAILABLE, FILTER_DATA_SOURCE): Dimension the filter is applied to.
  * match `string` (values: UNKNOWN, EXACT, PARTIAL, BEGINS_WITH, WILDCARD_EXPRESSION): Indicates how the filter should be matched to the value.
  * values `array`: Value to filter on.
    * items `string`

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
  * dataRange `string` (values: CUSTOM_DATES, CURRENT_DAY, PREVIOUS_DAY, WEEK_TO_DATE, MONTH_TO_DATE, QUARTER_TO_DATE, YEAR_TO_DATE, PREVIOUS_WEEK, PREVIOUS_HALF_MONTH, PREVIOUS_MONTH, PREVIOUS_QUARTER, PREVIOUS_YEAR, LAST_7_DAYS, LAST_30_DAYS, LAST_90_DAYS, LAST_365_DAYS, ALL_TIME, LAST_14_DAYS, TYPE_NOT_SUPPORTED, LAST_60_DAYS): Range of report data.
  * format `string` (values: CSV, EXCEL_CSV, XLSX): Format of the generated report.
  * googleCloudStoragePathForLatestReport `string`: The path to the location in Google Cloud Storage where the latest report is stored.
  * googleDrivePathForLatestReport `string`: The path in Google Drive for the latest report.
  * latestReportRunTimeMs `string`: The time when the latest report started to run.
  * locale `string`: Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English.
  * reportCount `integer`: Number of reports that have been generated for the query.
  * running `boolean`: Whether the latest report is currently running.
  * sendNotification `boolean`: Whether to send an email notification when a report is ready. Default to false.
  * shareEmailAddress `array`: List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.
    * items `string`
  * title `string`: Query title. It is used to name the reports generated from this query.

### QuerySchedule
* QuerySchedule `object`: Information on how frequently and when to run a query.
  * endTimeMs `string`: Datetime to periodically run the query until.
  * frequency `string` (values: ONE_TIME, DAILY, WEEKLY, SEMI_MONTHLY, MONTHLY, QUARTERLY): How often the query is run.
  * nextRunMinuteOfDay `integer`: Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.
  * nextRunTimezoneCode `string`: Canonical timezone code for report generation time. Defaults to America/New_York.
  * startTimeMs `string`: When to start running the query. Not applicable to `ONE_TIME` frequency.

### Report
* Report `object`: Represents a report.
  * key [ReportKey](#reportkey)
  * metadata [ReportMetadata](#reportmetadata)
  * params [Parameters](#parameters)

### ReportFailure
* ReportFailure `object`: An explanation of a report failure.
  * errorCode `string` (values: AUTHENTICATION_ERROR, UNAUTHORIZED_API_ACCESS, SERVER_ERROR, VALIDATION_ERROR, REPORTING_FATAL_ERROR, REPORTING_TRANSIENT_ERROR, REPORTING_IMCOMPATIBLE_METRICS, REPORTING_ILLEGAL_FILENAME, REPORTING_QUERY_NOT_FOUND, REPORTING_BUCKET_NOT_FOUND, REPORTING_CREATE_BUCKET_FAILED, REPORTING_DELETE_BUCKET_FAILED, REPORTING_UPDATE_BUCKET_PERMISSION_FAILED, REPORTING_WRITE_BUCKET_OBJECT_FAILED, DEPRECATED_REPORTING_INVALID_QUERY, REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS, REPORTING_INVALID_QUERY_TITLE_MISSING, REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS): Error code that shows why the report was not created.

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
  * state `string` (values: RUNNING, DONE, FAILED): The state of the report.

### RowStatus
* RowStatus `object`: Represents the upload status of a row in the request.
  * changed `boolean`: Whether the stored entity is changed as a result of upload.
  * entityId `string`: Entity Id.
  * entityName `string`: Entity name.
  * errors `array`: Reasons why the entity can't be uploaded.
    * items `string`
  * persisted `boolean`: Whether the entity is persisted.
  * rowNumber `integer`: Row number.

### Rule
* Rule `object`: A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied.
  * disjunctiveMatchStatements `array`
    * items [DisjunctiveMatchStatement](#disjunctivematchstatement)
  * name `string`: Rule name.

### RunQueryRequest
* RunQueryRequest `object`: Request to run a stored query to generate a report.
  * dataRange `string` (values: CUSTOM_DATES, CURRENT_DAY, PREVIOUS_DAY, WEEK_TO_DATE, MONTH_TO_DATE, QUARTER_TO_DATE, YEAR_TO_DATE, PREVIOUS_WEEK, PREVIOUS_HALF_MONTH, PREVIOUS_MONTH, PREVIOUS_QUARTER, PREVIOUS_YEAR, LAST_7_DAYS, LAST_30_DAYS, LAST_90_DAYS, LAST_365_DAYS, ALL_TIME, LAST_14_DAYS, TYPE_NOT_SUPPORTED, LAST_60_DAYS): Report data range used to generate the report.
  * reportDataEndTimeMs `string`: The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
  * reportDataStartTimeMs `string`: The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
  * timezoneCode `string`: Canonical timezone code for report data time. Defaults to America/New_York.

### UploadLineItemsRequest
* UploadLineItemsRequest `object`: Request to upload line items.
  * dryRun `boolean`: Set to true to get upload status without actually persisting the line items.
  * format `string` (values: CSV): Format the line items are in. Default to CSV.
  * lineItems `string`: Line items in CSV to upload. Refer to Entity Write File Format for more information on file format.

### UploadLineItemsResponse
* UploadLineItemsResponse `object`: Upload line items response.
  * uploadStatus [UploadStatus](#uploadstatus)

### UploadStatus
* UploadStatus `object`: Represents the status of upload.
  * errors `array`: Reasons why upload can't be completed.
    * items `string`
  * rowStatus `array`: Per-row upload status.
    * items [RowStatus](#rowstatus)


