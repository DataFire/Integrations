# @datafire/amazonaws_synthetics

Client library for Synthetics

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_synthetics
```
```js
let amazonaws_synthetics = require('@datafire/amazonaws_synthetics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon CloudWatch Synthetics</fullname> <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage <i>canaries</i>, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor the Health of Your Applications</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Before you create and manage canaries, be aware of the security considerations. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>

## Actions

### DescribeCanaries



```js
amazonaws_synthetics.DescribeCanaries({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: Specify this parameter to limit how many canaries are returned each time you use the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.
  * NextToken `string`: A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.

#### Output
* output [DescribeCanariesResponse](#describecanariesresponse)

### DescribeCanariesLastRun



```js
amazonaws_synthetics.DescribeCanariesLastRun({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: Specify this parameter to limit how many runs are returned each time you use the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.
  * NextToken `string`: A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next set of results.

#### Output
* output [DescribeCanariesLastRunResponse](#describecanarieslastrunresponse)

### CreateCanary



```js
amazonaws_synthetics.CreateCanary({
  "Name": "",
  "Code": {},
  "ArtifactS3Location": "",
  "ExecutionRoleArn": "",
  "Schedule": {},
  "RuntimeVersion": ""
}, context)
```

#### Input
* input `object`
  * ArtifactS3Location **required** `string`: The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files.
  * Code **required** `object`: Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
    * Handler
    * S3Bucket
    * S3Key
    * S3Version
    * ZipFile
  * ExecutionRoleArn **required** `string`: <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:PutLogEvents</code> </p> </li> </ul>
  * FailureRetentionPeriodInDays `integer`: The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
  * Name **required** `string`: <p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
  * RunConfig `object`: A structure that contains input information for a canary run.
    * ActiveTracing
    * EnvironmentVariables
    * MemoryInMB
    * TimeoutInSeconds
  * RuntimeVersion **required** `string`: Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
  * Schedule **required** `object`: This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
    * DurationInSeconds
    * Expression
  * SuccessRetentionPeriodInDays `integer`: The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
  * Tags `object`: <p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>
  * VpcConfig `object`: If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

#### Output
* output [CreateCanaryResponse](#createcanaryresponse)

### DeleteCanary



```js
amazonaws_synthetics.DeleteCanary({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteCanaryResponse](#deletecanaryresponse)

### GetCanary



```js
amazonaws_synthetics.GetCanary({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [GetCanaryResponse](#getcanaryresponse)

### UpdateCanary



```js
amazonaws_synthetics.UpdateCanary({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * Code `object`: Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
    * Handler
    * S3Bucket
    * S3Key
    * S3Version
    * ZipFile
  * ExecutionRoleArn `string`: <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
  * FailureRetentionPeriodInDays `integer`: The number of days to retain data about failed runs of this canary.
  * RunConfig `object`: A structure that contains input information for a canary run.
    * ActiveTracing
    * EnvironmentVariables
    * MemoryInMB
    * TimeoutInSeconds
  * RuntimeVersion `string`: Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
  * Schedule `object`: This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
    * DurationInSeconds
    * Expression
  * SuccessRetentionPeriodInDays `integer`: The number of days to retain data about successful runs of this canary.
  * VpcConfig `object`: If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

#### Output
* output [UpdateCanaryResponse](#updatecanaryresponse)

### GetCanaryRuns



```js
amazonaws_synthetics.GetCanaryRuns({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: Specify this parameter to limit how many runs are returned each time you use the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.
  * NextToken `string`: A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.

#### Output
* output [GetCanaryRunsResponse](#getcanaryrunsresponse)

### StartCanary



```js
amazonaws_synthetics.StartCanary({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [StartCanaryResponse](#startcanaryresponse)

### StopCanary



```js
amazonaws_synthetics.StopCanary({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [StopCanaryResponse](#stopcanaryresponse)

### DescribeRuntimeVersions



```js
amazonaws_synthetics.DescribeRuntimeVersions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: Specify this parameter to limit how many runs are returned each time you use the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.
  * NextToken `string`: A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.

#### Output
* output [DescribeRuntimeVersionsResponse](#describeruntimeversionsresponse)

### ListTagsForResource



```js
amazonaws_synthetics.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_synthetics.TagResource({
  "resourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * Tags **required** `object`: The list of key-value pairs to associate with the canary.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_synthetics.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Blob
* Blob `string`

### Canaries
* Canaries `array`
  * items [Canary](#canary)

### CanariesLastRun
* CanariesLastRun `array`
  * items [CanaryLastRun](#canarylastrun)

### Canary
* Canary `object`: This structure contains all information about one canary in your account.
  * ArtifactS3Location
  * Code [CanaryCodeOutput](#canarycodeoutput)
  * EngineArn
  * ExecutionRoleArn
  * FailureRetentionPeriodInDays
  * Id
  * Name
  * RunConfig [CanaryRunConfigOutput](#canaryrunconfigoutput)
  * RuntimeVersion
  * Schedule
    * DurationInSeconds
    * Expression
  * Status
    * State
    * StateReason
    * StateReasonCode
  * SuccessRetentionPeriodInDays
  * Tags
  * Timeline
    * Created
    * LastModified
    * LastStarted
    * LastStopped
  * VpcConfig [VpcConfigOutput](#vpcconfigoutput)

### CanaryArn
* CanaryArn `string`

### CanaryCodeInput
* CanaryCodeInput `object`: Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
  * Handler **required**
  * S3Bucket
  * S3Key
  * S3Version
  * ZipFile

### CanaryCodeOutput
* CanaryCodeOutput `object`: This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
  * Handler
  * SourceLocationArn

### CanaryLastRun
* CanaryLastRun `object`: This structure contains information about the most recent run of a single canary.
  * CanaryName
  * LastRun
    * ArtifactS3Location
    * Id
    * Name
    * Status
      * State
      * StateReason
      * StateReasonCode
    * Timeline
      * Completed
      * Started

### CanaryName
* CanaryName `string`

### CanaryRun
* CanaryRun `object`: This structure contains the details about one run of one canary.
  * ArtifactS3Location
  * Id
  * Name
  * Status
    * State
    * StateReason
    * StateReasonCode
  * Timeline
    * Completed
    * Started

### CanaryRunConfigInput
* CanaryRunConfigInput `object`: A structure that contains input information for a canary run.
  * ActiveTracing
  * EnvironmentVariables
  * MemoryInMB
  * TimeoutInSeconds

### CanaryRunConfigOutput
* CanaryRunConfigOutput `object`: A structure that contains information about a canary run.
  * ActiveTracing
  * MemoryInMB
  * TimeoutInSeconds

### CanaryRunState
* CanaryRunState `string` (values: RUNNING, PASSED, FAILED)

### CanaryRunStateReasonCode
* CanaryRunStateReasonCode `string` (values: CANARY_FAILURE, EXECUTION_FAILURE)

### CanaryRunStatus
* CanaryRunStatus `object`: This structure contains the status information about a canary run.
  * State
  * StateReason
  * StateReasonCode

### CanaryRunTimeline
* CanaryRunTimeline `object`: This structure contains the start and end times of a single canary run.
  * Completed
  * Started

### CanaryRuns
* CanaryRuns `array`
  * items [CanaryRun](#canaryrun)

### CanaryScheduleInput
* CanaryScheduleInput `object`: This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
  * DurationInSeconds
  * Expression **required**

### CanaryScheduleOutput
* CanaryScheduleOutput `object`: How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.
  * DurationInSeconds
  * Expression

### CanaryState
* CanaryState `string` (values: CREATING, READY, STARTING, RUNNING, UPDATING, STOPPING, STOPPED, ERROR, DELETING)

### CanaryStateReasonCode
* CanaryStateReasonCode `string` (values: INVALID_PERMISSIONS)

### CanaryStatus
* CanaryStatus `object`: A structure that contains the current state of the canary.
  * State
  * StateReason
  * StateReasonCode

### CanaryTimeline
* CanaryTimeline `object`: This structure contains information about when the canary was created and modified.
  * Created
  * LastModified
  * LastStarted
  * LastStopped

### ConflictException


### CreateCanaryRequest
* CreateCanaryRequest `object`
  * ArtifactS3Location **required**
  * Code **required**
    * Handler **required**
    * S3Bucket
    * S3Key
    * S3Version
    * ZipFile
  * ExecutionRoleArn **required**
  * FailureRetentionPeriodInDays
  * Name **required**
  * RunConfig
    * ActiveTracing
    * EnvironmentVariables
    * MemoryInMB
    * TimeoutInSeconds
  * RuntimeVersion **required**
  * Schedule **required**
    * DurationInSeconds
    * Expression **required**
  * SuccessRetentionPeriodInDays
  * Tags
  * VpcConfig
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

### CreateCanaryResponse
* CreateCanaryResponse `object`
  * Canary
    * ArtifactS3Location
    * Code [CanaryCodeOutput](#canarycodeoutput)
    * EngineArn
    * ExecutionRoleArn
    * FailureRetentionPeriodInDays
    * Id
    * Name
    * RunConfig [CanaryRunConfigOutput](#canaryrunconfigoutput)
    * RuntimeVersion
    * Schedule
      * DurationInSeconds
      * Expression
    * Status
      * State
      * StateReason
      * StateReasonCode
    * SuccessRetentionPeriodInDays
    * Tags
    * Timeline
      * Created
      * LastModified
      * LastStarted
      * LastStopped
    * VpcConfig [VpcConfigOutput](#vpcconfigoutput)

### DeleteCanaryRequest
* DeleteCanaryRequest `object`

### DeleteCanaryResponse
* DeleteCanaryResponse `object`

### DescribeCanariesLastRunRequest
* DescribeCanariesLastRunRequest `object`
  * MaxResults
  * NextToken

### DescribeCanariesLastRunResponse
* DescribeCanariesLastRunResponse `object`
  * CanariesLastRun
    * items [CanaryLastRun](#canarylastrun)
  * NextToken

### DescribeCanariesRequest
* DescribeCanariesRequest `object`
  * MaxResults
  * NextToken

### DescribeCanariesResponse
* DescribeCanariesResponse `object`
  * Canaries
    * items [Canary](#canary)
  * NextToken

### DescribeRuntimeVersionsRequest
* DescribeRuntimeVersionsRequest `object`
  * MaxResults
  * NextToken

### DescribeRuntimeVersionsResponse
* DescribeRuntimeVersionsResponse `object`
  * NextToken
  * RuntimeVersions
    * items [RuntimeVersion](#runtimeversion)

### EnvironmentVariableName
* EnvironmentVariableName `string`

### EnvironmentVariableValue
* EnvironmentVariableValue `string`

### EnvironmentVariablesMap
* EnvironmentVariablesMap `object`

### FunctionArn
* FunctionArn `string`

### GetCanaryRequest
* GetCanaryRequest `object`

### GetCanaryResponse
* GetCanaryResponse `object`
  * Canary
    * ArtifactS3Location
    * Code [CanaryCodeOutput](#canarycodeoutput)
    * EngineArn
    * ExecutionRoleArn
    * FailureRetentionPeriodInDays
    * Id
    * Name
    * RunConfig [CanaryRunConfigOutput](#canaryrunconfigoutput)
    * RuntimeVersion
    * Schedule
      * DurationInSeconds
      * Expression
    * Status
      * State
      * StateReason
      * StateReasonCode
    * SuccessRetentionPeriodInDays
    * Tags
    * Timeline
      * Created
      * LastModified
      * LastStarted
      * LastStopped
    * VpcConfig [VpcConfigOutput](#vpcconfigoutput)

### GetCanaryRunsRequest
* GetCanaryRunsRequest `object`
  * MaxResults
  * NextToken

### GetCanaryRunsResponse
* GetCanaryRunsResponse `object`
  * CanaryRuns
    * items [CanaryRun](#canaryrun)
  * NextToken

### InternalServerException


### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### MaxCanaryResults
* MaxCanaryResults `integer`

### MaxFifteenMinutesInSeconds
* MaxFifteenMinutesInSeconds `integer`

### MaxOneYearInSeconds
* MaxOneYearInSeconds `integer`

### MaxSize100
* MaxSize100 `integer`

### MaxSize1024
* MaxSize1024 `integer`

### MaxSize3008
* MaxSize3008 `integer`

### NullableBoolean
* NullableBoolean `boolean`

### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### RuntimeVersion
* RuntimeVersion `object`: This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
  * DeprecationDate
  * Description
  * ReleaseDate
  * VersionName

### RuntimeVersionList
* RuntimeVersionList `array`
  * items [RuntimeVersion](#runtimeversion)

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### StartCanaryRequest
* StartCanaryRequest `object`

### StartCanaryResponse
* StartCanaryResponse `object`

### StopCanaryRequest
* StopCanaryRequest `object`

### StopCanaryResponse
* StopCanaryResponse `object`

### String
* String `string`

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### Token
* Token `string`

### UUID
* UUID `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateCanaryRequest
* UpdateCanaryRequest `object`
  * Code
    * Handler **required**
    * S3Bucket
    * S3Key
    * S3Version
    * ZipFile
  * ExecutionRoleArn
  * FailureRetentionPeriodInDays
  * RunConfig
    * ActiveTracing
    * EnvironmentVariables
    * MemoryInMB
    * TimeoutInSeconds
  * RuntimeVersion
  * Schedule
    * DurationInSeconds
    * Expression **required**
  * SuccessRetentionPeriodInDays
  * VpcConfig
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

### UpdateCanaryResponse
* UpdateCanaryResponse `object`

### ValidationException


### VpcConfigInput
* VpcConfigInput `object`: If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds
    * items [SubnetId](#subnetid)

### VpcConfigOutput
* VpcConfigOutput `object`: If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds
    * items [SubnetId](#subnetid)
  * VpcId

### VpcId
* VpcId `string`


