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

amazonaws_autoscaling_plans.CreateScalingPlan({
  "ScalingPlanName": "",
  "ApplicationSource": {},
  "ScalingInstructions": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to quickly discover all the scalable AWS resources for your application and configure dynamic scaling for your scalable resources.</p> <p>To get started, create a scaling plan with a set of instructions used to configure dynamic scaling for the scalable resources in your application. AWS Auto Scaling creates target tracking scaling policies for the scalable resources in your scaling plan. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified.</p>

## Actions

### CreateScalingPlan



```js
amazonaws_autoscaling_plans.CreateScalingPlan({
  "ScalingPlanName": "",
  "ApplicationSource": {},
  "ScalingInstructions": []
}, context)
```

#### Input
* input `object`
  * ApplicationSource **required** [ApplicationSource](#applicationsource)
  * ScalingInstructions **required** [ScalingInstructions](#scalinginstructions)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)

#### Output
* output [CreateScalingPlanResponse](#createscalingplanresponse)

### DeleteScalingPlan



```js
amazonaws_autoscaling_plans.DeleteScalingPlan({
  "ScalingPlanName": "",
  "ScalingPlanVersion": 0
}, context)
```

#### Input
* input `object`
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)

#### Output
* output [DeleteScalingPlanResponse](#deletescalingplanresponse)

### DescribeScalingPlanResources



```js
amazonaws_autoscaling_plans.DescribeScalingPlanResources({
  "ScalingPlanName": "",
  "ScalingPlanVersion": 0
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)

#### Output
* output [DescribeScalingPlanResourcesResponse](#describescalingplanresourcesresponse)

### DescribeScalingPlans



```js
amazonaws_autoscaling_plans.DescribeScalingPlans({}, context)
```

#### Input
* input `object`
  * ApplicationSources [ApplicationSources](#applicationsources)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ScalingPlanNames [ScalingPlanNames](#scalingplannames)
  * ScalingPlanVersion [ScalingPlanVersion](#scalingplanversion)

#### Output
* output [DescribeScalingPlansResponse](#describescalingplansresponse)

### UpdateScalingPlan



```js
amazonaws_autoscaling_plans.UpdateScalingPlan({
  "ScalingPlanName": "",
  "ScalingPlanVersion": 0
}, context)
```

#### Input
* input `object`
  * ApplicationSource [ApplicationSource](#applicationsource)
  * ScalingInstructions [ScalingInstructions](#scalinginstructions)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)

#### Output
* output [UpdateScalingPlanResponse](#updatescalingplanresponse)



## Definitions

### ApplicationSource
* ApplicationSource `object`: Represents an application source.
  * CloudFormationStackARN [XmlString](#xmlstring)
  * TagFilters [TagFilters](#tagfilters)

### ApplicationSources
* ApplicationSources `array`
  * items [ApplicationSource](#applicationsource)

### ConcurrentUpdateException
* ConcurrentUpdateException `object`: Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.
  * Message [ErrorMessage](#errormessage)

### Cooldown
* Cooldown `integer`

### CreateScalingPlanRequest
* CreateScalingPlanRequest `object`
  * ApplicationSource **required** [ApplicationSource](#applicationsource)
  * ScalingInstructions **required** [ScalingInstructions](#scalinginstructions)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)

### CreateScalingPlanResponse
* CreateScalingPlanResponse `object`
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)

### CustomizedScalingMetricSpecification
* CustomizedScalingMetricSpecification `object`: Represents a customized metric for a target tracking policy.
  * Dimensions [MetricDimensions](#metricdimensions)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [MetricNamespace](#metricnamespace)
  * Statistic **required** [MetricStatistic](#metricstatistic)
  * Unit [MetricUnit](#metricunit)

### DeleteScalingPlanRequest
* DeleteScalingPlanRequest `object`
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)

### DeleteScalingPlanResponse
* DeleteScalingPlanResponse `object`

### DescribeScalingPlanResourcesRequest
* DescribeScalingPlanResourcesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)

### DescribeScalingPlanResourcesResponse
* DescribeScalingPlanResourcesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * ScalingPlanResources [ScalingPlanResources](#scalingplanresources)

### DescribeScalingPlansRequest
* DescribeScalingPlansRequest `object`
  * ApplicationSources [ApplicationSources](#applicationsources)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ScalingPlanNames [ScalingPlanNames](#scalingplannames)
  * ScalingPlanVersion [ScalingPlanVersion](#scalingplanversion)

### DescribeScalingPlansResponse
* DescribeScalingPlansResponse `object`
  * NextToken [NextToken](#nexttoken)
  * ScalingPlans [ScalingPlans](#scalingplans)

### DisableScaleIn
* DisableScaleIn `boolean`

### ErrorMessage
* ErrorMessage `string`

### InternalServiceException
* InternalServiceException `object`: The service encountered an internal error.
  * Message [ErrorMessage](#errormessage)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The token provided is not valid.
  * Message [ErrorMessage](#errormessage)

### LimitExceededException
* LimitExceededException `object`: Your account exceeded a limit. This exception is thrown when a per-account resource limit is exceeded.
  * Message [ErrorMessage](#errormessage)

### MaxResults
* MaxResults `integer`

### MetricDimension
* MetricDimension `object`: Represents a dimension for a customized metric.
  * Name **required** [MetricDimensionName](#metricdimensionname)
  * Value **required** [MetricDimensionValue](#metricdimensionvalue)

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
* ObjectNotFoundException `object`: The specified object could not be found.
  * Message [ErrorMessage](#errormessage)

### PolicyName
* PolicyName `string`

### PolicyType
* PolicyType `string` (values: TargetTrackingScaling)

### PredefinedScalingMetricSpecification
* PredefinedScalingMetricSpecification `object`: Represents a predefined metric for a target tracking policy.
  * PredefinedScalingMetricType **required** [ScalingMetricType](#scalingmetrictype)
  * ResourceLabel [ResourceLabel](#resourcelabel)

### ResourceCapacity
* ResourceCapacity `integer`

### ResourceIdMaxLen1600
* ResourceIdMaxLen1600 `string`

### ResourceLabel
* ResourceLabel `string`

### ScalableDimension
* ScalableDimension `string` (values: autoscaling:autoScalingGroup:DesiredCapacity, ecs:service:DesiredCount, ec2:spot-fleet-request:TargetCapacity, rds:cluster:ReadReplicaCount, dynamodb:table:ReadCapacityUnits, dynamodb:table:WriteCapacityUnits, dynamodb:index:ReadCapacityUnits, dynamodb:index:WriteCapacityUnits)

### ScalingInstruction
* ScalingInstruction `object`: Specifies the scaling configuration for a scalable resource.
  * MaxCapacity **required** [ResourceCapacity](#resourcecapacity)
  * MinCapacity **required** [ResourceCapacity](#resourcecapacity)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * TargetTrackingConfigurations **required** [TargetTrackingConfigurations](#targettrackingconfigurations)

### ScalingInstructions
* ScalingInstructions `array`
  * items [ScalingInstruction](#scalinginstruction)

### ScalingMetricType
* ScalingMetricType `string` (values: ASGAverageCPUUtilization, ASGAverageNetworkIn, ASGAverageNetworkOut, DynamoDBReadCapacityUtilization, DynamoDBWriteCapacityUtilization, ECSServiceAverageCPUUtilization, ECSServiceAverageMemoryUtilization, ALBRequestCountPerTarget, RDSReaderAverageCPUUtilization, RDSReaderAverageDatabaseConnections, EC2SpotFleetRequestAverageCPUUtilization, EC2SpotFleetRequestAverageNetworkIn, EC2SpotFleetRequestAverageNetworkOut)

### ScalingPlan
* ScalingPlan `object`: Represents a scaling plan.
  * ApplicationSource **required** [ApplicationSource](#applicationsource)
  * CreationTime [TimestampType](#timestamptype)
  * ScalingInstructions **required** [ScalingInstructions](#scalinginstructions)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)
  * StatusCode **required** [ScalingPlanStatusCode](#scalingplanstatuscode)
  * StatusMessage [XmlString](#xmlstring)
  * StatusStartTime [TimestampType](#timestamptype)

### ScalingPlanName
* ScalingPlanName `string`

### ScalingPlanNames
* ScalingPlanNames `array`
  * items [ScalingPlanName](#scalingplanname)

### ScalingPlanResource
* ScalingPlanResource `object`: Represents a scalable resource.
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)
  * ScalingPolicies [ScalingPolicies](#scalingpolicies)
  * ScalingStatusCode **required** [ScalingStatusCode](#scalingstatuscode)
  * ScalingStatusMessage [XmlString](#xmlstring)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

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
  * PolicyName **required** [PolicyName](#policyname)
  * PolicyType **required** [PolicyType](#policytype)
  * TargetTrackingConfiguration [TargetTrackingConfiguration](#targettrackingconfiguration)

### ScalingStatusCode
* ScalingStatusCode `string` (values: Inactive, PartiallyActive, Active)

### ServiceNamespace
* ServiceNamespace `string` (values: autoscaling, ecs, ec2, rds, dynamodb)

### TagFilter
* TagFilter `object`: Represents a tag.
  * Key [XmlStringMaxLen128](#xmlstringmaxlen128)
  * Values [TagValues](#tagvalues)

### TagFilters
* TagFilters `array`
  * items [TagFilter](#tagfilter)

### TagValues
* TagValues `array`
  * items [XmlStringMaxLen256](#xmlstringmaxlen256)

### TargetTrackingConfiguration
* TargetTrackingConfiguration `object`: Represents a target tracking scaling policy.
  * CustomizedScalingMetricSpecification [CustomizedScalingMetricSpecification](#customizedscalingmetricspecification)
  * DisableScaleIn [DisableScaleIn](#disablescalein)
  * EstimatedInstanceWarmup [Cooldown](#cooldown)
  * PredefinedScalingMetricSpecification [PredefinedScalingMetricSpecification](#predefinedscalingmetricspecification)
  * ScaleInCooldown [Cooldown](#cooldown)
  * ScaleOutCooldown [Cooldown](#cooldown)
  * TargetValue **required** [MetricScale](#metricscale)

### TargetTrackingConfigurations
* TargetTrackingConfigurations `array`
  * items [TargetTrackingConfiguration](#targettrackingconfiguration)

### TimestampType
* TimestampType `string`

### UpdateScalingPlanRequest
* UpdateScalingPlanRequest `object`
  * ApplicationSource [ApplicationSource](#applicationsource)
  * ScalingInstructions [ScalingInstructions](#scalinginstructions)
  * ScalingPlanName **required** [ScalingPlanName](#scalingplanname)
  * ScalingPlanVersion **required** [ScalingPlanVersion](#scalingplanversion)

### UpdateScalingPlanResponse
* UpdateScalingPlanResponse `object`

### ValidationException
* ValidationException `object`: An exception was thrown for a validation issue. Review the parameters provided.
  * Message [ErrorMessage](#errormessage)

### XmlString
* XmlString `string`

### XmlStringMaxLen128
* XmlStringMaxLen128 `string`

### XmlStringMaxLen256
* XmlStringMaxLen256 `string`


