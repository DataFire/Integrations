# @datafire/amazonaws_states

Client library for AWS Step Functions

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_states
```

```js
let datafire = require('datafire');
let amazonaws_states = require('@datafire/amazonaws_states').actions;
let context = new datafire.Context();

amazonaws_states.CreateActivity({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Step Functions</fullname> <p>AWS Step Functions is a web service that enables you to coordinate the components of distributed applications and microservices using visual workflows. You build applications from individual components that each perform a discrete function, or <i>task</i>, allowing you to scale and change applications quickly. Step Functions provides a graphical console to visualize the components of your application as a series of steps. It automatically triggers and tracks each step, and retries when there are errors, so your application executes in order and as expected, every time. Step Functions logs the state of each step, so when things do go wrong, you can diagnose and debug problems quickly.</p> <p>Step Functions manages the operations and underlying infrastructure for you to ensure your application is available at any scale. You can run tasks on the AWS cloud, on your own servers, or an any system that has access to AWS. Step Functions can be accessed and used with the Step Functions console, the AWS SDKs (included with your Beta release invitation email), or an HTTP API (the subject of this document).</p>

## Actions
### CreateActivity



```js
amazonaws_states.CreateActivity({}, context)
```


### CreateStateMachine



```js
amazonaws_states.CreateStateMachine({}, context)
```


### DeleteActivity



```js
amazonaws_states.DeleteActivity({}, context)
```


### DeleteStateMachine



```js
amazonaws_states.DeleteStateMachine({}, context)
```


### DescribeActivity



```js
amazonaws_states.DescribeActivity({}, context)
```


### DescribeExecution



```js
amazonaws_states.DescribeExecution({}, context)
```


### DescribeStateMachine



```js
amazonaws_states.DescribeStateMachine({}, context)
```


### GetActivityTask



```js
amazonaws_states.GetActivityTask({}, context)
```


### GetExecutionHistory



```js
amazonaws_states.GetExecutionHistory({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListActivities



```js
amazonaws_states.ListActivities({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListExecutions



```js
amazonaws_states.ListExecutions({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListStateMachines



```js
amazonaws_states.ListStateMachines({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### SendTaskFailure



```js
amazonaws_states.SendTaskFailure({}, context)
```


### SendTaskHeartbeat



```js
amazonaws_states.SendTaskHeartbeat({}, context)
```


### SendTaskSuccess



```js
amazonaws_states.SendTaskSuccess({}, context)
```


### StartExecution



```js
amazonaws_states.StartExecution({}, context)
```


### StopExecution



```js
amazonaws_states.StopExecution({}, context)
```


