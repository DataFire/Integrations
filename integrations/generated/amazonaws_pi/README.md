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

amazonaws_pi.DescribeDimensionKeys({
  "ServiceType": "",
  "Identifier": "",
  "StartTime": "",
  "EndTime": "",
  "Metric": "",
  "GroupBy": {
    "Group": ""
  }
}).then(data => {
  console.log(data);
});
```

## Description

<p>AWS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running RDS instance. The guide provides detailed information about Performance Insights data types, parameters and errors. For more information about Performance Insights capabilities see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon RDS Performance Insights </a> in the <i>Amazon RDS User Guide</i>.</p> <p> The AWS Performance Insights API provides visibility into the performance of your RDS instance, when Performance Insights is enabled for supported engine types. While Amazon CloudWatch provides the authoritative source for AWS service vended monitoring metrics, AWS Performance Insights offers a domain-specific view of database load measured as Average Active Sessions and provided to API consumers as a 2-dimensional time-series dataset. The time dimension of the data provides DB load data for each time point in the queried time range, and each time point decomposes overall load in relation to the requested dimensions, such as SQL, Wait-event, User or Host, measured at that time point.</p>

## Actions

### DescribeDimensionKeys



```js
amazonaws_pi.DescribeDimensionKeys({
  "ServiceType": "",
  "Identifier": "",
  "StartTime": "",
  "EndTime": "",
  "Metric": "",
  "GroupBy": {
    "Group": ""
  }
}, context)
```

#### Input
* input `object`
  * EndTime **required** [ISOTimestamp](#isotimestamp)
  * Filter [MetricQueryFilterMap](#metricqueryfiltermap)
  * GroupBy **required** [DimensionGroup](#dimensiongroup)
  * Identifier **required** [String](#string)
  * MaxResults [MaxResults](#maxresults)
  * Metric **required** [String](#string)
  * NextToken [String](#string)
  * PartitionBy [DimensionGroup](#dimensiongroup)
  * PeriodInSeconds [Integer](#integer)
  * ServiceType **required** [ServiceType](#servicetype)
  * StartTime **required** [ISOTimestamp](#isotimestamp)

#### Output
* output [DescribeDimensionKeysResponse](#describedimensionkeysresponse)

### GetResourceMetrics



```js
amazonaws_pi.GetResourceMetrics({
  "ServiceType": "",
  "Identifier": "",
  "MetricQueries": [],
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * EndTime **required** [ISOTimestamp](#isotimestamp)
  * Identifier **required** [String](#string)
  * MaxResults [MaxResults](#maxresults)
  * MetricQueries **required** [MetricQueryList](#metricquerylist)
  * NextToken [String](#string)
  * PeriodInSeconds [Integer](#integer)
  * ServiceType **required** [ServiceType](#servicetype)
  * StartTime **required** [ISOTimestamp](#isotimestamp)

#### Output
* output [GetResourceMetricsResponse](#getresourcemetricsresponse)



## Definitions

### DataPoint
* DataPoint `object`: A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
  * Timestamp **required** [ISOTimestamp](#isotimestamp)
  * Value **required** [Double](#double)

### DataPointsList
* DataPointsList `array`
  * items [DataPoint](#datapoint)

### DescribeDimensionKeysRequest
* DescribeDimensionKeysRequest `object`
  * EndTime **required** [ISOTimestamp](#isotimestamp)
  * Filter [MetricQueryFilterMap](#metricqueryfiltermap)
  * GroupBy **required** [DimensionGroup](#dimensiongroup)
  * Identifier **required** [String](#string)
  * MaxResults [MaxResults](#maxresults)
  * Metric **required** [String](#string)
  * NextToken [String](#string)
  * PartitionBy [DimensionGroup](#dimensiongroup)
  * PeriodInSeconds [Integer](#integer)
  * ServiceType **required** [ServiceType](#servicetype)
  * StartTime **required** [ISOTimestamp](#isotimestamp)

### DescribeDimensionKeysResponse
* DescribeDimensionKeysResponse `object`
  * AlignedEndTime [ISOTimestamp](#isotimestamp)
  * AlignedStartTime [ISOTimestamp](#isotimestamp)
  * Keys [DimensionKeyDescriptionList](#dimensionkeydescriptionlist)
  * NextToken [String](#string)
  * PartitionKeys [ResponsePartitionKeyList](#responsepartitionkeylist)

### DimensionGroup
* DimensionGroup `object`: A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.
  * Dimensions [StringList](#stringlist)
  * Group **required** [String](#string)
  * Limit [Limit](#limit)

### DimensionKeyDescription
* DimensionKeyDescription `object`: An array of descriptions and aggregated values for each dimension within a dimension group.
  * Dimensions [DimensionMap](#dimensionmap)
  * Partitions [MetricValuesList](#metricvalueslist)
  * Total [Double](#double)

### DimensionKeyDescriptionList
* DimensionKeyDescriptionList `array`
  * items [DimensionKeyDescription](#dimensionkeydescription)

### DimensionMap
* DimensionMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### Double
* Double `number`

### GetResourceMetricsRequest
* GetResourceMetricsRequest `object`
  * EndTime **required** [ISOTimestamp](#isotimestamp)
  * Identifier **required** [String](#string)
  * MaxResults [MaxResults](#maxresults)
  * MetricQueries **required** [MetricQueryList](#metricquerylist)
  * NextToken [String](#string)
  * PeriodInSeconds [Integer](#integer)
  * ServiceType **required** [ServiceType](#servicetype)
  * StartTime **required** [ISOTimestamp](#isotimestamp)

### GetResourceMetricsResponse
* GetResourceMetricsResponse `object`
  * AlignedEndTime [ISOTimestamp](#isotimestamp)
  * AlignedStartTime [ISOTimestamp](#isotimestamp)
  * Identifier [String](#string)
  * MetricList [MetricKeyDataPointsList](#metrickeydatapointslist)
  * NextToken [String](#string)

### ISOTimestamp
* ISOTimestamp `string`

### Integer
* Integer `integer`

### InternalServiceError
* InternalServiceError `object`: The request failed due to an unknown error.
  * Message [String](#string)

### InvalidArgumentException
* InvalidArgumentException `object`: One of the arguments provided is invalid for this request.
  * Message [String](#string)

### Limit
* Limit `integer`

### MaxResults
* MaxResults `integer`

### MetricKeyDataPoints
* MetricKeyDataPoints `object`: A time-ordered series of data points, correpsonding to a dimension of a Performance Insights metric.
  * DataPoints [DataPointsList](#datapointslist)
  * Key [ResponseResourceMetricKey](#responseresourcemetrickey)

### MetricKeyDataPointsList
* MetricKeyDataPointsList `array`
  * items [MetricKeyDataPoints](#metrickeydatapoints)

### MetricQuery
* MetricQuery `object`: A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
  * Filter [MetricQueryFilterMap](#metricqueryfiltermap)
  * GroupBy [DimensionGroup](#dimensiongroup)
  * Metric **required** [String](#string)

### MetricQueryFilterMap
* MetricQueryFilterMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### MetricQueryList
* MetricQueryList `array`
  * items [MetricQuery](#metricquery)

### MetricValuesList
* MetricValuesList `array`
  * items [Double](#double)

### NotAuthorizedException
* NotAuthorizedException `object`: The user is not authorized to perform this request.
  * Message [String](#string)

### ResponsePartitionKey
* ResponsePartitionKey `object`: If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. 
  * Dimensions **required** [DimensionMap](#dimensionmap)

### ResponsePartitionKeyList
* ResponsePartitionKeyList `array`
  * items [ResponsePartitionKey](#responsepartitionkey)

### ResponseResourceMetricKey
* ResponseResourceMetricKey `object`: An object describing a Performance Insights metric and one or more dimensions for that metric.
  * Dimensions [DimensionMap](#dimensionmap)
  * Metric **required** [String](#string)

### ServiceType
* ServiceType `string` (values: RDS)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)


