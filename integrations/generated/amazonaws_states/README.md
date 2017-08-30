# @datafire/amazonaws_states

Client library for AWS Step Functions

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_states
```

```js
let datafire = require('datafire');
let amazonaws_states = require('@datafire/amazonaws_states').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_states.CreateActivity({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Step Functions</fullname> <p>AWS Step Functions is a web service that enables you to coordinate the components of distributed applications and microservices using visual workflows. You build applications from individual components that each perform a discrete function, or <i>task</i>, allowing you to scale and change applications quickly. Step Functions provides a graphical console to visualize the components of your application as a series of steps. It automatically triggers and tracks each step, and retries when there are errors, so your application executes in order and as expected, every time. Step Functions logs the state of each step, so when things do go wrong, you can diagnose and debug problems quickly.</p> <p>Step Functions manages the operations and underlying infrastructure for you to ensure your application is available at any scale. You can run tasks on the AWS cloud, on your own servers, or an any system that has access to AWS. Step Functions can be accessed and used with the Step Functions console, the AWS SDKs (included with your Beta release invitation email), or an HTTP API (the subject of this document).</p>

## Actions
### CreateActivity



```js
amazonaws_states.CreateActivity({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### CreateStateMachine



```js
amazonaws_states.CreateStateMachine({
  "name": "",
  "definition": "",
  "roleArn": ""
}, context)
```

#### Parameters
* definition (string) **required**
* name (string) **required**
* roleArn (string) **required**

### DeleteActivity



```js
amazonaws_states.DeleteActivity({
  "activityArn": ""
}, context)
```

#### Parameters
* activityArn (string) **required**

### DeleteStateMachine



```js
amazonaws_states.DeleteStateMachine({
  "stateMachineArn": ""
}, context)
```

#### Parameters
* stateMachineArn (string) **required**

### DescribeActivity



```js
amazonaws_states.DescribeActivity({
  "activityArn": ""
}, context)
```

#### Parameters
* activityArn (string) **required**

### DescribeExecution



```js
amazonaws_states.DescribeExecution({
  "executionArn": ""
}, context)
```

#### Parameters
* executionArn (string) **required**

### DescribeStateMachine



```js
amazonaws_states.DescribeStateMachine({
  "stateMachineArn": ""
}, context)
```

#### Parameters
* stateMachineArn (string) **required**

### GetActivityTask



```js
amazonaws_states.GetActivityTask({
  "activityArn": ""
}, context)
```

#### Parameters
* activityArn (string) **required**
* workerName (string)

### GetExecutionHistory



```js
amazonaws_states.GetExecutionHistory({
  "executionArn": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* executionArn (string) **required**
* maxResults (integer)
* nextToken (string)
* reverseOrder (boolean)

### ListActivities



```js
amazonaws_states.ListActivities({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)

### ListExecutions



```js
amazonaws_states.ListExecutions({
  "stateMachineArn": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)
* stateMachineArn (string) **required**
* statusFilter (string)

### ListStateMachines



```js
amazonaws_states.ListStateMachines({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)

### SendTaskFailure



```js
amazonaws_states.SendTaskFailure({
  "taskToken": ""
}, context)
```

#### Parameters
* cause (string)
* error (string)
* taskToken (string) **required**

### SendTaskHeartbeat



```js
amazonaws_states.SendTaskHeartbeat({
  "taskToken": ""
}, context)
```

#### Parameters
* taskToken (string) **required**

### SendTaskSuccess



```js
amazonaws_states.SendTaskSuccess({
  "taskToken": "",
  "output": ""
}, context)
```

#### Parameters
* output (string) **required**
* taskToken (string) **required**

### StartExecution



```js
amazonaws_states.StartExecution({
  "stateMachineArn": ""
}, context)
```

#### Parameters
* input (string)
* name (string)
* stateMachineArn (string) **required**

### StopExecution



```js
amazonaws_states.StopExecution({
  "executionArn": ""
}, context)
```

#### Parameters
* cause (string)
* error (string)
* executionArn (string) **required**

