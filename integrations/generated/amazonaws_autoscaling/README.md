# @datafire/amazonaws_autoscaling

Client library for Auto Scaling

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_autoscaling
```
```js
let amazonaws_autoscaling = require('@datafire/amazonaws_autoscaling').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_autoscaling.DeleteScalingPolicy({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>Auto Scaling</fullname> <p>Auto Scaling is designed to automatically launch or terminate EC2 instances based on user-defined policies, schedules, and health checks. Use this service in conjunction with the Amazon CloudWatch and Elastic Load Balancing services.</p>

## Actions

### DeleteScalingPolicy



```js
amazonaws_autoscaling.DeleteScalingPolicy({
  "PolicyName": "",
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Input
* input `object`
  * PolicyName **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [DeleteScalingPolicyResponse](#deletescalingpolicyresponse)

### DeleteScheduledAction



```js
amazonaws_autoscaling.DeleteScheduledAction({
  "ServiceNamespace": "",
  "ScheduledActionName": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ScheduledActionName **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [DeleteScheduledActionResponse](#deletescheduledactionresponse)

### DeregisterScalableTarget



```js
amazonaws_autoscaling.DeregisterScalableTarget({
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [DeregisterScalableTargetResponse](#deregisterscalabletargetresponse)

### DescribeScalableTargets



```js
amazonaws_autoscaling.DescribeScalableTargets({
  "ServiceNamespace": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * ResourceIds [ResourceIdsMaxLen1600](#resourceidsmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [DescribeScalableTargetsResponse](#describescalabletargetsresponse)

### DescribeScalingActivities



```js
amazonaws_autoscaling.DescribeScalingActivities({
  "ServiceNamespace": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * ResourceId [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [DescribeScalingActivitiesResponse](#describescalingactivitiesresponse)

### DescribeScalingPolicies



```js
amazonaws_autoscaling.DescribeScalingPolicies({
  "ServiceNamespace": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * PolicyNames [ResourceIdsMaxLen1600](#resourceidsmaxlen1600)
  * ResourceId [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [DescribeScalingPoliciesResponse](#describescalingpoliciesresponse)

### DescribeScheduledActions



```js
amazonaws_autoscaling.DescribeScheduledActions({
  "ServiceNamespace": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * ResourceId [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ScheduledActionNames [ResourceIdsMaxLen1600](#resourceidsmaxlen1600)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [DescribeScheduledActionsResponse](#describescheduledactionsresponse)

### PutScalingPolicy



```js
amazonaws_autoscaling.PutScalingPolicy({
  "PolicyName": "",
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Input
* input `object`
  * PolicyName **required** [PolicyName](#policyname)
  * PolicyType [PolicyType](#policytype)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * StepScalingPolicyConfiguration [StepScalingPolicyConfiguration](#stepscalingpolicyconfiguration)
  * TargetTrackingScalingPolicyConfiguration [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration)

#### Output
* output [PutScalingPolicyResponse](#putscalingpolicyresponse)

### PutScheduledAction



```js
amazonaws_autoscaling.PutScheduledAction({
  "ServiceNamespace": "",
  "ScheduledActionName": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * EndTime [TimestampType](#timestamptype)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ScalableTargetAction [ScalableTargetAction](#scalabletargetaction)
  * Schedule [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScheduledActionName **required** [ScheduledActionName](#scheduledactionname)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * StartTime [TimestampType](#timestamptype)

#### Output
* output [PutScheduledActionResponse](#putscheduledactionresponse)

### RegisterScalableTarget



```js
amazonaws_autoscaling.RegisterScalableTarget({
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Input
* input `object`
  * MaxCapacity [ResourceCapacity](#resourcecapacity)
  * MinCapacity [ResourceCapacity](#resourcecapacity)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * RoleARN [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

#### Output
* output [RegisterScalableTargetResponse](#registerscalabletargetresponse)



## Definitions

### AdjustmentType
* AdjustmentType `string` (values: ChangeInCapacity, PercentChangeInCapacity, ExactCapacity)

### Alarm
* Alarm `object`: Represents a CloudWatch alarm associated with a scaling policy.
  * AlarmARN **required** [ResourceId](#resourceid)
  * AlarmName **required** [ResourceId](#resourceid)

### Alarms
* Alarms `array`
  * items [Alarm](#alarm)

### ConcurrentUpdateException
* ConcurrentUpdateException `object`: Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.
  * Message [ErrorMessage](#errormessage)

### Cooldown
* Cooldown `integer`

### CustomizedMetricSpecification
* CustomizedMetricSpecification `object`: Configures a customized metric for a target tracking policy.
  * Dimensions [MetricDimensions](#metricdimensions)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [MetricNamespace](#metricnamespace)
  * Statistic **required** [MetricStatistic](#metricstatistic)
  * Unit [MetricUnit](#metricunit)

### DeleteScalingPolicyRequest
* DeleteScalingPolicyRequest `object`
  * PolicyName **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### DeleteScalingPolicyResponse
* DeleteScalingPolicyResponse `object`

### DeleteScheduledActionRequest
* DeleteScheduledActionRequest `object`
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ScheduledActionName **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### DeleteScheduledActionResponse
* DeleteScheduledActionResponse `object`

### DeregisterScalableTargetRequest
* DeregisterScalableTargetRequest `object`
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### DeregisterScalableTargetResponse
* DeregisterScalableTargetResponse `object`

### DescribeScalableTargetsRequest
* DescribeScalableTargetsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * ResourceIds [ResourceIdsMaxLen1600](#resourceidsmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### DescribeScalableTargetsResponse
* DescribeScalableTargetsResponse `object`
  * NextToken [XmlString](#xmlstring)
  * ScalableTargets [ScalableTargets](#scalabletargets)

### DescribeScalingActivitiesRequest
* DescribeScalingActivitiesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * ResourceId [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### DescribeScalingActivitiesResponse
* DescribeScalingActivitiesResponse `object`
  * NextToken [XmlString](#xmlstring)
  * ScalingActivities [ScalingActivities](#scalingactivities)

### DescribeScalingPoliciesRequest
* DescribeScalingPoliciesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * PolicyNames [ResourceIdsMaxLen1600](#resourceidsmaxlen1600)
  * ResourceId [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### DescribeScalingPoliciesResponse
* DescribeScalingPoliciesResponse `object`
  * NextToken [XmlString](#xmlstring)
  * ScalingPolicies [ScalingPolicies](#scalingpolicies)

### DescribeScheduledActionsRequest
* DescribeScheduledActionsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [XmlString](#xmlstring)
  * ResourceId [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ScheduledActionNames [ResourceIdsMaxLen1600](#resourceidsmaxlen1600)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### DescribeScheduledActionsResponse
* DescribeScheduledActionsResponse `object`
  * NextToken [XmlString](#xmlstring)
  * ScheduledActions [ScheduledActions](#scheduledactions)

### DisableScaleIn
* DisableScaleIn `boolean`

### ErrorMessage
* ErrorMessage `string`

### FailedResourceAccessException
* FailedResourceAccessException `object`: Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling is unable to retrieve the alarms associated with a scaling policy due to a client error, for example, if the role ARN specified for a scalable target does not have permission to call the CloudWatch <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> API operation on behalf of your account.
  * Message [ErrorMessage](#errormessage)

### InternalServiceException
* InternalServiceException `object`: The service encountered an internal error.
  * Message [ErrorMessage](#errormessage)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The next token supplied was invalid.
  * Message [ErrorMessage](#errormessage)

### LimitExceededException
* LimitExceededException `object`: Your account exceeded a limit. This exception is thrown when a per-account resource limit is exceeded. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_as-app">Application Auto Scaling Limits</a>.
  * Message [ErrorMessage](#errormessage)

### MaxResults
* MaxResults `integer`

### MetricAggregationType
* MetricAggregationType `string` (values: Average, Minimum, Maximum)

### MetricDimension
* MetricDimension `object`: Describes the dimension of a metric.
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

### MetricType
* MetricType `string` (values: DynamoDBReadCapacityUtilization, DynamoDBWriteCapacityUtilization)

### MetricUnit
* MetricUnit `string`

### MinAdjustmentMagnitude
* MinAdjustmentMagnitude `integer`

### ObjectNotFoundException
* ObjectNotFoundException `object`: The specified object could not be found. For any <code>Put</code> or <code>Register</code> API operation, which depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any <code>Delete</code> or <code>Deregister</code> API operation, this exception is thrown if the resource that is to be deleted or deregistered cannot be found.
  * Message [ErrorMessage](#errormessage)

### PolicyName
* PolicyName `string`

### PolicyType
* PolicyType `string` (values: StepScaling, TargetTrackingScaling)

### PredefinedMetricSpecification
* PredefinedMetricSpecification `object`: Configures a predefined metric for a target tracking policy.
  * PredefinedMetricType **required** [MetricType](#metrictype)
  * ResourceLabel [ResourceLabel](#resourcelabel)

### PutScalingPolicyRequest
* PutScalingPolicyRequest `object`
  * PolicyName **required** [PolicyName](#policyname)
  * PolicyType [PolicyType](#policytype)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * StepScalingPolicyConfiguration [StepScalingPolicyConfiguration](#stepscalingpolicyconfiguration)
  * TargetTrackingScalingPolicyConfiguration [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration)

### PutScalingPolicyResponse
* PutScalingPolicyResponse `object`
  * Alarms [Alarms](#alarms)
  * PolicyARN **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)

### PutScheduledActionRequest
* PutScheduledActionRequest `object`
  * EndTime [TimestampType](#timestamptype)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ScalableTargetAction [ScalableTargetAction](#scalabletargetaction)
  * Schedule [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScheduledActionName **required** [ScheduledActionName](#scheduledactionname)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * StartTime [TimestampType](#timestamptype)

### PutScheduledActionResponse
* PutScheduledActionResponse `object`

### RegisterScalableTargetRequest
* RegisterScalableTargetRequest `object`
  * MaxCapacity [ResourceCapacity](#resourcecapacity)
  * MinCapacity [ResourceCapacity](#resourcecapacity)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * RoleARN [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### RegisterScalableTargetResponse
* RegisterScalableTargetResponse `object`

### ResourceCapacity
* ResourceCapacity `integer`

### ResourceId
* ResourceId `string`

### ResourceIdMaxLen1600
* ResourceIdMaxLen1600 `string`

### ResourceIdsMaxLen1600
* ResourceIdsMaxLen1600 `array`
  * items [ResourceIdMaxLen1600](#resourceidmaxlen1600)

### ResourceLabel
* ResourceLabel `string`

### ScalableDimension
* ScalableDimension `string` (values: ecs:service:DesiredCount, ec2:spot-fleet-request:TargetCapacity, elasticmapreduce:instancegroup:InstanceCount, appstream:fleet:DesiredCapacity, dynamodb:table:ReadCapacityUnits, dynamodb:table:WriteCapacityUnits, dynamodb:index:ReadCapacityUnits, dynamodb:index:WriteCapacityUnits)

### ScalableTarget
* ScalableTarget `object`: Represents a scalable target.
  * CreationTime **required** [TimestampType](#timestamptype)
  * MaxCapacity **required** [ResourceCapacity](#resourcecapacity)
  * MinCapacity **required** [ResourceCapacity](#resourcecapacity)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * RoleARN **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)

### ScalableTargetAction
* ScalableTargetAction `object`: Represents the minimum and maximum capacity for a scheduled action.
  * MaxCapacity [ResourceCapacity](#resourcecapacity)
  * MinCapacity [ResourceCapacity](#resourcecapacity)

### ScalableTargets
* ScalableTargets `array`
  * items [ScalableTarget](#scalabletarget)

### ScalingActivities
* ScalingActivities `array`
  * items [ScalingActivity](#scalingactivity)

### ScalingActivity
* ScalingActivity `object`: Represents a scaling activity.
  * ActivityId **required** [ResourceId](#resourceid)
  * Cause **required** [XmlString](#xmlstring)
  * Description **required** [XmlString](#xmlstring)
  * Details [XmlString](#xmlstring)
  * EndTime [TimestampType](#timestamptype)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * StartTime **required** [TimestampType](#timestamptype)
  * StatusCode **required** [ScalingActivityStatusCode](#scalingactivitystatuscode)
  * StatusMessage [XmlString](#xmlstring)

### ScalingActivityStatusCode
* ScalingActivityStatusCode `string` (values: Pending, InProgress, Successful, Overridden, Unfulfilled, Failed)

### ScalingAdjustment
* ScalingAdjustment `integer`

### ScalingPolicies
* ScalingPolicies `array`
  * items [ScalingPolicy](#scalingpolicy)

### ScalingPolicy
* ScalingPolicy `object`: Represents a scaling policy.
  * Alarms [Alarms](#alarms)
  * CreationTime **required** [TimestampType](#timestamptype)
  * PolicyARN **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * PolicyName **required** [PolicyName](#policyname)
  * PolicyType **required** [PolicyType](#policytype)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension **required** [ScalableDimension](#scalabledimension)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * StepScalingPolicyConfiguration [StepScalingPolicyConfiguration](#stepscalingpolicyconfiguration)
  * TargetTrackingScalingPolicyConfiguration [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration)

### ScheduledAction
* ScheduledAction `object`: Represents a scheduled action.
  * CreationTime **required** [TimestampType](#timestamptype)
  * EndTime [TimestampType](#timestamptype)
  * ResourceId **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScalableDimension [ScalableDimension](#scalabledimension)
  * ScalableTargetAction [ScalableTargetAction](#scalabletargetaction)
  * Schedule **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScheduledActionARN **required** [ResourceIdMaxLen1600](#resourceidmaxlen1600)
  * ScheduledActionName **required** [ScheduledActionName](#scheduledactionname)
  * ServiceNamespace **required** [ServiceNamespace](#servicenamespace)
  * StartTime [TimestampType](#timestamptype)

### ScheduledActionName
* ScheduledActionName `string`

### ScheduledActions
* ScheduledActions `array`
  * items [ScheduledAction](#scheduledaction)

### ServiceNamespace
* ServiceNamespace `string` (values: ecs, elasticmapreduce, ec2, appstream, dynamodb)

### StepAdjustment
* StepAdjustment `object`: <p>Represents a step adjustment for a <a>StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul>
  * MetricIntervalLowerBound [MetricScale](#metricscale)
  * MetricIntervalUpperBound [MetricScale](#metricscale)
  * ScalingAdjustment **required** [ScalingAdjustment](#scalingadjustment)

### StepAdjustments
* StepAdjustments `array`
  * items [StepAdjustment](#stepadjustment)

### StepScalingPolicyConfiguration
* StepScalingPolicyConfiguration `object`: Represents a step scaling policy configuration.
  * AdjustmentType [AdjustmentType](#adjustmenttype)
  * Cooldown [Cooldown](#cooldown)
  * MetricAggregationType [MetricAggregationType](#metricaggregationtype)
  * MinAdjustmentMagnitude [MinAdjustmentMagnitude](#minadjustmentmagnitude)
  * StepAdjustments [StepAdjustments](#stepadjustments)

### TargetTrackingScalingPolicyConfiguration
* TargetTrackingScalingPolicyConfiguration `object`: Represents a target tracking scaling policy configuration.
  * CustomizedMetricSpecification [CustomizedMetricSpecification](#customizedmetricspecification)
  * DisableScaleIn [DisableScaleIn](#disablescalein)
  * PredefinedMetricSpecification [PredefinedMetricSpecification](#predefinedmetricspecification)
  * ScaleInCooldown [Cooldown](#cooldown)
  * ScaleOutCooldown [Cooldown](#cooldown)
  * TargetValue **required** [MetricScale](#metricscale)

### TimestampType
* TimestampType `string`

### ValidationException
* ValidationException `object`: An exception was thrown for a validation issue. Review the available parameters for the API request.
  * Message [ErrorMessage](#errormessage)

### XmlString
* XmlString `string`


