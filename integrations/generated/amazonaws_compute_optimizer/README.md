# @datafire/amazonaws_compute_optimizer

Client library for AWS Compute Optimizer

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_compute_optimizer
```
```js
let amazonaws_compute_optimizer = require('@datafire/amazonaws_compute_optimizer').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Compute Optimizer is a service that analyzes the configuration and utilization metrics of your AWS compute resources, such as EC2 instances, Auto Scaling groups, and Amazon EBS volumes. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, as well as projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">AWS Compute Optimizer User Guide</a>.

## Actions

### DescribeRecommendationExportJobs



```js
amazonaws_compute_optimizer.DescribeRecommendationExportJobs({}, context)
```

#### Input
* input `object`
  * filters
    * items [JobFilter](#jobfilter)
  * jobIds
    * items [JobId](#jobid)
  * maxResults
  * nextToken

#### Output
* output [DescribeRecommendationExportJobsResponse](#describerecommendationexportjobsresponse)

### ExportAutoScalingGroupRecommendations



```js
amazonaws_compute_optimizer.ExportAutoScalingGroupRecommendations({
  "s3DestinationConfig": null
}, context)
```

#### Input
* input `object`
  * accountIds
    * items [AccountId](#accountid)
  * fieldsToExport
    * items [ExportableAutoScalingGroupField](#exportableautoscalinggroupfield)
  * fileFormat
  * filters
    * items [Filter](#filter)
  * includeMemberAccounts
  * s3DestinationConfig **required**
    * bucket
    * keyPrefix

#### Output
* output [ExportAutoScalingGroupRecommendationsResponse](#exportautoscalinggrouprecommendationsresponse)

### ExportEC2InstanceRecommendations



```js
amazonaws_compute_optimizer.ExportEC2InstanceRecommendations({
  "s3DestinationConfig": null
}, context)
```

#### Input
* input `object`
  * accountIds
    * items [AccountId](#accountid)
  * fieldsToExport
    * items [ExportableInstanceField](#exportableinstancefield)
  * fileFormat
  * filters
    * items [Filter](#filter)
  * includeMemberAccounts
  * s3DestinationConfig **required**
    * bucket
    * keyPrefix

#### Output
* output [ExportEC2InstanceRecommendationsResponse](#exportec2instancerecommendationsresponse)

### GetAutoScalingGroupRecommendations



```js
amazonaws_compute_optimizer.GetAutoScalingGroupRecommendations({}, context)
```

#### Input
* input `object`
  * accountIds
    * items [AccountId](#accountid)
  * autoScalingGroupArns
    * items [AutoScalingGroupArn](#autoscalinggrouparn)
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

#### Output
* output [GetAutoScalingGroupRecommendationsResponse](#getautoscalinggrouprecommendationsresponse)

### GetEBSVolumeRecommendations



```js
amazonaws_compute_optimizer.GetEBSVolumeRecommendations({}, context)
```

#### Input
* input `object`
  * accountIds
    * items [AccountId](#accountid)
  * filters
    * items [EBSFilter](#ebsfilter)
  * maxResults
  * nextToken
  * volumeArns
    * items [VolumeArn](#volumearn)

#### Output
* output [GetEBSVolumeRecommendationsResponse](#getebsvolumerecommendationsresponse)

### GetEC2InstanceRecommendations



```js
amazonaws_compute_optimizer.GetEC2InstanceRecommendations({}, context)
```

#### Input
* input `object`
  * accountIds
    * items [AccountId](#accountid)
  * filters
    * items [Filter](#filter)
  * instanceArns
    * items [InstanceArn](#instancearn)
  * maxResults
  * nextToken

#### Output
* output [GetEC2InstanceRecommendationsResponse](#getec2instancerecommendationsresponse)

### GetEC2RecommendationProjectedMetrics



```js
amazonaws_compute_optimizer.GetEC2RecommendationProjectedMetrics({
  "instanceArn": null,
  "stat": null,
  "period": null,
  "startTime": null,
  "endTime": null
}, context)
```

#### Input
* input `object`
  * endTime **required**
  * instanceArn **required**
  * period **required**
  * startTime **required**
  * stat **required**

#### Output
* output [GetEC2RecommendationProjectedMetricsResponse](#getec2recommendationprojectedmetricsresponse)

### GetEnrollmentStatus



```js
amazonaws_compute_optimizer.GetEnrollmentStatus({}, context)
```

#### Input
* input `object`

#### Output
* output [GetEnrollmentStatusResponse](#getenrollmentstatusresponse)

### GetRecommendationSummaries



```js
amazonaws_compute_optimizer.GetRecommendationSummaries({}, context)
```

#### Input
* input `object`
  * accountIds
    * items [AccountId](#accountid)
  * maxResults
  * nextToken

#### Output
* output [GetRecommendationSummariesResponse](#getrecommendationsummariesresponse)

### UpdateEnrollmentStatus



```js
amazonaws_compute_optimizer.UpdateEnrollmentStatus({
  "status": null
}, context)
```

#### Input
* input `object`
  * includeMemberAccounts
  * status **required**

#### Output
* output [UpdateEnrollmentStatusResponse](#updateenrollmentstatusresponse)



## Definitions

### AccessDeniedException


### AccountId
* AccountId `string`

### AccountIds
* AccountIds `array`
  * items [AccountId](#accountid)

### AutoScalingGroupArn
* AutoScalingGroupArn `string`

### AutoScalingGroupArns
* AutoScalingGroupArns `array`
  * items [AutoScalingGroupArn](#autoscalinggrouparn)

### AutoScalingGroupConfiguration
* AutoScalingGroupConfiguration `object`: Describes the configuration of an Auto Scaling group.
  * desiredCapacity
  * instanceType
  * maxSize
  * minSize

### AutoScalingGroupName
* AutoScalingGroupName `string`

### AutoScalingGroupRecommendation
* AutoScalingGroupRecommendation `object`: Describes an Auto Scaling group recommendation.
  * accountId
  * autoScalingGroupArn
  * autoScalingGroupName
  * currentConfiguration
    * desiredCapacity
    * instanceType
    * maxSize
    * minSize
  * finding
  * lastRefreshTimestamp
  * lookBackPeriodInDays
  * recommendationOptions
    * items [AutoScalingGroupRecommendationOption](#autoscalinggrouprecommendationoption)
  * utilizationMetrics
    * items [UtilizationMetric](#utilizationmetric)

### AutoScalingGroupRecommendationOption
* AutoScalingGroupRecommendationOption `object`: Describes a recommendation option for an Auto Scaling group.
  * configuration
    * desiredCapacity
    * instanceType
    * maxSize
    * minSize
  * performanceRisk
  * projectedUtilizationMetrics
    * items [UtilizationMetric](#utilizationmetric)
  * rank

### AutoScalingGroupRecommendationOptions
* AutoScalingGroupRecommendationOptions `array`
  * items [AutoScalingGroupRecommendationOption](#autoscalinggrouprecommendationoption)

### AutoScalingGroupRecommendations
* AutoScalingGroupRecommendations `array`
  * items [AutoScalingGroupRecommendation](#autoscalinggrouprecommendation)

### Code
* Code `string`

### CreationTimestamp
* CreationTimestamp `string`

### CurrentInstanceType
* CurrentInstanceType `string`

### DescribeRecommendationExportJobsRequest
* DescribeRecommendationExportJobsRequest `object`
  * filters
    * items [JobFilter](#jobfilter)
  * jobIds
    * items [JobId](#jobid)
  * maxResults
  * nextToken

### DescribeRecommendationExportJobsResponse
* DescribeRecommendationExportJobsResponse `object`
  * nextToken
  * recommendationExportJobs
    * items [RecommendationExportJob](#recommendationexportjob)

### DesiredCapacity
* DesiredCapacity `integer`

### DestinationBucket
* DestinationBucket `string`

### DestinationKey
* DestinationKey `string`

### DestinationKeyPrefix
* DestinationKeyPrefix `string`

### EBSFilter
* EBSFilter `object`: <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>This filter is used with the <code>GetEBSVolumeRecommendations</code> action.</p>
  * name
  * values
    * items [FilterValue](#filtervalue)

### EBSFilterName
* EBSFilterName `string` (values: Finding)

### EBSFilters
* EBSFilters `array`
  * items [EBSFilter](#ebsfilter)

### EBSFinding
* EBSFinding `string` (values: Optimized, NotOptimized)

### EBSMetricName
* EBSMetricName `string` (values: VolumeReadOpsPerSecond, VolumeWriteOpsPerSecond, VolumeReadBytesPerSecond, VolumeWriteBytesPerSecond)

### EBSUtilizationMetric
* EBSUtilizationMetric `object`: <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
  * name
  * statistic
  * value

### EBSUtilizationMetrics
* EBSUtilizationMetrics `array`
  * items [EBSUtilizationMetric](#ebsutilizationmetric)

### ExportAutoScalingGroupRecommendationsRequest
* ExportAutoScalingGroupRecommendationsRequest `object`
  * accountIds
    * items [AccountId](#accountid)
  * fieldsToExport
    * items [ExportableAutoScalingGroupField](#exportableautoscalinggroupfield)
  * fileFormat
  * filters
    * items [Filter](#filter)
  * includeMemberAccounts
  * s3DestinationConfig **required**
    * bucket
    * keyPrefix

### ExportAutoScalingGroupRecommendationsResponse
* ExportAutoScalingGroupRecommendationsResponse `object`
  * jobId
  * s3Destination
    * bucket
    * key
    * metadataKey

### ExportDestination
* ExportDestination `object`: Describes the destination of the recommendations export and metadata files.
  * s3
    * bucket
    * key
    * metadataKey

### ExportEC2InstanceRecommendationsRequest
* ExportEC2InstanceRecommendationsRequest `object`
  * accountIds
    * items [AccountId](#accountid)
  * fieldsToExport
    * items [ExportableInstanceField](#exportableinstancefield)
  * fileFormat
  * filters
    * items [Filter](#filter)
  * includeMemberAccounts
  * s3DestinationConfig **required**
    * bucket
    * keyPrefix

### ExportEC2InstanceRecommendationsResponse
* ExportEC2InstanceRecommendationsResponse `object`
  * jobId
  * s3Destination
    * bucket
    * key
    * metadataKey

### ExportableAutoScalingGroupField
* ExportableAutoScalingGroupField `string` (values: AccountId, AutoScalingGroupArn, AutoScalingGroupName, Finding, UtilizationMetricsCpuMaximum, UtilizationMetricsMemoryMaximum, UtilizationMetricsEbsReadOpsPerSecondMaximum, UtilizationMetricsEbsWriteOpsPerSecondMaximum, UtilizationMetricsEbsReadBytesPerSecondMaximum, UtilizationMetricsEbsWriteBytesPerSecondMaximum, LookbackPeriodInDays, CurrentConfigurationInstanceType, CurrentConfigurationDesiredCapacity, CurrentConfigurationMinSize, CurrentConfigurationMaxSize, CurrentOnDemandPrice, CurrentStandardOneYearNoUpfrontReservedPrice, CurrentStandardThreeYearNoUpfrontReservedPrice, CurrentVCpus, CurrentMemory, CurrentStorage, CurrentNetwork, RecommendationOptionsConfigurationInstanceType, RecommendationOptionsConfigurationDesiredCapacity, RecommendationOptionsConfigurationMinSize, RecommendationOptionsConfigurationMaxSize, RecommendationOptionsProjectedUtilizationMetricsCpuMaximum, RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum, RecommendationOptionsPerformanceRisk, RecommendationOptionsOnDemandPrice, RecommendationOptionsStandardOneYearNoUpfrontReservedPrice, RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice, RecommendationOptionsVcpus, RecommendationOptionsMemory, RecommendationOptionsStorage, RecommendationOptionsNetwork, LastRefreshTimestamp)

### ExportableAutoScalingGroupFields
* ExportableAutoScalingGroupFields `array`
  * items [ExportableAutoScalingGroupField](#exportableautoscalinggroupfield)

### ExportableInstanceField
* ExportableInstanceField `string` (values: AccountId, InstanceArn, InstanceName, Finding, LookbackPeriodInDays, CurrentInstanceType, UtilizationMetricsCpuMaximum, UtilizationMetricsMemoryMaximum, UtilizationMetricsEbsReadOpsPerSecondMaximum, UtilizationMetricsEbsWriteOpsPerSecondMaximum, UtilizationMetricsEbsReadBytesPerSecondMaximum, UtilizationMetricsEbsWriteBytesPerSecondMaximum, CurrentOnDemandPrice, CurrentStandardOneYearNoUpfrontReservedPrice, CurrentStandardThreeYearNoUpfrontReservedPrice, CurrentVCpus, CurrentMemory, CurrentStorage, CurrentNetwork, RecommendationOptionsInstanceType, RecommendationOptionsProjectedUtilizationMetricsCpuMaximum, RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum, RecommendationOptionsPerformanceRisk, RecommendationOptionsVcpus, RecommendationOptionsMemory, RecommendationOptionsStorage, RecommendationOptionsNetwork, RecommendationOptionsOnDemandPrice, RecommendationOptionsStandardOneYearNoUpfrontReservedPrice, RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice, RecommendationsSourcesRecommendationSourceArn, RecommendationsSourcesRecommendationSourceType, LastRefreshTimestamp)

### ExportableInstanceFields
* ExportableInstanceFields `array`
  * items [ExportableInstanceField](#exportableinstancefield)

### FailureReason
* FailureReason `string`

### FileFormat
* FileFormat `string` (values: Csv)

### Filter
* Filter `object`: <p>Describes a filter that returns a more specific list of recommendations.</p> <p>This filter is used with the <code>GetAutoScalingGroupRecommendations</code> and <code>GetEC2InstanceRecommendations</code> actions.</p>
  * name
  * values
    * items [FilterValue](#filtervalue)

### FilterName
* FilterName `string` (values: Finding, RecommendationSourceType)

### FilterValue
* FilterValue `string`

### FilterValues
* FilterValues `array`
  * items [FilterValue](#filtervalue)

### Filters
* Filters `array`
  * items [Filter](#filter)

### Finding
* Finding `string` (values: Underprovisioned, Overprovisioned, Optimized, NotOptimized)

### GetAutoScalingGroupRecommendationsRequest
* GetAutoScalingGroupRecommendationsRequest `object`
  * accountIds
    * items [AccountId](#accountid)
  * autoScalingGroupArns
    * items [AutoScalingGroupArn](#autoscalinggrouparn)
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### GetAutoScalingGroupRecommendationsResponse
* GetAutoScalingGroupRecommendationsResponse `object`
  * autoScalingGroupRecommendations
    * items [AutoScalingGroupRecommendation](#autoscalinggrouprecommendation)
  * errors
    * items [GetRecommendationError](#getrecommendationerror)
  * nextToken

### GetEBSVolumeRecommendationsRequest
* GetEBSVolumeRecommendationsRequest `object`
  * accountIds
    * items [AccountId](#accountid)
  * filters
    * items [EBSFilter](#ebsfilter)
  * maxResults
  * nextToken
  * volumeArns
    * items [VolumeArn](#volumearn)

### GetEBSVolumeRecommendationsResponse
* GetEBSVolumeRecommendationsResponse `object`
  * errors
    * items [GetRecommendationError](#getrecommendationerror)
  * nextToken
  * volumeRecommendations
    * items [VolumeRecommendation](#volumerecommendation)

### GetEC2InstanceRecommendationsRequest
* GetEC2InstanceRecommendationsRequest `object`
  * accountIds
    * items [AccountId](#accountid)
  * filters
    * items [Filter](#filter)
  * instanceArns
    * items [InstanceArn](#instancearn)
  * maxResults
  * nextToken

### GetEC2InstanceRecommendationsResponse
* GetEC2InstanceRecommendationsResponse `object`
  * errors
    * items [GetRecommendationError](#getrecommendationerror)
  * instanceRecommendations
    * items [InstanceRecommendation](#instancerecommendation)
  * nextToken

### GetEC2RecommendationProjectedMetricsRequest
* GetEC2RecommendationProjectedMetricsRequest `object`
  * endTime **required**
  * instanceArn **required**
  * period **required**
  * startTime **required**
  * stat **required**

### GetEC2RecommendationProjectedMetricsResponse
* GetEC2RecommendationProjectedMetricsResponse `object`
  * recommendedOptionProjectedMetrics
    * items [RecommendedOptionProjectedMetric](#recommendedoptionprojectedmetric)

### GetEnrollmentStatusRequest
* GetEnrollmentStatusRequest `object`

### GetEnrollmentStatusResponse
* GetEnrollmentStatusResponse `object`
  * memberAccountsEnrolled
  * status
  * statusReason

### GetRecommendationError
* GetRecommendationError `object`: <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>
  * code
  * identifier
  * message

### GetRecommendationErrors
* GetRecommendationErrors `array`
  * items [GetRecommendationError](#getrecommendationerror)

### GetRecommendationSummariesRequest
* GetRecommendationSummariesRequest `object`
  * accountIds
    * items [AccountId](#accountid)
  * maxResults
  * nextToken

### GetRecommendationSummariesResponse
* GetRecommendationSummariesResponse `object`
  * nextToken
  * recommendationSummaries
    * items [RecommendationSummary](#recommendationsummary)

### Identifier
* Identifier `string`

### IncludeMemberAccounts
* IncludeMemberAccounts `boolean`

### InstanceArn
* InstanceArn `string`

### InstanceArns
* InstanceArns `array`
  * items [InstanceArn](#instancearn)

### InstanceName
* InstanceName `string`

### InstanceRecommendation
* InstanceRecommendation `object`: Describes an Amazon EC2 instance recommendation.
  * accountId
  * currentInstanceType
  * finding
  * instanceArn
  * instanceName
  * lastRefreshTimestamp
  * lookBackPeriodInDays
  * recommendationOptions
    * items [InstanceRecommendationOption](#instancerecommendationoption)
  * recommendationSources
    * items [RecommendationSource](#recommendationsource)
  * utilizationMetrics
    * items [UtilizationMetric](#utilizationmetric)

### InstanceRecommendationOption
* InstanceRecommendationOption `object`: Describes a recommendation option for an Amazon EC2 instance.
  * instanceType
  * performanceRisk
  * projectedUtilizationMetrics
    * items [UtilizationMetric](#utilizationmetric)
  * rank

### InstanceRecommendations
* InstanceRecommendations `array`
  * items [InstanceRecommendation](#instancerecommendation)

### InstanceType
* InstanceType `string`

### InternalServerException


### InvalidParameterValueException


### JobFilter
* JobFilter `object`: <p>Describes a filter that returns a more specific list of recommendation export jobs.</p> <p>This filter is used with the <code>DescribeRecommendationExportJobs</code> action.</p>
  * name
  * values
    * items [FilterValue](#filtervalue)

### JobFilterName
* JobFilterName `string` (values: ResourceType, JobStatus)

### JobFilters
* JobFilters `array`
  * items [JobFilter](#jobfilter)

### JobId
* JobId `string`

### JobIds
* JobIds `array`
  * items [JobId](#jobid)

### JobStatus
* JobStatus `string` (values: Queued, InProgress, Complete, Failed)

### LastRefreshTimestamp
* LastRefreshTimestamp `string`

### LastUpdatedTimestamp
* LastUpdatedTimestamp `string`

### LimitExceededException


### LookBackPeriodInDays
* LookBackPeriodInDays `number`

### MaxResults
* MaxResults `integer`

### MaxSize
* MaxSize `integer`

### MemberAccountsEnrolled
* MemberAccountsEnrolled `boolean`

### Message
* Message `string`

### MetadataKey
* MetadataKey `string`

### MetricName
* MetricName `string` (values: Cpu, Memory, EBS_READ_OPS_PER_SECOND, EBS_WRITE_OPS_PER_SECOND, EBS_READ_BYTES_PER_SECOND, EBS_WRITE_BYTES_PER_SECOND)

### MetricStatistic
* MetricStatistic `string` (values: Maximum, Average)

### MetricValue
* MetricValue `number`

### MetricValues
* MetricValues `array`
  * items [MetricValue](#metricvalue)

### MinSize
* MinSize `integer`

### MissingAuthenticationToken


### NextToken
* NextToken `string`

### OptInRequiredException


### PerformanceRisk
* PerformanceRisk `number`

### Period
* Period `integer`

### ProjectedMetric
* ProjectedMetric `object`: <p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. This represents the projected utilization of a recommendation option had you used that resource during the analyzed period.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <code>GetEC2RecommendationProjectedMetrics</code> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
  * name
  * timestamps
    * items [Timestamp](#timestamp)
  * values
    * items [MetricValue](#metricvalue)

### ProjectedMetrics
* ProjectedMetrics `array`
  * items [ProjectedMetric](#projectedmetric)

### ProjectedUtilizationMetrics
* ProjectedUtilizationMetrics `array`
  * items [UtilizationMetric](#utilizationmetric)

### Rank
* Rank `integer`

### RecommendationExportJob
* RecommendationExportJob `object`: <p>Describes a recommendation export job.</p> <p>Use the <code>DescribeRecommendationExportJobs</code> action to view your recommendation export jobs.</p> <p>Use the <code>ExportAutoScalingGroupRecommendations</code> or <code>ExportEC2InstanceRecommendations</code> actions to request an export of your recommendations.</p>
  * creationTimestamp
  * destination
    * s3
      * bucket
      * key
      * metadataKey
  * failureReason
  * jobId
  * lastUpdatedTimestamp
  * resourceType
  * status

### RecommendationExportJobs
* RecommendationExportJobs `array`
  * items [RecommendationExportJob](#recommendationexportjob)

### RecommendationOptions
* RecommendationOptions `array`
  * items [InstanceRecommendationOption](#instancerecommendationoption)

### RecommendationSource
* RecommendationSource `object`: Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
  * recommendationSourceArn
  * recommendationSourceType

### RecommendationSourceArn
* RecommendationSourceArn `string`

### RecommendationSourceType
* RecommendationSourceType `string` (values: Ec2Instance, AutoScalingGroup, EbsVolume)

### RecommendationSources
* RecommendationSources `array`
  * items [RecommendationSource](#recommendationsource)

### RecommendationSummaries
* RecommendationSummaries `array`
  * items [RecommendationSummary](#recommendationsummary)

### RecommendationSummary
* RecommendationSummary `object`: A summary of a recommendation.
  * accountId
  * recommendationResourceType
  * summaries
    * items [Summary](#summary)

### RecommendedInstanceType
* RecommendedInstanceType `string`

### RecommendedOptionProjectedMetric
* RecommendedOptionProjectedMetric `object`: <p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <code>GetEC2RecommendationProjectedMetrics</code> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
  * projectedMetrics
    * items [ProjectedMetric](#projectedmetric)
  * rank
  * recommendedInstanceType

### RecommendedOptionProjectedMetrics
* RecommendedOptionProjectedMetrics `array`
  * items [RecommendedOptionProjectedMetric](#recommendedoptionprojectedmetric)

### ResourceNotFoundException


### ResourceType
* ResourceType `string` (values: Ec2Instance, AutoScalingGroup)

### S3Destination
* S3Destination `object`: Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
  * bucket
  * key
  * metadataKey

### S3DestinationConfig
* S3DestinationConfig `object`: <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer user guide</i>.</p>
  * bucket
  * keyPrefix

### ServiceUnavailableException


### Status
* Status `string` (values: Active, Inactive, Pending, Failed)

### StatusReason
* StatusReason `string`

### Summaries
* Summaries `array`
  * items [Summary](#summary)

### Summary
* Summary `object`: The summary of a recommendation.
  * name
  * value

### SummaryValue
* SummaryValue `number`

### ThrottlingException


### Timestamp
* Timestamp `string`

### Timestamps
* Timestamps `array`
  * items [Timestamp](#timestamp)

### UpdateEnrollmentStatusRequest
* UpdateEnrollmentStatusRequest `object`
  * includeMemberAccounts
  * status **required**

### UpdateEnrollmentStatusResponse
* UpdateEnrollmentStatusResponse `object`
  * status
  * statusReason

### UtilizationMetric
* UtilizationMetric `object`: <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
  * name
  * statistic
  * value

### UtilizationMetrics
* UtilizationMetrics `array`
  * items [UtilizationMetric](#utilizationmetric)

### VolumeArn
* VolumeArn `string`

### VolumeArns
* VolumeArns `array`
  * items [VolumeArn](#volumearn)

### VolumeBaselineIOPS
* VolumeBaselineIOPS `integer`

### VolumeBaselineThroughput
* VolumeBaselineThroughput `integer`

### VolumeBurstIOPS
* VolumeBurstIOPS `integer`

### VolumeBurstThroughput
* VolumeBurstThroughput `integer`

### VolumeConfiguration
* VolumeConfiguration `object`: Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
  * volumeBaselineIOPS
  * volumeBaselineThroughput
  * volumeBurstIOPS
  * volumeBurstThroughput
  * volumeSize
  * volumeType

### VolumeRecommendation
* VolumeRecommendation `object`: Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
  * accountId
  * currentConfiguration
    * volumeBaselineIOPS
    * volumeBaselineThroughput
    * volumeBurstIOPS
    * volumeBurstThroughput
    * volumeSize
    * volumeType
  * finding
  * lastRefreshTimestamp
  * lookBackPeriodInDays
  * utilizationMetrics
    * items [EBSUtilizationMetric](#ebsutilizationmetric)
  * volumeArn
  * volumeRecommendationOptions
    * items [VolumeRecommendationOption](#volumerecommendationoption)

### VolumeRecommendationOption
* VolumeRecommendationOption `object`: Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
  * configuration
    * volumeBaselineIOPS
    * volumeBaselineThroughput
    * volumeBurstIOPS
    * volumeBurstThroughput
    * volumeSize
    * volumeType
  * performanceRisk
  * rank

### VolumeRecommendationOptions
* VolumeRecommendationOptions `array`
  * items [VolumeRecommendationOption](#volumerecommendationoption)

### VolumeRecommendations
* VolumeRecommendations `array`
  * items [VolumeRecommendation](#volumerecommendation)

### VolumeSize
* VolumeSize `integer`

### VolumeType
* VolumeType `string`


