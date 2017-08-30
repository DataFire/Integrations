# @datafire/amazonaws_lambda

Client library for AWS Lambda

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_lambda
```

```js
let datafire = require('datafire');
let amazonaws_lambda = require('@datafire/amazonaws_lambda').create();

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

#### Parameters
* FunctionName (string) **required**
* InvokeArgs (string) **required**

### ListEventSourceMappings



```js
amazonaws_lambda.ListEventSourceMappings({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### UpdateEventSourceMapping



```js
amazonaws_lambda.UpdateEventSourceMapping({
  "UUID": ""
}, context)
```

#### Parameters
* UUID (string) **required**
* BatchSize (integer)
* Enabled (boolean)
* FunctionName (string)

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

#### Parameters
* Code (object) **required** - The code for the Lambda function.
* DeadLetterConfig (object) - The parent object that contains the target ARN (Amazon Resource Name) of an Amazon SQS queue or Amazon SNS topic.
* Description (string)
* Environment (object) - The parent object that contains your environment's configuration settings.
* FunctionName (string) **required**
* Handler (string) **required**
* KMSKeyArn (string)
* MemorySize (integer)
* Publish (boolean)
* Role (string) **required**
* Runtime (string) **required**
* Tags (array)
* Timeout (integer)
* TracingConfig (object) - The parent object that contains your function's tracing settings.
* VpcConfig (object) - If your Lambda function accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and one subnet ID.

### ListFunctions



```js
amazonaws_lambda.ListFunctions({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### GetFunction



```js
amazonaws_lambda.GetFunction({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**

### ListAliases



```js
amazonaws_lambda.ListAliases({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**

### UpdateAlias



```js
amazonaws_lambda.UpdateAlias({
  "FunctionName": "",
  "Name": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**
* Name (string) **required**
* Description (string)
* FunctionVersion (string)

### UpdateFunctionCode



```js
amazonaws_lambda.UpdateFunctionCode({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**
* DryRun (boolean)
* Publish (boolean)
* S3Bucket (string)
* S3Key (string)
* S3ObjectVersion (string)
* ZipFile (string)

### UpdateFunctionConfiguration



```js
amazonaws_lambda.UpdateFunctionConfiguration({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**
* DeadLetterConfig (object) - The parent object that contains the target ARN (Amazon Resource Name) of an Amazon SQS queue or Amazon SNS topic.
* Description (string)
* Environment (object) - The parent object that contains your environment's configuration settings.
* Handler (string)
* KMSKeyArn (string)
* MemorySize (integer)
* Role (string)
* Runtime (string)
* Timeout (integer)
* TracingConfig (object) - The parent object that contains your function's tracing settings.
* VpcConfig (object) - If your Lambda function accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and one subnet ID.

### Invoke



```js
amazonaws_lambda.Invoke({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**
* Payload (string)

### GetPolicy



```js
amazonaws_lambda.GetPolicy({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**

### RemovePermission



```js
amazonaws_lambda.RemovePermission({
  "FunctionName": "",
  "StatementId": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**
* StatementId (string) **required**

### PublishVersion



```js
amazonaws_lambda.PublishVersion({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**
* CodeSha256 (string)
* Description (string)

### GetAccountSettings



```js
amazonaws_lambda.GetAccountSettings({}, context)
```

#### Parameters
*This action has no parameters*

### UntagResource



```js
amazonaws_lambda.UntagResource({
  "ARN": ""
}, context)
```

#### Parameters
* ARN (string) **required**

