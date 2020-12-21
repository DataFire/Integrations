# @datafire/amazonaws_codestar_notifications

Client library for AWS CodeStar Notifications

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codestar_notifications
```
```js
let amazonaws_codestar_notifications = require('@datafire/amazonaws_codestar_notifications').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects:</p> <p>Notification rules, by calling the following: </p> <ul> <li> <p> <a>CreateNotificationRule</a>, which creates a notification rule for a resource in your account. </p> </li> <li> <p> <a>DeleteNotificationRule</a>, which deletes a notification rule. </p> </li> <li> <p> <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p> </li> <li> <p> <a>ListNotificationRules</a>, which lists the notification rules associated with your account. </p> </li> <li> <p> <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a notification rule. </p> </li> <li> <p> <a>Subscribe</a>, which subscribes a target to a notification rule. </p> </li> <li> <p> <a>Unsubscribe</a>, which removes a target from a notification rule. </p> </li> </ul> <p>Targets, by calling the following: </p> <ul> <li> <p> <a>DeleteTarget</a>, which removes a notification rule target (SNS topic) from a notification rule. </p> </li> <li> <p> <a>ListTargets</a>, which lists the targets associated with a notification rule. </p> </li> </ul> <p>Events, by calling the following: </p> <ul> <li> <p> <a>ListEventTypes</a>, which lists the event types you can include in a notification rule. </p> </li> </ul> <p>Tags, by calling the following: </p> <ul> <li> <p> <a>ListTagsForResource</a>, which lists the tags already associated with a notification rule in your account. </p> </li> <li> <p> <a>TagResource</a>, which associates a tag you provide with a notification rule in your account. </p> </li> <li> <p> <a>UntagResource</a>, which removes a tag from a notification rule in your account. </p> </li> </ul> <p> For information about how to use AWS CodeStar Notifications, see link in the CodeStarNotifications User Guide. </p>

## Actions

### CreateNotificationRule



```js
amazonaws_codestar_notifications.CreateNotificationRule({
  "Name": "",
  "EventTypeIds": [],
  "Resource": "",
  "Targets": [],
  "DetailType": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: <p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The AWS SDKs prepopulate client request tokens. If you are using an AWS SDK, an idempotency token is created for you.</p> </note>
  * DetailType **required** `string` (values: BASIC, FULL): The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
  * EventTypeIds **required** `array`: A list of event types associated with this notification rule. For a list of allowed events, see <a>EventTypeSummary</a>.
    * items [EventTypeId](#eventtypeid)
  * Name **required** `string`: The name for the notification rule. Notifictaion rule names must be unique in your AWS account.
  * Resource **required** `string`: The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in AWS CodePipeline, repositories in AWS CodeCommit, and build projects in AWS CodeBuild.
  * Status `string` (values: ENABLED, DISABLED): The status of the notification rule. The default value is ENABLED. If the status is set to DISABLED, notifications aren't sent for the notification rule.
  * Tags `object`: A list of tags to apply to this notification rule. Key names cannot start with "aws". 
  * Targets **required** `array`: A list of Amazon Resource Names (ARNs) of SNS topics to associate with the notification rule.
    * items [Target](#target)

#### Output
* output [CreateNotificationRuleResult](#createnotificationruleresult)

### DeleteNotificationRule



```js
amazonaws_codestar_notifications.DeleteNotificationRule({
  "Arn": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) of the notification rule you want to delete.

#### Output
* output [DeleteNotificationRuleResult](#deletenotificationruleresult)

### DeleteTarget



```js
amazonaws_codestar_notifications.DeleteTarget({
  "TargetAddress": ""
}, context)
```

#### Input
* input `object`
  * ForceUnsubscribeAll `boolean`: A Boolean value that can be used to delete all associations with this SNS topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your AWS account are deleted.
  * TargetAddress **required** `string`: The Amazon Resource Name (ARN) of the SNS topic to delete.

#### Output
* output [DeleteTargetResult](#deletetargetresult)

### DescribeNotificationRule



```js
amazonaws_codestar_notifications.DescribeNotificationRule({
  "Arn": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) of the notification rule.

#### Output
* output [DescribeNotificationRuleResult](#describenotificationruleresult)

### ListEventTypes



```js
amazonaws_codestar_notifications.ListEventTypes({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`: The filters to use to return information by service or resource type.
    * items [ListEventTypesFilter](#listeventtypesfilter)
  * MaxResults `integer`: A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.
  * NextToken `string`: An enumeration token that, when provided in a request, returns the next batch of the results.

#### Output
* output [ListEventTypesResult](#listeventtypesresult)

### ListNotificationRules



```js
amazonaws_codestar_notifications.ListNotificationRules({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`: <p>The filters to use to return information by service or resource type. For valid values, see <a>ListNotificationRulesFilter</a>.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>
    * items [ListNotificationRulesFilter](#listnotificationrulesfilter)
  * MaxResults `integer`: A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
  * NextToken `string`: An enumeration token that, when provided in a request, returns the next batch of the results.

#### Output
* output [ListNotificationRulesResult](#listnotificationrulesresult)

### ListTagsForResource



```js
amazonaws_codestar_notifications.ListTagsForResource({
  "Arn": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) for the notification rule.

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### ListTargets



```js
amazonaws_codestar_notifications.ListTargets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`: <p>The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>
    * items [ListTargetsFilter](#listtargetsfilter)
  * MaxResults `integer`: A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
  * NextToken `string`: An enumeration token that, when provided in a request, returns the next batch of the results.

#### Output
* output [ListTargetsResult](#listtargetsresult)

### Subscribe



```js
amazonaws_codestar_notifications.Subscribe({
  "Arn": "",
  "Target": {}
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.
  * ClientRequestToken `string`: An enumeration token that, when provided in a request, returns the next batch of the results.
  * Target **required** `object`: Information about the SNS topics associated with a notification rule.
    * TargetAddress
    * TargetType

#### Output
* output [SubscribeResult](#subscriberesult)

### TagResource



```js
amazonaws_codestar_notifications.TagResource({
  "Arn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) of the notification rule to tag.
  * Tags **required** `object`: The list of tags to associate with the resource. Tag key names cannot start with "aws".

#### Output
* output [TagResourceResult](#tagresourceresult)

### Unsubscribe



```js
amazonaws_codestar_notifications.Unsubscribe({
  "Arn": "",
  "TargetAddress": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) of the notification rule.
  * TargetAddress **required** `string`: The ARN of the SNS topic to unsubscribe from the notification rule.

#### Output
* output [UnsubscribeResult](#unsubscriberesult)

### UntagResource



```js
amazonaws_codestar_notifications.UntagResource({
  "Arn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.
  * TagKeys **required** `array`: The key names of the tags to remove.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResult](#untagresourceresult)

### UpdateNotificationRule



```js
amazonaws_codestar_notifications.UpdateNotificationRule({
  "Arn": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`: The Amazon Resource Name (ARN) of the notification rule.
  * DetailType `string` (values: BASIC, FULL): The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
  * EventTypeIds `array`: A list of event types associated with this notification rule.
    * items [EventTypeId](#eventtypeid)
  * Name `string`: The name of the notification rule.
  * Status `string` (values: ENABLED, DISABLED): The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications).
  * Targets `array`: The address and type of the targets to receive notifications from this notification rule.
    * items [Target](#target)

#### Output
* output [UpdateNotificationRuleResult](#updatenotificationruleresult)



## Definitions

### AccessDeniedException


### ClientRequestToken
* ClientRequestToken `string`

### ConcurrentModificationException


### ConfigurationException


### CreateNotificationRuleRequest
* CreateNotificationRuleRequest `object`
  * ClientRequestToken
  * DetailType **required**
  * EventTypeIds **required**
    * items [EventTypeId](#eventtypeid)
  * Name **required**
  * Resource **required**
  * Status
  * Tags
  * Targets **required**
    * items [Target](#target)

### CreateNotificationRuleResult
* CreateNotificationRuleResult `object`
  * Arn

### CreatedTimestamp
* CreatedTimestamp `string`

### DeleteNotificationRuleRequest
* DeleteNotificationRuleRequest `object`
  * Arn **required**

### DeleteNotificationRuleResult
* DeleteNotificationRuleResult `object`
  * Arn

### DeleteTargetRequest
* DeleteTargetRequest `object`
  * ForceUnsubscribeAll
  * TargetAddress **required**

### DeleteTargetResult
* DeleteTargetResult `object`

### DescribeNotificationRuleRequest
* DescribeNotificationRuleRequest `object`
  * Arn **required**

### DescribeNotificationRuleResult
* DescribeNotificationRuleResult `object`
  * Arn **required**
  * CreatedBy
  * CreatedTimestamp
  * DetailType
  * EventTypes
    * items [EventTypeSummary](#eventtypesummary)
  * LastModifiedTimestamp
  * Name
  * Resource
  * Status
  * Tags
  * Targets
    * items [TargetSummary](#targetsummary)

### DetailType
* DetailType `string` (values: BASIC, FULL)

### EventTypeBatch
* EventTypeBatch `array`
  * items [EventTypeSummary](#eventtypesummary)

### EventTypeId
* EventTypeId `string`

### EventTypeIds
* EventTypeIds `array`
  * items [EventTypeId](#eventtypeid)

### EventTypeName
* EventTypeName `string`

### EventTypeSummary
* EventTypeSummary `object`: Returns information about an event that has triggered a notification rule.
  * EventTypeId
  * EventTypeName
  * ResourceType
  * ServiceName

### ForceUnsubscribeAll
* ForceUnsubscribeAll `boolean`

### InvalidNextTokenException


### LastModifiedTimestamp
* LastModifiedTimestamp `string`

### LimitExceededException


### ListEventTypesFilter
* ListEventTypesFilter `object`: Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
  * Name **required**
  * Value **required**

### ListEventTypesFilterName
* ListEventTypesFilterName `string` (values: RESOURCE_TYPE, SERVICE_NAME)

### ListEventTypesFilterValue
* ListEventTypesFilterValue `string`

### ListEventTypesFilters
* ListEventTypesFilters `array`
  * items [ListEventTypesFilter](#listeventtypesfilter)

### ListEventTypesRequest
* ListEventTypesRequest `object`
  * Filters
    * items [ListEventTypesFilter](#listeventtypesfilter)
  * MaxResults
  * NextToken

### ListEventTypesResult
* ListEventTypesResult `object`
  * EventTypes
    * items [EventTypeSummary](#eventtypesummary)
  * NextToken

### ListNotificationRulesFilter
* ListNotificationRulesFilter `object`: Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
  * Name **required**
  * Value **required**

### ListNotificationRulesFilterName
* ListNotificationRulesFilterName `string` (values: EVENT_TYPE_ID, CREATED_BY, RESOURCE, TARGET_ADDRESS)

### ListNotificationRulesFilterValue
* ListNotificationRulesFilterValue `string`

### ListNotificationRulesFilters
* ListNotificationRulesFilters `array`
  * items [ListNotificationRulesFilter](#listnotificationrulesfilter)

### ListNotificationRulesRequest
* ListNotificationRulesRequest `object`
  * Filters
    * items [ListNotificationRulesFilter](#listnotificationrulesfilter)
  * MaxResults
  * NextToken

### ListNotificationRulesResult
* ListNotificationRulesResult `object`
  * NextToken
  * NotificationRules
    * items [NotificationRuleSummary](#notificationrulesummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * Arn **required**

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * Tags

### ListTargetsFilter
* ListTargetsFilter `object`: Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE.
  * Name **required**
  * Value **required**

### ListTargetsFilterName
* ListTargetsFilterName `string` (values: TARGET_TYPE, TARGET_ADDRESS, TARGET_STATUS)

### ListTargetsFilterValue
* ListTargetsFilterValue `string`

### ListTargetsFilters
* ListTargetsFilters `array`
  * items [ListTargetsFilter](#listtargetsfilter)

### ListTargetsRequest
* ListTargetsRequest `object`
  * Filters
    * items [ListTargetsFilter](#listtargetsfilter)
  * MaxResults
  * NextToken

### ListTargetsResult
* ListTargetsResult `object`
  * NextToken
  * Targets
    * items [TargetSummary](#targetsummary)

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### NotificationRuleArn
* NotificationRuleArn `string`

### NotificationRuleBatch
* NotificationRuleBatch `array`
  * items [NotificationRuleSummary](#notificationrulesummary)

### NotificationRuleCreatedBy
* NotificationRuleCreatedBy `string`

### NotificationRuleId
* NotificationRuleId `string`

### NotificationRuleName
* NotificationRuleName `string`

### NotificationRuleResource
* NotificationRuleResource `string`

### NotificationRuleStatus
* NotificationRuleStatus `string` (values: ENABLED, DISABLED)

### NotificationRuleSummary
* NotificationRuleSummary `object`: Information about a specified notification rule.
  * Arn
  * Id

### ResourceAlreadyExistsException


### ResourceNotFoundException


### ResourceType
* ResourceType `string`

### ServiceName
* ServiceName `string`

### SubscribeRequest
* SubscribeRequest `object`
  * Arn **required**
  * ClientRequestToken
  * Target **required** [Target](#target)

### SubscribeResult
* SubscribeResult `object`
  * Arn

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * Arn **required**
  * Tags **required**

### TagResourceResult
* TagResourceResult `object`
  * Tags

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### Target
* Target `object`: Information about the SNS topics associated with a notification rule.
  * TargetAddress
  * TargetType

### TargetAddress
* TargetAddress `string`

### TargetStatus
* TargetStatus `string` (values: PENDING, ACTIVE, UNREACHABLE, INACTIVE, DEACTIVATED)

### TargetSummary
* TargetSummary `object`: Information about the targets specified for a notification rule.
  * TargetAddress
  * TargetStatus
  * TargetType

### TargetType
* TargetType `string`

### Targets
* Targets `array`
  * items [Target](#target)

### TargetsBatch
* TargetsBatch `array`
  * items [TargetSummary](#targetsummary)

### UnsubscribeRequest
* UnsubscribeRequest `object`
  * Arn **required**
  * TargetAddress **required**

### UnsubscribeResult
* UnsubscribeResult `object`
  * Arn **required**

### UntagResourceRequest
* UntagResourceRequest `object`
  * Arn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResult
* UntagResourceResult `object`

### UpdateNotificationRuleRequest
* UpdateNotificationRuleRequest `object`
  * Arn **required**
  * DetailType
  * EventTypeIds
    * items [EventTypeId](#eventtypeid)
  * Name
  * Status
  * Targets
    * items [Target](#target)

### UpdateNotificationRuleResult
* UpdateNotificationRuleResult `object`

### ValidationException



