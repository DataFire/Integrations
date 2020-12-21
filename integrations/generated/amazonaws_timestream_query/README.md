# @datafire/amazonaws_timestream_query

Client library for Amazon Timestream Query

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_timestream_query
```
```js
let amazonaws_timestream_query = require('@datafire/amazonaws_timestream_query').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

 

## Actions

### CancelQuery



```js
amazonaws_timestream_query.CancelQuery({
  "QueryId": null
}, context)
```

#### Input
* input `object`
  * QueryId **required**

#### Output
* output [CancelQueryResponse](#cancelqueryresponse)

### DescribeEndpoints



```js
amazonaws_timestream_query.DescribeEndpoints({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeEndpointsResponse](#describeendpointsresponse)

### Query



```js
amazonaws_timestream_query.Query({
  "QueryString": null
}, context)
```

#### Input
* input `object`
  * MaxRows `string`
  * NextToken `string`
  * ClientToken
  * MaxRows
  * NextToken
  * QueryString **required**

#### Output
* output [QueryResponse](#queryresponse)



## Definitions

### AccessDeniedException


### CancelQueryRequest
* CancelQueryRequest `object`
  * QueryId **required**

### CancelQueryResponse
* CancelQueryResponse `object`
  * CancellationMessage

### ClientRequestToken
* ClientRequestToken `string`

### ColumnInfo
* ColumnInfo `object`:  Contains the meta data for query results such as the column names, data types, and other attributes. 
  * Name
  * Type **required**
    * ArrayColumnInfo
      * Name
      * Type **required**
        * ArrayColumnInfo
          * Name
          * Type **required**
        * RowColumnInfo
          * items [ColumnInfo](#columninfo)
        * ScalarType
        * TimeSeriesMeasureValueColumnInfo
          * Name
          * Type **required**
    * RowColumnInfo
      * items [ColumnInfo](#columninfo)
    * ScalarType
    * TimeSeriesMeasureValueColumnInfo
      * Name
      * Type **required**
        * ArrayColumnInfo
          * Name
          * Type **required**
        * RowColumnInfo
          * items [ColumnInfo](#columninfo)
        * ScalarType
        * TimeSeriesMeasureValueColumnInfo
          * Name
          * Type **required**

### ColumnInfoList
* ColumnInfoList `array`
  * items [ColumnInfo](#columninfo)

### ConflictException


### Datum
* Datum `object`:  Datum represents a single data point in a query result. 
  * ArrayValue
    * items [Datum](#datum)
  * NullValue
  * RowValue
    * Data **required**
      * items [Datum](#datum)
  * ScalarValue
  * TimeSeriesValue
    * items [TimeSeriesDataPoint](#timeseriesdatapoint)

### DatumList
* DatumList `array`
  * items [Datum](#datum)

### DescribeEndpointsRequest
* DescribeEndpointsRequest `object`

### DescribeEndpointsResponse
* DescribeEndpointsResponse `object`
  * Endpoints **required**
    * items [Endpoint](#endpoint)

### Double
* Double `number`

### Endpoint
* Endpoint `object`: Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.
  * Address **required**
  * CachePeriodInMinutes **required**

### Endpoints
* Endpoints `array`
  * items [Endpoint](#endpoint)

### InternalServerException


### InvalidEndpointException


### Long
* Long `integer`

### MaxQueryResults
* MaxQueryResults `integer`

### NullableBoolean
* NullableBoolean `boolean`

### QueryExecutionException


### QueryId
* QueryId `string`

### QueryRequest
* QueryRequest `object`
  * ClientToken
  * MaxRows
  * NextToken
  * QueryString **required**

### QueryResponse
* QueryResponse `object`
  * ColumnInfo **required**
    * items [ColumnInfo](#columninfo)
  * NextToken
  * QueryId **required**
  * QueryStatus
    * CumulativeBytesMetered
    * CumulativeBytesScanned
    * ProgressPercentage
  * Rows **required**
    * items [Row](#row)

### QueryStatus
* QueryStatus `object`: Information about the status of the query, including progress and bytes scannned.
  * CumulativeBytesMetered
  * CumulativeBytesScanned
  * ProgressPercentage

### QueryString
* QueryString `string`

### Row
* Row `object`: Represents a single row in the query results.
  * Data **required**
    * items [Datum](#datum)

### RowList
* RowList `array`
  * items [Row](#row)

### ScalarType
* ScalarType `string` (values: VARCHAR, BOOLEAN, BIGINT, DOUBLE, TIMESTAMP, DATE, TIME, INTERVAL_DAY_TO_SECOND, INTERVAL_YEAR_TO_MONTH, UNKNOWN, INTEGER)

### ScalarValue
* ScalarValue `string`

### String
* String `string`

### ThrottlingException


### TimeSeriesDataPoint
* TimeSeriesDataPoint `object`: The timeseries datatype represents the values of a measure over time. A time series is an array of rows of timestamps and measure values, with rows sorted in ascending order of time. A TimeSeriesDataPoint is a single data point in the timeseries. It represents a tuple of (time, measure value) in a timeseries. 
  * Time **required**
  * Value **required**
    * ArrayValue
      * items [Datum](#datum)
    * NullValue
    * RowValue
      * Data **required**
        * items [Datum](#datum)
    * ScalarValue
    * TimeSeriesValue
      * items [TimeSeriesDataPoint](#timeseriesdatapoint)

### TimeSeriesDataPointList
* TimeSeriesDataPointList `array`
  * items [TimeSeriesDataPoint](#timeseriesdatapoint)

### Timestamp
* Timestamp `string`

### Type
* Type `object`: Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.
  * ArrayColumnInfo
    * Name
    * Type **required**
      * ArrayColumnInfo
        * Name
        * Type **required**
          * ArrayColumnInfo
          * RowColumnInfo
          * ScalarType
          * TimeSeriesMeasureValueColumnInfo
      * RowColumnInfo
        * items [ColumnInfo](#columninfo)
      * ScalarType
      * TimeSeriesMeasureValueColumnInfo
        * Name
        * Type **required**
          * ArrayColumnInfo
          * RowColumnInfo
          * ScalarType
          * TimeSeriesMeasureValueColumnInfo
  * RowColumnInfo
    * items [ColumnInfo](#columninfo)
  * ScalarType
  * TimeSeriesMeasureValueColumnInfo
    * Name
    * Type **required**
      * ArrayColumnInfo
        * Name
        * Type **required**
          * ArrayColumnInfo
          * RowColumnInfo
          * ScalarType
          * TimeSeriesMeasureValueColumnInfo
      * RowColumnInfo
        * items [ColumnInfo](#columninfo)
      * ScalarType
      * TimeSeriesMeasureValueColumnInfo
        * Name
        * Type **required**
          * ArrayColumnInfo
          * RowColumnInfo
          * ScalarType
          * TimeSeriesMeasureValueColumnInfo

### ValidationException



