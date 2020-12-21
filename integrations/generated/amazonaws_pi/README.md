# @datafire/amazonaws_pi

Client library for AWS Performance Insights

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_pi
```
```js
let amazonaws_pi = require('@datafire/amazonaws_pi').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon RDS Performance Insights</fullname> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors.</p> <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for AWS service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load. </p> <p>DB load is measured as Average Active Sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.</p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html">Amazon Aurora User Guide</a>.</p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Amazon RDS User Guide</a>.</p> </li> </ul>

## Actions

### DescribeDimensionKeys



```js
amazonaws_pi.DescribeDimensionKeys({
  "ServiceType": null,
  "Identifier": null,
  "StartTime": null,
  "EndTime": null,
  "Metric": null,
  "GroupBy": null
}, context)
```

#### Input
* input `object`
  * EndTime **required**
  * Filter
  * GroupBy **required**
    * Dimensions
      * items [String](#string)
    * Group **required**
    * Limit
  * Identifier **required**
  * MaxResults
  * Metric **required**
  * NextToken
  * PartitionBy
    * Dimensions
      * items [String](#string)
    * Group **required**
    * Limit
  * PeriodInSeconds
  * ServiceType **required**
  * StartTime **required**

#### Output
* output [DescribeDimensionKeysResponse](#describedimensionkeysresponse)

### GetResourceMetrics



```js
amazonaws_pi.GetResourceMetrics({
  "ServiceType": null,
  "Identifier": null,
  "MetricQueries": null,
  "StartTime": null,
  "EndTime": null
}, context)
```

#### Input
* input `object`
  * EndTime **required**
  * Identifier **required**
  * MaxResults
  * MetricQueries **required**
    * items [MetricQuery](#metricquery)
  * NextToken
  * PeriodInSeconds
  * ServiceType **required**
  * StartTime **required**

#### Output
* output [GetResourceMetricsResponse](#getresourcemetricsresponse)



## Definitions

### DataPoint
* DataPoint `object`: A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
  * Timestamp **required**
  * Value **required**

### DataPointsList
* DataPointsList `array`
  * items [DataPoint](#datapoint)

### DescribeDimensionKeysRequest
* DescribeDimensionKeysRequest `object`
  * EndTime **required**
  * Filter
  * GroupBy **required**
    * Dimensions
      * items [String](#string)
    * Group **required**
    * Limit
  * Identifier **required**
  * MaxResults
  * Metric **required**
  * NextToken
  * PartitionBy
    * Dimensions
      * items [String](#string)
    * Group **required**
    * Limit
  * PeriodInSeconds
  * ServiceType **required**
  * StartTime **required**

### DescribeDimensionKeysResponse
* DescribeDimensionKeysResponse `object`
  * AlignedEndTime
  * AlignedStartTime
  * Keys
    * items [DimensionKeyDescription](#dimensionkeydescription)
  * NextToken
  * PartitionKeys
    * items [ResponsePartitionKey](#responsepartitionkey)

### DimensionGroup
* DimensionGroup `object`: <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
  * Dimensions
    * items [String](#string)
  * Group **required**
  * Limit

### DimensionKeyDescription
* DimensionKeyDescription `object`: An array of descriptions and aggregated values for each dimension within a dimension group.
  * Dimensions
  * Partitions
    * items [Double](#double)
  * Total

### DimensionKeyDescriptionList
* DimensionKeyDescriptionList `array`
  * items [DimensionKeyDescription](#dimensionkeydescription)

### DimensionMap
* DimensionMap `object`

### Double
* Double `number`

### GetResourceMetricsRequest
* GetResourceMetricsRequest `object`
  * EndTime **required**
  * Identifier **required**
  * MaxResults
  * MetricQueries **required**
    * items [MetricQuery](#metricquery)
  * NextToken
  * PeriodInSeconds
  * ServiceType **required**
  * StartTime **required**

### GetResourceMetricsResponse
* GetResourceMetricsResponse `object`
  * AlignedEndTime
  * AlignedStartTime
  * Identifier
  * MetricList
    * items [MetricKeyDataPoints](#metrickeydatapoints)
  * NextToken

### ISOTimestamp
* ISOTimestamp `string`

### Integer
* Integer `integer`

### InternalServiceError


### InvalidArgumentException


### Limit
* Limit `integer`

### MaxResults
* MaxResults `integer`

### MetricKeyDataPoints
* MetricKeyDataPoints `object`: A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
  * DataPoints
    * items [DataPoint](#datapoint)
  * Key
    * Dimensions
    * Metric **required**

### MetricKeyDataPointsList
* MetricKeyDataPointsList `array`
  * items [MetricKeyDataPoints](#metrickeydatapoints)

### MetricQuery
* MetricQuery `object`: A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
  * Filter
  * GroupBy
    * Dimensions
      * items [String](#string)
    * Group **required**
    * Limit
  * Metric **required**

### MetricQueryFilterMap
* MetricQueryFilterMap `object`

### MetricQueryList
* MetricQueryList `array`
  * items [MetricQuery](#metricquery)

### MetricValuesList
* MetricValuesList `array`
  * items [Double](#double)

### NotAuthorizedException


### ResponsePartitionKey
* ResponsePartitionKey `object`: If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. 
  * Dimensions **required**

### ResponsePartitionKeyList
* ResponsePartitionKeyList `array`
  * items [ResponsePartitionKey](#responsepartitionkey)

### ResponseResourceMetricKey
* ResponseResourceMetricKey `object`: An object describing a Performance Insights metric and one or more dimensions for that metric.
  * Dimensions
  * Metric **required**

### ServiceType
* ServiceType `string` (values: RDS)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)


