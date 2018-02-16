# @datafire/google_analyticsreporting

Client library for Google Analytics Reporting

## Installation and Usage
```bash
npm install --save @datafire/google_analyticsreporting
```
```js
let google_analyticsreporting = require('@datafire/google_analyticsreporting').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_analyticsreporting.reports.batchGet({}).then(data => {
  console.log(data);
});
```

## Description

Accesses Analytics report data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_analyticsreporting.oauthCallback({
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
google_analyticsreporting.oauthRefresh(null, context)
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

### reports.batchGet
Returns the Analytics data.


```js
google_analyticsreporting.reports.batchGet({}, context)
```

#### Input
* input `object`
  * body [GetReportsRequest](#getreportsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GetReportsResponse](#getreportsresponse)



## Definitions

### Cohort
* Cohort `object`: Defines a cohort. A cohort is a group of users who share a common
  * dateRange [DateRange](#daterange)
  * name `string`: A unique name for the cohort. If not defined name will be auto-generated
  * type `string` (values: UNSPECIFIED_COHORT_TYPE, FIRST_VISIT_DATE): Type of the cohort. The only supported type as of now is

### CohortGroup
* CohortGroup `object`: Defines a cohort group.
  * cohorts `array`: The definition for the cohort.
    * items [Cohort](#cohort)
  * lifetimeValue `boolean`: Enable Life Time Value (LTV).  LTV measures lifetime value for users

### ColumnHeader
* ColumnHeader `object`: Column headers.
  * dimensions `array`: The dimension names in the response.
    * items `string`
  * metricHeader [MetricHeader](#metricheader)

### DateRange
* DateRange `object`: A contiguous set of days: startDate, startDate + 1 day, ..., endDate.
  * endDate `string`: The end date for the query in the format `YYYY-MM-DD`.
  * startDate `string`: The start date for the query in the format `YYYY-MM-DD`.

### DateRangeValues
* DateRangeValues `object`: Used to return a list of metrics for a single DateRange / dimension
  * pivotValueRegions `array`: The values of each pivot region.
    * items [PivotValueRegion](#pivotvalueregion)
  * values `array`: Each value corresponds to each Metric in the request.
    * items `string`

### Dimension
* Dimension `object`: [Dimensions](https://support.google.com/analytics/answer/1033861)
  * histogramBuckets `array`: If non-empty, we place dimension values into buckets after string to
    * items `string`
  * name `string`: Name of the dimension to fetch, for example `ga:browser`.

### DimensionFilter
* DimensionFilter `object`: Dimension filter specifies the filtering options on a dimension.
  * caseSensitive `boolean`: Should the match be case sensitive? Default is false.
  * dimensionName `string`: The dimension to filter on. A DimensionFilter must contain a dimension.
  * expressions `array`: Strings or regular expression to match against. Only the first value of
    * items `string`
  * not `boolean`: Logical `NOT` operator. If this boolean is set to true, then the matching
  * operator `string` (values: OPERATOR_UNSPECIFIED, REGEXP, BEGINS_WITH, ENDS_WITH, PARTIAL, EXACT, NUMERIC_EQUAL, NUMERIC_GREATER_THAN, NUMERIC_LESS_THAN, IN_LIST): How to match the dimension to the expression. The default is REGEXP.

### DimensionFilterClause
* DimensionFilterClause `object`: A group of dimension filters. Set the operator value to specify how
  * filters `array`: The repeated set of filters. They are logically combined based on the
    * items [DimensionFilter](#dimensionfilter)
  * operator `string` (values: OPERATOR_UNSPECIFIED, OR, AND): The operator for combining multiple dimension filters. If unspecified, it

### DynamicSegment
* DynamicSegment `object`: Dynamic segment definition for defining the segment within the request.
  * name `string`: The name of the dynamic segment.
  * sessionSegment [SegmentDefinition](#segmentdefinition)
  * userSegment [SegmentDefinition](#segmentdefinition)

### GetReportsRequest
* GetReportsRequest `object`: The batch request containing multiple report request.
  * reportRequests `array`: Requests, each request will have a separate response.
    * items [ReportRequest](#reportrequest)
  * useResourceQuotas `boolean`: Enables

### GetReportsResponse
* GetReportsResponse `object`: The main response class which holds the reports from the Reporting API
  * queryCost `integer`: The amount of resource quota tokens deducted to execute the query. Includes
  * reports `array`: Responses corresponding to each of the request.
    * items [Report](#report)
  * resourceQuotasRemaining [ResourceQuotasRemaining](#resourcequotasremaining)

### Metric
* Metric `object`: [Metrics](https://support.google.com/analytics/answer/1033861)
  * alias `string`: An alias for the metric expression is an alternate name for the
  * expression `string`: A metric expression in the request. An expression is constructed from one
  * formattingType `string` (values: METRIC_TYPE_UNSPECIFIED, INTEGER, FLOAT, CURRENCY, PERCENT, TIME): Specifies how the metric expression should be formatted, for example

### MetricFilter
* MetricFilter `object`: MetricFilter specifies the filter on a metric.
  * comparisonValue `string`: The value to compare against.
  * metricName `string`: The metric that will be filtered on. A metricFilter must contain a metric
  * not `boolean`: Logical `NOT` operator. If this boolean is set to true, then the matching
  * operator `string` (values: OPERATOR_UNSPECIFIED, EQUAL, LESS_THAN, GREATER_THAN, IS_MISSING): Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the

### MetricFilterClause
* MetricFilterClause `object`: Represents a group of metric filters.
  * filters `array`: The repeated set of filters. They are logically combined based on the
    * items [MetricFilter](#metricfilter)
  * operator `string` (values: OPERATOR_UNSPECIFIED, OR, AND): The operator for combining multiple metric filters. If unspecified, it is

### MetricHeader
* MetricHeader `object`: The headers for the metrics.
  * metricHeaderEntries `array`: Headers for the metrics in the response.
    * items [MetricHeaderEntry](#metricheaderentry)
  * pivotHeaders `array`: Headers for the pivots in the response.
    * items [PivotHeader](#pivotheader)

### MetricHeaderEntry
* MetricHeaderEntry `object`: Header for the metrics.
  * name `string`: The name of the header.
  * type `string` (values: METRIC_TYPE_UNSPECIFIED, INTEGER, FLOAT, CURRENCY, PERCENT, TIME): The type of the metric, for example `INTEGER`.

### OrFiltersForSegment
* OrFiltersForSegment `object`: A list of segment filters in the `OR` group are combined with the logical OR
  * segmentFilterClauses `array`: List of segment filters to be combined with a `OR` operator.
    * items [SegmentFilterClause](#segmentfilterclause)

### OrderBy
* OrderBy `object`: Specifies the sorting options.
  * fieldName `string`: The field which to sort by. The default sort order is ascending. Example:
  * orderType `string` (values: ORDER_TYPE_UNSPECIFIED, VALUE, DELTA, SMART, HISTOGRAM_BUCKET, DIMENSION_AS_INTEGER): The order type. The default orderType is `VALUE`.
  * sortOrder `string` (values: SORT_ORDER_UNSPECIFIED, ASCENDING, DESCENDING): The sorting order for the field.

### Pivot
* Pivot `object`: The Pivot describes the pivot section in the request.
  * dimensionFilterClauses `array`: DimensionFilterClauses are logically combined with an `AND` operator: only
    * items [DimensionFilterClause](#dimensionfilterclause)
  * dimensions `array`: A list of dimensions to show as pivot columns. A Pivot can have a maximum
    * items [Dimension](#dimension)
  * maxGroupCount `integer`: Specifies the maximum number of groups to return.
  * metrics `array`: The pivot metrics. Pivot metrics are part of the
    * items [Metric](#metric)
  * startGroup `integer`: If k metrics were requested, then the response will contain some

### PivotHeader
* PivotHeader `object`: The headers for each of the pivot sections defined in the request.
  * pivotHeaderEntries `array`: A single pivot section header.
    * items [PivotHeaderEntry](#pivotheaderentry)
  * totalPivotGroupsCount `integer`: The total number of groups for this pivot.

### PivotHeaderEntry
* PivotHeaderEntry `object`: The headers for the each of the metric column corresponding to the metrics
  * dimensionNames `array`: The name of the dimensions in the pivot response.
    * items `string`
  * dimensionValues `array`: The values for the dimensions in the pivot.
    * items `string`
  * metric [MetricHeaderEntry](#metricheaderentry)

### PivotValueRegion
* PivotValueRegion `object`: The metric values in the pivot region.
  * values `array`: The values of the metrics in each of the pivot regions.
    * items `string`

### Report
* Report `object`: The data response corresponding to the request.
  * columnHeader [ColumnHeader](#columnheader)
  * data [ReportData](#reportdata)
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.

### ReportData
* ReportData `object`: The data part of the report.
  * dataLastRefreshed `string`: The last time the data in the report was refreshed. All the hits received
  * isDataGolden `boolean`: Indicates if response to this request is golden or not. Data is
  * maximums `array`: Minimum and maximum values seen over all matching rows. These are both
    * items [DateRangeValues](#daterangevalues)
  * minimums `array`: Minimum and maximum values seen over all matching rows. These are both
    * items [DateRangeValues](#daterangevalues)
  * rowCount `integer`: Total number of matching rows for this query.
  * rows `array`: There's one ReportRow for every unique combination of dimensions.
    * items [ReportRow](#reportrow)
  * samplesReadCounts `array`: If the results are
    * items `string`
  * samplingSpaceSizes `array`: If the results are
    * items `string`
  * totals `array`: For each requested date range, for the set of all rows that match
    * items [DateRangeValues](#daterangevalues)

### ReportRequest
* ReportRequest `object`: The main request class which specifies the Reporting API request.
  * cohortGroup [CohortGroup](#cohortgroup)
  * dateRanges `array`: Date ranges in the request. The request can have a maximum of 2 date
    * items [DateRange](#daterange)
  * dimensionFilterClauses `array`: The dimension filter clauses for filtering Dimension Values. They are
    * items [DimensionFilterClause](#dimensionfilterclause)
  * dimensions `array`: The dimensions requested.
    * items [Dimension](#dimension)
  * filtersExpression `string`: Dimension or metric filters that restrict the data returned for your
  * hideTotals `boolean`: If set to true, hides the total of all metrics for all the matching rows,
  * hideValueRanges `boolean`: If set to true, hides the minimum and maximum across all matching rows.
  * includeEmptyRows `boolean`: If set to false, the response does not include rows if all the retrieved
  * metricFilterClauses `array`: The metric filter clauses. They are logically combined with the `AND`
    * items [MetricFilterClause](#metricfilterclause)
  * metrics `array`: The metrics requested.
    * items [Metric](#metric)
  * orderBys `array`: Sort order on output rows. To compare two rows, the elements of the
    * items [OrderBy](#orderby)
  * pageSize `integer`: Page size is for paging and specifies the maximum number of returned rows.
  * pageToken `string`: A continuation token to get the next page of the results. Adding this to
  * pivots `array`: The pivot definitions. Requests can have a maximum of 2 pivots.
    * items [Pivot](#pivot)
  * samplingLevel `string` (values: SAMPLING_UNSPECIFIED, DEFAULT, SMALL, LARGE): The desired report
  * segments `array`: Segment the data returned for the request. A segment definition helps look
    * items [Segment](#segment)
  * viewId `string`: The Analytics

### ReportRow
* ReportRow `object`: A row in the report.
  * dimensions `array`: List of requested dimensions.
    * items `string`
  * metrics `array`: List of metrics for each requested DateRange.
    * items [DateRangeValues](#daterangevalues)

### ResourceQuotasRemaining
* ResourceQuotasRemaining `object`: The resource quota tokens remaining for the property after the request is
  * dailyQuotaTokensRemaining `integer`: Daily resource quota remaining remaining.
  * hourlyQuotaTokensRemaining `integer`: Hourly resource quota tokens remaining.

### Segment
* Segment `object`: The segment definition, if the report needs to be segmented.
  * dynamicSegment [DynamicSegment](#dynamicsegment)
  * segmentId `string`: The segment ID of a built-in or custom segment, for example `gaid::-3`.

### SegmentDefinition
* SegmentDefinition `object`: SegmentDefinition defines the segment to be a set of SegmentFilters which
  * segmentFilters `array`: A segment is defined by a set of segment filters which are combined
    * items [SegmentFilter](#segmentfilter)

### SegmentDimensionFilter
* SegmentDimensionFilter `object`: Dimension filter specifies the filtering options on a dimension.
  * caseSensitive `boolean`: Should the match be case sensitive, ignored for `IN_LIST` operator.
  * dimensionName `string`: Name of the dimension for which the filter is being applied.
  * expressions `array`: The list of expressions, only the first element is used for all operators
    * items `string`
  * maxComparisonValue `string`: Maximum comparison values for `BETWEEN` match type.
  * minComparisonValue `string`: Minimum comparison values for `BETWEEN` match type.
  * operator `string` (values: OPERATOR_UNSPECIFIED, REGEXP, BEGINS_WITH, ENDS_WITH, PARTIAL, EXACT, IN_LIST, NUMERIC_LESS_THAN, NUMERIC_GREATER_THAN, NUMERIC_BETWEEN): The operator to use to match the dimension with the expressions.

### SegmentFilter
* SegmentFilter `object`: SegmentFilter defines the segment to be either a simple or a sequence
  * not `boolean`: If true, match the complement of simple or sequence segment.
  * sequenceSegment [SequenceSegment](#sequencesegment)
  * simpleSegment [SimpleSegment](#simplesegment)

### SegmentFilterClause
* SegmentFilterClause `object`: Filter Clause to be used in a segment definition, can be wither a metric or
  * dimensionFilter [SegmentDimensionFilter](#segmentdimensionfilter)
  * metricFilter [SegmentMetricFilter](#segmentmetricfilter)
  * not `boolean`: Matches the complement (`!`) of the filter.

### SegmentMetricFilter
* SegmentMetricFilter `object`: Metric filter to be used in a segment filter clause.
  * comparisonValue `string`: The value to compare against. If the operator is `BETWEEN`, this value is
  * maxComparisonValue `string`: Max comparison value is only used for `BETWEEN` operator.
  * metricName `string`: The metric that will be filtered on. A `metricFilter` must contain a
  * operator `string` (values: UNSPECIFIED_OPERATOR, LESS_THAN, GREATER_THAN, EQUAL, BETWEEN): Specifies is the operation to perform to compare the metric. The default
  * scope `string` (values: UNSPECIFIED_SCOPE, PRODUCT, HIT, SESSION, USER): Scope for a metric defines the level at which that metric is defined.  The

### SegmentSequenceStep
* SegmentSequenceStep `object`: A segment sequence definition.
  * matchType `string` (values: UNSPECIFIED_MATCH_TYPE, PRECEDES, IMMEDIATELY_PRECEDES): Specifies if the step immediately precedes or can be any time before the
  * orFiltersForSegment `array`: A sequence is specified with a list of Or grouped filters which are
    * items [OrFiltersForSegment](#orfiltersforsegment)

### SequenceSegment
* SequenceSegment `object`: Sequence conditions consist of one or more steps, where each step is defined
  * firstStepShouldMatchFirstHit `boolean`: If set, first step condition must match the first hit of the visitor (in
  * segmentSequenceSteps `array`: The list of steps in the sequence.
    * items [SegmentSequenceStep](#segmentsequencestep)

### SimpleSegment
* SimpleSegment `object`: A Simple segment conditions consist of one or more dimension/metric
  * orFiltersForSegment `array`: A list of segment filters groups which are combined with logical `AND`
    * items [OrFiltersForSegment](#orfiltersforsegment)


