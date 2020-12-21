# @datafire/amazonaws_inspector

Client library for Amazon Inspector

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_inspector
```
```js
let amazonaws_inspector = require('@datafire/amazonaws_inspector').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Inspector</fullname> <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User Guide</a>.</p>

## Actions

### AddAttributesToFindings



```js
amazonaws_inspector.AddAttributesToFindings({
  "findingArns": null,
  "attributes": null
}, context)
```

#### Input
* input `object`
  * attributes **required**
    * items [Attribute](#attribute)
  * findingArns **required**
    * items [Arn](#arn)

#### Output
* output [AddAttributesToFindingsResponse](#addattributestofindingsresponse)

### CreateAssessmentTarget



```js
amazonaws_inspector.CreateAssessmentTarget({
  "assessmentTargetName": null
}, context)
```

#### Input
* input `object`
  * assessmentTargetName **required**
  * resourceGroupArn

#### Output
* output [CreateAssessmentTargetResponse](#createassessmenttargetresponse)

### CreateAssessmentTemplate



```js
amazonaws_inspector.CreateAssessmentTemplate({
  "assessmentTargetArn": null,
  "assessmentTemplateName": null,
  "durationInSeconds": null,
  "rulesPackageArns": null
}, context)
```

#### Input
* input `object`
  * assessmentTargetArn **required**
  * assessmentTemplateName **required**
  * durationInSeconds **required**
  * rulesPackageArns **required**
    * items [Arn](#arn)
  * userAttributesForFindings
    * items [Attribute](#attribute)

#### Output
* output [CreateAssessmentTemplateResponse](#createassessmenttemplateresponse)

### CreateExclusionsPreview



```js
amazonaws_inspector.CreateExclusionsPreview({
  "assessmentTemplateArn": null
}, context)
```

#### Input
* input `object`
  * assessmentTemplateArn **required**

#### Output
* output [CreateExclusionsPreviewResponse](#createexclusionspreviewresponse)

### CreateResourceGroup



```js
amazonaws_inspector.CreateResourceGroup({
  "resourceGroupTags": null
}, context)
```

#### Input
* input `object`
  * resourceGroupTags **required**
    * items [ResourceGroupTag](#resourcegrouptag)

#### Output
* output [CreateResourceGroupResponse](#createresourcegroupresponse)

### DeleteAssessmentRun



```js
amazonaws_inspector.DeleteAssessmentRun({
  "assessmentRunArn": null
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required**

#### Output
*Output schema unknown*

### DeleteAssessmentTarget



```js
amazonaws_inspector.DeleteAssessmentTarget({
  "assessmentTargetArn": null
}, context)
```

#### Input
* input `object`
  * assessmentTargetArn **required**

#### Output
*Output schema unknown*

### DeleteAssessmentTemplate



```js
amazonaws_inspector.DeleteAssessmentTemplate({
  "assessmentTemplateArn": null
}, context)
```

#### Input
* input `object`
  * assessmentTemplateArn **required**

#### Output
*Output schema unknown*

### DescribeAssessmentRuns



```js
amazonaws_inspector.DescribeAssessmentRuns({
  "assessmentRunArns": null
}, context)
```

#### Input
* input `object`
  * assessmentRunArns **required**
    * items [Arn](#arn)

#### Output
* output [DescribeAssessmentRunsResponse](#describeassessmentrunsresponse)

### DescribeAssessmentTargets



```js
amazonaws_inspector.DescribeAssessmentTargets({
  "assessmentTargetArns": null
}, context)
```

#### Input
* input `object`
  * assessmentTargetArns **required**
    * items [Arn](#arn)

#### Output
* output [DescribeAssessmentTargetsResponse](#describeassessmenttargetsresponse)

### DescribeAssessmentTemplates



```js
amazonaws_inspector.DescribeAssessmentTemplates({
  "assessmentTemplateArns": []
}, context)
```

#### Input
* input `object`
  * assessmentTemplateArns **required** [BatchDescribeArnList](#batchdescribearnlist)

#### Output
* output [DescribeAssessmentTemplatesResponse](#describeassessmenttemplatesresponse)

### DescribeCrossAccountAccessRole



```js
amazonaws_inspector.DescribeCrossAccountAccessRole({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeCrossAccountAccessRoleResponse](#describecrossaccountaccessroleresponse)

### DescribeExclusions



```js
amazonaws_inspector.DescribeExclusions({
  "exclusionArns": null
}, context)
```

#### Input
* input `object`
  * exclusionArns **required**
    * items [Arn](#arn)
  * locale

#### Output
* output [DescribeExclusionsResponse](#describeexclusionsresponse)

### DescribeFindings



```js
amazonaws_inspector.DescribeFindings({
  "findingArns": null
}, context)
```

#### Input
* input `object`
  * findingArns **required**
    * items [Arn](#arn)
  * locale

#### Output
* output [DescribeFindingsResponse](#describefindingsresponse)

### DescribeResourceGroups



```js
amazonaws_inspector.DescribeResourceGroups({
  "resourceGroupArns": null
}, context)
```

#### Input
* input `object`
  * resourceGroupArns **required**
    * items [Arn](#arn)

#### Output
* output [DescribeResourceGroupsResponse](#describeresourcegroupsresponse)

### DescribeRulesPackages



```js
amazonaws_inspector.DescribeRulesPackages({
  "rulesPackageArns": null
}, context)
```

#### Input
* input `object`
  * locale
  * rulesPackageArns **required**
    * items [Arn](#arn)

#### Output
* output [DescribeRulesPackagesResponse](#describerulespackagesresponse)

### GetAssessmentReport



```js
amazonaws_inspector.GetAssessmentReport({
  "assessmentRunArn": null,
  "reportFileFormat": null,
  "reportType": null
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required**
  * reportFileFormat **required**
  * reportType **required**

#### Output
* output [GetAssessmentReportResponse](#getassessmentreportresponse)

### GetExclusionsPreview



```js
amazonaws_inspector.GetExclusionsPreview({
  "assessmentTemplateArn": null,
  "previewToken": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentTemplateArn **required**
  * locale
  * maxResults
  * nextToken
  * previewToken **required**

#### Output
* output [GetExclusionsPreviewResponse](#getexclusionspreviewresponse)

### GetTelemetryMetadata



```js
amazonaws_inspector.GetTelemetryMetadata({
  "assessmentRunArn": null
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required**

#### Output
* output [GetTelemetryMetadataResponse](#gettelemetrymetadataresponse)

### ListAssessmentRunAgents



```js
amazonaws_inspector.ListAssessmentRunAgents({
  "assessmentRunArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentRunArn **required**
  * filter
    * agentHealthCodes **required**
      * items [AgentHealthCode](#agenthealthcode)
    * agentHealths **required**
      * items [AgentHealth](#agenthealth)
  * maxResults
  * nextToken

#### Output
* output [ListAssessmentRunAgentsResponse](#listassessmentrunagentsresponse)

### ListAssessmentRuns



```js
amazonaws_inspector.ListAssessmentRuns({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentTemplateArns
    * items [Arn](#arn)
  * filter
    * completionTimeRange
      * beginDate
      * endDate
    * durationRange
      * maxSeconds
      * minSeconds
    * namePattern
    * rulesPackageArns
      * items [Arn](#arn)
    * startTimeRange
      * beginDate
      * endDate
    * stateChangeTimeRange
      * beginDate
      * endDate
    * states
      * items [AssessmentRunState](#assessmentrunstate)
  * maxResults
  * nextToken

#### Output
* output [ListAssessmentRunsResponse](#listassessmentrunsresponse)

### ListAssessmentTargets



```js
amazonaws_inspector.ListAssessmentTargets({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * assessmentTargetNamePattern
  * maxResults
  * nextToken

#### Output
* output [ListAssessmentTargetsResponse](#listassessmenttargetsresponse)

### ListAssessmentTemplates



```js
amazonaws_inspector.ListAssessmentTemplates({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentTargetArns
    * items [Arn](#arn)
  * filter
    * durationRange
      * maxSeconds
      * minSeconds
    * namePattern
    * rulesPackageArns
      * items [Arn](#arn)
  * maxResults
  * nextToken

#### Output
* output [ListAssessmentTemplatesResponse](#listassessmenttemplatesresponse)

### ListEventSubscriptions



```js
amazonaws_inspector.ListEventSubscriptions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * resourceArn

#### Output
* output [ListEventSubscriptionsResponse](#listeventsubscriptionsresponse)

### ListExclusions



```js
amazonaws_inspector.ListExclusions({
  "assessmentRunArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentRunArn **required**
  * maxResults
  * nextToken

#### Output
* output [ListExclusionsResponse](#listexclusionsresponse)

### ListFindings



```js
amazonaws_inspector.ListFindings({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentRunArns
    * items [Arn](#arn)
  * filter
    * agentIds
      * items [AgentId](#agentid)
    * attributes
      * items [Attribute](#attribute)
    * autoScalingGroups
      * items [AutoScalingGroup](#autoscalinggroup)
    * creationTimeRange
      * beginDate
      * endDate
    * ruleNames
      * items [RuleName](#rulename)
    * rulesPackageArns
      * items [Arn](#arn)
    * severities
      * items [Severity](#severity)
    * userAttributes
      * items [Attribute](#attribute)
  * maxResults
  * nextToken

#### Output
* output [ListFindingsResponse](#listfindingsresponse)

### ListRulesPackages



```js
amazonaws_inspector.ListRulesPackages({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [ListRulesPackagesResponse](#listrulespackagesresponse)

### ListTagsForResource



```js
amazonaws_inspector.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PreviewAgents



```js
amazonaws_inspector.PreviewAgents({
  "previewAgentsArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * previewAgentsArn **required**

#### Output
* output [PreviewAgentsResponse](#previewagentsresponse)

### RegisterCrossAccountAccessRole



```js
amazonaws_inspector.RegisterCrossAccountAccessRole({
  "roleArn": null
}, context)
```

#### Input
* input `object`
  * roleArn **required**

#### Output
*Output schema unknown*

### RemoveAttributesFromFindings



```js
amazonaws_inspector.RemoveAttributesFromFindings({
  "findingArns": null,
  "attributeKeys": null
}, context)
```

#### Input
* input `object`
  * attributeKeys **required**
    * items [AttributeKey](#attributekey)
  * findingArns **required**
    * items [Arn](#arn)

#### Output
* output [RemoveAttributesFromFindingsResponse](#removeattributesfromfindingsresponse)

### SetTagsForResource



```js
amazonaws_inspector.SetTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
*Output schema unknown*

### StartAssessmentRun



```js
amazonaws_inspector.StartAssessmentRun({
  "assessmentTemplateArn": null
}, context)
```

#### Input
* input `object`
  * assessmentRunName
  * assessmentTemplateArn **required**

#### Output
* output [StartAssessmentRunResponse](#startassessmentrunresponse)

### StopAssessmentRun



```js
amazonaws_inspector.StopAssessmentRun({
  "assessmentRunArn": null
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required**
  * stopAction

#### Output
*Output schema unknown*

### SubscribeToEvent



```js
amazonaws_inspector.SubscribeToEvent({
  "resourceArn": null,
  "event": null,
  "topicArn": null
}, context)
```

#### Input
* input `object`
  * event **required**
  * resourceArn **required**
  * topicArn **required**

#### Output
*Output schema unknown*

### UnsubscribeFromEvent



```js
amazonaws_inspector.UnsubscribeFromEvent({
  "resourceArn": null,
  "event": null,
  "topicArn": null
}, context)
```

#### Input
* input `object`
  * event **required**
  * resourceArn **required**
  * topicArn **required**

#### Output
*Output schema unknown*

### UpdateAssessmentTarget



```js
amazonaws_inspector.UpdateAssessmentTarget({
  "assessmentTargetArn": null,
  "assessmentTargetName": null
}, context)
```

#### Input
* input `object`
  * assessmentTargetArn **required**
  * assessmentTargetName **required**
  * resourceGroupArn

#### Output
*Output schema unknown*



## Definitions

### AccessDeniedException


### AddAttributesToFindingsRequest
* AddAttributesToFindingsRequest `object`
  * attributes **required**
    * items [Attribute](#attribute)
  * findingArns **required**
    * items [Arn](#arn)

### AddAttributesToFindingsResponse
* AddAttributesToFindingsResponse `object`
  * failedItems **required**

### AddRemoveAttributesFindingArnList
* AddRemoveAttributesFindingArnList `array`
  * items [Arn](#arn)

### AgentFilter
* AgentFilter `object`: Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
  * agentHealthCodes **required**
    * items [AgentHealthCode](#agenthealthcode)
  * agentHealths **required**
    * items [AgentHealth](#agenthealth)

### AgentHealth
* AgentHealth `string` (values: HEALTHY, UNHEALTHY, UNKNOWN)

### AgentHealthCode
* AgentHealthCode `string` (values: IDLE, RUNNING, SHUTDOWN, UNHEALTHY, THROTTLED, UNKNOWN)

### AgentHealthCodeList
* AgentHealthCodeList `array`
  * items [AgentHealthCode](#agenthealthcode)

### AgentHealthList
* AgentHealthList `array`
  * items [AgentHealth](#agenthealth)

### AgentId
* AgentId `string`

### AgentIdList
* AgentIdList `array`
  * items [AgentId](#agentid)

### AgentPreview
* AgentPreview `object`: Used as a response element in the <a>PreviewAgents</a> action.
  * agentHealth
  * agentId **required**
  * agentVersion
  * autoScalingGroup
  * hostname
  * ipv4Address
  * kernelVersion
  * operatingSystem

### AgentPreviewList
* AgentPreviewList `array`
  * items [AgentPreview](#agentpreview)

### AgentVersion
* AgentVersion `string`

### AgentsAlreadyRunningAssessmentException


### AmiId
* AmiId `string`

### Arn
* Arn `string`

### ArnCount
* ArnCount `integer`

### AssessmentRulesPackageArnList
* AssessmentRulesPackageArnList `array`
  * items [Arn](#arn)

### AssessmentRun
* AssessmentRun `object`: <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
  * arn **required**
  * assessmentTemplateArn **required**
  * completedAt
  * createdAt **required**
  * dataCollected **required**
  * durationInSeconds **required**
  * findingCounts **required**
  * name **required**
  * notifications **required**
    * items [AssessmentRunNotification](#assessmentrunnotification)
  * rulesPackageArns **required**
    * items [Arn](#arn)
  * startedAt
  * state **required**
  * stateChangedAt **required**
  * stateChanges **required**
    * items [AssessmentRunStateChange](#assessmentrunstatechange)
  * userAttributesForFindings **required**
    * items [Attribute](#attribute)

### AssessmentRunAgent
* AssessmentRunAgent `object`: Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
  * agentHealth **required**
  * agentHealthCode **required**
  * agentHealthDetails
  * agentId **required**
  * assessmentRunArn **required**
  * autoScalingGroup
  * telemetryMetadata **required**
    * items [TelemetryMetadata](#telemetrymetadata)

### AssessmentRunAgentList
* AssessmentRunAgentList `array`
  * items [AssessmentRunAgent](#assessmentrunagent)

### AssessmentRunDuration
* AssessmentRunDuration `integer`

### AssessmentRunFilter
* AssessmentRunFilter `object`: Used as the request parameter in the <a>ListAssessmentRuns</a> action.
  * completionTimeRange
    * beginDate
    * endDate
  * durationRange
    * maxSeconds
    * minSeconds
  * namePattern
  * rulesPackageArns
    * items [Arn](#arn)
  * startTimeRange
    * beginDate
    * endDate
  * stateChangeTimeRange
    * beginDate
    * endDate
  * states
    * items [AssessmentRunState](#assessmentrunstate)

### AssessmentRunFindingCounts
* AssessmentRunFindingCounts `object`

### AssessmentRunInProgressException


### AssessmentRunList
* AssessmentRunList `array`
  * items [AssessmentRun](#assessmentrun)

### AssessmentRunName
* AssessmentRunName `string`

### AssessmentRunNotification
* AssessmentRunNotification `object`: Used as one of the elements of the <a>AssessmentRun</a> data type.
  * date **required**
  * error **required**
  * event **required**
  * message
  * snsPublishStatusCode
  * snsTopicArn

### AssessmentRunNotificationList
* AssessmentRunNotificationList `array`
  * items [AssessmentRunNotification](#assessmentrunnotification)

### AssessmentRunNotificationSnsStatusCode
* AssessmentRunNotificationSnsStatusCode `string` (values: SUCCESS, TOPIC_DOES_NOT_EXIST, ACCESS_DENIED, INTERNAL_ERROR)

### AssessmentRunState
* AssessmentRunState `string` (values: CREATED, START_DATA_COLLECTION_PENDING, START_DATA_COLLECTION_IN_PROGRESS, COLLECTING_DATA, STOP_DATA_COLLECTION_PENDING, DATA_COLLECTED, START_EVALUATING_RULES_PENDING, EVALUATING_RULES, FAILED, ERROR, COMPLETED, COMPLETED_WITH_ERRORS, CANCELED)

### AssessmentRunStateChange
* AssessmentRunStateChange `object`: Used as one of the elements of the <a>AssessmentRun</a> data type.
  * state **required**
  * stateChangedAt **required**

### AssessmentRunStateChangeList
* AssessmentRunStateChangeList `array`
  * items [AssessmentRunStateChange](#assessmentrunstatechange)

### AssessmentRunStateList
* AssessmentRunStateList `array`
  * items [AssessmentRunState](#assessmentrunstate)

### AssessmentTarget
* AssessmentTarget `object`: Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.
  * arn **required**
  * createdAt **required**
  * name **required**
  * resourceGroupArn
  * updatedAt **required**

### AssessmentTargetFilter
* AssessmentTargetFilter `object`: Used as the request parameter in the <a>ListAssessmentTargets</a> action.
  * assessmentTargetNamePattern

### AssessmentTargetList
* AssessmentTargetList `array`
  * items [AssessmentTarget](#assessmenttarget)

### AssessmentTargetName
* AssessmentTargetName `string`

### AssessmentTemplate
* AssessmentTemplate `object`: Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
  * arn **required**
  * assessmentRunCount **required**
  * assessmentTargetArn **required**
  * createdAt **required**
  * durationInSeconds **required**
  * lastAssessmentRunArn
  * name **required**
  * rulesPackageArns **required**
    * items [Arn](#arn)
  * userAttributesForFindings **required**
    * items [Attribute](#attribute)

### AssessmentTemplateFilter
* AssessmentTemplateFilter `object`: Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
  * durationRange
    * maxSeconds
    * minSeconds
  * namePattern
  * rulesPackageArns
    * items [Arn](#arn)

### AssessmentTemplateList
* AssessmentTemplateList `array`
  * items [AssessmentTemplate](#assessmenttemplate)

### AssessmentTemplateName
* AssessmentTemplateName `string`

### AssessmentTemplateRulesPackageArnList
* AssessmentTemplateRulesPackageArnList `array`
  * items [Arn](#arn)

### AssetAttributes
* AssetAttributes `object`: A collection of attributes of the host from which the finding is generated.
  * tags
    * items [Tag](#tag)
  * agentId
  * amiId
  * autoScalingGroup
  * hostname
  * ipv4Addresses
    * items [Ipv4Address](#ipv4address)
  * networkInterfaces
    * items [NetworkInterface](#networkinterface)
  * schemaVersion **required**

### AssetType
* AssetType `string` (values: ec2-instance)

### Attribute
* Attribute `object`: This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.
  * key **required**
  * value

### AttributeKey
* AttributeKey `string`

### AttributeList
* AttributeList `array`
  * items [Attribute](#attribute)

### AttributeValue
* AttributeValue `string`

### AutoScalingGroup
* AutoScalingGroup `string`

### AutoScalingGroupList
* AutoScalingGroupList `array`
  * items [AutoScalingGroup](#autoscalinggroup)

### BatchDescribeArnList
* BatchDescribeArnList `array`
  * items [Arn](#arn)

### BatchDescribeExclusionsArnList
* BatchDescribeExclusionsArnList `array`
  * items [Arn](#arn)

### Bool
* Bool `boolean`

### CreateAssessmentTargetRequest
* CreateAssessmentTargetRequest `object`
  * assessmentTargetName **required**
  * resourceGroupArn

### CreateAssessmentTargetResponse
* CreateAssessmentTargetResponse `object`
  * assessmentTargetArn **required**

### CreateAssessmentTemplateRequest
* CreateAssessmentTemplateRequest `object`
  * assessmentTargetArn **required**
  * assessmentTemplateName **required**
  * durationInSeconds **required**
  * rulesPackageArns **required**
    * items [Arn](#arn)
  * userAttributesForFindings
    * items [Attribute](#attribute)

### CreateAssessmentTemplateResponse
* CreateAssessmentTemplateResponse `object`
  * assessmentTemplateArn **required**

### CreateExclusionsPreviewRequest
* CreateExclusionsPreviewRequest `object`
  * assessmentTemplateArn **required**

### CreateExclusionsPreviewResponse
* CreateExclusionsPreviewResponse `object`
  * previewToken **required**

### CreateResourceGroupRequest
* CreateResourceGroupRequest `object`
  * resourceGroupTags **required**
    * items [ResourceGroupTag](#resourcegrouptag)

### CreateResourceGroupResponse
* CreateResourceGroupResponse `object`
  * resourceGroupArn **required**

### DeleteAssessmentRunRequest
* DeleteAssessmentRunRequest `object`
  * assessmentRunArn **required**

### DeleteAssessmentTargetRequest
* DeleteAssessmentTargetRequest `object`
  * assessmentTargetArn **required**

### DeleteAssessmentTemplateRequest
* DeleteAssessmentTemplateRequest `object`
  * assessmentTemplateArn **required**

### DescribeAssessmentRunsRequest
* DescribeAssessmentRunsRequest `object`
  * assessmentRunArns **required**
    * items [Arn](#arn)

### DescribeAssessmentRunsResponse
* DescribeAssessmentRunsResponse `object`
  * assessmentRuns **required**
    * items [AssessmentRun](#assessmentrun)
  * failedItems **required**

### DescribeAssessmentTargetsRequest
* DescribeAssessmentTargetsRequest `object`
  * assessmentTargetArns **required**
    * items [Arn](#arn)

### DescribeAssessmentTargetsResponse
* DescribeAssessmentTargetsResponse `object`
  * assessmentTargets **required**
    * items [AssessmentTarget](#assessmenttarget)
  * failedItems **required**

### DescribeAssessmentTemplatesRequest
* DescribeAssessmentTemplatesRequest `object`
  * assessmentTemplateArns **required** [BatchDescribeArnList](#batchdescribearnlist)

### DescribeAssessmentTemplatesResponse
* DescribeAssessmentTemplatesResponse `object`
  * assessmentTemplates **required**
    * items [AssessmentTemplate](#assessmenttemplate)
  * failedItems **required**

### DescribeCrossAccountAccessRoleResponse
* DescribeCrossAccountAccessRoleResponse `object`
  * registeredAt **required**
  * roleArn **required**
  * valid **required**

### DescribeExclusionsRequest
* DescribeExclusionsRequest `object`
  * exclusionArns **required**
    * items [Arn](#arn)
  * locale

### DescribeExclusionsResponse
* DescribeExclusionsResponse `object`
  * exclusions **required**
  * failedItems **required**

### DescribeFindingsRequest
* DescribeFindingsRequest `object`
  * findingArns **required**
    * items [Arn](#arn)
  * locale

### DescribeFindingsResponse
* DescribeFindingsResponse `object`
  * failedItems **required**
  * findings **required**
    * items [Finding](#finding)

### DescribeResourceGroupsRequest
* DescribeResourceGroupsRequest `object`
  * resourceGroupArns **required**
    * items [Arn](#arn)

### DescribeResourceGroupsResponse
* DescribeResourceGroupsResponse `object`
  * failedItems **required**
  * resourceGroups **required**
    * items [ResourceGroup](#resourcegroup)

### DescribeRulesPackagesRequest
* DescribeRulesPackagesRequest `object`
  * locale
  * rulesPackageArns **required**
    * items [Arn](#arn)

### DescribeRulesPackagesResponse
* DescribeRulesPackagesResponse `object`
  * failedItems **required**
  * rulesPackages **required**
    * items [RulesPackage](#rulespackage)

### DurationRange
* DurationRange `object`: This data type is used in the <a>AssessmentTemplateFilter</a> data type.
  * maxSeconds
  * minSeconds

### EventSubscription
* EventSubscription `object`: This data type is used in the <a>Subscription</a> data type.
  * event **required**
  * subscribedAt **required**

### EventSubscriptionList
* EventSubscriptionList `array`
  * items [EventSubscription](#eventsubscription)

### Exclusion
* Exclusion `object`: Contains information about what was excluded from an assessment run.
  * arn **required**
  * attributes
    * items [Attribute](#attribute)
  * description **required**
  * recommendation **required**
  * scopes **required**
    * items [Scope](#scope)
  * title **required**

### ExclusionMap
* ExclusionMap `object`

### ExclusionPreview
* ExclusionPreview `object`: Contains information about what is excluded from an assessment run given the current state of the assessment template.
  * attributes
    * items [Attribute](#attribute)
  * description **required**
  * recommendation **required**
  * scopes **required**
    * items [Scope](#scope)
  * title **required**

### ExclusionPreviewList
* ExclusionPreviewList `array`
  * items [ExclusionPreview](#exclusionpreview)

### FailedItemDetails
* FailedItemDetails `object`: Includes details about the failed items.
  * failureCode **required**
  * retryable **required**

### FailedItemErrorCode
* FailedItemErrorCode `string` (values: INVALID_ARN, DUPLICATE_ARN, ITEM_DOES_NOT_EXIST, ACCESS_DENIED, LIMIT_EXCEEDED, INTERNAL_ERROR)

### FailedItems
* FailedItems `object`

### FilterRulesPackageArnList
* FilterRulesPackageArnList `array`
  * items [Arn](#arn)

### Finding
* Finding `object`: Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
  * arn **required**
  * assetAttributes
    * tags
      * items [Tag](#tag)
    * agentId
    * amiId
    * autoScalingGroup
    * hostname
    * ipv4Addresses
      * items [Ipv4Address](#ipv4address)
    * networkInterfaces
      * items [NetworkInterface](#networkinterface)
    * schemaVersion **required**
  * assetType
  * attributes **required**
    * items [Attribute](#attribute)
  * confidence
  * createdAt **required**
  * description
  * id
  * indicatorOfCompromise
  * numericSeverity
  * recommendation
  * schemaVersion
  * service
  * serviceAttributes
    * assessmentRunArn
    * rulesPackageArn
    * schemaVersion **required**
  * severity
  * title
  * updatedAt **required**
  * userAttributes **required**
    * items [Attribute](#attribute)

### FindingCount
* FindingCount `integer`

### FindingFilter
* FindingFilter `object`: This data type is used as a request parameter in the <a>ListFindings</a> action.
  * agentIds
    * items [AgentId](#agentid)
  * attributes
    * items [Attribute](#attribute)
  * autoScalingGroups
    * items [AutoScalingGroup](#autoscalinggroup)
  * creationTimeRange
    * beginDate
    * endDate
  * ruleNames
    * items [RuleName](#rulename)
  * rulesPackageArns
    * items [Arn](#arn)
  * severities
    * items [Severity](#severity)
  * userAttributes
    * items [Attribute](#attribute)

### FindingId
* FindingId `string`

### FindingList
* FindingList `array`
  * items [Finding](#finding)

### GetAssessmentReportRequest
* GetAssessmentReportRequest `object`
  * assessmentRunArn **required**
  * reportFileFormat **required**
  * reportType **required**

### GetAssessmentReportResponse
* GetAssessmentReportResponse `object`
  * status **required**
  * url

### GetExclusionsPreviewRequest
* GetExclusionsPreviewRequest `object`
  * assessmentTemplateArn **required**
  * locale
  * maxResults
  * nextToken
  * previewToken **required**

### GetExclusionsPreviewResponse
* GetExclusionsPreviewResponse `object`
  * exclusionPreviews
    * items [ExclusionPreview](#exclusionpreview)
  * nextToken
  * previewStatus **required**

### GetTelemetryMetadataRequest
* GetTelemetryMetadataRequest `object`
  * assessmentRunArn **required**

### GetTelemetryMetadataResponse
* GetTelemetryMetadataResponse `object`
  * telemetryMetadata **required**
    * items [TelemetryMetadata](#telemetrymetadata)

### Hostname
* Hostname `string`

### InspectorEvent
* InspectorEvent `string` (values: ASSESSMENT_RUN_STARTED, ASSESSMENT_RUN_COMPLETED, ASSESSMENT_RUN_STATE_CHANGED, FINDING_REPORTED, OTHER)

### InspectorServiceAttributes
* InspectorServiceAttributes `object`: This data type is used in the <a>Finding</a> data type.
  * assessmentRunArn
  * rulesPackageArn
  * schemaVersion **required**

### InternalException


### InvalidCrossAccountRoleException


### InvalidInputException


### IocConfidence
* IocConfidence `integer`

### Ipv4Address
* Ipv4Address `string`

### Ipv4AddressList
* Ipv4AddressList `array`
  * items [Ipv4Address](#ipv4address)

### Ipv6Addresses
* Ipv6Addresses `array`
  * items [Text](#text)

### KernelVersion
* KernelVersion `string`

### LimitExceededException


### ListAssessmentRunAgentsRequest
* ListAssessmentRunAgentsRequest `object`
  * assessmentRunArn **required**
  * filter
    * agentHealthCodes **required**
      * items [AgentHealthCode](#agenthealthcode)
    * agentHealths **required**
      * items [AgentHealth](#agenthealth)
  * maxResults
  * nextToken

### ListAssessmentRunAgentsResponse
* ListAssessmentRunAgentsResponse `object`
  * assessmentRunAgents **required**
    * items [AssessmentRunAgent](#assessmentrunagent)
  * nextToken

### ListAssessmentRunsRequest
* ListAssessmentRunsRequest `object`
  * assessmentTemplateArns
    * items [Arn](#arn)
  * filter
    * completionTimeRange
      * beginDate
      * endDate
    * durationRange
      * maxSeconds
      * minSeconds
    * namePattern
    * rulesPackageArns
      * items [Arn](#arn)
    * startTimeRange
      * beginDate
      * endDate
    * stateChangeTimeRange
      * beginDate
      * endDate
    * states
      * items [AssessmentRunState](#assessmentrunstate)
  * maxResults
  * nextToken

### ListAssessmentRunsResponse
* ListAssessmentRunsResponse `object`
  * assessmentRunArns **required**
    * items [Arn](#arn)
  * nextToken

### ListAssessmentTargetsRequest
* ListAssessmentTargetsRequest `object`
  * filter
    * assessmentTargetNamePattern
  * maxResults
  * nextToken

### ListAssessmentTargetsResponse
* ListAssessmentTargetsResponse `object`
  * assessmentTargetArns **required**
    * items [Arn](#arn)
  * nextToken

### ListAssessmentTemplatesRequest
* ListAssessmentTemplatesRequest `object`
  * assessmentTargetArns
    * items [Arn](#arn)
  * filter
    * durationRange
      * maxSeconds
      * minSeconds
    * namePattern
    * rulesPackageArns
      * items [Arn](#arn)
  * maxResults
  * nextToken

### ListAssessmentTemplatesResponse
* ListAssessmentTemplatesResponse `object`
  * assessmentTemplateArns **required**
    * items [Arn](#arn)
  * nextToken

### ListEventSubscriptionsMaxResults
* ListEventSubscriptionsMaxResults `integer`

### ListEventSubscriptionsRequest
* ListEventSubscriptionsRequest `object`
  * maxResults
  * nextToken
  * resourceArn

### ListEventSubscriptionsResponse
* ListEventSubscriptionsResponse `object`
  * nextToken
  * subscriptions **required**
    * items [Subscription](#subscription)

### ListExclusionsRequest
* ListExclusionsRequest `object`
  * assessmentRunArn **required**
  * maxResults
  * nextToken

### ListExclusionsResponse
* ListExclusionsResponse `object`
  * exclusionArns **required**
    * items [Arn](#arn)
  * nextToken

### ListFindingsRequest
* ListFindingsRequest `object`
  * assessmentRunArns
    * items [Arn](#arn)
  * filter
    * agentIds
      * items [AgentId](#agentid)
    * attributes
      * items [Attribute](#attribute)
    * autoScalingGroups
      * items [AutoScalingGroup](#autoscalinggroup)
    * creationTimeRange
      * beginDate
      * endDate
    * ruleNames
      * items [RuleName](#rulename)
    * rulesPackageArns
      * items [Arn](#arn)
    * severities
      * items [Severity](#severity)
    * userAttributes
      * items [Attribute](#attribute)
  * maxResults
  * nextToken

### ListFindingsResponse
* ListFindingsResponse `object`
  * findingArns **required**
    * items [Arn](#arn)
  * nextToken

### ListMaxResults
* ListMaxResults `integer`

### ListParentArnList
* ListParentArnList `array`
  * items [Arn](#arn)

### ListReturnedArnList
* ListReturnedArnList `array`
  * items [Arn](#arn)

### ListRulesPackagesRequest
* ListRulesPackagesRequest `object`
  * maxResults
  * nextToken

### ListRulesPackagesResponse
* ListRulesPackagesResponse `object`
  * nextToken
  * rulesPackageArns **required**
    * items [Arn](#arn)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * resourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags **required**
    * items [Tag](#tag)

### Locale
* Locale `string` (values: EN_US)

### Long
* Long `integer`

### Message
* Message `string`

### MessageType
* MessageType `string`

### NamePattern
* NamePattern `string`

### NetworkInterface
* NetworkInterface `object`: Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.
  * ipv6Addresses
    * items [Text](#text)
  * networkInterfaceId
  * privateDnsName
  * privateIpAddress
  * privateIpAddresses
    * items [PrivateIp](#privateip)
  * publicDnsName
  * publicIp
  * securityGroups
    * items [SecurityGroup](#securitygroup)
  * subnetId
  * vpcId

### NetworkInterfaces
* NetworkInterfaces `array`
  * items [NetworkInterface](#networkinterface)

### NoSuchEntityException


### NumericSeverity
* NumericSeverity `number`

### NumericVersion
* NumericVersion `integer`

### OperatingSystem
* OperatingSystem `string`

### PaginationToken
* PaginationToken `string`

### PreviewAgentsMaxResults
* PreviewAgentsMaxResults `integer`

### PreviewAgentsRequest
* PreviewAgentsRequest `object`
  * maxResults
  * nextToken
  * previewAgentsArn **required**

### PreviewAgentsResponse
* PreviewAgentsResponse `object`
  * agentPreviews **required**
    * items [AgentPreview](#agentpreview)
  * nextToken

### PreviewGenerationInProgressException


### PreviewStatus
* PreviewStatus `string` (values: WORK_IN_PROGRESS, COMPLETED)

### PrivateIp
* PrivateIp `object`: Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.
  * privateDnsName
  * privateIpAddress

### PrivateIpAddresses
* PrivateIpAddresses `array`
  * items [PrivateIp](#privateip)

### ProviderName
* ProviderName `string`

### RegisterCrossAccountAccessRoleRequest
* RegisterCrossAccountAccessRoleRequest `object`
  * roleArn **required**

### RemoveAttributesFromFindingsRequest
* RemoveAttributesFromFindingsRequest `object`
  * attributeKeys **required**
    * items [AttributeKey](#attributekey)
  * findingArns **required**
    * items [Arn](#arn)

### RemoveAttributesFromFindingsResponse
* RemoveAttributesFromFindingsResponse `object`
  * failedItems **required**

### ReportFileFormat
* ReportFileFormat `string` (values: HTML, PDF)

### ReportStatus
* ReportStatus `string` (values: WORK_IN_PROGRESS, FAILED, COMPLETED)

### ReportType
* ReportType `string` (values: FINDING, FULL)

### ResourceGroup
* ResourceGroup `object`: Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.
  * tags **required**
    * items [ResourceGroupTag](#resourcegrouptag)
  * arn **required**
  * createdAt **required**

### ResourceGroupList
* ResourceGroupList `array`
  * items [ResourceGroup](#resourcegroup)

### ResourceGroupTag
* ResourceGroupTag `object`: This data type is used as one of the elements of the <a>ResourceGroup</a> data type.
  * key **required**
  * value

### ResourceGroupTags
* ResourceGroupTags `array`
  * items [ResourceGroupTag](#resourcegrouptag)

### RuleName
* RuleName `string`

### RuleNameList
* RuleNameList `array`
  * items [RuleName](#rulename)

### RulesPackage
* RulesPackage `object`: Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.
  * arn **required**
  * description
  * name **required**
  * provider **required**
  * version **required**

### RulesPackageList
* RulesPackageList `array`
  * items [RulesPackage](#rulespackage)

### RulesPackageName
* RulesPackageName `string`

### Scope
* Scope `object`: This data type contains key-value pairs that identify various Amazon resources.
  * key
  * value

### ScopeList
* ScopeList `array`
  * items [Scope](#scope)

### ScopeType
* ScopeType `string` (values: INSTANCE_ID, RULES_PACKAGE_ARN)

### ScopeValue
* ScopeValue `string`

### SecurityGroup
* SecurityGroup `object`: Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type.
  * groupId
  * groupName

### SecurityGroups
* SecurityGroups `array`
  * items [SecurityGroup](#securitygroup)

### ServiceName
* ServiceName `string`

### ServiceTemporarilyUnavailableException


### SetTagsForResourceRequest
* SetTagsForResourceRequest `object`
  * tags
    * items [Tag](#tag)
  * resourceArn **required**

### Severity
* Severity `string` (values: Low, Medium, High, Informational, Undefined)

### SeverityList
* SeverityList `array`
  * items [Severity](#severity)

### StartAssessmentRunRequest
* StartAssessmentRunRequest `object`
  * assessmentRunName
  * assessmentTemplateArn **required**

### StartAssessmentRunResponse
* StartAssessmentRunResponse `object`
  * assessmentRunArn **required**

### StopAction
* StopAction `string` (values: START_EVALUATION, SKIP_EVALUATION)

### StopAssessmentRunRequest
* StopAssessmentRunRequest `object`
  * assessmentRunArn **required**
  * stopAction

### SubscribeToEventRequest
* SubscribeToEventRequest `object`
  * event **required**
  * resourceArn **required**
  * topicArn **required**

### Subscription
* Subscription `object`: This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
  * eventSubscriptions **required**
    * items [EventSubscription](#eventsubscription)
  * resourceArn **required**
  * topicArn **required**

### SubscriptionList
* SubscriptionList `array`
  * items [Subscription](#subscription)

### Tag
* Tag `object`: A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.
  * key **required**
  * value

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TelemetryMetadata
* TelemetryMetadata `object`: The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
  * count **required**
  * dataSize
  * messageType **required**

### TelemetryMetadataList
* TelemetryMetadataList `array`
  * items [TelemetryMetadata](#telemetrymetadata)

### Text
* Text `string`

### Timestamp
* Timestamp `string`

### TimestampRange
* TimestampRange `object`: This data type is used in the <a>AssessmentRunFilter</a> data type.
  * beginDate
  * endDate

### UUID
* UUID `string`

### UnsubscribeFromEventRequest
* UnsubscribeFromEventRequest `object`
  * event **required**
  * resourceArn **required**
  * topicArn **required**

### UnsupportedFeatureException


### UpdateAssessmentTargetRequest
* UpdateAssessmentTargetRequest `object`
  * assessmentTargetArn **required**
  * assessmentTargetName **required**
  * resourceGroupArn

### Url
* Url `string`

### UserAttributeKeyList
* UserAttributeKeyList `array`
  * items [AttributeKey](#attributekey)

### UserAttributeList
* UserAttributeList `array`
  * items [Attribute](#attribute)

### Version
* Version `string`


