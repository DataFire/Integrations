# @datafire/amazonaws_eventbridge

Client library for Amazon EventBridge

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_eventbridge
```
```js
let amazonaws_eventbridge = require('@datafire/amazonaws_eventbridge').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon EventBridge helps you to respond to state changes in your AWS resources. When your resources change state, they automatically send events into an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a predetermined schedule. For example, you can configure rules to:</p> <ul> <li> <p>Automatically invoke an AWS Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.</p> </li> <li> <p>Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.</p> </li> <li> <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.</p> </li> </ul> <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User Guide</a>.</p>

## Actions

### ActivateEventSource



```js
amazonaws_eventbridge.ActivateEventSource({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
*Output schema unknown*

### CancelReplay



```js
amazonaws_eventbridge.CancelReplay({
  "ReplayName": null
}, context)
```

#### Input
* input `object`
  * ReplayName **required**

#### Output
* output [CancelReplayResponse](#cancelreplayresponse)

### CreateArchive



```js
amazonaws_eventbridge.CreateArchive({
  "ArchiveName": null,
  "EventSourceArn": null
}, context)
```

#### Input
* input `object`
  * ArchiveName **required**
  * Description
  * EventPattern
  * EventSourceArn **required**
  * RetentionDays

#### Output
* output [CreateArchiveResponse](#createarchiveresponse)

### CreateEventBus



```js
amazonaws_eventbridge.CreateEventBus({
  "Name": null
}, context)
```

#### Input
* input `object`
  * EventSourceName
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateEventBusResponse](#createeventbusresponse)

### CreatePartnerEventSource



```js
amazonaws_eventbridge.CreatePartnerEventSource({
  "Name": null,
  "Account": null
}, context)
```

#### Input
* input `object`
  * Account **required**
  * Name **required**

#### Output
* output [CreatePartnerEventSourceResponse](#createpartnereventsourceresponse)

### DeactivateEventSource



```js
amazonaws_eventbridge.DeactivateEventSource({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
*Output schema unknown*

### DeleteArchive



```js
amazonaws_eventbridge.DeleteArchive({
  "ArchiveName": null
}, context)
```

#### Input
* input `object`
  * ArchiveName **required**

#### Output
* output [DeleteArchiveResponse](#deletearchiveresponse)

### DeleteEventBus



```js
amazonaws_eventbridge.DeleteEventBus({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
*Output schema unknown*

### DeletePartnerEventSource



```js
amazonaws_eventbridge.DeletePartnerEventSource({
  "Name": null,
  "Account": null
}, context)
```

#### Input
* input `object`
  * Account **required**
  * Name **required**

#### Output
*Output schema unknown*

### DeleteRule



```js
amazonaws_eventbridge.DeleteRule({
  "Name": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Force
  * Name **required**

#### Output
*Output schema unknown*

### DescribeArchive



```js
amazonaws_eventbridge.DescribeArchive({
  "ArchiveName": null
}, context)
```

#### Input
* input `object`
  * ArchiveName **required**

#### Output
* output [DescribeArchiveResponse](#describearchiveresponse)

### DescribeEventBus



```js
amazonaws_eventbridge.DescribeEventBus({}, context)
```

#### Input
* input `object`
  * Name

#### Output
* output [DescribeEventBusResponse](#describeeventbusresponse)

### DescribeEventSource



```js
amazonaws_eventbridge.DescribeEventSource({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DescribeEventSourceResponse](#describeeventsourceresponse)

### DescribePartnerEventSource



```js
amazonaws_eventbridge.DescribePartnerEventSource({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DescribePartnerEventSourceResponse](#describepartnereventsourceresponse)

### DescribeReplay



```js
amazonaws_eventbridge.DescribeReplay({
  "ReplayName": null
}, context)
```

#### Input
* input `object`
  * ReplayName **required**

#### Output
* output [DescribeReplayResponse](#describereplayresponse)

### DescribeRule



```js
amazonaws_eventbridge.DescribeRule({
  "Name": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Name **required**

#### Output
* output [DescribeRuleResponse](#describeruleresponse)

### DisableRule



```js
amazonaws_eventbridge.DisableRule({
  "Name": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Name **required**

#### Output
*Output schema unknown*

### EnableRule



```js
amazonaws_eventbridge.EnableRule({
  "Name": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Name **required**

#### Output
*Output schema unknown*

### ListArchives



```js
amazonaws_eventbridge.ListArchives({}, context)
```

#### Input
* input `object`
  * EventSourceArn
  * Limit
  * NamePrefix
  * NextToken
  * State

#### Output
* output [ListArchivesResponse](#listarchivesresponse)

### ListEventBuses



```js
amazonaws_eventbridge.ListEventBuses({}, context)
```

#### Input
* input `object`
  * Limit
  * NamePrefix
  * NextToken

#### Output
* output [ListEventBusesResponse](#listeventbusesresponse)

### ListEventSources



```js
amazonaws_eventbridge.ListEventSources({}, context)
```

#### Input
* input `object`
  * Limit
  * NamePrefix
  * NextToken

#### Output
* output [ListEventSourcesResponse](#listeventsourcesresponse)

### ListPartnerEventSourceAccounts



```js
amazonaws_eventbridge.ListPartnerEventSourceAccounts({
  "EventSourceName": null
}, context)
```

#### Input
* input `object`
  * EventSourceName **required**
  * Limit
  * NextToken

#### Output
* output [ListPartnerEventSourceAccountsResponse](#listpartnereventsourceaccountsresponse)

### ListPartnerEventSources



```js
amazonaws_eventbridge.ListPartnerEventSources({
  "NamePrefix": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NamePrefix **required**
  * NextToken

#### Output
* output [ListPartnerEventSourcesResponse](#listpartnereventsourcesresponse)

### ListReplays



```js
amazonaws_eventbridge.ListReplays({}, context)
```

#### Input
* input `object`
  * EventSourceArn
  * Limit
  * NamePrefix
  * NextToken
  * State

#### Output
* output [ListReplaysResponse](#listreplaysresponse)

### ListRuleNamesByTarget



```js
amazonaws_eventbridge.ListRuleNamesByTarget({
  "TargetArn": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Limit
  * NextToken
  * TargetArn **required**

#### Output
* output [ListRuleNamesByTargetResponse](#listrulenamesbytargetresponse)

### ListRules



```js
amazonaws_eventbridge.ListRules({}, context)
```

#### Input
* input `object`
  * EventBusName
  * Limit
  * NamePrefix
  * NextToken

#### Output
* output [ListRulesResponse](#listrulesresponse)

### ListTagsForResource



```js
amazonaws_eventbridge.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTargetsByRule



```js
amazonaws_eventbridge.ListTargetsByRule({
  "Rule": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Limit
  * NextToken
  * Rule **required**

#### Output
* output [ListTargetsByRuleResponse](#listtargetsbyruleresponse)

### PutEvents



```js
amazonaws_eventbridge.PutEvents({
  "Entries": null
}, context)
```

#### Input
* input `object`
  * Entries **required**
    * items [PutEventsRequestEntry](#puteventsrequestentry)

#### Output
* output [PutEventsResponse](#puteventsresponse)

### PutPartnerEvents



```js
amazonaws_eventbridge.PutPartnerEvents({
  "Entries": null
}, context)
```

#### Input
* input `object`
  * Entries **required**
    * items [PutPartnerEventsRequestEntry](#putpartnereventsrequestentry)

#### Output
* output [PutPartnerEventsResponse](#putpartnereventsresponse)

### PutPermission



```js
amazonaws_eventbridge.PutPermission({}, context)
```

#### Input
* input `object`
  * Action
  * Condition
    * Key **required**
    * Type **required**
    * Value **required**
  * EventBusName
  * Policy
  * Principal
  * StatementId

#### Output
*Output schema unknown*

### PutRule



```js
amazonaws_eventbridge.PutRule({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Description
  * EventBusName
  * EventPattern
  * Name **required**
  * RoleArn
  * ScheduleExpression
  * State
  * Tags
    * items [Tag](#tag)

#### Output
* output [PutRuleResponse](#putruleresponse)

### PutTargets



```js
amazonaws_eventbridge.PutTargets({
  "Rule": null,
  "Targets": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Rule **required**
  * Targets **required**
    * items [Target](#target)

#### Output
* output [PutTargetsResponse](#puttargetsresponse)

### RemovePermission



```js
amazonaws_eventbridge.RemovePermission({}, context)
```

#### Input
* input `object`
  * EventBusName
  * RemoveAllPermissions
  * StatementId

#### Output
*Output schema unknown*

### RemoveTargets



```js
amazonaws_eventbridge.RemoveTargets({
  "Rule": null,
  "Ids": null
}, context)
```

#### Input
* input `object`
  * EventBusName
  * Force
  * Ids **required**
    * items [TargetId](#targetid)
  * Rule **required**

#### Output
* output [RemoveTargetsResponse](#removetargetsresponse)

### StartReplay



```js
amazonaws_eventbridge.StartReplay({
  "ReplayName": null,
  "EventSourceArn": null,
  "EventStartTime": null,
  "EventEndTime": null,
  "Destination": null
}, context)
```

#### Input
* input `object`
  * Description
  * Destination **required**
    * Arn **required**
    * FilterArns
      * items [Arn](#arn)
  * EventEndTime **required**
  * EventSourceArn **required**
  * EventStartTime **required**
  * ReplayName **required**

#### Output
* output [StartReplayResponse](#startreplayresponse)

### TagResource



```js
amazonaws_eventbridge.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### TestEventPattern



```js
amazonaws_eventbridge.TestEventPattern({
  "EventPattern": null,
  "Event": null
}, context)
```

#### Input
* input `object`
  * Event **required**
  * EventPattern **required**

#### Output
* output [TestEventPatternResponse](#testeventpatternresponse)

### UntagResource



```js
amazonaws_eventbridge.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateArchive



```js
amazonaws_eventbridge.UpdateArchive({
  "ArchiveName": null
}, context)
```

#### Input
* input `object`
  * ArchiveName **required**
  * Description
  * EventPattern
  * RetentionDays

#### Output
* output [UpdateArchiveResponse](#updatearchiveresponse)



## Definitions

### AccountId
* AccountId `string`

### Action
* Action `string`

### ActivateEventSourceRequest
* ActivateEventSourceRequest `object`
  * Name **required**

### Archive
* Archive `object`: An <code>Archive</code> object that contains details about an archive.
  * ArchiveName
  * CreationTime
  * EventCount
  * EventSourceArn
  * RetentionDays
  * SizeBytes
  * State
  * StateReason

### ArchiveArn
* ArchiveArn `string`

### ArchiveDescription
* ArchiveDescription `string`

### ArchiveName
* ArchiveName `string`

### ArchiveResponseList
* ArchiveResponseList `array`
  * items [Archive](#archive)

### ArchiveState
* ArchiveState `string` (values: ENABLED, DISABLED, CREATING, UPDATING, CREATE_FAILED, UPDATE_FAILED)

### ArchiveStateReason
* ArchiveStateReason `string`

### Arn
* Arn `string`

### AssignPublicIp
* AssignPublicIp `string` (values: ENABLED, DISABLED)

### AwsVpcConfiguration
* AwsVpcConfiguration `object`: This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.
  * AssignPublicIp
  * SecurityGroups
    * items [String](#string)
  * Subnets **required**
    * items [String](#string)

### BatchArrayProperties
* BatchArrayProperties `object`: The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
  * Size

### BatchParameters
* BatchParameters `object`: The custom parameters to be used when the target is an AWS Batch job.
  * ArrayProperties
    * Size
  * JobDefinition **required**
  * JobName **required**
  * RetryStrategy
    * Attempts

### BatchRetryStrategy
* BatchRetryStrategy `object`: The retry strategy to use for failed jobs, if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
  * Attempts

### Boolean
* Boolean `boolean`

### CancelReplayRequest
* CancelReplayRequest `object`
  * ReplayName **required**

### CancelReplayResponse
* CancelReplayResponse `object`
  * ReplayArn
  * State
  * StateReason

### ConcurrentModificationException


### Condition
* Condition `object`: <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the AWS organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p>
  * Key **required**
  * Type **required**
  * Value **required**

### CreateArchiveRequest
* CreateArchiveRequest `object`
  * ArchiveName **required**
  * Description
  * EventPattern
  * EventSourceArn **required**
  * RetentionDays

### CreateArchiveResponse
* CreateArchiveResponse `object`
  * ArchiveArn
  * CreationTime
  * State
  * StateReason

### CreateEventBusRequest
* CreateEventBusRequest `object`
  * EventSourceName
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateEventBusResponse
* CreateEventBusResponse `object`
  * EventBusArn

### CreatePartnerEventSourceRequest
* CreatePartnerEventSourceRequest `object`
  * Account **required**
  * Name **required**

### CreatePartnerEventSourceResponse
* CreatePartnerEventSourceResponse `object`
  * EventSourceArn

### CreatedBy
* CreatedBy `string`

### Database
* Database `string`

### DbUser
* DbUser `string`

### DeactivateEventSourceRequest
* DeactivateEventSourceRequest `object`
  * Name **required**

### DeadLetterConfig
* DeadLetterConfig `object`: A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.
  * Arn

### DeleteArchiveRequest
* DeleteArchiveRequest `object`
  * ArchiveName **required**

### DeleteArchiveResponse
* DeleteArchiveResponse `object`

### DeleteEventBusRequest
* DeleteEventBusRequest `object`
  * Name **required**

### DeletePartnerEventSourceRequest
* DeletePartnerEventSourceRequest `object`
  * Account **required**
  * Name **required**

### DeleteRuleRequest
* DeleteRuleRequest `object`
  * EventBusName
  * Force
  * Name **required**

### DescribeArchiveRequest
* DescribeArchiveRequest `object`
  * ArchiveName **required**

### DescribeArchiveResponse
* DescribeArchiveResponse `object`
  * ArchiveArn
  * ArchiveName
  * CreationTime
  * Description
  * EventCount
  * EventPattern
  * EventSourceArn
  * RetentionDays
  * SizeBytes
  * State
  * StateReason

### DescribeEventBusRequest
* DescribeEventBusRequest `object`
  * Name

### DescribeEventBusResponse
* DescribeEventBusResponse `object`
  * Arn
  * Name
  * Policy

### DescribeEventSourceRequest
* DescribeEventSourceRequest `object`
  * Name **required**

### DescribeEventSourceResponse
* DescribeEventSourceResponse `object`
  * Arn
  * CreatedBy
  * CreationTime
  * ExpirationTime
  * Name
  * State

### DescribePartnerEventSourceRequest
* DescribePartnerEventSourceRequest `object`
  * Name **required**

### DescribePartnerEventSourceResponse
* DescribePartnerEventSourceResponse `object`
  * Arn
  * Name

### DescribeReplayRequest
* DescribeReplayRequest `object`
  * ReplayName **required**

### DescribeReplayResponse
* DescribeReplayResponse `object`
  * Description
  * Destination
    * Arn **required**
    * FilterArns
      * items [Arn](#arn)
  * EventEndTime
  * EventLastReplayedTime
  * EventSourceArn
  * EventStartTime
  * ReplayArn
  * ReplayEndTime
  * ReplayName
  * ReplayStartTime
  * State
  * StateReason

### DescribeRuleRequest
* DescribeRuleRequest `object`
  * EventBusName
  * Name **required**

### DescribeRuleResponse
* DescribeRuleResponse `object`
  * Arn
  * CreatedBy
  * Description
  * EventBusName
  * EventPattern
  * ManagedBy
  * Name
  * RoleArn
  * ScheduleExpression
  * State

### DisableRuleRequest
* DisableRuleRequest `object`
  * EventBusName
  * Name **required**

### EcsParameters
* EcsParameters `object`: The custom parameters to be used when the target is an Amazon ECS task.
  * Group
  * LaunchType
  * NetworkConfiguration
    * awsvpcConfiguration
      * AssignPublicIp
      * SecurityGroups
        * items [String](#string)
      * Subnets **required**
        * items [String](#string)
  * PlatformVersion
  * TaskCount
  * TaskDefinitionArn **required**

### EnableRuleRequest
* EnableRuleRequest `object`
  * EventBusName
  * Name **required**

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### EventBus
* EventBus `object`: An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives rules from AWS services. A custom event bus can receive rules from AWS services as well as your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.
  * Arn
  * Name
  * Policy

### EventBusList
* EventBusList `array`
  * items [EventBus](#eventbus)

### EventBusName
* EventBusName `string`

### EventBusNameOrArn
* EventBusNameOrArn `string`

### EventId
* EventId `string`

### EventPattern
* EventPattern `string`

### EventResource
* EventResource `string`

### EventResourceList
* EventResourceList `array`
  * items [EventResource](#eventresource)

### EventSource
* EventSource `object`: A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services.
  * Arn
  * CreatedBy
  * CreationTime
  * ExpirationTime
  * Name
  * State

### EventSourceList
* EventSourceList `array`
  * items [EventSource](#eventsource)

### EventSourceName
* EventSourceName `string`

### EventSourceNamePrefix
* EventSourceNamePrefix `string`

### EventSourceState
* EventSourceState `string` (values: PENDING, ACTIVE, DELETED)

### EventTime
* EventTime `string`

### HeaderKey
* HeaderKey `string`

### HeaderParametersMap
* HeaderParametersMap `object`

### HeaderValue
* HeaderValue `string`

### HttpParameters
* HttpParameters `object`: These are custom parameter to be used when the target is an API Gateway REST APIs.
  * HeaderParameters
  * PathParameterValues
    * items [PathParameter](#pathparameter)
  * QueryStringParameters

### IllegalStatusException


### InputTransformer
* InputTransformer `object`: Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
  * InputPathsMap
  * InputTemplate **required**

### InputTransformerPathKey
* InputTransformerPathKey `string`

### Integer
* Integer `integer`

### InternalException


### InvalidEventPatternException


### InvalidStateException


### KinesisParameters
* KinesisParameters `object`: This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.
  * PartitionKeyPath **required**

### LaunchType
* LaunchType `string` (values: EC2, FARGATE)

### LimitExceededException


### LimitMax100
* LimitMax100 `integer`

### LimitMin1
* LimitMin1 `integer`

### ListArchivesRequest
* ListArchivesRequest `object`
  * EventSourceArn
  * Limit
  * NamePrefix
  * NextToken
  * State

### ListArchivesResponse
* ListArchivesResponse `object`
  * Archives
    * items [Archive](#archive)
  * NextToken

### ListEventBusesRequest
* ListEventBusesRequest `object`
  * Limit
  * NamePrefix
  * NextToken

### ListEventBusesResponse
* ListEventBusesResponse `object`
  * EventBuses
    * items [EventBus](#eventbus)
  * NextToken

### ListEventSourcesRequest
* ListEventSourcesRequest `object`
  * Limit
  * NamePrefix
  * NextToken

### ListEventSourcesResponse
* ListEventSourcesResponse `object`
  * EventSources
    * items [EventSource](#eventsource)
  * NextToken

### ListPartnerEventSourceAccountsRequest
* ListPartnerEventSourceAccountsRequest `object`
  * EventSourceName **required**
  * Limit
  * NextToken

### ListPartnerEventSourceAccountsResponse
* ListPartnerEventSourceAccountsResponse `object`
  * NextToken
  * PartnerEventSourceAccounts
    * items [PartnerEventSourceAccount](#partnereventsourceaccount)

### ListPartnerEventSourcesRequest
* ListPartnerEventSourcesRequest `object`
  * Limit
  * NamePrefix **required**
  * NextToken

### ListPartnerEventSourcesResponse
* ListPartnerEventSourcesResponse `object`
  * NextToken
  * PartnerEventSources
    * items [PartnerEventSource](#partnereventsource)

### ListReplaysRequest
* ListReplaysRequest `object`
  * EventSourceArn
  * Limit
  * NamePrefix
  * NextToken
  * State

### ListReplaysResponse
* ListReplaysResponse `object`
  * NextToken
  * Replays
    * items [Replay](#replay)

### ListRuleNamesByTargetRequest
* ListRuleNamesByTargetRequest `object`
  * EventBusName
  * Limit
  * NextToken
  * TargetArn **required**

### ListRuleNamesByTargetResponse
* ListRuleNamesByTargetResponse `object`
  * NextToken
  * RuleNames
    * items [RuleName](#rulename)

### ListRulesRequest
* ListRulesRequest `object`
  * EventBusName
  * Limit
  * NamePrefix
  * NextToken

### ListRulesResponse
* ListRulesResponse `object`
  * NextToken
  * Rules
    * items [Rule](#rule)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListTargetsByRuleRequest
* ListTargetsByRuleRequest `object`
  * EventBusName
  * Limit
  * NextToken
  * Rule **required**

### ListTargetsByRuleResponse
* ListTargetsByRuleResponse `object`
  * NextToken
  * Targets
    * items [Target](#target)

### Long
* Long `integer`

### ManagedBy
* ManagedBy `string`

### ManagedRuleException


### MaximumEventAgeInSeconds
* MaximumEventAgeInSeconds `integer`

### MaximumRetryAttempts
* MaximumRetryAttempts `integer`

### MessageGroupId
* MessageGroupId `string`

### NetworkConfiguration
* NetworkConfiguration `object`: This structure specifies the network configuration for an ECS task.
  * awsvpcConfiguration
    * AssignPublicIp
    * SecurityGroups
      * items [String](#string)
    * Subnets **required**
      * items [String](#string)

### NextToken
* NextToken `string`

### NonPartnerEventBusName
* NonPartnerEventBusName `string`

### NonPartnerEventBusNameOrArn
* NonPartnerEventBusNameOrArn `string`

### OperationDisabledException


### PartnerEventSource
* PartnerEventSource `object`: A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services.
  * Arn
  * Name

### PartnerEventSourceAccount
* PartnerEventSourceAccount `object`: The AWS account that a partner event source has been offered to.
  * Account
  * CreationTime
  * ExpirationTime
  * State

### PartnerEventSourceAccountList
* PartnerEventSourceAccountList `array`
  * items [PartnerEventSourceAccount](#partnereventsourceaccount)

### PartnerEventSourceList
* PartnerEventSourceList `array`
  * items [PartnerEventSource](#partnereventsource)

### PartnerEventSourceNamePrefix
* PartnerEventSourceNamePrefix `string`

### PathParameter
* PathParameter `string`

### PathParameterList
* PathParameterList `array`
  * items [PathParameter](#pathparameter)

### PolicyLengthExceededException


### Principal
* Principal `string`

### PutEventsRequest
* PutEventsRequest `object`
  * Entries **required**
    * items [PutEventsRequestEntry](#puteventsrequestentry)

### PutEventsRequestEntry
* PutEventsRequestEntry `object`: Represents an event to be submitted.
  * Detail
  * DetailType
  * EventBusName
  * Resources
    * items [EventResource](#eventresource)
  * Source
  * Time

### PutEventsRequestEntryList
* PutEventsRequestEntryList `array`
  * items [PutEventsRequestEntry](#puteventsrequestentry)

### PutEventsResponse
* PutEventsResponse `object`
  * Entries
    * items [PutEventsResultEntry](#puteventsresultentry)
  * FailedEntryCount

### PutEventsResultEntry
* PutEventsResultEntry `object`: Represents an event that failed to be submitted.
  * ErrorCode
  * ErrorMessage
  * EventId

### PutEventsResultEntryList
* PutEventsResultEntryList `array`
  * items [PutEventsResultEntry](#puteventsresultentry)

### PutPartnerEventsRequest
* PutPartnerEventsRequest `object`
  * Entries **required**
    * items [PutPartnerEventsRequestEntry](#putpartnereventsrequestentry)

### PutPartnerEventsRequestEntry
* PutPartnerEventsRequestEntry `object`: The details about an event generated by an SaaS partner.
  * Detail
  * DetailType
  * Resources
    * items [EventResource](#eventresource)
  * Source
  * Time

### PutPartnerEventsRequestEntryList
* PutPartnerEventsRequestEntryList `array`
  * items [PutPartnerEventsRequestEntry](#putpartnereventsrequestentry)

### PutPartnerEventsResponse
* PutPartnerEventsResponse `object`
  * Entries
    * items [PutPartnerEventsResultEntry](#putpartnereventsresultentry)
  * FailedEntryCount

### PutPartnerEventsResultEntry
* PutPartnerEventsResultEntry `object`: Represents an event that a partner tried to generate, but failed.
  * ErrorCode
  * ErrorMessage
  * EventId

### PutPartnerEventsResultEntryList
* PutPartnerEventsResultEntryList `array`
  * items [PutPartnerEventsResultEntry](#putpartnereventsresultentry)

### PutPermissionRequest
* PutPermissionRequest `object`
  * Action
  * Condition
    * Key **required**
    * Type **required**
    * Value **required**
  * EventBusName
  * Policy
  * Principal
  * StatementId

### PutRuleRequest
* PutRuleRequest `object`
  * Description
  * EventBusName
  * EventPattern
  * Name **required**
  * RoleArn
  * ScheduleExpression
  * State
  * Tags
    * items [Tag](#tag)

### PutRuleResponse
* PutRuleResponse `object`
  * RuleArn

### PutTargetsRequest
* PutTargetsRequest `object`
  * EventBusName
  * Rule **required**
  * Targets **required**
    * items [Target](#target)

### PutTargetsResponse
* PutTargetsResponse `object`
  * FailedEntries
    * items [PutTargetsResultEntry](#puttargetsresultentry)
  * FailedEntryCount

### PutTargetsResultEntry
* PutTargetsResultEntry `object`: Represents a target that failed to be added to a rule.
  * ErrorCode
  * ErrorMessage
  * TargetId

### PutTargetsResultEntryList
* PutTargetsResultEntryList `array`
  * items [PutTargetsResultEntry](#puttargetsresultentry)

### QueryStringKey
* QueryStringKey `string`

### QueryStringParametersMap
* QueryStringParametersMap `object`

### QueryStringValue
* QueryStringValue `string`

### RedshiftDataParameters
* RedshiftDataParameters `object`: These are custom parameters to be used when the target is a Redshift cluster to invoke the Redshift Data API ExecuteStatement based on EventBridge events.
  * Database **required**
  * DbUser
  * SecretManagerArn
  * Sql **required**
  * StatementName
  * WithEvent

### RedshiftSecretManagerArn
* RedshiftSecretManagerArn `string`

### RemovePermissionRequest
* RemovePermissionRequest `object`
  * EventBusName
  * RemoveAllPermissions
  * StatementId

### RemoveTargetsRequest
* RemoveTargetsRequest `object`
  * EventBusName
  * Force
  * Ids **required**
    * items [TargetId](#targetid)
  * Rule **required**

### RemoveTargetsResponse
* RemoveTargetsResponse `object`
  * FailedEntries
    * items [RemoveTargetsResultEntry](#removetargetsresultentry)
  * FailedEntryCount

### RemoveTargetsResultEntry
* RemoveTargetsResultEntry `object`: Represents a target that failed to be removed from a rule.
  * ErrorCode
  * ErrorMessage
  * TargetId

### RemoveTargetsResultEntryList
* RemoveTargetsResultEntryList `array`
  * items [RemoveTargetsResultEntry](#removetargetsresultentry)

### Replay
* Replay `object`: A <code>Replay</code> object that contains details about a replay.
  * EventEndTime
  * EventLastReplayedTime
  * EventSourceArn
  * EventStartTime
  * ReplayEndTime
  * ReplayName
  * ReplayStartTime
  * State
  * StateReason

### ReplayArn
* ReplayArn `string`

### ReplayDescription
* ReplayDescription `string`

### ReplayDestination
* ReplayDestination `object`: A <code>ReplayDestination</code> object that contains details about a replay.
  * Arn **required**
  * FilterArns
    * items [Arn](#arn)

### ReplayDestinationFilters
* ReplayDestinationFilters `array`
  * items [Arn](#arn)

### ReplayList
* ReplayList `array`
  * items [Replay](#replay)

### ReplayName
* ReplayName `string`

### ReplayState
* ReplayState `string` (values: STARTING, RUNNING, CANCELLING, COMPLETED, CANCELLED, FAILED)

### ReplayStateReason
* ReplayStateReason `string`

### ResourceAlreadyExistsException


### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### RetentionDays
* RetentionDays `integer`

### RetryPolicy
* RetryPolicy `object`: A <code>RetryPolicy</code> object that includes information about the retry policy settings.
  * MaximumEventAgeInSeconds
  * MaximumRetryAttempts

### RoleArn
* RoleArn `string`

### Rule
* Rule `object`: Contains information about a rule in Amazon EventBridge.
  * Arn
  * Description
  * EventBusName
  * EventPattern
  * ManagedBy
  * Name
  * RoleArn
  * ScheduleExpression
  * State

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
  * RunCommandTargets **required**
    * items [RunCommandTarget](#runcommandtarget)

### RunCommandTarget
* RunCommandTarget `object`: Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
  * Key **required**
  * Values **required**
    * items [RunCommandTargetValue](#runcommandtargetvalue)

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

### Sql
* Sql `string`

### SqsParameters
* SqsParameters `object`: This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
  * MessageGroupId

### StartReplayRequest
* StartReplayRequest `object`
  * Description
  * Destination **required**
    * Arn **required**
    * FilterArns
      * items [Arn](#arn)
  * EventEndTime **required**
  * EventSourceArn **required**
  * EventStartTime **required**
  * ReplayName **required**

### StartReplayResponse
* StartReplayResponse `object`
  * ReplayArn
  * ReplayStartTime
  * State
  * StateReason

### StatementId
* StatementId `string`

### StatementName
* StatementName `string`

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### Tag
* Tag `object`: A key-value pair associated with an AWS resource. In EventBridge, rules and event buses support tagging.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Target
* Target `object`: <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a>PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
  * Arn **required**
  * BatchParameters
    * ArrayProperties
      * Size
    * JobDefinition **required**
    * JobName **required**
    * RetryStrategy
      * Attempts
  * DeadLetterConfig
    * Arn
  * EcsParameters
    * Group
    * LaunchType
    * NetworkConfiguration
      * awsvpcConfiguration
        * AssignPublicIp
        * SecurityGroups
          * items [String](#string)
        * Subnets **required**
          * items [String](#string)
    * PlatformVersion
    * TaskCount
    * TaskDefinitionArn **required**
  * HttpParameters
    * HeaderParameters
    * PathParameterValues
      * items [PathParameter](#pathparameter)
    * QueryStringParameters
  * Id **required**
  * Input
  * InputPath
  * InputTransformer
    * InputPathsMap
    * InputTemplate **required**
  * KinesisParameters
    * PartitionKeyPath **required**
  * RedshiftDataParameters
    * Database **required**
    * DbUser
    * SecretManagerArn
    * Sql **required**
    * StatementName
    * WithEvent
  * RetryPolicy
    * MaximumEventAgeInSeconds
    * MaximumRetryAttempts
  * RoleArn
  * RunCommandParameters
    * RunCommandTargets **required**
      * items [RunCommandTarget](#runcommandtarget)
  * SqsParameters
    * MessageGroupId

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
  * Event **required**
  * EventPattern **required**

### TestEventPatternResponse
* TestEventPatternResponse `object`
  * Result

### Timestamp
* Timestamp `string`

### TransformerInput
* TransformerInput `string`

### TransformerPaths
* TransformerPaths `object`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateArchiveRequest
* UpdateArchiveRequest `object`
  * ArchiveName **required**
  * Description
  * EventPattern
  * RetentionDays

### UpdateArchiveResponse
* UpdateArchiveResponse `object`
  * ArchiveArn
  * CreationTime
  * State
  * StateReason


