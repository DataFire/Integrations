# @datafire/amazonaws_events

Client library for Amazon CloudWatch Events

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_events
```

```js
let datafire = require('datafire');
let amazonaws_events = require('@datafire/amazonaws_events').actions;
let context = new datafire.Context();

amazonaws_events.DeleteRule({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon CloudWatch Events helps you to respond to state changes in your AWS resources. When your resources change state, they automatically send events into an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a pre-determined schedule. For example, you can configure rules to:</p> <ul> <li> <p>Automatically invoke an AWS Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.</p> </li> <li> <p>Direct specific API records from CloudTrail to an Amazon Kinesis stream for detailed analysis of potential security or availability risks.</p> </li> <li> <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.</p> </li> </ul> <p>For more information about the features of Amazon CloudWatch Events, see the <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/events">Amazon CloudWatch Events User Guide</a>.</p>

## Actions
### DeleteRule



```js
amazonaws_events.DeleteRule({}, context)
```

#### Parameters

### DescribeRule



```js
amazonaws_events.DescribeRule({}, context)
```

#### Parameters

### DisableRule



```js
amazonaws_events.DisableRule({}, context)
```

#### Parameters

### EnableRule



```js
amazonaws_events.EnableRule({}, context)
```

#### Parameters

### ListRuleNamesByTarget



```js
amazonaws_events.ListRuleNamesByTarget({}, context)
```

#### Parameters

### ListRules



```js
amazonaws_events.ListRules({}, context)
```

#### Parameters

### ListTargetsByRule



```js
amazonaws_events.ListTargetsByRule({}, context)
```

#### Parameters

### PutEvents



```js
amazonaws_events.PutEvents({}, context)
```

#### Parameters

### PutRule



```js
amazonaws_events.PutRule({}, context)
```

#### Parameters

### PutTargets



```js
amazonaws_events.PutTargets({}, context)
```

#### Parameters

### RemoveTargets



```js
amazonaws_events.RemoveTargets({}, context)
```

#### Parameters

### TestEventPattern



```js
amazonaws_events.TestEventPattern({}, context)
```

#### Parameters

