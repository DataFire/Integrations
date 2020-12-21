# @datafire/google_admob

Client library for AdMob API

## Installation and Usage
```bash
npm install --save @datafire/google_admob
```
```js
let google_admob = require('@datafire/google_admob').create({
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

The AdMob API allows publishers to programmatically get information about their AdMob account. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_admob.oauthCallback({
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
google_admob.oauthRefresh(null, context)
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

### admob.accounts.list
Lists the AdMob publisher account accessible with the client credential. Currently, all credentials have access to at most one AdMob account.


```js
google_admob.admob.accounts.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Maximum number of accounts to return.
  * pageToken `string`: The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
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
* output [ListPublisherAccountsResponse](#listpublisheraccountsresponse)

### admob.accounts.get
Gets information about the specified AdMob publisher account.


```js
google_admob.admob.accounts.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
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
* output [PublisherAccount](#publisheraccount)

### admob.accounts.adUnits.list
List the ad units under the specified AdMob account.


```js
google_admob.admob.accounts.adUnits.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
  * pageSize `integer`: The maximum number of ad units to return.
  * pageToken `string`: The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
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
* output [ListAdUnitsResponse](#listadunitsresponse)

### admob.accounts.apps.list
List the apps under the specified AdMob account.


```js
google_admob.admob.accounts.apps.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
  * pageSize `integer`: The maximum number of apps to return. If unspecified or 0, at most 1000 apps will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.
  * pageToken `string`: The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
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
* output [ListAppsResponse](#listappsresponse)

### admob.accounts.mediationReport.generate
Generates an AdMob Mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.


```js
google_admob.admob.accounts.mediationReport.generate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
  * body [GenerateMediationReportRequest](#generatemediationreportrequest)
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
* output [GenerateMediationReportResponse](#generatemediationreportresponse)

### admob.accounts.networkReport.generate
Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.


```js
google_admob.admob.accounts.networkReport.generate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
  * body [GenerateNetworkReportRequest](#generatenetworkreportrequest)
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
* output [GenerateNetworkReportResponse](#generatenetworkreportresponse)



## Definitions

### AdUnit
* AdUnit `object`: Describes an AdMob ad unit.
  * adFormat `string`: AdFormat of the ad unit. Possible values are as follows: "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded.
  * adTypes `array`: Ad media type supported by this ad unit. Possible values as follows: "RICH_MEDIA" - Text, image, and other non-video media. "VIDEO" - Video media.
    * items `string`
  * adUnitId `string`: The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789
  * appId `string`: The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789
  * displayName `string`: The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.
  * name `string`: Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789

### App
* App `object`: Describes an AdMob app for a specific platform (For example: Android or iOS).
  * appId `string`: The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789
  * linkedAppInfo [AppLinkedAppInfo](#applinkedappinfo)
  * manualAppInfo [AppManualAppInfo](#appmanualappinfo)
  * name `string`: Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789
  * platform `string`: Describes the platform of the app. Limited to "IOS" and "ANDROID".

### AppLinkedAppInfo
* AppLinkedAppInfo `object`: Information from the app store if the app is linked to an app store.
  * appStoreId `string`: The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: "com.example.myapp". See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example "105169111". Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked.
  * displayName `string`: Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store.

### AppManualAppInfo
* AppManualAppInfo `object`: Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
  * displayName `string`: The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DateRange
* DateRange `object`: Specification of a single date range. Both dates are inclusive.
  * endDate [Date](#date)
  * startDate [Date](#date)

### GenerateMediationReportRequest
* GenerateMediationReportRequest `object`: Request to generate an AdMob Mediation report.
  * reportSpec [MediationReportSpec](#mediationreportspec)

### GenerateMediationReportResponse
* GenerateMediationReportResponse `object`: The streaming response for the AdMob Mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 1} }, "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } }, { "row": { "dimension_values": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" } }, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"} } } }, { "footer": {"matching_row_count": 1} }]
  * footer [ReportFooter](#reportfooter)
  * header [ReportHeader](#reportheader)
  * row [ReportRow](#reportrow)

### GenerateNetworkReportRequest
* GenerateNetworkReportRequest `object`: Request to generate an AdMob Network report.
  * reportSpec [NetworkReportSpec](#networkreportspec)

### GenerateNetworkReportResponse
* GenerateNetworkReportResponse `object`: The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]
  * footer [ReportFooter](#reportfooter)
  * header [ReportHeader](#reportheader)
  * row [ReportRow](#reportrow)

### ListAdUnitsResponse
* ListAdUnitsResponse `object`: Response for the ad units list request.
  * adUnits `array`: The resulting ad units for the requested account.
    * items [AdUnit](#adunit)
  * nextPageToken `string`: If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`.

### ListAppsResponse
* ListAppsResponse `object`: Response for the apps list request.
  * apps `array`: The resulting apps for the requested account.
    * items [App](#app)
  * nextPageToken `string`: If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`.

### ListPublisherAccountsResponse
* ListPublisherAccountsResponse `object`: Response for the publisher account list request.
  * account `array`: Publisher that the client credentials can access.
    * items [PublisherAccount](#publisheraccount)
  * nextPageToken `string`: If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`.

### LocalizationSettings
* LocalizationSettings `object`: Localization settings for reports, such as currency and language. It affects how metrics are calculated.
  * currencyCode `string`: Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified.
  * languageCode `string`: Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified.

### MediationReportSpec
* MediationReportSpec `object`: The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2018-09-01' AND DATE <= '2018-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
  * dateRange [DateRange](#daterange)
  * dimensionFilters `array`: Describes which report rows to match based on their dimension values.
    * items [MediationReportSpecDimensionFilter](#mediationreportspecdimensionfilter)
  * dimensions `array`: List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
    * items `string` (values: DIMENSION_UNSPECIFIED, DATE, MONTH, WEEK, AD_SOURCE, AD_SOURCE_INSTANCE, AD_UNIT, APP, MEDIATION_GROUP, COUNTRY, FORMAT, PLATFORM)
  * localizationSettings [LocalizationSettings](#localizationsettings)
  * maxReportRows `integer`: Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.
  * metrics `array`: List of metrics of the report. A report must specify at least one metric.
    * items `string` (values: METRIC_UNSPECIFIED, AD_REQUESTS, CLICKS, ESTIMATED_EARNINGS, IMPRESSIONS, IMPRESSION_CTR, MATCHED_REQUESTS, MATCH_RATE, OBSERVED_ECPM)
  * sortConditions `array`: Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
    * items [MediationReportSpecSortCondition](#mediationreportspecsortcondition)
  * timeZone `string`: A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.

### MediationReportSpecDimensionFilter
* MediationReportSpecDimensionFilter `object`: Describes which report rows to match based on their dimension values.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, DATE, MONTH, WEEK, AD_SOURCE, AD_SOURCE_INSTANCE, AD_UNIT, APP, MEDIATION_GROUP, COUNTRY, FORMAT, PLATFORM): Applies the filter criterion to the specified dimension.
  * matchesAny [StringList](#stringlist)

### MediationReportSpecSortCondition
* MediationReportSpecSortCondition `object`: Sorting direction to be applied on a dimension or a metric.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, DATE, MONTH, WEEK, AD_SOURCE, AD_SOURCE_INSTANCE, AD_UNIT, APP, MEDIATION_GROUP, COUNTRY, FORMAT, PLATFORM): Sort by the specified dimension.
  * metric `string` (values: METRIC_UNSPECIFIED, AD_REQUESTS, CLICKS, ESTIMATED_EARNINGS, IMPRESSIONS, IMPRESSION_CTR, MATCHED_REQUESTS, MATCH_RATE, OBSERVED_ECPM): Sort by the specified metric.
  * order `string` (values: SORT_ORDER_UNSPECIFIED, ASCENDING, DESCENDING): Sorting order of the dimension or metric.

### NetworkReportSpec
* NetworkReportSpec `object`: The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2018, 'month': 9, 'day': 1}, 'end_date': {'year': 2018, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2018-09-01' AND DATE <= '2018-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;
  * dateRange [DateRange](#daterange)
  * dimensionFilters `array`: Describes which report rows to match based on their dimension values.
    * items [NetworkReportSpecDimensionFilter](#networkreportspecdimensionfilter)
  * dimensions `array`: List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
    * items `string` (values: DIMENSION_UNSPECIFIED, DATE, MONTH, WEEK, AD_UNIT, APP, AD_TYPE, COUNTRY, FORMAT, PLATFORM)
  * localizationSettings [LocalizationSettings](#localizationsettings)
  * maxReportRows `integer`: Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.
  * metrics `array`: List of metrics of the report. A report must specify at least one metric.
    * items `string` (values: METRIC_UNSPECIFIED, AD_REQUESTS, CLICKS, ESTIMATED_EARNINGS, IMPRESSIONS, IMPRESSION_CTR, IMPRESSION_RPM, MATCHED_REQUESTS, MATCH_RATE, SHOW_RATE)
  * sortConditions `array`: Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
    * items [NetworkReportSpecSortCondition](#networkreportspecsortcondition)
  * timeZone `string`: A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.

### NetworkReportSpecDimensionFilter
* NetworkReportSpecDimensionFilter `object`: Describes which report rows to match based on their dimension values.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, DATE, MONTH, WEEK, AD_UNIT, APP, AD_TYPE, COUNTRY, FORMAT, PLATFORM): Applies the filter criterion to the specified dimension.
  * matchesAny [StringList](#stringlist)

### NetworkReportSpecSortCondition
* NetworkReportSpecSortCondition `object`: Sorting direction to be applied on a dimension or a metric.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, DATE, MONTH, WEEK, AD_UNIT, APP, AD_TYPE, COUNTRY, FORMAT, PLATFORM): Sort by the specified dimension.
  * metric `string` (values: METRIC_UNSPECIFIED, AD_REQUESTS, CLICKS, ESTIMATED_EARNINGS, IMPRESSIONS, IMPRESSION_CTR, IMPRESSION_RPM, MATCHED_REQUESTS, MATCH_RATE, SHOW_RATE): Sort by the specified metric.
  * order `string` (values: SORT_ORDER_UNSPECIFIED, ASCENDING, DESCENDING): Sorting order of the dimension or metric.

### PublisherAccount
* PublisherAccount `object`: A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
  * currencyCode `string`: Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion.
  * name `string`: Resource name of this account. Format is accounts/{publisher_id}.
  * publisherId `string`: The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890).
  * reportingTimeZone `string`: The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".

### ReportFooter
* ReportFooter `object`: Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
  * matchingRowCount `string`: Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response.
  * warnings `array`: Warnings associated with generation of the report.
    * items [ReportWarning](#reportwarning)

### ReportHeader
* ReportHeader `object`: Groups data helps to treat the generated report. Always sent as a first message in the stream response.
  * dateRange [DateRange](#daterange)
  * localizationSettings [LocalizationSettings](#localizationsettings)
  * reportingTimeZone `string`: The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".

### ReportRow
* ReportRow `object`: A row of the returning report.
  * dimensionValues `object`: Map of dimension values in a row, with keys as enum name of the dimensions.
  * metricValues `object`: Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it.

### ReportRowDimensionValue
* ReportRowDimensionValue `object`: Representation of a dimension value.
  * displayLabel `string`: The localized string representation of the value. If unspecified, the display label should be derived from the value.
  * value `string`: Dimension value in the format specified in the report's spec Dimension enum.

### ReportRowMetricValue
* ReportRowMetricValue `object`: Representation of a metric value.
  * doubleValue `number`: Double precision (approximate) decimal values. Rates are from 0 to 1.
  * integerValue `string`: Metric integer value.
  * microsValue `string`: Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros.

### ReportWarning
* ReportWarning `object`: Warnings associated with generation of the report.
  * description `string`: Describes the details of the warning message, in English.
  * type `string` (values: TYPE_UNSPECIFIED, DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE, DATA_DELAYED, OTHER, REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY): Type of the warning.

### StringList
* StringList `object`: List of string values.
  * values `array`: The string values.
    * items `string`


