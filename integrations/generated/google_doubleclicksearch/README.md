# @datafire/google_doubleclicksearch

Client library for DoubleClick Search

## Installation and Usage
```bash
npm install --save @datafire/google_doubleclicksearch
```
```js
let google_doubleclicksearch = require('@datafire/google_doubleclicksearch').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_doubleclicksearch.reports.generate({}).then(data => {
  console.log(data);
});
```

## Description

Reports and modifies your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_doubleclicksearch.oauthCallback({
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
google_doubleclicksearch.oauthRefresh(null, context)
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

### conversion.get
Retrieves a list of conversions from a DoubleClick Search engine account.


```js
google_doubleclicksearch.conversion.get({
  "agencyId": "",
  "advertiserId": "",
  "engineAccountId": "",
  "endDate": 0,
  "rowCount": 0,
  "startDate": 0,
  "startRow": 0
}, context)
```

#### Input
* input `object`
  * agencyId **required** `string`: Numeric ID of the agency.
  * advertiserId **required** `string`: Numeric ID of the advertiser.
  * engineAccountId **required** `string`: Numeric ID of the engine account.
  * endDate **required** `integer`: Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
  * rowCount **required** `integer`: The number of conversions to return per call.
  * startDate **required** `integer`: First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
  * startRow **required** `integer`: The 0-based starting index for retrieving conversions results.
  * adGroupId `string`: Numeric ID of the ad group.
  * adId `string`: Numeric ID of the ad.
  * campaignId `string`: Numeric ID of the campaign.
  * criterionId `string`: Numeric ID of the criterion.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ConversionList](#conversionlist)

### savedColumns.list
Retrieve the list of saved columns for a specified advertiser.


```js
google_doubleclicksearch.savedColumns.list({
  "agencyId": "",
  "advertiserId": ""
}, context)
```

#### Input
* input `object`
  * agencyId **required** `string`: DS ID of the agency.
  * advertiserId **required** `string`: DS ID of the advertiser.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SavedColumnList](#savedcolumnlist)

### conversion.patch
Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.


```js
google_doubleclicksearch.conversion.patch({
  "advertiserId": "",
  "agencyId": "",
  "endDate": 0,
  "engineAccountId": "",
  "rowCount": 0,
  "startDate": 0,
  "startRow": 0
}, context)
```

#### Input
* input `object`
  * advertiserId **required** `string`: Numeric ID of the advertiser.
  * agencyId **required** `string`: Numeric ID of the agency.
  * endDate **required** `integer`: Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
  * engineAccountId **required** `string`: Numeric ID of the engine account.
  * rowCount **required** `integer`: The number of conversions to return per call.
  * startDate **required** `integer`: First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
  * startRow **required** `integer`: The 0-based starting index for retrieving conversions results.
  * body [ConversionList](#conversionlist)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ConversionList](#conversionlist)

### conversion.insert
Inserts a batch of new conversions into DoubleClick Search.


```js
google_doubleclicksearch.conversion.insert({}, context)
```

#### Input
* input `object`
  * body [ConversionList](#conversionlist)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ConversionList](#conversionlist)

### conversion.update
Updates a batch of conversions in DoubleClick Search.


```js
google_doubleclicksearch.conversion.update({}, context)
```

#### Input
* input `object`
  * body [ConversionList](#conversionlist)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ConversionList](#conversionlist)

### conversion.updateAvailability
Updates the availabilities of a batch of floodlight activities in DoubleClick Search.


```js
google_doubleclicksearch.conversion.updateAvailability({}, context)
```

#### Input
* input `object`
  * empty [UpdateAvailabilityRequest](#updateavailabilityrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateAvailabilityResponse](#updateavailabilityresponse)

### reports.request
Inserts a report request into the reporting system.


```js
google_doubleclicksearch.reports.request({}, context)
```

#### Input
* input `object`
  * reportRequest [ReportRequest](#reportrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Report](#report)

### reports.generate
Generates and returns a report immediately.


```js
google_doubleclicksearch.reports.generate({}, context)
```

#### Input
* input `object`
  * reportRequest [ReportRequest](#reportrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Report](#report)

### reports.get
Polls for the status of a report request.


```js
google_doubleclicksearch.reports.get({
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * reportId **required** `string`: ID of the report request being polled.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Report](#report)

### reports.getFile
Downloads a report file encoded in UTF-8.


```js
google_doubleclicksearch.reports.getFile({
  "reportId": "",
  "reportFragment": 0
}, context)
```

#### Input
* input `object`
  * reportId **required** `string`: ID of the report.
  * reportFragment **required** `integer`: The index of the report fragment to download.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*



## Definitions

### Availability
* Availability `object`: A message containing availability data relevant to DoubleClick Search.
  * advertiserId `string`: DS advertiser ID.
  * agencyId `string`: DS agency ID.
  * availabilityTimestamp `string`: The time by which all conversions have been uploaded, in epoch millis UTC.
  * segmentationId `string`: The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).
  * segmentationName `string`: The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).
  * segmentationType `string`: The segmentation type that this availability is for (its default value is FLOODLIGHT).

### Conversion
* Conversion `object`: A conversion containing data relevant to DoubleClick Search.
  * adGroupId `string`: DS ad group ID.
  * adId `string`: DS ad ID.
  * advertiserId `string`: DS advertiser ID.
  * agencyId `string`: DS agency ID.
  * attributionModel `string`: Available to advertisers only after contacting DoubleClick Search customer support.
  * campaignId `string`: DS campaign ID.
  * channel `string`: Sales channel for the product. Acceptable values are:  
  * clickId `string`: DS click ID for the conversion.
  * conversionId `string`: For offline conversions, advertisers provide this ID. Advertisers can specify any ID that is meaningful to them. Each conversion in a request must specify a unique ID, and the combination of ID and timestamp must be unique amongst all conversions within the advertiser.
  * conversionModifiedTimestamp `string`: The time at which the conversion was last modified, in epoch millis UTC.
  * conversionTimestamp `string`: The time at which the conversion took place, in epoch millis UTC.
  * countMillis `string`: Available to advertisers only after contacting DoubleClick Search customer support.
  * criterionId `string`: DS criterion (keyword) ID.
  * currencyCode `string`: The currency code for the conversion's revenue. Should be in ISO 4217 alphabetic (3-char) format.
  * customDimension `array`: Custom dimensions for the conversion, which can be used to filter data in a report.
    * items [CustomDimension](#customdimension)
  * customMetric `array`: Custom metrics for the conversion.
    * items [CustomMetric](#custommetric)
  * deviceType `string`: The type of device on which the conversion occurred.
  * dsConversionId `string`: ID that DoubleClick Search generates for each conversion.
  * engineAccountId `string`: DS engine account ID.
  * floodlightOrderId `string`: The Floodlight order ID provided by the advertiser for the conversion.
  * inventoryAccountId `string`: ID that DS generates and uses to uniquely identify the inventory account that contains the product.
  * productCountry `string`: The country registered for the Merchant Center feed that contains the product. Use an ISO 3166 code to specify a country.
  * productGroupId `string`: DS product group ID.
  * productId `string`: The product ID (SKU).
  * productLanguage `string`: The language registered for the Merchant Center feed that contains the product. Use an ISO 639 code to specify a language.
  * quantityMillis `string`: The quantity of this conversion, in millis.
  * revenueMicros `string`: The revenue amount of this TRANSACTION conversion, in micros (value multiplied by 1000000, no decimal). For example, to specify a revenue value of "10" enter "10000000" (10 million) in your request.
  * segmentationId `string`: The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).
  * segmentationName `string`: The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).
  * segmentationType `string`: The segmentation type of this conversion (for example, FLOODLIGHT).
  * state `string`: The state of the conversion, that is, either ACTIVE or REMOVED. Note: state DELETED is deprecated.
  * storeId `string`: The ID of the local store for which the product was advertised. Applicable only when the channel is "local".
  * type `string`: The type of the conversion, that is, either ACTION or TRANSACTION. An ACTION conversion is an action by the user that has no monetarily quantifiable value, while a TRANSACTION conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (ACTION) versus ecommerce purchases (TRANSACTION).

### ConversionList
* ConversionList `object`: A list of conversions.
  * conversion `array`: The conversions being requested.
    * items [Conversion](#conversion)
  * kind `string`: Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList.

### CustomDimension
* CustomDimension `object`: A message containing the custome dimension.
  * name `string`: Custom dimension name.
  * value `string`: Custom dimension value.

### CustomMetric
* CustomMetric `object`: A message containing the custome metric.
  * name `string`: Custom metric name.
  * value `number`: Custom metric numeric value.

### Report
* Report `object`: A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
  * files `array`: Asynchronous report only. Contains a list of generated report files once the report has succesfully completed.
    * items `object`
      * byteCount `string`: The size of this report file in bytes.
      * url `string`: Use this url to download the report file.
  * id `string`: Asynchronous report only. Id of the report.
  * isReportReady `boolean`: Asynchronous report only. True if and only if the report has completed successfully and the report files are ready to be downloaded.
  * kind `string`: Identifies this as a Report resource. Value: the fixed string doubleclicksearch#report.
  * request [ReportRequest](#reportrequest)
  * rowCount `integer`: The number of report rows generated by the report, not including headers.
  * rows `array`: Synchronous report only. Generated report rows.
    * items [ReportRow](#reportrow)
  * statisticsCurrencyCode `string`: The currency code of all monetary values produced in the report, including values that are set by users (e.g., keyword bid settings) and metrics (e.g., cost and revenue). The currency code of a report is determined by the statisticsCurrency field of the report request.
  * statisticsTimeZone `string`: If all statistics of the report are sourced from the same time zone, this would be it. Otherwise the field is unset.

### ReportApiColumnSpec
* ReportApiColumnSpec `object`: A request object used to create a DoubleClick Search report.
  * columnName `string`: Name of a DoubleClick Search column to include in the report.
  * customDimensionName `string`: Segments a report by a custom dimension. The report must be scoped to an advertiser or lower, and the custom dimension must already be set up in DoubleClick Search. The custom dimension name, which appears in DoubleClick Search, is case sensitive.
  * customMetricName `string`: Name of a custom metric to include in the report. The report must be scoped to an advertiser or lower, and the custom metric must already be set up in DoubleClick Search. The custom metric name, which appears in DoubleClick Search, is case sensitive.
  * endDate `string`: Inclusive day in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with startDate.
  * groupByColumn `boolean`: Synchronous report only. Set to true to group by this column. Defaults to false.
  * headerText `string`: Text used to identify this column in the report output; defaults to columnName or savedColumnName when not specified. This can be used to prevent collisions between DoubleClick Search columns and saved columns with the same name.
  * platformSource `string`: The platform that is used to provide data for the custom dimension. Acceptable values are "floodlight".
  * productReportPerspective `string`: Returns metrics only for a specific type of product activity. Accepted values are:  
  * savedColumnName `string`: Name of a saved column to include in the report. The report must be scoped at advertiser or lower, and this saved column must already be created in the DoubleClick Search UI.
  * startDate `string`: Inclusive date in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with endDate.

### ReportRequest
* ReportRequest `object`: A request object used to create a DoubleClick Search report.
  * columns `array`: The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the columnName parameter is required. For saved columns only the savedColumnName parameter is required. Both columnName and savedColumnName cannot be set in the same stanza.
    * items [ReportApiColumnSpec](#reportapicolumnspec)
  * downloadFormat `string`: Format that the report should be returned in. Currently csv or tsv is supported.
  * filters `array`: A list of filters to be applied to the report.
    * items `object`
      * column [ReportApiColumnSpec](#reportapicolumnspec)
      * operator `string`: Operator to use in the filter. See the filter reference for a list of available operators.
      * values `array`: A list of values to filter the column value against.

  * includeDeletedEntities `boolean`: Determines if removed entities should be included in the report. Defaults to false. Deprecated, please use includeRemovedEntities instead.
  * includeRemovedEntities `boolean`: Determines if removed entities should be included in the report. Defaults to false.
  * maxRowsPerFile `integer`: Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are 1000000 to 100000000, inclusive.
  * orderBy `array`: Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.
    * items `object`
      * column [ReportApiColumnSpec](#reportapicolumnspec)
      * sortOrder `string`: The sort direction, which is either ascending or descending.
  * reportScope `object`: The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
    * adGroupId `string`: DS ad group ID.
    * adId `string`: DS ad ID.
    * advertiserId `string`: DS advertiser ID.
    * agencyId `string`: DS agency ID.
    * campaignId `string`: DS campaign ID.
    * engineAccountId `string`: DS engine account ID.
    * keywordId `string`: DS keyword ID.
  * reportType `string`: Determines the type of rows that are returned in the report. For example, if you specify reportType: keyword, each row in the report will contain data about a keyword. See the Types of Reports reference for the columns that are available for each type.
  * rowCount `integer`: Synchronous report only. The maxinum number of rows to return; additional rows are dropped. Acceptable values are 0 to 10000, inclusive. Defaults to 10000.
  * startRow `integer`: Synchronous report only. Zero-based index of the first row to return. Acceptable values are 0 to 50000, inclusive. Defaults to 0.
  * statisticsCurrency `string`: Specifies the currency in which monetary will be returned. Possible values are: usd, agency (valid if the report is scoped to agency or lower), advertiser (valid if the report is scoped to * advertiser or lower), or account (valid if the report is scoped to engine account or lower).
  * timeRange `object`: If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
    * changedAttributesSinceTimestamp `string`: Inclusive UTC timestamp in RFC format, e.g., 2013-07-16T10:16:23.555Z. See additional references on how changed attribute reports work.
    * changedMetricsSinceTimestamp `string`: Inclusive UTC timestamp in RFC format, e.g., 2013-07-16T10:16:23.555Z. See additional references on how changed metrics reports work.
    * endDate `string`: Inclusive date in YYYY-MM-DD format.
    * startDate `string`: Inclusive date in YYYY-MM-DD format.
  * verifySingleTimeZone `boolean`: If true, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to false.

### ReportRow
* ReportRow `object`: A row in a DoubleClick Search report.

### SavedColumn
* SavedColumn `object`: A saved column
  * kind `string`: Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn.
  * savedColumnName `string`: The name of the saved column.
  * type `string`: The type of data this saved column will produce.

### SavedColumnList
* SavedColumnList `object`: A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.
  * items `array`: The saved columns being requested.
    * items [SavedColumn](#savedcolumn)
  * kind `string`: Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList.

### UpdateAvailabilityRequest
* UpdateAvailabilityRequest `object`: The request to update availability.
  * availabilities `array`: The availabilities being requested.
    * items [Availability](#availability)

### UpdateAvailabilityResponse
* UpdateAvailabilityResponse `object`: The response to a update availability request.
  * availabilities `array`: The availabilities being returned.
    * items [Availability](#availability)


