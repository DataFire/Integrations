# @datafire/amazonaws_events

Client library for Amazon CloudWatch Events

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_events
```

```js
let datafire = require('datafire');
let amazonaws_events = require('@datafire/amazonaws_events').create();

amazonaws_events.DeleteRule({}).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon CloudWatch Events helps you to respond to state changes in your AWS resources. When your resources change state, they automatically send events into an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a pre-determined schedule. For example, you can configure rules to:</p> <ul> <li> <p>Automatically invoke an AWS Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.</p> </li> <li> <p>Direct specific API records from CloudTrail to an Amazon Kinesis stream for detailed analysis of potential security or availability risks.</p> </li> <li> <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.</p> </li> </ul> <p>For more information about the features of Amazon CloudWatch Events, see the <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/events">Amazon CloudWatch Events User Guide</a>.</p>

## Actions
### DeleteRule



```js
amazonaws_events.DeleteRule({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DescribeRule



```js
amazonaws_events.DescribeRule({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DisableRule



```js
amazonaws_events.DisableRule({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### EnableRule



```js
amazonaws_events.EnableRule({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### ListRuleNamesByTarget



```js
amazonaws_events.ListRuleNamesByTarget({
  "TargetArn": ""
}, context)
```

#### Parameters
* Limit (integer)
* NextToken (string)
* TargetArn (string) **required**

### ListRules



```js
amazonaws_events.ListRules({}, context)
```

#### Parameters
* Limit (integer)
* NamePrefix (string)
* NextToken (string)

### ListTargetsByRule



```js
amazonaws_events.ListTargetsByRule({
  "Rule": ""
}, context)
```

#### Parameters
* Limit (integer)
* NextToken (string)
* Rule (string) **required**

### PutEvents



```js
amazonaws_events.PutEvents({
  "Entries": []
}, context)
```

#### Parameters
* Entries (array) **required**

### PutRule



```js
amazonaws_events.PutRule({
  "Name": ""
}, context)
```

#### Parameters
* Description (string)
* EventPattern (string)
* Name (string) **required**
* RoleArn (string)
* ScheduleExpression (string)
* State (string)

### PutTargets



```js
amazonaws_events.PutTargets({
  "Rule": "",
  "Targets": []
}, context)
```

#### Parameters
* Rule (string) **required**
* Targets (array) **required**

### RemoveTargets



```js
amazonaws_events.RemoveTargets({
  "Rule": "",
  "Ids": []
}, context)
```

#### Parameters
* Ids (array) **required**
* Rule (string) **required**

### TestEventPattern



```js
amazonaws_events.TestEventPattern({
  "EventPattern": "",
  "Event": ""
}, context)
```

#### Parameters
* Event (string) **required**
* EventPattern (string) **required**

