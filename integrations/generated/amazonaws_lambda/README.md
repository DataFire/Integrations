# @datafire/amazonaws_lambda

Client library for AWS Lambda

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_lambda
```

```js
let datafire = require('datafire');
let amazonaws_lambda = require('@datafire/amazonaws_lambda').actions;
let context = new datafire.Context();

amazonaws_lambda.InvokeAsync({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Lambda</fullname> <p> <b>Overview</b> </p> <p>This is the <i>AWS Lambda API Reference</i>. The AWS Lambda Developer Guide provides additional information. For the service overview, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is AWS Lambda</a>, and for information about how the service works, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the <i>AWS Lambda Developer Guide</i>.</p>

## Actions
### InvokeAsync



```js
amazonaws_lambda.InvokeAsync({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**

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

### CreateFunction



```js
amazonaws_lambda.CreateFunction({}, context)
```

#### Parameters

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

### UpdateFunctionCode



```js
amazonaws_lambda.UpdateFunctionCode({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**

### UpdateFunctionConfiguration



```js
amazonaws_lambda.UpdateFunctionConfiguration({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**

### Invoke



```js
amazonaws_lambda.Invoke({
  "FunctionName": ""
}, context)
```

#### Parameters
* FunctionName (string) **required**

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

### GetAccountSettings



```js
amazonaws_lambda.GetAccountSettings({}, context)
```

#### Parameters

### UntagResource



```js
amazonaws_lambda.UntagResource({
  "ARN": ""
}, context)
```

#### Parameters
* ARN (string) **required**

