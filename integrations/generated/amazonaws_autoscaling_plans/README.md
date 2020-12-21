# @datafire/amazonaws_autoscaling_plans

Client library for AWS Auto Scaling Plans

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_autoscaling_plans
```
```js
let amazonaws_autoscaling_plans = require('@datafire/amazonaws_autoscaling_plans').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to quickly discover all the scalable AWS resources for your application and configure dynamic scaling and predictive scaling for your resources using scaling plans. Use this service in conjunction with the Amazon EC2 Auto Scaling, Application Auto Scaling, Amazon CloudWatch, and AWS CloudFormation services. </p> <p>Currently, predictive scaling is only available for Amazon EC2 Auto Scaling groups.</p> <p>For more information about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>.</p>

## Actions

### CreateScalingPlan



```js
amazonaws_autoscaling_plans.CreateScalingPlan({
  "ScalingPlanName": null,
  "ApplicationSource": null,
  "ScalingInstructions": null
}, context)
```

#### Input
* input `object`
  * ApplicationSource **required**
    * CloudFormationStackARN
    * TagFilters
      * items [TagFilter](#tagfilter)
  * ScalingInstructions **required**
    * items [ScalingInstruction](#scalinginstruction)
  * ScalingPlanName **required**

#### Output
* output [CreateScalingPlanResponse](#createscalingplanresponse)

### DeleteScalingPlan



```js
amazonaws_autoscaling_plans.DeleteScalingPlan({
  "ScalingPlanName": null,
  "ScalingPlanVersion": null
}, context)
```

#### Input
* input `object`
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**

#### Output
* output [DeleteScalingPlanResponse](#deletescalingplanresponse)

### DescribeScalingPlanResources



```js
amazonaws_autoscaling_plans.DescribeScalingPlanResources({
  "ScalingPlanName": null,
  "ScalingPlanVersion": null
}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**

#### Output
* output [DescribeScalingPlanResourcesResponse](#describescalingplanresourcesresponse)

### DescribeScalingPlans



```js
amazonaws_autoscaling_plans.DescribeScalingPlans({}, context)
```

#### Input
* input `object`
  * ApplicationSources
    * items [ApplicationSource](#applicationsource)
  * MaxResults
  * NextToken
  * ScalingPlanNames
    * items [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion

#### Output
* output [DescribeScalingPlansResponse](#describescalingplansresponse)

### GetScalingPlanResourceForecastData



```js
amazonaws_autoscaling_plans.GetScalingPlanResourceForecastData({
  "ScalingPlanName": null,
  "ScalingPlanVersion": null,
  "ServiceNamespace": null,
  "ResourceId": null,
  "ScalableDimension": null,
  "ForecastDataType": null,
  "StartTime": null,
  "EndTime": null
}, context)
```

#### Input
* input `object`
  * EndTime **required**
  * ForecastDataType **required**
  * ResourceId **required**
  * ScalableDimension **required**
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**
  * ServiceNamespace **required**
  * StartTime **required**

#### Output
* output [GetScalingPlanResourceForecastDataResponse](#getscalingplanresourceforecastdataresponse)

### UpdateScalingPlan



```js
amazonaws_autoscaling_plans.UpdateScalingPlan({
  "ScalingPlanName": null,
  "ScalingPlanVersion": null
}, context)
```

#### Input
* input `object`
  * ApplicationSource
    * CloudFormationStackARN
    * TagFilters
      * items [TagFilter](#tagfilter)
  * ScalingInstructions
    * items [ScalingInstruction](#scalinginstruction)
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**

#### Output
* output [UpdateScalingPlanResponse](#updatescalingplanresponse)



## Definitions

### ApplicationSource
* ApplicationSource `object`: Represents an application source.
  * CloudFormationStackARN
  * TagFilters
    * items [TagFilter](#tagfilter)

### ApplicationSources
* ApplicationSources `array`
  * items [ApplicationSource](#applicationsource)

### ConcurrentUpdateException


### Cooldown
* Cooldown `integer`

### CreateScalingPlanRequest
* CreateScalingPlanRequest `object`
  * ApplicationSource **required**
    * CloudFormationStackARN
    * TagFilters
      * items [TagFilter](#tagfilter)
  * ScalingInstructions **required**
    * items [ScalingInstruction](#scalinginstruction)
  * ScalingPlanName **required**

### CreateScalingPlanResponse
* CreateScalingPlanResponse `object`
  * ScalingPlanVersion **required**

### CustomizedLoadMetricSpecification
* CustomizedLoadMetricSpecification `object`: <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data. Statistics are calculations used to aggregate data over specified time periods.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group.</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
  * Dimensions
    * items [MetricDimension](#metricdimension)
  * MetricName **required**
  * Namespace **required**
  * Statistic **required**
  * Unit

### CustomizedScalingMetricSpecification
* CustomizedScalingMetricSpecification `object`: <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p>
  * Dimensions
    * items [MetricDimension](#metricdimension)
  * MetricName **required**
  * Namespace **required**
  * Statistic **required**
  * Unit

### Datapoint
* Datapoint `object`: Represents a single value in the forecast data used for predictive scaling.
  * Timestamp
  * Value

### Datapoints
* Datapoints `array`
  * items [Datapoint](#datapoint)

### DeleteScalingPlanRequest
* DeleteScalingPlanRequest `object`
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**

### DeleteScalingPlanResponse
* DeleteScalingPlanResponse `object`

### DescribeScalingPlanResourcesRequest
* DescribeScalingPlanResourcesRequest `object`
  * MaxResults
  * NextToken
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**

### DescribeScalingPlanResourcesResponse
* DescribeScalingPlanResourcesResponse `object`
  * NextToken
  * ScalingPlanResources
    * items [ScalingPlanResource](#scalingplanresource)

### DescribeScalingPlansRequest
* DescribeScalingPlansRequest `object`
  * ApplicationSources
    * items [ApplicationSource](#applicationsource)
  * MaxResults
  * NextToken
  * ScalingPlanNames
    * items [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion

### DescribeScalingPlansResponse
* DescribeScalingPlansResponse `object`
  * NextToken
  * ScalingPlans
    * items [ScalingPlan](#scalingplan)

### DisableDynamicScaling
* DisableDynamicScaling `boolean`

### DisableScaleIn
* DisableScaleIn `boolean`

### ForecastDataType
* ForecastDataType `string` (values: CapacityForecast, LoadForecast, ScheduledActionMinCapacity, ScheduledActionMaxCapacity)

### GetScalingPlanResourceForecastDataRequest
* GetScalingPlanResourceForecastDataRequest `object`
  * EndTime **required**
  * ForecastDataType **required**
  * ResourceId **required**
  * ScalableDimension **required**
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**
  * ServiceNamespace **required**
  * StartTime **required**

### GetScalingPlanResourceForecastDataResponse
* GetScalingPlanResourceForecastDataResponse `object`
  * Datapoints **required**
    * items [Datapoint](#datapoint)

### InternalServiceException


### InvalidNextTokenException


### LimitExceededException


### LoadMetricType
* LoadMetricType `string` (values: ASGTotalCPUUtilization, ASGTotalNetworkIn, ASGTotalNetworkOut, ALBTargetGroupRequestCount)

### MaxResults
* MaxResults `integer`

### MetricDimension
* MetricDimension `object`: Represents a dimension for a customized metric.
  * Name **required**
  * Value **required**

### MetricDimensionName
* MetricDimensionName `string`

### MetricDimensionValue
* MetricDimensionValue `string`

### MetricDimensions
* MetricDimensions `array`
  * items [MetricDimension](#metricdimension)

### MetricName
* MetricName `string`

### MetricNamespace
* MetricNamespace `string`

### MetricScale
* MetricScale `number`

### MetricStatistic
* MetricStatistic `string` (values: Average, Minimum, Maximum, SampleCount, Sum)

### MetricUnit
* MetricUnit `string`

### NextToken
* NextToken `string`

### ObjectNotFoundException


### PolicyName
* PolicyName `string`

### PolicyType
* PolicyType `string` (values: TargetTrackingScaling)

### PredefinedLoadMetricSpecification
* PredefinedLoadMetricSpecification `object`: Represents a predefined metric that can be used for predictive scaling. 
  * PredefinedLoadMetricType **required**
  * ResourceLabel

### PredefinedScalingMetricSpecification
* PredefinedScalingMetricSpecification `object`: Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.
  * PredefinedScalingMetricType **required**
  * ResourceLabel

### PredictiveScalingMaxCapacityBehavior
* PredictiveScalingMaxCapacityBehavior `string` (values: SetForecastCapacityToMaxCapacity, SetMaxCapacityToForecastCapacity, SetMaxCapacityAboveForecastCapacity)

### PredictiveScalingMode
* PredictiveScalingMode `string` (values: ForecastAndScale, ForecastOnly)

### ResourceCapacity
* ResourceCapacity `integer`

### ResourceIdMaxLen1600
* ResourceIdMaxLen1600 `string`

### ResourceLabel
* ResourceLabel `string`

### ScalableDimension
* ScalableDimension `string` (values: autoscaling:autoScalingGroup:DesiredCapacity, ecs:service:DesiredCount, ec2:spot-fleet-request:TargetCapacity, rds:cluster:ReadReplicaCount, dynamodb:table:ReadCapacityUnits, dynamodb:table:WriteCapacityUnits, dynamodb:index:ReadCapacityUnits, dynamodb:index:WriteCapacityUnits)

### ScalingInstruction
* ScalingInstruction `object`: <p>Describes a scaling instruction for a scalable resource.</p> <p>The scaling instruction is used in combination with a scaling plan, which is a set of instructions for configuring dynamic scaling and predictive scaling for the scalable resources in your application. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/auto-scaling-getting-started.html">Getting Started with AWS Auto Scaling</a>.</p>
  * CustomizedLoadMetricSpecification
    * Dimensions
      * items [MetricDimension](#metricdimension)
    * MetricName **required**
    * Namespace **required**
    * Statistic **required**
    * Unit
  * DisableDynamicScaling
  * MaxCapacity **required**
  * MinCapacity **required**
  * PredefinedLoadMetricSpecification
    * PredefinedLoadMetricType **required**
    * ResourceLabel
  * PredictiveScalingMaxCapacityBehavior
  * PredictiveScalingMaxCapacityBuffer
  * PredictiveScalingMode
  * ResourceId **required**
  * ScalableDimension **required**
  * ScalingPolicyUpdateBehavior
  * ScheduledActionBufferTime
  * ServiceNamespace **required**
  * TargetTrackingConfigurations **required**
    * items [TargetTrackingConfiguration](#targettrackingconfiguration)

### ScalingInstructions
* ScalingInstructions `array`
  * items [ScalingInstruction](#scalinginstruction)

### ScalingMetricType
* ScalingMetricType `string` (values: ASGAverageCPUUtilization, ASGAverageNetworkIn, ASGAverageNetworkOut, DynamoDBReadCapacityUtilization, DynamoDBWriteCapacityUtilization, ECSServiceAverageCPUUtilization, ECSServiceAverageMemoryUtilization, ALBRequestCountPerTarget, RDSReaderAverageCPUUtilization, RDSReaderAverageDatabaseConnections, EC2SpotFleetRequestAverageCPUUtilization, EC2SpotFleetRequestAverageNetworkIn, EC2SpotFleetRequestAverageNetworkOut)

### ScalingPlan
* ScalingPlan `object`: Represents a scaling plan.
  * ApplicationSource **required**
    * CloudFormationStackARN
    * TagFilters
      * items [TagFilter](#tagfilter)
  * CreationTime
  * ScalingInstructions **required**
    * items [ScalingInstruction](#scalinginstruction)
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**
  * StatusCode **required**
  * StatusMessage
  * StatusStartTime

### ScalingPlanName
* ScalingPlanName `string`

### ScalingPlanNames
* ScalingPlanNames `array`
  * items [ScalingPlanName](#scalingplanname)

### ScalingPlanResource
* ScalingPlanResource `object`: Represents a scalable resource.
  * ResourceId **required**
  * ScalableDimension **required**
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**
  * ScalingPolicies
    * items [ScalingPolicy](#scalingpolicy)
  * ScalingStatusCode **required**
  * ScalingStatusMessage
  * ServiceNamespace **required**

### ScalingPlanResources
* ScalingPlanResources `array`
  * items [ScalingPlanResource](#scalingplanresource)

### ScalingPlanStatusCode
* ScalingPlanStatusCode `string` (values: Active, ActiveWithProblems, CreationInProgress, CreationFailed, DeletionInProgress, DeletionFailed, UpdateInProgress, UpdateFailed)

### ScalingPlanVersion
* ScalingPlanVersion `integer`

### ScalingPlans
* ScalingPlans `array`
  * items [ScalingPlan](#scalingplan)

### ScalingPolicies
* ScalingPolicies `array`
  * items [ScalingPolicy](#scalingpolicy)

### ScalingPolicy
* ScalingPolicy `object`: Represents a scaling policy.
  * PolicyName **required**
  * PolicyType **required**
  * TargetTrackingConfiguration
    * CustomizedScalingMetricSpecification
      * Dimensions
        * items [MetricDimension](#metricdimension)
      * MetricName **required**
      * Namespace **required**
      * Statistic **required**
      * Unit
    * DisableScaleIn
    * EstimatedInstanceWarmup
    * PredefinedScalingMetricSpecification
      * PredefinedScalingMetricType **required**
      * ResourceLabel
    * ScaleInCooldown
    * ScaleOutCooldown
    * TargetValue **required**

### ScalingPolicyUpdateBehavior
* ScalingPolicyUpdateBehavior `string` (values: KeepExternalPolicies, ReplaceExternalPolicies)

### ScalingStatusCode
* ScalingStatusCode `string` (values: Inactive, PartiallyActive, Active)

### ScheduledActionBufferTime
* ScheduledActionBufferTime `integer`

### ServiceNamespace
* ServiceNamespace `string` (values: autoscaling, ecs, ec2, rds, dynamodb)

### TagFilter
* TagFilter `object`: Represents a tag.
  * Key
  * Values
    * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### TagFilters
* TagFilters `array`
  * items [TagFilter](#tagfilter)

### TagValues
* TagValues `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### TargetTrackingConfiguration
* TargetTrackingConfiguration `object`: Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.
  * CustomizedScalingMetricSpecification
    * Dimensions
      * items [MetricDimension](#metricdimension)
    * MetricName **required**
    * Namespace **required**
    * Statistic **required**
    * Unit
  * DisableScaleIn
  * EstimatedInstanceWarmup
  * PredefinedScalingMetricSpecification
    * PredefinedScalingMetricType **required**
    * ResourceLabel
  * ScaleInCooldown
  * ScaleOutCooldown
  * TargetValue **required**

### TargetTrackingConfigurations
* TargetTrackingConfigurations `array`
  * items [TargetTrackingConfiguration](#targettrackingconfiguration)

### TimestampType
* TimestampType `string`

### UpdateScalingPlanRequest
* UpdateScalingPlanRequest `object`
  * ApplicationSource
    * CloudFormationStackARN
    * TagFilters
      * items [TagFilter](#tagfilter)
  * ScalingInstructions
    * items [ScalingInstruction](#scalinginstruction)
  * ScalingPlanName **required**
  * ScalingPlanVersion **required**

### UpdateScalingPlanResponse
* UpdateScalingPlanResponse `object`

### ValidationException


### XmlString
* XmlString `string`

### XmlStringMaxLen128
* XmlStringMaxLen128 `string`

### XmlStringMaxLen256
* XmlStringMaxLen256 `string`


