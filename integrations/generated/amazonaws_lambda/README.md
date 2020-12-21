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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Lambda</fullname> <p> <b>Overview</b> </p> <p>This is the <i>AWS Lambda API Reference</i>. The AWS Lambda Developer Guide provides additional information. For the service overview, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is AWS Lambda</a>, and for information about how the service works, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the <b>AWS Lambda Developer Guide</b>.</p>

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
  * InvokeArgs **required** `string`: The JSON that you want to provide to your Lambda function as input.

#### Output
*Output schema unknown*

### ListEventSourceMappings



```js
amazonaws_lambda.ListEventSourceMappings({}, context)
```

#### Input
* input `object`
  * EventSourceArn `string`
  * FunctionName `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListEventSourceMappingsResponse](#listeventsourcemappingsresponse)

### CreateEventSourceMapping



```js
amazonaws_lambda.CreateEventSourceMapping({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * BatchSize `integer`: <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-Managed Apache Kafka</b> - Default 100. Max 10,000.</p> </li> </ul>
  * BisectBatchOnFunctionError `boolean`: (Streams) If the function returns an error, split the batch in two and retry.
  * DestinationConfig `object`: A configuration object that specifies the destination of an event after Lambda processes it.
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * Enabled `boolean`: If true, the event source mapping is active. Set to false to pause polling and invocation.
  * EventSourceArn `string`: <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> - The ARN of the cluster.</p> </li> </ul>
  * FunctionName **required** `string`: <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
  * FunctionResponseTypes `array`: (Streams) A list of current response type enums applied to the event source mapping.
    * items [FunctionResponseType](#functionresponsetype)
  * MaximumBatchingWindowInSeconds `integer`: (Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.
  * MaximumRecordAgeInSeconds `integer`: (Streams) Discard records older than the specified age. The default value is infinite (-1).
  * MaximumRetryAttempts `integer`: (Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.
  * ParallelizationFactor `integer`: (Streams) The number of batches to process from each shard concurrently.
  * Queues `array`:  (MQ) The name of the Amazon MQ broker destination queue to consume. 
    * items [Queue](#queue)
  * SelfManagedEventSource `object`: The Self-Managed Apache Kafka cluster for your event source.
    * Endpoints
  * SourceAccessConfigurations `array`: An array of the authentication protocol, or the VPC components to secure your event source.
    * items [SourceAccessConfiguration](#sourceaccessconfiguration)
  * StartingPosition `string` (values: TRIM_HORIZON, LATEST, AT_TIMESTAMP): The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams.
  * StartingPositionTimestamp `string`: With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading.
  * Topics `array`: The name of the Kafka topic.
    * items [Topic](#topic)
  * TumblingWindowInSeconds `integer`: (Streams) The duration of a processing window in seconds. The range is between 1 second up to 15 minutes.

#### Output
*Output schema unknown*

### DeleteEventSourceMapping



```js
amazonaws_lambda.DeleteEventSourceMapping({
  "UUID": ""
}, context)
```

#### Input
* input `object`
  * UUID **required** `string`

#### Output
*Output schema unknown*

### GetEventSourceMapping



```js
amazonaws_lambda.GetEventSourceMapping({
  "UUID": ""
}, context)
```

#### Input
* input `object`
  * UUID **required** `string`

#### Output
* output [EventSourceMappingConfiguration](#eventsourcemappingconfiguration)

### UpdateEventSourceMapping



```js
amazonaws_lambda.UpdateEventSourceMapping({
  "UUID": ""
}, context)
```

#### Input
* input `object`
  * UUID **required** `string`
  * BatchSize `integer`: <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-Managed Apache Kafka</b> - Default 100. Max 10,000.</p> </li> </ul>
  * BisectBatchOnFunctionError `boolean`: (Streams) If the function returns an error, split the batch in two and retry.
  * DestinationConfig `object`: A configuration object that specifies the destination of an event after Lambda processes it.
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * Enabled `boolean`: If true, the event source mapping is active. Set to false to pause polling and invocation.
  * FunctionName `string`: <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
  * FunctionResponseTypes `array`: (Streams) A list of current response type enums applied to the event source mapping.
    * items [FunctionResponseType](#functionresponsetype)
  * MaximumBatchingWindowInSeconds `integer`: (Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.
  * MaximumRecordAgeInSeconds `integer`: (Streams) Discard records older than the specified age. The default value is infinite (-1).
  * MaximumRetryAttempts `integer`: (Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.
  * ParallelizationFactor `integer`: (Streams) The number of batches to process from each shard concurrently.
  * SourceAccessConfigurations `array`: An array of the authentication protocol, or the VPC components to secure your event source.
    * items [SourceAccessConfiguration](#sourceaccessconfiguration)
  * TumblingWindowInSeconds `integer`: (Streams) The duration of a processing window in seconds. The range is between 1 second up to 15 minutes.

#### Output
*Output schema unknown*

### CreateFunction



```js
amazonaws_lambda.CreateFunction({
  "FunctionName": "",
  "Role": "",
  "Code": {}
}, context)
```

#### Input
* input `object`
  * Code **required** `object`: The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
    * ImageUri
    * S3Bucket
    * S3Key
    * S3ObjectVersion
    * ZipFile
  * CodeSigningConfigArn `string`: To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
  * DeadLetterConfig `object`: The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
    * TargetArn
  * Description `string`: A description of the function.
  * Environment `object`: A function's environment variable settings.
    * Variables
  * FileSystemConfigs `array`: Connection settings for an Amazon EFS file system.
    * items [FileSystemConfig](#filesystemconfig)
  * FunctionName **required** `string`: <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
  * Handler `string`: The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
  * ImageConfig `object`: Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container settings</a>. 
    * Command
      * items [String](#string)
    * EntryPoint
      * items [String](#string)
    * WorkingDirectory
  * KMSKeyArn `string`: The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
  * Layers `array`: A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.
    * items [LayerVersionArn](#layerversionarn)
  * MemorySize `integer`: The amount of memory available to the function at runtime. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
  * PackageType `string` (values: Zip, Image): The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for ZIP archive.
  * Publish `boolean`: Set to true to publish the first version of the function during creation.
  * Role **required** `string`: The Amazon Resource Name (ARN) of the function's execution role.
  * Runtime `string` (values: nodejs, nodejs4.3, nodejs6.10, nodejs8.10, nodejs10.x, nodejs12.x, java8, java8.al2, java11, python2.7, python3.6, python3.7, python3.8, dotnetcore1.0, dotnetcore2.0, dotnetcore2.1, dotnetcore3.1, nodejs4.3-edge, go1.x, ruby2.5, ruby2.7, provided, provided.al2): The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.
  * Tags `object`: A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function.
  * Timeout `integer`: The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
  * TracingConfig `object`: The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
    * Mode
  * VpcConfig `object`: The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

#### Output
*Output schema unknown*

### ListFunctions



```js
amazonaws_lambda.ListFunctions({}, context)
```

#### Input
* input `object`
  * MasterRegion `string`
  * FunctionVersion `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListFunctionsResponse](#listfunctionsresponse)

### DeleteFunction



```js
amazonaws_lambda.DeleteFunction({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`

#### Output
*Output schema unknown*

### GetFunction



```js
amazonaws_lambda.GetFunction({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`

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
  * FunctionVersion `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListAliasesResponse](#listaliasesresponse)

### CreateAlias



```js
amazonaws_lambda.CreateAlias({
  "FunctionName": "",
  "Name": "",
  "FunctionVersion": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Description `string`: A description of the alias.
  * FunctionVersion **required** `string`: The function version that the alias invokes.
  * Name **required** `string`: The name of the alias.
  * RoutingConfig `object`: The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
    * AdditionalVersionWeights

#### Output
*Output schema unknown*

### DeleteAlias



```js
amazonaws_lambda.DeleteAlias({
  "FunctionName": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Name **required** `string`

#### Output
*Output schema unknown*

### GetAlias



```js
amazonaws_lambda.GetAlias({
  "FunctionName": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Name **required** `string`

#### Output
* output [AliasConfiguration](#aliasconfiguration)

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
  * Description `string`: A description of the alias.
  * FunctionVersion `string`: The function version that the alias invokes.
  * RevisionId `string`: Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.
  * RoutingConfig `object`: The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
    * AdditionalVersionWeights

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
  * DryRun `boolean`: Set to true to validate the request parameters and access permissions without modifying the function code.
  * ImageUri `string`: URI of a container image in the Amazon ECR registry.
  * Publish `boolean`: Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately.
  * RevisionId `string`: Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.
  * S3Bucket `string`: An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
  * S3Key `string`: The Amazon S3 key of the deployment package.
  * S3ObjectVersion `string`: For versioned objects, the version of the deployment package object to use.
  * ZipFile `string`: The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.

#### Output
* output [FunctionConfiguration](#functionconfiguration)

### GetFunctionConfiguration



```js
amazonaws_lambda.GetFunctionConfiguration({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`

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
  * DeadLetterConfig `object`: The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
    * TargetArn
  * Description `string`: A description of the function.
  * Environment `object`: A function's environment variable settings.
    * Variables
  * FileSystemConfigs `array`: Connection settings for an Amazon EFS file system.
    * items [FileSystemConfig](#filesystemconfig)
  * Handler `string`: The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
  * ImageConfig `object`: Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container settings</a>. 
    * Command
      * items [String](#string)
    * EntryPoint
      * items [String](#string)
    * WorkingDirectory
  * KMSKeyArn `string`: The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
  * Layers `array`: A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.
    * items [LayerVersionArn](#layerversionarn)
  * MemorySize `integer`: The amount of memory available to the function at runtime. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
  * RevisionId `string`: Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.
  * Role `string`: The Amazon Resource Name (ARN) of the function's execution role.
  * Runtime `string` (values: nodejs, nodejs4.3, nodejs6.10, nodejs8.10, nodejs10.x, nodejs12.x, java8, java8.al2, java11, python2.7, python3.6, python3.7, python3.8, dotnetcore1.0, dotnetcore2.0, dotnetcore2.1, dotnetcore3.1, nodejs4.3-edge, go1.x, ruby2.5, ruby2.7, provided, provided.al2): The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.
  * Timeout `integer`: The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
  * TracingConfig `object`: The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
    * Mode
  * VpcConfig `object`: The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

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
  * Qualifier `string`
  * Payload `string`: The JSON that you want to provide to your Lambda function as input.

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
  * Qualifier `string`

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### AddPermission



```js
amazonaws_lambda.AddPermission({
  "FunctionName": "",
  "StatementId": "",
  "Action": "",
  "Principal": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`
  * Action **required** `string`: The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.
  * EventSourceToken `string`: For Alexa Smart Home functions, a token that must be supplied by the invoker.
  * Principal **required** `string`: The AWS service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.
  * RevisionId `string`: Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
  * SourceAccount `string`: For Amazon S3, the ID of the account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
  * SourceArn `string`: For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
  * StatementId **required** `string`: A statement identifier that differentiates the statement from others in the same policy.

#### Output
*Output schema unknown*

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
  * Qualifier `string`
  * RevisionId `string`

#### Output
*Output schema unknown*

### ListVersionsByFunction



```js
amazonaws_lambda.ListVersionsByFunction({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListVersionsByFunctionResponse](#listversionsbyfunctionresponse)

### PublishVersion



```js
amazonaws_lambda.PublishVersion({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * CodeSha256 `string`: Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>.
  * Description `string`: A description for the version to override the description in the function configuration.
  * RevisionId `string`: Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.

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

### ListTags



```js
amazonaws_lambda.ListTags({
  "ARN": ""
}, context)
```

#### Input
* input `object`
  * ARN **required** `string`

#### Output
* output [ListTagsResponse](#listtagsresponse)

### TagResource



```js
amazonaws_lambda.TagResource({
  "ARN": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * ARN **required** `string`
  * Tags **required** `object`: A list of tags to apply to the function.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_lambda.UntagResource({
  "ARN": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ARN **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### DeleteFunctionConcurrency



```js
amazonaws_lambda.DeleteFunctionConcurrency({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`

#### Output
*Output schema unknown*

### PutFunctionConcurrency



```js
amazonaws_lambda.PutFunctionConcurrency({
  "FunctionName": "",
  "ReservedConcurrentExecutions": 0
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * ReservedConcurrentExecutions **required** `integer`: The number of simultaneous executions to reserve for the function.

#### Output
* output [Concurrency](#concurrency)

### ListLayers



```js
amazonaws_lambda.ListLayers({}, context)
```

#### Input
* input `object`
  * CompatibleRuntime `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListLayersResponse](#listlayersresponse)

### GetLayerVersionByArn



```js
amazonaws_lambda.GetLayerVersionByArn({
  "Arn": "",
  "find": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`
  * find **required** `string`

#### Output
* output [GetLayerVersionResponse](#getlayerversionresponse)

### ListLayerVersions



```js
amazonaws_lambda.ListLayerVersions({
  "LayerName": ""
}, context)
```

#### Input
* input `object`
  * CompatibleRuntime `string`
  * LayerName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListLayerVersionsResponse](#listlayerversionsresponse)

### PublishLayerVersion



```js
amazonaws_lambda.PublishLayerVersion({
  "LayerName": "",
  "Content": {}
}, context)
```

#### Input
* input `object`
  * LayerName **required** `string`
  * CompatibleRuntimes `array`: A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.
    * items [Runtime](#runtime)
  * Content **required** `object`: A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
    * S3Bucket
    * S3Key
    * S3ObjectVersion
    * ZipFile
  * Description `string`: The description of the version.
  * LicenseInfo `string`: <p>The layer's software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>

#### Output
*Output schema unknown*

### DeleteLayerVersion



```js
amazonaws_lambda.DeleteLayerVersion({
  "LayerName": "",
  "VersionNumber": 0
}, context)
```

#### Input
* input `object`
  * LayerName **required** `string`
  * VersionNumber **required** `integer`

#### Output
*Output schema unknown*

### GetLayerVersion



```js
amazonaws_lambda.GetLayerVersion({
  "LayerName": "",
  "VersionNumber": 0
}, context)
```

#### Input
* input `object`
  * LayerName **required** `string`
  * VersionNumber **required** `integer`

#### Output
* output [GetLayerVersionResponse](#getlayerversionresponse)

### GetLayerVersionPolicy



```js
amazonaws_lambda.GetLayerVersionPolicy({
  "LayerName": "",
  "VersionNumber": 0
}, context)
```

#### Input
* input `object`
  * LayerName **required** `string`
  * VersionNumber **required** `integer`

#### Output
* output [GetLayerVersionPolicyResponse](#getlayerversionpolicyresponse)

### AddLayerVersionPermission



```js
amazonaws_lambda.AddLayerVersionPermission({
  "LayerName": "",
  "VersionNumber": 0,
  "StatementId": "",
  "Action": "",
  "Principal": ""
}, context)
```

#### Input
* input `object`
  * LayerName **required** `string`
  * VersionNumber **required** `integer`
  * RevisionId `string`
  * Action **required** `string`: The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.
  * OrganizationId `string`: With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.
  * Principal **required** `string`: An account ID, or <code>*</code> to grant permission to all AWS accounts.
  * StatementId **required** `string`: An identifier that distinguishes the policy from others on the same layer version.

#### Output
*Output schema unknown*

### RemoveLayerVersionPermission



```js
amazonaws_lambda.RemoveLayerVersionPermission({
  "LayerName": "",
  "VersionNumber": 0,
  "StatementId": ""
}, context)
```

#### Input
* input `object`
  * LayerName **required** `string`
  * VersionNumber **required** `integer`
  * StatementId **required** `string`
  * RevisionId `string`

#### Output
*Output schema unknown*

### DeleteFunctionEventInvokeConfig



```js
amazonaws_lambda.DeleteFunctionEventInvokeConfig({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`

#### Output
*Output schema unknown*

### GetFunctionEventInvokeConfig



```js
amazonaws_lambda.GetFunctionEventInvokeConfig({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`

#### Output
* output [FunctionEventInvokeConfig](#functioneventinvokeconfig)

### UpdateFunctionEventInvokeConfig



```js
amazonaws_lambda.UpdateFunctionEventInvokeConfig({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`
  * DestinationConfig `object`: A configuration object that specifies the destination of an event after Lambda processes it.
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * MaximumEventAgeInSeconds `integer`: The maximum age of a request that Lambda sends to a function for processing.
  * MaximumRetryAttempts `integer`: The maximum number of times to retry when the function returns an error.

#### Output
* output [FunctionEventInvokeConfig](#functioneventinvokeconfig)

### PutFunctionEventInvokeConfig



```js
amazonaws_lambda.PutFunctionEventInvokeConfig({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier `string`
  * DestinationConfig `object`: A configuration object that specifies the destination of an event after Lambda processes it.
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * MaximumEventAgeInSeconds `integer`: The maximum age of a request that Lambda sends to a function for processing.
  * MaximumRetryAttempts `integer`: The maximum number of times to retry when the function returns an error.

#### Output
* output [FunctionEventInvokeConfig](#functioneventinvokeconfig)

### ListFunctionEventInvokeConfigs



```js
amazonaws_lambda.ListFunctionEventInvokeConfigs({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListFunctionEventInvokeConfigsResponse](#listfunctioneventinvokeconfigsresponse)

### GetFunctionConcurrency



```js
amazonaws_lambda.GetFunctionConcurrency({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`

#### Output
* output [GetFunctionConcurrencyResponse](#getfunctionconcurrencyresponse)

### ListProvisionedConcurrencyConfigs



```js
amazonaws_lambda.ListProvisionedConcurrencyConfigs({
  "FunctionName": "",
  "List": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Marker `string`
  * MaxItems `integer`
  * List **required** `string`

#### Output
* output [ListProvisionedConcurrencyConfigsResponse](#listprovisionedconcurrencyconfigsresponse)

### DeleteProvisionedConcurrencyConfig



```js
amazonaws_lambda.DeleteProvisionedConcurrencyConfig({
  "FunctionName": "",
  "Qualifier": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier **required** `string`

#### Output
*Output schema unknown*

### GetProvisionedConcurrencyConfig



```js
amazonaws_lambda.GetProvisionedConcurrencyConfig({
  "FunctionName": "",
  "Qualifier": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier **required** `string`

#### Output
* output [GetProvisionedConcurrencyConfigResponse](#getprovisionedconcurrencyconfigresponse)

### PutProvisionedConcurrencyConfig



```js
amazonaws_lambda.PutProvisionedConcurrencyConfig({
  "FunctionName": "",
  "Qualifier": "",
  "ProvisionedConcurrentExecutions": 0
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * Qualifier **required** `string`
  * ProvisionedConcurrentExecutions **required** `integer`: The amount of provisioned concurrency to allocate for the version or alias.

#### Output
*Output schema unknown*

### ListCodeSigningConfigs



```js
amazonaws_lambda.ListCodeSigningConfigs({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListCodeSigningConfigsResponse](#listcodesigningconfigsresponse)

### CreateCodeSigningConfig



```js
amazonaws_lambda.CreateCodeSigningConfig({
  "AllowedPublishers": {}
}, context)
```

#### Input
* input `object`
  * AllowedPublishers **required** `object`: List of signing profiles that can sign a code package. 
    * SigningProfileVersionArns
      * items [Arn](#arn)
  * CodeSigningPolicies `object`: Code signing configuration policies specifies the validation failure action for signature mismatch or expiry.
    * UntrustedArtifactOnDeployment
  * Description `string`: Descriptive name for this code signing configuration.

#### Output
*Output schema unknown*

### DeleteCodeSigningConfig



```js
amazonaws_lambda.DeleteCodeSigningConfig({
  "CodeSigningConfigArn": ""
}, context)
```

#### Input
* input `object`
  * CodeSigningConfigArn **required** `string`

#### Output
*Output schema unknown*

### GetCodeSigningConfig



```js
amazonaws_lambda.GetCodeSigningConfig({
  "CodeSigningConfigArn": ""
}, context)
```

#### Input
* input `object`
  * CodeSigningConfigArn **required** `string`

#### Output
* output [GetCodeSigningConfigResponse](#getcodesigningconfigresponse)

### UpdateCodeSigningConfig



```js
amazonaws_lambda.UpdateCodeSigningConfig({
  "CodeSigningConfigArn": ""
}, context)
```

#### Input
* input `object`
  * CodeSigningConfigArn **required** `string`
  * AllowedPublishers `object`: List of signing profiles that can sign a code package. 
    * SigningProfileVersionArns
      * items [Arn](#arn)
  * CodeSigningPolicies `object`: Code signing configuration policies specifies the validation failure action for signature mismatch or expiry.
    * UntrustedArtifactOnDeployment
  * Description `string`: Descriptive name for this code signing configuration.

#### Output
* output [UpdateCodeSigningConfigResponse](#updatecodesigningconfigresponse)

### ListFunctionsByCodeSigningConfig



```js
amazonaws_lambda.ListFunctionsByCodeSigningConfig({
  "CodeSigningConfigArn": ""
}, context)
```

#### Input
* input `object`
  * CodeSigningConfigArn **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListFunctionsByCodeSigningConfigResponse](#listfunctionsbycodesigningconfigresponse)

### DeleteFunctionCodeSigningConfig



```js
amazonaws_lambda.DeleteFunctionCodeSigningConfig({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`

#### Output
*Output schema unknown*

### GetFunctionCodeSigningConfig



```js
amazonaws_lambda.GetFunctionCodeSigningConfig({
  "FunctionName": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`

#### Output
* output [GetFunctionCodeSigningConfigResponse](#getfunctioncodesigningconfigresponse)

### PutFunctionCodeSigningConfig



```js
amazonaws_lambda.PutFunctionCodeSigningConfig({
  "FunctionName": "",
  "CodeSigningConfigArn": ""
}, context)
```

#### Input
* input `object`
  * FunctionName **required** `string`
  * CodeSigningConfigArn **required** `string`: The The Amazon Resource Name (ARN) of the code signing configuration.

#### Output
* output [PutFunctionCodeSigningConfigResponse](#putfunctioncodesigningconfigresponse)



## Definitions

### AccountLimit
* AccountLimit `object`: Limits that are related to concurrency and storage. All file and storage sizes are in bytes.
  * CodeSizeUnzipped
  * CodeSizeZipped
  * ConcurrentExecutions
  * TotalCodeSize
  * UnreservedConcurrentExecutions

### AccountUsage
* AccountUsage `object`: The number of functions and amount of storage in use.
  * FunctionCount
  * TotalCodeSize

### Action
* Action `string`

### AddLayerVersionPermissionRequest
* AddLayerVersionPermissionRequest `object`
  * Action **required**
  * OrganizationId
  * Principal **required**
  * StatementId **required**

### AddLayerVersionPermissionResponse
* AddLayerVersionPermissionResponse `object`
  * RevisionId
  * Statement

### AddPermissionRequest
* AddPermissionRequest `object`
  * Action **required**
  * EventSourceToken
  * Principal **required**
  * RevisionId
  * SourceAccount
  * SourceArn
  * StatementId **required**

### AddPermissionResponse
* AddPermissionResponse `object`
  * Statement

### AdditionalVersion
* AdditionalVersion `string`

### AdditionalVersionWeights
* AdditionalVersionWeights `object`

### Alias
* Alias `string`

### AliasConfiguration
* AliasConfiguration `object`: Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
  * AliasArn
  * Description
  * FunctionVersion
  * Name
  * RevisionId
  * RoutingConfig
    * AdditionalVersionWeights

### AliasList
* AliasList `array`
  * items [AliasConfiguration](#aliasconfiguration)

### AliasRoutingConfiguration
* AliasRoutingConfiguration `object`: The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
  * AdditionalVersionWeights

### AllowedPublishers
* AllowedPublishers `object`: List of signing profiles that can sign a code package. 
  * SigningProfileVersionArns **required**
    * items [Arn](#arn)

### Arn
* Arn `string`

### BatchSize
* BatchSize `integer`

### BisectBatchOnFunctionError
* BisectBatchOnFunctionError `boolean`

### Blob
* Blob `string`

### BlobStream
* BlobStream `string`

### Boolean
* Boolean `boolean`

### CodeSigningConfig
* CodeSigningConfig `object`: Details about a Code signing configuration. 
  * AllowedPublishers **required**
    * SigningProfileVersionArns **required**
      * items [Arn](#arn)
  * CodeSigningConfigArn **required**
  * CodeSigningConfigId **required**
  * CodeSigningPolicies **required**
    * UntrustedArtifactOnDeployment
  * Description
  * LastModified **required**

### CodeSigningConfigArn
* CodeSigningConfigArn `string`

### CodeSigningConfigId
* CodeSigningConfigId `string`

### CodeSigningConfigList
* CodeSigningConfigList `array`
  * items [CodeSigningConfig](#codesigningconfig)

### CodeSigningConfigNotFoundException


### CodeSigningPolicies
* CodeSigningPolicies `object`: Code signing configuration policies specifies the validation failure action for signature mismatch or expiry.
  * UntrustedArtifactOnDeployment

### CodeSigningPolicy
* CodeSigningPolicy `string` (values: Warn, Enforce)

### CodeStorageExceededException


### CodeVerificationFailedException


### CompatibleRuntimes
* CompatibleRuntimes `array`
  * items [Runtime](#runtime)

### Concurrency
* Concurrency `object`
  * ReservedConcurrentExecutions

### CreateAliasRequest
* CreateAliasRequest `object`
  * Description
  * FunctionVersion **required**
  * Name **required**
  * RoutingConfig
    * AdditionalVersionWeights

### CreateCodeSigningConfigRequest
* CreateCodeSigningConfigRequest `object`
  * AllowedPublishers **required**
    * SigningProfileVersionArns **required**
      * items [Arn](#arn)
  * CodeSigningPolicies
    * UntrustedArtifactOnDeployment
  * Description

### CreateCodeSigningConfigResponse
* CreateCodeSigningConfigResponse `object`
  * CodeSigningConfig **required**
    * AllowedPublishers **required**
      * SigningProfileVersionArns **required**
        * items [Arn](#arn)
    * CodeSigningConfigArn **required**
    * CodeSigningConfigId **required**
    * CodeSigningPolicies **required**
      * UntrustedArtifactOnDeployment
    * Description
    * LastModified **required**

### CreateEventSourceMappingRequest
* CreateEventSourceMappingRequest `object`
  * BatchSize
  * BisectBatchOnFunctionError
  * DestinationConfig
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * Enabled
  * EventSourceArn
  * FunctionName **required**
  * FunctionResponseTypes
    * items [FunctionResponseType](#functionresponsetype)
  * MaximumBatchingWindowInSeconds
  * MaximumRecordAgeInSeconds
  * MaximumRetryAttempts
  * ParallelizationFactor
  * Queues
    * items [Queue](#queue)
  * SelfManagedEventSource
    * Endpoints
  * SourceAccessConfigurations
    * items [SourceAccessConfiguration](#sourceaccessconfiguration)
  * StartingPosition
  * StartingPositionTimestamp
  * Topics
    * items [Topic](#topic)
  * TumblingWindowInSeconds

### CreateFunctionRequest
* CreateFunctionRequest `object`
  * Code **required**
    * ImageUri
    * S3Bucket
    * S3Key
    * S3ObjectVersion
    * ZipFile
  * CodeSigningConfigArn
  * DeadLetterConfig
    * TargetArn
  * Description
  * Environment
    * Variables
  * FileSystemConfigs
    * items [FileSystemConfig](#filesystemconfig)
  * FunctionName **required**
  * Handler
  * ImageConfig
    * Command
      * items [String](#string)
    * EntryPoint
      * items [String](#string)
    * WorkingDirectory
  * KMSKeyArn
  * Layers
    * items [LayerVersionArn](#layerversionarn)
  * MemorySize
  * PackageType
  * Publish
  * Role **required**
  * Runtime
  * Tags
  * Timeout
  * TracingConfig
    * Mode
  * VpcConfig
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

### Date
* Date `string`

### DeadLetterConfig
* DeadLetterConfig `object`: The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
  * TargetArn

### DeleteAliasRequest
* DeleteAliasRequest `object`

### DeleteCodeSigningConfigRequest
* DeleteCodeSigningConfigRequest `object`

### DeleteCodeSigningConfigResponse
* DeleteCodeSigningConfigResponse `object`

### DeleteEventSourceMappingRequest
* DeleteEventSourceMappingRequest `object`

### DeleteFunctionCodeSigningConfigRequest
* DeleteFunctionCodeSigningConfigRequest `object`

### DeleteFunctionConcurrencyRequest
* DeleteFunctionConcurrencyRequest `object`

### DeleteFunctionEventInvokeConfigRequest
* DeleteFunctionEventInvokeConfigRequest `object`

### DeleteFunctionRequest
* DeleteFunctionRequest `object`

### DeleteLayerVersionRequest
* DeleteLayerVersionRequest `object`

### DeleteProvisionedConcurrencyConfigRequest
* DeleteProvisionedConcurrencyConfigRequest `object`

### Description
* Description `string`

### DestinationArn
* DestinationArn `string`

### DestinationConfig
* DestinationConfig `object`: A configuration object that specifies the destination of an event after Lambda processes it.
  * OnFailure
    * Destination
  * OnSuccess
    * Destination

### EC2AccessDeniedException


### EC2ThrottledException


### EC2UnexpectedException


### EFSIOException


### EFSMountConnectivityException


### EFSMountFailureException


### EFSMountTimeoutException


### ENILimitReachedException


### Enabled
* Enabled `boolean`

### EndPointType
* EndPointType `string` (values: KAFKA_BOOTSTRAP_SERVERS)

### Endpoint
* Endpoint `string`

### EndpointLists
* EndpointLists `array`
  * items [Endpoint](#endpoint)

### Endpoints
* Endpoints `object`

### Environment
* Environment `object`: A function's environment variable settings.
  * Variables

### EnvironmentError
* EnvironmentError `object`: Error messages for environment variables that couldn't be applied.
  * ErrorCode
  * Message

### EnvironmentResponse
* EnvironmentResponse `object`: The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error.
  * Error
    * ErrorCode
    * Message
  * Variables

### EnvironmentVariableName
* EnvironmentVariableName `string`

### EnvironmentVariableValue
* EnvironmentVariableValue `string`

### EnvironmentVariables
* EnvironmentVariables `object`

### EventSourceMappingConfiguration
* EventSourceMappingConfiguration `object`: A mapping between an AWS resource and an AWS Lambda function. See <a>CreateEventSourceMapping</a> for details.
  * BatchSize
  * BisectBatchOnFunctionError
  * DestinationConfig
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * EventSourceArn
  * FunctionArn
  * FunctionResponseTypes
    * items [FunctionResponseType](#functionresponsetype)
  * LastModified
  * LastProcessingResult
  * MaximumBatchingWindowInSeconds
  * MaximumRecordAgeInSeconds
  * MaximumRetryAttempts
  * ParallelizationFactor
  * Queues
    * items [Queue](#queue)
  * SelfManagedEventSource
    * Endpoints
  * SourceAccessConfigurations
    * items [SourceAccessConfiguration](#sourceaccessconfiguration)
  * StartingPosition
  * StartingPositionTimestamp
  * State
  * StateTransitionReason
  * Topics
    * items [Topic](#topic)
  * TumblingWindowInSeconds
  * UUID

### EventSourceMappingsList
* EventSourceMappingsList `array`
  * items [EventSourceMappingConfiguration](#eventsourcemappingconfiguration)

### EventSourcePosition
* EventSourcePosition `string` (values: TRIM_HORIZON, LATEST, AT_TIMESTAMP)

### EventSourceToken
* EventSourceToken `string`

### FileSystemArn
* FileSystemArn `string`

### FileSystemConfig
* FileSystemConfig `object`: Details about the connection between a Lambda function and an Amazon EFS file system.
  * Arn **required**
  * LocalMountPath **required**

### FileSystemConfigList
* FileSystemConfigList `array`
  * items [FileSystemConfig](#filesystemconfig)

### FunctionArn
* FunctionArn `string`

### FunctionArnList
* FunctionArnList `array`
  * items [FunctionArn](#functionarn)

### FunctionCode
* FunctionCode `object`: The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
  * ImageUri
  * S3Bucket
  * S3Key
  * S3ObjectVersion
  * ZipFile

### FunctionCodeLocation
* FunctionCodeLocation `object`: Details about a function's deployment package.
  * ImageUri
  * Location
  * RepositoryType
  * ResolvedImageUri

### FunctionConfiguration
* FunctionConfiguration `object`: Details about a function's configuration.
  * CodeSha256
  * CodeSize
  * DeadLetterConfig
    * TargetArn
  * Description
  * Environment
    * Error
      * ErrorCode
      * Message
    * Variables
  * FileSystemConfigs
    * items [FileSystemConfig](#filesystemconfig)
  * FunctionArn
  * FunctionName
  * Handler
  * ImageConfigResponse
    * Error
      * ErrorCode
      * Message
    * ImageConfig
      * Command
        * items [String](#string)
      * EntryPoint
        * items [String](#string)
      * WorkingDirectory
  * KMSKeyArn
  * LastModified
  * LastUpdateStatus
  * LastUpdateStatusReason
  * LastUpdateStatusReasonCode
  * Layers
    * items [Layer](#layer)
  * MasterArn
  * MemorySize
  * PackageType
  * RevisionId
  * Role
  * Runtime
  * SigningJobArn
  * SigningProfileVersionArn
  * State
  * StateReason
  * StateReasonCode
  * Timeout
  * TracingConfig
    * Mode
  * Version
  * VpcConfig
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcId

### FunctionEventInvokeConfig
* FunctionEventInvokeConfig `object`
  * DestinationConfig
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * FunctionArn
  * LastModified
  * MaximumEventAgeInSeconds
  * MaximumRetryAttempts

### FunctionEventInvokeConfigList
* FunctionEventInvokeConfigList `array`
  * items [FunctionEventInvokeConfig](#functioneventinvokeconfig)

### FunctionList
* FunctionList `array`
  * items [FunctionConfiguration](#functionconfiguration)

### FunctionName
* FunctionName `string`

### FunctionResponseType
* FunctionResponseType `string` (values: ReportBatchItemFailures)

### FunctionResponseTypeList
* FunctionResponseTypeList `array`
  * items [FunctionResponseType](#functionresponsetype)

### FunctionVersion
* FunctionVersion `string` (values: ALL)

### GetAccountSettingsRequest
* GetAccountSettingsRequest `object`

### GetAccountSettingsResponse
* GetAccountSettingsResponse `object`
  * AccountLimit
    * CodeSizeUnzipped
    * CodeSizeZipped
    * ConcurrentExecutions
    * TotalCodeSize
    * UnreservedConcurrentExecutions
  * AccountUsage
    * FunctionCount
    * TotalCodeSize

### GetAliasRequest
* GetAliasRequest `object`

### GetCodeSigningConfigRequest
* GetCodeSigningConfigRequest `object`

### GetCodeSigningConfigResponse
* GetCodeSigningConfigResponse `object`
  * CodeSigningConfig **required**
    * AllowedPublishers **required**
      * SigningProfileVersionArns **required**
        * items [Arn](#arn)
    * CodeSigningConfigArn **required**
    * CodeSigningConfigId **required**
    * CodeSigningPolicies **required**
      * UntrustedArtifactOnDeployment
    * Description
    * LastModified **required**

### GetEventSourceMappingRequest
* GetEventSourceMappingRequest `object`

### GetFunctionCodeSigningConfigRequest
* GetFunctionCodeSigningConfigRequest `object`

### GetFunctionCodeSigningConfigResponse
* GetFunctionCodeSigningConfigResponse `object`
  * CodeSigningConfigArn **required**
  * FunctionName **required**

### GetFunctionConcurrencyRequest
* GetFunctionConcurrencyRequest `object`

### GetFunctionConcurrencyResponse
* GetFunctionConcurrencyResponse `object`
  * ReservedConcurrentExecutions

### GetFunctionConfigurationRequest
* GetFunctionConfigurationRequest `object`

### GetFunctionEventInvokeConfigRequest
* GetFunctionEventInvokeConfigRequest `object`

### GetFunctionRequest
* GetFunctionRequest `object`

### GetFunctionResponse
* GetFunctionResponse `object`
  * Code
    * ImageUri
    * Location
    * RepositoryType
    * ResolvedImageUri
  * Concurrency
    * ReservedConcurrentExecutions
  * Configuration
    * CodeSha256
    * CodeSize
    * DeadLetterConfig
      * TargetArn
    * Description
    * Environment
      * Error
        * ErrorCode
        * Message
      * Variables
    * FileSystemConfigs
      * items [FileSystemConfig](#filesystemconfig)
    * FunctionArn
    * FunctionName
    * Handler
    * ImageConfigResponse
      * Error
        * ErrorCode
        * Message
      * ImageConfig
        * Command
          * items [String](#string)
        * EntryPoint
          * items [String](#string)
        * WorkingDirectory
    * KMSKeyArn
    * LastModified
    * LastUpdateStatus
    * LastUpdateStatusReason
    * LastUpdateStatusReasonCode
    * Layers
      * items [Layer](#layer)
    * MasterArn
    * MemorySize
    * PackageType
    * RevisionId
    * Role
    * Runtime
    * SigningJobArn
    * SigningProfileVersionArn
    * State
    * StateReason
    * StateReasonCode
    * Timeout
    * TracingConfig
      * Mode
    * Version
    * VpcConfig
      * SecurityGroupIds
        * items [SecurityGroupId](#securitygroupid)
      * SubnetIds
        * items [SubnetId](#subnetid)
      * VpcId
  * Tags

### GetLayerVersionByArnRequest
* GetLayerVersionByArnRequest `object`

### GetLayerVersionPolicyRequest
* GetLayerVersionPolicyRequest `object`

### GetLayerVersionPolicyResponse
* GetLayerVersionPolicyResponse `object`
  * Policy
  * RevisionId

### GetLayerVersionRequest
* GetLayerVersionRequest `object`

### GetLayerVersionResponse
* GetLayerVersionResponse `object`
  * CompatibleRuntimes
    * items [Runtime](#runtime)
  * Content
    * CodeSha256
    * CodeSize
    * Location
    * SigningJobArn
    * SigningProfileVersionArn
  * CreatedDate
  * Description
  * LayerArn
  * LayerVersionArn
  * LicenseInfo
  * Version

### GetPolicyRequest
* GetPolicyRequest `object`

### GetPolicyResponse
* GetPolicyResponse `object`
  * Policy
  * RevisionId

### GetProvisionedConcurrencyConfigRequest
* GetProvisionedConcurrencyConfigRequest `object`

### GetProvisionedConcurrencyConfigResponse
* GetProvisionedConcurrencyConfigResponse `object`
  * AllocatedProvisionedConcurrentExecutions
  * AvailableProvisionedConcurrentExecutions
  * LastModified
  * RequestedProvisionedConcurrentExecutions
  * Status
  * StatusReason

### Handler
* Handler `string`

### HttpStatus
* HttpStatus `integer`

### ImageConfig
* ImageConfig `object`: Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container settings</a>. 
  * Command
    * items [String](#string)
  * EntryPoint
    * items [String](#string)
  * WorkingDirectory

### ImageConfigError
* ImageConfigError `object`: Error response to GetFunctionConfiguration.
  * ErrorCode
  * Message

### ImageConfigResponse
* ImageConfigResponse `object`: Response to GetFunctionConfiguration request.
  * Error
    * ErrorCode
    * Message
  * ImageConfig
    * Command
      * items [String](#string)
    * EntryPoint
      * items [String](#string)
    * WorkingDirectory

### Integer
* Integer `integer`

### InvalidCodeSignatureException


### InvalidParameterValueException


### InvalidRequestContentException


### InvalidRuntimeException


### InvalidSecurityGroupIDException


### InvalidSubnetIDException


### InvalidZipFileException


### InvocationRequest
* InvocationRequest `object`
  * Payload

### InvocationResponse
* InvocationResponse `object`
  * Payload
  * StatusCode

### InvocationType
* InvocationType `string` (values: Event, RequestResponse, DryRun)

### InvokeAsyncRequest
* InvokeAsyncRequest `object`
  * InvokeArgs **required**

### InvokeAsyncResponse
* InvokeAsyncResponse `object`: A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. 
  * Status

### KMSAccessDeniedException


### KMSDisabledException


### KMSInvalidStateException


### KMSKeyArn
* KMSKeyArn `string`

### KMSNotFoundException


### LastUpdateStatus
* LastUpdateStatus `string` (values: Successful, Failed, InProgress)

### LastUpdateStatusReason
* LastUpdateStatusReason `string`

### LastUpdateStatusReasonCode
* LastUpdateStatusReasonCode `string` (values: EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage)

### Layer
* Layer `object`: An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.
  * Arn
  * CodeSize
  * SigningJobArn
  * SigningProfileVersionArn

### LayerArn
* LayerArn `string`

### LayerList
* LayerList `array`
  * items [LayerVersionArn](#layerversionarn)

### LayerName
* LayerName `string`

### LayerPermissionAllowedAction
* LayerPermissionAllowedAction `string`

### LayerPermissionAllowedPrincipal
* LayerPermissionAllowedPrincipal `string`

### LayerVersionArn
* LayerVersionArn `string`

### LayerVersionContentInput
* LayerVersionContentInput `object`: A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
  * S3Bucket
  * S3Key
  * S3ObjectVersion
  * ZipFile

### LayerVersionContentOutput
* LayerVersionContentOutput `object`: Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.
  * CodeSha256
  * CodeSize
  * Location
  * SigningJobArn
  * SigningProfileVersionArn

### LayerVersionNumber
* LayerVersionNumber `integer`

### LayerVersionsList
* LayerVersionsList `array`
  * items [LayerVersionsListItem](#layerversionslistitem)

### LayerVersionsListItem
* LayerVersionsListItem `object`: Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.
  * CompatibleRuntimes
    * items [Runtime](#runtime)
  * CreatedDate
  * Description
  * LayerVersionArn
  * LicenseInfo
  * Version

### LayersList
* LayersList `array`
  * items [LayersListItem](#layerslistitem)

### LayersListItem
* LayersListItem `object`: Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.
  * LatestMatchingVersion
    * CompatibleRuntimes
      * items [Runtime](#runtime)
    * CreatedDate
    * Description
    * LayerVersionArn
    * LicenseInfo
    * Version
  * LayerArn
  * LayerName

### LayersReferenceList
* LayersReferenceList `array`
  * items [Layer](#layer)

### LicenseInfo
* LicenseInfo `string`

### ListAliasesRequest
* ListAliasesRequest `object`

### ListAliasesResponse
* ListAliasesResponse `object`
  * Aliases
    * items [AliasConfiguration](#aliasconfiguration)
  * NextMarker

### ListCodeSigningConfigsRequest
* ListCodeSigningConfigsRequest `object`

### ListCodeSigningConfigsResponse
* ListCodeSigningConfigsResponse `object`
  * CodeSigningConfigs
    * items [CodeSigningConfig](#codesigningconfig)
  * NextMarker

### ListEventSourceMappingsRequest
* ListEventSourceMappingsRequest `object`

### ListEventSourceMappingsResponse
* ListEventSourceMappingsResponse `object`
  * EventSourceMappings
    * items [EventSourceMappingConfiguration](#eventsourcemappingconfiguration)
  * NextMarker

### ListFunctionEventInvokeConfigsRequest
* ListFunctionEventInvokeConfigsRequest `object`

### ListFunctionEventInvokeConfigsResponse
* ListFunctionEventInvokeConfigsResponse `object`
  * FunctionEventInvokeConfigs
    * items [FunctionEventInvokeConfig](#functioneventinvokeconfig)
  * NextMarker

### ListFunctionsByCodeSigningConfigRequest
* ListFunctionsByCodeSigningConfigRequest `object`

### ListFunctionsByCodeSigningConfigResponse
* ListFunctionsByCodeSigningConfigResponse `object`
  * FunctionArns
    * items [FunctionArn](#functionarn)
  * NextMarker

### ListFunctionsRequest
* ListFunctionsRequest `object`

### ListFunctionsResponse
* ListFunctionsResponse `object`: A list of Lambda functions.
  * Functions
    * items [FunctionConfiguration](#functionconfiguration)
  * NextMarker

### ListLayerVersionsRequest
* ListLayerVersionsRequest `object`

### ListLayerVersionsResponse
* ListLayerVersionsResponse `object`
  * LayerVersions
    * items [LayerVersionsListItem](#layerversionslistitem)
  * NextMarker

### ListLayersRequest
* ListLayersRequest `object`

### ListLayersResponse
* ListLayersResponse `object`
  * Layers
    * items [LayersListItem](#layerslistitem)
  * NextMarker

### ListProvisionedConcurrencyConfigsRequest
* ListProvisionedConcurrencyConfigsRequest `object`

### ListProvisionedConcurrencyConfigsResponse
* ListProvisionedConcurrencyConfigsResponse `object`
  * NextMarker
  * ProvisionedConcurrencyConfigs
    * items [ProvisionedConcurrencyConfigListItem](#provisionedconcurrencyconfiglistitem)

### ListTagsRequest
* ListTagsRequest `object`

### ListTagsResponse
* ListTagsResponse `object`
  * Tags

### ListVersionsByFunctionRequest
* ListVersionsByFunctionRequest `object`

### ListVersionsByFunctionResponse
* ListVersionsByFunctionResponse `object`
  * NextMarker
  * Versions
    * items [FunctionConfiguration](#functionconfiguration)

### LocalMountPath
* LocalMountPath `string`

### LogType
* LogType `string` (values: None, Tail)

### Long
* Long `integer`

### MasterRegion
* MasterRegion `string`

### MaxFunctionEventInvokeConfigListItems
* MaxFunctionEventInvokeConfigListItems `integer`

### MaxLayerListItems
* MaxLayerListItems `integer`

### MaxListItems
* MaxListItems `integer`

### MaxProvisionedConcurrencyConfigListItems
* MaxProvisionedConcurrencyConfigListItems `integer`

### MaximumBatchingWindowInSeconds
* MaximumBatchingWindowInSeconds `integer`

### MaximumEventAgeInSeconds
* MaximumEventAgeInSeconds `integer`

### MaximumRecordAgeInSeconds
* MaximumRecordAgeInSeconds `integer`

### MaximumRetryAttempts
* MaximumRetryAttempts `integer`

### MaximumRetryAttemptsEventSourceMapping
* MaximumRetryAttemptsEventSourceMapping `integer`

### MemorySize
* MemorySize `integer`

### NameSpacedFunctionArn
* NameSpacedFunctionArn `string`

### NamespacedFunctionName
* NamespacedFunctionName `string`

### NamespacedStatementId
* NamespacedStatementId `string`

### NonNegativeInteger
* NonNegativeInteger `integer`

### OnFailure
* OnFailure `object`: A destination for events that failed processing.
  * Destination

### OnSuccess
* OnSuccess `object`: A destination for events that were processed successfully.
  * Destination

### OrganizationId
* OrganizationId `string`

### PackageType
* PackageType `string` (values: Zip, Image)

### ParallelizationFactor
* ParallelizationFactor `integer`

### PolicyLengthExceededException


### PositiveInteger
* PositiveInteger `integer`

### PreconditionFailedException


### Principal
* Principal `string`

### ProvisionedConcurrencyConfigList
* ProvisionedConcurrencyConfigList `array`
  * items [ProvisionedConcurrencyConfigListItem](#provisionedconcurrencyconfiglistitem)

### ProvisionedConcurrencyConfigListItem
* ProvisionedConcurrencyConfigListItem `object`: Details about the provisioned concurrency configuration for a function alias or version.
  * AllocatedProvisionedConcurrentExecutions
  * AvailableProvisionedConcurrentExecutions
  * FunctionArn
  * LastModified
  * RequestedProvisionedConcurrentExecutions
  * Status
  * StatusReason

### ProvisionedConcurrencyConfigNotFoundException


### ProvisionedConcurrencyStatusEnum
* ProvisionedConcurrencyStatusEnum `string` (values: IN_PROGRESS, READY, FAILED)

### PublishLayerVersionRequest
* PublishLayerVersionRequest `object`
  * CompatibleRuntimes
    * items [Runtime](#runtime)
  * Content **required**
    * S3Bucket
    * S3Key
    * S3ObjectVersion
    * ZipFile
  * Description
  * LicenseInfo

### PublishLayerVersionResponse
* PublishLayerVersionResponse `object`
  * CompatibleRuntimes
    * items [Runtime](#runtime)
  * Content
    * CodeSha256
    * CodeSize
    * Location
    * SigningJobArn
    * SigningProfileVersionArn
  * CreatedDate
  * Description
  * LayerArn
  * LayerVersionArn
  * LicenseInfo
  * Version

### PublishVersionRequest
* PublishVersionRequest `object`
  * CodeSha256
  * Description
  * RevisionId

### PutFunctionCodeSigningConfigRequest
* PutFunctionCodeSigningConfigRequest `object`
  * CodeSigningConfigArn **required**

### PutFunctionCodeSigningConfigResponse
* PutFunctionCodeSigningConfigResponse `object`
  * CodeSigningConfigArn **required**
  * FunctionName **required**

### PutFunctionConcurrencyRequest
* PutFunctionConcurrencyRequest `object`
  * ReservedConcurrentExecutions **required**

### PutFunctionEventInvokeConfigRequest
* PutFunctionEventInvokeConfigRequest `object`
  * DestinationConfig
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * MaximumEventAgeInSeconds
  * MaximumRetryAttempts

### PutProvisionedConcurrencyConfigRequest
* PutProvisionedConcurrencyConfigRequest `object`
  * ProvisionedConcurrentExecutions **required**

### PutProvisionedConcurrencyConfigResponse
* PutProvisionedConcurrencyConfigResponse `object`
  * AllocatedProvisionedConcurrentExecutions
  * AvailableProvisionedConcurrentExecutions
  * LastModified
  * RequestedProvisionedConcurrentExecutions
  * Status
  * StatusReason

### Qualifier
* Qualifier `string`

### Queue
* Queue `string`

### Queues
* Queues `array`
  * items [Queue](#queue)

### RemoveLayerVersionPermissionRequest
* RemoveLayerVersionPermissionRequest `object`

### RemovePermissionRequest
* RemovePermissionRequest `object`

### RequestTooLargeException


### ReservedConcurrentExecutions
* ReservedConcurrentExecutions `integer`

### ResourceArn
* ResourceArn `string`

### ResourceConflictException


### ResourceInUseException


### ResourceNotFoundException


### ResourceNotReadyException


### RoleArn
* RoleArn `string`

### Runtime
* Runtime `string` (values: nodejs, nodejs4.3, nodejs6.10, nodejs8.10, nodejs10.x, nodejs12.x, java8, java8.al2, java11, python2.7, python3.6, python3.7, python3.8, dotnetcore1.0, dotnetcore2.0, dotnetcore2.1, dotnetcore3.1, nodejs4.3-edge, go1.x, ruby2.5, ruby2.7, provided, provided.al2)

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

### SelfManagedEventSource
* SelfManagedEventSource `object`: The Self-Managed Apache Kafka cluster for your event source.
  * Endpoints

### SensitiveString
* SensitiveString `string`

### ServiceException


### SigningProfileVersionArns
* SigningProfileVersionArns `array`
  * items [Arn](#arn)

### SourceAccessConfiguration
* SourceAccessConfiguration `object`: You can specify the authentication protocol, or the VPC components to secure access to your event source.
  * Type
  * URI

### SourceAccessConfigurations
* SourceAccessConfigurations `array`
  * items [SourceAccessConfiguration](#sourceaccessconfiguration)

### SourceAccessType
* SourceAccessType `string` (values: BASIC_AUTH, VPC_SUBNET, VPC_SECURITY_GROUP, SASL_SCRAM_512_AUTH, SASL_SCRAM_256_AUTH)

### SourceOwner
* SourceOwner `string`

### State
* State `string` (values: Pending, Active, Inactive, Failed)

### StateReason
* StateReason `string`

### StateReasonCode
* StateReasonCode `string` (values: Idle, Creating, Restoring, EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage)

### StatementId
* StatementId `string`

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubnetIPAddressLimitReachedException


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
  * Tags **required**

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### Timeout
* Timeout `integer`

### Timestamp
* Timestamp `string`

### TooManyRequestsException


### Topic
* Topic `string`

### Topics
* Topics `array`
  * items [Topic](#topic)

### TracingConfig
* TracingConfig `object`: The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
  * Mode

### TracingConfigResponse
* TracingConfigResponse `object`: The function's AWS X-Ray tracing configuration.
  * Mode

### TracingMode
* TracingMode `string` (values: Active, PassThrough)

### TumblingWindowInSeconds
* TumblingWindowInSeconds `integer`

### URI
* URI `string`

### UnreservedConcurrentExecutions
* UnreservedConcurrentExecutions `integer`

### UnsupportedMediaTypeException


### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateAliasRequest
* UpdateAliasRequest `object`
  * Description
  * FunctionVersion
  * RevisionId
  * RoutingConfig
    * AdditionalVersionWeights

### UpdateCodeSigningConfigRequest
* UpdateCodeSigningConfigRequest `object`
  * AllowedPublishers
    * SigningProfileVersionArns **required**
      * items [Arn](#arn)
  * CodeSigningPolicies
    * UntrustedArtifactOnDeployment
  * Description

### UpdateCodeSigningConfigResponse
* UpdateCodeSigningConfigResponse `object`
  * CodeSigningConfig **required**
    * AllowedPublishers **required**
      * SigningProfileVersionArns **required**
        * items [Arn](#arn)
    * CodeSigningConfigArn **required**
    * CodeSigningConfigId **required**
    * CodeSigningPolicies **required**
      * UntrustedArtifactOnDeployment
    * Description
    * LastModified **required**

### UpdateEventSourceMappingRequest
* UpdateEventSourceMappingRequest `object`
  * BatchSize
  * BisectBatchOnFunctionError
  * DestinationConfig
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * Enabled
  * FunctionName
  * FunctionResponseTypes
    * items [FunctionResponseType](#functionresponsetype)
  * MaximumBatchingWindowInSeconds
  * MaximumRecordAgeInSeconds
  * MaximumRetryAttempts
  * ParallelizationFactor
  * SourceAccessConfigurations
    * items [SourceAccessConfiguration](#sourceaccessconfiguration)
  * TumblingWindowInSeconds

### UpdateFunctionCodeRequest
* UpdateFunctionCodeRequest `object`
  * DryRun
  * ImageUri
  * Publish
  * RevisionId
  * S3Bucket
  * S3Key
  * S3ObjectVersion
  * ZipFile

### UpdateFunctionConfigurationRequest
* UpdateFunctionConfigurationRequest `object`
  * DeadLetterConfig
    * TargetArn
  * Description
  * Environment
    * Variables
  * FileSystemConfigs
    * items [FileSystemConfig](#filesystemconfig)
  * Handler
  * ImageConfig
    * Command
      * items [String](#string)
    * EntryPoint
      * items [String](#string)
    * WorkingDirectory
  * KMSKeyArn
  * Layers
    * items [LayerVersionArn](#layerversionarn)
  * MemorySize
  * RevisionId
  * Role
  * Runtime
  * Timeout
  * TracingConfig
    * Mode
  * VpcConfig
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)

### UpdateFunctionEventInvokeConfigRequest
* UpdateFunctionEventInvokeConfigRequest `object`
  * DestinationConfig
    * OnFailure
      * Destination
    * OnSuccess
      * Destination
  * MaximumEventAgeInSeconds
  * MaximumRetryAttempts

### Version
* Version `string`

### VpcConfig
* VpcConfig `object`: The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds
    * items [SubnetId](#subnetid)

### VpcConfigResponse
* VpcConfigResponse `object`: The VPC security groups and subnets that are attached to a Lambda function.
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds
    * items [SubnetId](#subnetid)
  * VpcId

### VpcId
* VpcId `string`

### Weight
* Weight `number`

### WorkingDirectory
* WorkingDirectory `string`


