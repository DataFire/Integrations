# @datafire/google_analyticsdata

Client library for Google Analytics Data API

## Installation and Usage
```bash
npm install --save @datafire/google_analyticsdata
```
```js
let google_analyticsdata = require('@datafire/google_analyticsdata').create({
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

Accesses report data in Google Analytics.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_analyticsdata.oauthCallback({
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
google_analyticsdata.oauthRefresh(null, context)
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

### analyticsdata.properties.getMetadata
Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.


```js
google_analyticsdata.analyticsdata.properties.getMetadata({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the metadata to retrieve. This name field is specified in the URL path and not URL parameters. Property is a numeric Google Analytics GA4 Property identifier. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234/metadata Set the Property ID to 0 for dimensions and metrics common to all properties. In this special mode, this method will not return custom dimensions and metrics.
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
* output [Metadata](#metadata)

### analyticsdata.properties.runRealtimeReport
The Google Analytics Realtime API returns a customized report of realtime event data for your property. These reports show events and usage from the last 30 minutes.


```js
google_analyticsdata.analyticsdata.properties.runRealtimeReport({
  "property": ""
}, context)
```

#### Input
* input `object`
  * property **required** `string`: A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234
  * body [RunRealtimeReportRequest](#runrealtimereportrequest)
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
* output [RunRealtimeReportResponse](#runrealtimereportresponse)

### analyticsdata.batchRunPivotReports
Returns multiple pivot reports in a batch. All reports must be for the same Entity.


```js
google_analyticsdata.analyticsdata.batchRunPivotReports({}, context)
```

#### Input
* input `object`
  * body [BatchRunPivotReportsRequest](#batchrunpivotreportsrequest)
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
* output [BatchRunPivotReportsResponse](#batchrunpivotreportsresponse)

### analyticsdata.batchRunReports
Returns multiple reports in a batch. All reports must be for the same Entity.


```js
google_analyticsdata.analyticsdata.batchRunReports({}, context)
```

#### Input
* input `object`
  * body [BatchRunReportsRequest](#batchrunreportsrequest)
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
* output [BatchRunReportsResponse](#batchrunreportsresponse)

### analyticsdata.runPivotReport
Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.


```js
google_analyticsdata.analyticsdata.runPivotReport({}, context)
```

#### Input
* input `object`
  * body [RunPivotReportRequest](#runpivotreportrequest)
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
* output [RunPivotReportResponse](#runpivotreportresponse)

### analyticsdata.runReport
Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name.


```js
google_analyticsdata.analyticsdata.runReport({}, context)
```

#### Input
* input `object`
  * body [RunReportRequest](#runreportrequest)
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
* output [RunReportResponse](#runreportresponse)



## Definitions

### BatchRunPivotReportsRequest
* BatchRunPivotReportsRequest `object`: The batch request containing multiple pivot report requests.
  * entity [Entity](#entity)
  * requests `array`: Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5 requests.
    * items [RunPivotReportRequest](#runpivotreportrequest)

### BatchRunPivotReportsResponse
* BatchRunPivotReportsResponse `object`: The batch response containing multiple pivot reports.
  * pivotReports `array`: Individual responses. Each response has a separate pivot report request.
    * items [RunPivotReportResponse](#runpivotreportresponse)

### BatchRunReportsRequest
* BatchRunReportsRequest `object`: The batch request containing multiple report requests.
  * entity [Entity](#entity)
  * requests `array`: Individual requests. Each request has a separate report response. Each batch request is allowed up to 5 requests.
    * items [RunReportRequest](#runreportrequest)

### BatchRunReportsResponse
* BatchRunReportsResponse `object`: The batch response containing multiple reports.
  * reports `array`: Individual responses. Each response has a separate report request.
    * items [RunReportResponse](#runreportresponse)

### BetweenFilter
* BetweenFilter `object`: To express that the result needs to be between two numbers (inclusive).
  * fromValue [NumericValue](#numericvalue)
  * toValue [NumericValue](#numericvalue)

### CaseExpression
* CaseExpression `object`: Used to convert a dimension value to a single case.
  * dimensionName `string`: Name of a dimension. The name must refer back to a name in dimensions field of the request.

### Cohort
* Cohort `object`: Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstTouchDate` belong to the same cohort.
  * dateRange [DateRange](#daterange)
  * dimension `string`: Dimension used by the cohort. Required and only supports `firstTouchDate`.
  * name `string`: Assigns a name to this cohort. The dimension `cohort` is valued to this name in a report response. If set, cannot begin with `cohort_` or `RESERVED_`. If not set, cohorts are named by their zero based index `cohort_0`, `cohort_1`, etc.

### CohortReportSettings
* CohortReportSettings `object`: Optional settings of a cohort report.
  * accumulate `boolean`: If true, accumulates the result from first touch day to the end day. Not supported in `RunReportRequest`.

### CohortSpec
* CohortSpec `object`: Specification of cohorts for a cohort report. Cohort reports can be used for example to create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.
  * cohortReportSettings [CohortReportSettings](#cohortreportsettings)
  * cohorts `array`: Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If multiple cohorts are specified, each cohort can be recognized in the report by their name.
    * items [Cohort](#cohort)
  * cohortsRange [CohortsRange](#cohortsrange)

### CohortsRange
* CohortsRange `object`: Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
  * endOffset `integer`: Required. `endOffset` specifies the end date of the extended reporting date range for a cohort report. `endOffset` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If `granularity` is `DAILY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset` days. If `granularity` is `WEEKLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 7` days. If `granularity` is `MONTHLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 30` days.
  * granularity `string` (values: GRANULARITY_UNSPECIFIED, DAILY, WEEKLY, MONTHLY): Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report.
  * startOffset `integer`: `startOffset` specifies the start date of the extended reporting date range for a cohort report. `startOffset` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If `granularity` is `DAILY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset` days. If `granularity` is `WEEKLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 7` days. If `granularity` is `MONTHLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 30` days.

### ConcatenateExpression
* ConcatenateExpression `object`: Used to combine dimension values to a single dimension.
  * delimiter `string`: The delimiter placed between dimension names. Delimiters are often single characters such as "|" or "," but can be longer strings. If a dimension value contains the delimiter, both will be present in response with no distinction. For example if dimension 1 value = "US,FR", dimension 2 value = "JP", and delimiter = ",", then the response will contain "US,FR,JP".
  * dimensionNames `array`: Names of dimensions. The names must refer back to names in the dimensions field of the request.
    * items `string`

### DateRange
* DateRange `object`: A contiguous set of days: startDate, startDate + 1, ..., endDate. Requests are allowed up to 4 date ranges.
  * endDate `string`: The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `start_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone.
  * name `string`: Assigns a name to this date range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, date ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc.
  * startDate `string`: The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `end_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone.

### Dimension
* Dimension `object`: Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, city could be "Paris" or "New York". Requests are allowed up to 8 dimensions.
  * dimensionExpression [DimensionExpression](#dimensionexpression)
  * name `string`: The name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names. If `dimensionExpression` is specified, `name` can be any string that you would like. For example if a `dimensionExpression` concatenates `country` and `city`, you could call that dimension `countryAndCity`. Dimensions are referenced by `name` in `dimensionFilter`, `orderBys`, `dimensionExpression`, and `pivots`.

### DimensionExpression
* DimensionExpression `object`: Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
  * concatenate [ConcatenateExpression](#concatenateexpression)
  * lowerCase [CaseExpression](#caseexpression)
  * upperCase [CaseExpression](#caseexpression)

### DimensionHeader
* DimensionHeader `object`: Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.
  * name `string`: The dimension's name.

### DimensionMetadata
* DimensionMetadata `object`: Explains a dimension.
  * apiName `string`: This dimension's name. Useable in [Dimension](#Dimension)'s `name`. For example, `eventName`.
  * customDefinition `boolean`: True if the dimension is a custom dimension for this property.
  * deprecatedApiNames `array`: Still usable but deprecated names for this dimension. If populated, this dimension is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the dimension will be available only by `apiName`.
    * items `string`
  * description `string`: Description of how this dimension is used and calculated.
  * uiName `string`: This dimension's name within the Google Analytics user interface. For example, `Event name`.

### DimensionOrderBy
* DimensionOrderBy `object`: Sorts by dimension values.
  * dimensionName `string`: A dimension name in the request to order by.
  * orderType `string` (values: ORDER_TYPE_UNSPECIFIED, ALPHANUMERIC, CASE_INSENSITIVE_ALPHANUMERIC, NUMERIC): Controls the rule for dimension value ordering.

### DimensionValue
* DimensionValue `object`: The value of a dimension.
  * value `string`: Value as a string if the dimension type is a string.

### Entity
* Entity `object`: The unique identifier of the property whose events are tracked.
  * propertyId `string`: A Google Analytics GA4 property id. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id).

### Filter
* Filter `object`: An expression to filter dimension or metric values.
  * betweenFilter [BetweenFilter](#betweenfilter)
  * fieldName `string`: The dimension name or metric name. Must be a name defined in dimensions or metrics.
  * inListFilter [InListFilter](#inlistfilter)
  * nullFilter `boolean`: A filter for null values. If True, a null dimension value is matched by this filter. Null filter is commonly used inside a NOT filter expression. For example, a NOT expression of a null filter removes rows when a dimension is null.
  * numericFilter [NumericFilter](#numericfilter)
  * stringFilter [StringFilter](#stringfilter)

### FilterExpression
* FilterExpression `object`: To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
  * andGroup [FilterExpressionList](#filterexpressionlist)
  * filter [Filter](#filter)
  * notExpression [FilterExpression](#filterexpression)
  * orGroup [FilterExpressionList](#filterexpressionlist)

### FilterExpressionList
* FilterExpressionList `object`: A list of filter expressions.
  * expressions `array`: A list of filter expressions.
    * items [FilterExpression](#filterexpression)

### InListFilter
* InListFilter `object`: The result needs to be in a list of string values.
  * caseSensitive `boolean`: If true, the string value is case sensitive.
  * values `array`: The list of string values. Must be non-empty.
    * items `string`

### Metadata
* Metadata `object`: The dimensions and metrics currently accepted in reporting methods.
  * dimensions `array`: The dimension descriptions.
    * items [DimensionMetadata](#dimensionmetadata)
  * metrics `array`: The metric descriptions.
    * items [MetricMetadata](#metricmetadata)
  * name `string`: Resource name of this metadata.

### Metric
* Metric `object`: The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.
  * expression `string`: A mathematical expression for derived metrics. For example, the metric Event count per user is `eventCount/totalUsers`.
  * invisible `boolean`: Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce a column in the response, but can be used in `metricFilter`, `orderBys`, or a metric `expression`.
  * name `string`: The name of the metric. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of metric names. If `expression` is specified, `name` can be any string that you would like. For example if `expression` is `screenPageViews/sessions`, you could call that metric's name = `viewsPerSession`. Metrics are referenced by `name` in `metricFilter`, `orderBys`, and metric `expression`.

### MetricHeader
* MetricHeader `object`: Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
  * name `string`: The metric's name.
  * type `string` (values: METRIC_TYPE_UNSPECIFIED, TYPE_INTEGER, TYPE_FLOAT, TYPE_SECONDS, TYPE_MILLISECONDS, TYPE_MINUTES, TYPE_HOURS, TYPE_STANDARD, TYPE_CURRENCY, TYPE_FEET, TYPE_MILES, TYPE_METERS, TYPE_KILOMETERS): The metric's data type.

### MetricMetadata
* MetricMetadata `object`: Explains a metric.
  * apiName `string`: A metric name. Useable in [Metric](#Metric)'s `name`. For example, `eventCount`.
  * customDefinition `boolean`: True if the metric is a custom metric for this property.
  * deprecatedApiNames `array`: Still usable but deprecated names for this metric. If populated, this metric is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the metric will be available only by `apiName`.
    * items `string`
  * description `string`: Description of how this metric is used and calculated.
  * expression `string`: The mathematical expression for this derived metric. Can be used in [Metric](#Metric)'s `expression` field for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty.
  * type `string` (values: METRIC_TYPE_UNSPECIFIED, TYPE_INTEGER, TYPE_FLOAT, TYPE_SECONDS, TYPE_MILLISECONDS, TYPE_MINUTES, TYPE_HOURS, TYPE_STANDARD, TYPE_CURRENCY, TYPE_FEET, TYPE_MILES, TYPE_METERS, TYPE_KILOMETERS): The type of this metric.
  * uiName `string`: This metric's name within the Google Analytics user interface. For example, `Event count`.

### MetricOrderBy
* MetricOrderBy `object`: Sorts by metric values.
  * metricName `string`: A metric name in the request to order by.

### MetricValue
* MetricValue `object`: The value of a metric.
  * value `string`: Measurement value. See MetricHeader for type.

### NumericFilter
* NumericFilter `object`: Filters for numeric or date values.
  * operation `string` (values: OPERATION_UNSPECIFIED, EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL): The operation type for this filter.
  * value [NumericValue](#numericvalue)

### NumericValue
* NumericValue `object`: To represent a number.
  * doubleValue `number`: Double value
  * int64Value `string`: Integer value

### OrderBy
* OrderBy `object`: The sort options.
  * desc `boolean`: If true, sorts by descending order.
  * dimension [DimensionOrderBy](#dimensionorderby)
  * metric [MetricOrderBy](#metricorderby)
  * pivot [PivotOrderBy](#pivotorderby)

### Pivot
* Pivot `object`: Describes the visible dimension columns and rows in the report response.
  * fieldNames `array`: Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request.
    * items `string`
  * limit `string`: The number of rows to return in this pivot. If unspecified, 10 rows are returned. If -1, all rows are returned.
  * metricAggregations `array`: Aggregate the metrics by dimensions in this pivot using the specified metric_aggregations.
    * items `string` (values: METRIC_AGGREGATION_UNSPECIFIED, TOTAL, MINIMUM, MAXIMUM, COUNT)
  * offset `string`: The row count of the start row. The first row is counted as row 0.
  * orderBys `array`: Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering. Dimensions specified in these OrderBys must be a subset of Pivot.field_names.
    * items [OrderBy](#orderby)

### PivotDimensionHeader
* PivotDimensionHeader `object`: Summarizes dimension values from a row for this pivot.
  * dimensionValues `array`: Values of multiple dimensions in a pivot.
    * items [DimensionValue](#dimensionvalue)

### PivotHeader
* PivotHeader `object`: Dimensions' values in a single pivot.
  * pivotDimensionHeaders `array`: The size is the same as the cardinality of the corresponding dimension combinations.
    * items [PivotDimensionHeader](#pivotdimensionheader)
  * rowCount `integer`: The cardinality of the pivot as if offset = 0 and limit = -1. The total number of rows for this pivot's fields regardless of how the parameters offset and limit are specified in the request.

### PivotOrderBy
* PivotOrderBy `object`: Sorts by a pivot column group.
  * metricName `string`: In the response to order by, order rows by this column. Must be a metric name from the request.
  * pivotSelections `array`: Used to select a dimension name and value pivot. If multiple pivot selections are given, the sort occurs on rows where all pivot selection dimension name and value pairs match the row's dimension name and value pair.
    * items [PivotSelection](#pivotselection)

### PivotSelection
* PivotSelection `object`: A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|----------------
  * dimensionName `string`: Must be a dimension name from the request.
  * dimensionValue `string`: Order by only when the named dimension is this value.

### PropertyQuota
* PropertyQuota `object`: Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
  * concurrentRequests [QuotaStatus](#quotastatus)
  * serverErrorsPerProjectPerHour [QuotaStatus](#quotastatus)
  * tokensPerDay [QuotaStatus](#quotastatus)
  * tokensPerHour [QuotaStatus](#quotastatus)

### QuotaStatus
* QuotaStatus `object`: Current state for a particular quota group.
  * consumed `integer`: Quota consumed by this request.
  * remaining `integer`: Quota remaining after this request.

### ResponseMetaData
* ResponseMetaData `object`: Response's metadata carrying additional information about the report content.
  * dataLossFromOtherRow `boolean`: If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This can happen for high cardinality reports.

### Row
* Row `object`: Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ] ```
  * dimensionValues `array`: List of requested dimension values. In a PivotReport, dimension_values are only listed for dimensions included in a pivot.
    * items [DimensionValue](#dimensionvalue)
  * metricValues `array`: List of requested visible metric values.
    * items [MetricValue](#metricvalue)

### RunPivotReportRequest
* RunPivotReportRequest `object`: The request to generate a pivot report.
  * cohortSpec [CohortSpec](#cohortspec)
  * currencyCode `string`: A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the entity's default currency.
  * dateRanges `array`: The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each date range is used in the report. A special dimension with field name "dateRange" can be included in a Pivot's field names; if included, the report compares between date ranges. In a cohort request, this `dateRanges` must be unspecified.
    * items [DateRange](#daterange)
  * dimensionFilter [FilterExpression](#filterexpression)
  * dimensions `array`: The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression, dimension_filter, pivots, order_bys.
    * items [Dimension](#dimension)
  * entity [Entity](#entity)
  * keepEmptyRows `boolean`: If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter.
  * metricFilter [FilterExpression](#filterexpression)
  * metrics `array`: The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the following: metric_expression, metric_filter, order_bys.
    * items [Metric](#metric)
  * pivots `array`: Describes the visual format of the report's dimensions in columns or rows. The union of the fieldNames (dimension names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a pivot.
    * items [Pivot](#pivot)
  * returnPropertyQuota `boolean`: Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota).

### RunPivotReportResponse
* RunPivotReportResponse `object`: The response pivot report table corresponding to a pivot request.
  * aggregates `array`: Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values which are set to "RESERVED_".
    * items [Row](#row)
  * dimensionHeaders `array`: Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
    * items [DimensionHeader](#dimensionheader)
  * metadata [ResponseMetaData](#responsemetadata)
  * metricHeaders `array`: Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
    * items [MetricHeader](#metricheader)
  * pivotHeaders `array`: Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the response. If we have a request like this: "pivots": [{ "fieldNames": ["country", "city"] }, { "fieldNames": "eventName" }] We will have the following `pivotHeaders` in the response: "pivotHeaders" : [{ "dimensionHeaders": [{ "dimensionValues": [ { "value": "United Kingdom" }, { "value": "London" } ] }, { "dimensionValues": [ { "value": "Japan" }, { "value": "Osaka" } ] }] }, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" }] }, { "dimensionValues": [{ "value": "scroll" }] }] }]
    * items [PivotHeader](#pivotheader)
  * propertyQuota [PropertyQuota](#propertyquota)
  * rows `array`: Rows of dimension value combinations and metric values in the report.
    * items [Row](#row)

### RunRealtimeReportRequest
* RunRealtimeReportRequest `object`: The request to generate a realtime report.
  * dimensionFilter [FilterExpression](#filterexpression)
  * dimensions `array`: The dimensions requested and displayed.
    * items [Dimension](#dimension)
  * limit `string`: The number of rows to return. If unspecified, 10 rows are returned. If -1, all rows are returned.
  * metricAggregations `array`: Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)".
    * items `string` (values: METRIC_AGGREGATION_UNSPECIFIED, TOTAL, MINIMUM, MAXIMUM, COUNT)
  * metricFilter [FilterExpression](#filterexpression)
  * metrics `array`: The metrics requested and displayed.
    * items [Metric](#metric)
  * orderBys `array`: Specifies how rows are ordered in the response.
    * items [OrderBy](#orderby)
  * returnPropertyQuota `boolean`: Toggles whether to return the current state of this Analytics Property's Realtime quota. Quota is returned in [PropertyQuota](#PropertyQuota).

### RunRealtimeReportResponse
* RunRealtimeReportResponse `object`: The response realtime report table corresponding to a request.
  * dimensionHeaders `array`: Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
    * items [DimensionHeader](#dimensionheader)
  * maximums `array`: If requested, the maximum values of metrics.
    * items [Row](#row)
  * metricHeaders `array`: Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
    * items [MetricHeader](#metricheader)
  * minimums `array`: If requested, the minimum values of metrics.
    * items [Row](#row)
  * propertyQuota [PropertyQuota](#propertyquota)
  * rowCount `integer`: The total number of rows in the query result, regardless of the number of rows returned in the response. For example if a query returns 175 rows and includes limit = 50 in the API request, the response will contain row_count = 175 but only 50 rows.
  * rows `array`: Rows of dimension value combinations and metric values in the report.
    * items [Row](#row)
  * totals `array`: If requested, the totaled values of metrics.
    * items [Row](#row)

### RunReportRequest
* RunReportRequest `object`: The request to generate a report.
  * cohortSpec [CohortSpec](#cohortspec)
  * currencyCode `string`: A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the entity's default currency.
  * dateRanges `array`: Date ranges of data to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the event data for the overlapping days is included in the response rows for both date ranges. In a cohort request, this `dateRanges` must be unspecified.
    * items [DateRange](#daterange)
  * dimensionFilter [FilterExpression](#filterexpression)
  * dimensions `array`: The dimensions requested and displayed.
    * items [Dimension](#dimension)
  * entity [Entity](#entity)
  * keepEmptyRows `boolean`: If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter.
  * limit `string`: The number of rows to return. If unspecified, 10 rows are returned. If -1, all rows are returned. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
  * metricAggregations `array`: Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)".
    * items `string` (values: METRIC_AGGREGATION_UNSPECIFIED, TOTAL, MINIMUM, MAXIMUM, COUNT)
  * metricFilter [FilterExpression](#filterexpression)
  * metrics `array`: The metrics requested and displayed.
    * items [Metric](#metric)
  * offset `string`: The row count of the start row. The first row is counted as row 0. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
  * orderBys `array`: Specifies how rows are ordered in the response.
    * items [OrderBy](#orderby)
  * returnPropertyQuota `boolean`: Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota).

### RunReportResponse
* RunReportResponse `object`: The response report table corresponding to a request.
  * dimensionHeaders `array`: Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
    * items [DimensionHeader](#dimensionheader)
  * maximums `array`: If requested, the maximum values of metrics.
    * items [Row](#row)
  * metadata [ResponseMetaData](#responsemetadata)
  * metricHeaders `array`: Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
    * items [MetricHeader](#metricheader)
  * minimums `array`: If requested, the minimum values of metrics.
    * items [Row](#row)
  * propertyQuota [PropertyQuota](#propertyquota)
  * rowCount `integer`: The total number of rows in the query result, regardless of the number of rows returned in the response. For example if a query returns 175 rows and includes limit = 50 in the API request, the response will contain row_count = 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
  * rows `array`: Rows of dimension value combinations and metric values in the report.
    * items [Row](#row)
  * totals `array`: If requested, the totaled values of metrics.
    * items [Row](#row)

### StringFilter
* StringFilter `object`: The filter for string
  * caseSensitive `boolean`: If true, the string value is case sensitive.
  * matchType `string` (values: MATCH_TYPE_UNSPECIFIED, EXACT, BEGINS_WITH, ENDS_WITH, CONTAINS, FULL_REGEXP, PARTIAL_REGEXP): The match type for this filter.
  * value `string`: The string value used for the matching.


