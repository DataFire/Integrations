# @datafire/amazonaws_xray

Client library for AWS X-Ray

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_xray
```
```js
let amazonaws_xray = require('@datafire/amazonaws_xray').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_xray.GetEncryptionConfig({}).then(data => {
  console.log(data);
});
```

## Description

AWS X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

## Actions

### GetEncryptionConfig



```js
amazonaws_xray.GetEncryptionConfig({}, context)
```

#### Input
* input `object`

#### Output
* output [GetEncryptionConfigResult](#getencryptionconfigresult)

### PutEncryptionConfig



```js
amazonaws_xray.PutEncryptionConfig({
  "Type": ""
}, context)
```

#### Input
* input `object`
  * KeyId [EncryptionKeyId](#encryptionkeyid)
  * Type **required** [EncryptionType](#encryptiontype)

#### Output
* output [PutEncryptionConfigResult](#putencryptionconfigresult)

### GetServiceGraph



```js
amazonaws_xray.GetServiceGraph({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * EndTime **required** [Timestamp](#timestamp)
  * NextToken [String](#string)
  * StartTime **required** [Timestamp](#timestamp)

#### Output
* output [GetServiceGraphResult](#getservicegraphresult)

### PutTelemetryRecords



```js
amazonaws_xray.PutTelemetryRecords({
  "TelemetryRecords": []
}, context)
```

#### Input
* input `object`
  * EC2InstanceId [EC2InstanceId](#ec2instanceid)
  * Hostname [Hostname](#hostname)
  * ResourceARN [ResourceARN](#resourcearn)
  * TelemetryRecords **required** [TelemetryRecordList](#telemetryrecordlist)

#### Output
* output [PutTelemetryRecordsResult](#puttelemetryrecordsresult)

### GetTraceGraph



```js
amazonaws_xray.GetTraceGraph({
  "TraceIds": []
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [String](#string)
  * TraceIds **required** [TraceIdList](#traceidlist)

#### Output
* output [GetTraceGraphResult](#gettracegraphresult)

### PutTraceSegments



```js
amazonaws_xray.PutTraceSegments({
  "TraceSegmentDocuments": []
}, context)
```

#### Input
* input `object`
  * TraceSegmentDocuments **required** [TraceSegmentDocumentList](#tracesegmentdocumentlist)

#### Output
* output [PutTraceSegmentsResult](#puttracesegmentsresult)

### GetTraceSummaries



```js
amazonaws_xray.GetTraceSummaries({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * EndTime **required** [Timestamp](#timestamp)
  * FilterExpression [FilterExpression](#filterexpression)
  * NextToken [String](#string)
  * Sampling [NullableBoolean](#nullableboolean)
  * StartTime **required** [Timestamp](#timestamp)

#### Output
* output [GetTraceSummariesResult](#gettracesummariesresult)

### BatchGetTraces



```js
amazonaws_xray.BatchGetTraces({
  "TraceIds": []
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [String](#string)
  * TraceIds **required** [TraceIdList](#traceidlist)

#### Output
* output [BatchGetTracesResult](#batchgettracesresult)



## Definitions

### Alias
* Alias `object`: An alias for an edge.
  * Name [String](#string)
  * Names [AliasNames](#aliasnames)
  * Type [String](#string)

### AliasList
* AliasList `array`
  * items [Alias](#alias)

### AliasNames
* AliasNames `array`
  * items [String](#string)

### AnnotationKey
* AnnotationKey `string`

### AnnotationValue
* AnnotationValue `object`: Value of a segment annotation. Has one of three value types: Number, Boolean or String.
  * BooleanValue [NullableBoolean](#nullableboolean)
  * NumberValue [NullableDouble](#nullabledouble)
  * StringValue [String](#string)

### Annotations
* Annotations `array`
  * items `object`
    * key [AnnotationKey](#annotationkey)
    * value [ValuesWithServiceIds](#valueswithserviceids)

### BackendConnectionErrors
* BackendConnectionErrors `object`: <p/>
  * ConnectionRefusedCount [NullableInteger](#nullableinteger)
  * HTTPCode4XXCount [NullableInteger](#nullableinteger)
  * HTTPCode5XXCount [NullableInteger](#nullableinteger)
  * OtherCount [NullableInteger](#nullableinteger)
  * TimeoutCount [NullableInteger](#nullableinteger)
  * UnknownHostCount [NullableInteger](#nullableinteger)

### BatchGetTracesRequest
* BatchGetTracesRequest `object`
  * NextToken [String](#string)
  * TraceIds **required** [TraceIdList](#traceidlist)

### BatchGetTracesResult
* BatchGetTracesResult `object`
  * NextToken [String](#string)
  * Traces [TraceList](#tracelist)
  * UnprocessedTraceIds [UnprocessedTraceIdList](#unprocessedtraceidlist)

### Double
* Double `number`

### EC2InstanceId
* EC2InstanceId `string`

### Edge
* Edge `object`: Information about a connection between two services.
  * Aliases [AliasList](#aliaslist)
  * EndTime [Timestamp](#timestamp)
  * ReferenceId [NullableInteger](#nullableinteger)
  * ResponseTimeHistogram [Histogram](#histogram)
  * StartTime [Timestamp](#timestamp)
  * SummaryStatistics [EdgeStatistics](#edgestatistics)

### EdgeList
* EdgeList `array`
  * items [Edge](#edge)

### EdgeStatistics
* EdgeStatistics `object`: Response statistics for an edge.
  * ErrorStatistics [ErrorStatistics](#errorstatistics)
  * FaultStatistics [FaultStatistics](#faultstatistics)
  * OkCount [NullableLong](#nullablelong)
  * TotalCount [NullableLong](#nullablelong)
  * TotalResponseTime [NullableDouble](#nullabledouble)

### EncryptionConfig
* EncryptionConfig `object`: A configuration document that specifies encryption configuration settings.
  * KeyId [String](#string)
  * Status [EncryptionStatus](#encryptionstatus)
  * Type [EncryptionType](#encryptiontype)

### EncryptionKeyId
* EncryptionKeyId `string`

### EncryptionStatus
* EncryptionStatus `string` (values: UPDATING, ACTIVE)

### EncryptionType
* EncryptionType `string` (values: NONE, KMS)

### ErrorMessage
* ErrorMessage `string`

### ErrorStatistics
* ErrorStatistics `object`: Information about requests that failed with a 4xx Client Error status code.
  * OtherCount [NullableLong](#nullablelong)
  * ThrottleCount [NullableLong](#nullablelong)
  * TotalCount [NullableLong](#nullablelong)

### FaultStatistics
* FaultStatistics `object`: Information about requests that failed with a 5xx Server Error status code.
  * OtherCount [NullableLong](#nullablelong)
  * TotalCount [NullableLong](#nullablelong)

### FilterExpression
* FilterExpression `string`

### GetEncryptionConfigRequest
* GetEncryptionConfigRequest `object`

### GetEncryptionConfigResult
* GetEncryptionConfigResult `object`
  * EncryptionConfig [EncryptionConfig](#encryptionconfig)

### GetServiceGraphRequest
* GetServiceGraphRequest `object`
  * EndTime **required** [Timestamp](#timestamp)
  * NextToken [String](#string)
  * StartTime **required** [Timestamp](#timestamp)

### GetServiceGraphResult
* GetServiceGraphResult `object`
  * EndTime [Timestamp](#timestamp)
  * NextToken [String](#string)
  * Services [ServiceList](#servicelist)
  * StartTime [Timestamp](#timestamp)

### GetTraceGraphRequest
* GetTraceGraphRequest `object`
  * NextToken [String](#string)
  * TraceIds **required** [TraceIdList](#traceidlist)

### GetTraceGraphResult
* GetTraceGraphResult `object`
  * NextToken [String](#string)
  * Services [ServiceList](#servicelist)

### GetTraceSummariesRequest
* GetTraceSummariesRequest `object`
  * EndTime **required** [Timestamp](#timestamp)
  * FilterExpression [FilterExpression](#filterexpression)
  * NextToken [String](#string)
  * Sampling [NullableBoolean](#nullableboolean)
  * StartTime **required** [Timestamp](#timestamp)

### GetTraceSummariesResult
* GetTraceSummariesResult `object`
  * ApproximateTime [Timestamp](#timestamp)
  * NextToken [String](#string)
  * TraceSummaries [TraceSummaryList](#tracesummarylist)
  * TracesProcessedCount [NullableLong](#nullablelong)

### Histogram
* Histogram `array`
  * items [HistogramEntry](#histogramentry)

### HistogramEntry
* HistogramEntry `object`: An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.
  * Count [Integer](#integer)
  * Value [Double](#double)

### Hostname
* Hostname `string`

### Http
* Http `object`: Information about an HTTP request.
  * ClientIp [String](#string)
  * HttpMethod [String](#string)
  * HttpStatus [NullableInteger](#nullableinteger)
  * HttpURL [String](#string)
  * UserAgent [String](#string)

### Integer
* Integer `integer`

### InvalidRequestException
* InvalidRequestException `object`: The request is missing required parameters or has invalid parameters.
  * Message [ErrorMessage](#errormessage)

### NullableBoolean
* NullableBoolean `boolean`

### NullableDouble
* NullableDouble `number`

### NullableInteger
* NullableInteger `integer`

### NullableLong
* NullableLong `integer`

### PutEncryptionConfigRequest
* PutEncryptionConfigRequest `object`
  * KeyId [EncryptionKeyId](#encryptionkeyid)
  * Type **required** [EncryptionType](#encryptiontype)

### PutEncryptionConfigResult
* PutEncryptionConfigResult `object`
  * EncryptionConfig [EncryptionConfig](#encryptionconfig)

### PutTelemetryRecordsRequest
* PutTelemetryRecordsRequest `object`
  * EC2InstanceId [EC2InstanceId](#ec2instanceid)
  * Hostname [Hostname](#hostname)
  * ResourceARN [ResourceARN](#resourcearn)
  * TelemetryRecords **required** [TelemetryRecordList](#telemetryrecordlist)

### PutTelemetryRecordsResult
* PutTelemetryRecordsResult `object`

### PutTraceSegmentsRequest
* PutTraceSegmentsRequest `object`
  * TraceSegmentDocuments **required** [TraceSegmentDocumentList](#tracesegmentdocumentlist)

### PutTraceSegmentsResult
* PutTraceSegmentsResult `object`
  * UnprocessedTraceSegments [UnprocessedTraceSegmentList](#unprocessedtracesegmentlist)

### ResourceARN
* ResourceARN `string`

### Segment
* Segment `object`: <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a>PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
  * Document [SegmentDocument](#segmentdocument)
  * Id [SegmentId](#segmentid)

### SegmentDocument
* SegmentDocument `string`

### SegmentId
* SegmentId `string`

### SegmentList
* SegmentList `array`
  * items [Segment](#segment)

### Service
* Service `object`: Information about an application that processed requests, users that made requests, or downstream services, resources and applications that an application used.
  * AccountId [String](#string)
  * DurationHistogram [Histogram](#histogram)
  * Edges [EdgeList](#edgelist)
  * EndTime [Timestamp](#timestamp)
  * Name [String](#string)
  * Names [ServiceNames](#servicenames)
  * ReferenceId [NullableInteger](#nullableinteger)
  * ResponseTimeHistogram [Histogram](#histogram)
  * Root [NullableBoolean](#nullableboolean)
  * StartTime [Timestamp](#timestamp)
  * State [String](#string)
  * SummaryStatistics [ServiceStatistics](#servicestatistics)
  * Type [String](#string)

### ServiceId
* ServiceId `object`: <p/>
  * AccountId [String](#string)
  * Name [String](#string)
  * Names [ServiceNames](#servicenames)
  * Type [String](#string)

### ServiceIds
* ServiceIds `array`
  * items [ServiceId](#serviceid)

### ServiceList
* ServiceList `array`
  * items [Service](#service)

### ServiceNames
* ServiceNames `array`
  * items [String](#string)

### ServiceStatistics
* ServiceStatistics `object`: Response statistics for a service.
  * ErrorStatistics [ErrorStatistics](#errorstatistics)
  * FaultStatistics [FaultStatistics](#faultstatistics)
  * OkCount [NullableLong](#nullablelong)
  * TotalCount [NullableLong](#nullablelong)
  * TotalResponseTime [NullableDouble](#nullabledouble)

### String
* String `string`

### TelemetryRecord
* TelemetryRecord `object`: <p/>
  * BackendConnectionErrors [BackendConnectionErrors](#backendconnectionerrors)
  * SegmentsReceivedCount [NullableInteger](#nullableinteger)
  * SegmentsRejectedCount [NullableInteger](#nullableinteger)
  * SegmentsSentCount [NullableInteger](#nullableinteger)
  * SegmentsSpilloverCount [NullableInteger](#nullableinteger)
  * Timestamp **required** [Timestamp](#timestamp)

### TelemetryRecordList
* TelemetryRecordList `array`
  * items [TelemetryRecord](#telemetryrecord)

### ThrottledException
* ThrottledException `object`: The request exceeds the maximum number of requests per second.
  * Message [ErrorMessage](#errormessage)

### Timestamp
* Timestamp `string`

### Trace
* Trace `object`: A collection of segment documents with matching trace IDs.
  * Duration [NullableDouble](#nullabledouble)
  * Id [TraceId](#traceid)
  * Segments [SegmentList](#segmentlist)

### TraceId
* TraceId `string`

### TraceIdList
* TraceIdList `array`
  * items [TraceId](#traceid)

### TraceList
* TraceList `array`
  * items [Trace](#trace)

### TraceSegmentDocument
* TraceSegmentDocument `string`

### TraceSegmentDocumentList
* TraceSegmentDocumentList `array`
  * items [TraceSegmentDocument](#tracesegmentdocument)

### TraceSummary
* TraceSummary `object`: Metadata generated from the segment documents in a trace.
  * Annotations [Annotations](#annotations)
  * Duration [NullableDouble](#nullabledouble)
  * HasError [NullableBoolean](#nullableboolean)
  * HasFault [NullableBoolean](#nullableboolean)
  * HasThrottle [NullableBoolean](#nullableboolean)
  * Http [Http](#http)
  * Id [TraceId](#traceid)
  * IsPartial [NullableBoolean](#nullableboolean)
  * ResponseTime [NullableDouble](#nullabledouble)
  * ServiceIds [ServiceIds](#serviceids)
  * Users [TraceUsers](#traceusers)

### TraceSummaryList
* TraceSummaryList `array`
  * items [TraceSummary](#tracesummary)

### TraceUser
* TraceUser `object`: Information about a user recorded in segment documents.
  * ServiceIds [ServiceIds](#serviceids)
  * UserName [String](#string)

### TraceUsers
* TraceUsers `array`
  * items [TraceUser](#traceuser)

### UnprocessedTraceIdList
* UnprocessedTraceIdList `array`
  * items [TraceId](#traceid)

### UnprocessedTraceSegment
* UnprocessedTraceSegment `object`: Information about a segment that failed processing.
  * ErrorCode [String](#string)
  * Id [String](#string)
  * Message [String](#string)

### UnprocessedTraceSegmentList
* UnprocessedTraceSegmentList `array`
  * items [UnprocessedTraceSegment](#unprocessedtracesegment)

### ValueWithServiceIds
* ValueWithServiceIds `object`: Information about a segment annotation.
  * AnnotationValue [AnnotationValue](#annotationvalue)
  * ServiceIds [ServiceIds](#serviceids)

### ValuesWithServiceIds
* ValuesWithServiceIds `array`
  * items [ValueWithServiceIds](#valuewithserviceids)


