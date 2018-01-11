# @datafire/amazonaws_lambda

Client library for AWS Lambda

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_lambda
```
```js
let amazonaws_lambda = require('@datafire/amazonaws_lambda').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_lambda.InvokeAsync({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS Lambda</fullname> <p> <b>Overview</b> </p> <p>This is the <i>AWS Lambda API Reference</i>. The AWS Lambda Developer Guide provides additional information. For the service overview, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is AWS Lambda</a>, and for information about how the service works, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the <i>AWS Lambda Developer Guide</i>.</p>

## Actions

### InvokeAsync



```js
amazonaws_lambda.InvokeAsync({
  "FunctionName": "",
  "InvokeArgs": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * InvokeArgs **required** [BlobStream](#blobstream)

#### Output
*Output schema unknown*

### ListEventSourceMappings



```js
amazonaws_lambda.ListEventSourceMappings({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListEventSourceMappingsResponse](#listeventsourcemappingsresponse)

### UpdateEventSourceMapping



```js
amazonaws_lambda.UpdateEventSourceMapping({
  "UUID": ""
}, context)
```

#### Input
* input `object`
  * UUID **required** `string`
  * BatchSize [BatchSize](#batchsize)
  * Enabled [Enabled](#enabled)
  * FunctionName [FunctionName](#functionname)

#### Output
*Output schema unknown*

### CreateFunction



```js
amazonaws_lambda.CreateFunction({
  "FunctionName": "",
  "Runtime": "",
  "Role": "",
  "Handler": "",
  "Code": {}
}, context)
```

#### Input
* input `object`
  * Code **required** [FunctionCode](#functioncode)
  * DeadLetterConfig [DeadLetterConfig](#deadletterconfig)
  * Description [Description](#description)
  * Environment [Environment](#environment)
  * FunctionName **required** [FunctionName](#functionname)
  * Handler **required** [Handler](#handler)
  * KMSKeyArn [KMSKeyArn](#kmskeyarn)
  * MemorySize [MemorySize](#memorysize)
  * Publish [Boolean](#boolean)
  * Role **required** [RoleArn](#rolearn)
  * Runtime **required** [Runtime](#runtime)
  * Tags [Tags](#tags)
  * Timeout [Timeout](#timeout)
  * TracingConfig [TracingConfig](#tracingconfig)
  * VpcConfig [VpcConfig](#vpcconfig)

#### Output
*Output schema unknown*

### ListFunctions



```js
amazonaws_lambda.ListFunctions({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListFunctionsResponse](#listfunctionsresponse)

### GetFunction



```js
amazonaws_lambda.GetFunction({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`

#### Output
* output [GetFunctionResponse](#getfunctionresponse)

### ListAliases



```js
amazonaws_lambda.ListAliases({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`

#### Output
* output [ListAliasesResponse](#listaliasesresponse)

### UpdateAlias



```js
amazonaws_lambda.UpdateAlias({
  "FunctionName": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Name **required** `string`
  * Description [Description](#description)
  * FunctionVersion [Version](#version)

#### Output
* output [AliasConfiguration](#aliasconfiguration)

### UpdateFunctionCode



```js
amazonaws_lambda.UpdateFunctionCode({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * DryRun [Boolean](#boolean)
  * Publish [Boolean](#boolean)
  * S3Bucket [S3Bucket](#s3bucket)
  * S3Key [S3Key](#s3key)
  * S3ObjectVersion [S3ObjectVersion](#s3objectversion)
  * ZipFile [Blob](#blob)

#### Output
* output [FunctionConfiguration](#functionconfiguration)

### UpdateFunctionConfiguration



```js
amazonaws_lambda.UpdateFunctionConfiguration({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * DeadLetterConfig [DeadLetterConfig](#deadletterconfig)
  * Description [Description](#description)
  * Environment [Environment](#environment)
  * Handler [Handler](#handler)
  * KMSKeyArn [KMSKeyArn](#kmskeyarn)
  * MemorySize [MemorySize](#memorysize)
  * Role [RoleArn](#rolearn)
  * Runtime [Runtime](#runtime)
  * Timeout [Timeout](#timeout)
  * TracingConfig [TracingConfig](#tracingconfig)
  * VpcConfig [VpcConfig](#vpcconfig)

#### Output
* output [FunctionConfiguration](#functionconfiguration)

### Invoke



```js
amazonaws_lambda.Invoke({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Payload [Blob](#blob)

#### Output
* output [InvocationResponse](#invocationresponse)

### GetPolicy



```js
amazonaws_lambda.GetPolicy({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### RemovePermission



```js
amazonaws_lambda.RemovePermission({
  "FunctionName": "",
  "StatementId": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * StatementId **required** `string`

#### Output
*Output schema unknown*

### PublishVersion



```js
amazonaws_lambda.PublishVersion({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * CodeSha256 [String](#string)
  * Description [Description](#description)

#### Output
*Output schema unknown*

### GetAccountSettings



```js
amazonaws_lambda.GetAccountSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountSettingsResponse](#getaccountsettingsresponse)

### UntagResource



```js
amazonaws_lambda.UntagResource({
  "ARN": ""
}, context)
```

#### Input
* input `object`
  * ARN **required** `string`

#### Output
*Output schema unknown*



## Definitions

### AccountLimit
* AccountLimit `object`: Provides limits of code size and concurrency associated with the current account and region.
  * CodeSizeUnzipped [Long](#long)
  * CodeSizeZipped [Long](#long)
  * ConcurrentExecutions [Integer](#integer)
  * TotalCodeSize [Long](#long)

### AccountUsage
* AccountUsage `object`: Provides code size usage and function count associated with the current account and region.
  * FunctionCount [Long](#long)
  * TotalCodeSize [Long](#long)

### Action
* Action `string`

### AddPermissionRequest
* AddPermissionRequest `object`: <p/>
  * Action **required** [Action](#action)
  * EventSourceToken [EventSourceToken](#eventsourcetoken)
  * Principal **required** [Principal](#principal)
  * SourceAccount [SourceOwner](#sourceowner)
  * SourceArn [Arn](#arn)
  * StatementId **required** [StatementId](#statementid)

### AddPermissionResponse
* AddPermissionResponse `object`: <p/>
  * Statement [String](#string)

### Alias
* Alias `string`

### AliasConfiguration
* AliasConfiguration `object`: Provides configuration information about a Lambda function version alias.
  * AliasArn [FunctionArn](#functionarn)
  * Description [Description](#description)
  * FunctionVersion [Version](#version)
  * Name [Alias](#alias)

### AliasList
* AliasList `array`
  * items [AliasConfiguration](#aliasconfiguration)

### Arn
* Arn `string`

### BatchSize
* BatchSize `integer`

### Blob
* Blob `string`

### BlobStream
* BlobStream `string`

### Boolean
* Boolean `boolean`

### CodeStorageExceededException
* CodeStorageExceededException `object`: You have exceeded your maximum total code size per account. <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a> 
  * Type [String](#string)
  * message [String](#string)

### CreateAliasRequest
* CreateAliasRequest `object`
  * Description [Description](#description)
  * FunctionVersion **required** [Version](#version)
  * Name **required** [Alias](#alias)

### CreateEventSourceMappingRequest
* CreateEventSourceMappingRequest `object`: <p/>
  * BatchSize [BatchSize](#batchsize)
  * Enabled [Enabled](#enabled)
  * EventSourceArn **required** [Arn](#arn)
  * FunctionName **required** [FunctionName](#functionname)
  * StartingPosition **required** [EventSourcePosition](#eventsourceposition)
  * StartingPositionTimestamp [Date](#date)

### CreateFunctionRequest
* CreateFunctionRequest `object`: <p/>
  * Code **required** [FunctionCode](#functioncode)
  * DeadLetterConfig [DeadLetterConfig](#deadletterconfig)
  * Description [Description](#description)
  * Environment [Environment](#environment)
  * FunctionName **required** [FunctionName](#functionname)
  * Handler **required** [Handler](#handler)
  * KMSKeyArn [KMSKeyArn](#kmskeyarn)
  * MemorySize [MemorySize](#memorysize)
  * Publish [Boolean](#boolean)
  * Role **required** [RoleArn](#rolearn)
  * Runtime **required** [Runtime](#runtime)
  * Tags [Tags](#tags)
  * Timeout [Timeout](#timeout)
  * TracingConfig [TracingConfig](#tracingconfig)
  * VpcConfig [VpcConfig](#vpcconfig)

### Date
* Date `string`

### DeadLetterConfig
* DeadLetterConfig `object`: The parent object that contains the target ARN (Amazon Resource Name) of an Amazon SQS queue or Amazon SNS topic.
  * TargetArn [ResourceArn](#resourcearn)

### DeleteAliasRequest
* DeleteAliasRequest `object`

### DeleteEventSourceMappingRequest
* DeleteEventSourceMappingRequest `object`: <p/>

### DeleteFunctionRequest
* DeleteFunctionRequest `object`

### Description
* Description `string`

### EC2AccessDeniedException
* EC2AccessDeniedException `object`: <p/>
  * Message [String](#string)
  * Type [String](#string)

### EC2ThrottledException
* EC2ThrottledException `object`: AWS Lambda was throttled by Amazon EC2 during Lambda function initialization using the execution role provided for the Lambda function.
  * Message [String](#string)
  * Type [String](#string)

### EC2UnexpectedException
* EC2UnexpectedException `object`: AWS Lambda received an unexpected EC2 client exception while setting up for the Lambda function.
  * EC2ErrorCode [String](#string)
  * Message [String](#string)
  * Type [String](#string)

### ENILimitReachedException
* ENILimitReachedException `object`: AWS Lambda was not able to create an Elastic Network Interface (ENI) in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached.
  * Message [String](#string)
  * Type [String](#string)

### Enabled
* Enabled `boolean`

### Environment
* Environment `object`: The parent object that contains your environment's configuration settings.
  * Variables [EnvironmentVariables](#environmentvariables)

### EnvironmentError
* EnvironmentError `object`: The parent object that contains error information associated with your configuration settings.
  * ErrorCode [String](#string)
  * Message [SensitiveString](#sensitivestring)

### EnvironmentResponse
* EnvironmentResponse `object`: The parent object returned that contains your environment's configuration settings or any error information associated with your configuration settings.
  * Error [EnvironmentError](#environmenterror)
  * Variables [EnvironmentVariables](#environmentvariables)

### EnvironmentVariableName
* EnvironmentVariableName `string`

### EnvironmentVariableValue
* EnvironmentVariableValue `string`

### EnvironmentVariables
* EnvironmentVariables `array`
  * items `object`
    * key [EnvironmentVariableName](#environmentvariablename)
    * value [EnvironmentVariableValue](#environmentvariablevalue)

### EventSourceMappingConfiguration
* EventSourceMappingConfiguration `object`: Describes mapping between an Amazon Kinesis stream and a Lambda function.
  * BatchSize [BatchSize](#batchsize)
  * EventSourceArn [Arn](#arn)
  * FunctionArn [FunctionArn](#functionarn)
  * LastModified [Date](#date)
  * LastProcessingResult [String](#string)
  * State [String](#string)
  * StateTransitionReason [String](#string)
  * UUID [String](#string)

### EventSourceMappingsList
* EventSourceMappingsList `array`
  * items [EventSourceMappingConfiguration](#eventsourcemappingconfiguration)

### EventSourcePosition
* EventSourcePosition `string` (values: TRIM_HORIZON, LATEST, AT_TIMESTAMP)

### EventSourceToken
* EventSourceToken `string`

### FunctionArn
* FunctionArn `string`

### FunctionCode
* FunctionCode `object`: The code for the Lambda function.
  * S3Bucket [S3Bucket](#s3bucket)
  * S3Key [S3Key](#s3key)
  * S3ObjectVersion [S3ObjectVersion](#s3objectversion)
  * ZipFile [Blob](#blob)

### FunctionCodeLocation
* FunctionCodeLocation `object`: The object for the Lambda function location.
  * Location [String](#string)
  * RepositoryType [String](#string)

### FunctionConfiguration
* FunctionConfiguration `object`: A complex type that describes function metadata.
  * CodeSha256 [String](#string)
  * CodeSize [Long](#long)
  * DeadLetterConfig [DeadLetterConfig](#deadletterconfig)
  * Description [Description](#description)
  * Environment [EnvironmentResponse](#environmentresponse)
  * FunctionArn [NameSpacedFunctionArn](#namespacedfunctionarn)
  * FunctionName [NamespacedFunctionName](#namespacedfunctionname)
  * Handler [Handler](#handler)
  * KMSKeyArn [KMSKeyArn](#kmskeyarn)
  * LastModified [Timestamp](#timestamp)
  * MasterArn [FunctionArn](#functionarn)
  * MemorySize [MemorySize](#memorysize)
  * Role [RoleArn](#rolearn)
  * Runtime [Runtime](#runtime)
  * Timeout [Timeout](#timeout)
  * TracingConfig [TracingConfigResponse](#tracingconfigresponse)
  * Version [Version](#version)
  * VpcConfig [VpcConfigResponse](#vpcconfigresponse)

### FunctionList
* FunctionList `array`
  * items [FunctionConfiguration](#functionconfiguration)

### FunctionName
* FunctionName `string`

### FunctionVersion
* FunctionVersion `string` (values: ALL)

### GetAccountSettingsRequest
* GetAccountSettingsRequest `object`

### GetAccountSettingsResponse
* GetAccountSettingsResponse `object`
  * AccountLimit [AccountLimit](#accountlimit)
  * AccountUsage [AccountUsage](#accountusage)

### GetAliasRequest
* GetAliasRequest `object`

### GetEventSourceMappingRequest
* GetEventSourceMappingRequest `object`: <p/>

### GetFunctionConfigurationRequest
* GetFunctionConfigurationRequest `object`: <p/>

### GetFunctionRequest
* GetFunctionRequest `object`: <p/>

### GetFunctionResponse
* GetFunctionResponse `object`: This response contains the object for the Lambda function location (see <a>FunctionCodeLocation</a>.
  * Code [FunctionCodeLocation](#functioncodelocation)
  * Configuration [FunctionConfiguration](#functionconfiguration)
  * Tags [Tags](#tags)

### GetPolicyRequest
* GetPolicyRequest `object`: <p/>

### GetPolicyResponse
* GetPolicyResponse `object`: <p/>
  * Policy [String](#string)

### Handler
* Handler `string`

### HttpStatus
* HttpStatus `integer`

### Integer
* Integer `integer`

### InvalidParameterValueException
* InvalidParameterValueException `object`: One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception. You will also get this exception if you have selected a deprecated runtime, such as Node v0.10.42. 
  * Type [String](#string)
  * message [String](#string)

### InvalidRequestContentException
* InvalidRequestContentException `object`: The request body could not be parsed as JSON.
  * Type [String](#string)
  * message [String](#string)

### InvalidRuntimeException
* InvalidRuntimeException `object`: The runtime or runtime version specified is not supported.
  * Message [String](#string)
  * Type [String](#string)

### InvalidSecurityGroupIDException
* InvalidSecurityGroupIDException `object`: The Security Group ID provided in the Lambda function VPC configuration is invalid.
  * Message [String](#string)
  * Type [String](#string)

### InvalidSubnetIDException
* InvalidSubnetIDException `object`: The Subnet ID provided in the Lambda function VPC configuration is invalid.
  * Message [String](#string)
  * Type [String](#string)

### InvalidZipFileException
* InvalidZipFileException `object`: AWS Lambda could not unzip the function zip file.
  * Message [String](#string)
  * Type [String](#string)

### InvocationRequest
* InvocationRequest `object`: <p/>
  * Payload [Blob](#blob)

### InvocationResponse
* InvocationResponse `object`: Upon success, returns an empty response. Otherwise, throws an exception.
  * Payload [Blob](#blob)

### InvocationType
* InvocationType `string` (values: Event, RequestResponse, DryRun)

### InvokeAsyncRequest
* InvokeAsyncRequest `object`: <p/>
  * InvokeArgs **required** [BlobStream](#blobstream)

### InvokeAsyncResponse
* InvokeAsyncResponse `object`: Upon success, it returns empty response. Otherwise, throws an exception.

### KMSAccessDeniedException
* KMSAccessDeniedException `object`: Lambda was unable to decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.
  * Message [String](#string)
  * Type [String](#string)

### KMSDisabledException
* KMSDisabledException `object`: Lambda was unable to decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.
  * Message [String](#string)
  * Type [String](#string)

### KMSInvalidStateException
* KMSInvalidStateException `object`: Lambda was unable to decrypt the environment variables because the KMS key used is in an invalid state for Decrypt. Check the function's KMS key settings.
  * Message [String](#string)
  * Type [String](#string)

### KMSKeyArn
* KMSKeyArn `string`

### KMSNotFoundException
* KMSNotFoundException `object`: Lambda was unable to decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings. 
  * Message [String](#string)
  * Type [String](#string)

### ListAliasesRequest
* ListAliasesRequest `object`

### ListAliasesResponse
* ListAliasesResponse `object`
  * Aliases [AliasList](#aliaslist)
  * NextMarker [String](#string)

### ListEventSourceMappingsRequest
* ListEventSourceMappingsRequest `object`: <p/>

### ListEventSourceMappingsResponse
* ListEventSourceMappingsResponse `object`: Contains a list of event sources (see <a>EventSourceMappingConfiguration</a>)
  * EventSourceMappings [EventSourceMappingsList](#eventsourcemappingslist)
  * NextMarker [String](#string)

### ListFunctionsRequest
* ListFunctionsRequest `object`: <p/>

### ListFunctionsResponse
* ListFunctionsResponse `object`: Contains a list of AWS Lambda function configurations (see <a>FunctionConfiguration</a>.
  * Functions [FunctionList](#functionlist)
  * NextMarker [String](#string)

### ListTagsRequest
* ListTagsRequest `object`

### ListTagsResponse
* ListTagsResponse `object`
  * Tags [Tags](#tags)

### ListVersionsByFunctionRequest
* ListVersionsByFunctionRequest `object`: <p/>

### ListVersionsByFunctionResponse
* ListVersionsByFunctionResponse `object`: <p/>
  * NextMarker [String](#string)
  * Versions [FunctionList](#functionlist)

### LogType
* LogType `string` (values: None, Tail)

### Long
* Long `integer`

### MasterRegion
* MasterRegion `string`

### MaxListItems
* MaxListItems `integer`

### MemorySize
* MemorySize `integer`

### NameSpacedFunctionArn
* NameSpacedFunctionArn `string`

### NamespacedFunctionName
* NamespacedFunctionName `string`

### NamespacedStatementId
* NamespacedStatementId `string`

### PolicyLengthExceededException
* PolicyLengthExceededException `object`: Lambda function access policy is limited to 20 KB.
  * Type [String](#string)
  * message [String](#string)

### Principal
* Principal `string`

### PublishVersionRequest
* PublishVersionRequest `object`: <p/>
  * CodeSha256 [String](#string)
  * Description [Description](#description)

### Qualifier
* Qualifier `string`

### RemovePermissionRequest
* RemovePermissionRequest `object`: <p/>

### RequestTooLargeException
* RequestTooLargeException `object`: The request payload exceeded the <code>Invoke</code> request body JSON input limit. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a>. 
  * Type [String](#string)
  * message [String](#string)

### ResourceArn
* ResourceArn `string`

### ResourceConflictException
* ResourceConflictException `object`: The resource already exists.
  * Type [String](#string)
  * message [String](#string)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.
  * Message [String](#string)
  * Type [String](#string)

### RoleArn
* RoleArn `string`

### Runtime
* Runtime `string` (values: nodejs, nodejs4.3, nodejs6.10, java8, python2.7, python3.6, dotnetcore1.0, nodejs4.3-edge)

### S3Bucket
* S3Bucket `string`

### S3Key
* S3Key `string`

### S3ObjectVersion
* S3ObjectVersion `string`

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### SensitiveString
* SensitiveString `string`

### ServiceException
* ServiceException `object`: The AWS Lambda service encountered an internal error.
  * Message [String](#string)
  * Type [String](#string)

### SourceOwner
* SourceOwner `string`

### StatementId
* StatementId `string`

### String
* String `string`

### SubnetIPAddressLimitReachedException
* SubnetIPAddressLimitReachedException `object`: AWS Lambda was not able to set up VPC access for the Lambda function because one or more configured subnets has no available IP addresses.
  * Message [String](#string)
  * Type [String](#string)

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

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required** [Tags](#tags)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### ThrottleReason
* ThrottleReason `string` (values: ConcurrentInvocationLimitExceeded, FunctionInvocationRateLimitExceeded, CallerRateLimitExceeded)

### Timeout
* Timeout `integer`

### Timestamp
* Timestamp `string`

### TooManyRequestsException
* TooManyRequestsException `object`: <p/>
  * Reason [ThrottleReason](#throttlereason)
  * Type [String](#string)
  * message [String](#string)

### TracingConfig
* TracingConfig `object`: The parent object that contains your function's tracing settings.
  * Mode [TracingMode](#tracingmode)

### TracingConfigResponse
* TracingConfigResponse `object`: Parent object of the tracing information associated with your Lambda function.
  * Mode [TracingMode](#tracingmode)

### TracingMode
* TracingMode `string` (values: Active, PassThrough)

### UnsupportedMediaTypeException
* UnsupportedMediaTypeException `object`: The content type of the <code>Invoke</code> request body is not JSON.
  * Type [String](#string)
  * message [String](#string)

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateAliasRequest
* UpdateAliasRequest `object`
  * Description [Description](#description)
  * FunctionVersion [Version](#version)

### UpdateEventSourceMappingRequest
* UpdateEventSourceMappingRequest `object`: <p/>
  * BatchSize [BatchSize](#batchsize)
  * Enabled [Enabled](#enabled)
  * FunctionName [FunctionName](#functionname)

### UpdateFunctionCodeRequest
* UpdateFunctionCodeRequest `object`: <p/>
  * DryRun [Boolean](#boolean)
  * Publish [Boolean](#boolean)
  * S3Bucket [S3Bucket](#s3bucket)
  * S3Key [S3Key](#s3key)
  * S3ObjectVersion [S3ObjectVersion](#s3objectversion)
  * ZipFile [Blob](#blob)

### UpdateFunctionConfigurationRequest
* UpdateFunctionConfigurationRequest `object`: <p/>
  * DeadLetterConfig [DeadLetterConfig](#deadletterconfig)
  * Description [Description](#description)
  * Environment [Environment](#environment)
  * Handler [Handler](#handler)
  * KMSKeyArn [KMSKeyArn](#kmskeyarn)
  * MemorySize [MemorySize](#memorysize)
  * Role [RoleArn](#rolearn)
  * Runtime [Runtime](#runtime)
  * Timeout [Timeout](#timeout)
  * TracingConfig [TracingConfig](#tracingconfig)
  * VpcConfig [VpcConfig](#vpcconfig)

### Version
* Version `string`

### VpcConfig
* VpcConfig `object`: If your Lambda function accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and one subnet ID.
  * SecurityGroupIds [SecurityGroupIds](#securitygroupids)
  * SubnetIds [SubnetIds](#subnetids)

### VpcConfigResponse
* VpcConfigResponse `object`: VPC configuration associated with your Lambda function.
  * SecurityGroupIds [SecurityGroupIds](#securitygroupids)
  * SubnetIds [SubnetIds](#subnetids)
  * VpcId [VpcId](#vpcid)

### VpcId
* VpcId `string`


