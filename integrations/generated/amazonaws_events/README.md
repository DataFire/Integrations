# @datafire/amazonaws_events

Client library for Amazon CloudWatch Events

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_events
```
```js
let amazonaws_events = require('@datafire/amazonaws_events').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_events.DeleteRule({
  "Name": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * Name **required** [RuleName](#rulename)

#### Output
*Output schema unknown*

### DescribeEventBus



```js
amazonaws_events.DescribeEventBus({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeEventBusResponse](#describeeventbusresponse)

### DescribeRule



```js
amazonaws_events.DescribeRule({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [RuleName](#rulename)

#### Output
* output [DescribeRuleResponse](#describeruleresponse)

### DisableRule



```js
amazonaws_events.DisableRule({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [RuleName](#rulename)

#### Output
*Output schema unknown*

### EnableRule



```js
amazonaws_events.EnableRule({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [RuleName](#rulename)

#### Output
*Output schema unknown*

### ListRuleNamesByTarget



```js
amazonaws_events.ListRuleNamesByTarget({
  "TargetArn": ""
}, context)
```

#### Input
* input `object`
  * Limit [LimitMax100](#limitmax100)
  * NextToken [NextToken](#nexttoken)
  * TargetArn **required** [TargetArn](#targetarn)

#### Output
* output [ListRuleNamesByTargetResponse](#listrulenamesbytargetresponse)

### ListRules



```js
amazonaws_events.ListRules({}, context)
```

#### Input
* input `object`
  * Limit [LimitMax100](#limitmax100)
  * NamePrefix [RuleName](#rulename)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListRulesResponse](#listrulesresponse)

### ListTargetsByRule



```js
amazonaws_events.ListTargetsByRule({
  "Rule": ""
}, context)
```

#### Input
* input `object`
  * Limit [LimitMax100](#limitmax100)
  * NextToken [NextToken](#nexttoken)
  * Rule **required** [RuleName](#rulename)

#### Output
* output [ListTargetsByRuleResponse](#listtargetsbyruleresponse)

### PutEvents



```js
amazonaws_events.PutEvents({
  "Entries": []
}, context)
```

#### Input
* input `object`
  * Entries **required** [PutEventsRequestEntryList](#puteventsrequestentrylist)

#### Output
* output [PutEventsResponse](#puteventsresponse)

### PutPermission



```js
amazonaws_events.PutPermission({
  "Action": "",
  "Principal": "",
  "StatementId": ""
}, context)
```

#### Input
* input `object`
  * Action **required** [Action](#action)
  * Principal **required** [Principal](#principal)
  * StatementId **required** [StatementId](#statementid)

#### Output
*Output schema unknown*

### PutRule



```js
amazonaws_events.PutRule({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Description [RuleDescription](#ruledescription)
  * EventPattern [EventPattern](#eventpattern)
  * Name **required** [RuleName](#rulename)
  * RoleArn [RoleArn](#rolearn)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * State [RuleState](#rulestate)

#### Output
* output [PutRuleResponse](#putruleresponse)

### PutTargets



```js
amazonaws_events.PutTargets({
  "Rule": "",
  "Targets": []
}, context)
```

#### Input
* input `object`
  * Rule **required** [RuleName](#rulename)
  * Targets **required** [TargetList](#targetlist)

#### Output
* output [PutTargetsResponse](#puttargetsresponse)

### RemovePermission



```js
amazonaws_events.RemovePermission({
  "StatementId": ""
}, context)
```

#### Input
* input `object`
  * StatementId **required** [StatementId](#statementid)

#### Output
*Output schema unknown*

### RemoveTargets



```js
amazonaws_events.RemoveTargets({
  "Rule": "",
  "Ids": []
}, context)
```

#### Input
* input `object`
  * Ids **required** [TargetIdList](#targetidlist)
  * Rule **required** [RuleName](#rulename)

#### Output
* output [RemoveTargetsResponse](#removetargetsresponse)

### TestEventPattern



```js
amazonaws_events.TestEventPattern({
  "EventPattern": "",
  "Event": ""
}, context)
```

#### Input
* input `object`
  * Event **required** [String](#string)
  * EventPattern **required** [EventPattern](#eventpattern)

#### Output
* output [TestEventPatternResponse](#testeventpatternresponse)



## Definitions

### Action
* Action `string`

### Arn
* Arn `string`

### BatchArrayProperties
* BatchArrayProperties `object`: The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
  * Size [Integer](#integer)

### BatchParameters
* BatchParameters `object`: The custom parameters to be used when the target is an AWS Batch job.
  * ArrayProperties [BatchArrayProperties](#batcharrayproperties)
  * JobDefinition **required** [String](#string)
  * JobName **required** [String](#string)
  * RetryStrategy [BatchRetryStrategy](#batchretrystrategy)

### BatchRetryStrategy
* BatchRetryStrategy `object`: The retry strategy to use for failed jobs, if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
  * Attempts [Integer](#integer)

### Boolean
* Boolean `boolean`

### ConcurrentModificationException
* ConcurrentModificationException `object`: There is concurrent modification on a rule or target.

### DeleteRuleRequest
* DeleteRuleRequest `object`
  * Name **required** [RuleName](#rulename)

### DescribeEventBusRequest
* DescribeEventBusRequest `object`

### DescribeEventBusResponse
* DescribeEventBusResponse `object`
  * Arn [String](#string)
  * Name [String](#string)
  * Policy [String](#string)

### DescribeRuleRequest
* DescribeRuleRequest `object`
  * Name **required** [RuleName](#rulename)

### DescribeRuleResponse
* DescribeRuleResponse `object`
  * Arn [RuleArn](#rulearn)
  * Description [RuleDescription](#ruledescription)
  * EventPattern [EventPattern](#eventpattern)
  * Name [RuleName](#rulename)
  * RoleArn [RoleArn](#rolearn)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * State [RuleState](#rulestate)

### DisableRuleRequest
* DisableRuleRequest `object`
  * Name **required** [RuleName](#rulename)

### EcsParameters
* EcsParameters `object`: The custom parameters to be used when the target is an Amazon ECS cluster.
  * TaskCount [LimitMin1](#limitmin1)
  * TaskDefinitionArn **required** [Arn](#arn)

### EnableRuleRequest
* EnableRuleRequest `object`
  * Name **required** [RuleName](#rulename)

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### EventId
* EventId `string`

### EventPattern
* EventPattern `string`

### EventResource
* EventResource `string`

### EventResourceList
* EventResourceList `array`
  * items [EventResource](#eventresource)

### EventTime
* EventTime `string`

### InputTransformer
* InputTransformer `object`: Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
  * InputPathsMap [TransformerPaths](#transformerpaths)
  * InputTemplate **required** [TransformerInput](#transformerinput)

### InputTransformerPathKey
* InputTransformerPathKey `string`

### Integer
* Integer `integer`

### InternalException
* InternalException `object`: This exception occurs due to unexpected causes.

### InvalidEventPatternException
* InvalidEventPatternException `object`: The event pattern is not valid.

### KinesisParameters
* KinesisParameters `object`: This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.
  * PartitionKeyPath **required** [TargetPartitionKeyPath](#targetpartitionkeypath)

### LimitExceededException
* LimitExceededException `object`: You tried to create more rules or add more targets to a rule than is allowed.

### LimitMax100
* LimitMax100 `integer`

### LimitMin1
* LimitMin1 `integer`

### ListRuleNamesByTargetRequest
* ListRuleNamesByTargetRequest `object`
  * Limit [LimitMax100](#limitmax100)
  * NextToken [NextToken](#nexttoken)
  * TargetArn **required** [TargetArn](#targetarn)

### ListRuleNamesByTargetResponse
* ListRuleNamesByTargetResponse `object`
  * NextToken [NextToken](#nexttoken)
  * RuleNames [RuleNameList](#rulenamelist)

### ListRulesRequest
* ListRulesRequest `object`
  * Limit [LimitMax100](#limitmax100)
  * NamePrefix [RuleName](#rulename)
  * NextToken [NextToken](#nexttoken)

### ListRulesResponse
* ListRulesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Rules [RuleResponseList](#ruleresponselist)

### ListTargetsByRuleRequest
* ListTargetsByRuleRequest `object`
  * Limit [LimitMax100](#limitmax100)
  * NextToken [NextToken](#nexttoken)
  * Rule **required** [RuleName](#rulename)

### ListTargetsByRuleResponse
* ListTargetsByRuleResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Targets [TargetList](#targetlist)

### MessageGroupId
* MessageGroupId `string`

### NextToken
* NextToken `string`

### PolicyLengthExceededException
* PolicyLengthExceededException `object`: The event bus policy is too long. For more information, see the limits.

### Principal
* Principal `string`

### PutEventsRequest
* PutEventsRequest `object`
  * Entries **required** [PutEventsRequestEntryList](#puteventsrequestentrylist)

### PutEventsRequestEntry
* PutEventsRequestEntry `object`: Represents an event to be submitted.
  * Detail [String](#string)
  * DetailType [String](#string)
  * Resources [EventResourceList](#eventresourcelist)
  * Source [String](#string)
  * Time [EventTime](#eventtime)

### PutEventsRequestEntryList
* PutEventsRequestEntryList `array`
  * items [PutEventsRequestEntry](#puteventsrequestentry)

### PutEventsResponse
* PutEventsResponse `object`
  * Entries [PutEventsResultEntryList](#puteventsresultentrylist)
  * FailedEntryCount [Integer](#integer)

### PutEventsResultEntry
* PutEventsResultEntry `object`: Represents an event that failed to be submitted.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * EventId [EventId](#eventid)

### PutEventsResultEntryList
* PutEventsResultEntryList `array`
  * items [PutEventsResultEntry](#puteventsresultentry)

### PutPermissionRequest
* PutPermissionRequest `object`
  * Action **required** [Action](#action)
  * Principal **required** [Principal](#principal)
  * StatementId **required** [StatementId](#statementid)

### PutRuleRequest
* PutRuleRequest `object`
  * Description [RuleDescription](#ruledescription)
  * EventPattern [EventPattern](#eventpattern)
  * Name **required** [RuleName](#rulename)
  * RoleArn [RoleArn](#rolearn)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * State [RuleState](#rulestate)

### PutRuleResponse
* PutRuleResponse `object`
  * RuleArn [RuleArn](#rulearn)

### PutTargetsRequest
* PutTargetsRequest `object`
  * Rule **required** [RuleName](#rulename)
  * Targets **required** [TargetList](#targetlist)

### PutTargetsResponse
* PutTargetsResponse `object`
  * FailedEntries [PutTargetsResultEntryList](#puttargetsresultentrylist)
  * FailedEntryCount [Integer](#integer)

### PutTargetsResultEntry
* PutTargetsResultEntry `object`: Represents a target that failed to be added to a rule.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * TargetId [TargetId](#targetid)

### PutTargetsResultEntryList
* PutTargetsResultEntryList `array`
  * items [PutTargetsResultEntry](#puttargetsresultentry)

### RemovePermissionRequest
* RemovePermissionRequest `object`
  * StatementId **required** [StatementId](#statementid)

### RemoveTargetsRequest
* RemoveTargetsRequest `object`
  * Ids **required** [TargetIdList](#targetidlist)
  * Rule **required** [RuleName](#rulename)

### RemoveTargetsResponse
* RemoveTargetsResponse `object`
  * FailedEntries [RemoveTargetsResultEntryList](#removetargetsresultentrylist)
  * FailedEntryCount [Integer](#integer)

### RemoveTargetsResultEntry
* RemoveTargetsResultEntry `object`: Represents a target that failed to be removed from a rule.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [ErrorMessage](#errormessage)
  * TargetId [TargetId](#targetid)

### RemoveTargetsResultEntryList
* RemoveTargetsResultEntryList `array`
  * items [RemoveTargetsResultEntry](#removetargetsresultentry)

### ResourceNotFoundException
* ResourceNotFoundException `object`: An entity that you specified does not exist.

### RoleArn
* RoleArn `string`

### Rule
* Rule `object`: Contains information about a rule in Amazon CloudWatch Events.
  * Arn [RuleArn](#rulearn)
  * Description [RuleDescription](#ruledescription)
  * EventPattern [EventPattern](#eventpattern)
  * Name [RuleName](#rulename)
  * RoleArn [RoleArn](#rolearn)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * State [RuleState](#rulestate)

### RuleArn
* RuleArn `string`

### RuleDescription
* RuleDescription `string`

### RuleName
* RuleName `string`

### RuleNameList
* RuleNameList `array`
  * items [RuleName](#rulename)

### RuleResponseList
* RuleResponseList `array`
  * items [Rule](#rule)

### RuleState
* RuleState `string` (values: ENABLED, DISABLED)

### RunCommandParameters
* RunCommandParameters `object`: This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. 
  * RunCommandTargets **required** [RunCommandTargets](#runcommandtargets)

### RunCommandTarget
* RunCommandTarget `object`: Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
  * Key **required** [RunCommandTargetKey](#runcommandtargetkey)
  * Values **required** [RunCommandTargetValues](#runcommandtargetvalues)

### RunCommandTargetKey
* RunCommandTargetKey `string`

### RunCommandTargetValue
* RunCommandTargetValue `string`

### RunCommandTargetValues
* RunCommandTargetValues `array`
  * items [RunCommandTargetValue](#runcommandtargetvalue)

### RunCommandTargets
* RunCommandTargets `array`
  * items [RunCommandTarget](#runcommandtarget)

### ScheduleExpression
* ScheduleExpression `string`

### SqsParameters
* SqsParameters `object`: This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
  * MessageGroupId [MessageGroupId](#messagegroupid)

### StatementId
* StatementId `string`

### String
* String `string`

### Target
* Target `object`: Targets are the resources to be invoked when a rule is triggered. Target types include EC2 instances, AWS Lambda functions, Amazon Kinesis streams, Amazon ECS tasks, AWS Step Functions state machines, Run Command, and built-in targets.
  * Arn **required** [TargetArn](#targetarn)
  * BatchParameters [BatchParameters](#batchparameters)
  * EcsParameters [EcsParameters](#ecsparameters)
  * Id **required** [TargetId](#targetid)
  * Input [TargetInput](#targetinput)
  * InputPath [TargetInputPath](#targetinputpath)
  * InputTransformer [InputTransformer](#inputtransformer)
  * KinesisParameters [KinesisParameters](#kinesisparameters)
  * RoleArn [RoleArn](#rolearn)
  * RunCommandParameters [RunCommandParameters](#runcommandparameters)
  * SqsParameters [SqsParameters](#sqsparameters)

### TargetArn
* TargetArn `string`

### TargetId
* TargetId `string`

### TargetIdList
* TargetIdList `array`
  * items [TargetId](#targetid)

### TargetInput
* TargetInput `string`

### TargetInputPath
* TargetInputPath `string`

### TargetList
* TargetList `array`
  * items [Target](#target)

### TargetPartitionKeyPath
* TargetPartitionKeyPath `string`

### TestEventPatternRequest
* TestEventPatternRequest `object`
  * Event **required** [String](#string)
  * EventPattern **required** [EventPattern](#eventpattern)

### TestEventPatternResponse
* TestEventPatternResponse `object`
  * Result [Boolean](#boolean)

### TransformerInput
* TransformerInput `string`

### TransformerPaths
* TransformerPaths `array`
  * items `object`
    * key [InputTransformerPathKey](#inputtransformerpathkey)
    * value [TargetInputPath](#targetinputpath)


